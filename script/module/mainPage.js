define([

], function() {
    'use strict';
 
    function mainPage(a, b) {
        angular.module('mainPage', []).controller('LoginMessage', function($scope) {
            $scope.message = 'Hello world!';
        });
    
        $(document).ready(function () {
            angular.bootstrap(document, ['mainPage']);
        });
    }
 
    return mainPage;
});