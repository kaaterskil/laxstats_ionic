(function() {
    'use strict';

    function requestInterceptor(SessionService) {
        function request(config) {
            var authToken = SessionService.getSecurityToken();
            if (authToken) {
                config.headers['X-Auth-Token'] = authToken;
            }
            return config;
        }

        return {
            request : request
        };
    }

    angular.module('laxstats.core').factory('RequestInterceptor',
        [ 'SessionService', requestInterceptor ]).config(
        [ '$httpProvider', function($httpProvider) {
            $httpProvider.interceptors.push('RequestInterceptor');
        } ]);
})();