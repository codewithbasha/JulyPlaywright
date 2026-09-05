import { Locator, Page } from '@playwright/test'

export class InventoryPage {

    private page: Page;
    backpacka2cBtn: Locator;
    cartIcon: Locator;


    constructor(page: Page) {
        this.page = page
        this.backpacka2cBtn = this.page.locator('#add-to-cart-sauce-labs-backpack')
        this.cartIcon = this.page.locator('.shopping_cart_link')

    }

    async addProduct() {
        await this.page.waitForSelector('#add-to-cart-sauce-labs-backpack', { state: 'visible' });
        await this.backpacka2cBtn.click()
    }

    async gotoCart() {

        await this.cartIcon.click()
    }
}