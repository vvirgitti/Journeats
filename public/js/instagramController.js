
journeats.controller('InstagramController', function($scope, $http, $resource, sharedProperties, instagramProperties) {

  $scope.getInstagramLocations = function() {

    var searchTerm = sharedProperties.getSelectedName();
    var latitude = sharedProperties.getSelectedLongitude();
    var longitude = sharedProperties.getSelectedLatitude();
    var url = 'https://api.instagram.com/v1/locations/search?lat='+latitude+'&lng='+longitude+'&access_token=1787504160.d00f606.0c71ab52ffce47ca99505405e19ae2ae&callback=JSON_CALLBACK';

    $http.jsonp(url)
      .then(function(response) {
      $scope.instagramLocations = response.data.data.filter(function(item) {
        return (item.name.indexOf(searchTerm) > -1);
      });
      instagramProperties.setInstagramID($scope.instagramLocations[0].id);
      console.log(instagramProperties.getInstagramID());
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