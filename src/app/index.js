'use strict';

angular.module('gmp-button', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'mm.foundation', 'gmp.gmp-button'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
