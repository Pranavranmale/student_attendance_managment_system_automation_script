import { test, expect } from '@playwright/test';
import {Login} from '../pageObjects/loginPage';
import{AdminHomePage} from '../pageObjects/adminHomePage'
import cradintial from '../pageObjects/cradintial.json'

test.describe("student managment test",()=>{
  test.beforeEach('has title', async ({ page }) => {
  await page.goto('/src/pages/samples/login.html')
  const loginWithCredintiol = new Login(page) 
  await loginWithCredintiol.login(cradintial.data.name,cradintial.data.password)
});


test('Login',async({page})=>{  
    const adminHome=new AdminHomePage(page)
    await adminHome.RegisterStudent()
})     
})

