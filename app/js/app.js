'use strict';

angular.module('spotifyApp', [
  'ngRoute',
  'spotifyControllers'
])
.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'partials/list.html',
            controller: 'listController'
        })
        .when('/list_tracks/:albumId', {
            templateUrl: 'partials/list_tracks.html',
            controller: 'tracksController'
        })
        .when('/list_artists/:artistId', {
            templateUrl: 'partials/list_artists.html',
            controller: 'artistsController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);