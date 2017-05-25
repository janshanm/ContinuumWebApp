'use strict';

angular.module('continuumAssessmentPlatform.teamselection', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/select-team', {
            templateUrl: 'teamselection/team-selection.html',
            controller: 'TeamSelectionCtrl'
        });
    }])

    .controller('TeamSelectionCtrl', ['$location', '$scope', '$rootScope', function($location, $scope, $rootScope) {
        $scope.teams = [{}];
        $scope.selectedTeam = "";
        $scope.selectedPortfolio = "AR";
        $scope.allTeams = {};

        $scope.init = function () {
            $scope.selectedPortfolio = "AR";

            $scope.portfolios = [{'id': 'AR', 'name': 'Africa Regions'}, {'id': 'Card', 'name': 'Card, Payments, GSS, VAF'},
                {'id': 'CF', 'name': 'Corporate Functions'}, {'id': 'DS', 'name': 'Data Services'},
                {'id': 'DC', 'name': 'Digital Channels'}, {'id': 'EWT', 'name': 'Enterprise-wide Tech Functions'},
                {'id': 'PBB', 'name': 'Personal and Business Banking'}, {'id': 'W', 'name': 'Wealth'}];

            $scope.allTeams = {
                'AR': [{'name': 'Account Origination'}, {'name': 'ATM'}, {'name': 'Bancassurance'}, {'name': 'Credit Collections'},
                    {'name': 'Credit Scoring and Account Management'}, {'name': 'Digital New Features'}, {'name': 'Digital Rollout'},
                    {'name': 'Digital Security'}, {'name': 'GoldenEye'}, {'name': 'Service Digitisation'}, {'name': 'Value Exchange'}],
                'Card': [{'name': 'Acquiring - Flex'}, {'name': 'Acquiring - Product'}, {'name': 'Acquiring - Rest of Africa'},
                    {'name': 'Diners Auths and Release Compliance'}, {'name': 'Diners Digitalization'}, {'name': 'Diners Transactional'},
                    {'name': 'EMV - Squad 1'}, {'name': 'EMV - Squad 2'}, {'name': 'Issuing - Customer Experience (Genesis)'},
                    {'name': 'Issuing - Innovation'}, {'name': 'Issuing - Product Squad 1'}, {'name': 'Issuing - Product Squad 2'},
                    {'name': 'Issuing - Rest of Africa'}, {'name': 'RoA Switch(Sparrow)'}, {'name': 'Cash - Acquiring'},
                    {'name': 'Cash - Production'}, {'name': 'Cash - Regulatory'}, {'name': 'FASS/GC/COSS'},
                    {'name': 'GOSS and Outsourced Production'}, {'name': 'Robotic Process Automation'}, {'name': 'Workflow - GOSS'},
                    {'name': 'Auto-Recons Legacy'}, {'name': 'Bulk Payments'}, {'name': 'Emerging Payments'},
                    {'name': 'IntelliMatch'}, {'name': 'Money Transfers and ACB'}, {'name': 'Online Payments - Squad 1'},
                    {'name': 'Online Payments - Squad 2'}, {'name': 'Online Payments - Squad 3'}, {'name': 'Payment Data'},
                    {'name': 'Postilion/Base 24 - Squad 1'}, {'name': 'Postilion/Base 24 - Squad 2'},
                    {'name': 'Postilion/Base 24 - Squad 3'}, {'name': 'Fleet'}, {'name': 'VAF - Squad 1'},
                    {'name': 'VAF - Squad 2 with Genesis'}],
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
                'DC': [{'name': 'Card, Digital Payments and Loyalty'}, {'name': 'Client Side Framework'}, {'name': 'Customer Foundation'},
                    {'name': 'Corporate and Commercial Banking and International Payments'}, {'name': 'Data and Analytics'}, {'name': 'Investments'},
                    {'name': 'Digital ID and Entitlements'}, {'name': 'Insurance, Homeloans, VAF, Kids'}, {'name': 'Order Management'},
                    {'name': 'Personal and SE - Account Management'}, {'name': 'Personal and SE - Transactional and VAS'},
                    {'name': 'Staff Foundation'}, {'name': 'Virtual Banking - Squad 1'}, {'name': 'Virtual Banking - Squad 2'},
                    {'name': 'Web Presence and Community'}],
                'EWT': [{'name': 'Domain Architecture'}, {'name': 'BPM - Digital Squad'}, {'name': 'BPM - GEF Squad'},
                    {'name': 'BPM - Squad 1'}, {'name': 'BPM Platform'}, {'name': 'ECM CIB'},
                    {'name': 'ECM Core'}, {'name': 'ECM Correspondence'}, {'name': 'ECM Enterprise'},
                    {'name': 'ECM Platform'}, {'name': 'ESB - Integration GEF Squad'}, {'name': 'ESB - Integration RoA Non-Core Banking Squad'},
                    {'name': 'ESB - Integration Squad 1'}, {'name': 'ESB - Platform'}, {'name': 'Agile Tools'},
                    {'name': 'Application Performance Monitoring'}, {'name': 'Aris'}, {'name': 'Business Applications'},
                    {'name': 'Mainframe Tools'}, {'name': 'Sharepoint'}, {'name': 'Source Code Management'},
                    {'name': 'Teamtrack'}, {'name': 'Technical Enablement'}, {'name': 'Tools and Support'}],
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
                'W': [{'name': 'Insurance - Coverage Squad 1'}, {'name': 'Insurance - Coverage Squad 2'}, {'name': 'Wealth and Investments and Fiduciary'}]
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
                $location.path('/select-team');
            }
            else {
                $rootScope.hasError = false;
                $rootScope.teamName = $scope.selectedTeam;
                $rootScope.selectedPortfolioName = $scope.getPortfolioName($scope.selectedPortfolio);
                $location.path('/strategy');
            }
        }

    }]);