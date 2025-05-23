import { test, expect } from '@playwright/test';

test.describe('AI Form Assistant Interaction', () => {
    test('Validate Rules Engine Page and Interactions', async ({ page }) => {
        // Step 1: Load the URL
        await page.goto('http://localhost:3000/');

        // Step 2: Wait until elements load properly
        await page.waitForLoadState('domcontentloaded');

        // Step 3: Check if the Title "Rules Engine" is displayed
        const title = page.locator('text=Rules Engine');
        await expect(title).toBeVisible();

        // Step 4: Click the "Validations" button using an alternative XPath locator
        const validationButton = page.locator('//button[1]/span[2]');
        await validationButton.click();
    });
});
