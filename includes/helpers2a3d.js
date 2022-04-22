// helper functions
//
//

//
// Check if a variable is undefined or zero length (if a string)
// If a 2nd argument is supplied, use it in an errorMessage function call
// 
function isNotSpecified(ele, eleLabel) {
    if (ele===undefined) {
      if (eleLabel!=undefined) errorMessage(eleLabel+" is not specified"); 
      return true;
    }
    else if (ele.length == null) {
      if (eleLabel!=undefined) errorMessage(eleLabel+" is not specified"); 
      return true;      
    }    
    else if ( typeof ele == "string" && ele.length == 0 ) {
      if (eleLabel!=undefined) errorMessage(eleLabel+" is not specified"); 
      return true;      
    }    
    else {
      return false;
    }
}


//
// create a string of format YYYYMMDD for today
//
function todayYYYYMMDD() {
  var dateObj = new Date();
  var yyyy = dateObj.getFullYear();
  var m = dateObj.getMonth() + 1;
  var MM = m.toString();
  if ( m<10 ) MM = "0"+MM;
  var d = dateObj.getDate();
  var DD = d.toString();
  if ( d<10 ) DD = "0"+DD;
  var YYYYMMDD = yyyy.toString()+MM+DD;
  return YYYYMMDD;
}

//
// clear an object
//
function clearObject(myObj) {
    for (var member in myObj) delete myObj[member];  // clear the member of the object
}

//
// check, uncheck and read checked state of an id
//
function check(id) {
    console.log("checking",id);  
    document.getElementById(id).checked = true;
}
function uncheck(id) {
    console.log("unchecking",id);  
    document.getElementById(id).checked = false;
}
function checkUncheck(id,trueFalse) {
  if (trueFalse==true) {
    check(id);
  }
  else if (trueFalse==false) {
    uncheck(id);
  }
}
function isChecked(id) {
    return document.getElementById(id).checked;
}

//
// test to see if an element is NOT true: i.e., false, undefined, or null
//
function isNotTrue(ele) {
  console.log('ele=',ele);
  if (ele == false || ele == undefined || ele == null) {
    return true;
  }
  else {
    return false;
  }
}

//
// express as a percent to a specified precision
//
function makePercent(num,denom,decPlaces,postfix,blankZero) {
  var result;
  if ( num == undefined ) return "";
  if ( blankZero == true && num == 0 ) return "";
  if ( denom == undefined ) return "";
  if (decPlaces==undefined) decPlaces = 0;
  if ( denom != 0 ) {
    result = 100*num / denom;
  }
  else {
    return "";
  }
  postfix = postfix || "";
  result = result.toFixed(decPlaces) + postfix;
  if ( result == undefined ) return "";
  return result;
}

// makes a number into a string, with flexibilities
//
/*
  var prefix = "$ ";
  var midfix = "<span class='allocationPercent'>";
  var postfix = "%</span>"
  var display_equities_sum = prefix+sum_equities.toFixed(2)+midfix;
*/
function makeNumberString(num,decPlaces,prefix,midfix,blankZero) {
  if (blankZero) {
    if ( num == 0 ) return "";
  } 
  var display = prefix + numberWithCommas(num.toFixed(decPlaces)) + midfix ;
  return display;
}
/*
function hide_element(myElement) {
  myElement.attr({ fillOpacity: 0 });
}
*/

function hide_element(el) {
var theOpacity = 0;
el.attr({
  opacity: theOpacity, 
  "fill-opacity": theOpacity, 
  strokeOpacity: theOpacity
});
}

//
// logs showing variable name and value
// NOT WORKING
//
function consoleLog(myVariable) {
	console.log(window_getVarName(myVariable) + " [ found ] = " + myVariable ) ; 
}
function window_getVarName(what)
{
  for (var name in window)
  {
    if (window[name]==what)
    return(name);
  }
  return("");
}


//
// this displays the actual saved filename in the title on the browser tab
// replacing the version # at the beginning with the saved version #
//
function updateTitleToFilename() {
    var url = GetFileName();
    /*
    // index of the -   (0 means first character)
    var dashIndex = url.indexOf("-");
    // this removes the stuff after the -, if there is any
    var numericFile = url.substring(0, (dashIndex == -1) ? url.length : url.indexOf("-"));
    // this removes everything before the -
    urlEnd = url.substring(dashIndex + 1, url.length);
    // assemble the title
    document.title = numericFile + "-" + urlEnd;
    */
    document.title = url;
    return (document.title);
}
function GetFileName(){
    //this gets the full url
    var url = document.location.href;
    //this removes the anchor at the end, if there is one
    url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
    //this removes the query after the file name, if there is one
    url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
    //this removes everything before the last slash in the path
    url = url.substring(url.lastIndexOf("/") + 1, url.length);
    //return
    if(url.length == 0){
        url = "index";
    }
    return url;
}


//
// validate an email address 
// http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
//
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


//
// compares two values to a specified number of decimal places
// if they look the same to that precision, declare them equal
//
function compareToDecPlaces(value1, value2, decimalPlaces) {
  var myVal1 = value1.toFixed(decimalPlaces);
  var myVal2 = value2.toFixed(decimalPlaces);
  if (myVal1 == myVal2) {
    return true;
  }
  else {
    return false;
  }
}

function logDate(message,startTime) {
  if (message===undefined) message="";
  var runTimer = new Date();
  var deltaTime;
  if (startTime===undefined) {
    deltaTime = "";
  }
  else {
    deltaTime = runTimer.getTime() - startTime ;  // elapsed time in msec
  }
  console.log(message +" "+runTimer.toString() + " " + deltaTime );
  return runTimer.getTime();  // return the number of milliseconds since January 1, 1970
}

// this wraps the substring method to handle the case of the string being undefined
function getSubstring(str,beg,num) {
  if ( str == undefined ) return null;
  return str.substring(beg,num);
}

//  
// function to get descendant of js object
// obj = object 
// desc = the descendent dot notation
// isUndefined = what to return if the descendent is undefined
//
// see example below
//
function getDescendant(obj, desc, ifUndefined) {
  if ( ifUndefined == undefined ) ifUndefined = "";
    var arr = desc.split(".");  
    while(arr.length && (obj = obj[arr.shift()]));  // in case of several level of children
    if ( obj == undefined ) obj = ifUndefined;
    return obj;
}
// http://stackoverflow.com/questions/8051975/access-object-child-properties-using-a-dot-notation-string
// example:
// var r = { a:1, b: {b1:11, b2: 99}};
// console.log( getDescendant(r, "b.b2") );
//    -> 99
// getDescendant(message,"isMemoAccount","")

//
// print window
//
function windowPrint() {
    window.print();
}


//
// returns the checked radio button's value
//
function getCheckedRadio(radioName) {
  var radios = document.getElementsByName(radioName);
  for(var i = 0; i < radios.length; i++) {
      if(radios[i].checked) {
        console.log('radio checked '+radios[i].value);
        return radios[i].value;
      }   
  }
  return null;  // nothing found checked  
}

// wrapper for alert()
function alertMessage(str) {
  //console.trace();  
  alert("alertMessage:"+str);
  console.warn("ALERT:",str);
}
// wrapper for confirm()
function confirmMessage(str) {
  var response = confirm(str);
  console.warn("CONFIRM:",str,"response = ",response);
  //console.log("CONFIRM:",str,"response = ",response);
  return response;
}
// wrapper for prompt()
function promptMessage(str) {
  var response = prompt(str);
  //console.warn("PROMPT:",str,"response = ",response);
  console.log("PROMPT:",str,"response = ",response);
  return response;
}
//
// Removing an element from the given array is a mutating operation. 
// The remove function changes the array that was passed to it.
//
function removeElementFromArray(array, element) {
    const index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
    }
}
//
// Non-mutating version.
// Also, it removes ALL matching elements.
//
function removeMatchingElementsFromArray(array, element) {
  alert("helpers removeMatchingElementsFromArray",array, element);
  return;
  //return array.filter(e => e !== element);
}
//
// make a state change
//
function stateChange(stateVariable,newState,log=false) {
  var oldState = stateMachine[stateVariable];
  stateMachine[stateVariable] = newState;
  //if (log===undefined) log=false;  // old way for default args
  // shows the name of this function and the caller
  if (log) {
    //var myName = extractFnName( arguments.callee.toString() );    
    var myName = arguments.callee.toString();
    myName = myName.substr('function '.length);
    myName = myName.substr(0, myName.indexOf('('));       
    console.log('fn '+myName+': entered',timeNow(),"newState = ",newState);
    
    if (arguments.callee.caller===undefined || arguments.callee.caller==null) {
      console.log('fn '+myName+': caller = ROOT');      
    }
    else {
      console.log('fn '+myName+': caller.name = ', arguments.callee.caller );
      //console.log('fn '+myName+': caller.name = ',extractFnName( arguments.callee.caller) );
    }

    if (arguments.callee.caller!=null) {
          console.log('fn '+myName+': caller.name = ',arguments.callee.caller.name);
    }

    console.log("fn "+myName+": var = ", stateVariable,", from",oldState,"to",newState);
    stateOf(stateVariable,true);
  }
}
function stateOf(stateVariable,log=false) {
  var state = stateMachine[stateVariable];
  //if (log===undefined) log=false;
  // shows the name of this function and the caller
  if (log) {
    //var myName = extractFnName( arguments.callee.toString() );
    var myName = arguments.callee.toString();
    myName = myName.substr('function '.length);
    myName = myName.substr(0, myName.indexOf('(')); 

    console.log('fn '+myName+': entered',timeNow());
    console.log('fn '+myName+': caller.name = ',arguments.callee.caller.name);
    console.log("fn "+myName+": var = ", stateVariable,", state = ",state);
  }
  return state;
}
function extractFnName(str) {
  if (str==null) return null;
  console.log("fn extractFnName: str = ",str);

  var myName = str.substring(0,49);
  console.log("fn extractFnName: myName = ",myName);

  myName = myName.substring('function '.length);
    console.log("fn extractFnName: myName = ",myName);

  myName = myName.substring(0, myName.indexOf('(')); 
      console.log("fn extractFnName: myName = ",myName);

  return myName;
}

//
// show HH:MM;SS time
//
function timeNow() {
  var d = new Date();
  var h0 = "";
  var m0 = "";
  var s0 = "";
  var hh = d.getHours().toString();
    if (hh<10) h0="0";
  var mm = d.getMinutes().toString();
    if (mm<10) m0="0";
  var ss = d.getSeconds().toString();
    if (ss<10) s0="0";
  var msec = d.getMilliseconds().toString();;
  return h0+hh+":"+m0+mm+":"+s0+ss+"."+msec;
}

//
// Take txtObj and match it to the values of a select list.
// <select name="selectObj">
// When matched, make that select option the selected one.
//
function set_matchingSelectValue(selectObj, string) {
  //var myText = txtObj.value;
  var myText = string;
  // run down all select options
  for(var i = 0; i < selectObj.length; i++) {
     if(selectObj.options[i].value == myText)
      selectObj.selectedIndex = i;
  }
}
//
// return the value of a variable by a string reference to its name
//
function globalVariableValue(name) {
  console.log("global variable",name,"=",window[name]);
  return window[name];
}

//
// Open pdf statement in a new window.
// Gets statement dates: either give it end and beg individually (and leave end_begDate off),
// or provide the range end_beg, and nulls for the end and beg dates.
//
function openStatementPDF(account,firm,endDate,begDate,end_begDate) {
  //beginDate = "20160301";
  //firm = "Merrill";
  url = "file:///Users/brianboyle/Dropbox/_BEB-MLM/_statements/_"+firm+"/";
  url += account + "/" + account + "_";
  if (end_begDate===undefined) {
    url += endDate + "_" + begDate;
  }
  else {
    url += end_begDate;  
  }
  url += ".pdf"; 
  //window.open(url,'_statementPage');
  // http://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window-using-javascript
  // height and width defaulting to 8.5 by 11 page at 84dpi
  console.log("fn openStatementPDF ","height=714,width=924");
  var strWindowFeatures = "location=yes,height=714,width=924,scrollbars=yes,status=yes";
  window.open(url,'_statementPage',strWindowFeatures);
  return url;
  // http://stackoverflow.com/questions/14132122/open-url-in-new-window-with-javascript
}

/*
//
// return "" instead of undefined   DEPRECATED
//
function blankIfUndefined(ele) {
  if (ele===undefined) {
    return "";
  }
  else {
    return ele;
  }
}
*/
//
// Test an element to see if it is undefined.
// If so, return blank (or whatever is specified in the optional 2nd argument)
//
function blankIfUndefined(ele,returnIfUndefined,ifNullToo) {
  if (ifNullToo===undefined) ifNullToo=false;
  var passed = true;
  if (ele===undefined) {
    passed = false;
  }
  else if (ele===null && ifNullToo) {
    passed = false;
  }
  if (!passed) {
    if (returnIfUndefined===undefined) {
      return "";
    }
    else {
      return returnIfUndefined;
    }
  }
  else {
    return ele;
  }
}


//
// Generic processing of a <select> input
// idSelect of the <select> node
// idDisplay of the node to display the value
// Optionally updates a global element with key idDisplay
// Returns the value of the selection
//
function inputSelection(idSelect,idDisplay,updateGlobals) {
    var e = document.getElementById(idSelect);  // the entire <select> node
    console.log("fn inputSelection: e =",e);
    console.log("fn inputSelection: e.options =",e.options);
    console.log("fn inputSelection: e.selectedIndex =",e.selectedIndex);
    var value = e.options[e.selectedIndex].value; // the value assigned in the html
    var text = e.options[e.selectedIndex].text;   // the text that the user sees
    document.getElementById(idDisplay).innerHTML = value; 
    if (updateGlobals) {
      globals[idDisplay] = value;     
      console.log(idDisplay," is now ",globals[idDisplay]);
    }
    return blankIfUndefined(value);    
}

//
// divide 2 numbers (or strings)
// any error conditions return null
//
 function divide(num,denom,places) {
  console.info("dividing",num,"by",denom);
  var n = Number(num);
  var d = Number(denom);
  if (isNaN(n) || isNaN(d)) return null;
  if (d==0) return null;
  var quotient = roundNumber(n/d,places,true);
  return quotient;
 }

//
// remove non-plotable data points from a series, namely isNaN and null
//
function removeNaN(xArray,yArray,dArray) {
      console.log("fn removeNaN x y",xArray,yArray);

  var n = xArray.length;
  var xNew = [];
  var yNew = [];
  var dNew = [];  
  var removed = [];
  for (var i=0;i<n;i++) {
    if ( isNaN(xArray[i]) || isNaN(yArray[i]) || xArray[i]==null || yArray[i]==null ) {
      console.log("fn removeNaN i x y",i,xArray[i],yArray[i]);
      //if (dArray!=undefined) console.log("fn removeNaN d",i,dArray[i]);

      removed.push(i);  // keep track of the indices removed
    }
    else {
      xNew.push(xArray[i]);
      yNew.push(yArray[i]);
      if (dArray!=undefined) dNew.push(dArray[i]);
    }
  }
        console.log("fn removeNaN x y d",xNew, yNew, dNew);

  return [xNew, yNew, dNew, removed];
}
