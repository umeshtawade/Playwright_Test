const {test, expect, chromium} = require('@playwright/test'); 


test.skip('NewPage', async ({}) => 
{

   const browser =  await chromium.launch()

   const context = await browser.newContext()

   const page1  = await context.newPage()

   await page1.goto('https://www.google.com/')

   //test.setTimeout(3000)

   const page2 = await context.newPage()

   await page2.goto('https://www.amazon.in/')

   const allpages = context.pages()
   console.log("No of pages :"+ allpages.length)

  


})  

test.only ('Multiple window', async({}) =>
{
   const browser =  await chromium.launch()

   const context = await browser.newContext()

   const page1  = await context.newPage()

   await page1.goto('https://demo.automationtesting.in/Windows.html')

   //const newPage =await page1.locator('(//*[contains(@class,"btn btn-info")])[1]').click()

   await page1.locator('(//*[contains(@class,"btn btn-info")])[1]').click()


   const [page2] = await Promise.all([context.waitForEvent('page')])       // For new page opened

   await expect (page2).toHaveTitle("Selenium")
   
   await expect (page1).toHaveTitle("Frames & windows")
   

   //await page2.getByText('Selenium WebDriver').nth(2).click()              //To click on nth element 

   await page2.locator('//*[@class="selenium-button selenium-webdriver text-uppercase fw-bold"]').click()

   await expect (page2).toHaveTitle("WebDriver | Selenium")

   

   const allpages = await context.pages()
   console.log("No of pages :"+ allpages.length)

   












})