var searchresults = [];
var markers = [];
var selectImage = {
      url: 'http://journeats.herokuapp.com/images/selected_pin.png',
      //scaledSize: new google.maps.Size(30, 47)
    };
var defaultImage = {
      url: 'http://journeats.herokuapp.com/images/unselected_pin.png',
      //scaledSize: new google.maps.Size(30, 30)
    };

journeats.service('Map', function($q, sharedProperties) {
    
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
    
    this.deleteAllMarkers(markers);

    for (var i = 0, place ; place = places[i]; i++) {
      this.marker = new google.maps.Marker({
        map: this.map,
        draggable: true,
        position: place.geometry.location,
        icon: defaultImage,
        animation: google.maps.Animation.DROP
      });
      markers.push(this.marker);
    }
    this.map.setCenter(places[0].geometry.location);
  };

  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
  });

  this.selectMarker = function(markerNumber) {
    //change icon to green
    markers[markerNumber].setIcon(selectImage);
    //recenter above (to account for the info window)
    var location = new google.maps.LatLng(searchresults[markerNumber].geometry.location.k-0.02,searchresults[markerNumber].geometry.location.D-0.02);

    this.map.setCenter(location);

  };

  this.unselectMarker = function(markerNumber) {
    markers[markerNumber].setIcon(defaultImage);
  };

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
  var previousPos = 99;



  $scope.selectMarker = function(result) {
    var pos = searchresults.map(function(e) { return e.id; }).indexOf(result.id);
    if(previousPos !== 99) {Map.unselectMarker(previousPos)};
    Map.selectMarker(pos);
    previousPos = pos;
  };

  $scope.unselectPreviousMarker = function() {
    Map.selectMarker(previousMarker);
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