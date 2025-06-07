import { expect, Page } from "@playwright/test";

export class StudeAttendance {
  readonly page: Page;
  constructor(page) {
    this.page = page;
  }

  async StudeAttendance() {
    this.page.once("dialog", async (dialog) => {
      const message = dialog.message();
      console.log("Attendance dialog:", message);
      expect([
        "Attendance already marked",
        "Make attendace Successfully"
      ]).toContain(message);
      await dialog.accept();
    });

    await this.page.getByText("ADMIN CORNER").click();
    await this.page.getByText("Mark Student Attendance").click();
    await this.page.locator('[onclick="markAttForP(66)"]').click();
     await this.page.waitForTimeout(2000)
    // this.page.on("dialog", async (dialog) => {
    //   const message = dialog.message();
    //   expect('[class="mdi mdi-logout me-2 text-primary"]').toContain(message);

    //   await dialog.accept();
    // });
  }
}
