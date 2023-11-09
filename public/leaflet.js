// create a variable for the map
var map = L.map('map').setView([51.975, 7.61], 13);

// add the base map
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Leaflet, OpenStreetMap Contributors',
maxZoom: 18}).addTo(map);
        