import { Locator, Page} from '@playwright/test'

export class CheckoutPage {

    private page: Page;
    firstname : Locator;
    lastname : Locator;
    postalcode : Locator;
    continueBtn : Locator;
    finishBtn : Locator
    header : Locator

    constructor(page: Page) {
        this.page = page
        this.firstname = this.page.locator('#first-name')
        this.lastname = this.page.locator('#last-name')
        this.postalcode = this.page.locator('#postal-code')
        this.continueBtn = this.page.locator('#continue')
        this.finishBtn = this.page.getByRole('button', {name : 'Finish'})
        this.header = this.page.locator('.complete-header')
    }

    async fillInformation(fname : string, lname : string, postcode : string){
        await this.firstname.fill(fname)
        await this.lastname.fill(lname)
        await this.postalcode.fill(postcode)
        await this.continueBtn.click()
    }

    async checkoutStepTwo(){
        await this.finishBtn.click()
    }

    async confirmMessage(){
        const confirmationMessage = await this.header.textContent()
        return confirmationMessage;
    }
}