const {test, expect} = require('@playwright/test'); 

test('AlertPopup @tag', async ({page}) => 
{

  await page.goto("http://autopract.com/selenium/alert5/");

  
  page.on ('Alert', async dialog =>
  {
    expect(dialog.type()).toContain('Alert')
    expect (dialog.message()).toContain('This is an Alert Box.')
    await dialog.accept()
  })
  await page.locator('id=alert-button').click()
  await expect(page.locator('id=msg')).toHaveText('You clicked on Ok button.')

}
)

test('Alert Confirm', async ({page}) => 
  {

  await page.goto("http://autopract.com/selenium/alert5/");
  
  page.on ('dialog', async dialog =>
  {
    expect(dialog.type()).toContain('confirm')
    expect (dialog.message()).toContain('Do you want to save changes?')
    await dialog.accept();
    })

  await page.locator('id=confirm-button').click()
  await expect(page.locator('id=msg')).toHaveText('Data saved successfully!')


  await page.locator('id=confirm-button').click()

  
  

}
)

test('Alert Confirm2', async ({page}) => 
  {

  await page.goto("http://autopract.com/selenium/alert5/");
  

  
  page.on ('dialog', async dialog =>
  {
    expect(dialog.type()).toContain('confirm')
    expect (dialog.message()).toContain('Do you want to save changes?')
    await dialog.dismiss();
    })

  
  await expect(page.locator('id=msg')).toHaveText('Save Canceled!')
  

}
)


test('Alert dialog', async ({page}) => 

  {

  await page.goto("http://autopract.com/selenium/alert5/");
  
  page.on ('dialog', async dialog =>
  {
    expect(dialog.type()).toContain('prompt')
    expect (dialog.message()).toContain('Please enter any number')
    await dialog.accept('11');
    })

  await page.locator('id=prompt-button').click()
  await expect(page.locator('id=msg')).toHaveText('You have entered number: 11')


  

  })





