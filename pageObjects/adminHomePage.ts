import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import cradintial from '../pageObjects/cradintial.json'
import { Login } from './loginPage';


export class AdminHomePage {
    readonly page: Page;

    constructor(page: Page) {
        
        this.page = page;
    }

    async RegisterStudent() {
        const studentName = faker.person.fullName();
        const prn = faker.number.int(100).toString();
        const address = "india";
        const gender = faker.helpers.arrayElement(['Male', 'Female']);
       
        const class_id= faker.number.int(100).toLocaleString()
        
        
        const nDob = faker.date.birthdate({ mode: "year", min: 1990, max: 2005 });
        const DOB = nDob.toISOString().split('T')[0];
        const password = cradintial.data.password

        await this.page.getByText("ADMIN CORNER").click();
        await this.page.getByText("Register Student").click();
        await this.page.getByPlaceholder("Name").fill(studentName);
        await this.page.locator('#exampleInputEmail3').fill(prn);
        await this.page.locator('#exampleSelectGender').selectOption({ label: gender });
        await this.page.getByPlaceholder('Address').fill(address);
        await this.page.locator('#dob').fill(DOB); 
        await this.page.locator('.form-group #exampleInputCity2').fill(class_id)
        await this.page.locator('.form-group #pass').fill(password)
        await this .page.getByRole('button',{name:"ADD"}).click();
        this.page.on('dialog',dialog=>{
        const message=dialog.message()
        if(message.includes('Insert success'))
        expect(dialog.message).toEqual("Insert success")
        dialog.accept()
       })
    }
}
