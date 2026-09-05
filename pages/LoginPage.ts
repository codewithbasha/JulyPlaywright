import {Locator, Page} from '@playwright/test'

export class LoginPage{

    private page : Page;
    username : Locator;
    password : Locator;
    loginBtn : Locator;
  

    constructor(page : Page) {
        this.page = page
        this.username = page.locator('#user-name')
        this.password = page.locator('#password')
        this.loginBtn = page.locator('#login-button')
    }

    async goto(url: string){
        await this.page.goto(url)
    }

    async login(user : string, pass : string){
        await this.username.fill(user)
        await this.password.fill(pass)
        await this.loginBtn.click()
    }

}