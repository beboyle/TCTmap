//
// Make a composite key out of an array of components
// Optional delimiter (such as "_")
// Example: key = makeKey(["abc",123],"_") returns abc_123
//
function makeKey(componentsArr,delimiter) {
    var key = "";
    for (var i=0;i<componentsArr.length;i++) {
        if (typeof componentsArr[i] == "string") {
            key += componentsArr[i];
        }
        else {
            key += String(componentsArr[i]);

        }
        if (delimiter!=undefined && i<componentsArr.length-1) {
            key += delimiter
        }
    }
    console.log("makeKey:",componentsArr,key);
    return key;
}



function makeGeoJSONcircles(id,featureArray,options,map) {
	var geoJSON = {};

	geoJSON.id = id;
	geoJSON.type = "circle";
	geoJSON.source = {};
		geoJSON.source.type = "geojson";
		geoJSON.source.data = {};
			geoJSON.source.data.type = "FeatureCollection";
			geoJSON.source.data.features = featureArray;
	geoJSON.layout = {};
    	geoJSON.layout["icon-image"] = "{icon}-15";
    	geoJSON.layout["text-field"] = "{title}";
    	geoJSON.layout["text-font"] = ["Open Sans Semibold", "Arial Unicode MS Bold"];
    	geoJSON.layout["text-offset"] = [0, 0.4];
    	geoJSON.layout["text-anchor"] = "top";
    	if (options.textSize!=undefined) geoJSON.layout["text-size"] = options.textSize
    geoJSON.paint = {};
        if (options.radius!=undefined) geoJSON.paint["circle-radius"] = options.radius;
        if (options.color!=undefined) geoJSON.paint["circle-color"] = options.color;
        if (options.opacity!=undefined) geoJSON.paint["circle-opacity"] = options.opacity;

        if (options.textColor!=undefined) geoJSON.paint["text-color"] = options.textColor;
        if (options.textHaloColor!=undefined) geoJSON.paint["text-halo-color"] = options.textHaloColor;
        if (options.textHaloWidth!=undefined) geoJSON.paint["text-halo-width"] = options.textHaloWidth;

    if (options.minzoom!=undefined) geoJSON.minzoom = options.minzoom;

		console.log("makeGeoJSON",id,featureArray,geoJSON);

	// add to the map if the map is defined
	if (map!=undefined) map.addLayer(geoJSON);

	return geoJSON;
}



function makeGeoJSONtext(id,featureArray,options,map) {
	var geoJSON = {};

	geoJSON.id = id;
	geoJSON.type = "symbol";
	geoJSON.source = {};
		geoJSON.source.type = "geojson";
		geoJSON.source.data = {};
			geoJSON.source.data.type = "FeatureCollection";
			geoJSON.source.data.features = featureArray;
	geoJSON.layout = {};
    	geoJSON.layout["icon-image"] = "{icon}-15";
    	geoJSON.layout["text-field"] = "{title}";
    	geoJSON.layout["text-font"] = ["Open Sans Semibold", "Arial Unicode MS Bold"];
    	geoJSON.layout["text-offset"] = [0, 0.4];
    	geoJSON.layout["text-anchor"] = "top";
    	if (options.textSize!=undefined) geoJSON.layout["text-size"] = options.textSize
    geoJSON.paint = {};
        if (options.textColor!=undefined) geoJSON.paint["text-color"] = options.textColor;
        if (options.textHaloColor!=undefined) geoJSON.paint["text-halo-color"] = options.textHaloColor;
        if (options.textHaloWidth!=undefined) geoJSON.paint["text-halo-width"] = options.textHaloWidth;

    if (options.minzoom!=undefined) geoJSON.minzoom = options.minzoom;

		console.log("makeGeoJSON",id,featureArray,geoJSON);

	// add to the map if the map is defined
	if (map!=undefined) map.addLayer(geoJSON);

	return geoJSON;
}

//
// add feature information to an existing featureArray
//
function pushTextFeature(featureArray,coords,text,icon) {
	//coords[0] += .0001;
	var feature = {};
    feature.type = "Feature";
    feature.geometry = {};
	    feature.geometry.type = "Point";
	    feature.geometry.coordinates = coords;
    feature.properties = {};
	    feature.properties.title = text;
	    feature.properties.icon = icon;

	featureArray.push(feature);

	return featureArray;
}


/* {
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
        
    }
*/