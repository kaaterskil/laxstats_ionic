(function() {
    'use strict';

    function authService($rootScope, $http, $cookies, $location, $timeout, SessionService,
        SERVER_URL) {
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
            var isAuthenticated = SessionService.isAuthenticated();

            // Match either a single slash or /main/some-page
            if (!isAuthenticated && !$location.path().match(/^(\/|\/main.*)$/)) {
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
            var loginUrl = SERVER_URL + '/api/login';

            $http.post(loginUrl, {
                username : credentials.username,
                password : credentials.password
            }).success(function(result, status, headers) {
                var token = headers('X-AUTH-TOKEN');

                auth.authenticated = false;
                if (token) {
                    auth.authenticated = true;
                    SessionService.setSecurityToken(token);
                }
                callback(auth.authenticated);
            }).error(function(result) {
                console.log('error: ');
                console.log(result);
                auth.authenticated = false;
            });
        };

        auth.clear = function() {
            var url = SERVER_URL + '/logout';

            $http.post(url, {}).success(function() {
                console.log('logout succeeded');

                auth.authenticated = false;
                SessionService.destroySession();
                $location.path(auth.homePath);
            }).error(function(response) {
                console.log(response);
                auth.authenticated = false;
                SessionService.destroySession();
            });
        };

        return auth;
    }

    angular.module('laxstats.core').factory(
        'AuthService',
        [ '$rootScope', '$http', '$cookies', '$location', '$timeout', 'SessionService',
            'SERVER_URL', authService ]);
})();