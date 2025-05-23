import { test, expect } from '@playwright/test';
const BASE_URL = 'http://localhost:3000/';



test.describe('Validate Rules Engine Page is displayed', () => {

    test.beforeEach(async ({ page }) => {
        // Navigate to the base URL before each test
        await page.goto(BASE_URL);
        await page.waitForLoadState('domcontentloaded');
        const title = page.locator('text=Rules Engine');
        await expect(title).toBeVisible();
        await page.waitForTimeout(5000);

        const validationButton = page.locator('//button[1]/span[2]');
        await validationButton.click();
        await page.waitForTimeout(500);


        const AgeLabel = page.locator('//div[text()="Age"]');
        await AgeLabel.click();
        await page.waitForTimeout(5000);

        const minValueField = page.locator('//input[@type="number" and @placeholder="Enter minimum value"]');
        await minValueField.fill('1');
        await page.waitForTimeout(500);

        const maxValueField = page.locator('//input[@type="number" and @placeholder="Enter maximum value"]');
        await maxValueField.fill('10');
        await page.waitForTimeout(500);

        const saveRulesButton = page.locator('button', { hasText: 'Save Rules' });
        await saveRulesButton.click();
        await expect(saveRulesButton).toBeEnabled();
        await page.waitForTimeout(500);
    });

    test('Verify user can add the validation using menu option', async ({ page }) => {
        // Click the "Validations" button
        const validationButton = page.locator('//button[1]/span[2]');
        await validationButton.click();


        const AgeLabel = page.locator('//div[text()="Age"]');
        await AgeLabel.click();
        await page.waitForTimeout(5000);

        const minValueField = page.locator('//input[@type="number" and @placeholder="Enter minimum value"]');
        await minValueField.fill('5');
        await page.waitForTimeout(500);

        const maxValueField = page.locator('//input[@type="number" and @placeholder="Enter maximum value"]');
        await maxValueField.fill('15');
        await page.waitForTimeout(500);

        const saveRulesButton = page.locator('button', { hasText: 'Save Rules' });
        await saveRulesButton.click();
        await expect(saveRulesButton).toBeEnabled();

    });

});
