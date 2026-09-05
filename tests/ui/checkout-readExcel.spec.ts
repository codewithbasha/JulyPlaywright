import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import { InventoryPage } from '../../pages/InventoryPage'
import { CartPage } from '../../pages/CartPage'
import { CheckoutPage } from '../../pages/CheckoutPage'

import credentials from '../../testdata/testData.json'

import { readExcelData } from '../../utils/ExcelUtils'

const credential = credentials[0]

const testData: any[] =  readExcelData(
    './testdata/testData.xlsx', 'Sheet1'
)

if (!credential) {
    throw new Error('No credentials found in testData.json')
}

test(`Checkout using Read Excel Data`, async ({ page }) => {

        for (let i = 1; i < 3; i++) {
        // 1. Open SauceDemo
        const loginpage = new LoginPage(page)

        await loginpage.goto('https://www.saucedemo.com/')

        // 2. Login
        await loginpage.login(credential.username, credential.password)

        // 3. Add Product
        const inventorypage = new InventoryPage(page)

        await inventorypage.addtoCart()

        // 4. Open cart
        const cartpage = new CartPage(page)

        // 5. Checkout
        await cartpage.checkout()

        const checkoutpage = new CheckoutPage(page)

        // 6. Fill checkout form

        // 7. Generate test data using Excel 

        const user = testData[1]

        await checkoutpage.fillInformation(user.firstName, user.lastName, String(user.postalCode))

        await checkoutpage.checkoutStepTwo()

        const actualMessage = await checkoutpage.confirmMessage()

        // 7. Verify successful order
        expect(actualMessage).toBe('Thank you for your order!')
    }

})

