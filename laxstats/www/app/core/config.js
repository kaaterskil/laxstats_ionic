(function() {
    'use strict';

    function configure($urlRouterProvider, $httpProvider, $ionicConfigProvider) {
        // Add initial config stuff here such as view caching refinements.
        $ionicConfigProvider.views.maxCache(10); // Default is 10 anyway.
        $urlRouterProvider.when('', '/main/home'); // Default route for ui-router

        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    }

    function runApp($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleLightContent();
                // StatusBar.styleDefault(); if you don't want white status bar...
            }
        });

        // Initialize caching services if required (You need to add DSCacheFactory as an argument to
        // runApp() to do this)
        // I sometimes have to initialize the cache within a factory/service as it is required
        // immediately.
        // DSCacheFactory("codes", { storageMode: 'localStorage' });
    }

    angular.module('laxstats.core').run(runApp).config(configure);
})();