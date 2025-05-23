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

    test('Verify Typography changes through Module and AI', async ({ page }) => {
        // Part 1: Change Typography using Typography Module
        const TypographyModule = page.locator('//button[.//span[text()="Typography"]]')
        await TypographyModule.click();
        await page.waitForTimeout(1000);

        const System = page.locator('//div[span[text()="System"] and p[text()="The quick brown fox jumps over the lazy dog"]]')
        await System.click();
        await page.waitForTimeout(1000);

        // Part 2: Change Typography using AI with Prompt
        const buttonLocator = page.locator('button.fixed.bottom-6.right-6.w-12.h-12.rounded-full.bg-blue-500')
        await buttonLocator.click();
        console.log("Message icon clicked successfully");
        await page.waitForTimeout(1000);

        const chatField = page.locator('input[placeholder="Try \'use dark theme\' or \'create a forest theme\'..."]');
        await chatField.click();
        await chatField.fill('Add the playfair display Typography value for entire form');
        await page.waitForTimeout(1000);

        const sendButton = page.locator('button:has-text("Send")');
        await sendButton.click();
        console.log("Send button clicked successfully");

        console.log("Browser will remain open. Close manually when done.");
        await page.pause();
    });
});
