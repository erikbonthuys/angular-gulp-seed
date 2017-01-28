(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('base', {
                abstract: true,
                url: '',
                templateUrl: 'app/base.html'
            })
            .state('login', {
                url: '/',
                parent: 'base',
                templateUrl: 'app/views/login/login.html',
                controller: 'LoginController',
                controllerAs: 'loginCtrl'
            })
            .state('terms', {
                url: '/terms',
                parent: 'base',
                templateUrl: 'app/views/terms/terms.html',
                controller: 'TermsController',
                controllerAs: 'termsCtrl'
            })
            .state('dashboard', {
                url: '/dashboard',
                parent: 'base',
                templateUrl: 'app/views/dashboard/dashboard.html',
                controller: 'DashController',
                controllerAs: 'dashCtrl'
            })
            .state('view1', {
                url: '/view1',
                parent: 'dashboard',
                templateUrl: 'app/views/view1/view1.html',
                controller: 'View1Controller',
                controllerAs: 'view1Ctrl'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
