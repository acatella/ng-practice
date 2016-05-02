'use strict';

/**
 * @ngdoc service
 * @name ngPracticeApp.citySearch
 * @description
 * # citySearch
 * Factory in the ngPracticeApp.
 */
angular.module('ngPracticeApp')
  .factory('citySearch', function ($resource) {
    // Service logic

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:location&type=like&mode=json&APPID=aa2d3409729a9850864e17a1bc7ef5fb',{},{
      find: {
        method: 'GET';,
        params: {
          query: 'seattle'
        },
        isArray:false
      }
    });
  });
