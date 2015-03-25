journeats.controller('SearchResultsController', function($scope) {
  
  var searchResultsArray = [];
  
  searchResultsArray = [
    {name: "Starbucks", priceRange: "$", aggregateScore: "86%"},
    {name: "Costa Coffee", priceRange: "$$", aggregateScore: "84%"},
    {name: "Ozone Coffee", priceRange: "$$$", aggregateScore: "72%"}
  ];

  $scope.searchResults = searchResultsArray;

});