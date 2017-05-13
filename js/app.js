angular.module('politicard', ['ui.router']);

angular.module('politicard').config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/splashscreen');
    
    $stateProvider
        
        .state('splashscreen', {
            url: '/splashscreen',
            templateUrl: '../templates/splashscreen.html',
            controller: function($state) {
                setTimeout(function(){
                   $state.go('menu'); 
                },1500);
            }
        })
        
        .state('menu', {
            url: '/menu',
            templateUrl: '../templates/menu.html',
            controller: function($scope) {
                
            }
        })
    
        .state('arena', {
            url: '/arena',
            templateUrl: '../templates/arena.html',
            controller: function($scope) {
                
            }
        })
    
        .state('creditos', {
            url: '/creditos',
            templateUrl: '../templates/creditos.html',
            controller: function($scope) {
                $scope.equipe = [{nome:'Cleber'}, {nome:'Gladison'}, {nome:'Jefferson'}, {nome:'Keoma'}, {nome:'Pedro'}]
            }
        });
    
        
});