import { test, expect } from '@playwright/test';
import {Login} from '../pageObjects/loginPage';
import{AdminHomePage} from '../pageObjects/regesterStude'
import cradintial from '../pageObjects/cradintial.json'
import {StudeAttendance} from'../pageObjects/StudeAttendance'
import {GenretReport}from '../pageObjects/genretReport'
import {ViewStudentInformation} from '../pageObjects/ViewStudentInformation'

test.describe("student managment test",()=>{
  test.beforeEach('has title', async ({ page }) => {
  await page.goto('/src/pages/samples/login.html')
  const loginWithCredintiol = new Login(page) 
  await loginWithCredintiol.login(cradintial.data.name,cradintial.data.password)
  await page.getByText("ADMIN CORNER").click();
});


test('register student',async({page})=>{
  const res= new AdminHomePage(page)
  await res.RegisterStudent()
  
})
test('StudeAttendance',async({page})=>{  

    const attnd=new StudeAttendance(page)
    await attnd.StudeAttendance()
})    

test('Genarate Student Report',async({page})=>{
  const reportgen=new GenretReport(page)
  await reportgen.report()
})

test('View Student Information',async({page})=>{
      const info=new ViewStudentInformation(page)
      await info.ViewInfo()
})

})