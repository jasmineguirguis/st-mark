app.controller('UserController', ['$rootScope', '$scope', 'userRequest', 'Notification', '$location',
  function($rootScope, $scope, userRequest, Notification, $location){

  if ($rootScope.isAuth) $location.url('/feeds');

  $scope.register = function(user){
    userRequest.register(user);
  };

  $scope.login = function(user){
    userRequest.login(user)
      .then(function(response){
        var token = response.data.token;
        localStorage.setItem('token', token);
        $location.url('/feeds');
      }, function(err){
        Notification.error({ title: 'OPS', message: err.data.message })
      });
  };

}]);
