'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', [function() {
        
    }])

    .controller('TextCtrl', ['$scope', function($scope) {
    
    /*
      $scope.imageSource = {
      'background-image': "url(http://s30.postimg.org/74ic3v80h/meagain.jpg)",
      'background': "url(http://s30.postimg.org/vd3oacj0x/CAM00109.jpg)"
      
      }; */
        $scope.yolo = "Hannah the Programmer";

    }]);