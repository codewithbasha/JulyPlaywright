import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
import credentials from '../../testdata/testData.json'
import { InventoryPage } from '../../pages/InventoryPage'

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

})

