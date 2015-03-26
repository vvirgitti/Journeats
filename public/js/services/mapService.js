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