import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://adactinhotelapp.com/');
  await page.locator('#username').click();
  await page.locator('#username').fill('TestName790');
  await page.locator('#password').click();
  await page.locator('#password').fill('TestName790');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#username_show')).toHaveValue('Hello TestName790!');
  await expect(page.locator('body')).toContainText('Search Hotel');
  await expect(page.locator('#username_show')).toBeVisible();
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.locator('#location_span')).toContainText('Please Select a Location');
});