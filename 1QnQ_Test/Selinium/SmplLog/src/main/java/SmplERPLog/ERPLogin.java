package SmplERPLog;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class ERPLogin {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ChromeDriver driver = new ChromeDriver();
	     
		String TestURL= "https://app.qnqpharmacy.com/ERP-V0.1/index.html";
		driver.get(TestURL);
        driver.manage().window().maximize();
		
        driver.findElement(By.id("email")).sendKeys("Admin");		
     	driver.findElement(By.id("password")).sendKeys("123456");
 		driver.findElement(By.id("login-submit")).click();
 		
 		String GCUrl= driver.getCurrentUrl();
 		System.out.println(GCUrl);

 		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
 		
 		driver.findElement(By.xpath("/html/body/div[1]/aside[1]/div/div[4]/div/div/nav/ul/li[55]/a")).click(); 
 		driver.findElement(By.xpath("/html/body/div[1]/aside[1]/div/div[4]/div/div/nav/ul/li[55]/ul/li[5]/a")).click(); 
 		driver.findElement(By.xpath("/html/body/div[1]/aside[1]/div/div[4]/div/div/nav/ul/li[55]/ul/li[5]/ul/li[1]/a/p")).click(); 
 		driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[4]/div[1]/div/div/div/div[2]/form/div[2]/div/div/button")).click(); 
 		
 		//Logout
 		//driver.findElement(By.xpath("/html/body/div[1]/aside[1]/div/div[4]/div/div/nav/ul/li[70]/a")).click();
 		
	
	}

}
