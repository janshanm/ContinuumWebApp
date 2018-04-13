'use strict';

angular.module('continuumAssessmentPlatform.teamselection-pipeline', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/select-pipeline-team', {
            templateUrl: 'teamselectionpipeline/team-selection-pipeline.html',
            controller: 'TeamPipelineSelectionCtrl'
        });
    }])

    .controller('TeamPipelineSelectionCtrl', ['$location', '$scope', '$rootScope', 'RetrievePipelineAssessment', function($location, $scope, $rootScope, RetrievePipelineAssessment) {
        $scope.teams = [{}];
        $scope.selectedTeam = "";
        $scope.selectedPortfolio = "AR";
        $scope.allTeams = {};

        $scope.init = function () {
            $scope.selectedPortfolio = "AR";

            $scope.portfolios = [{'id': 'AR', 'name': 'Africa Regions'}, {'id': 'Card', 'name': 'Card, Payments, GSS, VAF'},
                {'id': 'CIB', 'name': 'CIB'}, {'id': 'CIBO', 'name': 'CIB Operations Technology'}, {'id': 'CIBRT', 'name': 'CIB Risk Technology'},
                {'id': 'CIBTPS', 'name': 'CIB TPS'},
                {'id': 'CF', 'name': 'Corporate Functions'}, {'id': 'DS', 'name': 'Data Services'},
                {'id': 'DC', 'name': 'Digital Channels'}, {'id': 'EWT', 'name': 'Enterprise-wide Tech Functions'},
                {'id': 'Infra', 'name': 'Infrastructure Services'},
                {'id': 'PBB', 'name': 'Personal and Business Banking'}, {'id': 'W', 'name': 'Wealth'}, {'id': 'CIB', 'name': 'CIB Operations'}];

            $scope.allTeams = {
                'AR': [{'name': 'Account Origination'}, {'name': 'ATM'}, {'name': 'Bancassurance'}, {'name': 'Credit Collections'},
                    {'name': 'Credit Scoring and Account Management'}, {'name': 'Digital New Features'}, {'name': 'Digital Rollout'},
                    {'name': 'Digital Security'}, {'name': 'GoldenEye'}, {'name': 'Service Digitisation'}, {'name': 'Value Exchange'}],
                'Card': [{'name': 'Acquiring - Rest of Africa'}, {'name': 'Acquiring - Product'}, {'name': 'Acquiring - Flex'},
                    {'name': 'Diners Auths and Release Compliance'}, {'name': 'Diners Digitalization'}, {'name': 'Diners Transactional'},
                    {'name': 'EMV - Squad 1'}, {'name': 'EMV - Squad 2'}, {'name': 'Issuing - Customer Experience'},
                    {'name': 'Issuing - Digital Innovation'}, {'name': 'Issuing - Product Squad 1'}, {'name': 'Issuing - Product Squad 2'},
                    {'name': 'Issuing - Rest of Africa'}, {'name': 'RoA Switch(Sparrow)'}, {'name': 'Cash - Acquiring'},
                    {'name': 'Cash - Production'}, {'name': 'Cash - Regulatory'}, {'name': 'FASS/GC/COSS'},
                    {'name': 'GOSS and Outsourced Production'}, {'name': 'Robotic Process Automation'}, {'name': 'Workflow - GOSS'},
                    {'name': 'Auto-Recons Legacy'}, {'name': 'Bulk Payments'}, {'name': 'Emerging Payments'},
                    {'name': 'IntelliMatch'}, {'name': 'Merchant Solutions Service'}, {'name': 'Money Transfers and ACB'}, {'name': 'Online Payments - Squad 1'},
                    {'name': 'Online Payments - Squad 2'}, {'name': 'Online Payments - Squad 3'}, {'name': 'Payment Data'},
                    {'name': 'Postilion/Base 24 - Squad 1'}, {'name': 'Postilion/Base 24 - Squad 2'},
                    {'name': 'Postilion/Base 24 - Squad 3'}, {'name': 'Remittances (Instant Money)'}, {'name': 'Fleet'}, {'name': 'VAF - Squad 1'},
                    {'name': 'VAF - Squad 2 with Genesis'}],
                'CIB': [{'name': 'Finance IT'}, {'name': 'MSDS'}],
                'CIBO': [{'name': 'Africa Regions'}, {'name': 'BaNCS & Sec Lending'}, {'name': 'Client & Data Services'},
                    {'name': 'Engineering Transformation'}, {'name': 'Financial Messaging'}, {'name': 'GMO Confirmations'},
                    {'name': 'GMO Settlements'}, {'name': 'Intelligent Automation (CIB)'}, {'name': 'IPSS Liquidity'},
                    {'name': 'IPSS Settlements'}, {'name': 'JAS'}, {'name': 'Legacy Payments'}, {'name': 'Libra BOP'},
                    {'name': 'Payments'}, {'name': 'Platforms (Payments)'}, {'name': 'Recons'}, {'name': 'SWIFT Industry'},
                    {'name': 'Techie Town'}, {'name': 'Trade'}, {'name': 'Trustees and Clearing'}],
                'CIBRT': [{'name': 'Risk Technology: Cybernetics'}, {'name': 'Risk Technology: Risk Reporting & Analytics'},
                    {'name': 'Risk Technology: Core Credit Services'}, {'name': 'Risk Technology: Operations'}],
                'CIBTPS': [{'name': 'Collections 1'}, {'name': 'Collections 2'}, {'name': 'Foreign Payments'},
                    {'name': 'Local Payments 1'}, {'name': 'Local Payments 2'}, {'name': 'Account Services'},
                    {'name': 'Enhanced Collections'}, {'name': 'Thin Client'}, {'name': 'Platform'},
                    {'name': 'BOL Legacy'}, {'name': 'Host to Host'}, {'name': 'Integration'}, {'name': 'PES'},
                    {'name': 'SSA'}, {'name': 'DevOps'}, {'name': 'Specialised Account Services'}],
                'CF': [{'name': 'ML/TF and Sanctions'}, {'name': 'Surveillance and Reporting'}, {'name': 'Deal Pricing and ALM'},
                    {'name': 'Econ and Reg Capital - Squad 1'}, {'name': 'Econ and Reg Capital - Squad 2'},
                    {'name': 'Finance Central - Squad 1'}, {'name': 'Finance Central - Squad 2'}, {'name': 'Finance Re-engineering'},
                    {'name': 'Procurement'}, {'name': 'Move Management'}, {'name': 'Physical Security'}, {'name': 'Real Estate Projects'},
                    {'name': 'HC Enablement'}, {'name': 'HC SAP'}, {'name': 'Marketing and Communications'},
                    {'name': 'GFCC'}, {'name': 'IOR'}],
                'DS': [{'name': 'AML DevOps'}, {'name': 'Analytics and Third Party'}, {'name': 'Big Data'},
                    {'name': 'CIB'}, {'name': 'Data Management and Governance'}, {'name': 'Data Science'},
                    {'name': 'Data Warehousing - Squad 1'}, {'name': 'Data Warehousing - Squad 2'}, {'name': 'Enterprise BI'},
                    {'name': 'Human Capital'}, {'name': 'RDM, MDM and MRI'},
                    {'name': 'Reporting Services'}, {'name': 'Rest of Africa'}, {'name': 'SAP HANA Services (Hybris)'},
                    {'name': 'Wealth'}],
                'DC': [{'name': 'Banking Android', 'id': 'banking-android'}, {'name': 'Banking MCA', 'id': 'banking-mca'}, {'name': 'Banking iOS', 'id': 'banking-ios'},
                    {'name': 'Card Android', 'id': 'card-android'}, {'name': 'Card MCA', 'id': 'card-mca'},
                    {'name': 'Card iOS', 'id': 'card-ios'}, {'name': 'Order Management', 'id': 'order-management'},
                    {'name': 'Platform iOS', 'id': 'platform-ios'}, {'name': 'Platform Android', 'id': 'platform-android'},
                    {'name': 'Platform MCA', 'id': 'platform-mca'}, {'name': 'Platform Authentication Services', 'id': 'platform-authentication-services'},
                    {'name': 'Platform Tiles Service', 'id': 'platform-tiles-service'}, {'name': 'Wealth OST MCA', 'id': 'wealth-ost-mca'},
                    {'name': 'Wealth WI MCA', 'id': 'wealth-wi-mca'}, {'name': 'Wealth Goalsetter MCA', 'id': 'wealth-goalsetter-mca'},
                    {'name': 'AIMS iOS', 'id': 'aims-ios'}, {'name': 'AIMS Android', 'id': 'aims-android'}, {'name': 'AIMS MCA', 'id': 'aims-mca'},
                    {'name': 'Forex', 'id': 'forex-mca'}, {'name': 'Kidz Banking MCA', 'id': 'kidz-banking-mca'}, {'name': 'Insurance VAF MCA', 'id': 'insurance-vaf-mca'},
                    {'name': 'VAF Insurance Kids Android', 'id': 'vaf-insurance-kids-android'}, {'name': 'VAF Insurance Kids iOS', 'id': 'vaf-insurance-kids-ios'},
                    {'name': 'Corporate Banking', 'id': 'corporate-banking'}],
                'EWT': [{'name': 'Domain Architecture'}, {'name': 'BPM'}, {'name': 'ECM'}, {'name': 'ESB'}, {'name': 'Agile Tools'},
                    {'name': 'Application Performance Monitoring'}, {'name': 'Aris'}, {'name': 'Business Applications'},
                    {'name': 'Mainframe Tools'}, {'name': 'Sharepoint'}, {'name': 'Source Code Management'},
                    {'name': 'Teamtrack'}, {'name': 'Technical Enablement'}, {'name': 'Tools and Support'}],
                'Infra': [{'name': 'Sybase and DB2'}, {'name': 'Oracle and SQL'}],
                'PBB': [{'name': 'CDI/RSS'}, {'name': 'Natural and .NET Applications'}, {'name': 'Credit - Account Maintenance'},
                    {'name': 'Credit: Collections'}, {'name': 'Credit: Origination'}, {'name': 'E3'},
                    {'name': 'Customer Insights and Analytics'}, {'name': 'EIM Data Change'}, {'name': 'EIM Data Remediation'},
                    {'name': 'Banking Statements'}, {'name': 'Registration and Login'}, {'name': 'SEO Payments'},
                    {'name': 'SEO Profile Management'}, {'name': 'SEO Registration'}, {'name': 'USSD'},
                    {'name': 'Application Performance Monitoring'}, {'name': 'Aris'}, {'name': 'Business Applications'},
                    {'name': 'ATM - Squad 1'}, {'name': 'ATM - Squad 2'}, {'name': 'CCC'},
                    {'name': 'Customer 1st and Ciboodle - Squad 1'}, {'name': 'Customer 1st and Ciboodle - Squad 2'}, {'name': 'eSignature / OFV'},
                    {'name': 'NDS - Squad 1'}, {'name': 'NDS - Squad 2'}, {'name': 'NDS - Squad 3'},
                    {'name': 'Branch Accounting'}, {'name': 'Homeloans - Squad 1'}, {'name': 'Homeloans - Squad 2'},
                    {'name': 'Instant Money - Digital Messaging'}, {'name': 'Instant Money - Transit'}, {'name': 'Instant Money - VAS'},
                    {'name': 'Instant Money - Wallets'}, {'name': 'Statements'}, {'name': 'Unsecured Lending'}],
                'W': [{'name': 'Insurance - Coverage Squad 1', 'id': 'wealth-insurance-1'}, {'name': 'Insurance - Coverage Squad 2', 'id': 'wealth-insurance-2'}, {'name': 'Wealth and Investments and Fiduciary', 'id': 'wealth-investments'}]
            };

            $scope.getTeams();
        };

        $scope.getTeams = function(){
            $scope.teams = $scope.allTeams[$scope.selectedPortfolio];
        };

        $scope.getPortfolioName = function(portfolioKey) {
            var portfolioName = "";
            for (var portfolioId in $scope.portfolios) {
                if ($scope.portfolios[portfolioId].id === portfolioKey) {
                    portfolioName = $scope.portfolios[portfolioId].name;
                }
            }

            return portfolioName;
        };

        $scope.updateTeams = function(){
            $scope.selectedTeam = "";
            $scope.getTeams();
        };

        $scope.saveTeamName = function(){
            if($scope.selectedTeam === ""){
                $rootScope.hasError = true;
                $location.path('/select-pipeline-team');
            }
            else {
                $rootScope.hasError = false;
                $rootScope.teamName = $scope.selectedTeam;
                $rootScope.selectedPortfolioName = $scope.getPortfolioName($scope.selectedPortfolio);
                RetrievePipelineAssessment.getAssessment($scope.selectedTeam).then(function(response){
                    var data = response.data;
                    $rootScope.assessmentsPipeline = data['rawData'] !== undefined ? JSON.parse(data['rawData']) : {};
                    $location.path('/pipeline-ci');
                });
            }
        }

    }])

    .factory('RetrievePipelineAssessment', ['$http', function ($http) {
        return {
            getAssessment: function (teamName) {
                return $http({
                    url: "http://178.62.75.15:8080/pipeline?teamName=" + teamName,
                    method: "GET"
                });
            }
        }
    }]);
