var journeats = angular.module('Journeats', ['ngResource', 'ngAutocomplete'])
  .service('sharedProperties', function () {
        var allObjects;
        var selectedObject;
        var selectedName;
        var selectedLongitude;
        var selectedLatitude;
        var bottomPanelDisplay = false;

        return {
            getAllObjects: function () {
                return allObjects;
            },
            setAllObjects: function(value) {
                allObjects = value;
            },

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
            },
            getBottomPanelDisplay: function() {
                return bottomPanelDisplay;
            },
            setBottomPanelDisplay: function(value) {
                bottomPanelDisplay = value;
            }
        };

    });

