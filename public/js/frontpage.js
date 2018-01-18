
var locations = [{
    lat: -31.563910,
    lng: 147.154312
}]
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: {
            lat: -28.024,
            lng: 140.887
        }
    });
    // Create an array of alphabetical characters used to label the markers.
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
// if ($('#userSearch').val().trim().length > 0)
//     $('#userSearch').removeAttr('disabled');
// else
//     $('#userSearch').attr('disabled', 'disabled');

// $('#submitBtn').on('click', function imputSearch() {
//     var userSearch = $('#searchBar').val().trim()
//     console.log(userSearch);
// });


// Array.prototype.map = function(callback){
//     var emptyArray = [];
//     for(var i = 0; i < this.length; i++){
//         emptyArray.push(callback(this[i], i, this))
//     }
//     return emptyArray;
// }
$("#signIn").on('click', function(event) {
    event.preventDefault();

    var email = $('#signInEmail').val().trim()
    var password = $('#signInPassword').val().trim()
    var userInfo = {
        email: email,
        password: password
    }
    console.log(userInfo)
    $.post("/api/login", userInfo).then(function (response) {
        console.log(response)
    })
})