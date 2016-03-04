var app = angular.module('StMark', ['ngRoute', 'ui-notification'])

.run(function($rootScope, $route, $location){
  $rootScope.$on('$routeChangeStart', function(){
    var token = localStorage.getItem('token');
    if (token){
      $rootScope.isAuth = true;
    } else {
      $rootScope.isAuth = false;
      $location.url('/login');
    }
  })
})

.config(function($httpProvider, $routeProvider, $locationProvider, NotificationProvider) {
  $httpProvider.interceptors.push('requestInterceptor')

  NotificationProvider.setOptions({
    delay: 10000,
    startTop: 20,
    startRight: 10,
    verticalSpacing: 20,
    horizontalSpacing: 20,
    positionX: 'right',
    positionY: 'top'
  });

  $routeProvider
    .when('/register', {
      templateUrl: './views/register.html',
      controller: 'UserController'
    })
    .when('/login', {
      templateUrl: './views/login.html',
      controller: 'UserController'
    })
    .when('/feeds', {
      templateUrl: './views/feeds.html',
      controller: 'FeedsController'
    })

    .otherwise({ redirectTo: '/login' });
});
