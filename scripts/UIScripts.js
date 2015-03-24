// The latitude and longitude of your business / place
var position = [51.513977, -0.105572];
 
function showGoogleMaps() {
 
    var latLng = new google.maps.LatLng(position[0], position[1]);
 
    var mapOptions = {
        zoom: 13, // initialize zoom level - the max value is 21
        streetViewControl: false, // hide the yellow Street View pegman
        scaleControl: true, // allow users to zoom the Google Map
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latLng,
        zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT
        },
        panControlOptions: {
          position: google.maps.ControlPosition.RIGHT
        }
    };
 
    map = new google.maps.Map(document.getElementById('googlemaps'),
        mapOptions);
}
 
google.maps.event.addDomListener(window, 'load', showGoogleMaps);