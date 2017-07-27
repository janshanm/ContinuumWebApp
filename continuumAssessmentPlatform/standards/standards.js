angular.module('continuumAssessmentPlatform.standards', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/standards', {
            templateUrl: 'standards/standards.html',
            controller: 'StandardsCtrl'
        });
    }])

    .controller('StandardsCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.traveller1 = false;
        $scope.traveller2 = false;
        $scope.traveller3 = false;
        $scope.traveller4 = false;
        $scope.traveller5 = false;
        $scope.traveller6 = false;
        $scope.artisan1 = false;
        $scope.artisan2 = false;
        $scope.artisan3 = false;
        $scope.artisan4 = false;
        $scope.artisan5 = false;
        $scope.artisan6 = false;
        $scope.artisan7 = false;
        $scope.expert1 = false;
        $scope.expert2 = false;
        $scope.expert3 = false;
        $scope.expert4 = false;
        $scope.expert5 = false;
        $scope.expert6 = false;
        $scope.expert7 = false;
        $scope.expert8 = false;
        $scope.expert9 = false;
        $scope.expert10 = false;
        $scope.expert11 = false;
        $scope.expert12 = false;
        $scope.professional1 = false;
        $scope.professional2 = false;
        $scope.professional3 = false;
        $scope.professional4 = false;
        $scope.professional5 = false;
        $scope.professional6 = false;
        $scope.professional7 = false;
        $scope.professional8 = false;
        $scope.professional9 = false;
        $scope.professional10 = false;
        $scope.master1 = false;
        $scope.master2 = false;
        $scope.master3 = false;
        $scope.master4 = false;
        $scope.master5 = false;
        $scope.master6 = false;
        $scope.master7 = false;
        $scope.master8 = false;
        $scope.master9 = false;


        $scope.init = function () {
            if(typeof $rootScope.assessmentsQa !== "undefined"){
                var assessmentsQa = $rootScope.assessmentsQa;
                var standards = assessmentsQa['standards'];
                if(standards !== undefined) {
                    $scope.traveller1 = standards['traveller1'];
                    $scope.traveller2 = standards['traveller2'];
                    $scope.traveller3 = standards['traveller3'];
                    $scope.traveller4 = standards['traveller4'];
                    $scope.traveller5 = standards['traveller5'];
                    $scope.traveller6 = standards['traveller6'];
                    $scope.artisan1 = standards['artisan1'];
                    $scope.artisan2 = standards['artisan2'];
                    $scope.artisan3 = standards['artisan3'];
                    $scope.artisan4 = standards['artisan4'];
                    $scope.artisan5 = standards['artisan5'];
                    $scope.artisan6 = standards['artisan6'];
                    $scope.artisan7 = standards['artisan7'];
                    $scope.expert1 = standards['expert1'];
                    $scope.expert2 = standards['expert2'];
                    $scope.expert3 = standards['expert3'];
                    $scope.expert4 = standards['expert4'];
                    $scope.expert5 = standards['expert5'];
                    $scope.expert6 = standards['expert6'];
                    $scope.expert7 = standards['expert7'];
                    $scope.expert8 = standards['expert8'];
                    $scope.expert9 = standards['expert9'];
                    $scope.expert10 = standards['expert10'];
                    $scope.expert11 = standards['expert11'];
                    $scope.expert12 = standards['expert12'];
                    $scope.professional1 = standards['professional1'];
                    $scope.professional2 = standards['professional2'];
                    $scope.professional3 = standards['professional3'];
                    $scope.professional4 = standards['professional4'];
                    $scope.professional5 = standards['professional5'];
                    $scope.professional6 = standards['professional6'];
                    $scope.professional7 = standards['professional7'];
                    $scope.professional8 = standards['professional8'];
                    $scope.professional9 = standards['professional9'];
                    $scope.professional10 = standards['professional10'];
                    $scope.master1 = standards['master1'];
                    $scope.master2 = standards['master2'];
                    $scope.master3 = standards['master3'];
                    $scope.master4 = standards['master4'];
                    $scope.master5 = standards['master5'];
                    $scope.master6 = standards['master6'];
                    $scope.master7 = standards['master7'];
                    $scope.master8 = standards['master8'];
                    $scope.master9 = standards['master9'];
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

            $rootScope.assessmentsQa['standards'] = {
                'traveller1': $scope.traveller1,
                'traveller2': $scope.traveller2,
                'traveller3': $scope.traveller3,
                'traveller4': $scope.traveller4,
                'traveller5': $scope.traveller5,
                'traveller6': $scope.traveller6,
                'artisan1': $scope.artisan1,
                'artisan2': $scope.artisan2,
                'artisan3': $scope.artisan3,
                'artisan4': $scope.artisan4,
                'artisan5': $scope.artisan5,
                'artisan6': $scope.artisan6,
                'artisan7': $scope.artisan7,
                'expert1': $scope.expert1,
                'expert2': $scope.expert2,
                'expert3': $scope.expert3,
                'expert4': $scope.expert4,
                'expert5': $scope.expert5,
                'expert6': $scope.expert6,
                'expert7': $scope.expert7,
                'expert8': $scope.expert8,
                'expert9': $scope.expert9,
                'expert10': $scope.expert10,
                'expert11': $scope.expert11,
                'expert12': $scope.expert12,
                'professional1': $scope.professional1,
                'professional2': $scope.professional2,
                'professional3': $scope.professional3,
                'professional4': $scope.professional4,
                'professional5': $scope.professional5,
                'professional6': $scope.professional6,
                'professional7': $scope.professional7,
                'professional8': $scope.professional8,
                'professional9': $scope.professional9,
                'professional10': $scope.professional10,
                'master1': $scope.master1,
                'master2': $scope.master2,
                'master3': $scope.master3,
                'master4': $scope.master4,
                'master5': $scope.master5,
                'master6': $scope.master6,
                'master7': $scope.master7,
                'master8': $scope.master8,
                'master9': $scope.master9,
                'score': $scope.computeStandardsAssessmentScore()
            };
        };

        $scope.computeStandardsAssessmentScore = function(){
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
                && $scope.traveller5 && $scope.traveller6;
        };

        var isArtisan = function () {
            return !isTraveller() && $scope.artisan1 && $scope.artisan2 && $scope.artisan3 && $scope.artisan4
                && $scope.artisan5 && $scope.artisan6 && $scope.artisan7;
        };

        var isExpert = function() {
            return !isTraveller() && $scope.artisan1 && !$scope.artisan2 && $scope.artisan3 && !$scope.artisan4
                && $scope.artisan5 && $scope.artisan6 && !$scope.artisan7 && $scope.expert1 && $scope.expert2
                && $scope.expert3 && $scope.expert4 && $scope.expert5 && $scope.expert6 && $scope.expert7
                && $scope.expert8 && $scope.expert9 && $scope.expert10 && $scope.expert11 && $scope.expert12;
        };

        var isProfessional = function () {
            return isExpert() && $scope.professional1 && $scope.professional2 && $scope.professional3
                && $scope.professional4 && $scope.professional5 && $scope.professional6 && $scope.professional7
                && $scope.professional8 && $scope.professional9 && $scope.professional10;
        };

        var isMaster = function () {
            return isProfessional() && $scope.master1 && $scope.master2 && $scope.master3 && $scope.master4
                && $scope.master5 && $scope.master6 && $scope.master7 && $scope.master8 && $scope.master9;
        }

    }]);
