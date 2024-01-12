const {test, expect} = require('@playwright/test'); 

test('BrowserNewWindow', async ({page}) => 
{

  await page.goto("http://autopract.com/selenium/popup/");


  // syntax for new window in broswer
  const [newPopup] = await Promise.all([
    page.waitForEvent('popup'),
    await page.locator('//*[@target="popup"]').click()])  // xpath of the locator if clicked new window will open 

    

      await newPopup.waitForLoadState();

    console.log(await newPopup.title())

    await newPopup.locator('//*[text()="About Us"]').click()
    await expect(newPopup).toHaveTitle('About Us')

  
  
  



  
 
}
)







