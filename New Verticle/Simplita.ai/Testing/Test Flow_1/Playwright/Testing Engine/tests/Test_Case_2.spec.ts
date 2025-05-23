import { test, expect } from '@playwright/test';

test.describe('Test Case Selection Tests', () => {
    test.beforeEach(async ({ page }) => {
        page.setDefaultTimeout(10000);
        await page.goto('http://localhost:3000/', { 
            waitUntil: 'domcontentloaded'
        });
        // Maximize the window
        //await page.setViewportSize({ width: 1920, height: 1080 });
        await expect(page.locator('text=Testing Engine')).toBeVisible();
    });

    test('Select and unselect test cases for all forms', async ({ page }) => {
        try {
            // Handle Form 1
            const form1Checkbox = page.locator('input[type="checkbox"]').nth(0);
            await form1Checkbox.click();
            await expect(form1Checkbox).toBeChecked();

            // Get all test case checkboxes for Form 1
            const testCaseCheckboxes1 = page.locator('text=Test Cases: Form 1').locator('xpath=following::input[@type="checkbox"]').all();
            const checkboxes1 = await testCaseCheckboxes1;

            // Unselect last 3 test cases (3, 4, and 5)
            for (let i = 2; i <= 4; i++) {
                await checkboxes1[i].click();
                await expect(checkboxes1[i]).not.toBeChecked();
            }

            // Select the last test case (5)
            await checkboxes1[4].click();
            await expect(checkboxes1[4]).toBeChecked();

            // Handle Form 2
            const form2Checkbox = page.locator('input[type="checkbox"]').nth(1);
            await form2Checkbox.click();
            await expect(form2Checkbox).toBeChecked();

            // Get all test case checkboxes for Form 2
            const testCaseCheckboxes2 = page.locator('text=Test Cases: Form 2').locator('xpath=following::input[@type="checkbox"]').all();
            const checkboxes2 = await testCaseCheckboxes2;

            // Unselect last 3 test cases (3, 4, and 5)
            for (let i = 2; i <= 4; i++) {
                await checkboxes2[i].click();
                await expect(checkboxes2[i]).not.toBeChecked();
            }

            // Select the last test case (5)
            await checkboxes2[4].click();
            await expect(checkboxes2[4]).toBeChecked();

            // Handle Form 3
            const form3Checkbox = page.locator('input[type="checkbox"]').nth(2);
            await form3Checkbox.click();
            await expect(form3Checkbox).toBeChecked();

            // Get all test case checkboxes for Form 3
            const testCaseCheckboxes3 = page.locator('text=Test Cases: Form 3').locator('xpath=following::input[@type="checkbox"]').all();
            const checkboxes3 = await testCaseCheckboxes3;

            // Unselect last 3 test cases (3, 4, and 5)
            for (let i = 2; i <= 4; i++) {
                await checkboxes3[i].click();
                await expect(checkboxes3[i]).not.toBeChecked();
            }

            // Select the last test case (5)
            await checkboxes3[4].click();
            await expect(checkboxes3[4]).toBeChecked();

            // Handle Form 4
            const form4Checkbox = page.locator('input[type="checkbox"]').nth(3);
            await form4Checkbox.click();
            await expect(form4Checkbox).toBeChecked();

            // Get all test case checkboxes for Form 4
            const testCaseCheckboxes4 = page.locator('text=Test Cases: Form 4').locator('xpath=following::input[@type="checkbox"]').all();
            const checkboxes4 = await testCaseCheckboxes4;

            // Unselect last 3 test cases (3, 4, and 5)
            for (let i = 2; i <= 4; i++) {
                await checkboxes4[i].click();
                await expect(checkboxes4[i]).not.toBeChecked();
            }

            // Select the last test case (5)
            await checkboxes4[4].click();
            await expect(checkboxes4[4]).toBeChecked();

            // Keep browser open for inspection
            await page.pause();
        } catch (error) {
            await page.screenshot({ path: `error-testcase-selection-${Date.now()}.png` });
            throw error;
        }
    });
}); 