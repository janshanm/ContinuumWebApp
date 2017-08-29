'use strict';

describe('continuumAssessmentPlatform.stakeholder-management module', function() {

    beforeEach(module('continuumAssessmentPlatform.stakeholder-management'));

    describe('Stakeholder-management controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('StakeholderManagementCtrl', {'$scope': scope, '$rootScope': rootScope});
        }));

        it('should be defined', function() {
            expect(controller).toBeDefined();
        });

        it('should have defaults as false for the traveller questions', function(){
            expect(scope.traveller1).toBeDefined();
            expect(scope.traveller2).toBeDefined();
            expect(scope.traveller3).toBeDefined();

            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
        });

        it('should have defaults as false for the artisan questions', function(){
            expect(scope.artisan1).toBeDefined();
            expect(scope.artisan2).toBeDefined();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
        });

        it('should have defaults as false for the expert questions', function(){
            expect(scope.expert1).toBeDefined();
            expect(scope.expert2).toBeDefined();
            expect(scope.expert3).toBeDefined();

            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
        });

        it('should have defaults as false for the professional questions', function(){
            expect(scope.professional1).toBeDefined();
            expect(scope.professional2).toBeDefined();
            expect(scope.professional3).toBeDefined();
            expect(scope.professional4).toBeDefined();

            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.professional4).toBeFalsy();
        });

        it('should have defaults as false for the master questions', function(){
            expect(scope.master1).toBeDefined();
            expect(scope.master2).toBeDefined();

            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
        });

        it('should set the default values based on the rootScope if they are present', inject(function($controller){
            rootScope = {'assessmentsQa': {'stakeholder-management': {
                'traveller1': true, 'traveller2': true, 'traveller3': true,
                'artisan1': true, 'artisan2': true,
                'expert1': true, 'expert2': false, 'expert3': false,
                'professional1': false, 'professional2': true, 'professional3': true, 'professional4': true,
                'master1': true, 'master2': true}}};

            controller = $controller('StakeholderManagementCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeTruthy();
            expect(scope.traveller2).toBeTruthy();
            expect(scope.traveller3).toBeTruthy();
            expect(scope.artisan1).toBeTruthy();
            expect(scope.artisan2).toBeTruthy();
            expect(scope.expert1).toBeTruthy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeTruthy();
            expect(scope.professional3).toBeTruthy();
            expect(scope.professional4).toBeTruthy();
            expect(scope.master1).toBeTruthy();
            expect(scope.master2).toBeTruthy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('StakeholderManagementCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.professional4).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though there are assessments', inject(function($controller){
            rootScope = {'assessmentsQa': {'assessmentsQa': {}}};

            controller = $controller('StakeholderManagementCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.professional4).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
        }));

        it('should save the values for the assessment results for stakeholder-management', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.master1 = false;
            scope.master2 = false;

            var expectedStakeholderManagement = {
                'traveller1': true, 'traveller2': true, 'traveller3': true,
                'artisan1': true, 'artisan2': true,
                'expert1': true, 'expert2': true, 'expert3': true,
                'professional1': false, 'professional2': false, 'professional3': false, 'professional4': false,
                'master1': false, 'master2': false};

            scope.saveAssessments();
            var stakeholderManagement = rootScope.assessmentsQa['stakeholder-management'];

            expect(stakeholderManagement['traveller1']).toEqual(expectedStakeholderManagement[['traveller1']]);
            expect(stakeholderManagement['traveller2']).toEqual(expectedStakeholderManagement[['traveller2']]);
            expect(stakeholderManagement['traveller3']).toEqual(expectedStakeholderManagement[['traveller3']]);
            expect(stakeholderManagement['artisan1']).toEqual(expectedStakeholderManagement[['artisan1']]);
            expect(stakeholderManagement['artisan2']).toEqual(expectedStakeholderManagement[['artisan2']]);
            expect(stakeholderManagement['expert1']).toEqual(expectedStakeholderManagement[['expert1']]);
            expect(stakeholderManagement['expert2']).toEqual(expectedStakeholderManagement[['expert2']]);
            expect(stakeholderManagement['expert3']).toEqual(expectedStakeholderManagement[['expert3']]);
            expect(stakeholderManagement['professional1']).toEqual(expectedStakeholderManagement[['professional1']]);
            expect(stakeholderManagement['professional2']).toEqual(expectedStakeholderManagement[['professional2']]);
            expect(stakeholderManagement['professional3']).toEqual(expectedStakeholderManagement[['professional3']]);
            expect(stakeholderManagement['professional4']).toEqual(expectedStakeholderManagement[['professional4']]);
            expect(stakeholderManagement['master1']).toEqual(expectedStakeholderManagement[['master1']]);
            expect(stakeholderManagement['master2']).toEqual(expectedStakeholderManagement[['master2']]);
        });

        it('should save the values for the assessment results for stakeholderManagement when rootScope empty', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.master1 = false;
            scope.master2 = false;

            var expectedStakeholderManagement = {
                'traveller1': true, 'traveller2': true, 'traveller3': true,
                'artisan1': true, 'artisan2': true,
                'expert1': true, 'expert2': true, 'expert3': true,
                'professional1': false, 'professional2': false, 'professional3': false, 'professional4': false,
                'master1': false, 'master2': false};

            rootScope.assessmentsQa = {};

            scope.saveAssessments();
            var stakeholderManagement = rootScope.assessmentsQa['stakeholder-management'];

            expect(stakeholderManagement['traveller1']).toEqual(expectedStakeholderManagement[['traveller1']]);
            expect(stakeholderManagement['traveller2']).toEqual(expectedStakeholderManagement[['traveller2']]);
            expect(stakeholderManagement['traveller3']).toEqual(expectedStakeholderManagement[['traveller3']]);
            expect(stakeholderManagement['artisan1']).toEqual(expectedStakeholderManagement[['artisan1']]);
            expect(stakeholderManagement['artisan2']).toEqual(expectedStakeholderManagement[['artisan2']]);
            expect(stakeholderManagement['expert1']).toEqual(expectedStakeholderManagement[['expert1']]);
            expect(stakeholderManagement['expert2']).toEqual(expectedStakeholderManagement[['expert2']]);
            expect(stakeholderManagement['expert3']).toEqual(expectedStakeholderManagement[['expert3']]);
            expect(stakeholderManagement['professional1']).toEqual(expectedStakeholderManagement[['professional1']]);
            expect(stakeholderManagement['professional2']).toEqual(expectedStakeholderManagement[['professional2']]);
            expect(stakeholderManagement['professional3']).toEqual(expectedStakeholderManagement[['professional3']]);
            expect(stakeholderManagement['professional4']).toEqual(expectedStakeholderManagement[['professional4']]);
            expect(stakeholderManagement['master1']).toEqual(expectedStakeholderManagement[['master1']]);
            expect(stakeholderManagement['master2']).toEqual(expectedStakeholderManagement[['master2']]);
        });

        it('should save the score for stakeholderManagement as 1 if no question is answered', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.expert1 = false;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.master1 = false;
            scope.master2 = false;

            var expectedStakeholderManagementScore = 1;

            scope.saveAssessments();
            var stakeholderManagement = rootScope.assessmentsQa['stakeholder-management'];

            expect(stakeholderManagement['score']).toEqual(expectedStakeholderManagementScore);

        });

        it('should save the score for stakeholderManagement as 1 if traveller question is answered as yes', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.expert1 = false;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.master1 = false;
            scope.master2 = false;

            var expectedStakeholderManagementScore = 1;

            scope.saveAssessments();
            var stakeholderManagement = rootScope.assessmentsQa['stakeholder-management'];

            expect(stakeholderManagement['score']).toEqual(expectedStakeholderManagementScore);

        });

        it('should save the score for stakeholderManagement as 2 if traveller question is answered as no and all the artisan questions answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = true;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.expert1 = true;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.master1 = false;
            scope.master2 = false;

            var expectedStakeholderManagementScore = 2;

            scope.saveAssessments();
            var stakeholderManagement = rootScope.assessmentsQa['stakeholder-management'];

            expect(stakeholderManagement['score']).toEqual(expectedStakeholderManagementScore);

        });

        it('should save the score for stakeholderManagement as 3 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = true;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.master1 = false;
            scope.master2 = false;

            var expectedStakeholderManagementScore = 3;

            scope.saveAssessments();
            var stakeholderManagement = rootScope.assessmentsQa['stakeholder-management'];

            expect(stakeholderManagement['score']).toEqual(expectedStakeholderManagementScore);

        });

        it('should save the score for stakeholderManagement as 4 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = true;
            scope.professional2 = true;
            scope.professional3 = true;
            scope.professional4 = true;
            scope.master1 = true;
            scope.master2 = false;

            var expectedStakeholderManagementScore = 4;

            scope.saveAssessments();
            var stakeholderManagement = rootScope.assessmentsQa['stakeholder-management'];

            expect(stakeholderManagement['score']).toEqual(expectedStakeholderManagementScore);

        });

        it('should save the score for stakeholderManagement as 5 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes and master questions' +
            'are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = true;
            scope.professional2 = true;
            scope.professional3 = true;
            scope.professional4 = true;
            scope.master1 = true;
            scope.master2 = true;

            var expectedStakeholderManagementScore = 5;

            scope.saveAssessments();
            var stakeholderManagement = rootScope.assessmentsQa['stakeholder-management'];

            expect(stakeholderManagement['score']).toEqual(expectedStakeholderManagementScore);

        });


        describe('#getClass', function () {
            it('should get the warning class for parameters that are false', function(){
                var warningClass = 'bg-warning';
                expect(scope.getClass(false)).toEqual(warningClass);
            });

            it('should get the info class for parameters that are false', function(){
                var infoClass = 'bg-info';
                expect(scope.getClass(true)).toEqual(infoClass);
            });
        });

    });
});