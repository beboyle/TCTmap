// LITTLE PAMET FARM
// embedded in a function that is called after the map has been loaded


function pushLPFparcels() {
    TCTparcels.push("1003");    
    TCTparcels.push("1034");
    TCTparcels.push("1014");
    TCTparcels.push("1011"); 
    TCTparcels.push("045081"); // 3 Outwater Lane


    console.log("pushLPFparcels",TCTparcels);       
}


var lpf = {};

// array of parcel numbers
var LPFparcels = [
        "1"

    ];



tct.id_1003 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "LPF 3THP",
                            "donor": "Boyle",
                            "acquired": "1985",
                            "street":"3 Toms Hill Path",

                            "acres": 1.510,
                            "acresUpland": 1.510,    
                            "acresWetland": 0,

                            "map": 45,
                            "lot": 72,


                            "habitat": "",
                            
                            //"signs":[
                            //    [-70.04596, 41.98888],
                            //    [-70.04583, 41.98848]
                            //],
                            

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 3,

                            "status": "a",

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07618, 41.99988],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07681, 42.00039],
                                        [-70.07647, 42.00054],
                                        [-70.07617, 42.00022],


                                        [-70.07573, 41.99999],

                                        
                                        [-70.07560, 41.99992],
                                        [-70.07551, 41.99966],
                                        [-70.07631, 41.99947],

                                        [-70.07681, 42.00039]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


tct.id_1034 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "LPF 34CHR",
                            "donor": "Boyle",
                            "acquired": "2005",
                            "street":"34 Corn Hill Rd",

                            "acres": 3.300,
                            "acresUpland": 3.300,    
                            "acresWetland": 0,

                            "map": 45,
                            "lot": 79,


                            "habitat": "",
                            
                            //"signs":[
                            //    [-70.04596, 41.98888],
                            //    [-70.04583, 41.98848]
                            //],
                            

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 3,

                            "status": "a",

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            //"center": [-70.08801, 42.03295],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07698, 41.99922],
                                        [-70.07631, 41.99947],
                                        [-70.07551, 41.99966],

                                        [-70.0752, 41.99897],

                                        [-70.07516, 41.99886],

                                        [-70.07570, 41.99867],


                                        [-70.07653, 41.99837],
                                        [-70.07677, 41.99880],

                                        [-70.07698, 41.99922]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


tct.id_1014 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "LPF 14THP",
                            "donor": "Boyle",
                            "acquired": "2005",
                            "street":"14 Toms Hill Path",

                            "acres": .79,
                            "acresUpland": .79,    
                            "acresWetland": 0,

                            "map": 45,
                            "lot": 100,


                            "habitat": "",
                            
                            //"signs":[
                            //    [-70.04596, 41.98888],
                            //    [-70.04583, 41.98848]
                            //],
                            

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 3,

                            "status": "a",

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07520, 41.99860],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07587, 41.99827],
                                        // insert some more for curvature
                                        [-70.07586, 41.99838],                                        
                                        [-70.07577, 41.99847],                                        
                                        [-70.07572, 41.99854],                                        
                                        [-70.07570, 41.99861],

                                        [-70.07570, 41.99867],
                                        [-70.07516, 41.99886],
                                        [-70.07490, 41.99866],
                                        [-70.07472, 41.99850],

                                        [-70.07517, 41.99823],
                                        [-70.07540, 41.99848],
                                        [-70.07565, 41.99845],

                                        [-70.07587, 41.99827]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tct.id_1011 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "LPF 11THP",
                            "donor": "Boyle",
                            "acquired": "2003",
                            "street":"11 Toms Hill Path",

                            "acres": .800,
                            "acresUpland": .800,    
                            "acresWetland": 0,

                            "map": 45,
                            "lot": 78,

                            "habitat": "",
                            /*
                            "signs":[
                                [-70.07701, 41.99834] // 11THP
                            ],
                            */
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 3,

                            "status": "a",

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            //"center": [-70.07520, 41.99860],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07757, 41.99850],
                                        [-70.07677, 41.99880],
                                        [-70.07653, 41.99837],
                                        [-70.07731, 41.99811],


                                        [-70.07757, 41.99850]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


tct.id_045081 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "LPF 045081",
                            "donor": "Boyle",
                            "acquired": "2003",
                            "street":"3 Outwater Lane",

                            "acres": 1.45,
                            "acresUpland": 1.45,    
                            "acresWetland": 0,

                            "map": 45,
                            "lot": 81,


                            "habitat": "",
                            
                            //"signs":[
                            //    [-70.07701, 41.99834] // 11THP
                            //],
                            

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 99,

                            "status": "a",

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            //"center": [-70.07520, 41.99860],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07520, 41.99897],

                                        [-70.07491, 41.99925],
                                        [-70.07463, 41.99939],
                                        [-70.07392, 41.99956],


                                        [-70.07367, 41.99906],


                                        [-70.07415, 41.99879],
                                        [-70.07432, 41.99898],
                                        [-70.07490, 41.99866],

                                        [-70.07516, 41.99886],

                                        [-70.07520, 41.99897] // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

//
// SKIP FOR NOW
//
function addLittlePametFarm() {


return;



    // 3THP
    map.addLayer({
        "id": "lpf_3THP",
        "type": "Polygon",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [-70.07681, 42.00036],  // #TH at CHR
                        [-70.07656, 42.00049],  
                        [-70.07582, 41.99994],  
                        //[-70.07656, 42.00049],  

                        [-70.07681, 42.00036]  



                    ]
                }
            }
        }

/*
        ,
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#00f",
            "line-width": trailWidth
        }
        */
    });













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
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#00f",
            "line-width": trailWidth
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
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#f0f",
            "line-width": trailWidth
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

/*
                    // Bench at Meldahl
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.04293, 41.99040]
                        },
                        "properties": {
                            "title": "Bench",
                            "icon": "star",
                            "marker-color": "red",     // doesn't work
                            "marker-size": "large"      // doesn't work
                            // https://www.mapbox.com/help/markers-js/
                        }
                    },


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
                    },
*/
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

                    // Twinefields
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.0911, 42.0342]
                        },
                        "properties": {
                            "title": "Twinefields",
                            "icon": ""
                            // https://www.mapbox.com/help/markers-js/
                        }
                    },


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
/*
                    ,

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
                    */

                ]
            }
        },
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
    // Parking at Twinefields
    //
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


} // end of function 