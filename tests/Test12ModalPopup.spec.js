const { test, expect } = require('@playwright/test');

test('ModalPopup', async ({ page }) => {

  await page.goto("http://autopract.com/selenium/popup/");

  await page.locator('//a[@class="open-button"]').click()


  console.log(await page.locator('//*[@class="popup-content"]').textContent())

  await page.locator('//*[@class="close-button"]').click()





}
)







