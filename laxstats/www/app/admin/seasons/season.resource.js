(function() {
    'use strict';

    function seasonsResource($resource, SERVER_URL) {
        var url, paramDefaults, actions;

        url = SERVER_URL + '/admin/api/seasons/:id';
        paramDefaults = {
            id : '@id'
        };
        actions = {
            update : {
                method : 'PUT',
                withCredentials : true
            }
        };

        return $resource(url, paramDefaults, actions);
    }

    angular.module('admin.seasons').factory('Season',
        [ '$resource', 'SERVER_URL', seasonsResource ]);
})();