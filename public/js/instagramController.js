
journeats.controller('InstagramController', function($scope, $http, $resource, sharedProperties, instagramProperties, instagramPhotos) {

  var accessToken = 'access_token=1787504160.d00f606.0c71ab52ffce47ca99505405e19ae2ae';

  $scope.getInstagramLocations = function() {

    var searchTerm = sharedProperties.getSelectedName();
    var latitude = sharedProperties.getSelectedLongitude();
    var longitude = sharedProperties.getSelectedLatitude();
    var url = 'https://api.instagram.com/v1/locations/search?lat='+latitude+'&lng='+longitude+'&'+accessToken+'&callback=JSON_CALLBACK';

    $http.jsonp(url)
      .then(function(response) {
      $scope.instagramLocations = response.data.data.filter(function(item) {
        return (item.name.indexOf(searchTerm) > -1);
      });
      instagramProperties.setInstagramID($scope.instagramLocations[0].id);
      $scope.getInstagramPhotos();
    }).then

  };

  $scope.getInstagramPhotos = function() {
    var instagramID = instagramProperties.getInstagramID();
    var url2 = 'https://api.instagram.com/v1/locations/'+instagramID+'/media/recent?'+accessToken+'&callback=JSON_CALLBACK';
    var pictures = [];
    $http.jsonp(url2)
      .then(function(response) {
        for (i = 0; i < response.data.data.length; i++) {
          pictures.push(response.data.data[i].images.low_resolution.url)
        }
        instagramPhotos.setPhotos(pictures);

        console.log(instagramPhotos.getPhotos());
      });


  };



  // $scope.getlocationslist = function() {
  //   $scope.getInstagramLocations();
  //   // console.log($scope.instagramLocations);
  //   $scope.instagramLocationList = $scope.instagramLocations.data.filter(function(item) {
  //     return (item.name.indexOf(searchTerm) > -1);
  //   })
  // };

});