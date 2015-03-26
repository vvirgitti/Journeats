searchresults = [];

journeats.service('Map', function($q) {
    
  this.init = function() {
    var options = {
      center: new google.maps.LatLng(51.50722, -0.12750),
      zoom: 13,
      disableDefaultUI: true,
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
        d.resolve(results[0]);
        searchresults = results;
      }
      else d.reject(status);
    });
      return d.promise;
  };
  
  this.addMarker = function(res) {
    if(this.marker) this.marker.setMap(null);
    this.marker = new google.maps.Marker({
      map: this.map,
      position: res.geometry.location,
      animation: google.maps.Animation.DROP
    });
    this.map.setCenter(res.geometry.location);
  };

  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
  });

    
});

journeats.controller('journeatsCtrl', function($scope, Map, sharedProperties) {
  $scope.searchQuery = [];
  $scope.place = {};
    
  $scope.search = function() {
    $scope.apiError = false;
    Map.search($scope.searchPlace)
    .then(
      function(res) { // success
        Map.addMarker(res);
        $scope.place.name = res.name;
        $scope.place.lat = res.geometry.location.lat();
        $scope.place.lng = res.geometry.location.lng();
        $scope.searchQuery = searchresults;
        sharedProperties.setSelectedObject($scope.searchQuery);
      },
      function(status) { // error
        $scope.apiError = true;
        $scope.apiStatus = status;
      }
    );
  };
  
  Map.init();
});