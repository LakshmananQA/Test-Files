import { test, expect } from '@playwright/test';

test.describe('Verify the form layout', () => {
    const SETTINGS = {
        URL: 'http://localhost:3000/templates',
        VIEWPORT: { width: Math.floor(1920 * 0.75), height: Math.floor(1080 * 0.75) }
    };

    const SELECTORS = {
        VIEW_FORM_BUTTON: '//button[contains(text(), "View Form")]', // XPath for View Form button
        TAX: 'input[placeholder="Enter tax"]', // Tax field
        QUANTITY: 'input[placeholder="Enter quantity"]', // Quantity field
        SUBTOTAL: '//input[@placeholder="Enter subtotal"]', // XPath for Subtotal
        DISCOUNT: '//input[contains(@class, "rounded-lg") and @placeholder="Enter discount"]', // Discount field
        UNIT_PRICE: 'input[placeholder="Enter unit price"]', // Unit Price
        TOTAL_PRICE: '//input[@placeholder="Enter total price"]', // XPath for Total Price
        PRODUCT_NAME: 'input[placeholder="Enter product name"]', // Product Name field
        PRODUCT_CODE: '//input[contains(@class, "rounded-lg") and @placeholder="Enter product code"]', // XPath for Product Code
        SUBMIT_BUTTON: '//button[contains(text(), "Submit Form")]' // XPath for Submit button
    };

    test('Verify the "Data View" grid displays saved records', async ({ page }) => {
        // Set viewport size to 75% of 1920x1080
        await page.setViewportSize(SETTINGS.VIEWPORT);
        console.log('Browser window maximized to 75%');

        // Navigate to the specified URL
        await page.goto(SETTINGS.URL, { waitUntil: 'networkidle' });
        console.log('Navigated to templates page');

        // Click the View Form button
        const viewFormButton = page.locator(SELECTORS.VIEW_FORM_BUTTON);
        await expect(viewFormButton).toBeVisible();
        await viewFormButton.click();
        console.log('View Form button clicked successfully');

        // Fill the fields in the specified order
        await page.locator(SELECTORS.TAX).fill('15');
        console.log('Tax field filled.');

        await page.locator(SELECTORS.QUANTITY).fill('8');
        console.log('Quantity field filled.');

        await page.locator(SELECTORS.SUBTOTAL).fill('120');
        console.log('Subtotal field filled.');

        await page.locator(SELECTORS.UNIT_PRICE).fill('25');
        console.log('Unit Price field filled.');

        await page.locator(SELECTORS.TOTAL_PRICE).fill('200');
        console.log('Total Price field filled.');

        await page.locator(SELECTORS.PRODUCT_NAME).fill('Sample Product2');
        console.log('Product Name field filled.');

         // Click the Submit Form button
        const submitButton = page.locator(SELECTORS.SUBMIT_BUTTON);
        await expect(submitButton).toBeVisible();
        await submitButton.click();
        console.log('Submit Form button clicked successfully.');

        // Wait for 5 seconds for any post-submission processing
        await page.waitForTimeout(5000);
        console.log('Waited for 5 seconds after form submission.');


        const productNameValue = await page.locator(SELECTORS.PRODUCT_NAME).inputValue();
        console.log(`Product Name field value: ${productNameValue}`);
        expect(productNameValue).toBe('Sample Product2');
        console.log('Product Name field value is displayed as expected.');
    });
});
