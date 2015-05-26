(function() {
    'use strict';

    function loginController($rootScope, $scope, $http, $location, SERVER_URL) {
        $scope.message = '';
        $scope.user = {
            username : null,
            password : null
        };

        function callback() {
            if ($rootScope.authenticated) {
                $location.path('/admin/home');
            }
            else {
                $location.path('/main/login');
            }
        }

        function authenticate(credentials) {
            var url, headers;

            url = SERVER_URL + '/user';
            headers = {
                authorization : "Basic " + btoa($scope.user.username + ':' + $scope.user.password)
            };

            $http.get(url, {
                headers : headers
            }).success(function(data) {
                if (data.name) {
                    $rootScope.authenticated = true;
                }
                else {
                    $rootScope.authenticated = false;
                }
                callback();
            }).error(function() {
                $rootScope.authenticated = false;
                callback();
            });
        }

        authenticate();

        $scope.login = function() {
            authenticate($scope.user);
        };
    }

    angular.module('main.login').controller('LoginCtrl',
        [ '$rootScope', '$scope', '$http', '$location', 'SERVER_URL', loginController ]);
})();