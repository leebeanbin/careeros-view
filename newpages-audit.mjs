import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const OUT = '/private/tmp/claude-501/-Users-leebeanbin-Downloads-careeros-view/5c7995d1-14d9-4da5-9f18-0ab5ca36795c/scratchpad/newpages';
mkdirSync(OUT, { recursive: true });

const BASE = 'http://localhost:3000';
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

const pages = [
  'pricing','customers','about','integrations','security','enterprise',
  'developers','method','careers','now','contact','changelog',
  'login','signup','status','download','mobile','switch','startups','community'
];

for (const slug of pages) {
  await page.goto(`${BASE}/${slug}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${OUT}/${slug}.png`, fullPage: false });
  console.log(`✓ ${slug}`);
}

await browser.close();
console.log('Done →', OUT);
