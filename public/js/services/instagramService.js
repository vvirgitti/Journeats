journeats.service('instagramProperties', function() {
    var instagramID;

    return {
      getInstagramID: function () {
          return instagramID;
      },
      setInstagramID: function(value) {
          instagramID = value;
      }
    };

});