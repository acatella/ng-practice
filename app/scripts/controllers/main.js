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
    $scope.current = current.query();

    $scope.refreshCurrent = function() {
      $scope.current = current.query({
        location: $scope.location
      });
    };
  });
