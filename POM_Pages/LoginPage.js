class LoginPage
{
    constructor(page)
    {
        this.page=page;
        this.userName= page.locator('id=username')
        this.password= page.locator('id=password')
        this.loginBtn= page.locator('id=login')         
             
    }

    async navigateTo()
    {
        await this.page.goto("https://adactinhotelapp.com")

    }

    async login (uName, pass)
    {
        await this.userName.fill(uName)
        await this.password.fill(pass)
        await this.loginBtn.click()
    }
}

module.exports={LoginPage}