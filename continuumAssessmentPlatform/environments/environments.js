'use strict';

angular.module('continuumAssessmentPlatform.environments', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/environments', {
    templateUrl: 'environments/environments.html',
    controller: 'EnvironmentsCtrl'
  });
}])

.controller('EnvironmentsCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.traveller1 = false;
    $scope.traveller2 = false;
    $scope.traveller3 = false;
    $scope.traveller4 = false;
    $scope.traveller5 = false;
    $scope.traveller6 = false;
    $scope.traveller7 = false;
    $scope.artisan1 = false;
    $scope.artisan2 = false;
    $scope.artisan3 = false;
    $scope.artisan4 = false;
    $scope.artisan5 = false;
    $scope.artisan6 = false;
    $scope.artisan7 = false;
    $scope.artisan8 = false;
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
    $scope.master3 = false;
    $scope.master4 = false;
    $scope.master5 = false;
    $scope.master6 = false;
    $scope.master7 = false;
    $scope.master8 = false;
    $scope.master9 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessments !== "undefined"){
            var assessments = $rootScope.assessments;
            var environments = assessments['environments'];
            if(environments !== undefined) {
                $scope.traveller1 = environments['traveller1'];
                $scope.traveller2 = environments['traveller2'];
                $scope.traveller3 = environments['traveller3'];
                $scope.traveller4 = environments['traveller4'];
                $scope.traveller5 = environments['traveller5'];
                $scope.traveller6 = environments['traveller6'];
                $scope.traveller7 = environments['traveller7'];
                $scope.artisan1 = environments['artisan1'];
                $scope.artisan2 = environments['artisan2'];
                $scope.artisan3 = environments['artisan3'];
                $scope.artisan4 = environments['artisan4'];
                $scope.artisan5 = environments['artisan5'];
                $scope.artisan6 = environments['artisan6'];
                $scope.artisan7 = environments['artisan7'];
                $scope.artisan8 = environments['artisan8'];
                $scope.expert1 = environments['expert1'];
                $scope.expert2 = environments['expert2'];
                $scope.expert3 = environments['expert3'];
                $scope.expert4 = environments['expert4'];
                $scope.expert5 = environments['expert5'];
                $scope.expert6 = environments['expert6'];
                $scope.professional1 = environments['professional1'];
                $scope.professional2 = environments['professional2'];
                $scope.professional3 = environments['professional3'];
                $scope.professional4 = environments['professional4'];
                $scope.professional5 = environments['professional5'];
                $scope.professional6 = environments['professional6'];
                $scope.master1 = environments['master1'];
                $scope.master2 = environments['master2'];
                $scope.master3 = environments['master3'];
                $scope.master4 = environments['master4'];
                $scope.master5 = environments['master5'];
                $scope.master6 = environments['master6'];
                $scope.master7 = environments['master7'];
                $scope.master8 = environments['master8'];
                $scope.master9 = environments['master9'];
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

        $rootScope.assessments['environments'] = {
            'traveller1': $scope.traveller1,
            'traveller2': $scope.traveller2,
            'traveller3': $scope.traveller3,
            'traveller4': $scope.traveller4,
            'traveller5': $scope.traveller5,
            'traveller6': $scope.traveller6,
            'traveller7': $scope.traveller7,
            'artisan1': $scope.artisan1,
            'artisan2': $scope.artisan2,
            'artisan3': $scope.artisan3,
            'artisan4': $scope.artisan4,
            'artisan5': $scope.artisan5,
            'artisan6': $scope.artisan6,
            'artisan7': $scope.artisan7,
            'artisan8': $scope.artisan8,
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
            'master2': $scope.master2,
            'master3': $scope.master3,
            'master4': $scope.master4,
            'master5': $scope.master5,
            'master6': $scope.master6,
            'master7': $scope.master7,
            'master8': $scope.master8,
            'master9': $scope.master9,
            'score': $scope.computeCodeAssessmentScore()
        };
    };

    $scope.computeCodeAssessmentScore = function(){
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
        return $scope.traveller1 && $scope.traveller2 && $scope.traveller3 && $scope.traveller4
            && $scope.traveller5 && $scope.traveller6 && $scope.traveller7;
    };

    var isArtisan = function () {
        return !isTraveller() && $scope.artisan1 && $scope.artisan2 && $scope.artisan3 && $scope.artisan4
            && $scope.artisan5 && $scope.artisan6 && $scope.artisan7 && $scope.artisan8;
    };

    var isExpert = function() {
        return !isTraveller() && !$scope.artisan1 && $scope.artisan2 && $scope.artisan3 && $scope.artisan4
            && !$scope.artisan5 && $scope.artisan6 && $scope.artisan7 && $scope.artisan8 && $scope.expert1 && $scope.expert2
            && $scope.expert3 && $scope.expert4 && $scope.expert5 && $scope.expert6;
    };

    var isProfessional = function () {
        return isExpert() && $scope.professional1 && $scope.professional2 && $scope.professional3
            && $scope.professional4 && $scope.professional5 && $scope.professional6;
    };

    var isMaster = function () {
        return isProfessional() && $scope.master1 && $scope.master2 && $scope.master3 && $scope.master4
            && $scope.master5 && $scope.master6 && $scope.master7 && $scope.master8 && $scope.master9;
    };

}]);