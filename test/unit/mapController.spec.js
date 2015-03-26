describe('searchResultsController', function() {

  beforeEach(module('Journeats'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('journeatsCtrl', {
        $scope: scope
    });
  }));

  xit("has no search results when initialized", function() {
    expect(scope.searchQuery.length).toEqual(0);
  });

  xit("can receive a list of search results", function() {
    scope.receiveResults();
    expect(scope.searchResults.length).toEqual(3);
  });


  xit("returns an object with the name of the clicked search result", function() {
    
  });

});