import {expect, Page} from '@playwright/test'
import { faker } from '@faker-js/faker'
export class ViewStudentInformation{
    readonly page:Page
    constructor(page:Page){
        this.page=page
    }
    async ViewInfo(){
        this.page.once("dialog",async(dialog)=>{
            const message=dialog.message()
            expect("Invalid PRN no.").toContain(message)
            await dialog.accept()
        })
        const prn = faker.number.int(100).toString();
        await this.page.getByText('STUDENT CORNER').click()
        await this.page.getByText('View Student Information').click()
        await this.page.getByPlaceholder('Enter Student PRN').fill(prn)
        await this.page.getByRole('button',{name:"View Student Information"}).click()
        await this.page.waitForTimeout(2000)
    }

}