const { test, expect } = require('@playwright/test');

//used with aria label, type, role
test.skip('Locator Example-getByRole', async ({ page }) => {

   
await page.goto("https:www.amazon.com")

await page.getByRole("link",{name:"Hello, sign in Account & Lists"}).click()

await page.getByRole("textbox",{name:"Email or mobile phone number"}).fill('abc@gmail.com')

await page.getByRole("button", {name:"Continue"}).click()

})


test.only('Locator Example-', async ({ page }) => {

    await page.goto("https:www.amazon.com")
    
    // await page.getByRole("button",{name:"Open Menu"}).click()
    
    await page.getByPlaceholder("Search Amazon").fill('Laptop')

    await page.locator('id=nav-search-submit-button').click()
           
    })