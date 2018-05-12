'use strict';

describe('continuumAssessmentPlatform.teamselection module', function() {

    beforeEach(module('continuumAssessmentPlatform.teamselection'));
    var allTeams = {
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
            {'name': 'Generic Switch'}, {'name': 'GOSS and Outsourced Production'},
            {'name': 'IA - Channel Enablement IA'}, {'name': 'IA - Service and Chatbot IA'}, {'name': 'Cash Services IA'},
            {'name': 'Card IA'}, {'name': 'Credit IA'}, {'name': 'CRR IA'},
            {'name': 'Fraud IA'}, {'name': 'EIM IA'}, {'name': 'Liberty IA'},
            {'name': 'ROA IA'}, {'name': 'Central Finance IA'}, {'name': 'CIB Finance IA'},
            {'name': 'Payments, Regulatory and Maintenance IA'},
            {'name': 'Workflow - GOSS'},
            {'name': 'Auto-Recons Legacy'}, {'name': 'Bulk Payments'}, {'name': 'Emerging Payments'}, {'name': 'Card and Payments DevOps - Easy Trace'},
            {'name': 'Card and Payments DevOps - MUCC'}, {'name': 'Card and Payments DevOps - Automatic Everything'},
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
            {'name': 'Local Payments 1'}, {'name': 'Local Payments 2'}, {'name': 'MIS'}, {'name': 'Account Services'},
            {'name': 'Enhanced Collections'}, {'name': 'Thin Client'}, {'name': 'Platform'},
            {'name': 'BOL Legacy'}, {'name': 'Host to Host'}, {'name': 'Integration'}, {'name': 'PES'}, {'name': 'Pricing and Billing'},
            {'name': 'SSA'}, {'name': 'DevOps'}, {'name': 'Specialised Account Services'}],
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

    var portfolios = [{'id': 'AR', 'name': 'Africa Regions'}, {'id': 'Card', 'name': 'Card, Payments, GSS, VAF'},
        {'id': 'CIB', 'name': 'CIB'}, {'id': 'CIBO', 'name': 'CIB Operations Technology'}, {'id': 'CIBRT', 'name': 'CIB Risk Technology'},
        {'id': 'CIBTPS', 'name': 'CIB TPS'},
        {'id': 'CF', 'name': 'Corporate Functions'}, {'id': 'DS', 'name': 'Data Services'},
        {'id': 'DC', 'name': 'Digital Channels'}, {'id': 'EWT', 'name': 'Enterprise-wide Tech Functions'},
        {'id': 'Infra', 'name': 'Infrastructure Services'},
        {'id': 'PBB', 'name': 'Personal and Business Banking'}, {'id': 'Security', 'name': 'IT Security'},
        {'id': 'W', 'name': 'Wealth'}];

    describe('team selection controller', function () {

        var controller, location, q, deferred, retrieveAssessmentSpy;
        var scope, rootScope;

        beforeEach(inject(function ($location, $controller, $rootScope, $q, RetrieveAssessment) {
            q = $q;
            deferred = $q.defer();
            retrieveAssessmentSpy = jasmine.createSpyObj("RetrieveAssessment", ['getAssessment']);
            rootScope = $rootScope;
            scope = rootScope.$new();
            location = $location;
            controller = $controller('TeamSelectionCtrl', {'$scope': scope, '$rootScope': rootScope, 'RetrieveAssessment': retrieveAssessmentSpy});
        }));

        it('should be defined', function () {
            expect(controller).toBeDefined();
        });

        it('should have the default parameters at scope level', function(){
            expect(scope.teams).toEqual([{}]);
            expect(scope.selectedTeam).toEqual("");
            expect(scope.selectedPortfolio).toEqual("AR");
            expect(scope.allTeams).toEqual({});
        });

        describe('#init', function () {

            beforeEach(function(){
                scope.init();
            });

            it('should set the selected portfolio as Africa Region Key', function () {
                expect(scope.selectedPortfolio).toEqual("AR");
            });

            it('should have all the feature teams in the bank', function(){
                expect(scope.allTeams).toEqual(allTeams);
            });

            it('should have all the portfolios in the bank', function(){
                expect(scope.portfolios).toEqual(portfolios);
            });

            it('should have all the feature teams in the bank', function(){
                var expectedTeams = [{'name': 'Account Origination'}, {'name': 'ATM'}, {'name': 'Bancassurance'}, {'name': 'Credit Collections'},
                    {'name': 'Credit Scoring and Account Management'}, {'name': 'Digital New Features'}, {'name': 'Digital Rollout'},
                    {'name': 'Digital Security'}, {'name': 'Finance'}, {'name': 'GoldenEye'}, {'name': 'Loans and Leasing'},
                    {'name': 'Operations and Statements'}, {'name': 'Payments and Cheque Voucher Processing'},
                    {'name': 'Payments - Squad 1'}, {'name': 'Payments - Squad 2'}, {'name': 'Pricing'},
                    {'name': 'Service Digitisation'}, {'name': 'Statements'}, {'name': 'Transactional'}, {'name': 'Value Exchange'}];

                expect(scope.teams).toEqual(expectedTeams);
            });
        });

        describe('#getTeams', function(){
            it('should get teams based on the selected portfolio key for AR', function(){
                var expectedTeams = [{'name': 'Account Origination'}, {'name': 'ATM'}, {'name': 'Bancassurance'}, {'name': 'Credit Collections'},
                    {'name': 'Credit Scoring and Account Management'}, {'name': 'Digital New Features'}, {'name': 'Digital Rollout'},
                    {'name': 'Digital Security'}, {'name': 'Finance'}, {'name': 'GoldenEye'}, {'name': 'Loans and Leasing'},
                    {'name': 'Operations and Statements'}, {'name': 'Payments and Cheque Voucher Processing'},
                    {'name': 'Payments - Squad 1'}, {'name': 'Payments - Squad 2'}, {'name': 'Pricing'},
                    {'name': 'Service Digitisation'}, {'name': 'Statements'}, {'name': 'Transactional'}, {'name': 'Value Exchange'}];
                scope.selectedPortfolio = "AR";
                scope.allTeams = allTeams;
                scope.getTeams();

                expect(scope.teams).toEqual(expectedTeams);
            });

            it('should get teams based on the selected portfolio key for W', function(){
                var expectedTeams = [{'name': 'Standard Insurance Limited'}, {'name': 'Standard Bank Insurance Brokers'}, {'name': 'Wealth and Investments and Fiduciary'},
                    {'name': 'Wealth International'}];
                scope.selectedPortfolio = "W";
                scope.allTeams = allTeams;
                scope.getTeams();

                expect(scope.teams).toEqual(expectedTeams);
            });
        });

        describe('#getPortfolioName', function(){
            it('should get the portfolio name for Africa Regions given AR key', function(){
                var expectedPortfolioName = 'Africa Regions';
                scope.portfolios = portfolios;
                expect(scope.getPortfolioName('AR')).toEqual(expectedPortfolioName);
            });

            it('should get the portfolio name for Corporate Functions given CP key', function(){
                var expectedPortfolioName = 'Corporate Functions';
                scope.portfolios = portfolios;
                expect(scope.getPortfolioName('CF')).toEqual(expectedPortfolioName);
            });

            it('should get the empty portfolio name for key that is not defined', function(){
                var expectedPortfolioName = '';
                scope.portfolios = portfolios;
                expect(scope.getPortfolioName('Not_Defined')).toEqual(expectedPortfolioName);
            });
        });

        describe('#updateTeams', function(){
            it('should get teams based on the selected portfolio key for AR', function(){
                var expectedTeams = [{'name': 'Account Origination'}, {'name': 'ATM'}, {'name': 'Bancassurance'}, {'name': 'Credit Collections'},
                    {'name': 'Credit Scoring and Account Management'}, {'name': 'Digital New Features'}, {'name': 'Digital Rollout'},
                    {'name': 'Digital Security'}, {'name': 'Finance'}, {'name': 'GoldenEye'}, {'name': 'Loans and Leasing'},
                    {'name': 'Operations and Statements'}, {'name': 'Payments and Cheque Voucher Processing'},
                    {'name': 'Payments - Squad 1'}, {'name': 'Payments - Squad 2'}, {'name': 'Pricing'},
                    {'name': 'Service Digitisation'}, {'name': 'Statements'}, {'name': 'Transactional'}, {'name': 'Value Exchange'}];
                scope.selectedPortfolio = "AR";
                scope.allTeams = allTeams;
                scope.updateTeams();

                expect(scope.teams).toEqual(expectedTeams);
            });

            it('should get teams based on the selected portfolio key for W', function(){
                var expectedTeams = [{'name': 'Standard Insurance Limited'}, {'name': 'Standard Bank Insurance Brokers'}, {'name': 'Wealth and Investments and Fiduciary'},
                    {'name': 'Wealth International'}];
                scope.selectedPortfolio = "W";
                scope.allTeams = allTeams;
                scope.updateTeams();

                expect(scope.teams).toEqual(expectedTeams);
            });

            it('should set the selected team as an empty string', function(){
                scope.selectedPortfolio = "W";
                scope.allTeams = allTeams;
                scope.updateTeams();

                expect(scope.selectedTeam).toEqual('');
            });
        });

        describe('#saveTeamName', function(){
            it('should set error flag on rootscope to true if the selected team is an empty string', function(){
                scope.selectedTeam = '';
                scope.saveTeamName();

                expect(rootScope.hasError).toBeTruthy();
            });

            it('should return to the select team page if the selected team is an empty string', function(){
                scope.selectedTeam = '';
                scope.saveTeamName();

                expect(location.path()).toEqual('/select-team');
            });
            it('should set error flag on rootscope to false if there is a selected team', function(){
                scope.selectedTeam = 'Insurance - Coverage Squad 1';
                deferred.resolve({'status': 200, 'data': '{}'});
                retrieveAssessmentSpy.getAssessment.and.returnValue(deferred.promise);

                scope.saveTeamName();

                expect(rootScope.hasError).toBeFalsy();
            });

            it('should proceed to the strategy page if there is a selected team', function(){
                scope.selectedTeam = 'Insurance - Coverage Squad 1';
                deferred.resolve({'status': 200, 'data': '{}'});
                retrieveAssessmentSpy.getAssessment.and.returnValue(deferred.promise);

                scope.saveTeamName();
                scope.$apply();

                expect(location.path()).toEqual('/strategy');
            });

            it('should set the selected team on the root scope based of selected scope team name', function(){
                scope.selectedTeam = 'Insurance - Coverage Squad 1';
                deferred.resolve({'status': 200, 'data': '{}'});
                retrieveAssessmentSpy.getAssessment.and.returnValue(deferred.promise);

                scope.saveTeamName();

                expect(rootScope.teamName).toEqual('Insurance - Coverage Squad 1');
            });

            it('should set the portfolio name on the root scope based of selected scope portfolio key', function(){
                scope.selectedTeam = 'Insurance - Coverage Squad 1';
                scope.selectedPortfolio = 'W';
                scope.portfolios = portfolios;
                deferred.resolve({'status': 200, 'data': '{}'});
                retrieveAssessmentSpy.getAssessment.and.returnValue(deferred.promise);
                scope.saveTeamName();
                scope.$apply();

                expect(rootScope.selectedPortfolioName).toEqual('Wealth');
            });

            it('should set the previous data in the rootScope assessment as an object', function(){
                scope.selectedTeam = 'Insurance - Coverage Squad 1';
                scope.selectedPortfolio = 'W';
                scope.portfolios = portfolios;
                var expectedAssessments = {'test': 'value'};

                deferred.resolve({'status': 200, 'data': { 'rawData': "{\"test\": \"value\" }"}});
                retrieveAssessmentSpy.getAssessment.and.returnValue(deferred.promise);
                scope.saveTeamName();
                scope.$apply();

                var actualAssessments = rootScope.assessments;
                expect(actualAssessments).toEqual(expectedAssessments);
            });

            it('should set the previous data in the rootScope assessment as an empty object if no data', function(){
                scope.selectedTeam = 'Insurance - Coverage Squad 1';
                scope.selectedPortfolio = 'W';
                scope.portfolios = portfolios;
                var expectedAssessments = {};

                deferred.resolve({'status': 200, 'data': {}});
                retrieveAssessmentSpy.getAssessment.and.returnValue(deferred.promise);
                scope.saveTeamName();
                scope.$apply();

                var actualAssessments = rootScope.assessments;
                expect(actualAssessments).toEqual(expectedAssessments);
            });
        });
    });

    describe('team selection services', function(){
        var retrieveAssessmentService, $httpBackend;
        var teamName = 'Team 1';

        beforeEach(inject(function($injector) {
            retrieveAssessmentService = $injector.get('RetrieveAssessment');
            $httpBackend = $injector.get('$httpBackend');

            $httpBackend.when('GET', "http://178.62.75.15:8080/assessment?teamName="+teamName).respond("Successfully Retrieved");
        }));

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should respond successfully when the service is called', function(){
            var expectedResponse = "Successfully Retrieved";

            retrieveAssessmentService.getAssessment(teamName).then(function(response){
                expect(response.data).toEqual(expectedResponse);
            });
            $httpBackend.flush();
        });
    });
});
