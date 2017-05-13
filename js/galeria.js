(function () {
    'use strict';

    angular
        .module('politicard')
        .controller('GaleriaController', GaleriaController);

    GaleriaController.inject = ['$scope', 'ArenaService'];
    function GaleriaController($scope, ArenaService) {
        var vm = this;
        $scope.politicos = [];

        activate();

        ////////////////

        function activate() {
            debugger;
            $scope.politicos = ArenaService.getListaPoliticos();
        }
    }
})();