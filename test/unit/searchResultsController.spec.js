describe('SearchResultsController', function() {
  beforeEach(module('Journeats'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('searchResultsController', {
        $scope: scope
    });
  }));

  it("returns an object with the name of the clicked search result", function() {
    var mockedObject = {name: "Ozone Coffee Roasters"};
    scope.chosenResult(mockedObject);
    expect(scope.chosenObject).toEqual(mockedObject);
  });

});