import { test } from '@playwright/test';
import { parse } from 'csv-parse/sync';

import fs from 'fs';
import path from 'path';

//const credrecords = parse (fs.readFileSync (path.join(__dirname, 'loginDetail.csv'))

const credrecords = parse (fs.readFileSync (path.join(__dirname, 'loginDetail.csv')),
    {
        columns: true,
        skip_empty_lines: true
    }
)

for (const cred of credrecords) {
    test(`testing with ${cred.login}`, async ({ page }) => {

        await page.goto("https://adactinhotelapp.com");          //await only used with fun
        //await expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");

        await page.locator('id=username').type(cred.login); //tagname.attributeName=attributeValue
        await page.locator('id=password').fill(cred.password);
        await page.locator('id=login').click();

        //await expect(page).toHaveTitle('Adactin.com - Search Hotel');
    
        const loc=  await page.locator('id=username_show');
        await expect(loc).toHaveAttribute('value', `Hello ${cred.login}!`);
    
    }
    )
}

