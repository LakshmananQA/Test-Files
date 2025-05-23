import { test, expect } from '@playwright/test';

test.describe('Verify Creation Engine Page Load and AI Form Assistant', () => {
    // Define constants for reusable selectors and settings
    const SETTINGS = {
        URL: 'http://localhost:3001/',
        CHAT_FIELD_SELECTOR: 'input[placeholder="Type your message..."]',
        SEND_BUTTON_SELECTOR: 'button[type="submit"]',
        FORM_PREVIEW_HEADER_SELECTOR: 'text=Form Preview',
        CONFIRMATION_MESSAGE_SELECTOR: 'text="Form "HI" created successfully!"',
        TIMEOUT: 10000,
        VIEWPORT: { width: Math.floor(1920 * 0.8), height: Math.floor(1080 * 0.8) },
        WAIT_AFTER_SEND: 15000, // Adjust as needed
    };

    // Before each test, navigate to the page and set the environment
    test.beforeEach(async ({ page }) => {
        page.setDefaultTimeout(SETTINGS.TIMEOUT);
        await page.goto(SETTINGS.URL, { waitUntil: 'networkidle' });

        // Set viewport size
        await page.setViewportSize(SETTINGS.VIEWPORT);

        // Verify that the AI Form Assistant section is visible
        await expect(page.locator('text=AI Form Assistant')).toBeVisible();
    });

    // Test: Interact with the AI Form Assistant and validate functionality
    test('Verify AI Form Assistant prompt handling', async ({ page }) => {
        try {
            // Interact with the chat field
            const chatField = page.locator(SETTINGS.CHAT_FIELD_SELECTOR);
            await chatField.click();
            await chatField.fill('HI');

            // Click the send button
            const sendButton = page.locator(SETTINGS.SEND_BUTTON_SELECTOR);
            await sendButton.click();

            // Wait for the form to process and appear
            await page.waitForTimeout(SETTINGS.WAIT_AFTER_SEND);

            // Verify the confirmation message
            const confirmationMessage = page.locator(SETTINGS.CONFIRMATION_MESSAGE_SELECTOR);
            await expect(confirmationMessage).toBeVisible();
        } catch (error) {
            // Take a screenshot if an error occurs and rethrow the error
            await page.screenshot({ path: `screenshots/error-ai-form-${Date.now()}.png` });
            throw error;
        }
    });
});
