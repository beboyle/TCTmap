/*

PLOT EXISTING TCT PARCELS
FIND ADJACENT PARCELS THAT ARE UNDEVELOPED



STATUSES
a = active negotiations
p = prospect contacted
d = developable land
u = undevelopable land

r = resident. (not a prospect)

*/





function addFutures() {
    TCTparcels.push("A2");  // Wright

    TCTparcels.push("A3_002");  // WALSH

    TCTparcels.push("A3_008");  // WALSH
    TCTparcels.push("A3_009");  // WALSH
    TCTparcels.push("A3_010");  // WALSH
    TCTparcels.push("A3_013");  // WALSH
    TCTparcels.push("A3_133");  // WALSH
    TCTparcels.push("A3_134");  // WALSH
    TCTparcels.push("A3_135");  // WALSH


    // Pamet

    TCTparcels.push("050142");  // Todd
    TCTparcels.push("050212");  // Morea
    TCTparcels.push("050214");  // Frank

    TCTparcels.push("050002");
    TCTparcels.push("050173");  // Furlaud

    TCTparcels.push("050209");
    TCTparcels.push("049015");
    
    // Little Pamet River area
    TCTparcels.push("046028");
    TCTparcels.push("046070");
    TCTparcels.push("046291");
    TCTparcels.push("046090");

// 045126 16 Perry Rd     Perry.  key 5599. $14330.   34.57 Ac
// 045088 0 Corn Hill Rd     ATWOOD TAMSIN HEIRS OF.  key 2195. $5700.   1.24 Ac.   island of marsh in Little Pamet (inside 045126)




    // Wisniewski (Beach Point)
    TCTparcels.push("013008");
    //TCTparcels.push("013013");    // hide this one for now as we map the Cotnoir parcel
    TCTparcels.push("013019");    


// Pond Rd area
    TCTparcels.push("036056");  // 22 Pond Rd, HOWARD LILLIAN A LIFE ESTATE



    TCTparcels.push("045120");  // Mayflower

    TCTparcels.push("017001");  // Cotnoir

// TCT Trustees
    TCTparcels.push("058008");  // Tosh





    console.log("TCTparcels",TCTparcels);
}


tct.id_058008 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 058008",          // displays in center of parcel
                            "label": "058008 Tosh",     // displays instead of title                            
                            "donor": "Tosh",    // short name of donor
                            "grantor": "Karen Tosh",      // long name of donor
                            "acquired": "",
                            "street":"24 Cooper Rd",
                            "acres": .793,
                            "acresUpland":  0.793,    
                            "acresWetland": 0,
                            "map": 58,
                            "lot": 8,
                            "key": 3398,  // assessors card key
                            "habitat": "",
                            "status": "p",

            // https://www.sail1620.org/pilgrim-memorials-around-the-world/massachusetts-truro-barnstable-co
                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "D",
                            "lastInspected": "",
                            "issues": "",
                            "photosTaken": "",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 513400,   // assessed TOTAL
                            "assessedPrevious": 494600,   // assessed TOTAL previous

                            "inspectYears": 99,

                            //"description": "",    // external viewing                        
                            "comments":"017-001-003 is the assessor index",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.074 ,41.9742],  // optional
                            "coordinates": 
                                [
                                    [
                                    [-70.07448 ,41.97405],  // btm L
                                    [-70.07446 ,41.97413],   // bend
                                    [-70.07443 ,41.97418],
                                    [-70.07440 ,41.97423],
                                    [-70.07437 ,41.97426],

                                    [-70.07430 ,41.97432],  // bend
                                    [-70.07422 ,41.97439],
                                    [-70.07398 ,41.97461],  // top
                                    [-70.07344 ,41.97423],  // R
                                    [-70.07376 ,41.97401],  // btm R

                                    [-70.07448 ,41.97405]   // repeat 1st

                                    ]
                                ]
                        }
                    };






tct.id_017001 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 017001",          // displays in center of parcel
                            "label": "017001 Cotnoir",     // displays instead of title                            
                            "donor": "Cotnoir",    // short name of donor
                            "grantor": "Cotnoir",      // long name of donor
                            "acquired": "",
                            "street":"263 Shore Rd",
                            "acres": .767,
                            "acresUpland":  0.767,    
                            "acresWetland": 0,
                            "map": 17,
                            "lot": 1,
                            "key": 6570,  // assessors card key
                            "habitat": "",
                            "status": "p",

            // https://www.sail1620.org/pilgrim-memorials-around-the-world/massachusetts-truro-barnstable-co
                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "A",
                            "lastInspected": "",
                            "issues": "",
                            "photosTaken": "",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 295600,   // assessed TOTAL
                            "assessedPrevious": 281700,   // assessed TOTAL previous

                            "inspectYears": 99,

                            //"description": "",    // external viewing                        
                            "comments":"017-001-003 is the assessor index",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.1143, 42.0481],  // optional
                            "coordinates": 
                                [
                                    [
                                    [-70.11484, 42.04809],  // L
                                    [-70.11450, 42.04847],  // top
                                    [-70.11388, 42.04815],  // R
                                    [-70.11421, 42.04776],  // btm

                                    [-70.11484, 42.04809]

                                    ]
                                ]
                        }
                    };




tct.id_045120 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 045120",          // displays in center of parcel
                            "label": "Mayflower",     // displays instead of title                            
                            "donor": "Mayflower",    // short name of donor
                            "grantor": "Mayflower Descendants Gen Soc",      // long name of donor
                            "acquired": "",
                            "street":"Corn Hill Rd",
                            "acres": .06,
                            "acresUpland":  0.06,    
                            "acresWetland": 0,
                            "map": 45,
                            "lot": 120,
                            "key": 2223,  // assessors card key
                            "habitat": "",
                            "status": "c",

            // https://www.sail1620.org/pilgrim-memorials-around-the-world/massachusetts-truro-barnstable-co
                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "B",
                            "lastInspected": "",
                            "issues": "",
                            "photosTaken": "",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 300,   // assessed TOTAL
                            "assessedPrevious": 300,   // assessed TOTAL previous

                            "inspectYears": 99,

                            //"description": "",    // external viewing                        
                            //"comments":"",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07978, 42.0038],  // optional
                            "coordinates": 
                                [
                                    [
                                    [-70.07990, 42.00383],  // L
                                    [-70.07974, 42.00390],  // top
                                    [-70.07966, 42.00378],  // R
                                    [-70.07982, 42.00371],  // btm

                                    [-70.07990, 42.00383]

                                    ]
                                ]
                        }
                    };



tct.id_036056 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 036056",          // displays in center of parcel
                            "label": "036056 HOWARD",     // displays instead of title                            
                            "donor": "Howard",    // short name of donor
                            "grantor": "HOWARD LILLIAN A LIFE ESTATE",      // long name of donor
                            "acquired": "",
                            "street":"22 Pond Rd",
                            "acres": .27,
                            "acresUpland":  0,    
                            "acresWetland": 0,
                            "map": 36,
                            "lot": 56,
                            "key": 953,  // assessors card key
                            "habitat": "",
                            "status": "c",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "A",
                            "lastInspected": "",
                            "issues": "",
                            "photosTaken": "",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 1400,   // assessed TOTAL
                            "assessedPrevious": 1400,   // assessed TOTAL previous

                            "inspectYears": 99,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.09055, 42.0322],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.09087, 42.03227],  // L
                                        [-70.09045, 42.03245],  // top
                                        [-70.09027, 42.03220],  // R
                                        [-70.09039, 42.03216],  // bend
                                        [-70.09049, 42.03211],  // bend
                                        [-70.09059, 42.03205],  // bend
                                        [-70.09066, 42.03200],  // btm

                                        [-70.09087, 42.03227]

                                    ]
                                ]
                        }
                    };


tct.id_046028 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 046028",          // displays in center of parcel
                            "label": "046028 STEWART",     // displays instead of title                            
                            "donor": "STEWART",    // short name of donor
                            "grantor": "TABAKIN STEWART & FIUMARA SALVATORE",      // long name of donor
                            "acquired": "",
                            "street":"81 Castle Rd",
                            "acres": 1.56,
                            "acresUpland":  0,    
                            "acresWetland": 1.56,
                            "map": 46,
                            "lot": 28,
                            "key": 2256,  // assessors card key
                            "habitat": "",
                            "status": "p",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "B",
                            "lastInspected": "",
                            "issues": "",
                            "photosTaken": "",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 6400,   // assessed TOTAL
                            "assessedPrevious": 6400,   // assessed TOTAL previous

                            "inspectYears": 99,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0692, 42.0047],  // optional
                            "coordinates": 
                                [
                                    [
                                        // 046028
                                        [-70.06939, 42.00521],
                                        [-70.06837, 42.00459],
                                        [-70.06975, 42.00427],
                                        [-70.06977, 42.00453],
                                        [-70.06971, 42.00476],
                                        [-70.06939, 42.00521]

                                        /*
                                        [-70.11774, 42.04955],  // L
                                        [-70.11742, 42.05000],  // top (intersect)
                                        [-70.11726, 42.04992],  // R (intersect)
                                        [-70.11760, 42.04948],  // btm

                                        [-70.11774, 42.04955]   // close polygon by repeating 1st point
                                        */
                                    ]
                                ]
                        }
                    };


tct.id_046070 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 046070",          // displays in center of parcel
                            "label": "046070 PERKINS",     // displays instead of title                            
                            "donor": "Perkins",    // short name of donor
                            "grantor": "PERKINS OSGOOD & ELVIS",      // long name of donor
                            "acquired": "",
                            "street":"70 Castle Rd",
                            "acres": 13.04,
                            "acresUpland":  13.04,    
                            "acresWetland": 0,
                            "map": 46,
                            "lot": 70,
                            "key": 2298,  // assessors card key
                            "habitat": "",
                            "status": "p",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "B",
                            "lastInspected": "",
                            "issues": "",
                            "photosTaken": "",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 820300,   // assessed TOTAL
                            "assessedPrevious": 820300,   // assessed TOTAL previous

                            "inspectYears": 99,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.069, 42.0019],  // optional
                            "coordinates": 
                                [
                                    [
[-70.07093, 42.00299],
[-70.07056, 42.00309],
[-70.07021, 42.00314],
[-70.06984, 42.00312],
[-70.06936, 42.00301],
[-70.06886, 42.00289],
[-70.06846, 42.00271],
[-70.06815, 42.00251],
[-70.0679, 42.00235],
[-70.06718, 42.00202],
[-70.06683, 42.00191],
[-70.06727, 42.00164],
[-70.06741, 42.00153],
[-70.06767, 42.00118],
[-70.06782, 42.00102],
[-70.06801, 42.0009],
[-70.06832, 42.0008],
[-70.06896, 42.00067],
[-70.06903, 42.00065],
[-70.06937, 42.00116],
[-70.06955, 42.00142],
[-70.07006, 42.00111],
[-70.07029, 42.00174],
[-70.0707, 42.00254],
[-70.07093, 42.00299]

                                    ]
                                ]
                        }
                    };



tct.id_046090 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 046090",          // displays in center of parcel
                            "label": "046090 ANDERSON",     // displays instead of title                            
                            "donor": "Anderson",    // short name of donor
                            "grantor": "ANDERSON ARTHUR",      // long name of donor
                            "acquired": "",
                            "street":"11 Corn Hill Rd",
                            "acres": 1.84,
                            "acresUpland":  0,    
                            "acresWetland": 0,
                            "map": 46,
                            "lot": 90,
                            "key": 2197,  // assessors card key
                            "habitat": "",
                            "status": "p",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "B",
                            "lastInspected": "",
                            "issues": "",
                            "photosTaken": "",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 6700,   // assessed TOTAL
                            "assessedPrevious": 6700,   // assessed TOTAL previous

                            "inspectYears": 99,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.073, 42.0031],  // optional
                            "coordinates": 
                                [
                                    [
                                   [-70.07479, 42.00199],
[-70.07468, 42.0023],
[-70.07461, 42.00238],
[-70.07447, 42.00239],
[-70.07437, 42.00235],
[-70.07412, 42.00245],
[-70.07402, 42.00244],
[-70.07392, 42.00249],
[-70.07383, 42.00256],
[-70.07372, 42.0026],
[-70.07359, 42.00263],
[-70.0735, 42.00281],
[-70.07341, 42.00303],
[-70.07333, 42.00326],
[-70.07321, 42.00328],
[-70.07316, 42.00347],
[-70.07317, 42.00351],
[-70.0731, 42.00355],
[-70.07282, 42.00357],
[-70.0728, 42.00359],
[-70.07274, 42.00357],
[-70.07271, 42.00361],
[-70.07267, 42.00362],
[-70.07261, 42.00365],
[-70.07258, 42.00361],
[-70.07259, 42.00359],
[-70.07263, 42.00359],
[-70.07268, 42.00356],
[-70.07266, 42.00355],
[-70.07256, 42.00353],
[-70.07251, 42.00351],
[-70.07248, 42.00342],
[-70.0725, 42.00335],
[-70.07258, 42.00326],
[-70.0726, 42.00313],
[-70.07257, 42.00302],
[-70.07257, 42.00298],
                                        [-70.07264, 42.00295],
[-70.07270, 42.00293],
[-70.07266, 42.00278],
[-70.07298, 42.00273],
[-70.0733, 42.00266],
[-70.07364, 42.00255],
[-70.07396, 42.00244],
[-70.07433, 42.00227],
[-70.07445, 42.00225],
[-70.07455, 42.00221],
[-70.07462, 42.00211],
[-70.07479, 42.00199]
                                    ]
                                ]
                        }
                    };





tct.id_046291 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 046291",          // displays in center of parcel
                            "label": "046291 OLIVER",     // displays instead of title                            
                            "donor": "Oliver",    // short name of donor
                            "grantor": "OLIVER JOHN HEIRS OF",      // long name of donor
                            "acquired": "",
                            "street":"5 Corn Hill Rd",
                            "acres": 1.84,
                            "acresUpland":  0,    
                            "acresWetland": 0,
                            "map": 46,
                            "lot": 291,
                            "key": 2506,  // assessors card key
                            "habitat": "",
                            "status": "p",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "B",
                            "lastInspected": "",
                            "issues": "",
                            "photosTaken": "",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 6900,   // assessed TOTAL
                            "assessedPrevious": 6900,   // assessed TOTAL previous

                            "inspectYears": 99,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0713, 42.00345],  // optional
                            "coordinates": 
                                [
                                    [
                                    [-70.07197, 42.00375],
                                    [-70.07188, 42.00378],
                                    [-70.07151, 42.00379],
                                    [-70.07118, 42.00397],
                                    [-70.07052, 42.00358],
                                    [-70.07093, 42.00334],
                                    [-70.07084, 42.00316],
                                    [-70.07157, 42.003],
                                    [-70.07197, 42.00375]
                                    ]
                                ]
                        }
                    };





tct.id_013008 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 013008",          // displays in center of parcel
                            //"label": "",     // displays instead of title                            
                            "donor": "Wisniewski",    // short name of donor
                            "grantor": "",      // long name of donor
                            "acquired": "",
                            "street":"309 Shore Rd",
                            "acres": 2.10,
                            "acresUpland":  0,    
                            "acresWetland": 0,
                            "map": 13,
                            "lot": 8,
                            "key": 345,  // assessors card key
                            "habitat": "",
                            "status": "x",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "A",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 100800,   // assessed TOTAL
                            "assessedPrevious": 100800,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.1175, 42.04974],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.11774, 42.04955],  // L
                                        [-70.11742, 42.05000],  // top (intersect)
                                        [-70.11726, 42.04992],  // R (intersect)
                                        [-70.11760, 42.04948],  // btm

                                        [-70.11774, 42.04955]   // close polygon by repeating 1st point
                                    ]
                                ]
                        }
                    };

tct.id_013013 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 013013",          // displays in center of parcel
                            //"label": "",     // displays instead of title                            
                            "donor": "Wisniewski",    // short name of donor
                            "grantor": "",      // long name of donor
                            "acquired": "",
                            "street":"299A Shore Rd",
                            "acres": 10.140,
                            "acresUpland":  0,    
                            "acresWetland": 0,
                            "map": 13,
                            "lot": 13,
                            "key": 349,  // assessors card key
                            "habitat": "",
                            "status": "p",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "A",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 244200 ,   // assessed TOTAL
                            "assessedPrevious": 244200,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.1129, 42.0484],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.11898, 42.05079],  // top L
                                        // curve
                                        [-70.11885, 42.05083],
                                        [-70.11191, 42.04889],  // top R
                                        [-70.11152, 42.04833],  // intersect
                                        [-70.11123, 42.04790],  // intersect
                                        [-70.11080, 42.04728],  // R road
                                        [-70.11138, 42.04685],  // btm
                                        // many lots below
                                        [-70.11324, 42.04782],  // TCT 83a S
                                        [-70.11388, 42.04815],  // TCT 83a N

                                        [-70.11726, 42.04992],  // 013-008 (intersect)
                                        [-70.11742, 42.05000],  // 013-008 (intersect)

                                        [-70.11898, 42.05079]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

tct.id_013019 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 013019",          // displays in center of parcel
                            //"label": "",     // displays instead of title                            
                            "donor": "Wisniewski",    // short name of donor
                            "grantor": "",      // long name of donor
                            "acquired": "",
                            "street":"320 Shore Rd",
                            "acres": .090,
                            "acresUpland":  0,    
                            "acresWetland": 0,
                            "map": 13,
                            "lot": 19,
                            "key": 367,  // assessors card key
                            "habitat": "",
                            "status": "p",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "A",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 4800,   // assessed TOTAL
                            "assessedPrevious": 4800,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.11783, 42.0493],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.11798, 42.04922],  // btm L bay
                                        [-70.11783, 42.04943],  // top (Shore Rd)
                                        [-70.11768, 42.04935],  // R (Shore Rd)
                                        [-70.11784, 42.04916],  // btm R bay

                                        [-70.11798, 42.04922]   // close polygon by repeating 1st point
                                    ]
                                ]
                        }
                    };



tct.id_A2 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT A2",
                            "label": "042303 WRIGHT",
                            "donor": "Wright",
                            "acquired": "",
                            "street":"2 Kill Devil Rd",
                            "acres": 1.090,
                            "acresUpland": 0,    
                            "acresWetland": 0,  // estimate
                            "map": 42,
                            "lot": 303,
                            "key": 6310,
                            "status": "a",

                            "team":"A",

                            "lastInspected": "",
                            "issues": "",
                            "photosTaken": "none",
                            "inspectYears": 1,
                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0831, 42.0105],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.08348, 42.01018],
                                        [-70.08375, 42.01091],
                                        [-70.08324, 42.01072],
                                        [-70.08290, 42.01079],
                                        [-70.08280, 42.01073],

                                        [-70.08266, 42.01031],
                                        [-70.08271, 42.01025],

                                        [-70.08348, 42.01018]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


tct.id_A3_002 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT A3_002",          // displays in center of parcel
                            "label": "A3_002 57A",     // displays instead of title                            
                            "donor": "Walsh",    // short name of donor
                            "grantor": "",      // long name of donor
                            "acquired": "",
                            "street":"behind School",
                            "acres": 57.173,
                            "acresUpland":  0,    
                            "acresWetland": 0,
                            "map": 43,
                            "lot": 2,
                            "key": 1880,  // assessors card key
                            "habitat": "",
                            "status": "p",

                            "team": "A",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": -1,   // assessed TOTAL
                            "assessedPrevious": -1,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0664, 42.0189],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07030, 42.01883],  // L
                                        [-70.06849, 42.02013],  // intersect
                                        [-70.06822, 42.02032],
                                        [-70.06633, 42.02109],  // acute
                                        [-70.06684, 42.02134],  // L

                                        [-70.06539, 42.02209],  // top
                                        //curve
                                        [-70.06529, 42.02168],
                                        [-70.06497, 42.02132],
                                        [-70.06436, 42.02104],
                                        [-70.06370, 42.02100],
                                        [-70.06322, 42.02112],

                                        [-70.06282, 42.02135],
                                        // curve
                                        [-70.06250, 42.02147],

                                        [-70.06223, 42.02167],
                                        [-70.06184, 42.02014],  // R
                                        [-70.06419, 42.01886],  //knee

                                        [-70.06378, 42.01801],  // bot R
                                        [-70.06476, 42.01757],  // intersect
                                        [-70.06756, 42.01629],  // bot
                                        [-70.06786, 42.01680],
                                        [-70.06911, 42.01692],  // bot L

                                        [-70.06966, 42.01812],  // intersect

                                        [-70.07030, 42.01883]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };


tct.id_A3_008 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT A3_008",          // displays in center of parcel
                            //"label": "043008 WALSH 0.5A",     // displays instead of title                            
                            "donor": "Walsh",    // short name of donor
                            "grantor": "",      // long name of donor
                            "acquired": "",
                            "street":"south of School",
                            "acres": .550,
                            "acresUpland":  0,    
                            "acresWetland": 0,
                            "map": 43,
                            "lot": 8,
                            "key": 1886,  // assessors card key
                            "habitat": "",
                            "status": "p",

                            "team": "A",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": -1,   // assessed TOTAL
                            "assessedPrevious": -1,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0706, 42.0158],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07093, 42.01592],  // top L
                                        [-70.07037, 42.01593],  // top R
                                        [-70.07029, 42.01548],  // btm R
                                        [-70.07085, 42.01547],  // btm L

                                        [-70.07093, 42.01592]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

tct.id_A3_009 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT A3_009",          // displays in center of parcel
                            //"label": "043009 WALSH 3.7A",     // displays instead of title                            
                            "donor": "Walsh",    // short name of donor
                            "grantor": "",      // long name of donor
                            "acquired": "",
                            "street":"south of School",
                            "acres": 3.74,
                            "acresUpland":  0,    
                            "acresWetland": 0,
                            "map": 43,
                            "lot": 9,
                            "key": 1887,  // assessors card key
                            "habitat": "",
                            "status": "p",

                            "team": "A",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": -1,   // assessed TOTAL
                            "assessedPrevious": -1,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.06995, 42.0173],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07102, 42.01697],  // L
                                        [-70.07077, 42.01729],
                                        [-70.06966, 42.01812],  // top
                                        [-70.06911, 42.01692],  // intersect
                                        [-70.06902, 42.01667],

                                        [-70.06885, 42.01642],
                                        [-70.06880, 42.01624],  // btm R
                                        [-70.06958, 42.01604],  // btm
                                        [-70.06961, 42.01632],  // inside
                                        [-70.06993, 42.01631],

                                        [-70.06999, 42.01648],
                                        [-70.06954, 42.01649],
                                        [-70.06946, 42.01691],
                                        [-70.06962, 42.01709],
                                        [-70.06986, 42.01707],  // intersect

                                        [-70.07102, 42.01697]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };
tct.id_A3_010 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT A3_010",          // displays in center of parcel
                            //"label": "043010 WALSH 2.1A",     // displays instead of title                            
                            "donor": "Walsh",    // short name of donor
                            "grantor": "",      // long name of donor
                            "acquired": "",
                            "street":"east of School",
                            "acres": 2.18,
                            "acresUpland":  0,    
                            "acresWetland": 0,
                            "map": 43,
                            "lot": 10,
                            "key": 1888,  // assessors card key
                            "habitat": "",
                            "status": "p",

                            "team": "A",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": -1,   // assessed TOTAL
                            "assessedPrevious": -1,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0683, 42.0165],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.06911, 42.01692],  // top L
                                        [-70.06786, 42.01680],  // top R
                                        [-70.06756, 42.01629],
                                        [-70.06822, 42.01605],  // bot R
                                        [-70.06875, 42.01601],  // bot L

                                        [-70.06879, 42.01616],  // intersect
                                        [-70.06880, 42.01624],  // intersect
                                        [-70.06885, 42.01642], 
                                        [-70.06902, 42.01667],

                                        [-70.06911, 42.01692]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };


tct.id_A3_013 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT A3_013",          // displays in center of parcel
                            //"label": "043013 WALSH 2.2A",     // displays instead of title                            
                            "donor": "Walsh",    // short name of donor
                            "grantor": "",      // long name of donor
                            "acquired": "",
                            "street":"south of School",
                            "acres": 2.24,
                            "acresUpland":  0,    
                            "acresWetland": 0,
                            "map": 43,
                            "lot": 13,
                            "key": 1891,  // assessors card key
                            "habitat": "",
                            "status": "p",

                            "team": "A",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": -1,   // assessed TOTAL
                            "assessedPrevious": -1,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0681, 42.0158],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.06875, 42.01601],  // top L
                                        [-70.06823, 42.01605],
                                        [-70.06756, 42.01629],  // top
                                        [-70.06725, 42.01577],  // btm R
                                        [-70.06850, 42.01520],  // btm

                                        [-70.06877, 42.01554],  // L

                                        [-70.06875, 42.01601]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

tct.id_A3_133 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT A3_133",          // displays in center of parcel
                            //"label": "043133 WALSH 0.5A",     // displays instead of title                            
                            "donor": "Walsh",    // short name of donor
                            "grantor": "",      // long name of donor
                            "acquired": "",
                            "street":"south of School",
                            "acres": 0.45,
                            "acresUpland":  0,    
                            "acresWetland": 0,
                            "map": 43,
                            "lot": 133,
                            "key": 2005,  // assessors card key
                            "habitat": "",
                            "status": "p",

                            "team": "A",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": -1,   // assessed TOTAL
                            "assessedPrevious": -1,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0700, 42.0162],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07030, 42.01631],  // top L
                                        [-70.06993, 42.01631],  // intersect
                                        [-70.06961, 42.01632],  // top R
                                        [-70.06958, 42.01604],  // btm R
                                        [-70.07031, 42.01601],  // btm L

                                        [-70.07030, 42.01631]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };
tct.id_A3_134 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT A3_134",          // displays in center of parcel
                            //"label": "043134 WALSH 0.6A",     // displays instead of title                            
                            "donor": "Walsh",    // short name of donor
                            "grantor": "",      // long name of donor
                            "acquired": "",
                            "street":"south of School",
                            "acres": 0.58,
                            "acresUpland":  0,    
                            "acresWetland": 0,
                            "map": 43,
                            "lot": 134,
                            "key": 2006,  // assessors card key
                            "habitat": "",
                            "status": "p",

                            "team": "A",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": -1,   // assessed TOTAL
                            "assessedPrevious": -1,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0701, 42.0156],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07037, 42.01593],  // top L
                                        [-70.06983, 42.01595],  // top R
                                        [-70.06973, 42.01548],  // btm R
                                        [-70.07029, 42.01548],  // btm L

                                        [-70.07037, 42.01593]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

tct.id_A3_135 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT A3_135",          // displays in center of parcel
                            //"label": "043135 WALSH 3.3A",     // displays instead of title                            
                            "donor": "Walsh",    // short name of donor
                            "grantor": "",      // long name of donor
                            "acquired": "",
                            "street":"south of School",
                            "acres": 3.28,
                            "acresUpland":  0,    
                            "acresWetland": 0,
                            "map": 43,
                            "lot": 13,
                            "key": 2007,  // assessors card key
                            "habitat": "",
                            "status": "p",

                            "team": "A",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": -1,   // assessed TOTAL
                            "assessedPrevious": -1,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0695, 42.01515],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07022, 42.01506],  // btm L
                                        [-70.07029, 42.01548],  // top L
                                        [-70.06973, 42.01548],
                                        [-70.06969, 42.01531],
                                        [-70.06958, 42.01534],

                                        [-70.06972, 42.01594],  // top L
                                        [-70.06954, 42.01596],
                                        [-70.06879, 42.01616],  // top
                                        [-70.06875, 42.01601],  // intersect
                                        [-70.06877, 42.01554],  // knee

                                        [-70.06850, 42.01520],  // btm R
                                        [-70.06885, 42.01504],  // intersect
                                        [-70.06973, 42.01464],  // btm
                                        [-70.07009, 42.01511],  // knee

                                        [-70.07022, 42.01506]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };










tct.id_050002 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 050002",          // displays in center of parcel
                            "label": "050002 YOUNG",     // displays instead of title                            
                            "donor": "Young",    // short name of donor
                            "grantor": "YOUNG JOHN CORSTORPHINE ET AL",      // long name of donor
                            "acquired": "",
                            "street":"52 Castle Rd",
                            "acres": 14.92,
                            "acresUpland":  0,
                            "acresWetland": 0,
                            "map": 50,
                            "lot": 2,
                            "key": 2791,  // assessors card key
                            "habitat": "marsh",
                            "status": "p",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            //"signs":[
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "B",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 16700,   // assessed TOTAL
                            "assessedPrevious": 16700,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0656, 41.9971],  // optional
                            "coordinates": 
                                [
                                    [

[-70.06508, 41.9986], // top right
[-70.06482, 41.99817],
[-70.06476, 41.99813],
[-70.06473, 41.99791],
[-70.06462, 41.99776],
[-70.06454, 41.99769],
[-70.0643, 41.99753],
[-70.06453, 41.99729],
[-70.06441, 41.99712],
[-70.0645, 41.99699],
[-70.06452, 41.99691],
[-70.06436, 41.99684],
[-70.06431, 41.99692],
[-70.06399, 41.99685],
[-70.06397, 41.99654],
[-70.06435, 41.99649],
[-70.06455, 41.99644],
[-70.0647, 41.99635],
[-70.06482, 41.99623],
[-70.06495, 41.99612],
[-70.06507, 41.99603],
[-70.06527, 41.99596],
[-70.06544, 41.99588],
[-70.06575, 41.99587],
[-70.06597, 41.99586],
[-70.06624, 41.99587],
[-70.06642, 41.9959],
[-70.06661, 41.99592],
[-70.0668, 41.99583],
[-70.06691, 41.99569],
[-70.06705, 41.99548],
[-70.06705, 41.99535], // bottom
[-70.06722, 41.99536],
[-70.0673, 41.99539],
[-70.06738, 41.99544],
[-70.06739, 41.9955],
[-70.06739, 41.9956],
[-70.0673, 41.99574],
[-70.06727, 41.9959],
[-70.0673, 41.99609],
[-70.06743, 41.9962],
[-70.06769, 41.99622],
[-70.06789, 41.99622],
[-70.06804, 41.99618],
[-70.06815, 41.99616],
[-70.06832, 41.99623],
[-70.06841, 41.99631],
[-70.06843, 41.99646],
[-70.06823, 41.99648],
[-70.06809, 41.99658],
[-70.06802, 41.9966],
[-70.06794, 41.99654],
[-70.06788, 41.99644],
[-70.06762, 41.99637],
[-70.06759, 41.99645],
[-70.0675, 41.99645],
[-70.06736, 41.99658],
[-70.06744, 41.99672],
[-70.06741, 41.99689],
[-70.06743, 41.99695],
[-70.06737, 41.99698],
[-70.06722, 41.99697],
[-70.0671, 41.99707],
[-70.06707, 41.99726],
[-70.06719, 41.99737],
[-70.06731, 41.99733],
[-70.06741, 41.99743],
[-70.06727, 41.99754],
[-70.06728, 41.99769],
[-70.06736, 41.99773],
[-70.06737, 41.99781],
[-70.06729, 41.99785],
[-70.06729, 41.99792],
[-70.06737, 41.99796],
[-70.06737, 41.99805],
[-70.06731, 41.9981],
[-70.06714, 41.99809],
[-70.06721, 41.99816],
[-70.06721, 41.99821],
[-70.06715, 41.99825],
[-70.06708, 41.99824],
[-70.06701, 41.99816],
[-70.06694, 41.99811],
[-70.06688, 41.99816],
[-70.0668, 41.99814],
[-70.06672, 41.9982],
[-70.0665, 41.99822],
[-70.06644, 41.99828],
[-70.06641, 41.99832],
[-70.06633, 41.99836],
[-70.06625, 41.99838],
[-70.06618, 41.99837],
[-70.0661, 41.99834],
[-70.066, 41.99841],
[-70.06602, 41.99851],
[-70.0661, 41.99862],
[-70.06607, 41.99865],
[-70.06596, 41.99855],
[-70.06576, 41.99841],
[-70.06552, 41.99833],
[-70.06508, 41.9986]
                                    ]
                                ]     
                        }
                    };


tct.id_050173 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 050173",          // displays in center of parcel
                            "label": "050173 FURLAUD",     // displays instead of title                            
                            "donor": "Furlaud",    // short name of donor
                            "grantor": "Alice Furlaud",      // long name of donor
                            "acquired": "",
                            "street":"6 Holsbery Rd",
                            "acres": 6.817,
                            "acresUpland":  6.817,
                            "acresWetland": 0,
                            "map": 50,
                            "lot": 173,
                            "key": 2952,  // assessors card key
                            "habitat": "",
                            "status": "p",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            //"signs":[
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "C",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 812200,   // assessed TOTAL
                            "assessedPrevious": 771500,   // assessed TOTAL previous

                            "inspectYears": 99,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0583, 41.9895],  // optional
                            "coordinates": 
                                [
                                    [

[-70.05929, 41.99024],
[-70.05866, 41.9902],
[-70.05763, 41.99008],
[-70.05663, 41.98976],
[-70.05656, 41.9893],
[-70.05798, 41.9892],
[-70.05799, 41.98856],
[-70.05845, 41.98858],
[-70.0589, 41.98859],
[-70.05887, 41.98852],
[-70.05926, 41.98853],
[-70.05919, 41.98894],
[-70.05914, 41.98975],
[-70.05916, 41.9899],
[-70.05929, 41.99024]
                                    ]
                                ]     
                        }
                    };





tct.id_050209 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 050209",          // displays in center of parcel
                            "label": "050209 WHITE",     // displays instead of title                            
                            "donor": "White",    // short name of donor
                            "grantor": "WHITE RAYMOND L JR ET AL",      // long name of donor
                            "acquired": "",
                            "street":"off Toms Hill Rd",
                            "acres": 10.39,
                            "acresUpland":  0,
                            "acresWetland": 10.39,
                            "map": 050,
                            "lot": 209,
                            "key": 2978,  // assessors card key
                            "habitat": "marsh",
                            "status": "p",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            //"signs":[
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "B",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 16700,   // assessed TOTAL
                            "assessedPrevious": 16700,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0688, 41.9961],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07093, 41.99783],  // top L
                                        [-70.07053, 41.99803],  // top R
                                        [-70.06938, 41.99675],  // end of straight
                                        [-70.06840, 41.99642],  // intersect

                                        [-70.06705, 41.99535],  // intersect w/ river
                                        [-70.06705, 41.99530],  // river
                                        [-70.06698, 41.99515],  // river
                                        [-70.06690, 41.99474],  // river
                                        //[-70.06683, 41.99453],  // river

                                        [-70.06689, 41.99460],  // river
                                        [-70.06695, 41.99417],  // river
                                        [-70.06705, 41.99402],  // river
                                        [-70.06730, 41.99391],  // river

                                        [-70.06744, 41.99388],  // btm L
                                        [-70.07093, 41.99783]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };



tct.id_050212 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 050212",
                            "label":"050212 Morea",
                            "donor": "Morea",
                            "grantor": "MOREA CRAIG H & ERIC L",
                            "acquired": "",
                            "street":"Pamet River - So Bank",
                            "acres": 3.150,
                            "acresUpland": 0,  // estimate    
                            "acresWetland": 0,
                            "map": 50,
                            "lot": 212,
                            "key": 2981,
                            "status": "p",

                            "team": "B",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 5,

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 9100,   // assessed TOTAL
                            "assessedPrevious": 9100,   // assessed TOTAL previous

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0594, 41.9943],  // optional
                            "coordinates": 
                                [
                                    [
                                    /*
                                        [-70.05649, 41.99542],
                                        [-70.05556, 41.99590],
                                        [-70.05511, 41.99583],
                                        [-70.05459, 41.99585],
                                        [-70.05426, 41.99583],

                                        [-70.05441, 41.99566],
                                        [-70.05458, 41.99552],
                                        [-70.05482, 41.99541],
                                        [-70.05536, 41.99514],

                                        [-70.05649, 41.99542]   // close polygon with repeating 1st point
 */
                                    ]
                                ]
                            }
                    };


tct.id_050214 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 050214",
                            "label":"050214 Frank",
                            "donor": "Frank",
                            "grantor": "JOSEPH FRANK",
                            "acquired": "",
                            "street":"Pamet River - So Bank",
                            "acres": 3.350,
                            "acresUpland": 0,  // estimate    
                            "acresWetland": 0,
                            "map": 50,
                            "lot": 214,
                            "key": 2983,
                            "status": "p",

                            "team": "B",

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 1,

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 9300,   // assessed TOTAL
                            "assessedPrevious": 9300,   // assessed TOTAL previous

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0586, 41.9935],  // optional
                            "coordinates": 
                                [
                                    [
                                    /*
                                        [-70.05649, 41.99542],
                                        [-70.05556, 41.99590],
                                        [-70.05511, 41.99583],
                                        [-70.05459, 41.99585],
                                        [-70.05426, 41.99583],

                                        [-70.05441, 41.99566],
                                        [-70.05458, 41.99552],
                                        [-70.05482, 41.99541],
                                        [-70.05536, 41.99514],

                                        [-70.05649, 41.99542]   // close polygon with repeating 1st point
*/
                                    ]
                                ]
                            }
                    };






tct.id_050142 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 050142",
                            "label":"050142 TODD",
                            "donor": "Todd",
                            "grantor": "GILLIEN TODD TRUSTEE",
                            "acquired": "",
                            "street":"16 Castle Rd",
                            "acres": 1.452,
                            "acresUpland": 1.452,  // estimate    
                            "acresWetland": 0,
                            "map": 50,
                            "lot": 142,
                            "key": 2921,
                            "status": "r",

                            "team": "B",

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 1,

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0555, 41.9955],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.05649, 41.99542],
                                        [-70.05556, 41.99590],
                                        [-70.05511, 41.99583],
                                        [-70.05459, 41.99585],
                                        [-70.05426, 41.99583],

                                        [-70.05441, 41.99566],
                                        [-70.05458, 41.99552],
                                        [-70.05482, 41.99541],
                                        [-70.05536, 41.99514],

                                        [-70.05649, 41.99542]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


tct.id_049015 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 049015",          // displays in center of parcel
                            "label": "049015 HART",     // displays instead of title                            
                            "donor": "Hart",    // short name of donor
                            "grantor": "",      // long name of donor
                            "acquired": "",
                            "street":"Toms Hill Rd",
                            "acres": 11.57,
                            "acresUpland":  0,    
                            "acresWetland": 0,
                            "map": 49,
                            "lot": 15,
                            "key": 2766,  // assessors card key
                            "habitat": "",
                            "status": "p",

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "B",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 1677100,   // assessed TOTAL
                            "assessedPrevious": 1647400,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0748, 41.9962],  // optional
                            "coordinates": 
                                [
                                    [
                                    /*
                                        [-70.07334, 41.99853], // top
[-70.07285, 41.99747],
[-70.07334, 41.99708],
[-70.07329, 41.99683],
[-70.07315, 41.99663],
[-70.0729, 41.99647],
[-70.07267, 41.99639],
[-70.07257, 41.99627],
[-70.07258, 41.99611],
[-70.0723, 41.99626],
[-70.07195, 41.99553],
[-70.07215, 41.99522],
[-70.07235, 41.99487],
[-70.07253, 41.9946],
[-70.07276, 41.99447],
[-70.07292, 41.99444],
[-70.07324, 41.99452],
[-70.07351, 41.99465],
[-70.07369, 41.99466],
[-70.07367, 41.99496],
[-70.07364, 41.99527],
[-70.07364, 41.99555],
[-70.07378, 41.9956],
[-70.07388, 41.99566],
[-70.07412, 41.99555],
[-70.07428, 41.99544],
[-70.07435, 41.99525],
[-70.07429, 41.99497],
[-70.07418, 41.99477],
[-70.07406, 41.99464],
[-70.07398, 41.99462],
[-70.07388, 41.99462],
[-70.07388, 41.99458],
[-70.074, 41.99447],
[-70.07405, 41.99508],
[-70.0741, 41.99481],
[-70.07411, 41.99457],
[-70.07408, 41.99452],
[-70.07402, 41.99457],
[-70.0739, 41.99436],
[-70.07378, 41.99409],
[-70.07421, 41.99465],
[-70.0743, 41.99516],  // jag to east
[-70.07441, 41.99514],
[-70.07578, 41.99725],
[-70.07519, 41.99772],
[-70.07538, 41.99803],
[-70.07494, 41.99838],
[-70.07485, 41.99825],
[-70.07452, 41.99698],
[-70.07402, 41.99747],
[-70.07423, 41.99798],
[-70.07361, 41.99773],
[-70.07382, 41.99814],
[-70.07393, 41.99808],
[-70.07334, 41.99853]
*/
                                    ]
                                ]     
                        }
                    };



/*
TCT GEO CODING TEMPLATE
added 059-072 12 Ryder Beach Rd.  TCT 70B, 2.510 Ac key 3524  fee simple

tct.id_ = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT ",          // displays in center of parcel
                            //"label": "",     // displays instead of title                            
                            "donor": "",    // short name of donor
                            "grantor": "",      // long name of donor
                            "acquired": "YYYYMMDD",
                            "street":" Rd",
                            "acres": .560,
                            "acresUpland":  0,    
                            "acresWetland": 0,
                            "map": 33,
                            "lot": 66,
                            "key": 0,  // assessors card key
                            "habitat": "",
                            "status": "p",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "?",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": -1,   // assessed TOTAL
                            "assessedPrevious": -1,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            //"center": [-70.08801, 42.03295],  // optional
                            "coordinates": 
                                [
                                    [
                                        //[-70.08842, 42.03307],

                                        //[-70.08842, 42.03307]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };


*/
