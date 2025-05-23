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

    test('Verify user can change the Theme using Theme Module', async ({ page }) => {
        
       const ThemeModule = page.locator('button:has(svg.lucide-palette):has-text("Theme")')
       await ThemeModule.click();
       await page.waitForTimeout(1000);

       const Neontheme = page.locator('button:has(div.font-medium:has-text("Neon"))')
       await Neontheme.click();
       await page.waitForTimeout(1000);
       
    });

    test('Verify user can change the Theme using AI with Prompt', async ({ page }) => {
        
        const buttonLocator = page.locator('button.fixed.bottom-6.right-6.w-12.h-12.rounded-full.bg-blue-500')
        await buttonLocator.click();
        console.log("Message icon clicked successfully");
        await page.waitForTimeout(1000);

        // Step 2: Interact with the Chat field
        const chatField = page.locator('input[placeholder="Try \'use dark theme\' or \'create a forest theme\'..."]');
         await chatField.click();
        await chatField.fill('Set the Pastle theme for entire form');
        await page.waitForTimeout(1000);

        const sendButton = page.locator('button:has-text("Send")');
        await sendButton.click();
        console.log("Send button clicked successfully");


     });
});
