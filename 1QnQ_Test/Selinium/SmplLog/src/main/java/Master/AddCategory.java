package Master;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class AddCategory {
	WebDriver driver;
	@BeforeClass
	public void setup() throws InterruptedException {
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
 		
 		WebElement ExpiryVer_Menu  = driver.findElement(By.xpath("/html/body/div[1]/aside[1]/div/div[4]/div/div/nav/ul/li[42]/a/p"));
 		ExpiryVer_Menu.click();
 		
 		WebElement Database_Menu  = driver.findElement(By.xpath("/html/body/div[1]/aside[1]/div/div[4]/div/div/nav/ul/li[37]/a"));
 		Database_Menu.click();
 		
 		WebElement Ctg_Menu  = driver.findElement(By.xpath("/html/body/div[1]/aside[1]/div/div[4]/div/div/nav/ul/li[37]/ul/li[5]/a"));
 		Ctg_Menu.click();
 		
 		 WebElement body = driver.findElement(By.tagName("body"));
         body.sendKeys(Keys.PAGE_DOWN);
         
 		Thread.sleep(1000);
 		
 		WebElement Addbutton = driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div/div/div/div[2]/form/div[2]/div/div/button"));
 		Addbutton.click();
 		
 		Thread.sleep(2000);
 		
 		WebElement Category  = driver.findElement(By.id("Category"));
 		Category.sendKeys("Ltg3");
 		
 		WebElement createbtn  = driver.findElement(By.id("create"));
 		createbtn.click();
	 }
	 @Test(priority = 1)
	 public void testUpdate() {
 		//Update the created record
 		WebElement Searchbox  = driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div/div/div/div[2]/form/div[1]/div/div/div/div[1]/div[2]/div/label/input"));
 		Searchbox.sendKeys("Ltg3");
 		
 		WebElement EditIcon = driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/span[2]/a"));
 		EditIcon.click();

 		WebElement UpCategory  = driver.findElement(By.id("Category"));
 		UpCategory.sendKeys("UpLtg3");
 		
 		WebElement createbtn1 = driver.findElement(By.id("create"));
 		createbtn1.click();
	 }
	}

