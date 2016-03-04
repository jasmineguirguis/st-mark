app.factory('feedsRequest', ['$http', '$q', function($http, $q){

  return {

    getFeeds: function(){
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: '/feeds'
      }).then(function successCallback(response) {
          deferred.resolve(response);
        }, function errorCallback(response) {
          deferred.reject(response);
        });

        return deferred.promise;
    }

  }

}])
