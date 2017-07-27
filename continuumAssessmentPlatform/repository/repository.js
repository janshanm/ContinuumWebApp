angular.module('continuumAssessmentPlatform.repository', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/repository', {
            templateUrl: 'repository/repository.html',
            controller: 'RepositoryCtrl'
        });
    }])

    .controller('RepositoryCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.traveller1 = false;
        $scope.traveller2 = false;
        $scope.artisan1 = false;
        $scope.artisan2 = false;
        $scope.expert1 = false;
        $scope.expert2 = false;
        $scope.expert3 = false;
        $scope.professional1 = false;
        $scope.professional2 = false;
        $scope.master1 = false;

        $scope.init = function () {
            if(typeof $rootScope.assessmentsQa !== "undefined"){
                var assessmentsQa = $rootScope.assessmentsQa;
                var repository = assessmentsQa['repository'];
                if(repository !== undefined) {
                    $scope.traveller1 = repository['traveller1'];
                    $scope.traveller2 = repository['traveller2'];
                    $scope.artisan1 = repository['artisan1'];
                    $scope.artisan2 = repository['artisan2'];
                    $scope.expert1 = repository['expert1'];
                    $scope.expert2 = repository['expert2'];
                    $scope.expert3 = repository['expert3'];
                    $scope.professional1 = repository['professional1'];
                    $scope.professional2 = repository['professional2'];
                    $scope.master1 = repository['master1'];
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

            $rootScope.assessmentsQa['repository'] = {
                'traveller1': $scope.traveller1,
                'traveller2': $scope.traveller2,
                'artisan1': $scope.artisan1,
                'artisan2': $scope.artisan2,
                'expert1': $scope.expert1,
                'expert2': $scope.expert2,
                'expert3': $scope.expert3,
                'professional1': $scope.professional1,
                'professional2': $scope.professional2,
                'master1': $scope.master1,
                'score': $scope.computeRepositoryAssessmentScore()
            };
        };

        $scope.computeRepositoryAssessmentScore = function(){
            if(isTraveller()){
                return 1;
            }
            else if(isArtisan()){
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
            return $scope.traveller1 && $scope.traveller2;
        };

        var isArtisan = function () {
            return !$scope.traveller2 && $scope.artisan1 && $scope.artisan2;
        };

        var isExpert = function() {
            return !$scope.traveller1 && !$scope.traveller2 && !$scope.artisan1 && !$scope.artisan2
                && $scope.expert1 && $scope.expert2 && $scope.expert3;
        };

        var isProfessional = function () {
            return isExpert() && $scope.professional1 && $scope.professional2;
        };

        var isMaster = function () {
            return isProfessional() && $scope.master1;
        };

    }]);
