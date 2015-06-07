(function() {
    'use strict';

    function officeController($scope, $http, SERVER_URL) {
        $scope.content = {};

        $http.get(SERVER_URL + '/admin/home').success(function(data) {
            $scope.content = data;
        });
    }

    angular.module('admin.home').controller('OfficeCtrl',
        [ '$scope', '$http', 'SERVER_URL', officeController ]);
})();