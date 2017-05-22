'use strict';

describe('continuumAssessmentPlatform.results module', function() {

    beforeEach(module('continuumAssessmentPlatform.results'));

    describe('results controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('ResultsCtrl', {'$scope': scope, '$rootScope': rootScope});
        }));

        it('should be defined', function() {
            expect(controller).toBeDefined();
        });

    });
});