//whatIsLoaded += "uri_related2b.js ";
  //console.log('whatIsLoaded +=',"uri_related2b.js ",whatIsLoaded);

//
// this loads URI parameters and stores them into globals
//
function load_uri_parameters() {
  console.log("enter load_uri_parameters")  ;
  var params = window.location.search.substr(1).split('&');
  for (var i = 0; i < params.length; i++) {
    var p = params[i].split('=');
    console.log(p[0]+' = ',p[1]);
  }
  return params;
}  


  /*  http://www.technicaloverload.com/get-value-url-parameters-using-javascript/
  So using the example:
  http://technicaloverload.com?test1=yes&test2=no&test3=http%3A%2F%2Ftechnicaloverload.com%2F

  we get the following results:

  getParameter('test1') --> yes
  getParameter('test2') --> no
  getParameter('test3') --> http://technicaloverload.com/
  getParameter('test4') --> false
  */
  function getParameter(theParameter) { 
    var params = window.location.search.substr(1).split('&');
    console.log('fn getParameter: params, theParameter',params, theParameter);
    for (var i = 0; i < params.length; i++) {
      var p=params[i].split('=');
      if (p[0] == theParameter) {
        console.log('fn getParameter: value = ',p[1]);
        return decodeURIComponent(p[1]);
      }
    }
    return false;
  }
//
// set a url parameter on the existing url loaded in the browser, and then optionally redirect to that url with new parameter
// http://stackoverflow.com/questions/13063838/add-change-parameter-of-url-and-redirect-to-the-new-url
//
function setGetParameter(paramName, paramValue,reload,myURI)
{
  var url;
  if (myURI===undefined) {
    url = window.location.href ;  // use the current uri if there isn't one specified
  }
  else {
    url = myURI;
  }

  console.log("for: "+paramName);
  console.log("entry uri: "+url);
  //alert("entry with " + paramName + " = " + paramValue + " and " + url);
  if (url.indexOf(paramName + "=") >= 0)
  {
    var prefix = url.substring(0, url.indexOf(paramName));
    var suffix = url.substring(url.indexOf(paramName));
    suffix = suffix.substring(suffix.indexOf("=") + 1);
    suffix = (suffix.indexOf("&") >= 0) ? suffix.substring(suffix.indexOf("&")) : "";
    url = prefix + paramName + "=" + paramValue + suffix;
  }
  else
  {
    if (url.indexOf("?") < 0)
      url += "?" + paramName + "=" + paramValue;
    else
      url += "&" + paramName + "=" + paramValue;
  }
  console.log(" exit uri: "+url);

  if (reload) { 
    //alert("reloading " + url);
    window.location.href = url; 
  }
  return url;
}


//
// get the filename of the page running, ignoring stuff at the end of it
//
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
    //alert(url);
    return url;
}



/*
Include multiple javascript files in a JS file

And call it like so:

    scriptLoader('/path/to/file.js');

in the similar manner you can call as many JS file you like this:

    scriptLoader('/path/to/file2.js');
    scriptLoader('/path/to/file3.js');

and even with onload callback functions like so:

    scriptLoader('/path/to/file6.js',function(){
        alert('file6 loaded');
    });

https://stackoverflow.com/questions/43485888/include-multiple-javascript-files-in-a-js-file

SUGGEST LOOKING AT REQUIRE.JS INSTEAD

*/

function scriptLoader(path, callback)
{
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.async = true;
    script.src = path;
    script.onload = function(){
        if(typeof(callback) == "function")
        {
            console.log("scriptLoader() loaded file",path);
            callback();
        }
    }
    try
    {
        var scriptOne = document.getElementsByTagName('script')[0];
        scriptOne.parentNode.insertBefore(script, scriptOne);
    }
    catch(e)
    {
        document.getElementsByTagName("head")[0].appendChild(script);
    }
}






/*
if (getParameter('help')=='1') {
  //var element = document.getElementById("helpText");
  var textHelp = Date()+"<br>";
  textHelp += "draw_2007=1 : show the numbers from 2007<br>";
  textHelp += "S1798=1 &nbsp; : show the affect of S.1798 (uppercase S)<br>";
  //textHelp += "vote=Y =N : S1798 straw vote checks<br>";
  textHelp += "debug=1 &nbsp; : turn on debug mode<br>";
  textHelp += "speed=[#] : set the speed of animation (smaller is faster)<br>";
  textHelp += "help=1 &nbsp; &nbsp;: show this help<br>";
  //element.innerHTML = textHelp;
  document.getElementById("helpText").innerHTML = textHelp;
*/