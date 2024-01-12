const { test, expect } = require('@playwright/test');

test('IFrame', async ({page}) => {

  await page.goto("http://autopract.com/selenium/iframe1/");

  
  //await page.screenshot({path: 'screenshot/visibleWindow1.png'})                  //Take screenshot at particular step

  //await page.screenshot({path: 'screenshot/visibleWindow1.png', fullPage:true})     //Take screenshot of fullpage at particular step

  //await page.screenshot({path: 'screenshot/visibleWindow1'+Date.now()+'.png'})      //Take screenshot of particular step with Date & time

  //await page.screenshot({path: 'screenshot/visibleWindow'+Date.now()+'.png/', fullPage:true})

  //const myFrame = page.frame("testframe")                   //switching to Iframe by name
  //const myFrame = page.frame({name:"testframe"})  
  //const myFrame = page.frame({url:"http://autopract.com/selenium/form1/"})      ////swiching Iframe with url
  
  const myFrame = page.frame({url:/form1/})                   //swiching Iframe with parial url

  await myFrame.locator('//*[@class="form-control"]').nth(0).fill('UserTest')

  await myFrame.locator('(//*[@class="form-control"])[1]').screenshot({path: 'screenshot/Locator.png'})       //Take screenshot of particular locator
  
  await myFrame.fill("(//*[@class='form-control'])[2]",'UserTest@gmail.com')

  

  
}
)







