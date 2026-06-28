import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const OUT = '/private/tmp/claude-501/-Users-leebeanbin-Downloads-careeros-view/5c7995d1-14d9-4da5-9f18-0ab5ca36795c/scratchpad/shots2';
mkdirSync(OUT, { recursive: true });

const BASE = 'http://localhost:3000';
const VIEWPORT = { width: 1440, height: 900 };

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize(VIEWPORT);

async function shot(name) {
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: false });
  console.log(`✓ ${name}`);
}

async function fullShot(name) {
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: true });
  console.log(`✓ ${name} (full-page)`);
}

// ── Homepage ──────────────────────────────────────────────────────────────────
await page.goto(BASE, { waitUntil: 'networkidle' });

// Nav dropdowns
await page.evaluate(() => window.scrollTo(0, 0));
await page.hover('text=Product');
await page.waitForTimeout(400);
await shot('NAV-product-dropdown');

await page.hover('text=Resources');
await page.waitForTimeout(400);
await shot('NAV-resources-dropdown');

// Move away to close
await page.mouse.move(720, 500);
await page.waitForTimeout(300);

// Full-page screenshot of homepage
await fullShot('HOME-fullpage');

// Measure actual section positions by inspecting children of main
const sections = await page.evaluate(() => {
  const main = document.querySelector('main > div');
  if (!main) return [];
  const results = [];
  const names = ['hero','logobar','new-species','features','intake','plan','build','diffs','monitor','changelog','testimonials','cta','footer'];
  Array.from(main.children).forEach((el, i) => {
    const rect = el.getBoundingClientRect();
    const y = Math.round(rect.top + window.scrollY);
    const h = Math.round(rect.height);
    results.push({ name: names[i] || `section-${i}`, y, h });
  });
  return results;
});

console.log('\n=== Homepage section positions ===');
sections.forEach(s => console.log(`  ${s.name.padEnd(14)} y=${String(s.y).padStart(6)}  h=${s.h}`));

// Screenshot each section
for (const s of sections) {
  const scrollTo = Math.max(0, s.y - 80);
  await page.evaluate((y) => window.scrollTo(0, y), scrollTo);
  await shot(`HOME-${s.name}`);
}

// ── Sub-pages ────────────────────────────────────────────────────────────────
const subpages = ['intake', 'plan', 'build', 'diffs', 'monitor'];

for (const slug of subpages) {
  await page.goto(`${BASE}/${slug}`, { waitUntil: 'networkidle' });
  await shot(`SUB-${slug}-hero`);

  // Full-page
  await fullShot(`SUB-${slug}-fullpage`);

  // Section 1 (first section below hero)
  const firstY = await page.evaluate(() => {
    const sections = document.querySelectorAll('section');
    const s = sections[0];
    return s ? Math.round(s.getBoundingClientRect().top + window.scrollY) : window.innerHeight;
  });
  await page.evaluate((y) => window.scrollTo(0, y - 60), firstY);
  await shot(`SUB-${slug}-section1`);

  // Section 2
  const secondY = await page.evaluate(() => {
    const sections = document.querySelectorAll('section');
    const s = sections[1];
    return s ? Math.round(s.getBoundingClientRect().top + window.scrollY) : window.innerHeight * 2;
  });
  await page.evaluate((y) => window.scrollTo(0, y - 60), secondY);
  await shot(`SUB-${slug}-section2`);

  console.log(`  ↳ ${slug} done`);
}

await browser.close();
console.log('\nAll screenshots saved to:', OUT);
