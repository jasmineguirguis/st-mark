var app = angular.module('StMark', ['ngRoute', 'ui-notification'])

.config(function($routeProvider, $locationProvider, NotificationProvider) {
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

    .otherwise({ redirectTo: '/login' });
});
