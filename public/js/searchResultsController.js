journeats.controller('searchResultsController', function($rootScope, $scope, sharedProperties) {

  $scope.chosenResult = function(object) {
    $scope.chosenObject = sharedProperties.getProperty().filter(function(item) {
      return (item === object);
    });
    console.log($scope.chosenObject);
  };

});
