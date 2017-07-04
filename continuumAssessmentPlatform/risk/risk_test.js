'use strict';

describe('continuumAssessmentPlatform.risk module', function() {

  beforeEach(module('continuumAssessmentPlatform.risk'));

  describe('risk controller', function(){

      var controller;
      var scope, rootScope;

      beforeEach(inject(function($controller, $rootScope){
          rootScope = $rootScope;
          scope = rootScope.$new();
          controller = $controller('RiskCtrl', {'$scope': scope, '$rootScope': rootScope});
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
          expect(scope.artisan3).toBeDefined();

          expect(scope.artisan1).toBeFalsy();
          expect(scope.artisan2).toBeFalsy();
          expect(scope.artisan3).toBeFalsy();
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

          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeFalsy();
          expect(scope.professional3).toBeFalsy();
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
          rootScope = {'assessments': {'risk': {
              'traveller1': true, 'traveller2': true,
              'artisan1': true, 'artisan2': false, 'artisan3': false,
              'expert1': true, 'expert2': false, 'expert3': false,
              'professional1': false, 'professional2': true, 'professional3': false,
              'master1': true, 'master2': false, 'master3': false, 'master4': false, 'master5': true}}};

          controller = $controller('RiskCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeTruthy();
          expect(scope.traveller2).toBeTruthy();
          expect(scope.artisan1).toBeTruthy();
          expect(scope.artisan2).toBeFalsy();
          expect(scope.artisan3).toBeFalsy();
          expect(scope.expert1).toBeTruthy();
          expect(scope.expert2).toBeFalsy();
          expect(scope.expert3).toBeFalsy();
          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeTruthy();
          expect(scope.professional3).toBeFalsy();
          expect(scope.master1).toBeTruthy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
          expect(scope.master4).toBeFalsy();
          expect(scope.master5).toBeTruthy();
      }));

      it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
          rootScope = {};

          controller = $controller('RiskCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeFalsy();
          expect(scope.traveller2).toBeFalsy();
          expect(scope.artisan1).toBeFalsy();
          expect(scope.artisan2).toBeFalsy();
          expect(scope.artisan3).toBeFalsy();
          expect(scope.expert1).toBeFalsy();
          expect(scope.expert2).toBeFalsy();
          expect(scope.expert3).toBeFalsy();
          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeFalsy();
          expect(scope.professional3).toBeFalsy();
          expect(scope.master1).toBeFalsy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
          expect(scope.master4).toBeFalsy();
          expect(scope.master5).toBeFalsy();
      }));

      it('should set the default values based on the initial values if rootScope not set with assessments', inject(function($controller){
          rootScope = {'assessments': {'ci': {}}};

          controller = $controller('RiskCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeFalsy();
          expect(scope.traveller2).toBeFalsy();
          expect(scope.artisan1).toBeFalsy();
          expect(scope.artisan2).toBeFalsy();
          expect(scope.artisan3).toBeFalsy();
          expect(scope.expert1).toBeFalsy();
          expect(scope.expert2).toBeFalsy();
          expect(scope.expert3).toBeFalsy();
          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeFalsy();
          expect(scope.professional3).toBeFalsy();
          expect(scope.master1).toBeFalsy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
          expect(scope.master4).toBeFalsy();
          expect(scope.master5).toBeFalsy();
      }));

      it('should save the values for the assessment results for risk and issue management', function(){
          scope.traveller1 = true;
          scope.traveller2 = true;
          scope.artisan1 = true;
          scope.artisan2 = false;
          scope.artisan3 = false;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = false;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;
          scope.master5 = false;

          var expectedRisk = {
              'traveller1': true, 'traveller2': true,
              'artisan1': true, 'artisan2': false, 'artisan3': false,
              'expert1': true, 'expert2': true, 'expert3': false,
              'professional1': false, 'professional2': false, 'professional3': false,
              'master1': false, 'master2': false, 'master3': false, 'master4': false, 'master5': false};

          scope.saveAssessments();
          var risk = rootScope.assessments['risk'];

          expect(risk['traveller1']).toEqual(expectedRisk[['traveller1']]);
          expect(risk['traveller2']).toEqual(expectedRisk[['traveller2']]);
          expect(risk['artisan1']).toEqual(expectedRisk[['artisan1']]);
          expect(risk['artisan2']).toEqual(expectedRisk[['artisan2']]);
          expect(risk['artisan3']).toEqual(expectedRisk[['artisan3']]);
          expect(risk['expert1']).toEqual(expectedRisk[['expert1']]);
          expect(risk['expert2']).toEqual(expectedRisk[['expert2']]);
          expect(risk['expert3']).toEqual(expectedRisk[['expert3']]);
          expect(risk['professional1']).toEqual(expectedRisk[['professional1']]);
          expect(risk['professional2']).toEqual(expectedRisk[['professional2']]);
          expect(risk['professional3']).toEqual(expectedRisk[['professional3']]);
          expect(risk['master1']).toEqual(expectedRisk[['master1']]);
          expect(risk['master2']).toEqual(expectedRisk[['master2']]);
          expect(risk['master3']).toEqual(expectedRisk[['master3']]);
          expect(risk['master4']).toEqual(expectedRisk[['master4']]);
          expect(risk['master5']).toEqual(expectedRisk[['master5']]);

      });

      it('should save the score for risk as 1 if no question is answered', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.artisan1 = false;
          scope.artisan2 = false;
          scope.artisan3 = false;
          scope.expert1 = false;
          scope.expert2 = false;
          scope.expert3 = false;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;
          scope.master5 = false;

          var expectedRiskScore = 1;

          scope.saveAssessments();
          var risk = rootScope.assessments['risk'];

          expect(risk['score']).toEqual(expectedRiskScore);
      });

      it('should save the score for risk as 1 if traveller question answered', function(){
          scope.traveller1 = true;
          scope.traveller2 = true;
          scope.artisan1 = true;
          scope.artisan2 = false;
          scope.artisan3 = false;
          scope.expert1 = false;
          scope.expert2 = false;
          scope.expert3 = false;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;
          scope.master5 = false;

          var expectedRiskScore = 1;

          scope.saveAssessments();
          var risk = rootScope.assessments['risk'];

          expect(risk['score']).toEqual(expectedRiskScore);
      });

      it('should save the score for risk as 2 if traveller question not answered and artisan questions answered', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.expert1 = true;
          scope.expert2 = false;
          scope.expert3 = false;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;
          scope.master5 = false;

          var expectedRiskScore = 2;

          scope.saveAssessments();
          var risk = rootScope.assessments['risk'];

          expect(risk['score']).toEqual(expectedRiskScore);
      });

      it('should save the score for risk as 3 if expert questions answered and other questions answered accordingly', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.professional1 = true;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;
          scope.master5 = false;

          var expectedRiskScore = 3;

          scope.saveAssessments();
          var risk = rootScope.assessments['risk'];

          expect(risk['score']).toEqual(expectedRiskScore);
      });

      it('should save the score for risk as 4 if professional questions answered and other questions answered accordingly', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.professional3 = true;
          scope.master1 = true;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;
          scope.master5 = false;

          var expectedRiskScore = 4;

          scope.saveAssessments();
          var risk = rootScope.assessments['risk'];

          expect(risk['score']).toEqual(expectedRiskScore);
      });

      it('should save the score for risk as 5 if master questions answered and other questions answered accordingly', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.professional3 = true;
          scope.master1 = true;
          scope.master2 = true;
          scope.master3 = true;
          scope.master4 = true;
          scope.master5 = true;

          var expectedRiskScore = 5;

          scope.saveAssessments();
          var risk = rootScope.assessments['risk'];

          expect(risk['score']).toEqual(expectedRiskScore);
      });

      it('should save the score for risk as 5 if master questions answered and other questions answered accordingly with assessments', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.professional3 = true;
          scope.master1 = true;
          scope.master2 = true;
          scope.master3 = true;
          scope.master4 = true;
          scope.master5 = true;

          var expectedRiskScore = 5;
          rootScope.assessments = {'coding': {}};

          scope.saveAssessments();
          var risk = rootScope.assessments['risk'];

          expect(risk['score']).toEqual(expectedRiskScore);
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