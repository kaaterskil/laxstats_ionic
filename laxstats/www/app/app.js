(function() {
    'use strict';

    function ready($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the
            // keyboard for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }

            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });

    }

    angular.module('laxstats', [ 'laxstats.core', 'main', 'main.home', 'main.scoreboard',
        'main.schedule', 'main.fields', 'main.login', 'admin', 'admin.home', 'admin.games',
        'admin.teams', 'admin.people', 'admin.blog', 'admin.playbook', 'admin.media',
        'admin.sites', 'admin.seasons', 'admin.violations', 'admin.users' ]);
})();