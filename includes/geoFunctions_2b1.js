// geoFunctions
//

//
// sorts an array, focusing on the numerics and ignoring the letters
// http://jsfiddle.net/nr2wa931/
//
function sortByDigits(array) {
    var re = /\D/g;
    array.sort(function(a, b) {
        return(parseInt(a.replace(re, ""), 10) - parseInt(b.replace(re, ""), 10));
    });
    return(array);
}

//
// function used in .filter method to take an array and eliminate duplicates
//
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
/*
// usage example:
var a = ['a', 1, 'a', 2, '1'];
var unique = a.filter( onlyUnique ); // returns ['a', 1, 2, '1']
// https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
*/


//
// is the object empty?
//
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

//
// round with decimals
//
function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

//
// get a list of all the layer ids
//
function getLayerIds(map) {
    var layers = map.getStyle().layers;
        //console.log("layers",layers);
    var layerIds = layers.map(function (layer) {
        return layer.id;
    });
    return layerIds;
}

//
// NOT USED 
//
function showCoords(e) {
	console.log("fn showCoords",e);
    if (e===undefined) return; // just a general update without any feature in particular

    var box = document.getElementById('coords-box');
    box.style.display = 'block';
    var coords;

    drawType = e.features[0].geometry.type;

    if (drawType=="Polygon") {
        // for polygons: has length=# of points+1, and length of element[0]=2
        // first and last points are the same
        // e.features[0].geometry.type = 'Polygon'
        coords = e.features[0].geometry.coordinates[0];
    }
    else if (drawType=="LineString") {
        // for lines: has a length=# of points, and length of element[0]=2
        // first and last points are different
        // e.features[0].geometry.type = 'LineString'
        coords = e.features[0].geometry.coordinates;
    }
    console.log('showCoords coords',coords,coords.length,coords[0].length,e.features[0].geometry.type);

    //var polygon = turf.polygon([[[125, -15], [113, -22], [154, -27], [144, -15], [125, -15]]])
    //var area = turf.area(polygon);

    if (coords[0]!=undefined && coords[0].length==2) {

        var answer = document.getElementById('drawnCoordinates');
        answer.innerHTML = "";

        var len = coords.length;
        box.style.height = 27+12.5*len+'px';  // calculate high of the box background for the coordinates
        var i;
        // loop through all coordinates
        for (i=0;i<len;i++) {
            if (i<10) answer.innerHTML += '&nbsp;&nbsp;' ;  // space html in front of single digits

            if (i==0 || (drawType=="Polygon" && i==len-1) ) {   // first and last of Polygon
                answer.innerHTML += "<span class='textGreen'><strong>"+ i +" "+coords[i][0].toFixed(5)+", "+coords[i][1].toFixed(5);
                answer.innerHTML += "</strong></span>";
            }
            else if (i==1) {
                answer.innerHTML += "<span class='textBlue'><strong>"+ i +" "+coords[i][0].toFixed(5)+", "+coords[i][1].toFixed(5);
                answer.innerHTML += "</strong></span>";
            }
            else {
                answer.innerHTML += "<span class='textGray'><strong>"+ i +" "+coords[i][0].toFixed(5)+", "+coords[i][1].toFixed(5);
                answer.innerHTML += "</strong></span>";
            }
            answer.innerHTML += "<br>";
        }

        // create a unique id
        i=0;
        idCoord = 'origin'+coords[i][0].toFixed(5)+coords[i][1].toFixed(5)+"~"+getMsec();
        // highlight the starting point (larger & green)
        originCircle = plotCircle(idCoord,6,'green',coords[i],.4) ;
        originCircleStack.push(originCircle);
        i=1;
        idCoord = 'origin'+coords[i][0].toFixed(5)+coords[i][1].toFixed(5)+"~"+getMsec();
        // highlight the 2nd point (smaller & blue)
        originCircle = plotCircle(idCoord,3,'blue',coords[i],.4) ;
        originCircleStack.push(originCircle);
    }
}   // end function showCoords()


//
// test if an element is in an array
//
function isInArray(ele,array) {
    for (var i=0;i<array.length;i++) {
        if (ele==array[i]) return true;
    }
    return false;
}


//
// number of milliseconds since midnight, January 1, 1970
//
function getMsec() {
    var d = new Date();
    return d.getTime();
}


//
// display level of zoom
//
function displayZoom() {
	var z = map.getZoom().toFixed(1);
	var str = " zoom level: "+z;
    if (globals.state.flying) str += " flying";  // show that as a state
	if (z=="22.0") {
		str = "<span class='textRed'>" + str + "</span>";
	}
	else if (map.getZoom()<12) {
		str = "<span class='textLightGray'>" + str + "</span>";
	}

    var c=map.getCenter();
    str += "<br><small>Center:</small> "+c.lng.toFixed(5)+", "+c.lat.toFixed(5);

    document.getElementById('zoomId').innerHTML = str;
}

//
// https://www.mapbox.com/mapbox-gl-js/example/toggle-layers/
//
function removeLabel(label,map) {
	alert("called removeLabel");
    var id = "label"+label;
    return;

        console.log("removeLabel",label,TCTlabels[label]);

    var visibility = map.getLayoutProperty(TCTlabels[label] , 'visibility');

    console.log("removeLabel",label,id,visibility);
    return;
    if (TCTlabels[label]!=undefined) TCTlabels[label].remove();

}

//
// https://www.mapbox.com/mapbox-gl-js/example/toggle-layers/
// UNTESTED
//
function removeMapId(id,map) {
    var visibility = map.getLayoutProperty( id, 'visibility');
    console.log("removeMapId",id,visibility);
    return;
    //if (id!=undefined) id.remove();
}

//
// create a style for a legend status
//
function styleLegend(status) {
    var str = "";
    str += " background: "+findInArray(status,globals.params.status.colors)+';';
    str += " opacity: "   +findInArray(status,globals.params.status.opacities);
    return str;
}
// scan an array of arrays of form [key, value] and return the value for a key
function findInArray(key,myArray) {
  for (var i=0;i<myArray.length;i++) {
    if (myArray[i][0]==key) return myArray[i][1];
  }
  return "";
}
//
// generate html for one line of the Legend
//
function htmlLegend(status) {
    var str = "";
    var indx = globals.params.legendStatuses.indexOf(status);
    console.log("legend indx status globals.params.legendStatuses",indx,status,globals.params.legendStatuses);

    if (indx>=0) { 
        str += "</tr><tr>";
        str += "<td style='" + styleLegend(status) + "''></td>";
        //str += "<td><span >TCT CR</span></td>";
        str += "<td><span >"+globals.params.legendName[status]+"</span></td>";
    }
    console.log("legend globals.params.legendStatuses str",globals.params.legendStatuses,str);
    return str;
}

function displayLegend(simple) {
    if (simple==undefined) simple = false;

    var box = document.getElementById('legend');
    box.style.display = 'block';

    // short form legend is narrower
    if (globals.params.legendShortForm) {
        box.style.width = '80px';
    }

    var str = "<table>";
    str += "<tr>";
    str += "<td colspan='1'><b>Legend</b></td>";

    //alert (globals.params.legendStatuses); //legends to display
    //alert (globals.params.legendStatuses.indexOf('C'); //legends to display

str += htmlLegend("C");
str += htmlLegend("c");



/*
if (globals.params.legendStatuses.indexOf('C')>=0) { 
    str += "</tr><tr>";    
    str += "<td style='" + styleLegend('C') + "''></td>";
    if (globals.params.legendShortForm) {
        str += "<td><span>TCT</span></td>";
    }
    else {
        str += "<td><span>TCT Owned</span></td>";
    }
}


if (globals.params.legendStatuses.indexOf('c')>=0) { 
    str += "</tr><tr>";
    str += "<td style='" + styleLegend('c') + "''></td>";
    str += "<td><span >TCT CR</span></td>";
}
*/

if (globals.params.legendStatuses.indexOf('a')>=0) { 
    str += "</tr><tr>";
    str += "<td style='" + styleLegend('a') + "''></td>";
    str += "<td><span >"+globals.params.legendActive+"</span></td>";
}
if (globals.params.legendStatuses.indexOf('p')>=0) { 
    str += "</tr><tr>";
    str += "<td style='" + styleLegend('p') + "''></td>";
    str += "<td><span >TCT Prospect</span></td>";
}
if (globals.params.legendStatuses.indexOf('t')>=0) { 
    str += "</tr><tr>";
    str += "<td style='" + styleLegend('t') + "''></td>";
    if (globals.params.legendShortForm) {
        str += "<td><span >Town</span></td>";
    }
    else {
        str += "<td><span >Town of Truro</span></td>";
    }
}
if (globals.params.legendStatuses.indexOf('g')>=0) { 
    str += "</tr><tr>";
    str += "<td style='" + styleLegend('g') + "''></td>";
    str += "<td><span >Cemetary</span></td>";
}
    console.log("displayLegend",str);

str += htmlLegend("T");
str += htmlLegend("t");
str += htmlLegend("s");

str += htmlLegend("g");
str += htmlLegend("p");
str += htmlLegend("a");



/*
    box.innerHTML += "<span class='smaller10'> &#9632; Owned</span>";

    box.innerHTML += "<br>";
    box.innerHTML += "<span class='smaller10'> &#9632; CR</span>";
    box.innerHTML += "<br>";
    box.innerHTML += "<span class='smaller10'> &#9632; Active</span>";
    box.innerHTML += "<br>";
    box.innerHTML += "<span class='smaller10'> &#9632; Prospect</span>";

    box.innerHTML += "<br>";
    box.innerHTML += "Town of Truro";
    box.innerHTML += "<br>";
    box.innerHTML += "National Park";
*/

    str += "</tr>";

    str += "</table>";

    box.innerHTML = str;


    // https://codepen.io/egak/pen/ZogMKo
    box.draggable = true;
    box.style.cursor = 'move';

return;

// https://stackoverflow.com/questions/39754370/how-to-drag-custom-icons-mapbox-gl-js

    box.addEventListener("mousedown", mdown, false);
    box.addEventListener("touchstart", mdown, false);
    var el = box;

    function mdown(e) {

        var rect = document.getElementById('map').getBoundingClientRect();
        el._x = rect.x;
        el._y = rect.y;
        console.log("drag el",el,rect);

        document.body.addEventListener("mousemove", mmove, false);
        document.body.addEventListener("touchmove", mmove, false);

        document.body.addEventListener("mouseup", mup, false);
        document.body.addEventListener("touchend", mup, false);
        document.body.addEventListener("mouseleave", mup, false);
        document.body.addEventListener("touchleave", mup, false);

        map.dragPan.disable();
        map.once('mouseup', onUp);
        map.once('touchend', onUp);
    }

    function mmove(e) {

        console.log("drag el mmove",e);


        e.stopPropagation();
        e.preventDefault();

        if (e.type == "touchmove") {
            e = e.changedTouches[0];
        }
        el.style.transform = 'translate(-50%, -50%) translate(' + (e.pageX - el._x) + 'px,' + (e.pageY - el._y) + 'px)'
    }

    function mup(e) {
        document.body.removeEventListener("mousemove", mmove, false);
        document.body.removeEventListener("touchmove", mmove, false);
        document.body.removeEventListener("mouseleave", mup, false);
        document.body.removeEventListener("touchleave", mup, false);
        document.body.removeEventListener("touchend", mup, false);
        document.body.removeEventListener("mouseup", mup, false);
    }

    function onUp(e) {
        map.dragPan.enable();
        //marker.setLngLat(e.lngLat)
    }
} 

//
// display the teams counts
//
function displayTeams(teamTally) {

    var box = document.getElementById('teams');
    box.style.display = 'block';
    box.style.left = globals.params.teams.left+'px';

    var teamsLetters = "ABCD";
    var teamsCount = teamsLetters.length;
    var rowColor;
    var rowOpacity;
    var rowTeam;
    var str = "<table>";
    str += "<tr>";
    str += "<td colspan='1'><b>Teams</b></td>";
    str += "</tr>";
    for (var i=0;i<teamsCount;i++) {
        rowTeam = teamsLetters.charAt(i);
        rowColor=globals.params.team.colors[rowTeam];
        rowOpacity=globals.params.team.opacity[rowTeam];
        str += "<tr >";
        str += "<td class='textCenter' style='background-color: "+rowColor+"; opacity:"+rowOpacity+"'></td>";
        str += "<td class='textCenter'>"+rowTeam+"</td>";
        // if setting specifies, show the tally of parcels for this team
        if (globals.params.teams.count) {
            str += "<td class='textCenter'>"+teamTally[rowTeam][0]+"</td>";
        }
        str += "</tr>";
    }

    str += "</table>";
    box.innerHTML = str;
    return;

    // https://codepen.io/egak/pen/ZogMKo
    box.draggable = true;
    box.style.cursor = 'move';
} 

//
/*
The string to be wrapped.
The column width (a number, default: 75)
The character(s) to be inserted at every break. (default: ‘n’)
The cut: a Boolean value (false by default). See PHP docs for more info.
http://us3.php.net/manual/en/function.wordwrap.php
*/
//
function wordwrap( str, width, brk, cut ) {
    brk = brk || 'n';
    width = width || 75;
    cut = cut || false;
    if (!str) { return str; }
    var regex = '.{1,' +width+ '}(\s|$)' + (cut ? '|.{' +width+ '}|.+$' : '|\S+?(\s|$)');
    return str.match( RegExp(regex, 'g') ).join( brk );
}


//
// creates a square around a point at center, with width specified
//
function createSquare(center, width) {
    var offsetX = .5*width;
    var offsetY = .38*width;
    var coords = [];
    coords = [
    [ center[0]+offsetX, center[1]+offsetY ],
    [ center[0]+offsetX, center[1]-offsetY ],
    [ center[0]-offsetX, center[1]-offsetY ],
    [ center[0]-offsetX, center[1]+offsetY ],
    [ center[0]+offsetX, center[1]+offsetY ],    
    ];
    	console.log("center,width,offset,coords",center,width,offsetX,offsetY,coords);
    return coords;
}


//
// creates a square around a point at center, with width specified
//
function createPolygon(center, width) {
    var offsetX = .5*width;
    var offsetY = .38*width;
    var coords = [];
    coords = [
    [ center[0]+offsetX, center[1]+offsetY ],
    [ center[0]+offsetX, center[1]-offsetY ],
    [ center[0]-offsetX, center[1]-offsetY ],
    [ center[0]-offsetX, center[1]+offsetY ],
    [ center[0]+offsetX, center[1]+offsetY ],    
    ];
    	console.log("center,width,offset,coords",center,width,offsetX,offsetY,coords);
    return coords;
}


function coordinatesHTMLline(coord) {
    var myHTML = "";
    myHTML += coord[0].toFixed(globals.params.precision);
    myHTML += ", ";        
    myHTML += coord[1].toFixed(globals.params.precision);    
    return myHTML;
}

//
// make a map-lot in format 045-040 for Truro Assessor's map lookup
//
function makeMapLot(map,lot) {
    var str = map+"";
    if (str.length<3) str = "0"+str;
    if (str.length<3) str = "0"+str;    
    str = str + "-";

    var slot = lot+"";
    if (slot.length<3) slot = "0"+slot;
    if (slot.length<3) slot = "0"+slot;

    return str+slot;
}
function makeYYYYdashMM(YYYYMMDD) {
    return YYYYMMDD.substring(0,4)+"-"+YYYYMMDD.substring(4,6);
}

function needsInspection(lastInspected,inspectYears) {
	if (lastInspected=="" && inspectYears==99) return false;  
	// if never inspected and on 99 year cycle, then don't require it
    var last = lastInspected.substring(0,4);
    var next = 1*last + 1*inspectYears;

    var d = new Date();
    var thisYear = d.getUTCFullYear();
    if (thisYear>=next) return true
    return false;
}

//
// plot a circle (use a unique layer id)
// optional properties as an argument
// https://docs.mapbox.com/mapbox-gl-js/example/data-driven-circle-colors/
//
function plotCircle(id,radius,color,coordinates,opacity,props,minzoom) {
    if (minzoom===undefined) minzoom = 1;
    if (props===undefined) props = {};
        console.log("plotCircle",id,props);
    var result = map.addLayer({ 
        "id": id, 
        "type": "circle", 
        "paint": { 
            "circle-radius":radius, 
            "circle-color": color,
            "circle-opacity": opacity
         }, 
        "source": { 
            "type": "geojson", 
            "data": {
                "type": "FeatureCollection", 
                "features": [ 
                    { 
                        "type": "Feature", 
                        "properties": props, 
                        "geometry": { 
                            "type": "Point", 
                            "coordinates": coordinates
                        } 
                    }  
                ] 
            }
        },
        "minzoom": minzoom


    });
    return result;
}

function compareMax(a, b) {
    return b.max - a.max;
}

//
//
//
function Cell(x, y, h, polygon) {
    this.x = x; // cell center x
    this.y = y; // cell center y
    this.h = h; // half the cell size
    this.d = pointToPolygonDist(x, y, polygon); // distance from cell center to polygon
    this.max = this.d + this.h * Math.SQRT2; // max distance to polygon within a cell
}


