'use strict';

describe('continuumAssessmentPlatform.quality module', function() {

  beforeEach(module('continuumAssessmentPlatform.quality'));

  describe('quality controller', function(){

      var controller;
      var scope, rootScope;

      beforeEach(inject(function($controller, $rootScope){
          rootScope = $rootScope;
          scope = rootScope.$new();
          controller = $controller('QualityCtrl', {'$scope': scope, '$rootScope': rootScope});
      }));

      it('should be defined', function() {
          expect(controller).toBeDefined();
      });

      it('should have defaults as false for the traveller questions', function(){
          expect(scope.traveller1).toBeDefined();
          expect(scope.traveller2).toBeDefined();
          expect(scope.traveller3).toBeDefined();
          expect(scope.traveller4).toBeDefined();
          expect(scope.traveller5).toBeDefined();
          expect(scope.traveller6).toBeDefined();

          expect(scope.traveller1).toBeFalsy();
          expect(scope.traveller2).toBeFalsy();
          expect(scope.traveller3).toBeFalsy();
          expect(scope.traveller4).toBeFalsy();
          expect(scope.traveller5).toBeFalsy();
          expect(scope.traveller6).toBeFalsy();
      });

      it('should have defaults as false for the artisan questions', function(){
          expect(scope.artisan1).toBeDefined();
          expect(scope.artisan2).toBeDefined();
          expect(scope.artisan3).toBeDefined();

          expect(scope.artisan1).toBeFalsy();
          expect(scope.artisan2).toBeFalsy();
          expect(scope.artisan3).toBeFalsy();
      });

      it('should have defaults as false for the expert questions', function(){
          expect(scope.expert1).toBeDefined();
          expect(scope.expert2).toBeDefined();
          expect(scope.expert3).toBeDefined();
          expect(scope.expert4).toBeDefined();
          expect(scope.expert5).toBeDefined();
          expect(scope.expert6).toBeDefined();
          expect(scope.expert7).toBeDefined();
          expect(scope.expert8).toBeDefined();
          expect(scope.expert9).toBeDefined();

          expect(scope.expert1).toBeFalsy();
          expect(scope.expert2).toBeFalsy();
          expect(scope.expert2).toBeFalsy();
          expect(scope.expert3).toBeFalsy();
          expect(scope.expert4).toBeFalsy();
          expect(scope.expert5).toBeFalsy();
          expect(scope.expert6).toBeFalsy();
          expect(scope.expert7).toBeFalsy();
          expect(scope.expert8).toBeFalsy();
          expect(scope.expert9).toBeFalsy();
      });

      it('should have defaults as false for the professional questions', function(){
          expect(scope.professional1).toBeDefined();
          expect(scope.professional2).toBeDefined();
          expect(scope.professional3).toBeDefined();
          expect(scope.professional4).toBeDefined();
          expect(scope.professional5).toBeDefined();
          expect(scope.professional6).toBeDefined();
          expect(scope.professional7).toBeDefined();

          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeFalsy();
          expect(scope.professional3).toBeFalsy();
          expect(scope.professional4).toBeFalsy();
          expect(scope.professional5).toBeFalsy();
          expect(scope.professional6).toBeFalsy();
          expect(scope.professional7).toBeFalsy();
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
      });

      it('should set the default values based on the rootScope if they are present', inject(function($controller){
          rootScope = {'assessments': {'QA': {
              'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true,
              'artisan1': true, 'artisan2': false, 'artisan3': false,
              'expert1': true, 'expert2': false, 'expert3': false, 'expert4': false, 'expert5': false, 'expert6': false, 'expert7': false, 'expert8': false, 'expert9': false,
              'professional1': false, 'professional2': true, 'professional3': true, 'professional4': true, 'professional5': true, 'professional6': true, 'professional7': true,
              'master1': true, 'master2': false, 'master3': false, 'master4': false}}};

          controller = $controller('QualityCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeTruthy();
          expect(scope.traveller2).toBeTruthy();
          expect(scope.traveller3).toBeTruthy();
          expect(scope.traveller4).toBeTruthy();
          expect(scope.traveller5).toBeTruthy();
          expect(scope.traveller6).toBeTruthy();
          expect(scope.artisan1).toBeTruthy();
          expect(scope.artisan2).toBeFalsy();
          expect(scope.artisan3).toBeFalsy();
          expect(scope.expert1).toBeTruthy();
          expect(scope.expert2).toBeFalsy();
          expect(scope.expert3).toBeFalsy();
          expect(scope.expert4).toBeFalsy();
          expect(scope.expert5).toBeFalsy();
          expect(scope.expert6).toBeFalsy();
          expect(scope.expert7).toBeFalsy();
          expect(scope.expert8).toBeFalsy();
          expect(scope.expert9).toBeFalsy();
          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeTruthy();
          expect(scope.professional3).toBeTruthy();
          expect(scope.professional4).toBeTruthy();
          expect(scope.professional5).toBeTruthy();
          expect(scope.professional6).toBeTruthy();
          expect(scope.professional7).toBeTruthy();
          expect(scope.master1).toBeTruthy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
          expect(scope.master4).toBeFalsy();
      }));

      it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
          rootScope = {};

          controller = $controller('QualityCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeFalsy();
          expect(scope.traveller2).toBeFalsy();
          expect(scope.traveller3).toBeFalsy();
          expect(scope.traveller4).toBeFalsy();
          expect(scope.traveller5).toBeFalsy();
          expect(scope.traveller6).toBeFalsy();
          expect(scope.artisan1).toBeFalsy();
          expect(scope.artisan2).toBeFalsy();
          expect(scope.artisan3).toBeFalsy();
          expect(scope.expert1).toBeFalsy();
          expect(scope.expert2).toBeFalsy();
          expect(scope.expert3).toBeFalsy();
          expect(scope.expert4).toBeFalsy();
          expect(scope.expert5).toBeFalsy();
          expect(scope.expert6).toBeFalsy();
          expect(scope.expert7).toBeFalsy();
          expect(scope.expert8).toBeFalsy();
          expect(scope.expert9).toBeFalsy();
          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeFalsy();
          expect(scope.professional3).toBeFalsy();
          expect(scope.professional4).toBeFalsy();
          expect(scope.professional5).toBeFalsy();
          expect(scope.professional6).toBeFalsy();
          expect(scope.professional7).toBeFalsy();
          expect(scope.master1).toBeFalsy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
          expect(scope.master4).toBeFalsy();
      }));

      it('should set the default values based on the initial values if rootScope not set with assessments', inject(function($controller){
          rootScope = {'assessments': {'ci': {}}};

          controller = $controller('QualityCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeFalsy();
          expect(scope.traveller2).toBeFalsy();
          expect(scope.traveller3).toBeFalsy();
          expect(scope.traveller4).toBeFalsy();
          expect(scope.traveller5).toBeFalsy();
          expect(scope.traveller6).toBeFalsy();
          expect(scope.artisan1).toBeFalsy();
          expect(scope.artisan2).toBeFalsy();
          expect(scope.artisan3).toBeFalsy();
          expect(scope.expert1).toBeFalsy();
          expect(scope.expert2).toBeFalsy();
          expect(scope.expert3).toBeFalsy();
          expect(scope.expert4).toBeFalsy();
          expect(scope.expert5).toBeFalsy();
          expect(scope.expert6).toBeFalsy();
          expect(scope.expert7).toBeFalsy();
          expect(scope.expert8).toBeFalsy();
          expect(scope.expert9).toBeFalsy();
          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeFalsy();
          expect(scope.professional3).toBeFalsy();
          expect(scope.professional4).toBeFalsy();
          expect(scope.professional5).toBeFalsy();
          expect(scope.professional6).toBeFalsy();
          expect(scope.professional7).toBeFalsy();
          expect(scope.master1).toBeFalsy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
          expect(scope.master4).toBeFalsy();
      }));

      it('should save the values for the assessment results for quality assurance', function(){
          scope.traveller1 = true;
          scope.traveller2 = true;
          scope.traveller3 = true;
          scope.traveller4 = true;
          scope.traveller5 = true;
          scope.traveller6 = true;
          scope.artisan1 = true;
          scope.artisan2 = false;
          scope.artisan3 = false;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.expert4 = true;
          scope.expert5 = true;
          scope.expert6 = true;
          scope.expert7 = true;
          scope.expert8 = true;
          scope.expert9 = true;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.professional4 = false;
          scope.professional5 = false;
          scope.professional6 = false;
          scope.professional7 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;

          var expectedQA = {
              'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true,
              'artisan1': true, 'artisan2': false, 'artisan3': false,
              'expert1': true, 'expert2': true, 'expert3': true, 'expert4': true, 'expert5': true, 'expert6': true, 'expert7': true, 'expert8': true, 'expert9': true,
              'professional1': false, 'professional2': false, 'professional3': false, 'professional4': false, 'professional5': false, 'professional6': false, 'professional7': false,
              'master1': false, 'master2': false, 'master3': false, 'master4': false};

          scope.saveAssessments();
          var QA = rootScope.assessments['QA'];

          expect(QA['traveller1']).toEqual(expectedQA[['traveller1']]);
          expect(QA['traveller2']).toEqual(expectedQA[['traveller2']]);
          expect(QA['traveller3']).toEqual(expectedQA[['traveller3']]);
          expect(QA['traveller4']).toEqual(expectedQA[['traveller4']]);
          expect(QA['traveller5']).toEqual(expectedQA[['traveller5']]);
          expect(QA['traveller6']).toEqual(expectedQA[['traveller6']]);
          expect(QA['artisan1']).toEqual(expectedQA[['artisan1']]);
          expect(QA['artisan2']).toEqual(expectedQA[['artisan2']]);
          expect(QA['artisan3']).toEqual(expectedQA[['artisan3']]);
          expect(QA['expert1']).toEqual(expectedQA[['expert1']]);
          expect(QA['expert2']).toEqual(expectedQA[['expert2']]);
          expect(QA['expert3']).toEqual(expectedQA[['expert3']]);
          expect(QA['expert4']).toEqual(expectedQA[['expert4']]);
          expect(QA['expert5']).toEqual(expectedQA[['expert5']]);
          expect(QA['expert6']).toEqual(expectedQA[['expert6']]);
          expect(QA['expert7']).toEqual(expectedQA[['expert7']]);
          expect(QA['expert8']).toEqual(expectedQA[['expert8']]);
          expect(QA['expert9']).toEqual(expectedQA[['expert9']]);
          expect(QA['professional1']).toEqual(expectedQA[['professional1']]);
          expect(QA['professional2']).toEqual(expectedQA[['professional2']]);
          expect(QA['professional3']).toEqual(expectedQA[['professional3']]);
          expect(QA['professional4']).toEqual(expectedQA[['professional4']]);
          expect(QA['professional5']).toEqual(expectedQA[['professional5']]);
          expect(QA['professional6']).toEqual(expectedQA[['professional6']]);
          expect(QA['professional7']).toEqual(expectedQA[['professional7']]);
          expect(QA['master1']).toEqual(expectedQA[['master1']]);
          expect(QA['master2']).toEqual(expectedQA[['master2']]);
          expect(QA['master3']).toEqual(expectedQA[['master3']]);
          expect(QA['master4']).toEqual(expectedQA[['master4']]);
      });

      it('should save the score for quality assurance as 0 if no question is answered', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.traveller5 = false;
          scope.traveller6 = false;
          scope.artisan1 = false;
          scope.artisan2 = false;
          scope.artisan3 = false;
          scope.expert1 = false;
          scope.expert2 = false;
          scope.expert3 = false;
          scope.expert4 = false;
          scope.expert5 = false;
          scope.expert6 = false;
          scope.expert7 = false;
          scope.expert8 = false;
          scope.expert9 = false;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.professional4 = false;
          scope.professional5 = false;
          scope.professional6 = false;
          scope.professional7 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;

          var expectedQAScore = 0;

          scope.saveAssessments();
          var QA = rootScope.assessments['QA'];

          expect(QA['score']).toEqual(expectedQAScore);
      });

      it('should save the score for quality assurance as 1 if traveller questions answered', function(){
          scope.traveller1 = true;
          scope.traveller2 = true;
          scope.traveller3 = true;
          scope.traveller4 = true;
          scope.traveller5 = true;
          scope.traveller6 = true;
          scope.artisan1 = true;
          scope.artisan2 = false;
          scope.artisan3 = false;
          scope.expert1 = false;
          scope.expert2 = false;
          scope.expert3 = false;
          scope.expert4 = false;
          scope.expert5 = false;
          scope.expert6 = false;
          scope.expert7 = false;
          scope.expert8 = false;
          scope.expert9 = false;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.professional4 = false;
          scope.professional5 = false;
          scope.professional6 = false;
          scope.professional7 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;

          var expectedQAScore = 1;

          scope.saveAssessments();
          var QA = rootScope.assessments['QA'];

          expect(QA['score']).toEqual(expectedQAScore);
      });

      it('should save the score for quality assurance as 2 if appropriate traveller questions not answered and artisan questions answered', function(){
          scope.traveller1 = false;
          scope.traveller2 = true;
          scope.traveller3 = true;
          scope.traveller4 = false;
          scope.traveller5 = true;
          scope.traveller6 = true;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.expert1 = true;
          scope.expert2 = false;
          scope.expert3 = false;
          scope.expert4 = false;
          scope.expert5 = false;
          scope.expert6 = false;
          scope.expert7 = false;
          scope.expert8 = false;
          scope.expert9 = false;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.professional4 = false;
          scope.professional5 = false;
          scope.professional6 = false;
          scope.professional7 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;

          var expectedQAScore = 2;

          scope.saveAssessments();
          var QA = rootScope.assessments['QA'];

          expect(QA['score']).toEqual(expectedQAScore);
      });

      it('should save the score for quality assurance as 3 if expert questions answered and other questions answered accordingly', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.traveller5 = false;
          scope.traveller6 = false;
          scope.artisan1 = false;
          scope.artisan2 = false;
          scope.artisan3 = false;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.expert4 = true;
          scope.expert5 = true;
          scope.expert6 = true;
          scope.expert7 = true;
          scope.expert8 = true;
          scope.expert9 = true;
          scope.professional1 = true;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.professional4 = false;
          scope.professional5 = false;
          scope.professional6 = false;
          scope.professional7 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;

          var expectedQAScore = 3;

          scope.saveAssessments();
          var QA = rootScope.assessments['QA'];

          expect(QA['score']).toEqual(expectedQAScore);
      });

      it('should save the score for quality assurance as 4 if professional questions answered and other questions answered accordingly', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.traveller5 = false;
          scope.traveller6 = false;
          scope.artisan1 = false;
          scope.artisan2 = false;
          scope.artisan3 = false;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.expert4 = true;
          scope.expert5 = true;
          scope.expert6 = true;
          scope.expert7 = true;
          scope.expert8 = true;
          scope.expert9 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.professional3 = true;
          scope.professional4 = true;
          scope.professional5 = true;
          scope.professional6 = true;
          scope.professional7 = true;
          scope.master1 = true;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;

          var expectedQAScore = 4;

          scope.saveAssessments();
          var QA = rootScope.assessments['QA'];

          expect(QA['score']).toEqual(expectedQAScore);
      });

      it('should save the score for quality assurance as 5 if master questions answered and other questions answered accordingly', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.traveller5 = false;
          scope.traveller6 = false;
          scope.artisan1 = false;
          scope.artisan2 = false;
          scope.artisan3 = false;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.expert4 = true;
          scope.expert5 = true;
          scope.expert6 = true;
          scope.expert7 = true;
          scope.expert8 = true;
          scope.expert9 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.professional3 = true;
          scope.professional4 = true;
          scope.professional5 = true;
          scope.professional6 = true;
          scope.professional7 = true;
          scope.master1 = true;
          scope.master2 = true;
          scope.master3 = true;
          scope.master4 = true;

          var expectedQAScore = 5;

          scope.saveAssessments();
          var QA = rootScope.assessments['QA'];

          expect(QA['score']).toEqual(expectedQAScore);
      });

      it('should save the score for quality assurance as 5 if master questions answered and other questions answered accordingly with assessments', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.traveller5 = false;
          scope.traveller6 = false;
          scope.artisan1 = false;
          scope.artisan2 = false;
          scope.artisan3 = false;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.expert4 = true;
          scope.expert5 = true;
          scope.expert6 = true;
          scope.expert7 = true;
          scope.expert8 = true;
          scope.expert9 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.professional3 = true;
          scope.professional4 = true;
          scope.professional5 = true;
          scope.professional6 = true;
          scope.professional7 = true;
          scope.master1 = true;
          scope.master2 = true;
          scope.master3 = true;
          scope.master4 = true;

          var expectedQAScore = 5;
          rootScope.assessments = {'coding': {}};

          scope.saveAssessments();
          var QA = rootScope.assessments['QA'];

          expect(QA['score']).toEqual(expectedQAScore);
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