
function loadSettings() {





	globals.params.zoomOnSearch = 18;  // zoom level upon flying to a searched parcel
	globals.params.flyPostProcess = false;   // true if you want to see coordinates after flying to a parcel

	globals.params.boundSW = [-70.2, 41.75];  // Southwest coordinate of bound
	globals.params.boundNE = [-69.9, 42.25];  // Northeast coordinate
    bounds = [
        globals.params.boundSW,  // Southwest coordinates
        globals.params.boundNE   // Northeast coordinates
    ];
    // https://www.mapbox.com/mapbox-gl-js/example/restrict-bounds/
	

	globals.params.legend.bottom = 105;   // px
	globals.params.legend.left = 10;    // px

	globals.params.legendName = {};
	globals.params.legendName["C"] = "TCT Owned";
	globals.params.legendName["c"] = "TCT CR";
	globals.params.legendName["g"] = "Cemetary";
	globals.params.legendName["t"] = "Town of Truro";
	globals.params.legendName["T"] = "Town of Truro";
 	globals.params.legendName["p"] = "TCT prospect";
 	globals.params.legendName["a"] = "TCT active";

	// where legend of statuses is placed on the map
	globals.params.legend.bottom = 120;   // px
	globals.params.legend.left = 10;    // px


	// where legend of teams is placed on the map
	globals.params.teams.bottom = 200;   // px
	globals.params.teams.left = 10;    // px
	globals.params.teams.count = false;  // show the count of parcels by team in the legend

	globals.params.status.list = "Ccapr";  // list of statuses for TCT parcels to map

	// the statuses that will show the parcel's label (unless specified otherwise)
	globals.params.status.labelsDefault ="CcaptT";
	globals.params.status.union = "Ccap";  // list of statuses for TCT parcels to group/cluster/union

    // also include town land in looking at adjacent parcels?
    globals.params.includeTownLand = true;

    globals.params.unions = false;  // false if not creating clusters, 
    globals.params.unions = 6;		// otherwise the width of outline

	globals.params.console.log  = false;	// quiet the console for .log level
	globals.params.console.warn = false;	// quiet the console for .log level

	globals.params.trailWidth = 3; // width of line depicting a trail

	// TURN THIS INTO A THEME CODE AND DRIVE OFF OF THAT

	globals.params.legendShortForm = false; // legend is short form

	if (globals.params.legendShortForm) {
	    globals.params.legendStatuses = ["C", "t", "a"]; // legends to display
	}
	else {
	    globals.params.legendStatuses = ["C", "c", "t"]; // legends to display    
	}


    // colors for shading different parcels based on status
	globals.params.status.colors = [ 
					// TCT
	                ['p', '#00f'],
	                ['a', '#909'], 
	                //['C', '#f00'], 

                    //['C', '#0f0'], 
                    ['C', '#9f9'], 

	                ['c', '#f0f'], 
	                // town
	                ['t', '#FFFF00'],    // FFA500 = orange
	                ['T', '#FFFF00'],    // FFA500 = orange
                    //['T', '#EFE'],    // FFA500 = orange

	                ['s', '#f6f'], 	// town held CR
	                // other
	                ['g', '#FFA500'],    // graveyard  
	                ['r', '#cff'],       // resident  
	                ['x', '#999']  
	                ];

	// these colors make CRs the same as TCT owned land
	if (globals.params.legendShortForm) {
	    globals.params.status.colors = [ 
	                ['p', '#00f'],
	                ['a', '#909'], 
	                ['C', '#0f0'], 
	                ['c', '#0f0'], 
	                ['t', '#FFFF00'],    // FFA500 = orange
	                ['T', '#FFFF00'],    // FFA500 = orange
                    //['T', '#00FF00'],    // FFA500 = orange

	                ['s', '#FFCC00'], 	 // town held CR
	                ['g', '#FFA500'],    // graveyard
	                ['r', '#cff'],       // resident  
	                ['x', '#999']  
	                ];
	}

    globals.params.status.opacityAdder = .15;
    var opacityAdder = globals.params.status.opacityAdder;

    globals.params.status.opacities = [ 
                    ['p', .05+opacityAdder/2],
                    ['a', .35+opacityAdder/2],
                    //['C', .15+opacityAdder/2],
                    ['C', .4],

                    ['s', .15+opacityAdder/2],
                    ['c', .15+opacityAdder/2],
                    ['t', .15+opacityAdder/2],
                    ['T', .5],

                    ['g', .25+opacityAdder/2],
                    ['r', .20+opacityAdder/2],
                    ['x', .20+opacityAdder]
                    ];

    // these  make CRs the same as TCT owned land
    if (globals.params.legendShortForm) {
        globals.params.status.opacities = [ 
                    ['p', .05+opacityAdder/2],
                    ['a', .35+opacityAdder*2],
                    ['C', .25+opacityAdder],
                    ['s', .15+opacityAdder/2],
                    ['c', .15+opacityAdder],
                    ['t', .25+opacityAdder],
                    ['T', .5],

                    ['g', .25+opacityAdder/2],
                    ['r', .20+opacityAdder/2],
                    ['x', .20+opacityAdder]
                    ];
    }

    globals.params.status.lines = [ 
                    ['p', 1],
                    ['a', 1], 
                    //['C', 1], 
                    ['C', 0], 

                    ['s', 1], 

                    ['c', 1], 
                    ['t', 2], 
                    ['T', 4], 
                    ['g', 1], 
                    ['r', 1], 
                    ['x', 1]  
                    ];

    console.warn("globals.params.status.opacities",globals.params.status.opacities);





    globals.params.team = {};  // feature property: status attributes 

    globals.params.team.colors = { 
                    'A': '#00a',
                    'B': '#0d0', 
                    'C': '#0dd', 
                    'D': '#80a',  
                    '?': '#999'  
                    };

    globals.params.team.opacity = { 
                    'A': .1,
                    'B': .1, 
                    'C': .15, 
                    'D': .1,  
                    '?': .2
                    };
    globals.params.team.left = 500;

    // to show the coords count column on reports
    globals.params.numCoords = false;  

    // to show the asessed column on reports
    globals.params.assessed = true; 

    // to show the drone column on reports
    globals.params.drone = false; 

    customizeSettings();  // calls a separate function to customize any setting
}

function customizeSettings() {
    console.log("globals.params.status",globals.params.status);

}



function processParameters() {


    globals.params.showLPF = getParameter("lpf");
    if (globals.params.showLPF=="1") {
        globals.params.showLPF = true;
        LPFparcelsLen = LPFparcels.length;  // number of parcels
    }
    else {
        globals.params.showLPF = false;
        LPFparcelsLen = 0;  // number of parcels
    }
    console.info("getParameter globals.params.showLPF=",globals.params.showLPF,LPFparcelsLen)
    var LPFlabels = {};

    //
    // when clicking on a point, show nearby coordinates to allow for aligning abutting polygons
    //
    globals.params.near = getParameter("near");
    if (globals.params.near!="0") {
        globals.params.near = Number(globals.params.near);
    }
    else {
        globals.params.near = false;
    }
    console.info("getParameter globals.params.near=",globals.params.near)

    //
    // when clicking on a point, show nearby coordinates to allow for aligning abutting polygons
    //
    globals.params.dev = false;
    var params = getParameter("dev");
    if (params=="1") {
        globals.params.dev = true;
    }
    console.info("getParameter globals.params.dev=",globals.params.dev)

    //
    // places for precision for reporting coordinates
    //
    globals.params.precision = getParameter("pre");
    if (!globals.params.precision) {
        globals.params.precision = 5;
    }
    console.info("getParameter globals.params.precision=",globals.params.precision)

    var params = getParameter("team");
    if (params.length>0) {
        globals.params.teams.list = params.toUpperCase() ;
    }
    else {
        globals.params.teams.list = "";
    }
    console.info("getParameter globals.params.teams.list = ",params,globals.params.teams.list);


    globals.params.teams.left = getParameter("tl");
    if (globals.params.teams.left.length>0) {
        //globals.params.teams.left = 10;    
    }
    else {
        globals.params.teams.left = 10;
    }
    //alert(globals.params.teams.left);

    globals.params.teams.highlight = getParameter("h");
    if (globals.params.teams.highlight=="1") {
        globals.params.teams.highlight = true;  // true if highlighting team territories
    }
    else {
        globals.params.teams.highlight = false;
    }
    //alert(globals.params.teams.highlight);


    // width of the cluster group outline
    // this overrides the default setting
    var params = getParameter("u");
		console.log("globals.params.unions get",params);
    if (params==="0") {
        globals.params.unions = false;  // false if not creating clusters
    }
    else if (params) {
        globals.params.unions = Number(params);
    }

    var params = getParameter("sl");
    if (!params) {
        globals.params.status.labels = globals.params.status.labelsDefault;
    }
    else {
        globals.params.status.labels = params;
    }
    //console.log("labels463",globals.params.status.labels,globals.params.status.labelsDefault);
    statusLabels = globals.params.status.labels;


    //helpText += "xy= display x,y screen position and dimensions<br>";
    var params = getParameter("xy");
    if (params=='1') {
        toggleDiv("coordinatesIdXY");
    }

    // status codes to plot parcels
    globals.params.status.labelsDefault = "Ccapr";
    var params = getParameter("st");
    if (!params) {
        globals.params.status.list = globals.params.status.labelsDefault;
    }
    else {
        globals.params.status.list = params;
    }


	//globals.params.status.union = "Ccap";  // list of statuses for TCT parcels to group/cluster/union
    var params = getParameter("su");
    if (params) {
        globals.params.status.union = params;
    }
    	console.log("globals.params.status.union",globals.params.status.union);


    //
    // TCT # to search to
    //
    globals.params.search = getParameter("s");
    console.info("getParameter globals.params.search=",globals.params.search)
    //if (globals.params.search) alert("seaching for TCT "+globals.params.search);


}


function switchStyles() {

	// https://github.com/el/style-switcher/blob/master/dist/index.js
	MapboxStyleSwitcherControl.DEFAULT_STYLE = "Streets";
	MapboxStyleSwitcherControl.DEFAULT_STYLES = [
	    { title: "Dark", uri: "mapbox://styles/mapbox/dark-v9" },
	    { title: "Light", uri: "mapbox://styles/mapbox/light-v9" },
	    { title: "Outdoors", uri: "mapbox://styles/mapbox/outdoors-v10" },
	    { title: "Satellite", uri: "mapbox://styles/mapbox/satellite-streets-v10" },
	    { title: "Streets", uri: "mapbox://styles/mapbox/streets-v10" }
	];

}
