package Practice;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;  // You need to add Apache Commons IO library

public class PrcScreenShot {
    public static void main(String[] args) throws IOException, InterruptedException {
        // Set up WebDriver (ChromeDriver in this case)
    	ChromeDriver driver = new ChromeDriver();
	     
		String URL="http://192.168.1.39:8080/ERP-V0.1/index.html";	
		String TestURL= "https://qnqhealthcare.com/ERP%20V0.1/index.html";
		driver.get(TestURL);
		
		//Maximize the browser
		driver.manage().window().maximize();
		
		WebElement Uname= driver.findElement(By.id("email"));		
		WebElement Pass= driver.findElement(By.id("password"));
		WebElement Submit= driver.findElement(By.id("login-submit"));
		
		
		Uname.sendKeys("Tester_Laksh");
		Pass.sendKeys("Qtne#541");
		Submit.click();
		
		Thread.sleep(5000);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		

		String ITMenu = "/html/body/div[1]/aside[1]/div/nav/ul/li[2]/a";
		
		//Navigate to IT Attendance Module		
		WebElement ITNav= driver.findElement(By.xpath(ITMenu));
		ITNav.click();
		
            // Take a screenshot
            File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);

            // Specify where to store the screenshot
            String timestamp = new SimpleDateFormat("yyyy-MM-dd-HH_mm_ss").format(new Date());
            File destinationFile = new File("D:\\QnQ_Test\\Selinium\\MVAutomation\\ScreenShot\\Practice\\" + timestamp + ".png" );

            // Copy the screenshot to the destination
            FileUtils.copyFile(screenshot, destinationFile);

            System.out.println("Screenshot saved at: " + destinationFile.getAbsolutePath());
            
            WebElement Logout = driver.findElement(By.linkText("Logout"));
            Logout.click();
            driver.close();
 
    }
}
