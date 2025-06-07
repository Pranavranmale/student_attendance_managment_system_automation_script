import { Page, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import cradintial from "./cradintial.json";

export class AdminHomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async RegisterStudent() {
    const studentName = faker.person.fullName();
    const prn = faker.number.int(100).toString();
    const address = "india";
    const gender = faker.helpers.arrayElement(["Male", "Female"]);
    const class_id = faker.number.int(100).toString(); // ✅ Avoid commas
    const nDob = faker.date.birthdate({ mode: "year", min: 1990, max: 2005 });
    const DOB = nDob.toISOString().split("T")[0];
    const password = cradintial.data.password;

   
      this.page.once("dialog", async (dialog) => {
      const message = dialog.message();
      console.log("Dialog message:", message);
      expect(
        ["Insert Success", "Insert Failed","Plz Fill All Details"]
      ).toContain(message);
      await dialog.accept();
    });

    await this.page.getByText("ADMIN CORNER").click();
    await this.page.getByText("Register Student").click();
    await this.page.getByPlaceholder("Name").fill(studentName);
    await this.page.locator("#exampleInputEmail3").fill(prn);
    await this.page
      .locator("#exampleSelectGender")
      .selectOption({ label: gender });
    await this.page.getByPlaceholder("Address").fill(address);
    await this.page.locator("#dob").fill(DOB);
    await this.page.locator(".form-group #exampleInputCity2").fill(class_id);
    await this.page.locator(".form-group #pass").fill(password);

    // Click to trigger alert
    await this.page.locator('.container-scroller .container-fluid .grid-margin .card .card-body .btn-gradient-primary').click()
    await this.page.waitForTimeout(2000)
   
  
  }
}
