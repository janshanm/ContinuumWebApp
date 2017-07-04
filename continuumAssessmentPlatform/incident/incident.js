'use strict';

angular.module('continuumAssessmentPlatform.incident', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/incident', {
    templateUrl: 'incident/incident.html',
    controller: 'IncidentCtrl'
  });
}])

.controller('IncidentCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.traveller1 = false;
    $scope.artisan1 = false;
    $scope.artisan2 = false;
    $scope.artisan3 = false;
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
    $scope.master1 = false;
    $scope.master2 = false;
    $scope.master3 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessments !== "undefined"){
            var assessments = $rootScope.assessments;
            var incident = assessments['incident'];
            if(incident !== undefined) {
                $scope.traveller1 = incident['traveller1'];
                $scope.artisan1 = incident['artisan1'];
                $scope.artisan2 = incident['artisan2'];
                $scope.artisan3 = incident['artisan3'];
                $scope.expert1 = incident['expert1'];
                $scope.expert2 = incident['expert2'];
                $scope.expert3 = incident['expert3'];
                $scope.expert4 = incident['expert4'];
                $scope.expert5 = incident['expert5'];
                $scope.expert6 = incident['expert6'];
                $scope.professional1 = incident['professional1'];
                $scope.professional2 = incident['professional2'];
                $scope.professional3 = incident['professional3'];
                $scope.professional4 = incident['professional4'];
                $scope.master1 = incident['master1'];
                $scope.master2 = incident['master2'];
                $scope.master3 = incident['master3'];
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

        $rootScope.assessments['incident'] = {
            'traveller1': $scope.traveller1,
            'artisan1': $scope.artisan1,
            'artisan2': $scope.artisan2,
            'artisan3': $scope.artisan3,
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
            'master1': $scope.master1,
            'master2': $scope.master2,
            'master3': $scope.master3,
            'score': $scope.computeStrategyAssessmentScore()
        };
    };

    $scope.computeStrategyAssessmentScore = function(){
        if(isTraveller()){
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
            return 1;
        }

    };

    var isTraveller = function(){
        return $scope.traveller1;
    };

    var isArtisan = function () {
        return !isTraveller() && $scope.artisan1 && $scope.artisan2 && $scope.artisan3;
    };

    var isExpert = function() {
        return isArtisan() && $scope.expert1 && $scope.expert2 && $scope.expert3 && $scope.expert4 && $scope.expert5 && $scope.expert6;
    };

    var isProfessional = function () {
        return isExpert() && $scope.professional1 && $scope.professional2 && $scope.professional3 && $scope.professional4;
    };

    var isMaster = function () {
        return isProfessional() && $scope.master1 && $scope.master2 && $scope.master3;
    };

}]);