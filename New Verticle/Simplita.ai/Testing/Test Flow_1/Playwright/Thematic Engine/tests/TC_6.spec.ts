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

    test('Verify user can change the button Size and font using ButtonTypography Module and using AI with Prompt', async ({ page }) => {
        
       const ButtonTypographyModule = page.locator('button:has(svg.lucide-type):has-text("Button Typography")')
       await ButtonTypographyModule.click();
       await page.waitForTimeout(1000);

       const Lato = page.locator('//div[text()="Lato"]')
       await Lato.click();
       await page.waitForTimeout(1000);

       const fontsize = page.locator('//input[@placeholder="Enter font size"]')
       await fontsize.click();
       await fontsize.fill('30');
       await page.waitForTimeout(1000);

       const fontweight = page.locator('//input[@placeholder="Enter font weight (100-900)"]')
       await fontweight.click();
       await fontsize.fill('30');
       await page.waitForTimeout(1000);
       
       const letterspacing = page.locator('//input[@placeholder="Enter letter spacing"]')
       await letterspacing.click();
       await letterspacing.fill('30');
       await page.waitForTimeout(1000);

  
    });

    test('Verify user can change the Typography using AI with Prompt', async ({ page }) => {
        const buttonLocator = page.locator('button.fixed.bottom-6.right-6.w-12.h-12.rounded-full.bg-blue-500')
        await buttonLocator.click();
        console.log("Message icon clicked successfully");
        await page.waitForTimeout(1000);

        // Step 2: Interact with the Chat field
        const chatField = page.locator('input[placeholder="Try \'use dark theme\' or \'create a forest theme\'..."]');
        await chatField.click();
        await chatField.fill('set Font Size (px) as 40 in entire form');
        await page.waitForTimeout(1000);

        const sendButton = page.locator('button:has-text("Send")');
        await sendButton.click();
        console.log("Send button clicked successfully");

        console.log("Browser will remain open. Close manually when done.");
        await page.pause();
    });

});
