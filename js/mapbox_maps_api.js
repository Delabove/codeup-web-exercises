console.log("token: " + mapBoxToken);

mapboxgl.accessToken = mapBoxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 5,
    center: [-96.785530, 32.782990],
});

var markerOptions = {
    color: "pink",
    draggable: true
};
var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-96.785530, 32.782990])
    .addTo(map);

geocode("2615 Commerce St., Dallas, TX 75226", mapBoxToken).then(function(result) {
    console.log(result);
    map.setCenter[-96.785530, 32.782990];
    map.setZoom(18);
});

var popup = new mapboxgl.Popup()
    .setHTML ("<h1>Love Twisted Root!</h1>")
    .addTo(map);

marker.setPopup(popup);
var popupFavRest = new mapboxgl.Popup()
    .addTo(map);