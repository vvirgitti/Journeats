journeats.controller('searchResultsController', function($rootScope, $scope, sharedProperties) {

  $scope.selectedResult = function(object) {
    $scope.selectedObject = sharedProperties.getAllObjects().filter(function(item) {
      return (item === object);
    });
    $scope.togglePanelDisplay();
    sharedProperties.setSelectedObject($scope.selectedObject);
    sharedProperties.setSelectedName($scope.selectedObject[0].name);
    sharedProperties.setSelectedLongitude($scope.selectedObject[0].geometry.location.k);
    sharedProperties.setSelectedLatitude($scope.selectedObject[0].geometry.location.D);
    sharedProperties.setSelectedPrice($scope.selectedObject[0].price_level);
    sharedProperties.setSelectedScore($scope.selectedObject[0].rating);
  };

  $scope.togglePanelDisplay = function() {
    if($scope.selectedObject === sharedProperties.getSelectedObject()) {
      (sharedProperties.getBottomPanelDisplay() === true) ? sharedProperties.setBottomPanelDisplay(false) : sharedProperties.setBottomPanelDisplay(true);
    } else {
      sharedProperties.setBottomPanelDisplay(true);
    }
  };

  // $scope.convertPriceRange = function(number) {
  //   var dollarSigns = "";
  //   for (i = 0; i <= number; i++) {
  //     dollarSigns.push("$");
  //     console.log(dollarSigns);
  //   }
  //   return dollarSigns;
  // };

});
