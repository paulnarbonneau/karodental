'use strict';

angular.module('karodentalApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
