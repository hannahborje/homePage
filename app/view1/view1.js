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
            $scope.myvalue = "I am a certified code monkey";
        }

        /**
         * # Anchor scrolling library
         * Simple 0.5KB plugin for animating anchor links. [View demo](http://playground.deaxon.com/js/anchor-scrolling-library/).
         */
        var links = document.querySelectorAll("a.scroll")
        var i = links.length
        var root = /firefox|trident/i.test(navigator.userAgent) ? document.documentElement : document.body
        var easeInOutCubic = function(t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t + b
            return c/2*((t-=2)*t*t + 2) + b
        }

        while (i--)
            links.item(i).addEventListener("click", function(e) {
                var startTime
                var startPos = root.scrollTop
                var endPos = document.getElementById(/[^#]+$/.exec(this.href)[0]).getBoundingClientRect().top
                var maxScroll = root.scrollHeight - window.innerHeight
                var scrollEndValue = startPos + endPos < maxScroll ? endPos : maxScroll - startPos
                var duration = 900
                var scroll = function(timestamp) {
                    startTime = startTime || timestamp
                    var elapsed = timestamp - startTime
                    var progress = easeInOutCubic(elapsed, startPos, scrollEndValue, duration)
                    root.scrollTop = progress
                    elapsed < duration && requestAnimationFrame(scroll)
                }
                requestAnimationFrame(scroll)
                e.preventDefault()
            })

    }])

    /**********************/

    .controller('ProjectsCtrl', ['$scope', function($scope) {


    }])

    .directive('projects', [function() {
        return {
            template: '<h2>Projects</h2>' +
            '<p>Working on it. Please check out <a href="https://github.com/hannahborje" >GitHub!</a></p>'
        }
    }])

    .controller('View1Ctrl', [function($scope, $location, $anchorScroll, $routeParams) {

    }]);




