
// Define global variables for map and marker
let map, marker;

function initMap() {
    // Initialize the map centered at a specific location
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 18.795291496127227, lng: 98.98670081181008 },
        zoom: 15
    });

    

    // Load GeoJSON data and display pins on the map
    loadPinsFromGeoJSON();

}

function isRouteCreationStarted() {
    // Implement this function to check if route creation is started (e.g., based on button click)
    // Return true if route creation is started, otherwise return false.
    return true;
}

function placeMarker(latLng) {
    // Remove existing marker (if any)
    if (marker) {
        marker.setMap(null);
    }

    // Create a new marker
    marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
}

function loadPinsFromGeoJSON() {
    // Fetch the GeoJSON data
    fetch('/static/data/RoadSafety_pin.geojson')
        .then(response => response.json())
        .then(data => {
            // Process the GeoJSON data to create and display markers on the map
            const pins = data.features;
            pins.forEach(pin => {
                const latLng = pin.geometry.coordinates;
                const marker = new google.maps.Marker({
                    position: { lat: latLng[1], lng: latLng[0] },
                    map: map
                });
            });
        })
        .catch(error => console.error('Error fetching GeoJSON data:', error));
}


// Implement other JavaScript functions for handling UI interactions, such as starting/stopping route creation
// and capturing user inputs and ratings.
