journeats.controller('bottomPanelController', function($rootScope, $scope, sharedProperties, bottomPanelService) {

  $scope.init = function() {
    $scope.name = '';
    $scope.address = '';
  };

  $scope.images = [];
  $scope.panelDisplay = sharedProperties.getBottomPanelDisplay();
  
  $scope.random = function() {
    return 0.5 - Math.random();
  };

  $scope.getImages = function() {
    $scope.images = bottomPanelService.getPhotos();
  };

  $scope.retrieveDetails = function(object) {
    if(typeof sharedProperties.getSelectedName() === 'undefined') {
      $scope.init();
    } else {
      $scope.name = sharedProperties.getSelectedName();
      $scope.address = sharedProperties.getSelectedObject()[0].formatted_address;
      $scope.getImages();
      $scope.panelDisplay = sharedProperties.getBottomPanelDisplay();
      $scope.price = sharedProperties.getSelectedPrice();
      $scope.score = sharedProperties.getSelectedScore();
    }
  };

});