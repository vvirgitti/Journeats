function randomString(length, chars) {
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
  return result;
}

journeats.controller('YelpSearchCtrl', ['$scope', 'yelpsearch', 'yelpProperties', function($scope, yelpsearch, yelpProperties) {
  $scope.details = [];
  yelpsearch.retrieveYelp2('', function(info) {
    $scope.details = info.details;
    var yelpID = yelpProperties.getBusinessID();
    //   console.log(yelpID);
    //   console.log($scope.details);
      console.log(yelpProperties.getBusinessID());
  });

}]).factory("yelpsearch", function($http) {
  return {
  "retrieveYelp2": function(name, callback) {
    var method = 'GET';
    var callAPI = 'ozone-coffee-london';
    var url = 'http://api.yelp.com/v2/business/'+callAPI;
    var params = {
      callback: 'angular.callbacks._0',
      oauth_consumer_key: auth_consumer_key.consumerKey,
      oauth_token: auth_token.accessToken,
      oauth_signature_method: "HMAC-SHA1",
      oauth_timestamp: new Date().getTime(),
      oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
    };

    var consumerSecret = authConsumer.consumerSecret;
    var tokenSecret = authToken.tokenSecret;

      var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
      params['oauth_signature'] = signature;
      $http.jsonp(url, {params: params}).success(callback);
    }
  }
});
