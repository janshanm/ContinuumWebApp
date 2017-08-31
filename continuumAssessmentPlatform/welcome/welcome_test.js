'use strict';

describe('continuumAssessmentPlatform.welcome module', function() {

    beforeEach(module('continuumAssessmentPlatform.welcome'));

    describe('welcome controller', function () {

        var controller;
        var scope, rootScope;

        beforeEach(inject(function ($controller, $rootScope) {
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('WelcomeCtrl', {'$scope': scope});
        }));

        it('should be defined', function () {
            expect(controller).toBeDefined();
        });
    });
});