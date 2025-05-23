import { test, expect } from '@playwright/test';

test.describe('Migration Engine Page Structure Verification', () => {
    // Constants for reusable selectors and settings
    const SETTINGS = {
        URL: 'http://localhost:3000/templates',
        VIEWPORT: { width: Math.floor(1920 * 0.75), height: Math.floor(1080 * 0.75) },
        TIMEOUT: 10000
    };

    const SELECTORS = { // Selector for the back arrow icon
        VIEW_FORM_BUTTON: 'button:has-text("View Form")',
        PAGE_TITLE: 'h1'
    };

    test('Navigate through templates page', async ({ page }) => {
        // Set viewport size to 75% of 1920x1080
        await page.setViewportSize(SETTINGS.VIEWPORT);
        console.log('Browser window maximized to 75%');
        
        // Navigate to the specified URL
        await page.goto(SETTINGS.URL, { waitUntil: 'networkidle' });
        console.log('Navigated to templates page');


        // Click the View Form button
        const viewFormButton = page.locator(SELECTORS.VIEW_FORM_BUTTON);
        await expect(viewFormButton).toBeVisible();
        await viewFormButton.click();
        console.log('View Form button clicked successfully');

    });
});
