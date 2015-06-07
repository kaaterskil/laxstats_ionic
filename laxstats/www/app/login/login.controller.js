(function() {
    'use strict';

    function loginController($scope, AuthService) {
        $scope.error = false;
        $scope.message = '';
        $scope.credentials = {
            username : null,
            password : null
        };

        $scope.authenticated = function() {
            return AuthService.authenticated;
        };

        $scope.login = function() {
            AuthService.authenticate($scope.credentials);
            if (AuthService.authenticated) {
                $scope.message = 'Login succeeded';
                $scope.error = false;
            }
            else {
                $scope.message = 'Login failed';
                $scope.error = true;
            }
        };
    }

    angular.module('main.login').controller('LoginCtrl',
        [ '$scope', 'AuthService', loginController ]);
})();