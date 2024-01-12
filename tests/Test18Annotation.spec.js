//const { test, expect } = require('@playwright/test');

import {test,expect} from '@playwright/test';


//beforeAll
//beforeEach
//afterEach
//afterAll
test.beforeEach('Hooks', async ({ page }) => {

    await page.goto("https://adactinhotelapp.com")

})

test('Login Adactin', async ({ page }) => {

    await page.locator('id=username').type('misr82hn02'); //tagname.attributeName=attributeValue
    await page.locator('id=password').fill('misr82hn02');
    await page.locator('id=login').click();

})

test('Select Hotel', async ({ page }) => {

    await page.locator('id=username').type('misr82hn02'); //tagname.attributeName=attributeValue
    await page.locator('id=password').fill('misr82hn02');
    await page.locator('id=login').click();

    await page.locator('id=location').selectOption('Sydney')                 //selectt by value attribute
    await page.locator('id=hotels').selectOption({ index: 1 })                  //selectt by index attribute
    await page.locator('id=room_type').selectOption({ label: 'Standard' })      //selectt by label(Values shown in dropdown directly)
    await page.locator('id=room_nos').selectOption('1')
    await page.locator('id=Submit').click()

})

test.afterEach('After Each Method', async ({ page }, testInfo) => {

    console.log(`Finished ${testInfo.title}`);
    console.log(`Status ${testInfo.status}`);

    console.log(testInfo.title);
    console.log(testInfo.status);

})   

test.beforeAll('Before All', async ({ browser }) => {

    console.log('Before All is running');

    const context = await browser.newContext()
    const page = await context.newPage();


})

test.afterAll('After All', async ({ browser }) => {

    console.log('After All is running');

    await browser.close()


})


