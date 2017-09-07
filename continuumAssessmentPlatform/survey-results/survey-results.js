'use strict';

angular.module('continuumAssessmentPlatform.survey-results', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/survey-results', {
            templateUrl: 'survey-results/survey-results.html',
            controller: 'SurveyResultsCtrl'
        });
    }])

    .controller('SurveyResultsCtrl', ['$scope', '$rootScope', '$location', 'RetrieveSurveys', function($scope, $rootScope, $location, RetrieveSurveys) {
        $scope.softwareScore = 1;
        $scope.agileCoachingScore = 1;
        $scope.changeAndReleaseScore = 1;
        $scope.qualityEngineeringScore = 1;
        $scope.enterpriseArchitectureScore = 1;
        $scope.solutionsArchitectureScore = 1;
        $scope.dataServicesScore = 1;

        $scope.resultsData = {};
        $scope.bodyData = {};
        $scope.selectedTab = 1;

        $scope.init = function () {
            $scope.selectedTab = 1;

            var parameters = $location.search();
            var teamName = parameters.teamName;

            RetrieveSurveys.getSurveyResultsForTeam(teamName).then(function(response){
                $scope.allSurveyResults = response.data;
                $scope.allTeams = getSurveyTeams($scope.allSurveyResults);
                $scope.selectedTeam = $scope.allTeams[0];
                var surveyPeriods = getSurveyPeriods($scope.allSurveyResults, $scope.selectedTeam);
                $scope.periodsOfYear = surveyPeriods.length === 0 ? getCurrentQuarter() : surveyPeriods ;
                $scope.selectedPeriodOfTheYear = $scope.periodsOfYear[0];

                $scope.showChart();
                // $scope.showHistory();
            });
        };

        var getCurrentQuarter = function(){
            var currentDate = new Date();
            var month = currentDate.getUTCMonth() + 1;
            var year = currentDate.getUTCFullYear();

            var quarter = "";

            if(month <= 3){
                quarter = "Quarter 1 - " + year;
            }
            else if(month > 3 && month <= 6){
                quarter = "Quarter 2 - " + year;
            }
            else if(month > 6 && month <= 9){
                quarter = "Quarter 3 - " + year;
            }
            else{
                quarter = "Quarter 4 - " + year;
            }

            return [quarter];
        };

        $scope.updatePeriodInformation = function(){
            var surveyPeriods = getSurveyPeriods($scope.allSurveyResults, $scope.selectedTeam);
            $scope.periodsOfYear = surveyPeriods.length === 0 ? getCurrentQuarter() : surveyPeriods ;
            $scope.selectedPeriodOfTheYear = $scope.periodsOfYear[0];
            $scope.showChart();
        };

        $scope.showChart = function(){
            $scope.surveysForPeriod = getSurveysForPeriod($scope.allSurveyResults, $scope.selectedPeriodOfTheYear, $scope.selectedTeam);
            $scope.completionRate = Math.round($scope.surveysForPeriod['completionRate']);
            $scope.incompletionRate = 100 - $scope.completionRate;
            $scope.completionRateStyle = $scope.completionRate + "%";
            $scope.incompletionRateStyle = $scope.incompletionRate + "%";

            $scope.dataSets = createDataSetForChart($scope.surveysForPeriod);
            $scope.drawRadialChart();
        };

        $scope.drawRadialChart = function(){
            if(window.mySurveyChart != undefined)
                window.mySurveyChart.destroy();

            window.mySurveyChart = new Chart(document.getElementById("radar-chart-results"), {
                type: 'radar',
                data: {
                    labels: ["Software Engineering", "Agile Coaching", "Change & Release Management",
                        "Quality Engineering (\"Testing\")", "Enterprise Architecture", "Solutions Architecture", "Data Services"
                    ],
                    datasets: $scope.dataSets
                },
                options: {
                    title: {
                        display: true,
                        text: 'Survey Results for Team: ' + $scope.selectedTeam + ' for Period - ' + $scope.selectedPeriodOfTheYear
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

        // $scope.showHistory = function(){
        //     $scope.surveysForTeam = getSurveysForTeam($scope.allSurveyResults, $scope.selectedTeam);
        //     $scope.data = createDataSetForHistory($scope.surveysForTeam);
        //     var options = {
        //         responsive: true,
        //         title: {
        //             display: true,
        //             position: "top",
        //             text: "Trends for Feature Team " + $scope.selectedTeamName,
        //             fontSize: 18,
        //             fontColor: "#111"
        //         },
        //         legend: {
        //             display: true,
        //             position: "bottom",
        //             labels: {
        //                 fontColor: "#333",
        //                 fontSize: 16
        //             }
        //         },
        //         scale: {
        //             ticks: {
        //                 beginAtZero: true,
        //                 min: 0,
        //                 max: 5,
        //                 stepSize: 1
        //             }
        //         }
        //     };
        //
        //     $scope.drawHistoryChart(options);
        // };

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

        var getSurveyTeams = function(surveyResultsList){
            var surveyTeams = [];
            for(var id in surveyResultsList){
                var teamName = surveyResultsList[id].teamName;
                var portfolio = surveyResultsList[id].portfolioName;
                if (surveyTeams.indexOf(teamName) === -1 && teamName !== portfolio) {
                    surveyTeams.push(teamName);
                }
            }
            return surveyTeams;
        };

        var getSurveyTeamPortfolio = function (surveyResultsList, teamName){
            for(var id in surveyResultsList){
                if (surveyResultsList[id].teamName === teamName) {
                    return surveyResultsList[id].portfolioName;
                }
            }
        };

        var getSurveyPeriods = function(surveyResultsList, teamName){
            var surveyPeriods = [];
            for(var id in surveyResultsList){
                var surveyResults = surveyResultsList[id].surveyResults;

                if(teamName === surveyResultsList[id].teamName) {
                    for (var counter in surveyResults) {
                        var surveyPeriod = surveyResults[counter].periodOfYear;

                        if (surveyPeriods.indexOf(surveyPeriod) === -1) {
                            surveyPeriods.push(surveyPeriod);
                        }
                    }
                }

            }

            return surveyPeriods;
        };

        var getSurveysForPeriod = function(surveyResultsList, periodOfYear, teamName){
            var formattedSurveyData = {};

            var surveys = [];
            var numberCompleted = 0;

            var portfolio = getSurveyTeamPortfolio(surveyResultsList, teamName);

            for(var id in surveyResultsList){
                var surveyTeamName = surveyResultsList[id].teamName;

                if(teamName === surveyTeamName || portfolio === surveyTeamName){
                    if(surveyTeamName !== portfolio) {
                        var totalNumber = parseInt(surveyResultsList[id].totalNumberOfBIO);
                    }
                    var surveysCompleted = surveyResultsList[id].surveyResults;

                    for(var counter in surveysCompleted){
                        if(periodOfYear === surveysCompleted[counter].periodOfYear){
                            surveys.push(surveysCompleted[counter]);
                            if(surveyTeamName !== portfolio) {
                                numberCompleted++;
                            }
                        }
                    }

                    formattedSurveyData['completionRate'] = (numberCompleted / totalNumber) * 100;
                    formattedSurveyData['surveys'] = surveys;
                }
            }

            return formattedSurveyData;
        };

        // var getSurveysForTeam = function(surveyResultsList, teamName){
        //     var formattedSurveyData = {};
        //
        //     var surveys = [];
        //     var numberCompleted = 0;
        //
        //     for(var id in surveyResultsList){
        //         if(teamName.equals(surveyResultsList[id].teamName)){
        //             var totalNumber = parseInt(surveyResultsList[id].totalNumberOfBIO);
        //
        //             var surveysCompleted = surveyResultsList[id].surveyResults;
        //
        //             for(var counter in surveysCompleted){
        //                 if(periodOfYear.equals(surveysCompleted[counter].periodOfYear)){
        //                     surveys.push(surveysCompleted[counter]);
        //                     numberCompleted++;
        //                 }
        //             }
        //
        //             formattedSurveyData['completionRate'] = numberCompleted / totalNumber;
        //             formattedSurveyData['surveys'] = surveys;
        //         }
        //     }
        //
        //     return formattedSurveyData;
        // };

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

        var createDataSetForChart = function(surveysForPeriod){
            var dataSets = [];
            var colorSelector = 0;
            var surveys = surveysForPeriod['surveys'];
            for(var id in surveys){
                var formattedData = {
                    label: "Surveyee: " + surveys[id].BIO,
                    fill: true,
                    backgroundColor: backColors[colorSelector],
                    borderColor: foreColors[colorSelector],
                    pointBorderColor: "#fff",
                    pointBackgroundColor: foreColors[colorSelector],
                    data: [surveys[id].softwareScore, surveys[id].agileCoachingScore, surveys[id].changeAndReleaseScore,
                        surveys[id].qualityEngineeringScore, surveys[id].enterpriseArchitectureScore,
                        surveys[id].solutionsArchitectureScore, surveys[id].dataServicesScore]
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
        };

    }])

    .factory('RetrieveSurveys', ['$http', function ($http) {
        return {
            getSurveyResultsForTeam: function (teamName) {
                return $http({
                    url: "http://localhost:8081/surveys?teamName=" + teamName,
                    method: "GET"
                });
            }
        }
    }]);

