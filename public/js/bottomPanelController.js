journeats.controller('bottomPanelController', function($rootScope, $scope, sharedProperties, bottomPanelService) {

  $scope.init = function() {
    $scope.name = '';
    $scope.address = '';
  };

$scope.images = [];

  $scope.getImages = function() {
    $scope.images = bottomPanelService.getPhotos();
  };

  



  console.log($scope.images);

  $scope.retrieveDetails = function(object) {
    if(typeof sharedProperties.getSelectedName() === 'undefined') {
      $scope.init();
    } else {
      $scope.name = sharedProperties.getSelectedName();
      $scope.address = sharedProperties.getSelectedObject()[0].formatted_address;
      $scope.getImages();
    }
  };

});