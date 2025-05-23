import { test, expect } from '@playwright/test';

test.describe('Migration Engine Page Structure Verification', () => {
    // Constants for reusable selectors and settings
    const SETTINGS = {
        URL: 'http://localhost:3000/templates',
        VIEWPORT: { width: Math.floor(1920 * 0.75), height: Math.floor(1080 * 0.75) },
        TIMEOUT: 10000
    };

    const SELECTORS = {
        VIEW_FORM_BUTTON: 'button:has-text("View Form")',
        PAGE_TITLE: 'h1',
        CHAT_ICON: 'svg.lucide.lucide-message-circle',
        CHAT_FIELD: 'input[placeholder="Type your message..."]',
        SEND_BUTTON: 'svg.lucide.lucide-send'
    };

    test('Navigate through templates page and Verify AI Form Assistant prompt handling', async ({ page }) => {
        // Set viewport size to 75% of 1920x1080
        await page.setViewportSize(SETTINGS.VIEWPORT);
        console.log('Browser window maximized to 75%');

        // Navigate to the specified URL
        await page.goto(SETTINGS.URL, { waitUntil: 'networkidle' });
        console.log('Navigated to templates page');

 
        // Step 1: Click the chat icon
        const chatIcon = page.locator(SELECTORS.CHAT_ICON);
        await expect(chatIcon).toBeVisible(); // Ensure the chat icon is visible
        await chatIcon.click();
        console.log('Chat icon clicked successfully.');

        // Step 2: Enter a message in the chat field
        const chatField = page.locator(SELECTORS.CHAT_FIELD);
        await expect(chatField).toBeVisible(); // Ensure the chat field is visible
        await chatField.fill('hi'); // Enter the message "hi"
        console.log('Message entered in the chat field.');

        // Step 3: Click the send button
        const sendButton = page.locator(SELECTORS.SEND_BUTTON);
        await expect(sendButton).toBeVisible(); // Ensure the send button is visible
        await sendButton.click();
        console.log('Send button clicked successfully.');
    });
});
