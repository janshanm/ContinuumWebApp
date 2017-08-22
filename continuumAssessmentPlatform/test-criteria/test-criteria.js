'use strict';

angular.module('continuumAssessmentPlatform.test-criteria', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/test-criteria', {
    templateUrl: 'test-criteria/test-criteria.html',
    controller: 'TestCriteriaCtrl'
  });
}])

.controller('TestCriteriaCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.traveller1 = false;
    $scope.traveller2 = false;
    $scope.traveller3 = false;
    $scope.artisan1 = false;
    $scope.artisan2 = false;
    $scope.artisan3 = false;
    $scope.artisan4 = false;
    $scope.artisan5 = false;
    $scope.expert1 = false;
    $scope.expert2 = false;
    $scope.expert3 = false;
    $scope.expert4 = false;
    $scope.expert5 = false;
    $scope.expert6 = false;
    $scope.professional1 = false;
    $scope.professional2 = false;
    $scope.professional3 = false;
    $scope.professional4 = false;
    $scope.professional5 = false;
    $scope.professional6 = false;
    $scope.master1 = false;
    $scope.master2 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessmentsQaMaM !== "undefined"){
            var assessments = $rootScope.assessmentsQaMaM;
            var testCriteria = assessments['test-criteria'];
            if(testCriteria !== undefined) {
                $scope.traveller1 = testCriteria['traveller1'];
                $scope.traveller2 = testCriteria['traveller2'];
                $scope.traveller3 = testCriteria['traveller3'];
                $scope.artisan1 = testCriteria['artisan1'];
                $scope.artisan2 = testCriteria['artisan2'];
                $scope.artisan3 = testCriteria['artisan3'];
                $scope.artisan4 = testCriteria['artisan4'];
                $scope.artisan5 = testCriteria['artisan5'];
                $scope.expert1 = testCriteria['expert1'];
                $scope.expert2 = testCriteria['expert2'];
                $scope.expert3 = testCriteria['expert3'];
                $scope.expert4 = testCriteria['expert4'];
                $scope.expert5 = testCriteria['expert5'];
                $scope.expert6 = testCriteria['expert6'];
                $scope.professional1 = testCriteria['professional1'];
                $scope.professional2 = testCriteria['professional2'];
                $scope.professional3 = testCriteria['professional3'];
                $scope.professional4 = testCriteria['professional4'];
                $scope.professional5 = testCriteria['professional5'];
                $scope.professional6 = testCriteria['professional6'];
                $scope.master1 = testCriteria['master1'];
                $scope.master2 = testCriteria['master2'];
            }
        }
    };

    $scope.getClass = function(value){
        return value ? 'bg-info': 'bg-warning';
    };

    $scope.saveAssessments = function(){
        if($rootScope.assessmentsQaMaM === undefined){
            $rootScope.assessmentsQaMaM = {};
        }

        $rootScope.assessmentsQaMaM['test-criteria'] = {
            'traveller1': $scope.traveller1,
            'traveller2': $scope.traveller2,
            'traveller3': $scope.traveller3,
            'artisan1': $scope.artisan1,
            'artisan2': $scope.artisan2,
            'artisan3': $scope.artisan3,
            'artisan4': $scope.artisan4,
            'artisan5': $scope.artisan5,
            'expert1': $scope.expert1,
            'expert2': $scope.expert2,
            'expert3': $scope.expert3,
            'expert4': $scope.expert4,
            'expert5': $scope.expert5,
            'expert6': $scope.expert6,
            'professional1': $scope.professional1,
            'professional2': $scope.professional2,
            'professional3': $scope.professional3,
            'professional4': $scope.professional4,
            'professional5': $scope.professional5,
            'professional6': $scope.professional6,
            'master1': $scope.master1,
            'master2': $scope.master2
        };
    };
}]);