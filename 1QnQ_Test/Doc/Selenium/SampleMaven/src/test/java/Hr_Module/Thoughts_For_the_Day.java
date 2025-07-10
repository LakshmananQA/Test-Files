package Hr_Module;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Thoughts_For_the_Day {
	public static void main(String[] args) throws InterruptedException {
		
	//WebDriver driver=new FirefoxDriver();
		ChromeDriver driver = new ChromeDriver();
	String URL="https://app.qnqpharmacy.com/EmpServicePortal/index.html";
	
	driver.get(URL);
	driver.manage().window().maximize();
	
	WebElement Uname= driver.findElement(By.id("idUserName"));
	Uname.sendKeys("mohanraj");
	Thread.sleep(1000);
	WebElement Pass= driver.findElement(By.id("idPassword"));
	Pass.sendKeys("Qnq$231");
	Thread.sleep(1000);
	WebElement Submit= driver.findElement(By.id("idLogin"));
	Submit.click();
	
	String Title= driver.getTitle();
	System.out.println(Title);
	
    String Curl= driver.getCurrentUrl();
	System.out.println(Curl);
	
	//Navigate the Thought_for_the_day

	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	String Menu ="a[href='thought_for_the_day.html']";
		
	WebElement NavThouht= driver.findElement(By.cssSelector(Menu));
	NavThouht.click();
	
	//Search the record
	
	Thread.sleep(2000);
	WebElement Search1= driver.findElement(By.xpath("//input[@placeholder='Search filter...']"));
	Search1.sendKeys("TIdea0");
	
	//Click Edit icon
	
	WebElement editIcon= driver.findElement(By.id("idEditAsset"));
	editIcon.click();
	
		
    //Edit the existing value
	
	Thread.sleep(1000);
	WebElement CodeTitle = driver.findElement(By.id("idTitle"));
     CodeTitle.clear();
	CodeTitle.sendKeys("TIdea03");
	
	Thread.sleep(1000);
	WebElement Description = driver.findElement(By.xpath("//div[@role='textbox']"));
	Description.clear();
	Description.sendKeys("Test Idea0123456 ");
	
	
	WebElement sibmitEdit= driver.findElement(By.id("idBtnSubmit_ThoughtForTheDayForm"));
	sibmitEdit.click();
	
	//Search the updated record
	Thread.sleep(2000);
	WebElement Search2= driver.findElement(By.xpath("//input[@placeholder='Search filter...']"));
	Search2.sendKeys("TIdea02");
	
}
}
