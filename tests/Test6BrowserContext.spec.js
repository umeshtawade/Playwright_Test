const{test, expect}= require('@playwright/test');
const { TIMEOUT } = require('dns');

test('Browser Incognito Mode',  async({browser}) =>
{

    const context = await browser.newContext();     // Open browser in Incognito mode 
    const page = await context.newPage();           // Open page in browser

    await page.goto('http://google.com', {TIMEOUT:3000})
    
    await page.waitForTimeout(3000)

    await expect(page).toHaveTitle("Google")

    await context.close()

    

    
}
)


