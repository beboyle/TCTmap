// BORDERS
// embedded in a function that is called after the map has been loaded

//
// draw a grid parallel at 
//      lat = latitude
//      myColor = color of line ("" for default)
//      myWidth = width of line ("" for default)
//      east = east longitude edge of the line
//      west = west longitude edge of the line
//
function oneLine(id,myColor,myWidth,myDash,lineObj) {

    map.addLayer({
        "id": id,
        "type": "line",
        "source": {
            "type": "geojson",
            "data": lineObj
        },
        //"minzoom": 12,
        "maxzoom": 20,

        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-dasharray": myDash,
            "line-color": myColor,
            "line-width": myWidth
        }
    });
}

function addBorders() {

    var lineCoords = {};
    var borderLine = {};
    var borderColor = 'black';
    var borderWidth = 2;
    var borderDasharray = [2,2];

    // Wellfleet-Truro border
    lineCoords["Truro-Wellfleet"] = [
        [-70.07760, 41.95780],  // west
        [-70.03878, 41.96287],
        [-70.02797, 41.96401],  // Rt 6
        [-70.02185, 41.96452],  // Old Kings Hwy
        [-69.99856, 41.96660],
        [-69.99710, 41.96676]   // east
    ];
    borderLine["Truro-Wellfleet"] = turf.lineString(lineCoords["Truro-Wellfleet"], {name:"Truro-Wellfleet Border"});
    oneLine("Truro-Wellfleet Border",borderColor,borderWidth,borderDasharray,borderLine["Truro-Wellfleet"]);

    // Provincetown-Truro border
    lineCoords["Truro-Provincetown"] = [
        [-70.15427, 42.07710],  // N
        [-70.15355, 42.07594],
        [-70.14655, 42.06524],  // lake
        [-70.14736, 42.06387],  // Rt6-6A
        [-70.14742, 42.06100]  // Bay
    ];
    borderLine["Truro-Provincetown"] = turf.lineString(lineCoords["Truro-Provincetown"], {name:"Truro-Provincetown Border"});
    oneLine("Truro-Provincetown Border",borderColor,borderWidth,borderDasharray,borderLine["Truro-Provincetown"]);

}
