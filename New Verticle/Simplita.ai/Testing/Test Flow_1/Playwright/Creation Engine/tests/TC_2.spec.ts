import { test, expect } from '@playwright/test';

test.describe('Verify successful Creatin Engine page load', () => {
    // Define constants for reusable selectors and settings
    const URL = 'http://localhost:3001/';
    const CHAT_FIELD_SELECTOR = 'input[placeholder="Type your message..."]';
    const SEND_BUTTON_SELECTOR = 'button[type="submit"]';
    const FORM_PREVIEW_HEADER_SELECTOR = 'text=Form Preview';
    const TIMEOUT = 10000;
    const VIEWPORT_WIDTH = Math.floor(1920 * 0.8);
    const VIEWPORT_HEIGHT = Math.floor(1080 * 0.8);

    // Before each test, navigate to the page and set the environment
    test.beforeEach(async ({ page }) => {
        page.setDefaultTimeout(TIMEOUT);
        await page.goto(URL, { waitUntil: 'networkidle' });

        // Set viewport size
        await page.setViewportSize({ width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT });

        // Verify that the AI Form Assistant section is visible
        await expect(page.locator('text=AI Form Assistant')).toBeVisible();
    });

    // Test: Interact with the AI Form Assistant and validate functionality
    test('Verify user can create the Studen/Employee form using Prompt', async ({ page }) => {
        try {
            // Interact with the chat field for "Student details form"
            const chatField = page.locator(CHAT_FIELD_SELECTOR);
            await chatField.click();
            await chatField.fill("Create the 'Student' details form");

            // Click the send button
            const sendButton = page.locator(SEND_BUTTON_SELECTOR);
            await sendButton.click();
            await page.waitForTimeout(30000); // Wait 5 seconds after fetch

            // Verify the "Form Preview" header is displayed
            const formPreviewHeader = page.locator('text=Form Preview');
            await expect(formPreviewHeader).toBeVisible();

            // Verify new details are displayed in the form preview
            const studentNameLabel = page.locator('text=Student Name');
            await expect(formPreviewHeader).toBeVisible();

        } catch (error) {
            // Take a screenshot if an error occurs and rethrow the error
            await page.screenshot({ path: `screenshots/error-ai-form-${Date.now()}.png` });
            throw error;
        }
    });
});
