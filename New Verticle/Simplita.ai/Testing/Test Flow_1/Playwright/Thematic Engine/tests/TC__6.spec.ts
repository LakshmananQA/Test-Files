import { test, expect } from '@playwright/test';

test.describe('Verify successful Thematic Engine load', async () => {
    const BASE_URL = 'http://localhost:3000/';

    test.beforeEach(async ({ page }) => {
        // Navigate to the base URL before each test
        await page.goto(BASE_URL);
        await page.waitForLoadState('domcontentloaded');
        const projectsButton = page.locator('//button[.//span[contains(text(), "Projects")]]');
       await projectsButton.click();

       const form = page.locator('div.w-full.h-3.bg-gray-200.rounded.mb-3')
       await form.click();
            
    });

    test('Verify user can change the field placeholder using Elements Module', async ({ page }) => {
        
       const ElementsModule = page.locator('button:has(span.text-xs:has-text("Elements"))')
       await ElementsModule.click();
       await page.waitForTimeout(1000);

       const fontsize = page.locator('//input[@placeholder="Enter font size"]')
       await fontsize.click();
       await fontsize.fill('30');
       await page.waitForTimeout(1000);
       
    });

});
