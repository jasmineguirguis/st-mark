app.factory('requestInterceptor', function() {
  return {

    'request': function(config) {
      var token = localStorage.getItem('token');
      config.headers['token'] = token;
      console.log(config);
      return config;
    }

  }
});
