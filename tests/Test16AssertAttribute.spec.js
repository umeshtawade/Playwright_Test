const { test, expect } = require('@playwright/test');


test.skip('Assertion', async ({ page }) => {

   
await page.goto("https:www.amazon.com")

await page.getByRole("link",{name:"Hello, sign in Account & Lists"}).click()

await expect (page.locator('//label[@class="a-form-label"]')).toHaveText('Email or mobile phone number')

await expect (page.locator('//label[@class="a-form-label"]')).toContainText('phone number')

await expect (page.locator('//label[@class="a-form-label"]')).not.toContainText('Laptop')

await page.getByRole("textbox",{name:"Email or mobile phone number"}).fill('abc@gmail.com')

await page.getByRole("button", {name:"Continue"}).click()

})

test.skip('AssertionAttribute', async ({ page }) => {

    await page.goto("https://adactinhotelapp.com")

    await expect (page.locator('id=username')).toHaveAttribute('class','login_input')

    await expect (page.locator('id=username')).toHaveAttribute('class',/input/)             //partial value of attribute can be verified by using /partiaValue/

    await expect (page.locator('id=username')).toHaveAttribute('value','')

    await expect (page.locator('id=username')).toHaveClass('login_input')

    await expect (page.locator('id=username')).toHaveAttribute('class','login_input')

   })

test.only('SoftAssertionAttribute', async ({ page }) => {

    await page.goto("https://adactinhotelapp.com")

    await expect.soft(page.locator('#username')).toHaveAttribute('class','login_input1')

    await expect (page.locator('id=username')).toHaveAttribute('class',/input/)             //partial value of attribute can be verified by using /partiaValue/

    await expect (page.locator('id=username')).toHaveAttribute('value','')

    await expect (page.locator('id=username')).toHaveClass('login_input')

    await expect (page.locator('id=username')).toHaveAttribute('class','login_input')
 
})


