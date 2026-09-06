import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage'
// import login from '../testdata/testData.json'

import fs from 'fs';


test.describe('Data-driven Login Tests', () => {

    // const users = JSON.parse(fs.readFileSync('../playwright-project/testdata/testData.json', 'utf-8'))
    const users = JSON.parse(fs.readFileSync('testdata/testData.json', 'utf-8'))

    for (const user of users) {

        test(`Login with user : ${user.username}`, async ({ page }) => {

            const loginpage = new LoginPage(page)

            loginpage.goto('https://www.saucedemo.com/')

            loginpage.login(user.username, user.password)

            if(user.expected === 'success'){
                await expect(page).toHaveURL(/inventory/)
            }
            else {
                await expect(page.locator('data-test="error"')).toBeVisible()
            }


        })

    }

})

