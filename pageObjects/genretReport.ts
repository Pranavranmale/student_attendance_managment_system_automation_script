import { faker } from "@faker-js/faker";
import { expect, Page } from "@playwright/test";
export class GenretReport {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async report() {
    this.page.once("dialog", async (dialog) => {
      const message = dialog.message();
      console.log("report dialog", message);
      expect("PRN NO. DOSE NOT EXIST OR ATTENDACE IS DOES NOT EXIST").toContain(message);
      await dialog.accept();
    });

    const id = faker.number.int(100).toString();
    
    await this.page.getByText("Genarate Student Report").click();
    await this.page.locator(".form-control-lg").fill(id);
    await this.page.getByRole("button", { name: "GENARATE REPORT" }).click();
    await this.page.waitForTimeout(2000)
  }
}
