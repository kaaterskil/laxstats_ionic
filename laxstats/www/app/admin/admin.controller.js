(function() {
    'use strict';

    function adminController($scope, $ionicSideMenuDelegate) {

        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };
    }

    angular.module('admin').controller('AdminCtrl',
        [ '$scope', '$ionicSideMenuDelegate', adminController ]);
})();