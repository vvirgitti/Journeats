var searchresults = [];

journeats.service('Map', function($q, sharedProperties) {

  var markers = [];
  var image = {
      url: 'http://www.clker.com/cliparts/n/T/j/m/1/z/map-pin-green-md.png',
      scaledSize: new google.maps.Size(30, 47)
    };
    
  this.init = function() {
    var options = {
      center: new google.maps.LatLng(51.50722, -0.12750),
      zoom: 13,
      disableDefaultUI: true,
      country: 'GB',
      mapTypeId: google.maps.MapTypeId.ROADMAP    
    };
    this.map = new google.maps.Map(
      document.getElementById("map"), options
    );
    this.places = new google.maps.places.PlacesService(this.map);
  };
  
  this.search = function(str) {
    var d = $q.defer();
    this.places.textSearch({query: str}, function(results, status) {
      if (status == 'OK') {
        d.resolve(results);
        searchresults = results;
      }
      else d.reject(status);
    });
      return d.promise;
  };
  
 
  this.addMarkers = function(places) {
    

    console.log("here are the markers:"+markers);

    this.deleteAllMarkers(markers);

    for (var i = 0, place ; place = places[i]; i++) {
      this.marker = new google.maps.Marker({
        map: this.map,
        draggable: true,
        position: place.geometry.location,
        animation: google.maps.Animation.DROP
      });
      console.log(place.icon);
      markers.push(this.marker);
    }
    markers[0].setIcon(image);
    this.map.setCenter(places[0].geometry.location);
  };

  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
  });

  this.deleteAllMarkers = function(markers) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
    markers = [];
  };

  //pos = searchresults.map(function(e) { return e.name; }).indexOf(selectedObject.name)

  // this.selectMarker = function(object) {
  //   pos = searchresults.map(function(e) { return e.name; }).indexOf(seletedObject.name)
  // };

});

journeats.controller('journeatsCtrl', function($scope, Map, sharedProperties) {
  $scope.searchQuery = [];
  $scope.place = {};
  selected = []

  test = function() {
  if(sharedProperties.getSelectedObject()) {selected = sharedProperties.getSelectedObject()}
};


  $scope.search = function() {
    $scope.apiError = false;
    Map.search($scope.searchPlace)
    .then(
      function(places) { // success
        Map.addMarkers(places);
        $scope.searchQuery = searchresults;
        sharedProperties.setAllObjects($scope.searchQuery);
      },
      function(status) { // error
        $scope.apiError = true;
        $scope.apiStatus = status;
      }
    );
  };
  
  Map.init();
});