/**
 * 
 */
var collab_url="https://collabland-tn.gov.in/APIServices/rest/Collabland/FMBReportToken";
function checksubdv() {
//alert("inside check");
	var doc = document.forms[0];
	
	var districtCode = doc.districtCode.value;
	
	//var talukCode = doc.talukCode.value;
	var talukCode = doc.talukCode.value.split("/");

	var villageCode = doc.villageCode.value;

	//var pattaNo = doc.pattaNo.value;
	var surveyNo = doc.surveyNo.value;
	
	//var subdivNo = doc.subdivNo.value;
	var landtype=doc.landtype.value;
	
	//var captcha = doc.captcha.value;
	//var role = doc.role.value;
	
	if(districtCode == '') {
		alert('Please Select District');
		doc.districtCode.focus();
		return false;
	} else {
		var regEx = new RegExp("^[0-9]{2}$");
		if(!districtCode.match(regEx)) {
			alert('Please Select District');
			doc.districtCode.focus();
			return false;
		}
	}
	if(talukCode[0] == '') {
		//alert('districtCode'+districtCode);
		alert('Please Select Taluk'+talukCode);
		doc.talukCode.focus();
		return false;
	} else {
		var regEx = new RegExp("^[0-9]{2}$");
		if(!talukCode[0].match(regEx)) {
			alert('Please Select Taluk');
			doc.talukCode.focus();
			return false;
		}
	}
	if(villageCode == '') {
		alert('Please Select Village');
		doc.villageCode.focus();
		return false;
	} else {
		var regEx = new RegExp("^[0-9A-Za-z_]{3}$");
		if(!villageCode.match(regEx)) {
			alert('Please Select Village');
			doc.villageCode.focus();
			return false;
		}
	}
	
	 
	
	
	
		if(surveyNo == '') {
			alert('Please Enter Survey Number');
			doc.surveyNo.focus();
			return false;
		}
		else {
			
		
			
			var regEx = new RegExp("^[1-9](|[0-9A-Za-z]{0,4}(|[0-9A-Za-z]{1}))$");
			if(!surveyNo.match(regEx)) {
				alert('Please Enter Valid Survey Number');
				
				doc.surveyNo.value="";
				clearsubdvn();
				//doc.subdivNo.value="";
				//document.getElementByName('subdivNo').empty();

				//snode.removeChild(s);
				doc.surveyNo.focus();
				return false;
				
			}
			
			
			

		}
		if(landtype=='' && talukCode[1]=='Y')
		
		{
		alert('Please select landtype option');
		doc.surveyNo.value="";
		doc.landtype.focus();
		return false;
		}
}

function validate(val) {
	//alert(val);
	var opt="";
	var pattaNo; 
	var doc = document.forms[0];
	
	var districtCode = doc.districtCode.value;
	var talukCode = doc.talukCode.value.split("/");
	var villageCode = doc.villageCode.value;
	
	
	//var captcha = doc.captcha.value;
	var landtype=doc.landtype.value;
	if(districtCode == '') {
		alert('Please Select District');
		doc.districtCode.focus();
		return false;
	} else {
		var regEx = new RegExp("^[0-9]{2}$");
		if(!districtCode.match(regEx)) {
			alert('Please Select District');
			doc.districtCode.focus();
			return false;
		}
	}
	if(talukCode[0] == '') {
		alert('Please Select Taluk');
		doc.talukCode.focus();
		return false;
	} else {
		var regEx = new RegExp("^[0-9]{2}$");
		if(!talukCode[0].match(regEx)) {
			alert('Please Select Taluk');
			doc.talukCode.focus();
			return false;
		}
	}
	if(villageCode == '') {
		alert('Please Select Village');
		doc.villageCode.focus();
		return false;
	} else {
		var regEx = new RegExp("^[0-9A-Za-z_]{3}$");
		if(!villageCode.match(regEx)) {
			alert('Please Select Village');
			doc.villageCode.focus();
			return false;
		}
	}
	if(val=='chitta')
	{
		
	
	 opt = document.forms[0].viewOpt.value;

		if(opt == ""){
		 alert('Please Select View Patta Chitta Using:');
		// doc.viewOpt.focus();
		 return false;
		}
	}
	if(opt == "pt"){
		 pattaNo = doc.pattaNo.value;
		// alert("pattaNO>>>"+pattaNo);
		if(pattaNo == '') {
			 alert('Please Enter Patta Number');
			 doc.pattaNo.focus();
			 return false;
			} else {
				var regEx = new RegExp("^[1-9]{1}[0-9]{0,6}$");
				if(!pattaNo.match(regEx)) {
					alert('Please Enter Valid Patta Number');
					doc.pattaNo.focus();
					return false;
				}
			 }
	}else if(opt == "searchptno"){
			var searchPattaName=doc.searchPattaName.value;
		if(searchPattaName == '') {
			 alert('Please Enter Patta Owner Name');
			 doc.searchPattaName.focus();
			 return false;
		}
	}else{
		//alert("inside opt option null");
		var surveyNo = doc.surveyNo.value;
	var subdivNo = doc.subdivNo.value;
//alert("subdiv"+subdivNo);
		if(surveyNo == '' || surveyNo=='null') {
			alert('Please Enter Survey Number');
			doc.surveyNo.focus();
			return false;
		} else {
			var regEx = new RegExp("^[1-9](|[0-9A-Za-z]{0,4}(|[0-9A-Za-z]{1}))$");
			if(!surveyNo.match(regEx)) {
				alert('Please Enter Valid Survey Number');
				doc.surveyNo.focus();
				return false;
			}
			

			if(subdivNo == '' || subdivNo=='null') {
				alert('Please Enter Subdivision Number');
				doc.subdivNo.focus();
				return false;
				
			}  if(subdivNo != '' ) {
				//alert("subdivNo"+subdivNo);
				var regEx = new RegExp("^[0-9A-Z-/']{0,10}$");
				if(!subdivNo.match(regEx)) {
					alert('Please Enter Valid Subdivision Number');
					doc.subdivNo.focus();
					return false;
				}
			}
			}
			}
			/*var opt = document.forms[0].viewOption.value;
			
			if(opt=="fmb"){
				alert("Service Under maintenance");
				//document.forms[0].viewOption.value="";
				 return false;
			}*/
		
	if(landtype=='' && talukCode[1]=='Y' && opt!="searchptno")
	{
	alert('Please select landtype option');
	//doc.landtype.focus();
	return false;
	}
	/*if(captcha == '') {
		alert('Please Enter Authentication Value');
		doc.captcha.focus();
		return false;
	} */
	//window.location='chitta_ta.html?lan=ta';
	//window.location='chittaruraltamil_ta.html?lan=ta';


}

function validate_poramboke(val)
{
	//alert("inside poramboke");
	var doc = document.forms[0];
	var districtCode = doc.districtCode.value;
	var talukCode = doc.talukCode.value;
	var villageCode = doc.villageCode.value;
		var surveyNo = doc.surveyNo.value;
	var subdivNo = doc.subdivNo.value;
	
	//var captcha = doc.captcha.value;
	//alert("value true");
	//alert("districtcode"+districtCode);
	if(districtCode == '') {
		alert('Please Select District');
		doc.districtCode.focus();
		return false;
	} else {
		var regEx = new RegExp("^[0-9]{2}$");
		if(!districtCode.match(regEx)) {
			alert('Please Select District');
			doc.districtCode.focus();
			return false;
		}
	}
	if(talukCode == '') {
		alert('Please Select Taluk');
		doc.talukCode.focus();
		return false;
	} else {
		var regEx = new RegExp("^[0-9]{2}$");
		if(!talukCode.match(regEx)) {
			alert('Please Select Taluk');
			doc.talukCode.focus();
			return false;
		}
	}
	if(villageCode == '') {
		alert('Please Select Village');
		doc.villageCode.focus();
		return false;
	} else {
		var regEx = new RegExp("^[0-9A-Za-z_]{3}$");
		if(!villageCode.match(regEx)) {
			alert('Please Select Village');
			doc.villageCode.focus();
			return false;
		}
	}
	
	
	
//alert("subdiv"+subdivNo);
		if(surveyNo == '' || surveyNo=='null') {
			alert('Please Enter Survey Number');
			doc.surveyNo.focus();
			return false;
		} else {
			var regEx = new RegExp("^[1-9](|[0-9A-Za-z]{0,4}(|[0-9A-Za-z]{1}))$");
			if(!surveyNo.match(regEx)) {
				alert('Please Enter Valid Survey Number');
				doc.surveyNo.focus();
				return false;
			}
			

			if(subdivNo == '' || subdivNo=='null') {
				alert('Please Enter Subdivision Number');
				doc.subdivNo.focus();
				return false;
				
			}  if(subdivNo != '' ) {
				//alert("subdivNo"+subdivNo);
				var regEx = new RegExp("^[0-9A-Z-/']{0,10}$");
				if(!subdivNo.match(regEx)) {
					alert('Please Enter Valid Subdivision Number');
					doc.subdivNo.focus();
					return false;
				}
			}
			}
			
			
	/*if(captcha == '') {
		alert('Please Enter Authentication Value');
		doc.captcha.focus();
		return false;
	} */
}


function checkOpt(talukcode,val){
	var opt = document.forms[0].viewOpt.value;

	//alert(talukcode);
	var talukcode=talukcode.split("/");
	if(opt == "pt"){
		document.getElementById("ptNo").style.display= "block";
		document.getElementById("subdiv").style.display= "none";
		document.getElementById("searchPtNo").style.display= "none";
		if(talukcode[1]=='Y')
		{
		document.getElementById("landtype_opt").style.display="block";
		}
		document.forms[0].surveyNo.value="";
		document.forms[0].subdivNo.value="";
		document.forms[0].searchPattaNo.value="";
	}else if(opt == "searchptno"){
		document.getElementById("ptNo").style.display= "none";
		document.getElementById("subdiv").style.display= "none";
		
		document.getElementById("searchPtNo").style.display= "block";
		
		
		document.getElementById("landtype_opt").style.display="none";
		document.forms[0].landtype.value="";
		document.forms[0].pattaNo.value="";
		document.forms[0].surveyNo.value="";
		document.forms[0].subdivNo.value="";
	}else{
		document.getElementById("ptNo").style.display= "none";
		document.getElementById("subdiv").style.display= "block";
		document.getElementById("searchPtNo").style.display= "none";
		if(talukcode[1]=='Y')
		{
		document.getElementById("landtype_opt").style.display="block";
		}
		document.forms[0].pattaNo.value="";
		document.forms[0].searchPattaNo.value="";
	}
}

function isValidateAlphasOwner(t){
 	
 	var i=0;
 	for (i=0; i < t.value.length; i++) {
 		
 		  if(((t.value.charAt(i)=='`' || t.value.charAt(i)=='~' || t.value.charAt(i)=='!'|| t.value.charAt(i)=='@' || t.value.charAt(i)=='#' || t.value.charAt(i)=='$' 
 			|| t.value.charAt(i)=='%' || t.value.charAt(i)=='^' || t.value.charAt(i)=='&'|| t.value.charAt(i)=='*' || t.value.charAt(i)=='(' || t.value.charAt(i)==')' 
 			|| t.value.charAt(i)=='0' || t.value.charAt(i)=='-' || t.value.charAt(i)=='_'|| t.value.charAt(i)=='=' || t.value.charAt(i)=='+' || t.value.charAt(i)=='|' 
 			|| t.value.charAt(i)=='{' || t.value.charAt(i)=='['	|| t.value.charAt(i)=='}'|| t.value.charAt(i)==']' || t.value.charAt(i)=='\\'|| t.value.charAt(i)=="'"
 			|| t.value.charAt(i)=='"' || t.value.charAt(i)==';' || t.value.charAt(i)=='/'|| t.value.charAt(i)=='?' || t.value.charAt(i)=='>'
 			|| t.value.charAt(i)==',' || t.value.charAt(i)=='<' || (t.value.charAt(i).match("^[0-9]$")))) ){
 			   t.value = t.value.substring(0, i);
 			  // alert(t.value);
 			   return true;
 	     }
 	 }
 	
     return false;
 }
 
 function validate_fmb(lan) {
	//alert(lan);
	var doc = document.forms[0];
	
	var districtCode = doc.districtCode.value;
	var talukCode = doc.talukCode.value.split("/");
	var villageCode = doc.villageCode.value;
	//var pattaNo = doc.pattaNo.value;
	var surveyNo = doc.surveyNo.value;
	var subdivNo = doc.subdivNo.value;
	//var searchPattaName=doc.searchPattaName.value;
	//var captcha = doc.captcha.value;
	var chkrno=doc.chkrno.value;
//var captcha = doc.captcha.value;
var mobileno=doc.mobileno_ver.value;

	var o_key=doc.otpno_ver.value;
	if(districtCode == '') {
		alert('Please Select District');
		doc.districtCode.focus();
		return false;
	} else {
		var regEx = new RegExp("^[0-9]{2}$");
		if(!districtCode.match(regEx)) {
			alert('Please Select District');
			doc.districtCode.focus();
			return false;
		}
	}
	if(talukCode[0] == '') {
		alert('Please Select Taluk');
		doc.talukCode.focus();
		return false;
	} else {
		var regEx = new RegExp("^[0-9]{2}$");
		if(!talukCode[0].match(regEx)) {
			alert('Please Select Taluk');
			doc.talukCode.focus();
			return false;
		}
	}
	if(villageCode == '') {
		alert('Please Select Village');
		doc.villageCode.focus();
		return false;
	} else {
		var regEx = new RegExp("^[0-9A-Za-z_]{3}$");
		if(!villageCode.match(regEx)) {
			alert('Please Select Village');
			doc.villageCode.focus();
			return false;
		}
	}
	
		if(surveyNo == '') {
			alert('Please Enter Survey Number');
			doc.surveyNo.focus();
			return false;
		} else {
			var regEx = new RegExp("^[1-9](|[0-9A-Za-z]{0,4}(|[0-9A-Za-z]{1}))$");
			if(!surveyNo.match(regEx)) {
				alert('Please Enter Valid Survey Number');
				doc.surveyNo.focus();
				return false;
			}
		}

			if(subdivNo == '') {
				alert('Please Enter Subdivision Number');
				doc.subdivNo.focus();
				return false;
				
			} else{
				//alert("subdivNo"+subdivNo);
				var regEx = new RegExp("^[0-9A-Z-/']{0,10}$");
				if(!subdivNo.match(regEx)) {
					alert('Please Enter Valid Subdivision Number');
					doc.subdivNo.focus();
					return false;
				}
			}
			
			var landtype="";
			if(talukCode[1]=='Y')
				{
			
			 var land_chk = document.getElementById("landtype");  
			// alert("District code :::"+districtCode);
			 if((land_chk.checked==true))
				 {
				 landtype=land_chk.value;
				 surveyNo=surveyNo+landtype;
				 }
			/*  else if((land_chk.checked==true) && (districtCode==12))
				 {
				// alert("Loading the FMB for Coimbatore Natham .....")
				 landtype=land_chk.value;
				 surveyNo=surveyNo;
				 
				 } */
				 
			 else
				 {
				 landtype="";
				 }
		  //alert(landtype);
				}	
				if(chkrno =='' || chkrno==null)
				{
					alert('Invalid input');
		return false;
				}

	/*if(captcha == '') {
		alert('Please Enter Authentication Value');
		doc.captcha.focus();
		return false;
	} */
	 if(o_key == '') {
				alert('invalid OTP');
				//doc.captcha.focus();
				return false;
			} 
			else if(mobileno == '') {
				alert('Invalid Mobile Number');
			//	doc.captcha.focus();
				return false;
			} 
	else
	{
	//alert("inside else function");
	/*&captcha="+captcha+"*/
	var url = "ajax.html?page=getfmbmap&districtCode="+districtCode+ "&talukCode="+talukCode[0]+"&villagecode="+villageCode+"&surveyNo="+surveyNo+"&subdivNo="+subdivNo+"&lang="+lan+"&chkrno="+chkrno+"&o_key="+o_key+"&mobileno="+mobileno;
	//alert("url"+url);
	var HttpRequest = getReq();
    HttpRequest.open("POST", url, true);    
    HttpRequest.onreadystatechange = function(){
    	//alert("inside function"+HttpRequest.readyState+"status"+HttpRequest.status);
         if(HttpRequest.readyState == 4){
        if(HttpRequest.status == 200){
           //	alert("inside 4 and 200");
        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
        	//alert("root"+root)
        	var flag= root.getElementsByTagName('flag')[0].firstChild.nodeValue.trim();  
        	if(flag=="capfalse")
        		{
        		alert("Invalid Captcha");
        		document.forms[0].captcha.value=""; 
        		return false;
        		}
        	else if(flag=="randfalse")
        		{
					alert("Invalid input");
        		document.forms[0].districtCode.selectedIndex="0";
        			document.forms[0].talukCode.selectedIndex="0";
        			document.forms[0].villageCode.selectedIndex="0";
        			document.forms[0].surveyNo.value="";
        			document.forms[0].subdivNo.selectedIndex="0";
        			//document.forms[0].captcha.value="";
				}
				else if(flag=="otpflase")
        		{
					alert("Invalid OTP");
        		document.forms[0].districtCode.selectedIndex="0";
        			document.forms[0].talukCode.selectedIndex="0";
        			document.forms[0].villageCode.selectedIndex="0";
        			document.forms[0].surveyNo.value="";
        			document.forms[0].subdivNo.selectedIndex="0";
        			//document.forms[0].captcha.value="";
				}
        	else if(flag=="true")
        		{
        	var url_coll= root.getElementsByTagName('urlstring')[0].firstChild.nodeValue.trim();  
        	var randno=root.getElementsByTagName('randno')[0].firstChild.nodeValue.trim();  
        //	alert("urll"+url_coll);
        	//var url_str="https://collabland-tn.gov.in/CollabLandUrban/rest/Collabland/FMBReportToken?state=33&token="+url_coll; 
        	if(url_coll!="")
    		{
        		//const openedWindow = window.open("https://collabland-tn.gov.in/rest/Collabland/FMBReportToken?state=33&token="+url_coll,"_blank");
        		//alert(openedWindow.closed);
        		//New URL changed in FMB Report with APIServices 21/08/2023...............
        		const openedWindow = window.open(collab_url+"?state=33&token="+url_coll,"_blank");
        		document.forms[0].districtCode.selectedIndex="0";
        			document.forms[0].talukCode.selectedIndex="0";
        			document.forms[0].villageCode.selectedIndex="0";
        			document.forms[0].surveyNo.value="";
        			document.forms[0].subdivNo.selectedIndex="0";
        			//document.forms[0].captcha.value="";
        		if(openedWindow.closed==false)
        			{
        			//alert(openedWindow.closed);
        			
        			//document.forms[0].captcha.value=""; 
        			if(lan=='ta')
        		{
        			window.location.href ='chittaNewRuralFMBTamil.html?lan=ta&rno='+randno; 
        			}
        			else if(lan=='en')
        			{
						window.location.href ='chittaCheckNewRuralFMB_en.html?lan=en&rno='+randno; 
					}
        			//window.location.reload();
        			}
        		
    		}
    	else
    		{
    		alert("inside false");
    		return false;
    		}
        		}
    	    
        }
    }  
         
    }
    HttpRequest.send(null);
	}
	//window.location='chittaNewRuralFMBTamil.html?lan=ta';
	//alert('reload');
	//window.location.reload();
	//window.location='chittaruraltamil_ta.html?lan=ta';
	
	
}
 
 function validate_tslr(lan) {
		//alert("in validate");
			var doc = document.forms[0];
			
			var districtCode = doc.districtCode.value;
			var talukCode = doc.talukCode.value;
			var villageCode = doc.villageCode.value;
			//var streetCode = doc.streetCode.value;
			//var streetCode = doc.streetCode.value;
			var wardNo = doc.wardNo.value;
			var blockCode = doc.blockCode.value;
			var surveyNo = doc.surveyNo.value;
			var subdivNo = doc.subdivNo.value;
			//var captcha = doc.captcha.value;
			var chkrno=doc.chkrno.value;
			var o_key=doc.otpno_ver.value;
var mobileno=doc.mobileno_ver.value;
			if(districtCode == '') {
				alert('Please Select District');
				doc.districtCode.focus();
				return false;
			} else {
				var regEx = new RegExp("^[0-9]{2}$");
				if(!districtCode.match(regEx)) {
					alert('Please Select District');
					doc.districtCode.focus();
					return false;
				}
			}
			if(talukCode == '') {
				//alert('districtCode'+districtCode);
				alert('Please Select Taluk'+talukCode);
				doc.talukCode.focus();
				return false;
			} else {
				var regEx = new RegExp("^[0-9]{2}$");
				if(!talukCode.match(regEx)) {
					alert('Please Select Taluk');
					doc.talukCode.focus();
					return false;
				}
			}
			/* if(streetCode == '') {
				alert('Please Select Street');
				doc.streetCode.focus();
				return false;
			} 
			 */
			if(villageCode == '') {
				alert('Please Select Village');
				doc.villageCode.focus();
				return false;
			} else {
				var regEx = new RegExp("^[0-9A-Za-z_]{3}$");
				if(!villageCode.match(regEx)) {
					alert('Please Select Village');
					doc.villageCode.focus();
					return false;
				}
			}

			
			if(wardNo == '') {
				alert('Please Enter Ward No');
				doc.wardNo.focus();
				return false;
			} 
			else if(blockCode == '') {
				alert('Please Select Block Number');
				doc.blockCode.focus();
				return false;
			} 

			else if(surveyNo == '') {
				alert('Please Select Survey No.');
				doc.surveyNo.focus();
				return false;
			} 
			else if(subdivNo == '') {
				alert('Please Select Sub Division No.');
				doc.subdivNo.focus();
				return false;
			} 
			else if(chkrno =='' || chkrno==null)
			{
				alert('Invalid input');
	return false;
			}
			
			/* else if(captcha == '') {
				alert('Please Enter Authentication Value');
				doc.captcha.focus();
				return false;
			} */
			else if(o_key == '') {
				alert('invalid OTP');
				//doc.captcha.focus();
				return false;
			} 
			else if(mobileno == '') {
				alert('Invalid Mobile Number');
			//	doc.captcha.focus();
				return false;
			}  
			else
			{
				/*&captcha="+captcha+"*/
		var url = "ajax.html?page=gettslrmap&districtCode="+districtCode+ "&talukCode="+talukCode+"&towncode="+villageCode+"&wardNo="+wardNo+"&blockCode="+blockCode+"&surveyNo="+surveyNo+"&subdivNo="+subdivNo+"&lang="+lan+"&chkrno="+chkrno+"&o_key="+o_key+"&mobileno="+mobileno;
		//alert("url"+url);
		var HttpRequest = getReq();
	    HttpRequest.open("POST", url, true);    
	    HttpRequest.onreadystatechange = function(){
	    	//alert("inside function"+HttpRequest.readyState+"status"+HttpRequest.status);
	         if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
	           //	alert("inside 4 and 200");
	        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
	        	//alert("root"+root)
	        	var flag= root.getElementsByTagName('flag')[0].firstChild.nodeValue.trim();  
	        	if(flag=="capfalse")
	        		{
	        		alert("Invalid Captcha");
	        		document.forms[0].captcha.value=""; 
	        		return false;
	        		}
	        	else if(flag=="randfalse")
	    		{
					alert("Invalid input");
	    		document.forms[0].districtCode.selectedIndex="0"; 
	        			document.forms[0].talukCode.selectedIndex="0"; 
	        			document.forms[0].villageCode.selectedIndex="0"; 
	        			document.forms[0].wardNo.selectedIndex="0"; 
	        			document.forms[0].blockCode.selectedIndex="0"; 
	        			document.forms[0].surveyNo.selectedIndex="0"; 
	        			document.forms[0].subdivNo.selectedIndex="0";
	        			//document.forms[0].captcha.value=""; 
				}
				else if(flag=="otpflase")
        		{
					alert("Invalid OTP");
        		document.forms[0].districtCode.selectedIndex="0"; 
	        			document.forms[0].talukCode.selectedIndex="0"; 
	        			document.forms[0].villageCode.selectedIndex="0"; 
	        			document.forms[0].wardNo.selectedIndex="0"; 
	        			document.forms[0].blockCode.selectedIndex="0"; 
	        			document.forms[0].surveyNo.selectedIndex="0"; 
	        			document.forms[0].subdivNo.selectedIndex="0";
	        			//document.forms[0].captcha.value=""; 
				}
	        	else if(flag=="true")
	        		{
	        	var url_coll= root.getElementsByTagName('urlstring')[0].firstChild.nodeValue.trim();  
	        	var randno=root.getElementsByTagName('randno')[0].firstChild.nodeValue.trim();  
	        	//alert("urll"+url_coll);
	        	//var url_str="https://collabland-tn.gov.in/CollabLandUrban/rest/Collabland/FMBReportToken?state=33&token="+url_coll; 
	        	if(url_coll!="")
	    		{
	        		const openedWindow = window.open("https://collabland-tn.gov.in/CollabLandUrban/rest/Collabland/FMBReportToken?state=33&token="+url_coll,"_blank");
	        		//const openedWindow = window.open("http://10.163.2.35:8081/bhunakshaweb3/rest/Collabland/FMBReportToken?state=33&token="+url_coll,"_blank");
	        		//alert(openedWindow.closed);
	        		document.forms[0].districtCode.selectedIndex="0"; 
	        			document.forms[0].talukCode.selectedIndex="0"; 
	        			document.forms[0].villageCode.selectedIndex="0"; 
	        			document.forms[0].wardNo.selectedIndex="0"; 
	        			document.forms[0].blockCode.selectedIndex="0"; 
	        			document.forms[0].surveyNo.selectedIndex="0"; 
	        			document.forms[0].subdivNo.selectedIndex="0";
	        		//	document.forms[0].captcha.value=""; 
	        		if(openedWindow.closed==false)
	        			{
	        		
	        			
	        		//	document.forms[0].captcha.value=""; 
	        			if(lan=='ta')
	        				{
	        			window.location.href ='chittaCheckNewUrbanFMBTamil.html?lan=ta&rno='+randno; 
	        				}
	        			else if(lan=='en')
	        				{
	        				window.location.href ='chittaCheckNewUrbanFMB_en.html?lan=en&rno='+randno; 
	        				}
	        		//	window.location.reload();
	        			}
	        		
	    		}
	    	else
	    		{
	    		alert("inside false");
	    		return false;
	    		}
	        		}
	    	    
	        }
	    }  
	         
	    }
	    HttpRequest.send(null);
		
			}
		//window.location.reload(true); 
			//window.location='chittaCheckNewUrbanFMBTamil.html?lan=ta';
			
			/* document.forms[0].wardNo.disabled = false;
			document.forms[0].villageCode.disabled = false;
			
			window.location.reload(true);  */
			
		}
 
 function validate_urban() {
	//alert("in validate");
			var doc = document.forms[0];
			
			var districtCode = doc.districtCode.value;
			var talukCode = doc.talukCode.value;
			var villageCode = doc.villageCode.value;
			//var streetCode = doc.streetCode.value;
			//var streetCode = doc.streetCode.value;
			var wardNo = doc.wardNo.value;
			var blockCode = doc.blockCode.value;
			var surveyNo = doc.surveyNo.value;
			var subdivNo = doc.subdivNo.value;
			//var captcha = doc.captcha.value;

			
			if(districtCode == '') {
				alert('Please Select District');
				doc.districtCode.focus();
				return false;
			} else {
				var regEx = new RegExp("^[0-9]{2}$");
				if(!districtCode.match(regEx)) {
					alert('Please Select District');
					doc.districtCode.focus();
					return false;
				}
			}
			if(talukCode == '') {
				//alert('districtCode'+districtCode);
				alert('Please Select Taluk'+talukCode);
				doc.talukCode.focus();
				return false;
			} else {
				var regEx = new RegExp("^[0-9]{2}$");
				if(!talukCode.match(regEx)) {
					alert('Please Select Taluk');
					doc.talukCode.focus();
					return false;
				}
			}
			/* if(streetCode == '') {
				alert('Please Select Street');
				doc.streetCode.focus();
				return false;
			} 
			 */
			if(villageCode == '') {
				alert('Please Select Village');
				doc.villageCode.focus();
				return false;
			} else {
				var regEx = new RegExp("^[0-9A-Za-z_]{3}$");
				if(!villageCode.match(regEx)) {
					alert('Please Select Village');
					doc.villageCode.focus();
					return false;
				}
			}

			
			if(wardNo == '') {
				alert('Please Enter Ward No');
				doc.wardNo.focus();
				return false;
			} 
			if(blockCode == '') {
				alert('Please Select Block Number');
				doc.blockCode.focus();
				return false;
			} 

			if(surveyNo == '') {
				alert('Please Select Survey No.');
				doc.surveyNo.focus();
				return false;
			} 
			if(subdivNo == '') {
				alert('Please Select Sub Division No.');
				doc.subdivNo.focus();
				return false;
			} 

			
			/* if(captcha == '') {
				alert('Please Enter Authentication Value');
				doc.captcha.focus();
				return false;
			}  */

			/* document.forms[0].wardNo.disabled = false;
			document.forms[0].villageCode.disabled = false;
			
			window.location.reload(true);  */
			
		}
 

 function appliid_valdate()
 {
 	var applicationid = document.forms[0].applicationid.value;
 	//alert("applicationid"+applicationid);
 	var regEx = new RegExp("^[0-9]{4}[/][A-Z0-9]{1}[0-9]{3}[/][0-9]{2}[/][0-9]{6}$");
 	if(!applicationid.match(regEx)) {
 		alert('Enter Valid Application id');
 		document.forms[0].applicationid.value="";
 		document.forms[0].applicationid.focus();
 		return false;
 	}
 }
 /*function fmb_map(districtCode,talukCode,villageCode,surveyNo,subdivNo,landtype)
 {
 	//var collab_url="https://collabland-tn.gov.in/APIServices/rest/Collabland/FMBReportToken";
 //alert("inside else function");
	
 var url = "ajax.html?page=getfmbmap_chitta&districtCode="+districtCode+"&talukCode="+talukCode+"&villagecode="+villageCode+"&surveyNo="+surveyNo+"&subdivNo="+subdivNo+"&landtype="+landtype;
 //alert("url"+url);
 var HttpRequest = getReq();
 HttpRequest.open("POST", url, true);    
 HttpRequest.onreadystatechange = function(){
 	//alert("inside function"+HttpRequest.readyState+"status"+HttpRequest.status);
      if(HttpRequest.readyState == 4){
     if(HttpRequest.status == 200){
        	//alert("inside 4 and 200");
     	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
     	//alert("root"+root)
     	var flag= root.getElementsByTagName('flag')[0].firstChild.nodeValue.trim();  
     	if(flag=="false")
     		{
     		alert("Invalid Captcha");
     		
     		return false;
     		}
     	
 			
     	else if(flag=="true")
     		{
     	var url_coll= root.getElementsByTagName('urlstring')[0].firstChild.nodeValue.trim();  
     
     	//alert("urll"+url_coll);
     	//var url_str="https://collabland-tn.gov.in/CollabLandUrban/rest/Collabland/FMBReportToken?state=33&token="+url_coll; 
     	if(url_coll!="")
 		{
     		//const openedWindow = window.open("https://collabland-tn.gov.in/rest/Collabland/FMBReportToken?state=33&token="+url_coll,"_blank");
     		//alert("openedWindow.closed");
     		//New URL changed in FMB Report with APIServices 21/08/2023...............
     		const openedWindow = window.open(collab_url+"?state=33&token="+url_coll,"_blank");
     		
     		
     		
 		}
 	else
 		{
 		//alert("inside false");
 		return false;
 		}
     		}
 	    
     }
 }  
      
 }
 HttpRequest.send(null);
 }*/
 