'use strict';

angular.module('continuumAssessmentPlatform.pipeline-resilience', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/pipeline-resilience', {
            templateUrl: 'pipeline-resilience/pipeline-resilience.html',
            controller: 'PipelineResilienceCtrl'
        });
    }])

    .controller('PipelineResilienceCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

        $scope.question1 = false;
        $scope.question2 = false;
        $scope.question3 = false;

        $scope.init = function () {
            if(typeof $rootScope.assessmentsPipeline !== "undefined"){
                var assessments = $rootScope.assessmentsPipeline;
                var pipelineCode = assessments['pipeline-resilience'];
                if(pipelineCode !== undefined) {
                    $scope.question1 = pipelineCode['question1'];
                    $scope.question2 = pipelineCode['question2'];
                    $scope.question3 = pipelineCode['question3'];
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

            $rootScope.assessmentsPipeline['pipeline-resilience'] = {
                'question1': $scope.question1,
                'question2': $scope.question2,
                'question3': $scope.question3,
                'score': $scope.computeCodeAssessmentScore()
            };
        };

        $scope.computeCodeAssessmentScore = function(){
            if(isTraveller() && !isArtisan()){
                return 3;
            }
            else if(isArtisan() && !isExpert() && !isProfessional()){
                return 4;
            }
            else if(isExpert() && !isProfessional()){
                return 5;
            }
            else if(isProfessional()){
                return 5;
            }
            else{
                return 1;
            }

        };

        var isTraveller = function(){
            return $scope.question1 && $scope.question3;
        };

        var isArtisan = function () {
            return isTraveller() && $scope.question2;
        };

        var isExpert = function () {
            return isArtisan();
        };

        var isProfessional = function () {
            return isArtisan();
        };

    }]);