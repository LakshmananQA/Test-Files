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


    });

    test('Verify user can add the validation using menu option', async ({ page }) => {
        // Click the "Validations" button
        const rulesBuilderButton = page.locator('button', { hasText: 'Rules Builder' });
        await rulesBuilderButton.click();
        await page.waitForTimeout(500);

        const Addbutton = page.locator('button.w-8.h-8.rounded-full.bg-blue-600.text-white');
        await Addbutton.click();
        await page.waitForTimeout(500);

        const zoomOutButton = page.locator('button.react-flow__controls-button.react-flow__controls-zoomout');
        await zoomOutButton.click();
        await page.waitForTimeout(500);

        const sendEmailButton = page.locator('//button//div[@class="flex-1"]//span[text()="Send email"]');
        await sendEmailButton.click();
        await page.waitForTimeout(500);

        const saveWorkflowButton = page.locator('button:has-text("Save Workflow")');
        await saveWorkflowButton.click();
        await page.waitForTimeout(500);

        const newButton = page.locator('//button[contains(@class, "bg-blue-600") and .//text()="New"]');
        await newButton.click();
        await page.waitForTimeout(500);

        await Addbutton.click();
        await page.waitForTimeout(500);

        await zoomOutButton.click();
        await page.waitForTimeout(500);

        const sendSmsSpan = page.locator('span:has-text("Send SMS")');
        await sendSmsSpan.click();
        await page.waitForTimeout(500);

        await saveWorkflowButton.click();
        await page.waitForTimeout(500);
    });

});
