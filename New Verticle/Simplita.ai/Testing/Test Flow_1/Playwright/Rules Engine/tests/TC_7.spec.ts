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

        const workflowTitle = page.locator('//h4[text()="Workflow 20250122_131230"]');
        await workflowTitle.click();
        await page.waitForTimeout(500);

        const zoomOutButton = page.locator('button.react-flow__controls-button.react-flow__controls-zoomout');
        await zoomOutButton.click();
        await page.waitForTimeout(500);

 
        const testWorkflowButton = page.locator('button.px-4.py-2:has-text("Test Workflow")');
        await testWorkflowButton.click();
        await page.waitForTimeout(500);

    });

});
