/* TOWN PARCELS TO ADD

046240
046251
046269
046277

050149
051012

065001
065005
065011

060001
060032

044010
044001

040076
040167
040169

033040
033001

Beach Pt
High Head small lots
High Head west of Rt 6

*/




var tot = {};   // Town of Truro


    // array of parcel numbers (ToT numbers)
    var ToTparcels = [


        "013017",  // 328 Shore Rd

        "040167",  // 27 So Highland Rd (old burn dump)

        "043003",   // 9.4 Ac at SE corner of the Walsh property
        "040071",   // 6.0 Ac N of Walsh, 241 OLD KINGS HWY
        "040073",   // 0.65 Ac N of Walsh, 243 OLD KINGS HWY
        "040077",   // 4.19 Ac N of Walsh, 245 OLD KINGS HWY

        "049031",   // north of harbor - inlet
        "049034",   // just west of RR bed
        "049017",   // RR bed north of harbor
        "049019",   // Fisher beach waterfront
        "049016",   // Corn Hill beach waterfront
        "045050",   // Corn Hill Beach parking lot
        "045070",   // Corn Hill Rd - inside hair pin turn
        "049001",   // Corn Hill beach south of 42CHR

        "049018",   // RR spanning harbor


        "051087",   // west of Edgewood Farm
        "051091",   // south of Edgewood Farm

        "036048",
        "036057",
        "036159",
        "039002",
        "039001",
        "035129",
        "038003",
        "036222",

        "042230",
        "014001",
        "046245",

        "050152",   // Veteran's Memorial
        "050153",   // Pamet Park


        "046375",


        // Town owned Cemetaries

        "039189",       // Old North Cemetary
        "050123",       // Snow Cemetary
        "059074",       // Pine Grove Cemetary

        // Pamet
        "050210",        // Pamet River - So Bank
        "050211",        // Pamet River - So Bank
        "050218",        // Pamet River - So Bank


        "059064",        // 6 Freeman Rd
        "059066",        // 133 Old County Rd

        "059027",        // Old County Rd

        "063010",        // Ryder Beach Rd
        "063026",        // Ryder Beach


        // town held CRs
        "045146"        // 2 Obbo Dr



    ];

    // Private Cemetaries
    var cemetaries = [
        "046210"    // SACRED HEART CEMETARY
    ];


// TOWN PROPERTIES

// Ryder Beach Rd
tot.id_063010 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 063010",
                                //"label": "063010",  // this label overrides the generic labelling of parcels
                                "donor": "",
                                "grantor": "",
                                "acquired": "19490518",
                                "street":"O Ryder Beach Rd",
                                "acres": 1.200,
                                "map": 63,
                                "lot": 10,
                                "key": 3626,
                                "status": "t",

                                "team": "A",
                                "lastInspected": "",
                                "issues": "none",
                                "photosTaken": "none",
                                "inspectYears": 99,

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0758, 41.9641],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07611, 41.96412],  // L
                                        [-70.07594, 41.96450],  // bend
                                        [-70.07549, 41.96479],  // top
                                        [-70.07553, 41.96380],  // btm R
                                        [-70.07595, 41.96369],  // inside

                                        [-70.07583, 41.96347],  // btm R
                                        [-70.07591, 41.96346],  // btm L
                                        [-70.07601, 41.96370],  // bend

                                        [-70.07611, 41.96412]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


// Ryder Beach and landing
tot.id_063026 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 063026",
                                //"label": "063026",  // this label overrides the generic labelling of parcels
                                "donor": "",
                                "grantor": "",
                                "acquired": "19390809",
                                "street":"O Ryder Beach Rd",
                                "acres": 6.100,
                                "map": 63,
                                "lot": 26,
                                "key": 6403,
                                "status": "t",

                                "team": "A",
                                "lastInspected": "",
                                "issues": "none",
                                "photosTaken": "none",
                                "inspectYears": 99,

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07725, 41.9628],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07740, 41.96302],  // top L
                                        [-70.07646, 41.96312],  // bend
                                        [-70.07599, 41.96335],  // top
                                        [-70.07595, 41.96323],  // R
                                        [-70.07648, 41.96300],  // bend

                                        [-70.07707, 41.96294],  // inside
                                        [-70.07711, 41.96273],  // intersect
                                        [-70.07714, 41.96238],  // btm R
                                        [-70.07754, 41.96234],  // btm L

                                        [-70.07740, 41.96302]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


tot.id_059027 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 059027",
                                //"label": "059027",  // this label overrides the generic labelling of parcels
                                "donor": "",
                                "grantor": "",
                                "acquired": "19900130",
                                "street":"Old County Rd",
                                "acres": 6.100,
                                "map": 59,
                                "lot": 27,
                                "key": 3482,
                                "status": "t",

                                "team": "A",
                                "lastInspected": "",
                                "issues": "none",
                                "photosTaken": "none",
                                "inspectYears": 99,

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0691, 41.9728],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07011, 41.97363],  // top L
                                        [-70.06838, 41.97360],  // top R
                                        // road curves
                                        [-70.06881, 41.97111],  // knee
                                        [-70.06913, 41.97086],  // btm

                                        [-70.07011, 41.97363]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };



tot.id_040167 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 040167",
                                //"label": "040167",  // this label overrides the generic labelling of parcels
                                "donor": "",
                                "grantor": "",
                                "acquired": "19291106",
                                "street":"27 So HIghland Rd",
                                "acres": 2.249,
                                "map": 40,
                                "lot": 167,
                                "key": 5947,
                                "status": "t",

                                "team": "A",
                                "lastInspected": "",
                                "issues": "none",
                                "photosTaken": "none",
                                "inspectYears": 99,

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0679, 42.0253],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.06865, 42.02557],  // L
                                        [-70.06846, 42.02602],  // top L
                                        [-70.06771, 42.02558],  // inside
                                        [-70.06742, 42.02568],  // top R
                                        // intersect
                                        [-70.06698, 42.02524],  // btm R
                                        // intersect
                                        // intersect
                                        [-70.06816, 42.02482],  // btm L

                                        [-70.06865, 42.02557]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };



tot.id_045146 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 045146",
                                "label": "CR 045146",  // this label overrides the generic labelling of parcels
                                "donor": "Silver",
                                "grantor": "TRACY MAYNARD SILVER",
                                "acquired": "20101206",
                                "street":"2 Obbo Dr",
                                "acres": .775,
                                "map": 45,
                                "lot": 146,
                                "key": 6559,
                                "status": "s",

                                "team": "A",
                                "lastInspected": "",
                                "issues": "none",
                                "photosTaken": "none",
                                "inspectYears": 99,

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0824, 42.00875],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.08317, 42.00868],  // top L
                                        [-70.08296, 42.00874],  //
                                        [-70.08209, 42.00906],  //
                                        [-70.08185, 42.00919],  // top
                                        [-70.08185, 42.00918],  // 
                                        [-70.08162, 42.00901],  //

                                        [-70.08163, 42.00900],  //
                                        [-70.08175, 42.00904],  // curve
                                        [-70.08187, 42.00904],  // curve
                                        [-70.08196, 42.00900],  //
                                        [-70.08203, 42.00876],  
                                        [-70.08174, 42.00872],  //
                                        [-70.08303, 42.00843],  //

                                        [-70.08317, 42.00868]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };



tot.id_050210 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 050210",
                                "label": "050210",     // displays instead of title                            
                                "donor": "Town of Truro",
                                "grantor": "",
                                "acquired": "19690310",
                                "street":"Pamet River - S Bank",
                                "acres": 21.19,   // all code 300
                                "map": 50,
                                "lot": 210,
                                "key": 2979,
                                "status": "t",

                                "team": "C",
                                "lastInspected": "",
                                "issues": "",
                                "photosTaken": "",
                                "inspectYears": 99,


                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.06485, 41.99495],  // optional
                            "coordinates": 
                                [
                                    [
                                        // approximate
                                        [-70.06684, 41.99441],  // L btm
                                        [-70.06683, 41.99572],  // top L
                                        [-70.06337, 41.99658],  // top R

                                        [-70.06323, 41.99526],  // across river from L of 050211

                                        [-70.06211, 41.99343],  // btm R

                                        // curve bordering lot 259

                                        [-70.06461, 41.99339],  // top R border with town land
                                        [-70.06518, 41.99346],  // knee
                                        [-70.06514, 41.99352],
                                        [-70.06512, 41.99358],
                                        [-70.06509, 41.99363],

                                        [-70.06509, 41.99368],
                                        [-70.06509, 41.99368],
                                        [-70.06510, 41.99371],
                                        [-70.06512, 41.99372],

                                        [-70.06518, 41.99374],
                                        [-70.06519, 41.99374],
                                        [-70.06521, 41.99373],
                                        [-70.06524, 41.99372],
                                        [-70.06527, 41.99372],

                                        [-70.06532, 41.99374],
                                        [-70.06535, 41.99377],
                                        [-70.06537, 41.99381],
                                        [-70.06538, 41.99385],
                                        [-70.06537, 41.99390],

                                        [-70.06537, 41.99393],
                                        [-70.06535, 41.99397],
                                        [-70.06534, 41.99401],
                                        [-70.06533, 41.99403],
                                        [-70.06533, 41.99405],

                                        [-70.06534, 41.99407],
                                        [-70.06535, 41.99408],
                                        [-70.06538, 41.99410],
                                        [-70.06541, 41.99413],
                                        [-70.06545, 41.99417],

                                        [-70.06547, 41.99423],
                                        [-70.06548, 41.99425],
                                        [-70.06549, 41.99426],
                                        [-70.06551, 41.99426],
                                        [-70.06553, 41.99425],

                                        [-70.06556, 41.99425],
                                        [-70.06560, 41.99426],
                                        [-70.06564, 41.994285],
                                        [-70.06566, 41.99429],
                                        [-70.06568, 41.99430],

                                        [-70.06570, 41.99432],
                                        [-70.06572, 41.99435],
                                        [-70.06572, 41.99438],
                                        [-70.06572, 41.99441],
                                        [-70.06573, 41.99443],

                                        [-70.06574, 41.99447],
                                        [-70.06576, 41.99449],
                                        [-70.06579, 41.99451],
                                        [-70.06583, 41.99452],
                                        [-70.06587, 41.99453],

                                        [-70.06592, 41.99453],
                                        [-70.06596, 41.99451],
                                        [-70.06598, 41.99449],
                                        [-70.06599, 41.99446],
                                        [-70.06600, 41.99440],

                                        [-70.06601, 41.99432],
                                        [-70.06603, 41.99429],
                                        [-70.06606, 41.99427],
                                        [-70.06610, 41.99426],
                                        [-70.06615, 41.99426],

                                        [-70.06623, 41.99428],
                                        [-70.06631, 41.99428],
                                        [-70.06638, 41.99430],
                                        [-70.06645, 41.99435],
                                        [-70.06651, 41.99442],  // intersection

                                        [-70.06655, 41.99444],
                                        [-70.06662, 41.99434],
                                        [-70.06664, 41.99436],
                                        [-70.06668, 41.99437],
                                        [-70.06672, 41.99437],
                                        [-70.06676, 41.99437],
                                        [-70.06680, 41.99437],  // turns up the river 

                                        [-70.06684, 41.99441]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


tot.id_050211 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 050211",
                                "label": "050211",     // displays instead of title                            
                                "donor": "Town of Truro",
                                "grantor": "",
                                "acquired": "19690310",
                                "street":"1-B Meetinghouse Rd",
                                "acres": 9.27,   // all code 300
                                "map": 50,
                                "lot": 211,
                                "key": 2980,
                                "status": "t",

                                "team": "B",
                                "lastInspected": "",
                                "issues": "",
                                "photosTaken": "",
                                "inspectYears": 99,

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.061, 41.9945],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.06318, 41.99527],   // L
                                        [-70.06246, 41.99598],   // top
                                        [-70.06244, 41.99593],   // int
                                        //curve below
                                        [-70.06231, 41.99519],   // 
                                        //curve below
                                        [-70.06188, 41.99515],   // 
  
                                        [-70.06112, 41.99504],   // int
                                        //curve below
                                        [-70.06029, 41.99527],   // 
                                        [-70.06033, 41.99532],   // int
                                        [-70.05996, 41.99549],   // int
                                        [-70.05993, 41.99550],   // top

                                        [-70.05985, 41.99525],   // 
                                        [-70.05979, 41.99514],   // 
                                        [-70.05982, 41.99510],   // 
                                        [-70.05987, 41.99520],   // 
                                        [-70.05986, 41.99493],   // 

                                        [-70.05980, 41.99487],   // 
                                        [-70.05968, 41.99480],   // 
                                        [-70.05957, 41.99473],  // 
                                        [-70.05953, 41.99462],   // 
                                        [-70.05955, 41.99444],   // 

                                        [-70.05954, 41.99428],   // 
                                        [-70.05952, 41.99415],   // 
                                        [-70.05953, 41.99408],   // 
                                        //curve below

                                        [-70.05985, 41.99394],   // 
                                        [-70.05999, 41.99394],   // int

                                        [-70.06016, 41.99398],   // 
                                        //curve below

                                        [-70.06061, 41.99393],   // int
                                        //curve below

                                        [-70.06104, 41.99372],   // int
                                        //curve below

                                        [-70.06164, 41.99359],   // int
                                        //curve below

                                        [-70.06212, 41.99364],   // 
                                        //curve below

                                        [-70.06318, 41.99527]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tot.id_050218 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 050218",
                                "label": "050218",     // displays instead of title                            
                                "donor": "Town of Truro",
                                "grantor": "",
                                "acquired": "19601206",
                                "street":"Pamet River - So Bank",
                                "acres": 2.84,   // all code 300
                                "map": 50,
                                "lot": 218,
                                "key": 2987,
                                "status": "t",

                                "team": "B",
                                "lastInspected": "",
                                "issues": "",
                                "photosTaken": "",
                                "inspectYears": 99,

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0542, 41.993],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.05568, 41.99332],   // L
                                        // curve
                                        [-70.05552, 41.99364],   // top
                                        [-70.05537, 41.99350],   // inside

                                        // approx
[-70.05530, 41.99347],
[-70.05497, 41.99352],

                                        // curve
                                        [-70.05481, 41.99369],   // top R
                                        // bends
                                        [-70.05441, 41.99331],   // inside

                                        // bends
                                        [-70.05409, 41.99349],   // top
                                        [-70.05397, 41.99342],   // R
                                        [-70.05390, 41.99333],   // R
                                        [-70.05395, 41.99329],   // inside
                                        [-70.05376, 41.99318],   // inside

                                        [-70.05370, 41.99325],   // local top
                                        [-70.05365, 41.99321],   // local R
                                        [-70.05363, 41.99309],   // local R
                                        [-70.05367, 41.99239],   // btm R
                                        [-70.05442, 41.99248],   // btm L

                                        [-70.05568, 41.99332]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tot.id_013017 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 013017",
                                "label": "013017+ 4 lots Town",     // displays instead of title                            
                                "donor": "Town of Truro",
                                "grantor": "John F Noon",
                                "acquired": "20000628",
                                "street":"328 Shore Rd",
                                "acres": 9.583,   // all code 300
                                "map": 13,
                                "lot": 17,
                                "key": 365,
                                "status": "t",

                                "team": "A",
                                "lastInspected": "",
                                "issues": "none",
                                "photosTaken": "none",
                                "inspectYears": 99,

                                // SEE 3 DEEDS TO NOONS (#04-088 TO 04-090)

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.11808, 42.04972],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.11874, 42.04959],  // L
                                        [-70.11792, 42.05026],  // top
                                        [-70.11742, 42.05000],  // top R
                                        [-70.11798, 42.04923],  // btm R

                                        [-70.11874, 42.04959]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


tot.id_040071 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 040071",
                                "donor": "Town of Truro",
                                "grantor": "ROACH M F COMPANY TRUST",
                                "acquired": "20010126", // 01/26/2001
                                "street":"241 Old Kings Hwy",
                                "acres": 6.000,   // all code 300
                                "map": 40,
                                "lot": 71,
                                "key": 1496,
                                "status": "t",

                                "team": "A",
                                "lastInspected": "",
                                "issues": "none",
                                "photosTaken": "none",
                                "inspectYears": 99,

                                // SEE 3 DEEDS TO NOONS (#04-088 TO 04-090)

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0648, 42.0227],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.06740, 42.02164],  // L
                                        [-70.06713, 42.02178],  // btm R of 040126
                                        [-70.06652, 42.02211],  // btm L of 040124
                                        [-70.06597, 42.02240],  // btm Rof 040124

                                        [-70.06524, 42.02279],  // pipeline easement
                                        [-70.06434, 42.02326],  // pipeline easement

                                        [-70.06295, 42.02399],  // top
                                        [-70.06273, 42.02361],  // 
                                        [-70.06272, 42.02350],  // btm R
                                        [-70.06325, 42.02322],  // int
                                        [-70.06457, 42.02251],  // int

                                        [-70.06539, 42.02209],  // int
                                        [-70.06684, 42.02134],  // btm
                                        [-70.06698, 42.02142],  // pipeline easement
                                        [-70.06714, 42.02150],  // pipeline easement

                                        [-70.06740, 42.02164]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


tot.id_040073 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 040073",
                                "donor": "Town of Truro",
                                "grantor": "owner unknown",
                                "acquired": "20080807", 
                                "street":"243 Old Kings Hwy",
                                "acres": .650,   // all code 300
                                "map": 40,
                                "lot": 73,
                                "key": 1497,
                                "status": "t",

                                "team": "A",
                                "lastInspected": "",
                                "issues": "none",
                                "photosTaken": "none",
                                "inspectYears": 99,

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.06285, 42.02315],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.06325, 42.02322],  // L
                                        [-70.06272, 42.02350],  // top
                                        [-70.06255, 42.02291],  // btm R
                                        [-70.06287, 42.02275],  // btm L

                                        [-70.06325, 42.02322]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


tot.id_040077 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 040077",
                                "donor": "Town of Truro",
                                "grantor": "owner unknown",
                                "acquired": "19921006", // oldest date on the property card 
                                "street":"245 Old Kings Hwy",
                                "acres": 4.190,   // all code 300
                                "map": 40,
                                "lot": 77,
                                "key": 1500,
                                "status": "t",

                                "team": "A",
                                "lastInspected": "",
                                "issues": "none",
                                "photosTaken": "none",
                                "inspectYears": 99,

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0634, 42.0224],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.06457, 42.02251],  // L
                                        [-70.06325, 42.02322],  // top L
                                        [-70.06287, 42.02275],  // inside corner
                                        [-70.06255, 42.02291],  // top R
                                        [-70.06240, 42.02233],  // btm R
                                        [-70.06390, 42.02170],  // btm L

                                        [-70.06457, 42.02251]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };





        "043003",   // 9.4 Ac at SE corner of the Walsh property
tot.id_043003 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 043003",
                                "donor": "Town of Truro",
                                "grantor": "heirs of Issac Small",
                                "acquired": "20010521",
                                "street":"0 Quail Ridge Rd",
                                "acres": 9.4,   // all code 300
                                "map": 43,
                                "lot": 3,
                                "key": 1881,
                                "status": "t",

                                "team": "A",
                                "lastInspected": "",
                                "issues": "none",
                                "photosTaken": "none",
                                "inspectYears": 99,

                                // SEE 3 DEEDS TO NOONS (#04-088 TO 04-090)

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0627, 42.0187],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.06419, 42.01886],  // L
                                        [-70.06184, 42.02014],  // top
                                        [-70.06140, 42.01844],  // btm R
                                        [-70.06332, 42.01748],  // btm L
                                        [-70.06379, 42.01801],  // intersect

                                        [-70.06419, 42.01886]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tot.id_059064 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 059064",
                                "donor": "Town of Truro",
                                "acquired": "",
                                "street":"6 Freeman Rd",
                                "acres": .690,
                                "map": 59,
                                "lot": 64,
                                "status": "t",

                                "lastInspected": "",
                                "issues": "none",
                                "photosTaken": "none",
                                "inspectYears": 1,

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            //"center": [-70.04385, 41.98917],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.06812, 41.96607], // NW
                                        [-70.06811, 41.96608], // bends
                                        [-70.06802, 41.96613],
                                        [-70.06798, 41.96615],
                                        [-70.06794, 41.96616],

                                        [-70.06791, 41.96616],
                                        [-70.06779, 41.96621],
                                        [-70.06775, 41.96622],
                                        [-70.06771, 41.96623], // NE
                                        [-70.06710, 41.96512], // S

                                        [-70.06812, 41.96607]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tot.id_059066 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 059066",
                                "donor": "Town of Truro",
                                "acquired": "",
                                "street":"133 Old County Rd",
                                "acres": .730,
                                "map": 59,
                                "lot": 66,
                                "key": 3518,
                                "status": "t",

                                "lastInspected": "",
                                "issues": "none",
                                "photosTaken": "none",
                                "inspectYears": 1,

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            //"center": [-70.04385, 41.98917],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.06716, 41.96638], // NW
                                        [-70.06712, 41.96638], 
                                        [-70.06701, 41.96641], 
                                        [-70.06697, 41.96642], 
                                        [-70.06692, 41.96642], 

                                        [-70.06688, 41.96644], 
                                        [-70.06645, 41.96660], 
                                        [-70.06640, 41.96661], // NE
                                        [-70.06624, 41.96637], 
                                        [-70.06615, 41.96626], // SE

                                        [-70.06637, 41.96616], 
                                        [-70.06691, 41.96596], // SW 

                                        [-70.06716, 41.96638]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tot.id_045070 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 045070",
                                "donor": "Town of Truro",
                                "acquired": "",
                                "street":"Corn Hill Rd",
                                "acres": .180,
                                "map": 45,
                                "lot": 70,
                                "status": "t",

                                "lastInspected": "",
                                "issues": "none",
                                "photosTaken": "none",
                                "inspectYears": 1,

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            //"center": [-70.04385, 41.98917],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07818, 42.00000],
                                        [-70.07767, 42.00010],
                                        [-70.07809, 41.99968],
                                        [-70.07818, 42.00000]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

// west of Edgewood
tot.id_051087 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 051087",
                                "donor": "Town of Truro",
                                "acquired": "20000511",
                                "street":"142 Rt 6",
                                "acres": 4.26,
                                "map": 51,
                                "lot": 87,
                                "key": 5551,
                                "status": "t",

                                "lastInspected": "",
                                "issues": "none",
                                "photosTaken": "none",
                                "inspectYears": 5,

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0475, 41.9887],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.04898, 41.98931],  // top L
                                        [-70.04838, 41.98912],  // intersect
                                        [-70.04779, 41.98893],  // easement
                                        [-70.04772, 41.98891],  // easement
                                        [-70.04725, 41.98907],  // intersect


                                        [-70.04683, 41.98921],  // top R
                                        [-70.04616, 41.98792],  // R

                                        [-70.04648, 41.98784],  // easement
                                        [-70.04657, 41.98781],  // btm
                                        [-70.04706, 41.98816],  // bend

                                        [-70.04729, 41.98826],  // bend
                                        [-70.04791, 41.98846],  // circle
                                        [-70.04905, 41.98899],  // btm L

                                        [-70.04898, 41.98931]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };
tot.id_051091 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 051091",
                                "donor": "Town of Truro",
                                "acquired": "",
                                "street":"139 Rt 6",
                                "acres": 11.383,
                                "map": 51,
                                "lot": 91,
                                "status": "t",

                                "lastInspected": "",
                                "issues": "none",
                                "photosTaken": "none",
                                "inspectYears": 5,

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.04385, 41.98917],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.04616, 41.98909],
                                        [-70.04562, 41.98935],
                                        [-70.04372, 41.98995],
                                        [-70.04355, 41.98986],
                                        [-70.04237, 41.99028],

                                        [-70.04239, 41.98972],
                                        [-70.04223, 41.98864],
                                        [-70.04345, 41.98854],
                                        [-70.04562, 41.98805],

                                        [-70.04616, 41.98909]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tot.id_036048 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 036048",
                                "donor": "Town of Truro",
                                "acquired": "",
                                "street":"1 Pond Village Ave",
                                "acres": .822,
                                "acresUpland": .822,    
                                "acresWetland": 0,
                                "map": 36,
                                "lot": 48,
                                "status": "t",

                                "lastInspected": "",
                                "issues": "none",
                                "photosTaken": "none",
                                "inspectYears": 99,

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.09113, 42.0326],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.09261, 42.03443],
                                        [-70.09246, 42.03442],
                                        [-70.09125, 42.03278],
                                        [-70.09112, 42.03282],
                                        [-70.09080, 42.03240],

                                        [-70.09094, 42.03234],
                                        [-70.09104, 42.03236],
                                        [-70.09108, 42.03238],
                                        [-70.09114, 42.03242],
                                        [-70.09137, 42.03265],

                                        [-70.09149, 42.03278],
                                        [-70.09162, 42.03297],
                                        [-70.09168, 42.03310],
                                        [-70.09177, 42.03324],
                                        [-70.09183, 42.03334],

                                        [-70.09194, 42.03348],
                                        [-70.09199, 42.03354],
                                        [-70.09215, 42.03371],
                                        [-70.09229, 42.03385],
                                        [-70.09241, 42.03400],

                                        [-70.09248, 42.03412],
                                        [-70.09256, 42.03427],
                                        [-70.09259, 42.03435],

                                        [-70.09261, 42.03443]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


tot.id_036057 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 036057",
                                "donor": "Town of Truro",
                                "acquired": "",
                                "street":"Pond Rd",
                                "acres": .460,
                                "acresUpland": .460,    
                                "acresWetland": 0,
                                "map": 36,
                                "lot": 57,
                                "status": "t",

                                "lastInspected": "",
                                "issues": "none",
                                "photosTaken": "none",
                                "inspectYears": 99,

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.09003, 42.03244],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.09046, 42.03245],
                                        [-70.08979, 42.03269],
                                        [-70.08963, 42.03238],
                                        [-70.08977, 42.03238],
                                        [-70.09027, 42.03220],

                                        [-70.09046, 42.03245]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tot.id_036159 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 036159",
                                "donor": "Town of Truro",
                                "acquired": "",
                                "street":"4 B Bay View Rd",
                                "acres": .460,
                                "acresUpland": .460,    
                                "acresWetland": 0,
                                "map": 36,
                                "lot": 159,
                                "status": "t",

                                "lastInspected": "",
                                "issues": "none",
                                "photosTaken": "none",
                                "inspectYears": 99,

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.09140, 42.03151],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.09177, 42.03145],
                                        [-70.09175, 42.03146],
                                        [-70.09172, 42.03150],
                                        [-70.09129, 42.03170],
                                        [-70.09122, 42.03173],

                                        [-70.09108, 42.03154],
                                        [-70.09163, 42.03128],

                                        [-70.09177, 42.03145]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tot.id_039002 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 039002",
                                "donor": "Town of Truro",
                                "acquired": "",
                                "street": "",
                                "acres": .180,
                                "acresUpland": .180,    
                                "acresWetland": 0,
                                "map": 39,
                                "lot": 2,
                                "status": "t",

                                "lastInspected": "",
                                "issues": "none",
                                "photosTaken": "none",
                                "inspectYears": 99,

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            //"center": [-70.0788, 41.9994],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.09302, 42.03130],
                                        [-70.09265, 42.03158],
                                        [-70.09252, 42.03160],
                                        [-70.09247, 42.03156],
                                        [-70.09270, 42.03139],

                                        [-70.09280, 42.03128],
                                        [-70.09285, 42.03118],
                                        [-70.09286, 42.03110],

                                        [-70.09302, 42.03130]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tot.id_039001 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 039001",
                                "donor": "Town of Truro",
                                "acquired": "",
                                "street":"Cold Storage Pkg. Lot",
                                "acres": .550,
                                "acresUpland": .550,    
                                "acresWetland": 0,
                                "map": 39,
                                "lot": 1,
                                "status": "t",

                                "lastInspected": "",
                                "issues": "none",
                                "photosTaken": "none",
                                "inspectYears": 99,

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.09322, 42.0314],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.09360, 42.03096],
                                        [-70.09364, 42.03120],
                                        [-70.09362, 42.03131],
                                        [-70.09359, 42.03137],
                                        [-70.09349, 42.03143],

                                        [-70.09339, 42.03147],
                                        [-70.09325, 42.03150],
                                        [-70.09265, 42.03158],
                                        [-70.09302, 42.03130],

                                        [-70.09360, 42.03096]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tot.id_035129 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 035129",
                                "donor": "Town of Truro",
                                "acquired": "",
                                "street":"Cold Storage Pkg. Lot",
                                "acres": .230,
                                "acresUpland": .230,    
                                "acresWetland": 0,
                                "map": 35,
                                "lot": 129,
                                "status": "t",

                                "lastInspected": "",
                                "issues": "none",
                                "photosTaken": "none",
                                "inspectYears": 99,

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.09365, 42.03166],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.09391, 42.03169],
                                        [-70.09357, 42.03184],
                                        [-70.09340, 42.03163],
                                        [-70.09373, 42.03148],

                                        [-70.09391, 42.03169]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tot.id_038003 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 038003",
                                "donor": "Town of Truro",
                                "acquired": "",
                                "street":"49 Pond Rd",
                                "acres": .530,
                                "acresUpland": .530,    
                                "acresWetland": 0,
                                "map": 38,
                                "lot": 3,
                                "status": "t",

                                "lastInspected": "",
                                "issues": "none",
                                "photosTaken": "none",
                                "inspectYears": 99,

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0939, 42.0310],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.09416, 42.03096],
                                        [-70.09406, 42.03099],
                                        [-70.09413, 42.03110],
                                        [-70.09401, 42.03116],
                                        [-70.09412, 42.03131],

                                        [-70.09379, 42.03145],
                                        [-70.09369, 42.03088],
                                        [-70.09374, 42.03086],
                                        [-70.09373, 42.03077],
                                        [-70.09394, 42.03069],

                                        [-70.09416, 42.03096]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tot.id_036222 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "ToT 036222",
                            "donor": "Town of Truro",
                            "acquired": "",
                            "street":"35 A Pond Rd",

                            "acres": .010,
                            "acresUpland": .010,    
                            "acresWetland": 0,

                            "map": 36,
                            "lot": 222,

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 99,

                            "status": "t",

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            //"center": [-70.0788, 41.9994],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.09273, 42.03168],
                                        [-70.09246, 42.03171],
                                        [-70.09259, 42.03167],
                                        [-70.09272, 42.03166],

                                        [-70.09273, 42.03168]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tot.id_049001 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "ToT 049001",
                            "donor": "Town of Truro",
                            "acquired": "",
                            "street":"Corn Hill Rd",
                            "acres": 6.900,   // per property card.  ( 6.610 on the assessor's map)
                            "acresUpland": 5.000,    
                            "acresWetland": 1.900,
                            "map": 49,
                            "lot": 1,
                            "status": "t",

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 99,


                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            //"center": [-70.0788, 41.9994],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07994, 41.99867],
                                        [-70.07824, 41.99942],
                                        [-70.07810, 41.99902],  // intersection

                                        [-70.07808, 41.99896],
                                        [-70.07785, 41.99851],
                                        [-70.07753, 41.99802],

                                        [-70.07794, 41.99789],

                                        [-70.07941, 41.99740],
                                        [-70.07967, 41.99762],
                                        [-70.07984, 41.99801],
                                        [-70.07980, 41.99852],

                                        [-70.07994, 41.99867]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tot.id_045050 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "ToT 045050",
                            "donor": "Town of Truro",
                            "acquired": "",
                            "street":"48 Corn Hill Rd",

                            "acres": 9.180,   
                            "acresUpland": 9.180,    
                            "acresWetland": 0,
                            "habitat": "parking area",
                            "map": 45,
                            "lot": 50,

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 99,

                            "status": "t",

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            //"center": [-70.0788, 41.9994],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.08092, 42.00108],
                                        [-70.07940, 42.00151],
                                        [-70.07933, 42.00130],
                                        [-70.07876, 42.00038],
                                        [-70.07833, 41.99972],

                                        [-70.08015, 41.99889],
                                        [-70.08025, 41.99900],
                                        [-70.08037, 41.99901],

                                        [-70.08092, 42.00108]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tot.id_049031 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "ToT 049031",
                            "donor": "Town of Truro",
                            "acquired": "",
                            "street":"Pamet River - N Bank",
                            "acres": 19.010,   
                            "acresUpland": 0,    
                            "acresWetland": 19.010,
                            "habitat": "",
                            "map": 49,
                            "lot": 31,
                            "status": "t",

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 99,

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0779, 41.9961],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07941, 41.99740],
                                        [-70.07794, 41.99789],
                                        [-70.07794, 41.99786],

                                        [-70.07792, 41.99783],      // added

                                        [-70.07789, 41.99778],
                                        [-70.07779, 41.99772],

                                        [-70.07765, 41.99744],
                                        [-70.07764, 41.99730],
                                        [-70.07761, 41.99721],
                                        [-70.07756, 41.99713],
                                        [-70.07744, 41.99705],

                                        [-70.07735, 41.99696],
                                        [-70.07727, 41.99680],
                                        [-70.07727, 41.99668],
                                        [-70.07722, 41.99659],
                                        [-70.07707, 41.99604],

                                        [-70.07707, 41.99595],
                                        [-70.07716, 41.99558],
                                        [-70.07714, 41.99536],

                                        [-70.07721, 41.99503],
                                        [-70.07714, 41.99468],
                                        [-70.07680, 41.99424],
                                        [-70.07644, 41.99325],
                                        [-70.07644, 41.99274],

                                        [-70.07634, 41.99250],
                                        [-70.07620, 41.99200],
                                        [-70.07789, 41.99210],
                                        [-70.07910, 41.99735],

                                        [-70.07941, 41.99740]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tot.id_049034 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "ToT 049034",
                            "donor": "Town of Truro",
                            "acquired": "19751113",
                            "street":"Toms Hill Rd",
                            "acres": 4.13,   
                            "acresUpland": 0,    
                            "acresWetland": 4.13,
                            "habitat": "",
                            "map": 49,
                            "lot": 34,
                            "status": "t",

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 99,

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0767, 41.9966],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07794, 41.99789],
                                        [-70.07753, 41.99802],

                                        [-70.07607, 41.99650],  // added

                                        [-70.07553, 41.99593],

                                        [-70.07707, 41.99595],
                                        [-70.07707, 41.99604],

                                        [-70.07722, 41.99659],
                                        [-70.07727, 41.99668],
                                        [-70.07727, 41.99680],
                                        [-70.07735, 41.99696],
                                        [-70.07744, 41.99705],

                                        [-70.07756, 41.99713],
                                        [-70.07761, 41.99721],
                                        [-70.07764, 41.99730],
                                        [-70.07765, 41.99744],
                                        [-70.07779, 41.99772],

                                        [-70.07789, 41.99778],
                                        [-70.07792, 41.99783],
                                        [-70.07794, 41.99786],

                                        [-70.07794, 41.99789]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tot.id_049016 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "ToT 049016",
                            "donor": "Town of Truro",
                            "acquired": "19560628",
                            "street":"Pamet Harbor",
                            "acres": 13.720,   
                            "acresUpland": 12.250,    
                            "acresWetland": 1.470,
                            "habitat": "",
                            "map": 49,
                            "lot": 16,

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 99,

                            "status": "t",

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            //"center": [-70.0788, 41.9994],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.08025, 41.99900],

                                        [-70.08015, 41.99889],  // intersection
                                        [-70.07994, 41.99867],  // intersection

                                        [-70.07980, 41.99852],
                                        [-70.07984, 41.99801],
                                        [-70.07967, 41.99762],

                                        // copy from abutting
                                        [-70.07941, 41.99740],

                                        [-70.07910, 41.99735],
                                        [-70.07789, 41.99210],  // meets 2 on right

                                        [-70.07771, 41.99135],  // meets 049019 and TCT 37
                                        [-70.07864, 41.99116],
                                        [-70.07925, 41.99273],

                                        [-70.07965, 41.99338],
                                        [-70.07963, 41.99452],

                                        [-70.08025, 41.99900]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

//
tot.id_049017 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "ToT 049017",
                            "donor": "Town of Truro",
                            "acquired": "19880101",
                            "street":"Pamet River RR Bed",

                            "acres": 5.170,   
                            "acresUpland": 3.240,    
                            "acresWetland": 1.930,
                            "habitat": "",
                            "map": 49,
                            "lot": 17,

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 99,

                            "status": "t",

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07435, 41.9948],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07328, 41.99372],   //lower left corner
                                        [-70.07410, 41.99452],
                                        [-70.07447, 41.99444],
                                        [-70.07477, 41.99506],
                                        [-70.07468, 41.99511],
                                        [-70.07553, 41.99593],
                                        [-70.07607, 41.99650],
                                        [-70.07753, 41.99802],

                                        [-70.07785, 41.99851],
                                        [-70.07808, 41.99896],
                                        [-70.07810, 41.99902],
                                        [-70.07802, 41.99905],

                                        [-70.07816, 41.99958],  // Corn Hill Rd
                                        [-70.07803, 41.99960],  // Corn Hill Rd

                                        [-70.07778, 41.99891],  
                                        [-70.07757, 41.99850],  
                                        [-70.07731, 41.99811],  
                                        [-70.07728, 41.99812],  
                                                                                // copy from abutting

                                        [-70.07667, 41.99746],  // Hollannder
                                        [-70.07649, 41.99728],  // Hollannder
                                        [-70.07576, 41.99658],

                                        [-70.07440, 41.99515],  
                                        [-70.07430, 41.99516],  // jog to the east
                                        [-70.07421, 41.99494],

                                        [-70.07378, 41.99458],  // intersection


                                        [-70.07302, 41.99383],   //lower right corner

                                        [-70.07328, 41.99372]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };



//
tot.id_049018 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "ToT 049018",
                            "donor": "Town of Truro",
                            "acquired": "19660606",
                            "street":"Depot Rd - End",
                            "acres": 1.700,   
                            "acresUpland": .91,    
                            "acresWetland": .79,
                            "habitat": "",
                            "map": 49,
                            "lot": 18,

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 99,

                            "status": "t",

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0722, 41.99285],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07328, 41.99372],   //upper left corner
                                        [-70.07302, 41.99383],   //upper right corner
                                        [-70.07167, 41.99252],
                                        [-70.07098, 41.99167],   // lower right
                                        [-70.07133, 41.99167],   // lower left
                                        [-70.07199, 41.99246],
                                        [-70.07328, 41.99372]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tot.id_042230 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "ToT 042230",
                            "donor": "Town of Truro",
                            "acquired": "19660606",
                            "street":"Depot Rd - End",

                            "acres": 1.150,   
                            "acresUpland": 0,    
                            "acresWetland": 0,
                            "habitat": "",
                            "map": 42,
                            "lot": 230,

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 99,

                            "status": "t",

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.08285, 42.0101],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.08365, 42.01018],  
                                        [-70.08348, 42.01018],
                                        [-70.08271, 42.01025],

                                        [-70.08230, 42.01029],   
                                        [-70.08172, 42.01053],   
                                        [-70.08153, 42.01038],   
                                        [-70.08227, 42.01017],   

                                        [-70.08289, 42.00994],   
                                        [-70.08351, 42.00976],   

                                        [-70.08365, 42.01018]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tot.id_014001 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "ToT 014001",
                            "donor": "Town of Truro",
                            "acquired": "19871231",
                            "street":"538 Rt 6",

                            "acres": .795,   
                            "acresUpland": 0,    
                            "acresWetland": 0,
                            "habitat": "",
                            "map": 14,
                            "lot": 1,
                            "key": 371,
                            "note": "P/O HIGH HEAD COASTAL AREA",
                            "neighborhood": "Beach Point",

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 99,

                            "status": "T",  // Cons Comm (capital T)

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.1114, 42.0486],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.11191, 42.04889],  
                                        [-70.11097, 42.04874],  
                                        [-70.11111, 42.04826],  
                                        [-70.11152, 42.04833],  

                                        [-70.11191, 42.04889]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tot.id_046245 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "ToT 046245",
                            "donor": "Town of Truro",
                            "acquired": "",
                            "street":"14 Snows Field Rd",

                            "acres": 4.500,   
                            "acresUpland": 4.500,    
                            "acresWetland": 0,
                            "habitat": "",
                            "map": 46,
                            "lot": 245,
                            "key": "",
                            "note": "",
                            "neighborhood": "",

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 99,

                            "status": "t",  // Cons Comm (capital T)

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0589, 42.0008],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.05977, 42.00129],  
                                        [-70.05854, 42.00142],  
                                        [-70.05816, 42.00105],  
                                        [-70.05774, 42.00037],  

                                        [-70.05816, 42.00027],  // top R of 24 Meetinghouse

                                        [-70.05859, 42.00017],  // top L of 24 Meetinghouse


                                        [-70.05933, 42.00000],  

                                        [-70.05953, 41.99996],  
                                        [-70.05974, 42.00090],  
                                        [-70.05977, 42.00102],  

                                        [-70.05977, 42.00129]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

// Veteran's Memorial
tot.id_050152 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "ToT 050152",
                            "donor": "Town of Truro",
                            "grantor": "",
                            "acquired": "19710309",
                            "street":"4 Castle Rd Rd",
                            "acres": .300,   
                            "acresUpland": 0,    
                            "acresWetland": 0,
                            "habitat": "",
                            "map": 50,
                            "lot": 152,
                            "key": 2931,
                            "status": "t",  // Cons Comm (capital T)

                            "note": "",
                            "neighborhood": "",

                            "team":"B",

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 99,

                            "notes": "Pamet Park, site of Farmer's Market",
                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0515, 41.9947],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.05159, 41.99480],  // top L
                                        [-70.05147, 41.99483],  // top
                                        [-70.05121, 41.99471],  // top R
                                        [-70.05179, 41.99425],  // btm R
                                        [-70.05186, 41.99430],  // btm L

                                        [-70.05159, 41.99480]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

// Pamet Park
tot.id_050153 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "ToT 050153",
                            "donor": "Town of Truro",
                            "grantor": "Joseph Duarte",
                            "acquired": "",
                            "street":"20 Truro Center Rd",

                            "acres": 1.370,   
                            "acresUpland": 0,    
                            "acresWetland": 0,
                            "habitat": "",
                            "map": 50,
                            "lot": 153,
                            "key": 2932,
                            "status": "t",  // Cons Comm (capital T)

                            "note": "",
                            "neighborhood": "",

                            "team":"B",

                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 99,

                            "notes": "Pamet Park, site of Farmer's Market",
                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0512, 41.9945],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.05179, 41.99425],  
                                        [-70.05121, 41.99471],  
                                        [-70.05106, 41.99461],  
                                        [-70.05092, 41.99447],  
                                        [-70.05029, 41.99372],  

                                        [-70.05033, 41.99370],  
                                        [-70.05045, 41.99368],  
                                        [-70.05107, 41.99387],  
                                        [-70.05130, 41.99399],  [-70.05149, 41.99411],  [-70.05159, 41.99415],  [-70.05166, 41.99418],  

                                        [-70.05179, 41.99425]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tot.id_046375 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "ToT 046375",
                            "donor": "Town of Truro",
                            "grantor": "Morea",
                            "acquired": "",
                            "street":"238 Rt 6",

                            "acres": 5.660,   
                            "acresUpland": 5.660,    
                            "acresWetland": 0,
                            "habitat": "",
                            "map": 46,
                            "lot": 375,
                            "key": 5646,
                            "note": "",
                            "neighborhood": "",

                            "team":"B",

                            "lastInspected": "20020628",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 3,

                            "status": "t",  // Cons Comm (capital T)
                            "notes": "",
                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0591, 42.0040],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.06027, 42.00362],  
                                        [-70.06036, 42.00451],  
                                        [-70.05952, 42.00463],  
                                        [-70.05882, 42.00448],  
                                        [-70.05893, 42.00503],  

                                        [-70.05855, 42.00488],  
                                        [-70.05848, 42.00455],  
                                        [-70.05775, 42.00430],  
                                        [-70.05835, 42.00335], 

                                       [-70.05922, 42.00348],
 

                                        [-70.06027, 42.00362]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


// 049019 Fischer Beach
tot.id_049019 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "ToT 049019",
                            "donor": "Town of Truro",
                            "grantor": "",
                            "acquired": "19710224",
                            "street":"0 Pamet River-Mouth",
                            "acres": 12.000,   
                            "acresUpland": 0,    
                            "acresWetland": 0,
                            "habitat": "",
                            "map": 49,
                            "lot": 19,
                            "key": 2770,
                            "status": "t",  // Cons Comm (capital T)

                            "note": "",
                            "neighborhood": "",

                            "team":"",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 3,

                            "notes": "",
                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0783, 41.9899],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07934, 41.99102],  
                                        [-70.07864, 41.99116],  

                                        [-70.07771, 41.99135],  
                                        [-70.07727, 41.98791],  
                                        [-70.07724, 41.98765],  
                                        [-70.07722, 41.98744],  

                                        [-70.07717, 41.98716],  
                                        [-70.07822, 41.98717],  
                                        [-70.07822, 41.98721],  
                                        [-70.07822, 41.98729],  
                                        [-70.07823, 41.98736],  

                                        [-70.07824, 41.98742],  
                                        [-70.07824, 41.98755],  
                                        [-70.07825, 41.98760],  
                                        [-70.07826, 41.98768],  
                                        [-70.07828, 41.98777],  

                                        [-70.07832, 41.98798],  
                                        [-70.07833, 41.98808],  
                                        [-70.07888, 41.98982],  
                                        [-70.07931, 41.99072],  

                                        [-70.07934, 41.99102]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };




//        "039189"        // Old North Cemetary
tot.id_039189 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "ToT 046210",
                            "donor": "Old North Cemetary",
                            "grantor": "Old North Cemetary",
                            "acquired": "",
                            "street":"351 Rt 6",

                            "acres": 5.600,   
                            "acresUpland": 5.600,    
                            "acresWetland": 0,
                            "habitat": "",
                            "map": 39,
                            "lot": 189,
                            "key": 0,
                            "status": "g",  // graveyard = cemetary (icon name)

                            "note": "",
                            "neighborhood": "",

                            "team":"",

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 99,

                            "notes": "",
                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0735, 42.0239],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07470, 42.02442],  
                                        [-70.07323, 42.02475],  
                                        [-70.07285, 42.02385],  
                                        [-70.07254, 42.02461],  
                                        [-70.07250, 42.02457],  

                                        [-70.07282, 42.02377],  
                                        [-70.07263, 42.02332],  
                                        [-70.07245, 42.02289],  
                                        [-70.07241, 42.02280],  
                                        [-70.07318, 42.02262],  
  
                                        [-70.07470, 42.02442]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


       // Snow Cemetary
tot.id_050123 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "ToT 050123",
                            "donor": "Snow Cemetary",
                            "grantor": "Town of Truro",
                            "acquired": "",
                            "street":"26 Bridge Road",

                            "acres": 3.580,   
                            "acresUpland": 3.580,    
                            "acresWetland": 0,
                            "habitat": "",
                            "map": 50,
                            "lot": 123,
                            "key": 0,
                            "status": "g",  // graveyard = cemetary (icon name)

                            "note": "",
                            "neighborhood": "",

                            "team":"",

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 99,

                            "notes": "",
                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0553, 41.9975],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.05615, 41.99722],  
                                        [-70.05613, 41.99735],  
                                        [-70.05601, 41.99757],  
                                        [-70.05560, 41.99806],  
                                        [-70.05460, 41.99808],  

                                        [-70.05459, 41.99787],  
                                        [-70.05461, 41.99689],  
                                        [-70.05585, 41.99686],  
                                        [-70.05578, 41.99712],  
   
                                        [-70.05615, 41.99722]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

// Pine Grove Cemetary
tot.id_059074 = 
                    {
                        "type": "Feature",
                        "properties": {
                                "title": "ToT 059074",
                                //"label": "059074 Pine Grove Cemetary",  // this label overrides the generic labelling of parcels
                                "donor": "",
                                "grantor": "",
                                "acquired": "19841002",
                                "street":"Pine Grove Cemetary",
                                "acres": 2.150,
                                "map": 59,
                                "lot": 74,
                                "key": 3526,
                                "status": "g",  // graveyard = cemetary (icon name)

                                "team": "A",
                                "lastInspected": "",
                                "issues": "none",
                                "photosTaken": "none",
                                "inspectYears": 99,

                                "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0594, 41.9761],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.06019, 41.97625],  // top L low
                                        [-70.05939, 41.97637],  // inside
                                        [-70.05936, 41.97661],  // top L hi
                                        [-70.05847, 41.97656],  // top R
                                        [-70.05876, 41.97590],  // btm R

                                        [-70.06015, 41.97577],  // btm L

                                        [-70.06019, 41.97625]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };





// 
// CEMETARIES NOT OWNED BY THE TOWN OF TRURO
//

// SACRED HEART CEMETARY
tot.id_046210 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "ToT 046210",
                            "donor": "Sacred Heart Cemetary",
                            "grantor": "Diocese of Fall River",
                            "url": "http://www.fallriverdiocese.org/cemeteries/",
                            "acquired": "",
                            "street":"238 Rt 6, 1 Bridge Rd",

                            "acres": 4.160,   
                            "acresUpland": 4.160,    
                            "acresWetland": 0,
                            "habitat": "",
                            "map": 46,
                            "lot": 219,
                            "key": 0,
                            "note": "",
                            "neighborhood": "",

                            "team":"",

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 99,

                            "status": "g",  // graveyard = cemetary (icon name)
                            "notes": "",
                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            //"center": [-70.0788, 41.9994],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.05527, 42.00277],  
                                        [-70.05478, 42.00293],  
                                        [-70.05419, 42.00324],  
                                        [-70.05390, 42.00287],  
                                        [-70.05394, 42.00261],  

                                        [-70.05389, 42.00228],  
                                        [-70.05403, 42.00161],  
                                        [-70.05503, 42.00142],   

                                        [-70.05527, 42.00277]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

/*
TRURO    
    Truro First Congregational Church Cemetery     Town Hall Road and Bridge Road
 
    Truro Methodist Cemetery        Bridge Road and Meetinghouse Road
 
    Truro Old North Cemetery        Route 6 and Aldrich Road
 
    Truro Pine Grove Cemetery (aka South Truro Cemetery) (aka South Side Cemetery)       Cemetery Road off
Old County Road
 
    Truro Sacred Heart Cemetery     Bridge Road and Meeting House Road
 
    Truro Snow Cemetery             Town Hall Road and Bridge Road

*/
