'use strict';

angular.module('continuumAssessmentPlatform.pipeline-results', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/pipeline-results', {
            templateUrl: 'pipeline-results/pipeline-results.html',
            controller: 'PipelineResultsCtrl'
        });
    }])

    .controller('PipelineResultsCtrl', ['$scope', '$rootScope', '$location', 'RetrievePipelineResults', 'SavePipelineResults', function($scope, $rootScope, $location, RetrievePipelineResults, SavePipelineResults) {
        $scope.ciScore = 1;
        $scope.infrastructureScore = 1;
        $scope.environmentsScore = 1;
        $scope.qaScore = 1;
        $scope.codingPracticesScore = 1;
        $scope.monitoringScore = 1;
        $scope.resilienceScore = 1;
        $scope.generalPipelineScore = 1;

        $scope.resultsData = {};
        $scope.bodyData = {};
        $scope.selectedTab = 1;

        $scope.init = function () {
            $scope.selectedTab = 1;

            var parameters = $location.search();
            var teamName = parameters.teamName;

            if(teamName !== undefined){
                RetrievePipelineResults.getPipelineResultsForTeam(teamName).then(function(response){
                    var data = response.data;
                    $rootScope.teamName = teamName;
                    var assessments = data['rawData'] !== undefined ? JSON.parse(data['rawData']) : {};
                    $scope.generateResultsChart(assessments);
                });
            }
            else{
                $scope.generateResultsChart($rootScope.assessmentsPipeline);
            }
        };

        $scope.generateResultsChart = function(assessments) {
            if (typeof assessments !== "undefined") {
                $scope.ciScore = assessments['ci'] !== undefined ? assessments['ci'].score : 1;
                $scope.infrastructureScore = assessments['infrastructure'] !== undefined ? assessments['infrastructure'].score : 1;
                $scope.environmentsScore = assessments['pipeline-environments'] !== undefined ? assessments['pipeline-environments'].score : 1;
                $scope.qaScore = assessments['qa'] !== undefined ? assessments['qa'].score : 1;
                $scope.codingPracticesScore = assessments['pipeline-code'] !== undefined ? assessments['pipeline-code'].score : 1;
                $scope.monitoringScore = assessments['pipeline-monitoring'] !== undefined ? assessments['pipeline-monitoring'].score : 1;
                $scope.resilienceScore = assessments['pipeline-resilience'] !== undefined ? assessments['pipeline-resilience'].score : 1;
                $scope.generalPipelineScore = assessments['pipeline-general'] !== undefined ? assessments['pipeline-general'].score : 1;
            }

            $scope.resultsData['teamName'] = $rootScope.teamName;
            $scope.resultsData['ci'] = $scope.ciScore;
            $scope.resultsData['infrastructure'] = $scope.infrastructureScore;
            $scope.resultsData['environments'] = $scope.environmentsScore;
            $scope.resultsData['qa'] = $scope.qaScore;
            $scope.resultsData['codingPractices'] = $scope.codingPracticesScore;
            $scope.resultsData['monitoring'] = $scope.monitoringScore;
            $scope.resultsData['resilience'] = $scope.resilienceScore;
            $scope.resultsData['generalPipeline'] = $scope.generalPipelineScore;
            $scope.resultsData['rawData'] = assessments;

            SavePipelineResults.drawChart($rootScope.teamName, $scope.ciScore, $scope.infrastructureScore,
                $scope.environmentsScore, $scope.qaScore, $scope.codingPracticesScore, $scope.monitoringScore,
                $scope.resilienceScore, $scope.generalPipelineScore);
        };

        $scope.saveAssessmentResult = function () {
            SavePipelineResults.saveAssessments($scope.resultsData).then(function (response) {
                console.log(response.data);
                $scope.isSaved = true;
                $scope.isNotSaved = false;
            }, function (errorResponse) {
                console.log(errorResponse.data);
                $scope.isNotSaved = true;
                $scope.isSaved = false;
            });
        };

    }])

    .factory('SavePipelineResults', ['$http', function($http){
        return {
            drawChart: function (teamName, ciScore, infrastructureScore, environmentsScore, qaScore, codingPracticesScore,
                                 monitoringScore, resilienceScore, generalPipelineScore) {

                if(window.myChart != undefined && Object.keys(window.myChart).length !== 0)
                    window.myChart.destroy();

                window.myChart = new Chart(document.getElementById("radar-chart-pipeline"), {
                    type: 'radar',
                    data: {
                        labels: ["Continuous Integration", "Infrastructure Automation", "Environments", "Quality Assurance",
                            "Coding Practices/Code quality", "Monitoring and Analytics", "Resilience", "General Pipeline"
                        ],
                        datasets: [
                            {
                                label: "TEAM: " + teamName,
                                fill: true,
                                backgroundColor: "rgba(255,99,132,0.2)",
                                borderColor: "rgba(255,99,132,1)",
                                pointBorderColor: "#fff",
                                pointBackgroundColor: "rgba(255,99,132,1)",
                                data: [ciScore, infrastructureScore, environmentsScore, qaScore, codingPracticesScore,
                                    monitoringScore, resilienceScore, generalPipelineScore
                                ]
                            }
                        ]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'Assessment Results for ' + teamName
                        },
                        scale: {
                            ticks: {
                                beginAtZero: true,
                                min: 0,
                                max: 5,
                                stepSize: 1
                            }
                        }
                    }
                });
            },
            saveAssessments: function (body) {
                return $http({
                    url: "http://178.62.75.15:8081/savePipelineData",
                    method: "POST",
                    data: body
                });
            }
        }
    }])

    .factory('RetrievePipelineResults', ['$http', function ($http) {
        return {
            getPipelineResultsForTeam: function (teamName) {
                return $http({
                    url: "http://178.62.75.15:8081/pipeline?teamName=" + teamName,
                    method: "GET"
                });
            }
        }
    }]);

