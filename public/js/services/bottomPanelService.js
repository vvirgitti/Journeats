journeats.service('bottomPanelService', function() {
    var instagramPhotos;

    return {
      getPhotos: function () {
          return instagramPhotos;
      },
      setPhotos: function(value) {
          instagramPhotos = value;
      }
    };

});