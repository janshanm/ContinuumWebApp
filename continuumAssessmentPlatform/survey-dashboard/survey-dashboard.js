'use strict';

angular.module('continuumAssessmentPlatform.survey-dashboard', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/survey-dashboard', {
            templateUrl: 'survey-dashboard/survey-dashboard.html',
            controller: 'SurveyDashboardCtrl'
        });
    }])

    .controller('SurveyDashboardCtrl', ['$scope', '$rootScope', 'RetrieveSurveyDashboard', function($scope, $rootScope, RetrieveSurveyDashboard) {
        $scope.init = function () {
            $scope.selectedTab = 1;
            var chartOptions = {
                rotation: -Math.PI,
                cutoutPercentage: 30,
                circumference: Math.PI,
                legend: {
                    position: 'left'
                },
                animation: {
                    animateRotate: false,
                    animateScale: true
                }
            };

            RetrieveSurveyDashboard.getSurveySurveyDashboard().then(function(response){
                $scope.response = response.data;
                var ctoCompleted = $scope.response['completionRateCTO'];
                var ctoNotCompleted = 100 - ctoCompleted;

                var nonCtoCompleted = $scope.response['completionRateNonCTO'];
                var nonCtoNotCompleted = 100 - nonCtoCompleted;

                var totalCompleted = $scope.response['completionRate'];
                var totalNotCompleted = 100 - totalCompleted;


                var ctoData = {
                    labels: [
                        "Completed CTO",
                        "Not-Completed CTO"
                    ],
                    datasets: [
                        {
                            data: [ctoCompleted, ctoNotCompleted],
                            backgroundColor: [
                                "#63FF84",
                                "#FF6384"
                            ],
                            borderColor: "black",
                            borderWidth: 2
                        }]
                };

                var nonCtoData = {
                    labels: [
                        "Completed Other Portfolio",
                        "Not-Completed Other Portfolio"
                    ],
                    datasets: [
                        {
                            data: [nonCtoCompleted, nonCtoNotCompleted],
                            backgroundColor: [
                                "#63FF84",
                                "#FF6384"
                            ],
                            borderColor: "black",
                            borderWidth: 2
                        }]
                };

                var totalData = {
                    labels: [
                        "Completed Total",
                        "Not-Completed Total"
                    ],
                    datasets: [
                        {
                            data: [totalCompleted, totalNotCompleted],
                            backgroundColor: [
                                "#63FF84",
                                "#FF6384"
                            ],
                            borderColor: "black",
                            borderWidth: 2
                        }]
                };

                new Chart(document.getElementById("radar-donut-cto"),{
                    type: 'pie',
                    data: ctoData,
                    options: chartOptions
                });

                new Chart(document.getElementById("radar-donut-non-cto"),{
                    type: 'pie',
                    data: nonCtoData,
                    options: chartOptions
                });

                new Chart(document.getElementById("radar-donut-total"),{
                    type: 'pie',
                    data: totalData,
                    options: chartOptions
                });
                console.log($scope.response);
            });
        };

    }])

    .factory('RetrieveSurveyDashboard', ['$http', function ($http) {
        return {
            getSurveySurveyDashboard: function () {
                return $http({
                    url: "http://localhost:8081/dashboard",
                    method: "GET"
                });
            }
        }
    }]);

