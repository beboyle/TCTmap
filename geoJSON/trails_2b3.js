// TRAILS
// embedded in a function that is called after the map has been loaded

function addTrails(additionalCoords) {

additionalCoords = true;
if (additionalCoords!=undefined) {

    var trailCoords = [

    [-70.09046, 42.03248],
    [-70.09046, 42.03253],
    [-70.09047, 42.03258],
    [-70.09048, 42.03264],
    [-70.09045, 42.03268],
    [-70.09041, 42.03272],
    [-70.09041, 42.03276],
    [-70.09039, 42.0328],
    [-70.09040, 42.03285],
    [-70.09041, 42.0329],
    [-70.09043, 42.03294],
    [-70.09048, 42.03298],
    [-70.09055, 42.03299],
    [-70.09060, 42.03302],
    [-70.09063, 42.03306],
    [-70.09069, 42.03308]
    ];

var options = {};
options.color = "purple";
options.width = globals.params.trailWidth+2;
//  options.minzoom
//  options.maxzoom

//addLineSegments(trailCoords,options,"trails_TwineCartPath");



if (1==0) {

    var line = turf.lineString(trailCoords);
    // CANT GET BEZIER TO WORK
    // var curved = turf.bezierSpline(line);
    // https://turfjs.org/docs/#bezierSpline


    var turfDistance = turf.lineDistance(line);
    // turf returns km, so multiply to get feet                    
    turfDistance = Math.round(turfDistance*3280.84);  // feet per km
    console.log("turfDistance",turfDistance,"feet");


    // Twine Field Cart Path
    map.addLayer({
        "id": "trails_TwineCartPath",
        "type": "line",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": trailCoords 
                }
            }
        },

        "minzoom": 15,
        //"maxzoom": 22,

        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#00f",
            "line-width": globals.params.trailWidth+2
        }
    });
}




    map.on('mouseenter', 'trails_TwineCartPath', function (e) {
        if (1==0 && showPopups) handleMouseenter(e);
    });



}


    // David Kuechle Trail
    map.addLayer({
        "id": "trails_Kuechle",
        "type": "line",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [-70.04363, 41.98988],  // Chaplin meets Kuechle trail at top
                        [-70.04305, 41.98912],  // Chaplin meets Kuechle trail at bottom
                        [-70.04236, 41.98947],
                        [-70.04273, 41.98954],
                        [-70.04283, 41.99034],
                        [-70.04316, 41.99072],   // northern most point
                        [-70.04354, 41.99049],
                        [-70.04334, 41.99008],
                        [-70.04363, 41.98988] // Chaplin meets Kuechle trail at top

                    ]
                }
            }
        },

        "minzoom": 15,
        //"maxzoom": 22,

        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#00f",
            "line-width": globals.params.trailWidth
        }
    });

    // Ansel Chaplin Trail
    map.addLayer({
        "id": "trails_Chaplin",
        "type": "line",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [-70.04591, 41.98888],
                        [-70.04571, 41.98879],
                        [-70.04541, 41.98866],
                        [-70.04493, 41.98875],
                        [-70.04460, 41.98846],
                        [-70.04410, 41.98840],  // at bottom of the town land
                        [-70.04312, 41.98908],  // Chaplin meets Kuechle trail at bottom
                        [-70.04371, 41.98985],  // Chaplin meets Kuechle trail at top
                        [-70.04482, 41.98938],  
                        [-70.04510, 41.98937],
                        [-70.04591, 41.98888]
                    ]
                }
            }
        },

        "minzoom": 15,
        //"maxzoom": 22,

        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#f0f",
            "line-width": globals.params.trailWidth
        }
    });


    //
    // Trail labels
    //
    map.addLayer({
        "id": "trails_Labels",
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
                            "coordinates": [-70.0443, 41.9891]
                        },
                        "properties": {
                            "title": "Ansel Chaplin Trail",
                            "icon": ""
                        }
                    },

                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.04315, 41.9899]
                        },
                        "properties": {
                            "title": "David Kuechle Trail",
                            "icon": ""
                            //"maxzoom": 12
                        }
                    }
                ]
            }
        },

        "minzoom": 15,
        //"maxzoom": 22,

        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0],
            "text-anchor": "top",
            "text-size": 12
        }

    });

    //
    // Parking at Edgewood trails
    //
    map.addLayer({
        "id": "trails_Edgewood-parking",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": 
                {
                "type": "FeatureCollection",
                "features": [
                    // Parking
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.046, 41.98905]
                        },
                        "properties": {
                            "title": "Parking",
                            "icon": "car",
                            "marker-color": "blue",     // doesn't work
                            "marker-size": "large"      // doesn't work
                            // https://www.mapbox.com/help/markers-js/
                        }
                    }
                ]
            }
        },

        "minzoom": 15,
        //"maxzoom": 22,

        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top",
            "text-size": 12
                                        //"maxzoom": 12
        } 
    });



    //
    // add special points of interest and landmarks
    //
    map.addLayer({
        "id": "trails-benchKuechle",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": 
                {
                "type": "FeatureCollection",
                "features": [

                    // Bench at Meldahl
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.0427, 41.9905]
                        },
                        "properties": {
                            "title": "Bench",
                            "icon": "star",
                            "marker-color": "red",     // doesn't work
                            "marker-size": "large"      // doesn't work
                            // https://www.mapbox.com/help/markers-js/
                        }
                    }

                ]
            }
        },

        "minzoom": 15,
        //"maxzoom": 22,

        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top",
            "text-size": 10
                                        //"maxzoom": 12
        }
    });




    //
    // add special points of interest and landmarks
    //
    map.addLayer({
        "id": "trails-memorials",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": 
                {
                "type": "FeatureCollection",
                "features": [
                    // Davidson Memorial Rock
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.04870, 41.99274]
                        },
                        "properties": {
                            "title": "Davidson Memorial Rock",
                            "icon": "star",
                            "marker-color": "red",     // doesn't work
                            "marker-size": "large"      // doesn't work
                            // https://www.mapbox.com/help/markers-js/
                        }
                    }

                ]
            }
        },

        "minzoom": 15,
        //"maxzoom": 22,

        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top",
            "text-size": 10
                                        //"maxzoom": 12
        }
    });




    //
    // add Twine Field trail names 
    //
    map.addLayer({
        "id": "TwineFieldTitle",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": 
                {
                "type": "FeatureCollection",
                "features": [
                    // Twinefields
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.0912, 42.03436]
                        },
                        "properties": {
                            "title": "Skipper Butterfly Trail",
                            "icon": ""
                            // https://www.mapbox.com/help/markers-js/
                        },
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.0912, 42.03430]
                        },
                        "properties": {
                            "title": "3/16 mile",
                            "icon": ""
                            // https://www.mapbox.com/help/markers-js/
                        },
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.0909, 42.03398]
                        },
                        "properties": {
                            "title": "Prairie Warbler Trail",
                            "icon": ""
                            // https://www.mapbox.com/help/markers-js/
                        },
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.0909, 42.03392]
                        },
                        "properties": {
                            "title": "3/16 mile",
                            "icon": ""
                            // https://www.mapbox.com/help/markers-js/
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.09203, 42.0343]
                        },
                        "properties": {
                            "title": "Northern Harrier Loop",
                            "icon": ""
                            // https://www.mapbox.com/help/markers-js/
                        },
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.0913, 42.03484]
                        },
                        "properties": {
                            "title": "Bobwhite Quail Loop",
                            "icon": ""
                            // https://www.mapbox.com/help/markers-js/
                        },
                    },

                ]
            }
        },

        "minzoom": 16,
        //"maxzoom": 22,

        "layout": {
            "icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top",
            "text-size": 18,
            "text-allow-overlap": true
                                        //"maxzoom": 12
        },
        "paint": {
            "text-color": "green",
            "text-halo-color": "#fff",
            "text-halo-width": 2
        } 


    });





    //
    // Parking at Twinefields
    //
    // NOT YET
    if (1==0) {    
        map.addLayer({
            "id": "trails_Twinefield-parking",
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": 
                    {
                    "type": "FeatureCollection",
                    "features": [
                        // Parking
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-70.09188, 42.03346]
                            },
                            "properties": {
                                "title": "Parking",
                                "icon": "car",
                                "marker-color": "blue",     // doesn't work
                                "marker-size": "large"      // doesn't work
                                // https://www.mapbox.com/help/markers-js/
                            }
                        }
                    ]
                }
            },
            "layout": {
                "icon-image": "{icon}-15",
                "text-field": "{title}",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.6],
                "text-anchor": "top",
                "text-size": 12
                //"maxzoom": 12
            } 
        });
    }


} // end of function 