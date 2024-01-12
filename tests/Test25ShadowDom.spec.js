const { test, expect } = require('@playwright/test')



test('ShadowDom Example', async ({ page }) => {

    await page.goto("http://autopract.com/selenium/shadowdom1/")

// Using X path we will only get light element but not shadow element
    console.log(await page.locator('//*[@class="target1 button"]').textContent())

// Using CSS selector shadow elements can be handled   

    //console.log(await page.locator('div.target1').textContent())

    console.log(await page.locator('div.target2').textContent())
    console.log(await page.locator('div.target3').textContent())

    console.log(await page.locator('div.target1').first().textContent())        //nth(0) can be used indtead of first()

    console.log(await page.locator('div.target1').nth(1).textContent())

    console.log(await page.locator('div.target1').last().textContent())


    console.log(await page.locator(':light(div.target1)').textContent())


})