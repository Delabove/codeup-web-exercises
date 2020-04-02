console.log("token: " + mapBoxToken);

mapboxgl.accessToken = mapBoxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 5,
    center: [-96.785530, 32.782990],
});

geocode("2615 Commerce St., Dallas, TX 75226", mapBoxToken).then(function(result) {
    console.log(result);
    map.setCenter[-96.785530, 32.782990];
    map.setZoom(18);
})
