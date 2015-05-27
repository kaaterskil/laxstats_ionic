(function() {
    'use strict';

    function authService($rootScope, $http, $location, SERVER_URL) {
        var auth = {
            authenticated : false,
            loginPath : '/main/login',
            logoutPath : '/main/logout',
            successPath : '/admin/home',
            homePath : 'main/home',
            currentPath : ''
        };

        function callback(isAuthenticated) {
            if (isAuthenticated) {
                $location.path(auth.successPath);
            }
            else {
                $location.path(auth.loginPath);
            }
        }

        function enter() {
            // Match either a single slash or /main/some-page
            if (!$location.path().match(/^(\/|\/main.*)$/)) {
                auth.currentPath = $location.path();
                if (!auth.authenticated) {
                    $location.path(auth.loginPath);
                }
            }
        }

        auth.init = function() {
            $rootScope.$on('$stateChangeStart', function() {
                enter();
            });
        };

        auth.authenticate = function(credentials) {
            var url = SERVER_URL + '/user', headers = {}, config, encoded;

            if (credentials && credentials.username) {
                encoded = 'Basic ' + btoa(credentials.username + ':' + credentials.password);
                headers = {
                    authorization : encoded
                };
            }

            config = {
                headers : headers
            };

            $http.get(url, config).success(function(data) {
                if (data.name) {
                    auth.authenticated = true;
                }
                else {
                    auth.authenticated = false;
                }
                callback(auth.authenticated);
            }).error(function() {
                auth.authenticated = false;
                callback(false);
            });
        };

        auth.clear = function() {
            var url = SERVER_URL + '/logout';

            auth.authenticated = false;
            $location.path(auth.homePath);
            $http.post(url);
        };

        return auth;
    }

    angular.module('laxstats.core').factory('AuthService',
        [ '$rootScope', '$http', '$location', 'SERVER_URL', authService ]);
})();