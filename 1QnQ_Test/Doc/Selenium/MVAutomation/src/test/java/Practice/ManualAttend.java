package Practice;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import junit.framework.Test;

public class ManualAttend {

	public static void main(String[] args) throws InterruptedException, IOException {
		
		
		ChromeDriver driver = new ChromeDriver();
	     
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
		
		 String AttenDrp="/html/body/div[1]/div[1]/section[2]/div[1]/div[2]"
			  		+ "/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select";
			  
			  String ShiftDrp="/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select";
			  
			  WebElement Atten= driver.findElement(By.xpath(AttenDrp));
			  WebElement Shift= driver.findElement(By.xpath(ShiftDrp));
		
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
            WebElement Search= driver.findElement(By.xpath("//input[@type='search']"));
            
          //  Bharathi Attendance record-------1
			String Attendance= "Present";
				
			Search.clear();
			Search.sendKeys("Bharathi");
			Atten.click();
			Atten.sendKeys(Attendance);
			Atten.sendKeys(Keys.ENTER);
			
							
			if(Attendance=="Present") {
				Shift.click();
				Shift.sendKeys("Full");
				Shift.sendKeys(Keys.ENTER);	
				 }
				  else if (Attendance=="Absent"){
					
				 }
				  else if (Attendance=="Holiday Comp Off"){
				    	 WebElement HolidayDate= driver.findElement(By.id("HolidayDate"));
				    	 HolidayDate.sendKeys("09/07/2024");
				    	 HolidayDate.sendKeys(Keys.ENTER);
				    	 Thread.sleep(1000);
				    	 String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
				    	 WebElement Close= driver.findElement(By.xpath(Cl));
				    	 Close.click();
				 }
		
		//Edwin Christopher Attendance record-------2
			String Attendance2= "Present";
			
			Search.click();
			Search.clear();
			Search.sendKeys("Edwin Christopher");
			Atten.click();
			Atten.sendKeys(Attendance2);
			Atten.sendKeys(Keys.ENTER);
				
			if(Attendance2=="Present") {
						
				Shift.click();
				Shift.sendKeys("Full");
				Shift.sendKeys(Keys.ENTER);	
				 }
				  else if (Attendance2=="Absent"){
					  Atten.click();
				 }
				  else if (Attendance2=="Holiday Comp Off"){
				    	 WebElement HolidayDate= driver.findElement(By.id("HolidayDate"));
				    	 HolidayDate.sendKeys("09/07/2024");
				    	 HolidayDate.sendKeys(Keys.ENTER);
				    	 Thread.sleep(1000);
				    	 String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
				    	 WebElement Close= driver.findElement(By.xpath(Cl));
				    	 Close.click();
				 }
//			Harihararajan Jayakumar Attendance record-------3
			String Attendance3= "Present";

			Search.click();
			Search.clear();
			Search.sendKeys("Harihararajan Jayakumar");
			
			Atten.click();
			Atten.sendKeys(Attendance3);
			Atten.sendKeys(Keys.ENTER);
					
			if(Attendance3=="Present") {
				Shift.click();
				Shift.sendKeys("Full");
				Shift.sendKeys(Keys.ENTER);	
				 }
				  else if (Attendance3=="Absent"){
					  Shift.click();
				 }
				  else if (Attendance3=="Holiday Comp Off"){
				    	 WebElement HolidayDate= driver.findElement(By.id("HolidayDate"));
				    	 HolidayDate.sendKeys("09/07/2024");
				    	 HolidayDate.sendKeys(Keys.ENTER);
				    	 Thread.sleep(1000);
				    	 String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
				    	 WebElement Close= driver.findElement(By.xpath(Cl));
				    	 Close.click();
				 }
//			Indirakumar L Attendance record-------4
			String Attendance4= "Present";

			Search.click();
			Search.clear();
			Search.sendKeys("Indirakumar L");
			
			Atten.click();
			Atten.sendKeys(Attendance4);
			Atten.sendKeys(Keys.ENTER);
					
			if(Attendance4=="Present") {
				Shift.click();
				Shift.sendKeys("Full");
				Shift.sendKeys(Keys.ENTER);	
				 }
				  else if (Attendance4=="Absent"){
					  Shift.click();
				 }
				  else if (Attendance4=="Holiday Comp Off"){
				    	 WebElement HolidayDate= driver.findElement(By.id("HolidayDate"));
				    	 HolidayDate.sendKeys("09/07/2024");
				    	 HolidayDate.sendKeys(Keys.ENTER);
				    	 Thread.sleep(1000);
				    	 String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
				    	 WebElement Close= driver.findElement(By.xpath(Cl));
				    	 Close.click();
				 }
//			Kamireddy Saikumar Attendance record-------5
			String Attendance5= "Present";
			
			Search.click();
			Search.clear();
			Search.sendKeys("Kamireddy Saikumar");
			
			Atten.click();
			Atten.sendKeys(Attendance5);
			Atten.sendKeys(Keys.ENTER);
					
			if(Attendance5=="Present") {
				Shift.click();
				Shift.sendKeys("Full");
				Shift.sendKeys(Keys.ENTER);	
				 }
				  else if (Attendance5=="Absent"){
					  Atten.click();
				 }
				  else if (Attendance5=="Holiday Comp Off"){
				    	 WebElement HolidayDate= driver.findElement(By.id("HolidayDate"));
				    	 HolidayDate.sendKeys("09/07/2024");
				    	 HolidayDate.sendKeys(Keys.ENTER);
				    	 Thread.sleep(1000);
				    	 String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
				    	 WebElement Close= driver.findElement(By.xpath(Cl));
				    	 Close.click();

	}

}
}
