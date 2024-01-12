const { test, expect } = require('@playwright/test');

test('IFrame', async ({ page }) => {

  await page.goto("https://the-internet.herokuapp.com/nested_frames");
               
  const parentFrame = await page.frameLocator("//frame[@name='frame-top']")  ;                  //switching to parent Iframe by name

  const leftFrame = await parentFrame.frameLocator("frame[name='frame-left']").locator('body');
  
  console.log(await leftFrame.textContent())

  const middleFrame = await parentFrame.frameLocator("frame[name='frame-middle']").locator('body')  ;
  const rightFrame = await parentFrame.frameLocator("frame[name='frame-right']").locator('body')  ;

  console.log(await middleFrame.textContent())
  console.log(await rightFrame.textContent()) 
    
})

test('Frame example', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/nested_frames")
    const parentFrame = await page.frameLocator("//frame[@name='frame-top']");
 
    const leftFrame = await parentFrame.frameLocator("frame[name='frame-left']").locator('body');
    const ltext= await leftFrame.textContent()
    console.log(ltext);
 
    const middleFrame = await parentFrame.frameLocator("frame[name='frame-middle']").locator('body');
    const mtext= await middleFrame.textContent()
    console.log(mtext);
 
    const rightFrame = await parentFrame.frameLocator("frame[name='frame-right']").locator('body');
    const rtext= await rightFrame.textContent()
    console.log(rtext);
 
} 
);








