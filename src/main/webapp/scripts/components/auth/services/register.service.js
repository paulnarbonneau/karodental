'use strict';

angular.module('karodentalApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


