console.log("token: " + mapBoxToken);

mapboxgl.accessToken = mapBoxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9'
});

geocode("2615 Commerce St., Dallas, TX 75226", mapBoxToken).then(function(result) {
    console.log(result);
    map.setCenter(result);
    map.setZoom(20);
})