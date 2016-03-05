app.factory('authInterceptor', ['$q', '$location', function($q, $location) {
  return {

    'request': function(config) {
      var token = localStorage.getItem('token');
      config.headers['token'] = token;
      return config;
    },

    'responseError': function(rejection) {
      if (rejection.status === 401) $location.url('/login');
      return $q.reject(rejection);
    }

  }
}]);
