//
// test if 2 geojson objects share 2 or more coordinates
// 1 point where they touch IS enough to be adjacent
//
function isAdjacent(objX,objY) {
	if (objX.geometry===undefined) return false;
	if (objY.geometry===undefined) return false;
	if (objX.geometry.coordinates===undefined) return false;
	if (objY.geometry.coordinates===undefined) return false;
	var isAdj = "";
	coordX = objX.geometry.coordinates[0];
	coordY = objY.geometry.coordinates[0];
	if (coordX==coordY) return false;  // don't allow self-identity
	var coordTest=0;
	for (var x=0;x<coordX.length;x++) {
		for (var y=0;y<coordY.length;y++) {
			if (compareCoords(coordX[x], coordY[y])) coordTest++;
			if (coordTest>=1) {
				//console.warn("adj "+x+" = "+y);
				return true;
			}
		}
	}
	return false;
}

//
// Look at an array of parcels and see which match the id given, and 
// Return the center if specified (otherwise the first vertex)

function findParcelById(inputArrayIds,key,searchBy) {


	if (searchBy===undefined) searchBy="id";

	var nearbyPoints = [];
	var len,n,obj,cat;
	var keyLowerCase = key.toLowerCase();
			console.log("fn findParcelById",inputArrayIds, key, keyLowerCase);
	var vertices;

	// handle both TCT and ToT parcels
	for (var j=0;j<=1;j++) {
		if (j==0) {
			len = TCTparcelsLen;
			cat = "TCT";
		}
		else {
			len = ToTparcelsLen;
			cat = "ToT";
		}

	    for (var i=0;i<len;i++) {
	    	if (j==0) {
	        	n = TCTparcels[i]; 
	        	obj = tct["id_"+n];  // this is the parcel key like "TCT44"
	    	}
	    	else {
	        	n = ToTparcels[i]; 
	        	obj = tot["id_"+n];  
	    	}
	    	// does the given id match this parcel id?   (make it not case sensitive)
			if (searchBy=='id' && key.toLowerCase()==n.toLowerCase()) {
						vertices = obj.geometry.coordinates[0];
						// return the center if it's defined
						if (obj.geometry.center!=undefined) return obj.geometry.center;
						// otherwise return the first vertex in the polygon list
						return vertices[0];	
			}
			else if (searchBy=='maplot' && obj.properties.map==key.substring(0,3)  && obj.properties.lot==key.substring(3,6) ) {
						vertices = obj.geometry.coordinates[0];
						// return the center if it's defined
						if (obj.geometry.center!=undefined) return obj.geometry.center;
						// otherwise return the first vertex in the polygon list
						return vertices[0];	             	
			}
			else if (searchBy=='street') {
				if (obj.properties.street!=undefined) {
					var testStreet = obj.properties.street.substring(0,key.length);
					testStreet = testStreet.toLowerCase();
					console.log("testStreet",testStreet);
					if( testStreet == keyLowerCase ) {
						// return the center if it's defined
						if (obj.geometry.center!=undefined) return obj.geometry.center;
						// otherwise return the first vertex in the polygon list
						vertices = obj.geometry.coordinates[0];						
						return vertices[0];	 
					}
				}
			}

	    }
	}
	// id didn't match
	return null;
}


//
// look at an array of parcels and see which are nearby based on coords given, and 
// distance threshold

function findNearbyParcels(inputArrayIds,coords,threshold) {

	console.log("fn findNearbyParcels",inputArrayIds,coords,threshold );

	var nearbyPoints = [];
	var len,n,obj,cat;
	// handle both TCT and ToT parcels
	for (var j=0;j<=1;j++) {
		if (j==0) {
			len = TCTparcelsLen;
			cat = "TCT";
		}
		else {
			len = ToTparcelsLen;
			cat = "ToT";
		}

	    for (var i=0;i<len;i++) {
	    	if (j==0) {
	        	n = TCTparcels[i]; 
	        	obj = tct["id_"+n];  
	    	}
	    	else {
	        	n = ToTparcels[i]; 
	        	obj = tot["id_"+n];  
	    	}

			var vertices = obj.geometry.coordinates[0];
	        var verticesCount = vertices.length-1; // don't count the duplicate one at the end
	        var nearest = nearestVertexDistance(coords,vertices,verticesCount);

			if (nearest.distance <= threshold) {
				console.log("fn findNearbyParcels n",n,obj,"vertices",vertices,"count",verticesCount,"nearest",nearest.distance.toFixed(5),nearest.index);
				var obj = {}
				obj.id = cat+" "+n;
				obj.d = nearest.distance;
				obj.i = nearest.index;
				obj.x = vertices[nearest.index][0];
				obj.y = vertices[nearest.index][1];
				nearbyPoints.push(obj);
			}
	    }
	}
	console.log("fn findNearbyParcels VERTICES",nearbyPoints);
	return nearbyPoints;
}


function displayNearby(nearbyParcels,divId,coords,threshold) {

	var str = "<table>";
	
	if (nearbyParcels.length>0) {

		str += "<tr>";
			str += "<th colspan='5' class='textCenter'>";
			str += "TCT & ToT parcles within "+threshold;
			str += "</th>";
		str += "</tr>";

		str += "<tr>";

			str += "<th class='textCenter'>";
			str += "Id";
			str += "</th>";
			str += "<th>";
			str += "vertex";
			str += "</th>";
			str += "<th class='textCenter'>";
			str += "x";
			str += "</th>";
			str += "<th class='textCenter'>";
			str += "y";
			str += "</th>";
			str += "<th class='textCenter'>";
			str += "dist";
			str += "</th>";

		str += "</tr>";

		//}

		var obj = {};

		for (var i=0;i<nearbyParcels.length;i++) {
			obj = nearbyParcels[i];
			str += "<tr>";

				str += "<td>";
				str += obj.id;
				str += "</td>";

				str += "<td class='textCenter'>";
				str += obj.i;
				str += "</td>";

				str += "<td>";
				str += obj.x.toFixed(globals.params.precision);
				str += "</td>";

				str += "<td>";
				str += obj.y.toFixed(globals.params.precision);
				str += "</td>";

				str += "<td>";
				str += obj.d.toFixed(globals.params.precision);
				str += "</td>";

			str += "</tr>";
		}

		str += "<tr class='textBlue'>";

			str += "<td colspan='2' class='textCenter'>";
			str += "clicked on";
			str += "</td>";

			str += "<td>";
			str += coords[0].toFixed(globals.params.precision);
			str += "</td>";

			str += "<td>";
			str += coords[1].toFixed(globals.params.precision);
			str += "</td>";

		str += "</tr>";

		str += "</table>";
	}
	else {
		str += "<span class='textRed'><b>No vertices within "+threshold+"</b></span>";
	}
	console.log('displayNearby divId html',divId,str);
	toggleDiv(divId,true);  // force this div to be visible
    document.getElementById(divId).innerHTML = str;
}



//
// match coords of a point against an array of vertices and return the nearest properties
//
function nearestVertexDistance(coords,vertices,verticesCount) {
	var nearest = {};
	nearest.distance = Infinity;
	nearest.index = -1;
	for (var i=0;i<verticesCount;i++) {
		var x0=coords[0];
		var y0=coords[1];
		var x1=vertices[i][0];
		var y1=vertices[i][1];
		var dx = x0-x1;
		var dy = y0-y1;
		var d = Math.sqrt( dx*dx + dy*dy);
		if (d<nearest.distance) {
			nearest.distance = d;
			nearest.index = i;	
		}		
	}
	return nearest;
}


//
// compute centroid of a set of coordinates
// return the lat and lng of the centroid
//
var getCentroid = function (coord) 
{
    var center = coord.reduce(function (x,y) {
        return [x[0] + y[0]/coord.length, x[1] + y[1]/coord.length] 
    }, [0,0])
    return center;
}


//
// signed distance from point to polygon outline (negative if point is outside)
//
function pointToPolygonDist(x, y, polygon) {
    var inside = false;
    var minDistSq = Infinity;

    for (var k = 0; k < polygon.length; k++) {
        var ring = polygon[k];

        for (var i = 0, len = ring.length, j = len - 1; i < len; j = i++) {
            var a = ring[i];
            var b = ring[j];

            if ((a[1] > y !== b[1] > y) &&
                (x < (b[0] - a[0]) * (y - a[1]) / (b[1] - a[1]) + a[0])) inside = !inside;

            minDistSq = Math.min(minDistSq, getSegDistSq(x, y, a, b));
        }
    }

    return (inside ? 1 : -1) * Math.sqrt(minDistSq);
}
//
// get polygon centroid
//
function getCentroidCell(polygon) {
    var area = 0;
    var x = 0;
    var y = 0;
    var points = polygon[0];
    for (var i = 0, len = points.length, j = len - 1; i < len; j = i++) {
        var a = points[i];
        var b = points[j];
        var f = a[0] * b[1] - b[0] * a[1];
        x += (a[0] + b[0]) * f;
        y += (a[1] + b[1]) * f;
        area += f * 3;
    }
    if (area === 0) return new Cell(points[0][0], points[0][1], 0, polygon);
    return new Cell(x / area, y / area, 0, polygon);
}
//
// get squared distance from a point to a segment
//
function getSegDistSq(px, py, a, b) {
    var x = a[0];
    var y = a[1];
    var dx = b[0] - x;
    var dy = b[1] - y;
    if (dx !== 0 || dy !== 0) {
        var t = ((px - x) * dx + (py - y) * dy) / (dx * dx + dy * dy);
        if (t > 1) {
            x = b[0];
            y = b[1];

        } else if (t > 0) {
            x += dx * t;
            y += dy * t;
        }
    }
    dx = px - x;
    dy = py - y;
    return dx * dx + dy * dy;
}



//
// https://blog.mapbox.com/a-new-algorithm-for-finding-a-visual-center-of-a-polygon-7c77e6492fbc
// https://github.com/mapbox/polylabel
// https://github.com/mapbox/polylabel/blob/master/polylabel.js
//
function polylabel(polygon, precision, debug) {
    precision = precision || 1.0;

    // find the bounding box of the outer ring
    var minX, minY, maxX, maxY;
    for (var i = 0; i < polygon[0].length; i++) {
        var p = polygon[0][i];
        if (!i || p[0] < minX) minX = p[0];
        if (!i || p[1] < minY) minY = p[1];
        if (!i || p[0] > maxX) maxX = p[0];
        if (!i || p[1] > maxY) maxY = p[1];
    }

    var width = maxX - minX;
    var height = maxY - minY;
    var cellSize = Math.min(width, height);
    var h = cellSize / 2;

    // a priority queue of cells in order of their "potential" (max distance to polygon)
    var cellQueue = new Queue(null, compareMax);

    if (cellSize === 0) return [minX, minY];

    // cover polygon with initial cells
    for (var x = minX; x < maxX; x += cellSize) {
        for (var y = minY; y < maxY; y += cellSize) {
            cellQueue.push(new Cell(x + h, y + h, h, polygon));
        }
    }

    // take centroid as the first best guess
    var bestCell = getCentroidCell(polygon);

    // special case for rectangular polygons
    var bboxCell = new Cell(minX + width / 2, minY + height / 2, 0, polygon);
    if (bboxCell.d > bestCell.d) bestCell = bboxCell;

    var numProbes = cellQueue.length;

    while (cellQueue.length) {
        // pick the most promising cell from the queue
        var cell = cellQueue.pop();

        // update the best cell if we found a better one
        if (cell.d > bestCell.d) {
            bestCell = cell;
            if (debug) console.log('found best %d after %d probes', Math.round(1e4 * cell.d) / 1e4, numProbes);
        }

        // do not drill down further if there's no chance of a better solution
        if (cell.max - bestCell.d <= precision) continue;

        // split the cell into four cells
        h = cell.h / 2;
        cellQueue.push(new Cell(cell.x - h, cell.y - h, h, polygon));
        cellQueue.push(new Cell(cell.x + h, cell.y - h, h, polygon));
        cellQueue.push(new Cell(cell.x - h, cell.y + h, h, polygon));
        cellQueue.push(new Cell(cell.x + h, cell.y + h, h, polygon));
        numProbes += 4;
    }

    if (debug) {
        console.log('num probes: ' + numProbes);
        console.log('best distance: ' + bestCell.d);
    }

    return [bestCell.x, bestCell.y];
}


