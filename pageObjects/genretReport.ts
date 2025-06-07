import {Page} from'@playwright/test'
export class GenretReport{
    readonly page:Page
    constructor(page:Page){
        this.page=page
    }

    async report(){
        await this.page.getByText('Genarate Student Report').click()
    }
}