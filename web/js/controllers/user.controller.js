app.controller('UserController', ['$scope', 'userRequest',
  function($scope, userRequest){

  $scope.register = function(user){
    userRequest.register(user);
  };

  $scope.login = function(user){
    userRequest.login(user);
  };

}]);
