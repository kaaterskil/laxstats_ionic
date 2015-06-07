(function() {
    'use strict';

    function responseInterceptor($rootScope, $q, HttpBuffer) {
        function response(resp) {
            if (resp.status < 400) { return resp; }
            return $q.reject(resp);
        }

        function responseError(rejection) {
            switch (rejection.status) {
            case 401:
                var df = $q.defer();
                HttpBuffer.append(rejection.config, df);
                return df.promise;
            case 403:
                break;
            case 419:
            case 440:
                break;
            }
            return $q.reject(rejection);
        }

        return {
            response : response,
            responseError : responseError
        };
    }

    angular.module('laxstats.core').factory('ResponseInterceptor',
        [ '$rootScope', '$q', 'HttpBuffer', responseInterceptor ]).config(
        [ '$httpProvider', function($httpProvider) {
            $httpProvider.interceptors.push('ResponseInterceptor');
        } ]);
})();