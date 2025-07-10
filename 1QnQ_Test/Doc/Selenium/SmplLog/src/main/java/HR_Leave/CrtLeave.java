package HR_Leave;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class CrtLeave {

	public static void main(String[] args) {
		ChromeDriver driver = new ChromeDriver();
	     
		String TestURL= "https://app.qnqpharmacy.com/ERP-V0.1/Emp/index.html";
		driver.get(TestURL);
        driver.manage().window().maximize();
		
        driver.findElement(By.id("email")).sendKeys("Bharathy");		
     	driver.findElement(By.id("password")).sendKeys("1999-03-31");
 		driver.findElement(By.id("login-submit")).click();
 		
 		String GCUrl= driver.getCurrentUrl();
 		System.out.println(GCUrl);

 		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
 		
 		WebElement LevFrm  = driver.findElement(By.xpath("/html/body/div[1]/aside[1]/div/div[4]/div/div/nav/ul/li[4]/a/p"));
 		LevFrm.click();
 		
 		WebElement AddLev  = driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[4]/div[1]/div/div/div/div[2]/form/div[1]/div/div/button"));
 		AddLev.click();
 		
 		WebElement Name  = driver.findElement(By.xpath("//span[@id='select2-LeaveCategory-container']"));
 		Name.click();
 		WebElement Src1  = driver.findElement(By.className("select2-search__field"));
 		Src1.click();
 		Src1.sendKeys("Full Day");
 		Src1.sendKeys(Keys.ENTER);

	}

}
