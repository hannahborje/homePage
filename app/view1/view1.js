'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])
    .directive('header', [function () {
        return {
            restrict: 'AE',
            replace: 'true',
            template: '<h1 class="centerText">Hannah the Programmer</h1>'
        }

}])
    .controller('NavigatorCtrl', ['$scope', function($scope) {
        $scope.move = function() {
            console.log("jelp");
            $scope.myvalue = "I am a certified code monkey";
        }

    }])

    .controller('View1Ctrl', [function() {
        
    }]);




