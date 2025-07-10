package AttAuto;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class AutAttendEx {

	public static void main(String[] args) throws IOException, InterruptedException {
		ChromeDriver driver = new ChromeDriver();

        String TestURL = "https://qnqhealthcare.com/ERP%20V0.1/index.html";
        driver.get(TestURL);

        // Maximize the browser
        driver.manage().window().maximize();
        
        String Username = "Tester_Laksh";
        String Password = "Qtne#541";

        WebElement Uname = driver.findElement(By.id("email"));
        WebElement Pass = driver.findElement(By.id("password"));
        WebElement Submit = driver.findElement(By.id("login-submit"));

        Uname.sendKeys(Username);
        Pass.sendKeys(Password);
        Submit.click();

        Thread.sleep(5000);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

        String ITMenu = "/html/body/div[1]/aside[1]/div/nav/ul/li[2]/a";

        // Navigate to IT Attendance Module
        WebElement ITNav = driver.findElement(By.xpath(ITMenu));
        ITNav.click();


        String excelFilePath = ".\\datafiles\\ItAttd.xlsx";

        // Open Excel file
        FileInputStream fileinput = new FileInputStream(excelFilePath);

        // Create a Workbook instance from the Excel file
        XSSFWorkbook workbook = new XSSFWorkbook(fileinput);

        XSSFSheet sheet = workbook.getSheet("Sheet1");
 
        for(int i = 1; i <= sheet.getLastRowNum(); i++) {
            XSSFRow celldata = sheet.getRow(i);

            if (celldata == null) {
                break; 
            }

            // Fetching data from Excel cells
            String Searchvalue = (celldata.getCell(0) != null) ? celldata.getCell(0).getStringCellValue() : "";
            String Attendanance = (celldata.getCell(1) != null) ? celldata.getCell(1).getStringCellValue() : "";
            String Shift = (celldata.getCell(2) != null) ? celldata.getCell(2).getStringCellValue() : "";
            String Permission = (celldata.getCell(3) != null) ? getCellValueAsString(celldata.getCell(3)) : "";
            String CompOffDate = (celldata.getCell(4) != null) ? celldata.getCell(4).getStringCellValue() : "";

            // Find the search box and input the search value
            WebElement Search1 = driver.findElement(By.xpath("//input[@type='search']"));
            Search1.click();
            Search1.clear();
            Search1.sendKeys(Searchvalue);

            // Locate the attendance, shift, and permission dropdown's
            WebElement Atten = driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[6]/select"));
            WebElement shift = driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[7]/select"));
            WebElement Perm = driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[8]/select"));
            WebElement HolidayDate= driver.findElement(By.id("HolidayDate"));
            String Cl = "//div[@class='modal-content']//span[@aria-hidden='true'][normalize-space()='×']";
	    	WebElement Close= driver.findElement(By.xpath(Cl));
            
            // Implementing conditions for "Present" and "Absent"
            if (Attendanance.equalsIgnoreCase("Present")) {
                // Execute this block if attendance is "Present"
                Atten.click();
                Atten.sendKeys(Attendanance);   // Select "Present"
                shift.sendKeys(Shift);          // Input shift value
                Perm.sendKeys(Permission);      // Input permission value
            } else if (Attendanance.equalsIgnoreCase("Absent")) {
                // Execute this block if attendance is "Absent"
                Atten.click();
                Atten.sendKeys(Attendanance);   // Select "Absent" (only attendance, no shift and permission)
            }
            else if (Attendanance.equalsIgnoreCase("Holiday Comp Off")) {    
            	Atten.click();
                Atten.sendKeys(Attendanance); 
                Atten.sendKeys(Keys.ENTER); 
                
                Thread.sleep(500);
                HolidayDate.click();
                HolidayDate.clear();
		    	 HolidayDate.sendKeys(CompOffDate);
		    	 HolidayDate.sendKeys(Keys.ENTER);
		    	 Thread.sleep(1000);		    	 
		    	 Close.click();
            }
          //Get Remarks text value
            
            Search1.click();
            Search1.clear();
            Search1.sendKeys(Searchvalue);
            
            WebElement Rem = driver.findElement(By.xpath("/html/body/div[1]/div[1]/section[2]/div[1]/div[2]/div/div/div[2]/form/div[1]/div/div/div/div[2]/div/div/div[2]/table/tbody/tr/td[9]/input"));
            String textValue = Rem.getAttribute("value");
        	System.out.println(Searchvalue + " - " + "Comp Off: " + textValue);
        }

        Thread.sleep(2000);

        // Clear search input
        WebElement CSearch = driver.findElement(By.xpath("//input[@type='search']"));
        CSearch.click();
        CSearch.clear();
        CSearch.sendKeys(Keys.BACK_SPACE);

        Thread.sleep(3000);

        // Scroll to and click Submit
        WebElement Submit_button = driver.findElement(By.xpath("//button[@id='create1']"));
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", Submit_button);
        Thread.sleep(3000);
     //   Submit_button.click();
        
        // Close workbook and input stream
        workbook.close();
        fileinput.close();
        
              
        File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);

        // Specify where to store the screenshot
        String timestamp = new SimpleDateFormat("yyyy-MM-dd-HH_mm_ss").format(new Date());
        File destinationFile = new File("D:\\QnQ_Test\\Selinium\\MVAutomation\\ScreenShot\\Practice\\Attendance\\" + timestamp + ".png" );
        FileUtils.copyFile(screenshot, destinationFile);
        System.out.println("Screenshot saved at: " + destinationFile.getAbsolutePath());
        WebElement Logout = driver.findElement(By.linkText("Logout"));
       // Logout.click();
        Thread.sleep(1000);  
        
        System.out.println("Attendance script successfully executed");
          }
	     
	private static String getCellValueAsString(XSSFCell cell) {
        if (cell == null) {
            return ""; // Return empty string if cell is null
        }
        
        switch (cell.getCellType()) {
            case STRING:
                return cell.getStringCellValue();
            case NUMERIC:
                return String.valueOf(cell.getNumericCellValue());
            case BOOLEAN:
                return String.valueOf(cell.getBooleanCellValue());
            case FORMULA:
                return cell.getCellFormula();
            default:
                return ""; // Default to empty string for unsupported types
        }


	}

}
