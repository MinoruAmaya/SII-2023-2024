// create a variable for the map
var map = L.map('map').setView([51.975, 7.61], 7);

// add the base map
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 18,
attribution: 'Leaflet, OpenStreetMap Contributors',
}).addTo(map);
        