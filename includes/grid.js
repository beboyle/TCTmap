function displayGrid(coord)  {
	var x= coord[0];
	var y= coord[1];
	var delta=.00001;
		console.log("drawing0",x,y);

var msec= getMsec();


	var i,j,x0,x1,y0,y1,id;
	for (i=-5;i<=5;i++) {

		x0 = roundCoord(x+i*delta);
		x1 = x0;
		y0 = roundCoord(y+5*delta);
		y1 = roundCoord(y-5*delta);
		id = "i"+i+"_"+msec;

		var z5 = isMod(x0,5*delta);
				var z10 = isMod(x0,10*delta);

						var lineW = 1;
					if (z5) lineW=2;

		if (z10) lineW=4;

		console.log("drawing1",x0,y0,x1,y1,z5,z10);
		drawLines(id,x0,y0,x1,y1,"#00a",lineW);

	}
	for (j=-5;j<=5;j++) {


		y0 = roundCoord(y+j*delta);
		y1 = y0;
		x0 = roundCoord(x+5*delta);
		x1 = roundCoord(x-5*delta);
		id = "j"+j+"_"+msec;


		var z5 = isMod(y0,5*delta);
				var z10 = isMod(y0,10*delta);

		var lineW = 1;
				if (z5) lineW=2;

		if (z10) lineW=4;

		console.log("drawing2",x0,y0,x1,y1,z5,z10);
		drawLines(id,x0,y0,x1,y1,"#333",lineW);


	}



}

function drawLines(id,x0,y0,x1,y1,lineColor,lineWidth) {




 	console.log("drawLines",id,x0,y0,x1,y1,lineColor,lineWidth);

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
                    "coordinates": [
                        [x0, y0],  // Chaplin meets Kuechle trail at top
                        [x1, y1] // Chaplin meets Kuechle trail at top




                    ]
                }
            }
        },
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": lineColor,
            "line-width": lineWidth,
                        "line-opacity": .3

        }
    });

}

function roundCoord(x) {
	return Math.round(x*100000)/100000
}

function isMod(x,mod) {
	var quotient = x/mod;
	var integerx = Math.round(x/mod);
	var diff = Math.abs(quotient-integerx);
	console.log("isMod",diff);
	if (diff<mod/10) {
		return true;
	}
	else {
		return false;
	}
}
