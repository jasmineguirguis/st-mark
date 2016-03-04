app.factory('userRequest', ['$http', '$q', function($http, $q){

  return {
    register: function(user){
      var deferred = $q.defer();
      $http({
        method: 'POST',
        url: '/user/register',
        data: user
      }).then(function successCallback(response) {
          deferred.resolve(response);
        }, function errorCallback(response) {
          deferred.reject(response);
        });

        return deferred.promise;
    },

    login: function(user){
      var deferred = $q.defer();
      $http({
        method: 'POST',
        url: '/user/login',
        data: user
      }).then(function successCallback(response) {
          deferred.resolve(response);
        }, function errorCallback(response) {
          deferred.reject(response);
        });

        return deferred.promise;
    },

    logout: function(){
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: '/user/logout',
      }).then(function successCallback(response) {
          deferred.resolve(response);
        }, function errorCallback(response) {
          deferred.reject(response);
        });

        return deferred.promise;
    }
  }

}]);
