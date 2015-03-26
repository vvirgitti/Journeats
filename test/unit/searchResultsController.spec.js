describe('SearchResultsController', function() {
  beforeEach(module('Journeats'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller, sharedProperties) {
    scope = $rootScope.$new();
    ctrl = $controller('searchResultsController', {
        $scope: scope
    });
  }));

  var mockedObject = {name: "Ozone Coffee Roasters"};
  var testResult = sharedProperties.setProperty(mockedObject);

  it("returns an object with the name of the clicked search result", function() {
    scope.chosenResult(mockedObject);
    expect(scope.chosenObject).toEqual(mockedObject);
  });

});