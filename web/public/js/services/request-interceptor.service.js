app.factory('requestInterceptor', function() {
  return {

    'request': function(config) {
      console.log(config);
      return config;
    }

  }
});
