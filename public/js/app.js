var journeats = angular.module('Journeats', ['ngResource'])
.service('yelpProperties', function() {
  var businessID;

  return {
    getBusinessID: function() {
      return businessID;
    },
    setBusinessID: function(value) {
      businessID = value;
    },
  };
});
