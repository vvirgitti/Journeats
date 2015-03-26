describe('SearchResultsController', function() {
  beforeEach(module('Journeats'));

  var scope, ctrl, service;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('searchResultsController', {
        $scope: scope
    });
  }));

  var mockedObject = {name: "Ozone Coffee Roasters"};


  it("returns an object with the name of the clicked search result", function() {
    scope.selectedResult(mockedObject);
    expect(scope.selectedObjectName).toEqual("Ozone Coffee Roasters");
  });

});