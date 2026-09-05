import { test, expect } from '@playwright/test';

test('test with mobile viewport', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await
  await page.waitForTimeout(5000)
  // ... your test logic for a mobile viewport
});