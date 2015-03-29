'use strict';

var spotifyControllers = angular.module('spotifyControllers', []);
 

spotifyControllers.controller('listController', function($scope, $http, $log) {
    $scope.type = 'Artist';

    $scope.toggleAlbumArtist = function(){
        if ($scope.type == 'Artist') {
            $scope.type = 'Album';
        } else {
            $scope.type = 'Artist';   
        }
    };

    $scope.search = function() {
        if ($scope.type == 'Artist') {
            $http.get('https://api.spotify.com/v1/search', {
                params: {
                    'q' : $scope.query,
                    'type' : 'artist'
                }
            }).success(function(data) {
              $scope.results = data.artists;
              $log.debug(data);
            });

        } else {
            $http.get('https://api.spotify.com/v1/search', {
                params: {
                    'q' : $scope.query,
                    'type' : 'album'
                }
            }).success(function(data) {
              $scope.results = data.albums;
              $log.debug(data);
            });
        }
    };

});



spotifyControllers.controller('tracksController', function($scope, $http, $log, $routeParams) {
    var albumId = $routeParams.albumId;

    $http.get('https://api.spotify.com/v1/albums/' + albumId + '/tracks')
    .success(function(data) {
        $scope.tracks = data;
        $log.debug(data);
    });

});


spotifyControllers.controller('artistsController', function($scope, $http, $log, $routeParams) {
    var artistId = $routeParams.artistId;

    $http.get('https://api.spotify.com/v1/artists/' + artistId + '/albums')
    .success(function(data) {
        $scope.albums = data;
        $log.debug(data);
    });
});