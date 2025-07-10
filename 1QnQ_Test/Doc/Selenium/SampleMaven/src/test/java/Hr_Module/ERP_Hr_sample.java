package Hr_Module;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class ERP_Hr_sample {

	@SuppressWarnings("deprecation")
	public static void main(String[] args) throws InterruptedException {

			
    ChromeDriver driver = new ChromeDriver();
		
		//Load the ERP URL
		String URL="http://192.168.1.8:8080/ERP-V0.1/index.html";		
		driver.get(URL);
		
		//Maximize the browser
		driver.manage().window().maximize();
		
		WebElement Uname= driver.findElement(By.id("email"));		
		WebElement Pass= driver.findElement(By.id("password"));
		WebElement Submit= driver.findElement(By.id("login-submit"));
		
		
		Uname.sendKeys("Admin");
		Pass.sendKeys("123456");
		Submit.click();
		
		Thread.sleep(5000);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		
		String Dum ="(//a[@class='nav-link '])[143]";
		
		
		String HRMenu ="body > div:nth-child(1) > aside:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) "
				+ "> div:nth-child(1) > nav:nth-child(1) > ul:nth-child(1) > li:nth-child(53) > a:nth-child(1)";			
		String DepMenu ="(//a[@class='nav-link '])[61]";
		String ITMenu = "body div[class='wrapper'] li[class='nav-item has-treeview menu-open'] li[class='nav-item has-treeview menu-open']"
				+ " li:nth-child(9) a:nth-child(1)";
		
		WebElement DumNav= driver.findElement(By.xpath(Dum));
		DumNav.click();
		
		//Navigate to HR Module
		WebElement HRNav= driver.findElement(By.cssSelector(HRMenu));
		HRNav.click();
		
		//Navigate to Department AttendanceModule
		Thread.sleep(2000);	
		WebElement DepNav= driver.findElement(By.xpath(DepMenu));
		DepNav.click();
		
		//Navigate to IT Attendance Module		
		WebElement ITNav= driver.findElement(By.cssSelector(ITMenu));
		ITNav.click();
			
		//Mani Attendance record-------1
				String Attendance1= "Present";
				
				Thread.sleep(2000);	
				WebElement Search= driver.findElement(By.xpath("//input[@type='search']"));
				Search.click();
				Search.clear();
				
				WebElement Atten= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]"
						+ "/div/div/div[2]/form/div[1]/div/div/div/div[2]/div[2]/table/tbody/tr/td[7]/select"));
						
				WebElement Shift= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]"
						+ "/div/div/div[2]/form/div[1]/div/div/div/div[2]/div[2]/table/tbody/tr/td[8]/select"));
				
				WebElement Remarks= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]"
				 		+ "/div/div/div[2]/form/div[1]/div/div/div/div[2]/div[2]/table/tbody/tr/td[10]/input"));
				
				Search.sendKeys("Mani");
				Atten.click();
				Atten.sendKeys(Attendance1);
				Atten.sendKeys(Keys.ENTER);
				
				if(Attendance1=="Present") {
				  Shift.click();
				  Shift.sendKeys("Full");
				  Shift.sendKeys(Keys.ENTER);	
				  
				  Remarks.click();
				  Remarks.sendKeys("Marked as Present");
				 }
				  else if (Attendance1=="Absent"){
				     Remarks.click();
					 Remarks.sendKeys("Marked as Absent");
					
				 }
				   else if (Attendance1=="Weekly Comp Off"){
					     Remarks.click();
						 Remarks.sendKeys("Comp Off taken");
						
					 }
		
		//Madhu Attendance record-------2
				String Attendance2= "Absent";
				
				Thread.sleep(2000);	
				WebElement Search2= driver.findElement(By.xpath("//input[@type='search']"));
				Search2.clear();
				Search2.sendKeys("Madhu");
				WebElement Atten2= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]"
						+ "/div/div/div[2]/form/div[1]/div/div/div/div[2]/div[2]/table/tbody/tr/td[7]/select"));
				Atten2.click();
				Atten2.sendKeys(Attendance2);
				Atten2.sendKeys(Keys.ENTER);
				
				WebElement Shift2= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]"
						+ "/div/div/div[2]/form/div[1]/div/div/div/div[2]/div[2]/table/tbody/tr/td[8]/select"));
				WebElement Remarks2= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]"
				 		+ "/div/div/div[2]/form/div[1]/div/div/div/div[2]/div[2]/table/tbody/tr/td[10]/input"));
				
				if(Attendance2=="Present") {
					Shift2.click();
					Shift2.sendKeys("Full");
					Shift2.sendKeys(Keys.ENTER);	
					  
					Remarks2.click();
					Remarks2.sendKeys("Marked as Present");
					 }
					  else if (Attendance2=="Absent"){
						  Remarks2.click();
						  Remarks2.sendKeys("Marked as Absent");
						
					 }
					   else if (Attendance2=="Weekly Comp Off"){
						   Remarks2.click();
						   Remarks2.sendKeys("Comp Off taken");				
					   }
		
		//Bharathi Attendance record-------1
				String Attendance3= "Weekly Comp Off";
                				
				Thread.sleep(2000);	
				WebElement Search3= driver.findElement(By.xpath("//input[@type='search']"));
				Search3.click();
				Search3.clear();
				Search3.sendKeys("Bharathi");
				WebElement Atten3= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]"
						+ "/div/div/div[2]/form/div[1]/div/div/div/div[2]/div[2]/table/tbody/tr/td[7]/select"));
				Atten3.click();
				Atten3.sendKeys(Attendance3);
				Atten3.sendKeys(Keys.ENTER);
				
				WebElement Shift3= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]"
						+ "/div/div/div[2]/form/div[1]/div/div/div/div[2]/div[2]/table/tbody/tr/td[8]/select"));
				WebElement Remarks3= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]"
				 		+ "/div/div/div[2]/form/div[1]/div/div/div/div[2]/div[2]/table/tbody/tr/td[10]/input"));
				
				if(Attendance3=="Present") {
					Shift3.click();
					Shift3.sendKeys("Full");
					Shift3.sendKeys(Keys.ENTER);	
					  
					Remarks3.click();
					Remarks3.sendKeys("Marked as Present");
					 }
					  else if (Attendance3=="Absent"){
						  Remarks3.click();
						  Remarks3.sendKeys("Marked as Absent");
						
					 }
					   else if (Attendance3=="Weekly Comp Off"){
						   Remarks3.click();
						   Remarks3.sendKeys("Comp Off taken");				
					   }
	}
	}