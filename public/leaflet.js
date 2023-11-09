// create a variable for the map
var map = L.map('map').setView([51.975, 7.61], 13);

// add the base map
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Leaflet, OpenStreetMap Contributors',
maxZoom: 18}).addTo(map);



/**
 * Layer on which the User can draw a shape
 * @type Leaflet Layer
 */
let drawnItems = L.featureGroup().addTo(map);


// Adding a Leaflet.Draw Toolbar
map.addControl(new L.Control.Draw( {
    edit: {
        featureGroup: drawnItems,
        poly: {
            allowIntersection: false
        }
    },
    draw: {
    // Only rectangle and point draw function is needed
        polyline: false, 
        polygon: true,
        circle: false,
        circlemarker: false,
        marker: true,
        rectangle: false
    }
})) 
