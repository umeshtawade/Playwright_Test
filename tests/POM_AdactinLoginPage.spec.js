const { test, expect } = require('@playwright/test')

const { LoginPage } = require('../POM_Pages/LoginPage')

test.beforeAll('Before All', async ({ browser }) => {
    
    console.log('Before all is running')
})

test('Login Test', async ({ page }) => {
    const name = "misr82hn02"
    const pwd = "misr82hn02"

    const lp = new LoginPage(page)

    await lp.navigateTo();
    await lp.login(name, pwd)

})

test.afterAll('After All', async () => {
    console.log('After all is running')
    
})



