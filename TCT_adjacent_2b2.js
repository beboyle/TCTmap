// bridged parcels
// These are parcels that are adjacent in reality, but something is between them, like a river or a road
// Only bridge one pair of parcels per bridging
//

var bridgedParcels = [
	["TCT 4", "TCT 15",   [ [-70.06990, 42.00403],[-70.06971, 42.00405] ] ],
	["TCT 69","TCT 25",   [ [-70.07267, 42.00278],[-70.07266, 42.00266] ] ],	// double bridge
	["TCT 50","TCT 63",   [ [-70.06760, 41.99376],[-70.06763, 41.99387] ] ],
	["TCT 79a","TCT 79b", [ [-70.07507, 41.97693],[-70.07491, 41.97692] ] ],
	["TCT 10c","TCT 77",  [ [-70.06509, 41.99864],[-70.06494, 41.99864] ] ],

	["TCT 11","TCT 17",   [ [-70.06229, 41.99019],[-70.06225, 41.99018] ] ],  // 10' easement
	["TCT 47b","TCT 47a", [ [-70.05335, 41.98942],[-70.05321, 41.98940] ] ],
	["TCT 47a","TCT 47b", [ [-70.05456, 41.99141],[-70.05441, 41.99140] ] ],
	["TCT 18","TCT 43b",  [ [-70.08514, 42.02420],[-70.08525, 42.02428] ] ],
	["TCT 83c","TCT 83b", [ [-70.11432, 42.04766],[-70.11422, 42.04777] ] ],

	["TCT 013008","TCT 013019", [ [-70.11768, 42.04952],[-70.11775, 42.04939] ] ],	// beach point

	["TCT 050210","TCT 050211", [ [-70.06328, 41.99526],[-70.06318, 41.99527] ] ],	// Pamet River
	["TCT 050211","TCT 050210", [ [-70.06222, 41.99369],[-70.06214, 41.99368] ] ],	// Pamet River
	["TCT 050210","TCT 050211", [ [-70.06329, 41.99597],[-70.06259, 41.99583] ] ],	// Pamet River

	["ToT 045070","ToT 049017", [ [-70.07809, 41.99968],[-70.07807, 41.99959] ] ]	// near 42 Corn Hill Rd

];
var bridgedParcelsMapped = [];


function processClusters(clustersCount,clusters) {
	//return;
	var macros = [];
	var macrosCount = 0;
	var whichMacro;
	macros[0] = clusters[0];
	macrosCount++;
	//alert(clustersCount);

	for (var c=0; c<clustersCount; c++) {
		if (globals.params.console.log) console.log("adj macros:___________________________________");
		if (globals.params.console.log) console.log("adj macros PROCESS cluster["+c+"]",clusters[c],clusters)

		// is any member of this cluster in an existing macro?
		// and if so, which one?
		whichMacro = indexOfExistingMacros(clusters[c]);
		if (whichMacro>=0) {
			if (globals.params.console.log) console.log("adj EXISTING macros["+whichMacro+"]",macros[whichMacro]);
			macros[whichMacro] = mergeClusterIntoMacro(clusters[c],macros[whichMacro]);
			if (globals.params.console.log) console.log("adj IS NOW macros["+whichMacro+"]",macros[whichMacro]);
		}
		else {
			if (globals.params.console.log) console.log("adj NEW macros["+macrosCount+"]",macros[macrosCount],macros);			
			macros[macrosCount] = clusters[c].sort();
			macros[macrosCount] = sortByDigits(clusters[c]);
			macrosCount++;
		}
	}
	return macros;

	function mergeClusterIntoMacro(cluster,macro) {
		var mLen = macro.length;
		var cLen = cluster.length;
		var mIndex;
		for (var c=0;c<cLen;c++) {
			mIndex = macro.indexOf(cluster[c]);
			if (mIndex==-1) {
				macro.push(cluster[c]);
			}
		}
		return sortByDigits(macro);
		return macro.sort();
	}


	// looks for which macro the cluster has an element in
	// returns the index (or -1 if no match of any cluster element in any macro)
	function indexOfExistingMacros(cluster) {
		var cLen = cluster.length;
		var cElement, mIndex;
		if (globals.params.console.log) console.log("macrosCount",macrosCount);
		for (var m=0; m<macrosCount; m++) {
			//console.log("macros["+m+"]",macros[m]);

			for (i=0; i<cLen; i++) {
				cElement = cluster[i];
				mIndex = macros[m].indexOf(cElement);

				//console.log("macros["+m+"] cluster["+i+"] mIndex",mIndex);


				if (mIndex>=0) {
					/*
					//addClusterToMacro(cluster,macro[mIndex]);
					for (c=0;c<cLen;c++) {
						macros[m].push(cluster[c]);
					}
					macros[m].filter( onlyUnique );
					macros[m].sort()
					*/
					return m;  // the macro we found a match in
				}
			}

		}
		return -1;
	}
	function addClusterToMacro(cluster,macro) {
	}

}

function compare2Arrays(array1,array2) {
	var l1 = array1.length;
	var l2 = array2.length;
	if (l1!=l2) return false;  // lengths are different
	for (var i=0;i<l1;i++) {
		var li = array1[i].length;
		for (var j=0;j<li;j++) {
			if (array1[i][j]!=array2[i][j]) return false
		}
	}
	return true;
}

function getBridgedParcels(parcel,bridgedParcels) {
	if (globals.params.console.log) console.log("adj getBridgedParcels",parcel);


	//return false;	// no op

	var n = bridgedParcels.length;
	var j;
	var result;
	for (var i=0;i<n;i++) {
		j = bridgedParcels[i].indexOf(parcel);
		if (j==0) {
			//alert(parcel+" bridged to "+bridgedParcels[i][1]);
			result = bridgedParcels[i][1];
				if (globals.params.console.log) console.log("adj getBridgedParcels RESULT",result);
			return result;
		}
		else if (j==1) {
			//alert(parcel+" bridged to "+bridgedParcels[i][0]);
			result = bridgedParcels[i][0];
				if (globals.params.console.log) console.log("adj getBridgedParcels RESULT",result);
			return result;
		}
	}
	result = false;
		if (globals.params.console.log) console.log("adj getBridgedParcels result",result);
	return result;
}

function calculateAdjacency(map, parcelsArray1, parcelsArray2) {
	console.log("adj calculateAdjacency4");
    console.log("adj parcelsArray1",parcelsArray1);  // an array of parcel objects that will become features
    //var numParcels1 = parcelsArray1.length;
    //var numParcels2 = parcelsArray2.length;
    var testMode = false;
    var adjObj = {};
	var parcel = {};
	var bingo = false;
	var parcelsArray;

	// if both arrays of parcels are specified, combine them here
	if (parcelsArray2 != undefined) {

		parcelsArray = parcelsArray1;

		var numOfParcels2;
		numOfParcels2 = 15;
		numOfParcels2 = parcelsArray2.length;
		for (j2=0;j2<numOfParcels2;j2++) {
				parcelsArray.push(parcelsArray2[j2]);
		}

		//parcelsArray = parcelsArray1.concat(parcelsArray2);
	    console.log("adj parcelsArray2",parcelsArray2);  // an array of parcel objects that will become features
	}
	else {
		// if just 1 specified, use it
		parcelsArray = parcelsArray1;
	}
	var numParcels  = parcelsArray.length;
	console.log("adj parcelsArray",parcelsArray);  // an array of parcel objects that will become features


    for (var i=0;i<numParcels;i++) {
    	parcel.x = parcelsArray[i].properties.title;
		adjObj[parcel.x] = {};

		// now cycle through each parcel
	    for (var j=0;j<numParcels;j++) {
	    	//if (j>=i) continue; 
	    	// only need to do one pair of parcels once (below the diagonal so to speak)
    		parcel.y = parcelsArray[j].properties.title;
	    	bingo = isAdjacent(parcelsArray[i],parcelsArray[j]);
	    	if (bingo==true) {
	    		//console.warn("adj bingo i j",i,j,parcel.x,parcel.y);
				adjObj[parcel.x][parcel.y] = true;  //. indicate that parcel j is adjacent
	    		//console.warn("adj parcel.x parcel.y adjObj",parcel.x,parcel.y,adjObj);
	    	}
	    }

	    //
	    // check if this parcel is bridged to another, and if so add that to adjaceny hash
	    //
	    parcel.bridged = getBridgedParcels(parcel.x,bridgedParcels);
		if ( parcel.bridged ) {
			if (globals.params.console.log) console.log("adj BRIDGED",parcel.x+" to "+parcel.bridged);
			adjObj[parcel.x][parcel.bridged] = true;  //. indicate that parcel is adjacent
		}

    }
    console.log("adj adjObj",adjObj);  // an array of parcel objects that will become features

    // now we have an object that is an adjaceny matrix of sorts
	// Each parcel include parcels that are adjacent as a group

    // Need to look at those that are adjacent and see if they form a larger cluster
    // and then collapse them into a hash of clusters 
    // This hash is not the final product, but includes parcel clusters that may also be adjacent
    //
    var clusters= {};
    var clustersCount = 0;
    var parcelsTogether = [];
    var clustersUsed = [];  // which clusters have been added to a group

	for (var parcelTitle in adjObj) {

		parcelsTogether = [];

		if (!isEmpty(adjObj[parcelTitle])) {
    		//console.log("adj parcelTitle adjacencies",parcelTitle,adjObj[parcelTitle]);
    		parcelsTogether.push(parcelTitle);
			for (var parcelOne in adjObj[parcelTitle]) {
    			parcelsTogether.push(parcelOne);
			}
		}
		if (parcelsTogether.length>0) {
			parcelsTogether.filter( onlyUnique );
			//console.log("adj parcelsTogether",parcelTitle,parcelsTogether);

			// are any of these together already a member of a cluster?
			for (var clusterIndex in clusters) {
				//console.log("adj clusterIndex parcelsTogether ",clusterIndex,parcelsTogether);
			}
			clusters[clustersCount] = parcelsTogether;
			clustersCount++
		}
	}
	//console.log("adj clusters  ",clusters);



    var groups= {};
    // seed the first group with the first cluster
    var groupsCount = 1;
	groups[0] = clusters[0];
	console.log("adj groupsCount groups0",groupsCount,groups);
	console.log("adj groupsCount clusters[0]",groupsCount,clusters[0]);

	// then look at all clusters to try to add to that group
	var newGroups;
	var results = [];
	var clustersUsed = [0];
	var useNext;

	console.log("adj END clustersCount clusters",clustersCount,clusters);

//
// Clusters include parcels that are adjacent as a group
//

var macros = processClusters(clustersCount,clusters);
	console.log("adj END macros",macros);
var macrosCount = macros.length;
	// take a 2nd pass at the macros and treat them as clusters and try to consolidate them
var macros2 = processClusters(macrosCount,macros);
	console.log("adj END macros2",macros2);
var macros2Count = macros2.length;

var compare1to2 = compare2Arrays(macros,macros2);
console.log("adj END compare1to2",compare1to2);

	// take a 3rd pass at the macros and treat them as clusters and try to consolidate them
var macros3 = processClusters(macros2Count,macros2);
	console.log("adj END macros3",macros3);	
var macros3Count = macros3.length;

var compare2to3 = compare2Arrays(macros2,macros3);
console.log("adj END compare2to3",compare2to3);
if (!compare2to3) {
	console.error("3rd pass of parcel grouping did not converge.  Please report this error");
}

// now set the groups to be the result of the macro3 pass
groups = macros3;
groupsCount = macros3Count;

	//
	// At this point, we have groups formed from clusters
	//
	console.warn("adj END groupsCount groups",groupsCount,groups);

	// determine acres in each group
	var groupAcres = {};
	var groupPolygons = {};
	var groupUnion = {};

	// for each group
	for (var groupIndex in groups) {
			// remove dups and sort
			groups[groupIndex]=groups[groupIndex].filter( onlyUnique );
			groups[groupIndex].sort();
			groups[groupIndex] = sortByDigits(groups[groupIndex]);

			groupAcres[groupIndex] = 0;
			groupPolygons[groupIndex] = [];
			groupUnion[groupIndex] = {};

			// for each of the parcels in this group
			for (var iii=0;iii<groups[groupIndex].length;iii++) {
				// total acres
				groupAcres[groupIndex] += getAcres(groups[groupIndex][iii],parcelsArray);
				// store polygon coordinates

					if (1==1 || globals.params.console.log) console.log("adj iii groups[groupIndex][iii]",iii,groups[groupIndex][iii]);


				var myPolygon = getPolygon(groups[groupIndex][iii],parcelsArray);
					if (1==1 || globals.params.console.log) console.log("adj iii myPolygon ",iii,myPolygon);
				if (myPolygon==null) continue; // skip if polygon is null for some reason
				groupPolygons[groupIndex].push( turf.polygon(myPolygon) );
				// start by creating a union of the first 2 parcels
				if (iii==1) {
					groupUnion[groupIndex] = turf.union(groupPolygons[groupIndex][1], groupPolygons[groupIndex][0]);
				}
				// then add in the next parcel to the previous union
				else if (iii>1) {
					if (groupUnion[groupIndex]!=undefined && groupPolygons[groupIndex][iii]!=undefined) {
						groupUnion[groupIndex] = turf.union(groupUnion[groupIndex], groupPolygons[groupIndex][iii]);
					}
				}
					if (globals.params.console.log) console.log("adj myPolygon groupUnion["+groupIndex+"]",groupUnion[groupIndex]);
			}

			// round acres
			groupAcres[groupIndex] = round(groupAcres[groupIndex],3);
			// outline the group

			// if choosing to show the groups, them add that outline layer
			if (globals.params.unions && groupUnion[groupIndex].properties!=undefined) {
			    map.addLayer({
			        "id": "group-outline_"+groupIndex,
			        "type": "line",
			        "source": {
			            'type': 'geojson',
			            'data': groupUnion[groupIndex]
			        },

			        "layout": {
			            "line-join": "round",
			            "line-cap": "round"
			        },
			        "paint": {
			        	// https://www.mapbox.com/mapbox-gl-js/style-spec/#layers-line
		                'line-blur': .5*globals.params.unions,	// blur on the outline
		                'line-color': 'rgba(0, 0, 255, .33)',	// blue, 33% opaque
		                'line-width': globals.params.unions		// width of the outline
		            }
			    });

				//var centroid = turf.centroid(groupUnion[groupIndex]);
				//var centroid = turf.centerOfMass(groupUnion[groupIndex]);  // need to install module to use this
				var centroid = turf.center(groupUnion[groupIndex]);

				console.log("adj groupIndex centroid ",groupIndex,centroid);
				var centroidCoords = centroid.geometry.coordinates;

				// fix a bug
				if (groups[groupIndex].indexOf("TCT 57")>=0) centroidCoords = [-70.05668, 42.00332];  

				// add the label
				var groupLabel = "G-"+(Number(groupIndex)+1)+" "+groupAcres[groupIndex].toFixed(1) + " Ac";
				addLabelAtCenter(groupLabel,centroidCoords,'blue','group_'+groupLabel);  // label layer id == group label

				// show the bridge if optional points are provided
				var myBridge;
				myBridge = getBridgedPoints(groupIndex,groups,bridgedParcels);
					//console.log("adj myBridge",groupIndex,myBridge);
			}
	}
	console.log("adj groupsCount groups1 ",groupsCount,groups);
	console.log("adj groupAcres ",groupAcres);
	console.log("adj clustersUsed",clustersUsed);
	console.log("adj groupPolygons",groupPolygons);
	console.log("adj groupUnion",groupUnion);
}


//
//. find a parcel among bridged parcels, and return a line that forms the bridge
//

// myBridge = getBridgedPoints(groupIndex,bridgedParcels);

//
// need global scope on these since there can be dupes in different groups
//
var bridgeIds = [];
var bridgedParcelsMapped = [];

function getBridgedPoints(groupIndex,groups,bridgedParcels) {
	//
	// find out which bridge (if any) applies to this group
	// NOTE can be multiple bridges in theory, but that is not handled (yet)
	//
	var arrayOfParcels = groups[groupIndex];
	var parcel = bridgedParcels[0][0];
	var n = bridgedParcels.length;
		console.warn("adj bridge ----------------------");
		console.warn("adj bridge n bridgedParcels",n,bridgedParcels);
	var i,j,indx,id;
	var bridgeLine;
	var groupBridgesCount = 0;
		console.warn("adj bridge n groupIndex arrayOfParcels",n,groupIndex,arrayOfParcels);

	// for each of the bridges that are specified
	for (i=0; i<n; i++) {
		// for each of the 2 parcels being bridged
		for (j=0; j<=1; j++) {
			// check to see if either bridge end is in this group of parcels
			indx = arrayOfParcels.indexOf(bridgedParcels[i][j]);
				//console.log("adj bridge bridgedParcels["+i+"]["+j+"]",bridgedParcels[i][j],indx,arrayOfParcels);
			if (indx>=0) {
				console.log("adj bridge bridgedParcels["+i+"]["+j+"]",bridgedParcels[i][j],indx,arrayOfParcels);
				// we have found a possible bridge in this group
				if (bridgedParcels[i][2]!=undefined) {
					var str = 'bridge '+bridgedParcels[i][0]+" to "+bridgedParcels[i][1];
						console.warn("adj ",str);  // + " at "+bridgedParcels[i][2][0][0]+","+bridgedParcels[i][2][0][1]);
						//console.warn("adj bridge from",arrayOfParcels[indx]+" "+str);  // + " at "+bridgedParcels[i][2][0][0]+","+bridgedParcels[i][2][0][1]);
					// now get the line feature for the bridge
					bridgeLine = turf.lineString( bridgedParcels[i][2], { name: str } );
					// create a unique id for the map layer
					id = str + " / " + JSON.stringify(bridgeLine);  //+"_"+getMsec();	
							console.log("adj bridge JSON  "+id);
					if (bridgeIds.indexOf(id)== -1) {
						bridgeIds.push(id);  // remember this bridge has been mapped

						bridgedParcelsMapped.push(bridgedParcels[i]);  // remember this as mapped

						mapBridgedPoints(id, bridgeLine);
						groupBridgesCount++;
							//console.warn("adj BRIDGED JSON mapping "+id,bridgedParcelsMapped);
							console.warn("adj BRIDGE JSON mapping "+id,bridgeIds,bridgedParcelsMapped);
					}
					else {
						continue;
					}
				}
			}
		}
	}
	console.warn("adj bridge groupBridgesCount",groupBridgesCount);
}
//
// map the bridge as a line
//
function mapBridgedPoints(id, bridgeLine) {

				    map.addLayer({
				        "id": "group-bridge_"+id,
				        "type": "line",
				        "source": {
				            'type': 'geojson',
				            'data': bridgeLine
				        },
				        "layout": {
				            "line-join": "round",			// miter ?
				            "line-cap": "round"				// butt ?
				        },
				        "paint": {
			                'line-color': 'rgba(0, 0, 255, .33)',
			                'line-dasharray': [1, 2],
			                'line-width': globals.params.unions	// bridge width
			            }
				    });
					enableLineAnimation("group-bridge_"+id,2000);
}

//
// animates a dashed line (that is in a layer specified)
//
// https://stackoverflow.com/questions/43057469/dashed-line-animations-in-mapbox-gl-js/43061314
// https://jsfiddle.net/2mws8y3q/
// https://www.mapbox.com/mapbox-gl-js/style-spec/#paint-line-line-dasharray
// animationStep is msec for each of the movements (50 is fast, 1000 is slow)
function enableLineAnimation(layerId,animationStep) {
  if (animationStep===undefined) animationStep=500;
  var step = 0;
  let dashArraySeq = [
    [0, 4, 3],
    [1, 4, 2],
    [2, 4, 1],
    [3, 4, 0],
    [0, 1, 3, 3],
    [0, 2, 3, 2],
    [0, 3, 3, 1]
  ];
  // numbers specify intervals of line, break, and line again (in pixels)
  setInterval(() => {
      step = (step + 1) % dashArraySeq.length;
      map.setPaintProperty(layerId, 'line-dasharray', dashArraySeq[step]);
    }, animationStep);
}
// https://bl.ocks.org/danswick/7f76b15f7ef80391e933
// map.setPaintProperty('trails', 'line-dasharray', [parseFloat(dash), parseFloat(gap)]);

// railroad tracks trick: https://twitter.com/PetersonGIS/status/887761591147560964
// https://codepen.io/1981khj/pen/zjJKbV

//
// get polygon coordinates of a parcel by title
//
function getPolygon(title,parcelsArray) {
	var numParcels = parcelsArray.length;
    for (var i=0;i<numParcels;i++) {
    	var aTitle = parcelsArray[i].properties.title;
    	if (aTitle==title) return parcelsArray[i].geometry.coordinates;
    }
    return null;
 }

function nextCluster(clustersCount,clusters,clustersUsed) {
	console.log("adj nextCluster clusters clustersUsed",clustersCount,clusters,clustersUsed);
	var next;
	for (var k=0;k<clustersCount;k++) {

		//console.log("adj nextCluster k clustersUsed.indexOf(k)",k,clustersUsed.indexOf(k));

		if (clustersUsed.indexOf(k)==-1) {
			next = k;  /// have not used k
			return next;
		}
	}
	// used them all
	next = -1;
	return next;
}

function addToGroups(start,clustersCount,clusters,clustersUsed,groups) {
	console.log("adj "+start+" addToGroups",clustersCount,clusters,clustersUsed,groups);
	var theClustersUsed = clustersUsed.slice();  // copy this array

	// look at all clusters to try to add to that group
	for(var kk=start;kk<clustersCount;kk++) {
		//console.log("adj clusters list ",kk,clusters[kk]);  // an array of parcels in cluster kk
		for (var jj=0;jj<clusters[kk].length;jj++) {
			//continue;
			var oneParcel = clusters[kk][jj];
			//console.log("adj clusters list jj",jj,clusters[kk][jj]);
			// is this in a group?
			var isInGroup = false;
			for (var groupIndex in groups) {
				var groupMembers = groups[groupIndex];
				//console.log("adj clusters list jj",jj,clusters[kk][jj]);
				if (groupMembers.indexOf(clusters[kk][jj])>=0) {
					isInGroup = true;
					for (p=0;p<clusters[kk].length;p++) {
						// if it's a new parcel to the group, push it onto the array
						if (groups[groupIndex].indexOf(clusters[kk][p])==-1) {
							groups[groupIndex].push(clusters[kk][p]);
							if (kk==start || 1==1) console.log("adj "+start+" pushing clusters["+kk+"]["+p+"]", clusters[kk][p]+" to group["+groupIndex+"] len=",groups[groupIndex].length);
						}
					}
					// indicate that this cluster has been used
					theClustersUsed.push(kk);
				}
			}
			groups[groupIndex]=groups[groupIndex].filter( onlyUnique );
		}
	}
	theClustersUsed = theClustersUsed.filter( onlyUnique );
	theClustersUsed.sort();
	console.log("adj "+start+" returning groups",groups,"theClustersUsed",theClustersUsed);

	return [groups,theClustersUsed];
}


//
// compare [ coord1 ] to [ coord2 ]
// usually for compariing 2 points on the map to see if they are the same [lng, lat]
//
function compareCoords(coord1, coord2, tolerance) {
	if (tolerance===undefined) tolerance = .0001;
	if (coord1===undefined || coord2===undefined) return false;
	var result;

	var dimensions = coord1.length;
	if (coord2.length!=dimensions) {
		console.error("trying to compare coordinates of different dimensions",dimensions,coord2.length);
		return;
	}
	var dimensionMatch = 0;	
	var delta = [];
	for (var j=0;j<dimensions;j++) {
		delta = Math.abs(coord1[j] - coord2[j]);
		if (delta > tolerance) {
			continue;
		}
		else {
			dimensionMatch ++;
		}
	}
	if (dimensionMatch==dimensions) {
		// this coord overlapped
		result = true;
		//console.warn("adj compareCoords result",result);
		//console.log("adj compareCoords",dimensions,tolerance, coord1, coord2 );
	}
	else {
		result = false;
	}
	return result;
}

//
// return the acres in a parcel by title
//
function getAcres(title,parcelsArray) {
	var numParcels = parcelsArray.length;
    for (var i=0;i<numParcels;i++) {
    	var aTitle = parcelsArray[i].properties.title;
    	if (aTitle==title) return parcelsArray[i].properties.acres;
    }
    return 0;
}




	/*
	var poly1 = turf.polygon([[
	    [-82.574787, 35.594087],
	    [-82.574787, 35.615581],
	    [-82.545261, 35.615581],
	    [-82.545261, 35.594087],
	    [-82.574787, 35.594087]
	]], {"fill": "#0f0"});
	var poly2 = turf.polygon([[
	    [-82.560024, 35.585153],
	    [-82.560024, 35.602602],
	    [-82.52964, 35.602602],
	    [-82.52964, 35.585153],
	    [-82.560024, 35.585153]
	]], {"fill": "#00f"});
	var union = turf.union(poly1, poly2);
	console.log("adj union",union);
	*/

