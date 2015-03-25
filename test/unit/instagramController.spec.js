describe('InstagramController',function() {
  beforeEach(module('Journeats'));

  var scope, ctrl;
  var latitude = '51525697313';
  var longitude ='-0.086685888';

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('InstagramController', {
      $scope: scope
    });
  }));

  it('has no images on initialisation', function() {
    expect(scope.instagramImages.length).toEqual(0);
  });

  it('returns a list of locations given a latitude and logitude', function() {
    var httpBackend;
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend
      httpBackend
        .when("JSONP", 'https://api.instagram.com/v1/locations/search?callback=JSON_CALLBACK&lat=51.524697313&lng=-0.086685888&access_token=1787504160.d00f606.0c71ab52ffce47ca99505405e19ae2ae')
        .respond(InstagramAPILocationReturn);
    }));
    scope.latitude = latitude;
    scope.longitude = longitude;
    var InstagramAPILocationReturn = [
      {
      latitude: 51.524697313,
      id: "312913532",
      longitude: -0.086685888,
      name: "Pure Evil Gallery"
      },
      {
      latitude: 51.524697313,
      id: "311195009",
      longitude: -0.086685888,
      name: "Thread"
      },
      {
      latitude: 51.524697313,
      id: "614869637",
      longitude: -0.086685888,
      name: "Ozone Coffee Roasters London"
      },
      {
      latitude: 51.524697313,
      id: "9952604",
      longitude: -0.086685888,
      name: "Ozone Coffee Roasters London"
      },
      {
      latitude: 51.524697313,
      id: "293075233",
      longitude: -0.086685888,
      name: "Book Club"
      },
      {
      latitude: 51.524658097,
      id: "348259229",
      longitude: -0.086690133,
      name: "Ozone Cafe"
      },
      {
      latitude: 51.524624985,
      id: "636915318",
      longitude: -0.086823685,
      name: "Ozone Cafe, Shoreditch"
      },
      {
      latitude: 51.524564,
      id: "404855987",
      longitude: -0.086601,
      name: "Atrium ltd."
      },
      {
      latitude: 51.524500573,
      id: "591905501",
      longitude: -0.086784904,
      name: "Telecity Oliver's Yard"
      },
      {
      latitude: 51.524615,
      id: "3367467",
      longitude: -0.086993,
      name: "GRAB Thai Street Kitchen"
      },
      {
      latitude: 51.524829513,
      id: "185168390",
      longitude: -0.08702789,
      name: "Cool Apartment"
      },
      {
      latitude: 51.524968042,
      id: "103196533",
      longitude: -0.086831183,
      name: "B P S London Office"
      },
      {
      latitude: 51.524721359,
      id: "18102994",
      longitude: -0.087158386,
      name: "City Arts & Music Project (basement)"
      },
      {
      latitude: 51.524943348,
      id: "297782309",
      longitude: -0.086412739,
      name: "24 Leonard Street"
      },
      {
      latitude: 51.524885962,
      id: "490496340",
      longitude: -0.087062506,
      name: "Phoenix BC"
      },
      {
      latitude: 51.524497054,
      id: "430383684",
      longitude: -0.086310177,
      name: "24 Leonard Street, Ec2a4by"
      },
      {
      latitude: 51.524901222,
      id: "429212037",
      longitude: -0.087057925,
      name: "TransferWise HQ"
      },
      {
      latitude: 51.524901222,
      id: "647374503",
      longitude: -0.087057925,
      name: "5cc Singer Tavern"
      },
      {
      latitude: 51.524901222,
      id: "427991367",
      longitude: -0.087057925,
      name: "Eat"
      },
      {
      latitude: 51.524901222,
      id: "297090555",
      longitude: -0.087057925,
      name: "Bèzier Apartment"
      }
      ];
    scope.getInstagramLocations();
    scope.$apply();
    httpBackend.flush();
    expect($scope.instagramLocations).toEqual(InstagramAPILocationReturn);
  });



});