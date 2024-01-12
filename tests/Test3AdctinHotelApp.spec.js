const {test, expect}=require('@playwright/test');   //import @playwright/test folder

test('Adactin Login @reg', async({page})=>      //page fixture
        {
            await page.goto("https://adactinhotelapp.com")          //await only used with fun
            await expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");
                                   
            await page.locator('id=username').type('TestName790'); //tagname.attributeName=attributeValue
            await page.locator('id=password').fill('TestName790');
            await page.locator('id=login').click();
          
            const loc=  await page.locator('id=username_show');
            await expect(loc).toHaveAttribute('value', 'Hello TestName790!');
         
           
        }
    )
