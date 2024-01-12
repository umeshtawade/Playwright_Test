const { test, expect } = require('@playwright/test');

test('ModalPopupClyclos', async ({ page }) => {

  await page.goto("https://demo.cyclos.org/ui/dashboard");

  await page.locator('id=login-link').click()

  await page.locator('//input[@autocomplete="username"]').fill('demo')
  await page.locator('//input[@autocomplete="password"]').fill('1234')
  await page.locator('//*[text()="Submit"]').click()

  await page.locator('//*[text()=" Pay user "]').click()

  await page.locator('//*[@class="btn btn-icon ml-2"]').click()

  console.log(await page.locator('//*[text()=" Active Walking "]').textContent())

  await page.locator('//*[text()=" Active Walking "]').click()

 
}
)







