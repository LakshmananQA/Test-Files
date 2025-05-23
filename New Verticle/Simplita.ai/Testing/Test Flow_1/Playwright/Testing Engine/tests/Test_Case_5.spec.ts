import { test, expect } from '@playwright/test';

test.describe('Failed Test Case Suggestion Tests', () => {
  test.beforeEach(async ({ page }) => {
    page.setDefaultTimeout(30000);
    await page.goto('http://localhost:3000/', {
      waitUntil: 'domcontentloaded',
    });
    // Maximize the window
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page.getByRole('heading', { name: 'Testing Engine' })).toBeVisible();
  });

  test('Verify failed test case suggestions for Form 1', async ({ page }) => {
    try {
      // Handle Form 3 checkbox
      const form3Checkbox = page.locator('input[type="checkbox"]').nth(2);
      await form3Checkbox.click();
      await expect(form3Checkbox).toBeChecked();

      // Find and click Fetch Test Script button
      const fetchButton = page.getByRole('button', { name: 'Fetch Test Script' });
      await fetchButton.click();
      await page.waitForTimeout(8000); // Wait 8 seconds after fetch

      // Replace 'input[name="headless"]' with the correct selector
      const headlessCheckbox = page.locator('input[id="headless"]');
      await headlessCheckbox.uncheck();
      await expect(headlessCheckbox).not.toBeChecked();

      // Find and click Start Test button
      const startTestButton = page.getByRole('button', { name: 'Start Test' });
      await startTestButton.click();
      await page.waitForTimeout(8000); // Wait 8 seconds

      // Find and click End Test button
      const endTestButton = page.getByRole('button', { name: 'End Test' });
      await endTestButton.click();
      await page.waitForTimeout(500); // Short wait

      // ──────────────────────────────────────────────────────────────────────────
      // Verify suggestions are displayed for failed test cases
      // ──────────────────────────────────────────────────────────────────────────

      // Check that the table header "Suggestion for Failed test case" is visible
      const suggestionHeader = page.locator('text=Suggestion for Failed test case');
      await expect(suggestionHeader).toBeVisible();

      // Row 1: Test Case 1
       const suggestionCase1 = page.locator('text=Check for Proper Element Selection');
      await expect(suggestionCase1).toBeVisible();

      // ──────────────────────────────────────────────────────────────────────────

      // Keep browser open for inspection
      await page.pause();
    } catch (error) {
      // Take a screenshot if an error occurs
      await page.screenshot({ path: `error-failed-suggestions-${Date.now()}.png` });
      throw error;
    }
  });
});
