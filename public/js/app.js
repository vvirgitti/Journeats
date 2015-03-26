var journeats = angular.module('Journeats', ['ngResource', 'ngAutocomplete'])
  .service('sharedProperties', function () {
        var selectedObject;
        var selectedName;
        var selectedLongitude;
        var selectedLatitude;

        return {
            getSelectedObject: function () {
                return selectedObject;
            },
            setSelectedObject: function(value) {
                selectedObject = value;
            },

            getSelectedName: function () {
                return selectedName;
            },
            setSelectedName: function(value) {
                selectedName = value;
            },

            getSelectedLongitude: function () {
                return selectedLongitude;
            },
            setSelectedLongitude: function(value) {
                selectedLongitude = value;
            },

            getSelectedLatitude: function () {
                return selectedLatitude;
            },
            setSelectedLatitude: function(value) {
                selectedLatitude = value;
            }
        };

    });

