'use strict';

/**
 * @ngdoc service
 * @name ngPracticeApp.current
 * @description
 * # current
 * Factory in the ngPracticeApp.
 */
angular.module('ngPracticeApp')
  .factory('current', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
