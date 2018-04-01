'use strict';

angular.module('continuumAssessmentPlatform.teamselection', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/select-team', {
            templateUrl: 'teamselection/team-selection.html',
            controller: 'TeamSelectionCtrl'
        });
    }])

    .controller('TeamSelectionCtrl', ['$location', '$scope', '$rootScope', 'RetrieveAssessment', function($location, $scope, $rootScope, RetrieveAssessment) {
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
                {'id': 'PBB', 'name': 'Personal and Business Banking'}, {'id': 'Security', 'name': 'IT Security'},
                {'id': 'W', 'name': 'Wealth'}];

            $scope.allTeams = {
                'AR': [{'name': 'Account Origination'}, {'name': 'ATM'}, {'name': 'Bancassurance'}, {'name': 'Credit Collections'},
                    {'name': 'Credit Scoring and Account Management'}, {'name': 'Digital New Features'}, {'name': 'Digital Rollout'},
                    {'name': 'Digital Security'}, {'name': 'GoldenEye'}, {'name': 'Service Digitisation'}, {'name': 'Value Exchange'}],
                'Card': [{'name': 'Acquiring - Feature Team'}, {'name': 'Acquiring - Rest of Africa'}, {'name': 'Acquiring - Product'}, {'name': 'Acquiring - Flex'},
                    {'name': 'Chip Centre'}, {'name': 'Diners Auths and Release Compliance'}, {'name': 'Diners Digitalization'}, {'name': 'Diners Transactional'},
                    {'name': 'EMV - Squad 1'}, {'name': 'EMV - Squad 2'}, {'name': 'Issuing - Customer Experience'},
                    {'name': 'Issuing - Transactional Feature Team'}, {'name': 'Issuing - Product Squad 1'}, {'name': 'Issuing - Product Squad 2'},
                    {'name': 'Africa Region Card Issuing'}, {'name': 'Sparrow Component Team'}, {'name': 'Cash Feature Team'}, {'name': 'FASS/GC/COSS'},
                    {'name': 'GOSS and Outsourced Production'},
                    {'name': 'IA - Channel Enablement IA'}, {'name': 'IA - Service and Chatbot IA'}, {'name': 'Cash Services IA'},
                    {'name': 'Card IA'}, {'name': 'Credit IA'}, {'name': 'CRR IA'},
                    {'name': 'Fraud IA'}, {'name': 'EIM IA'}, {'name': 'Liberty IA'},
                    {'name': 'ROA IA'}, {'name': 'Central Finance IA'}, {'name': 'CIB Finance IA'},
                    {'name': 'Payments, Regulatory and Maintenance IA'},
                    {'name': 'Workflow - GOSS'},
                    {'name': 'Auto-Recons Legacy'}, {'name': 'Bulk Payments'}, {'name': 'Emerging Payments'}, {'name': 'Card and Payments DevOps'},
                    {'name': 'IntelliMatch'}, {'name': 'Merchant Solutions Service'}, {'name': 'Money Transfers and ACB'},
                    {'name': 'Online Payments - Squad 1'}, {'name': 'Online Payments - Squad 2'}, {'name': 'Online Payments - Squad 3'},
                    {'name': 'Payment Data'}, {'name': 'Postilion/Base 24 - Squad 1'}, {'name': 'Postilion/Base 24 - Squad 2'},
                    {'name': 'Postilion/Base 24 - Squad 3'}, {'name': 'Remittances (Instant Money)'}, {'name': 'Fleet'},
                    {'name': 'VAF - Squad 1'}, {'name': 'VAF - Squad 2 with Genesis'}],
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
                    {'name': 'SSA'}, {'name': 'DevOps'}],
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
                'DC': [{'name': 'AIMS'}, {'name': 'Card and Emerging Payments'}, {'name': 'Client Side Framework'},
                    {'name': 'Corporate Banking'}, {'name': 'Customer Foundation'}, {'name': 'Data and Analytics'},
                    {'name': 'Digital ID and Entitlements'}, {'name': 'Forex'}, {'name': 'Insurance, Homeloans, VAF, Kids'}, {'name': 'Order Management'},
                    {'name': 'Personal and SE - Account Management'}, {'name': 'Personal and SE - Transactional and VAS'},
                    {'name': 'Staff Foundation'}, {'name': 'Staff Web'}, {'name': 'Vikings'},
                    {'name': 'Virtual Banking - Front End'}, {'name': 'Virtual Banking - Squad 2'}, {'name': 'Public Web'}],
                'EWT': [{'name': 'Domain Architecture'}, {'name': 'BPM'}, {'name': 'ECM'}, {'name': 'ESB'}, {'name': 'Agile Tools'},
                    {'name': 'Application Performance Monitoring'}, {'name': 'Aris'}, {'name': 'Business Applications'},
                    {'name': 'Mainframe Tools'}, {'name': 'Sharepoint'}, {'name': 'Source Code Management'},
                    {'name': 'Teamtrack'}, {'name': 'Technical Enablement'}, {'name': 'Tools and Support'}],
                'Infra': [{'name': 'Capacity Management'}, {'name': 'CICS'}, {'name': 'Data Centre – Africa Region'}, {'name': 'Data Centre – DCAT2'},
                    {'name': 'Data Centre – DCIRM'}, {'name': 'DB2/Adabas'}, {'name': 'J2E'},
                    {'name': 'End User Computing'}, {'name': 'Enterprise Systems Management'}, {'name': 'Facility Management'},
                    {'name': 'Mainframe – Integration'}, {'name': 'Mainframe – Storage'},
                    {'name': 'Mainframe – zOS'}, {'name': 'Middleware – Control Direct and MQ'},
                    {'name': 'Middleware – TWS'}, {'name': 'Middleware – Control M / GCE / RMS and report viewer'},
                    {'name': 'Linux'}, {'name': 'Network – Support'}, {'name': 'Network – Deployment'}, {'name': 'Open Systems Storage and Backup'},
                    {'name': 'Oracle'}, {'name': 'Platform – Solaris'}, {'name': 'Platform – AIX'}, {'name': 'Platform Engineering – Cloud'},
                    {'name': 'Platform Engineering – Automation'}, {'name': 'SAP Front Office'}, {'name': 'SAP Back Office'},
                    {'name': 'Storage'}, {'name': 'Sybase and DB2'}, {'name': 'SQL'}, {'name': 'Unified Communications'},
                    {'name': 'Windows'}],
                'PBB': [{'name': 'CDI/RSS'}, {'name': 'Natural and .NET Applications'}, {'name': 'Credit Account Maintenance Feature Team'},
                    {'name': 'Credit Collections Feature Team'}, {'name': 'Credit Account Origination Feature Team'},
                    {'name': 'Credit Collateral Feature Team'}, {'name': 'E3 Systems Feature Team'},
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
                'Security': [{'name': 'Test Security Squad'}],
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
                RetrieveAssessment.getAssessment($scope.selectedTeam).then(function(response){
                    var data = response.data;
                    $rootScope.assessments = data['rawData'] !== undefined ? JSON.parse(data['rawData']) : {};
                    $location.path('/strategy');
                });
            }
        }

    }])

    .factory('RetrieveAssessment', ['$http', function ($http) {
        return {
            getAssessment: function (teamName) {
                return $http({
                    url: "http://178.62.75.15:8080/assessment?teamName="+teamName,
                    method: "GET"
                });
            }
        }
    }]);
