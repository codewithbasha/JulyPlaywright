import {test as setup} from '@playwright/test'
import fs from 'fs';

const authFile = 'playwright-project/.auth/user.json'


setup('authentication', async({page})=>{

    await page.goto('https://www.saucedemo.com')
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()


    await page.waitForURL('https://www.saucedemo.com/inventory.html')
    await page.context().storageState({path:authFile})

    console.log('✅ SETUP PROJECT: Authentication completed!');
    console.log(`📁 Auth file size: ${fs.statSync(authFile).size} bytes`);

})
