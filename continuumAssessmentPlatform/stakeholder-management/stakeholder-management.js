angular.module('continuumAssessmentPlatform.stakeholder-management', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/stakeholder-management', {
            templateUrl: 'stakeholder-management/stakeholder-management.html',
            controller: 'StakeholderManagementCtrl'
        });
    }])

    .controller('StakeholderManagementCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.traveller1 = false;
        $scope.traveller2 = false;
        $scope.traveller3 = false;
        $scope.artisan1 = false;
        $scope.artisan2 = false;
        $scope.expert1 = false;
        $scope.expert2 = false;
        $scope.expert3 = false;
        $scope.professional1 = false;
        $scope.professional2 = false;
        $scope.professional3 = false;
        $scope.professional4 = false;
        $scope.master1 = false;
        $scope.master2 = false;

        $scope.init = function () {
            if(typeof $rootScope.assessmentsQa !== "undefined"){
                var assessmentsQa = $rootScope.assessmentsQa;
                var stakeholderManagement = assessmentsQa['stakeholder-management'];
                if(stakeholderManagement !== undefined) {
                    $scope.traveller1 = stakeholderManagement['traveller1'];
                    $scope.traveller2 = stakeholderManagement['traveller2'];
                    $scope.traveller3 = stakeholderManagement['traveller3'];
                    $scope.artisan1 = stakeholderManagement['artisan1'];
                    $scope.artisan2 = stakeholderManagement['artisan2'];
                    $scope.expert1 = stakeholderManagement['expert1'];
                    $scope.expert2 = stakeholderManagement['expert2'];
                    $scope.expert3 = stakeholderManagement['expert3'];
                    $scope.professional1 = stakeholderManagement['professional1'];
                    $scope.professional2 = stakeholderManagement['professional2'];
                    $scope.professional3 = stakeholderManagement['professional3'];
                    $scope.professional4 = stakeholderManagement['professional4'];
                    $scope.master1 = stakeholderManagement['master1'];
                    $scope.master2 = stakeholderManagement['master2'];
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

            $rootScope.assessmentsQa['stakeholder-management'] = {
                'traveller1': $scope.traveller1,
                'traveller2': $scope.traveller2,
                'traveller3': $scope.traveller3,
                'artisan1': $scope.artisan1,
                'artisan2': $scope.artisan2,
                'expert1': $scope.expert1,
                'expert2': $scope.expert2,
                'expert3': $scope.expert3,
                'professional1': $scope.professional1,
                'professional2': $scope.professional2,
                'professional3': $scope.professional3,
                'professional4': $scope.professional4,
                'master1': $scope.master1,
                'master2': $scope.master2,
                'score': $scope.computeStakeholderManagementAssessmentScore()
            };
        };

        $scope.computeStakeholderManagementAssessmentScore = function(){
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
            return !$scope.traveller1 && !$scope.traveller2 && $scope.traveller3 && $scope.artisan1 && $scope.artisan2;
        };

        var isExpert = function() {
            return !$scope.traveller1 && !$scope.traveller2 && $scope.traveller3 && $scope.artisan1 && !$scope.artisan2
                && $scope.expert1 && $scope.expert2 && $scope.expert3;
        };

        var isProfessional = function () {
            return isExpert() && $scope.professional1 && $scope.professional2 && $scope.professional3 && $scope.professional4;
        };

        var isMaster = function () {
            return isProfessional() && $scope.master1 && $scope.master2;
        }

    }]);
