describe('SearchResultsController', function() {
  beforeEach(module('Journeats'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('SearchResultsController', {
        $scope: scope
    });
  }));

  xit("has no search results when initialized", function() {
    expect(scope.searchResults.length).toEqual(0);
  });

  xit("can receive a list of search results", function() {
    scope.receiveResults();
    expect(scope.searchResults.length).toEqual(3);
  });

});