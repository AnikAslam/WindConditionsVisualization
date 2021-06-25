var mymap = L.map('mapid').setView([12.8901307, 2.424668], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW5pa2FzbGFtIiwiYSI6ImNrcTlpZ3J0bzAzZXgydGw5a2lnaTlxOXoifQ.OovZFL4WqgfdElRcHTIC1Q', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

var marker1 = L.marker([43.5398079, 10]).addTo(mymap);
var marker2 = L.marker([-11.7009062, 43]).addTo(mymap);
var marker3 = L.marker([-23.9715768, -46.2970715]).addTo(mymap);

marker1.bindPopup("<b>Livourne Italy</b><br>").openPopup();
marker2.bindPopup("<b>Moroni Comorres</b><br>").openPopup();
marker3.bindPopup("<b>Santos Brazil</b><br>").openPopup();