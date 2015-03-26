
journeats.controller('InstagramController', function($scope, $http, $resource) {

  $scope.instagramImages = [];
  $scope.instagramLocations = [];


  $scope.getInstagramLocations = function() {

    // var currentResource = $resource('https://api.instagram.com/v1/locations/search?lat=51.524697313&lng=-0.086685888&access_token=1787504160.d00f606.0c71ab52ffce47ca99505405e19ae2ae&callback=JSON_CALLBACK',{}, {
    // query: {
    //   method: 'JSONP',
    //   isArray: false,
    // }});

    // currentResource.query(function(info) {
    //   console.log(info);
    //   $scope.instagramLocations = info;
    // });




    $http.jsonp('https://api.instagram.com/v1/locations/search?lat=51.524697313&lng=-0.086685888&access_token=1787504160.d00f606.0c71ab52ffce47ca99505405e19ae2ae&callback=JSON_CALLBACK')
    .then(function(response) {
      console.log(response.data);
      $scope.instagramLocations = response.data;

    });




  };

});