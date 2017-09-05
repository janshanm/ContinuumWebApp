'use strict';

angular.module('continuumAssessmentPlatform.release', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/release', {
    templateUrl: 'release/release.html',
    controller: 'ReleaseCtrl'
  });
}])

.controller('ReleaseCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.traveller1 = false;
    $scope.traveller2 = false;
    $scope.traveller3 = false;
    $scope.traveller4 = false;
    $scope.artisan1 = false;
    $scope.artisan2 = false;
    $scope.artisan3 = false;
    $scope.artisan4 = false;
    $scope.expert1 = false;
    $scope.expert2 = false;
    $scope.professional1 = false;
    $scope.professional2 = false;
    $scope.professional3 = false;
    $scope.professional4 = false;
    $scope.master1 = false;
    $scope.master2 = false;
    $scope.master3 = false;
    $scope.master4 = false;
    $scope.master5 = false;
    $scope.master6 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessments !== "undefined"){
            var assessments = $rootScope.assessments;
            var release = assessments['release'];
            if(release !== undefined) {
                $scope.traveller1 = release['traveller1'];
                $scope.traveller2 = release['traveller2'];
                $scope.traveller3 = release['traveller3'];
                $scope.traveller4 = release['traveller4'];
                $scope.artisan1 = release['artisan1'];
                $scope.artisan2 = release['artisan2'];
                $scope.artisan3 = release['artisan3'];
                $scope.artisan4 = release['artisan4'];
                $scope.expert1 = release['expert1'];
                $scope.expert2 = release['expert2'];
                $scope.professional1 = release['professional1'];
                $scope.professional2 = release['professional2'];
                $scope.professional3 = release['professional3'];
                $scope.professional4 = release['professional4'];
                $scope.master1 = release['master1'];
                $scope.master2 = release['master2'];
                $scope.master3 = release['master3'];
                $scope.master4 = release['master4'];
                $scope.master5 = release['master5'];
                $scope.master6 = release['master6'];
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

        $rootScope.assessments['release'] = {
            'traveller1': $scope.traveller1,
            'traveller2': $scope.traveller2,
            'traveller3': $scope.traveller3,
            'traveller4': $scope.traveller4,
            'artisan1': $scope.artisan1,
            'artisan2': $scope.artisan2,
            'artisan3': $scope.artisan3,
            'artisan4': $scope.artisan4,
            'expert1': $scope.expert1,
            'expert2': $scope.expert2,
            'professional1': $scope.professional1,
            'professional2': $scope.professional2,
            'professional3': $scope.professional3,
            'professional4': $scope.professional4,
            'master1': $scope.master1,
            'master2': $scope.master2,
            'master3': $scope.master3,
            'master4': $scope.master4,
            'master5': $scope.master5,
            'master6': $scope.master6,
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
        return $scope.traveller1 && $scope.traveller2 && $scope.traveller3 && $scope.traveller4;
    };

    var isArtisan = function () {
        return !$scope.traveller1 && $scope.traveller2 && !$scope.traveller3  && !$scope.traveller4
            && $scope.artisan1 && $scope.artisan2 && $scope.artisan3 && $scope.artisan4;
    };

    var isExpert = function() {
        return !isTraveller() && $scope.artisan1 && $scope.artisan2 && $scope.artisan3 && $scope.artisan4
            && $scope.expert1 && $scope.expert2;
    };

    var isProfessional = function () {
        return isExpert() && $scope.professional1 && $scope.professional2 && $scope.professional3 && $scope.professional4;
    };

    var isMaster = function () {
        return isExpert() && $scope.professional1 && $scope.professional2 && !$scope.professional3
            && $scope.professional4 && $scope.master1 && $scope.master2 && $scope.master3 && $scope.master4
            && $scope.master5 && $scope.master6;
    };

}]);