'use strict';

describe('continuumAssessmentPlatform.incident module', function() {

  beforeEach(module('continuumAssessmentPlatform.incident'));

  describe('incident controller', function(){

      var controller;
      var scope, rootScope;

      beforeEach(inject(function($controller, $rootScope){
          rootScope = $rootScope;
          scope = rootScope.$new();
          controller = $controller('IncidentCtrl', {'$scope': scope, '$rootScope': rootScope});
      }));

      it('should be defined', function() {
          expect(controller).toBeDefined();
      });

      it('should have defaults as false for the traveller questions', function(){
          expect(scope.traveller1).toBeDefined();

          expect(scope.traveller1).toBeFalsy();
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

          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeFalsy();
          expect(scope.professional3).toBeFalsy();
          expect(scope.professional4).toBeFalsy();
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
          rootScope = {'assessments': {'incident': {
              'traveller1': true,
              'artisan1': true, 'artisan2': false, 'artisan3': false,
              'expert1': true, 'expert2': false, 'expert3': false, 'expert4': false, 'expert5': false, 'expert6': false,
              'professional1': false, 'professional2': true, 'professional3': false, 'professional4': false,
              'master1': true, 'master2': false, 'master3': false}}};

          controller = $controller('IncidentCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeTruthy();
          expect(scope.artisan1).toBeTruthy();
          expect(scope.artisan2).toBeFalsy();
          expect(scope.artisan3).toBeFalsy();
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
          expect(scope.master1).toBeTruthy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
      }));

      it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
          rootScope = {};

          controller = $controller('IncidentCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeFalsy();
          expect(scope.artisan1).toBeFalsy();
          expect(scope.artisan2).toBeFalsy();
          expect(scope.artisan3).toBeFalsy();
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
          expect(scope.master1).toBeFalsy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
      }));



      it('should save the values for the assessment results for incident management', function(){
          scope.traveller1 = true;
          scope.artisan1 = true;
          scope.artisan2 = false;
          scope.artisan3 = false;
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
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;

          var expectedPlanning = {
              'traveller1': true,
              'artisan1': true, 'artisan2': false, 'artisan3': false,
              'expert1': true, 'expert2': true, 'expert3': false, 'expert4': false, 'expert5': false, 'expert6': false,
              'professional1': false, 'professional2': false, 'professional3': false, 'professional4': false,
              'master1': false, 'master2': false, 'master3': false};

          scope.saveAssessments();
          var incident = rootScope.assessments['incident'];

          expect(incident['traveller1']).toEqual(expectedPlanning[['traveller1']]);
          expect(incident['artisan1']).toEqual(expectedPlanning[['artisan1']]);
          expect(incident['artisan2']).toEqual(expectedPlanning[['artisan2']]);
          expect(incident['artisan3']).toEqual(expectedPlanning[['artisan3']]);
          expect(incident['expert1']).toEqual(expectedPlanning[['expert1']]);
          expect(incident['expert2']).toEqual(expectedPlanning[['expert2']]);
          expect(incident['expert3']).toEqual(expectedPlanning[['expert3']]);
          expect(incident['expert4']).toEqual(expectedPlanning[['expert4']]);
          expect(incident['expert5']).toEqual(expectedPlanning[['expert5']]);
          expect(incident['expert6']).toEqual(expectedPlanning[['expert6']]);
          expect(incident['professional1']).toEqual(expectedPlanning[['professional1']]);
          expect(incident['professional2']).toEqual(expectedPlanning[['professional2']]);
          expect(incident['professional3']).toEqual(expectedPlanning[['professional3']]);
          expect(incident['professional4']).toEqual(expectedPlanning[['professional4']]);
          expect(incident['master1']).toEqual(expectedPlanning[['master1']]);
          expect(incident['master2']).toEqual(expectedPlanning[['master2']]);
          expect(incident['master3']).toEqual(expectedPlanning[['master3']]);

      });

  });
});