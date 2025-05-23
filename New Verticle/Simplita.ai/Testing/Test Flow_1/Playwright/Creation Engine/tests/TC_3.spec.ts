import { test, expect } from '@playwright/test';

test.describe('Verify Creation Engine functionality', () => {
    // Define constants for reusable settings and selectors
    const SETTINGS = {
        URL: 'http://localhost:3001/',
        CHAT_FIELD_SELECTOR: 'input[placeholder="Type your message..."]',
        SEND_BUTTON_SELECTOR: 'button[type="submit"]',
        FORM_PREVIEW_HEADER_SELECTOR: 'text=Form Preview',
        EMAIL_BUTTON_SELECTOR: 'text=Email',
        ADDRESS_BUTTON_SELECTOR: 'text=Address',
        EMAIL_FIELD_PREVIEW_SELECTOR: 'input[placeholder="Enter email..."]',
        ADDRESS_FIELD_PREVIEW_SELECTOR: 'input[placeholder="Enter address..."]',
        EMPLOYEE_NAME_LABEL: 'input[placeholder="Employee Name"]',
        TIMEOUT: 10000,
        VIEWPORT: { width: Math.floor(1920 * 0.8), height: Math.floor(1080 * 0.8) },
        WAIT_AFTER_ACTION: 30000, // Wait after sending the messageEnter email...
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

        // Verify the "Employee Name" field is in the form preview
        const employeeNameLabel = page.locator(SETTINGS.EMPLOYEE_NAME_LABEL);
        await expect(formPreviewHeader).toBeVisible();
    });

    // Test: Add fields and validate their presence in the form preview
    test('Verify adding fields to Form Preview', async ({ page }) => {
        try {
            // Click the "Email" button
            const emailButton = page.locator(SETTINGS.EMAIL_BUTTON_SELECTOR);
            await emailButton.click();

            // Click the "Address" button
            const addressButton = page.locator(SETTINGS.ADDRESS_BUTTON_SELECTOR);
            await addressButton.click();

            // Verify the Email field is added to the Form Preview
            const emailFieldInPreview = page.locator(SETTINGS.EMAIL_FIELD_PREVIEW_SELECTOR);
            await expect(emailFieldInPreview).toBeVisible();

        } catch (error) {
            // Take a screenshot if an error occurs
            await page.screenshot({ path: `screenshots/error-ai-form-${Date.now()}.png` });
            throw error;
        }
    });
});
