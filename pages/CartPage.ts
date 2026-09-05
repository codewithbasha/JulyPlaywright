import { Locator, Page } from '@playwright/test'

export class CartPage {

    private page: Page;
    checkoutBtn : Locator


    constructor(page: Page) {
        this.page = page
        this.checkoutBtn = this.page.locator('#checkout')
    }

    async checkout(){
        await this.checkoutBtn.click()
    }
}