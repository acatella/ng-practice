'use strict';

/**
 * @ngdoc service
 * @name ngPracticeApp.current
 * @description
 * # current
 * Factory in the ngPracticeApp.
 */
angular.module('ngPracticeApp')
  .factory('current', function ($resource) {

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=aa2d3409729a9850864e17a1bc7ef5fb',{},{
      query: {
        method:'GET',
        params: {
          location: 'Seattle,us'
        },
        isArray:false
      }
    });
  });
