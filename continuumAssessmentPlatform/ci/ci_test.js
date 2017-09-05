'use strict';

describe('continuumAssessmentPlatform.pipeline-ci module', function() {

  beforeEach(module('continuumAssessmentPlatform.pipeline-ci'));

  describe('Pipeline - Continuous integration controller', function(){

      var controller;
      var scope, rootScope;

      beforeEach(inject(function($controller, $rootScope){
          rootScope = $rootScope;
          scope = rootScope.$new();
          controller = $controller('PipelineCICtrl', {'$scope': scope, '$rootScope': rootScope});
      }));

      it('should be defined', function() {
          expect(controller).toBeDefined();
      });

      it('should have defaults as false for the questions', function(){
          expect(scope.question1).toBeDefined();
          expect(scope.question2).toBeDefined();
          expect(scope.question3).toBeDefined();
          expect(scope.question4).toBeDefined();
          expect(scope.question5).toBeDefined();
          expect(scope.question6).toBeDefined();
          expect(scope.question7).toBeDefined();

          expect(scope.question1).toBeFalsy();
          expect(scope.question2).toBeFalsy();
          expect(scope.question3).toBeFalsy();
          expect(scope.question4).toBeFalsy();
          expect(scope.question5).toBeFalsy();
          expect(scope.question6).toBeFalsy();
          expect(scope.question7).toBeFalsy();
      });

      it('should set the default values based on the rootScope if they are present', inject(function($controller){
          rootScope = {'assessmentsPipeline': {'ci': {
              'question1': true, 'question2': true, 'question3': false, 'question4': false, 'question5': true,
              'question6': true, 'question7': true}}};

          controller = $controller('PipelineCICtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.question1).toBeTruthy();
          expect(scope.question2).toBeTruthy();
          expect(scope.question3).toBeFalsy();
          expect(scope.question4).toBeFalsy();
          expect(scope.question5).toBeTruthy();
          expect(scope.question6).toBeTruthy();
          expect(scope.question7).toBeTruthy();
      }));

      it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
          rootScope = {};

          controller = $controller('PipelineCICtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.question1).toBeFalsy();
          expect(scope.question2).toBeFalsy();
          expect(scope.question3).toBeFalsy();
          expect(scope.question4).toBeFalsy();
          expect(scope.question5).toBeFalsy();
          expect(scope.question6).toBeFalsy();
          expect(scope.question7).toBeFalsy();
      }));

      it('should set the default values based on the initial values if rootScope not set even though assessments exists', inject(function($controller){
          rootScope = {'assessmentsPipeline': {'coding': {}}};

          controller = $controller('PipelineCICtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.question1).toBeFalsy();
          expect(scope.question2).toBeFalsy();
          expect(scope.question3).toBeFalsy();
          expect(scope.question4).toBeFalsy();
          expect(scope.question5).toBeFalsy();
          expect(scope.question6).toBeFalsy();
          expect(scope.question7).toBeFalsy();
      }));

      it('should save the values for the assessment results for continuous integration', function(){
          scope.question1 = true;
          scope.question2 = true;
          scope.question3 = true;
          scope.question4 = true;
          scope.question5 = true;
          scope.question6 = true;
          scope.question7 = true;

          var expectedCI = {
              'question1': true, 'question2': true, 'question3': true, 'question4': true, 'question5': true,
              'question6': true, 'question7': true};

          scope.saveAssessments();
          var ci = rootScope.assessmentsPipeline['ci'];

          expect(ci['question1']).toEqual(expectedCI[['question1']]);
          expect(ci['question2']).toEqual(expectedCI[['question2']]);
          expect(ci['question3']).toEqual(expectedCI[['question3']]);
          expect(ci['question4']).toEqual(expectedCI[['question4']]);
          expect(ci['question5']).toEqual(expectedCI[['question5']]);
          expect(ci['question6']).toEqual(expectedCI[['question6']]);
          expect(ci['question7']).toEqual(expectedCI[['question7']]);
      });

      it('should save the score for ci as 1 if no question is answered', function(){
          scope.question1 = false;
          scope.question2 = false;
          scope.question3 = false;
          scope.question4 = false;
          scope.question5 = false;
          scope.question6 = false;
          scope.question7 = false;

          var expectedCIScore = 1;

          scope.saveAssessments();
          var ci = rootScope.assessmentsPipeline['ci'];

          expect(ci['score']).toEqual(expectedCIScore);

      });

      it('should save the score for ci as 1 if question3 is answered as yes', function(){
          scope.question1 = false;
          scope.question2 = false;
          scope.question3 = true;
          scope.question4 = false;
          scope.question5 = false;
          scope.question6 = false;
          scope.question7 = false;

          var expectedCIScore = 1;

          scope.saveAssessments();
          var ci = rootScope.assessmentsPipeline['ci'];

          expect(ci['score']).toEqual(expectedCIScore);

      });

      it('should save the score for ci as 2 if questions 2 and 3 are answered as yes', function(){
          scope.question1 = false;
          scope.question2 = true;
          scope.question3 = true;
          scope.question4 = false;
          scope.question5 = false;
          scope.question6 = false;
          scope.question7 = false;

          var expectedCIScore = 2;

          scope.saveAssessments();
          var ci = rootScope.assessmentsPipeline['ci'];

          expect(ci['score']).toEqual(expectedCIScore);

      });

      it('should save the score for ci as 3 if questions 1, 2, 3 and 5 are answered as yes', function(){
          scope.question1 = true;
          scope.question2 = true;
          scope.question3 = true;
          scope.question4 = false;
          scope.question5 = true;
          scope.question6 = false;
          scope.question7 = false;

          var expectedCIScore = 3;

          scope.saveAssessments();
          var ci = rootScope.assessmentsPipeline['ci'];

          expect(ci['score']).toEqual(expectedCIScore);

      });

      it('should save the score for ci as 4 if questions 1, 2, 3, 4, 5 and 6 are answered as yes', function(){
          scope.question1 = true;
          scope.question2 = true;
          scope.question3 = true;
          scope.question4 = true;
          scope.question5 = true;
          scope.question6 = true;
          scope.question7 = false;

          var expectedCIScore = 4;

          scope.saveAssessments();
          var ci = rootScope.assessmentsPipeline['ci'];

          expect(ci['score']).toEqual(expectedCIScore);

      });

      it('should save the score for ci as 5 if all questions are answered as yes', function(){
          scope.question1 = true;
          scope.question2 = true;
          scope.question3 = true;
          scope.question4 = true;
          scope.question5 = true;
          scope.question6 = true;
          scope.question7 = true;

          var expectedCIScore = 5;

          scope.saveAssessments();
          var ci = rootScope.assessmentsPipeline['ci'];

          expect(ci['score']).toEqual(expectedCIScore);

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