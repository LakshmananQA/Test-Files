import { test, expect } from '@playwright/test';

test.describe('Verify successful Thematic Engine load', () => {
    const BASE_URL = 'http://localhost:3000/';

    test.beforeEach(async ({ page }) => {
        // Navigate to the base URL before each test
        await page.goto(BASE_URL);
        await page.waitForLoadState('domcontentloaded');
        const projectsButton = page.locator('//button[.//span[contains(text(), "Projects")]]');
        await projectsButton.click();

        const form = page.locator('div.w-full.h-3.bg-gray-200.rounded.mb-3')
        await form.click();
    });

    test('Verify components changes through Module and AI', async ({ page }) => {
        // Part 1: Change Typography using AI with Prompt
        const buttonLocator = page.locator('button.fixed.bottom-6.right-6.w-12.h-12.rounded-full.bg-blue-500')
        await buttonLocator.click();
        console.log("Message icon clicked successfully");
        await page.waitForTimeout(1000);

        const chatField = page.locator('input[placeholder="Try \'use dark theme\' or \'create a forest theme\'..."]');
        await chatField.click();
        await chatField.fill('Set the button background color as Purple');
        await page.waitForTimeout(1000);

        const sendButton = page.locator('button:has-text("Send")');
        await sendButton.click();
        console.log("Send button clicked successfully");

        // Part 2: Change button Components using Components Module
        const componentModule = page.locator('//button[.//span[text()="Components"]]')
        await componentModule.click();
        await page.waitForTimeout(1000);

        const Sleek = page.locator('button:has-text("Sleek")')
        await Sleek.click();
        await page.waitForTimeout(1000);

    });
});
