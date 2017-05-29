'use strict';

describe('continuumAssessmentPlatform.planning module', function() {

  beforeEach(module('continuumAssessmentPlatform.planning'));

  describe('planning controller', function(){

      var controller;
      var scope, rootScope;

      beforeEach(inject(function($controller, $rootScope){
          rootScope = $rootScope;
          scope = rootScope.$new();
          controller = $controller('PlanningCtrl', {'$scope': scope, '$rootScope': rootScope});
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

          expect(scope.traveller1).toBeFalsy();
          expect(scope.traveller2).toBeFalsy();
          expect(scope.traveller3).toBeFalsy();
          expect(scope.traveller4).toBeFalsy();
          expect(scope.traveller5).toBeFalsy();
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

          expect(scope.expert1).toBeFalsy();
          expect(scope.expert2).toBeFalsy();
          expect(scope.expert3).toBeFalsy();
          expect(scope.expert4).toBeFalsy();
          expect(scope.expert5).toBeFalsy();
          expect(scope.expert6).toBeFalsy();
      });

      it('should have defaults as false for the professional questions', function(){
          expect(scope.professional1).toBeDefined();
          expect(scope.professional2).toBeDefined();
          expect(scope.professional3).toBeDefined();
          expect(scope.professional4).toBeDefined();
          expect(scope.professional5).toBeDefined();
          expect(scope.professional6).toBeDefined();

          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeFalsy();
          expect(scope.professional3).toBeFalsy();
          expect(scope.professional4).toBeFalsy();
          expect(scope.professional5).toBeFalsy();
          expect(scope.professional6).toBeFalsy();
      });

      it('should have defaults as false for the master questions', function(){
          expect(scope.master1).toBeDefined();
          expect(scope.master2).toBeDefined();
          expect(scope.master3).toBeDefined();

          expect(scope.master1).toBeFalsy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
      });

      it('should set the default values based on the rootScope if they are present', inject(function($controller){
          rootScope = {'assessments': {'planning': {
            'traveller1': true, 'traveller2': true, 'traveller3': false, 'traveller4': false, 'traveller5': true,
              'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': true, 'artisan5': false,
              'expert1': true, 'expert2': false, 'expert3': false, 'expert4': false, 'expert5': false, 'expert6': false,
              'professional1': false, 'professional2': true, 'professional3': false, 'professional4': false, 'professional5': false, 'professional6': false,
              'master1': true, 'master2': false, 'master3': false}}};

          controller = $controller('PlanningCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeTruthy();
          expect(scope.traveller2).toBeTruthy();
          expect(scope.traveller3).toBeFalsy();
          expect(scope.traveller4).toBeFalsy();
          expect(scope.traveller5).toBeTruthy();
          expect(scope.artisan1).toBeTruthy();
          expect(scope.artisan2).toBeFalsy();
          expect(scope.artisan3).toBeFalsy();
          expect(scope.artisan4).toBeTruthy();
          expect(scope.artisan5).toBeFalsy();
          expect(scope.expert1).toBeTruthy();
          expect(scope.expert2).toBeFalsy();
          expect(scope.expert3).toBeFalsy();
          expect(scope.expert4).toBeFalsy();
          expect(scope.expert5).toBeFalsy();
          expect(scope.expert6).toBeFalsy();
          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeTruthy();
          expect(scope.professional3).toBeFalsy();
          expect(scope.professional4).toBeFalsy();
          expect(scope.professional5).toBeFalsy();
          expect(scope.professional6).toBeFalsy();
          expect(scope.master1).toBeTruthy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
      }));

      it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
          rootScope = {};

          controller = $controller('PlanningCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeFalsy();
          expect(scope.traveller2).toBeFalsy();
          expect(scope.traveller3).toBeFalsy();
          expect(scope.traveller4).toBeFalsy();
          expect(scope.traveller5).toBeFalsy();
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
          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeFalsy();
          expect(scope.professional3).toBeFalsy();
          expect(scope.professional4).toBeFalsy();
          expect(scope.professional5).toBeFalsy();
          expect(scope.professional6).toBeFalsy();
          expect(scope.master1).toBeFalsy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
      }));

      it('should set the default values based on the initial values if rootScope not set with assessments', inject(function($controller){
          rootScope = {'assessments': {'ci': {}}};

          controller = $controller('PlanningCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeFalsy();
          expect(scope.traveller2).toBeFalsy();
          expect(scope.traveller3).toBeFalsy();
          expect(scope.traveller4).toBeFalsy();
          expect(scope.traveller5).toBeFalsy();
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
          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeFalsy();
          expect(scope.professional3).toBeFalsy();
          expect(scope.professional4).toBeFalsy();
          expect(scope.professional5).toBeFalsy();
          expect(scope.professional6).toBeFalsy();
          expect(scope.master1).toBeFalsy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
      }));

      it('should save the values for the assessment results for planning', function(){
          scope.traveller1 = true;
          scope.traveller2 = true;
          scope.traveller3 = true;
          scope.traveller4 = true;
          scope.traveller5 = true;
          scope.artisan1 = true;
          scope.artisan2 = false;
          scope.artisan3 = false;
          scope.artisan4 = false;
          scope.artisan5 = false;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = false;
          scope.expert4 = false;
          scope.expert5 = false;
          scope.expert6 = false;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.professional4 = false;
          scope.professional5 = false;
          scope.professional6 = true;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;

          var expectedPlanning = {
            'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true,
              'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false,
              'expert1': true, 'expert2': true, 'expert3': false, 'expert4': false, 'expert5': false, 'expert6': false,
              'professional1': false, 'professional2': false, 'professional3': false, 'professional4': false, 'professional5': false, 'professional6': true,
              'master1': false, 'master2': false, 'master3': false};

          scope.saveAssessments();
          var planning = rootScope.assessments['planning'];

          expect(planning['traveller1']).toEqual(expectedPlanning[['traveller1']]);
          expect(planning['traveller2']).toEqual(expectedPlanning[['traveller2']]);
          expect(planning['traveller3']).toEqual(expectedPlanning[['traveller3']]);
          expect(planning['traveller4']).toEqual(expectedPlanning[['traveller4']]);
          expect(planning['traveller5']).toEqual(expectedPlanning[['traveller5']]);
          expect(planning['artisan1']).toEqual(expectedPlanning[['artisan1']]);
          expect(planning['artisan2']).toEqual(expectedPlanning[['artisan2']]);
          expect(planning['artisan3']).toEqual(expectedPlanning[['artisan3']]);
          expect(planning['artisan4']).toEqual(expectedPlanning[['artisan4']]);
          expect(planning['artisan5']).toEqual(expectedPlanning[['artisan5']]);
          expect(planning['expert1']).toEqual(expectedPlanning[['expert1']]);
          expect(planning['expert2']).toEqual(expectedPlanning[['expert2']]);
          expect(planning['expert3']).toEqual(expectedPlanning[['expert3']]);
          expect(planning['expert4']).toEqual(expectedPlanning[['expert4']]);
          expect(planning['expert5']).toEqual(expectedPlanning[['expert5']]);
          expect(planning['expert6']).toEqual(expectedPlanning[['expert6']]);
          expect(planning['professional1']).toEqual(expectedPlanning[['professional1']]);
          expect(planning['professional2']).toEqual(expectedPlanning[['professional2']]);
          expect(planning['professional3']).toEqual(expectedPlanning[['professional3']]);
          expect(planning['professional4']).toEqual(expectedPlanning[['professional4']]);
          expect(planning['professional5']).toEqual(expectedPlanning[['professional5']]);
          expect(planning['professional6']).toEqual(expectedPlanning[['professional6']]);
          expect(planning['master1']).toEqual(expectedPlanning[['master1']]);
          expect(planning['master2']).toEqual(expectedPlanning[['master2']]);
          expect(planning['master3']).toEqual(expectedPlanning[['master3']]);

      });

      it('should save the score for planning as 0 if no question is answered', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.traveller5 = false;
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
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.professional4 = false;
          scope.professional5 = false;
          scope.professional6 = true;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;

          var expectedPlanningScore = 0;

          scope.saveAssessments();
          var planning = rootScope.assessments['planning'];

          expect(planning['score']).toEqual(expectedPlanningScore);

      });

      it('should save the score for planning as 1 if all traveller questions are answered as yes', function(){
          scope.traveller1 = true;
          scope.traveller2 = true;
          scope.traveller3 = true;
          scope.traveller4 = true;
          scope.traveller5 = true;
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
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.professional4 = false;
          scope.professional5 = false;
          scope.professional6 = true;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;

          var expectedPlanningScore = 1;

          scope.saveAssessments();
          var planning = rootScope.assessments['planning'];

          expect(planning['score']).toEqual(expectedPlanningScore);

      });

      it('should save the score for planning as 2 if all artisan questions are answered as yes with traveller questions as no', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.traveller5 = false;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.artisan4 = true;
          scope.artisan5 = true;
          scope.expert1 = false;
          scope.expert2 = false;
          scope.expert3 = false;
          scope.expert4 = false;
          scope.expert5 = false;
          scope.expert6 = false;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.professional4 = false;
          scope.professional5 = false;
          scope.professional6 = true;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;

          var expectedPlanningScore = 2;

          scope.saveAssessments();
          var planning = rootScope.assessments['planning'];

          expect(planning['score']).toEqual(expectedPlanningScore);

      });

      it('should save the score for planning as 3 if all expert questions are answered as yes with traveller questions as no', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.traveller5 = false;
          scope.artisan1 = false;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.artisan4 = true;
          scope.artisan5 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.expert4 = true;
          scope.expert5 = true;
          scope.expert6 = true;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.professional4 = false;
          scope.professional5 = false;
          scope.professional6 = true;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;

          var expectedPlanningScore = 3;

          scope.saveAssessments();
          var planning = rootScope.assessments['planning'];

          expect(planning['score']).toEqual(expectedPlanningScore);

      });

      it('should save the score for planning as 4 if all professional questions are answered as yes with traveller questions as no', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.traveller5 = false;
          scope.artisan1 = false;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.artisan4 = true;
          scope.artisan5 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.expert4 = true;
          scope.expert5 = true;
          scope.expert6 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.professional3 = true;
          scope.professional4 = true;
          scope.professional5 = true;
          scope.professional6 = true;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;

          var expectedPlanningScore = 4;

          scope.saveAssessments();
          var planning = rootScope.assessments['planning'];

          expect(planning['score']).toEqual(expectedPlanningScore);

      });

      it('should save the score for planning as 5 if all master questions are answered as yes with traveller questions as no', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.traveller5 = false;
          scope.artisan1 = false;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.artisan4 = true;
          scope.artisan5 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.expert4 = true;
          scope.expert5 = true;
          scope.expert6 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.professional3 = true;
          scope.professional4 = true;
          scope.professional5 = true;
          scope.professional6 = true;
          scope.master1 = true;
          scope.master2 = true;
          scope.master3 = true;

          var expectedPlanningScore = 5;

          scope.saveAssessments();
          var planning = rootScope.assessments['planning'];

          expect(planning['score']).toEqual(expectedPlanningScore);

      });

      it('should save the score for planning as 5 if all master questions are answered as yes with traveller questions as no with assessments', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.traveller5 = false;
          scope.artisan1 = false;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.artisan4 = true;
          scope.artisan5 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.expert4 = true;
          scope.expert5 = true;
          scope.expert6 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.professional3 = true;
          scope.professional4 = true;
          scope.professional5 = true;
          scope.professional6 = true;
          scope.master1 = true;
          scope.master2 = true;
          scope.master3 = true;

          var expectedPlanningScore = 5;
          rootScope.assessments = {'coding': {}};

          scope.saveAssessments();
          var planning = rootScope.assessments['planning'];

          expect(planning['score']).toEqual(expectedPlanningScore);

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