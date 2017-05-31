'use strict';

angular.module('continuumAssessmentPlatform.ci', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ci', {
    templateUrl: 'continuousintegration/ci.html',
    controller: 'CICtrl'
  });
}])

.controller('CICtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.traveller1 = false;
    $scope.traveller2 = false;
    $scope.traveller3 = false;
    $scope.traveller4 = false;
    $scope.traveller5 = false;
    $scope.traveller6 = false;
    $scope.artisan1 = false;
    $scope.artisan2 = false;
    $scope.artisan3 = false;
    $scope.expert1 = false;
    $scope.expert2 = false;
    $scope.expert3 = false;
    $scope.expert4 = false;
    $scope.expert5 = false;
    $scope.expert6 = false;
    $scope.expert7 = false;
    $scope.professional1 = false;
    $scope.professional2 = false;
    $scope.professional3 = false;
    $scope.professional4 = false;
    $scope.professional5 = false;
    $scope.professional6 = false;
    $scope.professional7 = false;
    $scope.master1 = false;
    $scope.master2 = false;
    $scope.master3 = false;
    $scope.master4 = false;
    $scope.master5 = false;
    $scope.master6 = false;
    $scope.master7 = false;
    $scope.master8 = false;
    $scope.master9 = false;
    $scope.master10 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessments !== "undefined"){
            var assessments = $rootScope.assessments;
            var ci = assessments['ci'];
            if(ci !== undefined) {
                $scope.traveller1 = ci['traveller1'];
                $scope.traveller2 = ci['traveller2'];
                $scope.traveller3 = ci['traveller3'];
                $scope.traveller4 = ci['traveller4'];
                $scope.traveller5 = ci['traveller5'];
                $scope.traveller6 = ci['traveller6'];
                $scope.artisan1 = ci['artisan1'];
                $scope.artisan2 = ci['artisan2'];
                $scope.artisan3 = ci['artisan3'];
                $scope.expert1 = ci['expert1'];
                $scope.expert2 = ci['expert2'];
                $scope.expert3 = ci['expert3'];
                $scope.expert4 = ci['expert4'];
                $scope.expert5 = ci['expert5'];
                $scope.expert6 = ci['expert6'];
                $scope.expert7 = ci['expert7'];
                $scope.professional1 = ci['professional1'];
                $scope.professional2 = ci['professional2'];
                $scope.professional3 = ci['professional3'];
                $scope.professional4 = ci['professional4'];
                $scope.professional5 = ci['professional5'];
                $scope.professional6 = ci['professional6'];
                $scope.professional7 = ci['professional7'];
                $scope.master1 = ci['master1'];
                $scope.master2 = ci['master2'];
                $scope.master3 = ci['master3'];
                $scope.master4 = ci['master4'];
                $scope.master5 = ci['master5'];
                $scope.master6 = ci['master6'];
                $scope.master7 = ci['master7'];
                $scope.master8 = ci['master8'];
                $scope.master9 = ci['master9'];
                $scope.master10 = ci['master10'];
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

        $rootScope.assessments['ci'] = {
            'traveller1': $scope.traveller1,
            'traveller2': $scope.traveller2,
            'traveller3': $scope.traveller3,
            'traveller4': $scope.traveller4,
            'traveller5': $scope.traveller5,
            'traveller6': $scope.traveller6,
            'artisan1': $scope.artisan1,
            'artisan2': $scope.artisan2,
            'artisan3': $scope.artisan3,
            'expert1': $scope.expert1,
            'expert2': $scope.expert2,
            'expert3': $scope.expert3,
            'expert4': $scope.expert4,
            'expert5': $scope.expert5,
            'expert6': $scope.expert6,
            'expert7': $scope.expert7,
            'professional1': $scope.professional1,
            'professional2': $scope.professional2,
            'professional3': $scope.professional3,
            'professional4': $scope.professional4,
            'professional5': $scope.professional5,
            'professional6': $scope.professional6,
            'professional7': $scope.professional7,
            'master1': $scope.master1,
            'master2': $scope.master2,
            'master3': $scope.master3,
            'master4': $scope.master4,
            'master5': $scope.master5,
            'master6': $scope.master6,
            'master7': $scope.master7,
            'master8': $scope.master8,
            'master9': $scope.master9,
            'master10': $scope.master10,
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
            return 0;
        }

    };

    var isTraveller = function(){
        return $scope.traveller1 && $scope.traveller2 && $scope.traveller3 && $scope.traveller4 && $scope.traveller5 && $scope.traveller6;
    };

    var isArtisan = function () {
        return !$scope.traveller1 && $scope.traveller2 && !$scope.traveller3 && $scope.traveller4 && !$scope.traveller5
            && $scope.traveller6 && $scope.artisan1 && $scope.artisan2 && $scope.artisan3;
    };

    var isExpert = function() {
        return !$scope.traveller1 && $scope.traveller2 && !$scope.traveller3 && !$scope.traveller4 && !$scope.traveller5
            && !$scope.traveller6 && $scope.artisan1 && $scope.artisan2 && $scope.artisan3 && $scope.expert1 && $scope.expert2
            && $scope.expert3 && $scope.expert4 && $scope.expert5 && $scope.expert6 && $scope.expert7;
    };

    var isProfessional = function () {
        return isExpert() && $scope.professional1 && $scope.professional2 && $scope.professional3 && $scope.professional4
            && $scope.professional5 && $scope.professional6 && $scope.professional7;
    };

    var isMaster = function () {
        return !isTraveller() && $scope.artisan1 && $scope.artisan2 && $scope.artisan3 && $scope.expert1 && $scope.expert2
            && $scope.expert3 && $scope.expert4 && $scope.expert5 && $scope.expert6 && $scope.expert7 && $scope.master1
            && $scope.master2 && $scope.master3 && $scope.master4 && $scope.master5
            && $scope.master6 && $scope.master7 && $scope.master8 && $scope.master9 && $scope.master10 && $scope.professional1
            && $scope.professional2 && $scope.professional3 && $scope.professional4 && $scope.professional5 && $scope.professional6 && $scope.professional7;
    }


}]);