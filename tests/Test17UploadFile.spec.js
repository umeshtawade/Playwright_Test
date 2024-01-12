const { test, expect } = require('@playwright/test');


test.skip('UploadFile', async ({ page }) => {

   
await page.goto("http://autopract.com/selenium/upload1/")

await page.locator('//*[@type="file"]').setInputFiles('tests/doc1.txt')

await page.locator('//*[@type="file"]').setInputFiles('tests/doc1.txt','tests/doc2.txt')

await page.setInputFiles("//*[@type='file']",'tests/doc1.txt')

await page.locator('//*[@type="submit"]').click()

})





test.only('UploadFile2', async ({ page }) => {

   
    await page.goto("http://autopract.com/selenium/upload2/")

    const [fileChoser]= await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('id=pickfiles').click()
    ])
    
    await fileChoser.setFiles('tests/doc1.txt')

    await fileChoser.setFiles({name:'file.txt',mimeType:'text/plain', buffer:Buffer.from('Sample Text')})

    await page.locator('id=uploadfiles').click()
    
        
    })



