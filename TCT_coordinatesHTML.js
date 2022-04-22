function coordinatesHTML(coords) {

    var colors = ['green','blue','red','purple','magenta','gray'];
    var textColor;

    var myHTML = "";
    var l = coords[0].length;
    console.log("l coords[0]",l,coords[0]);
    var i;
    for (i=0;i<l;i++) {
        if (i>0)  myHTML += "<br>";

        if (i==0 || i==l-1) myHTML += "<span class='textGreen'><strong>"+ i ;
        if (i==1) myHTML += "<span class='textBlue'><strong>"+ i ;
        if (i==2) myHTML += "<span class='textRed'><strong>"+ i ;
        if (i==3) myHTML += "<span class='textPurple'><strong>"+ i ;
        if (i==4) myHTML += "<span class='textMagenta'><strong>"+ i ;
        if (i>4 && i!=l-1) myHTML += "<span class='textGray'><strong>"+ i ;

        myHTML += coordinatesHTMLline(coords[0][i]) ;
        if (i<=4 || i==l-1 || 1==1) myHTML += "</strong></span>";;
    }

    i=0;
    console.log(i,coords[0][i]);
    idCoord = 'origin'+coords[0][i][0].toFixed(globals.params.precision)+"-"+coords[0][i][1].toFixed(globals.params.precision);
    originCircle = plotCircle(idCoord,10,colors[i],coords[0][i],.4) ;
    originCircleStack.push(originCircle);

    i=1;
    idCoord = 'origin'+coords[0][i][0].toFixed(globals.params.precision)+"-"+coords[0][i][1].toFixed(globals.params.precision);
    // highlight the 2nd point
    originCircle = plotCircle(idCoord,3,colors[i],coords[0][i],.4) ;
    originCircleStack.push(originCircle);


    i=2;
    idCoord = 'origin'+coords[0][i][0].toFixed(globals.params.precision)+"-"+coords[0][i][1].toFixed(globals.params.precision);
    // highlight the 2nd point
    originCircle = plotCircle(idCoord,3,colors[i],coords[0][i],.4) ;
    originCircleStack.push(originCircle);

    i=3;
    idCoord = 'origin'+coords[0][i][0].toFixed(globals.params.precision)+"-"+coords[0][i][1].toFixed(globals.params.precision);
    // highlight the 2nd point
    originCircle = plotCircle(idCoord,3,colors[i],coords[0][i],.4) ;
    originCircleStack.push(originCircle);

    i=4;
    idCoord = 'origin'+coords[0][i][0].toFixed(globals.params.precision)+"-"+coords[0][i][1].toFixed(globals.params.precision)+i;
    // highlight the 2nd point
    originCircle = plotCircle(idCoord,7,colors[i],coords[0][i],.4) ;
    originCircleStack.push(originCircle);


    // define rectangle geographical bounds
    i=5;
    var bounds = [  coords[0][i-2], 
                    coords[0][i-1], 
                    coords[0][i] 
                ] ;

    //if (l>4) {
    var withLatLng=true;
    for (i=0;i<l-1;i++) {
        if (i<=4) {
            withLatLng = false;
        }
        else {
            withLatLng = true;
        }
        bounds = createPolygon( coords[0][i], .000005);
        console.log("bounds", bounds);

        if (i<colors.length) {
            textColor = colors[i];
        }
        else {
            textColor = colors[colors.length-1];  // repeat the last color
        }
        console.log("i textColor",i,textColor,colors);

        addPolygon(coords[0][i], bounds, "test", .1, withLatLng, textColor,i);
    }

    return myHTML;
}
