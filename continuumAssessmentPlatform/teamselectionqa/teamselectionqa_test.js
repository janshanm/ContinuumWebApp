'use strict';

describe('continuumAssessmentPlatform.teamselection module', function() {

    beforeEach(module('continuumAssessmentPlatform.teamselection'));
    var allTeams = {
        'AR': [{'name': 'Account Origination'}, {'name': 'ATM'}, {'name': 'Bancassurance'}, {'name': 'Credit Collections'},
            {'name': 'Credit Scoring and Account Management'}, {'name': 'Digital New Features'}, {'name': 'Digital Rollout'},
            {'name': 'Digital Security'}, {'name': 'GoldenEye'}, {'name': 'Service Digitisation'}, {'name': 'Value Exchange'}],
        'Card': [{'name': 'Acquiring - Rest of Africa'},
            {'name': 'Diners Auths and Release Compliance'}, {'name': 'Diners Digitalization'}, {'name': 'Diners Transactional'},
            {'name': 'EMV - Squad 1'}, {'name': 'EMV - Squad 2'}, {'name': 'Issuing - Customer Experience (Genesis)'},
            {'name': 'Issuing - Innovation'}, {'name': 'Issuing - Product Squad 1'}, {'name': 'Issuing - Product Squad 2'},
            {'name': 'Issuing - Rest of Africa'}, {'name': 'RoA Switch(Sparrow)'}, {'name': 'Cash - Acquiring'},
            {'name': 'Cash - Production'}, {'name': 'Cash - Regulatory'}, {'name': 'FASS/GC/COSS'},
            {'name': 'GOSS and Outsourced Production'}, {'name': 'Robotic Process Automation'}, {'name': 'Workflow - GOSS'},
            {'name': 'Auto-Recons Legacy'}, {'name': 'Bulk Payments'}, {'name': 'Emerging Payments'},
            {'name': 'IntelliMatch'}, {'name': 'Merchant Solutions Service'}, {'name': 'Money Transfers and ACB'}, {'name': 'Online Payments - Squad 1'},
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
        'DC': [{'name': 'Card and Emerging Payments'}, {'name': 'Client Side Framework'}, {'name': 'Customer Foundation'},
            {'name': 'Corporate and Commercial Banking and International Payments'}, {'name': 'Data and Analytics'}, {'name': 'Investments'},
            {'name': 'Digital ID and Entitlements'}, {'name': 'Insurance, Homeloans, VAF, Kids'}, {'name': 'Order Management'},
            {'name': 'Personal and SE - Account Management'}, {'name': 'Personal and SE - Transactional and VAS'},
            {'name': 'Staff Foundation'}, {'name': 'Virtual Banking - Squad 1'}, {'name': 'Virtual Banking - Squad 2'},
            {'name': 'Web for Customer'}, {'name': 'Web for Staff'}, {'name': 'Web Presence and Community'}],
        'EWT': [{'name': 'Domain Architecture'}, {'name': 'BPM'}, {'name': 'ECM'}, {'name': 'ESB'}, {'name': 'Agile Tools'},
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

    var portfolios = [{'id': 'AR', 'name': 'Africa Regions'}, {'id': 'Card', 'name': 'Card, Payments, GSS, VAF'},
        {'id': 'CF', 'name': 'Corporate Functions'}, {'id': 'DS', 'name': 'Data Services'},
        {'id': 'DC', 'name': 'Digital Channels'}, {'id': 'EWT', 'name': 'Enterprise-wide Tech Functions'},
        {'id': 'PBB', 'name': 'Personal and Business Banking'}, {'id': 'W', 'name': 'Wealth'}];

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
                    {'name': 'Digital Security'}, {'name': 'GoldenEye'}, {'name': 'Service Digitisation'}, {'name': 'Value Exchange'}];

                expect(scope.teams).toEqual(expectedTeams);
            });
        });

        describe('#getTeams', function(){
            it('should get teams based on the selected portfolio key for AR', function(){
                var expectedTeams = [{'name': 'Account Origination'}, {'name': 'ATM'}, {'name': 'Bancassurance'}, {'name': 'Credit Collections'},
                    {'name': 'Credit Scoring and Account Management'}, {'name': 'Digital New Features'}, {'name': 'Digital Rollout'},
                    {'name': 'Digital Security'}, {'name': 'GoldenEye'}, {'name': 'Service Digitisation'}, {'name': 'Value Exchange'}];
                scope.selectedPortfolio = "AR";
                scope.allTeams = allTeams;
                scope.getTeams();

                expect(scope.teams).toEqual(expectedTeams);
            });

            it('should get teams based on the selected portfolio key for W', function(){
                var expectedTeams = [{'name': 'Insurance - Coverage Squad 1'},
                    {'name': 'Insurance - Coverage Squad 2'}, {'name': 'Wealth and Investments and Fiduciary'}];
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
                    {'name': 'Digital Security'}, {'name': 'GoldenEye'}, {'name': 'Service Digitisation'}, {'name': 'Value Exchange'}];
                scope.selectedPortfolio = "AR";
                scope.allTeams = allTeams;
                scope.updateTeams();

                expect(scope.teams).toEqual(expectedTeams);
            });

            it('should get teams based on the selected portfolio key for W', function(){
                var expectedTeams = [{'name': 'Insurance - Coverage Squad 1'},
                    {'name': 'Insurance - Coverage Squad 2'}, {'name': 'Wealth and Investments and Fiduciary'}];
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

            $httpBackend.when('GET', "http://localhost:8080/assessment?teamName="+teamName).respond("Successfully Retrieved");
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