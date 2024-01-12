const { test, expect } = require('@playwright/test');

const {LoginPage}= require ('../POM_Pages/LoginPage')
const {SearchHotelPage}= require ('../POM_Pages/SearchHotelPage')

test.describe.configure({ mode: 'serial' })

let page;

test.beforeAll('Before All', async ({browser}) => {
    page = await browser.newPage();
    console.log('Before all is running')
})

test('Open URL', async ({ }) => {
    const lp = new LoginPage(page)

    await lp.navigateTo();
        
})
 
test('Login Test', async ({ }) => {
    const name = "misr82hn02"
    const pwd = "misr82hn02"

    const lt = new LoginPage(page)

    await lt.login(name, pwd)
    
})

test('Search Hotel', async ({ }) => {
    
    const sh = new SearchHotelPage(page)
    await sh.searchHotel('Sydney',{ index: 1 }, {label: 'Standard'},'2')

})
  
test.afterAll('After All', async () => {
    console.log('After all is running')

    
})