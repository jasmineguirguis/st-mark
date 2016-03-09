app.controller('FeedsController', ['$scope', 'feedsRequest', function($scope, feedsRequest){

  feedsRequest.getFeeds()
    .then(function(response){
      console.log(response);
    }, function(err){
      console.log(err);
    });

    $scope.inTextarea;

}]);
