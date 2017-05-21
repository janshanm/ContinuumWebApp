'use strict';

describe('continuumAssessmentPlatform.strategy module', function() {

  beforeEach(module('continuumAssessmentPlatform.strategy'));

  describe('strategy controller', function(){

    var controller;
    var scope, rootScope;

    beforeEach(inject(function($controller, $rootScope){
      rootScope = $rootScope;
      scope = rootScope.$new();
      controller = $controller('StrategyCtrl', {'$scope': scope, '$rootScope': rootScope});
    }));

    it('should ....', function() {
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

        expect(scope.expert1).toBeFalsy();
        expect(scope.expert2).toBeFalsy();
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

        expect(scope.master1).toBeFalsy();
        expect(scope.master2).toBeFalsy();
        expect(scope.master3).toBeFalsy();
        expect(scope.master4).toBeFalsy();
    });

    it('should set the default values based on the rootScope if they are present', inject(function($controller){
        rootScope = {'assessments': {'strategy': {'traveller1': true, 'artisan1': true, 'artisan2': false, 'artisan3': true, 'expert1': true,
        'expert2': false, 'professional1': false, 'professional2': false, 'professional3': false, 'master1': false,
        'master2': false, 'master3': false}}};

        controller = $controller('StrategyCtrl', {'$scope': scope, '$rootScope': rootScope});
        scope.init();
        expect(scope.traveller1).toBeTruthy();
        expect(scope.artisan1).toBeTruthy();
        expect(scope.artisan2).toBeFalsy();
        expect(scope.artisan3).toBeTruthy();
        expect(scope.expert1).toBeTruthy();
        expect(scope.expert2).toBeFalsy();
        expect(scope.professional1).toBeFalsy();
        expect(scope.professional2).toBeFalsy();
        expect(scope.professional3).toBeFalsy();
        expect(scope.master1).toBeFalsy();
        expect(scope.master2).toBeFalsy();
        expect(scope.master3).toBeFalsy();
        expect(scope.master4).toBeFalsy();
    }));

      it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
          rootScope = {};

          controller = $controller('StrategyCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeFalsy();
          expect(scope.artisan1).toBeFalsy();
          expect(scope.artisan2).toBeFalsy();
          expect(scope.artisan3).toBeFalsy();
          expect(scope.expert1).toBeFalsy();
          expect(scope.expert2).toBeFalsy();
          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeFalsy();
          expect(scope.professional3).toBeFalsy();
          expect(scope.master1).toBeFalsy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
          expect(scope.master4).toBeFalsy();
      }));



      it('should save the values for the assessment results for strategy', function(){
          scope.traveller1 = true;
          scope.artisan1 = true;
          scope.artisan2 = false;
          scope.artisan3 = false;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;

          var expectedStrategy = {'traveller1': true, 'artisan1': true, 'artisan2': false, 'artisan3': false, 'expert1': true,
              'expert2': true, 'professional1': false, 'professional2': false, 'professional3': false, 'master1': false,
              'master2': false, 'master3': false, 'master4': false};

          scope.saveAssessments();
          var strategy = rootScope.assessments['strategy'];

          expect(strategy['traveller1']).toEqual(expectedStrategy[['traveller1']]);
          expect(strategy['artisan1']).toEqual(expectedStrategy[['artisan1']]);
          expect(strategy['artisan2']).toEqual(expectedStrategy[['artisan2']]);
          expect(strategy['artisan3']).toEqual(expectedStrategy[['artisan3']]);
          expect(strategy['expert1']).toEqual(expectedStrategy[['expert1']]);
          expect(strategy['expert2']).toEqual(expectedStrategy[['expert2']]);
          expect(strategy['professional1']).toEqual(expectedStrategy[['professional1']]);
          expect(strategy['professional2']).toEqual(expectedStrategy[['professional2']]);
          expect(strategy['professional3']).toEqual(expectedStrategy[['professional3']]);
          expect(strategy['master1']).toEqual(expectedStrategy[['master1']]);
          expect(strategy['master2']).toEqual(expectedStrategy[['master2']]);
          expect(strategy['master3']).toEqual(expectedStrategy[['master3']]);
          expect(strategy['master4']).toEqual(expectedStrategy[['master4']]);

      });

      it('should save the score for strategy as 0 if no question is answered', function(){
          scope.traveller1 = false;
          scope.artisan1 = false;
          scope.artisan2 = false;
          scope.artisan3 = false;
          scope.expert1 = false;
          scope.expert2 = false;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;

          var expectedStrategyScore = 0;

          scope.saveAssessments();
          var strategy = rootScope.assessments['strategy'];

          expect(strategy['score']).toEqual(expectedStrategyScore);

      });

      it('should save the score for strategy as 1 if the traveller question is answered as yes', function(){
          scope.traveller1 = true;
          scope.artisan1 = true;
          scope.artisan2 = false;
          scope.artisan3 = false;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;

          var expectedStrategyScore = 1;

          scope.saveAssessments();
          var strategy = rootScope.assessments['strategy'];

          expect(strategy['score']).toEqual(expectedStrategyScore);

      });

      it('should save the score for strategy as 2 if the traveller question is answered as no and the artisan questions are answered yes', function(){
          scope.traveller1 = false;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;

          var expectedStrategyScore = 2;

          scope.saveAssessments();
          var strategy = rootScope.assessments['strategy'];

          expect(strategy['score']).toEqual(expectedStrategyScore);
      });

      it('should save the score for strategy as 3 if the traveller question is answered as no and the artisan question ' +
          'one is answered as no and other artisan questions as yes with all the expert questions as yes', function(){
          scope.traveller1 = false;
          scope.artisan1 = false;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;

          var expectedStrategyScore = 3;

          scope.saveAssessments();
          var strategy = rootScope.assessments['strategy'];

          expect(strategy['score']).toEqual(expectedStrategyScore);
      });

      it('should save the score for strategy as 4 if the traveller question is answered as no and the artisan question ' +
          'one is answered as no and other artisan questions as yes and the first expert question answered as no and all' +
          ' the other expert questions as yes with all the professional questions as yes ', function(){
          scope.traveller1 = false;
          scope.artisan1 = false;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.expert1 = false;
          scope.expert2 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.professional3 = true;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;

          var expectedStrategyScore = 4;

          scope.saveAssessments();
          var strategy = rootScope.assessments['strategy'];

          expect(strategy['score']).toEqual(expectedStrategyScore);
      });

      it('should save the score for strategy as 4 if the traveller question is answered as no and the artisan question ' +
          'one is answered as no and other artisan questions as yes and the first expert question answered as no and all' +
          ' the other expert questions as yes with all the professional questions as yes as well as the master questions ', function(){
          scope.traveller1 = false;
          scope.artisan1 = false;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.expert1 = false;
          scope.expert2 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.professional3 = true;
          scope.master1 = true;
          scope.master2 = true;
          scope.master3 = true;
          scope.master4 = true;

          var expectedStrategyScore = 5;

          scope.saveAssessments();
          var strategy = rootScope.assessments['strategy'];

          expect(strategy['score']).toEqual(expectedStrategyScore);
      });

  });
});