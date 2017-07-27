angular.module('continuumAssessmentPlatform.documentation', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/documentation', {
            templateUrl: 'documentation/documentation.html',
            controller: 'DocumentationCtrl'
        });
    }])

    .controller('DocumentationCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.traveller1 = false;
        $scope.traveller2 = false;
        $scope.traveller3 = false;
        $scope.traveller4 = false;
        $scope.traveller5 = false;
        $scope.traveller6 = false;
        $scope.traveller7 = false;
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
        $scope.professional1 = false;
        $scope.professional2 = false;
        $scope.professional3 = false;
        $scope.master1 = false;
        $scope.master2 = false;
        $scope.master3 = false;

        $scope.init = function () {
            if(typeof $rootScope.assessmentsQa !== "undefined"){
                var assessmentsQa = $rootScope.assessmentsQa;
                var documentation = assessmentsQa['documentation'];
                if(documentation !== undefined) {
                    $scope.traveller1 = documentation['traveller1'];
                    $scope.traveller2 = documentation['traveller2'];
                    $scope.traveller3 = documentation['traveller3'];
                    $scope.traveller4 = documentation['traveller4'];
                    $scope.traveller5 = documentation['traveller5'];
                    $scope.traveller6 = documentation['traveller6'];
                    $scope.traveller7 = documentation['traveller7'];
                    $scope.artisan1 = documentation['artisan1'];
                    $scope.artisan2 = documentation['artisan2'];
                    $scope.artisan3 = documentation['artisan3'];
                    $scope.artisan4 = documentation['artisan4'];
                    $scope.artisan5 = documentation['artisan5'];
                    $scope.artisan6 = documentation['artisan6'];
                    $scope.expert1 = documentation['expert1'];
                    $scope.expert2 = documentation['expert2'];
                    $scope.expert3 = documentation['expert3'];
                    $scope.expert4 = documentation['expert4'];
                    $scope.professional1 = documentation['professional1'];
                    $scope.professional2 = documentation['professional2'];
                    $scope.professional3 = documentation['professional3'];
                    $scope.master1 = documentation['master1'];
                    $scope.master2 = documentation['master2'];
                    $scope.master3 = documentation['master3'];
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

            $rootScope.assessmentsQa['documentation'] = {
                'traveller1': $scope.traveller1,
                'traveller2': $scope.traveller2,
                'traveller3': $scope.traveller3,
                'traveller4': $scope.traveller4,
                'traveller5': $scope.traveller5,
                'traveller6': $scope.traveller6,
                'traveller7': $scope.traveller7,
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
                'professional1': $scope.professional1,
                'professional2': $scope.professional2,
                'professional3': $scope.professional3,
                'master1': $scope.master1,
                'master2': $scope.master2,
                'master3': $scope.master3,
                'score': $scope.computeDocumentationAssessmentScore()
            };
        };

        $scope.computeDocumentationAssessmentScore = function(){
            if(isTraveller()){
                return 1;
            }
            else if(isArtisan()){
                return 2;
            }
            else if(isExpert()){
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
            return !$scope.traveller1 && !$scope.traveller7 && $scope.artisan1 && $scope.artisan2 && $scope.artisan3
                && $scope.artisan4 && $scope.artisan5 && $scope.artisan6;
        };

        var isExpert = function() {
            return !$scope.traveller1 && !$scope.traveller3 && !$scope.traveller5 && !$scope.traveller7 && $scope.artisan1
                && !$scope.artisan2 && !$scope.artisan3  && !$scope.artisan4 && $scope.artisan5 && $scope.artisan6
                && $scope.expert1 && $scope.expert2 && $scope.expert3 && $scope.expert4;
        };

        var isProfessional = function () {
            return !$scope.traveller1 && !$scope.traveller2 && !$scope.traveller3 && !$scope.traveller4 && !$scope.traveller5
                && !$scope.traveller6 && !$scope.traveller7 && $scope.artisan1 && !$scope.artisan2 && !$scope.artisan3
                && !$scope.artisan4 && $scope.artisan5 && $scope.artisan6 && $scope.expert1 && $scope.expert2
                && $scope.expert3 && $scope.expert4 && $scope.professional1 && $scope.professional2 && $scope.professional3;
        };

        var isMaster = function () {
            return isProfessional() && $scope.master1 && $scope.master2 && $scope.master3;
        }

    }]);
