angular.module('continuumAssessmentPlatform.team-management', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/team-management', {
            templateUrl: 'team-management/team-management.html',
            controller: 'TeamManagementCtrl'
        });
    }])

    .controller('TeamManagementCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.traveller1 = false;
        $scope.traveller2 = false;
        $scope.traveller3 = false;
        $scope.traveller4 = false;
        $scope.artisan1 = false;
        $scope.artisan2 = false;
        $scope.artisan3 = false;
        $scope.artisan4 = false;
        $scope.expert1 = false;
        $scope.expert2 = false;
        $scope.expert3 = false;
        $scope.professional1 = false;
        $scope.professional2 = false;
        $scope.professional3 = false;
        $scope.professional4 = false;
        $scope.master1 = false;
        $scope.master2 = false;
        $scope.master3 = false;
        $scope.master4 = false;
        $scope.master5 = false;

        $scope.init = function () {
            if(typeof $rootScope.assessmentsQa !== "undefined"){
                var assessmentsQa = $rootScope.assessmentsQa;
                var teamManagement = assessmentsQa['team-management'];
                if(teamManagement !== undefined) {
                    $scope.traveller1 = teamManagement['traveller1'];
                    $scope.traveller2 = teamManagement['traveller2'];
                    $scope.traveller3 = teamManagement['traveller3'];
                    $scope.traveller4 = teamManagement['traveller4'];
                    $scope.artisan1 = teamManagement['artisan1'];
                    $scope.artisan2 = teamManagement['artisan2'];
                    $scope.artisan3 = teamManagement['artisan3'];
                    $scope.artisan4 = teamManagement['artisan4'];
                    $scope.expert1 = teamManagement['expert1'];
                    $scope.expert2 = teamManagement['expert2'];
                    $scope.expert3 = teamManagement['expert3'];
                    $scope.professional1 = teamManagement['professional1'];
                    $scope.professional2 = teamManagement['professional2'];
                    $scope.professional3 = teamManagement['professional3'];
                    $scope.professional4 = teamManagement['professional4'];
                    $scope.master1 = teamManagement['master1'];
                    $scope.master2 = teamManagement['master2'];
                    $scope.master3 = teamManagement['master3'];
                    $scope.master4 = teamManagement['master4'];
                    $scope.master5 = teamManagement['master5'];
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

            $rootScope.assessmentsQa['team-management'] = {
                'traveller1': $scope.traveller1,
                'traveller2': $scope.traveller2,
                'traveller3': $scope.traveller3,
                'traveller4': $scope.traveller4,
                'artisan1': $scope.artisan1,
                'artisan2': $scope.artisan2,
                'artisan3': $scope.artisan3,
                'artisan4': $scope.artisan4,
                'expert1': $scope.expert1,
                'expert2': $scope.expert2,
                'expert3': $scope.expert3,
                'professional1': $scope.professional1,
                'professional2': $scope.professional2,
                'professional3': $scope.professional3,
                'professional4': $scope.professional4,
                'master1': $scope.master1,
                'master2': $scope.master2,
                'master3': $scope.master3,
                'master4': $scope.master4,
                'master5': $scope.master5,
                'score': $scope.computeTeamManagementAssessmentScore()
            };
        };

        $scope.computeTeamManagementAssessmentScore = function(){
            if(isTraveller() && !isArtisan() && !isExpert() && !isProfessional() && !isMaster()){
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
            return !isTraveller() && $scope.artisan1 && $scope.artisan2 && $scope.artisan3 && $scope.artisan4;
        };

        var isExpert = function() {
            return !isTraveller() && $scope.artisan1 && $scope.artisan2 && !$scope.artisan3 && !$scope.artisan4
                && $scope.expert1 && $scope.expert2 && $scope.expert3;
        };

        var isProfessional = function () {
            return isExpert() && $scope.professional1 && $scope.professional2 && $scope.professional3
                && $scope.professional4;
        };

        var isMaster = function () {
            return isProfessional() && $scope.master1 && $scope.master2 && $scope.master3 && $scope.master4
                && $scope.master5;
        }

    }]);
