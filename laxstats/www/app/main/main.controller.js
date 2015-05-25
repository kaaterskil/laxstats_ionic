(function() {
    'use strict';

    function mainController($scope, $ionicSideMenuDelegate) {

        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        }
    }

    mainController.$inject = [ '$scope', '$ionicSideMenuDelegate' ]

    angular.module('main').controller('MainCtrl', mainController);
})();