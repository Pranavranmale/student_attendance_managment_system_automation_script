import { Page,expect } from "@playwright/test";

export class Login{

     readonly page:Page
     constructor(page){
            this.page=page
        }
    async login(username:string,password:string){
       await this.page.getByPlaceholder("Username").fill(username)
       await this.page.getByPlaceholder("Password").fill(password)
       await this.page.locator('.btn').click()
       this.page.on('dialog',dialog=>{
        expect(dialog.message).toEqual("Login Success")
        dialog.accept()
        expect(dialog.message).toEqual("Insert Failed")
        dialog.accept()
       })
    }

}