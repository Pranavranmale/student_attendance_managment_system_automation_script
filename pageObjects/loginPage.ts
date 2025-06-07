import { Page, expect } from "@playwright/test";

export class Login {
  readonly page: Page;
  constructor(page) {
    this.page = page;
  }
  async login(username: string, password: string) {
      this.page.once("dialog", async (dialog) => {
        const message = dialog.message();
        console.log("Login dialog:", message);
        expect(["Login Success", "Login Failed"]).toContain(message);
        await dialog.accept();
      });
    await this.page.getByPlaceholder("Username").fill(username);
    await this.page.getByPlaceholder("Password").fill(password);
    await this.page.locator(".btn").click();
  }
}
