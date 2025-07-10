package SPprgm;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class DataReaderFromExcel {

	public static void main(String[] args) throws IOException, InterruptedException {
	
		ChromeDriver driver = new ChromeDriver();
     
		//String URL="http://192.168.1.39:8080/ERP-V0.1/index.html";		
		String LvURL="https://qnqhealthcare.com/ERP V0.1/index.html";	
		driver.get(LvURL);
		
		//Maximize the browser
		driver.manage().window().maximize();
		
		WebElement Uname= driver.findElement(By.id("email"));		
		WebElement Pass= driver.findElement(By.id("password"));
		WebElement Submit= driver.findElement(By.id("login-submit"));
		
		
		Uname.sendKeys("Tester_Laksh");
		Pass.sendKeys("Qtne#541");
		Submit.click();
		
		Thread.sleep(10000);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		

		String ITMenu = "/html/body/div[1]/aside[1]/div/nav/ul/li[2]/a";
		
		//Navigate to IT Attendance Module		
		WebElement ITNav= driver.findElement(By.xpath(ITMenu));
		ITNav.click();
			
		WebElement Search= driver.findElement(By.xpath("//input[@type='search']"));
					
		String excelFilePath=".\\datafiles\\ITTeam.xlsx";

        // Open Excel file
        FileInputStream fileinputStream = new FileInputStream(excelFilePath);

        // Create a Workbook instance from the Excel file
        XSSFWorkbook workbook = new XSSFWorkbook(fileinputStream);
        
        XSSFSheet sheet = workbook.getSheet("Sheet1");
        
       // int rowcount = sheet.getLastRowNum();
       // int colcount =sheet.getRow(1).getLastCellNum();
        //System.out.println(rowcount);
        
        for(int i=1; i<=sheet.getLastRowNum(); i++)
        {
          XSSFRow celldata=sheet.getRow(i);
          
          
          if (celldata == null) {
        	    continue; 
          }
        	    String Searchvalue = (celldata.getCell(0) != null) ? celldata.getCell(0).getStringCellValue() : "";
        	    String Attendanance = (celldata.getCell(1) != null) ? celldata.getCell(1).getStringCellValue() : "";
        	    String Shift = (celldata.getCell(2) != null) ? celldata.getCell(2).getStringCellValue() : "";
        	    String Remarks = (celldata.getCell(3) != null) ? celldata.getCell(3).getStringCellValue() : "";

        WebElement Search1= driver.findElement(By.xpath("//input[@type='search']"));
         
        Search1.click();
		Search1.clear();
		Search1.sendKeys(Searchvalue);
		
		WebElement Atten= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]"
				+ "/form/div[1]/div/div/div/div[2]/div[2]/table/tbody/tr/td[7]/select"));
		Atten.click();
		Atten.sendKeys(Attendanance);
		Atten.sendKeys(Keys.ENTER);
		
		WebElement shift= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]"
				+ "/div/div/div[2]/form/div[1]/div/div/div/div[2]/div[2]/table/tbody/tr/td[8]/select"));
		
		WebElement remarks= driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]"
		 		+ "/div/div/div[2]/form/div[1]/div/div/div/div[2]/div[2]/table/tbody/tr/td[10]/input"));
		
		
		shift.sendKeys(Shift);
		remarks.sendKeys(Remarks);
        //Submit.click();
			
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
       // driver.quit();
        workbook.close();
        fileinputStream.close();
	}
	}
