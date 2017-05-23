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
                $scope.strategyScore = assessments['strategy'] !== undefined ? assessments['strategy'].score : 0;
                $scope.planningScore = assessments['planning'] !== undefined ? assessments['planning'].score : 0;
                $scope.codingScore = assessments['coding'] !== undefined ? assessments['coding'].score : 0;
                $scope.ciScore = assessments['ci'] !== undefined ? assessments['ci'].score : 0;
                $scope.incidentScore = assessments['incident'] !== undefined ? assessments['incident'].score : 0;
                $scope.riskScore = assessments['risk'] !== undefined ? assessments['risk'].score : 0;
                $scope.designScore = assessments['design'] !== undefined ? assessments['design'].score : 0;
                $scope.teamingScore = assessments['teaming'] !== undefined ? assessments['teaming'].score : 0;
                $scope.releaseScore = assessments['release'] !== undefined ? assessments['release'].score : 0;
                $scope.QAScore = assessments['QA'] !== undefined ? assessments['QA'].score : 0;
                $scope.environmentsScore = assessments['environments'] !== undefined ? assessments['environments'].score : 0;
                $scope.featureTeamsScore = assessments['featureTeams'] !== undefined ? assessments['featureTeams'].score : 0;
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
                            label: "TEAM: " + $rootScope.teamName,
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
                        text: 'Assessment Results for ' + $rootScope.teamName
                    },
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 5,
                            stepSize: 1
                        }
                    },
                    animation: {
                        onComplete: function () {
                            window.JSREPORT_READY_TO_START = true
                        }
                    }
                }
            });

        }

    }]);