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
            $scope.selectedTab = 1;
            RetrieveAssessments.getAssessments().then(function (response) {
                $scope.allAssessments = response.data;
                $scope.assessmentPortfolios = getAllPortfolios($scope.allAssessments);
                $scope.selectedPortfolio = $scope.assessmentPortfolios[0];
                $scope.assessmentDates = getAssessmentDates($scope.allAssessments, $scope.selectedPortfolio);
                $scope.dateOfAssessment = $scope.assessmentDates[0];
                $scope.teamNames = getTeamNames($scope.allAssessments);
                $scope.selectedTeamName = $scope.teamNames[0];
                $scope.showChart();
                $scope.showHistory();

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
            $scope.drawRadialChart();
        };

        $scope.drawRadialChart = function(){
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
                    }
                }
            });
        };

        $scope.updateChart = function(){
            $scope.showChart();
        };

        $scope.showHistory = function(){
            $scope.assessmentsForTeam = getAssessmentsForTeam($scope.allAssessments, $scope.selectedTeamName);
            $scope.data = createDataSetForHistory($scope.assessmentsForTeam);
            var options = {
                responsive: true,
                title: {
                    display: true,
                    position: "top",
                    text: "Trends for Feature Team " + $scope.selectedTeamName,
                    fontSize: 18,
                    fontColor: "#111"
                },
                legend: {
                    display: true,
                    position: "bottom",
                    labels: {
                        fontColor: "#333",
                        fontSize: 16
                    }
                },
                scale: {
                    ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: 5,
                        stepSize: 1
                    }
                }
            };

            $scope.drawHistoryChart(options);

        };

        $scope.drawHistoryChart = function(options){
            new Chart(document.getElementById("history-chart-previous"), {
                type: "line",
                data: $scope.data,
                options: options
            });
        };
        
        $scope.updateTeamInformation = function(){
            $scope.showHistory();
        };

        var getAllPortfolios = function(assessments){
            var assessmentPortfolios = [];
            for(var id in assessments){
                var portfolioName = assessments[id].portfolio;
                if(assessmentPortfolios.indexOf(portfolioName) === -1)
                {
                    assessmentPortfolios.push(portfolioName);
                }
            }
            return assessmentPortfolios;
        };

        var getAssessmentDates = function(assessments, portfolio){
            var assessmentDates = [];
            for(var id in assessments){
                var dateAssessed = assessments[id].dateAssessed;

                if(assessments[id].portfolio === portfolio && assessmentDates.indexOf(dateAssessed)=== -1) {
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

        var getTeamNames = function (assessments) {
            var assessmentNames = [];
            for(var id in assessments){
                var assessmentArray = assessments[id].assessments;
                for(var id in assessmentArray) {
                    var assessment = assessmentArray[id];
                    if (assessmentNames.indexOf(assessment.teamName) === -1 && assessment.teamName !== 'Average For All The Teams') {
                        assessmentNames.push(assessment.teamName);
                    }
                }
            }
            return assessmentNames;
        };

        var getAssessmentsForTeam = function(assessments, teamName){
            var teamAssessments = [];
            for(var id in assessments){
                var assessment = assessments[id].assessments;
                var dateAssessed = assessments[id].dateAssessed;
                for(var a_id in assessment) {
                    var assessment2 = assessment[a_id];
                    if (assessment2.teamName === teamName) {
                        assessment2['dateAssessed'] = dateAssessed;
                        teamAssessments.push(assessment2);
                    }
                }
            }
            return teamAssessments;
        };

        var getAssessmentDatesForTeam = function(assessments){
            var assessmentDates = [];
            for(var id in assessments){
                var dateAssessed = assessments[id].dateAssessed;
                if(assessmentDates.indexOf(dateAssessed) === -1) {
                    assessmentDates.push(dateAssessed);
                }
            }
            return assessmentDates;
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

        var createDataSetForHistory = function(assessments){
            var teamAssessmentDates = getAssessmentDatesForTeam(assessments);
            var labels = teamAssessmentDates;
            var strategyData = [];
            var planningData = [];
            var codingData = [];
            var ciData = [];
            var incidentData = [];
            var riskData = [];
            var designData = [];
            var teamingData = [];
            var releaseData = [];
            var qaData = [];
            var environmentsData = [];
            var featureTeamsData = [];

            for(var id in teamAssessmentDates){
                strategyData.push(getAssessmentScoreForDimensionAndDate(assessments, teamAssessmentDates[id], 'strategy'));
                planningData.push(getAssessmentScoreForDimensionAndDate(assessments, teamAssessmentDates[id], 'planning'));
                codingData.push(getAssessmentScoreForDimensionAndDate(assessments, teamAssessmentDates[id], 'coding'));
                ciData.push(getAssessmentScoreForDimensionAndDate(assessments, teamAssessmentDates[id], 'ci'));
                incidentData.push(getAssessmentScoreForDimensionAndDate(assessments, teamAssessmentDates[id], 'incident'));
                riskData.push(getAssessmentScoreForDimensionAndDate(assessments, teamAssessmentDates[id], 'risk'));
                designData.push(getAssessmentScoreForDimensionAndDate(assessments, teamAssessmentDates[id], 'design'));
                teamingData.push(getAssessmentScoreForDimensionAndDate(assessments, teamAssessmentDates[id], 'teaming'));
                releaseData.push(getAssessmentScoreForDimensionAndDate(assessments, teamAssessmentDates[id], 'release'));
                qaData.push(getAssessmentScoreForDimensionAndDate(assessments, teamAssessmentDates[id], 'qa'));
                environmentsData.push(getAssessmentScoreForDimensionAndDate(assessments, teamAssessmentDates[id], 'environments'));
                featureTeamsData.push(getAssessmentScoreForDimensionAndDate(assessments, teamAssessmentDates[id], 'featureTeams'));
            }

            var data = {
                labels: labels,
                datasets: [
                    {
                        label: "Strategy Alignment",
                        data: strategyData,
                        backgroundColor: "blue",
                        borderColor: "blue",
                        fill: false,
                        lineTension: 0,
                        radius: 5
                    },
                    {
                        label: "Planning and Requirements",
                        data: planningData,
                        backgroundColor: "green",
                        borderColor: "green",
                        fill: false,
                        lineTension: 0,
                        radius: 5
                    },
                    {
                        label: "Coding Practices",
                        data: codingData,
                        backgroundColor: "red",
                        borderColor: "red",
                        fill: false,
                        lineTension: 0,
                        radius: 5
                    },
                    {
                        label: "Continuous Integration",
                        data: ciData,
                        backgroundColor: "black",
                        borderColor: "black",
                        fill: false,
                        lineTension: 0,
                        radius: 5
                    },
                    {
                        label: "Incident Management",
                        data: incidentData,
                        backgroundColor: "purple",
                        borderColor: "purple",
                        fill: false,
                        lineTension: 0,
                        radius: 5
                    },
                    {
                        label: "Risk and Issue Management",
                        data: riskData,
                        backgroundColor: "yellow",
                        borderColor: "yellow",
                        fill: false,
                        lineTension: 0,
                        radius: 5
                    },
                    {
                        label: "Software Design",
                        data: designData,
                        backgroundColor: "orange",
                        borderColor: "orange",
                        fill: false,
                        lineTension: 0,
                        radius: 5
                    },
                    {
                        label: "Teaming",
                        data: teamingData,
                        backgroundColor: "brown",
                        borderColor: "brown",
                        fill: false,
                        lineTension: 0,
                        radius: 5
                    },
                    {
                        label: "Release Management",
                        data: releaseData,
                        backgroundColor: "grey",
                        borderColor: "grey",
                        fill: false,
                        lineTension: 0,
                        radius: 5
                    },
                    {
                        label: "Quality Assurance",
                        data: qaData,
                        backgroundColor: "gold",
                        borderColor: "gold",
                        fill: false,
                        lineTension: 0,
                        radius: 5
                    },
                    {
                        label: "Environments",
                        data: environmentsData,
                        backgroundColor: "magenta",
                        borderColor: "magenta",
                        fill: false,
                        lineTension: 0,
                        radius: 5
                    },
                    {
                        label: "Feature Teams",
                        data: featureTeamsData,
                        backgroundColor: "pink",
                        borderColor: "pink",
                        fill: false,
                        lineTension: 0,
                        radius: 5
                    }
                ]
            };

            return data;

        };

        var getAssessmentScoreForDimensionAndDate = function(assessments, dateRequested, dimensionName){
            for(var id in assessments){
                var assessment = assessments[id];
                if(assessment.dateAssessed === dateRequested){
                   return assessment[dimensionName];
                }
            }
        }

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