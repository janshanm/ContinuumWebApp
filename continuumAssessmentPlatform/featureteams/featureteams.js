'use strict';

angular.module('continuumAssessmentPlatform.featureteams', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/featureteams', {
    templateUrl: 'featureteams/featureteams.html',
    controller: 'FeatureTeamsCtrl'
  });
}])

.controller('FeatureTeamsCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.traveller1 = false;
    $scope.traveller2 = false;
    $scope.traveller3 = false;
    $scope.traveller4 = false;
    $scope.artisan1 = false;
    $scope.artisan2 = false;
    $scope.artisan3 = false;
    $scope.expert1 = false;
    $scope.expert2 = false;
    $scope.expert3 = false;
    $scope.expert4 = false;
    $scope.expert5 = false;
    $scope.professional1 = false;
    $scope.professional2 = false;
    $scope.professional3 = false;
    $scope.master1 = false;
    $scope.master2 = false;
    $scope.master3 = false;
    $scope.master4 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessments !== "undefined"){
            var assessments = $rootScope.assessments;
            var featureTeams = assessments['featureTeams'];
            $scope.traveller1 = featureTeams['traveller1'];
            $scope.traveller2 = featureTeams['traveller2'];
            $scope.traveller3 = featureTeams['traveller3'];
            $scope.traveller4 = featureTeams['traveller4'];
            $scope.artisan1 = featureTeams['artisan1'];
            $scope.artisan2 = featureTeams['artisan2'];
            $scope.artisan3 = featureTeams['artisan3'];
            $scope.expert1 = featureTeams['expert1'];
            $scope.expert2 = featureTeams['expert2'];
            $scope.expert3 = featureTeams['expert3'];
            $scope.expert4 = featureTeams['expert4'];
            $scope.expert5 = featureTeams['expert5'];
            $scope.professional1 = featureTeams['professional1'];
            $scope.professional2 = featureTeams['professional2'];
            $scope.professional3 = featureTeams['professional3'];
            $scope.master1 = featureTeams['master1'];
            $scope.master2 = featureTeams['master2'];
            $scope.master3 = featureTeams['master3'];
            $scope.master4 = featureTeams['master4'];
        }
    };

    $scope.saveAssessments = function(){
        $rootScope.assessments = {'featureTeams': {
            'traveller1': $scope.traveller1,
            'traveller2': $scope.traveller2,
            'traveller3': $scope.traveller3,
            'traveller4': $scope.traveller4,
            'artisan1': $scope.artisan1,
            'artisan2': $scope.artisan2,
            'artisan3': $scope.artisan3,
            'expert1': $scope.expert1,
            'expert2': $scope.expert2,
            'expert3': $scope.expert3,
            'expert4': $scope.expert4,
            'expert5': $scope.expert5,
            'professional1': $scope.professional1,
            'professional2': $scope.professional2,
            'professional3': $scope.professional3,
            'master1': $scope.master1,
            'master2': $scope.master2,
            'master3': $scope.master3,
            'master4': $scope.master4
        }};
    }

}]);