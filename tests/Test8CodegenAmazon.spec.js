import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByText('Mobiles').click();
  await page.getByLabel('ce3 lite').click();
  await page1.goto('https://www.amazon.in/TheGiftKart-OnePlus-Protective-Protection-Silicon/dp/B0C1C7Z496/ref=pd_day0fbt_d_sccl_1/259-9150928-8332339?pd_rd_w=AyC4p&content-id=amzn1.sym.9fcd4617-323e-42b7-9728-3395e1b2fea0&pf_rd_p=9fcd4617-323e-42b7-9728-3395e1b2fea0&pf_rd_r=47RGVA0W7SEWCHCANNZN&pd_rd_wg=EpIEr&pd_rd_r=fb46191b-90ad-4ca3-a87d-1aa9613b9139&pd_rd_i=B0C1C7Z496&psc=1');
  await expect(page1.getByText('229', { exact: true })).toBeVisible();
});