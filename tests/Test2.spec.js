const {test, expect}=require('@playwright/test');   //import @playwright/test folder

test('Adactin Login Error message', async({page})=>      //page fixture
        {
            await page.goto("https://adactinhotelapp.com")          //await only used with fun
            await expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");
            
            //await page.locator('//*[@id="username"]').type('TestName790');
            //await page.locator('//*[@id="password"]').type('TestName790');
            //await page.locator('//*[@id="login"]').click();   
            
            await page.locator('id=username').type('TestName790');          //tagname.attributeName=attributeValue
            await page.locator('id=password').fill('TestName7901');
            await page.locator('id=login').click();

            const errormsg= await (await page.locator('//*[@class="auth_error"]//b').textContent()).trim();
            expect(errormsg).toBe('Invalid Login details or Your Password might have expired. Click here to reset your password');
        }
    )

/*test('Verify Login', async({page})=> 
        {
            

        }
    )
*/


