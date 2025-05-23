import { test, expect } from '@playwright/test';

// Increase test timeout to 120 seconds
test.setTimeout(120000);

test.describe('Execute Test Script Tests', () => {
    test.beforeEach(async ({ page }) => {
        page.setDefaultTimeout(30000);
        await page.goto('http://localhost:3000/', { 
            waitUntil: 'domcontentloaded'
        });
        // Maximize the window
        await page.setViewportSize({ width: 1920, height: 1080 });
        await expect(page.getByRole('heading', { name: 'Testing Engine' })).toBeVisible();
    });

    test('Execute test script for Forms', async ({ page }) => {
        try {
            // Handle Form 1 checkbox
            const form1Checkbox = page.locator('input[type="checkbox"]').nth(0);
            await form1Checkbox.click();
            await expect(form1Checkbox).toBeChecked();

            // Find and click Fetch Test Script button for Form 1
            const fetchButton = page.getByRole('button', { name: 'Fetch Test Script' });
            await fetchButton.click();
            await page.waitForTimeout(5000); // Wait 5 seconds after fetch

            // Find and click Start Test button for Form 1
            const startTestButton = page.getByRole('button', { name: 'Start Test' });
            await startTestButton.click();
            await page.waitForTimeout(10000); // Wait 10 seconds after start test

            // Handle Form 3 checkbox
            const form3Checkbox = page.locator('input[type="checkbox"]').nth(2);
            await form3Checkbox.click();
            await expect(form3Checkbox).toBeChecked();

            // Find and click Fetch Test Script button for Form 3
            await fetchButton.click();
            await page.waitForTimeout(5000); // Wait 5 seconds after fetch

            // Find and click Start Test button for Form 3
            await startTestButton.click();
            await page.waitForTimeout(20000); // Wait 10 seconds after start test

            // Keep browser open for inspection
            await page.pause();
        } catch (error) {
            // Take screenshot only if page is not closed
            try {
                if (page && !page.isClosed()) {
                    await page.screenshot({ path: `error-execute-script-${Date.now()}.png` });
                }
            } catch (screenshotError) {
                console.error('Failed to take error screenshot:', screenshotError);
            }
            throw error;
        }
    });
}); 