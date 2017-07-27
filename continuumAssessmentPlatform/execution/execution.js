angular.module('continuumAssessmentPlatform.execution', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/execution', {
            templateUrl: 'execution/execution.html',
            controller: 'ExecutionCtrl'
        });
    }])

    .controller('ExecutionCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.traveller1 = false;
        $scope.traveller2 = false;
        $scope.traveller3 = false;
        $scope.traveller4 = false;
        $scope.traveller5 = false;
        $scope.traveller6 = false;
        $scope.artisan1 = false;
        $scope.artisan2 = false;
        $scope.expert1 = false;
        $scope.expert2 = false;
        $scope.expert3 = false;
        $scope.professional1 = false;
        $scope.professional2 = false;
        $scope.master1 = false;
        $scope.master2 = false;

        $scope.init = function () {
            if(typeof $rootScope.assessmentsQa !== "undefined"){
                var assessmentsQa = $rootScope.assessmentsQa;
                var execution = assessmentsQa['execution'];
                if(execution !== undefined) {
                    $scope.traveller1 = execution['traveller1'];
                    $scope.traveller2 = execution['traveller2'];
                    $scope.traveller3 = execution['traveller3'];
                    $scope.traveller4 = execution['traveller4'];
                    $scope.traveller5 = execution['traveller5'];
                    $scope.traveller6 = execution['traveller6'];
                    $scope.artisan1 = execution['artisan1'];
                    $scope.artisan2 = execution['artisan2'];
                    $scope.expert1 = execution['expert1'];
                    $scope.expert2 = execution['expert2'];
                    $scope.expert3 = execution['expert3'];
                    $scope.professional1 = execution['professional1'];
                    $scope.professional2 = execution['professional2'];
                    $scope.master1 = execution['master1'];
                    $scope.master2 = execution['master2'];
                }
            }
        };

        $scope.getClass = function(value){
            return value ? 'bg-info': 'bg-warning';
        };

        $scope.saveAssessments = function(){
            if($rootScope.assessmentsQa === undefined){
                $rootScope.assessmentsQa = {};
            }

            $rootScope.assessmentsQa['execution'] = {
                'traveller1': $scope.traveller1,
                'traveller2': $scope.traveller2,
                'traveller3': $scope.traveller3,
                'traveller4': $scope.traveller4,
                'traveller5': $scope.traveller5,
                'traveller6': $scope.traveller6,
                'artisan1': $scope.artisan1,
                'artisan2': $scope.artisan2,
                'expert1': $scope.expert1,
                'expert2': $scope.expert2,
                'expert3': $scope.expert3,
                'professional1': $scope.professional1,
                'professional2': $scope.professional2,
                'master1': $scope.master1,
                'master2': $scope.master2,
                'score': $scope.computeExecutionAssessmentScore()
            };
        };

        $scope.computeExecutionAssessmentScore = function(){
            if(isTraveller()){
                return 1;
            }
            else if(isArtisan() && !isExpert() && !isProfessional() && !isMaster()){
                return 2;
            }
            else if(isExpert() && !isProfessional() && !isMaster()){
                return 3;
            }
            else if(isProfessional() && !isMaster()){
                return 4;
            }
            else if(isMaster()){
                return 5;
            }
            else{
                return 1;
            }
        };

        var isTraveller = function(){
            return $scope.traveller1 && $scope.traveller2 && $scope.traveller3 && $scope.traveller4
                && $scope.traveller5 && $scope.traveller6;
        };

        var isArtisan = function () {
            return !$scope.traveller1 && !$scope.traveller2 && !$scope.traveller3 && !$scope.traveller4
                && !$scope.traveller5 && !$scope.traveller6 && $scope.artisan1 && $scope.artisan2;
        };

        var isExpert = function() {
            return isArtisan() && $scope.expert1 && $scope.expert2 && $scope.expert3;
        };

        var isProfessional = function () {
            return isExpert() && $scope.professional1 && $scope.professional2;
        };

        var isMaster = function () {
            return isProfessional() && $scope.master1 && $scope.master2;
        };

    }]);
