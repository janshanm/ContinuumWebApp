'use strict';

angular.module('continuumAssessmentPlatform.teaming', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/teaming', {
    templateUrl: 'teaming/teaming.html',
    controller: 'TeamingCtrl'
  });
}])

.controller('TeamingCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.traveller1 = false;
    $scope.traveller2 = false;
    $scope.traveller3 = false;
    $scope.artisan1 = false;
    $scope.artisan2 = false;
    $scope.artisan3 = false;
    $scope.expert1 = false;
    $scope.expert2 = false;
    $scope.expert3 = false;
    $scope.professional1 = false;
    $scope.professional2 = false;
    $scope.master1 = false;
    $scope.master2 = false;
    $scope.master3 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessments !== "undefined"){
            var assessments = $rootScope.assessments;
            var teaming = assessments['teaming'];
            $scope.traveller1 = teaming['traveller1'];
            $scope.traveller2 = teaming['traveller2'];
            $scope.traveller3 = teaming['traveller3'];
            $scope.artisan1 = teaming['artisan1'];
            $scope.artisan2 = teaming['artisan2'];
            $scope.artisan3 = teaming['artisan3'];
            $scope.expert1 = teaming['expert1'];
            $scope.expert2 = teaming['expert2'];
            $scope.expert3 = teaming['expert3'];
            $scope.professional1 = teaming['professional1'];
            $scope.professional2 = teaming['professional2'];
            $scope.master1 = teaming['master1'];
            $scope.master2 = teaming['master2'];
            $scope.master3 = teaming['master3'];
        }
    };

    $scope.saveAssessments = function(){
        $rootScope.assessments = {'teaming': {
            'traveller1': $scope.traveller1,
            'traveller2': $scope.traveller2,
            'traveller3': $scope.traveller3,
            'artisan1': $scope.artisan1,
            'artisan2': $scope.artisan2,
            'artisan3': $scope.artisan3,
            'expert1': $scope.expert1,
            'expert2': $scope.expert2,
            'expert3': $scope.expert3,
            'professional1': $scope.professional1,
            'professional2': $scope.professional2,
            'master1': $scope.master1,
            'master2': $scope.master2,
            'master3': $scope.master3
        }};
    }

}]);