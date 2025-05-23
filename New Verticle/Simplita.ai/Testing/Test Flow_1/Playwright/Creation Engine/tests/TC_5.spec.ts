import { test, expect } from '@playwright/test';

test.describe('Verify Creation Engine functionality', () => {
    // Define constants for reusable settings and selectors
    const SETTINGS = {
        URL: 'http://localhost:3001/',
        CHAT_FIELD_SELECTOR: 'input[placeholder="Type your message..."]',
        SEND_BUTTON_SELECTOR: 'button[type="submit"]',
        FORM_PREVIEW_HEADER_SELECTOR: 'text=Form Preview',
        EMPLOYEE_NAME_LABEL_SELECTOR: 'text=Employee Name', // Selector for the label
        EMPLOYEE_NAME_FIELD_SELECTOR: 'input[placeholder="Enter full name"]', // Selector for the input field
                TIMEOUT: 5000,
        VIEWPORT: { width: Math.floor(1920 * 0.8), height: Math.floor(1080 * 0.8) },
        WAIT_AFTER_ACTION: 30000, // Wait after sending the message
    };

    // Before each test: Set up the environment
    test.beforeEach(async ({ page }) => {
        page.setDefaultTimeout(SETTINGS.TIMEOUT);
        await page.goto(SETTINGS.URL, { waitUntil: 'networkidle' });

        // Set viewport size
        await page.setViewportSize(SETTINGS.VIEWPORT);

        // Verify AI Form Assistant is visible
        await expect(page.locator('text=AI Form Assistant')).toBeVisible();

        // Send a prompt to generate a form
        const chatField = page.locator(SETTINGS.CHAT_FIELD_SELECTOR);
        await chatField.click();
        await chatField.fill("Create the Employee details form with 2 fields only");

        const sendButton = page.locator(SETTINGS.SEND_BUTTON_SELECTOR);
        await sendButton.click();

        // Wait for the form generation process
        await page.waitForTimeout(SETTINGS.WAIT_AFTER_ACTION);

        // Verify the "Form Preview" header is displayed
        const formPreviewHeader = page.locator(SETTINGS.FORM_PREVIEW_HEADER_SELECTOR);
        await expect(formPreviewHeader).toBeVisible();
    });

    // Test: Verify Delete Button Functionality
    test('Verify Delete Button Functionality and Renaming Field Label', async ({ page }) => {
        try {
            // Locate the delete button
            const chatField = page.locator(SETTINGS.CHAT_FIELD_SELECTOR);
        await chatField.click();
        await chatField.fill("Update the Employee Name field to Employee Code");

        } catch (error) {
            // Take a screenshot if an error occurs
            await page.screenshot({ path: `screenshots/error-ai-form-${Date.now()}.png` });
            throw error;
        }
    });
});
