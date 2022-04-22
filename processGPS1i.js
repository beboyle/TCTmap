//
// ask for file name, display it as the src of an <img> element
//
function screenFileDisplay() {
    var file = document.getElementById('screenFileInput').files[0];
    var reader  = new FileReader();
    reader.onload = function(e)  {
    screenImg.src = e.target.result;
        //var image = document.createElement("img");
        //image.src = e.target.result;
        //document.body.appendChild(image);
    }
    reader.readAsDataURL(file);
    clickedArray.length = 0;
    clickRecord = true;
    screenImgObj.h = document.getElementById("screenImg").naturalHeight;
        console.log("~file screenImgObj 2",screenImgObj);

    toggleDiv("lonLatInput");    

 }



var i;
var gpsData = [];
var j=0;
var gpsPoints = [];
var gpsIndex = -1;
var showGPS = false;

// https://itunes.apple.com/us/app/gps-coordinate-recorder/id610282087?mt=8


function plotGPSfile(coords) {
    return;
            console.log("~plotGPSfile coords",coords);

    for(var i = 0; i < coords.length; i++) {
            console.log("~plotGPSfile",i,coords[i]);


    }

}

//
// read the data file
//
// https://stackoverflow.com/questions/27522979/read-a-local-text-file-using-javascript
//
function readGPSfile(file) {
    //options.lastFile = file;  // remember filename
    //    console.log("~options.lastFile",options.lastFile);
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(progressEvent) {
        // Entire file
            console.log("~this.result",this.result);
        // By lines
        var lines = this.result.split('\n');
            console.log("~showGPS",showGPS);
            console.log("~lines",lines);

        // preprocess the GML (remove comments, etc.)
        var result = [];
        result = prePassGPS(lines);  
        gpsData = result[0];
            console.log("~gpsData",gpsData);

        // we have now read in all the Language
            console.log("~FILE finished reading");
        // process gpsData
        var gpsDataPoints =  parseGPS(gpsData, result[1]);

        plotGPSfile(gpsDataPoints);

/*

        processEverything(options);

*/

    };
}

//
// preprocess the line (remove comments, blank lines, etc.)
// /*  */  can skip the block between
//
function prePassGPS(lines) {
    var data2 = [];
    var sourceLineNumbers = [];
    var blockSkip = false;
    j=-1;
    for(var line = 0; line < lines.length; line++) {
      console.log('FILE line',line,lines[line],"len="+lines[line].length);
        //if (showGML) displayGPSline(line,lines[line]);

        if (lines[line].trim()=="END") break;
        if (lines[line].trim()=="") continue;
        if (lines[line].trim().substring(0,2)=="//") continue;

        if (lines[line].trim()=="/*") {
            blockSkip = true;
            continue;
        }
        else if (lines[line].trim()=="*/") {
            blockSkip = false;
            continue;
        }

        if (blockSkip) {
            console.log("skipping",line,lines[line]);
            continue;
        }

        // search for // at end of line, and exclude that
        var n = lines[line].search("//");
        j++;
        if (n>0) 
            data2[j] = lines[line].substring(0,n);
        else {
            data2[j] = lines[line];
        }
        sourceLineNumbers[j] = line+1;
    }
    return [data2,sourceLineNumbers];
}

//
// take an array of GML text lines and parse it
// into specific global arrays, such as
//   gmlPoints[]
//   greensPoints[]
//   dataSlope[]
//   benchmarkPoints[]
//     sprinklers[]
// 
function parseGPS(gmlData,lineNumbers) {
    var xDirection;
    var bunkerNumber;
    var fairwayNumber;  

    var len, lonStart, lonEnd, latStart, latEnd, closingQuote;
    var tempStr, lonStr, latStr;
    var labelsOn = true;
    var circleColor = "red";
    var circleRadius = 3;
    //var bunkerIndex = []; 
    var measuring = false;
    var doubling = false;
    var pointLabel;
    var priorColor="";
    var lineArray = [];
    var offset = [0,0]; // the amount to offset circles (~offset command)
    //var measurePosition=[0,0];   // the [lon,lat] to display measurement
    var measurePosition = [0,0.00002,"y",5];  // default to 5 yards
    var measurePrecision = 5;  // the default precision rounded to 5 
    var measureUnits = "y"; // default to yards
    var fileId = "trails_TwineField";

    var turfDistanceStr;
    var adjacentPoints;
    var minzoom = 16;

    var options = {};
    options.textSize = 14;
    options.minzoom = 16;

    var turfYardsMax = 7;
    var turfYardsMin = 5;

var featureArray = [];

    j=0;
    for (i=0;i<gmlData.length;i++) {

        if (gmlData[i].substring(0,7)=="~offset") {
            offset = getOffset(gmlData[i].substring(7));    

            console.log("-----offset "+gmlData[i].substring(7),offset);
        }    


        else if ( gmlData[i].substring(0,1)=="{" || gmlData[i].substring(0,2)=="[{" ) {

            //console.log(i,gmlData[i]);

            // parse for Sat-Lon":"
            lonStart = gmlData[i].search('Sat-Lon":"')+10;
            tempStr = gmlData[i].substring(lonStart,gmlData[i].length);
            //console.log("parsed lon",lonStart,lonStr);
            closingQuote = tempStr.search('"');
            lonStr = tempStr.substring(0,closingQuote);
            //console.log("parsed lon",lonStart,lonStr);

            // parse for Sat-Lat":"
            latStart = tempStr.search('Sat-Lat":"')+10;
            latStr = tempStr.substring(latStart,tempStr.length);
            closingQuote = latStr.search('"');
            latStr = latStr.substring(0,closingQuote);
            //console.log("parsed lat",latStart,latStr);

            timeStart = tempStr.search('Time":"')+18;
            timeStr = tempStr.substring(timeStart,tempStr.length-5);

            gpsIndex++;
            //gpsPoints[gpsIndex] = "["+latStr+","+lonStr+"]";
            var latNum = Number(latStr)
            var lonNum = Number(lonStr)
            latNum = round(latNum,5);
            lonNum = round(lonNum,5);
            gpsPoints[gpsIndex] = arrayAdd([lonNum,latNum],offset);  // include offset if there is one
            var pointId = fileId+"_gpsPoint"+gpsIndex;
            var radius = circleRadius;
            var color = circleColor;


            if (gpsIndex>0) {
                var line = turf.lineString([gpsPoints[gpsIndex],gpsPoints[gpsIndex-1]]);  // make the array into a turf line
                var turfKm = turf.lineDistance(line);   // measure its distance in km
                var turfYards = turfKm*1093.61;
                turfYards = round(turfYards,1);
            }

            // function plotCircle(id,radius,color,coordinates,opacity,props) {
            //if (1==0 && i%10==0 && labelsOn) {
            //    color = "black";
            //}
            //if (i%5==0) {
                if (labelsOn) {
                    pointLabel = ""+lineNumbers[i]+" "+timeStr+" "+turfYards;
                    // highlight out of range distances between points (of the same color)
                    if ( priorColor==color && turfYards>0 && turfYards<turfYardsMax*3 && (turfYards>turfYardsMax || turfYards<turfYardsMin) ) {
                        pointLabel += "*"
                        console.log(lineNumbers[i],"turfYards out of range",turfYards)
                    }

                    options.minzoom = 20;
                    addText(fileId,gpsPoints[gpsIndex],pointLabel,options);

                }
            //}
            //else {
            //    pointLabel = ""+lineNumbers[i]+" "+timeStr+" "+turfYards;
            //    if (labelsOn) addText(fileId,gpsPoints[gpsIndex],pointLabel,{});    
            //}
            var prop = {"title": "MYTITLE"}
            plotCircle(pointId,radius,color,gpsPoints[gpsIndex],.8,prop,minzoom);
                console.log("parsed #",gpsIndex,"-------------------------");



makeKey([fileId,color,radius,.8],"_");



            // after the first point, ok to double (if the color hasn't changed)
            if (doubling && gpsIndex>0 && priorColor==color) {
                var addedPointLat = (gpsPoints[gpsIndex][1]+gpsPoints[gpsIndex-1][1])/2; 
                var addedPointLon = (gpsPoints[gpsIndex][0]+gpsPoints[gpsIndex-1][0])/2; 

                pointLabel = "."+lineNumbers[i]+".";
                if (labelsOn) {
                    // if debugging labels, show midpoint as less opaque
                    options.minzoom = 20;
                    addText(fileId,[addedPointLon,addedPointLat],pointLabel,options);
                    plotCircle(pointId+"double",radius,color,[addedPointLon,addedPointLat],.4,prop,minzoom);
                }
                else {
                    plotCircle(pointId+"double",radius,color,[addedPointLon,addedPointLat],.8,prop,minzoom);
                }
            }
            priorColor = color;  // remember the color of this point
            // if measuring in taking place, add this point to the line to be measured
            if (measuring) {
                lineArray.push(gpsPoints[gpsIndex]);
            }
        }

        else if (gmlData[i].substring(0,13)=="~measureStart") {
            measuring = true;
            lineArray = [];
            console.log("-----measureStart");
        }    
        else if (gmlData[i].substring(0,12)=="~measureStop") {
            measuring = false;

            // parse the string after "~measureStop" in format 
            // lon lat uom D
            // where:
            // lon = the longitude to display the distance at
            // lat = the latitude to display the distance at
            //      if lon<1, then interpret lon and lat as offsets, otherwise as coordinates
            // uom = m for miles, f for feet, y for yards
            // D = decimal places for the distance displayed


            var args = gmlData[i].substring(12);
            args = args.trim();
            // change the position if it is specified 
            if (args.length>0) measurePosition = getMeasurePosition(args);
                // if there are args after the ~measureStop, get the array of them
                console.log("measurePosition",measurePosition);

            var line = turf.lineString(lineArray);  // make the array into a turf line
            var turfKm = turf.lineDistance(line);   // measure its distance in km
            // if the precision for rounding was specified, change it
            if (measurePosition.length==4) measurePrecision = measurePosition[3];

            // turf returns km, so multiply to get feet, mile and yards                    
            var turfFeet  = round(turfKm*3280.84,measurePrecision);  // feet per km
            var turfMiles = round(turfKm*0.621371,measurePrecision);
            var turfYards = turfKm*1093.61;

            console.log("measure Distance",turfKm,"km",turfFeet,"feet",turfMiles,"miles",turfYards,"yards",measurePrecision);

            var midIndex = Math.floor(lineArray.length/2);
            // units was specifed as the 3rd argument
            if (measurePosition.length>=3) {
                measureUnits = measurePosition[2];
                measureUnits = measureUnits.toLowerCase();
            }
            // yards
            if (measureUnits=="y") {
                // 5 or more is for rounding to nearest
                if (measurePrecision>=5) {
                    turfYards = round(turfYards/measurePrecision,0)*measurePrecision;
                }
                // otherwise it's the number of decimal places
                else {
                    turfYards = round(turfYards,measurePrecision);
                }
                turfDistanceStr = turfYards+" yds";
            }
            // miles
            else if (measureUnits=="m") {
                turfDistanceStr = round(turfMiles,measurePrecision)+" mi";
            }
            // feet
            else if (measureUnits=="f") {
                // 5 or more is for rounding to nearest
                if (measurePrecision>=5) {
                    turfFeet = round(turfFeet/measurePrecision,0)*measurePrecision;
                }
                // otherwise it's the number of decimal places
                else {
                    turfFeet = round(turfFeet,measurePrecision);
                }
                turfDistanceStr = turfFeet+" ft";
            }
            // kilometers
            else if (measureUnits=="k") {
                turfDistanceStr = round(turfKm,measurePrecision)+" km";
            }
            // where to display the distance (at the middle of the array of points)
            var distanceCoords = lineArray[midIndex];

            // if the measure first coord is < 1 then it is a delta position to offset
            if (Math.abs(measurePosition[0])<1) {
               distanceCoords = arrayAdd(distanceCoords,measurePosition); 
            }
            // otherwise it is the position at which to display
            else {
                distanceCoords = measurePosition; 
            }

            options.textSize = 14;
            options.minzoom = 16;
            //addText(fileId,distanceCoords,turfDistanceStr,options);
// instead of adding each distance as a layer, push each onto an array
// and add that as one layer at the end

pushTextFeature(featureArray,distanceCoords,turfDistanceStr,"");



            // if debugging labels are on, show where the distance begins and ends
            if (labelsOn) {  
                options.textSize = 10;
                // offset these to the top of the point so it doesn't hide the info below
                addText(fileId,arrayAdd(lineArray[0],[0,.00001]),"Begin "+turfDistanceStr,options);
                addText(fileId,arrayAdd(lineArray[lineArray.length-1],[0,.00001]),"End "+turfDistanceStr,options);
            }
            // place a larger circle at the begin and end points
            console.log("-----measureStop beg=",lineArray[0],"end=",lineArray[lineArray.length-1],priorColor);
            var myId = fileId+"_gpsBegPoint_"+gpsIndex+"_"+lineArray[0][0]+","+lineArray[0][1];
            plotCircle(myId,2+radius,color,lineArray[0],.8,prop,minzoom);
            myId = fileId+"_gpsEndPoint_"+gpsIndex+"_"+lineArray[lineArray.length-1][0]+","+lineArray[lineArray.length-1][1];
            plotCircle(myId,2+radius,color,lineArray[lineArray.length-1],.8,prop,minzoom);




                console.log("-----measureStop",lineArray,"midIndex",midIndex);
        }    

        else if (gmlData[i].substring(0,7)=="~color=") {
            circleColor = gmlData[i].substring(7);
            console.log("changing color to ",circleColor);
        }
        else if (gmlData[i].substring(0,8)=="~radius=") {
            circleRadius = Number(gmlData[i].substring(8,10));
            console.log("changing radius to ",circleRadius);
        }

        else if (gmlData[i].substring(0,10)=="~labelsOff") {
            labelsOn = false;
            console.log("-----labelsOff");
        }
        else if (gmlData[i].substring(0,9)=="~labelsOn") {
            labelsOn = true;
            console.log("-----labelsOn");
        }

        else if (gmlData[i].substring(0,7)=="~double") {
            doubling = true;
            console.log("-----double");
        }
        else if (gmlData[i].substring(0,7)=="~single") {
            doubling = false;
            console.log("-----single");
        }

        else if (gmlData[i].substring(0,8)=="~addText") {

            var args = gmlData[i].substring(8);
            args = args.trim();
            var tokens = args.split(" ");
            // tokenize the remainder of the line to get the coords
            // or treat the remainder of the line as JSON and parse it into an object
            var rOptions = {};
            rOptions.textSize = 12;
            rOptions.minzoom = 16;

            var addTextId = fileId+"_"+tokens[0]+","+tokens[1]+"";
            // piece together the last part into the displayed text
            var displayText = "";
            for (var j=2;j<tokens.length;j++) {
                displayText += tokens[j]+" ";
            }
            displayText = displayText.trim();
            addText(addTextId,[Number(tokens[0]),Number(tokens[1])],displayText,rOptions);
            console.log("-----addText");
        }


        else {
            console.warn("unrecognized at line ",i,gmlData[i]);
            if (1==0) {
                var confirmation = showError(i,gmlData[i]);
                console.log("confirmation",confirmation);
                if (!confirmation) {
                    alert("GML processing will now be halted");
                    break;              
                }
            }
        }
    }
        console.log("gpsPoints",gpsIndex+1,gpsPoints);

/* CAN ONLY ADD CIRCLES THAT HAVE SAME geoJSON Paint PROPERTIES:
radius, color, opacity
So will need multiple feature arrays, one for each of these combinations of paints
circlesFeatureArrays = [radius, color, opacity, [featureArray]]

    var madeGeoJSONcircles;
    var circlesCount = 0;
    options.minzoom = 16;

    //for each of the circlesFeatureArrays
    for (var k=0; k<circlesFeatureArrays.length; k++) {
        var value = circlesFeatureArrays[k];
        circlesCount++;

        options.radius = value[0];
        options.color = value[1];
        options.opacity = value[2];

        madeGeoJSONcircles = makeGeoJSONtext(fileId+"_circles"+circlesCount,value[3],options);
        map.addLayer(madeGeoJSONcircles);
    }

*/

if (options.textColor===undefined) options.textColor = "black";
if (options.textHaloColor===undefined) options.textHaloColor = "#fff";
if (options.textHaloWidth===undefined) options.textHaloWidth = 2;
options.minzoom = 16;
var madeGeoJSONdistances = makeGeoJSONtext(fileId+"_distances",featureArray,options);
map.addLayer(madeGeoJSONdistances);



    /*
    // add a rectangle
    var rCoords = [
        [-70.0903,42.0344],
        [-70.0902,42.0344],
        [-70.0902,42.0345],
        [-70.0903,42.0345],
        [-70.0903,42.0344]
    ];
    //addLineSegments(rCoords,rOptions,"testIDforRectangle")

    //addText("testIDforPrivateRoad",[-70.09020,42.03448],"Private Road",rOptions);
    */

    return gpsPoints;
}

//
// Round labels demo
// https://bl.ocks.org/stevage/23d881a66e2bcca385d8cc074691b674
//
function addText(id,coords,text,options) {

    console.log("addText ",text," with options",options);


    if (options.minzoom===undefined) options.minzoom = 12;
    if (options.textSize===undefined) options.textSize = 12;

    if (options.textColor===undefined) options.textColor = "black";
    if (options.textHaloColor===undefined) options.textHaloColor = "#fff";
    if (options.textHaloWidth===undefined) options.textHaloWidth = 2;

    var rand = Math.random();

    map.addLayer({
        "id": id+"_addText_"+text+"_"+rand,
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": 
                {
                "type": "FeatureCollection",
                "features": [

                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": coords
                        },
                        "properties": {
                            "title": text,
                            //"icon": "camp",
                            "minzoom": options.minzoom
                        }
                    }

                ]
            }
        },

        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.4],
            "text-anchor": "top",
            "text-size": options.textSize
        },
        "paint": {
            "text-color": options.textColor,
            "text-halo-color": options.textHaloColor,
            "text-halo-width": options.textHaloWidth
        } 
        
    });





    console.log("addText ",text," with options",options,"------------------");

}


// options:
//  options.color
//  options.width
//  options.minzoom
//  options.maxzoom

function addLineSegments(coords,options,id) {
    //if (id===undefined) id = "line_id_"+label;
    if (options.color===undefined) options.color = "blue";
    if (options.width===undefined) options.width = 2;
    if (options.minzoom===undefined) options.minzoom = 15;
    if (options.maxzoom===undefined) options.maxzoom = 22;

    var line = turf.lineString(coords);
    // CANT GET BEZIER TO WORK
    // var curved = turf.bezierSpline(line);
    // https://turfjs.org/docs/#bezierSpline

    var turfDistance = turf.lineDistance(line);
    // turf returns km, so multiply to get feet                    
    turfDistance = Math.round(turfDistance*3280.84);  // feet per km
    console.log(id,"turfDistance",turfDistance,"feet");

    // Line as a layer
    map.addLayer({
        "id": id,
        "type": "line",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": coords 
                }
            }
        },

        "minzoom": options.minzoom,
        "maxzoom": options.maxzoom,

        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": options.color,
            "line-width": options.width
        }
    });
}

//
// parse the part remaining after ~measureStop
// such as -70.09178 42.03468 f 5
// or -70.09178 42.03468
//
function getMeasurePosition(str) {
    var result = [];
    //result = [0,0.00002,"y",5];  // default to 5 yards
    str = str.trim();  
    var tokens = str.split(" ");
    if (tokens.length==2 || tokens.length==4) {
        result[0] = Number(tokens[0]);
        result[1] = Number(tokens[1]);
    }
    if (tokens.length==4) {
        result[0] = Number(tokens[0]);
        result[1] = Number(tokens[1]);
        result[2] = tokens[2];
        result[3] = Number(tokens[3]);
    }
    return result;
}
function getOffset(str) {
    var result = [0,0.00002];  // default  
    str = str.trim();  
    if (str=="0 0") {
        result = [0,0];  // set offset to zero
    }
    else {
        var tokens = str.split(" ");
        result = [ Number(tokens[0]), Number(tokens[1]) ];  // set offset 
    }
    console.log("getOffset result=",result);
    return result;
}

//
// add two arrays together, element by element
// if unequal lengths, return the shorter of the two
//
function arrayAdd(arrayA,arrayB) {
    var arrayResult = [];
    var len = Math.min(arrayA.length,arrayB.length);
    for (var i=0;i<len;i++) {
        arrayResult.push(arrayA[i]+arrayB[i]);
    }
    return arrayResult;
}