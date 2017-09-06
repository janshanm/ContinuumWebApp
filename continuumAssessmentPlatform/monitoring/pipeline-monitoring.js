'use strict';

angular.module('continuumAssessmentPlatform.pipeline-monitoring', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pipeline-monitoring', {
    templateUrl: 'monitoring/pipeline-monitoring.html',
    controller: 'PipelineMonitoringCtrl'
  });
}])

.controller('PipelineMonitoringCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.question1 = false;
    $scope.question2 = false;
    $scope.question3 = false;
    $scope.question4 = false;
    $scope.question5 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessmentsPipeline !== "undefined"){
            var assessments = $rootScope.assessmentsPipeline;
            var pipelineCode = assessments['pipeline-monitoring'];
            if(pipelineCode !== undefined) {
                $scope.question1 = pipelineCode['question1'];
                $scope.question2 = pipelineCode['question2'];
                $scope.question3 = pipelineCode['question3'];
                $scope.question4 = pipelineCode['question4'];
                $scope.question5 = pipelineCode['question5'];
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

        $rootScope.assessmentsPipeline['pipeline-monitoring'] = {
            'question1': $scope.question1,
            'question2': $scope.question2,
            'question3': $scope.question3,
            'question4': $scope.question4,
            'question5': $scope.question5,
            'score': $scope.computeCodeAssessmentScore()
        };
    };

    $scope.computeCodeAssessmentScore = function(){
        if(isTraveller() && !isArtisan() && !isExpert() && !isProfessional()){
            return 2;
        }
        else if(isArtisan() && !isExpert() && !isProfessional()){
            return 3;
        }
        else if(isExpert() && !isProfessional()){
            return 4;
        }
        else if(isProfessional()){
            return 5;
        }
        else{
            return 1;
        }

    };

    var isTraveller = function(){
        return $scope.question1;
    };

    var isArtisan = function () {
        return $scope.question1 && $scope.question2 && $scope.question3;
    };

    var isExpert = function() {
        return isArtisan() && $scope.question4 && $scope.question5;
    };

    var isProfessional = function () {
        return isExpert();
    };

}]);