var size = 0;
var placement = 'point';

var style_IllustratedHerbal_6 = function(feature, resolution) {
    var context = {
        feature: feature,
        variables: {}
    };
    var value = "";
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';

    if ("" !== null) {
        labelText = String("");
    }

    // Dynamic radius calculation based on map resolution (zoom level)
    // Starts at 2 when zoomed out and grows progressively as you zoom in.
    var pointRadius = 2; // Default starting size (zoomed out)

    if (resolution < 0.5) {        // Zoomed in extremely close
        pointRadius = 22;
    } else if (resolution < 1.2) { // Zoomed in very close
        pointRadius = 16;
    } else if (resolution < 2.5) { // Medium close zoom
        pointRadius = 10;
    } else if (resolution < 5) {   // Medium zoom
        pointRadius = 6;
    } else if (resolution < 10) {  // Zooming out
        pointRadius = 3.5;
    } else {                       // Fully zoomed out (city overview)
        pointRadius = 2;
    }

    var style = [ new ol.style.Style({
        image: new ol.style.Circle({
            radius: pointRadius,
            stroke: null, // No border around the point
            fill: new ol.style.Fill({
                color: 'rgba(124,168,157,1.0)' // Solid green fill
            })
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};