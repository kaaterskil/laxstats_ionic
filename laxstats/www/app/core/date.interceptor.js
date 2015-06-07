(function() {
    'use strict';

    var regexIso8601 = /^(\d{4}|\+\d{6})(?:-(\d{2})(?:-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})\.(\d{1,})(Z|([\-+])(\d{2}):(\d{2}))?)?)?)?$/;

    function convertDateStringsToDates(input) {
        var key = null, value, match, millis;

        if (typeof input !== 'object') { return input; }

        for (key in input) {
            if (!input.hasOwnProperty(key)) {
                continue;
            }

            value = input[key];
            if (typeof value === 'string' && (match = value.match(regexIso8601))) {
                millis = Date.parse(match[0]) + (24 * 60 * 60 * 1000);
                if (!isNaN(millis)) {
                    input[key] = new Date(millis);
                }
            }
            else if (typeof value === 'object') {
                convertDateStringsToDates(value);
            }
        }
    }

    angular.module('laxstats.core').config([ '$httpProvider', function($httpProvider) {
        $httpProvider.defaults.transformResponse.push(function(responseData) {
            convertDateStringsToDates(responseData);
            return responseData;
        });
    } ]);
})();