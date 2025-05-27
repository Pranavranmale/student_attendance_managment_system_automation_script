import { test, expect } from '@playwright/test';
import {Login} from '../pageObjects/loginPage';
import cradintial from '../pageObjects/cradintial.json'

test.beforeEach('has title', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/src/pages/samples/login.html');
});

test('home page',async({page})=>{
    const loginWithCredintiol = new Login(page)
    await loginWithCredintiol.login(cradintial.data.name,cradintial.data.password)



})