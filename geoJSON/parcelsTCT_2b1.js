
/* 
signs from BobD as of 20181014

> TCT 4 Francis. Castle Rd/Corn Hill 46/44. Corner, Marsh
> TCT 29. Moriarity. End ofGreat Hills Rd. 49/22. Part of 33 ac known
> Dalsheimer Trail 
> TCT 38 Parcell. 48 Fisher Rd. 53/81. Left of parking lot, beach
> TCT 42. Grossberg. 2 Great Hills Ln. 53/95. Corner of Great Hills Rd & Ln
> TCT 45. Quinlan, Jr. 55 Corn Hill Rd. 45/40. Coastal bank lot
> TCT 56. Darling/Dav. 180 Rt 6. 51/19. Across from Snow Park
> TCT 64. Mobil. 236 Rt 6. 46/210. Former gas station

3 signs added 20190607 (Bob and Brian)
TCT 19 [-70.069434, 42.005179]
TCT 69
TCT 25

*/


var tct = {};   // TCT
var TCTparcels = [];
var TCTparcelsByTeam = {};
var TCTtrusteesByTeam = {};

TCTtrusteesByTeam.A = ["Tony H","Fred G"];
TCTtrusteesByTeam.B = ["Brian Boyle","Amanda Reed"];
TCTtrusteesByTeam.C = ["Meg Ryoka","Guillermo Chang", "Valerie Falk"];
TCTtrusteesByTeam.D = ["Tom Bow","Bob Daglio"];

/*
Group 1 : Fred and Tony 
> TCT 1, 16, 7, 23, 87, 48, 41, 86, 58, 62, 46 a,b, 59, 22, 43, 36, 18, 40, 32,
> 
> Group 2 : Brian, Amanda, Bill
> TCT: 45, 25, 15, 4, 57, 10, 64, 49, 12 (a,b) 19, 65, 68, 8, 30, 54, 13, 20, 50, 10, 24 
> 
> Group 3: Meg, Guillermo, Val
> TCT: 2, 3 (a, b) 5, 6, 9 (a,b) 11, 14 (a,b) 17, 21, 27, 29, 37, 42, 55, 56, 63, 66, 
> 
> Group 4: Tom, Bob
> TCT 35, 34 (a,b) 39, 47 (a,b) 60, 52, 33, 38, 28, 70, 71, 67, 
> 
> This list does not include CR’s
*/




TCTparcelsByTeam.A = [ 
    "" // this row is CRs
]


TCTparcelsByTeam.B = [ 
    "" // this row is CRs
]

TCTparcelsByTeam.C = [ "66",
    "" // this row is CRs
]


TCTparcelsByTeam.D = [ "26", "28", "33", "34a", "34b", "35", "38", "39",
    "47a", "47b", "52", "60", "67", "70a", "70b", "74",  // 70A == 70, and 70B == 71 ?
    "44", "51", "76a", "76b", "79a", "79b", "81", "82" // this row is CRs
]



function pushTCTparcels() {

    // array of parcel numbers (TCT numbers)
    TCTparcels = [
        "1","2","3a","3b",
        "4","5","6","7","8",
        "9a","9b",
        "10a","10b","10c","11","12a","12b","13","14a","14b",
        "15","16","17","18","19",
        "20","21","22","23","24a","24b",
        "25","26","27","28","29",
        "30","31","32","33","34a","34b",
        "35","36","37","38","39",
        "40","41","42","43a","43b","44",
        "45","46a","46b","47a","47b","48","49",
        "50","51","52","53","54",
        "55","56","57","58","59",
        "60","61","62","63","64",
        "65","66","67","68","69",
        "70a","70b", "71a","71b","72","73","74",
        "75",   "77","78","79a","79b",        // "76a","76b" are now 108,109,110
        "80a","80b","81","82",

        //"83",
        "83a",
        "83b",
        "83c",

        "84",
        "85","86","87","88","89",
        "90","91","92a","92b","93","94","95","96a","96b","97","98",  // "99" = next acquisition
        "108","109","110",

        "a1",       // hide for Exh A
        //"a1house",
        //"a1Line",    // hide for Exh A
        //"a1Polygon",

        //"a2",
        //"x1",
        "79bx1","79bx2",
        "p2","p3","p4","p5","p6","p7","p8","p9",     // Cater related
        "040124","040126"     // Walsh related

    ];

}


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
                            "habitat": "marsh",
                            "status": "C",

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel

                            //"signs":[
                            //    [-70.04583, 41.98848]
                            //],
                            
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





/*
ORIENTAL CARPET
Sanders

We decided, in 2007, to work with the Truro Conservation Trust (TCT) to place a protective conservation restriction (CR) on 12.4 acres so that this unique land will be preserved in its present state for future generations. The CR allows my family to retain its ownership of the land while preventing its development and limiting its uses to only those typical of conservation land. As the holder of the CR, the TCT monitors the property to ensure that the terms of the restriction are adhered to and that there is no encroachment onto it.

When combined with the 2.9 adjacent acres, donated to the TCT by another abutter in 1996, the entire “oriental carpet” at the corner of Old County and Ryder Beach Roads is preserved.

PARCELS
added 059-055 2 Ryder Beach Rd.  TCT 28, 2.860 Ac key 3507 fee simple

059-061 123 Old County,  Sanders  1.480 Ac key 3513
059-107 125 Old County,  Sanders  0.820 Ac key 5776

059-108 125A Old County, Sanders  2.630 Ac key 6410 CR
059-109 123B Old County, Sanders  5.680 Ac key 6411 CR
059-110 123A Old County, Sanders  1.840 Ac key 6412 CR

added 059-060 12A Ryder Beach Rd. TCT 70A, 2.610 Ac key 3512  fee simple
added 059-072 12 Ryder Beach Rd.  TCT 70B, 2.510 Ac key 3524  fee simple
 
added 059-064  0.690 Ac    6 Freeman Rd    Town   key card 3516  acq 1994
added 059-066  0.730 Ac  133 Old County Rd Town   key card 3518  acq 1986



*/


tct.id_108 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 108",          // displays in center of parcel
                            //"label": "",     // displays instead of title                            
                            "donor": "Sanders",    // short name of donor
                            "grantor": "Franja Lewis SANDERS",      // long name of donor
                            "acquired": "20071214",
                            "street":"125A Old County Rd",

                            "acres": 2.630,
                            "acresUpland":  0.23,     // est 
                            "acresWetland": 2.40,    // 

                            "map": 59,
                            "lot": 108,
                            "key": 6410,  // assessors card key

                            "habitat": "fresh marsh; road bank",

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel

                            //"signs":[
                            //    [-70.04596, 41.98888],
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "D",

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": -1,   // assessed TOTAL

                            "inspectYears": 3,

                            "status": "c",
                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.067, 41.967],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.06793, 41.96736], // NW
                                        [-70.06759, 41.96733],
                                        [-70.06748, 41.96730],
                                        [-70.06729, 41.96733],
                                        [-70.06726, 41.96738],

                                        [-70.06728, 41.96757],
                                        [-70.06734, 41.96779],
                                        [-70.06731, 41.96782],
                                        [-70.06723, 41.96787],
                                        [-70.06718, 41.96788],

                                        [-70.06721, 41.96799], // N
                                        [-70.06693, 41.96794], // ROAD
                                        [-70.06676, 41.96764],
                                        [-70.06666, 41.96735],
                                        [-70.06656, 41.96699],

                                        [-70.06647, 41.96676],

                                        // along town land on S at 133 Old County
                                        [-70.06640, 41.96661], // NE
                                        [-70.06645, 41.96660], 
                                        [-70.06688, 41.96644], 
                                        [-70.06692, 41.96642], 
                                        [-70.06697, 41.96642], 
                                        [-70.06701, 41.96641], 
                                        [-70.06712, 41.96638], 
                                        [-70.06716, 41.96638], // NW

                                        [-70.06793, 41.96736]   // close polygon with repeating 1st point
                                    ]
                                ]
                        }
                    };


tct.id_109 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 109",          // displays in center of parcel
                            //"label": "",     // displays instead of title                            
                            "donor": "Sanders",    // short name of donor
                            "grantor": "Franja Lewis SANDERS",      // long name of donor
                            "acquired": "20071214",
                            "street":"123B Old County Rd",

                            "acres": 5.680,
                            "acresUpland":  2.84,     // est 
                            "acresWetland": 2.84,    // 

                            "map": 59,
                            "lot": 109,
                            "key": 6411,  // assessors card key

                            "habitat": "coastal heath; shrub swamp",

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel

                            //"signs":[
                            //    [-70.04596, 41.98888],
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "D",

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": -1,   // assessed TOTAL

                            "inspectYears": 3,

                            "status": "c",
                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.06860, 41.96723],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.06984, 41.96772],
                                        [-70.06897, 41.96818],
                                        [-70.06793, 41.96736],
                                        [-70.06716, 41.96638],
                                        [-70.06731, 41.96635],

                                        [-70.06750, 41.96629],
                                        [-70.06765, 41.96623],
                                        //[-70.06777, 41.96623],

                                        // along town land at 6 Freeman
                                        [-70.06771, 41.96623], // NE
                                        [-70.06775, 41.96622],
                                        [-70.06779, 41.96621],
                                        [-70.06791, 41.96616],
                                        [-70.06794, 41.96616],
                                        [-70.06798, 41.96615],
                                        [-70.06802, 41.96613],
                                        [-70.06811, 41.96608], // bends
                                        [-70.06812, 41.96607], // NW

                                        // along TCT 70b



                                        [-70.06984, 41.96772]   // close polygon with repeating 1st point
                                    ]
                                ]
                        }
                    };



tct.id_110 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 110",          // displays in center of parcel
                            //"label": "",     // displays instead of title                            
                            "donor": "Sanders",    // short name of donor
                            "grantor": "Franja Lewis SANDERS",      // long name of donor
                            "acquired": "20071214",
                            "street":"123A Old County Rd",

                            "acres": 1.840,
                            "acresUpland":   .32,    // est 
                            "acresWetland": 1.52,    // 

                            "map": 59,
                            "lot": 110,
                            "key": 6412,  // assessors card key

                            "habitat": "coastal heath; shrub swamp",

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel

                            //"signs":[
                            //    [-70.04596, 41.98888],
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "D",

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": -1,   // assessed TOTAL

                            "inspectYears": 3,

                            "status": "c",
                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.06798, 41.96835],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.06896, 41.968185], // W extra precision

                                        // along 2 Ryder Beach
                                        [-70.06780, 41.96879],
                                        [-70.06808, 41.96924],
                                        [-70.06798, 41.96929],
                                        [-70.06740, 41.96864],

                                        [-70.06759, 41.96856],
                                        [-70.06751, 41.96815], // rough curve - needs added points
                                        [-70.06863, 41.96802], // rough curve - needs added points

                                        [-70.06896, 41.968185]   // close polygon with repeating 1st point
                                    ]
                                ]
                        }
                    };




tct.id_1 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 1",
                            "donor": "Cook",
                            "acquired": "19820629",
                            "street":"0 Pond Rd",

                            "acres": .560,
                            "acresUpland": .28,    
                            "acresWetland": .28,

                            "map": 36,
                            "lot": 62,
                            "key": 959,

                            "habitat": "fresh marsh",
                            
                            //"signs":[
                            //    [-70.04596, 41.98888],
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "A",

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 3,

                            "status": "C",

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.08801, 42.03295],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.08842, 42.03307],
                                        [-70.08780, 42.03318],
                                        [-70.08759, 42.03282],
                                        [-70.08804, 42.03274],
                                        [-70.08814, 42.03273],
                                        [-70.08828, 42.03271],

                                        [-70.08842, 42.03307]   // close polygon with repeating 1st point
                                    ]
                                ]
                        }
                    };

tct.id_2 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 2",          // displays in center of parcel
                            //"label": "",     // displays instead of title                            
                            "donor": "Kahn",    // short name of donor
                            "grantor": "Harry KAHN",      // long name of donor
                            "acquired": "19820906",
                            "street":"Phats Valley Rd",
                            "acres": 4.47,
                            "acresUpland":  .99,    
                            "acresWetland": 3.48,
                            "map": 54,
                            "lot": 98,
                            "key": 3329,  // assessors card key
                            "habitat": "brackish marsh",
                            "status": "C",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            //"signs":[
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "D",

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
                            "center": [-70.0700, 41.9847],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07075, 41.98550],  // top
                                        [-70.06821, 41.98464],  // R
                                        [-70.06845, 41.98462],
                                        // curve
                                        [-70.06974, 41.98431],
                                        [-70.06968, 41.98412],
                                        // curve
                                        [-70.07045, 41.98374],  // road
                                        [-70.07046, 41.98378],  // road
                                        [-70.07059, 41.98369],
                                        [-70.07062, 41.98368],
                                        [-70.07064, 41.98368],

                                        [-70.07077, 41.98380],
                                        [-70.07080, 41.98382],
                                        [-70.07080, 41.98385],

                                        [-70.07075, 41.98550]   // close polygon by repeating 1st point
                                    ]
                                ]
                        }
                    };

tct.id_3a =             // from MegR 20181012
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 3a",
                            "donor": "Parker",
                            "grantor": "Jean A. PARKER",
                            "acquired": "19820907",
                            "acres": 8.63,
                            "acresUpland": 0,
                            "acresWetland": 8.63,
                            "habitat": "marsh, beach",
                            "map": 49,
                            "lot": 21,
                            "key": 2771,
                            "street":"Eagles Neck Creek",
                            "signs": [
                                //[-70.07005, 42.00346]
                            ],
                            "team":"C",
                            "lastInspected": "??",
                            "issues": "none",
                            "photosTaken": "none",
                            "status": "C",
                            "inspectYears": 5

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07475, 41.99018],
                            "coordinates": 
                                [
                                    [
                                        [-70.07601, 41.99023],
                                        [-70.07445, 41.99127],
                                        [-70.07396, 41.99041],

                                        //[-70.07320, 41.99055],
                                        [-70.07324, 41.99062],

                                        [-70.07320, 41.99055],
                                        [-70.07269, 41.98982],

                                        [-70.07243, 41.98978],
                                        [-70.07540, 41.98917],
                                        //[-70.07601, 41.99023],

                                        [-70.07601, 41.99023]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


tct.id_3b =             // from MegR 20181012
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 3b",
                            "donor": "Parker",
                            "grantor": "Jean A. PARKER",
                            "acquired": "19820907",
                            "acres": 4.13,
                            "acresUpland": 0,
                            "acresWetland": 4.13,
                            "habitat": "salt marsh",
                            "map": 49,
                            "lot": 26,
                            "key": 2776,

                            "street":"Eagles Neck Creek",
                            "signs": [
                                //[-70.07005, 42.00346]
                            ],
                            "team":"C",
                            "lastInspected": "??",
                            "issues": "none",
                            "photosTaken": "none",
                            "status": "C",
                            "inspectYears": 5

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07359, 41.98807],
                            "coordinates": 
                                [
                                    [
                                        [-70.07415, 41.98875],
                                        [-70.07251, 41.98866],
                                        [-70.07295, 41.98866],
                                        [-70.07307, 41.98863],
                                        [-70.07315, 41.98852],

                                        [-70.07306, 41.98800],
                                        [-70.07307, 41.98794],
                                        [-70.07310, 41.98792],
                                        [-70.07355, 41.98782],
                                        [-70.07370, 41.98773],

                                        [-70.0738 ,   41.98751],
                                        [-70.07375,   41.98739],
                                        [-70.07358,   41.98731],
                                        [-70.07341,   41.98736],
                                        [-70.07318,   41.98747],

                                        [-70.0729 ,   41.9874 ],
                                        [-70.07284,   41.9874 ],
                                        [-70.0728 ,   41.98731],
                                        [-70.07285,   41.98722],
                                        [-70.07293,   41.98718],

                                        [-70.07315,   41.98716],
                                        [-70.07341,   41.98705],
                                        [-70.07347,   41.9869 ],
                                        [-70.07349,   41.98685],
                                        [-70.07347,   41.9868 ],

                                        [-70.07355,   41.98672],
                                        [-70.07368,   41.98678],
                                        [-70.07378,   41.98675],
                                        [-70.07382,   41.98665],
                                        [-70.07373,   41.98657],

                                        [-70.07362,   41.98636],
                                        [-70.07405,   41.98624],
                                        [-70.07415,   41.98658],
                                        [-70.07418,   41.98687],
                                        [-70.07416,   41.98714],

                                        [-70.07395,   41.98785],
                                        [-70.07399,   41.98834],

                                        [-70.07415, 41.98875]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };




tct.id_4 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 4",
                            "donor": "Francis",
                            "acquired": "19820919",
                            "acres": 3.30,
                            "acresUpland": 1.19,
                            "acresWetland": 2.11,
                            "habitat": "fresh marsh",
                            "map": 46,
                            "lot": 44,
                            "key": 2272,
                            "street":"Castle Rd",

                            "assessedFY": 2019,        // assessed fiscal year
                            "assessedTotal": 49900,   // assessed TOTAL

                            "comments":"Corner/Marsh",  // internal use

                            "signs": [
                                [-70.07005, 42.00346]
                            ],
                            "signComments": "",

                            "team":"B",
                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",
                            "status": "C",
                            "inspectYears": 5

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07039, 42.00399],
                            "coordinates": 
                                [
                                    [
                                        [-70.07197, 42.00375],
                                        [-70.07195, 42.00379],
                                        [-70.07184, 42.00381],
                                        [-70.07163, 42.00410],
                                        [-70.07055, 42.00446],
                                        [-70.07007, 42.00465],
                                        [-70.06991, 42.00463],
                                        [-70.06991, 42.00421],
                                        [-70.06987, 42.00365],
                                        [-70.07005, 42.00346],
                                        [-70.07045, 42.00327],
                                        [-70.07084, 42.00316], //
                                        [-70.07093, 42.00334],
                                        [-70.07052, 42.00358],
                                        [-70.07118, 42.00397],
                                        [-70.07151, 42.00379],
                                        [-70.07188, 42.00378],
                                        [-70.07197, 42.00375]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tct.id_5 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 5",          // displays in center of parcel
                            //"label": "5 RUSIANOFF",     // displays instead of title                            
                            "donor": "Rusianoff",    // short name of donor
                            "grantor": "Penelope RUSIANOFF",      // long name of donor
                            "acquired": "19821126",
                            "street":"Old County Rd",
                            "acres": 2.77,
                            "acresUpland":  .44,    
                            "acresWetland": 2.33,
                            "map": 54,
                            "lot": 4,
                            "key": 3241,  // assessors card key
                            "habitat": "brackish marsh",
                            "status": "C",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            //"signs":[
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "D",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 8500,   // assessed TOTAL
                            "assessedPrevious": 8500,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0705, 41.9856],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07071, 41.98666],  // top L
                                        [-70.07062, 41.98662],
                                        [-70.07046, 41.98653],  // top R
                                        [-70.07047, 41.98626],  // inside
                                        [-70.07037, 41.98620],

                                        [-70.07031, 41.98613],
                                        [-70.07030, 41.98607],
                                        [-70.07033, 41.98597],
                                        [-70.07033, 41.98590], 
                                        [-70.07030, 41.98582], 

                                        [-70.07030, 41.98576], 
                                        [-70.07019, 41.98564], 
                                        [-70.07018, 41.98561],  // intersect
                                        [-70.07016, 41.98559], 
                                        [-70.07018, 41.98554], 
                                        [-70.07017, 41.98550], 

                                        [-70.07014, 41.98546], 
                                        [-70.07004, 41.98541], 
                                        [-70.06997, 41.98541], 
                                        [-70.06992, 41.98544], 
                                        [-70.06988, 41.98545],  // r corner

                                        [-70.07000, 41.98565],  // l corner
                                        [-70.06979, 41.98590],  // top
                                        [-70.06966, 41.98580],
                                        [-70.06953, 41.98573],  // r corner
                                        [-70.06960, 41.98532],  // inside corner

                                        [-70.06897, 41.98500],
                                        [-70.06885, 41.98491],
                                        [-70.06878, 41.98488],
                                        [-70.06872, 41.98487],
                                        [-70.06861, 41.98483], 

                                        [-70.06845, 41.98475], 
                                        [-70.06838, 41.98471],
                                        [-70.06834, 41.98469], 
                                        [-70.06825, 41.98468],
                                        [-70.06810, 41.98467], 

                                        [-70.06790, 41.98464], 
                                        [-70.06762, 41.98458], 
                                        [-70.06751, 41.98455],  // intersect
                                        [-70.06725, 41.98445], 
                                        [-70.06716, 41.98441],  // R at road edge

                                        [-70.06732, 41.98409],  // btm R at road edge
                                        [-70.06789, 41.98454],  // intersect
                                        [-70.06821, 41.98464],  // intersect
                                        [-70.07075, 41.98550],  // btm L

                                        [-70.07071, 41.98666]   // close polygon by repeating 1st point
                                    ]
                                ]
                        }
                    };


tct.id_6 =           // from MegR 20181012
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 6",
                            "donor": "Snow",
                            "grantor": "John & Freda SNOW",
                            "acquired": "19831227",
                            "acres": 0.95,
                            "acresUpland": 0,
                            "acresWetland": 0.95,
                            "habitat": "shrub swamp",
                            "map": 51,
                            "lot": 15,
                            "key": 3062,
                            "street":"South Pamet Road",
                            "signs": [
                                //[]
                            ],
                            "team":"C",
                            "lastInspected": "??",
                            "issues": "none",
                            "photosTaken": "none",
                            "status": "C",
                            "inspectYears": 3

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.04481, 41.99348],
                            "coordinates": 
                                [
                                    [
                                        [-70.04540,   41.99297],
                                        [-70.04517,   41.99356],
                                        [-70.04502,   41.99355],
                                        [-70.04485,   41.99374],
                                        [-70.04483,   41.99398],

                                        [-70.04477,   41.99404],
                                        [-70.04437,   41.99344],
                                        [-70.04482,   41.99325],
                                        [-70.04540,   41.99297]
                                    ]
                                ]
                            }
                    };


tct.id_7 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 7",
                            "donor": "English",
                            "acquired": "19831228",
                            "street":"0 Pond Rd",
                            "acres": .36,        // per assessor 2018
                            "acresUpland": .20,    
                            "acresWetland": .16,  
                            "map": 36,
                            "lot": 59,
                            "key": 956,
                            "habitat": "fresh marsh",
                            
                            //"signs":[
                            //    [-70.04596, 41.98888],
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "A",

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 3,

                            "status": "C",

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.08923, 42.03267],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.08958, 42.03276],
                                        [-70.08910, 42.03290],
                                        [-70.08892, 42.03259],
                                        [-70.08898, 42.03257],
                                        [-70.08925, 42.03252],

                                        [-70.08929, 42.03249],
                                        [-70.08930, 42.03247],
                                        [-70.08933, 42.03245],
                                        [-70.08938, 42.03244],

                                        [-70.08958, 42.03276]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };



tct.id_8 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 8",
                            "marker-symbol": "monument",
                            "donor": "Snow",
                            "acquired": "19850318",
                            "acres": 16.85,
                            "acresUpland": 0,
                            "acresWetland": 16.85,
                            "habitat": "beach, tidal flat",
                            "map": 49,
                            "lot": 32,
                            "key": 2782,
                            "street":"Pamet Harbor",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 27200,   // assessed TOTAL

                            "team":"B",
                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",
                            "status": "C",
                            "inspectYears": 5
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0751, 41.9937],
                            "coordinates": 
                                [
                                    [
                                        [-70.07707, 41.99595],
                                        [-70.07553, 41.99593],
                                        [-70.07468, 41.99511],
                                        [-70.07477, 41.99506],
                                        [-70.07447, 41.99444],

                                        [-70.07410, 41.99452],

                                        [-70.07328, 41.99372],   //added

                                        [-70.07199, 41.99246],
                                        [-70.07358, 41.99200],
                                        [-70.07335, 41.99178],   // meets 37 at right
                                        [-70.07355, 41.99172],
                                        [-70.07373, 41.99168],
                                        [-70.07385, 41.99167],
                                        [-70.07405, 41.99168],
                                        [-70.07420, 41.99171],
                                        [-70.07441, 41.99179],
                                        [-70.07486, 41.99191],

                                        [-70.07620, 41.99200],   // meets 37 at left
                                        [-70.07634, 41.99250],
                                        [-70.07644, 41.99274],
                                        [-70.07644, 41.99325],
                                        [-70.07680, 41.99424],

                                        [-70.07714, 41.99468],
                                        [-70.07721, 41.99503],
                                        [-70.07714, 41.99536],
                                        [-70.07716, 41.99558],

                                        [-70.07707, 41.99595]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tct.id_9a = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 9a",
                            "donor": "Abell",
                            "grantor": "Edward E. ABELL",
                            "acquired": "19840524",
                            "acres": 2.03,
                            "acresUpland": .31,
                            "acresWetland": 1.72,
                            "habitat": "brackish marsh",
                            "map": 50,
                            "lot": 222,
                            "key": 2991,
                            "street":"Mill Pond Road",
                            "team":"C",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "status": "C",
                            "inspectYears": 5
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.06801, 41.98858],
                            "coordinates": 
                                [
                                    [
                                        [-70.06872,   41.98864],
                                        [-70.06855,   41.98865],
                                        [-70.06847,   41.98901],

                                    [-70.06823,   41.98899],

                                        [-70.06738,   41.9889 ],
                                        [-70.06742,   41.9886 ],
                                        [-70.06755,   41.98843],
                                        [-70.06837,   41.98799],
                                        [-70.0685 ,   41.98833],
                                        [-70.06857,   41.98837],
                                        [-70.06872,   41.98864]
                                    ]
                                ]
                            }
                    };



tct.id_9b = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 9B",          // displays in center of parcel
                            //"label": "",     // displays instead of title                            
                            "donor": "Abell",    // short name of donor
                            "grantor": "Edward E. ABELL",      // long name of donor
                            "acquired": "198480524",
                            "street":"Mill Pond",
                            "acres": .18,
                            "acresUpland":  0,    
                            "acresWetland": .18,
                            "map": 50,
                            "lot": 42.039,
                            // Map 50, Lot 42, No.39
                            //"key": 0,  // assessors card key
                            "habitat": "shrub swamp",
                            
                            "team": "C",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": -1,   // assessed TOTAL
                            "assessedPrevious": -1,   // assessed TOTAL previous

                            "inspectYears": 3,

                            "status": "C",
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

                                        //[-70.08842, 41.93307],

                                        //[-70.08842, 42.03307]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };


tct.id_10a = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 10a",
                            "donor":   "TRS Rsrvtns",                            
                            "grantor": "Trustees of Reservations",
                            "acquired": "19850203",
                            "acres": 8.46,
                            "acresUpland": 0,     
                            "acresWetland": 8.46,
                            "habitat": "salt marsh",
                            "map": 50,
                            "lot": 208,
                            "key": 2977,
                            "street":"Pamet River",
                            "abuts":["10b","12b"],
                            "team":"B",
                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",
                            "status": "C",
                            "inspectYears": 5,
                            "landmarks": "osprey pole"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.06833, 41.99704],
                            "coordinates": 
                                [
                                    [
                                        [-70.07053, 41.99803],
                                        [-70.07043, 41.99805],
                                        [-70.07032, 41.99805],
                                        [-70.07021, 41.99806],
                                        [-70.07002, 41.99813],

                                        [-70.06967, 41.99818],
                                        [-70.06927, 41.99827],
                                        [-70.06885, 41.99766],
                                        [-70.06772, 41.99814],
                                        [-70.06736, 41.99807],


                                        [-70.06764, 41.99651],

                                        [-70.06840, 41.99642],  // intersect


                                        [-70.06938, 41.99675],
                                        [-70.07053, 41.99803]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tct.id_10b = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 10b",
                            "donor":   "TRS Rsrvtns",                            
                            "grantor": "Trustees of Reservations",                            "acquired": "19850203",
                            "acres": 6.24,
                            "acresUpland": 0,     
                            "acresWetland": 6.24,
                            "habitat": "salt marsh",
                            "map": 46,
                            "lot": 121,
                            "key": 2346,
                            "street": "Castle Rd",

                            "abuts":["10a","10c"],

                            "team":"B",
                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",
                            "status": "C",
                            "inspectYears": 5
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0678, 41.9986],
                            "coordinates": 
                                [
                                    [
                                        [-70.06927, 41.99827],
                                        [-70.06816, 41.99919],
                                        [-70.06703, 41.99925],
                                        [-70.06567, 41.99840],
                                        [-70.06736, 41.99807],
                                        [-70.06772, 41.99814],
                                        [-70.06885, 41.99766],
                                        [-70.06927, 41.99827]   // close polygon with repeating 1st point
                                    ]

                                ]
                            }
                    };

tct.id_10c = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 10c",
                            "donor":   "TRS Rsrvtns",                            
                            "grantor": "Trustees of Reservations",                              "acquired": "19850203",
                            "acres": 2.94,
                            "acresUpland": 1.38,     
                            "acresWetland": 1.56,
                            "habitat": "salt marsh",                                
                            "map": 46,
                            "lot": 122,
                            "key": 2347,
                            "street": "54 Castle Rd",

                            "abuts":["10b"],

                            "team":"B",
                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",
                            "status": "C",
                            "inspectYears": 5
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.06585, 41.9990],
                            "coordinates": 
                                [
                                    [
                                        [-70.06703, 41.99925],

                                        [-70.06567, 41.99840],   // intersection

                                        [-70.06552, 41.99831],
                                        [-70.06507, 41.99859],
                                        [-70.06528, 41.99912],
                                        [-70.06516, 41.99965],

                                        [-70.06703, 41.99925]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

// by GChang 20181010
tct.id_11 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 11",
                            "donor":   "TRS Rsrvtns",                            
                            "grantor": "Trustees of Reservations",                              "acquired": "19861230",
                            "acres": 1.151,
                            "acresUpland": 1.151,     
                            "acresWetland": 0,
                            "habitat": "",                                
                            "map": 50,
                            "lot": 241,
                            "key":"3008",
                            "street": "Depot Rd",
                            "habitat": "pine/oak woods",

                            "abuts":[""],

                            "team":"C",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "status": "C",
                            "inspectYears": 5
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0627, 41.9907],
                            "coordinates": 
                                [
                                    [
                                        [-70.06311, 41.99103],
                                        [-70.06256, 41.99110],
                                        [-70.06243, 41.99114],
                                        [-70.06229, 41.99019],  // 10' easement
                                        [-70.06229, 41.99016],  // btm
                                        [-70.06283, 41.99033],

                                        [-70.06311, 41.99103]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


tct.id_12a = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 12a",
                            //"marker-symbol": "monument",
                            "donor": "Rule",
                            "acquired": "19880327",
                            "acres": 2.91,
                            "acresUpland": 2.91,    
                            "acresWetland": 0,
                            "map": 50,
                            "lot": 1,
                            "key": 2790,
                            "street":"off Toms Hill Rd",
                            "habitat": "heathland",
                            "team":"B",
                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "https://www.dropbox.com/sh/enlgh8uxkz08esl/AAAdnNmzw_KW7jdv9_oxIgYMa?dl=0",
                            "inspectYears": 3,
                            "status": "C",
                            "abuts": ["20","30","50"],
                            //"drone": "jjVEZwqqgO"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07198, 41.99772],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07270, 41.99758],
                                        [-70.07205, 41.99828],
                                        [-70.07135, 41.99830],
                                        [-70.07116, 41.99818],
                                        [-70.07155, 41.99760],
                                        [-70.07151, 41.99754],
                                        [-70.07169, 41.99741],
                                        [-70.07183, 41.99702],
                                        [-70.07188, 41.99695],
                                        [-70.07196, 41.99682],
                                        [-70.07197, 41.99649],

                                        [-70.07230, 41.99698], // intersection

                                        [-70.07270, 41.99758]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


tct.id_12b = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 12b",
                            //"marker-symbol": "monument",
                            "donor": "Rule",
                            "acquired": "19880327",
                            "acres": 0.85,
                            "acresUpland": .85,    
                            "acresWetland": 0,
                            "map": 46,
                            "lot": 341,
                            "key": 2546,
                            "street":"off Toms Hill Rd",
                            "habitat": "heath, woods",

                            "abuts": ["10a","49"],
                            "team": "B",
                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "https://www.dropbox.com/sh/enlgh8uxkz08esl/AAAdnNmzw_KW7jdv9_oxIgYMa?dl=0",
                            "inspectYears": 3,
                            "status": "C",
                            //"drone": "jjVEZwqqgO"
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07012, 41.99839],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07048, 41.99858],
                                        [-70.07001, 41.99876],
                                        [-70.06967, 41.99818],
                                        [-70.07002, 41.99813],
                                        [-70.07021, 41.99806],
                                        [-70.07021, 41.99806],
                                        [-70.07032, 41.99805],
                                        [-70.07046, 41.99832],
                                        [-70.07048, 41.99858]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };



tct.id_13 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 13",
                            "donor": "Capelands",
                            "grantor": "Capelands, Inc.",

                            "acquired": "19880814",
                            "acres": 0.39,
                            "acresUpland": 0,    
                            "acresWetland": 0.39,
                            "map": 50,
                            "lot": 205,
                            "key": 2974,
                            "street":"Pamet Marsh",
                            "habitat": "marsh island",

                            "abuts": ["20","50"],
                            "team":"B",

                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",

                            "status": "C",

                            "inspectYears": 5

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07165, 41.9968],                            
                            "coordinates": 
                                [
                                    [
                                        [-70.07191, 41.99679],
                                        [-70.07185, 41.99691],  // 9:30
                                        [-70.07171, 41.99700],  // 11:30
                                        [-70.07159, 41.99710],  // noon
                                        [-70.07146, 41.99709],  // 1:00

                                        [-70.07136, 41.99695],  // 2:30
                                        [-70.07142, 41.99681],  // 4:00

                                        [-70.07163, 41.99667],

                                        [-70.07170, 41.99664],

                                        [-70.07183, 41.99667],


                                        [-70.07184, 41.99668],

                                        [-70.07191, 41.99679]   // close polygon with repeating 1st point
                                    ]

                                ]
                            }
                    };


tct.id_14a =           // from MegR 20181012
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 14a",
                            "donor": "Brown",
                            "grantor": "Thomas & Betsey BROWN",
                            "acquired": "19881228",
                            "acres": 1.52,
                            "acresUpland": .47,
                            "acresWetland": 1.05,
                            "habitat": "brackish marsh",
                            "map": 50,
                            "lot": 224,
                            "key": 2993,
                            "street":"Mill Pond Road",
                            "signs": [
                                //[]
                            ],
                            "team":"C",
                            "lastInspected": "??",
                            "issues": "none",
                            "photosTaken": "none",
                            "status": "C",
                            "inspectYears": 3

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0678, 41.9893],
                            "coordinates": 
                                [
                                [
                                    [-70.06827,   41.98942],
                                    [-70.06821,   41.98943],
                                    [-70.06787,   41.9896 ],
                                    [-70.0673 ,   41.98985],
                                    [-70.0672 ,   41.98986],

                                    [-70.06738,   41.9889 ],
                                    [-70.06823,   41.98899],

                                    [-70.06827,   41.98942]
                                ]
                                ]
                            }
                    };

tct.id_14b =           // from MegR 20181012
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 14B",
                            "label": "14B BROWN",
                            "donor": "Brown",
                            "grantor": "Thomas & Betsey BROWN",
                            "acquired": "19881228",
                            "acres": 0.27,
                            "acresUpland": 0,
                            "acresWetland": 0.27,
                            "habitat": "shrub swamp",
                            "map": 50,
                            "lot": 42, //.25&26",
                            // Map 50,Lot 42,No.25&26
                            "key": 0,
                            "street":"Mill Pond",
                            "signs": [
                                //[]
                            ],
                            "team":"C",
                            "lastInspected": "??",
                            "issues": "none",
                            "photosTaken": "none",
                            "status": "C",
                            "inspectYears": 3

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.06566, 41.98961],
                            "coordinates": 
                                [

                                [
                                                                /*
                                    [-70.06827,   41.98942],
                                    [-70.06821,   41.98943],
                                    [-70.06787,   41.9896 ],
                                    [-70.0673 ,   41.98985],
                                    [-70.0672 ,   41.98986],

                                    [-70.06738,   41.9889 ],
                                    [-70.06823,   41.98899],

                                    [-70.06827,   41.98942]
                                    */
                                ]
                              
                                ]

                            }
                    };




tct.id_15 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 15",
                            "donor": "Capelands",
                            "grantor": "Capelands, Inc.",                            "acquired": "19890310",
                            "acres": 11.93,
                            "acresUpland": 0,
                            "acresWetland": 11.93,
                            "map": 46,
                            "lot": 29,
                            "key": 2287,                                                      
                            "street":"Castle Rd",
                            "habitat": "fresh marsh ",

                            "abuts":"19",
                            "team":"B",
                            
                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",
                            "signs": [],
                            "status": "C",

                            "inspectYears": 5

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0662, 42.0044],
                            "coordinates": 
                                [
                                    [
                                        [-70.06967, 42.00378],
                                        [-70.06975, 42.00427],
                                        [-70.06837, 42.00459],
                                        [-70.06800, 42.00432],
                                        [-70.06776, 42.00431],

                                        [-70.06625, 42.00516],
                                        [-70.06591, 42.00509],
                                        [-70.06577, 42.00505],
                                        [-70.06496, 42.00507],
                                        [-70.06312, 42.00605],

                                        [-70.06289, 42.00598],
                                        [-70.06293, 42.00577],
                                        [-70.06359, 42.00558],
                                        [-70.06406, 42.00536],
                                        [-70.06472, 42.00481],

                                        [-70.06464, 42.00476],
                                        [-70.06502, 42.00404],
                                        [-70.06542, 42.00396],
                                        [-70.06581, 42.00350],
                                        [-70.06637, 42.00347],

                                        [-70.06731, 42.00385],
                                        [-70.06805, 42.00394],
                                        [-70.06870, 42.00381],
                                        [-70.06919, 42.00395],

                                        [-70.06967, 42.00378]   // close polygon with repeating 1st point
                                    ]

                                ]
                            }
                    };



tct.id_16 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 16",
                            "donor": "Noons",
                            "grantor": "Annie M. Noons",
                            "acquired": "19890312",
                            "acres": .14,
                            "acresUpland": 0.07,    
                            "acresWetland": 0.07,
                            "map": 39,
                            "lot": 3,
                            "key": 1138,
                            "street": "Pond Rd",
                            "habitat":"pondfront",

                            "abuts": ["12a","13","50"],
                            "team":"A",

                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",

                            "status": "C",

                            "inspectYears": 3

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.09220, 42.03152],
                            "coordinates": 
                                [
                                    [
                                        [-70.09251, 42.03142],  // leftmost 8 oclock
                                        [-70.09195, 42.03170],  // top 
                                        [-70.09191, 42.03164],  // right
                                        [-70.09214, 42.03149],
                                        [-70.09243, 42.03134],  // bottom

                                        [-70.09251, 42.03142]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


tct.id_17 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 17",          // displays in center of parcel
                            //"label": "17 ARNOLD",     // displays instead of title                            
                            "donor": "Arnold",    // short name of donor
                            "grantor": "Marian L. ARNOLD ",      // long name of donor
                            "acquired": "19891026",
                            "street":"Old County Rd",
                            "acres": 1.95,
                            "acresUpland":  1.95,    
                            "acresWetland": 0,
                            "map": 50,
                            "lot": 242,
                            "key": 3009,  // assessors card key
                            "habitat": "pine/oak woods",
                            "status": "C",

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
                            "assessedTotal": -1,   // assessed TOTAL
                            "assessedPrevious": -1,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0615, 41.9901],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.06229, 41.99016],  // L

                                        [-70.06225, 41.99018],  // 10' easement

                                        [-70.06192, 41.99031],  // access N edge
                                        [-70.06187, 41.99033],  // access
                                        [-70.06177, 41.99037],  // access
                                        [-70.06162, 41.99043],  // access

                                        [-70.06136, 41.99053], 
                                        [-70.06113, 41.99055],  // top R
                                        [-70.06082, 41.99007],
                                        [-70.06095, 41.98998],  // access S edge
                                        [-70.06098, 41.98996],  // access

                                        [-70.06127, 41.98975],  // access
                                        [-70.06139, 41.98967],  // access
                                        [-70.06167, 41.98947],  // btm

                                        [-70.06229, 41.99016]   // close polygon by repeating 1st point
                                    ]
                                ]
                        }
                    };

tct.id_18 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 18",          // displays in center of parcel
                            //"label": "18 HARRIS",     // displays instead of title                            
                            "donor": "Harris",    // short name of donor
                            "grantor": "Harold HARRIS ",      // long name of donor
                            "acquired": "19891212",
                            "street":"Cormorant Rd",
                            "acres": 5.18,
                            "acresUpland":  0.17,    
                            "acresWetland": 5.01,
                            "map": 39,
                            "lot": 259,
                            "key": 1378,  // assessors card key
                            "habitat": "heath, pond",
                            "status": "C",

                            //"landmarks": "osprey pole",   // landmarks on the parcel

                            //"signs":[
                            //    [-70.04583, 41.98848]
                            //],
                            
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
                            "center": [-70.0838, 42.0247],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.08408, 42.02558],  // top L
                                        [-70.08335, 42.02553],
                                        [-70.08272, 42.02528],  // R
                                        [-70.08328, 42.02484],  // inside corner
                                        [-70.08273, 42.02462],  // corner

                                        [-70.08312, 42.02417],  // btm R
                                        [-70.08425, 42.02400],  // intersection
                                        [-70.08474, 42.02393],  // btm
                                        [-70.08514, 42.02420],  // L
                                        [-70.08442, 42.02479],  // mid
                                        // curve
                                        [-70.08428, 42.02493],  // curve
                                        [-70.08416, 42.02511],  // curve
                                        [-70.08409, 42.02531],  // curve
                                        [-70.08407, 42.02545],  // curve

                                        [-70.08408, 42.02558]   // close polygon by repeating 1st point
                                    ]
                                ]
                        }
                    };

tct.id_19 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 19",
                            "donor": "Schirmer",
                            "acquired": "19900830",
                            "acres": 5.99,
                            "acresUpland": .07,
                            "acresWetland": 5.92,
                            "map": 46,
                            "lot": 354,
                            "key": 2559,
                            "street":"Castle Rd",
                            "habitat": "fresh marsh",

                            "abuts":"15",

                            "team":"B",
                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",

                            "status": "C",

                            "signs":[
                                [-70.06926, 42.00545 ] // added 20190607
                            ],

                            "inspectYears": 5

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.06784, 42.00468],
                            "coordinates": 
                                [
                                    [
                                        [-70.06939, 42.00521],
                                        [-70.06911, 42.00575],
                                        [-70.06864, 42.00575],
                                        [-70.06786, 42.00493],
                                        [-70.06725, 42.00498],

                                        [-70.06679, 42.00610],
                                        [-70.06688, 42.00618],
                                        [-70.06645, 42.00634],
                                        [-70.06606, 42.00540],
                                        [-70.06595, 42.00532],

                                        [-70.06591, 42.00509],
                                        [-70.06625, 42.00516],
                                        [-70.06776, 42.00431],
                                        [-70.06800, 42.00432],

                                        [-70.06837, 42.00459],

                                        [-70.06939, 42.00521]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


tct.id_20 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 20",
                            "donor": "Davis",
                            "acquired": "19910411",
                            "acres": 1.14,
                            "acresUpland": 0,    
                            "acresWetland": 1.14,
                            "map": 50,
                            "lot": 206,
                            "key": 2975,
                            "street":"Pamet Marsh",
                            "habitat": "salt marsh",

                            "abuts": ["12a","13","50"],

                            "team":"B",
                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",

                            "status": "C",

                            "inspectYears": 5

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07152, 41.99624],
                            "coordinates": 
                                [
                                    [
                                        [-70.07163, 41.99667],  // at island bottom
                                        [-70.07090, 41.99584],  // low right
                                        [-70.07133, 41.99563],  // low left
                                        [-70.07197, 41.99649],
                                        [-70.07196, 41.99682],

                                        [-70.07188, 41.99695],
                                        [-70.07185, 41.99691],
                                        [-70.07191, 41.99679],
                                        [-70.07191, 41.99679],
                                        [-70.07183, 41.99667],
                                        [-70.07170, 41.99664],

                                        [-70.07163, 41.99667]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


// TCT 21 December 11, 1991 Maud H. & Ansel B. CHAPLIN 0 4.75 4.75 salt marsh Pamet Marsh Map 50, Lot 259
// Team C
tct.id_21 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 21",          // displays in center of parcel
                            //"label": "21 CHAPLIN",     // displays instead of title                            
                            "donor": "Chaplin",    // short name of donor
                            "grantor": "Maud H. & Ansel B. CHAPLIN",      // long name of donor
                            "acquired": "19911211",
                            "street":"8 B High Pamet Rd",
                            "acres": 4.75,
                            "acresUpland": 0,    
                            "acresWetland": 4.75,
                            "map": 50,
                            "lot": 259,
                            "key": 3023,  // assessors card key
                            "habitat": "salt marsh",
                            "status": "C",

                            //"abuts":["24a","24b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "C",
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
                            "center": [-70.0653, 41.993],  // optional
                            "coordinates": 
                                [
                                    [
                                        // start boundary with TCT 69
                                        [-70.06676, 41.99379],  // bottom R of TCT 69
                                        [-70.06661, 41.99393],

                                        [-70.06653, 41.99443],  // top R of TCT 69
                                        // end boundary with TCT 69

                                        [-70.06651, 41.99442],
                                        [-70.06645, 41.99435],
                                        [-70.06638, 41.99430],
                                        [-70.06631, 41.99428],
                                        [-70.06623, 41.99428],

                                        [-70.06615, 41.99426],
                                        [-70.06610, 41.99426],
                                        [-70.06606, 41.99427],
                                        [-70.06603, 41.99429],
                                        [-70.06601, 41.99432],

                                        [-70.06600, 41.99440],
                                        [-70.06599, 41.99446],
                                        [-70.06598, 41.99449],
                                        [-70.06596, 41.99451],
                                        [-70.06592, 41.99453],

                                        [-70.06587, 41.99453],
                                        [-70.06583, 41.99452],
                                        [-70.06579, 41.99451],
                                        [-70.06576, 41.99449],
                                        [-70.06574, 41.99447],

                                        [-70.06573, 41.99443],
                                        [-70.06572, 41.99441],
                                        [-70.06572, 41.99438],
                                        [-70.06572, 41.99435],
                                        [-70.06570, 41.99432],

                                        [-70.06568, 41.99430],
                                        [-70.06566, 41.99429],
                                        [-70.06564, 41.994285],
                                        [-70.06560, 41.99426],
                                        [-70.06556, 41.99425],

                                        [-70.06553, 41.99425],
                                        [-70.06551, 41.99426],
                                        [-70.06549, 41.99426],
                                        [-70.06548, 41.99425],
                                        [-70.06547, 41.99423],

                                        [-70.06545, 41.99417],
                                        [-70.06541, 41.99413],
                                        [-70.06538, 41.99410],
                                        [-70.06535, 41.99408],
                                        [-70.06534, 41.99407],

                                        [-70.06533, 41.99405],
                                        [-70.06533, 41.99403],
                                        [-70.06534, 41.99401],
                                        [-70.06535, 41.99397],
                                        [-70.06537, 41.99393],

                                        [-70.06537, 41.99390],
                                        [-70.06538, 41.99385],
                                        [-70.06537, 41.99381],
                                        [-70.06535, 41.99377],
                                        [-70.06532, 41.99374],

                                        [-70.06527, 41.99372],
                                        [-70.06524, 41.99372],
                                        [-70.06521, 41.99373],
                                        [-70.06519, 41.99374],
                                        [-70.06518, 41.99374],

                                        [-70.06512, 41.99372],
                                        [-70.06510, 41.99371],
                                        [-70.06509, 41.99368],
                                        [-70.06509, 41.99363],
                                        [-70.06512, 41.99358],

                                        [-70.06514, 41.99352],
                                        [-70.06518, 41.99346],  // knee

                                        [-70.06461, 41.99339],  // top R border with town land



                                        [-70.06463, 41.99336],
                                        [-70.06467, 41.99331],

                                        [-70.06468, 41.99328],
                                        [-70.06471, 41.99326],
                                        [-70.06472, 41.99317],
                                        [-70.06472, 41.99315],
                                        [-70.06471, 41.99312],

                                        [-70.06472, 41.99309],
                                        [-70.06473, 41.99307],
                                        [-70.06475, 41.99303],
                                        [-70.06477, 41.99298],
                                        [-70.06478, 41.99295],

                                        [-70.06477, 41.99291],
                                        [-70.06477, 41.99289],
                                        [-70.06477, 41.99286],
                                        [-70.06481, 41.99279],
                                        [-70.06482, 41.99279],

                                        [-70.06488, 41.99270],  // intersection
                                        [-70.06489, 41.99268],
                                        [-70.06493, 41.99264],
                                        [-70.06497, 41.99261],
                                        [-70.06503, 41.99256],

                                        [-70.06510, 41.99250],
                                        [-70.06513, 41.99247],
                                        [-70.06516, 41.99246],
                                        [-70.06518, 41.99244],  // intersection
                                        [-70.06528, 41.99241],

                                        [-70.06539, 41.99234],
                                        [-70.06550, 41.99229],
                                        [-70.06556, 41.99227],
                                        [-70.06559, 41.99228],
                                        [-70.06562, 41.99228],

                                        [-70.06565, 41.99227],
                                        [-70.06569, 41.99225],  // 5' pedestrian easement
                                        [-70.06570, 41.99224],  // intersection
                                        [-70.06574, 41.99224],
                                        [-70.06582, 41.99226],

                                        [-70.06588, 41.99232],
                                        [-70.06589, 41.99236],
                                        [-70.06589, 41.99238],
                                        [-70.06587, 41.99254],
                                        [-70.06585, 41.99263],

                                        [-70.06582, 41.99269],
                                        [-70.06578, 41.99284],
                                        [-70.06575, 41.99307],
                                        [-70.06575, 41.99312],
                                        [-70.06575, 41.99317],

                                        [-70.06574, 41.99323],
                                        [-70.06572, 41.99328],
                                        [-70.06567, 41.99337],
                                        [-70.06560, 41.99341],
                                        [-70.06556, 41.99341],

                                        [-70.06552, 41.99343],
                                        [-70.06549, 41.99345],
                                        [-70.06545, 41.99347],
                                        [-70.06542, 41.99349],
                                        [-70.06543, 41.99352],

                                        [-70.06542, 41.99357],
                                        [-70.06545, 41.99360],
                                        [-70.06545, 41.99362],
                                        [-70.06547, 41.99364],
                                        [-70.06550, 41.99365],

                                        [-70.06563, 41.99371],
                                        [-70.06570, 41.99371],
                                        [-70.06575, 41.99373],
                                        [-70.06581, 41.99373],
                                        [-70.06584, 41.99374],

                                        [-70.06601, 41.99373],
                                        [-70.06608, 41.99371],
                                        [-70.06617, 41.99371],
                                        [-70.06638, 41.99374],
                                        [-70.06645, 41.99375],

                                        [-70.06676, 41.99379]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };


// TCT 22 December 17, 1991 COLONY RTY TRUST(Keller) 2.35 0.54 2.89 grassy heath Old Colony Way Map 45, Lot 9 
// Team A
tct.id_22 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 22",          // displays in center of parcel
                            //"label": "22 KELLER",     // displays instead of title                            
                            "donor": "Keller",    // short name of donor
                            "grantor": "COLONY RTY TRUST (Keller)",      // long name of donor
                            "acquired": "19911217",
                            "street":"6 Old Colony Way",
                            "acres": 2.89,
                            "acresUpland":  2.35,    
                            "acresWetland": 0.54,
                            "map": 45,
                            "lot": 9,
                            "key": 2095,  // assessors card key
                            "habitat": "maritime thicket; grassy heath",
                            "status": "C",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
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
                            "center": [-70.0794, 42.0091],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.08029, 42.00920],  // L
                                        [-70.08022, 42.00925],  // ease
                                        [-70.07980, 42.00963],  // intersect
                                        [-70.07958, 42.00982],  // top
                                        [-70.07923, 42.00952],  // intersect

                                        [-70.07889, 42.00923],  // intersect
                                        [-70.07877, 42.00913],
                                        [-70.07852, 42.00897],  // R
                                        [-70.07851, 42.00882],
                                        [-70.07963, 42.00847],  // ease

                                        [-70.07968, 42.00845],  // btm

                                        [-70.08029, 42.00920]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };


tct.id_23 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 23",
                            "donor": "Cook",
                            "acquired": "19929323",
                            "street":"0 Pond Rd",
                            "acres": 7.167,
                            "acresUpland": 7.167,    
                            "acresWetland": 0,
                            "map": 36,
                            "lot": 208,
                            "key": 1092,
                            "habitat": "grassy heath",
                            "status": "C",

                            //"signs":[
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "A",

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 3,

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.09147, 42.03703],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.09249, 42.03762],
                                        [-70.09177, 42.03823],
                                        [-70.08904, 42.03432],  // inside corner
                                        [-70.08866, 42.03439],  // right top of bump
                                        [-70.08838, 42.03403],  // right btm of bump

                                        [-70.08899, 42.03384],  // inside corner
                                        [-70.08883, 42.03362],  // curve
                                        [-70.08875, 42.03356],  // curve
                                        [-70.08863, 42.03354],  // R upper of lowest seg
                                        [-70.08857, 42.03343],

                                        [-70.08883, 42.03337],
                                        [-70.08943, 42.03429],
                                        [-70.09100, 42.03652],
                                        [-70.09157, 42.03630],

                                        [-70.09249, 42.03762]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


tct.id_24a = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 24a",
                            "donor": "Todd",
                            "acquired": "19920820",
                            "acres": 7.51,
                            "acresUpland": 0,    
                            "acresWetland": 7.51,
                            "map": 50,
                            "lot": 151,
                            "key": 2930,
                            "street":"12 Castle Rd",
                            "habitat": "salt marsh",

                            "team":"B",
                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",

                            "status": "C",
                            "inspectYears": 5

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0552, 41.9943],
                            "coordinates": 
                                [
                                    [
                                        [-70.05709, 41.99364],
                                        [-70.05658, 41.99456],
                                        [-70.05638, 41.99445],
                                        [-70.05610, 41.99445],
                                        [-70.05576, 41.99479],

                                        [-70.05509, 41.99498],
                                        [-70.05456, 41.99534],
                                        [-70.05482, 41.99541],
                                        [-70.05458, 41.99552],
                                        [-70.05441, 41.99566],

                                        [-70.05426, 41.99583],
                                        [-70.05386, 41.99569],
                                        [-70.05379, 41.99559],
                                        [-70.05362, 41.99514],
                                        [-70.05337, 41.99499],

                                        [-70.05396, 41.99457],
                                        [-70.05442, 41.99466],
                                        [-70.05453, 41.99463],
                                        [-70.05459, 41.99452],
                                        [-70.05464, 41.99405],

                                        [-70.05466, 41.99386],
                                        [-70.05497, 41.99352],
                                        [-70.05530, 41.99347],
                                        [-70.05572, 41.99384],
                                        [-70.05597, 41.99393],

                                        [-70.05624, 41.99396],
                                        [-70.05674, 41.99370],

                                        [-70.05709, 41.99364]  // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tct.id_24b = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 24b",
                            "donor": "Todd",
                            "acquired": "19920821",
                            "acres": 1.19,
                            "acresUpland": 0,    
                            "acresWetland": 1.19,                                
                            "map": 50,
                            "lot": 260,
                            "key": 3024,
                            "street":"12 Castle Rd",
                            "habitat": "salt marsh",

                            "team":"B",
                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",

                            "status": "C",
                            "inspectYears": 5

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.05600, 41.99477],
                            "coordinates": 
                                [
                                    [
                                        [-70.05658, 41.99456],
                                        [-70.05638, 41.99445],
                                        [-70.05610, 41.99445],
                                        [-70.05576, 41.99479],
                                        [-70.05509, 41.99498],

                                        [-70.05456, 41.99534],
                                        [-70.05482, 41.99541],
                                        [-70.05536, 41.99514],  // intersect
                                        [-70.05579, 41.99491],
                                        [-70.05642, 41.99484],


                                        [-70.05658, 41.99456]
                                        // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tct.id_25 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 25",
                            "donor": "Hooker",
                            "acquired": "19920929",
                            "acres": 3.98,
                            "acresUpland": 3.98,    
                            "acresWetland": 0,
                            "map": 45,
                            "lot": 121,
                            "key": 2224,
                            "street":"Corn Hill Rd",
                            "habitat": "pine/oak woods",

                            "team":"B",
                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",
                            "photosURL": "https://www.dropbox.com/sh/enlgh8uxkz08esl/AAAdnNmzw_KW7jdv9_oxIgYMa?dl=0",
                            "inspectYears": 3,
                            "status": "C",

                            "signs":[
                                [-70.073292, 42.002567 ] // added 20190607
                            ],


                            "drone": "jjVEZwqqgO"

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07310, 42.00198],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07213, 42.00077],
                                        [-70.07270, 42.00095],
                                        [-70.07291, 42.00098],
                                        [-70.07286, 42.00146],
                                        [-70.07374, 42.00158],
                                        [-70.07398, 42.00228],

                                        [-70.07354, 42.00244], // road curve
                                        [-70.07315, 42.00255],

                                        [-70.07266, 42.00266],
                                        [-70.07213, 42.00077]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


tct.id_26 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 26",          // displays in center of parcel
                            //"label": "26 JONES",     // displays instead of title                            
                            "donor": "Jones",    // short name of donor
                            "grantor": "Ellis O. & Anna M. JONES",      // long name of donor
                            "acquired": "19921104",
                            "street":"off Old County Rd",
                            "acres": .28,
                            "acresUpland":  0,    
                            "acresWetland": .28,
                            "map": 64,
                            "lot": 21,
                            "key": 3661,  // assessors card key
                            "habitat": "shrub swamp",
                            "status": "C",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "D",
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
                            "center": [-70.0703, 41.96435],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.06992, 41.96438],  // R corner
                                        [-70.07034, 41.96425],  // mid btm
                                        [-70.07085, 41.96411],  // btm L
                                        [-70.07075, 41.96422],  // L bump
                                        [-70.07027, 41.96449],  // top point

                                        [-70.06992, 41.96438]   // close polygon by repeating 1st point
                                    ]
                                ]   
                        }
                    };
tct.id_27 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 27",          // displays in center of parcel
                            //"label": "27 MORRIS",     // displays instead of title                            
                            "donor": "Morris",    // short name of donor
                            "grantor": "Gregory & Theresa MORRIS",      // long name of donor
                            "acquired": "19921223",
                            "street":"Abby Lane ",
                            "acres": .12,
                            "acresUpland":  0,    
                            "acresWetland": .12,
                            "map": 54,
                            "lot": 103,
                            "key": 3333,  // assessors card key
                            "habitat": "brackish marsh",

                            //"landmarks": "osprey pole",   // landmarks on the parcel

                            //"signs":[
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "D",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": -1,   // assessed TOTAL
                            "assessedPrevious": -1,   // assessed TOTAL previous

                            "inspectYears": 3,

                            "status": "C",
                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07005, 41.98553],  // optional
                            
                            "coordinates": 
                                [
                                    [
                                        [-70.07018, 41.98561],  // top L
                                        [-70.07000, 41.98565],  // top R
                                        [-70.06988, 41.98545],  // btm R
                                        [-70.06992, 41.98544],
                                        [-70.06997, 41.98541],

                                        [-70.07004, 41.98541],
                                        [-70.07014, 41.98546],
                                        [-70.07017, 41.98550],
                                        [-70.07018, 41.98554],
                                        [-70.07016, 41.98559],

                                        [-70.07018, 41.98561]   // close polygon by repeating 1st point
                                    ]
                                ]
                                
                        }
                    };



tct.id_28 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 28",          // displays in center of parcel
                            "label": '28 "oriental carpet"',     // displays this instead of title                            
                            "donor": "Mitchel",    // short name of donor
                            "grantor": "Estate of Albert MITCHEL",      // long name of donor
                            "acquired": "19921221",
                            "street":"2 Ryder Beach Rd",
                            "acres": 2.860,
                            "acresUpland": 1.37,    
                            "acresWetland": 1.49,
                            "map": 59,
                            "lot": 55,
                            "key": 3507,  // assessors card key
                            "habitat": "shrub swamp",

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel

                            //"signs":[
                            //    [-70.04596, 41.98888],
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "D",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 84600,   // assessed TOTAL

                            "inspectYears": 3,

                            "status": "C",
                            "description": "'oriental carpet'",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.06899, 41.96845],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.06992, 41.96768],
                                        [-70.07007, 41.96785],
                                        [-70.07017, 41.96798],  // NW corner

                                        [-70.06982, 41.96826],
                                        [-70.06955, 41.96843],
                                        [-70.06927, 41.96862],

                                        [-70.06840, 41.96911], // next bump
                                        [-70.06808, 41.96924], // upper R corner

                                        [-70.06780, 41.96879],

                                        [-70.06896, 41.968185], // intersect with 059-110 extra precision

                                        [-70.06897, 41.96818],  // intersect with 059-109

                                        [-70.06984, 41.96772],  // intersection

                                        [-70.06992, 41.96768]   // close polygon with repeating 1st point
                                    ]
                                ]
                        }
                    };

tct.id_29 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 29",          // displays in center of parcel
                            //"label": "",     // displays instead of title                            
                            "donor": "Moriarty",    // short name of donor
                            "grantor": "Lillian K. MORIARITY TRUST",      // long name of donor
                            "acquired": "19931217",  
                            "street":"0 Great Hills Rd",
                            "acres": 5.000,
                            "acresUpland":.69,     // per town prop card
                            "acresWetland": 4.31,  // per town prop card
                            "map": 49,
                            "lot": 22,
                            "key": 2772,  // assessors card key
                            "habitat": "salt marsh; dune",

                            "abuts":["3a","3b","37"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "",   // landmarks on the parcel

                            "comments":"Dalsheimer Trail",  // internal use

                            "signs":[
                                [-70.07547, 41.98884 ] // per Bob D, adjusted slightly to put inside the TCT land
                            ],
                            
                            "team": "C",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 11400,   // assessed TOTAL

                            "inspectYears": 3,

                            "status": "C",
                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"notes":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07377, 41.98910],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07540, 41.98917],
                                        [-70.07243, 41.98978],

                                        // needs better tracing on this boundary
                                        [-70.07214, 41.98941],

                                        [-70.07216, 41.98896],
                                        [-70.07218, 41.98886],
                                        [-70.07223, 41.98879],
                                        [-70.07235, 41.98869],

                                        [-70.07251, 41.98866],
                                        [-70.07415, 41.98875],
                                        [-70.07553, 41.98884],

                                        [-70.07540, 41.98917]   // close polygon with repeating 1st point
                                    ]
                                ]
                        }
                    };

tct.id_30 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 30",
                            "donor": "Davis",
                            "acquired": "19921231",
                            "acres": 1.01,
                            "acresUpland": 1.01,    
                            "acresWetland": 0,
                            "map": 49,
                            "lot": 38,
                            "key": 2788,
                            "street":"28A Toms Hill Road ",
                            "habitat": "grassy heath ",

                            "abuts": ["12a"],

                            "team":"B",
                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "https://www.dropbox.com/sh/enlgh8uxkz08esl/AAAdnNmzw_KW7jdv9_oxIgYMa?dl=0",
                            "inspectYears": 3,
                            "status": "C"

                            //"drone": "jjVEZwqqgO"

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07284, 41.99734],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07335, 41.99754],
                                        [-70.07285, 41.99781],
                                        [-70.07270, 41.99758],
                                        [-70.07230, 41.99698],
                                        [-70.07260, 41.99688],
                                        [-70.07256, 41.99697],

                                        [-70.07262, 41.99704],
                                        [-70.07291, 41.99713],
                                        [-70.07315, 41.99724],
                                        [-70.07326, 41.99734],
                                        [-70.07333, 41.99744],

                                        [-70.07335, 41.99754]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tct.id_31 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 31",          // displays in center of parcel
                            //"label": "31 WYNNE",     // displays instead of title                            
                            "donor": "Wynne",    // short name of donor
                            "grantor": "Robert & John L. WYNNE, Jr.",      // long name of donor
                            "acquired": "19931212",
                            "street":"off Depot Rd",
                            "acres": 3.67,
                            "acresUpland":  0,    
                            "acresWetland": 3.67,
                            "map": 50,
                            "lot": 213,
                            "key": 2982,  // assessors card key
                            "habitat": "salt marsh",
                            
                            "team": "C",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": -1,   // assessed TOTAL
                            "assessedPrevious": -1,   // assessed TOTAL previous

                            "inspectYears": 3,

                            "status": "C",
                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0578, 41.9945],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.05907, 41.99527],  // top point
                                        [-70.05894, 41.99493],
                                        [-70.05889, 41.99489],
                                        [-70.05884, 41.99487],
                                        [-70.05878, 41.99485],

                                        [-70.05874, 41.99485],
                                        [-70.05868, 41.99484],
                                        [-70.05863, 41.99485],
                                        [-70.05858, 41.99486],
                                        [-70.05843, 41.99491],

                                        [-70.05821, 41.99501],
                                        [-70.05803, 41.99511],
                                        [-70.05795, 41.99512],  // top
                                        [-70.05781, 41.99510],
                                        [-70.05762, 41.99506],

                                        [-70.05760, 41.99505],  // int
                                        [-70.05746, 41.99499],
                                        [-70.05743, 41.99497],
                                        [-70.05728, 41.99488],
                                        [-70.05720, 41.99478],

                                        [-70.05714, 41.99463],
                                        [-70.05702, 41.99439],  // R
                                        [-70.05705, 41.99433],
                                        [-70.05715, 41.99425],
                                        [-70.05732, 41.99418],

                                        [-70.05758, 41.99403],
                                        [-70.05774, 41.99389],
                                        [-70.05775, 41.99385],
                                        [-70.05775, 41.99381],
                                        [-70.05774, 41.99377],

                                        [-70.05773, 41.99376],
                                        [-70.05770, 41.99372],
                                        [-70.05768, 41.99370],  // int
                                        [-70.05768, 41.99357],  // int
                                        [-70.05767, 41.99348],  // bottom R

                                        [-70.05774, 41.99348],
                                        [-70.05775, 41.99347],
                                        [-70.05779, 41.99349],
                                        [-70.05782, 41.99350],
                                        [-70.05784, 41.99351],

                                        [-70.05790, 41.99353],
                                        [-70.05793, 41.99354],
                                        [-70.05795, 41.99354],
                                        [-70.05796, 41.99356],
                                        [-70.05799, 41.99358],

                                        [-70.05800, 41.99359],
                                        [-70.05801, 41.99361],
                                        [-70.05802, 41.99363],
                                        [-70.05804, 41.99366],
                                        [-70.05806, 41.99367],

                                        [-70.05807, 41.99368],
                                        [-70.05807, 41.99370],
                                        [-70.05808, 41.99372],
                                        [-70.05809, 41.99375],
                                        [-70.05811, 41.99378],

                                        [-70.05812, 41.99378],
                                        [-70.05818, 41.99381],
                                        [-70.05818, 41.99383],
                                        [-70.05818, 41.99385],
                                        [-70.05818, 41.99387],

                                        [-70.05816, 41.99389],
                                        [-70.05813, 41.99391],
                                        [-70.05808, 41.99396],
                                        [-70.05807, 41.99400],
                                        [-70.05808, 41.99402],

                                        [-70.05810, 41.99405],
                                        [-70.05813, 41.99407],
                                        [-70.05815, 41.99408],
                                        [-70.05824, 41.99409],
                                        [-70.05825, 41.99410],

                                        [-70.05825, 41.99415],
                                        [-70.05828, 41.99423],
                                        [-70.05832, 41.99430],
                                        [-70.05834, 41.99433],
                                        [-70.05840, 41.99438],

                                        [-70.05848, 41.99446],
                                        [-70.05851, 41.99448],
                                        [-70.05855, 41.99449],
                                        [-70.05859, 41.99451],
                                        [-70.05864, 41.99455],

                                        [-70.05868, 41.99456],
                                        [-70.05873, 41.99456],
                                        [-70.05876, 41.99455],
                                        [-70.05881, 41.99454],
                                        [-70.05888, 41.99454],

                                        [-70.05891, 41.99454],
                                        [-70.05898, 41.99450],
                                        [-70.05900, 41.99448],
                                        [-70.05903, 41.99446],
                                        [-70.05905, 41.99446],

                                        [-70.05906, 41.99446],
                                        [-70.05905, 41.99495],

                                        [-70.05907, 41.99527]   // close polygon by repeating 1st point
                                    ]
                                ]  
                        }
                    };

tct.id_32 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 32",          // displays in center of parcel
                            //"label": "32 HARRIS",     // displays instead of title                            
                            "donor": "Harris",    // short name of donor
                            "grantor": "WENDAKA CORP (Harris) ",      // long name of donor
                            "acquired": "19940206",
                            "street":"13 Cormorant Rd",
                            "acres": 1.29,
                            "acresUpland":  1.29,    
                            "acresWetland": 0,
                            "map": 39,
                            "lot": 252,
                            "key": 1371,  // assessors card key
                            "habitat": "shrub thicket",
                            "status": "C",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            //"signs":[
                            //    [-70.04583, 41.98848]
                            //],
                            
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
                            "center": [-70.08452, 42.02265],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.08511, 42.02309],  // top L
                                        // curve
                                        [-70.08498, 42.02309],  // curve
                                        [-70.08481, 42.02311],  // curve
                                        [-70.08465, 42.02317],  // curve
                                        [-70.08455, 42.02322],  // angle shallow

                                        [-70.08455, 42.02323],  // top R
                                        [-70.08414, 42.02276],  // btm R
                                        // dip
                                        [-70.08418, 42.02274],  // dip
                                        [-70.08423, 42.02272],  // dip
                                        [-70.08425, 42.02269],  // dip
                                        [-70.08426, 42.02266],  // dip
                                        [-70.08426, 42.02262],  // dip
                                        [-70.08429, 42.02255],  // dip
                                        [-70.08430, 42.02252],  // dip
                                        [-70.08430, 42.02246],  // dip
                                        [-70.08431, 42.02240],  // dip
                                        [-70.08432, 42.02237],  // dip
                                        [-70.08434, 42.02234],  // dip
                                        [-70.08438, 42.02233],  // dip

                                        [-70.08446, 42.02232],  // btm
                                        // dip
                                        [-70.08450, 42.02233],  // dip
                                        [-70.08457, 42.02235],  // dip
                                        [-70.08468, 42.02252],  // dip
                                        [-70.08471, 42.02254],  // dip
                                        [-70.08475, 42.02256],  // dip
                                        [-70.08489, 42.02255],  // dip
                                        [-70.08506, 42.02252],  // dip

                                        [-70.08520, 42.02249],  // btm L
                                        [-70.08511, 42.02309]   // close polygon by repeating 1st point

                                    /*. MISTAKE these are coordinates of 036-018
                                        [-70.09246, 42.03864],  // btm L
                                        [-70.09235, 42.03895],  
                                        [-70.09229, 42.03899],

                                        [-70.09227, 42.03900],  // top curve
                                        [-70.09224, 42.03900],  // top curve
                                        [-70.09222, 42.03899],  // top curve

                                        [-70.09125, 42.03849],  // R
                                        [-70.09177, 42.03823],  // btm
                                        [-70.09178, 42.03841],  // inside knee
                                        [-70.09214, 42.03860],

                                        [-70.09246, 42.03864]   // close polygon by repeating 1st point
                                    */
                                    ]
                                ]
                        }
                    };

// TCT 33 August 11, 1994 Theresa FINKELSTEIN 4.34 1.66 6.00 heath;shrub swamp 22 Stephens Way Map 54, Lot 105
tct.id_33 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 33",          // displays in center of parcel
                            //"label": "33 FINKELSTEIN",     // displays instead of title                            
                            "donor": "Finkelstein",    // short name of donor
                            "grantor": "Theresa FINKELSTEIN",      // long name of donor
                            "acquired": "19940811",
                            "street":"22 Stephens Way",
                            "acres": 6.00,
                            "acresUpland":  4.34,    
                            "acresWetland": 1.66,
                            "map": 54,
                            "lot": 105,
                            "key": 3334,  // assessors card key
                            "habitat": "marsh",
                            "status": "C",

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel

                            //"signs":[
                            //    [-70.04596, 41.98888],
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "D",

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
                            "center": [-70.07275, 41.97678],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07344, 41.97775],  // top L
                                        [-70.07309, 41.97772],
                                        [-70.07282, 41.97768],
                                        [-70.07251, 41.97769],
                                        [-70.07221, 41.97776],  // top R

                                        [-70.07205, 41.97746],
                                        [-70.07192, 41.97600],  // bottom R
                                        [-70.07351, 41.97587],  // bottom L
                                        [-70.07350, 41.97622],  // intersect
                                        [-70.07347, 41.97711],  // intersect

                                        [-70.07344, 41.97775]   // close polygon by repeating 1st point
                                    ]
                                ]
                        }
                    };

// TCT 34A November 16, 1994 Edward H. & Berthe K. LADD 0.78 0.00 0.78 field;pine/oak wood 18A Hatch Road Map 51, Lot 81
tct.id_34a = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 34A",          // displays in center of parcel
                            //"label": "34A LADD",     // displays instead of title                            
                            "donor": "Ladd",    // short name of donor
                            "grantor": "Edward H. & Berthe K. LADD ",      // long name of donor
                            "acquired": "19941116",
                            "street":"18A Hatch Rd",
                            "acres": .78,
                            "acresUpland":  .78,    
                            "acresWetland": 0,
                            "map": 51,
                            "lot": 81,
                            "key": 3126,  // assessors card key
                            "habitat": "field; pine/oak wood",
                            "status": "C",

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts
                            
                            "team": "D",
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
                            "center": [-70.04885, 41.98742],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.04948, 41.98773],  // top L
                                        [-70.04794, 41.98747],  // R
                                        [-70.04900, 41.98720],  // bottom L

                                        [-70.04948, 41.98773]   // close polygon by repeating 1st point
                                    ]
                                ]
                        }
                    };

//TCT 34B November 16, 1994 Edward H. & Berthe K. LADD 1.47 0.00 1.47 pine/oak woods Keezer Court Map 51, Lot 76
tct.id_34b = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 34B",          // displays in center of parcel
                            //"label": "34B LADD",     // displays instead of title                            
                            "donor": "Ladd",    // short name of donor
                            "grantor": "Edward H. & Berthe K. LADD ",      // long name of donor
                            "acquired": "19941116",
                            "street":"Keezer Court",
                            "acres": 1.47,
                            "acresUpland":  1.47,    
                            "acresWetland": 0,
                            "map": 51,
                            "lot": 76,
                            "key": 3121,  // assessors card key
                            "habitat": "pine/oak woods",
                            "status": "C",

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts

                            "team": "D",
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
                            "center": [-70.0474, 41.9880],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.04846, 41.98849],
                                        [-70.04827, 41.98848],
                                        [-70.04813, 41.98846],
                                        [-70.04804, 41.98844],  // easement
                                        [-70.04797, 41.98844],

                                        [-70.04791, 41.98846],
                                        [-70.04729, 41.98826],  // bend
                                        [-70.04706, 41.98816],  // bend
                                        [-70.04657, 41.98781],  // R
                                        [-70.04727, 41.98763],  // bottom

                                        [-70.04812, 41.98824],  // easement

                                        [-70.04846, 41.98849]   // close polygon by repeating 1st point
                                    ]
                                ]
                        }
                    };

tct.id_35 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 35",
                            "donor": "Dikeman",
                            "grantor": "Peter & Marion DIKEMAN",
                            "acquired": "19941229",
                            "street": "9A Benson Rd",
                            "acres": 6.19,
                            "acresUpland": 6.19,    
                            "acresWetland": 0,
                            "map": 53,
                            "lot": 56,
                            "key": 3200,
                            "habitat": "grassy heath",

                            "abuts": [],

                            "team":"D",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "https://www.dropbox.com/sh/enlgh8uxkz08esl/AAAdnNmzw_KW7jdv9_oxIgYMa?dl=0",
                            "inspectYears": 3,
                            "status": "C",
                            //"drone": "jjVEZwqqgO"
                            "notes":"part of Hopper landscape",
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07599, 41.98019],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07734, 41.98065],
                                        [-70.07590, 41.98060],
                                        [-70.07545, 41.98168],
                                        [-70.07447, 41.98194],
                                        [-70.07516, 41.98036],  // meets TCT land in middle of east boundary

                                        [-70.07545, 41.97973],
                                        [-70.07728, 41.97977],

                                        [-70.07734, 41.98065]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tct.id_36 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 36",          // displays in center of parcel
                            //"label": "36 HARRIS",     // displays instead of title                            
                            "donor": "Harris",    // short name of donor
                            "grantor": "WENDAKA CORP. (Harris)",      // long name of donor
                            "acquired": "19950109",
                            "street":"11 Cormorant Road",
                            "acres": 1.04,
                            "acresUpland":  1.04,    
                            "acresWetland": 0,
                            "map": 39,
                            "lot": 253,
                            "key": 1372,  // assessors card key
                            "habitat": "shrub thicket",
                            "status": "C",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            //"signs":[
                            //    [-70.04583, 41.98848]
                            //],
                            
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
                            "center": [-70.0855, 42.02265],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.085725, 42.02345],  // top L
                                        [-70.085715, 42.02345],  // top L
                                        // road curve
                                        [-70.08569, 42.02340],  // curve
                                        [-70.08563, 42.02332],  // curve
                                        [-70.08553, 42.02324],  // curve
                                        [-70.08541, 42.02317],  // curve
                                        [-70.08524, 42.02311],  // curve

                                        [-70.08511, 42.02309],  // top R
                                        [-70.08520, 42.02249],  // btm R
                                        // btm curve
                                        [-70.08528, 42.02246],  // curve
                                        [-70.08536, 42.02244],  // curve
                                        [-70.08540, 42.02243],  // curve
                                        [-70.08544, 42.02243],  // curve
                                        [-70.08548, 42.02244],  // curve
                                        [-70.08552, 42.02244],  // curve
                                        [-70.08556, 42.02243],  // curve
                                        [-70.08564, 42.02242],  // curve
                                        [-70.08573, 42.02243],  // curve

                                        [-70.08577, 42.02243],  // btm L
                                        [-70.08580, 42.02246],// btm L
                                        [-70.08582, 42.02248],// btm L

                                        [-70.085725, 42.02345]   // close polygon by repeating 1st point
                                    ]
                                ]   
                        }
                    };


tct.id_37 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 37",          // displays in center of parcel
                            //"label": "",     // displays instead of title                            
                            "donor": "Dalsheimer",    // short name of donor
                            "grantor": " George H. DALSHEIMER",      // long name of donor
                            "acquired": "19950619",
                            "street":"16 Great Hills Rd",
                            "acres": 15.24,
                            "acresUpland": .88,    
                            "acresWetland": 14.36,
                            "map": 49,
                            "lot": 37,
                            "key": 2787,  // assessors card key
                            "habitat": "dune, tidal flat",

                            //"abuts":[],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "",   // landmarks on the parcel
                            
                            //"signs":[
                            //    [-70.04596, 41.98888],
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "C",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "photosURL": "",

                            "assessedFY": 2019,
                            "assessedTotal": 1789100,

                            "inspectYears": 3,

                            "status": "C",
                            "description": "",    // external viewing                        
                            "notes":"",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07641, 41.99099],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07789, 41.99210],
                                        [-70.07620, 41.99200],  // meets 38 at left
                                        [-70.07486, 41.99191],
                                        [-70.07441, 41.99179],
                                        [-70.07420, 41.99171],

                                        [-70.07405, 41.99168],
                                        [-70.07385, 41.99167],
                                        [-70.07373, 41.99168],
                                        [-70.07355, 41.99172],
                                        [-70.07335, 41.99178],   // meets 8 at right

                                        [-70.07336, 41.99169],
                                        [-70.07332, 41.99163],
                                        [-70.07327, 41.99159],
                                        [-70.07321, 41.99151],
                                        [-70.07313, 41.99138],

                                        [-70.07311, 41.99132],
                                        [-70.07308, 41.99127],
                                        [-70.07303, 41.99123],
                                        [-70.07299, 41.99120],
                                        [-70.07297, 41.99117],

                                        [-70.07295, 41.99113],
                                        [-70.07295, 41.99110],
                                        [-70.07295, 41.99108],
                                        [-70.07295, 41.99106],
                                        [-70.07282, 41.99076],

                                        [-70.07282, 41.99074],
                                        [-70.07396, 41.99041],
                                        [-70.07445, 41.99127],
                                        [-70.07601, 41.99023],
                                        [-70.07540, 41.98917],

                                        [-70.07553, 41.98884],
                                        [-70.07569, 41.98817],
                                        [-70.07569, 41.98801],
                                        [-70.07675, 41.98775],
                                        [-70.07727, 41.98791],

                                        [-70.07771, 41.99135],
                                        [-70.07785, 41.99192],

                                        [-70.07789, 41.99210]   // close polygon with repeating 1st point
                                    ]
                                ]
                        }
                    };

tct.id_38 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 38",          // displays in center of parcel
                            //"label": "",     // displays instead of title                            
                            "donor": "Parcell",    // short name of donor
                            "grantor": "Charles & Alice PARCELL",      // long name of donor
                            "acquired": "19950629",
                            "street":"48 Fisher Rd",
                            "acres": 0.91,
                            "acresUpland": 0.91,    
                            "acresWetland": 0,
                            "map": 53,
                            "lot": 81,
                            "key": 3222,  // assessors card key
                            "habitat": "dune; beach",

                            "comments":"Left of Parking lot",  // internal use

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel

                            "signs":[
                               [ -70.077345, 41.984181 ]
                            ],
                            
                            "team": "D",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 1494600,   // assessed TOTAL

                            "inspectYears": 3,

                            "status": "C",
                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"notes":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07693, 41.98412],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07759, 41.98419],
                                        [-70.07645, 41.98436],
                                        [-70.07631, 41.98401],
                                        [-70.07755, 41.98391],
                                        [-70.07756, 41.98392],

                                        [-70.07756, 41.98400],
                                        [-70.07757, 41.98403],
                                        [-70.07757, 41.98406],
                                        [-70.07758, 41.98409],
                                        [-70.07758, 41.98413],

                                        [-70.07758, 41.98417],

                                        [-70.07759, 41.98419]   // close polygon with repeating 1st point
                                    ]
                                ]
                        }
                    };

tct.id_39 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 39",          // displays in center of parcel
                            //"label": "39 LADD",     // displays instead of title                            
                            "donor": "Ladd",    // short name of donor
                            "grantor": "Berthe K. LADD",      // long name of donor
                            "acquired": "19970130",
                            "street": "11A Hatch Rd", // was "Two View Drive",
                            "acres": 5.95,
                            "acresUpland":  5.95,    
                            "acresWetland": 0,
                            "map": 50,
                            "lot": 282,
                            "key": 3046,  // assessors card key
                            "habitat": "pine woods, hill",
                            "status": "C",

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts

                            "access": {
                                "road": "Hatch Rd",
                                "via": "on foot, easement between #11 and #15",
                                "entry": [-70.05147, 41.98918],  // where to enter the parcel
                                "park":  [-70.05028, 41.98929],   // where to park to access the parcel
                                "waypoints": [  [-70.05090, 41.989245], 
                                                [-70.05110, 41.98924] ]
                                  // points along the access path from parking to entry
                            },

                            "team": "C",
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
                            "center": [-70.0515, 41.9887],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.05303, 41.98937],  // leftmost
                                        [-70.05155, 41.98938],  //top R
                                        [-70.05145, 41.98921],  // easement
                                        [-70.05142, 41.98916],  // easement
                                        [-70.05104, 41.98919],  // easement

                                        [-70.05035, 41.98827],
                                        [-70.05033, 41.98822],  // intersection
                                        [-70.05030, 41.98816],  // bottom R
                                        [-70.05036, 41.98814],
                                        [-70.05043, 41.98812],

                                        [-70.05068, 41.98803],
                                        [-70.05083, 41.98801],  // intersection
                                        [-70.05105, 41.98799],
                                        [-70.05130, 41.98804],
                                        [-70.05142, 41.98810],

                                        [-70.05157, 41.98822],
                                        [-70.05169, 41.98828],
                                        [-70.05190, 41.98830],
                                        [-70.05205, 41.98830],
                                        [-70.05221, 41.98825],

                                        [-70.05231, 41.98821],
                                        [-70.05239, 41.98816],
                                        [-70.05248, 41.98806],  // bottom L
                                        [-70.05234, 41.98865],  // intersection
                                        [-70.05229, 41.98886],

                                        [-70.05265, 41.98932],

                                        [-70.05303, 41.98937]   // close polygon by repeating 1st point
                                    ]
                                ]
                        }
                    };

tct.id_40 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 40",          // displays in center of parcel
                            //"label": "40 HARRIS",     // displays instead of title                            
                            "donor": "Harris",    // short name of donor
                            "grantor": "Harold HARRIS",      // long name of donor
                            "acquired": "19970220",
                            "street":"5 Falcon Ln, Shearwater",
                            "acres": 1.03,
                            "acresUpland":  .86,    
                            "acresWetland": .17,
                            "map": 39,
                            "lot": 306,
                            "key": 1425,  // assessors card key
                            "habitat": "dune; beach",
                            "status": "C",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            //"signs":[
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "A",
                            "lastInspected": "",
                            "issues": "",
                            "photosTaken": "",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal":  147100 ,   // assessed TOTAL
                            "assessedPrevious": 1592100,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0875, 42.02115],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.08802, 42.02127],  // top L
                                        [-70.08753, 42.02141],  // corner rt and down
                                        [-70.08748, 42.02132],  // corner down and rt
                                        [-70.08717, 42.02141],
                                        [-70.08704, 42.02154],  // intersect

                                        [-70.08700, 42.02254],
                                        // curve along road
                                        [-70.08695, 42.02241],
                                        [-70.08692, 42.02228],
                                        [-70.08690, 42.02214],
                                        [-70.08690, 42.02199],
                                        [-70.08690, 42.02192],
                                        [-70.08691, 42.02184],
                                        [-70.08692, 42.02173],
                                        [-70.08695, 42.02161],
                                        [-70.08698, 42.02153],
                                        [-70.08702, 42.02141],
                                        [-70.08705, 42.02131],
                                        [-70.08709, 42.02119],
                                        [-70.08713, 42.02109],

                                        [-70.08715, 42.02101],  // btm R
                                        [-70.08783, 42.02084],  // btm L
                                        // curve along bay
                                        [-70.08786, 42.02096],
                                        [-70.08792, 42.02104],
                                        [-70.08795, 42.02109],
                                        [-70.08799, 42.02118],
                                        [-70.08800, 42.02122],

                                        [-70.08802, 42.02127]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

tct.id_41 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 41",          // displays in center of parcel
                            "label": "41 WISE",     // displays instead of title                            
                            "donor": "Wise",    // short name of donor
                            "grantor": "Edward WISE",      // long name of donor
                            "acquired": "19971007",
                            "street":"18 Avery Way",
                            "acres": .78,
                            "acresUpland":  .78,    
                            "acresWetland": 0,
                            "map": 47,
                            "lot": 161,
                            "key": 2733,  // assessors card key
                            "habitat": "pine woods",

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel

                            //"signs":[
                            //    [-70.04596, 41.98888],
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "C",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal":  18300,   // assessed TOTAL
                            "assessedPrevious": 238300,   // assessed TOTAL previous

                            "inspectYears": 3,

                            "status": "C",
                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.04435, 41.99995],  // optional
                            "coordinates": 
                                [
                                    [

[-70.04470, 42.00013 ],
[-70.04436, 42.00033 ],
[-70.04391, 41.99996 ],
[-70.04428, 41.99965 ],
[-70.04420, 41.99973 ],
[-70.04428, 41.99978 ],
[-70.04454, 41.99953],
[-70.04470, 42.00013 ]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

/*
TCT 42 sign
TCT 42 GROSSBERG 2 Great Hills Ln 53/95 Corner of GH Ln 41.986715 -70.075707
*/

tct.id_42 = 
            {
                "type": "Feature",
                "properties": {
                    "title": "TCT 42",
                    "donor": "Grossberg",
                    "grantor": "Stephen GROSSBERG, Trustee ",
                    "acquired": "19971030",
                    "street": "2 Great Hill Ln",
                    "acres": 0.81,
                    "acresUpland": 0.81,    
                    "acresWetland": 0,
                    "map": 53,
                    "lot": 95,
                    "key": 3233,

                    "status": "C",
                    "habitat": "dune; barrier beach",

                    "comments":"",  // internal use

                    "team": "C",
                    "lastInspected": "",
                    "issues": "none",
                    "photosTaken": "none",
                    "inspectYears": 3,

                    "signs": [
                        [-70.075707, 41.986715]
                    ],
                    "signComments": "Corner of GH Ln",

                    "assessedFY": 2019,         // assessed fiscal year
                    "assessedTotal": 84100,   // previous was 975,700
                    "assessedPrevious": 975700,   // assessed TOTAL previous

                    "drone": "",
                },
                "geometry": {
                    "type": "Polygon",
                    "center": [-70.07625, 41.9866],
                    "coordinates": 
                        [[
                            [-70.07689, 41.98674], // NW
                            [-70.07638, 41.98674], // intersect

                            [-70.07557, 41.98672], // NE
                            [-70.07559, 41.98660], // intersect
                            [-70.07559, 41.98646], // SE
                            [-70.07601, 41.98647], // intersect

                            [-70.07690, 41.98648], // SW

                            [-70.07689, 41.98674]   
                            // close polygon with repeating 1st point
                        ]]
                }
            };


tct.id_43a = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 43a",          // displays in center of parcel
                            //"label": "43A HARRIS",     // displays instead of title                            
                            "donor": "Harris",    // short name of donor
                            "grantor": "WENDAKA CORP. (Harris)",      // long name of donor
                            "acquired": "19971204",
                            "street":"1 Cormorant Rd",
                            "acres": 1.51,
                            "acresUpland":  1.51,    
                            "acresWetland": 0,
                            "map": 39,
                            "lot": 237,
                            "key": 1356,  // assessors card key
                            "habitat": "coastal heath",

                            //"landmarks": "osprey pole",   // landmarks on the parcel

                            //"signs":[
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "A",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 70400,   // assessed TOTAL
                            "assessedPrevious": 443700,   // assessed TOTAL previous

                            "inspectYears": 3,

                            "status": "C",
                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0846, 42.0254],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.08510, 42.02520],  // L
                                        [-70.08429, 42.02618],  // top
                                        [-70.08425, 42.02616],  // curve
                                        [-70.08424, 42.02615],  // curve
                                        [-70.08423, 42.02613],

                                        [-70.08423, 42.02543],  // curve
                                        [-70.08424, 42.02536],  // curve
                                        [-70.08426, 42.02526],  // curve
                                        [-70.08429, 42.02517],  // curve
                                        [-70.08435, 42.02506],  // curve

                                        [-70.08452, 42.02488],
                                        [-70.08470, 42.02474],  // btm

                                        [-70.08510, 42.02520]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };



tct.id_43b = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 43b",          // displays in center of parcel
                            //"label": "43B HARRIS",     // displays instead of title                            
                            "donor": "Harris",    // short name of donor
                            "grantor": "WENDAKA CORP. (Harris)",      // long name of donor
                            "acquired": "19971204",
                            "street":"5 Cormorant Rd",
                            "acres": 1.26,
                            "acresUpland":  1.26,    
                            "acresWetland": 0,
                            "map": 39,
                            "lot": 238,
                            "key": 1357,  // assessors card key
                            "habitat": "coastal heath",

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "A",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 59600,   // assessed TOTAL
                            "assessedPrevious": 434400,   // assessed TOTAL previous

                            "inspectYears": 3,

                            "status": "C",
                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.08525, 42.0247],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.08510, 42.02520],  // top
                                        [-70.08470, 42.02474],  // R
                                        [-70.08541, 42.02416],  // btm
                                        [-70.08585, 42.02470],  // L
                                        [-70.08527, 42.02499],  // mid bend

                                        [-70.08510, 42.02520]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

tct.id_44 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 44",
                            "donor": "Callander",
                            "acquired": "19971229",
                            "acres": 3.94,
                            "acresUpland": 3.94,
                            "acresWetland": 0,
                            "map": 53,
                            "lot": 97,
                            "key": 3235,
                            "street":"23A Stephens Way",
                            "abuts":[],
                            "habitat": "heath, dune",

                            "team": "D",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",

                            "status": "c",  // CR

                            "inspectYears": 5

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0757, 41.9794],
                            "coordinates": 
                                [
                                    [
                                        [-70.07727, 41.97949],
                                        [-70.07728, 41.97977],
                                        [-70.07545, 41.97973],
                                        [-70.07478, 41.97972],
                                        [-70.07462, 41.97971],

                                        [-70.07471, 41.97931],
                                        [-70.07465, 41.97923],
                                        [-70.07488, 41.97869],

                                        [-70.07727, 41.97949]  // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tct.id_45 = 
            {
                "type": "Feature",
                "properties": {
                    "title": "TCT 45",
                    "donor": "Quinlan",
                    "grantor": "John V. Quinlan, Jr.",
                    "acquired": "19980429",
                    "street": "55 Corn Hill Rd",
                    "acres": 0.98,
                    "acresUpland": 0.98,    
                    "acresWetland": 0,
                    "map": 45,
                    "lot": 40,
                    "key": 2138,
                    "GISid": "045/040",
                    "status": "C",
                    "habitat": "coastal bank",

                    "comments":"Coastal Bank Lot ",  // internal use

                    "team": "B",
                    "lastInspected": "20131129",
                    "issues": "none",
                    "photosTaken": "none",
                    "inspectYears": 5,

                    "signs": [
                        [-70.07891, 42.00333]
                    ],
                    "signComments": "sign on Corn Hill Rd",

                    "drone": "vea4BnX9l8",
                },
                "geometry": {
                    "type": "Polygon",
                    "center": [-70.07837, 42.00342],
                    "coordinates": 
                        [[
                            [-70.07916, 42.00348],
                            [-70.07872, 42.00321],
                            [-70.07796, 42.00322],
                            [-70.07782, 42.00366],
                            [-70.07916, 42.00348]   
                            // close polygon with repeating 1st point
                        ]]
                }
            };

// TCT 46A October 23, 1998 Ansel B. CHAPLIN 1.65 0.00 1.65 pine/oak woods 26 North Pamet Road Map 47, Lot 163
tct.id_46a = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 46A",          // displays in center of parcel
                            "label": "46A CHAPLIN",     // displays instead of title                            
                            "donor": "Chaplin",    // short name of donor
                            "grantor": "Ansel B. CHAPLIN",      // long name of donor
                            "acquired": "19981023",
                            "street":"26 North Pamet Rd",
                            "acres": 1.65,
                            "acresUpland":  1.65,    
                            "acresWetland": 0,
                            "map": 47,
                            "lot": 163,
                            "key": 2735,  // assessors card key
                            "habitat": "pine/oak woods",

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel

                            //"signs":[
                            //    [-70.04596, 41.98888],
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "C",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 84200,   // assessed TOTAL
                            "assessedPrevious": 359900 ,   // assessed TOTAL previous

                            "inspectYears": 3,

                            "status": "C",
                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.04445, 41.9979],  // optional
                            "coordinates": 
                                [
                                    [
[-70.04487, 41.99825],
 [-70.04439, 41.99844 ],
[-70.04388, 41.99768 ],
[-70.04482, 41.99725],
[-70.04487, 41.99825]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };


// TCT 46B October 23, 1998 Ansel B. CHAPLIN 0.78 0.00 0.78 pine/oak woods 34 North Pamet Road Map 47, Lot 164
tct.id_46b = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 46B",          // displays in center of parcel
                            "label": "46B CHAPLIN",     // displays instead of title                            
                            "donor": "Chaplin",    // short name of donor
                            "grantor": "Ansel B. CHAPLIN",      // long name of donor
                            "acquired": "19981023",
                            "street":"34 North Pamet Rd",
                            "acres": .78,
                            "acresUpland":  .78,    
                            "acresWetland": 0,
                            "map": 47,
                            "lot": 164,
                            "key": 2736,  // assessors card key
                            "habitat": "pine/oak woods",

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
                            "assessedTotal":  39800 ,   // assessed TOTAL
                            "assessedPrevious": 331500,   // assessed TOTAL previous

                            "inspectYears": 3,

                            "status": "C",
                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0426, 41.9986],  // optional
                            "coordinates": 
                                [
                                    [
                                    [-70.04278, 41.99907],
                                    [-70.04264, 41.99919],
                                    [-70.04228, 41.99826 ],
                                    [-70.04277, 41.99810],

                                    [-70.04278, 41.99907]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

tct.id_47a = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 47a",          // displays in center of parcel
                            //"label": "47A LADD",     // displays instead of title                            
                            "donor": "Ladd",    // short name of donor
                            "grantor": "Berthe K. LADD",      // long name of donor
                            "acquired": "19981202",
                            "street":"20 Depot Rd",
                            "acres": 5.07,
                            "acresUpland":  5.07,    
                            "acresWetland": 0,
                            "map": 50,
                            "lot": 273,
                            "key": 3037,  // assessors card key
                            "habitat": "pine/oak woods",
                            "status": "C",

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
                            "assessedTotal": -1,   // assessed TOTAL
                            "assessedPrevious": -1,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0544, 41.9899],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.05501, 41.99148],  // top L
                                        [-70.05491, 41.99148],
                                        [-70.05463, 41.99147],
                                        [-70.05460, 41.99146],
                                        [-70.05458, 41.99145],

                                        [-70.05457, 41.99143],
                                        [-70.05456, 41.99141],
                                        [-70.05457, 41.99128],
                                        [-70.05457, 41.99120],
                                        [-70.05456, 41.99108],

                                        [-70.05454, 41.99100],
                                        [-70.05451, 41.99093],
                                        [-70.05448, 41.99085],
                                        [-70.05444, 41.99075],
                                        [-70.05440, 41.99066],

                                        [-70.05437, 41.99057],
                                        [-70.05433, 41.99046],
                                        [-70.05430, 41.99040],
                                        [-70.05424, 41.99030],
                                        [-70.05417, 41.99023],

                                        [-70.05407, 41.99017],  // 20
                                        [-70.05396, 41.99012],
                                        [-70.05390, 41.99010],
                                        [-70.05383, 41.99009],
                                        [-70.05372, 41.99008],

                                        [-70.05366, 41.99007],
                                        [-70.05357, 41.99006],
                                        [-70.05349, 41.99003],
                                        [-70.05341, 41.98999],
                                        [-70.05334, 41.98994],

                                        [-70.05330, 41.98989],  // 30
                                        [-70.05326, 41.98982],
                                        [-70.05324, 41.98973],
                                        [-70.05325, 41.98966],
                                        [-70.05329, 41.98956],

                                        [-70.05333, 41.98949],
                                        [-70.05335, 41.98942],  // btm R
                                        [-70.05496, 41.98936],  // intersect
                                        [-70.05546, 41.98937],  // btm L
                                        [-70.05551, 41.98972],  // corner

                                        [-70.05482, 41.98978],  // knee
                                        [-70.05523, 41.99080],

                                        [-70.05501, 41.99148]   // close polygon by repeating 1st point
                                    ]
                                ]
                        }
                    };

tct.id_47b = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 47b",          // displays in center of parcel
                            //"label": "47B LADD",     // displays instead of title                            
                            "donor": "Ladd",    // short name of donor
                            "grantor": "Berthe K. LADD",      // long name of donor
                            "acquired": "19981202",
                            "street":"18 Depot Rd",
                            "acres": 5.20,
                            "acresUpland":  5.20,    
                            "acresWetland": 0,
                            "map": 50,
                            "lot": 281,
                            "key": 3045,  // assessors card key
                            "habitat": "pine/oak woods",
                            "status": "C",

                            //"signs":[
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "C",
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
                            "center": [-70.0539, 41.9908],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.05433, 41.99145],  // top R (curve on left)
                                        [-70.05336, 41.99138],  // top R
                                        [-70.05345, 41.99088],
                                        [-70.05344, 41.99017],  // throat
                                        [-70.05340, 41.99016],

                                        [-70.05276, 41.99042],  // peak
                                        [-70.05190, 41.99001],
                                        [-70.05155, 41.98938],  // btm R
                                        [-70.05303, 41.98937],
                                        [-70.05321, 41.98940],  // btm L

                                        [-70.05319, 41.98946],
                                        [-70.05315, 41.98953],
                                        [-70.05313, 41.98957],
                                        [-70.05310, 41.98966],
                                        [-70.05310, 41.98972],

                                        [-70.05311, 41.98980],
                                        [-70.05313, 41.98987],
                                        [-70.05316, 41.98993],
                                        [-70.05322, 41.99000],
                                        [-70.05329, 41.99006],

                                        [-70.05338, 41.99011],
                                        [-70.05348, 41.99015],
                                        [-70.05351, 41.99016],
                                        [-70.05372, 41.99019],
                                        [-70.05380, 41.99020],

                                        [-70.05389, 41.99022],
                                        [-70.05399, 41.99026],
                                        [-70.05408, 41.99033],
                                        [-70.05415, 41.99041],
                                        [-70.05419, 41.99051],

                                        [-70.05423, 41.99062],
                                        [-70.05428, 41.99072],
                                        [-70.05432, 41.99083],
                                        [-70.05436, 41.99093],
                                        [-70.05440, 41.99105],

                                        [-70.05442, 41.99119],
                                        [-70.05442, 41.99128],
                                        [-70.05441, 41.99140],
                                        [-70.05440, 41.99142],
                                        [-70.05439, 41.99144],

                                        [-70.05433, 41.99145]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

tct.id_48 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 48",          // displays in center of parcel
                            "label": "48 LUPIEN",     // displays instead of title                            
                            "donor": "Lupien",    // short name of donor
                            "grantor": "Gordon F. LUPIEN",      // long name of donor
                            "acquired": "19981230",
                            "street":"187 Route 6",
                            "acres": 1.21,
                            "acresUpland":  1.21,    
                            "acresWetland": 0,
                            "map": 47,
                            "lot": 155,
                            "key": 2728,  // assessors card key
                            "habitat": "pine/oak woods",

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
                            "assessedTotal":  19800,   // assessed TOTAL
                            "assessedPrevious": 172800,   // assessed TOTAL previous

                            "inspectYears": 3,

                            "status": "C",
                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0483, 41.9984],  // optional
                            "coordinates": 
                                [
                                    [
                             [-70.04896, 41.99827 ],
                             [-70.04780, 41.99899 ],
                            [-70.04766, 41.99861 ],
                            [-70.04880, 41.99786],

                            [-70.04896, 41.99827 ]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

tct.id_49 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 49",
                            "donor": "Rule",
                            "acquired": "19990304",
                            "acres": 0.79,
                            "acresUpland": 0.79,    
                            "acresWetland": 0,
                            "map": 46,
                            "lot": 340,
                            "key": 2545,
                            "street":"18 Toms Hill Rd",
                            "habitat": "coastal heath",

                            "abuts":["12b"],

                            "team":"B",
                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",
                            "status": "C",
                            "inspectYears": 5

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07035, 41.99896],
                            "coordinates": 
                                [
                                    [
                                        [-70.07071, 41.99917],
                                        [-70.07015, 41.99933],
                                        [-70.07001, 41.99876],
                                        [-70.07048, 41.99858],
                                        [-70.07065, 41.99876],

                                        [-70.07071, 41.99917]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tct.id_50 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 50",
                            "donor": "Capelands",
                            "grantor": "Capelands, Inc.",                            "acquired": "19991227",
                            "acres": 39.56,
                            "acresUpland": 0,    
                            "acresWetland": 39.56,
                            "map": 50,
                            "lot": 207,
                            "key": 2976,
                            "street":"Pamet River",
                            "habitat": "salt marsh",

                            "abuts": ["12a","13","20"],

                            "team":"B",
                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",

                            "status": "C",

                            "inspectYears": 5

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07177, 41.99481],
                            "coordinates": 
                                [
                                    [
                                        [-70.07378, 41.99458],
                                        [-70.07439, 41.99633],
                                        [-70.07377, 41.99657],
                                        [-70.07366, 41.99592],
                                        [-70.07274, 41.99579],
                                        [-70.07197, 41.99649],

                                        // wrap around TCT 20
                                        [-70.07133, 41.99563],  // low left

                                        [-70.07090, 41.99584],  // low right
                                        [-70.07163, 41.99667],  // to island
                                        [-70.07142, 41.99681],  // island 4pm
                                        [-70.07136, 41.99695],  // 2:30 pm
                                        [-70.07146, 41.99709],  // 1pm
                                        [-70.07159, 41.99710],  // noon
                                        [-70.07171, 41.99700],  // 11:30

                                        [-70.07185, 41.99691],  // 9:30

                                        // end wrap around TCT 20

                                        [-70.07188, 41.99695],
                                        [-70.07183, 41.99702],
                                        [-70.07169, 41.99741],
                                        [-70.07151, 41.99754],

                                        [-70.07093, 41.99783],
                                        [-70.06744, 41.99388],

                                        [-70.06848, 41.99381],

                                        [-70.06995, 41.99356],
                                        [-70.07129, 41.99297],
                                        [-70.07167, 41.99252],

                                        [-70.07302, 41.99383],  // intersection

                                        [-70.07378, 41.99458]  // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

// TCT 51 (053-098) is below Dubinsky 953-086; Letebdre (previously Thornley) is 053-087
tct.id_51 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 51",          // displays in center of parcel
                            //"label": "51 THORNLEY",     // displays instead of title                            
                            "donor": "Thornley",    // short name of donor
                            "grantor": "John L. THORNLEY",      // long name of donor
                            "acquired": "19991229",
                            "street":"2 Button Hill Rd",
                            "acres": 1.12,
                            "acresUpland":  .87,    
                            "acresWetland": .25,
                            "map": 53,  // does not come up on search on assessor's database
                            "lot": 98,
                            "key": 0,  // assessors card key not on file 
                            "habitat": "coastal heath; beach",
                            "status": "c",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "D",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": -1,   // assessed TOTAL
                            "assessedPrevious": -1,   // assessed TOTAL previous

                            "inspectYears": 3,

                            "description": "TCT 51 (053-098) is below Dubinsky 953-086; Letebdre (previously Thornley) is 053-087",

                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0767, 41.9822],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07533,41.98257],  // top right hand corner
                                        [-70.07555,41.98236],  // middle right
                                        [-70.07577,41.98216],  // low right corner
                                        [-70.07740,41.98196],  // lower left
                                        [-70.07741,41.98225],  // upper left
                                        [-70.07731,41.98231],  // upper left bump
                                        [-70.07683,41.98236],  // next bump
                                        [-70.07653,41.98228],  // lower bump
                                        [-70.07563,41.98237],  // before curve
                                        [-70.07558,41.98239],  // curve
                                        [-70.07554,41.98243],  // curve
                                        [-70.07552,41.98247],  // middle curve
                                        [-70.07552,41.98250],  // curve
                                        [-70.07554,41.98253],  // curve
                                        [-70.07557,41.98257],  // top of curve
                                        [-70.07533, 41.98257]  // close polygon by repeating 1st point
                                    ]
                                ]
                        }
                    };

tct.id_52 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 52",          // displays in center of parcel
                            //"label": "52 MARSHALL",     // displays instead of title                            
                            "donor": "Marshall",    // short name of donor
                            "grantor": "John L. & Joananne MARSHALL",      // long name of donor
                            "acquired": "19991229",
                            "street":"17 Old Bridge Rd",
                            "acres": .35,
                            "acresUpland":  .35,    
                            "acresWetland": 0,
                            "map": 50,
                            "lot": 200,
                            "key": 2969,  // assessors card key
                            "habitat": "pine/oak woods",
                            "status": "C",

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
                            "assessedTotal": -1,   // assessed TOTAL
                            "assessedPrevious": -1,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.05422, 41.98752],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.05464, 41.98789],  // top L

                                        [-70.05414, 41.98783],  // top R
                                        [-70.05391, 41.98725],
                                        [-70.05374, 41.98725],  // bottom R
                                        [-70.05421, 41.98715],  // bottom L
                                        [-70.05462, 41.98787],  // intersect w/ top R or TCT 91

                                        [-70.05464, 41.98789]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };


tct.id_53 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 53",          // displays in center of parcel
                            //"label": "53 COYLE",     // displays instead of title                            
                            "donor": "Coyle",    // short name of donor
                            "grantor": "Judith A. COYLE",      // long name of donor
                            "acquired": "19991230",
                            "street":"6A Fisher Hill Way",
                            "acres": .13,
                            "acresUpland":  .13,    
                            "acresWetland": 0,
                            "map": 54,
                            "lot": 18,
                            "key": 3254,  // assessors card key
                            "habitat": "embankment",

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel

                            //"signs":[
                            //    [-70.04596, 41.98888],
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "D",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": -1,   // assessed TOTAL
                            "assessedPrevious": -1,   // assessed TOTAL previous

                            "inspectYears": 3,

                            "status": "C",
                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0703, 41.9821],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07048, 41.98224],  // top L
                                        [-70.07045, 41.98223],  // ease
                                        [-70.07014, 41.98213],  // top R
                                        [-70.07015, 41.98197],  // btm R
                                        [-70.07032, 41.98202],  // intersection

                                        [-70.07045, 41.98206],  // ease
                                        [-70.07049, 41.98208],  // btm L

                                        [-70.07048, 41.98224]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };


tct.id_54 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 54",
                            "donor": "Davis/Hart",
                            "acquired": "20000523",
                            "acres": .92,
                            "acresUpland": 0.92,    
                            "acresWetland": 0,
                            "map": 49,
                            "lot": 39,
                            "key": 5565,
                            "street":"2 Indian Neck Way",
                            "habitat": "coastal heath",

                            "team":"B",
                            "lastInspected": "20131129",
                            "issues": "none",
                            "photosTaken": "none",

                            "status": "C",

                            "inspectYears": 5

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0745, 41.9969],
                            "coordinates": 
                                [
                                    [
                                        [-70.07485, 41.99727],
                                        [-70.07460, 41.99744],
                                        [-70.07460, 41.99767],
                                        [-70.07411, 41.99666],
                                        [-70.07452, 41.99641],

                                        [-70.07485, 41.99727]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tct.id_55 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 55",          // displays in center of parcel
                            //"label": "55 DONALDSON",     // displays instead of title                            
                            "donor": "Donaldson",    // short name of donor
                            "grantor": "Lynn B. DONALDSON ",      // long name of donor
                            "acquired": "20000621",
                            "street":"1 Stick Bridge Rd",
                            "acres": .90,
                            "acresUpland":  .80,    
                            "acresWetland": .10,
                            "map": 54,
                            "lot": 109,
                            "key": 5567,  // assessors card key
                            "habitat": "brackish marsh",
                            "status": "C",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            //"signs":[
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "D",
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
                            "center": [-70.0662, 41.9846],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.06668, 41.98451],  // btm L
                                        [-70.06649, 41.98491],  // ease
                                        [-70.06648, 41.98492],  // top L
                                        [-70.06621, 41.98485],
                                        [-70.06571, 41.98455],  // intersect

                                        [-70.06559, 41.98450],  // R
                                        [-70.06559, 41.98448],  // ease
                                        [-70.06564, 41.98424],  // btm R

                                        [-70.06668, 41.98451]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };


tct.id_56 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 56",
                            "donor": "Darling",
                            "grantor": "DARLING BYRON C",
                            "acquired": "20000828",
                            "street":"160 Rt 6",
                            "acres": 1.48,
                            "acresUpland": 1.48,    
                            "acresWetland": 0,
                            "map": 51,
                            "lot": 19,
                            "key": 3066,
                            "habitat": "field",

                            "comments":"Faces Depot Rd",  // internal use

                            "team": "C",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 3,
                            "signs": [
                                [-70.049402, 41.992817],
                                [-70.04908, 41.99299]
                            ],
                            "signComments":"2 lg rectangle signs",  // internal use

                            "status": "C",
                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.04894, 41.99256],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.04943, 41.99281],
                                        [-70.04942, 41.99293],
                                        [-70.04931, 41.99300],
                                        [-70.04874, 41.99305],
                                        [-70.04837, 41.99184],
                                        [-70.04888, 41.99213],
                                        [-70.04910, 41.99231],
                                        [-70.04920, 41.99245],
                                        [-70.04943, 41.99281]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


tct.id_57 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 57",
                            "donor": "Wolff",
                            "acquired": "20020628",
                            "acres": .93,
                            "acresUpland": .93,    
                            "acresWetland": 0,
                            "map": 46,
                            "lot": 59,
                            "key": 2287,
                            "street":"4 Society Ln",

                            "abuts": [],

                            "team":"B",
                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",

                            "status": "C",

                            "inspectYears": 3,
                            "habitat": "pine/oak woods",
                            "signs": [],
                            "description": "Easily accessible only from Society Ln."

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.06042, 42.00343],
                            "coordinates": 
                                [
                                    [
                                        [-70.06094, 42.00370],
                                        [-70.06026, 42.00356],
                                        [-70.06027, 42.00362],
                                        [-70.05922, 42.00348],
                                        [-70.06026, 42.00329],

                                        [-70.06090, 42.00329],

                                        [-70.06094, 42.00370]  // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tct.id_58 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 58",          // displays in center of parcel
                            //"label": "58 DAVIDSON",     // displays instead of title                            
                            "donor": "Davidson",    // short name of donor
                            "grantor": "Charles S. DAVIDSON ",      // long name of donor
                            "acquired": "20001226",
                            "street": "15 Unionfield Rd",
                            "acres": 7.5,
                            "acresUpland":  7.5,    
                            "acresWetland": 0,
                            "map": 47,
                            "lot": 167,
                            "key": 5564,  // assessors card key
                            "habitat": "pine/oak woods",
                            "status": "C",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            //"signs":[
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "A",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 143900,   // assessed TOTAL
                            "assessedPrevious": 374400 ,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0452, 42.0010],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.04688, 42.00187],  // top L

                                        [-70.04658, 42.00201],  // L of #59
                                        [-70.04592, 42.00121],  // btm of #59
                                        [-70.04491, 42.00167],  // R of #59
                                        [-70.04556, 42.00247],  // top of #59

                                        [-70.04500, 42.00273],  // top R
                                        [-70.04384, 42.00085],  // btm R
                                        [-70.04619, 42.00023],  // btm L

                                        [-70.04688, 42.00187]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

tct.id_59 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 59",          // displays in center of parcel
                            //"label": "59 DAVIDSON",     // displays instead of title                            
                            "donor": "Davidson",    // short name of donor
                            "grantor": "HARVARD COLLEGE (Davidson) ",      // long name of donor
                            "acquired": "20010627",
                            "street": "15 Unionfield Rd",
                            "acres": 2.50,
                            "acresUpland":  2.50,    
                            "acresWetland": 0,
                            "map": 47,
                            "lot": 76,
                            "key": 2651,  // assessors card key
                            "habitat": "pine/oak woods",
                            "status": "C",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            //"signs":[
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "A",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal":  413200 ,   // assessed TOTAL
                            "assessedPrevious": 400700,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0457, 42.0018],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.04658, 42.00201],  // L
                                        [-70.04556, 42.00247],  // top
                                        [-70.04491, 42.00167],  // R
                                        [-70.04592, 42.00121],  // btm

                                        [-70.04658, 42.00201]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

tct.id_60 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 60",          // displays in center of parcel
                            //"label": "60 VADEN",     // displays instead of title                            
                            "donor": "Vaden",    // short name of donor
                            "grantor": "Francis E. LOW & Bud VADEN",      // long name of donor
                            "acquired": "20011016",
                            "street":"18 Holsbery Rd",
                            "acres": 2.43,
                            "acresUpland":  2.43,    
                            "acresWetland": 0,
                            "map": 50,
                            "lot": 197,
                            "key": 2966,  // assessors card key
                            "habitat": "pine/oak woods",
                            "status": "C",

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
                            "assessedTotal": -1,   // assessed TOTAL
                            "assessedPrevious": -1,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0574, 41.9872],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.05886, 41.98716],  // top L
                                        [-70.05740, 41.98745],  // top
                                        [-70.05735, 41.98743],
                                        //[-70.05741, 41.98741],
                                        [-70.05730, 41.98741],

                                        [-70.05720, 41.98742],
                                        [-70.05715, 41.98744],
                                        [-70.05711, 41.98746],
                                        [-70.05700, 41.98753],
                                        [-70.05685, 41.98761],

                                        [-70.05675, 41.98767],
                                        [-70.05673, 41.98768],
                                        [-70.05660, 41.98776],
                                        [-70.05648, 41.98781],  // easement
                                        [-70.05638, 41.98783],  // top R

                                        [-70.05624, 41.98722],  // btm R
                                        [-70.05641, 41.98719],  // easement
                                        [-70.05863, 41.98679],  // btm L
                                        [-70.05880, 41.98709],

                                        [-70.05886, 41.98716]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

tct.id_61 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 61",          // displays in center of parcel
                            "label": "61 FINDER/SOUDA",     // displays instead of title                            
                            "donor": "Souda",    // short name of donor
                            "grantor": "Joseph FINDER & Michelle SOUDA",      // long name of donor
                            "acquired": "20011226",
                            "street":"146 Route 6",
                            "acres": 2.67,
                            "acresUpland":  2.67,    
                            "acresWetland": 0,
                            "map": 51,
                            "lot": 32,
                            "key": 3078,  // assessors card key
                            "habitat": "pine/oak woods",
                            "status": "c",

                            "accessRoad": "Route 6",
                            "accessVia": "#146 driveway",

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts
                            
                            "team": "D",
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
                            "center": [-70.0486, 41.9897],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.04898, 41.98931],  // bottom L
                                        [-70.04893, 41.98980],  // top L
                                        [-70.04865, 41.98987],  // intersection
                                        [-70.04746, 41.99022],  // top Rt6
                                        [-70.04683, 41.98921],  // bottom Rt6

                                        [-70.04725, 41.98907],  // CR
                                        //[-70.04772, 41.98891],    // not CR
                                        [-70.04730, 41.98917],  // CR
                                        [-70.04744, 41.98926],  // CR
                                        [-70.04754, 41.98943],  // CR
                                        [-70.04766, 41.98946],  // CR

                                        [-70.04771, 41.98974],  // CR
                                        [-70.04778, 41.98989],  // CR top
                                        [-70.04801, 41.98982],  // CR
                                        [-70.04829, 41.98955],  // CR
                                        [-70.04838, 41.98912],  // CR

                                        [-70.04898, 41.98931]   // close polygon by repeating 1st point
                                    ]
                                ]
                        }
                    };

tct.id_62 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 62",
                            "donor": "Delbanco",
                            "grantor": "M M B Trust",
                            "acquired": "20011226",
                            "acres": .919,
                            "acresUpland": .919,    
                            "acresWetland": 0,
                            "map": 42,
                            "lot": 294,
                            "key": 1874,
                            "street":"Quail Way",
                            "habitat": "dune; RR bed",
                            "status": "C",

                            "team":"A",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",

                            "inspectYears": 3,
                            "signs": [],
                            "description": ""

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.08224, 42.01153],
                            "coordinates": 
                                [
                                    [
                                        [-70.08283, 42.01195],
                                        [-70.08214, 42.01180],
                                        [-70.08175, 42.01148],
                                        [-70.08239, 42.01110],
                                        [-70.08241, 42.01112],

                                        [-70.08265, 42.01168],

                                        [-70.08283, 42.01195]  // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tct.id_63 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 63",          // displays in center of parcel
                            //"label": "63 CHAPLIN",     // displays instead of title                            
                            "donor": "Chaplin",    // short name of donor
                            "grantor": "Ansel B. CHAPLIN",      // long name of donor
                            "acquired": "20011231",
                            "street":"8C High Pamet Rd",
                            "acres": .55,
                            "acresUpland":  0,
                            "acresWetland": .55,
                            "map": 50,
                            "lot": 285,
                            "key": 3049,  // assessors card key
                            "habitat": "salt marsh",
                            "status": "C",

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel

                            //"signs":[
                            //    [-70.04596, 41.98888],
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "C",  // south bank of Pamet River
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 2800,   // assessed TOTAL
                            "assessedPrevious": 2800,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0668, 41.9939],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.06776, 41.99375],  // upper L
                                        [-70.06760, 41.99376],
                                        [-70.06725, 41.99383],
                                        [-70.06719, 41.99385],
                                        [-70.06711, 41.99388],

                                        [-70.06703, 41.99392],
                                        [-70.06700, 41.99393],
                                        [-70.06695, 41.99396],
                                        [-70.06690, 41.99400],
                                        [-70.06681, 41.99410],

                                        [-70.06677, 41.99414],
                                        [-70.06667, 41.99425],
                                        [-70.06663, 41.99432],
                                        [-70.06662, 41.99434],
                                        [-70.06655, 41.99444],  // top L

                                        [-70.06653, 41.99443],  // top R
                                        [-70.06661, 41.99393],
                                        [-70.06676, 41.99379],  // bottom R
                                        [-70.06700, 41.99377],
                                        [-70.06707, 41.99378],

                                        [-70.06713, 41.99378],
                                        [-70.06726, 41.99376],
                                        [-70.06738, 41.99374],
                                        [-70.06752, 41.99371],
                                        [-70.06760, 41.99368],

                                        [-70.06773, 41.99367],  // bottom L

                                        [-70.06776, 41.99375]   // close polygon by repeating 1st point
                                    ]
                                ]
                        }
                    };

tct.id_64 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 64",
                            "label": "64 MOBIL",     // displays instead of title                                                        
                            "donor": "Mobil",
                            "acquired": "20020215",
                            "acres": .56,
                            "acresUpland": .56,    
                            "acresWetland": 0,
                            "map": 46,
                            "lot": 210,
                            "key": 2431,
                            "street":"236 Rt 6",
                            "habitat": "cleared",

                            "abuts": ["65"],

                            "comments":"Former Gas Station",  // internal use

                            "signs": [
                                [-70.0581, 42.0047] 
                            ],

                            "team":"B",
                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",

                            "status": "C",

                            "inspectYears": 3,
                            "notes": "Smallest of several parcels acquired from Mobil of their Rt 6 site.",

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0581, 42.0046],
                            "coordinates": 
                                [
                                    [
                                        [-70.05848, 42.00455],
                                        [-70.05855, 42.00488],
                                        [-70.05776, 42.00461],
                                        [-70.05755, 42.00424],
                                        [-70.05775, 42.00430],  

                                        [-70.05848, 42.00455]  // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };
tct.id_64.properties.log = [];
tct.id_64.properties.log.push( [{
                                    "date": "20151024",
                                        "who": "BillW/ AmandaR",
                                        "comments": "no problems",
                                        "photos": "none"
                                    }] );
tct.id_64.properties.log.push( [{
                                     "date":"20110220" ,
                                        "who": "BillW/ AmandaR",
                                        "comments": "Neighbor at E end dumping brush, apparently to obstruct access.",
                                        "photos": "Yes"
                                    }   ] );


tct.id_65 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 65",
                            "donor": "Morea",
                            "acquired": "20020628",
                            "acres": 2.25,
                            "acresUpland": 2.25,    
                            "acresWetland": 0,
                            "map": 46,
                            "lot": 374,
                            "key": 5645,
                            "street":"238 Rt 6",

                            "abuts": ["64","81"],

                            "team":"B",
                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",

                            "status": "C",

                            "inspectYears": 3,
                            "habitat": "pine/oak woods",
                            "signs": [],
                            "notes": "Slopes steeply above Mobil lot TCT 64.  Bounded on the east by a swale.  East side boarders Kenniston parcel."

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0577, 42.0035],
                            "coordinates": 
                                [
                                    [
                                        [-70.05835, 42.00335],
                                        [-70.05775, 42.00430],
                                        [-70.05755, 42.00424],
                                        [-70.05733, 42.00389],
                                        [-70.05721, 42.00334],

                                        [-70.05724, 42.00300],
                                        [-70.05756, 42.00281],
                                        [-70.05826, 42.00334],

                                        [-70.05835, 42.00335]  // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tct.id_66 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 66",          // displays in center of parcel
                            //"label": "Kava",     // displays instead of title                            
                            "donor": "Kava",    // short name of donor
                            "grantor": "Jonathan R. & Charles F. KAVA",      // long name of donor
                            "acquired": "20151202",
                            "street": "4 Great Hills Rd",
                            "acres": 2.750,
                            "acresUpland": 2.750,    
                            "acresWetland": 0,
                            "map": 53,
                            "lot": 19,
                            "key": 3166,  // assessors card key
                            "habitat": "dune; beach",

                            "comments": "beachfront",  // internal use

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel

                            "signs": [
                                [-70.077742, 41.9851] 
                            ],
                            "signComments": "On beach side",

                            "team": "C",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 463800 ,   // assessed TOTAL

                            "inspectYears": 3,

                            "status": "C",
                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"notes":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07664, 41.98517],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07784, 41.98539],
                                        [-70.07691, 41.98545],
                                        [-70.07648, 41.98547],
                                        [-70.07603, 41.98550],
                                        [-70.07553, 41.98553],

                                        [-70.07552, 41.98501],
                                        [-70.07609, 41.98496],
                                        [-70.07667, 41.98491],
                                        [-70.07772, 41.98483],

                                        [-70.07784, 41.98539]   // close polygon with repeating 1st point
                                    ]
                                ]
                        }
                    };


tct.id_67 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 67",          // displays in center of parcel
                            //"label": "67 HILL",     // displays instead of title                            
                            "donor": "Hill",    // short name of donor
                            "grantor": "Craig HILL",      // long name of donor
                            "acquired": "20021230",
                            "street": "2 Ryder Beach Way",
                            "acres": .73,
                            "acresUpland":  .73,    
                            "acresWetland": 0,
                            "map": 63,
                            "lot": 6,
                            "key": 3622,  // assessors card key
                            "habitat": "pine/oak woods",
                            "status": "C",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            //"signs":[
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "D",
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
                            "center": [-70.0740, 41.9651],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07340, 41.96530],  // upper right corner
                                        [-70.07363, 41.96511],  // middle right
                                        [-70.07389, 41.96491],  // lower right
                                        [-70.07392, 41.96489],  // lower right

                                        [-70.07408, 41.96488],  // middle bottom

                                        [-70.07416, 41.96487],  // lower left 
                                        [-70.07418, 41.96488],  // lower left 
                                        [-70.07423, 41.96491],  // lower left 
                                        [-70.07424, 41.96492],  // lower left 

                                        [-70.07429, 41.96508],  // middle left 

                                        [-70.07443, 41.96531],  // left upper 

                                        [-70.07445, 41.96534],  // 
                                        [-70.07449, 41.96539],  // 

                                        [-70.07447, 41.96542],  // upper left corner 

                                        [-70.07386, 41.96531],  // middle top

                                        [-70.07340, 41.96530]   // close polygon by repeating 1st point
                                    ]
                                ]
                        }
                    };

tct.id_68 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 68",
                            "donor": "Freidin",
                            "acquired": "20031222",
                            "acres": 1.15,
                            "acresUpland": 1.15,    
                            "acresWetland": 0,
                            "map": 46,
                            "lot": 378,
                            "key": 5748,
                            "street":"45 or 47 Castle Rd",
                            "habitat": "pine/oak woods",

                            "abuts":["77"],

                            "team":"B",
                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",

                            "status": "C",

                            "inspectYears": 5

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.06432, 41.99864],
                            "coordinates": 
                                [
                                    [
                                        [-70.06472, 41.99828],
                                        [-70.06456, 41.99887],
                                        [-70.06399, 41.99903],
                                        [-70.06380, 41.99846],
                                        [-70.06384, 41.99840],

                                        [-70.06434, 41.99840],
                                        [-70.06425, 41.99806],
                                        [-70.06433, 41.99808],
                                        [-70.06461, 41.99819],

                                        [-70.06472, 41.99828]  // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tct.id_69 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 69",          // displays in center of parcel
                            //"label": "69 SNOW",     // displays instead of title                            
                            "donor": "Snow",    // short name of donor
                            "grantor": "Isaiah J. SNOW, Jr",      // long name of donor
                            "acquired": "20050126",
                            "street":"7 Corn Hill Rd",
                            "acres": 1.00,
                            "acresUpland":  0,    
                            "acresWetland": 1.00,
                            "map": 45,
                            "lot": 91,
                            "key": 2198,  // assessors card key
                            "habitat": "fresh marsh",
                            "status": "C",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            //"signs":[
                            //    [-70.04583, 41.98848]
                            //],


                            "signs":[
                                [-70.07207, 42.00285 ] // added 20190607
                            ],

                            
                            "team": "B",
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
                            "center": [-70.0720, 42.0031],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07197, 42.00375],  // upper right, meets TCT 4
                                        [-70.07194, 42.00372],

                                        [-70.07157, 42.00300],
                                        [-70.07266, 42.00278],
                                        [-70.07270, 42.00293],
                                        //[-70.07269, 42.00293],
                                        [-70.07264, 42.00295],

                                        [-70.07257, 42.00298],
                                        [-70.07257, 42.00302],
                                        [-70.07250, 42.00300],
                                        [-70.07242, 42.00300],
                                        [-70.07234, 42.00302],

                                        [-70.07229, 42.00307],
                                        [-70.07227, 42.00318],
                                        [-70.07221, 42.00321],
                                        [-70.07212, 42.00328],
                                        [-70.07209, 42.00338],

                                        [-70.07209, 42.00344],
                                        [-70.07216, 42.00362],
                                        [-70.07213, 42.00368],
                                        [-70.07202, 42.00373],

                                        [-70.07197, 42.00375]   // close polygon with repeating 1st point
                                    ]
                                ]
                        }
                    };

tct.id_70a = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 70a",          // displays in center of parcel
                            //"label": "",     // displays instead of title                            
                            "donor": "Goldstein",    // short name of donor
                            "grantor": "Leonard & Diana GOLDSTEIN",      // long name of donor
                            "acquired": "20061020",
                            "street":"12A Ryder Beach Rd ",
                            "acres": 2.610,
                            "acresUpland":  1.42,    
                            "acresWetland": 1.19,
                            "map": 59,
                            "lot": 60,
                            "key": 3512,  // assessors card key
                            "habitat": "coastal heath; shrub swamp",

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel

                            //"signs":[
                            //    [-70.04596, 41.98888],
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "D",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": -1,   // assessed TOTAL

                            "inspectYears": 3,

                            "status": "C",
                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.06942, 41.96646],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07007, 41.96758],  // N point intersection
                                        [-70.06857, 41.96614],  // E point
                                        [-70.06876, 41.96606],  // bend
                                        [-70.06884, 41.96603],  // bend
                                        [-70.06910, 41.96590],  // bend

                                        [-70.06915, 41.96588],  // bend
                                        [-70.06919, 41.96584],  // bend
                                        [-70.06922, 41.96582],  // bend
                                        [-70.06928, 41.96580],  // bend
                                        [-70.06932, 41.96576],  // bend

                                        [-70.06942, 41.96572],  // bend
                                        [-70.06946, 41.96570],  // bend
                                        [-70.06951, 41.96569],  // bend
                                        [-70.06963, 41.96565],  // SW
                                        [-70.06986, 41.96661],  // intersection

                                        [-70.06998, 41.96717],  // intersection

                                        [-70.07007, 41.96758]   // close polygon with repeating 1st point
                                    ]
                                ]
                        }
                    };

tct.id_70b = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 70b",          // displays in center of parcel
                            //"label": "",     // displays instead of title                            
                            "donor": "Goldstein",    // short name of donor
                            "grantor": "Leonard & Diana GOLDSTEIN",      // long name of donor
                            "acquired": "20061020",
                            "street": "12 Ryder Beach Road ",
                            "acres": 2.510,
                            "acresUpland": 2.29,    
                            "acresWetland": .22,
                            "map": 59,
                            "lot": 72,
                            "key": 3524,  // assessors card key
                            "habitat": "coastal heath; RR bed",

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel

                            //"signs":[
                            //    [-70.04596, 41.98888],
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "D",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": -1,   // assessed TOTAL

                            "inspectYears": 3,

                            "status": "C",
                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.06880, 41.96655],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07066, 41.96769],  // W point
                                        [-70.07017, 41.96798],  // N point
                                        [-70.07007, 41.96785],  // bend

                                        [-70.06992, 41.96768],  
                                        [-70.06984, 41.96772],

                                        [-70.06812, 41.96607], // intersectio town land
                                        [-70.06710, 41.96512],  // E point

                                        [-70.06735, 41.96500],  // S point

                                        [-70.06857, 41.96614],  // intersection


                                        [-70.07007, 41.96758],  // intersection
                                        [-70.07020, 41.96773],

                                        [-70.07066, 41.96769]   // close polygon with repeating 1st point
                                    ]
                                ]
                        }
                    };

tct.id_71a = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 71A",          // displays in center of parcel
                            "label": "71A POOR HILL",     // displays instead of title                            
                            "donor": "Poor Hill",    // short name of donor
                            "grantor": "Town of TRURO (Poor Hill) ",      // long name of donor
                            "acquired": "20070118",
                            "street": "8 Salt Marsh Lane ",
                            "acres": 1.79,
                            "acresUpland":  1.79,    
                            "acresWetland": 0,
                            "map": 53,
                            "lot": 101,
                            "key": 5939,  // assessors card key
                            "habitat": "coastal heath",
                            "status": "c",

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel

                            //"signs":[
                            //    [-70.04596, 41.98888],
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "D",
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
                            "center": [-70.0729, 41.98525],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07345, 41.98488],
                                        [-70.07342, 41.98506],
                                        [-70.07329, 41.98533],
                                        [-70.07321, 41.98538],
                                        [-70.07317, 41.98542],

                                        [-70.07309, 41.98547],
                                        [-70.07305, 41.98552],
                                        [-70.07298, 41.98560],
                                        [-70.07283, 41.98571],
                                        [-70.07273, 41.98576],

                                        [-70.07252, 41.98581],
                                        [-70.07243, 41.98582],  // top R common
                                        [-70.07244, 41.98529],  // common
                                        [-70.07266, 41.98485],  // common
                                        [-70.07274, 41.98485],

                                        [-70.07278, 41.98484],
                                        [-70.07281, 41.98483],
                                        [-70.07285, 41.98480],
                                        [-70.07289, 41.98476],
                                        [-70.07291, 41.98472],

                                        [-70.07292, 41.98469],
                                        [-70.07292, 41.98435],  // bottom
                                        [-70.07296, 41.98439],
                                        [-70.07295, 41.98449],
                                        [-70.07296, 41.98452],

                                        [-70.07299, 41.98455],
                                        [-70.07304, 41.98459],
                                        [-70.07314, 41.98461],
                                        [-70.07328, 41.98466],
                                        [-70.07334, 41.98469],

                                        [-70.07339, 41.98475],
                                        [-70.07343, 41.98481],
                                        [-70.07344, 41.98485],

                                        [-70.07345, 41.98488]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

tct.id_71b = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 71B",          // displays in center of parcel
                            "label": "71B POOR HILL",     // displays instead of title                            
                            "donor": "Poor Hill",    // short name of donor
                            "grantor": "Town of TRURO (Poor Hill) ",      // long name of donor
                            "acquired": "20070118",
                            "street": "10 Salt Marsh Lane ",
                            "acres": 1.76,
                            "acresUpland":  1.76,    
                            "acresWetland": 0,
                            "map": 54,
                            "lot": 116,
                            "key": 5941,  // assessors card key
                            "habitat": "coastal heath",
                            "status": "c",

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel

                            //"signs":[
                            //    [-70.04596, 41.98888],
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "D",
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
                            "center": [-70.0721, 41.98525],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07243, 41.98582],  // top L common

                                        [-70.07233, 41.98582],
                                        [-70.07218, 41.98578],
                                        [-70.07202, 41.98572],
                                        [-70.07192, 41.98566],
                                        [-70.07180, 41.98550],

                                        [-70.07176, 41.98533],  // R
                                        [-70.07180, 41.98509],
                                        [-70.07175, 41.98496],
                                        [-70.07172, 41.98482],  // bottom R
                                        [-70.07237, 41.98450],  // bottom L

                                        [-70.07237, 41.98460],
                                        [-70.07240, 41.98468],
                                        [-70.07244, 41.98474],
                                        [-70.07250, 41.98479],
                                        [-70.07258, 41.98483],

                                        [-70.07262, 41.98485],

                                        [-70.07266, 41.98485],  // common
                                        [-70.07244, 41.98529],  // common
                                        [-70.07243, 41.98582]  // top L common
                                    ]
                                ]     
                        }
                    };

tct.id_72 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 72",          // displays in center of parcel
                            //"label": "72 DELBANCO",     // displays instead of title                            
                            "donor": "Delbanco",
                            "grantor": "Thomas L. & Jill B. DELBANCO",      // long name of donor
                            "acquired": "20070222",
                            "street": "10 Quail Way",
                            "acres": .92,
                            "acresUpland":  .92,    
                            "acresWetland": 0,
                            "map": 42,
                            "lot": 172,
                            "key": 1756,  // assessors card key
                            "habitat": "coastal heath; RR bed",
                            "status": "C",

                            //"landmarks": "osprey pole",   // landmarks on the parcel

                            //"signs":[
                            //    [-70.04583, 41.98848]
                            //],
                            
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
                            "center": [-70.0827, 42.0121],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.08326, 42.01267],  // top L
                                        [-70.08300, 42.01275],  // top R
                                        [-70.08246, 42.01215],
                                        [-70.08233, 42.01220],
                                        [-70.08215, 42.01193],

                                        [-70.08223, 42.01190],
                                        [-70.08220, 42.01186],
                                        [-70.08214, 42.01180],  // btm R
                                        [-70.08283, 42.01195],  // btm L

                                        [-70.08326, 42.01267]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

// TCT 73 September 26, 2007 Irma M. RUCKSTUHL 1.03 0.00 1.03 coastal heath  Road Map 39, Lot 52
tct.id_73 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 73",          // displays in center of parcel
                            //"label": "73 RUCKSTUHL",     // displays instead of title                            
                            "donor": "Ruckstuhl",    // short name of donor
                            "grantor": "Irma M. RUCKSTUHL",      // long name of donor
                            "acquired": "20070926",
                            "street":"28 Bay View Rd",
                            "acres": 1.05,      // acres per assessor
                            "acresUpland":  1.05,    
                            "acresWetland": 0,
                            "map": 39,
                            "lot": 52,
                            "key": 1184,  // assessors card key
                            "habitat": "coastal heath",
                            "status": "C",

                            //"landmarks": "osprey pole",   // landmarks on the parcel

                            //"signs":[
                            //    [-70.04583, 41.98848]
                            //],
                            
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
                            "center": [-70.0892, 42.0268],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.08969, 42.02692],  // L
                                        [-70.08891, 42.02715],  // top R
                                        [-70.08867, 42.02664],  // btm R
                                        [-70.08945, 42.02643],  // btm L

                                        [-70.08969, 42.02692]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

// TCT 74 October 19, 2007 Susan LONDON PAYNE 3.00 0.00 3.00 pine/oak woods 56 Old County Rd. Map 54, Lot 118
tct.id_74 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 74",          // displays in center of parcel
                            //"label": "74 PAYNE",     // displays instead of title                            
                            "donor": "Payne",    // short name of donor
                            "grantor": "Susan LONDON PAYNE",      // long name of donor
                            "acquired": "20071019",
                            "street": "28 Bay View Rd",
                            "acres": 3.00,
                            "acresUpland":  3.00,    
                            "acresWetland": 0,
                            "map": 54,
                            "lot": 118,
                            "key": 6297,  // assessors card key
                            "habitat": "pine/oak woods",
                            "status": "C",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            //"signs":[
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "D",
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
                            "center": [-70.0676, 41.9805],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.06827, 41.98080],  //top L
                                        [-70.06775, 41.98077],
                                        [-70.06727, 41.98082],
                                        [-70.06598, 41.98186],  // top
                                        [-70.06600, 41.98171],

                                        [-70.06703, 41.98020],  // btm R
                                        [-70.06831, 41.98008],  // btm L

                                        [-70.06827, 41.98080]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

// TCT 75 December 12, 2007 Anne Lieb IRWIN 1.70 1.30 3.00 stream; shrub swamp; woods 97 North Pamet Road Map 47, Lot 137
tct.id_75 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 75",          // displays in center of parcel
                            "label": "75 IRWIN",     // displays instead of title                            
                            "donor": "Irwin",    // short name of donor
                            "grantor": "Anne Lieb IRWIN",      // long name of donor
                            "acquired": "20071212",
                            "street": "97 North Pamet Rd",
                            "acres": 3.00,
                            "acresUpland":  1.70,    
                            "acresWetland": 1.30,
                            "map": 47,
                            "lot": 137,
                            "key": 2711,  // assessors card key
                            "habitat": "stream; shrub swamp; woods",

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel

                            //"signs":[
                            //    [-70.04596, 41.98888],
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "C",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": -1,   // assessed TOTAL
                            "assessedPrevious": -1,   // assessed TOTAL previous

                            "inspectYears": 3,

                            "status": "c",
                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0292, 42.0002],  // optional
                            "coordinates": 
                                [
                                    [
                                        //[-70.08842, 42.03307],

                                        //[-70.08842, 41.93307],

                                        //[-70.08842, 42.03307]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

tct.id_75XXX_DELETE = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 75",          // displays in center of parcel
                            //"label": "",     // displays instead of title                            
                            "donor": "Irwin",    // short name of donor
                            "grantor": "Anne Lieb IRWIN",      // long name of donor
                            "acquired": "20071212",
                            "street":"97 North Pamet Rd",

                            "acres": 3.00,
                            "acresUpland":  1.70,    
                            "acresWetland": 1.30,

                            "map": 47,
                            "lot": 137,
                            "key": 2711,  // assessors card key

                            "habitat": "stream; shrub swamp; woods",

                            //"abuts":["10b","12b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel

                            //"signs":[
                            //    [-70.04596, 41.98888],
                            //    [-70.04583, 41.98848]
                            //],
                            
                            "team": "?",

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": -1,   // assessed TOTAL
                            "assessedPrevious": -1,   // assessed TOTAL previous

                            "inspectYears": 3,

                            "status": "c",
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

                                        //[-70.08842, 41.93307],

                                        //[-70.08842, 42.03307]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

// 76A and 76B CR SANDERS; now 108, 109, 110

tct.id_77 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 77",
                            "donor": "Freidin",
                            "acquired": "20071217",
                            "acres": .88,
                            "acresUpland": .88,    
                            "acresWetland": 0,
                            "map": 46,
                            "lot": 382,
                            "key": 5748,
                            "street": "49 Castle Rd",

                            "abuts":["68"],

                            "team":"B",
                            "lastInspected": "20151024",
                            "issues": "none",
                            "photosTaken": "none",

                            "status": "c",  // CR

                            "inspectYears": 5

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.06456, 41.99901],
                            "coordinates": 
                                [
                                    [
                                        [-70.06472, 41.99828],
                                        [-70.06456, 41.99887],
                                        [-70.06358, 41.99914],
                                        [-70.06381, 41.99925],
                                        [-70.06430, 41.99926],

                                        [-70.06467, 41.99908],
                                        [-70.06495, 41.99865],

                                        [-70.06472, 41.99828]  // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

// TCT 78 September 8, 2008 Susan, Gillien & Megan TODD 0.00 1.68 1.68 salt marsh off 3 Carr's Lane Map 50, Lot 291
tct.id_78 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 78",          // displays in center of parcel
                            //"label": "78 TODD",     // displays instead of title                            
                            "donor": "Todd",    // short name of donor
                            "grantor": "Susan, Gillien & Megan TODD",      // long name of donor
                            "acquired": "20080908",
                            "street": "off 3 Carr's Ln",
                            "acres": 1.68,
                            "acresUpland":  0,    
                            "acresWetland": 1.68,
                            "map": 50,
                            "lot": 291,
                            "key": 6428,  // assessors card key
                            "habitat": "salt marsh",

                            "abuts":["24a","24b"],        // array of TCT parcels (or town or other maplot) this abuts
                            
                            "team": "B",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": -1,   // assessed TOTAL
                            "assessedPrevious": -1,   // assessed TOTAL previous

                            "inspectYears": 3,

                            "status": "C",
                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0569, 41.9947],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.05743, 41.99497],  // L
                                        [-70.05729, 41.99523],  // top
                                        [-70.05708, 41.99514],
                                        [-70.05703, 41.99512],
                                        [-70.05700, 41.99511],

                                        [-70.05695, 41.99506],
                                        [-70.05691, 41.99501],
                                        [-70.05689, 41.99499],
                                        [-70.05684, 41.99496],
                                        [-70.05640, 41.99488],  // right

                                        [-70.05642, 41.99484],  // intersection

                                        [-70.05658, 41.99456],  // intersection

                                        [-70.05709, 41.99364],  // bottom
                                        [-70.05741, 41.99363],  // R
                                        [-70.05758, 41.99365],
                                        [-70.05763, 41.99367],
                                        [-70.05768, 41.99370],  // intersection

                                       // [-70.05772, 41.99374],
                                        [-70.05770, 41.99372],

                                        [-70.05773, 41.99376],

                                        [-70.05774, 41.99377],
                                        [-70.05775, 41.99381],
                                        [-70.05775, 41.99385],
                                        [-70.05774, 41.99389],

                                        [-70.05758, 41.99403],
                                        [-70.05732, 41.99418],
                                        [-70.05715, 41.99425],
                                        [-70.05705, 41.99433],
                                        [-70.05702, 41.99439],

                                        [-70.05714, 41.99463],
                                        [-70.05720, 41.99478],
                                        [-70.05728, 41.99488],

                                        [-70.05743, 41.99497]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };


tct.id_79a = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 79a",
                            "donor": "Schiffenhaus",
                            "acquired": "20091231",
                            "acres": 2.64,
                            "acresUpland": .62,    
                            "acresWetland": 2.02,
                            "map": 53,
                            "lot": 78,
                            "key": 3219,
                            "street": "30 Stephens Way",
                            "habitat": "shrub swamp; coastal heath",
                            "status": "c",  // CR

                            "team":"D",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",

                            "inspectYears": 5

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07422, 41.97682],
                            "coordinates": 
                                [
                                    [
                                        [-70.07508, 41.97664],
                                        [-70.07494, 41.97689],
                                        [-70.07472, 41.97714],
                                        [-70.07433, 41.97739],
                                        [-70.07347, 41.97711],

                                        [-70.07350, 41.97622],  // intersect

                                        [-70.07508, 41.97664]  // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tct.id_79b = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 79b",
                            "donor": "Schiffenhaus",
                            "acquired": "20091231",
                            "acres": 4.93,
                            "acresUpland": .33,    
                            "acresWetland": 4.60,
                            "map": 53,
                            "lot": 104,
                            "key": 3217,
                            "street": "31 Stephens Way",
                            "habitat": "coastal heath; beach",

                            "abuts":[],

                            "team":"D",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",

                            "status": "c",  // CR

                            "inspectYears": 5

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07611, 41.97757],
                            "coordinates": 
                                [
                                    [
                                        [-70.07714, 41.97719],
                                        [-70.07714, 41.97766],
                                        [-70.07706, 41.97827],
                                        [-70.07489, 41.97757],
                                        [-70.07499, 41.97739],

                                        [-70.07491, 41.97723],
                                        [-70.07483, 41.97722],
                                        [-70.07506, 41.97696],
                                        [-70.07521, 41.97668],

                                        [-70.07714, 41.97719]  // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tct.id_79bx1 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 79b_x1",
                            "donor": "Schiffenhaus",
                            "acquired": "20091231",
                            "acres": .216,
                            "acresUpland": .216,    
                            "acresWetland": 0,
                            // island building envelope
                            "map": 53,
                            "lot": 76,
                            "key": 3217,
                            "street":"31 Stephens Way",
                            "abuts":[],
                            "habitat": "coastal heath; beach",
                            "team":"D",


                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",

                            "status": "x",  // not cons

                            "inspectYears": 5

                        },
                        "geometry": {
                            "type": "Polygon",
                            //"center": [-70.07611, 41.97762],
                            "coordinates": 
                                [
                                    [
                                        [-70.07610, 41.97721],
                                        [-70.07604, 41.97738],
                                        [-70.07561, 41.97731],
                                        [-70.07547, 41.97727],
                                        [-70.07551, 41.97719],

                                        [-70.07589, 41.97716],

                                        [-70.07610, 41.97721]  // close polygon with repeating 1st point
                                    ]

                                ]
                            }
                    };

tct.id_79bx2 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 79b_x2",
                            "donor": "Schiffenhaus",
                            "acquired": "20091231",
                            "acres": .228,
                            "acresUpland": .228,    
                            "acresWetland": 0,
                            // island building envelope
                            "map": 53,
                            "lot": 76,
                            "key": 3217,
                            "street": "31 Stephens Way",
                            "habitat": "coastal heath; beach",

                            "abuts":[],

                            "team":"D",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",

                            "status": "x",  // not cons

                            "inspectYears": 5

                        },
                        "geometry": {
                            "type": "Polygon",
                            //"center": [-70.07611, 41.97762],
                            "coordinates": 
                                [
                                    [
                                        [-70.07447, 41.97744],
                                        [-70.07489, 41.97757],
                                        [-70.07499, 41.97739],
                                        [-70.07491, 41.97723],
                                        [-70.07483, 41.97722],

                                        [-70.07447, 41.97744]  // close polygon with repeating 1st point
                                    ]

                                ]
                            }
                    };

tct.id_80a = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 80a",          // displays in center of parcel
                            //"label": "80a ROTHCHILD",     // displays instead of title                            
                            "donor": "Rothschild",    // short name of donor
                            "grantor": "Sylvia ROTHCHILD 2005 Rev. Trust ",      // long name of donor
                            "acquired": "20100428",
                            "street":"49 Fisherman's Rd",
                            "acres": .41,
                            "acresUpland":  .41,    
                            "acresWetland": 0,
                            "map": 42,
                            "lot": 97,
                            "key": 1668,  // assessors card key
                            "habitat": "marine scarp",  // farther from water
                            //"habitat": "marine scarp; dune",    // closest to water
                            "status": "c",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "A",

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal":  360000,   // assessed TOTAL
                            "assessedPrevious": 385600,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            "comments":"closer to water",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0844, 42.0152],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.08477, 42.01545],  // top L (at dashed line)
                                        [-70.08436, 42.01556],  // top R
                                        [-70.08415, 42.01517],  // BTM R
                                        [-70.08456, 42.01506],  // btm L (at dashed line)

                                        [-70.08477, 42.01545]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };
                    /* 
                    per Fred Gaechter Nov 2018:
                    Part of the answer, if I recall properly, is that the entire lot is a single CR. 
                    The dotted line running north to south across the property, again if I remember properly, 
                    marks the portion of the land (bay side) that is specifically protected under the Wetlands Protection Act 
                    and/or the Association's Covenants. 
                    In this context, I also believe that the CR authorizes the owners to trim the trees and bushes on the property 
                    to protect their view from their house across the street, but if trimming is to occur on the bay side portion 
                    there are specific conditions from the Conservation Commission, e.g., nothing to be trimmed lower than 
                    feet from the ground and that we - the TCT - must supervise that trimming. Again, this all based on memory. 
                    Sources for confirmation would be the actual CR and/or the Conservation Agent. 
                    I am sure, however, that to address your needs, the entire property is under the CR and the CR would state 
                    why the 80A and 80B designations are necessary.
                    */


tct.id_80b = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 80b",          // displays in center of parcel
                            //"label": "80b ROTHCHILD",     // displays instead of title                            
                            "donor": "Rothschild",    // short name of donor
                            "grantor": "Sylvia ROTHCHILD 2005 Rev. Trust ",      // long name of donor
                            "acquired": "20100428",
                            "street": "49 Fisherman's Rd",
                            "acres": .34,
                            "acresUpland":  .34,    
                            "acresWetland": 0,
                            "map": 42,
                            "lot": 97,
                            "key": 1668,  // assessors card key
                            "habitat": "marine scarp; dune",    // closest to water
                            //"habitat": "marine scarp",  // farther from water
                            "status": "c",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
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
                            "comments":"away from water",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0848, 42.0151],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.08511, 42.01536],  // top L
                                        [-70.08477, 42.01545],  // top (at dashed line)
                                        [-70.08456, 42.01506],  // btm R (at dashed line)
                                        [-70.08493, 42.01496],  // btm L

                                        [-70.08511, 42.01536]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

tct.id_81 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 81",
                            "donor": "Keniston",
                            "acquired": "20100630",
                            "acres": 4.61,
                            "acresUpland": 4.61,    
                            "acresWetland": 0,
                            "map": 46,
                            "lot": 215,
                            "key": 2436,
                            "street": "222 Rt 6",

                            "abuts": ["65"],

                            "team":"B",  // was D until 2018
                            "lastInspected": "20131129",
                            "issues": "none",
                            "photosTaken": "none",

                            "status": "C",

                            "inspectYears": 3,
                            "habitat": "pine/oak woods; steep slope",
                            "signs": [],
                            "notes": "Accessible at east end, where it has ~180 ft of frontage on Rt 6.   Very steep"

                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.05628, 42.00299],
                            "coordinates": 
                                [
                                    [
                                        [-70.05731, 42.00379],
                                        [-70.05589, 42.00332],
                                        [-70.05516, 42.00303],
                                        [-70.05475, 42.00360],
                                        [-70.05429, 42.00340],

                                        [-70.05419, 42.00324],
                                        [-70.05478, 42.00293],
                                        [-70.05527, 42.00277],  
                                        [-70.05605, 42.00251],
                                        [-70.05660, 42.00269],

                                        [-70.05697, 42.00236],
                                        [-70.05725, 42.00289],
                                        [-70.05721, 42.00334],

                                        [-70.05731, 42.00379]  // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tct.id_82 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 82",          // displays in center of parcel
                            //"label": "82 CHAPMAN",     // displays instead of title                            
                            "donor": "Chapman",    // short name of donor
                            "grantor": "CHAPMAN Family Realty Trust ",      // long name of donor
                            "acquired": "20100720",
                            "street": "186 Old County Rd",
                            "acres": 2.32,
                            "acresUpland":  2.32,
                            "acresWetland": 0,
                            "map": 64,
                            "lot": 17,
                            "key": 3657,  // assessors card key
                            "habitat": "coastal heath; hill; pine woods",
                            "status": "c",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "D",  
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
                            "center": [-70.0557, 41.9615],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.05543, 41.96193],  // top R
                                        [-70.05469, 41.96080],  // btm R
                                        [-70.05526, 41.96073],  // btm L
                                        [-70.05552, 41.96092],  // curve
                                        [-70.05593, 41.96114],  // curve
                                        [-70.05614, 41.96132],  // above bump
                                        [-70.05626, 41.96151],  // above bump
                                        [-70.05631, 41.96173],  // top L
                                        [-70.05582, 41.96184],  // mid way top

                                        [-70.05543, 41.96193]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

tct.id_83 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 83",          // displays in center of parcel
                            //"label": "83 LANG",     // displays instead of title                            
                            "donor": "Lang",    // short name of donor
                            "grantor": "Stephen & Peter LANG",      // long name of donor
                            "acquired": "20120306",
                            "street": "253A, 261, 270 Shore Rd",
                            "acres": .80,
                            "acresUpland":  .80,    
                            "acresWetland": 0,
                            "map": 17,
                            "lot": 12,   // dMap 17, part 2, 12, 19
                            "key": 384,  // assessors card key
                            "habitat": "marine scarp; dune",
                            "status": "c",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
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
                            "comments":"83: 253A=17-19 (CR on .385 Ac), 261=17-2, 270=17-12",  // internal use
/*
83a 253A= 017-019 (CR on 0.385 Ac)   0.58 total Ac
83b 261 = 017-002 (CR on 0.204 Ac)   0.21 total Ac
83c 270 = 017-012 (CR on 0.209 Ac)   0.23 total Ac
TOTAL CR = .798 Ac


*/
                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.1140, 42.0479],  // optional
                            "coordinates": 
                                [
                                    [
                                        //[-70.08842, 42.03307],

                                        //-70.08842, 42.03307]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };



tct.id_83a = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 83a",          // displays in center of parcel
                            //"label": "83 LANG",     // displays instead of title                            
                            "donor": "Lang",    // short name of donor
                            "grantor": "Stephen & Peter LANG",      // long name of donor
                            "acquired": "20120306",
                            "street": "253A Shore Rd",
                            "acres": .385,   // .195 not under CR
                            "acresUpland":  .385,
                            "acresWetland": 0,
                            "map": 17,
                            "lot": 19,   // dMap 17, part 2, 12, 19
                            "key": 391,  // assessors card key
                            "habitat": "coastal heath; beach",
                            "status": "c",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
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
                            "comments":"83: 253A=17-19 (CR on .385 Ac), 261=17-2, 270=17-12",  // internal use
/*
83a 253A= 017-019 (CR on 0.385 Ac)   0.58 total Ac
83b 261 = 017-002 (CR on 0.204 Ac)   0.21 total Ac
83c 270 = 017-012 (CR on 0.209 Ac)   0.23 total Ac
TOTAL CR = .798 Acres      coastal heath; beach
*/
                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.1138, 42.04795],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.11405, 42.04796],  // L
                                        [-70.11388, 42.04815],  // top
                                        [-70.11324, 42.04782],  // dash
                                        //[-70.11296, 42.04767],  // R
                                        //[-70.11314, 42.04748],  // btm
                                        [-70.11343, 42.04764],  // dash
                                        [-70.11373, 42.04780],  // R of 83b

                                        [-70.11405, 42.04796]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };


tct.id_83b = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 83b",          // displays in center of parcel
                            //"label": "83 LANG",     // displays instead of title                            
                            "donor": "Lang",    // short name of donor
                            "grantor": "Stephen & Peter LANG",      // long name of donor
                            "acquired": "20120306",
                            "street": "261 Shore Rd",
                            "acres": .210,
                            "acresUpland":  .210,    
                            "acresWetland": 0,
                            "map": 17,
                            "lot": 2,   // dMap 17, part 2, 12, 19
                            "key": 375,  // assessors card key
                            "habitat": "coastal heath; beach",
                            "status": "c",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
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
                            "comments":"83: 253A=17-19 (CR on .385 Ac), 261=17-2, 270=17-12",  // internal use
/*
83a 253A= 017-019 (CR on 0.385 Ac)   0.58 total Ac
83b 261 = 017-002 (CR on 0.204 Ac)   0.21 total Ac
83c 270 = 017-012 (CR on 0.209 Ac)   0.23 total Ac
TOTAL CR = .798 Acres      coastal heath; beach
*/
                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.11398, 42.04778],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.11422, 42.04777],  // L
                                        [-70.11405, 42.04796],  // top
                                        [-70.11404, 42.047955],  // ease

                                        [-70.11389, 42.04788],  // dash
                                        [-70.11373, 42.04780],  // R
                                        [-70.11393, 42.04760],  // btm
                                        [-70.11408, 42.04769],  // dash

                                        [-70.11421, 42.047765],  // ease

                                        [-70.11422, 42.04777]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };




tct.id_83c = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 83c",          // displays in center of parcel
                            //"label": "83 LANG",     // displays instead of title                            
                            "donor": "Lang",    // short name of donor
                            "grantor": "Stephen & Peter LANG",      // long name of donor
                            "acquired": "20120306",
                            "street": "270 Shore Rd",
                            "acres": .209,
                            "acresUpland":  .209,    
                            "acresWetland": 0,
                            "map": 17,
                            "lot": 12,   // dMap 17, part 2, 12, 19
                            "key": 384,  // assessors card key
                            "habitat": "coastal heath; beach",
                            "status": "c",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
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
                            "comments":"83: 253A=17-19 (CR on .385 Ac), 261=17-2, 270=17-12",  // internal use
/*
83a 253A= 017-019 (CR on 0.385 Ac)   0.58 total Ac
83b 261 = 017-002 (CR on 0.204 Ac)   0.21 total Ac
83c 270 = 017-012 (CR on 0.209 Ac)   0.23 total Ac
TOTAL CR = .798 Acres      coastal heath; beach
*/
                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.1143, 42.04747],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.11455, 42.04743],  // L
                                        [-70.11433, 42.04766],  // top
                                        [-70.11419, 42.04758],  // dash
                                        [-70.11404, 42.04749],  // R
                                        [-70.11425, 42.04728],  // btm
                                        [-70.11442, 42.04736],  // dash

                                        [-70.11455, 42.04743]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };



tct.id_84 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 84",
                            "marker-symbol": "monument",
                            "donor": "Weingeist",
                            "acquired": "20130320",
                            "street":"8 Toms Hill Path",
                            "acres": 4.49,
                            "acresUpland": 4.49,    
                            "acresWetland": 0,
                            "map": 45,
                            "lot": 82,
                            "key": 2189,
                            "habitat": "pine/oak woods; old field",

                            "abuts":"97",

                            "team":"B",
                            "lastInspected": "",
                            "issues": "",
                            "photosTaken": "none",
                            "inspectYears": 3,
                            "status": "C",
                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0745, 41.9997],                            
                            "coordinates": 
                                [
                                    [
                                        [-70.07573, 41.99999],
                                        [-70.07540, 42.00010],
                                        [-70.07506, 42.00011],
                                        [-70.07461, 42.00005],
                                        [-70.07460, 42.00002],

                                        [-70.07387, 41.99975],
                                        [-70.07286, 41.99997],
                                        [-70.07255, 41.99988],
                                        [-70.07349, 41.99893],
                                        [-70.07360, 41.99909],

                                        [-70.07367, 41.99906],
                                        [-70.07392, 41.99956],
                                        [-70.07463, 41.99939],
                                        [-70.07491, 41.99925],
                                        [-70.07520, 41.99897],

                                        [-70.07551, 41.99966],
                                        [-70.07560, 41.99992],
                                        [-70.07573, 41.99999]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tct.id_85 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 85",
                            "donor": "Cooperstein",
                            "grantor": "C17 Pilgrims Path Trust",
                            "acquired": "20130320",
                            "street":"17 Pilgrims Path",
                            "acres": 1.100,
                            "acresUpland": 1.100,   
                            "acresWetland": 0,
                            "habitat": "coastal heath",
                            "map": 35,
                            "lot": 91,
                            "key": 841,

                            "comments": "view easement",

                            "team":"A",
                            "lastInspected": "",
                            "issues": "",
                            "photosTaken": "none",
                            "inspectYears": 3,
                            "status": "C",
                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0959, 42.0355],
                            "coordinates": 
                                [
                                    [
                                        [-70.09669, 42.03551],
                                        [-70.09586, 42.03577],
                                        [-70.09521, 42.03572],
                                        [-70.09522, 42.03543],
                                        [-70.09602, 42.03534],

                                        [-70.09640, 42.03516],

                                        [-70.09669, 42.03551]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

// TCT 86 February 5, 2013 Estate of Eugene C. Luschei 1.17 0.00 1.17 pine/oak woods; cleared lot 26 Sylvan Lane Map 43, Lot 91
tct.id_86 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 86",          // displays in center of parcel
                            //"label": "86 Luschei",     // displays instead of title                            
                            "donor": "Luschei",    // short name of donor
                            "grantor": "Estate of Eugene C. Luschei",      // long name of donor
                            "acquired": "20130205",
                            "street": "26 Sylvan Ln",
                            "acres": 1.17,
                            "acresUpland":  1.17,    
                            "acresWetland": 0,
                            "map": 43,
                            "lot": 91,
                            "key": 1966,  // assessors card key
                            "habitat": "pine/oak woods; cleared lot",
                            "status": "C",
                            
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
                            "center": [-70.0593, 42.0136],  // optional
                            "coordinates":
                                [
                                    [
                                        [-70.06001, 42.01328],  // btm L
                                        [-70.05998, 42.01345],
                                        [-70.05997, 42.01348],  // curve
                                        [-70.05995, 42.01352],  // curve
                                        [-70.05993, 42.01354],  // curve

                                        [-70.05959, 42.01378],  // 
                                        [-70.05956, 42.013795],  // curve
                                        [-70.05953, 42.013805],  // curve
                                        [-70.05949, 42.01381],  // 
                                        [-70.05902, 42.01387],  // 
                                        [-70.05898, 42.01387],  // curve

                                        [-70.05896, 42.013866],  // curve
                                        [-70.05893, 42.013856],  // curve
                                        [-70.05890, 42.01384],  // beg of straight top R side
                                        [-70.05878, 42.01377],  // 
                                        [-70.05871, 42.01373],  // 

                                        [-70.05868, 42.01370],  // curve
                                        [-70.05867, 42.01366],  // curve R
                                        [-70.05867, 42.01362],  // curve
                                        [-70.05868, 42.01360],  // 
                                        [-70.05878, 42.01341],  // 

                                        [-70.06001, 42.01328]   // close polygon with repeating 1st point
                                    ]
                                ]
                        }
                    };

tct.id_87 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 87",
                            "donor": "Buteau",
                            "grantor": "Cold Storage Beach Nom. Trust",
                            "acquired": "20130605",
                            "street": "17 Twine Field Rd",
                            "acres": .840,
                            "acresUpland": .840,    
                            "acresWetland": 0,
                            "habitat": "maritime thicket",
                            "comments": "view easement",
                            "map": 35,
                            "lot": 106,
                            "key": 856,

                            "team":"A",
                            //"signs": [
                            //    [-70.07701, 41.99834]
                            //],
                            "lastInspected": "",
                            "issues": "",
                            "photosTaken": "none",
                            "inspectYears": 3,
                            "status": "C",
                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.09374, 42.03475],
                            "coordinates": 
                                [
                                    [
                                        [-70.09420, 42.03462],
                                        [-70.09419, 42.03501],
                                        [-70.09330, 42.03492],
                                        [-70.09331, 42.03451],

                                        [-70.09420, 42.03462]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tct.id_88 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 88",
                            "donor": "Hollander",
                            "grantor": "Ruth Hollander",
                            "acquired": "20130610",
                            "street": "17 Toms Hill Path",
                            "acres": .78,
                            "acresUpland": .78,    
                            "acresWetland": 0,
                            "habitat": "coastal bank",
                            "map": 49,
                            "lot": 6,
                            "key": 2757,

                            "team":"B",
                            "signs": [  
                            ],
                            "lastInspected": "",
                            "issues": "",
                            "photosTaken": "none",
                            "inspectYears": 3,
                            "status": "C",
                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.076, 41.9977],

                            "coordinates": 
                                [
                                    [
                                        [-70.07649, 41.99728],
                                        [-70.07551, 41.99780],
                                        [-70.07580, 41.99793],
                                        [-70.07591, 41.99807],
                                        [-70.07649, 41.99794],

                                        [-70.07659, 41.99777],
                                        [-70.07620, 41.99796],
                                        [-70.07604, 41.99779],
                                        [-70.07667, 41.99746],

                                        [-70.07649, 41.99728]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

// TCT 89 December 23, 2013 Stephen & Patricia LANG 0.22 0.00 0.22 coastal heath; beach 266 Shore Rd Map 17, Lot 13
tct.id_89 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 89",          // displays in center of parcel
                            //"label": "89 Lang",     // displays instead of title                            
                            "donor": "Lang",    // short name of donor
                            "grantor": "Stephen & Patricia LANG",      // long name of donor
                            "acquired": "20131223",
                            "street": "266 Shore Rd",
                            "acres": .22,
                            "acresUpland": .22,    
                            "acresWetland": 0,
                            "map": 17,
                            "lot": 13,
                            "key": 385,  // assessors card key
                            "habitat": "coastal heath; beach",
                            "status": "c",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "A",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 185000,   // assessed TOTAL
                            "assessedPrevious": 185000,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.1140, 42.0473],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.11425, 42.04728],  // L
                                        [-70.11404, 42.04749],  // top
                                        [-70.11375, 42.04732],  // R
                                        [-70.11397, 42.04711],  // bottom
                                        [-70.11401, 42.04713],

                                        [-70.11411, 42.04720],  // intersect
                                        [-70.11420, 42.04726],

                                        [-70.11425, 42.04728]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

// TCT 90 January 23, 2014 Lynn Burrows DONALDSON Rev. Trust (via Compact) 2.00 0.00 2.00 sandplain; heathland; pitch pine  4 Stick Bridge Rd Map 54; Lot 77 (portion)
tct.id_90 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 90",          // displays in center of parcel
                            //"label": "90 DONALDSON",     // displays instead of title                            
                            "donor": "Donaldson",    // short name of donor
                            "grantor": "Lynn Burrows DONALDSON Rev. Trust",      // long name of donor
                            "acquired": "20140123",
                            "street": "4 Stick Bridge Rd",
                            "acres": 1.82,  // 2.00 per master sheet
                            "acresUpland": 2.00,    // 1.82 per assessor's card FY 2019
                            "acresWetland": 0,
                            "map": 54,
                            "lot": 77,
                            "key": 3308,  // assessors card key
                            "habitat": "coastal heath; beach",
                            "status": "c",

                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "D",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": 0,      // assessed TOTAL
                            "assessedPrevious": 0,   // assessed TOTAL previous

                            "inspectYears": 3,

                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0648, 41.9855],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.06559, 41.98548],  // L
                                        // curve
                                        [-70.06540, 41.98557],
                                        [-70.06520, 41.98568],
                                        [-70.06504, 41.98580],
                                        [-70.06491, 41.98591],
                                        [-70.06479, 41.98603],
                                        [-70.06469, 41.98615],

                                        [-70.06465, 41.98621],  // top
                                        [-70.06414, 41.98542],  // R
                                        [-70.06488, 41.98501],  // btm

                                        [-70.06559, 41.98548]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

// TCT 91 February 4, 2014 Arien MACK (via Compact) 1.30 0.00 1.30 pine/oak woods 13 Old Bridge Rd Map 50, Lot 199 (portion)
tct.id_91 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 91",          // displays in center of parcel
                            //"label": "91 MACK",     // displays instead of title                            
                            "donor": "Mack",    // short name of donor
                            "grantor": "Arien MACK",      // long name of donor
                            "acquired": "20140123",
                            "street": "13 Old Bridge Rd",
                            "acres": 1.30,
                            "acresUpland": 1.30,    
                            "acresWetland": 0,
                            "map": 50,
                            "lot": 199,
                            "key": 2968,  // assessors card key
                            "habitat": "coastal heath; beach",
                            "status": "c",

                            //"abuts":["24a","24b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "C",
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
                            "center": [-70.0550, 41.9875],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.05581, 41.98791],  // top L

                                        [-70.05566, 41.98793],
                                        [-70.05546, 41.98793],
                                        [-70.05531, 41.98791],
                                        [-70.05489, 41.98789],

                                        [-70.05462, 41.98787],  // top R
                                        [-70.05421, 41.98715],  // bottom R
                                        [-70.05555, 41.98692],  // bottom L
                                        [-70.05581, 41.98791]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

tct.id_92a = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 92a",
                            "donor": "Meldahl",
                            "acquired": "20151229",
                            "street":"8 Edgewood Way",
                            "acres": 2.157,
                            "acresUpland": 2.157,    
                            "acresWetland": 0,
                            "map": 51,
                            "lot": 89,
                            "key": 5595,
                            "habitat": "pine/oak woods; ridgetop",

                            "abuts":["92b"],

                            "signs":[
                                [-70.04596, 41.98888],
                                [-70.04583, 41.98848]
                            ],
                            "signComments":"2 lg rectangle signs",  // internal use

                            "team": "D",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 3,

                            "status": "C",

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.04276, 41.99100],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.04447, 41.99063],
                                        [-70.04379, 41.99068],
                                        [-70.04314, 41.99083],
                                        [-70.04313, 41.99165],
                                        // swiggly border with NPS on E edge
                                        [-70.04235, 41.99114],
                                        [-70.04236, 41.99042],  // common right edge
                                        [-70.04320, 41.99057],  // bottom center in common with parcel below
                                        [-70.04398, 41.99045],  // common left edge
                                        // road curve on W edge
                                        [-70.04447, 41.99063]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tct.id_92b = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 92b",
                            "donor": "Meldahl",
                            "acquired": "20151229",
                            "street": "10 Edgewood Way",
                            "acres": 1.609,
                            "acresUpland": 1.609,    
                            "acresWetland": 0,
                            "map": 51,
                            "lot": 90,
                            "key": 5596,
                            "habitat": "pine/oak woods; ridgetop",

                            "abuts":["92a"],

                            "team": "D",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 3,

                            "status": "C",

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.04314, 41.99030],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.04372, 41.98995],
                                        [-70.04386, 41.99004],
                                        //
                                        [-70.04386, 41.99018],
                                        [-70.04390, 41.99031],
                                        [-70.04398, 41.99045],  // common left edge
                                        [-70.04320, 41.99057],  // top center in common with parcel above
                                        [-70.04236, 41.99042],  // common right edge
                                        [-70.04237, 41.99028],
                                        [-70.04355, 41.98986],

                                        [-70.04372, 41.98995]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

// TCT 93 June 28, 2016 FRIEDMAN Realty Trust (via Compact) 0.84 0.00 0.84 maritime thicket; grassy heath 1 Sky View Drive Map 42, Lot 305
tct.id_93 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 93",          // displays in center of parcel
                            //"label": "93 FRIEDMAN",     // displays instead of title                            
                            "donor": "Friedman",    // short name of donor
                            "grantor": "FRIEDMAN Realty Trust",      // long name of donor
                            "acquired": "20160628",
                            "street": "1 Sky View Dr",
                            "acres": 0.84,
                            "acresUpland": 0.84,    
                            "acresWetland": 0,
                            "map": 42,
                            "lot": 305,
                            "key": 6431,  // assessors card key
                            "habitat": "maritime thicket; grassy heath",

                            //"abuts":["24a","24b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "A",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            //"photosURL": "",

                            "assessedFY": 2019,         // assessed fiscal year
                            "assessedTotal": -1,   // assessed TOTAL
                            "assessedPrevious": -1,   // assessed TOTAL previous

                            "inspectYears": 3,

                            "status": "C",
                            //"description": "Easily accessible only from Society Ln.",    // external viewing                        
                            //"comments":"part of Hopper landscape",  // internal use

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0802, 42.0096],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.08065, 42.00964],  // top L
                                        [-70.08066, 42.00968],
                                        [-70.08065, 42.00971],
                                        [-70.08063, 42.00973],
                                        [-70.08060, 42.00975],

                                        [-70.08057, 42.00976],
                                        [-70.08001, 42.00994],
                                        [-70.07997, 42.00995],
                                        [-70.07993, 42.00997],
                                        [-70.07980, 42.00963],  // R

                                        [-70.08022, 42.00925],  // ease

                                        [-70.08029, 42.00920],  // btm

                                        [-70.08065, 42.00964]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

// TCT 94 November 16, 2016 Richard F.X. & Sonia F. McARDLE 2.16 9.00 11.16 coastal heath; fresh marsh; river 15 North Pamet Road Map 51, Lot 13 (portion)
tct.id_94 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 94",          // displays in center of parcel
                            "label": "94 McARDLE",     // displays instead of title                            
                            "donor": "McArdle",    // short name of donor
                            "grantor": "Richard F.X. & Sonia F. McARDLE",      // long name of donor
                            "acquired": "20161116",
                            "street": "15 North Pamet Rd",
                            "acres": 11.16,
                            "acresUpland": 2.16,    
                            "acresWetland": 9.00,
                            "map": 51,
                            "lot": 13,
                            "key": 3060,  // assessors card key
                            "habitat": "coastal heath; fresh marsh; river",
                            "status": "c",

                            //"abuts":["24a","24b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "C",
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
                            "center": [-70.0462, 41.9950],  // optional
                            "coordinates": 
                                [
                                    [
  
                                    ]
                                ]     
                        }
                    };

// TCT 95 January 12, 2017 Truro Center for the Arts at CASTLE HILL, Inc. 0.32 0.60 0.92 fresh marsh; house site 15 Cabral Farm Road Map 42, Lot 176
tct.id_95 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 95",          // displays in center of parcel
                            //"label": "95 CASTLE HILL",     // displays instead of title                            
                            "donor": "Castle Hill",    // short name of donor
                            "grantor": "Truro Center for the Arts at CASTLE HILL",      // long name of donor
                            "acquired": "20170112",
                            "street": "15 Cabral Farm Rd",
                            "acres": .910,
                            "acresUpland": .775,    
                            "acresWetland": .135,
                            "map": 42,
                            "lot": 176,
                            "key": 1758,  // assessors card key
                            "habitat": "fresh marsh; house site",
                            "status": "c",

                            //"abuts":["24a","24b"],        // array of TCT parcels (or town or other maplot) this abuts
                            "landmarks": "Joyce Johnson Cottage",   // landmarks on the parcel
                            
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
                            "center": [-70.0748, 42.0124],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07533, 42.01254],  // top L
                                        [-70.07456, 42.01271],  // top R
                                        [-70.07421, 42.01233],  // bottom R
                                        [-70.07500, 42.01207],  // bottom L

                                        [-70.07533, 42.01254]   // close polygon by repeating 1st point
                                    ]
                                ]     
                        }
                    };

tct.id_96a = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 96a",
                            "donor": "Rogers",
                            "acquired": "20171229",
                            "street": "25-A Pond Rd",
                            "acres": 3.94,
                            "acresUpland": 3.94,    
                            "acresWetland": 0,
                            "map": 36,
                            "lot": 35,
                            "key": 934,
                            "habitat": "grassy heath",

                            "abuts": ["96b"],

                            "comments":"Twine Fields",  // internal use

                            "signs": [
                            ],
                            
                            "team": "A",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 3,

                            "status": "C",

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0909, 42.0348],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.09202, 42.03575],
                                        [-70.09138, 42.03603],
                                        [-70.08986, 42.03388],
                                        [-70.09048, 42.03367],
                                        [-70.09138, 42.03488],  // intersect with 96b
                                        [-70.09202, 42.03575]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tct.id_96b = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 96b",
                            "donor": "Rogers",
                            "acquired": "20171229",
                            "street": "25 Pond Rd",
                            "acres": 6.24,
                            "acresUpland": 6.24,    
                            "acresWetland": 0,
                            "map": 36,
                            "lot": 39,
                            "key": 938,
                            "habitat": "grassy heath",

                            "abuts": ["96a"],
                            "comments":"Twine Fields",  // internal use
                            
                            "signs": [
                                [-70.09035, 42.03260],
                                [-70.09182, 42.03358] 
                            ],
                            
                            "team": "A",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 3,

                            "status": "C",

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0911, 42.0336],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.09246, 42.03442],
                                        [-70.09138, 42.03488],
                                        [-70.09048, 42.03367],
                                        [-70.09016, 42.03319],
                                        [-70.08992, 42.03276],

                                        [-70.09051, 42.03253],
                                        [-70.09080, 42.03292],
                                        [-70.09112, 42.03282], // intersection with town land

                                        [-70.09125, 42.03278],

                                        [-70.09246, 42.03442]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

tct.id_97 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 97",
                            "donor": "Boyle",
                            "grantor": "Brian and Polly Boyle",
                            "acquired": "20171227",
                            "street":"3 Outwater Lane",
                            "acres": 1.10,
                            "acresUpland": 1.10,    
                            "acresWetland": 0,
                            "map": 45,
                            "lot": 81,
                            "key": 2188,
                            "habitat": "pine/oak woods",

                            "abuts":"84",

                            "team":"B",
                            "assessedFY": 2019,        // assessed fiscal year
                            "assessedTotal": 139300,   // assessed TOTAL

                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 5,
                            "status": "c",
                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07457, 41.9991],
                            "coordinates": 
                                [
                                    [
                                        [-70.07490, 41.99866],
                                        [-70.07516, 41.99886],
                                        [-70.07520, 41.99897],
                                        [-70.07491, 41.99925],
                                        [-70.07463, 41.99939],

                                        [-70.07392, 41.99956],
                                        [-70.07367, 41.99906],
                                        [-70.07415, 41.99880],
                                        [-70.07431, 41.99898],

                                        [-70.07490, 41.99866]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

// TCT 98 June 22, 2018 Daniel MOON & Harry COLLINGS 1.20 0.00 1.20 pine/oak woods 24 Meetinghouse Road Map 46, Lot 255
tct.id_98 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 98",          // displays in center of parcel
                            //"label": "98 MOON/COLLINGS",     // displays instead of title                            
                            "donor": "Moon/ Collings",    // short name of donor
                            "grantor": "Daniel MOON & Harry COLLINGS",      // long name of donor
                            "acquired": "20180622",
                            "street": "24 Meetinghouse Rd",
                            "acres": 1.20,
                            "acresUpland": 1.20,    
                            "acresWetland": 0,
                            "map": 46,
                            "lot": 255,
                            "key": 2472,  // assessors card key
                            "habitat": "pine/oak woods ",
                            "status": "C",

                            //"abuts":["24a","24b"],        // array of TCT parcels (or town or other maplot) this abuts
                            //"landmarks": "osprey pole",   // landmarks on the parcel
                            
                            "team": "B",
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
                            "center": [-70.05786, 41.9998],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.05859, 42.00017],  // top L
                                        [-70.05816, 42.00027],  // top R
                                        [-70.05719, 41.99957],  // bottom R
                                        [-70.05767, 41.99935],  // bottom L

                                        [-70.05859, 42.00017]   // close polygon by repeating 1st point
                                    ]
                                ]
                        }
                    };


// 42 Corn Hill Rd - lot
tct.id_a1 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT A1",
                            "label": "42 Corn Hill Rd",
                            "donor": "Morfit/Bunker",
                            "acquired": "20190930",
                            "street":"42 Corn Hill Rd",
                            "acres": 1.28,
                            "acresUpland": 1,    
                            "acresWetland": .28,  // estimate
                            "map": 45,
                            "lot": 52,
                            "key": 2161,
                            "status": "a",

                            // FY201 assessed  698000

                            "team": "B",
                            "lastInspected": "",
                            "issues": "",
                            "photosTaken": "none",
                            "inspectYears": 1,
                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07878, 41.99936],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.08015, 41.99889],
                                        [-70.07833, 41.99972],
                                        [-70.07825, 41.99961],
                                        [-70.07816, 41.99958],
                                        [-70.07802, 41.99905],

                                        [-70.07810, 41.99902],
                                        [-70.07824, 41.99942],
                                        [-70.07994, 41.99867],

                                        [-70.08015, 41.99889]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

// 42 Corn Hill Rd
tct.id_a1house = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT A1house",
                            "donor": "Morfit/Bunker",
                            "acquired": "20190930",
                            "street":"42 Corn Hill Rd",
                            "acres": 1.28,
                            "acresUpland": 1,    
                            "acresWetland": .28,  // estimate

                            "map": 45,
                            "lot": 52,

                            "team":"B",

                            "lastInspected": "",
                            "issues": "",
                            "photosTaken": "none",
                            "inspectYears": 1,
                            "status": "x",
                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            //"center": [-70.07878, 41.99936],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.078516, 41.999567],
                                        [-70.078422, 41.999596],
                                        [-70.078406, 41.999568],
                                        [-70.078376, 41.999577],
                                        [-70.078347, 41.999524],

                                        [-70.078418, 41.999502],
                                        [-70.078437, 41.999536],
                                        [-70.078490, 41.999519],

                                        [-70.078516, 41.999567]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

// envelope around the house at 42 Corn Hill Rd
tct.id_a1Line = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT A1line",
                            "donor": "Morfit/Bunker",
                            "acquired": "20190930",
                            "street":"42 Corn Hill Rd",
                            "acres": 1.28,
                            "acresUpland": 1,    
                            "acresWetland": .28,  // estimate

                            "map": 45,
                            "lot": 52,
                            "team":"B",

                            "lastInspected": "",
                            "issues": "",
                            "photosTaken": "none",
                            "inspectYears": 1,
                            "status": "x",
                            "drone": ""
                        },
                        "geometry": {
                            "type": "LineString",
                            //"center": [-70.07878, 41.99936],  // optional
                            "coordinates": 
                                [
                                        [-70.078302, 41.999682],
                                        [-70.078351, 41.999643],
                                        [-70.078597, 41.999568],
                                        [-70.078525, 41.999437],
                                        [-70.078286, 41.999510],
                                        [-70.078204, 41.999595]

                                ]
                        }

                    };

// envelope around the house at 42 Corn Hill Rd
tct.id_a1Polygon = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT A1poly",
                            "donor": "Morfit/Bunker",
                            "acquired": "20190930",
                            "street":"42 Corn Hill Rd",
                            "acres": 1.28,
                            "acresUpland": 1,    
                            "acresWetland": .28,  // estimate

                            "map": 45,
                            "lot": 52,
                            "team":"B",

                            "lastInspected": "",
                            "issues": "",
                            "photosTaken": "none",
                            "inspectYears": 1,
                            "status": "x",
                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            //"center": [-70.07878, 41.99936],  // optional
                            "coordinates": 
                                [[
                                        [-70.078302, 41.999682],  // upper left
                                        [-70.078353, 41.999647],
                                        [-70.078599, 41.999572],
                                        [-70.078526, 41.999439],
                                        [-70.078287, 41.999512],
                                        [-70.078204, 41.999595],

                                        [-70.078250, 41.999609],

                                        [-70.078302, 41.999682]
                                ]]
                        }

                    };



function plot42CHR() {

    //
    // Parking at 42CHR
    //
    /*
    map.addLayer({
        "id": "42CHRparking",
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
                            "coordinates": [-70.07828, 41.99961]
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

        "minzoom": 15,
        //"maxzoom": 22,

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

*/

    addOnePoint(map,"42CHRparking","symbol",[-70.07828, 41.99958],"Parking","car" ,15,12,1.5);
    addOnePoint(map,"42CHRbackyard","symbol",[-70.078535, 41.999527],"20 feet","" ,20,12);
    addOnePoint(map,"42CHRtopyard","symbol",[-70.078477, 41.999593],"10 feet","" ,20,12);
    addOnePoint(map,"42CHRbottomyard","symbol",[-70.078376, 41.9995],"10 feet","" ,20,12);
    addOnePoint(map,"42CHRbuilding","symbol",[-70.078450, 41.999557],"existing building","" ,20,14);
    addOnePoint(map,"42CHRdeck","symbol",[-70.078452, 41.99952],"existing deck","" ,20,12);


}








// TCT ??
tct.id_x1 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT x1",
                            "marker-symbol": "monument",
                            "donor": "Black",
                            "acquired": "",
                            "street":"36 Corn Hill Rd",
                            "acres": 1.158,
                            "map": 45,
                            "lot": 119,
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 1,
                            "status": "x",
                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            //"center": [-70.0788, 41.9994],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07730, 42.00023],
                                        [-70.07681, 42.00039],
                                        [-70.07631, 41.99947],
                                        [-70.07675, 41.99931],
                                        [-70.07730, 42.00023]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


// CATER WILLIE J & GLORIA J
tct.id_p2 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT p2",
                            "label": "Cater",  // this label overrides the generic labelling of parcels
                            "donor": "CATER WILLIE J & GLORIA J",
                            "acquired": "",
                            "street":"9B Benson Rd",
                            "acres": 3.49,
                            "acresUpland": 0,  // estimate    
                            "acresWetland": 0,
                            "map": 53,
                            "lot": 50,
                            "status": "r",

                            "team": "D",
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
                                        [-70.07734, 41.98065],
                                        [-70.07737, 41.98149],
                                        [-70.07545, 41.98168],
                                        [-70.07590, 41.98060],

                                        [-70.07734, 41.98065]   // close polygon with repeating 1st point
                                    ]

                                ]
                            }
                    };

// LUCY CLARK
tct.id_p3 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT p3",
                            "label": "Clark",  // this label overrides the generic labelling of parcels
                            "donor": "Lucy Clark",
                            "acquired": "",
                            "street":"7 Benson Rd",
                            "acres": 1.16,
                            "acresUpland": 1.16,      
                            "acresWetland": 0,
                            "map": 53,
                            "lot": 51,
                            "status": "r",

                            "team": "D",
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
                                        [-70.07468, 41.98142],
                                        [-70.07445, 41.98195],

                                                                            [-70.07329, 41.98220], // 19
                                    [-70.07329, 41.98220], // 19

                                        [-70.07297, 41.98225],
                                        [-70.07349, 41.98195],
                                        [-70.07388, 41.98161],

                                        [-70.07468, 41.98142]   // close polygon with repeating 1st point
                                    ]

                                ]
                            }
                    };

// THORNLEY
tct.id_p4 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT p4",
                            "label": "Thornley",  // this label overrides the generic labelling of parcels
                            "donor": "John M & Nancy O Thornley",
                            "acquired": "",
                            "street":"3 Benson Rd",
                            "acres": 2.384,
                            "acresUpland": 2.384,      
                            "acresWetland": 0,
                            "map": 53,
                            "lot": 47,
                            "status": "r",

                            "team": "D",
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
                                    [-70.07545, 41.98168], // 0
                                    [-70.07522, 41.98199], 
                                    [-70.07534, 41.98230],
                                    [-70.07519, 41.98257],
                                    [-70.07500, 41.98250], // 4

                                    [-70.07460, 41.98211],
                                    [-70.07441, 41.98203],
                                    [-70.07429, 41.98203], // 7 top of throat
                                    [-70.07414, 41.98214],
                                    [-70.07411, 41.98226], // 9

                                    [-70.07401, 41.98235],
                                    [-70.07395, 41.98244],
                                    [-70.07399, 41.98261],
                                    [-70.07330, 41.98269],
                                    [-70.07275, 41.98241], // 14

                                    [-70.07266, 41.98243],
                                    [-70.07247, 41.98229],
                                    [-70.07254, 41.98229],
                                    [-70.07281, 41.98227],

                                    [-70.07297, 41.98225], // corner with Lucy Clark

                                    [-70.07329, 41.98220], // 19

                                    [-70.07427, 41.98199], // 20 bottom of throat
  
                                    [-70.07445, 41.98195], // 21 right corner of sliver
                                    [-70.07447, 41.98194], // 22 left corner of sliver

                                    [-70.07545, 41.98168]  // 23 close polygon with repeating 1st point
                                ]
                                ]
                            }
                    };


// KLINE
tct.id_p5 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT p5",
                            "label": "Kline/Dennis",  // this label overrides the generic labelling of parcels
                            "donor": "",
                            "acquired": "",
                            "street":"27 Stevens Way",
                            "acres": 9.49,
                            "acresUpland": 9.49,      
                            "acresWetland": 0,
                            "map": 53,
                            "lot": 73,
                            "key": 3214,
                            "status": "r",

                            "team": "D",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 99,

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.0750, 41.9782],  // optional
                            "coordinates": 
                                [
                                    [
                                        [-70.07706, 41.97827],
                                        [-70.07709, 41.97896],
                                        [-70.07727, 41.97949],
                                        [-70.07488, 41.97869],
                                        [-70.07341, 41.97822],

                                        [-70.07347, 41.97711],
                                        [-70.07433, 41.97739],
                                        [-70.07447, 41.97744],

                                        [-70.07489, 41.97757],

                                        [-70.07706, 41.97827]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };

// HOLT
tct.id_p6 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT p6",
                            "label": "Holt (undev)",  // this label overrides the generic labelling of parcels
                            "donor": "",
                            "acquired": "",
                            "street":"6 Benson Rd",
                            "acres": .835,
                            "acresUpland": .835,      
                            "acresWetland": 0,
                            "map": 53,
                            "lot": 83,
                            "key": 3224,
                            "status": "r",

                            "team": "D",
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
                                        [-70.07378, 41.98133],
                                        [-70.07374, 41.98156],
                                        [-70.07352, 41.98175],
                                        [-70.07339, 41.98163],
                                        [-70.07279, 41.98178],

                                        [-70.07257, 41.98179],
                                        [-70.07322, 41.98124],
                                        [-70.07343, 41.98119],

                                        [-70.07378, 41.98133]   // close polygon with repeating 1st point
                                    ]
                                ]
                            }
                    };


// CABOT
tct.id_p7 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT p7",
                            "label": "Cabet",  // this label overrides the generic labelling of parcels
                            "donor": "",
                            "acquired": "",
                            "street":"6 Benson Rd",
                            "acres": .14,
                            "acresUpland": .14,      
                            "acresWetland": 0,
                            "map": 53,
                            "lot": 89,
                            "key": 3230,
                            "status": "r",

                            "team": "D",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 99,

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07496, 41.98072],  // optional
                            "coordinates": 
                                [
                                [
                                    [-70.07447, 41.98194], // left corner of sliver
                                    [-70.07445, 41.98195], // right corner of sliver

                                    [-70.07468, 41.98142],  // Clark lower left

                                    [-70.07488, 41.98099], 
                                    [-70.07480, 41.98101], 
                                    [-70.07508, 41.98038], 
                                    [-70.07516, 41.98036],  // meets TCT land in middle of east boundary

                                    [-70.07447, 41.98194]   // close polygon with repeating 1st point
                                ]
                                ]
                            }
                    };

// LETENDRE
tct.id_p8 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT p8",
                            "label": "Letendre",  // this label overrides the generic labelling of parcels
                            "donor": "",
                            "acquired": "",
                            "street":"10 Thornley Meadow Rd",

                            "acres": 3.68,
                            "acresUpland": 3.68,      
                            "acresWetland": 0,

                            "map": 53,
                            "lot": 87,
                            "key": 3228,
                            "status": "r",

                            "team": "D",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 99,

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07667, 41.98181],  // optional
                            "coordinates": 
                                [
                                [
                                    [-70.07737, 41.98149], 
                                    [-70.07740, 41.98174], 
                                    [-70.07740, 41.98196], 
                                    [-70.07577, 41.98216], 
                                    [-70.07533, 41.98257], 

                                    [-70.07519, 41.98257], 
                                    [-70.07534, 41.98230], 
                                    [-70.07522, 41.98199], 
                                    [-70.07545, 41.98168], 

                                    [-70.07737, 41.98149]   // close polygon with repeating 1st point
                                ]
                                ]
                            }
                    };

// AVERBACK
tct.id_p9 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT p9",
                            "label": "Averback",  // this label overrides the generic labelling of parcels
                            "donor": "Averback, Marian E & Robert S",
                            "acquired": "",
                            "street":"3 Button Hill Rd",
                            "acres": .964,
                            "acresUpland": .964,      
                            "acresWetland": 0,
                            "map": 53,
                            "lot": 84,
                            "key": 3225,
                            "status": "r",

                            "team": "D",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 99,

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.07563, 41.98311],  // optional
                            "coordinates": 
                                [
                                [
                                    [-70.07606, 41.98315], 
                                    [-70.07598, 41.98333], 
                                    [-70.07535, 41.98339], 
                                    [-70.07526, 41.98292], 
                                    [-70.07501, 41.98268], 

                                    [-70.07561, 41.98267], 
                                    [-70.07566, 41.98269], 
                                    [-70.07568, 41.98272], 
                                    [-70.07569, 41.98280], 
                                    [-70.07571, 41.98283], 

                                    [-70.07576, 41.98287], 
                                    [-70.07581, 41.98290], 
                                    [-70.07584, 41.98294], 
                                    [-70.07590, 41.98309], 
                                    [-70.07595, 41.98312], 

                                    [-70.07598, 41.98315], 

                                    [-70.07606, 41.98315]   // close polygon with repeating 1st point
                                ]
                                ]
                            }
                    };


// PERRY
tct.id_040124 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 040124",
                            "label": "040124 Perry",  // this label overrides the generic labelling of parcels
                            "donor": "Perry, Claire",  // PERRY CLAIRE A LIVING TRUST
                            "acquired": "19951231",
                            "street":"14A N Union Field Rd",
                            "acres": .275,
                            "acresUpland": 0,      
                            "acresWetland": 0,
                            "map": 40,
                            "lot": 124,
                            "key": 1544,
                            "status": "r",

                            "team": "D",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 99,

                            // $6000 assessed in FY 2019

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.06625, 42.02235],  // optional
                            "coordinates": 
                                [
                                [
                                    [-70.06657, 42.02226],  // L
                                    [-70.06608, 42.02262],  // top
                                    [-70.06597, 42.02240],  // btm R
                                    [-70.06652, 42.02211],  // btm L

                                    [-70.06657, 42.02226]   // close polygon with repeating 1st point
                                ]
                                ]
                            }
                    };
// PERRY
tct.id_040126 = 
                    {
                        "type": "Feature",
                        "properties": {
                            "title": "TCT 040126",
                            "label": "040126 Perry",  // this label overrides the generic labelling of parcels
                            "donor": "Perry, Claire",  // PERRY CLAIRE A LIVING TRUST
                            "acquired": "19951231",
                            "street":"14A N Union Field Rd",
                            "acres": .02,
                            "acresUpland": 0,      
                            "acresWetland": 0,
                            "map": 40,
                            "lot": 126,
                            "key": 1546,
                            "status": "r",

                            "team": "D",
                            "lastInspected": "",
                            "issues": "none",
                            "photosTaken": "none",
                            "inspectYears": 99,

                            // $400 assessed in FY 2019

                            "drone": ""
                        },
                        "geometry": {
                            "type": "Polygon",
                            "center": [-70.06721, 42.02176],  // optional
                            "coordinates": 
                                [
                                [
                                    [-70.06740, 42.02164],  // L
                                    [-70.06713, 42.02184],  // top
                                    [-70.06713, 42.02178],  // btm R

                                    [-70.06740, 42.02164]   // close polygon with repeating 1st point
                                ]
                                ]
                            }
                    };

console.log(tct);