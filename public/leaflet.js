// create a variable for the map
var map = L.map('map').setView([51.975, 7.61], 12);

// add the base map
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Leaflet, OpenStreetMap Contributors',
maxZoom: 18}).addTo(map);

// Add Leaflet.draw-Plugin
// Layer on which the User can draw a shape
var drawnFeatures = new L.FeatureGroup();
map.addLayer(drawnFeatures);

// Adding a Leaflet.Draw Toolbar
map.addControl(new L.Control.Draw( {
    edit: {featureGroup: drawnFeatures},
    // Only rectangle and point draw function is needed
    draw: {
        polyline: false, 
        polygon: true,
        circle: false,
        circlemarker: false,
        marker: true,
        rectangle: false
    }
})) 

// Event-Handler for drawing polygons
map.on("draw:created", function(event){
    var layer = event.layer;
    drawnFeatures.addLayer(layer);
})

// show the scale bar on the lower left corner
L.control.scale({imperial: true, metric: true}).addTo(map);

// show a marker on the map
L.marker({lon: 7.6258, lat: 51.9625}).bindPopup('Münster').addTo(map);

// Koordinaten für das Polygon
var Naturschutzgebiet_1_Coords = [
    [52.01340138770027,7.637725446349549],
    [52.01345321595235,7.651863664385303],
    [52.01155618224627,7.654316696410888],
    [52.015803236177874,7.659005337798021],
    [52.01555948947012,7.661291846143939],
    [52.02165062857242,7.664069127520179],
    [52.02312868841304,7.663546283323953],
    [52.0250545914906,7.660846407994114],
    [52.03250398405575,7.653126837899862],
    [52.0356347392523,7.6556133934891335],
    [52.03652983549144,7.6526234740932395],
    [52.03951089715733,7.647887553969923],
    [52.041673846199615,7.646668291106408],
    [52.04600505728007,7.647505509268385],
    [52.04599515522432,7.642387136093497],
    [52.047627573289276,7.642280497164489],
    [52.0478082032152,7.6402962322672465],
    [52.045695184423295,7.637145026086046],
    [52.044910201752145,7.632016824095274],
    [52.037481369330095,7.638119758528887],
    [52.03571868157729,7.639464289682085],
    [52.03552193976387,7.638691639810311],
    [52.03255650548502,7.639504886450155],
    [52.0297518238132,7.642343440829876],
    [52.025302878172596,7.641599972268352],
    [52.022184166415,7.643467220876772],
    [52.020567561826226,7.645688911570119],
    [52.01340138770027,7.637725446349549,]
  ];

// Koordinaten für das Polygon
var Naturschutzgebiet_2_Coords = [
    [51.91775468011119,7.737237548633999],
    [51.91443145681694,7.739445015758179],
    [51.913415978416054,7.730989294233467],
    [51.903000051967325,7.735522106680094],
    [51.899306353137376,7.746559442297865],
    [51.89771335178963,7.757821266096755],
    [51.90092238374481,7.760066147917456],
    [51.907085852485665,7.757709022005486],
    [51.911609808130606,7.75602536064099],
    [51.91331771205057,7.746334949644819],
    [51.915833292481864,7.746035632069095],
    [51.91731026486599,7.741695527215455],
    [51.91775468011119,7.737237548633999] 
];
// Erstelle ein Polygon mit Popup
var Rieselfelder_Poly = L.polygon(Naturschutzgebiet_1_Coords).addTo(map);
Rieselfelder_Poly.bindPopup("Rieselfelder");

// Erstelle ein Polygon mit Popup
var Wolbecker_Poly = L.polygon(Naturschutzgebiet_2_Coords).addTo(map);
Wolbecker_Poly.bindPopup("Wolbecker Tiergarten");