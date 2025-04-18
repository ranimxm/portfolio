import { test, expect } from "@playwright/test";

test("home: has title", async ({ page }) => {
  await page.goto("/");
  await page.waitForTimeout(2000);
  await expect(page.locator("text=Building logic,")).toBeVisible();
});

test("home: click on project-item", async ({ page }) => {
  const projectItems = page.locator(".project-item");
  const projectItemCount = await projectItems.count();
  await page.goto("/");

  for (let i = 0; i < projectItemCount; i++) {
    await projectItems.nth(i).click();
    await expect(page.locator(".work-item")).toBeVisible();
    await page.goBack();
  }
});
