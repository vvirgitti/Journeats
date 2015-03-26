journeats.controller('searchResultsController', function($rootScope, $scope, sharedProperties) {

  $scope.chosenResult = function(object) {
    $scope.chosenObject = sharedProperties.getProperty();
    
  };

});
