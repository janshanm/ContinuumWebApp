angular.module('continuumAssessmentPlatform.assessment-process', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/assessment-process', {
            templateUrl: 'assessment-process/assessment-process.html',
            controller: 'AssessmentProcessCtrl'
        });
    }])

    .controller('AssessmentProcessCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.traveller1 = false;
        $scope.traveller2 = false;
        $scope.traveller3 = false;
        $scope.traveller4 = false;
        $scope.artisan1 = false;
        $scope.artisan2 = false;
        $scope.expert1 = false;
        $scope.expert2 = false;
        $scope.expert3 = false;
        $scope.professional1 = false;
        $scope.professional2 = false;
        $scope.professional3 = false;

        $scope.init = function () {
            if(typeof $rootScope.assessmentsQa !== "undefined"){
                var assessmentsQa = $rootScope.assessmentsQa;
                var assessmentProcess = assessmentsQa['assessment-process'];
                if(assessmentProcess !== undefined) {
                    $scope.traveller1 = assessmentProcess['traveller1'];
                    $scope.traveller2 = assessmentProcess['traveller2'];
                    $scope.traveller3 = assessmentProcess['traveller3'];
                    $scope.traveller4 = assessmentProcess['traveller4'];
                    $scope.artisan1 = assessmentProcess['artisan1'];
                    $scope.artisan2 = assessmentProcess['artisan2'];
                    $scope.expert1 = assessmentProcess['expert1'];
                    $scope.expert2 = assessmentProcess['expert2'];
                    $scope.expert3 = assessmentProcess['expert3'];
                    $scope.professional1 = assessmentProcess['professional1'];
                    $scope.professional2 = assessmentProcess['professional2'];
                    $scope.professional3 = assessmentProcess['professional3'];
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

            $rootScope.assessmentsQa['assessment-process'] = {
                'traveller1': $scope.traveller1,
                'traveller2': $scope.traveller2,
                'traveller3': $scope.traveller3,
                'traveller4': $scope.traveller4,
                'artisan1': $scope.artisan1,
                'artisan2': $scope.artisan2,
                'expert1': $scope.expert1,
                'expert2': $scope.expert2,
                'expert3': $scope.expert3,
                'professional1': $scope.professional1,
                'professional2': $scope.professional2,
                'professional3': $scope.professional3,
                'score': $scope.computeAssessmentProcessAssessmentScore()
            };
        };

        $scope.computeAssessmentProcessAssessmentScore = function(){
            if(isTraveller()){
                return 1;
            }
            else if(isArtisan() && !isExpert() && !isProfessional()){
                return 3;
            }
            else if(isExpert() && !isProfessional()){
                return 4;
            }
            else if(isProfessional()){
                return 5;
            }
            else{
                return 1;
            }

        };

        var isTraveller = function(){
            return $scope.traveller1 && $scope.traveller2 && $scope.traveller3 && $scope.traveller4;
        };

        var isArtisan = function () {
            return !$scope.traveller1 && $scope.traveller2 && !$scope.traveller3 && $scope.artisan1 && $scope.artisan2;
        };

        var isExpert = function() {
            return !$scope.traveller1 && !$scope.traveller2 && !$scope.traveller3 && $scope.artisan1 && $scope.artisan2
                && $scope.expert1 && $scope.expert2 && $scope.expert3;
        };

        var isProfessional = function () {
            return isExpert() && $scope.professional1 && $scope.professional2 && $scope.professional3;
        };

    }]);
