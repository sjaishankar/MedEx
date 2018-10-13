var myApp = angular.module('myApp', ['ngRoute'])

myApp.config(function ($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'pages/clinicregistration.html',
        controller: 'mainController'
    })
    .when('/second', {
        templateUrl: 'pages/hospitalregistration.html',
        controller: 'secondController'
    })

});

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

    $scope.handle = '';

    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };

}]);

myApp.controller('secondController', ['$scope', '$filter', function($scope, $filter) {

    $scope.handle = '';

    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };

}]);
