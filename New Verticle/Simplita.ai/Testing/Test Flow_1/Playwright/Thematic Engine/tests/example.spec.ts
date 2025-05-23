import { test, expect } from '@playwright/test';


test('Load the Thematic Engine, ensure elemenn', async ({ page }) => {
    
  // Step 1: Load the URL
  await page.goto('http://localhost:3000/');

  // Step 2: Wait until all elements are loaded properly
  await page.waitForLoadState('networkidle'); // Wait for the network to become idle
  console.log("Page loaded successfully");

  // Step 3: Click the "Projects" button using the specified DOM element
  const projectsButton = page.locator('//button[.//span[contains(text(), "Projects")]]');
await projectsButton.click();
 

  // Step 4: Keep the browser open (This will prevent the browser from closing)
  console.log("Browser will remain open. Close manually when done.");
  await page.pause();
});
