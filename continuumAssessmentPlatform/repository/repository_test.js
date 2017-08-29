'use strict';

describe('continuumAssessmentPlatform.repository module', function() {

    beforeEach(module('continuumAssessmentPlatform.repository'));

    describe('Repository controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('RepositoryCtrl', {'$scope': scope, '$rootScope': rootScope});
        }));

        it('should be defined', function() {
            expect(controller).toBeDefined();
        });

        it('should have defaults as false for the traveller questions', function(){
            expect(scope.traveller1).toBeDefined();
            expect(scope.traveller2).toBeDefined();

            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
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

            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
        });

        it('should have defaults as false for the master questions', function(){
            expect(scope.master1).toBeDefined();

            expect(scope.master1).toBeFalsy();
        });

        it('should set the default values based on the rootScope if they are present', inject(function($controller){
            rootScope = {'assessmentsQa': {'repository': {
                'traveller1': true, 'traveller2': true,
                'artisan1': true, 'artisan2': false,
                'expert1': true, 'expert2': false, 'expert3': false,
                'professional1': false, 'professional2': true,
                'master1': true}}};

            controller = $controller('RepositoryCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeTruthy();
            expect(scope.traveller2).toBeTruthy();
            expect(scope.artisan1).toBeTruthy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.expert1).toBeTruthy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeTruthy();
            expect(scope.master1).toBeTruthy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('RepositoryCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.master1).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though there are assessments', inject(function($controller){
            rootScope = {'assessmentsQa': {'assessmentsQa': {}}};

            controller = $controller('RepositoryCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.master1).toBeFalsy();
        }));

        it('should save the values for the assessment results for repository', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.master1 = false;

            var expectedRepository = {
                'traveller1': true, 'traveller2': true,
                'artisan1': true, 'artisan2': false,
                'expert1': true, 'expert2': true, 'expert3': true,
                'professional1': false, 'professional2': false,
                'master1': false};

            scope.saveAssessments();
            var repository = rootScope.assessmentsQa['repository'];

            expect(repository['traveller1']).toEqual(expectedRepository[['traveller1']]);
            expect(repository['traveller2']).toEqual(expectedRepository[['traveller2']]);
            expect(repository['artisan1']).toEqual(expectedRepository[['artisan1']]);
            expect(repository['artisan2']).toEqual(expectedRepository[['artisan2']]);
            expect(repository['expert1']).toEqual(expectedRepository[['expert1']]);
            expect(repository['expert2']).toEqual(expectedRepository[['expert2']]);
            expect(repository['expert3']).toEqual(expectedRepository[['expert3']]);
            expect(repository['professional1']).toEqual(expectedRepository[['professional1']]);
            expect(repository['professional2']).toEqual(expectedRepository[['professional2']]);
            expect(repository['master1']).toEqual(expectedRepository[['master1']]);
        });

        it('should save the values for the assessment results for repository when rootScope empty', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.master1 = false;

            var expectedRepository = {
                'traveller1': true, 'traveller2': true,
                'artisan1': true, 'artisan2': false,
                'expert1': true, 'expert2': true, 'expert3': true,
                'professional1': false, 'professional2': false,
                'master1': false};

            rootScope.assessmentsQa = {};

            scope.saveAssessments();
            var repository = rootScope.assessmentsQa['repository'];

            expect(repository['traveller1']).toEqual(expectedRepository[['traveller1']]);
            expect(repository['traveller2']).toEqual(expectedRepository[['traveller2']]);
            expect(repository['artisan1']).toEqual(expectedRepository[['artisan1']]);
            expect(repository['artisan2']).toEqual(expectedRepository[['artisan2']]);
            expect(repository['expert1']).toEqual(expectedRepository[['expert1']]);
            expect(repository['expert2']).toEqual(expectedRepository[['expert2']]);
            expect(repository['expert3']).toEqual(expectedRepository[['expert3']]);
            expect(repository['professional1']).toEqual(expectedRepository[['professional1']]);
            expect(repository['professional2']).toEqual(expectedRepository[['professional2']]);
            expect(repository['master1']).toEqual(expectedRepository[['master1']]);
        });

        it('should save the score for repository as 1 if no question is answered', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.expert1 = false;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.master1 = false;

            var expectedRepositoryScore = 1;

            scope.saveAssessments();
            var repository = rootScope.assessmentsQa['repository'];

            expect(repository['score']).toEqual(expectedRepositoryScore);

        });

        it('should save the score for repository as 1 if traveller question is answered as yes', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.expert1 = false;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.master1 = false;

            var expectedRepositoryScore = 1;

            scope.saveAssessments();
            var repository = rootScope.assessmentsQa['repository'];

            expect(repository['score']).toEqual(expectedRepositoryScore);

        });

        it('should save the score for repository as 2 if traveller question is answered as no and all the artisan questions answered as yes', function(){
            scope.traveller1 = true;
            scope.traveller2 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.expert1 = true;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.master1 = false;

            var expectedRepositoryScore = 2;

            scope.saveAssessments();
            var repository = rootScope.assessmentsQa['repository'];

            expect(repository['score']).toEqual(expectedRepositoryScore);

        });

        it('should save the score for repository as 3 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = true;
            scope.professional2 = false;
            scope.master1 = false;

            var expectedRepositoryScore = 3;

            scope.saveAssessments();
            var repository = rootScope.assessmentsQa['repository'];

            expect(repository['score']).toEqual(expectedRepositoryScore);

        });

        it('should save the score for repository as 4 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = true;
            scope.professional2 = true;
            scope.master1 = false;

            var expectedRepositoryScore = 4;

            scope.saveAssessments();
            var repository = rootScope.assessmentsQa['repository'];

            expect(repository['score']).toEqual(expectedRepositoryScore);

        });

        it('should save the score for repository as 5 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes and master questions' +
            'are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = true;
            scope.professional2 = true;
            scope.master1 = true;

            var expectedRepositoryScore = 5;

            scope.saveAssessments();
            var repository = rootScope.assessmentsQa['repository'];

            expect(repository['score']).toEqual(expectedRepositoryScore);

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