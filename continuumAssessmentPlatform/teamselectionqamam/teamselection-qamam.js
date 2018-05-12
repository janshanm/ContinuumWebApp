'use strict';

angular.module('continuumAssessmentPlatform.teamselection-qamam', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/select-qamam-team', {
            templateUrl: 'teamselectionqamam/team-selection-qamam.html',
            controller: 'TeamQAMaMSelectionCtrl'
        });
    }])

    .controller('TeamQAMaMSelectionCtrl', ['$location', '$scope', '$rootScope', 'RetrieveQAMaMAssessment', function($location, $scope, $rootScope, RetrieveQAMaMAssessment) {
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
                    {'name': 'Digital Security'}, {'name': 'Finance'}, {'name': 'GoldenEye'}, {'name': 'Loans and Leasing'},
                    {'name': 'Operations and Statements'}, {'name': 'Payments and Cheque Voucher Processing'},
                    {'name': 'Payments - Squad 1'}, {'name': 'Payments - Squad 2'}, {'name': 'Pricing'},
                    {'name': 'Service Digitisation'}, {'name': 'Statements'}, {'name': 'Transactional'}, {'name': 'Value Exchange'}],
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
                    {'name': 'VAF - Squad 1'}, {'name': 'VAF - Squad 2 with Genesis'}, {'name': 'VAF Africa Regions'},
                    {'name': 'VAF Digitisation'}, {'name': 'VAF Modernisation'}, {'name': 'VAF Wholesale Finance'}],
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
                    {'name': 'FLS Team'}, {'name': 'HC SAP'}, {'name': 'IOR'}],
                'DS': [{'name': 'AML DevOps'}, {'name': 'Africa Regions Transformation'}, {'name': 'Big Data Ingestion'},
                    {'name': 'Core Banking'}, {'name': 'Data Warehouse Products'}, {'name': 'Human Capital'},
                    {'name': 'Loyalty and Rewards'}, {'name': 'RDM, MDM and MRI'},
                    {'name': 'SAS'}, {'name': 'Wealth'}],
                'DC': [{'name': 'AIMS'}, {'name': 'Card and Emerging Payments'}, {'name': 'Client Side Framework'},
                    {'name': 'Corporate Banking'}, {'name': 'Customer Foundation'}, {'name': 'Data and Analytics'},
                    {'name': 'Digital ID and Entitlements'}, {'name': 'Forex'}, {'name': 'Insurance, Homeloans, VAF, Kids'},
                    {'name': 'Order Management'}, {'name': 'Investments'},
                    {'name': 'Personal and SE - Account Management'}, {'name': 'Personal and SE - Transactional and VAS'},
                    {'name': 'Staff Foundation'}, {'name': 'Staff Web'}, {'name': 'Vikings'},
                    {'name': 'Virtual Banking - Front End'}, {'name': 'Virtual Banking - Squad 2'}, {'name': 'Public Web'}],
                'EWT': [{'name': 'BPM'}, {'name': 'ECM'}, {'name': 'ESB'}, {'name': 'TechLab'}, {'name': 'Tools and Support'}],
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
                'PBB': [{'name': 'Account Origination'}, {'name': 'AMS 1'}, {'name': 'AMS 2'}, {'name': 'AMS 3 - Unsecured Lending'},
                    {'name': 'AO - Unsecured Lending'}, {'name': 'ATM - Squad 1'}, {'name': 'ATM - Squad 2'},
                    {'name': 'ATM - Squad 3'}, {'name': 'ATM - Squad 4'}, {'name': 'BPM Non-federated'}, {'name': 'Branch Accounting'},
                    {'name': 'CDI/RSS'}, {'name': 'Natural and .NET Applications'}, {'name': 'Credit Account Maintenance Feature Team'},
                    {'name': 'Credit Collections Feature Team'}, {'name': 'Credit Account Origination Feature Team'},
                    {'name': 'Credit Collateral Feature Team'}, {'name': 'E3 Systems Feature Team'},
                    {'name': 'Customer Insights and Analytics'}, {'name': 'EIM Data Change'}, {'name': 'EIM Data Remediation'},
                    {'name': 'Banking Statements'}, {'name': 'Registration and Login'}, {'name': 'SEO Payments'},
                    {'name': 'SEO Profile Management'}, {'name': 'SEO Registration'}, {'name': 'USSD'},
                    {'name': 'Application Performance Monitoring'}, {'name': 'Aris'}, {'name': 'Business Applications'},
                    {'name': 'CCC'}, {'name': 'Customer Integration and Maintenance'}, {'name': 'e-Commerce'},
                    {'name': 'Customer 1st and Ciboodle - Squad 1'}, {'name': 'Customer 1st and Ciboodle - Squad 2'},
                    {'name': 'eSignature / OFV'}, {'name': 'IBR'}, {'name': 'Payments'}, {'name': 'Payments - Unsecured Lending'},
                    {'name': 'NDS - Squad 1'}, {'name': 'NDS - Squad 2'}, {'name': 'NDS - Squad 3'},
                    {'name': 'Homeloans - Squad 1'}, {'name': 'Homeloans - Squad 2'}, {'name': 'Platform Team (OBB 2)'},
                    {'name': 'Product and Pricing'}, {'name': 'SAP User Prov, Org, Auth'}, {'name': 'System Engineering Team'},
                    {'name': 'Instant Money - Digital Messaging'}, {'name': 'Instant Money - Transit'}, {'name': 'Instant Money - VAS'},
                    {'name': 'Instant Money - Wallets'}, {'name': 'Statements'}, {'name': 'Unsecured Lending'}, {'name': 'Value / Payments Team (OBB 1)'}],
                'Security': [{'name': 'Test Security Squad'}],
                'W': [{'name': 'Standard Insurance Limited'}, {'name': 'Standard Bank Insurance Brokers'}, {'name': 'Wealth and Investments and Fiduciary'},
                    {'name': 'Wealth International'}]
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
                $location.path('/select-qamam-team');
            }
            else {
                $rootScope.hasError = false;
                $rootScope.teamName = $scope.selectedTeam;
                $rootScope.selectedPortfolioName = $scope.getPortfolioName($scope.selectedPortfolio);
                RetrieveQAMaMAssessment.getAssessment($scope.selectedTeam).then(function(response){
                    var data = response.data;
                    $rootScope.assessmentsQaMaM = data['rawData'] !== undefined ? JSON.parse(data['rawData']) : {};
                    $location.path('/test-criteria');
                });
            }
        }

    }])

    .factory('RetrieveQAMaMAssessment', ['$http', function ($http) {
        return {
            getAssessment: function (teamName) {
                return $http({
                    url: "http://178.62.75.15:8081/assessment-qamam?teamName="+teamName,
                    method: "GET"
                });
            }
        }
    }]);
