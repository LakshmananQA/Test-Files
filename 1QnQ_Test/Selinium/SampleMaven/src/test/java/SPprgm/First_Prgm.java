package SPprgm;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;


public class First_Prgm {

	public static void main(String[] args) throws IOException {
        // Set up WebDriver
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver"); // Add path to your ChromeDriver
        WebDriver driver = new ChromeDriver();

        // Path to the Excel file
        String excelFilePath = "path/to/data.xlsx";

        // Load Excel file
        FileInputStream inputStream = new FileInputStream(new File(excelFilePath));
        Workbook workbook = new XSSFWorkbook(inputStream);
        Sheet sheet = workbook.getSheetAt(0);  // Access first sheet

        // Iterate through each row (starting from row 1 to skip headers)
        for (int i = 1; i <= sheet.getLastRowNum(); i++) {
            Row row = sheet.getRow(i);

            // Get data from the cells
            String name = row.getCell(0).getStringCellValue();
            String email = row.getCell(1).getStringCellValue();
            double age = row.getCell(2).getNumericCellValue();  // Age is numeric, so get it as a double

           driver.get("http://example.com/form");  // Replace with your web form URL

            driver.findElement(By.id("nameField")).sendKeys(name);      // Replace with the actual ID of the name field
            driver.findElement(By.id("emailField")).sendKeys(email);    // Replace with the actual ID of the email field
            driver.findElement(By.id("ageField")).sendKeys(String.valueOf((int)age));  // Replace with the actual ID of the age field

            // Submit the form
            driver.findElement(By.id("submitButton")).click();  // Replace with the actual submit button ID

            // Optional: Add a delay or use WebDriverWait for the next iteration
            try {
                Thread.sleep(2000);  // This is just to see the automation in action
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        // Close the workbook and input stream
        workbook.close();
        inputStream.close();

        // Close the browser
        driver.quit();
    }
}