import { test, expect } from '@playwright/test';

test.describe('Verify the form layout', () => {
    // Constants for reusable selectors and settings
    const SETTINGS = {
        URL: 'http://localhost:3000/templates',
        VIEWPORT: { width: Math.floor(1920 * 0.75), height: Math.floor(1080 * 0.75) },
        TIMEOUT: 10000
    };

    const SELECTORS = {
        VIEW_FORM_BUTTON: 'button:has-text("View Form")',
        AI_MODE_BUTTON: 'button:has-text("AI Mode")',
        RECORD_5_BUTTON: 'button:has-text("Record 5")',
        DROPDOWN: 'select.rounded-lg.border.border-gray-200',
        REGENERATE_BUTTON: 'button:has-text("Regenerate")',
        RECORD_10_BUTTON: 'button:has-text("Record 10")',
        SUBMIT_BUTTON: 'button:has-text("Submit All Records")[class*="bg-green-600"]'
    };

    test('Verify AI Mode generates data and submits it', async ({ page }) => {
        await page.setViewportSize(SETTINGS.VIEWPORT);
        await page.goto(SETTINGS.URL, { waitUntil: 'networkidle' });

        // View Form interaction
        const viewFormButton = page.locator(SELECTORS.VIEW_FORM_BUTTON);
        await expect(viewFormButton).toBeVisible();
        await viewFormButton.click();

        // AI Mode workflow
        const aiModeButton = page.locator(SELECTORS.AI_MODE_BUTTON);
        await expect(aiModeButton).toBeVisible();
        await aiModeButton.click();

        const record5Button = page.locator(SELECTORS.RECORD_5_BUTTON);
        await expect(record5Button).toBeVisible();
        await record5Button.click();

        const dropdown = page.locator(SELECTORS.DROPDOWN);
        await expect(dropdown).toBeVisible();
        await dropdown.selectOption({ value: '10' });

        const regenerateButton = page.locator(SELECTORS.REGENERATE_BUTTON);
        await expect(regenerateButton).toBeVisible();
        await regenerateButton.click();

        await page.waitForTimeout(10000);

        const record10Button = page.locator(SELECTORS.RECORD_10_BUTTON);
        await expect(record10Button).toBeVisible();
        await record10Button.click();

        const submitButton = page.locator(SELECTORS.SUBMIT_BUTTON);
        await expect(submitButton).toBeVisible();
        await submitButton.click();
    });
});
