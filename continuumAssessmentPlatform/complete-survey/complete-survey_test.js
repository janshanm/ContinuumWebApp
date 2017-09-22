'use strict';

describe('continuumAssessmentPlatform.complete-survey module', function() {

    beforeEach(module('continuumAssessmentPlatform.complete-survey'));

    describe('Complete Survey controller', function(){

        var controller, q, deferred, location;
        var scope, rootScope;
        var saveSurveySpy;

        beforeEach(inject(function($location, $controller, $rootScope, $q, SurveyService){
            q = $q;
            deferred = $q.defer();
            saveSurveySpy = jasmine.createSpyObj("SurveyService", ['saveSurvey']);
            rootScope = $rootScope;
            scope = rootScope.$new();
            location = $location;
            controller = $controller('CompleteSurveyCtrl', {'$scope': scope, '$rootScope': rootScope, 'SurveyService': saveSurveySpy});
        }));

        it('should be defined', function() {
            expect(controller).toBeDefined();
            expect(scope.selectedBIO).toEqual('');
            expect(scope.selectedPracticeTeam).toEqual('');
            expect(scope.hasSaved).toBeFalsy();
        });

        it('should have defaults as false for the software engineering questions', function(){
            expect(scope.softwareEngineering1).toBeDefined();
            expect(scope.softwareEngineering2).toBeDefined();
            expect(scope.softwareEngineering3).toBeDefined();
            expect(scope.softwareEngineering4).toBeDefined();

            expect(scope.softwareEngineering1).toEqual(3);
            expect(scope.softwareEngineering2).toEqual(3);
            expect(scope.softwareEngineering3).toEqual(3);
            expect(scope.softwareEngineering4).toEqual(3);
        });

        it('should have defaults as false for the agile coaching questions', function(){
            expect(scope.agileCoaching1).toBeDefined();
            expect(scope.agileCoaching2).toBeDefined();
            expect(scope.agileCoaching3).toBeDefined();
            expect(scope.agileCoaching4).toBeDefined();

            expect(scope.agileCoaching1).toEqual(3);
            expect(scope.agileCoaching2).toEqual(3);
            expect(scope.agileCoaching3).toEqual(3);
            expect(scope.agileCoaching4).toEqual(3);
        });

        it('should have defaults as false for the change and release questions', function(){
            expect(scope.changeAndRelease1).toBeDefined();
            expect(scope.changeAndRelease2).toBeDefined();
            expect(scope.changeAndRelease3).toBeDefined();
            expect(scope.changeAndRelease4).toBeDefined();
            expect(scope.changeAndRelease1).toEqual(3);
            expect(scope.changeAndRelease2).toEqual(3);
            expect(scope.changeAndRelease3).toEqual(3);
            expect(scope.changeAndRelease4).toEqual(3);
        });

        it('should have defaults as false for the quality engineering questions', function(){
            expect(scope.qualityEngineering1).toBeDefined();
            expect(scope.qualityEngineering2).toBeDefined();
            expect(scope.qualityEngineering3).toBeDefined();
            expect(scope.qualityEngineering4).toBeDefined();
            expect(scope.qualityEngineering1).toEqual(3);
            expect(scope.qualityEngineering2).toEqual(3);
            expect(scope.qualityEngineering3).toEqual(3);
            expect(scope.qualityEngineering4).toEqual(3);
        });

        it('should have defaults as false for the enterprise architecture questions', function(){
            expect(scope.enterpriseArchitecture1).toBeDefined();
            expect(scope.enterpriseArchitecture2).toBeDefined();
            expect(scope.enterpriseArchitecture3).toBeDefined();
            expect(scope.enterpriseArchitecture4).toBeDefined();
            expect(scope.enterpriseArchitecture1).toEqual(3);
            expect(scope.enterpriseArchitecture2).toEqual(3);
            expect(scope.enterpriseArchitecture3).toEqual(3);
            expect(scope.enterpriseArchitecture4).toEqual(3);
        });

        it('should have defaults as false for the solutions architecture questions', function(){
            expect(scope.solutionsArchitecture1).toBeDefined();
            expect(scope.solutionsArchitecture2).toBeDefined();
            expect(scope.solutionsArchitecture3).toBeDefined();
            expect(scope.solutionsArchitecture4).toBeDefined();
            expect(scope.solutionsArchitecture1).toEqual(3);
            expect(scope.solutionsArchitecture2).toEqual(3);
            expect(scope.solutionsArchitecture3).toEqual(3);
            expect(scope.solutionsArchitecture4).toEqual(3);
        });

        it('should have defaults as false for the data services questions', function(){
            expect(scope.dataServices1).toBeDefined();
            expect(scope.dataServices2).toBeDefined();
            expect(scope.dataServices3).toBeDefined();
            expect(scope.dataServices4).toBeDefined();
            expect(scope.dataServices1).toEqual(3);
            expect(scope.dataServices2).toEqual(3);
            expect(scope.dataServices3).toEqual(3);
            expect(scope.dataServices4).toEqual(3);
        });

        it('should set the default values based on the rootScope if they are present', inject(function($controller){
            rootScope.surveyData = {'BIO': 'BIO Name', 'selectedPracticeTeam': 'Practice Name',
                'softwareEngineering1': '1', 'softwareEngineering2': '3', 'softwareEngineering3': '1', 'softwareEngineering4': '3',
                'agileCoaching1': '1', 'agileCoaching2': '3', 'agileCoaching3': '1', 'agileCoaching4': '3',
                'changeAndRelease1': '1', 'changeAndRelease2': '3', 'changeAndRelease3': '1', 'changeAndRelease4': '3',
                'qualityEngineering1': '1', 'qualityEngineering2': '3', 'qualityEngineering3': '1', 'qualityEngineering4': '3',
                'enterpriseArchitecture1': '1', 'enterpriseArchitecture2': '3', 'enterpriseArchitecture3': '1', 'enterpriseArchitecture4': '3',
                'solutionsArchitecture1': '1', 'solutionsArchitecture2': '3', 'solutionsArchitecture3': '1', 'solutionsArchitecture4': '3',
                'dataServices1': '1', 'dataServices2': '3', 'dataServices3': '1', 'dataServices4': '3'};

            controller = $controller('CompleteSurveyCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.softwareEngineering1).toEqual('1');
            expect(scope.softwareEngineering2).toEqual('3');
            expect(scope.softwareEngineering3).toEqual('1');
            expect(scope.softwareEngineering4).toEqual('3');
            expect(scope.agileCoaching1).toEqual('1');
            expect(scope.agileCoaching2).toEqual('3');
            expect(scope.agileCoaching3).toEqual('1');
            expect(scope.agileCoaching4).toEqual('3');
            expect(scope.changeAndRelease1).toEqual('1');
            expect(scope.changeAndRelease2).toEqual('3');
            expect(scope.changeAndRelease3).toEqual('1');
            expect(scope.changeAndRelease4).toEqual('3');
            expect(scope.qualityEngineering1).toEqual('1');
            expect(scope.qualityEngineering2).toEqual('3');
            expect(scope.qualityEngineering3).toEqual('1');
            expect(scope.qualityEngineering4).toEqual('3');
            expect(scope.enterpriseArchitecture1).toEqual('1');
            expect(scope.enterpriseArchitecture2).toEqual('3');
            expect(scope.enterpriseArchitecture3).toEqual('1');
            expect(scope.enterpriseArchitecture4).toEqual('3');
            expect(scope.solutionsArchitecture1).toEqual('1');
            expect(scope.solutionsArchitecture2).toEqual('3');
            expect(scope.solutionsArchitecture3).toEqual('1');
            expect(scope.solutionsArchitecture4).toEqual('3');
            expect(scope.dataServices1).toEqual('1');
            expect(scope.dataServices2).toEqual('3');
            expect(scope.dataServices3).toEqual('1');
            expect(scope.dataServices4).toEqual('3');
            expect(scope.selectedPracticeTeam).toEqual('Practice Name');
            expect(scope.selectedBIO).toEqual('BIO Name');
            expect(scope.softwareScore).toEqual(8);
            expect(scope.agileCoachingScore).toEqual(8);
            expect(scope.changeAndReleaseScore).toEqual(8);
            expect(scope.qualityEngineeringScore).toEqual(8);
            expect(scope.enterpriseArchitectureScore).toEqual(8);
            expect(scope.solutionsArchitectureScore).toEqual(8);
            expect(scope.dataServicesScore).toEqual(8);
        }));

        it('should set the default values based on the rootScope if there are not applicable values', inject(function($controller){
            rootScope.surveyData = {'BIO': 'BIO Name', 'selectedPracticeTeam': 'Practice Name',
                'softwareEngineering1': 'N/A', 'softwareEngineering2': 'N/A', 'softwareEngineering3': '1', 'softwareEngineering4': '3',
                'agileCoaching1': '1', 'agileCoaching2': '3', 'agileCoaching3': 'N/A', 'agileCoaching4': 'N/A',
                'changeAndRelease1': '1', 'changeAndRelease2': '3', 'changeAndRelease3': '1', 'changeAndRelease4': '3',
                'qualityEngineering1': 'N/A', 'qualityEngineering2': 'N/A', 'qualityEngineering3': 'N/A', 'qualityEngineering4': '3',
                'enterpriseArchitecture1': '1', 'enterpriseArchitecture2': '3', 'enterpriseArchitecture3': '1', 'enterpriseArchitecture4': '3',
                'solutionsArchitecture1': 'N/A', 'solutionsArchitecture2': '3', 'solutionsArchitecture3': '1', 'solutionsArchitecture4': '3',
                'dataServices1': 'N/A', 'dataServices2': 'N/A', 'dataServices3': 'N/A', 'dataServices4': 'N/A'};

            controller = $controller('CompleteSurveyCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.softwareEngineering1).toEqual('N/A');
            expect(scope.softwareEngineering2).toEqual('N/A');
            expect(scope.softwareEngineering3).toEqual('1');
            expect(scope.softwareEngineering4).toEqual('3');
            expect(scope.softwareDenominator).toEqual(2);
            expect(scope.agileCoaching1).toEqual('1');
            expect(scope.agileCoaching2).toEqual('3');
            expect(scope.agileCoaching3).toEqual('N/A');
            expect(scope.agileCoaching4).toEqual('N/A');
            expect(scope.agileCoachingDenominator).toEqual(2);
            expect(scope.changeAndRelease1).toEqual('1');
            expect(scope.changeAndRelease2).toEqual('3');
            expect(scope.changeAndRelease3).toEqual('1');
            expect(scope.changeAndRelease4).toEqual('3');
            expect(scope.changeAndReleaseDenominator).toEqual(4);
            expect(scope.qualityEngineering1).toEqual('N/A');
            expect(scope.qualityEngineering2).toEqual('N/A');
            expect(scope.qualityEngineering3).toEqual('N/A');
            expect(scope.qualityEngineering4).toEqual('3');
            expect(scope.qualityEngineeringDenominator).toEqual(1);
            expect(scope.enterpriseArchitecture1).toEqual('1');
            expect(scope.enterpriseArchitecture2).toEqual('3');
            expect(scope.enterpriseArchitecture3).toEqual('1');
            expect(scope.enterpriseArchitecture4).toEqual('3');
            expect(scope.enterpriseArchitectureDenominator).toEqual(4);
            expect(scope.solutionsArchitecture1).toEqual('N/A');
            expect(scope.solutionsArchitecture2).toEqual('3');
            expect(scope.solutionsArchitecture3).toEqual('1');
            expect(scope.solutionsArchitecture4).toEqual('3');
            expect(scope.solutionsArchitectureDenominator).toEqual(3);
            expect(scope.dataServices1).toEqual('N/A');
            expect(scope.dataServices2).toEqual('N/A');
            expect(scope.dataServices3).toEqual('N/A');
            expect(scope.dataServices4).toEqual('N/A');
            expect(scope.dataServicesDenominator).toEqual(0);
            expect(scope.selectedPracticeTeam).toEqual('Practice Name');
            expect(scope.selectedBIO).toEqual('BIO Name');
            expect(scope.softwareScore).toEqual(4);
            expect(scope.agileCoachingScore).toEqual(4);
            expect(scope.changeAndReleaseScore).toEqual(8);
            expect(scope.qualityEngineeringScore).toEqual(3);
            expect(scope.enterpriseArchitectureScore).toEqual(8);
            expect(scope.solutionsArchitectureScore).toEqual(7);
            expect(scope.dataServicesScore).toEqual(0);
        }));

        describe('#saveSurveyResults', function () {
            it('should call the save survey results with the formatted data when practice selected', function(){
                scope.selectedBIO = 'BIO Name';
                rootScope.surveyData = {};
                scope.softwareScore = 4;
                scope.agileCoachingScore = 8;
                scope.changeAndReleaseScore = 12;
                scope.qualityEngineeringScore = 4;
                scope.enterpriseArchitectureScore = 8;
                scope.solutionsArchitectureScore = 4;
                scope.dataServicesScore = 8;

                scope.softwareDenominator = 4;
                scope.agileCoachingDenominator = 4;
                scope.changeAndReleaseDenominator = 4;
                scope.qualityEngineeringDenominator = 4;
                scope.enterpriseArchitectureDenominator = 4;
                scope.solutionsArchitectureDenominator = 4;
                scope.dataServicesDenominator = 4;

                scope.selectedPracticeTeam = 'Practice Name';

                var formattedData = {'BIO': 'BIO Name', 'rawData': {}, 'softwareScore': 1, 'agileCoachingScore': 2,
                'changeAndReleaseScore': 3, 'qualityEngineeringScore': 1, 'enterpriseArchitectureScore': 2,
                'solutionsArchitectureScore': 1, 'dataServicesScore': 2, 'selectedPracticeTeam': 'Practice Name'};

                deferred.resolve({'status': 200, 'data': 'Saved Successfully'});
                saveSurveySpy.saveSurvey.and.returnValue(deferred.promise);

                scope.$apply();

                scope.saveSurveyResults();

                expect(saveSurveySpy.saveSurvey).toHaveBeenCalledWith(formattedData);
            });

            it('should call the save survey results and go to complete survey page', inject(function($location){
                scope.selectedBIO = 'BIO Name';
                rootScope.surveyData = {};
                scope.softwareScore = 4;
                scope.agileCoachingScore = 8;
                scope.changeAndReleaseScore = 12;
                scope.qualityEngineeringScore = 4;
                scope.enterpriseArchitectureScore = 8;
                scope.solutionsArchitectureScore = 4;
                scope.dataServicesScore = 8;
                scope.selectedPracticeTeam = 'Practice Name';

                deferred.resolve({'status': 200, 'data': 'Saved Successfully'});
                saveSurveySpy.saveSurvey.and.returnValue(deferred.promise);

                scope.saveSurveyResults();
                scope.$apply();

                expect(scope.hasSaved).toBeTruthy();
                expect(rootScope.surveyData).toBeUndefined();
                expect(rootScope.successMessage).toEqual('Saved Successfully');
                expect(location.path()).toEqual('/complete-survey');
            }));

            it('should call the save survey results with the formatted data when practice not selected', function(){
                scope.selectedBIO = 'BIO Name';
                rootScope.surveyData = {};
                scope.softwareScore = 4;
                scope.agileCoachingScore = 8;
                scope.changeAndReleaseScore = 12;
                scope.qualityEngineeringScore = 4;
                scope.enterpriseArchitectureScore = 8;
                scope.solutionsArchitectureScore = 4;
                scope.dataServicesScore = 8;

                scope.softwareDenominator = 4;
                scope.agileCoachingDenominator = 4;
                scope.changeAndReleaseDenominator = 4;
                scope.qualityEngineeringDenominator = 4;
                scope.enterpriseArchitectureDenominator = 4;
                scope.solutionsArchitectureDenominator = 4;
                scope.dataServicesDenominator = 4;

                scope.selectedPracticeTeam = '';

                var formattedData = {'BIO': 'BIO Name', 'rawData': {}, 'softwareScore': 1, 'agileCoachingScore': 2,
                    'changeAndReleaseScore': 3, 'qualityEngineeringScore': 1, 'enterpriseArchitectureScore': 2,
                    'solutionsArchitectureScore': 1, 'dataServicesScore': 2};

                deferred.resolve({'status': 200, 'data': 'Saved Successfully'});
                saveSurveySpy.saveSurvey.and.returnValue(deferred.promise);

                scope.saveSurveyResults();
                scope.$apply();

                expect(saveSurveySpy.saveSurvey).toHaveBeenCalledWith(formattedData);
            });


            it('should call the save survey results with the formatted data when practice not selected and the denominators are zero', function(){
                scope.selectedBIO = 'BIO Name';
                rootScope.surveyData = {};
                scope.softwareScore = 4;
                scope.agileCoachingScore = 8;
                scope.changeAndReleaseScore = 12;
                scope.qualityEngineeringScore = 4;
                scope.enterpriseArchitectureScore = 8;
                scope.solutionsArchitectureScore = 4;
                scope.dataServicesScore = 8;

                scope.softwareDenominator = 0;
                scope.agileCoachingDenominator = 0;
                scope.changeAndReleaseDenominator = 0;
                scope.qualityEngineeringDenominator = 0;
                scope.enterpriseArchitectureDenominator = 0;
                scope.solutionsArchitectureDenominator = 0;
                scope.dataServicesDenominator = 0;

                scope.selectedPracticeTeam = '';

                var formattedData = {'BIO': 'BIO Name', 'rawData': {}, 'softwareScore': 0, 'agileCoachingScore': 0,
                    'changeAndReleaseScore': 0, 'qualityEngineeringScore': 0, 'enterpriseArchitectureScore': 0,
                    'solutionsArchitectureScore': 0, 'dataServicesScore': 0};

                deferred.resolve({'status': 200, 'data': 'Saved Successfully'});
                saveSurveySpy.saveSurvey.and.returnValue(deferred.promise);

                scope.saveSurveyResults();
                scope.$apply();

                expect(saveSurveySpy.saveSurvey).toHaveBeenCalledWith(formattedData);
            });
        });

        describe('complete survey services', function(){
            var surveyService, $httpBackend;
            var teamName = 'Team 1';

            beforeEach(inject(function($injector) {
                surveyService = $injector.get('SurveyService');
                $httpBackend = $injector.get('$httpBackend');

                $httpBackend.when('POST', "http://localhost:8081/saveSurvey").respond("Successfully Retrieved");
            }));

            afterEach(function() {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            });

            it('should respond successfully when the service is called', function(){
                var expectedResponse = "Successfully Retrieved";

                surveyService.saveSurvey(teamName).then(function(response){
                    expect(response.data).toEqual(expectedResponse);
                });
                $httpBackend.flush();
            });
        });

    });
});