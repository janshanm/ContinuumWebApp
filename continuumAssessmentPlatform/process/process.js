angular.module('continuumAssessmentPlatform.process', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/process', {
            templateUrl: 'process/process.html',
            controller: 'ProcessCtrl'
        });
    }])

    .controller('ProcessCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.traveller1 = false;
        $scope.traveller2 = false;
        $scope.traveller3 = false;
        $scope.traveller4 = false;
        $scope.artisan1 = false;
        $scope.expert1 = false;
        $scope.expert2 = false;
        $scope.expert3 = false;
        $scope.professional1 = false;
        $scope.professional2 = false;
        $scope.professional3 = false;
        $scope.master1 = false;
        $scope.master2 = false;
        $scope.master3 = false;

        $scope.init = function () {
            if(typeof $rootScope.assessmentsQa !== "undefined"){
                var assessmentsQa = $rootScope.assessmentsQa;
                var process = assessmentsQa['process'];
                if(process !== undefined) {
                    $scope.traveller1 = process['traveller1'];
                    $scope.traveller2 = process['traveller2'];
                    $scope.traveller3 = process['traveller3'];
                    $scope.traveller4 = process['traveller4'];
                    $scope.artisan1 = process['artisan1'];
                    $scope.expert1 = process['expert1'];
                    $scope.expert2 = process['expert2'];
                    $scope.expert3 = process['expert3'];
                    $scope.professional1 = process['professional1'];
                    $scope.professional2 = process['professional2'];
                    $scope.professional3 = process['professional3'];
                    $scope.master1 = process['master1'];
                    $scope.master2 = process['master2'];
                    $scope.master3 = process['master3'];
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

            $rootScope.assessmentsQa['process'] = {
                'traveller1': $scope.traveller1,
                'traveller2': $scope.traveller2,
                'traveller3': $scope.traveller3,
                'traveller4': $scope.traveller4,
                'artisan1': $scope.artisan1,
                'expert1': $scope.expert1,
                'expert2': $scope.expert2,
                'expert3': $scope.expert3,
                'professional1': $scope.professional1,
                'professional2': $scope.professional2,
                'professional3': $scope.professional3,
                'master1': $scope.master1,
                'master2': $scope.master2,
                'master3': $scope.master3,
                'score': $scope.computeProcessAssessmentScore()
            };
        };

        $scope.computeProcessAssessmentScore = function(){
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
            return $scope.traveller1 && $scope.traveller2 && $scope.traveller3 && $scope.traveller4;
        };

        var isArtisan = function () {
            return $scope.traveller1 && $scope.traveller2 && !$scope.traveller3 && !$scope.traveller4 && $scope.artisan1;
        };

        var isExpert = function() {
            return !$scope.traveller1 && !$scope.traveller2 && !$scope.traveller3 && !$scope.traveller4 && $scope.artisan1
                && $scope.expert1 && $scope.expert2 && $scope.expert3;
        };

        var isProfessional = function () {
            return isExpert() && $scope.professional1 && $scope.professional2 && $scope.professional3;
        };

        var isMaster = function () {
            return isProfessional() && $scope.master1 && $scope.master2 && $scope.master3;
        };

    }]);
