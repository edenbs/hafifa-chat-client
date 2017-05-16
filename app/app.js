'use strict';

angular.module('chatApp', [
    'ui.router',
    'ngMaterial',
    'ngAnimate',
    'ngAria',
    'ngMessages'
    ])
    .constant('config', {
        'serverUrl': 'http://localhost:8080/chat-1.0/api'
    })
    .run(function ($rootScope, $state) {
        $rootScope.$on('$stateUnauthorized', function() {
            $state.go('login');
        });
        $rootScope.$on('$stateNoPermission', function() {
            $state.go('no-permission');
        });
    })
    .config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
        $urlRouterProvider.otherwise('login');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: '/client/app/login/login.html',
                controller: 'Login'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/client/app/register/register.html',
                controller: 'Register'
            })
            .state('chat', {
                /*url: '/',
                templateUrl: '/client/app/chat/chat.html',
                controller: 'ChatController'*/
                template: 'Hello World',
                url: '/'
            })
            .state('no-permission', {
                template: 'No Permission!',
                url: '/no-permission'
            });

        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .backgroundPalette('grey', {
                default: '200'
            });
    });