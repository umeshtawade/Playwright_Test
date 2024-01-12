const {test, expect}=require('@playwright/test');   //import @playwright/test folder

test('Google title assertion', async({page})=>      //page fixture
        {
            await page.goto("http://google.com")          //await only used with fun
            await expect(page).toHaveTitle("Google");


        }
    )