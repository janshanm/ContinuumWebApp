angular.module('continuumAssessmentPlatform.metrics', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/metrics', {
            templateUrl: 'metrics/metrics.html',
            controller: 'MetricsCtrl'
        });
    }])

    .controller('MetricsCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.traveller1 = false;
        $scope.traveller2 = false;
        $scope.artisan1 = false;
        $scope.artisan2 = false;
        $scope.artisan3 = false;
        $scope.artisan4 = false;
        $scope.artisan5 = false;
        $scope.artisan6 = false;
        $scope.expert1 = false;
        $scope.expert2 = false;
        $scope.expert3 = false;
        $scope.expert4 = false;
        $scope.expert5 = false;
        $scope.expert6 = false;
        $scope.expert7 = false;
        $scope.expert8 = false;
        $scope.professional1 = false;
        $scope.professional2 = false;
        $scope.professional3 = false;
        $scope.professional4 = false;
        $scope.professional5 = false;
        $scope.master1 = false;
        $scope.master2 = false;
        $scope.master3 = false;
        $scope.master4 = false;
        $scope.master5 = false;
        $scope.master6 = false;


        $scope.init = function () {
            if(typeof $rootScope.assessmentsQa !== "undefined"){
                var assessmentsQa = $rootScope.assessmentsQa;
                var metrics = assessmentsQa['metrics'];
                if(metrics !== undefined) {
                    $scope.traveller1 = metrics['traveller1'];
                    $scope.traveller2 = metrics['traveller2'];
                    $scope.artisan1 = metrics['artisan1'];
                    $scope.artisan2 = metrics['artisan2'];
                    $scope.artisan3 = metrics['artisan3'];
                    $scope.artisan4 = metrics['artisan4'];
                    $scope.artisan5 = metrics['artisan5'];
                    $scope.artisan6 = metrics['artisan6'];
                    $scope.expert1 = metrics['expert1'];
                    $scope.expert2 = metrics['expert2'];
                    $scope.expert3 = metrics['expert3'];
                    $scope.expert4 = metrics['expert4'];
                    $scope.expert5 = metrics['expert5'];
                    $scope.expert6 = metrics['expert6'];
                    $scope.expert7 = metrics['expert7'];
                    $scope.expert8 = metrics['expert8'];
                    $scope.professional1 = metrics['professional1'];
                    $scope.professional2 = metrics['professional2'];
                    $scope.professional3 = metrics['professional3'];
                    $scope.professional4 = metrics['professional4'];
                    $scope.professional5 = metrics['professional5'];
                    $scope.master1 = metrics['master1'];
                    $scope.master2 = metrics['master2'];
                    $scope.master3 = metrics['master3'];
                    $scope.master4 = metrics['master4'];
                    $scope.master5 = metrics['master5'];
                    $scope.master6 = metrics['master6'];
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

            $rootScope.assessmentsQa['metrics'] = {
                'traveller1': $scope.traveller1,
                'traveller2': $scope.traveller2,
                'artisan1': $scope.artisan1,
                'artisan2': $scope.artisan2,
                'artisan3': $scope.artisan3,
                'artisan4': $scope.artisan4,
                'artisan5': $scope.artisan5,
                'artisan6': $scope.artisan6,
                'expert1': $scope.expert1,
                'expert2': $scope.expert2,
                'expert3': $scope.expert3,
                'expert4': $scope.expert4,
                'expert5': $scope.expert5,
                'expert6': $scope.expert6,
                'expert7': $scope.expert7,
                'expert8': $scope.expert8,
                'professional1': $scope.professional1,
                'professional2': $scope.professional2,
                'professional3': $scope.professional3,
                'professional4': $scope.professional4,
                'professional5': $scope.professional5,
                'master1': $scope.master1,
                'master2': $scope.master2,
                'master3': $scope.master3,
                'master4': $scope.master4,
                'master5': $scope.master5,
                'master6': $scope.master6,
                'score': $scope.computeMetricsAssessmentScore()
            };
        };

        $scope.computeMetricsAssessmentScore = function(){
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
            return !$scope.traveller2 && $scope.artisan1 && $scope.artisan2 && $scope.artisan3
                && $scope.artisan4 && $scope.artisan5 && $scope.artisan6;
        };

        var isExpert = function() {
            return !$scope.traveller2 && $scope.artisan1 && $scope.artisan2 && !$scope.artisan3
                && $scope.artisan4 && !$scope.artisan5 && $scope.artisan6 && $scope.expert1 && $scope.expert2 && $scope.expert3
                && $scope.expert4 && $scope.expert5 && $scope.expert6 && $scope.expert7 && $scope.expert8;
        };

        var isProfessional = function () {
            return isExpert() && $scope.professional1 && $scope.professional2 && $scope.professional3
                && $scope.professional4 && $scope.professional5;
        };

        var isMaster = function () {
            return isProfessional() && $scope.master1 && $scope.master2 && $scope.master3 && $scope.master4
                && $scope.master5 && $scope.master6;
        }

    }]);
