(function() {
    'use strict';

    function adminController($scope, $ionicSideMenuDelegate, AuthService) {

        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };

        $scope.logout = function() {
            AuthService.clear();
        };
    }

    angular.module('admin').controller('AdminCtrl',
        [ '$scope', '$ionicSideMenuDelegate', 'AuthService', adminController ]);
})();