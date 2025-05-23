package PracTNG;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.Test;

public class Prc01TngTest {

    WebDriver driver;
    String src = "//input[@type='search']";
    String AttenDrp="/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select";
    String ShiftDrp="/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select";

    @Test(priority = 1)
    public void login() throws InterruptedException {
        driver = new ChromeDriver();  // Initialize the WebDriver
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);  // Set implicit wait

        String TestURL = "https://qnqhealthcare.com/ERP%20V0.1/index.html";
        driver.get(TestURL);

        // Maximize the browser
        driver.manage().window().maximize();

        WebElement Uname = driver.findElement(By.id("email"));
        WebElement Pass = driver.findElement(By.id("password"));
        WebElement Submit = driver.findElement(By.id("login-submit"));

        Uname.sendKeys("Tester_Laksh");
        Pass.sendKeys("YourPasswordHere");  // Add password here
        Submit.click();

        System.out.println(driver.getTitle());
        System.out.println("Login Test Completed");
    }

    @Test(priority = 2)
    public void navigate() throws InterruptedException {
        String ITMenu = "/html/body/div[1]/aside[1]/div/nav/ul/li[2]/a";

        // Navigate to IT Attendance Module
        WebElement ITNav = driver.findElement(By.xpath(ITMenu));
        ITNav.click();
        System.out.println("Navigation to IT Attendance Module Completed");
    }

    @Test(priority = 3)
    public void Person1() throws InterruptedException {
        String Attendance = "Absent";  // Define the attendance status

        // Locate elements dynamically
        WebElement Search = driver.findElement(By.xpath(src));
        WebElement Atten = driver.findElement(By.xpath(AttenDrp));

        // Clear search box and search for "Bharathi"
        Search.clear();
        Search.sendKeys("Bharathi");

        // Set attendance
        Atten.click();
        Atten.sendKeys(Attendance);
        Atten.sendKeys(Keys.ENTER);

        WebElement Shift = driver.findElement(By.xpath(ShiftDrp));

        // Check attendance status and select shift
        if (Attendance.equals("Present")) {  // Use .equals() for string comparison
            Shift.click();
            Shift.sendKeys("Full");
            Shift.sendKeys(Keys.ENTER);
        } else if (Attendance.equals("Absent")) {
            System.out.println("Attendance is marked as Absent.");
            // Add logic here if needed
        } else if (Attendance.equals("Holiday Comp Off")) {
            WebElement HolidayDate = driver.findElement(By.id("HolidayDate"));
            HolidayDate.sendKeys("09/07/2024");
            HolidayDate.sendKeys(Keys.ENTER);
            Thread.sleep(1000);

            // Close the modal after selecting the holiday date
            String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
            WebElement Close = driver.findElement(By.xpath(Cl));
            Close.click();
        }
    }

    @AfterTest
    public void tearDown() {
        if (driver != null) {
            driver.quit();  // Close the browser after test completion
            System.out.println("Browser closed successfully.");
        }
    }
}