import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const OUT = '/private/tmp/claude-501/-Users-leebeanbin-Downloads-careeros-view/5c7995d1-14d9-4da5-9f18-0ab5ca36795c/scratchpad/appui';
mkdirSync(OUT, { recursive: true });

const BASE = 'http://localhost:3000';
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

const routes = [
  ['active',   '/leebeanbin/team/JAK/active'],
  ['backlog',  '/leebeanbin/team/JAK/backlog'],
  ['myissues', '/leebeanbin/my-issues/assigned'],
  ['inbox',    '/leebeanbin/inbox'],
  ['projects', '/leebeanbin/projects'],
  ['cycles',   '/leebeanbin/team/JAK/cycles'],
  ['members',  '/leebeanbin/team/JAK/members'],
  ['roadmap',  '/leebeanbin/roadmap'],
  ['settings', '/leebeanbin/settings'],
  ['issue',    '/leebeanbin/issue/JAK-2088'],
];

for (const [name, path] of routes) {
  await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${OUT}/${name}.png` });
  console.log(`✓ ${name}`);
}

await browser.close();
console.log('Done:', OUT);
