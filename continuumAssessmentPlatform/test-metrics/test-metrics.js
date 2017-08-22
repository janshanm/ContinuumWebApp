'use strict';

angular.module('continuumAssessmentPlatform.test-metrics', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/test-metrics', {
    templateUrl: 'test-metrics/test-metrics.html',
    controller: 'TestMetricsCtrl'
  });
}])

.controller('TestMetricsCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.traveller1 = false;
    $scope.traveller2 = false;
    $scope.traveller3 = false;
    $scope.traveller4 = false;
    $scope.traveller5 = false;
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
    $scope.expert7 = false;
    $scope.expert8 = false;
    $scope.professional1 = false;
    $scope.professional2 = false;
    $scope.professional3 = false;
    $scope.professional4 = false;
    $scope.professional5 = false;
    $scope.professional6 = false;
    $scope.professional7 = false;
    $scope.professional8 = false;
    $scope.professional9 = false;
    $scope.professional10 = false;
    $scope.professional11 = false;
    $scope.professional12 = false;
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
    $scope.master11 = false;
    $scope.master12 = false;
    $scope.master13 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessmentsQaMaM !== "undefined"){
            var assessments = $rootScope.assessmentsQaMaM;
            var testMetrics = assessments['test-metrics'];
            if(testMetrics !== undefined) {
                $scope.traveller1 = testMetrics['traveller1'];
                $scope.traveller2 = testMetrics['traveller2'];
                $scope.traveller3 = testMetrics['traveller3'];
                $scope.traveller4 = testMetrics['traveller4'];
                $scope.traveller5 = testMetrics['traveller5'];
                $scope.artisan1 = testMetrics['artisan1'];
                $scope.artisan2 = testMetrics['artisan2'];
                $scope.artisan3 = testMetrics['artisan3'];
                $scope.artisan4 = testMetrics['artisan4'];
                $scope.artisan5 = testMetrics['artisan5'];
                $scope.artisan6 = testMetrics['artisan6'];
                $scope.artisan7 = testMetrics['artisan7'];
                $scope.artisan8 = testMetrics['artisan8'];
                $scope.expert1 = testMetrics['expert1'];
                $scope.expert2 = testMetrics['expert2'];
                $scope.expert3 = testMetrics['expert3'];
                $scope.expert4 = testMetrics['expert4'];
                $scope.expert5 = testMetrics['expert5'];
                $scope.expert6 = testMetrics['expert6'];
                $scope.expert7 = testMetrics['expert7'];
                $scope.expert8 = testMetrics['expert8'];
                $scope.professional1 = testMetrics['professional1'];
                $scope.professional2 = testMetrics['professional2'];
                $scope.professional3 = testMetrics['professional3'];
                $scope.professional4 = testMetrics['professional4'];
                $scope.professional5 = testMetrics['professional5'];
                $scope.professional6 = testMetrics['professional6'];
                $scope.professional7 = testMetrics['professional7'];
                $scope.professional8 = testMetrics['professional8'];
                $scope.professional9 = testMetrics['professional9'];
                $scope.professional10 = testMetrics['professional10'];
                $scope.professional11 = testMetrics['professional11'];
                $scope.professional12 = testMetrics['professional12'];
                $scope.master1 = testMetrics['master1'];
                $scope.master2 = testMetrics['master2'];
                $scope.master3 = testMetrics['master3'];
                $scope.master4 = testMetrics['master4'];
                $scope.master5 = testMetrics['master5'];
                $scope.master6 = testMetrics['master6'];
                $scope.master7 = testMetrics['master7'];
                $scope.master8 = testMetrics['master8'];
                $scope.master9 = testMetrics['master9'];
                $scope.master10 = testMetrics['master10'];
                $scope.master11 = testMetrics['master11'];
                $scope.master12 = testMetrics['master12'];
                $scope.master13 = testMetrics['master13'];
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

        $rootScope.assessmentsQaMaM['test-metrics'] = {
            'traveller1': $scope.traveller1,
            'traveller2': $scope.traveller2,
            'traveller3': $scope.traveller3,
            'traveller4': $scope.traveller4,
            'traveller5': $scope.traveller5,
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
            'expert7': $scope.expert7,
            'expert8': $scope.expert8,
            'professional1': $scope.professional1,
            'professional2': $scope.professional2,
            'professional3': $scope.professional3,
            'professional4': $scope.professional4,
            'professional5': $scope.professional5,
            'professional6': $scope.professional6,
            'professional7': $scope.professional7,
            'professional8': $scope.professional8,
            'professional9': $scope.professional9,
            'professional10': $scope.professional10,
            'professional11': $scope.professional11,
            'professional12': $scope.professional12,
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
            'master11': $scope.master11,
            'master12': $scope.master12,
            'master13': $scope.master13,
            'score': $scope.computeAssessmentScore()
        };
    };

    $scope.computeAssessmentScore = function(){
        if(isTraveller() && !isArtisan() && !isExpert() && !isProfessional() && !isMaster()){
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
        return $scope.traveller1 && $scope.traveller2 && $scope.traveller3 && $scope.traveller4 && $scope.traveller5;
    };

    var isArtisan = function () {
        return !$scope.traveller1 && !$scope.traveller2 && !$scope.traveller3 && !$scope.traveller4 && !$scope.traveller5
            && $scope.artisan1 && $scope.artisan2 && $scope.artisan3 && $scope.artisan4 && $scope.artisan5
            && $scope.artisan6 && $scope.artisan7 && $scope.artisan8;
    };

    var isExpert = function() {
        return !$scope.traveller1 && !$scope.traveller2 && !$scope.traveller3 && !$scope.traveller4 && !$scope.traveller5
            && !$scope.artisan1 && !$scope.artisan2 && !$scope.artisan4 && !$scope.artisan5 && !$scope.artisan6
            && !$scope.artisan7 && $scope.artisan8 && $scope.expert1 && $scope.expert2 && $scope.expert3 && $scope.expert4
            && $scope.expert5 && $scope.expert6 && $scope.expert7 && $scope.expert8;
    };

    var isProfessional = function () {
        return isExpert() && $scope.professional1 && $scope.professional2 && $scope.professional3 && $scope.professional4
            && $scope.professional5 && $scope.professional6 && $scope.professional7 && $scope.professional8
            && $scope.professional9 && $scope.professional10 && $scope.professional11 && $scope.professional12;
    };

    var isMaster = function () {
        return isProfessional() && $scope.master1 && $scope.master2 && $scope.master3 && $scope.master4 && $scope.master5
            && $scope.master6 && $scope.master7 && $scope.master8 && $scope.master9 && $scope.master10 && $scope.master11
            && $scope.master12 && $scope.master13;
    };
}]);