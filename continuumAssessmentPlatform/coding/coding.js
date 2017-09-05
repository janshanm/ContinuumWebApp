'use strict';

angular.module('continuumAssessmentPlatform.coding', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/coding', {
    templateUrl: 'coding/coding.html',
    controller: 'CodingCtrl'
  });
}])

.controller('CodingCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.traveller1 = false;
    $scope.artisan1 = false;
    $scope.artisan2 = false;
    $scope.expert1 = false;
    $scope.expert2 = false;
    $scope.expert3 = false;
    $scope.expert4 = false;
    $scope.professional1 = false;
    $scope.professional2 = false;
    $scope.professional3 = false;
    $scope.professional4 = false;
    $scope.master1 = false;
    $scope.master2 = false;
    $scope.master3 = false;
    $scope.master4 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessments !== "undefined"){
            var assessments = $rootScope.assessments;
            var coding = assessments['coding'];
            if(coding !== undefined) {
                $scope.traveller1 = coding['traveller1'];
                $scope.artisan1 = coding['artisan1'];
                $scope.artisan2 = coding['artisan2'];
                $scope.expert1 = coding['expert1'];
                $scope.expert2 = coding['expert2'];
                $scope.expert3 = coding['expert3'];
                $scope.expert4 = coding['expert4'];
                $scope.professional1 = coding['professional1'];
                $scope.professional2 = coding['professional2'];
                $scope.professional3 = coding['professional3'];
                $scope.professional4 = coding['professional4'];
                $scope.master1 = coding['master1'];
                $scope.master2 = coding['master2'];
                $scope.master3 = coding['master3'];
                $scope.master4 = coding['master4'];
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
        $rootScope.assessments['coding'] = {
            'traveller1': $scope.traveller1,
            'artisan1': $scope.artisan1,
            'artisan2': $scope.artisan2,
            'expert1': $scope.expert1,
            'expert2': $scope.expert2,
            'expert3': $scope.expert3,
            'expert4': $scope.expert4,
            'professional1': $scope.professional1,
            'professional2': $scope.professional2,
            'professional3': $scope.professional3,
            'professional4': $scope.professional4,
            'master1': $scope.master1,
            'master2': $scope.master2,
            'master3': $scope.master3,
            'master4': $scope.master4,
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
        return $scope.traveller1;
    };

    var isArtisan = function () {
        return !isTraveller() && $scope.artisan1 && $scope.artisan2;
    };

    var isExpert = function() {
        return isArtisan() && $scope.expert1 && $scope.expert2 && $scope.expert3 && $scope.expert4;
    };

    var isProfessional = function () {
        return isExpert() && $scope.professional1 && $scope.professional2 && $scope.professional3 && $scope.professional4;
    };

    var isMaster = function () {
        return isProfessional() && $scope.master1 && $scope.master2 && $scope.master3 && $scope.master4;
    }


}]);