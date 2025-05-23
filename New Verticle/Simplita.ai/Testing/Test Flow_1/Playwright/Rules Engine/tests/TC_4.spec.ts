import { test, expect } from '@playwright/test';

test.describe('Verify successful Rules Engine load', () => {

    const BASE_URL = 'http://localhost:3000/';

    test.beforeEach(async ({ page }) => {
        // Navigate to the base URL before each test
        await page.goto(BASE_URL);
        await page.waitForLoadState('domcontentloaded');
           // Assert the title "Rules Engine" is visible
        const title = page.locator('text=Rules Engine');
        await expect(title).toBeVisible();
        await page.waitForTimeout(8000);

        const chatField = page.locator('//input[contains(@placeholder, "add rule: age should be greater than 18")]');
        await chatField.click();
        await chatField.fill('Years of Experience should be greater than 2');
        await page.waitForTimeout(1000);
        // Click the send button
        const sendButton = page.locator('button[type="submit"].absolute.right-2');
        await sendButton.click();
        await page.waitForTimeout(8000);

        const yearsOfExperienceField = page.locator('input#field-7');
        await yearsOfExperienceField.click();
        await yearsOfExperienceField.fill('1');
   
    });

    test('Verify Upadate existing validation rules using Prompt', async ({ page }) => {
       
        const chatField = page.locator('//input[contains(@placeholder, "add rule: age should be greater than 18")]');
        await chatField.click();
        await chatField.fill('Years of Experience should be update as greater than 10');
        await page.waitForTimeout(1000);
        
        // Click the send button
        const sendButton = page.locator('button[type="submit"].absolute.right-2');
        await sendButton.click();
        await page.waitForTimeout(8000);

        const yearsOfExperienceField = page.locator('input#field-7');
        await yearsOfExperienceField.click();
        await yearsOfExperienceField.fill('12');
    });
});
