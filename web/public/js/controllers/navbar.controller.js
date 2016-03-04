app.controller('NavbarController', ['$scope', 'userRequest', '$location',
  function($scope, userRequest, $location){

  $scope.logout = function(){
    userRequest.logout()
      .then(function(response){
        localStorage.removeItem('token');
        $location.url('/login');
      }, function(err){
        console.log(err);
      });
  };

}]);
