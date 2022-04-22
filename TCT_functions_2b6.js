//
// create a new map based on style
//
function createMap(mapStyle,mapCenter,mapZoom,mapOptions,mapPitch,mapBearing) {
    if (mapPitch===undefined) mapPitch=0;
    if (mapBearing===undefined) mapBearing=0;
    map = new mapboxgl.Map({
        container: 'map',
        style: mapStyle,
        center: mapCenter,
        zoom: mapZoom,
        pitch: mapPitch,     // pitch in degrees (0 is straight down)
        bearing: mapBearing, // bearing in degrees (0 is due north)
        options: mapOptions
    });
}
        // style needed for SATELLITE Add/Remove option from DanS. (DOESN'T SUPPORT outdoors-v10 as underlayer)
        // style: 'mapbox://styles/danswick/cilnegnzr00439gkf7urxz0xk', //stylesheet location



// IN PROCESS
//
// filter the array of TCT parcels by status and/or team
//
function filterParcels(parcels,statusFilter,teamFilter) {
    //
    // loop through all parcels
    // filter them by status, team
    //
    filteredParcelsArray = [];

    for (var i=0;i<parcels.length;i++) {
        var n = parcels[i]; 
        var obj = tct["id_"+n];

        if (obj===undefined) {
            alert("TCT parcel "+n+" is not defined");
            continue;
        }

        // this filters for certain status to plot
        if (statusFilter.indexOf(obj.properties.status)==-1) {
            //alert("TCT parcel "+n+" skipped - stauts = "+obj.properties.status);
            continue;
        }

        var teamIndex = teamFilter.indexOf(obj.properties.team);
            if (globals.params.console.log) console.log("PARCEL: ", n, obj.properties.team, teamIndex);

        if (obj.properties.team!=undefined && obj.geometry.center!=undefined) {
            var triplet = obj.geometry.center;
            triplet[2] = n;
            TCTcentersArrayHash[obj.properties.team].push(triplet);
        }
        else {
            if (globals.params.console.warn) console.warn("bbox","TCTcentersArrayHash skipping",obj.properties.title,obj);
        }

        // skip parcels that do not pass the team filter
        if ( teamFilter.length>0 && teamIndex == -1 ) {
            continue;
        }

        // process and add this parcel, since it passed the filters
        filteredParcelsArray.push(obj);

        /*
        for each of the teams
        hash the hulls and different colore each
        */

        //
        // check to see if there are signs on this parcel
        //
        if (obj.properties.signs != undefined) {
            var numSigns = obj.properties.signs.length;
            if (numSigns>0) console.log(numSigns," signs on ",n);
            for (var jSign=0; jSign<numSigns; jSign++) {
                console.log( "index "+jSign," sign is at ",obj.properties.signs[jSign] );
                var signId = "TCT"+"-sign_"+n+"."+jSign;
                //signId = "TCTsigns";
                plotCircle(signId,5,'green',obj.properties.signs[jSign],.8);
            }
        }

        if (obj.geometry.center!=undefined) {
            // add to array of center points
            TCTcentersArray.push(obj.geometry.center);
        }
        else {
            var computedCenter = getCenter(obj);
               console.log("bbox","computedCenter",computedCenter,obj);

            if (computedCenter!=undefined) {
                TCTcentersArray.push(computedCenter);
            }
            else {
                console.warn("Skipping one parcel: No center available for ",obj.properties.title,obj);
            }
        }

        // no coordinates geocoded yet?
        if (obj.geometry.coordinates===undefined || obj.geometry.coordinates[0]===undefined || obj.geometry.coordinates[0].length == 0) {
            console.log(n+ " is not geocoded");
            notGeocoded.push(n);  // add this as not geocoded

            // so let's add a circle at its center
            if (obj.geometry.center!=undefined) {

                var radius = 10*Math.sqrt(obj.properties.acres);
                // plotCircle(n,radius,'hotpink',obj.geometry.center,.5);

                // let's add a square about the size of the parcel's acres

                var delta;
                delta = radius*.00004;
                var cx = obj.geometry.center[0];
                var cy = obj.geometry.center[1];
                obj.geometry.coordinates[0][0] = [ cx+2*delta, cy ];
                obj.geometry.coordinates[0][1] = [ cx, cy+delta ];
                obj.geometry.coordinates[0][2] = [ cx-2*delta, cy ];
                obj.geometry.coordinates[0][3] = [ cx, cy-delta ];
                obj.geometry.coordinates[0][4] = obj.geometry.coordinates[0][0];
            }
        }

    }  // end for loop

    return filteredParcelsArray;
}





function reportBtn(key, statusFilter) {
    //alert('Report key = '+key);
    if (statusFilter===undefined) statusFilter = "Cc";
    var teams = prompt("Type one or more Team letters to filter for that Team(s)");
    if (teams==null) {
        teams=false;
    }
    else if (teams=="") {
        teams=false;
    }
    else teams = teams.toUpperCase();

    // how a status code is displayed
    var statusDisplayed = {};
    statusDisplayed["C"] = "fs";
    statusDisplayed["c"] = "CR";
    statusDisplayed["t"] = "Town";
    statusDisplayed["T"] = "TownC";
    statusDisplayed["p"] = "prospect";
    statusDisplayed["a"] = "active";


    var totals = {};
    totals.acres = 0;
    totals.acresUpland = 0;
    totals.acresWetland = 0;
    totals.parcels = 0;
    totals.geocoded = 0;
    totals.numCoords = 0;

    totals.assessedTotal = 0;
    totals.assessedNum = 0;
            
    var numCoords = 0;

    var habitats = [];      // array of all habitats on file
    var habitatAcres = {};  // hash of key=habitat, value=acres
    var habitatIds = {};  // hash of key=habitat, value=aarray of ids with that habitat


    var vintages = [];      // array of all years acquired on file
    var vintageAcres = {};  // hash of key=vintage, value=acres
    var vintageIds = {};  // hash of key=vintage, value=aarray of ids with that vintage year



    function windowPrinter() {
        alert("windowPrint");
        winPrint.print();
    }



    var strWindowFeatures;
    if (key=="signs") {
        strWindowFeatures = "menubar=yes,location=no,resizable=yes,scrollbars=yes,status=yes,titlebar=yes,width=1024,top=32,left=32";
    }
    else {
        strWindowFeatures = "menubar=no,location=no,resizable=yes,scrollbars=yes,status=yes,width=1024";
    }
    //var winPrint = window.open('', '', 'left=0,top=0,width=800,height=600,toolbar=0,scrollbars=0,status=0');

    // http://jsfiddle.net/Sarathv15/8dXvt/420/

    // don't show data page if toggling CCNS (national park)

    var str="";
    var str1="";
    var str2="";

    // open a new window (one per report key, with features)
    var winPrint = window.open('', '_report'+key, strWindowFeatures);
    //alert(strWindowFeatures);
    //winPrint.document.close();

    winPrint.document.write('<html><head>');
    winPrint.document.write('<link rel="stylesheet" type="text/css" href="css/styles1a.css">');
    //winPrint.document.write('<link rel="stylesheet" type="text/css" href="css/print.css" media="print">');
    winPrint.document.write('<link rel="stylesheet" type="text/css" href="css/print.css">');

        //winPrint.print();  // cause the print dialogue box to appear
        //winPrint.close(); 

/*
    if (key=="signs") {  
        winPrint.document.write('<title>TCT Signs</title>');
    }
    else if (key=="TCT") {
        winPrint.document.write('<title>TCT Lands</title>');
    }
    winPrint.document.write('</head><body>');
*/

    // can't get this to work
    //winPrint.document.write("<button onclick='windowPrinter()'>PrintX</button>");


    if (key=="signs") {  
        winPrint.document.write('<title>TCT Signs</title>');        
        winPrint.document.write('</head><body>');
        winPrint.document.write('<h2>TCT Signs</h2>');
    }
    else if (key=="TCT") {
        if (statusFilter.indexOf("p")>=0) {
            winPrint.document.write('<title>TCT Prospects</title>');
            winPrint.document.write('</head><body>');
            winPrint.document.write('<h2>TCT Prospects</h2>');
        }
        else {
            winPrint.document.write('<title>TCT Lands</title>');
            winPrint.document.write('</head><body>');
            winPrint.document.write('<h2>TCT Lands and CRs</h2>');
        }
    }

    if (teams) winPrint.document.write('<h3>Team '+teams+'</h3>');


    str += "<table id='report' class='report'>";
    //str += "<table id='report' class='report'>";
    //str += "<table id='report' class='report' style='border-style:solid; border-color: cyan; border-width: 2px'>";


    // heading row
    str += "<tr style='border-style:solid; border-color: green; border-width: 1px'>";
    str += "<th style='border-style:solid; border-color: green; border-width: 1px'>";
    str += "TCT Id";
    str += "</th>";

    if (key=="TCT") {  
        str += "<th>";
        str += "Acquired";
        str += "</th>";
    }

    str += "<th style='border-style:solid; border-color: green; border-width: 1px'>";
    str += "Donor";
    str += "</th>";

    if (key=="TCT") {  
        str += "<th style='border-style:solid; border-color: green; border-width: 1px; padding: 3px'>";
        str += "Upland";
        str += "</th>";

        str += "<th style='border-style:solid; border-color: green; border-width: 1px; padding: 3px'>";
        str += "Wetland";
        str += "</th>";

        str += "<th style='border-style:solid; border-color: green; border-width: 1px; padding: 3px'>";
        str += "TOTAL";
        str += "</th>";

        str += "<th>";
        str += "Primary Habitats";
        str += "</th>";

    }

    str += "<th style='border-style:solid; border-color: green; border-width: 1px'>";
    str += "Street";
    str += "</th>";

/*
    str += "<th style='border-style:solid; border-color: green; border-width: 1px; padding: 3px'    >";
    str += "Map";
    str += "</th>";

    str += "<th style='border-style:solid; border-color: green; border-width: 1px; padding: 3px'>";
    str += "Lot";
    str += "</th>";
*/

    str += "<th style='border-style:solid; border-color: green; border-width: 1px; padding: 3px'>";
    str += "Map-Lot";
    str += "</th>";

    str += "<th style='border-style:solid; border-color: green; border-width: 1px'>";
    str += "Key";
    str += "</th>";

    if (key=="signs") {  
        str += "<th style='border-style:solid; border-color: green; border-width: 1px'>";
        str += "Comments";
        str += "</th>";

        str += "<th style='border-style:solid; border-color: green; border-width: 1px'>";
        str += "Sign Lng, Lat";
        str += "</th>";
    }

    str += "<th style='border-style:solid; border-color: green; border-width: 1px; padding: 3px'>";
    str += "Team";
    str += "</th>";

    if (key=="TCT") {
        str += "<th style='border-style:solid; border-color: green; border-width: 1px; padding: 3px'>";
        str += "Status";
        str += "</th>";
    }

if (globals.params.numCoords) {
    str += "<th style='border-style:solid; border-color: green; border-width: 1px; padding: 3px'>";
    str += "Coords";
    str += "</th>";
}

    if (key=="TCT") {
        if (globals.params.assessed) {  
            str += "<th colspan='2' class='textCenter' style='border-style:solid; border-color: green; border-width: 1px'>";
            str += "Assessed";
            str += "</th>";
        }
    }

    str += "</tr>";

    // does this parcel have any signs, and if so how many?
    var hasSigns;
    var numSigns;

    // for each parcel

    for (var i=0;i<TCTparcelsLen;i++) {
        var n = TCTparcels[i]; 
        var obj = tct["id_"+n];  
        var prop = obj.properties;
        var geom = obj.geometry;

        console.log("i n prop geom",i,n,prop,geom);

        hasSigns = false;

        if (prop.signs!=undefined) {
            numSigns = prop.signs.length;
                //console.log("i",numSigns,prop.signs);
            if (numSigns>0) {
                hasSigns = true;
            }
        }

        // skip certain status parcels not in the filter
        if (statusFilter.indexOf(prop.status) == -1) continue;

            //console.log("teams",teams,prop.team);
        if (teams && teams.indexOf(prop.team)==-1) continue;  // skip if a team(s) is selected and doesn't match

        // for signs report, skip parcels without signs
        if (key=='signs' && hasSigns==false) continue;

            //console.log("i n prop SELECTED",i,n,prop);

        if (prop.status=="c") {
            str += "<tr style='background-color: #eee'>";
        } 
        else {
            str += "<tr style='border-style:solid; border-color: green; border-width: 1px'>";
        }

        /*
        function shortTCTid(title) {
            var i = prop.title.indexOf(" ");
            return prop.title.substring(i+1).toUpperCase();
        }
        */

        str += "<td class='textCenter' style='padding: 3px'>";
            str += "<a href='"+globals.params.urlPlain+"?s="+TCTparcels[i];
            str += "' target='_mapSearch'>";
            str += shortTCTid(prop);
            //str += prop.title.toUpperCase();
            str += "</a>";
        str += "</td>";

        if (key=="TCT") {  
            str += "<td style='padding: 3px'>";
            str += prop.acquired;
            str += "</td>";
        }

        // 
        str += "<td style='padding: 3px'>";
        str += prop.donor;
        str += "</td>";

        if (key=="TCT") {  

            totals.acres += prop.acres;
            totals.acresUpland += prop.acresUpland;
            totals.acresWetland += prop.acresWetland;
            totals.parcels ++;

            if (prop.assessedTotal>0 && (prop.status=="C" || prop.status=="p") ) {
                totals.assessedTotal += prop.assessedTotal;
            }

            str += "<td class='textRight' style='padding: 3px'>";
            str += prop.acresUpland.toFixed(3);
            str += "</td>";

            str += "<td class='textRight' style='padding: 3px'>";
            str += prop.acresWetland.toFixed(3);
            str += "</td>";

            // alert with red if acres don't add up
            if (  Math.abs(prop.acresUpland + prop.acresWetland - prop.acres) > .0001 ) {
                str += "<td class='textRight textRed' style='padding: 3px'>";
            }
            else {
                str += "<td class='textRight' style='padding: 3px'>";
            }
            str += prop.acres.toFixed(3);
            str += "</td>";


            var myHabitat = blankIfUndefined(prop.habitat);
            myHabitat = myHabitat.trim();

            var myVintage = blankIfUndefined(prop.acquired);
            myVintage = myVintage.trim().substring(0,4);

            if (key=="TCT") {
                if (myHabitat.length>0) {
                    if(habitats.indexOf(myHabitat)==-1) {
                        habitats.push(myHabitat)
                        habitatAcres[myHabitat] = 0;
                        habitatIds[myHabitat] = [];
                    }
                    habitatAcres[myHabitat] += prop.acres;  // hash of key=habitat, value=acres
                    habitatIds[myHabitat].push(shortTCTid(prop));
                } 

                if (myVintage.length==4) {
                    if(vintages.indexOf(myVintage)==-1) {
                        vintages.push(myVintage)
                        vintageAcres[myVintage] = 0;
                        vintageIds[myVintage] = [];
                    }
                    vintageAcres[myVintage] += prop.acres;  // hash of key=habitat, value=acres
                    vintageIds[myVintage].push(shortTCTid(prop));
                } 

            }

            str += "<td style='padding: 3px'>";
            str += myHabitat;
            str += "</td>";
        }

        str += "<td style='padding: 3px'>";
        str += blankIfUndefined(prop.street);
        str += "</td>";
/*
        str += "<td class='textCenter'>";
        str += blankIfUndefined(prop.map);
        str += "</td>";

        str += "<td class='textCenter'>";
        str += blankIfUndefined(prop.lot);
        str += "</td>";
*/
            str += "<td class='textCenter'>";
            str += makeMapLot(prop.map,prop.lot);
            str += "</td>";

        str += "<td class='textCenter' style='padding: 3px'>";
        if (prop.key!=undefined && prop.key>0) {
            str += keyHREF(prop);
            /*
            str += "<a href='https://www.axisgis.com/node/axisapi/document-view/TruroMA?path=Docs/Batch/Town%20Property%20Card/"+prop.key+".pdf' target='_assessorCard'>";
            str += prop.key;
            str += "</a>";
            */
        }
        str += "</td>";

        if (key=="signs") {  
            str += "<td style='padding: 3px'>";
            str1 = blankIfUndefined(prop.comments);
            str2 = blankIfUndefined(prop.signComments);
            if (str1.length>0) str += str1;
            if (str1.length>0 && str2.length>0) str += "<br>"+str2;
            if (str1.length==0 && str2.length>0) str += str2;
            //str += blankIfUndefined(prop.signComments);
            str += "</td>";

            str += "<td style='padding: 3px'>";
            if (prop.signs!=undefined) {
                if (numSigns>0) {
                      // for each sign, list the coordinates
                      for (var k=0;k<numSigns;k++ ) {
                          if (k>0) str += "<br>";

                          var signLL = "?";
                          signLL += "ll=" + prop.signs[k][0] + "," + prop.signs[k][1];
                          str += "<a href='"+globals.params.url+signLL+"' target='_signMap'>";

                          str += prop.signs[k][0] + ", " + prop.signs[k][1];
                          str += "</a>";
                      }
                }
            }
            str += "</td>";
        }

        if (prop.team=="?" || prop.team=="") {
            str += "<td class='textCenter backgroundPink'>";
        }
        else {
            str += "<td class='textCenter'>";
        }
        str += prop.team;
        str += "</td>";

        if (key=="TCT") {
            str += "<td class='textCenter'>";
            str += statusDisplayed[prop.status];
            str += "</td>";            
        }


if (globals.params.numCoords) {

    var iii = notGeocoded.indexOf(n);
    console.log("n iii",n,iii);

        numCoords = 0;
        if (obj.geometry.coordinates!=undefined) {

            numCoords = obj.geometry.coordinates[0].length;
            console.log("n, numCoords",n,numCoords,obj.geometry.coordinates[0]);

            if (numCoords>0) {
                totals.numCoords += numCoords;
                totals.geocoded ++;
            }
        }

        str += "<td class='textRight' style='padding: 3px'>";
        if (numCoords>=3) {
            str += obj.geometry.coordinates[0].length;
        }
        else {
            if (obj.geometry.center==undefined) {
                str += "TO DO";
            }
            else {
                str += "to do "+obj.geometry.center[0]+","+obj.geometry.center[1];
            }
        }
        str += "</td>";

}


        if (key=="TCT") {

            // to show the assessed column on reports
            if (globals.params.assessed) {  
                if (prop.status=="C" || prop.status=="p") {
                    str += "<td class='textRight'>";
                }
                else {
                     str += "<td class='textRight textGray' style='padding: 3px'>"; 
                }
      
                if (prop.assessedTotal!=undefined && prop.assessedTotal>0) {
                    str += prop.assessedTotal;
                }
                str += "</td>";

                if (prop.status=="C") {
                    str += "<td class='textRight'>";
                }
                else {
                     str += "<td class='textRight textGray' style='padding: 3px'>"; 
                }
                str += blankIfUndefined(prop.assessedFY);
                str += "</td>";
            }

            if (globals.params.drone) {  
                if (prop.drone != undefined) {
                    str += "<td class='textRight' style='padding: 3px'>";
                    str += makeDroneLink(prop, true, 'p');
                    str += "</td>";
                }       
            }
        }

        str += "</tr>";

    } // next parcel

    //
    // totals line
    //
    if (key=="TCT") {  

        str += "<tr class='total'>";

            str += "<td colspan='1'>";
            str += "</td>";

            str += "<td class='textRight'>";
            str += totals.parcels;
            str += "</td>";

            str += "<td class='textCenter'>";
            str += " Total Parcels";            
            str += "</td>";            

            str += "<td class='textRight'>";
            str += totals.acresUpland.toFixed(3);
            str += "</td>";

            str += "<td class='textRight'>";
            str += totals.acresWetland.toFixed(3);
            str += "</td>";

            str += "<td class='textRight'>";
            str += totals.acres.toFixed(3);
            str += "</td>";

            str += "<td colspan='6'>";
            //str += "<td colspan='8'>";
            str += "</td>";

        if (globals.params.numCoords) {
            str += "<td class='textRight'>";
            if (totals.geocoded<totals.parcels) {
                str += totals.geocoded;
                str += " "+(100*totals.geocoded/totals.parcels).toFixed(0)+"%<br>";
            }
            str += totals.numCoords;
            str += "</td>";
        }

        // to show the assessed column on reports
        if (globals.params.assessed) {
            if (key=="TCT") {
                str += "<td class='textRight'>";
                str += totals.assessedTotal;
                str += "</td>";
            }
        } 

        str += "</tr>";
    } // end of totals

    str += "</table>";

    //
    // show habitats and acres by habitat, unless a team(s) is specified
    //
    if (key=='TCT' && !teams && statusFilter.indexOf("p")==-1) {

        habitats = habitats.sort();
        console.log("habitats",habitats,habitatAcres);

        str += "<h3>Habitats</h3>";

        str += "<table class='report'>";
            str += "<tr>";
                str += "<th class='textLeft pad3'>";
                str += "Habitat";
                str += "</th>";

                str += "<th class='textRight pad3'>";
                str += "Acres";

                str += "</th>";
                str += "<th class='textLeft textGray pad3'>";
                str += "TCT #'s";
                str += "</th>";

            str += "</tr>";

        for (i=0;i<habitats.length;i++) {
            str += "<tr>";
                str += "<td class='textLeft pad3'>";
                str += habitats[i];
                str += "</td>";

                str += "<td class='textRight pad3'>";
                str += habitatAcres[habitats[i]].toFixed(1);
                str += "</td>";

                str += "<td class='textLeft textGray pad3'>";
                str += habitatIds[habitats[i]];
                str += "</td>";

            str += "</tr>";
        }
        str += "</table>";

        vintages = vintages.sort();
        console.log("vintage",vintages)
        console.log("vintage",vintageAcres);
        console.log("vintage",vintageIds);
        var totalAcres = 0;

        str += "<h3>Conservation Land Vintages</h3>";

        str += "<table class='report'>";
            str += "<tr>";

                str += "<th class='textLeft pad3'>";
                str += "";
                str += "</th>";

                str += "<th colspan='2' class='textCenter pad3'>";
                str += "Acres";
                str += "</th>";

            str += "</tr>";

            str += "<tr>";

                str += "<th class='textLeft pad3'>";
                str += "Year";
                str += "</th>";

                str += "<th class='textRight pad3'>";
                str += "New";
                str += "</th>";

                str += "<th class='textRight pad3'>";
                str += "Total";
                str += "</th>";

                str += "<th class='textLeft textGray pad3'>";
                str += "TCT # (includes CRs)";
                str += "</th>";

            str += "</tr>";

        for (i=0;i<vintages.length;i++) {

/*
            str += "<tr>";
                str += "<td class='textLeft pad3'>";
                str += vintages[i];
                str += "</td>";

                str += "<td class='textRight pad3'>";
                str += vintageAcres[vintages[i]].toFixed(1);
                str += "</td>";

                totalAcres += vintageAcres[vintages[i]];

                str += "<td class='textRight pad3'>";
                str += totalAcres.toFixed(1);
                str += "</td>";

                str += "<td class='textLeft textGray pad3'>";
                str += vintageIds[vintages[i]];
                str += "</td>";

                str += "<td class='textLeft pad3'>";
                var myChar; //  = "&#9724;"
                myChar = "&#9608;"
                var scaledAcres = totalAcres/5;
                var wholeBlocks = Math.floor(scaledAcres);

                // fraction of a block
                var rem = scaledAcres - wholeBlocks;
                var remChar;
                if (rem<1/16) remChar="";
                else if (rem< 3/16) remChar = "&#9615;"  // 1/8
                else if (rem< 5/16) remChar = "&#9614;"  // 1/4
                else if (rem< 7/16) remChar = "&#9613;"  // 3/8
                else if (rem< 9/16) remChar = "&#9612;"  // 1/2
                else if (rem<11/16) remChar = "&#9611;"  // 5/8
                else if (rem<13/16) remChar = "&#9610;"  // 3/4
                else remChar = "&#9609;"  // 7/8

                str += myChar.repeat(wholeBlocks) + remChar;

// 1/8 = 9615
// 1/4 = 9614
//  ...
// 7/8 = 9609
                str += "</td>";

                str += "<td class='textLeft pad3'>";
                str += rem.toFixed(3);
                str += "</td>";


            str += "</tr>";
*/

            // fill in up to 2 missing years
            if (i>0) {
                var deltaYears = vintages[i] - vintages[i-1];
                if (deltaYears > 1) {
                    str += makeVintageRow(Number(vintages[i-1])+1, 0, totalAcres, [] );
                }
                if (deltaYears > 2) {
                    str += makeVintageRow(Number(vintages[i-1])+2, 0, totalAcres, [] );
                }    
            } 

            totalAcres += vintageAcres[vintages[i]];

            str += makeVintageRow(vintages[i], vintageAcres[vintages[i]], totalAcres, vintageIds[vintages[i]] );

        }
        str += "</table>";
    }

    // write out the html to the tab
    winPrint.document.write(str);
    winPrint.document.write('</body></html>');
    winPrint.focus();
    return;
}


function shortTCTid(prop) {
    var i = prop.title.indexOf(" ");
    return prop.title.substring(i+1).toUpperCase();
}


function makeVintageRow(year,acres,total,ids) {
           str = "<tr>";
                str += "<td class='textLeft pad3'>";
                str += year;
                str += "</td>";

                str += "<td class='textRight pad3'>";
                str += acres.toFixed(1);
                str += "</td>";

                str += "<td class='textRight pad3'>";
                str += total.toFixed(1);
                str += "</td>";

                str += "<td class='textLeft textGray pad3'>";
                str += ids;
                str += "</td>";

                str += "<td class='textLeft pad3'>";
                var myChar; //  = "&#9724;"
                myChar = "&#9608;"
                var scaledAcres = total/6;
                var wholeBlocks = Math.floor(scaledAcres);

                // fraction of a block
                var rem = scaledAcres - wholeBlocks;
                var remChar;
                if (rem<1/16) remChar="";
                else if (rem< 3/16) remChar = "&#9615;"  // 1/8
                else if (rem< 5/16) remChar = "&#9614;"  // 1/4
                else if (rem< 7/16) remChar = "&#9613;"  // 3/8
                else if (rem< 9/16) remChar = "&#9612;"  // 1/2
                else if (rem<11/16) remChar = "&#9611;"  // 5/8
                else if (rem<13/16) remChar = "&#9610;"  // 3/4
                else remChar = "&#9609;"  // 7/8

                str += myChar.repeat(wholeBlocks) + remChar;

                // 1/8 = 9615
                // 1/4 = 9614
                //  ...
                // 7/8 = 9609
                str += "</td>";

                if (1==0) {
                    str += "<td class='textLeft pad3'>";
                    str += rem.toFixed(3);
                    str += "</td>";
                }

            str += "</tr>";    
            return str;

}

//
// show or hide labels as directed
//
// statusFilter is the status values for which labels are shown
//
function manageLabels(statusFilter) {
    if (statusFilter===undefined) statusFilter = ""+globals.params.status.labels+"";
        console.log("labels manageLabels",statusFilter,globals.params.status.labels,globals.params.status.labelsDefault);

    if (showLabels) {
        for (var i=0;i<TCTparcelsLen;i++) {
            var n = TCTparcels[i]; 
            var obj = tct["id_"+n];  
            //if (n=="p2") n="Cater";
            // if there is a lable defined in the geocode, use it (if it's not blank).
            if (obj.properties.label != undefined) n=obj.properties.label;
            if (n.length>0 && obj.properties.status!=undefined) {
                if ( statusFilter.indexOf(obj.properties.status)>=0 ) {
                    addLabel(obj,n);
                }
            }
        }
        for (var i=0;i<ToTparcelsLen;i++) {
            var n = ToTparcels[i]; 
            var obj = tot["id_"+n];  
            //if (n=="p2") n="Cater";
            // if there is a lable defined in the geocode, use it (if it's not blank).
            if (obj.properties.label != undefined) n=obj.properties.label;
            if (n.length>0 && obj.properties.status!=undefined) {
                if ( statusFilter.indexOf(obj.properties.status)>=0 ) {
                    addLabel(obj,n);
                }
            }
        }

    }
    else {
        for (var i=0;i<TCTparcelsLen;i++) {
            var n = TCTparcels[i]; 
            var obj = tct["id_"+n];  
            removeLabel(n,map);
        }        
    }
}


//
// show access details
//
function showAccess() {
    /*
    "access": {
    "road": "Hatch Rd",
    "via": "on foot, easement between #11 and #15",
    "entry": [-70.05147, 41.98926],  // where to enter the parcel
    "park":  [-70.05028, 41.98929]   // where to park to access the parcel
    },
    */

    for (var i=0;i<TCTparcelsLen;i++) {
        var n = TCTparcels[i]; 
        var obj = tct["id_"+n];  
        var coordsArray = [];


        if (obj.properties.access != undefined) {

            console.log("found access info for "+ obj.properties.title);

            if (obj.properties.access.park != undefined) {
                addOnePoint(map,"access_park"+n,"symbol",obj.properties.access.park,"park","car" ,17,12,1.5);
            }

            if (obj.properties.access.entry != undefined) {
                addOnePoint(map,"access_entry"+n,"symbol",obj.properties.access.entry,"entry","triangle-stroked" ,16,12,1.5);
            }

            if (obj.properties.access.entry != undefined && obj.properties.access.park) {
                if (obj.properties.access.waypoints===undefined) {
                    addLine(map,"access_path"+n,obj.properties.access.park,obj.properties.access.entry,17);
                    coordsArray.push(obj.properties.access.park);
                    coordsArray.push(obj.properties.access.entry);
                }
                else {
                    var numWaypoints = obj.properties.access.waypoints.length;
                    // 1st segment from parking
                        addLine(map,"access_path"+n+"_0",obj.properties.access.park,obj.properties.access.waypoints[0],17);
                        coordsArray.push(obj.properties.access.park);


                        for (var j=1;j<numWaypoints;j++) {
                            // segment per waypoint
                            addLine(map,"access_path"+n+"_"+j,obj.properties.access.waypoints[j-1],obj.properties.access.waypoints[j],17);
                        }
                        // last segment to entry
                        addLine(map,"access_path"+n+"_"+numWaypoints,obj.properties.access.entry,obj.properties.access.waypoints[numWaypoints-1],17);
                        coordsArray.push(obj.properties.access.entry);
                }
            }

            // THIS IS NOT WORKING - NEEDS THE TURF PACKAGE INSTALLED, OR USE THE TECHNIQUE IN "MEASURE"
            //var walkDistance = turf.lineDistance(coordsArray);   
            //alert(walkDistance);
        }
    }
}


function lineLength(coordsArray,unitOfMeasure) {
    if (unitOfMeasure===undefined) unitOfMeasure = 'miles';
    //var line = turf.lineString([[115, -32], [131, -22], [143, -25], [150, -34]]);
    var line = turf.lineString(coordsArray);
    console.log("line",line);
    //var length = turf.length(line, {units: 'miles'});
    var length = turf.lineDistance(line, {units: unitOfMeasure});
    return length;
}


//
// to position text with an optional icon
//
// where = map variable
// id = layer id
// myType = symbol
// coords = [x,y]
// title = "  "
// icon = "  "
// minzm = number
// textSz = number
//
function addOnePoint(where,id,myType,coords,title,icon,minzm,textSz,iconSz) {
    if (iconSz===undefined) iconSz = 1;
    where.addLayer({
        "id": id,
        "type": myType,
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
                            "coordinates": coords
                        },
                        "properties": {
                            "title": title,
                            "icon": icon,
                            // https://www.mapbox.com/help/markers-js/
                        }
                    }
                ]
            }
        },

        "minzoom": minzm,
        //"maxzoom": 22,

        "layout": {
            "icon-image": "{icon}-15",
            "icon-size": iconSz,
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, .5],
            "text-anchor": "top",
            "text-size": textSz
        } 
    });

}





//
// addOnePoint(map,"access_park"+n,"symbol",obj.properties.access.park,"park","car" ,15,12,1.5);

//
function addLine(map,id,from,to,minZoom,lineColor,lineWidth) {
    if (minZoom===undefined) minZoom=15;
    if (lineWidth===undefined) lineWidth=1;
    if (lineColor===undefined) lineColor="#800";

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
                        from,
                        to
                    ]
                }
            }
        },

        "minzoom": minZoom,
        //"maxzoom": 22,

        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#800",
            "line-width": lineWidth
        }
    });
}


//
//
//
function searchClicked(myInput) {
	//alert("searchClicked");

	var inputStr;
    if (myInput==undefined) {
                        //inputStr = prompt("Search for TCT #, or map-lot, or Street Address (7 or more characters)");
                        //var inputStr2 = promptModal("searchPromptModalDiv","Search for TCT #, or map-lot, or Street Address (7 or more characters)");
        inputStr = promptModal("searchPromptModalDiv","Search for TCT #, or map-lot, or Street Address (4+ characters), or GPS lng,lat","searchPromptModalHelp");
        var okButton = document.getElementById('searchPromptModalOkBtn');
        okButton.onclick = function (e) {
                        //var clickedLayer = this.textContent;
            e.preventDefault();
            e.stopPropagation();
            inputStr = document.getElementById('searchPromptModalInput').value;
            closeModal();
            // now do the action indicated
            if (inputStr.length>0) searchParcels(inputStr);
                        //alert("22 okButton.onclick = "+inputStr);
                        //return inputValue;
        }
    }
    else {
        inputStr = globals.params.search;
        searchParcels(inputStr);
    }
}
//
// actually search for the parcel
//
function searchParcels(inputStr) {
	var searchBy = 'id';  // default for what are we searching parcels by
    var indxComma = inputStr.indexOf(',');
    var myCoordsFound = false;

	// case of map-lot with a dash between
	if (inputStr.length==7 && inputStr.indexOf('-')==3) {
		globals.params.search = inputStr.substring(0,3)+inputStr.substring(4,7);
		searchBy = 'maplot';
		//alert(globals.params.search);
	}

    //case of entering a GPS coordinate like -70.01234,41.98765
    else if (indxComma>=0) {
        // there is a comma, so let's parse and see if we have 2 numbers
        var lng = Number(inputStr.slice(0,indxComma));
        var lat = Number(inputStr.slice(indxComma+1));
        console.log("lng lat",lng,lat);
        globals.params.search = [lng,lat];
        myCoordsFound = [lng,lat];
        searchBy = 'gps';
    }

    //case of map and lot with no dash
    else if (inputStr.length==6) {
        globals.params.search = inputStr;
        searchBy = 'maplot';
    }

	// looks like an address (must have a space in it and no comma)
	else if (inputStr.length>3 && inputStr.indexOf(' ')>=0) {
		globals.params.search = inputStr;
		searchBy = 'street';
		//alert("looks like a street");
	}
	// probably a TCT #
	else {
		globals.params.search = inputStr;
		searchBy = 'id';
	}

	console.log("searchClicked",globals.params.search);

    if (globals.params.search && searchBy != 'gps') {
        myCoordsFound = findCoordById(globals.params.search,searchBy);
        if (myCoordsFound==null) {
        	handleIdNotFound(inputStr);
        	return;
        }
        flyingToCoord(map,myCoordsFound,globals.params.zoomOnSearch);
    }
    else {
        // place an open circle to mark the GPS coordinate
        var myId = 'searchByGPS'+timeNow();
        //plotCircle(myId+"circle",6,'blue',myCoordsFound,.4);
        myId += "marker";
        map.addLayer({
            "id": myId,
            "type": "symbol",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": myCoordsFound
                    },
                    "properties": {
                        "title": "",
                        "icon": "circle-stroked"
                    }
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

        flyingToCoord(map,myCoordsFound,globals.params.zoomOnSearch);
    }
    // this is where we want the popup to show up
    // handleMouseenter(e,false) 
/*
        var myHTML = makeHTML(e,false);
        popupDodad = new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(myHTML);
            popupDodad.addTo(map);   // add the popup

http://jsfiddle.net/ft7s8son/

*/

}

function handleIdNotFound(id) {
        alert(id + " not found.   Try by TCT #");	
}

function findCoordById(id,searchBy) {
	// get array of all layer ids
    var layerIds = getLayerIds(map);
    		console.log("layerIds findCoordById",layerIds);
    return findParcelById(layerIds,id,searchBy);
	//return [-70.0765 , 42.000  ];  // LPF entrance
	//return [-70.07835, 42.00336];  // TCT 45

}

//
// flys to a coordinate on specified map, and zoom to level
//
function flyingToCoord(myMap,coords,zoomLevel) {
    		console.log("flyingToCoord",coords);
    myMap.flyTo({
        //myMap: coords,
        center: coords,

        // These options control the ending camera position: centered at
        // the target, at zoom level, and north up.
        zoom: zoomLevel,
        bearing: 0,

        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        speed: 1, // set the flying speed
        curve: 1, // change the speed at which it zooms out

        // This can be any easing function: it takes a number between
        // 0 and 1 and returns another number between 0 and 1.
        easing: function (t) {
            return t;
        }
    });
    updateFlying(true);
    map.once('moveend', function() {
        updateFlying(false);
    });

    // https://www.mapbox.com/mapbox-gl-js/example/flyto-options/


    /*
    // 
    // ^^^^^^^^^^^^^ BEGIN FLY POST PROCESSING [DEPRECATED] ^^^^^^^^^^^^^^^^^
    //
    // now fire the event "flystart" to signal flying taking place
    map.fire('flyStart');
    // http://jsfiddle.net/ft7s8son/
    // Note: map.fire('flyend') will be called at 'moveend'
    // NOTE: this is deprecated in v45 per 
    //     https://github.com/mapbox/mapbox-gl-js/blob/master/CHANGELOG.md#%EF%B8%8F-breaking-changes-3
    //     so better to leave this functionality dormant
    // 
    // ^^^^^^^^^^^^^ EBD OF FLY POST PROCESSING ^^^^^^^^^^^^^^^^^
    //
    */


}



//
// create html from properties of a parcel
// optionally add the coordinates
//
function makeHTML(e, withCoords, withDrone) {
    if (withDrone===undefined) withDrone=false;

    var props = e.features[0];
    var prop = e.features[0].properties;

        //console.log("props",props);
        //console.log("log",props.properties.log);
        //console.log("logtypeof",typeof props.properties.log);

    var myHTML = "<b>"+e.features[0].properties.title+"</b>";

    var status = e.features[0].properties.status;
    if (e.features[0].properties.status=='c') {
            myHTML += " &nbsp; CR";
    }
    else if (e.features[0].properties.status=='C') {
            myHTML += " &nbsp; FS";
    }
    else if (e.features[0].properties.status=='a') {
            myHTML += " &nbsp; Active";
    }
    else if (e.features[0].properties.status=='p') {
            myHTML += " &nbsp; Prospect";
    }
    else if (e.features[0].properties.status=='x') {
            myHTML += " &nbsp; NOT prospect";
    }
    else {
            myHTML += " &nbsp; "+e.features[0].properties.status;
    }

    myHTML += "<br>";
    myHTML += e.features[0].properties.acres + " acres";
    myHTML += " &nbsp; ";
    myHTML += "<em>"+e.features[0].properties.donor+"</em>";
    if (e.features[0].properties.acquired != undefined) {
        myHTML += " <em>";
        myHTML +=  e.features[0].properties.acquired.substring(0,4);
        myHTML += " </em>";
    }     

    myHTML += "<br>";
     if (e.features[0].properties.street != undefined) {
        myHTML +=  e.features[0].properties.street;
        myHTML += "<br>";
    }     

    myHTML +=  "Map-Lot: "+ makeMapLot(e.features[0].properties.map, e.features[0].properties.lot) ;
    myHTML += " "+keyHREF(prop);

     if (e.features[0].properties.habitat != undefined) {
        myHTML += "<br>";
        myHTML +=  "habitat: "+e.features[0].properties.habitat;
    }

    if (e.features[0].properties.description != undefined) {
        myHTML += "<br>";
        myHTML += "<em><span class='textGray'>";
        myHTML += wordwrap(e.features[0].properties.description, 40, '</br>');
        myHTML += "</span></em>";

    }       

    myHTML += "<hr>";

    myHTML +=  "Team "+e.features[0].properties.team;
            myHTML += "<br>";

    if (    (e.features[0].properties.lastInspected != undefined && e.features[0].properties.lastInspected != "" ) && 
            (status=='C' || status=="c") ) {
        myHTML +=  "inspected "+makeYYYYdashMM(e.features[0].properties.lastInspected);
                myHTML += "<br>";
    }
    if (e.features[0].properties.issues != undefined && e.features[0].properties.issues != "") {
        myHTML +=  "issues: "+e.features[0].properties.issues;
                myHTML += "<br>";
    }
     if (e.features[0].properties.photosTaken != undefined && e.features[0].properties.photosTaken != "") {
        myHTML +=  "photos taken: "+e.features[0].properties.photosTaken;
                myHTML += "<br>";
    }                                      


    if (e.features[0].properties.lastInspected!=undefined && e.features[0].properties.inspectYears!=undefined) {

        var inspect = needsInspection(e.features[0].properties.lastInspected, e.features[0].properties.inspectYears) ;
        if (inspect && status!='x' && status!='p'  && status!='a') {
            myHTML +=  "<button id='needsInspection' onclick='inputInspection()'>NEEDS INSPECTION</button>";
                        myHTML += "<br>";
        }
    }

    if (e.features[0].properties.photosURL != undefined && e.features[0].properties.photosURL != "") {
        var myHTML2 = "<a href='"
            +e.features[0].properties.photosURL
            +"' target='_photos'>photos</a>";
        console.log(e.features[0].properties.photosURL,myHTML2)
        myHTML += myHTML2;
                myHTML += "<br>";
    }

    /*
        // https://flylitchi.com/hub?m=jjVEZwqqgO
        if (e.features[0].properties.drone != undefined && e.features[0].properties.drone != "" && withDrone) {
            myHTML += "<a href='https://flylitchi.com/hub?m="
                +e.features[0].properties.drone
                +"' target='_drone'>drone</a>";
                        myHTML += "<br>";
        }
    */
    myHTML += makeDroneLink(e, withDrone, 'e');


    if (props.history!=undefined) {
        //var historiesCount = props.history.length;
           // myHTML += "<br>";
           // myHTML += historiesCount + " inspection entries";
            console.log("props.history",props.history,props.history.length);

        for (var x in props.history) {
            //myHTML += "<br>"+props.history[x];
            //myHTML += ": "+props.history[x];
        }
    }

    if (withCoords) {
        myHTML += "<br>";
        myHTML += "<small>"+ coordinatesHTML(e.features[0].geometry.coordinates) +"</small>";  
    }

    return myHTML;
}

function keyHREF(properties) {
    var myHTML = "<a href='https://www.axisgis.com/node/axisapi/document-view/TruroMA?path=Docs/Batch/Town%20Property%20Card/"+properties.key+".pdf' target='_assessorCard'>";
    myHTML += properties.key;
    myHTML += "</a>";
    return myHTML;
}    

//
// returns an href for a drone key to flylitchi.com
// 2 different modes to call it (depending on the parent object)
//
function makeDroneLink(e, withDrone, mode) {
    // https://flylitchi.com/hub?m=jjVEZwqqgO
    var myHTML = "";
    if (mode=='e') {
        if (e.features[0].properties.drone != undefined && e.features[0].properties.drone != "" && withDrone) {
            var myHTML = "<a href='https://flylitchi.com/hub?m="
                +e.features[0].properties.drone
                +"' target='_drone'>drone</a>";
                        myHTML += "<br>";
        }
    }
    else {
        if (e.drone != undefined && e.drone != "" && withDrone) {
            var myHTML = "<a href='https://flylitchi.com/hub?m="
                +e.drone
                +"' target='_drone'>drone</a>";
                        myHTML += "<br>";    
        }
    }

    return myHTML;
}


/*
//
// create HTML coordinate list from a coordinates array
//
function coordinatesHTML(coords) {

    var colors = ['green','blue','red','purple','magenta','gray'];
    var textColor;

    var myHTML = "";
    var l = coords[0].length;

    console.log("pre addPolygon length l=",l,coords);
fly
                    coords[0][i] 
                ] ;

    //if (l>4) {

    console.log("pre addPolygon colors",colors);

    var withLatLng=true;
    for (i=0;i<l-1;i++) {
        if (i<=4) {
            withLatLng = false;
        }
        else {
            withLatLng = true;
        }
        bounds = createSquare( coords[0][i], .000005);
            //console.log("bounds", bounds);

        if (i<colors.length) {
            textColor = colors[i];
        }
        else {
            textColor = colors[colors.length-1];  // repeat the last color
        }
            console.log("callING addPolygon i textColor",i,textColor,colors);

        addPolygon(coords[0][i], bounds, "test", .1, withLatLng, textColor, i);
    }
    return myHTML;
}
*/


//
// adds the coordinates to the vertices on the map
//
function addPolygon(center, coords, id0, opacity, withLatLng, textColor, i) {
//return;
        console.log("callED addPolygon",center, coords, id0, opacity, withLatLng, textColor);

    // form the coordinate line to display
    var coordLine = i + " " + center[0].toFixed(globals.params.precision) + ", " + center[1].toFixed(globals.params.precision);

    // create unique id for the new layer
    var id = id0 + coordLine +"~"+getMsec();
    var id2 = coordLine+"~"+getMsec(); // add the msec of time to make a unique id

    // optionally add a polygon with coordinates [coords]
    if (withLatLng) {
        console.log("addPolygon adding layer1",id);
        map.addLayer({
            'id': id,
            'type': 'fill',
            'source': {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [coords]
                    }
                }
            },
            'layout': {},
            'paint': {
                'fill-color': '#f00',
                'fill-opacity': opacity
            }
        });
    }

    // add the text for the coordinates at this point
    console.log("addPolygon adding layer2",id2);
    map.addLayer({
            "id": id2,
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
                            "coordinates": coords[0]
                        },
                        "properties": {
                            "title": coordLine,
                        }
                    }
                    ]
                }
            },
            "minzoom": 16,
            "maxzoom": 22.1,
            "layout": {
                //"icon-image": "{icon}-15",
                "text-field": "{title}",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [-0.9, -1.0],
/*
                'text-size': {
                 'property': 'status',
                 "type":"categorical",
                 'stops': [ ['p', 22], ['c', 44], ['a', 33], ['x', 8]  ]
                },
*/
                "text-anchor": "top",
                "text-size": 13
            },
              paint: {
                "text-color": textColor
              }

            // https://www.mapbox.com/mapbox-gl-js/style-spec/#layers
        });
}





function trueFalse(bool) {
    if (bool) return "true";
    return "false";
}

//
// returns an object with the various properties of the browser's device
//
function deviceSpecs() {
    var specs = {};
    specs.innerWidth = window.innerWidth;
    specs.innerHeight = window.innerHeight; 
    specs.availWidth = window.screen.availWidth;    // excludes things that block viewport,
    specs.availHeight = window.screen.availHeight;  // such as side panel, etc.

    var agent = navigator.userAgent;
    specs.userAgent= agent;  // the entire userAgent    
    specs.isIphone = agent.indexOf("iPhone") != -1 ;
    specs.isIpod   = agent.indexOf("iPod") != -1 ;
    specs.isIpad   = agent.indexOf("iPad") != -1 ;
    specs.isMac    = agent.indexOf("Macintosh") != -1 ;


    return specs;
}

function makeMapLot(map,lot) {
    map = map.toString();
    lot = lot.toString();
    if (map.length<3) map = "0"+map;
    if (map.length<3) map = "0"+map;
    if (lot.length<3) lot = "0"+lot;
    if (lot.length<3) lot = "0"+lot;
    return map+"-"+lot;
}


//
// display label at position center
//
function addLabelAtCenter(label,center,color,id) {
    if (color===undefined) {
        color='black';
    }
    else {
        console.log("adj addLabelAtCenter label centroid ",label,center,color);

    }
    // optionally specify the id explicitly, otherwise use the label as part of the id
    if (id===undefined) {
        id = "label"+label;
    }

    map.addLayer({
        "id": id,
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
                        "coordinates": center
                    },
                    "properties": {
                        "title": label,
                    }
                }
                ]
            }
        },
        "paint": {
            "text-color": color
        },

        "layout": {
            //"icon-image": "{icon}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, -0.5],

            //"text-size": 14,

            'text-size': [
                'match',
                ['get', 'abc'],
                'y', 10,
                'n', 22,
                /* other */ 14
            ],
            "text-anchor": "top"
        }
        // https://www.mapbox.com/mapbox-gl-js/style-spec/#layers
    });
}

//
// toggles the class name from active to "" (not active)
//
function toggleClassActive(thisClassName) {
    if (thisClassName=="active") return "";
    return "active";
}
//
// Toggles visibility of a div specified
// state of div is taken from DOM, so no other state variable is needed
// Can also force the div to be shown or hidden by true/false setting in 2nd argument
//
function toggleDiv(myDIV,force) {
    var x = document.getElementById(myDIV);
    if (x===undefined || x==null) {
        alert("trying to toggle undefined or null div "+myDiv);
        return;
    }
        console.log("toggleDiv",myDIV,"was x.style.display=",x.style.display,x.style.display.length);
    if (force!==undefined) {
        if (force) {
            x.style.display = "block";
        }
        else {
            x.style.display = "none";
        }
        return;
    }
    if (x.style.display == "none" || x.style.display.length==0) {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
        console.log("toggleDiv",myDIV,"now x.style.display=",x.style.display,x.style.display.length);
}

// 
// basic modal handling for prompts
//
function promptModal(modalDiv,promptText,helpDiv) {
    //helpDiv = "searchPromptModalHelp";
    //console.log("promptModal",modalDiv,promptText);
    toggleDiv('searchPromptModalDiv',true);
    toggleDiv('searchPromptModalHelp',true);
    var str = "";
    str += "<input id='searchPromptModalInput' ";
    str += " onkeydown = 'if (event.keyCode == 13) document.getElementById(";
    str += '"searchPromptModalOkBtn").click()';
    str += "'>";
    str += "<br>";
    str += "<button id='searchPromptModalCancelBtn' onclick='closeModal()'>Cancel</button>";
    str += "<button id='searchPromptModalOkBtn'>OK</button>";
    //str += "<button id='searchPromptModalOK' onclick='okModalClicked()'>OK</button>";

        //console.log("str",str);
    var el = document.getElementById('searchPromptModalDiv');
    el.innerHTML = str;
/*

    var okButton = document.getElementById('searchPromptModalOkBtn');
    var inputValue;

    okButton.onclick = function (e) {
        return;
        //var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        inputValue = document.getElementById('searchPromptModalInput').value;
        closeModal();
        //alert("okButton.onclick = "+inputValue);
        return inputValue;
    }
*/

    toggleDiv('searchPromptModalInput',true);
    document.getElementById('searchPromptModalInput').focus();
    toggleDiv('searchPromptModalCancelBtn',true);
    toggleDiv('searchPromptModalOkBtn',true);
    document.getElementById(helpDiv).innerHTML = promptText;

/*
    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.id = 'searchPromptModalOkBtn';
    link.textContent = 'OK';
    link.onclick = function (e) {
        //var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();
        alert("link.onclick");
    }
    console.log("link",link);
    //var layers = document.getElementById('searchPromptModalOK');
    //layers.appendChild(link);
*/

}
/*
// OK button was clicked (or return was keyed at end of a string)
function okModalClicked(inputDiv) {
    var inputValue = document.getElementById('searchPromptModalInput').value;
    closeModal();
    return inputValue;
    //alert("okModalClicked = "+inputValue);
}
*/
// hide all parts of the modal
function closeModal() {
    toggleDiv('searchPromptModalDiv',false);
    toggleDiv('searchPromptModalCancelBtn',false);
    toggleDiv('searchPromptModalOkBtn',false);
    toggleDiv('searchPromptModalHelp',false);
}


function satelliteMapStyle(newStyle) {
//
// this is how we toggle between map styles:
//  outdoor, satellite, light
//
//if (newStyle===undefined)

    mapSat = new mapboxgl.Map({
        container: 'map2',
        //style: 'mapbox://styles/mapbox/light-v9',    // lighter version
        //style: 'mapbox://styles/mapbox/satellite-v9. // satellite version
        style: "mapbox://styles/mapbox/outdoors-v10",

        // style needed for SATELLITE Add/Remove option from DanS. (DOESN'T SUPPORT outdoors-v10 as underlayer)
        // style: 'mapbox://styles/danswick/cilnegnzr00439gkf7urxz0xk', //stylesheet location

        center: mapCenter,
        zoom: 13.9,
        options: mapOptions
    });
    newStyle = 'satellite';
    mapSat.setStyle('mapbox://styles/mapbox/' + newStyle + '-v9');
    //alert(newStyle);

    var map1 =   document.getElementById("map");  

            map1.style.zindex = 2;   // default map on top
            map1.style.opacity = .5; // partial opacity

    var map2 =   document.getElementById("map2");  
    map2.style.opacity = .5;

            map2.style.zindex = 1;  // satellite map on bottom
            map2.style.opacity = 1; // full opacity

    setMapSatZoom();    // sync map2 to map
}
//
// handle user clicking Satellite / Map button
//
function toggleSatellite(whichImage) {
        //console.log("toggleSatellite whichImage showSatellite",whichImage,showSatellite);
    var btnOn, btnOff;
    if (whichImage=='map') {
        btnOn = document.getElementById('map-ctrl');
        btnOff = document.getElementById('satellite-ctrl');
        showSatellite = false;  // global
    }
    else {
        btnOn = document.getElementById('satellite-ctrl');
        btnOff = document.getElementById('map-ctrl');
        showSatellite = true;  // global
    }
        //console.log("toggleSatellite showSatellite is now",showSatellite,btnOn,btnOff);

    // toggle the buttons visibilities
    btnOn.style.display = 'none';
    btnOff.style.display = 'block';

    if (showSatellite) {
        // turning on the satellite map
        satelliteMapStyle();
        setMapSatZoom();    // sync map2 to map
    }
    else {
        // turning off the satellite map
        var map1 =   document.getElementById("map");  
        map1.style.opacity = 1;
        var map2 =   document.getElementById("map2");  
        map2.style.opacity = 0;
    }
}
//
// set the satellite map center and zoom to match base map
//
function setMapSatZoom() {
        var z=map.getZoom();
        var c=map.getCenter();
                //console.log("map.getZoom",z,c);
        var map2 =   document.getElementById("map2");  

        if (mapSat!=undefined) {
            mapSat.setZoom(z);  // zoom map2 to same level   
            mapSat.setCenter(c);  // center map2 to same as map1   

            map.style.zindex = 2;   // default map on top
            map.style.opacity = 1; // partial opacity

            map2.style.zindex = 1;  // satellite map on bottom
            map2.style.opacity = 1; // full opacity
        } 
}


//
// toggle Help
//
function toggleHelp() {
    showHelp = !showHelp;  // global
    doToggle(showHelp,'toggleHelp','helpText');
}


//
// toggle Import
//
function toggleImport() {
   toggleDiv("gpsFile");
}
//
// toggle Import
//
function toggleGpsFileHelp() {
   toggleDiv("gpsFileHelpDiv");
}


//
// toggle Screen
//
function toggleScreen() {
   toggleDiv("screenFile");
}



//
//generic toggle handler
//
function doToggle(showVar,btnId,boxId) {
    var btn = document.getElementById(btnId);
    var box = document.getElementById(boxId);

    if (showVar) {
            btn.className = 'buttonOn';
            box.style.display = 'block';            
    }
    else {
            btn.className = 'buttonOff';
            box.style.display = 'none';
    }    
}

//
// toggle measure distance
//
function toggleMeasureDistance() {

    showMeasureDistance = !showMeasureDistance;  // global
    doToggle(showMeasureDistance,'toggleMeasureDistance','distance');

    // now if we just toggled it off, we remove the points and line 
        // id: 'measure-points',
        // id: 'measure-lines',
    if (!showMeasureDistance) {
        // hide the points and connecting lines
        map.setLayoutProperty('measure-points', 'visibility', 'none');
        map.setLayoutProperty('measure-lines', 'visibility', 'none');
        geojson.features = [];   // zero out the features
        linestring.geometry.coordinates = [];
        map.getSource('geojson').setData(geojson);
        distanceContainer.innerHTML = '';
        map.getCanvas().style.cursor = 'default';
    }
    else {
        geojson.features = [];   // zero out the features
        linestring.geometry.coordinates = [];
        map.setLayoutProperty('measure-points', 'visibility', 'visible');
        map.setLayoutProperty('measure-lines', 'visibility', 'visible');  
        distanceContainer.innerHTML = 'Click Map Points to Measure';
        map.getCanvas().style.cursor = 'crosshair';
    }
}

//
// toggle legend
//
function toggleLegend() {
    showLegend = !showLegend;
    var btn = document.getElementById('toggleLegend');
    var box = document.getElementById('legend');
    if (showLegend) {
            btn.className = 'buttonOn';
            box.style.display = 'block';            
    }
    else {
            btn.className = 'buttonOff';
            box.style.display = 'none';
    }
}
//
// toggle popups
//
function togglePopups() {
    showPopups = !showPopups;
    //var str = "ON";
    var btn = document.getElementById('togglePopups');
    //if (showPopups) str = "off";
    //document.getElementById('togglePopups').innerHTML = "turn Popups "+str;

    if (showPopups) {
            btn.className = 'buttonOn';
    }
    else {
            btn.className = 'buttonOff';
    }
}

//
// toggle drawing functions
//
function toggleDrawing() {

    showDrawing = !showDrawing;
    //var str = "ON";
    var btn = document.getElementById('toggleDrawing');

    if (showDrawing) {
        showCalcs();
        draw.options.controls.line_string = true;
        draw.options.controls.polygon = true;
        draw.options.controls.trash = true;
        draw.options.controls.point = true;
        draw.options.controls.combine_features = true;
        draw.options.controls.uncombine_features = true;

        map.addControl(draw);   // add controls to map
        btn.className = 'buttonOn';
    }
    else {
        hideCalcs();
        draw.options.controls.line_string = false;
        draw.options.controls.point = false;
        draw.options.controls.polygon = false;
        draw.options.controls.trash = false;
        draw.options.controls.combine_features = false;
        draw.options.controls.uncombine_features = false;

        draw.displayControlsDefault = false;

        map.removeControl(draw);
        btn.className = 'buttonOff';
    }

    console.log("draw.options.controls",draw.options.controls);

    // even though the options are now set, the controls still show until refreshed
    // https://www.mapbox.com/mapbox-gl-js/example/mapbox-gl-draw/
}
//
// toggle parcel labels
//
function toggleLabels() {

    showLabels = !showLabels;
    var btn = document.getElementById('toggleLabels');

    if (btn.className === 'buttonOff') {
            btn.className = 'buttonOn';
    }
    else {
            btn.className = 'buttonOff';
    }

    if (showLabels) {
        for (var i=0;i<TCTparcelsLen;i++) {
            var n = TCTparcels[i]; 
            var obj = tct["id_"+n];
            // show the lable if specified

            //.log("labels2",n,globals.parameters.status.labels,obj.properties.status);

            //if ( globals.parameters.status.labels.indexOf(obj.properties.status)>=0 ) {
                addLabel(obj,n);
            //}
        }
    }
    else {
        for (var i=0;i<TCTparcelsLen;i++) {
            var n = TCTparcels[i]; 
            var obj = tct["id_"+n];  
            removeLabel(n);
        }        
    }
}

function toggleableLayers() {

//
// these are the layer ids that can be toggled on/off
// the form a menu of buttons that can be toggled, causing layers to be visible or hidden
//
    var toggleableLayerIds = [ 'labels', 'signs', 'trails', 'contours'];
    if (globals.params.mapStyle != "light-v9") {
        toggleableLayerIds.push('hillshading');  // not available in this map style
    }
    toggleableLayerIds.push('grid');
    toggleableLayerIds.push('landmarks');
    toggleableLayerIds.push('beaches');
    toggleableLayerIds.push('food/bev');
    toggleableLayerIds.push('Public');
    toggleableLayerIds.push('TownLand');
    toggleableLayerIds.push('NPS');
    toggleableLayerIds.push('groups');
    toggleableLayerIds.push('teams');
    toggleableLayerIds.push('legend');
    toggleableLayerIds.push('coords');
    toggleableLayerIds.push('help');

    // 
    // A layer can have linked layers to it, that are toggled when that layer is toggled.
    // The parent layer will appear first in the array of LinkedIds, followed by the linked layers
    //
    var toggleableLayerLinkedIds = {};

    //toggleableLayerLinkedIds.trails = ["trails2","trailsMore"];  // trail ids that are linked to first trail id = trails

    //
    // can also use wildcard notation to link layers by a root word at the beginning of the id
    //
    toggleableLayerLinkedIds["trails"] = ["trails*"];  // ids that are linked can use a wildcard at the end
    toggleableLayerLinkedIds["grid"] = ["grid*"];  // grid lines and labels
    toggleableLayerLinkedIds["Public"] = ["TownBldgs*"];  // Town buildings 
    toggleableLayerLinkedIds["TownLand"] = ["ToT*"];  // ToT fills and boundaries
    toggleableLayerLinkedIds["NPS"] = ["national_park*"];  // ToT fills and boundaries
    toggleableLayerLinkedIds["signs"] = ["TCT-sign*"];  // TCT signs
    toggleableLayerLinkedIds["labels"] = ["TCT-label_*"];  // TCT signs
    toggleableLayerLinkedIds["groups"] = ["group*"];  // grouped parcels
    toggleableLayerLinkedIds["teams"] = ["TCT-team*"];  // team territories
    //toggleableLayerLinkedIds["legend"] = [""];  // legend

    //
    // Can also specify an array of divs that can be toggled when the layer is toggled
    // Useful if there is a legend box that explains the layer
    //
    var toggleableLayerLinkedDivs = {};
    toggleableLayerLinkedDivs["teams"] = ["teams"];
    toggleableLayerLinkedDivs["legend"] = ["legend"];
    toggleableLayerLinkedDivs["coords"] = ["coordinatesDiv","zoomDiv"];
    toggleableLayerLinkedDivs["help"] = ["helpText"];

    // setup listeners for each toggleable layer id's menu button
    for (var i = 0; i < toggleableLayerIds.length; i++) {
        //var id = toggleableLayerIds[i];
        var link = document.createElement('a');
        link.href = '#';
        link.className = 'active';
        link.textContent = toggleableLayerIds[i];

        // when that button link is clicked, toggle the visibility
        link.onclick = function (e) {
            var clickedLayer = this.textContent;
            e.preventDefault();
            e.stopPropagation();

            // case where there are no linked ids or its the master id of a linked set
                        //console.log("getLayoutProperty of clickedLayer",clickedLayer);

            var arrayOfLayerIds = getLayerIds(map);
            var menuClassUpdated = false; // has the menu button CSS class been updated?

            // is the clickedLayer a real layer (or just a button name) ?
            if (isInArray(clickedLayer,arrayOfLayerIds)) {

                var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
                        console.log("clicked on "+clickedLayer+" it's visibility is "+visibility);
                if (visibility === 'visible') {
                    map.setLayoutProperty(clickedLayer, 'visibility', 'none');  // turn off layer's visibility
                    this.className = '';
                } else {
                    this.className = 'active';
                    map.setLayoutProperty(clickedLayer, 'visibility', 'visible'); // make layer visible
                }
                menuClassUpdated = true;

                var linkedIdsCount = 0;
                if (toggleableLayerLinkedIds[clickedLayer]!=undefined) linkedIdsCount = toggleableLayerLinkedIds[clickedLayer].length;
            }
            else {
                // The menu label is not an actual layer.  Must have linked layers.
                if (toggleableLayerLinkedIds[clickedLayer]!=undefined) {
                    var useLayerId = toggleableLayerLinkedIds[clickedLayer][0];
                }
                // So let's examine the first layer in the linked list
            }

            var linkedWildcardId = null;

            // there are linked ids
            if (toggleableLayerLinkedIds[clickedLayer]!=undefined) {

                // is this a single wildcard at the end?
                var isWildcard = null;
                if (linkedIdsCount>1) {
                isWildcard=false; // there is more than one linked so it is NOT a wildcard
                        console.log("1 isWildcard ",isWildcard);
                }
                else if (toggleableLayerLinkedIds[clickedLayer][0].charAt(toggleableLayerLinkedIds[clickedLayer][0].length-1)=="*") {
                    isWildcard = true;
                    linkedWildcardId = toggleableLayerLinkedIds[clickedLayer][0];
                            console.log("2 isWildcard ",isWildcard,linkedWildcardId);
                }
                        console.log("3 isWildcard ",isWildcard,linkedWildcardId);

                if (isWildcard==null) {
                    alert("linked layer ids is not proper for "+clickedLayer);
                }

                if (!isWildcard) {
                            console.log(clickedLayer+" has "+linkedIdsCount+" subIds");
                    for (var j=0;j<linkedIdsCount;j++) {
                        var linkedLayer = toggleableLayerLinkedIds[clickedLayer][j];
                                console.log("linkedLayer "+linkedLayer);
                        var visibility = map.getLayoutProperty(linkedLayer, 'visibility');
                                console.log("clicked on "+clickedLayer+" it's visibility is "+visibility);
                        if (visibility === 'visible') {
                            map.setLayoutProperty(linkedLayer, 'visibility', 'none');
                        } else {
                            map.setLayoutProperty(linkedLayer, 'visibility', 'visible');
                        }
                    }                
                } 
                else {
                    var countOfLayerIds = arrayOfLayerIds.length;
                    var rootId = linkedWildcardId.substring(0,linkedWildcardId.length-1);  // this is what we match into the list of layer ids

                                console.log("rootId ",rootId);
                                console.log("listOfLayerIds ",countOfLayerIds,arrayOfLayerIds);

                    var strWindowFeatures = "menubar=no,location=yes,resizable=yes,scrollbars=yes,status=yes";
                    //var winPrint = window.open('', '', 'left=0,top=0,width=800,height=600,toolbar=0,scrollbars=0,status=0');

                    // http://jsfiddle.net/Sarathv15/8dXvt/420/

                    // don't show data page if toggling CCNS (national park)
                    if (rootId.indexOf('national')==-1 && 1==0) {
                        var winPrint = window.open('', '', strWindowFeatures);
                        winPrint.document.write('<title>Map Data</title><br/><br/><h2>Data on the Map</h2>');
                        //winPrint.document.close();
                        winPrint.focus();
                        //winPrint.print();  // cause the print dialogue box to appear
                        //winPrint.close(); 
                    }

                    for (var j=0;j<countOfLayerIds;j++) {

                        if (
                            arrayOfLayerIds[j].substring(0,rootId.length)==rootId &&    // matches the root
                            arrayOfLayerIds[j]!=clickedLayer    // is not the parent layer of the linked ids
                            ) {
                                        console.log("match at",j,arrayOfLayerIds[j]);
                            if (arrayOfLayerIds[j].substring(0,3)=="TCT") {
                                strWindowContent += "<br>match at "+j+" "+arrayOfLayerIds[j];
                            }

                            this.className = toggleLayer(arrayOfLayerIds[j]);
                            if (!menuClassUpdated) {
                                menuClassUpdated = true;
                            }
                        }
                    } // end of for loop

                    if (arrayOfLayerIds[0].substring(0,3)=="TCT" || 1==1) {
                        strWindowContent += "<hr>";
                        //winPrint.document.write(strWindowContent);
                    }
                }
            }

            // this is where we toggle any divs that are linked to this layer
            if (toggleableLayerLinkedDivs[clickedLayer]!=undefined) {
                    //this.className = 'active';
                if (!menuClassUpdated) {
                    this.className = toggleClassActive(this.className);
                    menuClassUpdated = true;
                }

                var divsLen = toggleableLayerLinkedDivs[clickedLayer].length; // how many divs
                var divToToggle;
                for (var dd=0;dd<divsLen;dd++) {
                    divToToggle = toggleableLayerLinkedDivs[clickedLayer][dd];
                    console.log("toggleDiv divsLen",divsLen,dd,divToToggle);
                    toggleDiv(divToToggle);
                }
            }


        };  // end of link.onclick
        // actually add the button/link to the menu
        var layers = document.getElementById('menu');
        layers.appendChild(link);
    }
    // https://next.plnkr.co/edit/HxV766XO1F8FXZbUqRNh?p=preview&utm_source=legacy&utm_medium=worker&utm_campaign=next&preview

}   // end of toggleableLayers()

//
// Check the visibility of a layer, and toggle it
// Return what a class name for use with styling a button or link:
//   if visible, "active", othwerwise ""
// Can force the layer on/off with optional 2nd argument true/false
//
function toggleLayer(myLayer,force) {
    // if forcing, then do that
    if (force!==undefined && force!=null && force!="") {
        if (force) {
            map.setLayoutProperty(myLayer, 'visibility', 'visible');
            return 'active';        }
        else {
            map.setLayoutProperty(myLayer, 'visibility', 'none');
            return '';        }
    }
    // Not forcing, so get the visibility property of this layer id
    var visibility = map.getLayoutProperty(myLayer, 'visibility');
    // if it's visible, make it not so
    if (visibility === 'visible' ) {
        // https://www.mapbox.com/mapbox-gl-js/api/#map#setlayoutproperty
        map.setLayoutProperty(myLayer, 'visibility', 'none');
        return '';
    // it's not visible, so make it visible
    } else {
        map.setLayoutProperty(myLayer, 'visibility', 'visible');
        return 'active';
    }
}
//
// toggles all layers that match a wildcard string argument
//
function toggleLayersWildcard(myLayersWithWildcard,force) {
    var arrayOfLayerIds = getLayerIds(map);

    var countOfLayerIds = arrayOfLayerIds.length;
    var rootId = myLayersWithWildcard.substring(0,myLayersWithWildcard.length-1);  // this is what we match into the list of layer ids

                //console.log("rootId ",rootId);
                //console.log("listOfLayerIds ",countOfLayerIds,arrayOfLayerIds);
    for (var j=0;j<countOfLayerIds;j++) {

        if (
            arrayOfLayerIds[j].substring(0,rootId.length)==rootId     // matches the root
            //&& arrayOfLayerIds[j]!=""    // is not the parent layer of the linked ids
            ) {
                        console.log("match at",j,arrayOfLayerIds[j]);
                toggleLayer(arrayOfLayerIds[j],force);
        }
    }
}

//
// ?help=1 will display this in help
//
function loadHelpText() {
        //console.info("getParameter help is true");
    var helpText = "HELP:<br>";
    helpText += "lpf=1 show LPF properties<br>";
    helpText += "near > 0 enable click to show nearby points within threshold degrees<br>";  
    //helpText += "md   = 1 click to measure distance between points<br>";   // NOW IS A BUTTON
    helpText += "dev=1 enable developer tools (including inspector)<br>";
    //helpText += "date = YYYYMMDD latest date for property acquisitions<br>";
    helpText += "s= TCT # to fly to, or other search options<br>";
    helpText += "pre= digits of GPS precision (default=5)<br>";
    helpText += "mapstyle= specify map style ( streets-v10, satellite-streets-v10, outdoors-v10, light-v9, dark-v9, satellite-v9 )<br>";
    helpText += "ll= specify lng,lat to center on<br>";
    helpText += "team= Team(s) to filter<br>";
    helpText += "tl= px from left edge for the Team legend<br>";
    helpText += "h=1 highlight team territories<br>";
    helpText += "u= width of outine highlighting adjacent parcels (>=6 for visibility)<br>";
    helpText += "sl= statuses for which to show labels<br>";
    helpText += "st= statuses for which to fill polygons<br>";
    helpText += "su= statuses to include in groups<br>";
    helpText += "xy= display x,y screen position and dimensions<br>";
        //console.info(helpText);
    helpText += "<br>";

    if (getParameter("help")=="1") {
        toggleDiv("helpText",true);  // force hidden
    }
    else {
        toggleDiv("helpText",false);  // force hidden
    }
    document.getElementById("helpText").innerHTML = helpText;
}


//
// setup game key help and key listeners
//
function gameKeys() {
    // https://www.mapbox.com/mapbox-gl-js/example/game-controls/
    var gameKeyHelpText;
    gameKeyHelpText = "";
    gameKeyHelpText += "<h3>Keyboard Commands</h3>";
    gameKeyHelpText += "<table>";
    gameKeyHelpText += "<tr><td>&uarr;</td><td>pan the map upward</td></tr>";
    gameKeyHelpText += "<tr><td>&darr;</td><td>pan the map downward</td></tr>";
    gameKeyHelpText += "<tr><td>&larr;</td><td>move the map center left</td></tr>";
    gameKeyHelpText += "<tr><td>&rarr;</td><td>pan the map center right</td></tr>";
    gameKeyHelpText += "<tr><td>&#8679;&uarr;</td><td>more pitch</td></tr>";
    gameKeyHelpText += "<tr><td>&#8679;&darr;</td><td>less pitch</td></tr>";
    gameKeyHelpText += "<tr><td>&#8679;&larr;</td><td>rotate clockwise</td></tr>";
    gameKeyHelpText += "<tr><td>&#8679;&rarr;</td><td>rotate counter clockwise</td></tr>";
    gameKeyHelpText += "<tr><td>page up</td><td>zoom out</td></tr>";
    gameKeyHelpText += "<tr><td>page down</td><td>zoom in</td></tr>";
    gameKeyHelpText += "<tr><td>&#94; control</td><td>toggle this help</td></tr>";
    gameKeyHelpText += "<tr><td>&#9099; escape</td><td>toggle this help</td></tr>";
    gameKeyHelpText += "</table>";

    // http://xahlee.info/comp/unicode_computing_symbols.html
    document.getElementById("gameKeyHelp").innerHTML = gameKeyHelpText;

    // pixels the map pans when the up or down arrow is clicked
    var deltaDistance = 100;
    // degrees the map rotates when the left or right arrow is clicked
    var deltaDegrees = 25;
    // zoom key  gets the zoom and then sets it +/-
    var deltaZoom = .1;

    map.getCanvas().focus();
    map.getCanvas().addEventListener('keydown', function(e) {
        e.preventDefault();
        console.log("key=",e.which);
    // 33 page up
    // 34 page down
    // 18 option.  + left/right will spin the map
    // 91 command
    // 16 shift.   + up/down will change the pitch, left/right will spin the map
    // 17 control
    // 191 ?
    // 36 home
    // 35 end
    // 27 esc
    // 9 tab
    // 32 space

        if (e.which === 38) { // up
            map.panBy([0, -deltaDistance], {
                easing: easing
            });
        } else if (e.which === 40) { // down
            map.panBy([0, deltaDistance], {
                easing: easing
            });
        } else if (e.which === 37) { // left
            map.easeTo({
                bearing: map.getBearing() - deltaDegrees,
                easing: easing
            });
        } else if (e.which === 39) { // right
            map.easeTo({
                bearing: map.getBearing() + deltaDegrees,
                easing: easing
            });
        } else if (e.which === 33) { // page up
            map.setZoom(map.getZoom()-deltaZoom);
        } else if (e.which === 34) { // page down
            map.setZoom(map.getZoom()+deltaZoom);
        } else if (e.which === 17 || e.which === 27) { // control or esc
            toggleDiv("gameKeyHelp");
        }
    }, true);
    //
    // this easing function changes quickly at 0 start 
    // and then slows as it approaches 1
    //
    function easing(t) {
        return t * (2 - t);
        // 0  ==> 0
        // .1 ==> .19
        // .2 ==> .36
        // .3 ==> .51
        // .4 ==> .64
        // .5 ==> .75
        // .6 ==> .84
        // .7 ==> .91
        // .8 ==> .96
        // .9 ==> .99
        // 1  ==> 1
    }
}

function getLayers(myMap) {
    if (myMap===undefined) myMap=map;
    var allLayersArray = getLayerIds(myMap);
        console.log("getLayers in ",myMap,allLayersArray);
    return allLayersArray;
}

