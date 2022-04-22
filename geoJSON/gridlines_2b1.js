// GRIDLINES
// embedded in a function that is called after the map has been loaded

//
// draw a grid parallel at 
//      lat = latitude
//      myColor = color of line ("" for default)
//      myWidth = width of line ("" for default)
//      east = east longitude edge of the line
//      west = west longitude edge of the line
//
function oneParallel(lat,myColor,myWidth,west,east) {

    // figure out the color
    var gridColor;
    // figure out the line width
    var gridWidth;

    // mod 10 degrees
            // "#00f",
            // 2
    if (lat/10==Math.floor(lat/10)) {
        gridColor = "#00f";
        gridWidth = 2;
    }
    // mod 5 degrees
            // "#04f",
            // 1.5
    else if (lat/5==Math.floor(lat/5)) {
        gridColor = "#04f";
        gridWidth = 1.5;
    }

    // integer
    else if (lat==Math.floor(lat)) {
        gridColor = "#08f";
        gridWidth = 1.25;
    }
    else if (lat*2==Math.floor(lat*2)) {
        gridColor = "#0af";
        gridWidth = .75;
    }
    else {
        gridColor = "#0bf";
        gridWidth = .5;    
    }

    if (myColor!=undefined && myColor!="") gridColor = myColor;  // override color on input argument
    if (myWidth!=undefined && myWidth!="") gridWidth = myWidth;  // override color on input argument

    var gridEast = -69.9;   // default to east coast
    var gridWest = -125.0;  // default to west coast
    if (east!=undefined && east!="") gridEast = east;  // override color on input argument
    if (west!=undefined && west!="") gridWest = west;  // override color on input argument

    // parallel
    map.addLayer({
        "id": "grid_lat_"+lat,
        "type": "line",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [gridEast, lat],  // east edge
                        //[-71.0, 42.0]   // west edge 
                        [gridWest, lat]  // west edge 
                    ]
                }
            }
        },
        //"minzoom": 12,
        "maxzoom": 20,

        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": gridColor,
            "line-width": gridWidth
        }
    });
}

function oneMeridian(lng,myColor,myWidth,north,south) {

    // figure out the color
    var gridColor;
    // figure out the line width
    var gridWidth;


   // mod 10 degrees


    // mod 5 degrees



    // integer
    if (lng==Math.floor(lng)) {
        gridColor = "#08f";
        gridWidth = 1.25;
    }
    else if (lng*2==Math.floor(lng*2)) {
        gridColor = "#0af";
        gridWidth = .75;
    }
    else {
        gridColor = "#0bf";
        gridWidth = .5;    
    }



    if (myColor!=undefined && myColor!="") gridColor = myColor;  // override color on input argument
    if (myWidth!=undefined && myWidth!="") gridWidth = myWidth;  // override color on input argument


    var gridNorth = 43;  // default
    var gridSouth = 41;  // default
    if (north!=undefined && north!="") gridNorth = north;  // override color on input argument
    if (south!=undefined && south!="") gridSouth = south;  // override color on input argument

    // parallel
    map.addLayer({
        "id": "grid_lng"+lng,
        "type": "line",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [lng, gridNorth],  // east edge
                        [lng, gridSouth]  // west edge 
                    ]
                }
            }
        },
        //"minzoom": 12,
        "maxzoom": 20,

        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": gridColor,
            "line-width": gridWidth
        }
    });    
}

function addGridlines() {

    // PARALLELS Cape Cod
    oneParallel(43. );

    oneParallel(42.2, "#fff", "", -70.64, -69.9);
    oneParallel(42.1, "#fff", "", -70.64, -69.9);
    //oneParallel(42. , "hotpink", "", "", -69.925);
    //oneParallel(42. , "hotpink", "", "", 179);  // all the way to Europe
    oneParallel(42. , "#fff", "", "", 179);  // all the way to Europe

    oneParallel(41.9, "#fff", "", -70.53, -69.9);
    oneParallel(41.8, "#fff", "", -70.53, -69.9);
    oneParallel(41.7, "#fff", "", -70.53, -69.9);

    oneParallel(41. );
    oneParallel(40. , "", "", "", -73);

    // PARALLELS AZ
    oneParallel(35. , "", "", -121.25, -74.5);

    oneParallel(34.1, "", "", -112.7, -111.6);

    oneParallel(34. , "", "", -120, -76);

    oneParallel(33.9, "", "", -112.7, -111.6);
    oneParallel(33.8, "", "", -112.7, -111.6);
    oneParallel(33.7, "", "", -112.7, -111.6);
    oneParallel(33.6, "", "", -112.7, -111.6);

    oneParallel(33.5, "", "", -112.7, -111.6);

    oneParallel(33.4, "", "", -112.7, -111.6);
    oneParallel(33.3, "", "", -112.7, -111.6);
    oneParallel(33.2, "", "", -112.7, -111.6);
    oneParallel(33.1, "", "", -112.7, -111.6);

    oneParallel(33. , "", "", -119, -77);

    oneParallel(30. , "", "", -117, -80);

    // MERIDIANS - Cape Cod
    oneMeridian(-69.9, "#fff", "", 43, 41);
    oneMeridian(-70.0, "#fff", 1.5, 43, 41);

    oneMeridian(-70.1, "#fff", "", 43, 41);
    oneMeridian(-70.2, "#fff", "", 43, 41);
    oneMeridian(-70.3, "#fff", "", 43, 41);

    // MERIDIANS - AZ
    oneMeridian(-111.7);
    oneMeridian(-111.8);
    oneMeridian(-111.9);
    oneMeridian(-112. );

    oneMeridian(-112.1);
    oneMeridian(-112.2);
    oneMeridian(-112.3);
    oneMeridian(-112.4);

    oneMeridian(-112.5);

    oneMeridian(-112.6);

/*
    // 70th meridan
    map.addLayer({
        "id": "lng_70.0",
        "type": "line",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [-70.0, 43],  // north edge
                        [-70.0, 41]   // south edge 
                    ]
                }
            }
        },

        //"minzoom": 12,
        "maxzoom": 20,

        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#fff",
            "line-width": 1.5
        }
    });

    // 70.1 th meridan
    map.addLayer({
        "id": "lng_70.1",
        "type": "line",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [-70.1, 43.0],  // north edge
                        [-70.1, 41.0]   // south edge 
                    ]
                }
            }
        },

        //"minzoom": 12,
        "maxzoom": 20,

        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#fff",
            "line-width": .5
        }
    });

    // 70.2 th meridan
    map.addLayer({
        "id": "lng_70.2",
        "type": "line",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [-70.2, 43.0],  // north edge
                        [-70.2, 41.0]   // south edge 
                    ]
                }
            }
        },

        //"minzoom": 12,
        "maxzoom": 20,

        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#fff",
            "line-width": .5
        }
    });
*/



    //
    // Grid labels
    //
    map.addLayer({
        "id": "grid_Labels",
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
                            "coordinates": [-69.925, 42]
                        },
                        "properties": {
                            "title": "latitude 42",
                            "icon": ""
                        }
                    },

                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70, 42.075]
                        },
                        "properties": {
                            "title": "longitude -70",
                            "icon": ""
                            //"maxzoom": 12
                        }
                    }
                ]
            }
        },

        //"minzoom": 12,
        //"maxzoom": 22,

        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, -.6],
            "text-anchor": "top",
            "text-size": 12
            //"text-color": "#f00"

        }
        ,
        "paint": {
                "text-color": "black",
                "text-halo-color": "#fff",
                "text-halo-width": 1        
        }
        

    });
    // https://www.mapbox.com/mapbox-gl-js/style-spec/

return;

} // end of function 