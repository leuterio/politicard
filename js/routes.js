(function () {
    'use strict';

    angular.module('politicard').config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/splashscreen');

        $stateProvider

            // SplashScreen PAGE AND NESTED VIEWS ========================================
            .state('splashscreen', {
                url: '/splashscreen',
                templateUrl: '../templates/splashscreen.html',
                controller: function ($state) {
                    debugger;
                    setTimeout(function () {
                        $state.go('menu');
                    }, 500);
                }
            })

            // Menu PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('menu', {
                url: '/menu',
                templateUrl: '../templates/menu.html',
                controller: 'MenuController'
            })

            // Menu PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('arena', {
                url: '/arena',
                templateUrl: '../templates/arena.html'
            });

    });
})();