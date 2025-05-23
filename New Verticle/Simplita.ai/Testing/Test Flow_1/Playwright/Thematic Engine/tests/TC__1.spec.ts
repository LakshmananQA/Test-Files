import { test, expect } from '@playwright/test';

test.describe('Verify successful Thematic Engine load and AI Form Assistant functionality', () => {
    const BASE_URL = 'http://localhost:3000/';
    const PROJECTS_BUTTON_LOCATOR = '//button[.//span[contains(text(), "Projects")]]';
    const FORM_LOCATOR = 'div.w-full.h-3.bg-gray-200.rounded.mb-3';
    const MESSAGE_ICON_LOCATOR = 'button.fixed.bottom-6.right-6.w-12.h-12.rounded-full.bg-blue-500';
    const CHAT_FIELD_LOCATOR = 'input[placeholder="Try \'use dark theme\' or \'create a forest theme\'..."]';
    const SEND_BUTTON_LOCATOR = 'button:has-text("Send")';

    test.beforeEach(async ({ page }) => {
        // Navigate to the base URL and set up the test environment
        await page.goto(BASE_URL);
        await page.waitForLoadState('domcontentloaded');

        // Open the "Projects" section
        await page.locator(PROJECTS_BUTTON_LOCATOR).click();

        // Select the form
        await page.locator(FORM_LOCATOR).click();
    });

    test('Verify AI Form Assistant prompt handling', async ({ page }) => {
        // Open the AI Assistant Message icon
        await page.locator(MESSAGE_ICON_LOCATOR).click();

        // Ensure the chat field is visible and interactable
        const chatField = page.locator(CHAT_FIELD_LOCATOR);
        await expect(chatField).toBeVisible();
        await chatField.click();
        await chatField.fill('HI');

        // Send the entered message
        await page.locator(SEND_BUTTON_LOCATOR).click();

    });
});
