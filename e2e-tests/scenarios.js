'use strict';

describe('continuum assessment platform', function() {

    // beforeEach(function () {
    //     browser.addMockModule('httpBackendMock',
    //         function() {
    //             angular.module('httpBackendMock',
    //                 ['continuumAssessmentPlatform', 'ngMockE2E'])
    //                 .run(function ($httpBackend) {
    //                     $httpBackend.whenGET('/\/assessment\//').respond(200, {});
    //                     $httpBackend.whenGET(/.*/).passThrough();
    //                 });
    //         });
    // });

    it('should automatically redirect to /strategy when location hash/fragment is empty', function() {
    browser.get('continuumAssessmentPlatform');
    expect(browser.getLocationAbsUrl()).toMatch("/home");
    });

    describe('Complete Flow', function(){
        beforeEach(function() {
            browser.get('continuumAssessmentPlatform');
        });

        // it('should go through a positive flow successfully', function(){
        //     element(by.css('option[value="PBB"]')).click();
        //     element(by.css('option[value="USSD"]')).click();
        //     element(by.id('assessTeamLink')).click();
        //
        //     expect(browser.getLocationAbsUrl()).toMatch("/strategy");
        //
        //     element(by.id('strategyArtisan1')).click();
        //     element(by.id('strategyArtisan2')).click();
        //     element(by.id('strategyArtisan3')).click();
        //
        //     element(by.id('nextButtonStrategy')).click();
        //     expect(browser.getLocationAbsUrl()).toMatch("/planning");
        //
        //     element(by.id('planningTraveller1')).click();
        //     element(by.id('planningTraveller2')).click();
        //     element(by.id('planningTraveller3')).click();
        //     element(by.id('planningTraveller4')).click();
        //     element(by.id('planningTraveller5')).click();
        //
        //     element(by.id('nextButtonPlanning')).click();
        //     expect(browser.getLocationAbsUrl()).toMatch("/coding");
        //
        //     element(by.id('codingArtisan1')).click();
        //     element(by.id('codingArtisan2')).click();
        //     element(by.id('codingExpert1')).click();
        //     element(by.id('codingExpert2')).click();
        //     element(by.id('codingExpert3')).click();
        //     element(by.id('codingExpert4')).click();
        //     element(by.id('codingProfessional1')).click();
        //     element(by.id('codingProfessional2')).click();
        //     element(by.id('codingProfessional3')).click();
        //     element(by.id('codingProfessional4')).click();
        //
        //     element(by.id('nextButtonCoding')).click();
        //     expect(browser.getLocationAbsUrl()).toMatch("/ci");
        //
        //     element(by.id('ciTraveller1')).click();
        //     element(by.id('ciTraveller2')).click();
        //     element(by.id('ciTraveller3')).click();
        //     element(by.id('ciTraveller4')).click();
        //     element(by.id('ciTraveller5')).click();
        //     element(by.id('ciTraveller6')).click();
        //
        //     element(by.id('nextButtonCi')).click();
        //     expect(browser.getLocationAbsUrl()).toMatch("/incident");
        //
        //     element(by.id('incidentArtisan1')).click();
        //     element(by.id('incidentArtisan2')).click();
        //     element(by.id('incidentArtisan3')).click();
        //     element(by.id('incidentExpert1')).click();
        //     element(by.id('incidentExpert2')).click();
        //     element(by.id('incidentExpert3')).click();
        //     element(by.id('incidentExpert4')).click();
        //     element(by.id('incidentExpert5')).click();
        //     element(by.id('incidentExpert6')).click();
        //
        //     element(by.id('nextButtonIncident')).click();
        //     expect(browser.getLocationAbsUrl()).toMatch("/risk");
        //
        //     element(by.id('riskArtisan1')).click();
        //     element(by.id('riskArtisan2')).click();
        //     element(by.id('riskArtisan3')).click();
        //
        //     element(by.id('nextButtonRisk')).click();
        //     expect(browser.getLocationAbsUrl()).toMatch("/design");
        //
        //     element(by.id('designTraveller1')).click();
        //     element(by.id('designTraveller2')).click();
        //     element(by.id('designTraveller3')).click();
        //
        //     element(by.id('nextButtonDesign')).click();
        //     expect(browser.getLocationAbsUrl()).toMatch("/teaming");
        //
        //     element(by.id('teamingTraveller1')).click();
        //     element(by.id('teamingArtisan1')).click();
        //     element(by.id('teamingArtisan2')).click();
        //     element(by.id('teamingArtisan3')).click();
        //
        //     element(by.id('nextButtonTeaming')).click();
        //     expect(browser.getLocationAbsUrl()).toMatch("/release");
        //
        //     element(by.id('releaseTraveller1')).click();
        //     element(by.id('releaseTraveller2')).click();
        //     element(by.id('releaseTraveller3')).click();
        //     element(by.id('releaseTraveller4')).click();
        //
        //     element(by.id('nextButtonRelease')).click();
        //     expect(browser.getLocationAbsUrl()).toMatch("/quality");
        //
        //     element(by.id('qualityTraveller1')).click();
        //     element(by.id('qualityTraveller2')).click();
        //     element(by.id('qualityTraveller3')).click();
        //     element(by.id('qualityTraveller4')).click();
        //     element(by.id('qualityTraveller5')).click();
        //     element(by.id('qualityTraveller6')).click();
        //
        //     element(by.id('nextButtonQuality')).click();
        //     expect(browser.getLocationAbsUrl()).toMatch("/environments");
        //
        //     element(by.id('environmentsTraveller1')).click();
        //     element(by.id('environmentsTraveller2')).click();
        //     element(by.id('environmentsTraveller3')).click();
        //     element(by.id('environmentsTraveller4')).click();
        //     element(by.id('environmentsTraveller5')).click();
        //     element(by.id('environmentsTraveller6')).click();
        //     element(by.id('environmentsTraveller7')).click();
        //
        //     element(by.id('nextButtonEnvironments')).click();
        //     expect(browser.getLocationAbsUrl()).toMatch("/featureteams");
        //
        //     element(by.id('featureTeamsTraveller1')).click();
        //     element(by.id('featureTeamsTraveller2')).click();
        //     element(by.id('featureTeamsTraveller3')).click();
        //     element(by.id('featureTeamsTraveller4')).click();
        //
        //     element(by.id('nextButtonFeatureTeams')).click();
        //
        //     expect(browser.getLocationAbsUrl()).toMatch("/results");
        //     expect(element.all(by.css('[ng-view] p')).first().getText()).
        //         toMatch(/Please find assessment results. For any dimension not aligned please select on the menu and review./);
        //
        //     var titleForChart = 'Assessment Results for USSD for Portfolio: Personal and Business Banking';
        //     var labelForChart = 'TEAM: USSD for Portfolio: Personal and Business Banking';
        //     element(by.xpath("//*[contains(., '" + titleForChart + "')]"));
        //     element(by.xpath("//*[contains(., '" + labelForChart + "')]"));
        //
        //
        // });
    });

    describe('Welcome Page', function(){
        beforeEach(function() {
            browser.get('continuumAssessmentPlatform/');
        });

        it('should be on the welcome page', function(){
            expect(browser.getLocationAbsUrl()).toMatch("/home");
        });

        it('should be on the team selection page when the take assessment button is clicked', function(){
            element(by.id('takeAssessment')).click();
            expect(browser.getLocationAbsUrl()).toMatch("/select-team");
        });

        it('should be on the previous assessments page when the previous assessment button is clicked', function(){
            element(by.id('viewPreviousAssessments')).click();
            expect(browser.getLocationAbsUrl()).toMatch("/previous-assessments");
        });

    });

    describe('Select Team Page', function(){
        beforeEach(function() {
            browser.get('continuumAssessmentPlatform/#!/select-team');
        });

        it('should have error on the page if Assess is clicked without selecting a team', function(){
            element(by.id('assessTeamLink')).click();
            expect(browser.getLocationAbsUrl()).toMatch("/select-team");
            expect(element(by.id('teamError')).isDisplayed()).toBeTruthy();
        });

        // it('should go to strategy page when a team is selected', function(){
        //     element(by.cssContainingText('option', 'ATM')).click();
        //     element(by.id('assessTeamLink')).click();
        //     expect(browser.getLocationAbsUrl()).toMatch("/strategy");
        // });
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
            toMatch(/Please find assessment results. For any dimension not aligned please select on the menu and review./);
        });

    });
});
