package LocalItAttd;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class LocalAttd {
	
	public static void main(String args[]) throws InterruptedException {
		
ChromeDriver driver = new ChromeDriver();
		
		//Load the ERP URL
		String URL="http://192.168.1.8:8080/ERP-V0.1/index.html";	
		String LcUrl2 = "http://192.168.1.39:8080/ERP-V0.1/index.html";
		driver.get(LcUrl2);
		
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
				Search.sendKeys("Mani");
				String Att ="/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]"
						+ "/div/div/div/div[2]/div[2]/table/tbody/tr/td[6]/select";
				WebElement Atten1= driver.findElement(By.xpath(Att));
				Atten1.click();
				Atten1.sendKeys(Attendance1);
				Atten1.sendKeys(Keys.ENTER);
				WebElement Shift1= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]"
						+ "/div/div/div[2]/form/div[1]/div/div/div/div[2]/div[2]/table/tbody/tr/td[7]/select"));
							
				if(Attendance1=="Present") {
					Shift1.click();
					Shift1.sendKeys("Full");
					Shift1.sendKeys(Keys.ENTER);	
				  
				 }
				  else if (Attendance1=="Absent"){
				
					
				 }
				   else if (Attendance1=="Weekly Comp Off"){
					  	
					 }
				//Kanimozhi Attendance record-------2
				String Attendance2= "Present";
            
				WebElement Search2= driver.findElement(By.xpath("//input[@type='search']"));
				Search2.click();
				Search2.clear();
				Search2.sendKeys("Madhu");
				String Att2 ="/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]"
						+ "/div/div/div/div[2]/div[2]/table/tbody/tr/td[6]/select";
				WebElement Atten2= driver.findElement(By.xpath(Att2));
				Atten2.click();
				Atten2.sendKeys(Attendance2);
				Atten2.sendKeys(Keys.ENTER);
				
				WebElement Shift2= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]"
						+ "/div/div/div[2]/form/div[1]/div/div/div/div[2]/div[2]/table/tbody/tr/td[7]/select"));
				if(Attendance2=="Present") {
					Thread.sleep(1000);
					Shift2.click();
					Shift2.sendKeys("Full");
					Shift2.sendKeys(Keys.ENTER);	
					 }
					  else if (Attendance2=="Absent"){
						  Atten2.click();
						
					 }
					   else if (Attendance2=="Weekly Comp Off"){		
						   Atten2.click();
					   }
		
		//Test user Attendance record-------3
				String Attendance3= "Present";
         		WebElement Search3= driver.findElement(By.xpath("//input[@type='search']"));
				Search3.click();
				Search3.clear();
				Search3.sendKeys("test user");
				String Att3 ="/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]"
						+ "/div/div/div/div[2]/div[2]/table/tbody/tr/td[6]/select";
				WebElement Atten3= driver.findElement(By.xpath(Att3));
				Atten3.click();
				Atten3.sendKeys(Attendance3);
				Atten3.sendKeys(Keys.ENTER);
				
				WebElement Shift3= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]"
						+ "/div/div/div[2]/form/div[1]/div/div/div/div[2]/div[2]/table/tbody/tr/td[7]/select"));
				if(Attendance3=="Present") {
					Shift3.click();
					Shift3.sendKeys("Full");
					Shift3.sendKeys(Keys.ENTER);	
					 }
					  else if (Attendance3=="Absent"){		
						  Atten3.click();
					 }
					   else if (Attendance3=="Weekly Comp Off"){	
						   Atten3.click();
					   }
				//Ravi Attendance record-------4
				String Attendance4= "Weekly Comp Off";

				WebElement Search4= driver.findElement(By.xpath("//input[@type='search']"));
				Search4.click();
				Search4.clear();
				Search4.sendKeys("ravi");
				String Att4 ="/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]"
						+ "/div/div/div/div[2]/div[2]/table/tbody/tr/td[6]/select";
				WebElement Atten4= driver.findElement(By.xpath(Att4));
				Atten4.click();
				Atten4.sendKeys(Attendance4);
				Atten4.sendKeys(Keys.ENTER);
				
				WebElement Shift4= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]"
						+ "/div/div/div[2]/form/div[1]/div/div/div/div[2]/div[2]/table/tbody/tr/td[7]/select"));
				
				if(Attendance4=="Present") {
					Shift4.click();
					Shift4.sendKeys("Full");
					Shift4.sendKeys(Keys.ENTER);	
					 }
					  else if (Attendance4=="Absent"){
						  Atten4.click();						
					 }
					   else if (Attendance4=="Weekly Comp Off"){	
						   Atten4.click();
					   }
				//Bharathi Attendance record-------5
				String Attendance5= "Absent";
                				
				Thread.sleep(2000);	
				WebElement Search5= driver.findElement(By.xpath("//input[@type='search']"));
				Search5.click();
				Search5.clear();
				Search5.sendKeys("Bharathi");
				String Att5 ="/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]"
						+ "/div/div/div/div[2]/div[2]/table/tbody/tr/td[6]/select";
				WebElement Atten5= driver.findElement(By.xpath(Att5));
				Atten5.click();
				Atten5.sendKeys(Attendance5);
				Atten5.sendKeys(Keys.ENTER);
				
				WebElement Shift5= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]"
						+ "/div/div/div[2]/form/div[1]/div/div/div/div[2]/div[2]/table/tbody/tr/td[7]/select"));
				if(Attendance5=="Present") {
					Shift5.click();
					Shift5.sendKeys("Full");
					Shift5.sendKeys(Keys.ENTER);	
					 }
					  else if (Attendance5=="Absent"){
						  Atten5.click();
											 }
					   else if (Attendance5=="Weekly Comp Off"){	
						   Atten5.click();
					   }
				//Kanimozhi Attendance record-------6
				String Attendance6= "Present";
                				
				Thread.sleep(2000);	
				WebElement Search6= driver.findElement(By.xpath("//input[@type='search']"));
				Search6.click();
				Search6.clear();
				Search6.sendKeys("Kanimozhi");
				String Att6 ="/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]"
						+ "/div/div/div/div[2]/div[2]/table/tbody/tr/td[6]/select";
				WebElement Atten6= driver.findElement(By.xpath(Att6));
				Atten6.click();
				Atten6.sendKeys(Attendance6);
				Atten6.sendKeys(Keys.ENTER);
				
				WebElement Shift6= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]"
						+ "/div/div/div[2]/form/div[1]/div/div/div/div[2]/div[2]/table/tbody/tr/td[7]/select"));
				if(Attendance6=="Present") {
					Shift6.click();
					Shift6.sendKeys("Full");
					Shift6.sendKeys(Keys.ENTER);	
					 }
					  else if (Attendance6=="Absent"){
						  Atten6.click();
						
					 }
					   else if (Attendance3=="Weekly Comp Off"){		
						   Atten6.click();
					   }
				
				Thread.sleep(2000);	
				WebElement CSearch= driver.findElement(By.xpath("//input[@type='search']"));
				CSearch.click();
				CSearch.clear();
				CSearch.sendKeys(Keys.BACK_SPACE);
				
					
				Thread.sleep(3000);	
				WebElement Submit_button= driver.findElement(By.xpath("//button[@id='create1']"));
				((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", Submit_button);
				Thread.sleep(3000);
			Submit_button.click();
	}

	}
