angular.module('continuumAssessmentPlatform.integration', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/integration', {
            templateUrl: 'integration/integration.html',
            controller: 'IntegrationCtrl'
        });
    }])

    .controller('IntegrationCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.traveller1 = false;
        $scope.traveller2 = false;
        $scope.artisan1 = false;
        $scope.artisan2 = false;
        $scope.artisan3 = false;
        $scope.expert1 = false;
        $scope.expert2 = false;
        $scope.professional1 = false;
        $scope.professional2 = false;
        $scope.professional3 = false;
        $scope.master1 = false;

        $scope.init = function () {
            if(typeof $rootScope.assessmentsQa !== "undefined"){
                var assessmentsQa = $rootScope.assessmentsQa;
                var integration = assessmentsQa['integration'];
                if(integration !== undefined) {
                    $scope.traveller1 = integration['traveller1'];
                    $scope.traveller2 = integration['traveller2'];
                    $scope.artisan1 = integration['artisan1'];
                    $scope.artisan2 = integration['artisan2'];
                    $scope.artisan3 = integration['artisan3'];
                    $scope.expert1 = integration['expert1'];
                    $scope.expert2 = integration['expert2'];
                    $scope.professional1 = integration['professional1'];
                    $scope.professional2 = integration['professional2'];
                    $scope.professional3 = integration['professional3'];
                    $scope.master1 = integration['master1'];
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

            $rootScope.assessmentsQa['integration'] = {
                'traveller1': $scope.traveller1,
                'traveller2': $scope.traveller2,
                'artisan1': $scope.artisan1,
                'artisan2': $scope.artisan2,
                'artisan3': $scope.artisan3,
                'expert1': $scope.expert1,
                'expert2': $scope.expert2,
                'professional1': $scope.professional1,
                'professional2': $scope.professional2,
                'professional3': $scope.professional3,
                'master1': $scope.master1,
                'score': $scope.computeIntegrationAssessmentScore()
            };
        };

        $scope.computeIntegrationAssessmentScore = function(){
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
            return $scope.traveller1 && $scope.traveller2;
        };

        var isArtisan = function () {
            return !$scope.traveller1 && !$scope.traveller2 && $scope.artisan1 && $scope.artisan2 && $scope.artisan3;
        };

        var isExpert = function() {
            return !$scope.traveller1 && !$scope.traveller2 && $scope.artisan1 && $scope.artisan2 && $scope.expert1 && $scope.expert2;
        };

        var isProfessional = function () {
            return !$scope.traveller1 && !$scope.traveller2 && $scope.artisan1 && !$scope.artisan2 && $scope.expert1 && $scope.expert2
                && $scope.professional1 && $scope.professional2 && $scope.professional3;
        };

        var isMaster = function () {
            return isProfessional() && $scope.master1;
        }

    }]);
