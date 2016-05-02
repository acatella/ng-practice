'use strict';

/**
 * @ngdoc function
 * @name ngPracticeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngPracticeApp
 */
angular.module('ngPracticeApp')
  .controller('MainCtrl',function($scope, current) {
    $scope.citiesFound = citySearch.find();

    $scope.findCities = function() {
      $scope.query = citySearch.find({
        query: $scope.location
      });
      $scope.searchQuery = $scope.location;
    };

  });
