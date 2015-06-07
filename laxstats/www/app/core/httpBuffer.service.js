(function() {
    'use strict';

    function httpBuffer($injector) {
        var buffer = {}, queue = [], $http = null;

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

        buffer.append = function(config, deferred) {
            queue.push({
                config : config,
                deferred : deferred
            });
        };

        buffer.rejectAll = function(reason) {
            var i = 0;
            if (reason) {
                for (i; i < queue.length; ++i) {
                    queue[i].deferred.reject(reason);
                }
            }
            queue = [];
        };

        buffer.retryAll = function(updater) {
            var i = 0;
            for (i; i < queue.length; ++i) {
                retryHttpRequest(queue[i].config, queue[i].deferred);
            }
            queue = [];
        };

        return buffer;
    }

    angular.module('laxstats.core').factory('HttpBuffer', [ '$injector', httpBuffer ]);
})();