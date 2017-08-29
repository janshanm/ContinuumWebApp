angular.module('continuumAssessmentPlatform.research', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/research', {
            templateUrl: 'research/research.html',
            controller: 'ResearchCtrl'
        });
    }])

    .controller('ResearchCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.traveller1 = false;
        $scope.traveller2 = false;
        $scope.traveller3 = false;
        $scope.traveller4 = false;
        $scope.traveller5 = false;
        $scope.traveller6 = false;
        $scope.traveller7 = false;
        $scope.artisan1 = false;
        $scope.expert1 = false;
        $scope.expert2 = false;
        $scope.expert3 = false;
        $scope.expert4 = false;
        $scope.expert5 = false;
        $scope.professional1 = false;
        $scope.professional2 = false;
        $scope.professional3 = false;
        $scope.master1 = false;
        $scope.master2 = false;

        $scope.init = function () {
            if(typeof $rootScope.assessmentsQa !== "undefined"){
                var assessmentsQa = $rootScope.assessmentsQa;
                var research = assessmentsQa['research'];
                if(research !== undefined) {
                    $scope.traveller1 = research['traveller1'];
                    $scope.traveller2 = research['traveller2'];
                    $scope.traveller3 = research['traveller3'];
                    $scope.traveller4 = research['traveller4'];
                    $scope.traveller5 = research['traveller5'];
                    $scope.traveller6 = research['traveller6'];
                    $scope.traveller7 = research['traveller7'];
                    $scope.artisan1 = research['artisan1'];
                    $scope.expert1 = research['expert1'];
                    $scope.expert2 = research['expert2'];
                    $scope.expert3 = research['expert3'];
                    $scope.expert4 = research['expert4'];
                    $scope.expert5 = research['expert5'];
                    $scope.professional1 = research['professional1'];
                    $scope.professional2 = research['professional2'];
                    $scope.professional3 = research['professional3'];
                    $scope.master1 = research['master1'];
                    $scope.master2 = research['master2'];

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

            $rootScope.assessmentsQa['research'] = {
                'traveller1': $scope.traveller1,
                'traveller2': $scope.traveller2,
                'traveller3': $scope.traveller3,
                'traveller4': $scope.traveller4,
                'traveller5': $scope.traveller5,
                'traveller6': $scope.traveller6,
                'traveller7': $scope.traveller7,
                'artisan1': $scope.artisan1,
                'expert1': $scope.expert1,
                'expert2': $scope.expert2,
                'expert3': $scope.expert3,
                'expert4': $scope.expert4,
                'expert5': $scope.expert5,
                'professional1': $scope.professional1,
                'professional2': $scope.professional2,
                'professional3': $scope.professional3,
                'master1': $scope.master1,
                'master2': $scope.master2,
                'score': $scope.computeResearchAssessmentScore()
            };
        };

        $scope.computeResearchAssessmentScore = function(){
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
            return $scope.traveller1 && $scope.traveller2 && $scope.traveller3 && $scope.traveller4
                && $scope.traveller5 && $scope.traveller6 && $scope.traveller7;
        };

        var isArtisan = function () {
            return $scope.traveller1 && !$scope.traveller2 && $scope.traveller3 && $scope.traveller4
                && $scope.traveller5 && $scope.traveller6 && $scope.traveller7 && $scope.artisan1;
        };

        var isExpert = function() {
            return !$scope.traveller1 && !$scope.traveller2 && !$scope.traveller3 && !$scope.traveller4
                && !$scope.traveller5 && !$scope.traveller6 && !$scope.traveller7 && $scope.artisan1
                && $scope.expert1 && $scope.expert2 && $scope.expert3 && $scope.expert4 && $scope.expert5;
        };

        var isProfessional = function () {
            return isExpert && $scope.professional1 && $scope.professional2 && $scope.professional3;
        };

        var isMaster = function () {
            return isProfessional() && $scope.master1 && $scope.master2;
        }

    }]);
