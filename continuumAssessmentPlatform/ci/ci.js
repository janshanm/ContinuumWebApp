'use strict';

angular.module('continuumAssessmentPlatform.pipeline-ci', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pipeline-ci', {
    templateUrl: 'ci/ci.html',
    controller: 'PipelineCICtrl'
  });
}])

.controller('PipelineCICtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.question1 = false;
    $scope.question2 = false;
    $scope.question3 = false;
    $scope.question4 = false;
    $scope.question5 = false;
    $scope.question6 = false;
    $scope.question7 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessmentsPipeline !== "undefined"){
            var assessments = $rootScope.assessmentsPipeline;
            var ci = assessments['ci'];
            if(ci !== undefined) {
                $scope.question1 = ci['question1'];
                $scope.question2 = ci['question2'];
                $scope.question3 = ci['question3'];
                $scope.question4 = ci['question4'];
                $scope.question5 = ci['question5'];
                $scope.question6 = ci['question6'];
                $scope.question7 = ci['question7'];
            }
        }
    };

    $scope.getClass = function(value){
        return value ? 'bg-info': 'bg-warning';
    };

    $scope.saveAssessments = function(){
        if($rootScope.assessmentsPipeline === undefined){
            $rootScope.assessmentsPipeline = {};
        }

        $rootScope.assessmentsPipeline['ci'] = {
            'question1': $scope.question1,
            'question2': $scope.question2,
            'question3': $scope.question3,
            'question4': $scope.question4,
            'question5': $scope.question5,
            'question6': $scope.question6,
            'question7': $scope.question7,
            'score': $scope.computeCodeAssessmentScore()
        };
    };

    $scope.computeCodeAssessmentScore = function(){
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
        return $scope.question3;
    };

    var isArtisan = function () {
        return $scope.question2 && $scope.question3;
    };

    var isExpert = function() {
        return isArtisan() && $scope.question1 && $scope.question5;
    };

    var isProfessional = function () {
        return isExpert() && $scope.question4 && $scope.question6;
    };

    var isMaster = function () {
        return isProfessional() && $scope.question7;
    }


}]);