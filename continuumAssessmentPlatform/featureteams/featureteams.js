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
            if(featureTeams !== undefined) {
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
        }
    };

    $scope.getClass = function(value){
        return value ? 'bg-info': 'bg-warning';
    };

    $scope.saveAssessments = function(){
        if($rootScope.assessments === undefined){
            $rootScope.assessments = {};
        }

        $rootScope.assessments['featureTeams'] = {
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
            'master4': $scope.master4,
            'score': $scope.computeStrategyAssessmentScore()
        };
    };

    $scope.computeStrategyAssessmentScore = function(){
        if(isTraveller() && !isArtisan()){
            return 1;
        }
        else if(isArtisan() && !isExpert() && !isProfessional() && !isMaster()){
            return 2;
        }
        else if(isExpert() && !isProfessional() && !isMaster()){
            return 3;
        }
        else if(isProfessional() && !isMaster()){
            return 4;
        }
        else if(isMaster()){
            return 5;
        }
        else{
            return 0;
        }

    };

    var isTraveller = function(){
        return $scope.traveller1 && $scope.traveller2 && $scope.traveller3 && $scope.traveller4;
    };

    var isArtisan = function () {
        return isTraveller() && $scope.artisan1 && $scope.artisan2 && $scope.artisan3;
    };

    var isExpert = function() {
        return !isTraveller() && !$scope.artisan1 && $scope.artisan2 && $scope.artisan3 && $scope.expert1
            && $scope.expert2 && $scope.expert3 && $scope.expert4 && $scope.expert5;
    };

    var isProfessional = function () {
        return isExpert() && $scope.professional1 && $scope.professional2 && $scope.professional3;
    };

    var isMaster = function () {
        return isProfessional() && $scope.master1 && $scope.master2 && $scope.master3 && $scope.master4;
    };

}]);