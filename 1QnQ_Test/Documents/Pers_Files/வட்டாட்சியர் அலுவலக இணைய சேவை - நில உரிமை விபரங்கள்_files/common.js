
var interval;

function numbersOnly(field) {
	var valo = new String();
	var numere = "0123456789";
	var chars = field.value.split("");
	for (i = 0; i < chars.length; i++) {
		if (numere.indexOf(chars[i]) != -1) 
			valo += chars[i];	
	}
	if (field.value != valo) field.value = valo;
}
function numbersOnly1(field) {
	var valo = new String();
	var numere = "0123456789/_";
	var chars = field.value.split("");
	for (i = 0; i < chars.length; i++) {
		if (numere.indexOf(chars[i]) != -1) 
			valo += chars[i];	
	}
	if (field.value != valo) field.value = valo;
	
	
}








function date(field) {
	var valo = new String();
	var numere = "0123456789-";
	
	var chars = field.value.split("");
	for (i = 0; i < chars.length; i++) {
		if (numere.indexOf(chars[i]) != -1) 
			valo += chars[i];	
	}
	if (field.value != valo) field.value = valo;
}
function toUpperCase(field)
{	
	var valo = new String();
	var chars = field.value.split("");
	for (i = 0; i < chars.length; i++) {
		valo += chars[i].toUpperCase();
	}
	if (field.value != valo) field.value = valo; 
}

function notAllowedChars(field) {
	var valo = new String();
	var numere = "<>&\\\'~!^|";
	var chars = field.value.split("");
	for (i = 0; i < chars.length; i++) {
		if (numere.indexOf(chars[i]) == -1) 
			valo += chars[i];
	}
	if (field.value != valo) field.value = valo;
}

function notAllowedChars1(field) {
	var valo = new String();
	var numere = "<>&\\\'~!^|@#$%()+*<>?,./}{][;':";
	var chars = field.value.split("");
	for (i = 0; i < chars.length; i++) {
		if (numere.indexOf(chars[i]) == -1) 
			valo += chars[i];
	}
	if (field.value != valo) field.value = valo;
}


function allowedChars(field) {
	var valo = new String();
	var numere = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/-";
	var chars = field.value.split("");
	for (i = 0; i < chars.length; i++) {
		
		if (numere.indexOf(chars[i]) != -1) 
			valo += chars[i];
	}
	if (field.value != valo) field.value = valo;
}



function allowedChars1(field) {
	var valo = new String();
	var numere = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/-";
	var chars = field.value.split("");
	for (i = 0; i < chars.length; i++) {
		if (numere.indexOf(chars[i]) != -1) 
			valo += chars[i];
	}
	if (field.value != valo) field.value = valo;
}
function allowedChars_otp(field) {
	var valo = new String();
	var numere = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var chars = field.value.split("");
	for (i = 0; i < chars.length; i++) {
		if (numere.indexOf(chars[i]) != -1) 
			valo += chars[i];
	}
	if (field.value != valo) field.value = valo;
	
}

function allowedCharspatta(field) {
	var valo = new String();
	var numere = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/";
	var chars = field.value.split("");
	for (i = 0; i < chars.length; i++) {
		if (numere.indexOf(chars[i]) != -1) 
			valo += chars[i];
	}
	if (field.value != valo) field.value = valo;
}


function notAllowSpace(field) {
	var valo = new String();
	var numere = " ";
	var chars = field.value.split("");
	for (i = 0; i < chars.length; i++) {
		if (numere.indexOf(chars[i]) == -1) 
			valo += chars[i];
	}
	if (field.value != valo) field.value = valo;
}

function getReq() {
    var req = false;
    try {
         req = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch(Ex) {
         try {
             req = new ActiveXObject("Microsoft.XMLHTTP");
         }
         catch(ex1) {
             req = false;
         }
    }
    if(!req && typeof XMLHttpRequest != 'undefined') {
            req = new XMLHttpRequest();
    }
    return req;
}

function ltrim(testStr) { 
       if (testStr == "") 
              return ""; 
       else { 
              var pattern = /[^\s]+.*/; 
              result = testStr.match(pattern); 
              return result[0]; 
       } 
} 
function rtrim(testStr) { 
       if (testStr == "") 
              return ""; 
       else { 
              var pattern = /.*[\S]/; 
              result = testStr.match(pattern); 
              return result[0]; 
       } 
} 
function trim(testStr) { 
   return rtrim(ltrim(testStr)); 
}
function val_space(text) {  
	var result=false;
	for (i=0,n=text.length;i<n;i++){
		if(text.charCodeAt(i)!=32){
		result=true;				
		}
  	}
  	if (result==false){
  			text="";
  	}
  		return text; 	
}



function getTaluksTamil(districtCode) {	
	
	var url = "ajax.html?page=talukTamil&districtCode=" + districtCode;

	var HttpRequest = getReq();
    HttpRequest.open("GET", url, true);    
    HttpRequest.onreadystatechange = function(){
            getTalukLists(HttpRequest);
    }
    HttpRequest.send(null);
}

function getTaluks(districtCode) {	
	
	var url = "ajax.html?page=taluk&districtCode=" + districtCode;
	
	var HttpRequest = getReq();
    HttpRequest.open("GET", url, true);    
    HttpRequest.onreadystatechange = function(){
            getTalukLists(HttpRequest);
    }
   
    HttpRequest.send(null);
}

function getTaluks_Urban(districtCode) {	
if(districtCode==16 || districtCode==17)
	{ 
	alert("This district Not allowed ... ");
	document.getElementsByName("districtCode")[0].value="";
	return false;
	}else{
	var url = "ajax.html?page=talukUrban&districtCode=" + districtCode;
	
	var HttpRequest = getReq();
    HttpRequest.open("GET", url, true);    
    HttpRequest.onreadystatechange = function(){
            getTalukLists(HttpRequest);
    }
   
    HttpRequest.send(null);
}

}



function getTaluksAreg(districtCode) {	
	
		var url = "ajax.html?page=taluk&districtCode=" + districtCode;
		
		var HttpRequest = getReq();
	    HttpRequest.open("GET", url, true);    
	    HttpRequest.onreadystatechange = function(){
	            getTalukLists(HttpRequest);
	    }
	   
	    HttpRequest.send(null);
	}



function getTalukLists(HttpRequest) {
	
var taluk = document.forms[0].talukCode;

	if(HttpRequest.readyState == 4){
		
        if(HttpRequest.status == 200){
        	
        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];       
            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;                        
            if(flag == "false") {   
            	for(i = taluk.length; i > 0; i--){
					taluk.options[i] = null;
				}          
            }
            else {            	
            	var list = root.getElementsByTagName('taluk');
            	for(i = taluk.length; i > 0; i--){
					taluk.options[i] = null;
				}
				for(i = 0; i < list.length; i++){	
					
					var talukCode = list[i].getElementsByTagName('talukcode')[0].firstChild.nodeValue;
					
					var talukName = list[i].getElementsByTagName('talukname')[0].firstChild.nodeValue;
					
					taluk.options[i+1] = new Option(talukName, talukCode);
				}	            	
            }
        }
    }
}


/**/

function getUrbanTalukLists(HttpRequest) {
	
	var taluk = document.forms[0].talukCode;

		if(HttpRequest.readyState == 4){
			
	        if(HttpRequest.status == 200){
	        	
	        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];       
	            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;                        
	            if(flag == "false") {   
	            	for(i = taluk.length; i > 0; i--){
						taluk.options[i] = null;
					}          
	            }
	            else {            	
	            	var list = root.getElementsByTagName('taluk');
	            	for(i = taluk.length; i > 0; i--){
						taluk.options[i] = null;
					}
					for(i = 0; i < list.length; i++){	
						
						var talukCode = list[i].getElementsByTagName('talukcode')[0].firstChild.nodeValue;
						
						var talukName = list[i].getElementsByTagName('talukname')[0].firstChild.nodeValue;
						
						taluk.options[i+1] = new Option(talukName, talukCode);
					}	            	
	            }
	        }
	    }
	}

function getVillages(districtCode, talukCode) {	
	var url = "ajax.html?page=village&districtCode=" + districtCode + "&talukCode=" + talukCode;
	var HttpRequest = getReq();
	
    HttpRequest.open("GET", url, true);    
    HttpRequest.onreadystatechange = function(){
            getVillageLists(HttpRequest);
    }
    HttpRequest.send(null);
}






function getUrbanVillages(districtCode, talukCode) {	
		var url = "ajax.html?page=getUrbanVillages&districtCode="+districtCode+"&talukCode="+talukCode;
		var HttpRequest = getReq();
		
	    HttpRequest.open("POST", url, true);    
	    HttpRequest.onreadystatechange = function(){
	    	
	    	getUrbanVillageListsNew(HttpRequest);
	    }
	    HttpRequest.send(null);
	}

function getUrbanVillagesTamil(districtCode, talukCode) {	
		var url = "ajax.html?page=getUrbanVillagesTamil&districtCode="+districtCode+"&talukCode="+talukCode;
		var HttpRequest = getReq();
		
	    HttpRequest.open("POST", url, true);    
	    HttpRequest.onreadystatechange = function(){
	    	getUrbanVillageListsNew(HttpRequest);
	    }
	    HttpRequest.send(null);
	}





function getVillagesfromStreet(districtCode, streetCode) {	
		var url = "ajax.html?page=getVillagesfromStreet&districtCode=" + districtCode + "&streetCode=" + streetCode;
		var HttpRequest = getReq();
		
	    HttpRequest.open("GET", url, true);    
	    HttpRequest.onreadystatechange = function(){
	            getVillageListsfromStreet(HttpRequest);
	    }
	    HttpRequest.send(null);
	    document.forms[0].wardNo.value = "001";
	   document.forms[0].villageCode.disabled = true;
	   document.forms[0].wardNo.disabled = true;
	   
	}






//new funstion gettin subdiv no. form tamilnilam web service
function getSubdivNo(districtCode,talukCode,villageCode,surveyno) {	
		
	
	if(districtCode!='' && talukCode!='' && villageCode != '' && surveyno!= ''){
	

	var url = "ajax.html?page=getSubdivNo&districtCode=" + districtCode + "&talukCode=" + talukCode + "&villageCode="+villageCode+"&surveyno=" + surveyno;
	
	
	var HttpRequest = getReq();
	
    HttpRequest.open("POST", url, true);    
    HttpRequest.onreadystatechange = function(){
        getSubdivLists(HttpRequest);

    };
    HttpRequest.send(null);
	}
}
function getSubdivNo(districtCode,talukCode,villageCode,landtype,flag,surveyno) {	
		
	
	//alert("landtype in subdiv load"+landtype);
	if(districtCode!='' && talukCode!='' && villageCode != '' && surveyno!= ''){
	

	var url = "ajax.html?page=getSubdivNo&districtCode=" + districtCode + "&talukCode=" + talukCode + "&villageCode="+villageCode+"&surveyno=" + surveyno+"&landtype="+landtype+"&flag="+flag;
	//alert("url"+url);

/*	else{
	var wardCode = document.forms[0].wardNo.value;
	var blockCode = document.forms[0].blockCode.value;
	var url = "ajax.html?page=getUrbanSubdivNo&districtCode=" + districtCode + "&talukCode=" + talukCode + 
				"&villageCode="+villageCode+"&wardCode="+wardCode+"&blockCode="+blockCode+"&surveyno="+surveyno;
	}*/
	
	//alert("url"+url);
	
	
	var HttpRequest = getReq();
	
    HttpRequest.open("POST", url, true);    
    HttpRequest.onreadystatechange = function(){
        getSubdivLists(HttpRequest);

    };
    HttpRequest.send(null);
	}
}
function fmblandtypeclear()
{
	document.getElementById("surveyNo").value="";
	}
function getSubdivNoFMB(districtCode,talukCode,villageCode,flag,surveyno) {	
	var talukcode=talukCode.split("/");
	var landtype="";
	if(talukcode[1]=='Y')
	{
	 var land_chk = document.getElementById("landtype");  
	 if(land_chk.checked==true)
		 {
		 landtype=land_chk.value;
		 }
	 else
		 {
		 landtype="";
		 }
	}
  //alert(landtype);
	if(districtCode!='' && talukCode!='' && villageCode != '' && surveyno!= ''){
	

	var url = "ajax.html?page=getSubdivNo&districtCode=" + districtCode + "&talukCode=" + talukCode + "&villageCode="+villageCode+"&surveyno=" + surveyno+"&landtype="+landtype+"&flag="+flag;
	
	var HttpRequest = getReq();
	
    HttpRequest.open("POST", url, true);    
    HttpRequest.onreadystatechange = function(){
    	getSubdivListsFMB(HttpRequest);

    };
    HttpRequest.send(null);
	}
}

/*new*/
function getUrbanSubdivNo(districtCode,talukCode,villageCode,wardCode,blockCode,surveyno) {	
		
	
	if(districtCode!='' && talukCode!='' && villageCode != '' && wardCode!= '' && blockCode!='' && surveyno!=''){
	
	
	var wardCode = document.forms[0].wardNo.value;
	var blockCode = document.forms[0].blockCode.value;
	var url = "ajax.html?page=getUrbanSubdivNo&districtCode=" + districtCode + "&talukCode=" + talukCode + 
				"&villageCode="+villageCode+"&wardCode="+wardCode+"&blockCode="+blockCode+"&surveyno="+surveyno;
	
	
	
	
	var HttpRequest = getReq();
	
    HttpRequest.open("POST", url, true);    
    HttpRequest.onreadystatechange = function(){
        getSubdivLists(HttpRequest);

    };
    HttpRequest.send(null);
	}
}

/**/

function getUrbanTalukSubdivNo(districtCode,talukCode,villageCode,wardCode,blockCode,surveyno) {	
		
	
	if(districtCode!='' && talukCode!='' && villageCode != '' && wardCode!= '' && blockCode!='' && surveyno!=''){
	
	
	var wardCode = document.forms[0].wardNo.value;
	var blockCode = document.forms[0].blockCode.value;
	var url = "ajax.html?page=getUrbanTalukSubdivNo&districtCode=" + districtCode + "&talukCode=" + talukCode + 
				"&villageCode="+villageCode+"&wardCode="+wardCode+"&blockCode="+blockCode+"&surveyno="+surveyno;
	
	
	
	
	var HttpRequest = getReq();
	
    HttpRequest.open("POST", url, true);    
    HttpRequest.onreadystatechange = function(){
        getSubdivLists(HttpRequest);

    };
    HttpRequest.send(null);
	}
}



function getUrbanSurveyNo(districtCode,talukCode,villageCode,wardCode,blockCode) {	
	//var wardCode = document.forms[0].wardNo.value;
	
	if(districtCode!='' && talukCode!='' && villageCode != '' && wardCode!= '' && blockCode!=''){
		var url = "ajax.html?page=getUrbanSurveyNo&districtCode=" + districtCode + "&talukCode=" + talukCode + "&villageCode="+villageCode+"&wardCode=" + wardCode+"&blockCode="+blockCode;
		var HttpRequest = getReq();
		
	    HttpRequest.open("POST", url, true);    
	    HttpRequest.onreadystatechange = function(){
	    	getUrbanSurveyNoLists(HttpRequest);

	    };
	    HttpRequest.send(null);
		}
	
	
}


function getBlocks(districtCode,talukCode,villageCode,wardNo) {	
	
	if(districtCode!='' && talukCode!='' && villageCode != '' && wardNo!= ''){
	var url = "ajax.html?page=getBlocks&districtCode=" + districtCode + "&talukCode=" + talukCode + "&villageCode="+villageCode+"&wardNo=" + wardNo;
	var HttpRequest = getReq();
	
    HttpRequest.open("POST", url, true);    
    HttpRequest.onreadystatechange = function(){
    	getBlocksLists(HttpRequest);

    };
    HttpRequest.send(null);
	}
}


function getWard(districtCode,talukCode,villageCode) {	
	
	if(districtCode!='' && talukCode!='' && villageCode != ''){
	var url = "ajax.html?page=getWard&districtCode=" + districtCode + "&talukCode=" + talukCode + "&villageCode="+villageCode;
	var HttpRequest = getReq();
	
    HttpRequest.open("POST", url, true);    
    HttpRequest.onreadystatechange = function(){
    	getWardLists(HttpRequest);

    };
    HttpRequest.send(null);
	}
}
function getdistricturban(lang)
{
	var url='';
	if(lang=='en')
		{
	 url = "ajax.html?page=getdistricturban&lang=en";
		}
	else if(lang=='ta')
		{
		 url = "ajax.html?page=getdistricturban&lang=ta";
		}
	var HttpRequest = getReq();
    HttpRequest.open("POST", url, true);    
    HttpRequest.onreadystatechange = function(){
    	//getdistrictLists(HttpRequest);
    	if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
	        	
    	 var jsonObj = HttpRequest.responseText;
    	 var json = JSON.parse(jsonObj);
    	 var json_lenght=json.UrbanDistrict.DistrictName.length;
    
    	 for(var i=0;i<json_lenght;i++)
    		 {
    		 $("#districtCode").append("<option value=" +json.UrbanDistrict.DistrictCode[i] + ">" + json.UrbanDistrict.DistrictName[i] + "</option>");
    		 }
	        }}
    }
    HttpRequest.send(null);
	}
function getWardTamil(districtCode,talukCode,villageCode) {	

	if(districtCode!='' && talukCode!='' && villageCode != ''){
	var url = "ajax.html?page=getWardTamil&districtCode=" + districtCode + "&talukCode=" + talukCode + "&villageCode="+villageCode;
	var HttpRequest = getReq();
	
    HttpRequest.open("POST", url, true);    
    HttpRequest.onreadystatechange = function(){
    	getWardLists(HttpRequest);

    };
    HttpRequest.send(null);
	}
}



function getsubdiv(districtCode,talukCode,villageCode,surveyno) {	


	var url = "ajax.html?page=surno&districtCode=" + districtCode + "&talukCode=" + talukCode + "&villageCode="+villageCode+"&surveyno=" + surveyno;
	var HttpRequest = getReq();
	
    HttpRequest.open("GET", url, true);    
    HttpRequest.onreadystatechange = function(){
        getSurveyLists(HttpRequest);

    }
    HttpRequest.send(null);
}





	
function getVillagesTamil(districtCode, talukCode) {	
	
	var url = "ajax.html?page=villageTamil&districtCode=" + districtCode + "&talukCode=" + talukCode;
	
	var HttpRequest = getReq();
    HttpRequest.open("GET", url, true);    
    HttpRequest.onreadystatechange = function(){
            getVillageLists(HttpRequest)
    }
    HttpRequest.send(null);
}


function getVillageLists(HttpRequest) {
	
	
	
var village = document.forms[0].villageCode;


	if(HttpRequest.readyState == 4){
        if(HttpRequest.status == 200){
        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
        	
            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;  
            
            if(flag == "false") {   
            	for(i = village.length; i > 0; i--){
					village.options[i] = null;
				}          
            }
            else {            	
            	var list = root.getElementsByTagName('village');
            	for(i = village.length; i > 0; i--){
					village.options[i] = null;
				}
            	village.options.length=1; 
				for(i = 0; i < list.length; i++){	
					
					var villageCode = list[i].getElementsByTagName('villagecode')[0].firstChild.nodeValue;
					
					var villageName = list[i].getElementsByTagName('villagename')[0].firstChild.nodeValue;
				//	village.options[village.options.length] = new Option(trim(name), id);		
					
					village.options[i+1] = new Option(villageName, villageCode);
					
				}	            	
            }
        }
    }
	
}




function getUrbanVillageListsNew(HttpRequest) {
	
	
	
	var town = document.forms[0].villageCode;
	
		if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
	        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
	            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;  
	            
	            if(flag == "false") {   
	            	for(i = town.length; i > 0; i--){
	            		town.options[i] = null;
					}          
	            }
	            else {            	
	            	var list = root.getElementsByTagName('town');
	            	for(i = town.length; i > 0; i--){
	            		town.options[i] = null;
					}
	            	town.options.length=1; 
					for(i = 0; i < list.length; i++){	
						
						var townCode = list[i].getElementsByTagName('townCode')[0].firstChild.nodeValue;
						
						var townName = list[i].getElementsByTagName('townName')[0].firstChild.nodeValue;
						//town.options[town.options.length] = new Option(trim(townname), id);		
						
						
						town.options[i+1] = new Option(townName,townCode);
						
						
					}	            	
	            }
	        }
	    }
		
	}






function getSurveyLists(HttpRequest) {
	var subdivision = document.forms[0].subdivision;

		if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
	        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
	        	
	            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;  
	            
	            if(flag == "false") {   
	            	for(i = subdivision.length; i > 0; i--){
	            		subdivision.options[i] = null;
					}          
	            }
	            else {            	
	            	var list = root.getElementsByTagName('subdiv');
	            	for(i = subdivision.length; i > 0; i--){
	            		subdivision.options[i] = null;
					}
					for(i = 0; i < list.length; i++){	
						
						var villageCode = list[i].getElementsByTagName('subdivcode')[0].firstChild.nodeValue;
						
						var villageName = list[i].getElementsByTagName('subdivcode')[0].firstChild.nodeValue;
						subdivision.options[i+1] = new Option(villageName, villageCode);
						
					}	            	
	            }
	        }
	    }
		
	}

function getSubdivLists(HttpRequest) {
	var subdivision = document.forms[0].subdivNo;

		if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
	                  	
	        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
	        	
	            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;  
	            
	            if(flag == "false") {   
	            	alert("Invalid Survey No");
	            	document.getElementById("surveyNo").value="";
	            	for(i = subdivision.length; i > 0; i--){
	            		subdivision.options[i] = null;
					}  
	            	return false;
	            }
	            else {            	
	            	var list = root.getElementsByTagName('subdiv');
	            	for(i = subdivision.length; i > 0; i--){
	            		subdivision.options[i] = null;
					}
					for(i = 0; i < list.length; i++){	
						
						var villageCode = list[i].getElementsByTagName('subdivcode')[0].firstChild.nodeValue;
						var villageName = list[i].getElementsByTagName('subdivcode')[0].firstChild.nodeValue;
					//aarthi added 24aug2021	
							
						subdivision.options[i+1] = new Option(villageName, villageCode);
					
							
						
					}	            	
	            }          	
	            
	        }
	    }
		
	}
//aarthi added 25aug2021
function getSubdivListsFMB(HttpRequest) {
	var subdivision = document.forms[0].subdivNo;

		if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
	                  	
	        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
	        	
	            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;  
	            
	            if(flag == "false") {   
	            	alert("Please enter valid Survey No");
	            	document.getElementById("surveyNo").value="";
	            	for(i = subdivision.length; i > 0; i--){
	            		subdivision.options[i] = null;
					}          
	            }
	            else {            	
	            	var list = root.getElementsByTagName('subdiv');
	            	for(i = subdivision.length; i > 0; i--){
	            	
	            		subdivision.options[i] = null;
					}
					for(i = 0; i < list.length; i++){	
						
						var villageCode = list[i].getElementsByTagName('subdivcode')[0].firstChild.nodeValue;
						var villageName = list[i].getElementsByTagName('subdivcode')[0].firstChild.nodeValue;
					//aarthi added 24aug2021	
							if(villageCode=="-")
								{
								subdivision.options[i+1] = new Option(villageName, villageCode);
								}
							else
								{
						subdivision.options[1] = new Option("-", "-");
						subdivision.options[i+2] = new Option(villageName, villageCode);
								}
							
						
					}	            	
	            }          	
	            
	        }
	    }
		
	}


function getUrbanSurveyNoLists(HttpRequest) {
	var subdivision = document.forms[0].surveyNo;
	

	if(HttpRequest.readyState == 4){
        if(HttpRequest.status == 200){
                  	
        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
        	
            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;  
            if(flag == "false") {   
            	for(i = subdivision.length; i > 0; i--){
            		subdivision.options[i] = null;
				}          
            }
            else {            	
            	var list = root.getElementsByTagName('survey');
            	
				for(i = 0; i < list.length; i++){	
					
					var blockCode = list[i].getElementsByTagName('surveyNo')[0].firstChild.nodeValue;
					
					var blockName = list[i].getElementsByTagName('surveyNo')[0].firstChild.nodeValue;
					subdivision.options[i+1] = new Option(blockCode, blockName);
					
				}	            	
            }          	
            
        }
    }
		
	}


function getBlocksLists(HttpRequest) {
	var subdivision = document.forms[0].blockCode;

		if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
	                  	
	        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
	        	
	            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;  
	            
	            if(flag == "false") {   
	            	for(i = subdivision.length; i > 0; i--){
	            		subdivision.options[i] = null;
					}          
	            }
	            else {            	
	            	var list = root.getElementsByTagName('block');
	            	for(i = subdivision.length; i > 0; i--){
	            		subdivision.options[i] = null;
					}
					for(i = 0; i < list.length; i++){	
						
						var blockCode = list[i].getElementsByTagName('blockCode')[0].firstChild.nodeValue;
						
						var blockName = list[i].getElementsByTagName('blockCode')[0].firstChild.nodeValue;
						subdivision.options[i+1] = new Option(blockCode, blockName);
						
					}	            	
	            }          	
	            
	        }
	    }
		
	}



function getWardLists(HttpRequest) {
	var ward = document.forms[0].wardNo;

		if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
	                  	
	        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
	        	
	            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;  
	            
	            if(flag == "false") {   
	            	for(i = ward.length; i > 0; i--){
	            		ward.options[i] = null;
					}          
	            }
	            else {            	
	            	var list = root.getElementsByTagName('ward');
	            	for(i = ward.length; i > 0; i--){
	            		ward.options[i] = null;
					}
					for(i = 0; i < list.length; i++){	
						
						var wardCode = list[i].getElementsByTagName('wardCode')[0].firstChild.nodeValue;
						
						var wardName = list[i].getElementsByTagName('wardName')[0].firstChild.nodeValue;
						ward.options[i+1] = new Option(wardName, wardCode);
						
					}	            	
	            }          	
	            
	        }
	    }
		
	}






function getCount() {
	
	var url = "ajax.html?page=getCount";
	var HttpRequest = getReq();
     
    HttpRequest.onreadystatechange = function(){
            getCountReply(HttpRequest);
    }
    HttpRequest.open("GET", url, true); 
    HttpRequest.send(null);
}





function noBack() {
//alert("inside no back");
window.history.forward();
}
function setCookie() {	
	var name = "page";
	var value = "talukAdmin";
	var days = 0;
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";	
	window.location="logout.html";
}
function readCookie() {	
	var values;
	var nameEQ = "page=";
	var ca = document.cookie.split(';');	
	for(var i=0;i < ca.length;i++) {	
		var c = ca[i];	
		while (c.charAt(0)==' ') 
			c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) 
	    	values = c.substring(nameEQ.length,c.length);    
		if(values == "talukAdmin")   {
			window.location="../logout.html";
		}
	}	
}
function removeCookie() {	

	var name = "page";
	var value = "";
	var days = 0;
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
	window.location="mainMenu.html";
}
function getUrbanTalukTamil(districtCode,lang) {	
		var url = "ajax.html?page=getUrbanTalukTamil&districtCode="+districtCode+"&lang="+lang ;
		var HttpRequest = getReq();
		
	    HttpRequest.open("POST", url, true);    
	    HttpRequest.onreadystatechange = function(){
	    	getUrbanTalukListsNew(HttpRequest);
	    }
	    HttpRequest.send(null);
	}


function getUrbanTalukListsNew(HttpRequest) {
	
	
	
	var taluk = document.forms[0].talukCode;
	
		if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
	        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
	            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;  
	            
	            if(flag == "false") {   
	            	for(i = taluk.length; i > 0; i--){
	            		taluk.options[i] = null;
					}          
	            }
	            else {            	
	            	var list = root.getElementsByTagName('taluk');
	            	for(i = taluk.length; i > 0; i--){
	            		taluk.options[i] = null;
					}
	            	taluk.options.length=1; 
					for(i = 0; i < list.length; i++){	
						
						var talukCode = list[i].getElementsByTagName('talukCode')[0].firstChild.nodeValue;
						
						var talukName = list[i].getElementsByTagName('talukName')[0].firstChild.nodeValue;
						//town.options[town.options.length] = new Option(trim(townname), id);		
						
						
						taluk.options[i+1] = new Option(talukName,talukCode);
						
						
					}	            	
	            }
	        }
	    }
		
	}
function readCapt()
{
	

	 var audioobj ="";
	 
	 $("#audiotag").trigger('load');
	  audioobj = document.getElementById('audiotag');	
	 
	 
	 
	 var src = audioobj.src;
	// alert("src..."+scr);
		var pos = src.indexOf('?');
		if (pos >= 0) {
			src = src.substr(0, pos);
		}
		var date = new Date();
		audioobj.src = src + '?v=' + date.getTime();
		
		audioobj.play();
	
	
} 

//aarthi added on 14dec22 --loading dist,taluk,vill from service rural

/*function distvill()
{
	$("#talukCode").clear();
	$("#villageCode").clear();
	var inputValObj = {};
	$.ajax({
		url: 'http://tamilnilam.tn.gov.in:8080/tnilam_MobileApp_Captcha/DistrictTamil',
		type: 'POST',
		contentType: "application/json",
		dataType: 'xml',
		timeout: 6000,
		success: function(response) {
			var json = $.xml2json(response);
	    	 var jsonlength=json.response.length;
	    	 for(var i=0;i<=jsonlength;i++)
    		 {
	    		
    		 $("#districtCode").append("<option value=" +json.response[i].name + ">" + json.response[i].value + "</option>");
    		 }
		}

	});
	}

function distvilleng()
{
	
	var inputValObj = {};
	$.ajax({
		url: 'http://tamilnilam.tn.gov.in:8080/tnilam_MobileApp_Captcha/DistrictEnglish',
		type: 'POST',
		contentType: "application/json",
		dataType: 'xml',
		timeout: 6000,
		success: function(response) {
			var json = $.xml2json(response);
	    	 var jsonlength=json.response.length;
	    	 for(var i=0;i<=jsonlength;i++)
    		 {
    		 $("#districtCode").append("<option value=" +json.response[i].name + ">" + json.response[i].value + "</option>");
    		 }
		}

	});
	}
function talukrur(district_code)
{

	$('#talukCode')
	   .find('option')
	   .remove()
	   .end();
	$('#villageCode')
	   .find('option')
	   .remove()
	   .end();
	$.ajax({
		url: 'http://tamilnilam.tn.gov.in:8080/tnilam_MobileApp_Captcha/TalukTamil',
		type: 'POST',
		data: {DistrictCode:district_code},
		contentType: "application/json",
		dataType: 'xml',
		timeout: 6000,
		success: function(response) {
			var json = $.xml2json(response);
	    	 var jsonlength=json.response.length;
	    	 for(var i=0;i<=jsonlength;i++)
    		 {
    		 $("#talukCode").append("<option value=" +json.response[i].name + ">" + json.response[i].value + "</option>");
    		 }
		}

	});


}

function talukrureng(district_code)
{

	//document.getElementById('talukCode').selectIndex=0;
	//document.getElementById('villageCode').value="";
	var select = document.getElementById("talukCode");
	var length = select.options.length;
	for (i = length-1; i >= 0; i--) {
	  select.options[i] = null;
	}
	$('#talukCode')
   .find('option')
   .remove()
   .end();
	$('#villageCode')
	   .find('option')
	   .remove()
	   .end();
	 var taluk='';
	
	$.ajax({
		url: 'http://tamilnilam.tn.gov.in:8080/tnilam_MobileApp_Captcha/TalukEnglish',
		type: 'POST',
		data: {DistrictCode:district_code},
		contentType: "application/json",
		dataType: 'xml',
		timeout: 6000,
		success: function(response) {
			 
			 
			var json = $.xml2json(response);
	    	 var jsonlength=json.response.length;
	    	 for(var i=0;i<=jsonlength;i++)
    		 {
	    		 //alert(i);
	    	// taluk += "<option value="+json.response[i].name + ">" + json.response[i].value + "</option>";
    		 $("#talukCode").append("<option value=" +json.response[i].name + ">" + json.response[i].value + "</option>");
    		 }
	    	 
	    	// var span = document.getElementById('talukCode');
	    	 
	    	 //span.appendChild(taluk);
	    	 
	    	
	    	 //$("#talukCode").append(taluk);
	    	 
		}

	});


}
function villagerur(distcode,talukcode)
{
	$('#villageCode')
	   .find('option')
	   .remove()
	   .end();
	$.ajax({
		url: 'http://tamilnilam.tn.gov.in:8080/tnilam_MobileApp_Captcha/VillageTamil',
		type: 'POST',
		data: {DistrictCode:distcode,TalukCode:talukcode},
		contentType: "application/json",
		dataType: 'xml',
		timeout: 6000,
		success: function(response) {
			var json = $.xml2json(response);
	    	 var jsonlength=json.response.length;
	    	 for(var i=0;i<=jsonlength;i++)
    		 {
    		 $("#villageCode").append("<option value=" +json.response[i].name + ">" + json.response[i].value + "</option>");
    		 }
		}

	});
	}
function villagerureng(distcode,talukcode)
{
	$('#villageCode')
	   .find('option')
	   .remove()
	   .end();
	$.ajax({
		url: 'http://tamilnilam.tn.gov.in:8080/tnilam_MobileApp_Captcha/VillageEnglish',
		type: 'POST',
		data: {DistrictCode:distcode,TalukCode:talukcode},
		contentType: "application/json",
		dataType: 'xml',
		timeout: 6000,
		success: function(response) {
			var json = $.xml2json(response);
	    	 var jsonlength=json.response.length;
	    	 for(var i=0;i<=jsonlength;i++)
    		 {
    		 $("#villageCode").append("<option value=" +json.response[i].name + ">" + json.response[i].value + "</option>");
    		 }
		}

	});
	}*/

//aarthi p udated on 28dec22

function distvill()
{
	var url = "ajax.html?page=ruralservice&ser=dist&lang=ta&type=rur&call_type=ser";
	var HttpRequest = getReq();
    HttpRequest.open("POST", url, true);    
    HttpRequest.onreadystatechange = function(){
    	if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
    	 var jsonObj = HttpRequest.responseText;
    	 if(jsonObj=='false')
    	 {
			 alert("invalid input");
			 return false;
		 }
		 else
		 {
    	 var json = JSON.parse(jsonObj);
    	 var json_lenght=json.landrecords.response.length;
    	 /* $("#districtCode").append("<option value=''>....தேர்வு செய்க ...</option>");*/
    	 for(var i=0;i<=json_lenght;i++)
    		 {
    		 $("#districtCode").append("<option value=" +json.landrecords.response[i].name + ">" + json.landrecords.response[i].value + "</option>");
    		 }
	        }}
    	}
    }
    HttpRequest.send(null);
	}



function distvilleng()
{
	//alert("inside dist eng");
	var url = "ajax.html?page=ruralservice&ser=dist&lang=en&type=rur&call_type=ser";
	var HttpRequest = getReq();
    HttpRequest.open("POST", url, true);    
    HttpRequest.onreadystatechange = function(){
    	if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
    	 var jsonObj = HttpRequest.responseText;
    	 if(jsonObj=='false')
    	 {
			 alert("invalid input");
			 return false;
		 }
		 else
		 {
    	 var json = JSON.parse(jsonObj);
    	 var json_lenght=json.landrecords.response.length;
    	 for(var i=0;i<=json_lenght;i++)
    		 {
    		 $("#districtCode").append("<option value=" +json.landrecords.response[i].name + ">" + json.landrecords.response[i].value + "</option>");
    		 }
	        }}
    	}
    }
    HttpRequest.send(null);
	}
function talukrur(district_code,flag)
{
//alert("inside taluk");
	if ($('#districtCode').val() == "00") return false;
	var district_code=$('#districtCode').val();
	var url = "ajax.html?page=ruralservice&ser=tlk&distcode="+district_code+"&lang=ta&type=rur&call_type=ser";
	var HttpRequest = getReq();
    HttpRequest.open("POST", url, true);    
    HttpRequest.onreadystatechange = function(){
    	if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
    	 var jsonObj = HttpRequest.responseText;
    	 if(jsonObj=='false')
    	 {
			 alert("invalid input");
			 return false;
		 }
		 else
		 {
    	 var json = JSON.parse(jsonObj);
    	 var json_lenght=json.landrecords.response.length;
    	// alert(json_lenght);
    	 $("#talukCode").empty();
    	// $("#villageCode").empty();
    	 /* $("#talukCode").append("<option value=''>....தேர்வு செய்க ...</option>");*/
    	 for(var i=0;i<=json_lenght;i++)
    		 {
    		 //alert("name"+json.landrecords.response[i].name+"value..."+json.landrecords.response[i].value)
    		 if(flag=='F')
    		 {
    		 $("#talukCode").append("<option value=" +json.landrecords.response[i].name+"/"+json.landrecords.response[i].flag + ">" + json.landrecords.response[i].value+ "</option>");
    		 
    		 }
    		 else{
				  $("#talukCode").append("<option value=" +json.landrecords.response[i].name+ ">" + json.landrecords.response[i].value+ "</option>");
			 }
	        }}
	        }
    }
    }
    HttpRequest.send(null);



}

function talukrureng(district_code,flag)
{
	
	if ($('#districtCode').val() == "00") return false;
	var district_code=$('#districtCode').val();
	var url = "ajax.html?page=ruralservice&ser=tlk&distcode="+district_code+"&lang=en&type=rur&call_type=ser";
	var HttpRequest = getReq();
    HttpRequest.open("POST", url, true);    
    HttpRequest.onreadystatechange = function(){
    	if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
    	 var jsonObj = HttpRequest.responseText;
    	 if(jsonObj=='false')
    	 {
			 alert("invalid input");
			 return false;
		 }
		 else
		 {
    	 var json = JSON.parse(jsonObj);
    	 var json_lenght=json.landrecords.response.length;
    	 $("#talukCode").empty();
    	 for(var i=0;i<=json_lenght;i++)
    		 {
				 if(flag=='F')
    		 {
    		 $("#talukCode").append("<option value=" +json.landrecords.response[i].name + "/"+json.landrecords.response[i].flag +">" + json.landrecords.response[i].value + "</option>");
    		 }
    		 else{
				  $("#talukCode").append("<option value=" +json.landrecords.response[i].name+ ">" + json.landrecords.response[i].value+ "</option>");
			 }
    		 }
	        }}
    	}
    }
    HttpRequest.send(null);


}
function viewlandtype(landtype)
{

		document.getElementById("surveyNo").value="";

var subdivisions=document.forms[0].subdivNo;
for(i = subdivision.length; i > 0; i--){
	            		subdivision.options[i] = null;
					} 
}
function villagerur(distcode,taluk_code,flag)
{
	//alert("inside village load");
	//alert(flag);
	//alert(taluk_code);
		//alert(flag);
		var talukcode='';
		if(flag=='F')
		{
			//alert("inside flag");
			document.getElementById("surveyNo").value="";
		document.getElementById("subdivNo").value="";
		
			//	alert("inside flag F");
	 talukcode=taluk_code.split("/");
	 var ele = document.getElementsByName('viewOpt');
	 
     for (i = 0; i < ele.length; i++) {
         if (ele[i].checked)
             var viewopt= ele[i].value;
     }
//alert("talukcode"+talukcode[0]);
	if(talukcode[1]=="Y" && viewopt!='searchptno')
	{
		//alert("inside y");
		document.getElementById("landtype_opt").style.display="block";
		 $("#landtype").prop("checked", false);
	}
	else if(talukcode[1]=="Y" && viewopt=='searchptno')
	{
		//alert("inside y");
		document.getElementById("landtype_opt").style.display="none";
		 $("#landtype").prop("checked", false);
	}
	else if(talukcode[1]=="N"){
		document.getElementById("landtype_opt").style.display="none";
	}
		talukcode=talukcode[0];
	//alert("talukcode>>>>"+talukcode);
	}
	else{
		talukcode=taluk_code;
	}
	//alert("talukcode>>>"+talukcode);
	if(talukcode!='')
	{
		//alert("inside not null")
	var url = "ajax.html?page=ruralservice&ser=vill&distcode="+$('#districtCode').val()+"&talukcode="+talukcode+"&lang=ta&type=rur&call_type=ser";
	var HttpRequest = getReq();
    HttpRequest.open("POST", url, true);    
    HttpRequest.onreadystatechange = function(){
    	if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
    	 var jsonObj = HttpRequest.responseText;
    	 if(jsonObj=='false')
    	 {
			 alert("invalid input");
			 return false;
		 }
		 else
		 {
    	 var json = JSON.parse(jsonObj);
    	 var json_lenght=json.landrecords.response.length;
    	 $("#villageCode").empty();
    	/*  $("#villageCode").append("<option value=''>....தேர்வு செய்க ...</option>");*/
    	 for(var i=0;i<=json_lenght;i++)
    		 {
    		 //alert("name"+json.landrecords.response[i].name+"value..."+json.landrecords.response[i].value)
    		 $("#villageCode").append("<option value=" +json.landrecords.response[i].name + ">" + json.landrecords.response[i].value + "</option>");
    		 }
	        }}
    	}
    }
    HttpRequest.send(null);
    }
	}
function villagerureng(distcode,taluk_code,flag)
{
	var talukcode='';
		if(flag=='F')
		{
			document.getElementById("surveyNo").value="";
		document.getElementById("subdivNo").value="";
			//alert("inside flag F");
	 talukcode=taluk_code.split("/");

	if(talukcode[1]=="Y")
	{
		document.getElementById("landtype_opt").style.display="block";
		 $("#landtype").prop("checked", false);
	}
	else if(talukcode[1]=="N"){
		document.getElementById("landtype_opt").style.display="none";
	}
		talukcode=talukcode[0];
	//alert("talukcode>>>>"+talukcode);
	}
	else{
		talukcode=taluk_code;
	}
	var url = "ajax.html?page=ruralservice&ser=vill&distcode="+$('#districtCode').val()+"&talukcode="+talukcode+"&lang=en&type=rur&call_type=ser";
	var HttpRequest = getReq();
    HttpRequest.open("POST", url, true);    
    HttpRequest.onreadystatechange = function(){
    	if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
    	 var jsonObj = HttpRequest.responseText;
    	 if(jsonObj=='false')
    	 {
			 alert("invalid input");
			 return false;
		 }
		 else
		 {
    	 var json = JSON.parse(jsonObj);
    	 var json_lenght=json.landrecords.response.length;
    	 $("#villageCode").empty();
    	 for(var i=0;i<=json_lenght;i++)
    		 {
    		 $("#villageCode").append("<option value=" +json.landrecords.response[i].name + ">" + json.landrecords.response[i].value + "</option>");
    		 }
	        }}
    	}
    }
    HttpRequest.send(null);
	}
function refCaptcha()
{
	 var obj = document.getElementById('captcha_name');	
	
	 var src = obj.src;
		var pos = src.indexOf('?');
		if (pos >= 0) {
			src = src.substr(0, pos);
		}
		var date = new Date();
		obj.src = src + '?v=' + date.getTime();
		return false;

}

function audPause()
{
	 var audioobj = document.getElementById('audiotag');	
	 audioobj.pause(); 
	 document.getElementById('full_play').style.visibility="hidden";	
	// document.getElementById('audPlay').style.visibility="visible";	
	 
}

function audPlay(){
	 var audioobj = document.getElementById('audiotag');	
	 audioobj.play(); 	
	 document.getElementById('full_play').style.visibility="hidden";	
	 document.getElementById('audPlay').style.visibility="visible";
}

function isCheck(obj) {
    var v = obj.value;
        if (v.match(/^\d{4}$/) !== null) {
        obj.value = v + '/';
        } else if (v.match(/^\d{4}\/[A-Z0-9]{1}\d{3}$/) !== null) {
        obj.value = v + '/';
        }
        else if (v.match(/^\d{4}\/[A-Z0-9]{1}\d{3}\/\d{2}$/) !== null) {
        obj.value = v + '/';
        }
        return false;
       
    }  
function init() {
	//alert("haiiiiiiiiiiiiiiiiigggggggggg");
	if (!document.getElementById) return false;
	var f = document.getElementById('auto_off');
	//alert("f=============>"+f);
	var u = f.elements[0];
	//alert("u==================>"+u);
	f.setAttribute("autocomplete", "off");
	u.focus();
	}
function getUrTalSurveyNo(districtCode,talukCode,villageCode,wardCode,blockCode) {	
	
	
	if(districtCode!='' && talukCode!='' && villageCode != '' && wardCode!= '' && blockCode!=''){
		var url = "ajax.html?page=getUrTalSurveyNo&districtCode=" + districtCode + "&talukCode=" + talukCode + "&villageCode="+villageCode+"&wardCode=" + wardCode+"&blockCode="+blockCode;
		var HttpRequest = getReq();
		
	    HttpRequest.open("POST", url, true);    
	    HttpRequest.onreadystatechange = function(){
	    	getUrbanSurveyNoLists(HttpRequest);

	    };
	    HttpRequest.send(null);
		}
	
	
}

function getUrbanSurveyNo(districtCode,talukCode,villageCode,wardCode,blockCode) {	
	//var wardCode = document.forms[0].wardNo.value;
	
	if(districtCode!='' && talukCode!='' && villageCode != '' && wardCode!= '' && blockCode!=''){
		var url = "ajax.html?page=getUrbanSurveyNo&districtCode=" + districtCode + "&talukCode=" + talukCode + "&villageCode="+villageCode+"&wardCode=" + wardCode+"&blockCode="+blockCode;
		var HttpRequest = getReq();
		
	    HttpRequest.open("POST", url, true);    
	    HttpRequest.onreadystatechange = function(){
	    	getUrbanSurveyNoLists(HttpRequest);

	    };
	    HttpRequest.send(null);
		}
	
	
}

function getUrbanSurveyNoLists(HttpRequest) {
	var subdivision = document.forms[0].surveyNo;
	

	if(HttpRequest.readyState == 4){
        if(HttpRequest.status == 200){
                  	
        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
        	
            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;  
            if(flag == "false") {   
            	for(i = subdivision.length; i > 0; i--){
            		subdivision.options[i] = null;
				}          
            }
            else {            	
            	var list = root.getElementsByTagName('survey');
            	
				for(i = 0; i < list.length; i++){	
					
					var blockCode = list[i].getElementsByTagName('surveyNo')[0].firstChild.nodeValue;
					
					var blockName = list[i].getElementsByTagName('surveyNo')[0].firstChild.nodeValue;
					subdivision.options[i+1] = new Option(blockCode, blockName);
					
				}	            	
            }          	
            
        }
    }
		
	}
	
	function otpgenerate(mobileno,actionid,lan)
	{
		//alert("inside otp generate");
		var taluk_code="";
		var doc = document.forms[0];
		var districtCode = doc.districtCode.value;
		var talukCode="";
	//	alert("districtCode..."+districtCode);
	if(actionid=='AC01' || actionid=='AC02' || actionid=='AC03')
	{
	 talukCode = doc.talukCode.value.split("/");
	taluk_code=talukCode[0];
	}
	else if(actionid=='AC04' || actionid=='AC05')
	{
		var taluk_code = doc.talukCode.value;
	}
	//alert("talukCode..."+talukCode);
	var villageCode = doc.villageCode.value;
	var opt='',landtype="";
	if(actionid=='AC01')
	{
	//alert("villageCode..."+villageCode);
	 opt = document.forms[0].viewOpt.value;
	  landtype=doc.landtype.value;
	 }
	 else if(actionid=='AC02' || actionid=='AC03')
	 {
		  landtype=doc.landtype.value;
		  opt ='sur';
	 }
	 else if(actionid=='AC04' || actionid=='AC05')
	 {
		// alert("actionid"+actionid);
		 opt="urb";
		 talukCode[1]=="N";
		 var wardNo = doc.wardNo.value;
		var blockCode = doc.blockCode.value;
		//alert("wardno"+wardNo+"opt %%%"+opt);
		//alert("blockCode"+blockCode);
		 if(wardNo =="") {
			alert('Please Enter Ward No');
			doc.wardNo.focus();
			return false;
		} 
		if(blockCode =="") {
			alert('Please Select Block Number');
			doc.blockCode.focus();
			return false;
		} 
	 }
		
		//alert("landtype..."+landtype);
	//alert("opt..."+opt);
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
	//alert("taluk_code"+taluk_code);
	if(taluk_code == '') {
		alert('Please Select Taluk');
		doc.talukCode.focus();
		return false;
	} else {
		var regEx = new RegExp("^[0-9]{2}$");
		if(!taluk_code.match(regEx)) {
			alert('Please Select Taluk');
			doc.talukCode.focus();
			return false;
		}
	}
	//alert("villageCode"+villageCode);
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
	//alert("before pt check");
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
	}else if(opt == "sur" || opt=="urb"){
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
	
		// alert("inside landtype chk");
	 if(landtype=='' && talukCode[1]=='Y' && opt!="searchptno")
	{
	alert('Please select landtype option');
	//doc.landtype.focus();
	return false;
	}
			
	else
	{
		//alert("inside else");
		 var timeleft=0;
		if(!mobileno.match(/(6|7|8|9)\d{9}$/) || mobileno.match(/(\d)\1{9}/g))
		{
			alert("enter valid mobile no");
			document.getElementById("mobileno").value="";
			return false;
		}
		else{
		//alert("inside otpgenerate");
		var url = "ajax.html?page=otpgenerate&mobileno="+mobileno+"&actionid="+actionid+"&lan="+lan+"&jsoncallback=?";
	//	alert(url);
	var HttpRequest = getReq();
    HttpRequest.open("POST", url, true);    
    HttpRequest.onreadystatechange = function(){
		if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
				//alert("inside success");
			 var jsonObj = HttpRequest.responseText;
			 ////alert("jsonObj>>>"+jsonObj);
			  var json = JSON.parse(jsonObj);
			// alert("json.statusCode"+json.otpcode);
			  if(json.statusCode=='false')
			  {
				  alert("Error Occured not connected");
			  }
			  else if(json.statusCode=='lim_exce')
			  {
				   alert("You Have done maximum attempts for this number");
				     clearInterval(downloadTimer);
document.getElementById("otpval").value ="";
			  }
			  else{
				  $("#sendtpid").prop('disabled','true');
				 // $("#mobileno").prop('disabled','true');
				 // alert("inside else");
				  document.getElementById("otpcodeview").style.display="block";
				 
				 $("#otpgen_date").val(json.updatedate_ts);
			

$('#countdown').text("2:00");
  //clearInterval(interval);
  interval = setInterval( function() {
      var timer = $('#countdown').html();
      timer = timer.split(':');
      var minutes = timer[0];
      var seconds = timer[1];
    // alert("sec..."+seconds);
      seconds -= 1;
      // alert("sec.1.."+seconds);
      if (minutes < 0)
      { return;
      }
      else if (seconds < 0 && minutes != 0) {
		  //alert("inside else")
          minutes -= 1;
          seconds = 59;
       
      }
      else if (seconds < 10 && length.seconds != 2) 
{
	seconds = '0' + seconds;
      }
    
            if(($("#sendtpid").val()=='மீண்டும்  கடவுச் சொல்லை பெற (OTP)')  || ($("#sendtpid").val()=='Resend OTP'))
	   {
		   //alert("inside resend");
		    $("#sendtpid").prop('disabled','true');
	   }
	   $("#otpno").prop('disabled',false);
   $('#countdown').html(minutes + ':' + seconds);
   document.getElementById("otpval").style.display ='block';
    
    if(lan=='ta')
    {
	
		 document.getElementById("otpval").value ="OTP உறுதி செய்ய";
       document.getElementById("smsmsg").innerHTML = "கடவுச்சொல் (OTP)  XXXXXX"+mobileno.substring(6,10)+" கைபேசிக்கு அனுப்பப்பட்டுள்ளது.";
       }
       else if(lan=='en')
       {
		  	document.getElementById("otpval").value ="Confirm OTP";
		     document.getElementById("smsmsg").innerHTML = "OTP has sent to  XXXXXX"+mobileno.substring(6,10)+" mobileno.";
	   }
      if (minutes == 0 && seconds == 0)
      { 
		  clearInterval(interval);
       document.getElementById("countdown").innerHTML = "";
  document.getElementById("otpval").style.display ='none';
$("#otpno").prop('disabled','true');
$("#otpno").val("");
 $("#sendtpid").prop('disabled',false);
  ///$("#mobileno").prop('disabled',false);
 if(lan=='ta')
 {
$("#sendtpid").val("மீண்டும்  கடவுச் சொல்லை பெற (OTP)");
}
else if(lan=='en')
{
	$("#sendtpid").val("Resend OTP");
}
 
   }   
  }, 1000)
  };


/*$('#js-startTimer').click(function () {
  $('.js-timeout').text("2:00");
  countdown();
});

$('#js-resetTimer').click(function () {
  $('.js-timeout').text("2:00");
  clearInterval(interval);
});*/
		/* timeleft = 60;
				
 downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "";
   
$("#otpno").prop('disabled','true');
$("#otpno").val("");
 $("#sendtpid").prop('disabled',false);
  
 if(lan=='ta')
 {
$("#sendtpid").val("மீண்டும்  கடவுச் சொல்லை பெற (OTP)");
}
else if(lan=='en')
{
	$("#sendtpid").val("Resend OTP");
}
 
    
  } else {
	   if(($("#sendtpid").val()=='மீண்டும்  கடவுச் சொல்லை பெற (OTP)')  || ($("#sendtpid").val()=='Resend OTP'))
	   {
		
		    $("#sendtpid").prop('disabled','true');
	   }
	  
		  
	 
	   $("#otpno").prop('disabled',false);
    document.getElementById("countdown").innerHTML = "00 :"+timeleft + " seconds remaining";
    if(lan=='ta')
    {
       document.getElementById("smsmsg").innerHTML = "கடவுச்சொல் (OTP)  XXXXXX"+mobileno.substring(6,10)+" கைபேசிக்கு அனுப்பப்பட்டுள்ளது.";
       }
       else if(lan=='en')
       {
		     document.getElementById("smsmsg").innerHTML = "OTP has sent to  XXXXXX"+mobileno.substring(6,10)+" mobileno.";
	   }
  
  }
  timeleft -= 1;
}, 1000)};*/
			  
			 }
			 }
			 
		}
		}
		    HttpRequest.send(null);
		    }
	}
	function verify_otp(mobileno,otpno,lan)
	{
//alert("lan"+lan)
		if(otpno.length=='6')
		{
			a=false;
		//alert("inside verify otp");
		if(mobileno==null || mobileno=='')
		{
			alert("invalid mobile no");
			return false;
		}
		else if(otpno==null || otpno=='')
		{
			alert("invalid otp");
			return false;
		}
		else{
			
		//alert("inside otpgenerate");
		var url = "ajax.html?page=verify_otp&mobileno="+mobileno+"&otpno="+otpno+"&jsoncallback=?";
		//alert(url);
	var HttpRequest = getReq();
    HttpRequest.open("POST", url, true);    
    HttpRequest.onreadystatechange = function(){
		if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
				//alert("inside success");
			 var jsonObj = HttpRequest.responseText;
			// alert("jsonObj>>>"+jsonObj);
			  var json = JSON.parse(jsonObj);
			//  alert("json.statusCode"+json.otpcode);j
			  if(json.statusCode=='false')
			  {
				  alert("Error Occured not connected");
			  }
			  else if(json.statusCode=='limit_exe')
			  {
				    alert("Invalid OTP..your limit has been exceeded");
				       $("#sendtpid").show();
				        $("#otpno").prop('disabled','true');
$("#otpno").val("");
clearInterval(interval);
document.getElementById("countdown").innerHTML ="";
 
   document.getElementById("otpval").style.display ='block';
 
document.getElementById("smsmsg").innerHTML="";
//$("#otpval").hide();
//$("#countdown").hide();
  
//$("#resendotp").css('display','block');
if(lan=='ta')
 {
$("#sendtpid").val("மீண்டும்  கடவுச் சொல்லை பெற (OTP)");
}
else if(lan=='en')
{
	$("#sendtpid").val("Resend OTP");
}
 $("#sendtpid").prop('disabled',false);
			  }
			  else if(json.statusCode=='otp_false')
			  {
				    alert("Invalid OTP..Please enter valid OTP");
				    $("#otpno").val("");
			
			  }
			  else{
				  document.getElementById("countdown").innerHTML ="";
				 // $("#mobileno").prop('disabled','false');
				    $("#otpno_ver").val(otpno);
				     $("#mobileno_ver").val(mobileno);
				      $("#otpval").prop('disabled','true');
				    $("#otpno").prop('disabled','false');
				       $("#mobileno").prop('disabled','false');
			 clearInterval(interval);
			 
			 if(lan=="en")
				 {
				 alert("Your OTP has been verified.Please click Submit button after clicking OK");
//document.getElementById("otpval").value ="OTP VERIFIED";
				 }
			 else if(lan=="ta")
				 {
				 alert("உங்கள் ஒரு முறை கடவுச்சொல் சரிபார்க்கப்பட்டது. Ok - வை தொடர்ந்து ' சமர்ப்பி ' சொடுக்கவும்.");
				// document.getElementById("otpval").value ="OTP உறுதி  செய்யப்பட்டது";
				 }
				  $("#sub_id").css('display','block');
				  
				}
			  
			 }
			 }
			 
		}
		
		}
		HttpRequest.send(null);
		}
		else{
			 $("#sub_id").css('display','none');
			 alert("please enter valid OTP Number");
			 return false;
		}
		
		
	}
	function isalphanum_otp(e)
	{
	
		var k = e.keyCode || e.which;
		var ok = k >= 65 && k <= 90 || // A-Z
			k >= 96 && k <= 105 || // a-z
			k >= 35 && k <= 40 || // arrows
			k == 9 || //tab
			k == 46 || //del
			k == 8 || // backspaces
			(!e.shiftKey && k >= 48 && k <= 57); // only 0-9 (ignore SHIFT options)

		if(!ok || (e.ctrlKey && e.altKey)){
			e.preventDefault();
		}
	
	}
	

	
	 

	