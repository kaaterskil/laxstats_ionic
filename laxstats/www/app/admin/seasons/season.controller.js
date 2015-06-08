(function() {
    'use strict';

    function seasonController($scope, $stateParams, $location, Season) {
        $scope.season = new Season();

        $scope.saveOrUpdate = function(form) {
            if (form.$valid) {
                $scope.season.$save().then(function(response) {
                    $location.path('/admin/seasons');
                });
            }
        };
    }

    angular.module('admin.seasons').controller('SeasonCtrl',
        [ '$scope', '$stateParams', '$location', 'Season', seasonController ]);
})();