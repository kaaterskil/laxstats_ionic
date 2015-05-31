(function() {
    'use strict';

    function authService($rootScope, $http, $location, SessionService, SERVER_URL) {
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
            var url = SERVER_URL + '/authenticate', headers = {}, config, encoded;

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
                if (data.principal.name) {
                    auth.authenticated = true;
                    SessionService.createSession(data.principal, data.sessionId);
                }
                else {
                    auth.authenticated = false;
                }
                callback(auth.authenticated);
            });
        };

        auth.clear = function() {
            var url = SERVER_URL + '/logout';

            $http.post(url);
            auth.authenticated = false;
            SessionService.destroySession();
            $location.path(auth.homePath);
        };

        return auth;
    }

    angular.module('laxstats.core').factory('AuthService',
        [ '$rootScope', '$http', '$location', 'SessionService', 'SERVER_URL', authService ]);
})();