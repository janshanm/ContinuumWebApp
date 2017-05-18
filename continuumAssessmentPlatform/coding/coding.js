'use strict';

angular.module('continuumAssessmentPlatform.coding', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/coding', {
    templateUrl: 'coding/coding.html',
    controller: 'CodingCtrl'
  });
}])

.controller('CodingCtrl', [function() {

}]);