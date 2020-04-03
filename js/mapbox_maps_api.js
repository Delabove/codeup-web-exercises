console.log("token: " + mapBoxToken);

mapboxgl.accessToken = mapBoxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-96.796989, 32.776665],

});

map.setZoom(10);

var restaurantArray = [
    {
        popupHTML: "Cane Rosso",
        type: "Pizza",
        coordinates: [-96.764700, 32.991530],
        address: "2612 Commerce St. Dallas, Tx 75226"
    },
    {
        popupHTML: "Nori Handroll Bar",
        type: "Sushi",
        coordinates: [-96.764700, 32.991530],
        address: "2814 Elm St. Dallas, Tx 75226"
    },

    {
        popupHTML: "Nola Brasserie",
        type: "Louisiana Cuisine",
        coordinates: [-96.764700, 32.991530],
        address: "1201 Main St, Ste S100 Dallas, Texas 75202"
    }
];


    restaurantArray.forEach(function (restaurant) {
    console.log(restaurant);

    geocode(restaurantArray.address, mapBoxToken).then (function(coordinates) {
    var marker = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);

    var popup = new mapboxgl.Popup()
        .setHTML (restaurant.popupHTML)

    marker.setPopup(popup)
});
});
