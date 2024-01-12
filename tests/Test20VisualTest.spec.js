const { test, expect, chromium } = require('@playwright/test');

test('Visual Test', async ({ browser }) => {

    const context = await browser.newContext()
    const page = await context.newPage();

    // await page.goto("https://adactinhotelapp.com")   
    
    // await expect(await page.screenshot()).toMatchSnapshot('loginPage.png')

    await page.goto("https://www.w3resource.com.cach3.com/c-programming-exercises.html") 
    await expect(await page.screenshot()).toMatchSnapshot('w3resource.png')

})


