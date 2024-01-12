const {test, expect}=require('@playwright/test');   //import @playwright/test folder

test('Adactin Combobox', async({page})=>      //page fixture
        {
            //Navigate to page
            await page.goto("https://adactinhotelapp.com")          //await only used with fun
            await expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");
              
            //Login
            await page.locator('id=username').type('TestName790'); //tagname.attributeName=attributeValue
            await page.locator('id=password').fill('TestName790');
            await page.locator('id=login').click();
          
            const loc=  await page.locator('id=username_show');
            await expect(loc).toHaveAttribute('value', 'Hello TestName790!');
            
            //Select hotel 
            await page.locator('id=location').selectOption('Sydney')                 //selectt by value attribute
            await page.locator('id=hotels').selectOption({index:1})                  //selectt by index attribute
            await page.locator('id=room_type').selectOption({label:'Standard'})      //selectt by label(Values shown in dropdown directly)
            await page.locator('id=room_nos').selectOption('1')
            await page.locator('id=Submit').click()


            //await  page.locator('id=radiobutton_0').click()                       //radio button click
            await page.click("id=radiobutton_0")                                    //radio button click
            //await page.check("id=radiobutton_0")                                    //radio button click


            await expect (page.locator('id=radiobutton_0')).toBeChecked()
            expect (await page.locator('id=radiobutton_0').isChecked()).toBeTruthy()    //to check if value is True
            //expect (await page.locator('id=radiobutton_0').isChecked()).toBeTruthy()    //to check if value is false

            await page.locator('id=continue').click()

            
            await expect(page).toHaveTitle("Adactin.com - Book A Hotel")
            await page.locator('id=first_name').fill('Test');
            await page.locator('id=last_name').fill('Name790');
            await page.locator('id=address').fill('India');
            await page.locator('id=cc_num').fill('1234567891234567')
            await page.locator('id=cc_type').selectOption({index:2})
            await page.locator('id=cc_exp_month').selectOption('10')
            await page.locator('id=cc_exp_year').selectOption({label:'2030'})
            await page.locator('id=cc_cvv').fill('1234')
            await page.locator('id=book_now').click()

            //create Order Id
            const order = await page.locator('id=order_no').getAttribute('value')
            console.log ("Order id is "+ order)

            await page.locator('id=my_itinerary').click()
            await page.locator('(//input[@type="checkbox"])[2]').click()        //checkbox

            await page.locator('(//input[@type="checkbox"])[3]').check()

            expect(await page.locator("(//input[@type='checkbox'])[3]")).isChecked().toBeTruthy()


            





            
























         
           
        }
    )
