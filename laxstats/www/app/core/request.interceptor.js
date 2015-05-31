(function() {
    'use strict';

    function requestInterceptor(SessionService) {
        function request(config) {
            var token = SessionService.getSecurityToken();
            if (token) {
                config.headers['x-auth-token'] = token;
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