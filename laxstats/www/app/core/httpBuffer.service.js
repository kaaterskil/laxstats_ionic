(function() {
    'use strict';

    function httpBuffer($injector) {
        var buffer = [], $http = null;

        function retryHttpRequest(config, deferred) {
            function onSuccess(response) {
                if (deferred) {
                    deferred.resolve(response);
                }
            }

            function onError(response) {
                deferred.reject(response);
            }

            $http = $http || $injector.get('$http');
            $http(config).then(onSuccess, onError);
        }

        function append(config, deferred) {
            buffer.push({
                config : config,
                deferred : deferred
            });
        }

        function rejectAll(reason) {
            var i = 0;
            if (reason) {
                for (i; i < buffer.length; ++i) {
                    buffer[i].deferred.reject(reason);
                }
            }
            buffer = [];
        }

        function retryAll(updater) {
            var i = 0;
            for (i; i < buffer.length; ++i) {
                retryHttpRequest(buffer[i].config, buffer[i].deferred);
            }
            buffer = [];
        }

        return {
            append : append,
            rejectAll : rejectAll,
            retryAll : retryAll
        };
    }

    angular.module('laxstats.core').factory('HttpBuffer', [ '$injector', httpBuffer ]);
})();