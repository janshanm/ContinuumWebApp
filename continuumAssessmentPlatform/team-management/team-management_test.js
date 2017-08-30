'use strict';

describe('continuumAssessmentPlatform.team-management module', function() {

    beforeEach(module('continuumAssessmentPlatform.team-management'));

    describe('Team Management controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('TeamManagementCtrl', {'$scope': scope, '$rootScope': rootScope});
        }));

        it('should be defined', function() {
            expect(controller).toBeDefined();
        });

        it('should have defaults as false for the traveller questions', function(){
            expect(scope.traveller1).toBeDefined();
            expect(scope.traveller2).toBeDefined();
            expect(scope.traveller3).toBeDefined();
            expect(scope.traveller4).toBeDefined();

            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
        });

        it('should have defaults as false for the artisan questions', function(){
            expect(scope.artisan1).toBeDefined();
            expect(scope.artisan2).toBeDefined();
            expect(scope.artisan3).toBeDefined();
            expect(scope.artisan4).toBeDefined();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
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
            expect(scope.master3).toBeDefined();
            expect(scope.master4).toBeDefined();
            expect(scope.master5).toBeDefined();

            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
            expect(scope.master4).toBeFalsy();
            expect(scope.master5).toBeFalsy();
        });

        it('should set the default values based on the rootScope if they are present', inject(function($controller){
            rootScope = {'assessmentsQa': {'team-management': {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true,
                'artisan1': true, 'artisan2': true, 'artisan3': true, 'artisan4': true,
                'expert1': true, 'expert2': false, 'expert3': false,
                'professional1': false, 'professional2': true, 'professional3': true, 'professional4': true,
                'master1': true, 'master2': true, 'master3': true, 'master4': true, 'master5': true}}};

            controller = $controller('TeamManagementCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeTruthy();
            expect(scope.traveller2).toBeTruthy();
            expect(scope.traveller3).toBeTruthy();
            expect(scope.traveller4).toBeTruthy();
            expect(scope.artisan1).toBeTruthy();
            expect(scope.artisan2).toBeTruthy();
            expect(scope.artisan3).toBeTruthy();
            expect(scope.artisan4).toBeTruthy();
            expect(scope.expert1).toBeTruthy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeTruthy();
            expect(scope.professional3).toBeTruthy();
            expect(scope.professional4).toBeTruthy();
            expect(scope.master1).toBeTruthy();
            expect(scope.master2).toBeTruthy();
            expect(scope.master3).toBeTruthy();
            expect(scope.master4).toBeTruthy();
            expect(scope.master5).toBeTruthy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('TeamManagementCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.professional4).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
            expect(scope.master4).toBeFalsy();
            expect(scope.master5).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though there are assessments', inject(function($controller){
            rootScope = {'assessmentsQa': {'assessmentsQa': {}}};

            controller = $controller('TeamManagementCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.professional4).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
            expect(scope.master4).toBeFalsy();
            expect(scope.master5).toBeFalsy();
        }));

        it('should save the values for the assessment results for team-management', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = true;
            scope.artisan4 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;

            var expectedTeamManagement = {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true,
                'artisan1': true, 'artisan2': true, 'artisan3': true, 'artisan4': true,
                'expert1': true, 'expert2': true, 'expert3': true,
                'professional1': false, 'professional2': false, 'professional3': false, 'professional4': false,
                'master1': false, 'master2': false, 'master3': false, 'master4': false, 'master5': false};

            scope.saveAssessments();
            var teamManagement = rootScope.assessmentsQa['team-management'];

            expect(teamManagement['traveller1']).toEqual(expectedTeamManagement[['traveller1']]);
            expect(teamManagement['traveller2']).toEqual(expectedTeamManagement[['traveller2']]);
            expect(teamManagement['traveller3']).toEqual(expectedTeamManagement[['traveller3']]);
            expect(teamManagement['traveller4']).toEqual(expectedTeamManagement[['traveller4']]);
            expect(teamManagement['artisan1']).toEqual(expectedTeamManagement[['artisan1']]);
            expect(teamManagement['artisan2']).toEqual(expectedTeamManagement[['artisan2']]);
            expect(teamManagement['artisan3']).toEqual(expectedTeamManagement[['artisan3']]);
            expect(teamManagement['artisan4']).toEqual(expectedTeamManagement[['artisan4']]);
            expect(teamManagement['expert1']).toEqual(expectedTeamManagement[['expert1']]);
            expect(teamManagement['expert2']).toEqual(expectedTeamManagement[['expert2']]);
            expect(teamManagement['expert3']).toEqual(expectedTeamManagement[['expert3']]);
            expect(teamManagement['professional1']).toEqual(expectedTeamManagement[['professional1']]);
            expect(teamManagement['professional2']).toEqual(expectedTeamManagement[['professional2']]);
            expect(teamManagement['professional3']).toEqual(expectedTeamManagement[['professional3']]);
            expect(teamManagement['professional4']).toEqual(expectedTeamManagement[['professional4']]);
            expect(teamManagement['master1']).toEqual(expectedTeamManagement[['master1']]);
            expect(teamManagement['master2']).toEqual(expectedTeamManagement[['master2']]);
            expect(teamManagement['master3']).toEqual(expectedTeamManagement[['master3']]);
            expect(teamManagement['master4']).toEqual(expectedTeamManagement[['master4']]);
            expect(teamManagement['master5']).toEqual(expectedTeamManagement[['master5']]);
        });

        it('should save the values for the assessment results for teamManagement when rootScope empty', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = true;
            scope.artisan4 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;

            var expectedTeamManagement = {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true,
                'artisan1': true, 'artisan2': true, 'artisan3': true, 'artisan4': true,
                'expert1': true, 'expert2': true, 'expert3': true,
                'professional1': false, 'professional2': false, 'professional3': false, 'professional4': false,
                'master1': false, 'master2': false, 'master3': false, 'master4': false, 'master5': false};

            rootScope.assessmentsQa = {};

            scope.saveAssessments();
            var teamManagement = rootScope.assessmentsQa['team-management'];

            expect(teamManagement['traveller1']).toEqual(expectedTeamManagement[['traveller1']]);
            expect(teamManagement['traveller2']).toEqual(expectedTeamManagement[['traveller2']]);
            expect(teamManagement['traveller3']).toEqual(expectedTeamManagement[['traveller3']]);
            expect(teamManagement['traveller4']).toEqual(expectedTeamManagement[['traveller4']]);
            expect(teamManagement['artisan1']).toEqual(expectedTeamManagement[['artisan1']]);
            expect(teamManagement['artisan2']).toEqual(expectedTeamManagement[['artisan2']]);
            expect(teamManagement['artisan3']).toEqual(expectedTeamManagement[['artisan3']]);
            expect(teamManagement['artisan4']).toEqual(expectedTeamManagement[['artisan4']]);
            expect(teamManagement['expert1']).toEqual(expectedTeamManagement[['expert1']]);
            expect(teamManagement['expert2']).toEqual(expectedTeamManagement[['expert2']]);
            expect(teamManagement['expert3']).toEqual(expectedTeamManagement[['expert3']]);
            expect(teamManagement['professional1']).toEqual(expectedTeamManagement[['professional1']]);
            expect(teamManagement['professional2']).toEqual(expectedTeamManagement[['professional2']]);
            expect(teamManagement['professional3']).toEqual(expectedTeamManagement[['professional3']]);
            expect(teamManagement['professional4']).toEqual(expectedTeamManagement[['professional4']]);
            expect(teamManagement['master1']).toEqual(expectedTeamManagement[['master1']]);
            expect(teamManagement['master2']).toEqual(expectedTeamManagement[['master2']]);
            expect(teamManagement['master3']).toEqual(expectedTeamManagement[['master3']]);
            expect(teamManagement['master4']).toEqual(expectedTeamManagement[['master4']]);
            expect(teamManagement['master5']).toEqual(expectedTeamManagement[['master5']]);
        });

        it('should save the score for teamManagement as 1 if no question is answered', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.expert1 = false;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;

            var expectedTeamManagementScore = 1;

            scope.saveAssessments();
            var teamManagement = rootScope.assessmentsQa['team-management'];

            expect(teamManagement['score']).toEqual(expectedTeamManagementScore);

        });

        it('should save the score for teamManagement as 1 if traveller question is answered as yes', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.expert1 = false;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;

            var expectedTeamManagementScore = 1;

            scope.saveAssessments();
            var teamManagement = rootScope.assessmentsQa['team-management'];

            expect(teamManagement['score']).toEqual(expectedTeamManagementScore);

        });

        it('should save the score for teamManagement as 2 if traveller question is answered as no and all the artisan questions answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = true;
            scope.artisan4 = true;
            scope.expert1 = true;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;

            var expectedTeamManagementScore = 2;

            scope.saveAssessments();
            var teamManagement = rootScope.assessmentsQa['team-management'];

            expect(teamManagement['score']).toEqual(expectedTeamManagementScore);

        });

        it('should save the score for teamManagement as 3 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = true;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;

            var expectedTeamManagementScore = 3;

            scope.saveAssessments();
            var teamManagement = rootScope.assessmentsQa['team-management'];

            expect(teamManagement['score']).toEqual(expectedTeamManagementScore);

        });

        it('should save the score for teamManagement as 4 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = true;
            scope.professional2 = true;
            scope.professional3 = true;
            scope.professional4 = true;
            scope.master1 = true;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;

            var expectedTeamManagementScore = 4;

            scope.saveAssessments();
            var teamManagement = rootScope.assessmentsQa['team-management'];

            expect(teamManagement['score']).toEqual(expectedTeamManagementScore);

        });

        it('should save the score for teamManagement as 5 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes and master questions' +
            'are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = true;
            scope.professional2 = true;
            scope.professional3 = true;
            scope.professional4 = true;
            scope.master1 = true;
            scope.master2 = true;
            scope.master3 = true;
            scope.master4 = true;
            scope.master5 = true;

            var expectedTeamManagementScore = 5;

            scope.saveAssessments();
            var teamManagement = rootScope.assessmentsQa['team-management'];

            expect(teamManagement['score']).toEqual(expectedTeamManagementScore);

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