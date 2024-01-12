const { test, expect} = require('@playwright/test');

const credential = [

    {login: 'ArunGurusamy', password:'30529S'},
    {login: 'amarjasonawane', password:'Amarja@123'},
    {login: 'misr82hn02', password:'misr82hn02'},
]

    for (const loginid of credential)
{test (`testing with ${loginid.login}`, async({page})=>
    {

    await page.goto("https://adactinhotelapp.com")          //await only used with fun
    //await expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");
                           
    await page.locator('id=username').type(loginid.login); //tagname.attributeName=attributeValue
    await page.locator('id=password').fill(loginid.password);
    await page.locator('id=login').click();

    await expect(page).toHaveTitle('Adactin.com - Search Hotel');



    }
    )
}