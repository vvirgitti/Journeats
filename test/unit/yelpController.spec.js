describe('yelpController', function() {
  beforeEach(module("Journeats"));
  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('YelpCtrl', {
      $scope: scope
      });
  }));

  describe('when searching for a place', function() {

    var httpBackend;
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend
      httpBackend
        .when("GET", "http://api.yelp.com/v2/search")
        .respond(
          {items: items}
        );
    }));

    var items = [
      {
        "id": "ozone-coffee-london",
        "name": "Ozone Coffee",
        "rating": 4.5,
      },
    ];

    it('displays the details of a result', function() {
      expect(scope.businesses).toEqual(items);
    });

  });

});
