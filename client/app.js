'use strict';

angular.module('dreamteam', [
  'main',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'modules/main/templates/main.html',
      controller: 'MainController'
    })
    .otherwise({
      redirectTo: '/'
    });
});