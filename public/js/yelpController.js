function randomString(length, chars) {
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
  return result;
}

journeats.controller('YelpCtrl', ['$scope', 'yelp', function($scope, yelp) {
  $scope.businesses = [];

  $scope.requestYelpID = function() {

    yelp.retrieveYelp(function(data) {
      $scope.businesses = data.businesses;
        // $scope.setYelpBusiness();
        console.log(data);
      });

  }

  // $scope.getYelpInfo = function() {
  //   var ID = yelpProperties.getBusinessID()[0].id;
  //   yelpsearch.retrieveYelp2(ID,function(data){
  //     console.log(data);
  //   });
  // }

    $scope.setYelpBusiness = function() {
      yelpProperties.setBusinessID($scope.businesses);
      console.log(yelpProperties.getBusinessID()[0].id);
    };


}]).factory("yelp", function($http) {
  return {
  "retrieveYelp": function(callback) {
    var method = 'GET';
    var url = 'http://api.yelp.com/v2/search';
    var params = {
      term: 'ozone+coffee',
      ll: '51.524697313,-0.086685888',
      callback: 'angular.callbacks._0',
      oauth_consumer_key: auth_consumer_key.consumerKey,
      oauth_token: auth_token.accessToken,
      oauth_signature_method: "HMAC-SHA1",
      oauth_timestamp: new Date().getTime(),
      oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
    };
    var term = {
      term: 'ozone+coffee'
    };
    var ll = {
      ll: '51.524697313,-0.086685888'
    } ;
    var consumerSecret = authConsumer.consumerSecret;
    var tokenSecret = authToken.tokenSecret;

      var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
      params['oauth_signature'] = signature;
      $http.jsonp(url, {params: params}).success(callback);
    }
  };

});

// journeats.factory("yelpsearch", function($http) {
//   return {
//   "retrieveYelp2": function(yelpID, callback) {
//     var method = 'GET';
//     var url = 'http://api.yelp.com/v2/business/'+yelpID;
//     var params = {
//       callback: 'angular.callbacks._0',
//       oauth_consumer_key: auth_consumer_key.consumerKey,
//       oauth_token: auth_token.accessToken,
//       oauth_signature_method: "HMAC-SHA1",
//       oauth_timestamp: new Date().getTime(),
//       oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
//     };
//
//     var consumerSecret = authConsumer.consumerSecret;
//     var tokenSecret = authToken.tokenSecret;
//
//       var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
//       params['oauth_signature'] = signature;
//       var test = $http.jsonp(url, {params: params}).success(callback);
//
//     }
//   }
// });
