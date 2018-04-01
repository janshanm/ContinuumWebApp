'use strict';

angular.module('continuumAssessmentPlatform.resultsqa', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/resultsqa', {
            templateUrl: 'resultsqa/resultsqa.html',
            controller: 'ResultsQACtrl'
        });
    }])

    .controller('ResultsQACtrl', ['$scope', '$rootScope', 'SaveQAResults', 'RetrieveQAAssessment', '$location', function($scope, $rootScope, SaveQAResults, RetrieveQAAssessment, $location) {

        $scope.standardsScore = 1;
        $scope.metricsScore = 1;
        $scope.integrationScore = 1;
        $scope.stakeholderScore = 1;
        $scope.teamManagementScore = 1;
        $scope.documentationScore = 1;
        $scope.assessmentProcessScore = 1;
        $scope.researchScore = 1;
        $scope.involvementScore = 1;
        $scope.repositoryScore = 1;
        $scope.executionScore = 1;
        $scope.processScore = 1;
        $scope.resultsData = {};
        $scope.bodyData = {};
        $scope.selectedTab = 1;

        $scope.init = function () {
            $scope.selectedTab = 1;
            $scope.isSaved = false;
            $scope.isNotSaved = false;

            var parameters = $location.search();
            var teamName = parameters.teamName;

            if(teamName !== undefined){
                RetrieveQAAssessment.getAssessment(teamName).then(function(response){
                    var data = response.data;
                    $rootScope.teamName = data['teamName'];
                    var assessments = data['rawData'] !== undefined ? JSON.parse(data['rawData']) : {};
                    $scope.generateResultsChart(assessments);
                });
            }
            else{
                $scope.generateResultsChart($rootScope.assessments);
            }

        };

        $scope.generateResultsChart = function(assessments) {
            if(typeof assessments !== "undefined") {
                $scope.standardsScore = assessments['standards'] !== undefined ? assessments['standards'].score : 1;
                $scope.metricsScore = assessments['metrics'] !== undefined ? assessments['metrics'].score : 1;
                $scope.integrationScore = assessments['integration'] !== undefined ? assessments['integration'].score : 1;
                $scope.stakeholderScore = assessments['stakeholder-management'] !== undefined ? assessments['stakeholder-management'].score : 1;
                $scope.teamManagementScore = assessments['team-management'] !== undefined ? assessments['team-management'].score : 1;
                $scope.documentationScore = assessments['documentation'] !== undefined ? assessments['documentation'].score : 1;
                $scope.assessmentProcessScore = assessments['assessment-process'] !== undefined ? assessments['assessment-process'].score : 1;
                $scope.researchScore = assessments['research'] !== undefined ? assessments['research'].score : 1;
                $scope.involvementScore = assessments['involvement'] !== undefined ? assessments['involvement'].score : 1;
                $scope.repositoryScore = assessments['repository'] !== undefined ? assessments['repository'].score : 1;
                $scope.executionScore = assessments['execution'] !== undefined ? assessments['execution'].score : 1;
                $scope.processScore = assessments['process'] !== undefined ? assessments['process'].score : 1;
            }

            $scope.resultsData['teamName'] = $rootScope.teamName;
            $scope.resultsData['standards'] = $scope.standardsScore;
            $scope.resultsData['metrics'] = $scope.metricsScore;
            $scope.resultsData['integration'] = $scope.integrationScore;
            $scope.resultsData['stakeholder-management'] = $scope.stakeholderScore;
            $scope.resultsData['team-management'] = $scope.teamManagementScore;
            $scope.resultsData['documentation'] = $scope.documentationScore;
            $scope.resultsData['assessment-process'] = $scope.assessmentProcessScore;
            $scope.resultsData['research'] = $scope.researchScore;
            $scope.resultsData['involvement'] = $scope.involvementScore;
            $scope.resultsData['repository'] = $scope.repositoryScore;
            $scope.resultsData['execution'] = $scope.executionScore;
            $scope.resultsData['process'] = $scope.processScore;
            $scope.resultsData['portfolioName'] = $rootScope.selectedPortfolioName;
            $scope.resultsData['rawData'] = $rootScope.assessmentsQa;

            $scope.standards = formatResultsForStandards($rootScope.assessmentsQa, $scope.standardsScore);
            $scope.metrics = formatResultsForMetrics($rootScope.assessmentsQa, $scope.metricsScore);
            $scope.integration = formatResultsForIntegration($rootScope.assessmentsQa, $scope.integrationScore);
            $scope.stakeholderManagement = formatResultsForStakeholderManagement($rootScope.assessmentsQa, $scope.stakeholderScore);
            $scope.teamManagement = formatResultsForTeamManagement($rootScope.assessmentsQa, $scope.teamManagementScore);
            $scope.documentation = formatResultsForDocumentation($rootScope.assessmentsQa, $scope.documentationScore);
            $scope.assessmentProcess = formatResultsForAssessmentProcess($rootScope.assessmentsQa, $scope.assessmentProcessScore);
            $scope.research = formatResultsForResearch($rootScope.assessmentsQa, $scope.researchScore);
            $scope.involvement = formatResultsForInvolvement($rootScope.assessmentsQa, $scope.involvementScore);
            $scope.repository = formatResultsForRepository($rootScope.assessmentsQa, $scope.repositoryScore);
            $scope.execution = formatResultsForExecution($rootScope.assessmentsQa, $scope.executionScore);
            $scope.process = formatResultsForProcess($rootScope.assessmentsQa, $scope.processScore);

            $scope.bodyData['recommendedCapabilities'] = $scope.getRecommendedCapabilities('tasks');
            $scope.bodyData['capabilitiesToStop'] = $scope.getRecommendedCapabilities('undoTasks');

            var totalScore = ($scope.standardsScore + $scope.metricsScore + $scope.integrationScore + $scope.stakeholderScore
            + $scope.teamManagementScore + $scope.documentationScore + $scope.assessmentProcessScore + $scope.researchScore
            + $scope.involvementScore + $scope.repositoryScore + $scope.executionScore + $scope.processScore);

            $scope.teamScore = Math.floor(totalScore/12);

            SaveQAResults.drawChart($rootScope.teamName, $scope.standardsScore, $scope.metricsScore, $scope.integrationScore, $scope.stakeholderScore,
                $scope.teamManagementScore, $scope.documentationScore, $scope.assessmentProcessScore, $scope.researchScore,
                $scope.involvementScore, $scope.repositoryScore, $scope.executionScore, $scope.processScore, $rootScope.selectedPortfolioName);

        };

        $scope.getRecommendedCapabilities = function (typeOfTask) {
            var tasks = {};
            tasks['standards'] = $scope.standards[typeOfTask];
            tasks['metrics'] = $scope.metrics[typeOfTask];
            tasks['integration'] = $scope.integration[typeOfTask];
            tasks['stakeholder-management'] = $scope.stakeholderManagement[typeOfTask];
            tasks['team-management'] = $scope.teamManagement[typeOfTask];
            tasks['documentation'] = $scope.documentation[typeOfTask];
            tasks['assessment-process'] = $scope.assessmentProcess[typeOfTask];
            tasks['research'] = $scope.research[typeOfTask];
            tasks['involvement'] = $scope.involvement[typeOfTask];
            tasks['repository'] = $scope.repository[typeOfTask];
            tasks['execution'] = $scope.execution[typeOfTask];
            tasks['process'] = $scope.process[typeOfTask];

            return tasks;
        };

        $scope.getImage = function(score){
            if(score === 1){
                return 'images/traveller_female.png';
            }
            else if (score === 2) {
                return 'images/artisan_female.png';
            }
            else if (score === 3) {
                return 'images/expert_female.png';
            }
            else if (score === 4) {
                return 'images/professional_female.png';
            }
            else if (score === 5) {
                return 'images/master_female.png';
            }
            else
            {
                return 'images/traveller_male.png';
            }
        };

        var limitToFive = function(value){
            return value > 5 ? 5 : value;
        };

        var standardTasks = {'traveller1': 'Traditional automation is used with no specific structure',
            'traveller2': 'No Indentation, No Comments',
            'traveller3': 'No naming convention for variables, functions, etc',
            'traveller4': 'Data is hard coded',
            'traveller5': 'Same code block is copied across if used again',
            'traveller6': 'Script crashes on non-happy paths',
            'artisan1': 'Structured traditional automation with some module/functions re-use',
            'artisan2': 'Indentation is there for some loops (e.g. If…Then...Else)',
            'artisan3': 'Use of alignments (left margin), proper white space',
            'artisan4': 'Some variables are declared before use',
            'artisan5': 'Use of short variable names',
            'artisan6': 'Scenario data is stored separately to test scripts',
            'artisan7': 'Attempt to use functions an/or subroutines',
            'expert1': 'Basic framework with structured modules',
            'expert2': 'Functions/Modules categorised in different libraries',
            'expert3': 'Indentation is there for all loops',
            'expert4': 'Code block starting point and ending point are easily identifiable',
            'expert5': 'Comments written for some code blocks',
            'expert6': 'All variables are declared and initialised before use',
            'expert7': 'The team proactively improves the automation scripts',
            'expert8': 'Test Automation script is under version management',
            'expert9': 'Functions used with parameter passing to maximize re-use',
            'expert10': 'Same code block is not repeated more than once',
            'expert11': 'All variables are cleaned-up after use',
            'expert12': 'Error Handling mechanisms in place to cater for exceptions',
            'professional1': 'Heavy functions/modules re-use',
            'professional2': 'New scenarios can be created without any framework script changes ',
            'professional3': 'Data driven framework',
            'professional4': 'All variables and functions created have standard naming conventions and are consistent',
            'professional5': 'All functions/modules have header with minimum information that explains what the function does, creation date, author, parameters used',
            'professional6': 'Code is regularly refactored as part of the iteration',
            'professional7': 'Team checks code into version management system on a daily basis',
            'professional8': 'Support is provided to log the flow of control',
            'professional9': 'Existing Automation scripts can be changed/amended and tested in less than 8 hours',
            'professional10': 'Script/Framework can recover from highest severity application defects, reports them and continues execution',
            'master1': 'Framework is upgraded regularly (at least twice per year) to cater for new challenges and harness platform features',
            'master2': 'Framework has robust script standards built-in',
            'master3': 'Framework is tool independent and can be replicated onto other test automation tool(s)',
            'master4': 'Code fits in the standard 14 inch laptop screen. There is no need to scroll horizontally to view the code.',
            'master5': 'No commented codes are present in live code.',
            'master6': 'Comments on why codes are written that way, not what the code is doing only.',
            'master7': 'Standards are regularly reviewed and updated.',
            'master8': 'Support is provided to "watch" parameter data and exception details to find the root cause easily.',
            'master9': 'Script/Framework is robust and runs unattended until complete.'
        };

        var metricsTasks = {
            'traveller1': 'Default reporting by automation tool on individual machines',
            'traveller2': 'No Metrics are being generated',
            'artisan1': 'Test automation execution results are manually consolidated and uploaded to access controlled central location',
            'artisan2': 'Metrics are defined and agreed upon',
            'artisan3': 'Metrics consolidation = 100% Manual',
            'artisan4': 'Practice of basic automated test coverage measurement (Test runs, Pass and fail rate) ',
            'artisan5': 'Metrics are created reactively to requests',
            'artisan6': 'Method/platform to get ROI metrics is set up',
            'expert1': 'Execution results are customized and uploaded to test management tool',
            'expert2': 'Metrics are defined and shared but not necessarily reviewed and acted on.',
            'expert3': 'Some aspects of the reports are generated automatically',
            'expert4': 'Automation vs manual test coverage reports are catered for ',
            'expert5': 'Automated test coverage greater than 50%',
            'expert6': 'Automated test coverage is measured and reported',
            'expert7': 'All metrics and reporting are published after every release',
            'expert8': 'ROI reported on upon request',
            'professional1': 'Execution results are fed into test management tool automatically with the aim to standardize metrics',
            'professional2': 'Metrics are regularly (at least once a month) discussed and reviewed with stakeholders in a retrospective session',
            'professional3': 'Action Items are identified on how to increase productivity and coverage',
            'professional4': 'Automated test coverage greater than 90%',
            'professional5': 'ROI shared and discussed with stakeholders regularly',
            'master1': 'Team has access to test automation real-time metrics regularly published and updated automatically on a template dashboard (ideally through BI tool)',
            'master2': 'Sufficient metrics is enabling trending and forecasting',
            'master3': 'Automated test coverage tracked for trends and improvements made on a continuous basis',
            'master4': 'Real-time metrics is automatically updated daily',
            'master5': 'ROI is forecasted with accuracy based on experience and trending data',
            'master6': 'Decisions are made proactively based on forecast'
        };

        var integrationTasks = {
            'traveller1': 'There is no tool integration whatsoever',
            'traveller2': 'No CI server installed',
            'artisan1': 'Tools integration is investigated and lightly documented as part of Automation architecture',
            'artisan2': 'Functional testing is partially automated',
            'artisan3': 'Code coverage greater than 0%',
            'expert1': 'Test Automation tool talks to at least one additional (external) tool',
            'expert2': 'Code coverage greater than 50%',
            'professional1': 'Automation Tool(s) is/are talking to test management tool, task management tool, defect management tool, reporting tool, code repository, scheduler',
            'professional2': 'Non-functional testing is automated',
            'professional3': 'Functional testing is 100% automated',
            'master1': 'Full toolset integration that enables automated metrics generation, updating of testware statuses, auto-scheduled executions, etc'};

        var stakeholderManagementTasks = {
            'traveller1': 'HLE accuracy far out of estimate bound (Above 50% off set)',
            'traveller2': 'Feedback session happens only during crisis situations',
            'traveller3': 'Stakeholders are involved after automation planning is done.',
            'artisan1': 'Project stakeholders are provided with more accurate HLE (accuracy above 90%).',
            'artisan2': 'Feedback amongst all Project stakeholders happens at the beginning and end of project lifecycle',
            'expert1': 'Fortnigthly automation feedback to Project Stakeholders.',
            'expert2': 'Monthly Showcase to Enabling Stakeholders.',
            'expert3': 'Have the Project stakeholders involved in all discussions and planning.',
            'professional1': 'Anticipating, Adapting and resolving issues through discussion',
            'professional2': 'Feedback amongst all Project stakeholders.',
            'professional3': 'Project Stakeholders have full ownership of the project.',
            'professional4': 'No Blame game.',
            'master1': 'Engendering Safety and Stakeholder Confidence',
            'master2': 'Know how your Enabling Stakeholders are and have a clear line of communication established'};

        var teamManagementTasks = {
            'traveller1': 'Once-off informal in-house trainings conducted',
            'traveller2': 'Handover is informal and not documented',
            'traveller3': 'Email is the primary method of communication.',
            'traveller4': 'Seldom face-to-face interactions between team members',
            'artisan1': 'Training requirement is identified regularly',
            'artisan2': 'Consistent training process for new team members is in place',
            'artisan3': 'Handover is documented and available but not maintained',
            'artisan4': 'Formal meetings required for in-team discussions',
            'expert1': 'Formal trainings are arranged and gone through based on demand',
            'expert2': 'Formal handover documentation continuously reviewed and updated',
            'expert3': 'Team members are comfortable with casual chats on work related items, not only formal meetings',
            'professional1': 'Knowledge sharing sessions are happening proactively within team members',
            'professional2': 'Team members voice out unhappiness, concerns in a professional and respectful  manner',
            'professional3': 'Open-mindedness present',
            'professional4': 'Team celebrates success stories and achievements',
            'master1': 'Formal training requirements are forecasted inline with PDP and Bank strategy',
            'master2': 'Training refreshers done regularly (i.e. every quarter)',
            'master3': 'Knowledge sharing sessions are attended by whole team.',
            'master4': 'Knowledge sharing sessions are set up and happen twice a month.',
            'master5': 'Regular out-of-office get-togethers (once every quarter).'};

        var documentationTasks = {
            'traveller1': 'Issues are not documented and there are no proper follow up process',
            'traveller2': 'Issues are not categorised in any way',
            'traveller3': 'Work arounds are not documented',
            'traveller4': 'Work around seem to become the definite solution',
            'traveller5': 'Solutions are not documented',
            'traveller6': 'No version management of artefacts and reports',
            'traveller7': 'There are no documentation whatsoever',
            'artisan1': 'Issues are tracked down and there is a follow up process in place to check on state at any given point',
            'artisan2': 'Automation scripts are commented within the script but no separate documents',
            'artisan3': 'Processes are documented but not updated frequently',
            'artisan4': 'Simple How To documents start to appear',
            'artisan5': 'A proper definition of Done is in place',
            'artisan6': 'No definition of readiness',
            'expert1': 'All Workarounds and Solutions are documented for referencing',
            'expert2': 'Processes are documented and updated frequently but not on shared repository',
            'expert3': 'Separate documentation for scripts available for references and training purposes',
            'expert4': 'User Guide is available for reference and is Updated after every change',
            'professional1': 'Proper categorization of issue based on priority and severity is set in place',
            'professional2': 'Proper turn around time is decided by team and is set based on severity of issues',
            'professional3': 'Proper definition of readiness is set in place',
            'master1': 'SLA is respected greater than 95% of the time',
            'master2': 'All documents on shared version controlled and access controlled repository',
            'master3': 'Definition of Done and Readiness are reviewed as part of retrospective session'
        };

        var assessmentProcessTasks = {
            'traveller1': 'Estimation done for projects do not cater for Technical Aspects such as Automation and NFT Testing nor complexity upfront',
            'traveller2': 'Feasibility of Automation and NFT done based on predefined toolset',
            'traveller3': 'There are no formal process regarding follow-ups and re-assessments',
            'traveller4': 'All work done is a once off attempt and set aside never to go back to again',
            'artisan1': 'Automation and NFT process is taken into consideration and Automation and NFT Specialists are involved during the planning phase',
            'artisan2': 'Follow-Ups and re-assessments are done for major issues and show-stoppers with finding a solution as the only objective',
            'expert1': 'Tools are chosen to fit the purpose of the project and not the other way around',
            'expert2': 'Proper deadlines set for follow-up process based on priority and severity scaled that has been agreed upon by whole team',
            'expert3': 'Proper monitoring and moderation carried out to ensure that dead-lines are met for all queries (Team Lead or Scrum Master)',
            'professional1': 'Estimation is based on factual history and trending metrics',
            'professional2': 'Checklist available for assessment consistency',
            'professional3': 'Self-managed team responds to all queries'};

        var researchTasks = {
            'traveller1': 'Team members are used 100%. No room for innovation',
            'traveller2': 'There are no sharing forums to discuss ideas and trends',
            'traveller3': 'Team sticks with what gets the work done',
            'traveller4': 'No innovative ideas or new tools proposition',
            'traveller5': 'Tools used are what is available by the bank',
            'traveller6': 'There are  limitations to what platforms can be automated',
            'traveller7': 'There are limitations to languages that can used on Tool',
            'artisan1': 'Team enables sharing through dedicated showcase times. Platform exists',
            'expert1': 'Team Commitment to dedicate a few hours a week on Research',
            'expert2': 'Monthly (or higher frequency) showcase of knowledge and practices',
            'expert3': 'Tools assessment is done before every project or before every release and tolls list is re-considered based on budget and Team experience',
            'expert4': 'Automation tool can accommodate multiple languages',
            'expert5': 'Automation tool provides cross platform and cross browser testing capabilities',
            'professional1': 'Showcased practices are adopted by team',
            'professional2': 'Research on new tools',
            'professional3': 'Automation tool has satisfactory remote support',
            'master1': 'Dedicated team for Research & Innovation',
            'master2': 'Research shared via Proof of Theory'};

        var involvementTasks = {
            'traveller1': 'Testing is involved at the end of life-cycle just before release',
            'traveller2': 'GUI only test automation',
            'traveller3': 'Automation planning is done by test automation engineers alone',
            'artisan1': 'There are dedicated (automation) testing phases during project lifecycle',
            'artisan2': 'Test Data available upon request',
            'artisan3': 'All test cases are designed so as to accommodate for automation',
            'artisan4': 'Automation team is fully aware and have a clear understanding of the workflow and page transition for the whole application',
            'artisan5': 'Automation planning is done between Test Automation Engineers and Test Analysts only',
            'expert1': 'Test processes are agreed upon at the beginning of project',
            'expert2': 'API layer automation starts to see the day',
            'expert3': 'Automation life-cycle has a maintenance phase to ensure that script is up to date and the script does not break during testing activities',
            'professional1': 'Testing happens at every stage of the SDLC',
            'professional2': 'Pair programming practice is enforced and Power of 3 works together',
            'professional3': 'Whole team is involved in automation planning and scope definition',
            'master1': 'Test Automation is an activity and done by all (team members)',
            'master2': 'Test Automation involved in product development by default',
            'master3': 'Minimal external dependencies. Team is in full control of flow and data'};

        var repositoryTasks = {
            'traveller1': 'Test data stored on local machine',
            'traveller2': 'There are no use of common repository and all test artefacts are stored locally',
            'artisan1': 'Scripts are stored in a common repository but not updated frequently',
            'artisan2': 'Object Map or object repository is stored on common repository but not frequently updated',
            'expert1': 'Test data is accessible on the central repository upon request based on test execution schedule',
            'expert2': 'Scripts are stored in a common repository and updated after every deployment',
            'expert3': 'Object map or repository is kept up to date',
            'professional1': 'Test data is accessible on the central access controlled repository upon request based on test run schedule or maintenance activities',
            'professional2': 'Script Repository being used has powerful integration capabilities',
            'master1': 'All artifacts are under version management'};

        var executionTasks = {
            'traveller1': 'All scripts are run from local machines',
            'traveller2': 'All test results are stored on local machine',
            'traveller3': 'All test results and run results are sent manually via email',
            'traveller4': 'All automated tests are kicked off manually',
            'traveller5': 'Regression pack is not reviewed and changes are not incorporated',
            'traveller6': 'There is no proper regression pack available for automation',
            'artisan1': '(Physical) Lab is set in place and all automation scripts are run from the lab',
            'artisan2': 'Regression pack is in place and ready to run whenever needed',
            'expert1': 'Results are generated and stored automatically',
            'expert2': 'Making use of Virtual Machines to increase execution capabilities',
            'expert3': 'The regression pack is reviewed after every changes and updated based on new scenarios',
            'professional1': 'Use of schedulers to have scripts executed after hours',
            'professional2': 'Metrics are in place to easily identify Automated Regression pack status and contents',
            'master1': 'Results are shared to all stakeholders automatically',
            'master2': 'Use of schedulers to kick off scripts automatically after every release'};

        var processTasks = {
            'traveller1': 'Test Automation Process is not well understood across the team',
            'traveller2': 'There are no formal strategy in place for test automation',
            'traveller3': 'There is no governance structure whatsoever',
            'traveller4': 'There are no common practices nor rules in place for the team',
            'artisan1': 'All written scripts are reviewed by whole team and follows a standards that is agreed by the team',
            'expert1': 'Process and practices are understood and followed by all',
            'expert2': 'Proper strategy is in place on how to tackle any automation project or activity thereof',
            'expert3': 'Checklists and Guidelines are available and used by whole team',
            'professional1': 'Test Automation Strategy is aligned to QA Strategy',
            'professional2': 'Test Automation Strategy is aligned to bank Strategy',
            'professional3': 'Fit for purpose governance makes it an enabler rather than a hindrance',
            'master1': 'Processes and Practices are regularly reviewed and updated to cater for methodology/approach changes',
            'master2': 'Strategy is regularly reviewed and updated to cater for methodology/approach changes',
            'master3': 'Governance values team throughput and value add'};

        var formatResultsForStandards = function(assessmentResults, score){
            var standardsResults = {};
            var standardsAssessments = assessmentResults !== undefined ? assessmentResults['standards'] : {};

            standardsAssessments = standardsAssessments !== undefined ? standardsAssessments : {};

            standardsResults['tasks'] = [];
            standardsResults['undoTasks'] = [];

            standardsResults['current_score'] = score;
            standardsResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!standardsAssessments['artisan1']){
                    standardsResults['tasks'].push(standardTasks['artisan1']);
                }

                if(!standardsAssessments['artisan2']){
                    standardsResults['tasks'].push(standardTasks['artisan2']);
                }

                if(!standardsAssessments['artisan3']){
                    standardsResults['tasks'].push(standardTasks['artisan3']);
                }

                if(!standardsAssessments['artisan4']){
                    standardsResults['tasks'].push(standardTasks['artisan4']);
                }

                if(!standardsAssessments['artisan5']){
                    standardsResults['tasks'].push(standardTasks['artisan5']);
                }

                if(!standardsAssessments['artisan6']){
                    standardsResults['tasks'].push(standardTasks['artisan6']);
                }

                if(!standardsAssessments['artisan7']){
                    standardsResults['tasks'].push(standardTasks['artisan7']);
                }

                if(standardsAssessments['traveller1']){
                    standardsResults['undoTasks'].push(standardTasks['traveller1']);
                }

                if(standardsAssessments['traveller2']){
                    standardsResults['undoTasks'].push(standardTasks['traveller2']);
                }

                if(standardsAssessments['traveller3']){
                    standardsResults['undoTasks'].push(standardTasks['traveller3']);
                }

                if(standardsAssessments['traveller4']){
                    standardsResults['undoTasks'].push(standardTasks['traveller4']);
                }

                if(standardsAssessments['traveller5']){
                    standardsResults['undoTasks'].push(standardTasks['traveller5']);
                }

                if(standardsAssessments['traveller6']){
                    standardsResults['undoTasks'].push(standardTasks['traveller6']);
                }
            }

            if(score === 2){
                if(standardsAssessments['artisan1']){
                    standardsResults['undoTasks'].push(standardTasks['artisan1']);
                }

                if(!standardsAssessments['expert1']){
                    standardsResults['tasks'].push(standardTasks['expert1']);
                }

                if(!standardsAssessments['expert2']){
                    standardsResults['tasks'].push(standardTasks['expert2']);
                }

                if(!standardsAssessments['expert3']){
                    standardsResults['tasks'].push(standardTasks['expert3']);
                }

                if(!standardsAssessments['expert4']){
                    standardsResults['tasks'].push(standardTasks['expert4']);
                }

                if(!standardsAssessments['expert5']){
                    standardsResults['tasks'].push(standardTasks['expert5']);
                }

                if(!standardsAssessments['expert6']){
                    standardsResults['tasks'].push(standardTasks['expert6']);
                }

                if(!standardsAssessments['expert7']){
                    standardsResults['tasks'].push(standardTasks['expert7']);
                }

                if(!standardsAssessments['expert8']){
                    standardsResults['tasks'].push(standardTasks['expert8']);
                }

                if(!standardsAssessments['expert9']){
                    standardsResults['tasks'].push(standardTasks['expert9']);
                }

                if(!standardsAssessments['expert10']){
                    standardsResults['tasks'].push(standardTasks['expert10']);
                }

                if(!standardsAssessments['expert11']){
                    standardsResults['tasks'].push(standardTasks['expert11']);
                }

                if(!standardsAssessments['expert12']){
                    standardsResults['tasks'].push(standardTasks['expert12']);
                }

                if(standardsAssessments['artisan2']){
                    standardsResults['undoTasks'].push(standardTasks['artisan2']);
                }

                if(standardsAssessments['artisan4']){
                    standardsResults['undoTasks'].push(standardTasks['artisan4']);
                }

                if(standardsAssessments['artisan7']){
                    standardsResults['undoTasks'].push(standardTasks['artisan7']);
                }
            }

            if(score === 3){
                if(!standardsAssessments['professional1']){
                    standardsResults['tasks'].push(standardTasks['professional1']);
                }

                if(!standardsAssessments['professional2']){
                    standardsResults['tasks'].push(standardTasks['professional2']);
                }

                if(!standardsAssessments['professional3']){
                    standardsResults['tasks'].push(standardTasks['professional3']);
                }

                if(!standardsAssessments['professional4']){
                    standardsResults['tasks'].push(standardTasks['professional4']);
                }

                if(!standardsAssessments['professional5']){
                    standardsResults['tasks'].push(standardTasks['professional5']);
                }

                if(!standardsAssessments['professional6']){
                    standardsResults['tasks'].push(standardTasks['professional6']);
                }

                if(!standardsAssessments['professional7']){
                    standardsResults['tasks'].push(standardTasks['professional7']);
                }

                if(!standardsAssessments['professional8']){
                    standardsResults['tasks'].push(standardTasks['professional8']);
                }

                if(!standardsAssessments['professional9']){
                    standardsResults['tasks'].push(standardTasks['professional9']);
                }

                if(!standardsAssessments['professional10']){
                    standardsResults['tasks'].push(standardTasks['professional10']);
                }
            }

            if(score === 4){
                if(!standardsAssessments['master1']){
                    standardsResults['tasks'].push(standardTasks['master1']);
                }

                if(!standardsAssessments['master2']){
                    standardsResults['tasks'].push(standardTasks['master2']);
                }

                if(!standardsAssessments['master3']){
                    standardsResults['tasks'].push(standardTasks['master3']);
                }

                if(!standardsAssessments['master4']){
                    standardsResults['tasks'].push(standardTasks['master4']);
                }

                if(!standardsAssessments['master5']){
                    standardsResults['tasks'].push(standardTasks['master5']);
                }

                if(!standardsAssessments['master6']){
                    standardsResults['tasks'].push(standardTasks['master6']);
                }

                if(!standardsAssessments['master7']){
                    standardsResults['tasks'].push(standardTasks['master7']);
                }

                if(!standardsAssessments['master8']){
                    standardsResults['tasks'].push(standardTasks['master8']);
                }

                if(!standardsAssessments['master9']){
                    standardsResults['tasks'].push(standardTasks['master9']);
                }
            }

            standardsResults['next_score'] = limitToFive(standardsResults['next_score']);
            return standardsResults;

        };

        var formatResultsForMetrics = function(assessmentResults, score){
            var metricsResults = {};
            var metricsAssessments = assessmentResults !== undefined ? assessmentResults['metrics'] : {};

            metricsAssessments = metricsAssessments !== undefined ? metricsAssessments : {};

            metricsResults['tasks'] = [];
            metricsResults['undoTasks'] = [];

            metricsResults['current_score'] = score;
            metricsResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!metricsAssessments['artisan1']){
                    metricsResults['tasks'].push(metricsTasks['artisan1']);
                }

                if(!metricsAssessments['artisan2']){
                    metricsResults['tasks'].push(metricsTasks['artisan2']);
                }

                if(!metricsAssessments['artisan3']){
                    metricsResults['tasks'].push(metricsTasks['artisan3']);
                }

                if(!metricsAssessments['artisan4']){
                    metricsResults['tasks'].push(metricsTasks['artisan4']);
                }

                if(!metricsAssessments['artisan5']){
                    metricsResults['tasks'].push(metricsTasks['artisan5']);
                }

                if(!metricsAssessments['artisan6']){
                    metricsResults['tasks'].push(metricsTasks['artisan6']);
                }

                if(metricsAssessments['traveller2']){
                    metricsResults['undoTasks'].push(metricsTasks['traveller2']);
                }
            }

            if(score === 2){
                if(metricsAssessments['artisan3']){
                    metricsResults['undoTasks'].push(metricsTasks['artisan3']);
                }

                if(metricsAssessments['artisan5']){
                    metricsResults['undoTasks'].push(metricsTasks['artisan5']);
                }

                if(!metricsAssessments['expert1']){
                    metricsResults['tasks'].push(metricsTasks['expert1']);
                }

                if(!metricsAssessments['expert2']){
                    metricsResults['tasks'].push(metricsTasks['expert2']);
                }

                if(!metricsAssessments['expert3']){
                    metricsResults['tasks'].push(metricsTasks['expert3']);
                }

                if(!metricsAssessments['expert4']){
                    metricsResults['tasks'].push(metricsTasks['expert4']);
                }

                if(!metricsAssessments['expert5']){
                    metricsResults['tasks'].push(metricsTasks['expert5']);
                }

                if(!metricsAssessments['expert6']){
                    metricsResults['tasks'].push(metricsTasks['expert6']);
                }

                if(!metricsAssessments['expert7']){
                    metricsResults['tasks'].push(metricsTasks['expert7']);
                }

                if(!metricsAssessments['expert8']){
                    metricsResults['tasks'].push(metricsTasks['expert8']);
                }
            }

            if(score === 3){
                if(!metricsAssessments['professional1']){
                    metricsResults['tasks'].push(metricsTasks['professional1']);
                }

                if(!metricsAssessments['professional2']){
                    metricsResults['tasks'].push(metricsTasks['professional2']);
                }

                if(!metricsAssessments['professional3']){
                    metricsResults['tasks'].push(metricsTasks['professional3']);
                }

                if(!metricsAssessments['professional4']){
                    metricsResults['tasks'].push(metricsTasks['professional4']);
                }

                if(!metricsAssessments['professional5']){
                    metricsResults['tasks'].push(metricsTasks['professional5']);
                }
            }

            if(score === 4){
                if(!metricsAssessments['master1']){
                    metricsResults['tasks'].push(metricsTasks['master1']);
                }

                if(!metricsAssessments['master2']){
                    metricsResults['tasks'].push(metricsTasks['master2']);
                }

                if(!metricsAssessments['master3']){
                    metricsResults['tasks'].push(metricsTasks['master3']);
                }

                if(!metricsAssessments['master4']){
                    metricsResults['tasks'].push(metricsTasks['master4']);
                }

                if(!metricsAssessments['master5']){
                    metricsResults['tasks'].push(metricsTasks['master5']);
                }

                if(!metricsAssessments['master6']){
                    metricsResults['tasks'].push(metricsTasks['master6']);
                }
            }

            metricsResults['next_score'] = limitToFive(metricsResults['next_score']);
            return metricsResults;

        };

        var formatResultsForIntegration = function(assessmentResults, score){
            var integrationResults = {};
            var integrationAssessments = assessmentResults !== undefined ? assessmentResults['integration'] : {};

            integrationAssessments = integrationAssessments !== undefined ? integrationAssessments : {};

            integrationResults['tasks'] = [];
            integrationResults['undoTasks'] = [];

            integrationResults['current_score'] = score;
            integrationResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!integrationAssessments['artisan1']){
                    integrationResults['tasks'].push(integrationTasks['artisan1']);
                }

                if(!integrationAssessments['artisan2']){
                    integrationResults['tasks'].push(integrationTasks['artisan2']);
                }

                if(!integrationAssessments['artisan3']){
                    integrationResults['tasks'].push(integrationTasks['artisan3']);
                }

                if(integrationAssessments['traveller1']){
                    integrationResults['undoTasks'] = [integrationTasks['traveller1']];
                }

                if(integrationAssessments['traveller2']){
                    integrationResults['undoTasks'] = [integrationTasks['traveller2']];
                }
            }

            if(score === 2){
                if(!integrationAssessments['expert1']){
                    integrationResults['tasks'].push(integrationTasks['expert1']);
                }

                if(!integrationAssessments['expert2']){
                    integrationResults['tasks'].push(integrationTasks['expert2']);
                }
            }

            if(score === 3){
                if(!integrationAssessments['professional1']){
                    integrationResults['tasks'].push(integrationTasks['professional1']);
                }

                if(!integrationAssessments['professional2']){
                    integrationResults['tasks'].push(integrationTasks['professional2']);
                }

                if(!integrationAssessments['professional3']){
                    integrationResults['tasks'].push(integrationTasks['professional3']);
                }

                if(integrationAssessments['traveller1']){
                    integrationResults['undoTasks'] = [integrationTasks['traveller1']];
                }

                if(integrationAssessments['traveller2']){
                    integrationResults['undoTasks'] = [integrationTasks['traveller2']];
                }

                if(integrationAssessments['artisan2']){
                    integrationResults['undoTasks'] = [integrationTasks['artisan2']];
                }
            }

            if(score === 4){
                if(!integrationAssessments['master1']){
                    integrationResults['tasks'].push(integrationTasks['master1']);
                }
            }

            integrationResults['next_score'] = limitToFive(integrationResults['next_score']);
            return integrationResults;

        };

        var formatResultsForStakeholderManagement = function(assessmentResults, score){
            var stakeholderManagementResults = {};
            var stakeholderManagementAssessments = assessmentResults !== undefined ? assessmentResults['stakeholder-management'] : {};

            stakeholderManagementAssessments = stakeholderManagementAssessments !== undefined ? stakeholderManagementAssessments : {};

            stakeholderManagementResults['tasks'] = [];
            stakeholderManagementResults['undoTasks'] = [];

            stakeholderManagementResults['current_score'] = score;
            stakeholderManagementResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!stakeholderManagementAssessments['traveller3']){
                    stakeholderManagementResults['tasks'].push(stakeholderManagementTasks['traveller3']);
                }

                if(!stakeholderManagementAssessments['artisan1']){
                    stakeholderManagementResults['tasks'].push(stakeholderManagementTasks['artisan1']);
                }

                if(!stakeholderManagementAssessments['artisan2']){
                    stakeholderManagementResults['tasks'].push(stakeholderManagementTasks['artisan2']);
                }

                if(stakeholderManagementAssessments['traveller1']){
                    stakeholderManagementResults['undoTasks'].push(stakeholderManagementTasks['traveller1']);
                }

                if(stakeholderManagementAssessments['traveller2']){
                    stakeholderManagementResults['undoTasks'].push(stakeholderManagementTasks['traveller2']);
                }
            }

            if(score === 2){
                if(!stakeholderManagementAssessments['traveller3']){
                    stakeholderManagementResults['tasks'].push(stakeholderManagementTasks['traveller3']);
                }

                if(!stakeholderManagementAssessments['expert1']){
                    stakeholderManagementResults['tasks'].push(stakeholderManagementTasks['expert1']);
                }

                if(!stakeholderManagementAssessments['expert2']){
                    stakeholderManagementResults['tasks'].push(stakeholderManagementTasks['expert2']);
                }

                if(!stakeholderManagementAssessments['expert3']){
                    stakeholderManagementResults['tasks'].push(stakeholderManagementTasks['expert3']);
                }

                if(stakeholderManagementAssessments['traveller1']){
                    stakeholderManagementResults['undoTasks'].push(stakeholderManagementTasks['traveller1']);
                }

                if(stakeholderManagementAssessments['traveller2']){
                    stakeholderManagementResults['undoTasks'].push(stakeholderManagementTasks['traveller2']);
                }

                if(stakeholderManagementAssessments['artisan2']){
                    stakeholderManagementResults['undoTasks'].push(stakeholderManagementTasks['artisan2']);
                }
            }

            if(score === 3){
                if(!stakeholderManagementAssessments['professional1']){
                    stakeholderManagementResults['tasks'].push(stakeholderManagementTasks['professional1']);
                }

                if(!stakeholderManagementAssessments['professional2']){
                    stakeholderManagementResults['tasks'].push(stakeholderManagementTasks['professional2']);
                }

                if(!stakeholderManagementAssessments['professional3']){
                    stakeholderManagementResults['tasks'].push(stakeholderManagementTasks['professional3']);
                }

                if(!stakeholderManagementAssessments['professional4']){
                    stakeholderManagementResults['tasks'].push(stakeholderManagementTasks['professional4']);
                }
            }

            if(score === 4){
                if(!stakeholderManagementAssessments['master1']){
                    stakeholderManagementResults['tasks'].push(stakeholderManagementTasks['master1']);
                }

                if(!stakeholderManagementAssessments['master2']){
                    stakeholderManagementResults['tasks'].push(stakeholderManagementTasks['master2']);
                }
            }

            stakeholderManagementResults['next_score'] = limitToFive(stakeholderManagementResults['next_score']);
            return stakeholderManagementResults;

        };

        var formatResultsForTeamManagement = function(assessmentResults, score){
            var teamManagementResults = {};
            var teamManagementAssessments = assessmentResults !== undefined ? assessmentResults['team-management'] : {};

            teamManagementAssessments = teamManagementAssessments !== undefined ? teamManagementAssessments : {};

            teamManagementResults['tasks'] = [];
            teamManagementResults['undoTasks'] = [];

            teamManagementResults['current_score'] = score;
            teamManagementResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!teamManagementAssessments['artisan1']){
                    teamManagementResults['tasks'].push(teamManagementTasks['artisan1']);
                }

                if(!teamManagementAssessments['artisan2']){
                    teamManagementResults['tasks'].push(teamManagementTasks['artisan2']);
                }

                if(!teamManagementAssessments['artisan3']){
                    teamManagementResults['tasks'].push(teamManagementTasks['artisan3']);
                }

                if(!teamManagementAssessments['artisan4']){
                    teamManagementResults['tasks'].push(teamManagementTasks['artisan4']);
                }

                if(teamManagementAssessments['traveller1']){
                    teamManagementResults['undoTasks'] = [teamManagementTasks['traveller1']];
                }

                if(teamManagementAssessments['traveller2']){
                    teamManagementResults['undoTasks'] = [teamManagementTasks['traveller2']];
                }

                if(teamManagementAssessments['traveller3']){
                    teamManagementResults['undoTasks'] = [teamManagementTasks['traveller3']];
                }

                if(teamManagementAssessments['traveller4']){
                    teamManagementResults['undoTasks'] = [teamManagementTasks['traveller4']];
                }
            }

            if(score === 2){
                if(!teamManagementAssessments['expert1']){
                    teamManagementResults['tasks'].push(teamManagementTasks['expert1']);
                }

                if(!teamManagementAssessments['expert2']){
                    teamManagementResults['tasks'].push(teamManagementTasks['expert2']);
                }

                if(!teamManagementAssessments['expert3']){
                    teamManagementResults['tasks'].push(teamManagementTasks['expert3']);
                }

                if(teamManagementAssessments['artisan3']){
                    teamManagementResults['undoTasks'] = [teamManagementTasks['artisan3']];
                }

                if(teamManagementAssessments['artisan4']){
                    teamManagementResults['undoTasks'] = [teamManagementTasks['artisan4']];
                }

            }

            if(score === 3){
                if(!teamManagementAssessments['professional1']){
                    teamManagementResults['tasks'].push(teamManagementTasks['professional1']);
                }

                if(!teamManagementAssessments['professional2']){
                    teamManagementResults['tasks'].push(teamManagementTasks['professional2']);
                }

                if(!teamManagementAssessments['professional3']){
                    teamManagementResults['tasks'].push(teamManagementTasks['professional3']);
                }

                if(!teamManagementAssessments['professional4']){
                    teamManagementResults['tasks'].push(teamManagementTasks['professional4']);
                }
            }

            if(score === 4){
                if(!teamManagementAssessments['master1']){
                    teamManagementResults['tasks'].push(teamManagementTasks['master1']);
                }

                if(!teamManagementAssessments['master2']){
                    teamManagementResults['tasks'].push(teamManagementTasks['master2']);
                }

                if(!teamManagementAssessments['master3']){
                    teamManagementResults['tasks'].push(teamManagementTasks['master3']);
                }

                if(!teamManagementAssessments['master4']){
                    teamManagementResults['tasks'].push(teamManagementTasks['master4']);
                }

                if(!teamManagementAssessments['master5']){
                    teamManagementResults['tasks'].push(teamManagementTasks['master5']);
                }
            }

            teamManagementResults['next_score'] = limitToFive(teamManagementResults['next_score']);
            return teamManagementResults;
        };

        var formatResultsForDocumentation = function(assessmentResults, score){
            var documentationResults = {};
            var documentationAssessments = assessmentResults !== undefined ? assessmentResults['documentation'] : {};

            documentationAssessments = documentationAssessments !== undefined ? documentationAssessments : {};

            documentationResults['tasks'] = [];
            documentationResults['undoTasks'] = [];

            documentationResults['current_score'] = score;
            documentationResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!documentationAssessments['artisan1']){
                    documentationResults['tasks'].push(documentationTasks['artisan1']);
                }

                if(!documentationAssessments['artisan2']){
                    documentationResults['tasks'].push(documentationTasks['artisan2']);
                }

                if(!documentationAssessments['artisan3']){
                    documentationResults['tasks'].push(documentationTasks['artisan3']);
                }

                if(!documentationAssessments['artisan4']){
                    documentationResults['tasks'].push(documentationTasks['artisan4']);
                }

                if(!documentationAssessments['artisan5']){
                    documentationResults['tasks'].push(documentationTasks['artisan5']);
                }

                if(!documentationAssessments['artisan6']){
                    documentationResults['tasks'].push(documentationTasks['artisan6']);
                }

                if(documentationAssessments['traveller1']){
                    documentationResults['undoTasks'].push(documentationTasks['traveller1']);
                }

                if(documentationAssessments['traveller7']){
                    documentationResults['undoTasks'].push(documentationTasks['traveller7']);
                }
            }

            if(score === 2){
                if(!documentationAssessments['expert1']){
                    documentationResults['tasks'].push(documentationTasks['expert1']);
                }

                if(!documentationAssessments['expert2']){
                    documentationResults['tasks'].push(documentationTasks['expert2']);
                }

                if(!documentationAssessments['expert3']){
                    documentationResults['tasks'].push(documentationTasks['expert3']);
                }

                if(!documentationAssessments['expert4']){
                    documentationResults['tasks'].push(documentationTasks['expert4']);
                }

                if(documentationAssessments['traveller1']){
                    documentationResults['undoTasks'].push(documentationTasks['traveller1']);
                }

                if(documentationAssessments['traveller3']){
                    documentationResults['undoTasks'].push(documentationTasks['traveller3']);
                }

                if(documentationAssessments['traveller5']){
                    documentationResults['undoTasks'].push(documentationTasks['traveller5']);
                }

                if(documentationAssessments['traveller7']){
                    documentationResults['undoTasks'].push(documentationTasks['traveller7']);
                }

                if(documentationAssessments['artisan2']){
                    documentationResults['undoTasks'].push(documentationTasks['artisan2']);
                }

                if(documentationAssessments['artisan3']){
                    documentationResults['undoTasks'].push(documentationTasks['artisan3']);
                }

                if(documentationAssessments['artisan4']){
                    documentationResults['undoTasks'].push(documentationTasks['artisan4']);
                }
            }

            if(score === 3){
                if(!documentationAssessments['professional1']){
                    documentationResults['tasks'].push(documentationTasks['professional1']);
                }

                if(!documentationAssessments['professional2']){
                    documentationResults['tasks'].push(documentationTasks['professional2']);
                }

                if(!documentationAssessments['professional3']){
                    documentationResults['tasks'].push(documentationTasks['professional3']);
                }

                if(documentationAssessments['traveller1']){
                    documentationResults['undoTasks'].push(documentationTasks['traveller1']);
                }

                if(documentationAssessments['traveller2']){
                    documentationResults['undoTasks'].push(documentationTasks['traveller2']);
                }

                if(documentationAssessments['traveller3']){
                    documentationResults['undoTasks'].push(documentationTasks['traveller3']);
                }

                if(documentationAssessments['traveller4']){
                    documentationResults['undoTasks'].push(documentationTasks['traveller4']);
                }

                if(documentationAssessments['traveller5']){
                    documentationResults['undoTasks'].push(documentationTasks['traveller5']);
                }

                if(documentationAssessments['traveller6']){
                    documentationResults['undoTasks'].push(documentationTasks['traveller6']);
                }

                if(documentationAssessments['traveller7']){
                    documentationResults['undoTasks'].push(documentationTasks['traveller7']);
                }

                if(documentationAssessments['artisan2']){
                    documentationResults['undoTasks'].push(documentationTasks['artisan2']);
                }

                if(documentationAssessments['artisan3']){
                    documentationResults['undoTasks'].push(documentationTasks['artisan3']);
                }

                if(documentationAssessments['artisan4']){
                    documentationResults['undoTasks'].push(documentationTasks['artisan4']);
                }
            }

            if(score === 4){
                if(!documentationAssessments['master1']){
                    documentationResults['tasks'].push(documentationTasks['master1']);
                }

                if(!documentationAssessments['master2']){
                    documentationResults['tasks'].push(documentationTasks['master2']);
                }

                if(!documentationAssessments['master3']){
                    documentationResults['tasks'].push(documentationTasks['master3']);
                }
            }

            documentationResults['next_score'] = limitToFive(documentationResults['next_score']);
            return documentationResults;
        };

        var formatResultsForAssessmentProcess = function(assessmentResults, score){
            var assessmentProcessResults = {};
            var assessmentProcessAssessments = assessmentResults !== undefined ? assessmentResults['assessment-process'] : {};

            assessmentProcessAssessments = assessmentProcessAssessments !== undefined ? assessmentProcessAssessments : {};

            assessmentProcessResults['tasks'] = [];
            assessmentProcessResults['undoTasks'] = [];

            assessmentProcessResults['current_score'] = score;
            var next_score = score === 0 ? 2 : score + 1;

            next_score = next_score === 2 ? 3 : next_score;

            assessmentProcessResults['next_score'] = next_score;

            if(score === 0 || score === 1){
                if(!assessmentProcessAssessments['artisan1']){
                    assessmentProcessResults['tasks'].push(assessmentProcessTasks['artisan1']);
                }

                if(!assessmentProcessAssessments['artisan2']){
                    assessmentProcessResults['tasks'].push(assessmentProcessTasks['artisan2']);
                }

                if(!assessmentProcessAssessments['traveller2']){
                    assessmentProcessResults['tasks'].push(assessmentProcessTasks['traveller2']);
                }

                if(assessmentProcessAssessments['traveller1']){
                    assessmentProcessResults['undoTasks'].push(assessmentProcessTasks['traveller1']);
                }

                if(assessmentProcessAssessments['traveller3']){
                    assessmentProcessResults['undoTasks'].push(assessmentProcessTasks['traveller3']);
                }
            }

            if(score === 3){

                if(assessmentProcessAssessments['traveller1']){
                    assessmentProcessResults['undoTasks'].push(assessmentProcessTasks['traveller1']);
                }

                if(assessmentProcessAssessments['traveller2']){
                    assessmentProcessResults['undoTasks'].push(assessmentProcessTasks['traveller2']);
                }

                if(assessmentProcessAssessments['traveller3']){
                    assessmentProcessResults['undoTasks'].push(assessmentProcessTasks['traveller3']);
                }

                if(!assessmentProcessAssessments['artisan1']){
                    assessmentProcessResults['tasks'].push(assessmentProcessTasks['artisan1']);
                }

                if(!assessmentProcessAssessments['artisan2']){
                    assessmentProcessResults['tasks'].push(assessmentProcessTasks['artisan2']);
                }

                if(!assessmentProcessAssessments['expert1']){
                    assessmentProcessResults['tasks'].push(assessmentProcessTasks['expert1']);
                }

                if(!assessmentProcessAssessments['expert2']){
                    assessmentProcessResults['tasks'].push(assessmentProcessTasks['expert2']);
                }

                if(!assessmentProcessAssessments['expert3']){
                    assessmentProcessResults['tasks'].push(assessmentProcessTasks['expert3']);
                }
            }

            if(score === 4){
                if(!assessmentProcessAssessments['professional1']){
                    assessmentProcessResults['tasks'].push(assessmentProcessTasks['professional1']);
                }

                if(!assessmentProcessAssessments['professional2']){
                    assessmentProcessResults['tasks'].push(assessmentProcessTasks['professional2']);
                }

                if(!assessmentProcessAssessments['professional3']){
                    assessmentProcessResults['tasks'].push(assessmentProcessTasks['professional3']);
                }
            }

            assessmentProcessResults['next_score'] = limitToFive(assessmentProcessResults['next_score']);
            return assessmentProcessResults;
        };

        var formatResultsForResearch = function(assessmentResults, score){
            var researchResults = {};
            var researchAssessments = assessmentResults !== undefined ? assessmentResults['research'] : {};

            researchAssessments = researchAssessments !== undefined ? researchAssessments : {};

            researchResults['tasks'] = [];
            researchResults['undoTasks'] = [];

            researchResults['current_score'] = score;
            researchResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!researchAssessments['artisan1']){
                    researchResults['tasks'].push(researchTasks['artisan1']);
                }

                if(researchAssessments['traveller2']){
                    researchResults['undoTasks'].push(researchTasks['traveller2']);
                }
            }

            if(score === 2){

                if(!researchAssessments['expert1']){
                    researchResults['tasks'].push(researchTasks['expert1']);
                }

                if(!researchAssessments['expert2']){
                    researchResults['tasks'].push(researchTasks['expert2']);
                }

                if(!researchAssessments['expert3']){
                    researchResults['tasks'].push(researchTasks['expert3']);
                }

                if(!researchAssessments['expert4']){
                    researchResults['tasks'].push(researchTasks['expert4']);
                }

                if(!researchAssessments['expert5']){
                    researchResults['tasks'].push(researchTasks['expert5']);
                }

                if(researchAssessments['traveller1']){
                    researchResults['undoTasks'].push(researchTasks['traveller1']);
                }

                if(researchAssessments['traveller2']){
                    researchResults['undoTasks'].push(researchTasks['traveller2']);
                }

                if(researchAssessments['traveller3']){
                    researchResults['undoTasks'].push(researchTasks['traveller3']);
                }

                if(researchAssessments['traveller4']){
                    researchResults['undoTasks'].push(researchTasks['traveller4']);
                }

                if(researchAssessments['traveller5']){
                    researchResults['undoTasks'].push(researchTasks['traveller5']);
                }

                if(researchAssessments['traveller6']){
                    researchResults['undoTasks'].push(researchTasks['traveller6']);
                }

                if(researchAssessments['traveller7']){
                    researchResults['undoTasks'].push(researchTasks['traveller7']);
                }
            }

            if(score === 3){
                if(!researchAssessments['professional1']){
                    researchResults['tasks'].push(researchTasks['professional1']);
                }

                if(!researchAssessments['professional2']){
                    researchResults['tasks'].push(researchTasks['professional2']);
                }

                if(!researchAssessments['professional3']){
                    researchResults['tasks'].push(researchTasks['professional3']);
                }
            }

            if(score === 4){
                if(!researchAssessments['master1']){
                    researchResults['tasks'].push(researchTasks['master1']);
                }

                if(!researchAssessments['master2']){
                    researchResults['tasks'].push(researchTasks['master2']);
                }
            }

            researchResults['next_score'] = limitToFive(researchResults['next_score']);
            return researchResults;
        };

        var formatResultsForInvolvement = function(assessmentResults, score){
            var involvementResults = {};
            var involvementAssessments = assessmentResults !== undefined ? assessmentResults['involvement'] : {};

            involvementAssessments = involvementAssessments !== undefined ? involvementAssessments : {};

            involvementResults['tasks'] = [];
            involvementResults['undoTasks'] = [];

            involvementResults['current_score'] = score;
            involvementResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!involvementAssessments['artisan1']){
                    involvementResults['tasks'].push(involvementTasks['artisan1']);
                }

                if(!involvementAssessments['artisan2']){
                    involvementResults['tasks'].push(involvementTasks['artisan2']);
                }

                if(!involvementAssessments['artisan3']){
                    involvementResults['tasks'].push(involvementTasks['artisan3']);
                }

                if(!involvementAssessments['artisan4']){
                    involvementResults['tasks'].push(involvementTasks['artisan4']);
                }

                if(!involvementAssessments['artisan5']){
                    involvementResults['tasks'].push(involvementTasks['artisan5']);
                }

                if(involvementAssessments['traveller1']){
                    involvementResults['undoTasks'].push(involvementTasks['traveller1']);
                }

                if(involvementAssessments['traveller3']){
                    involvementResults['undoTasks'].push(involvementTasks['traveller3']);
                }

            }

            if(score === 2){

                if(!involvementAssessments['expert1']){
                    involvementResults['tasks'].push(involvementTasks['expert1']);
                }

                if(!involvementAssessments['expert2']){
                    involvementResults['tasks'].push(involvementTasks['expert2']);
                }

                if(!involvementAssessments['expert3']){
                    involvementResults['tasks'].push(involvementTasks['expert3']);
                }

                if(involvementAssessments['traveller1']){
                    involvementResults['undoTasks'].push(involvementTasks['traveller1']);
                }

                if(involvementAssessments['traveller2']){
                    involvementResults['undoTasks'].push(involvementTasks['traveller2']);
                }

                if(involvementAssessments['traveller3']){
                    involvementResults['undoTasks'].push(involvementTasks['traveller3']);
                }
            }

            if(score === 3){
                if(!involvementAssessments['professional1']){
                    involvementResults['tasks'].push(involvementTasks['professional1']);
                }

                if(!involvementAssessments['professional2']){
                    involvementResults['tasks'].push(involvementTasks['professional2']);
                }

                if(!involvementAssessments['professional3']){
                    involvementResults['tasks'].push(involvementTasks['professional3']);
                }
            }

            if(score === 4){
                if(!involvementAssessments['master1']){
                    involvementResults['tasks'].push(involvementTasks['master1']);
                }

                if(!involvementAssessments['master2']){
                    involvementResults['tasks'].push(involvementTasks['master2']);
                }

                if(!involvementAssessments['master3']){
                    involvementResults['tasks'].push(involvementTasks['master3']);
                }
            }

            involvementResults['next_score'] = limitToFive(involvementResults['next_score']);
            return involvementResults;
        };

        var formatResultsForRepository = function(assessmentResults, score){
            var repositoryResults = {};
            var repositoryAssessments = assessmentResults !== undefined ? assessmentResults['repository'] : {};

            repositoryAssessments = repositoryAssessments !== undefined ? repositoryAssessments : {};

            repositoryResults['tasks'] = [];
            repositoryResults['undoTasks'] = [];

            repositoryResults['current_score'] = score;
            repositoryResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!repositoryAssessments['artisan1']){
                    repositoryResults['tasks'].push(repositoryTasks['artisan1']);
                }

                if(!repositoryAssessments['artisan2']){
                    repositoryResults['tasks'].push(repositoryTasks['artisan2']);
                }

                if(repositoryAssessments['traveller2']){
                    repositoryResults['undoTasks'].push(repositoryTasks['traveller2']);
                }
            }

            if(score === 2){
                if(!repositoryAssessments['expert1']){
                    repositoryResults['tasks'].push(repositoryTasks['expert1']);
                }

                if(!repositoryAssessments['expert2']){
                    repositoryResults['tasks'].push(repositoryTasks['expert2']);
                }

                if(!repositoryAssessments['expert3']){
                    repositoryResults['tasks'].push(repositoryTasks['expert3']);
                }

                if(repositoryAssessments['traveller1']){
                    repositoryResults['undoTasks'].push(repositoryTasks['traveller1']);
                }

                if(repositoryAssessments['traveller2']){
                    repositoryResults['undoTasks'].push(repositoryTasks['traveller2']);
                }

                if(repositoryAssessments['artisan1']){
                    repositoryResults['undoTasks'].push(repositoryTasks['artisan1']);
                }

                if(repositoryAssessments['artisan2']){
                    repositoryResults['undoTasks'].push(repositoryTasks['artisan2']);
                }
            }

            if(score === 3){
                if(!repositoryAssessments['professional1']){
                    repositoryResults['tasks'].push(repositoryTasks['professional1']);
                }

                if(!repositoryAssessments['professional2']){
                    repositoryResults['tasks'].push(repositoryTasks['professional2']);
                }
            }

            if(score === 4){
                if(!repositoryAssessments['master1']){
                    repositoryResults['tasks'].push(repositoryTasks['master1']);
                }
            }

            repositoryResults['next_score'] = limitToFive(repositoryResults['next_score']);
            return repositoryResults;
        };

        var formatResultsForExecution = function(assessmentResults, score){
            var executionResults = {};
            var executionAssessments = assessmentResults !== undefined ? assessmentResults['execution'] : {};

            executionAssessments = executionAssessments !== undefined ? executionAssessments : {};

            executionResults['tasks'] = [];
            executionResults['undoTasks'] = [];

            executionResults['current_score'] = score;
            executionResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!executionAssessments['artisan1']){
                    executionResults['tasks'].push(executionTasks['artisan1']);
                }

                if(!executionAssessments['artisan2']){
                    executionResults['tasks'].push(executionTasks['artisan2']);
                }

                if(executionAssessments['traveller1']){
                    executionResults['undoTasks'].push(executionTasks['traveller1']);
                }

                if(executionAssessments['traveller2']){
                    executionResults['undoTasks'].push(executionTasks['traveller2']);
                }

                if(executionAssessments['traveller3']){
                    executionResults['undoTasks'].push(executionTasks['traveller3']);
                }

                if(executionAssessments['traveller4']){
                    executionResults['undoTasks'].push(executionTasks['traveller4']);
                }

                if(executionAssessments['traveller5']){
                    executionResults['undoTasks'].push(executionTasks['traveller5']);
                }

                if(executionAssessments['traveller6']){
                    executionResults['undoTasks'].push(executionTasks['traveller6']);
                }
            }

            if(score === 2){
                if(!executionAssessments['expert1']){
                    executionResults['tasks'].push(executionTasks['expert1']);
                }

                if(!executionAssessments['expert2']){
                    executionResults['tasks'].push(executionTasks['expert2']);
                }

                if(!executionAssessments['expert3']){
                    executionResults['tasks'].push(executionTasks['expert3']);
                }
            }

            if(score === 3){
                if(!executionAssessments['professional1']){
                    executionResults['tasks'].push(executionTasks['professional1']);
                }

                if(!executionAssessments['professional2']){
                    executionResults['tasks'].push(executionTasks['professional2']);
                }
            }

            if(score === 4){
                if(!executionAssessments['master1']){
                    executionResults['tasks'].push(executionTasks['master1']);
                }

                if(!executionAssessments['master2']){
                    executionResults['tasks'].push(executionTasks['master2']);
                }
            }

            executionResults['next_score'] = limitToFive(executionResults['next_score']);
            return executionResults;
        };

        var formatResultsForProcess = function(assessmentResults, score){
            var processResults = {};
            var processAssessments = assessmentResults !== undefined ? assessmentResults['process'] : {};

            processAssessments = processAssessments !== undefined ? processAssessments : {};

            processResults['tasks'] = [];
            processResults['undoTasks'] = [];

            processResults['current_score'] = score;
            processResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!processAssessments['artisan1']){
                    processResults['tasks'].push(processTasks['artisan1']);
                }

                if(processAssessments['traveller3']){
                    processResults['undoTasks'].push(processTasks['traveller3']);
                }

                if(processAssessments['traveller4']){
                    processResults['undoTasks'].push(processTasks['traveller4']);
                }
            }

            if(score === 2){
                if(processAssessments['traveller1']){
                    processResults['undoTasks'].push(processTasks['traveller1']);
                }

                if(processAssessments['traveller2']){
                    processResults['undoTasks'].push(processTasks['traveller2']);
                }

                if(processAssessments['traveller3']){
                    processResults['undoTasks'].push(processTasks['traveller3']);
                }

                if(processAssessments['traveller4']){
                    processResults['undoTasks'].push(processTasks['traveller4']);
                }

                if(!processAssessments['artisan1']){
                    processResults['tasks'].push(processTasks['artisan1']);
                }

                if(!processAssessments['expert1']){
                    processResults['tasks'].push(processTasks['expert1']);
                }

                if(!processAssessments['expert2']){
                    processResults['tasks'].push(processTasks['expert2']);
                }

                if(!processAssessments['expert3']){
                    processResults['tasks'].push(processTasks['expert3']);
                }
            }

            if(score === 3){
                if(!processAssessments['professional1']){
                    processResults['tasks'].push(processTasks['professional1']);
                }

                if(!processAssessments['professional2']){
                    processResults['tasks'].push(processTasks['professional2']);
                }

                if(!processAssessments['professional3']){
                    processResults['tasks'].push(processTasks['professional3']);
                }
            }

            if(score === 4){
                if(!processAssessments['master1']){
                    processResults['tasks'].push(processTasks['master1']);
                }

                if(!processAssessments['master2']){
                    processResults['tasks'].push(processTasks['master2']);
                }

                if(!processAssessments['master3']){
                    processResults['tasks'].push(processTasks['master3']);
                }
            }

            processResults['next_score'] = limitToFive(processResults['next_score']);
            return processResults;
        };

        $scope.saveAssessmentResult = function () {
            SaveQAResults.saveAssessments($scope.resultsData, $scope.bodyData).then(function (response) {
                console.log(response.data);
                $scope.isSaved = true;
                $scope.isNotSaved = false;
            }, function (errorResponse) {
                console.log(errorResponse.data);
                $scope.isNotSaved = true;
                $scope.isSaved = false;
            });
        };

    }])

    .factory('SaveQAResults', ['$http', function ($http) {
        return {
            saveAssessments: function (data, body) {
                return $http({
                    url: "http://178.62.75.15:8081/saveTeamData",
                    method: "POST",
                    params: data,
                    data: body
                });
            },
            drawChart: function (teamName, standardsScore, metricsScore, integrationScore, stakeholderScore,
                                 teamManagementScore, documentationScore, assessmentProcessScore, researchScore,
                                 involvementScore, repositoryScore, executionScore, processScore, selectedPortfolioName) {
                new Chart(document.getElementById("radar-chart-qa"), {
                    type: 'radar',
                    data: {
                        labels: ["Scripts standards and quality", "Metrics and Reporting", "Integration",
                            "Stakeholder Management", "Team Management", "Documentation", "Assessment",
                            "Research & Innovation and Technology", "Moment of Involvement", "Repository",
                            "Execution", "Process and Practices"
                        ],
                        datasets: [
                            {
                                label: "TEAM: " + teamName,
                                fill: true,
                                backgroundColor: "rgba(255,99,132,0.2)",
                                borderColor: "rgba(255,99,132,1)",
                                pointBorderColor: "#fff",
                                pointBackgroundColor: "rgba(255,99,132,1)",
                                data: [standardsScore, metricsScore, integrationScore, stakeholderScore,
                                    teamManagementScore, documentationScore, assessmentProcessScore, researchScore,
                                    involvementScore, repositoryScore, executionScore, processScore
                                ]
                            }
                        ]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'QaMaM Assessment Results for ' + teamName
                        },
                        scale: {
                            ticks: {
                                beginAtZero: true,
                                min: 0,
                                max: 5,
                                stepSize: 1
                            }
                        }
                    }
                });
            }
        }
    }])

    .factory('RetrieveQAAssessment', ['$http', function ($http) {
        return {
            getAssessment: function (teamName) {
                return $http({
                    url: "http://178.62.75.15:8081/assessment?teamName="+teamName,
                    method: "GET"
                });
            }
        }
    }]);
