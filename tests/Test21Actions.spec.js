const { test, expect, chromium} = require('@playwright/test');

test('Keyboard Actions', async({page})=>
{

await page.goto('https://www.google.com');

const search= await page.locator('id=APjFqb');

await search.type('selenium');

await search.press('Control+KeyA+Backspace')

await search.type('Playwright')

await search.press('Enter')

})


test('Mouse Actions', async({page})=>
{

await page.goto('https://www.amazon.com');

await page.locator('//*[@class="nav-line-2 "]').hover()
await page.locator('//*[@class="nav-line-2 "]').dblclick()

await page.goto('https://www.amazon.com');
await page.locator('//*[@class="nav-line-2 "]').click({button:'right'})

await page.locator('//*[@class="nav-line-2 "]').click({modifiers:['Shift']})

await page.locator('//*[@class="nav-line-2 "]').click({position:{x: 37, y: 45}})



})


