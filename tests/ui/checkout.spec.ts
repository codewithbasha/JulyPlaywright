import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import { InventoryPage } from '../../pages/InventoryPage'
import { CartPage } from '../../pages/CartPage'
import { CheckoutPage } from '../../pages/CheckoutPage'

import credentials from '../../testdata/testData.json'

const credential = credentials[0]

if (!credential) {
    throw new Error('No credentials found in testData.json')
}

test(`Login with user : ${credential.username}`, async ({ page }) => {

    const loginpage = new LoginPage(page)

    await loginpage.goto('https://www.saucedemo.com/')

    await loginpage.login(credential.username, credential.password)

    const inventorypage = new InventoryPage(page)

    await inventorypage.addtoCart()

    await page.pause()
    
    const cartpage = new CartPage(page)

    await cartpage.checkout()

    const checkoutpage = new CheckoutPage(page)

    await checkoutpage.fillInformation('Hassain', 'Basha', '600028')

    await checkoutpage.checkoutStepTwo()

    const actualMessage = await checkoutpage.confirmMessage()

    expect(actualMessage).toBe('Thank you')



})

