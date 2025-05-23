import { test, expect } from '@playwright/test';

test.describe('Verify successful Rules Engine load', () => {

    const BASE_URL = 'http://localhost:3000/';

    test.beforeEach(async ({ page }) => {
        // Navigate to the base URL before each test
        await page.goto(BASE_URL);
        await page.waitForLoadState('domcontentloaded');
           // Assert the title "Rules Engine" is visible
        const title = page.locator('text=Rules Engine');
        await expect(title).toBeVisible();
        await page.waitForTimeout(5000);

    });

    test('Verify user can add the validation using Prompt', async ({ page }) => {
        // Interact with the chat field
        const chatField = page.locator('//input[contains(@placeholder, "add rule: age should be greater than 18")]');
        await chatField.click();
        await chatField.fill('Date of Birth should be allow only 2 characters');
        await page.waitForTimeout(1000);
        // Click the send button
        const sendButton = page.locator('button[type="submit"].absolute.right-2');
        await sendButton.click();
        await page.waitForTimeout(20000);

               // Interact with the "Years of Experience" field
               const dateOfBirthInput = page.locator('//input[@id="field-5" and @placeholder="Enter date of birth" and @type="date-picker"]');
               await dateOfBirthInput.click();
               await dateOfBirthInput.fill('5');
               await page.waitForTimeout(10000);
    });
});
