console.log("token: " + mapBoxToken);

mapboxgl.accessToken = mapBoxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-96.796989, 32.776665],

});

map.setZoom(10);

geocode("2615 Commerce St., Dallas, TX 75226", mapBoxToken).then (function(coordinates) {
    var marker = new mapboxgl.Marker()
        .setLngLat([-96.785530, 32.782990])
        .addTo(map);

    var popup = new mapboxgl.Popup()
        .setHTML ("<h1>Love Twisted Root!</h1>")

    marker.setPopup(popup);

});



var favRest = ["Cane Rosso", "Nori Handroll Bar", "Nola Brasserie"];
console.log(favRest.length);

var favRest = [
    {
        rest1: "Cane Rosso",
        type: "Pizza",
        coordinates: [-96.764700, 32.991530],
        address: "2612 Commerce St. Dallas, Tx 75226"
    },
    {
        rest2: "Nori Handroll Bar",
        type: "Sushi",
        coordinates: [-96.764700, 32.991530],
        address: "2814 Elm St. Dallas, Tx 75226"
    },

    {
        rest2: "Nola Brasserie",
        type: "Louisiana Cuisine",
        coordinates: [-96.764700, 32.991530],
        address: "1201 Main St, Ste S100 Dallas, Texas 75202"
    }
];


favRest.forEach(function (restaurant) {
    console.log(restaurant);

});