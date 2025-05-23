import { test, expect } from '@playwright/test';

test.describe('Fetch Test Script Tests', () => {
    test.beforeEach(async ({ page }) => {
        page.setDefaultTimeout(10000);
        await page.goto('http://localhost:3000/', { 
            waitUntil: 'domcontentloaded'
        });
        // Maximize the window
        await page.setViewportSize({ width: 1920, height: 1080 });
        await expect(page.locator('text=Testing Engine')).toBeVisible();
    });

    test('Fetch test scripts for all forms', async ({ page }) => {
        try {
            // Handle Form 1
            const form1Checkbox = page.locator('input[type="checkbox"]').nth(0);
            await form1Checkbox.click();
            await expect(form1Checkbox).toBeChecked();

            // Find and click Fetch Test Script button for Form 1
            const fetchButton = page.getByRole('button', { name: 'Fetch Test Script' });
            await fetchButton.click();
            await page.waitForTimeout(5000); // Wait 5 seconds after fetch

            // Handle Form 2
            const form2Checkbox = page.locator('input[type="checkbox"]').nth(1);
            await form2Checkbox.click();
            await expect(form2Checkbox).toBeChecked();

            // Find and click Fetch Test Script button for Form 2
            await fetchButton.click();
            await page.waitForTimeout(5000); // Wait 5 seconds after fetch

            // Handle Form 3
            const form3Checkbox = page.locator('input[type="checkbox"]').nth(2);
            await form3Checkbox.click();
            await expect(form3Checkbox).toBeChecked();

            // Find and click Fetch Test Script button for Form 3
            await fetchButton.click();
            await page.waitForTimeout(5000); // Wait 5 seconds after fetch

            // Handle Form 4
            const form4Checkbox = page.locator('input[type="checkbox"]').nth(3);
            await form4Checkbox.click();
            await expect(form4Checkbox).toBeChecked();

            // Find and click Fetch Test Script button for Form 4
            await fetchButton.click();
            await page.waitForTimeout(5000); // Wait 5 seconds after fetch

            // Keep browser open for inspection
            await page.pause();
        } catch (error) {
            await page.screenshot({ path: `error-fetch-script-${Date.now()}.png` });
            throw error;
        }
    });
}); 