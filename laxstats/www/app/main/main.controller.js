(function() {
    'use strict';

    function mainController($scope, $ionicSideMenuDelegate) {

        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };
    }

    angular.module('main').controller('MainCtrl',
        [ '$scope', '$ionicSideMenuDelegate', mainController ]);
})();