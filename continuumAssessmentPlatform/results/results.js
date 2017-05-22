'use strict';

angular.module('continuumAssessmentPlatform.results', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/results', {
            templateUrl: 'results/results.html',
            controller: 'ResultsCtrl'
        });
    }])

    .controller('ResultsCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

        $scope.strategyScore = 0;
        $scope.planningScore = 0;
        $scope.codingScore = 0;
        $scope.ciScore = 0;
        $scope.incidentScore = 0;
        $scope.riskScore = 0;
        $scope.designScore = 0;
        $scope.teamingScore = 0;
        $scope.releaseScore = 0;
        $scope.QAScore = 0;
        $scope.environmentsScore = 0;
        $scope.featureTeamsScore = 0;

        $scope.init = function () {
            var assessments = $rootScope.assessments;
            if(typeof assessments !== "undefined") {
                $scope.strategyScore = assessments['strategy'].score;
                $scope.planningScore = assessments['planning'].score;
                $scope.codingScore = assessments['coding'].score;
                $scope.ciScore = assessments['ci'].score;
                $scope.incidentScore = assessments['incident'].score;
                $scope.riskScore = assessments['risk'].score;
                $scope.designScore = assessments['design'].score;
                $scope.teamingScore = assessments['teaming'].score;
                $scope.releaseScore = assessments['release'].score;
                $scope.QAScore = assessments['QA'].score;
                $scope.environmentsScore = assessments['environments'].score;
                $scope.featureTeamsScore = assessments['featureTeams'].score;
            }

            new Chart(document.getElementById("radar-chart"), {
                type: 'radar',
                data: {
                    labels: ["Strategy Alignment", "Planning and Requirements", "Coding Practices",
                        "Continuous Integration", "Incident Management", "Risk and Issue Management", "Software Design",
                        "Teaming", "Release Management", "Quality Assurance", "Environments", "Feature Teams"
                    ],
                    datasets: [
                        {
                            label: "TEAM",
                            fill: true,
                            backgroundColor: "rgba(255,99,132,0.2)",
                            borderColor: "rgba(255,99,132,1)",
                            pointBorderColor: "#fff",
                            pointBackgroundColor: "rgba(255,99,132,1)",
                            data: [$scope.strategyScore,$scope.planningScore,$scope.codingScore,$scope.ciScore,
                                $scope.incidentScore, $scope.riskScore, $scope.designScore, $scope.teamingScore,
                                $scope.releaseScore, $scope.QAScore, $scope.environmentsScore, $scope.featureTeamsScore
                            ]
                        }
                    ]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Assessment Results for Team'
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
        }

    }]);