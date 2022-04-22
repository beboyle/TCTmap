function launchSlideshowNY() {
    // https://www.google.com/search?q=icon+slideshow&ie=UTF-8&oe=UTF-8&hl=en-us&client=safari#imgdii=NvccYwcRG1E31M:&imgrc=RuJj5ds4IrHdjM:

    openInNewTab("slideshow.html","_slideshow");
}
function openInNewTab(url, tabName) {
  if (tabName===undefined) tabName='_blank';
  var win = window.open(url, tabName);
  win.focus();
}
function launchSlideshowTruro() {

    // https://www.google.com/search?q=icon+slideshow&ie=UTF-8&oe=UTF-8&hl=en-us&client=safari#imgdii=NvccYwcRG1E31M:&imgrc=RuJj5ds4IrHdjM:

    console.log("Truro slideshow begins...");

    var secondsPerSlide = 5;
    //
    // array of location objects
    //
    var locations = [


    {
        "id": "intro",
        "title": "Welcome!",
        "titleCoords": [-70.067,42],
        "showTitleAtCoords": false,
        "description": "You are about to take our short tour.<br>We will show you four of our conservation properties that you can visit yourself.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "camera": {
            center: [-70.067,42.01],
            bearing: -20,
            zoom: 12.1,
            pitch: 10,
            // These options control the flight curve, making it move
            // slowly and zoom out almost completely before starting
            // to pan.
            speed: 0.2, // make the flying slow
            //curve: 1, // change the speed at which it zooms out
            curve: 1.5, // change the speed at which it zooms out

            // This can be any easing function: it takes a number between
            // 0 and 1 and returns another number between 0 and 1.
            easing: function (t) {
                return t;
            }
        }
    },


    {
        "id": "1",
        "title": "Dalsheimer",
        "titleCoords": [-70.0765, 41.991],
        "description": "Take Old Country Rd to Fisher Rd to Great Hills Rd.<br><hr>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "camera": {
            center: [-70.07630, 41.98925],
            bearing: -10,
            zoom: 17.0,
            pitch: 45,
            // These options control the flight curve, making it move
            // slowly and zoom out almost completely before starting
            // to pan.
            speed: 0.2, // make the flying slow
            //curve: 1, // change the speed at which it zooms out
            curve: 1.5, // change the speed at which it zooms out

            // This can be any easing function: it takes a number between
            // 0 and 1 and returns another number between 0 and 1.
            easing: function (t) {
                return t;
            }
        },
        "images": [
          "images/Dalsheimer/DSC_0032.JPG",
          "images/Dalsheimer/DSC_0034.JPG",
          "images/Dalsheimer/DSC_0032.JPG"
        ]
    }, 

    {
        "id": "2",
        "title": "Poor's Hill",
        "titleCoords": [-70.0725, 41.98525],
        "description": "Take Old Country Rd to Fisher Rd to Salt Marsh Ln.<br><hr>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "camera": {
            center: [-70.07265, 41.985],
            zoom: 17.75,
            pitch: 45,
            bearing: -10,
            // These options control the flight curve, making it move
            // slowly and zoom out almost completely before starting
            // to pan.
            speed: 0.2, // make the flying slow
            //curve: 1, // change the speed at which it zooms out
            curve: .5, // change the speed at which it zooms out

            // This can be any easing function: it takes a number between
            // 0 and 1 and returns another number between 0 and 1.
            easing: function (t) {
              return t * (2 - t);   // https://www.mapbox.com/mapbox-gl-js/example/game-controls/
            }
            // https://www.mapbox.com/mapbox-gl-js/example/flyto-options/
        },
        "images": [
          "images/PoorsHill/DSCN08591-186x186.jpg"
        ]
    }, 

    {
        "id": "3",
        "title": "Edgewood",
        "titleCoords": [-70.0425, 41.991],
        "description": "Off Rt 6.<br><hr>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "camera": {
            center: [-70.045, 41.9895],
            bearing: 55,
            zoom: 16.6,
            pitch: 45,
            // These options control the flight curve, making it move
            // slowly and zoom out almost completely before starting
            // to pan.
            speed: 0.2, // make the flying slow
            //curve: 1, // change the speed at which it zooms out
            curve: 1.5, // change the speed at which it zooms out
            // This can be any easing function: it takes a number between
            // 0 and 1 and returns another number between 0 and 1.
            easing: function (t) {
                return t;
            }
        },
        "images": [
          "images/Edgewood/viewToBallston-crop.jpeg"
        ]
    }, 

    {
        "id": "4",
        "title": "Twinefields",
        "titleCoords": [-70.0905, 42.0343],
        "description": "Take Pond Rd to Pond Village Ave.<br><hr>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "camera": {
            center: [-70.09117, 42.03383],
            bearing: 45,
            zoom: 17,
            pitch: 45,
            // These options control the flight curve, making it move
            // slowly and zoom out almost completely before starting
            // to pan.
            speed: 0.2, // make the flying slow
            //curve: 1, // change the speed at which it zooms out
            curve: 1.5, // change the speed at which it zooms out

            // This can be any easing function: it takes a number between
            // 0 and 1 and returns another number between 0 and 1.
            easing: function (t) {
                return t;
            }
        },
        "images": [
          "images/Twinefields/DSCN1280-186x186.jpg"
        ]
    },

    {
        "id": "last",
        "title": "Thank you!",
        "titleCoords": [-70.067,42],
        "showTitleAtCoords": false,
        "description": "Thank you for taking our tour.<br><hr>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "camera": {
            center: [-70.067,42.01],
            bearing: -20,
            zoom: 12.1,
            pitch: 10,
            // These options control the flight curve, making it move
            // slowly and zoom out almost completely before starting
            // to pan.
            speed: 0.2, // make the flying slow
            //curve: 1, // change the speed at which it zooms out
            curve: 1.5, // change the speed at which it zooms out

            // This can be any easing function: it takes a number between
            // 0 and 1 and returns another number between 0 and 1.
            easing: function (t) {
                return t;
            }
        }
    }

    ];

    var frames = [];
    var frameObj = {};

    frameObj = {
        "position": "1",    // relative position in the video
        "type":"title",
        "seconds":5,
        "content":"Welcome to the Truro Conservation Trust"
    };

    frames.push(frameObj);

    // then take all the frame objects and order them.
    // then compute how many seconds to when they start
    // this is used at each frameCount to decide what frame object to show

    // each frameObj can start when 
    //  previous one ends,
    //  x seconds after previous one starts
    //  or at an absolute timeFromBeginning time marker



        console.log("launch frames",frames);

        console.log("launch locations",locations);

    toggleDiv("map-overlay-container");
    toggleDiv("gameKeyHelp",false);
    toggleDiv("legend",false);
    toggleDiv("teams",false);
    toggleDiv("coordinatesIdClicked",false);  // turn off clicked and screen coords
    toggleDiv("coordinatesIdXY",false);  // turn off clicked and screen coords
    toggleDiv("coordinatesIdCursor",false);  // turn off mouse coords

    toggleDiv("menuIcons",false);  // turn off menu icons


    // turn off some layers to speed performance in rendering: 
    toggleLayer("contours",false);
    toggleLayer("food/bev",false);
    toggleLayersWildcard("TCT-team*",false);
    toggleLayersWildcard("group*",false);
    toggleLayersWildcard("national*",false);
    toggleLayersWildcard("hillshad*",false);
    toggleLayersWildcard("grid*",false);
    toggleLayersWildcard("TCT-label*",false);

    if (1==1) {
        playback(locations,0,secondsPerSlide);
    }
    else {
        var frameRateSeconds = 5;
        var frameTotalCount = 20;
        var durationSeconds = frameRateSeconds * frameTotalCount;
        playFrames(locations,frames,frameRateSeconds,frameTotalCount);
    }

}

function playFrames(locations,frames,frameRateSeconds,frameTotalCount,frameCount,stopwatch) {
    var waypoint;
    if (frameCount===undefined) frameCount=0;
    if (stopwatch ===undefined) stopwatch=0;
    var durationSeconds = frameRateSeconds * frameTotalCount;

    waypoint =  {
        center: [-70.05616, 41.998513],  // Town Hall
        zoom: 12,
        //bearing: 0,
        //pitch: 0,
        speed: 0.2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
        curve: 1.5, // change the speed at which it zooms out
        // This can be any easing function: it takes a number between
        // 0 and 1 and returns another number between 0 and 1.
        easing: function (t) {
            return t;
        }


    };    

    //alert("playFrames "+frameRateSeconds);
    var myTimeout = window.setTimeout(function() {

        stopwatch += frameRateSeconds;
        frameCount++;
        console.log("playFrames frameRateSeconds",frameRateSeconds,"durationSeconds",durationSeconds,"frameCount",frameCount,"stopwatch",stopwatch);

        if (stopwatch<durationSeconds) {
                  //console.log("playback again index",index,slides);
                  //console.log("playback myTimeout ending");

            switch(frameCount) {
                case 1:
                    console.log("playFrames case",frameCount);
                    flyVia(waypoint, locations[0].camera);

                    break;

                case 6:
                    flyVia(waypoint, locations[2].camera);

                    break;

                case 12:
                    console.log("playFrames case",frameCount);
                    flyVia(waypoint,locations[3].camera);

                    //map.flyTo(locations[3].camera);

                    break;

                // last frame calls this wrapup function
                case frameTotalCount:

                    slideshowWrapup();
                    break;

                default:
                    //
            }

            //playFrames(locations,frameRateSeconds,frameCount,stopwatch)
            playFrames(locations,frames,frameRateSeconds,frameTotalCount,frameCount,stopwatch);

        }
        else {
          clearTimeout(myTimeout);
          console.log("playFrames clearTimeout");
          //slideshowWrapup();
        }



    }, frameRateSeconds*1000); // After callback, show the location for 3 seconds.

}

//
// fly via a waypoint to a 2nd point
//
function flyVia(viaCamera, toCamera) {

    var current = {};
    current.bearing = map.getBearing();
    current.pitch   = map.getPitch();
    // these are not available it seems
    //current.curve   = map.getCurve();
    //current.speed   = map.getSpeed();

    if (viaCamera.bearing===undefined && toCamera.bearing!=undefined ) {
        viaCamera.bearing = (current.bearing+toCamera.bearing)/2;
    }
    if (viaCamera.pitch===undefined && toCamera.pitch!=undefined ) {
        viaCamera.pitch = (current.pitch+toCamera.pitch)/2;
    }
    /*
    if (viaCamera.curve===undefined && toCamera.curve!=undefined ) {
        viaCamera.curve = (current.curve+toCamera.curve)/2;
    }
    if (viaCamera.speed===undefined && toCamera.speed!=undefined ) {
        viaCamera.speed = (current.speed+toCamera.speed)/2;
    }
    */
    if (toCamera.curve!=undefined ) {
        viaCamera.curve = toCamera.curve;
    }
    if (toCamera.speed!=undefined ) {
        viaCamera.speed = toCamera.speed;
    }
    console.log("playFrames start of flyVia",viaCamera);

    map.flyTo( viaCamera );
    updateFlying(true);
    map.once('moveend', function() {                
        updateFlying(false);
        map.flyTo( toCamera );
        updateFlying(true);
        map.once('moveend', function() {                
            updateFlying(false);
            console.log("playFrames end of flyVia",toCamera);
        });
    });
}

function updateFlying(newStatus) {
    globals.state.flying = newStatus;
    displayZoom();
}


function flyWaypoints(waypointsArray) {



}

function playback(locations, index, seconds) {
  console.log("playback",index,locations[index]);

    if (seconds===undefined) seconds = 3;
    var msec = seconds*1000;

    var slides = 5;
    var loc_title = document.getElementById('location-title');
    var loc_description = document.getElementById('location-description');
    var loc_images = document.getElementById('location-images');

    loc_title.innerHTML = locations[index].title;
    loc_description.innerHTML = locations[index].description;
    displayImages(locations,index,loc_images);

    //highlightBorough(locations[index].id ? locations[index].id : '');
    highlightLocation(locations,index);

    // Animate the map position based on camera properties
    map.flyTo(locations[index].camera);
                //map.jumpTo(locations[index].camera.center);
    updateFlying(true);
    // wait for the flyTo to end, then start the next timer and flyTo next location
    map.once('moveend', function() {
            console.log("playback moveend");
        updateFlying(false);
        // duration the slide is on screen after interaction
        var myTimeout = window.setTimeout(function() {
            console.log("playback myTimeout starting");

            // increment index
            //index = (index + 1 === locations.length) ? 0 : index + 1;
            index = index + 1;

            if (index<locations.length && index<slides) {
                      console.log("playback again index",index,slides);
                      console.log("playback myTimeout ending");
              playback(locations, index, seconds);
            }
            else {
              clearTimeout(myTimeout);
              console.log("playback clearTimeout");
              slideshowWrapup();
            }
        }, msec); // After callback, show the location for 3 seconds.
    });
}

//
// post slideshow locations wrapup
//
function slideshowWrapup() {
    //flyingToCoord(map,[-70.067,42],13);
    toggleDiv("map-overlay-container",false);
    toggleLayersWildcard("TCT-label*",true);
    toggleDiv("menuIcons",true);  // turn on menu icons

}

function highlightLocation(locations,index) {
    var title = locations[index].title;
    var center = locations[index].camera.center;
    var coords = locations[index].titleCoords;
    var show = locations[index].showTitleAtCoords;
    if (show || show===undefined) {
          console.log("highlightLocation",title,coords);
        map.addLayer({
            "id": "slideshow_"+title+"~"+getMsec(),
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
                            "title": title,
                        }
                    }
                    ]
                }
            },
            'paint': {
                'text-color': '#888',
                'text-opacity': 0.9
            },
            "layout": {
                //"icon-image": "{icon}-15",
                "text-field": "{title}",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, -0.5],
                'text-size': 32,
                "text-anchor": "top"
            }
            // https://www.mapbox.com/mapbox-gl-js/style-spec/#layers

        });
    }

}
/*
function highlightBorough(code) {
    // Only show the polygon feature that cooresponds to `borocode` in the data
    map.setFilter('highlight', ["==", "borocode", code]);
}
*/

function displayImages(locations,index,imageDiv) {
  var imageArray = locations[index].images;
  if (imageArray===undefined) {
    imageDiv.innerHTML = "";
    return;
  }
  for (var i=0;i<imageArray.length;i++) {
    imageDiv.innerHTML = "<img src='"+imageArray[i]+"' width='200'>";
    // https://www.w3schools.com/tags/tag_img.asp
  }
}

function slideshowOver() {
    toggleLayersWildcard("TCT-label*",true);
}

