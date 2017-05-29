'use strict';

angular.module('continuumAssessmentPlatform.previous-assessments', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/previous-assessments', {
            templateUrl: 'previous-assessments/previous-assessments.html',
            controller: 'PreviousAssessmentsCtrl'
        });
    }])

    .controller('PreviousAssessmentsCtrl', ['$scope', 'RetrieveAssessments', function($scope, RetrieveAssessments) {

        $scope.init = function () {
            RetrieveAssessments.getAssessments().then(function (response) {
                $scope.allAssessments = response.data;
                $scope.assessmentPortfolios = getAllPortfolios($scope.allAssessments);
                $scope.selectedPortfolio = $scope.assessmentPortfolios[0];
                $scope.assessmentDates = getAssessmentDates($scope.allAssessments, $scope.selectedPortfolio);
                $scope.dateOfAssessment = $scope.assessmentDates[0];
                $scope.showChart();

            });
        };

        $scope.updatePortfolio = function(){
            $scope.assessmentDates = getAssessmentDates($scope.allAssessments, $scope.selectedPortfolio);
            $scope.dateOfAssessment = $scope.assessmentDates[0];
            $scope.showChart();
        };

        $scope.showChart = function(){
            $scope.assessmentsForDate = getAssessmentsForDate($scope.allAssessments, $scope.dateOfAssessment, $scope.selectedPortfolio);
            $scope.dataSets = createDataSetForChart($scope.assessmentsForDate);
            new Chart(document.getElementById("radar-chart-previous"), {
                type: 'radar',
                data: {
                    labels: ["Strategy Alignment", "Planning and Requirements", "Coding Practices",
                        "Continuous Integration", "Incident Management", "Risk and Issue Management", "Software Design",
                        "Teaming", "Release Management", "Quality Assurance", "Environments", "Feature Teams"
                    ],
                    datasets: $scope.dataSets
                },
                options: {
                    title: {
                        display: true,
                        text: 'Assessment Results for Teams in Portfolio: ' + $scope.selectedPortfolio + ' for Date - ' + $scope.dateOfAssessment
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
        };

        $scope.updateChart = function(){
            $scope.showChart();
        };

        var getAllPortfolios = function(assessments){
            var assessmentPortfolios = [];
            for(var id in assessments){
                var portfolioName = assessments[id].portfolio;
                if(!assessmentPortfolios.includes(portfolioName))
                {
                    assessmentPortfolios.push(portfolioName);
                }
            }
            console.log(assessmentPortfolios);
            return assessmentPortfolios;
        };

        var getAssessmentDates = function(assessments, portfolio){
            var assessmentDates = [];
            for(var id in assessments){
                var dateAssessed = assessments[id].dateAssessed;

                if(assessments[id].portfolio === portfolio && !assessmentDates.includes(dateAssessed)) {
                    assessmentDates.push(dateAssessed);
                }
            }

            return assessmentDates;
        };

        var getAssessmentsForDate = function(assessments, dateRequested, portfolio){
            var assessmentsForDate = [];
            for(var id in assessments){
                if(assessments[id].dateAssessed === dateRequested && assessments[id].portfolio === portfolio) {
                    assessmentsForDate = assessments[id].assessments;
                }
            }
            return assessmentsForDate;
        };

        var foreColors = ["rgba(255,99,132,1)", "rgba(141, 92, 7, 1)","rgba(216, 239, 42, 1)", "rgba(130, 239, 42, 1)",
            "rgba(42, 239, 58, 1)", "rgba(116, 164, 120, 1)", "rgba(116, 153, 164, 1)", "rgba(116, 136, 164, 1)",
            "rgba(116, 123, 164, 1)", "rgba(122, 116, 164, 1)", "rgba(143, 116, 164, 1)", "rgba(159, 116, 164, 1)",
            "rgba(164, 116, 154, 1)", "rgba(164, 116, 138, 1)", "rgba(186, 94, 114, 1)", "rgba(206, 75, 103, 1)",
            "rgba(223, 58, 93, 1)", "rgba(53, 3, 14, 1)", "rgba(87, 5, 22, 1)", "rgba(251, 187, 201, 1)",
            "rgba(92, 60, 5, 1)", "rgba(239, 147, 42, 1)", "rgba(242, 158, 13, 1)", "rgba(251, 228, 187, 1)"];

        var backColors = ["rgba(255,99,132,0.2)", "rgba(141, 92, 7, 0.2)", "rgba(216, 239, 42, 0.2)", "rgba(130, 239, 42, 0.2)",
            "rgba(42, 239, 58, 0.2)", "rgba(116, 164, 120, 0.2)", "rgba(116, 153, 164, 0.2)", "rgba(116, 136, 164, 0.2)",
            "rgba(116, 123, 164, 0.2)", "rgba(122, 116, 164, 0.2)", "rgba(143, 116, 164, 0.2)", "rgba(159, 116, 164, 0.2)",
            "rgba(164, 116, 154, 0.2)", "rgba(164, 116, 138, 0.2)", "rgba(186, 94, 114, 0.2)", "rgba(206, 75, 103, 0.2)",
            "rgba(223, 58, 93, 0.2)", "rgba(53, 3, 14, 0.2)", "rgba(87, 5, 22, 0.2)", "rgba(251, 187, 201, 0.2)",
            "rgba(92, 60, 5, 0.2)", "rgba(239, 147, 42, 0.2)", "rgba(242, 158, 13, 0.2)", "rgba(251, 228, 187, 0.2)"];

        var createDataSetForChart = function(assessments){
            var dataSets = [];
            var colorSelector = 0;
            for(var id in assessments){
                var formattedData = {
                    label: "TEAM: " + assessments[id].teamName,
                    fill: true,
                    backgroundColor: backColors[colorSelector],
                    borderColor: foreColors[colorSelector],
                    pointBorderColor: "#fff",
                    pointBackgroundColor: foreColors[colorSelector],
                    data: [assessments[id].strategy, assessments[id].planning, assessments[id].coding, assessments[id].ci,
                        assessments[id].incident, assessments[id].risk, assessments[id].design, assessments[id].teaming,
                        assessments[id].release, assessments[id].qa, assessments[id].environments, assessments[id].featureTeams
                    ]
                };
                dataSets.push(formattedData);
                colorSelector = colorSelector + 1;
            }

            return dataSets;
        };

    }])

    .factory('RetrieveAssessments', ['$http', function ($http) {
        return {
            getAssessments: function () {
                return $http({
                    url: "http://localhost:4567/assessments",
                    method: "GET"
                });
            }
        }
    }]);