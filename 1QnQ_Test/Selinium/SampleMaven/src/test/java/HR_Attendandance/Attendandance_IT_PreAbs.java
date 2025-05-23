package HR_Attendandance;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Attendandance_IT_PreAbs {

	public static void main(String[] args) throws InterruptedException {
	
    ChromeDriver driver = new ChromeDriver();
	
	//Load the LoaERP URL
	//String URL="http://192.168.1.39:8080/ERP-V0.1/index.html";	

//online
String URL="https://qnqhealthcare.com/ERP V0.1/index.html";	
	driver.get(URL);
	
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

    // Navigate to IT Attendance Module
    WebElement ITNav = driver.findElement(By.xpath(ITMenu));
    ITNav.click();
		
	WebElement Search= driver.findElement(By.xpath("//input[@type='search']"));

//	Bharathi Attendance record-------1
	String Attendance= "Present";
		
	Search.clear();
	Search.sendKeys("Bharathi");
	WebElement Atten= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select"));
	WebElement Shift= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select"));
	
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
	WebElement Atten2= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select"));
	WebElement Shift2= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select"));
	Atten2.click();
	Atten2.sendKeys(Attendance2);
	Atten2.sendKeys(Keys.ENTER);
		
	if(Attendance2=="Present") {
				
		Shift2.click();
		Shift2.sendKeys("Full");
		Shift2.sendKeys(Keys.ENTER);	
		 }
		  else if (Attendance2=="Absent"){
			  Atten2.click();
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
//	Harihararajan Jayakumar Attendance record-------3
	String Attendance3= "Present";

	Search.click();
	Search.clear();
	Search.sendKeys("Harihararajan Jayakumar");
	WebElement Atten3= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select"));
	WebElement Shift3= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select"));
	
	Atten3.click();
	Atten3.sendKeys(Attendance3);
	Atten3.sendKeys(Keys.ENTER);
			
	if(Attendance3=="Present") {
		Shift3.click();
		Shift3.sendKeys("Full");
		Shift3.sendKeys(Keys.ENTER);	
		 }
		  else if (Attendance3=="Absent"){
			  Atten3.click();
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
//	Indirakumar L Attendance record-------4
	String Attendance4= "Present";

	Search.click();
	Search.clear();
	Search.sendKeys("Indirakumar L");
	WebElement Atten4= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select"));
	WebElement Shift4= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select"));
	
	Atten4.click();
	Atten4.sendKeys(Attendance4);
	Atten4.sendKeys(Keys.ENTER);
			
	if(Attendance4=="Present") {
		Shift4.click();
		Shift4.sendKeys("Full");
		Shift4.sendKeys(Keys.ENTER);	
		 }
		  else if (Attendance4=="Absent"){
			  Atten4.click();
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
//	Kamireddy Saikumar Attendance record-------5
	String Attendance5= "Present";
	
	Search.click();
	Search.clear();
	Search.sendKeys("Kamireddy Saikumar");
	WebElement Atten5= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select"));
	WebElement Shift5= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select"));
	
	Atten5.click();
	Atten5.sendKeys(Attendance5);
	Atten5.sendKeys(Keys.ENTER);
			
	if(Attendance5=="Present") {
		Shift5.click();
		Shift5.sendKeys("Full");
		Shift5.sendKeys(Keys.ENTER);	
		 }
		  else if (Attendance5=="Absent"){
			  Atten5.click();
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
//	Karthik Attendance record-------6
	String Attendance6= "Present";	
	Search.click();
	Search.clear();
	Search.sendKeys("Karthik");
	WebElement Atten6= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select"));
	WebElement Shift6= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select"));
	
	Atten6.click();
	Atten6.sendKeys(Attendance6);
	Atten6.sendKeys(Keys.ENTER);
			
	if(Attendance6=="Present") {
		Shift6.click();
		Shift6.sendKeys("Full");
		Shift6.sendKeys(Keys.ENTER);	
		 }
		  else if (Attendance6=="Absent"){
			  Atten6.click();
		 }
		  else if (Attendance6=="Holiday Comp Off"){
		    	 WebElement HolidayDate= driver.findElement(By.id("HolidayDate"));
		    	 HolidayDate.sendKeys("09/07/2024");
		    	 HolidayDate.sendKeys(Keys.ENTER);
		    	 Thread.sleep(1000);
		    	 String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
		    	 WebElement Close= driver.findElement(By.xpath(Cl));
		    	 Close.click();
		 }
//	Lakshmanan Attendance record-------7
	String Attendance7= "Present";	
	Search.click();
	Search.clear();
	Search.sendKeys("Lakshmanan");
	WebElement Atten7= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select"));
	WebElement Shift7= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select"));
	
	Atten7.click();
	Atten7.sendKeys(Attendance7);
	Atten7.sendKeys(Keys.ENTER);
			
	if(Attendance7=="Present") {
		Shift7.click();
		Shift7.sendKeys("Full");
		Shift7.sendKeys(Keys.ENTER);	
		 }
		  else if (Attendance7=="Absent"){
			  Atten7.click();
		 }
		  else if (Attendance7=="Holiday Comp Off"){
		    	 WebElement HolidayDate= driver.findElement(By.id("HolidayDate"));
		    	 HolidayDate.sendKeys("09/07/2024");
		    	 HolidayDate.sendKeys(Keys.ENTER);
		    	 Thread.sleep(1000);
		    	 String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
		    	 WebElement Close= driver.findElement(By.xpath(Cl));
		    	 Close.click();
		 }
//	Maniraj Ramasamy Attendance record-------8
	String Attendance8= "Present";	
	Search.click();
	Search.clear();
	Search.sendKeys("Maniraj Ramasamy");
	WebElement Atten8= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select"));
	WebElement Shift8= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select"));
	
	Atten8.click();
	Atten8.sendKeys(Attendance8);
	Atten8.sendKeys(Keys.ENTER);
			
	if(Attendance8=="Present") {
		Shift8.click();
		Shift8.sendKeys("Full");
		Shift8.sendKeys(Keys.ENTER);	
		 }
		  else if (Attendance8=="Absent"){
			  Atten8.click();
		 }
		  else if (Attendance8=="Holiday Comp Off"){
		    	 WebElement HolidayDate= driver.findElement(By.id("HolidayDate"));
		    	 HolidayDate.sendKeys("09/07/2024");
		    	 HolidayDate.sendKeys(Keys.ENTER);
		    	 Thread.sleep(1000);
		    	 String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
		    	 WebElement Close= driver.findElement(By.xpath(Cl));
		    	 Close.click();
		 }
//	Mohan Raj J Attendance record-------9
	String Attendance9= "Present";	
	Search.click();
	Search.clear();
	Search.sendKeys("Mohan Raj J");
	WebElement Atten9= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select"));
	WebElement Shift9= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select"));
	
	Atten9.click();
	Atten9.sendKeys(Attendance9);
	Atten9.sendKeys(Keys.ENTER);
			
	if(Attendance9=="Present") {
		Shift9.click();
		Shift9.sendKeys("Full");
		Shift9.sendKeys(Keys.ENTER);	
		 }
		  else if (Attendance9=="Absent"){
			  Atten9.click();
		 }
		  else if (Attendance9=="Holiday Comp Off"){
		    	 WebElement HolidayDate= driver.findElement(By.id("HolidayDate"));
		    	 HolidayDate.sendKeys("09/07/2024");
		    	 HolidayDate.sendKeys(Keys.ENTER);
		    	 Thread.sleep(1000);
		    	 String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
		    	 WebElement Close= driver.findElement(By.xpath(Cl));
		    	 Close.click();
		 }
//	Monika K Attendance record-------10
	String Attendance10= "Present";	
	Search.click();
	Search.clear();
	Search.sendKeys("Monika K");
	WebElement Atten10= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select"));
	WebElement Shift10= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select"));
	
	Atten10.click();
	Atten10.sendKeys(Attendance10);
	Atten10.sendKeys(Keys.ENTER);
			
	if(Attendance10=="Present") {
		Shift10.click();
		Shift10.sendKeys("Full");
		Shift10.sendKeys(Keys.ENTER);	
		 }
		  else if (Attendance10=="Absent"){
			  Atten10.click();
		 }
		  else if (Attendance10=="Holiday Comp Off"){
		    	 WebElement HolidayDate= driver.findElement(By.id("HolidayDate"));
		    	 HolidayDate.sendKeys("09/07/2024");
		    	 HolidayDate.sendKeys(Keys.ENTER);
		    	 Thread.sleep(1000);
		    	 String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
		    	 WebElement Close= driver.findElement(By.xpath(Cl));
		    	 Close.click();
		 }
//	Mosikkeeran Muthupandian Attendance record-------11
	String Attendance11= "Present";	
	Search.click();
	Search.clear();
	Search.sendKeys("Mosikkeeran Muthupandian");
	WebElement Atten11= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select"));
	WebElement Shift11= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select"));
	
	Atten11.click();
	Atten11.sendKeys(Attendance11);
	Atten11.sendKeys(Keys.ENTER);
			
	if(Attendance11=="Present") {
		Shift11.click();
		Shift11.sendKeys("Full");
		Shift11.sendKeys(Keys.ENTER);	
		 }
		  else if (Attendance11=="Absent"){
			  Atten11.click();
		 }
		  else if (Attendance11=="Holiday Comp Off"){
		    	 WebElement HolidayDate= driver.findElement(By.id("HolidayDate"));
		    	 HolidayDate.sendKeys("09/07/2024");
		    	 HolidayDate.sendKeys(Keys.ENTER);
		    	 Thread.sleep(1000);
		    	 String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
		    	 WebElement Close= driver.findElement(By.xpath(Cl));
		    	 Close.click();
		 }
//	Periyasedhu K Attendance record-------12
	String Attendance12= "Present";	
	Search.click();
	Search.clear();
	Search.sendKeys("Periyasedhu K");
	WebElement Atten12= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select"));
	WebElement Shift12= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select"));
	
	Atten12.click();
	Atten12.sendKeys(Attendance12);
	Atten12.sendKeys(Keys.ENTER);
			
	if(Attendance12=="Present") {
		Shift12.click();
		Shift12.sendKeys("Full");
		Shift12.sendKeys(Keys.ENTER);	
		 }
		  else if (Attendance12=="Absent"){
			  Atten12.click();
		 }
		  else if (Attendance12=="Holiday Comp Off"){
		    	 WebElement HolidayDate= driver.findElement(By.id("HolidayDate"));
		    	 HolidayDate.sendKeys("09/07/2024");
		    	 HolidayDate.sendKeys(Keys.ENTER);
		    	 Thread.sleep(1000);
		    	 String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
		    	 WebElement Close= driver.findElement(By.xpath(Cl));
		    	 Close.click();
		 }
//	Santhiya M Attendance record-------13
	String Attendance13= "Present";	
	Search.click();
	Search.clear();
	Search.sendKeys("Santhiya M");
	WebElement Atten13= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select"));
	WebElement Shift13= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select"));
	
	Atten13.click();
	Atten13.sendKeys(Attendance13);
	Atten13.sendKeys(Keys.ENTER);
			
	if(Attendance13=="Present") {
		Shift13.click();
		Shift13.sendKeys("Full");
		Shift13.sendKeys(Keys.ENTER);	
		 }
		  else if (Attendance13=="Absent"){
			  Atten13.click();
		 }
		  else if (Attendance13=="Holiday Comp Off"){
		    	 WebElement HolidayDate= driver.findElement(By.id("HolidayDate"));
		    	 HolidayDate.sendKeys("09/07/2024");
		    	 HolidayDate.sendKeys(Keys.ENTER);
		    	 Thread.sleep(1000);
		    	 String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
		    	 WebElement Close= driver.findElement(By.xpath(Cl));
		    	 Close.click();
		 }
//	Sasikumar R Attendance record-------14
	String Attendance14= "Present";	
	Search.click();
	Search.clear();
	Search.sendKeys("Sasikumar R");
	WebElement Atten14= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select"));
	WebElement Shift14= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select"));
	
	Atten14.click();
	Atten14.sendKeys(Attendance14);
	Atten14.sendKeys(Keys.ENTER);
			
	if(Attendance14=="Present") {
		Shift14.click();
		Shift14.sendKeys("Full");
		Shift14.sendKeys(Keys.ENTER);	
		 }
		  else if (Attendance14=="Absent"){
			  Atten14.click();
		 }
		  else if (Attendance14=="Holiday Comp Off"){
		    	 WebElement HolidayDate= driver.findElement(By.id("HolidayDate"));
		    	 HolidayDate.sendKeys("09/07/2024");
		    	 HolidayDate.sendKeys(Keys.ENTER);
		    	 Thread.sleep(1000);
		    	 String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
		    	 WebElement Close= driver.findElement(By.xpath(Cl));
		    	 Close.click();
		 }
//	Sathiyaseelan S Attendance record-------15
	String Attendance15= "Present";	
	Search.click();
	Search.clear();
	Search.sendKeys("Sathiyaseelan S");
	WebElement Atten15= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select"));
	WebElement Shift15= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select"));
	
	Atten15.click();
	Atten15.sendKeys(Attendance15);
	Atten15.sendKeys(Keys.ENTER);
			
	if(Attendance15=="Present") {
		Shift15.click();
		Shift15.sendKeys("Full");
		Shift15.sendKeys(Keys.ENTER);	
		 }
		  else if (Attendance15=="Absent"){
			  Atten15.click();
		 }
		  else if (Attendance15=="Holiday Comp Off"){
		    	 WebElement HolidayDate= driver.findElement(By.id("HolidayDate"));
		    	 HolidayDate.sendKeys("09/07/2024");
		    	 HolidayDate.sendKeys(Keys.ENTER);
		    	 Thread.sleep(1000);
		    	 String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
		    	 WebElement Close= driver.findElement(By.xpath(Cl));
		    	 Close.click();
		 }
//	Stalin A Attendance record-------16
	String Attendance16= "Absent";	
	Search.click();
	Search.clear();
	Search.sendKeys("Stalin A");
	WebElement Atten16= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select"));
	WebElement Shift16= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select"));
	
	Atten16.click();
	Atten16.sendKeys(Attendance16);
	Atten16.sendKeys(Keys.ENTER);
			
	if(Attendance16=="Present") {
		Shift16.click();
		Shift16.sendKeys("Full");
		Shift16.sendKeys(Keys.ENTER);	
		 }
		  else if (Attendance16=="Absent"){
			  Atten16.click();
		 }
		  else if (Attendance16=="Holiday Comp Off"){
		    	 WebElement HolidayDate= driver.findElement(By.id("HolidayDate"));
		    	 HolidayDate.sendKeys("09/07/2024");
		    	 HolidayDate.sendKeys(Keys.ENTER);
		    	 Thread.sleep(1000);
		    	 String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
		    	 WebElement Close= driver.findElement(By.xpath(Cl));
		    	 Close.click();
		 }
//	Stanley Moses Attendance record-------17
	String Attendance17= "Present";	
	Search.click();
	Search.clear();
	Search.sendKeys("Stanley Moses");
	WebElement Atten17= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select"));
	WebElement Shift17= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select"));
	
	Atten17.click();
	Atten17.sendKeys(Attendance17);
	Atten17.sendKeys(Keys.ENTER);
			
	if(Attendance17=="Present") {
		Shift17.click();
		Shift17.sendKeys("Full");
		Shift17.sendKeys(Keys.ENTER);	
		 }
		  else if (Attendance17=="Absent"){
			  Atten17.click();
		 }
		  else if (Attendance17=="Holiday Comp Off"){
		    	 WebElement HolidayDate= driver.findElement(By.id("HolidayDate"));
		    	 HolidayDate.sendKeys("09/07/2024");
		    	 HolidayDate.sendKeys(Keys.ENTER);
		    	 Thread.sleep(1000);
		    	 String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
		    	 WebElement Close= driver.findElement(By.xpath(Cl));
		    	 Close.click();
		 }
//	Surendar Attendance record-------18
	String Attendance18= "Holiday Comp Off";	
	Search.click();
	Search.clear();
	Search.sendKeys("Surendar");
	WebElement Atten18= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select"));
	WebElement Shift18= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select"));
	
	Atten18.click();
	Atten18.sendKeys(Attendance18);
	Atten18.sendKeys(Keys.ENTER);
			
	if(Attendance18=="Present") {
		Shift18.click();
		Shift18.sendKeys("Full");
		Shift18.sendKeys(Keys.ENTER);	
		 }
		  else if (Attendance18=="Absent"){
			  Atten18.click();
		 }
	     else if (Attendance18=="Holiday Comp Off"){
	    	 WebElement HolidayDate= driver.findElement(By.id("HolidayDate"));
	    	 HolidayDate.sendKeys("09/07/2024");
	    	 HolidayDate.sendKeys(Keys.ENTER);
	    	 Thread.sleep(1000);
	    	 String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
	    	 WebElement Close= driver.findElement(By.xpath(Cl));
	    	 Close.click();
	 }
//	Tamizhvaanan G Attendance record-------19
	String Attendance19= "Present";	
	Search.click();
	Search.clear();
	Search.sendKeys("Tamizhvaanan G");
	WebElement Atten19= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select"));
	WebElement Shift19= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select"));
	
	Atten19.click();
	Atten19.sendKeys(Attendance19);
	Atten19.sendKeys(Keys.ENTER);
			
	if(Attendance19=="Present") {
		Shift19.click();
		Shift19.sendKeys("Full");
		Shift19.sendKeys(Keys.ENTER);	
		 }
		  else if (Attendance19=="Absent"){
			  Atten19.click();
		 }
		  else if (Attendance19=="Holiday Comp Off"){
		    	 WebElement HolidayDate= driver.findElement(By.id("HolidayDate"));
		    	 HolidayDate.sendKeys("09/07/2024");
		    	 HolidayDate.sendKeys(Keys.ENTER);
		    	 Thread.sleep(1000);
		    	 String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
		    	 WebElement Close= driver.findElement(By.xpath(Cl));
		    	 Close.click();
		 }
//	Vijayalakshmi M Attendance record-------20
	String Attendance20= "Present";	
	Search.click();
	Search.clear();
	Search.sendKeys("Vijayalakshmi M");
	WebElement Atten20= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select"));
	WebElement Shift20= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select"));
	
	Atten20.click();
	Atten20.sendKeys(Attendance20);
	Atten20.sendKeys(Keys.ENTER);
			
	if(Attendance20=="Present") {
		Shift20.click();
		Shift20.sendKeys("Full");
		Shift20.sendKeys(Keys.ENTER);	
		 }
		  else if (Attendance20=="Absent"){
			  Atten20.click();
		 }
		  else if (Attendance20=="Holiday Comp Off"){
		    	 WebElement HolidayDate= driver.findElement(By.id("HolidayDate"));
		    	 HolidayDate.sendKeys("09/07/2024");
		    	 HolidayDate.sendKeys(Keys.ENTER);
		    	 Thread.sleep(1000);
		    	 String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
		    	 WebElement Close= driver.findElement(By.xpath(Cl));
		    	 Close.click();
		 }
//	Vinayakamoorthy j Attendance record-------21
	String Attendance21= "Present";	
	Search.click();
	Search.clear();
	Search.sendKeys("Vinayakamoorthy j");
	WebElement Atten21= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select"));
	WebElement Shift21= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select"));
	
	Atten21.click();
	Atten21.sendKeys(Attendance21);
	Atten21.sendKeys(Keys.ENTER);
			
	if(Attendance21=="Present") {
		Shift21.click();
		Shift21.sendKeys("Full");
		Shift21.sendKeys(Keys.ENTER);	
		 }
		  else if (Attendance21=="Absent"){
			  Atten21.click();
		 }
		  else if (Attendance21=="Holiday Comp Off"){
		    	 WebElement HolidayDate= driver.findElement(By.id("HolidayDate"));
		    	 HolidayDate.sendKeys("09/07/2024");
		    	 HolidayDate.sendKeys(Keys.ENTER);
		    	 Thread.sleep(1000);
		    	 String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
		    	 WebElement Close= driver.findElement(By.xpath(Cl));
		    	 Close.click();
		 }
//	Vinoth V Attendance record-------22
	String Attendance22= "Holiday Comp Off";	
	String EmpName = "Vinoth V";
	Search.click();
	Search.clear();
	Search.sendKeys(EmpName);
	WebElement Atten22= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select"));
	WebElement Shift22= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select"));
	
	Atten22.click();
	Atten22.sendKeys(Attendance22);
	Atten22.sendKeys(Keys.ENTER);
			
	if(Attendance22=="Present") {
		Shift22.click();
		Shift22.sendKeys("Full");
		Shift22.sendKeys(Keys.ENTER);	
		 }
		  else if (Attendance22=="Absent"){
			  Atten22.click();
		 }
		  else if (Attendance22=="Holiday Comp Off"){
		    	 WebElement HolidayDate= driver.findElement(By.id("HolidayDate"));
		    	 HolidayDate.clear();
		    	 HolidayDate.sendKeys("09/07/2024");
		    	 HolidayDate.sendKeys(Keys.ENTER);
		    	 Thread.sleep(500);
		    	 String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
		    	 WebElement Close= driver.findElement(By.xpath(Cl));
		    	 Close.click();
		 }
	
	WebElement Search1 = driver.findElement(By.xpath("//input[@type='search']"));
	Search1.click();
	Search1.clear();
	Search1.sendKeys(EmpName); // Assuming EmpName is defined somewhere in your code

	WebElement Rem = driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[9]/input"));
	Rem.click();

	// Use getAttribute("value") to retrieve the value from the input field
	String textValue = Rem.getAttribute("value");
	System.out.println("Text value: " + textValue);
	
    
	Thread.sleep(2000);	
	WebElement CSearch= driver.findElement(By.xpath("//input[@type='search']"));
	CSearch.clear();
	CSearch.sendKeys(Keys.BACK_SPACE);
	
	Thread.sleep(3000);	
	WebElement Submit_button= driver.findElement(By.xpath("//button[@id='create1']"));
	((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", Submit_button);
	Thread.sleep(3000);
	//Submit_button.click();
	WebElement Logout = driver.findElement(By.linkText("Logout"));
    Logout.click();
	
	
	System.out.println("Script successfully executed");

}
}