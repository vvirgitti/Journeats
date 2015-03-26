journeats.controller('bottomPanelController', function($rootScope, $scope, sharedProperties) {

  $scope.init = function() {
    $scope.name = '';
    $scope.address = '';
  };


  $scope.retrieveDetails = function(object) {
    if(typeof sharedProperties.getSelectedName() === 'undefined') {
      $scope.init();
    } else {
      $scope.name = sharedProperties.getSelectedName();
      $scope.address = sharedProperties.getSelectedObject()[0].formatted_address;
    }
  };

});