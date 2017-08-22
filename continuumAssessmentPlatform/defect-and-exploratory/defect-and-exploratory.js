'use strict';

angular.module('continuumAssessmentPlatform.defect-and-exploratory', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/defect-and-exploratory', {
    templateUrl: 'defect-and-exploratory/defect-and-exploratory.html',
    controller: 'DefectAndExploratoryCtrl'
  });
}])

.controller('DefectAndExploratoryCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

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
    $scope.professional3 = false;
    $scope.professional4 = false;
    $scope.professional5 = false;
    $scope.professional6 = false;
    $scope.master1 = false;
    $scope.master2 = false;
    $scope.master3 = false;
    $scope.master4 = false;
    $scope.master5 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessmentsQaMaM !== "undefined"){
            var assessments = $rootScope.assessmentsQaMaM;
            var defectAndExploratory = assessments['defect-and-exploratory'];
            if(defectAndExploratory !== undefined) {
                $scope.traveller1 = defectAndExploratory['traveller1'];
                $scope.traveller2 = defectAndExploratory['traveller2'];
                $scope.traveller3 = defectAndExploratory['traveller3'];
                $scope.artisan1 = defectAndExploratory['artisan1'];
                $scope.artisan2 = defectAndExploratory['artisan2'];
                $scope.artisan3 = defectAndExploratory['artisan3'];
                $scope.expert1 = defectAndExploratory['expert1'];
                $scope.expert2 = defectAndExploratory['expert2'];
                $scope.expert3 = defectAndExploratory['expert3'];
                $scope.professional1 = defectAndExploratory['professional1'];
                $scope.professional2 = defectAndExploratory['professional2'];
                $scope.professional3 = defectAndExploratory['professional3'];
                $scope.professional4 = defectAndExploratory['professional4'];
                $scope.professional5 = defectAndExploratory['professional5'];
                $scope.professional6 = defectAndExploratory['professional6'];
                $scope.master1 = defectAndExploratory['master1'];
                $scope.master2 = defectAndExploratory['master2'];
                $scope.master3 = defectAndExploratory['master3'];
                $scope.master4 = defectAndExploratory['master4'];
                $scope.master5 = defectAndExploratory['master5'];
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

        $rootScope.assessmentsQaMaM['defect-and-exploratory'] = {
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
            'professional3': $scope.professional3,
            'professional4': $scope.professional4,
            'professional5': $scope.professional5,
            'professional6': $scope.professional6,
            'master1': $scope.master1,
            'master2': $scope.master2,
            'master3': $scope.master3,
            'master4': $scope.master4,
            'master5': $scope.master5
        };
    };
}]);