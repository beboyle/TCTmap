function showSpecialFeatures() {


    // https://gis.stackexchange.com/questions/219241/list-of-available-marker-symbols
    //
    // add special points of interest and landmarks
    //

    //
    // RESTAURANTS
    //
    map.addLayer({
        "id": "food/bev",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": 
                {
                "type": "FeatureCollection",
                "features": [

                    // Montano's
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.09572, 42.04550]
                        },
                        "properties": {
                            "title": "Montano's",
                            "icon": "restaurant"
                        }
                    },
                    // Terra Luna
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.09401, 42.03978]
                        },
                        "properties": {
                            "title": "Terra Luna",
                            "icon": "restaurant"
                        }
                    },
                    // Captain's Choice
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.08461, 42.03431]
                        },
                        "properties": {
                            "title": "Captain's Choice",
                            "icon": "restaurant"
                        }
                    },
                    // Chequessett Chocolate
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.08383, 42.03478]
                        },
                        "properties": {
                            "title": "Chequessett Chocolate",
                            "icon": "cafe" // coffee cup
                        }
                    },

                    // Blackfish
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.05052, 41.99568]
                        },
                        "properties": {
                            "title": "Blackfish",
                            "icon": "restaurant"
                        }
                    },
                    // Savory
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.07227, 42.01720]
                        },
                        "properties": {
                            "title": "Savory/Sweet Escapes",
                            "icon": "restaurant"
                        }
                    },

                    // Whitman House Restaurant & Bass Tavern   
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.07296, 42.01555]
                        },
                        "properties": {
                            "title": "Whitman House Restaurant & Bass Tavern",
                            "icon": "restaurant"
                        }
                    },

                    // Vineyard
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.07833, 42.03013]
                        },
                        "properties": {
                            "title": "Truro Vineyards",
                            "icon": "alcohol-shop"
                        }
                    },

                    // Salty Market
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.08502, 42.03405]
                        },
                        "properties": {
                            "title": "Salty Market",
                            "icon": "grocery" // shopping cart
                        }
                    },
                    // Jams 
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.05011, 41.99332]
                        },
                        "properties": {
                            "title": "Jams ",
                            "icon": "grocery"
                        }
                    },

                    // Bus 
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.05001, 41.99344]
                        },
                        "properties": {
                            "title": "Bus",
                            "icon": "bus"
                        }
                    }


                ]
            }
        },

        "minzoom": 15,
        //"maxzoom": 22,

        "layout": {
            "icon-image": "{icon}-15",
            "icon-size": 1.5,

            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top",
            "text-size": 10
        }
        
    });

    //
    // BEACHES
    //
    map.addLayer({
        "id": "beaches",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": 
                {
                "type": "FeatureCollection",
                "features": [
                    // BAY SIDE 
                    // Ryder
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.07713, 41.96244]
                        },
                        "properties": {
                            "title": "Ryder Beach",
                            "icon": "swimming"
                        }
                    },
                    // Fisher
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.07890, 41.98955]
                        },
                        "properties": {
                            "title": "Fisher Beach",
                            "icon": "swimming"
                        }
                    },
                    // Corn Hill 
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.08085, 42.00022]
                        },
                        "properties": {
                            "title": "Corn Hill Beach",
                            "icon": "swimming"
                        }
                    },
                    // Great Hollow 
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.08341, 42.00998]
                        },
                        "properties": {
                            "title": "Great Hollow Beach",
                            "icon": "swimming"
                        }
                    },
                    // Cold Storage 
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.09416, 42.03082]
                        },
                        "properties": {
                            "title": "Cold Storage Beach",
                            "icon": "swimming"
                        }
                    },

                    // OCEANSIDE 


                    // Ballston 
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.02065, 42.00029]
                        },
                        "properties": {
                            "title": "Ballston Beach",
                            "icon": "swimming"
                        }
                    },
                    // Longnook 
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.03726, 42.02045]
                        },
                        "properties": {
                            "title": "Longnook Beach",
                            "icon": "swimming"
                        }
                    },
                    // Head of the Meadow 
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.07888, 42.05251]
                        },
                        "properties": {
                            "title": "Head of the Meadow  Beach",
                            "icon": "swimming"
                        }
                    },

                    // High Head 
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.11080, 42.06581]
                        },
                        "properties": {
                            "title": "High Head Beach",
                            "icon": "swimming"
                        }
                    }

                ]
            }
        },

        "minzoom": 12,
        //"maxzoom": 21,

        "layout": {
            "icon-image": "{icon}-15",
            "icon-size": 1.5,

            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top",
            "text-size": 10
        }
    });


    //
    // http://trurochamberofcommerce.com/what-to-do.php
    //

    map.addLayer({
        "id": "landmarks",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": 
                {
                "type": "FeatureCollection",
                "features": [

                    // Corn Hill flag
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.0794, 42.0014]
                        },
                        "properties": {
                            "title": "Corn Hill Monument",
                            "icon": "monument"
                        }
                    },

                    // Truro Veterans Memorial
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.05155, 41.9946]
                        },
                        "properties": {
                            "title": "Veterans Memorial",
                            "icon": "monument"
                        }
                    },

                    // Pamet Park
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.0510, 41.9940]
                        },
                        "properties": {
                            "title": "Pamet Park",
                            "icon": "park"
                        }
                    },

                    // Osrey pole
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.06852, 41.99777]
                        },
                        "properties": {
                            "title": "Osprey Pole",
                            "icon": "bar"
                        }
                    },

                    // Ptown water
                    // TOWN OF PROVINCETOWN FOR PUBLIC WATER SUPPLY
                    // key 6577  247 OLD KINGS HWY    040-170
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.06392, 42.0215]
                        },
                        "properties": {
                            "title": "Ptown Public Water Supply",
                            "icon": "marker"
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
        }
        
    });


    map.addLayer({
        "id": "TownBldgs",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": 
                {
                "type": "FeatureCollection",
                "features": [

                    // Pamet Harbor
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.0727,41.991]
                        },
                        "properties": {
                            "title": "Pamet Harbor",
                            "icon": "harbor"
                        }
                    },

                    // Library
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.08660, 42.03763]
                        },
                        "properties": {
                            "title": "Library",
                            "icon": "library"
                        }
                    },

                    // Community Center
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.08565, 42.03718]
                        },
                        "properties": {
                            "title": "Community Center",
                            "icon": "star"
                        }
                    },

                    // Puma Park
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.08568, 42.03679]
                        },
                        "properties": {
                            "title": "Puma PARK",
                            "icon": "playground"
                        }
                    },

                    // Town Hall
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.05616, 41.998513]
                        },
                        "properties": {
                            "title": "Town Hall",
                            "icon": "town-hall"
                        }
                    },

                    // Transfer Station
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.04287, 41.98402]
                        },
                        "properties": {
                            "title": "Transfer Station",
                            "icon": "shop"
                        }
                    },

                    // Fire/Rescue Station
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.07442, 42.02240]
                        },
                        "properties": {
                            "title": "Fire/Rescue",
                            "icon": "fire-station"
                        }
                    },

                    // Police Station
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.07407, 42.0219]
                        },
                        "properties": {
                            "title": "Police",
                            "icon": "police"
                        }
                    },

                    // Beach Office
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.08221, 42.03252]
                        },
                        "properties": {
                            "title": "Beach Office",
                            "icon": "swimming"
                        }
                    },

                     
                    // Truro Post Office
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.050535, 41.99352]
                        },
                        "properties": {
                            "title": "PO 02666",
                            "icon": "post"
                        }
                    },

                    // N Truro Post Office
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.08371, 42.03415]
                        },
                        "properties": {
                            "title": "PO 02652",
                            "icon": "post"
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
        }
    });




    //
    // add special points of interest and landmarks
    //
    map.addLayer({
        "id": "specialPointsLarge",
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
                            "coordinates": [-70.03, 41.99]
                        },
                        "properties": {
                            "title": "Cape Cod National Seashore",
                            "icon": "camp"
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.095, 42.054]
                        },
                        "properties": {
                            "title": "Cape Cod National Seashore",
                            "icon": "camp",
                            "maxzoom": 12
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.1, 42.0]
                        },
                        "properties": {
                            "title": "Cape Cod Bay",
                            //"icon": "camp",
                            "minzoom": 11.5
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.03, 42.03]
                        },
                        "properties": {
                            "title": "Atlantic Ocean",
                            //"icon": "camp",
                            "minzoom": 11.5
                        }
                    },

                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.16, 42.07]
                        },
                        "properties": {
                            "title": "Provincetown",
                            //"icon": "camp",
                            "minzoom": 11.5
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.035, 41.96]
                        },
                        "properties": {
                            "title": "Wellfleet",
                            //"icon": "camp",
                            "minzoom": 11.5
                        }
                    },


                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.08522, 42.02375]
                        },
                        "properties": {
                            "title": "FG",
                            // Fred Gaechter
                            "icon": "star",
                            "minzoom": 11.5
                        }
                    },

                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.08522, 42.02375]
                        },
                        "properties": {
                            "title": "FG",
                            // Fred Gaechter
                            "icon": "star",
                            "minzoom": 11.5
                        }
                    },

                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.09383, 42.04153]
                        },
                        "properties": {
                            "title": "AG",
                            // Ave Gaffney
                            "icon": "star",
                            "minzoom": 11.5
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.09022, 42.02642]
                        },
                        "properties": {
                            "title": "IR",
                            // Irma Ruckstuhl
                            "icon": "star",
                            "minzoom": 11.5
                        }
                    },

                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.09402, 42.04096]
                        },
                        "properties": {
                            "title": "MK",
                            // Michael Kaelberer
                            "icon": "star",
                            "minzoom": 9
                        }
                    },


                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.09541, 42.04166]
                        },
                        "properties": {
                            "title": "MR",
                            // Meg Royka
                            "icon": "star",
                            "minzoom": 11.5
                        }
                    },

                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.06278, 41.99002]
                        },
                        "properties": {
                            "title": "EB",
                            // Eric Bingham
                            "icon": "star",
                            "minzoom": 11.5
                        }
                    },

                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.07172, 42.00048]
                        },
                        "properties": {
                            "title": "BD",
                            // Bob Daglio
                            "icon": "star",
                            "minzoom": 11.5
                        }
                    },


                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.08021, 42.01123]
                        },
                        "properties": {
                            "title": "TB",
                            // Tom Bow
                            "icon": "star",
                            "minzoom": 11.5
                        }
                    },

                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.07226, 41.99850]
                        },
                        "properties": {
                            "title": "CB",
                            // Carl Brotman
                            "icon": "star",
                            "minzoom": 11.5
                        }
                    },


                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.07706, 41.99845]
                        },
                        "properties": {
                            "title": "BB",
                            // Brian Boyle
                            "icon": "star",
                            "minzoom": 11.5
                        }
                    },

                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.04280, 42.00375]
                        },
                        "properties": {
                            "title": "JK",
                            // Jean Krulic
                            "icon": "star",
                            "minzoom": 11.5
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.04426, 41.99240]
                        },
                        "properties": {
                            "title": "AS",
                            // Andy Snow
                            "icon": "star",
                            "minzoom": 11.5
                        }
                    },

                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-70.04250, 42.00330]
                        },
                        "properties": {
                            "title": "PW",
                            // Paul Wisotzky
                            "icon": "star",
                            "minzoom": 11.5
                        }
                    },




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
        }
        
    });



}
