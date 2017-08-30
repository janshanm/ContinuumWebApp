'use strict';

describe('continuumAssessmentPlatform.tools-artefacts module', function() {

    beforeEach(module('continuumAssessmentPlatform.tools-artefacts'));

    describe('Tools Artefacts controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('ToolsArtefactsCtrl', {'$scope': scope, '$rootScope': rootScope});
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
            expect(scope.artisan5).toBeDefined();

            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.artisan5).toBeFalsy();
        });

        it('should have defaults as false for the expert questions', function(){
            expect(scope.expert1).toBeDefined();
            expect(scope.expert2).toBeDefined();
            expect(scope.expert3).toBeDefined();
            expect(scope.expert4).toBeDefined();
            expect(scope.expert5).toBeDefined();
            expect(scope.expert6).toBeDefined();
            expect(scope.expert7).toBeDefined();

            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.expert5).toBeFalsy();
            expect(scope.expert6).toBeFalsy();
            expect(scope.expert7).toBeFalsy();
        });

        it('should have defaults as false for the professional questions', function(){
            expect(scope.professional1).toBeDefined();
            expect(scope.professional2).toBeDefined();
            expect(scope.professional3).toBeDefined();
            expect(scope.professional4).toBeDefined();
            expect(scope.professional5).toBeDefined();
            expect(scope.professional6).toBeDefined();
            expect(scope.professional7).toBeDefined();
            expect(scope.professional8).toBeDefined();
            expect(scope.professional9).toBeDefined();

            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.professional4).toBeFalsy();
            expect(scope.professional5).toBeFalsy();
            expect(scope.professional6).toBeFalsy();
            expect(scope.professional7).toBeFalsy();
            expect(scope.professional8).toBeFalsy();
            expect(scope.professional9).toBeFalsy();
        });

        it('should have defaults as false for the master questions', function(){
            expect(scope.master1).toBeDefined();
            expect(scope.master2).toBeDefined();
            expect(scope.master3).toBeDefined();
            expect(scope.master4).toBeDefined();

            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
            expect(scope.master4).toBeFalsy();
            expect(scope.master5).toBeFalsy();
        });

        it('should set the default values based on the rootScope if they are present', inject(function($controller){
            rootScope = {'assessmentsQaMaM': {'tools-artefacts': {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false,
                'expert1': true, 'expert2': false, 'expert3': false, 'expert4': false, 'expert5': false, 'expert6': false, 'expert7': false, 'expert8': false,
                'professional1': false, 'professional2': true, 'professional3': false, 'professional4': false, 'professional5': false, 'professional6': false, 'professional7': false, 'professional8': false, 'professional9': false,
                'master1': false, 'master2': false, 'master3': true, 'master4': false}}};

            controller = $controller('ToolsArtefactsCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeTruthy();
            expect(scope.traveller2).toBeTruthy();
            expect(scope.traveller3).toBeTruthy();
            expect(scope.traveller4).toBeTruthy();
            expect(scope.artisan1).toBeTruthy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.artisan5).toBeFalsy();
            expect(scope.expert1).toBeTruthy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.expert5).toBeFalsy();
            expect(scope.expert6).toBeFalsy();
            expect(scope.expert7).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeTruthy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.professional4).toBeFalsy();
            expect(scope.professional5).toBeFalsy();
            expect(scope.professional6).toBeFalsy();
            expect(scope.professional7).toBeFalsy();
            expect(scope.professional8).toBeFalsy();
            expect(scope.professional9).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeTruthy();
            expect(scope.master4).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('ToolsArtefactsCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.artisan5).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.expert5).toBeFalsy();
            expect(scope.expert6).toBeFalsy();
            expect(scope.expert7).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.professional4).toBeFalsy();
            expect(scope.professional5).toBeFalsy();
            expect(scope.professional6).toBeFalsy();
            expect(scope.professional7).toBeFalsy();
            expect(scope.professional8).toBeFalsy();
            expect(scope.professional9).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
            expect(scope.master4).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though there are assessments', inject(function($controller){
            rootScope = {'assessmentsQaMaM': {'ci': {}}};

            controller = $controller('ToolsArtefactsCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.artisan5).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.expert5).toBeFalsy();
            expect(scope.expert6).toBeFalsy();
            expect(scope.expert7).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.professional4).toBeFalsy();
            expect(scope.professional5).toBeFalsy();
            expect(scope.professional6).toBeFalsy();
            expect(scope.professional7).toBeFalsy();
            expect(scope.professional8).toBeFalsy();
            expect(scope.professional9).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
            expect(scope.master4).toBeFalsy();
        }));

        it('should save the values for the assessment results for tools artefacts', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.expert1 = true;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.expert5 = false;
            scope.expert6 = false;
            scope.expert7 = false;
            scope.professional1 = false;
            scope.professional2 = true;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.professional5 = false;
            scope.professional6 = false;
            scope.professional7 = false;
            scope.professional8 = false;
            scope.professional9 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;

            var expectedToolsArtefacts = {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false,
                'expert1': true, 'expert2': false, 'expert3': false, 'expert4': false, 'expert5': false, 'expert6': false, 'expert7': false, 'expert8': false,
                'professional1': false, 'professional2': true, 'professional3': false, 'professional4': false, 'professional5': false, 'professional6': false, 'professional7': false, 'professional8': false, 'professional9': false,
                'master1': false, 'master2': false, 'master3': false, 'master4': false};

            scope.saveAssessments();
            var toolsArtefacts = rootScope.assessmentsQaMaM['tools-artefacts'];

            expect(toolsArtefacts['traveller1']).toEqual(expectedToolsArtefacts[['traveller1']]);
            expect(toolsArtefacts['traveller2']).toEqual(expectedToolsArtefacts[['traveller2']]);
            expect(toolsArtefacts['traveller3']).toEqual(expectedToolsArtefacts[['traveller3']]);
            expect(toolsArtefacts['traveller4']).toEqual(expectedToolsArtefacts[['traveller4']]);
            expect(toolsArtefacts['artisan1']).toEqual(expectedToolsArtefacts[['artisan1']]);
            expect(toolsArtefacts['artisan2']).toEqual(expectedToolsArtefacts[['artisan2']]);
            expect(toolsArtefacts['artisan3']).toEqual(expectedToolsArtefacts[['artisan3']]);
            expect(toolsArtefacts['artisan4']).toEqual(expectedToolsArtefacts[['artisan4']]);
            expect(toolsArtefacts['artisan5']).toEqual(expectedToolsArtefacts[['artisan5']]);
            expect(toolsArtefacts['expert1']).toEqual(expectedToolsArtefacts[['expert1']]);
            expect(toolsArtefacts['expert2']).toEqual(expectedToolsArtefacts[['expert2']]);
            expect(toolsArtefacts['expert3']).toEqual(expectedToolsArtefacts[['expert3']]);
            expect(toolsArtefacts['expert4']).toEqual(expectedToolsArtefacts[['expert4']]);
            expect(toolsArtefacts['expert5']).toEqual(expectedToolsArtefacts[['expert5']]);
            expect(toolsArtefacts['expert6']).toEqual(expectedToolsArtefacts[['expert6']]);
            expect(toolsArtefacts['expert7']).toEqual(expectedToolsArtefacts[['expert7']]);
            expect(toolsArtefacts['professional1']).toEqual(expectedToolsArtefacts[['professional1']]);
            expect(toolsArtefacts['professional2']).toEqual(expectedToolsArtefacts[['professional2']]);
            expect(toolsArtefacts['professional3']).toEqual(expectedToolsArtefacts[['professional3']]);
            expect(toolsArtefacts['professional4']).toEqual(expectedToolsArtefacts[['professional4']]);
            expect(toolsArtefacts['professional5']).toEqual(expectedToolsArtefacts[['professional5']]);
            expect(toolsArtefacts['professional6']).toEqual(expectedToolsArtefacts[['professional6']]);
            expect(toolsArtefacts['professional7']).toEqual(expectedToolsArtefacts[['professional7']]);
            expect(toolsArtefacts['professional8']).toEqual(expectedToolsArtefacts[['professional8']]);
            expect(toolsArtefacts['professional9']).toEqual(expectedToolsArtefacts[['professional9']]);
            expect(toolsArtefacts['master1']).toEqual(expectedToolsArtefacts[['master1']]);
            expect(toolsArtefacts['master2']).toEqual(expectedToolsArtefacts[['master2']]);
            expect(toolsArtefacts['master3']).toEqual(expectedToolsArtefacts[['master3']]);
            expect(toolsArtefacts['master4']).toEqual(expectedToolsArtefacts[['master4']]);
        });

        it('should save the score for tools artefacts as 1 if no question is answered', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.expert1 = false;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.expert5 = false;
            scope.expert6 = false;
            scope.expert7 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.professional5 = false;
            scope.professional6 = false;
            scope.professional7 = false;
            scope.professional8 = false;
            scope.professional9 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;

            var expectedToolsArtefactsScore = 1;

            scope.saveAssessments();
            var toolsArtefacts = rootScope.assessmentsQaMaM['tools-artefacts'];

            expect(toolsArtefacts['score']).toEqual(expectedToolsArtefactsScore);

        });

        it('should save the score for tools artefacts as 1 if traveller question is answered as yes', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.expert1 = false;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.expert5 = false;
            scope.expert6 = false;
            scope.expert7 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.professional5 = false;
            scope.professional6 = false;
            scope.professional7 = false;
            scope.professional8 = false;
            scope.professional9 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;

            var expectedToolsArtefactsScore = 1;

            scope.saveAssessments();
            var toolsArtefacts = rootScope.assessmentsQaMaM['tools-artefacts'];

            expect(toolsArtefacts['score']).toEqual(expectedToolsArtefactsScore);

        });

        it('should save the score for tools artefacts as 2 if traveller question is answered as no and all the artisan questions answered as yes', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = true;
            scope.artisan4 = true;
            scope.artisan5 = true;
            scope.expert1 = true;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.expert5 = false;
            scope.expert6 = false;
            scope.expert7 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.professional5 = false;
            scope.professional6 = false;
            scope.professional7 = false;
            scope.professional8 = false;
            scope.professional9 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;

            var expectedToolsArtefactsScore = 2;

            scope.saveAssessments();
            var toolsArtefacts = rootScope.assessmentsQaMaM['tools-artefacts'];

            expect(toolsArtefacts['score']).toEqual(expectedToolsArtefactsScore);

        });

        it('should save the score for tools artefacts as 3 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.artisan3 = true;
            scope.artisan4 = true;
            scope.artisan5 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.expert5 = true;
            scope.expert6 = true;
            scope.expert7 = true;
            scope.professional1 = true;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.professional5 = false;
            scope.professional6 = false;
            scope.professional7 = false;
            scope.professional8 = false;
            scope.professional9 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;

            var expectedToolsArtefactsScore = 3;

            scope.saveAssessments();
            var toolsArtefacts = rootScope.assessmentsQaMaM['tools-artefacts'];

            expect(toolsArtefacts['score']).toEqual(expectedToolsArtefactsScore);

        });

        it('should save the score for tools artefacts as 4 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.artisan3 = true;
            scope.artisan4 = true;
            scope.artisan5 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.expert5 = true;
            scope.expert6 = true;
            scope.expert7 = true;
            scope.professional1 = true;
            scope.professional2 = true;
            scope.professional3 = true;
            scope.professional4 = true;
            scope.professional5 = true;
            scope.professional6 = true;
            scope.professional7 = true;
            scope.professional8 = true;
            scope.professional9 = true;
            scope.master1 = true;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;

            var expectedToolsArtefactsScore = 4;

            scope.saveAssessments();
            var toolsArtefacts = rootScope.assessmentsQaMaM['tools-artefacts'];

            expect(toolsArtefacts['score']).toEqual(expectedToolsArtefactsScore);

        });

        it('should save the score for tools artefacts as 5 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes, professional questions answered as yes and the master questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.artisan3 = true;
            scope.artisan4 = true;
            scope.artisan5 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.expert5 = true;
            scope.expert6 = true;
            scope.expert7 = true;
            scope.professional1 = true;
            scope.professional2 = true;
            scope.professional3 = true;
            scope.professional4 = true;
            scope.professional5 = true;
            scope.professional6 = true;
            scope.professional7 = true;
            scope.professional8 = true;
            scope.professional9 = true;
            scope.master1 = true;
            scope.master2 = true;
            scope.master3 = true;
            scope.master4 = true;

            var expectedToolsArtefactsScore = 5;

            scope.saveAssessments();
            var toolsArtefacts = rootScope.assessmentsQaMaM['tools-artefacts'];

            expect(toolsArtefacts['score']).toEqual(expectedToolsArtefactsScore);

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