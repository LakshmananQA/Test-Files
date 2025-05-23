import { test, expect } from '@playwright/test';

test.describe('Form Generation Tests', () => {
    test.beforeEach(async ({ page }) => {
        page.setDefaultTimeout(10000);
        await page.goto('http://localhost:3000/', { 
            waitUntil: 'domcontentloaded'
        });
        // Maximize the window
        await page.setViewportSize({ width: 1920, height: 1080 });
        await expect(page.locator('text=Testing Engine')).toBeVisible();
    });

    test('Generate scripts for Forms', async ({ page }) => {
        try {
            // Handle Form 1 checkbox
            const form1Checkbox = page.locator('input[type="checkbox"]').nth(0);
            await form1Checkbox.click();
            await expect(form1Checkbox).toBeChecked();

            // Handle Generate Scripts button
            const generateButton = page.getByRole('button', { name: 'Generate Scripts' });
            await generateButton.click();

            // Handle Form 2 checkbox
            const form2Checkbox = page.locator('input[type="checkbox"]').nth(1);
            await form2Checkbox.click();
            await expect(form2Checkbox).toBeChecked();

            // Handle Generate Scripts button
            await generateButton.click();

            // Handle Form 3 checkbox
            const form3Checkbox = page.locator('input[type="checkbox"]').nth(2);
            await form3Checkbox.click();
            await expect(form3Checkbox).toBeChecked();

            // Handle Generate Scripts button
            await generateButton.click();

            // Handle Form 4 checkbox
            const form4Checkbox = page.locator('input[type="checkbox"]').nth(3);
            await form4Checkbox.click();
            await expect(form4Checkbox).toBeChecked();

            // Handle Generate Scripts button
            await generateButton.click();

            // Keep browser open for inspection
            await page.pause();
        } catch (error) {
            await page.screenshot({ path: `error-forms-${Date.now()}.png` });
            throw error;
        }
    });
}); 