angular.module('continuumAssessmentPlatform.involvement', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/involvement', {
            templateUrl: 'involvement/involvement.html',
            controller: 'InvolvementCtrl'
        });
    }])

    .controller('InvolvementCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.traveller1 = false;
        $scope.traveller2 = false;
        $scope.traveller3 = false;
        $scope.artisan1 = false;
        $scope.artisan2 = false;
        $scope.artisan3 = false;
        $scope.artisan4 = false;
        $scope.artisan5 = false;
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
                var involvement = assessmentsQa['involvement'];
                if(involvement !== undefined) {
                    $scope.traveller1 = involvement['traveller1'];
                    $scope.traveller2 = involvement['traveller2'];
                    $scope.traveller3 = involvement['traveller3'];
                    $scope.artisan1 = involvement['artisan1'];
                    $scope.artisan2 = involvement['artisan2'];
                    $scope.artisan3 = involvement['artisan3'];
                    $scope.artisan4 = involvement['artisan4'];
                    $scope.artisan5 = involvement['artisan5'];
                    $scope.expert1 = involvement['expert1'];
                    $scope.expert2 = involvement['expert2'];
                    $scope.expert3 = involvement['expert3'];
                    $scope.professional1 = involvement['professional1'];
                    $scope.professional2 = involvement['professional2'];
                    $scope.professional3 = involvement['professional3'];
                    $scope.master1 = involvement['master1'];
                    $scope.master2 = involvement['master2'];
                    $scope.master3 = involvement['master3'];

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

            $rootScope.assessmentsQa['involvement'] = {
                'traveller1': $scope.traveller1,
                'traveller2': $scope.traveller2,
                'traveller3': $scope.traveller3,
                'artisan1': $scope.artisan1,
                'artisan2': $scope.artisan2,
                'artisan3': $scope.artisan3,
                'artisan4': $scope.artisan4,
                'artisan5': $scope.artisan5,
                'expert1': $scope.expert1,
                'expert2': $scope.expert2,
                'expert3': $scope.expert3,
                'professional1': $scope.professional1,
                'professional2': $scope.professional2,
                'professional3': $scope.professional3,
                'master1': $scope.master1,
                'master2': $scope.master2,
                'master3': $scope.master3,
                'score': $scope.computeInvolvementAssessmentScore()
            };
        };

        $scope.computeInvolvementAssessmentScore = function(){
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
            return $scope.traveller1 && $scope.traveller2 && $scope.traveller3;
        };

        var isArtisan = function () {
            return !$scope.traveller1 && !$scope.traveller3 && $scope.artisan1
                && $scope.artisan2 && $scope.artisan3 && $scope.artisan4 && $scope.artisan5;
        };

        var isExpert = function() {
            return !$scope.traveller1 && !$scope.traveller2 && !$scope.traveller3 && $scope.artisan1
                && $scope.artisan2 && $scope.artisan3 && $scope.artisan4 && $scope.artisan5
                && $scope.expert1 && $scope.expert2 && $scope.expert3;
        };

        var isProfessional = function () {
            return isExpert() && $scope.professional1 && $scope.professional2 && $scope.professional3;
        };

        var isMaster = function () {
            return isProfessional() && $scope.master1 && $scope.master2 && $scope.master3;
        };

    }]);
