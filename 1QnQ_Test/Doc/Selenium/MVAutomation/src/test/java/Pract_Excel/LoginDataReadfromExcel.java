package Pract_Excel;

import java.io.FileInputStream;
import java.io.IOException;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginDataReadfromExcel {
	

	public static void main(String[] args) throws IOException {
		ChromeDriver driver = new ChromeDriver();
	     
		String URL="http://192.168.1.39:8080/ERP-V0.1/index.html";	
		String TestURL= "https://qnqhealthcare.com/ERP%20V0.1/index.html";
		driver.get(TestURL);
		
		driver.manage().window().maximize();
		String excelFilePath=".\\datafiles\\Loginn.xlsx";
		  // Open Excel file
        FileInputStream fileinputStream = new FileInputStream(excelFilePath);

        // Create a Workbook instance from the Excel file
        XSSFWorkbook workbook = new XSSFWorkbook(fileinputStream);
        
        XSSFSheet sheet = workbook.getSheet("Sheet1");
        
       // int rowcount = sheet.getLastRowNum();
       // int colcount =sheet.getRow(1).getLastCellNum();
        //System.out.println(rowcount);
        System.out.println(sheet.getLastRowNum());
        
        for(int i=0; i<=sheet.getLastRowNum(); i++)
        {
          XSSFRow celldata=sheet.getRow(i);
          
          if (celldata == null) {
              continue; // Skip null rows
          }
          
          String Username = getCellValueAsString(celldata.getCell(0));
          String Password = getCellValueAsString(celldata.getCell(1));

          WebElement Uname = driver.findElement(By.id("email"));		
          WebElement Pass = driver.findElement(By.id("password"));
  		WebElement Submit= driver.findElement(By.id("login-submit"));
  		
  		Uname.clear();
  		Uname.sendKeys(Username);
  		Pass.clear();
		Pass.sendKeys(Password);
		Submit.click();
	}
        workbook.close(); // Close the workbook
        fileinputStream.close(); // Close the file input stream
       // driver.quit(); // Quit the driver
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
