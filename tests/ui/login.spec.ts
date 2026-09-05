import { test } from '../../fixtures/fixtures'
import login from '../../testdata/testData.json'

import fs from 'fs';


test.describe('Fixture', () => {

    test.beforeEach(async ({ page }) => {
        // Navigate to the inventory page (storage state will handle authentication)
        await page.goto('https://www.saucedemo.com/inventory.html');
        // Wait for the page to load
        await page.waitForSelector('.inventory_list', { state: 'visible' });
    });

    test('Add Product', async ({ loginPage, inventoryPage }) => {
       
        await inventoryPage.addProduct()
    })

    test('Goto Cart Page', async ({ loginPage, inventoryPage }) => {
        await inventoryPage.addProduct()
        await inventoryPage.gotoCart()
    })


})


// Authentication Fixture + storageState