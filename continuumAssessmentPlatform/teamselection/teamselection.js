'use strict';

angular.module('continuumAssessmentPlatform.teamselection', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/select-team', {
            templateUrl: 'teamselection/team-selection.html',
            controller: 'TeamSelectionCtrl'
        });
    }])

    .controller('TeamSelectionCtrl', ['$location', '$scope', '$rootScope', function($location, $scope, $rootScope) {
        $scope.teams = [{}];
        $scope.selectedTeam = "";

        $scope.init = function () {
            $scope.teams = [{'name': 'SBG Mobile'}, {'name': 'Core Banking'},
                {'name': 'DevOps'}];
        };

        $scope.saveTeamName = function(){
            if($scope.selectedTeam === ""){
                $rootScope.hasError = true;
                $location.path('/select-team');
            }
            else {
                $rootScope.hasError = false;
                $rootScope.teamName = $scope.selectedTeam;
                $location.path('/strategy');
            }
        }

    }]);