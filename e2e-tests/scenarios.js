'use strict';

describe('continuum assessment platform', function() {

    it('should automatically redirect to /strategy when location hash/fragment is empty', function() {
    browser.get('continuumAssessmentPlatform');
    expect(browser.getLocationAbsUrl()).toMatch("/select-team");
    });

    describe('Complete Flow', function(){
        beforeEach(function() {
            browser.get('continuumAssessmentPlatform');
        });

        it('should go through a positive flow successfully', function(){
            element(by.css('option[value="PBB"]')).click();
            element(by.css('option[value="USSD"]')).click();
            browser.sleep(3000);
            element(by.id('assessTeamLink')).click();

            expect(browser.getLocationAbsUrl()).toMatch("/strategy");

            element(by.id('strategyArtisan1')).click();
            element(by.id('strategyArtisan2')).click();
            element(by.id('strategyArtisan3')).click();
            browser.sleep(3000);

            element(by.id('nextButtonStrategy')).click();
            expect(browser.getLocationAbsUrl()).toMatch("/planning");

            element(by.id('planningTraveller1')).click();
            element(by.id('planningTraveller2')).click();
            element(by.id('planningTraveller3')).click();
            element(by.id('planningTraveller4')).click();
            element(by.id('planningTraveller5')).click();
            browser.sleep(3000);

            element(by.id('nextButtonPlanning')).click();
            expect(browser.getLocationAbsUrl()).toMatch("/coding");

        });
    });

    describe('Select Team Page', function(){
        beforeEach(function() {
            browser.get('continuumAssessmentPlatform');
        });

        it('should have error on the page if Assess is clicked without selecting a team', function(){
            element(by.id('assessTeamLink')).click();
            expect(browser.getLocationAbsUrl()).toMatch("/select-team");
            expect(element(by.id('teamError')).isDisplayed()).toBeTruthy();
        });

        it('should go to strategy page when a team is selected', function(){
            element(by.cssContainingText('option', 'ATM')).click();
            element(by.id('assessTeamLink')).click();
            expect(browser.getLocationAbsUrl()).toMatch("/strategy");
        });
    });


    describe('strategy', function() {

        beforeEach(function() {
          browser.get('continuumAssessmentPlatform/#!/strategy');
        });


        it('should render strategy when user navigates to /strategy', function() {
          expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/Strategy Alignment: Please select all the check boxes applicable to your team./);
        });

    });


    describe('planning', function() {

        beforeEach(function() {
          browser.get('continuumAssessmentPlatform/#!/planning');
        });


        it('should render planning when user navigates to /planning', function() {
          expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/Planning and Requirements: Please select all the check boxes applicable to your team./);
        });

    });

    describe('coding', function() {

        beforeEach(function() {
            browser.get('continuumAssessmentPlatform/#!/coding');
        });


        it('should render coding when user navigates to /coding', function() {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/Coding Practices: Please select all the check boxes applicable to your team./);
        });

    });

    describe('ci', function() {

        beforeEach(function() {
            browser.get('continuumAssessmentPlatform/#!/ci');
        });


        it('should render CI when user navigates to /CI', function() {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/Continuous Integration: Please select all the check boxes applicable to your team./);
        });

    });

    describe('incident', function() {

        beforeEach(function() {
            browser.get('continuumAssessmentPlatform/#!/incident');
        });


        it('should render incident when user navigates to /incident', function() {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/Incident Management: Please select all the check boxes applicable to your team./);
        });

    });

    describe('risk', function() {

        beforeEach(function() {
            browser.get('continuumAssessmentPlatform/#!/risk');
        });


        it('should render risk when user navigates to /risk', function() {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/Risk and Issue Management: Please select all the check boxes applicable to your team./);
        });

    });

    describe('design', function() {

        beforeEach(function() {
            browser.get('continuumAssessmentPlatform/#!/design');
        });


        it('should render design when user navigates to /design', function() {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/Software Design: Please select all the check boxes applicable to your team./);
        });

    });

    describe('teaming', function() {

        beforeEach(function() {
            browser.get('continuumAssessmentPlatform/#!/teaming');
        });


        it('should render teaming when user navigates to /teaming', function() {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/Teaming: Please select all the check boxes applicable to your team./);
        });

    });

    describe('release', function() {

        beforeEach(function() {
            browser.get('continuumAssessmentPlatform/#!/release');
        });


        it('should render release when user navigates to /release', function() {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/Release Management: Please select all the check boxes applicable to your team./);
        });

    });

    describe('quality', function() {

        beforeEach(function() {
            browser.get('continuumAssessmentPlatform/#!/quality');
        });


        it('should render quality when user navigates to /quality', function() {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/Quality Assurance: Please select all the check boxes applicable to your team./);
        });

    });

    describe('environments', function() {

        beforeEach(function() {
            browser.get('continuumAssessmentPlatform/#!/environments');
        });


        it('should render environments when user navigates to /environments', function() {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/Environments: Please select all the check boxes applicable to your team./);
        });

    });

    describe('featureteams', function() {

        beforeEach(function() {
            browser.get('continuumAssessmentPlatform/#!/featureteams');
        });


        it('should render featureteams when user navigates to /featureteams', function() {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/Feature Teams: Please select all the check boxes applicable to your team./);
        });

    });

    describe('review', function() {

        beforeEach(function() {
            browser.get('continuumAssessmentPlatform/#!/review');
        });


        it('should render review when user navigates to /review', function() {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/Please Review The Information Selected Below. For any section with incorrect information select the section on the menu to review./);
        });

    });

    describe('results', function() {

        beforeEach(function() {
            browser.get('continuumAssessmentPlatform/#!/results');
        });


        it('should render results when user navigates to /results', function() {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/Please find assessment results. The Tasks to move to the next Continuum Levels have been specified./);
        });

    });
});
