 'use strict';

angular.module('karodentalApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-karodentalApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-karodentalApp-params')});
                }
                return response;
            },
        };
    });