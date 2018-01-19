var mapManager = (function() {
    var map;
    var bounds;
    var infowindow;
    var markers = [];
  
    return {
      init: function(options) {
        map = new google.maps.Map(options.element,
          { center: options.location, zoom: 11 });
        bounds = new google.maps.LatLngBounds();
        infowindow = new google.maps.InfoWindow();
        return this;
      },
      getMap: function() {
        return map;
      },
      getBounds: function() {
        return bounds;
      },
      getInfoWindow: function() {
        return infowindow;
      },
      setCenter: function(location) {
        map.setCenter(location);
      },
      getCenter: function(location) {
        return map.getCenter();
      },
      addMarker: function(location, infoContent, isCurrentLocation) {
        var marker_options = {
          map: map,
          position: location
        }
        if (isCurrentLocation) {
          marker_options.icon = {
            path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
            scale: 5,
            strokeColor: "#33C3F0"
          }
        }
        var marker = new google.maps.Marker(marker_options);
        bounds.extend(marker.position);
        map.fitBounds(mapManager.getBounds());
        this.addInfoWindow(marker, infoContent);
        if (!isCurrentLocation) markers.push(marker);
      },
      addInfoWindow(marker, content) {
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(content);
          infowindow.open(map, this);
        });
      },
      showMarkers: function(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      },
      removeAllMarkers: function() {
        this.showMarkers(null);
        markers = []
      },
      getInfoContent: function(place) {
        var origin = userManager.getLocation().lat + ',' + userManager.getLocation().lng;
        var destination = place.formatted_address + ' ' + place.name
        var mapsDirUrl = 'https://www.google.co.jp/maps/dir/' +
          origin + '/' + destination;
        var visits = restaurantManager.getVisitCount(place.place_id);
  
        return '<div class="content" style="min-width:22em;">' +
        '<h5>' + place.name + '</h5>' +
        '<b>Ratings: </b>' + (place.rating || '-') + '<br>' +
         '<b>Place visits: </b>' + (visits || '-') + '<br>' +
          '<br><p>' +
            '<a target="_blank" href="'+ place.url +'">View Restaurant Details</a> <br>' +
            '<a onclick="placeVisited(' + "\'" + place.place_id + "\'" + ')" target="_blank" href="'+ mapsDirUrl +'">Get Directions</a>' +
          '</p>'
        '</div>';
      },
      showPlaces: function(location, searchBy, query) {
        var options = {
          searchBy: searchBy,
          location: location,
          query: query
        }
        placeServiceMgr.search(options, this.placeResultsHandler);
      },
      placeResultsHandler: function(results, status) {
        if (results && !results.length) {
          notificationManager.showNotification('No results found in that area. Please select again.', 3000)
        }
  
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          mapManager.removeAllMarkers(null);
          for (var i = 0; i < results.length; i++) {
            placeServiceMgr.getPlace(results[i].place_id, mapManager.placeDetailsResultHandler);
          }
        }
        if (status === 'UNKNOWN_ERROR') {
          document.dispatchEvent(new Event('offline'));
        }
      },
      placeDetailsResultHandler: function(place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          restaurantManager.addRestaurant(place);
          mapManager.addMarker(place.geometry.location, mapManager.getInfoContent(place));
        }
        if (status === 'UNKNOWN_ERROR') {
          document.dispatchEvent(new Event('offline'));
        }
      }
    }
  })();