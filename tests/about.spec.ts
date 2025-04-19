import { test, expect } from "@playwright/test";

test("about: go to about", async ({ page }) => {
    const isMobile = test.info().project.name.includes("Mobile");
    await page.goto("/");

    if (isMobile) {
        await page.click(".menu");
    }

    await page.click("text=About");
    await expect(page).toHaveURL("/about");
    await expect(page.getByText("About me,", { exact: true })).toBeVisible();
});