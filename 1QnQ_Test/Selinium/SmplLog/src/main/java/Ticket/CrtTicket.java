package Ticket;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class CrtTicket {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
				ChromeDriver driver = new ChromeDriver();
			     
				String TestURL= "https://app.qnqpharmacy.com/ERP-V0.1/index.html";
				driver.get(TestURL);
		        driver.manage().window().maximize();
				
		        driver.findElement(By.id("email")).sendKeys("Sandhiya");		
		     	driver.findElement(By.id("password")).sendKeys("Qnq@123");
		 		driver.findElement(By.id("login-submit")).click();
		 		
		 		String GCUrl= driver.getCurrentUrl();
		 		System.out.println(GCUrl);

		 		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		 		
		 		WebElement TktSys  = driver.findElement(By.xpath("/html/body/div[1]/aside[1]/div/nav/ul/li[1]/a/p"));
		 		TktSys.click();
		 		
		 		WebElement AddTkt  = driver.findElement(By.xpath("/html/body/div[1]/aside[1]/div/nav/ul/li[1]/ul/li[1]/a"));
		 		AddTkt.click();
		 		
		 		WebElement CrtTkt  = driver.findElement(By.xpath("//button[@class='btn bg-gradient-success']"));
		 		CrtTkt.click();
		 		
		 		Thread.sleep(2000);
		 		
		 		WebElement Name  = driver.findElement(By.xpath("//span[@id='select2-EmployeeName-container']"));
		 		Name.click();
		 		WebElement Src1  = driver.findElement(By.className("select2-search__field"));
		 		Src1.click();
		 		Src1.sendKeys("arun");
		 		Src1.sendKeys(Keys.ENTER);
		 		
		 		WebElement Dep  = driver.findElement(By.xpath("//span[@id='select2-Department-container']"));
		 		Dep.click();
		 		WebElement Src2  = driver.findElement(By.className("select2-search__field"));
		 		Src2.click();
		 		Src2.sendKeys("HR");
		 		Src2.sendKeys(Keys.ENTER);
		 		
		 		WebElement AssGrp  = driver.findElement(By.xpath("//span[@id='select2-AssignedGroup-container']"));
		 		AssGrp.click();
		 		WebElement Src3  = driver.findElement(By.className("select2-search__field"));
		 		Src3.click();
		 		Src3.sendKeys("it");
		 		Src3.sendKeys(Keys.ENTER);
		 		
		 		WebElement Ctg  = driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[2]/div/div/div[2]/form/div/fieldset/div[3]/div[2]/span/span[1]/span"));
		 		Ctg.click();
		 		WebElement Src4 = driver.findElement(By.className("select2-search__field"));
		 		Src4.click();
		 		Src4.sendKeys("hardware");
		 		Src4.sendKeys(Keys.ENTER);

		 		WebElement SubCtg  = driver.findElement(By.xpath("//span[@id='select2-Subcategory-container']"));
		 		SubCtg.click();
		 		WebElement Src5 = driver.findElement(By.className("select2-search__field"));
		 		Src5.click();
		 		Src5.sendKeys("vendor");
		 		Src5.sendKeys(Keys.ENTER);
		 		
		 		WebElement Subject  = driver.findElement(By.id("Subject"));
		 		Subject.sendKeys("Lap Not Working");
		 		
		 		WebElement Description  = driver.findElement(By.id("Description"));
		 		Description.sendKeys("Lap Not Working");
		 		
		 		WebElement Des  = driver.findElement(By.xpath("//span[@id='select2-Priority-container']"));
		 		Des.click();
		 		WebElement Src6 = driver.findElement(By.className("select2-search__field"));
		 		Src6.click();
		 		Src6.sendKeys("Normal");
		 		Src6.sendKeys(Keys.ENTER);
		 		
		 		WebElement Contact = driver.findElement(By.id("ContactInfo"));
		 		Contact.sendKeys("9025841410");
		 		
		 		WebElement create = driver.findElement(By.id("create"));
		 		create.click();
		 		
		 		WebElement TktSys2 = driver.findElement(By.xpath("/html/body/div[1]/aside[1]/div/nav/ul/li[1]/a/p"));
		 		TktSys2.click();
		 		
		 		WebElement TktFeedback  = driver.findElement(By.xpath("/html/body/div[1]/aside[1]/div/nav/ul/li[1]/ul/li[2]/a/p"));
		 		TktFeedback.click();
		 		
		 		WebElement Logout  = driver.findElement(By.xpath("//*[@id=\"sidebarmenu\"]/li[2]/a"));
		 		Logout.click();
	}

}
