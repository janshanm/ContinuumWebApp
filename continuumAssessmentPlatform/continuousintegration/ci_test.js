'use strict';

describe('continuumAssessmentPlatform.ci module', function() {

  beforeEach(module('continuumAssessmentPlatform.ci'));

  describe('continuous integration controller', function(){

      var controller;
      var scope, rootScope;

      beforeEach(inject(function($controller, $rootScope){
          rootScope = $rootScope;
          scope = rootScope.$new();
          controller = $controller('CICtrl', {'$scope': scope, '$rootScope': rootScope});
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
          expect(scope.master5).toBeDefined();
          expect(scope.master6).toBeDefined();
          expect(scope.master7).toBeDefined();
          expect(scope.master8).toBeDefined();
          expect(scope.master9).toBeDefined();
          expect(scope.master10).toBeDefined();

          expect(scope.master1).toBeFalsy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
          expect(scope.master4).toBeFalsy();
          expect(scope.master5).toBeFalsy();
          expect(scope.master6).toBeFalsy();
          expect(scope.master7).toBeFalsy();
          expect(scope.master8).toBeFalsy();
          expect(scope.master9).toBeFalsy();
          expect(scope.master10).toBeFalsy();
      });

      it('should set the default values based on the rootScope if they are present', inject(function($controller){
          rootScope = {'assessments': {'ci': {
              'traveller1': true, 'traveller2': true, 'traveller3': false, 'traveller4': false, 'traveller5': true, 'traveller6': true,
              'artisan1': true, 'artisan2': false, 'artisan3': false,
              'expert1': true, 'expert2': false, 'expert3': false, 'expert4': false, 'expert5': false, 'expert6': false, 'expert7': false,
              'professional1': false, 'professional2': true, 'professional3': false, 'professional4': false, 'professional5': false, 'professional6': false, 'professional7': false,
              'master1': true, 'master2': false, 'master3': false, 'master4': false, 'master5': false, 'master6': false, 'master7': false, 'master8': false, 'master9': false, 'master10': false }}};

          controller = $controller('CICtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeTruthy();
          expect(scope.traveller2).toBeTruthy();
          expect(scope.traveller3).toBeFalsy();
          expect(scope.traveller4).toBeFalsy();
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
          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeTruthy();
          expect(scope.professional3).toBeFalsy();
          expect(scope.professional4).toBeFalsy();
          expect(scope.professional5).toBeFalsy();
          expect(scope.professional6).toBeFalsy();
          expect(scope.professional7).toBeFalsy();
          expect(scope.master1).toBeTruthy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
          expect(scope.master4).toBeFalsy();
          expect(scope.master5).toBeFalsy();
          expect(scope.master6).toBeFalsy();
          expect(scope.master7).toBeFalsy();
          expect(scope.master8).toBeFalsy();
          expect(scope.master9).toBeFalsy();
          expect(scope.master10).toBeFalsy();
      }));

      it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
          rootScope = {};

          controller = $controller('CICtrl', {'$scope': scope, '$rootScope': rootScope});
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
          expect(scope.master5).toBeFalsy();
          expect(scope.master6).toBeFalsy();
          expect(scope.master7).toBeFalsy();
          expect(scope.master8).toBeFalsy();
          expect(scope.master9).toBeFalsy();
          expect(scope.master10).toBeFalsy();
      }));



      it('should save the values for the assessment results for continuous integration', function(){
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
          scope.professional6 = true;
          scope.professional7 = true;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;
          scope.master5 = false;
          scope.master6 = false;
          scope.master7 = false;
          scope.master8 = false;
          scope.master9 = false;
          scope.master10 = false;

          var expectedCI = {
              'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true,
              'artisan1': true, 'artisan2': false, 'artisan3': false,
              'expert1': true, 'expert2': true, 'expert3': false, 'expert4': false, 'expert5': false, 'expert6': false, 'expert7': false,
              'professional1': false, 'professional2': false, 'professional3': false, 'professional4': false, 'professional5': false, 'professional6': true, 'professional7': true,
              'master1': false, 'master2': false, 'master3': false, 'master4': false, 'master5': false, 'master6': false, 'master7': false, 'master8': false, 'master9': false, 'master10': false };

          scope.saveAssessments();
          var ci = rootScope.assessments['ci'];

          expect(ci['traveller1']).toEqual(expectedCI[['traveller1']]);
          expect(ci['traveller2']).toEqual(expectedCI[['traveller2']]);
          expect(ci['traveller3']).toEqual(expectedCI[['traveller3']]);
          expect(ci['traveller4']).toEqual(expectedCI[['traveller4']]);
          expect(ci['traveller5']).toEqual(expectedCI[['traveller5']]);
          expect(ci['traveller6']).toEqual(expectedCI[['traveller6']]);
          expect(ci['artisan1']).toEqual(expectedCI[['artisan1']]);
          expect(ci['artisan2']).toEqual(expectedCI[['artisan2']]);
          expect(ci['artisan3']).toEqual(expectedCI[['artisan3']]);
          expect(ci['expert1']).toEqual(expectedCI[['expert1']]);
          expect(ci['expert2']).toEqual(expectedCI[['expert2']]);
          expect(ci['expert3']).toEqual(expectedCI[['expert3']]);
          expect(ci['expert4']).toEqual(expectedCI[['expert4']]);
          expect(ci['expert5']).toEqual(expectedCI[['expert5']]);
          expect(ci['expert6']).toEqual(expectedCI[['expert6']]);
          expect(ci['expert7']).toEqual(expectedCI[['expert7']]);
          expect(ci['professional1']).toEqual(expectedCI[['professional1']]);
          expect(ci['professional2']).toEqual(expectedCI[['professional2']]);
          expect(ci['professional3']).toEqual(expectedCI[['professional3']]);
          expect(ci['professional4']).toEqual(expectedCI[['professional4']]);
          expect(ci['professional5']).toEqual(expectedCI[['professional5']]);
          expect(ci['professional6']).toEqual(expectedCI[['professional6']]);
          expect(ci['professional7']).toEqual(expectedCI[['professional7']]);
          expect(ci['master1']).toEqual(expectedCI[['master1']]);
          expect(ci['master2']).toEqual(expectedCI[['master2']]);
          expect(ci['master3']).toEqual(expectedCI[['master3']]);
          expect(ci['master4']).toEqual(expectedCI[['master4']]);
          expect(ci['master5']).toEqual(expectedCI[['master5']]);
          expect(ci['master6']).toEqual(expectedCI[['master6']]);
          expect(ci['master7']).toEqual(expectedCI[['master7']]);
          expect(ci['master8']).toEqual(expectedCI[['master8']]);
          expect(ci['master9']).toEqual(expectedCI[['master9']]);
          expect(ci['master10']).toEqual(expectedCI[['master10']]);

      });



  });
});