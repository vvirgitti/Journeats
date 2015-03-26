journeats.controller('searchResultsController', function($rootScope, $scope, sharedProperties) {

  $scope.selectedResult = function(object) {
    $scope.selectedObject = sharedProperties.getSelectedObject().filter(function(item) {
      return (item === object);
    });
    sharedProperties.setSelectedName($scope.selectedObject[0].name);
    sharedProperties.setSelectedLongitude($scope.selectedObject[0].geometry.location.k);
    sharedProperties.setSelectedLatitude($scope.selectedObject[0].geometry.location.D);
    console.log($scope.selectedObject);
    console.log(sharedProperties.getSelectedLongitude());
  };

});
