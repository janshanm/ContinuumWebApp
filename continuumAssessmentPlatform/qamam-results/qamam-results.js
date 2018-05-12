'use strict';

angular.module('continuumAssessmentPlatform.qamam-results', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/qamam-results', {
            templateUrl: 'qamam-results/qamam-results.html',
            controller: 'QamamResultsCtrl'
        });
    }])

    .controller('QamamResultsCtrl', ['$scope', '$rootScope', 'SaveQAMAMResults', 'RetrieveQAMAMAssessment', '$location', function($scope, $rootScope, SaveQAMAMResults, RetrieveQAMAMAssessment, $location) {

        $scope.testingScore = 1;
        $scope.testMetricsScore = 1;
        $scope.qualityAlignmentScore = 1;
        $scope.practiceInnovationScore = 1;
        $scope.toolsArtefactScore = 1;
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
                RetrieveQAMAMAssessment.getAssessment(teamName).then(function(response){
                    var data = response.data;
                    $rootScope.teamName = data['teamName'];
                    var assessments = data['rawData'] !== undefined ? JSON.parse(data['rawData']) : {};
                    $scope.generateResultsChart(assessments);
                });
            }
            else{
                $scope.generateResultsChart($rootScope.assessmentsQaMaM);
            }

        };

        $scope.generateResultsChart = function(assessments) {
            if(typeof assessments !== "undefined") {
                $scope.testingScore = assessments['testing'] !== undefined ? assessments['testing'].score : 1;
                $scope.testMetricsScore = assessments['test-metrics'] !== undefined ? assessments['test-metrics'].score : 1;
                $scope.qualityAlignmentScore = assessments['quality-alignment'] !== undefined ? assessments['quality-alignment'].score : 1;
                $scope.practiceInnovationScore = assessments['practice-innovation'] !== undefined ? assessments['practice-innovation'].score : 1;
                $scope.toolsArtefactScore = assessments['tools-artefacts'] !== undefined ? assessments['tools-artefacts'].score : 1;
            }

            $scope.resultsData['teamName'] = $rootScope.teamName;
            $scope.resultsData['testing'] = $scope.testingScore;
            $scope.resultsData['test-metrics'] = $scope.testMetricsScore;
            $scope.resultsData['quality-alignment'] = $scope.qualityAlignmentScore;
            $scope.resultsData['practice-innovation'] = $scope.practiceInnovationScore;
            $scope.resultsData['tools-artefacts'] = $scope.toolsArtefactScore;
            $scope.resultsData['portfolioName'] = $rootScope.selectedPortfolioName;
            $scope.resultsData['rawData'] = assessments;

            $scope.testing = formatResultsForTesting(assessments, $scope.testingScore);
            $scope.testMetrics = formatResultsForTestMetrics(assessments, $scope.testMetricsScore);
            $scope.qualityAlignment = formatResultsForQualityAlignment(assessments, $scope.qualityAlignmentScore);
            $scope.practiceInnovation = formatResultsForPracticeInnovation(assessments, $scope.practiceInnovationScore);
            $scope.toolsArtefact = formatResultsForToolsArtefact(assessments, $scope.toolsArtefactScore);

            $scope.bodyData['recommendedCapabilities'] = $scope.getRecommendedCapabilities('tasks');
            $scope.bodyData['capabilitiesToStop'] = $scope.getRecommendedCapabilities('undoTasks');

            var totalScore = ($scope.testingScore + $scope.testMetricsScore + $scope.qualityAlignmentScore
            + $scope.practiceInnovationScore + $scope.toolsArtefactScore);

            $scope.teamScore = Math.floor(totalScore/5);

            SaveQAMAMResults.drawChart($rootScope.teamName, $scope.testingScore, $scope.testMetricsScore,
                $scope.qualityAlignmentScore, $scope.practiceInnovationScore, $scope.toolsArtefactScore);

        };

        $scope.getRecommendedCapabilities = function (typeOfTask) {
            var tasks = {};
            tasks['testing'] = $scope.testing[typeOfTask];
            tasks['testMetrics'] = $scope.testMetrics[typeOfTask];
            tasks['qualityAlignment'] = $scope.qualityAlignment[typeOfTask];
            tasks['practiceInnovation'] = $scope.practiceInnovation[typeOfTask];
            tasks['toolsArtefact'] = $scope.toolsArtefact[typeOfTask];
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

        var testCriteriaTasks = {'traveller1': 'Team does not take part in scope identification.',
            'traveller2': 'User Stories have only one acceptance criteria that is defined upfront.',
            'traveller3': 'Team applies same logic/technique to all testing activities.',
            'artisan1': 'Acceptance criteria is only used to derive acceptance tests.',
            'artisan2': 'Certain user stories may have more than one acceptance criteria (i.e happy and unhappy path).',
            'artisan3': 'Team investigates different test approaches per user story for different scenarios.',
            'artisan4': 'A proper Definition of Done is defined for testing tasks. (E.g a Testing Checklist).',
            'artisan5': 'No definition of readiness.',
            'expert1': 'Whole team reviews and defines acceptance criteria for user stories.',
            'expert2': 'Acceptance criteria specifies both functional and non-functional requirements of increment.',
            'expert3': 'Test conditions are extracted from each Acceptance Criterion to help define testing requirements.',
            'expert4': 'Team applies a Risk level to each Test Condition extracted.',
            'expert5': 'Team applies some form of Context Driven approach to testing.',
            'expert6': 'Proper definition of readiness is defined.',
            'professional1': 'Acceptance Criteria are INVEST(Independent, Negotiable, Valuable, Estimable, Small and Testable).',
            'professional2': 'Test conditions are prioritised based on the risk level.',
            'professional3': 'Testing is focused on the intent behind Software/Application Usage.',
            'professional4': 'Manual testing (such as Exploratory Testing) is conducted based on logical reasoning, heuristics and critical thinking.',
            'professional5': 'Definition of Done and Readiness are reviewed as part of retrospective session.',
            'professional6': 'Cross Feature Team Dependencies addressed in Scrum of Scrums Meeting.',
            'master1': 'Acceptance criterion have clear Pass/Fail results - No Partial Acceptance.',
            'master2': 'Test process applies dynamic and progressive risk analysis and is constantly evolving as the team evolves.'
        };

        var defectAndExploratoryTestingTasks = {
            'traveller1': 'No defects logged, and no defect process flow identified. No defect strategy identified, including the defect life cycle.',
            'traveller2': 'No use of Exploratory Testing.',
            'traveller3': 'Do not know what Exploratory Testing is or have investigated but not applied.',
            'artisan1': 'Defects are logged as and when team sees it necessary. Defects are logged but not properly communicated to stakeholders.',
            'artisan2': 'Some basic adhoc use of Exploratory Testing.',
            'artisan3': 'No list of issues, bugs, list of features and/or notes on the testing conducted.',
            'expert1': 'Defect strategy and process flow is identified and documented, and communicated to all stakeholders.',
            'expert2': 'Exploratory Testing is considered as part of the testing effort and included as part of the estimate of a user story.',
            'expert3': 'All Exploratory Test sessions are recorded and documented on a spreadsheet or some other tool.',
            'professional1': 'A tool is used to record issues/incidents/defects.',
            'professional2': 'High priority defects that are carried forward are reported, tracked and tested whenever fixed.',
            'professional3': 'Defects are prioritised and re-tested according to their priority.',
            'professional4': 'Use of a Test Charter for exploratory session to record and document the testing.',
            'professional5': 'Exploratory techniques are recommended and used, but there is still room for improvement.',
            'professional6': 'Exploratory testing does not overlap basic Functional tests already covered and are reported in terms of Test Coverage metrics.',
            'master1': 'All defects are properly logged, and all stakeholders are aware of the defect process and it is being followed accordingly.',
            'master2': 'All defects are properly fixed, and re-tested.',
            'master3': 'Use of a Standardised Test Charter or Tool to record a proper Session Based Exploratory Test.',
            'master4': 'Exploratory techniques are fully used, strategies are fully documented and used by all stakeholders.',
            'master5': 'Estimation of work includes effort for automating tests that find using Exploratory Testing techniques'};

        var automationTestingTasks = {
            'traveller1': 'There are no use of common repository and all test artefacts are stored locally.',
            'traveller2': 'Tools used are what is available at the bank.',
            'traveller3': 'There are limitations to what platforms can be automated.',
            'traveller4': 'There are limitations to languages that can be used.',
            'traveller5': 'Performance and Security testing is not considered upfront.',
            'artisan1': 'Scripts are stored in a common repository but not updated frequently.',
            'artisan2': 'Object Map or object repository is stored on common repository but not frequently updated.',
            'artisan3': 'Team understands the importance of performance and security testing but do not have specialised skills, resources or platform to perform non-functional tests.',
            'expert1': 'Scripts are stored in a common repository and updated after every deployment.',
            'expert2': 'Object map or repository is kept up to date.',
            'expert3': 'Automation tool can accommodate multiple languages.',
            'expert4': 'Automation tool provides cross platform and cross browser testing capabilities.',
            'expert5': 'Basic functionality tests includes performance and security concerns.',
            'expert6': 'Test conditions for Non-Functional are extracted with basic functional test conditions.',
            'expert7': 'Failed performance and security tests mean code failure is not allowed to go live.',
            'professional1': 'Script repository being used has powerful integration capabilities.',
            'professional2': 'Automation tool has satisfactory remote support.',
            'professional3': '% Automation test coverage are calculated using Lightsabre stats from Automation team.',
            'professional4': 'Performance test for each functionality being developed with use of stubs and drivers.',
            'professional5': 'Use of Static Code Analysis tools by Developers to improve security of overall application.',
            'professional6': 'Have a realistic mechanism to define and perform security tests.',
            'professional7': 'Have sufficient expertise to perform adequate security testing.',
            'professional8': 'Have predefined Security Dimensions (such as Access Control, Password Control, Logging and monitoring) covered by tests in alignment with Security Team.',
            'professional9': 'Security specialists are involved in scrum of srum meetings and have global knowledge of the work of all feature teams.',
            'professional10': 'Automated Performance and Security Tests in place to check application against deployment environment.',
            'master1': 'All artefacts are under version management.',
            'master2': 'Test related metrics also have the required level of support.',
            'master3': 'Tools provide support for test case design and defect collection.',
            'master4': '% Automated test coverage are calculated by collaborating with Automation team for automation tools or repository (e.g lightsabre, CHEF, etc).',
            'master5': 'Constant maintenance of Non-Functional Regression pack based on Performance and Security Registers and Audits (Internal and External).',
            'master6': 'Analytics results used to improve Performance, Security and overall User Experience of Application even after Go Live.',
            'master7': 'Have threat modelling scenarios and acceptable risk levels established up front.',
            'master8': 'Set of documents that identify and justify the security requirements of the application is in place.',
            'master9': 'Security professionals and Developers sit down together to analyse applications from an attacker point of view.',
            'master10': 'Use of Dynamic Code analysis tools (such as WebInspect) planned and used for all code deployments'};

        var testMetricsTasks = {
            'traveller1': 'No metrics at all and/or metrics only provided when requested.',
            'traveller2': 'No predefined standards for metrics and reporting.',
            'traveller3': 'No tracking of Test Coverage.',
            'traveller4': 'Work estimation not done or understood at all, stakeholders not involved in the work estimation process and not attending the work estimation ceremonies, e.g. PI Planning, Release Planning, etc.',
            'traveller5': 'Best guess techniques are used to estimate work.',
            'artisan1': 'Few basic ad-hoc metrics in place.',
            'artisan2': 'Sharing of delivery metrics to relevant member when requested only.',
            'artisan3': 'Team uses a physical board for their user story cards and update the feature with test excution results.',
            'artisan4': 'No metrics to record test coverage for reporting.',
            'artisan5': 'Work estimation involves taking deadlines/dates into consideration.',
            'artisan6': 'Work estimation does not cater for all activities, e.g. testing, automation.',
            'artisan7': 'Some stakeholders are involved in the estimation process.',
            'artisan8': 'Estimates are based on historical data.',
            'expert1': 'Recording of team metrics with delivery highlights and lowlights in some form of template (e.g. word, excel).',
            'expert2': 'Team follows a predefined standard for metrics and reporting.',
            'expert3': 'Use a tool to create user stories.',
            'expert4': 'Test coverage is linked to a user story  by means of subtasks.',
            'expert5': 'The tool is used to  track the coverage of test scenarios and results.',
            'expert6': 'Work estimates involve taking activities (coding, testing, automation) into consideration rather than deadlines.',
            'expert7': 'Work is estimated using pre-defined estimation  techniques to understand what effort is needed.',
            'expert8': 'Work estimates are done using more formal techniques like user story points involving the whole team.',
            'professional1': 'Metrics are used to monitor the delivery trends.',
            'professional2': 'Use of a dashboard to provide visibility.',
            'professional3': 'Use of unified metrics for projects health check and work forecasting.',
            'professional4': 'Sprint highlights and lowlights are concise,  traceable, useful and simple to understand.',
            'professional5': 'Quality Metrics include Security and Performance of build increment(s).',
            'professional6': 'There is traceability of test coverage for epics, features/compnents,  user stories, release version and subtasks.',
            'professional7': 'Test scenarios and test results are  tracked under the user story and are recorded in the tool with  a repository to extract coverage metrics.',
            'professional8': 'Coverage metrics are shared with programme team at the end of each release/sprint.',
            'professional9': 'Work estimation techniques are applied to Epics and features as well as user stories.',
            'professional10': 'Work estimates are used to define release dates/deadlines.',
            'professional11': 'Definition of readiness and definition of done is defined and agreed by team.',
            'professional12': 'Accuracy of estimation is included in the retrospectives and continuous refinement to the process is applied.',
            'master1': 'Metrics and coverage reports displayed on enterprise monitoring tool and is updated in real-time.',
            'master2': 'Dashboard is easily accessible and open to all with clear understandable graphs and detail.',
            'master3': 'Use of forecasting figures in planning sessions.',
            'master4': 'Metrics are continuously used to identify risks and action items.',
            'master5': 'Metrics are fully (forward and backward) traceable.',
            'master6': 'Useful metrics evolve as the team matures.',
            'master7': 'Metrics align to bank-wide standards.',
            'master8': 'Tool/s are  used by feature team to manage release, epics, user stories, components, features, subtask and issues/defects carried forward for an end to end view of a release.',
            'master9': 'A defined template to extract issues of type user story and subtasks to track test coverage and test results.',
            'master10': 'Coverage metric showcase trends of % test covered for manual and automation tests.',
            'master11': 'Work estimates techniques, DOR and DOD are continuously evolving as the team matures Stakeholders are a crucial part of the estimation process.',
            'master12': 'Work estimates aligns across other teams and the organization.',
            'master13': 'Data specific to estimates are kept and utilised to predict future work.'
        };

        var qualityAlignmentTasks = {
            'traveller1': 'There are no common practices nor rules in place for the team.',
            'traveller2': 'Testing is a phase after development.',
            'traveller3': 'There is no plan on how to test increment.',
            'traveller4': 'Testing (Functional and Non-Functional) is not involved in PI and/or Release Planning.',
            'traveller5': 'There is no governance structure whatsoever.',
            'traveller6': 'Agenda not clearly defined nor understood by individuals throughout the different levels of SAFE.',
            'traveller7': 'Feature teams do not have a clear understanding of the roles of the people they deal with.',
            'traveller8': 'Customer feedback do not reach the team levels.',
            'traveller9': 'Testing team defines all the work to be done along with Dev and business without involving Specialist team.',
            'artisan1': 'All written scripts are reviewed by whole team and follows standards that is agreed by the team.',
            'artisan2': 'Each QE/Test Analyst plans his/her own individual approach to testing their work increment.',
            'artisan3': 'No formal Test strategy is in place, and any alignment to any such strategy is purely coincidental.',
            'artisan4': 'Alignment between different feature teams and product road map is inexistent.',
            'artisan5': 'External team responsible for governance.',
            'artisan6': 'Top-down Information is sifted and communicated on a need to know basis to feature team levels.',
            'expert1': 'Quality standards documented and in line with Quality Policy of the organization.',
            'expert2': 'Testing activities are discussed and defined with estimation/sizing of user stories.',
            'expert3': 'Team is aligned on testing effort required per user story and of the plan on how to test.',
            'expert4': 'Testing and QA is shifted-left by making use of Test First Approach to build quality in.',
            'expert5': 'Test strategy is defined upfront with all levels of testing being considered.',
            'expert6': 'Specialist teams are involved upfront.',
            'expert7': 'Fit for purpose sign-offs (Go Ahead) for all product quality enhancement proposals.',
            'expert8': 'Team tries to build in customer feedback loop but is not always actioned or incorporated in planning.',
            'expert9': 'Proper chain of communication established to pass down information from portfolio level to all levels but still not a 2 way communication.',
            'expert10': 'Specialist team involved  from system architecture planning (including NFT Teams).',
            'professional1': 'Standards match and align to the Bank Standards for Quality.',
            'professional2': 'Quality Assurance follows a high level standard to ensure quality increment delivery at the end of each sprint.',
            'professional3': 'Test plan and strategy for all partner feature teams are in line with Product Roadmap.',
            'professional4': 'Defects, Incidents and risk management and mitigation plans/process is in place and understood by all.',
            'professional5': 'Fit for purpose governance makes it an enabler rather than a hindrance.',
            'professional6': 'Full transparency - All decisions and strategy discussion is understood by all individuals at all levels in the Scaled Agile framework. (Portfolio, program and team levels).',
            'professional7': 'All feature teams working in parallel have a clear view and understanding of what each team does and have their goals aligned based on release and product deadlines. (vision is aligned with iterations and releases.).',
            'professional8': 'Scrum of scrum takes place to provide feedback and as a communication channel to ensure goals alignment and information delivered across all levels.',
            'professional9': 'Testers are fully involved with Developers as part of the Test First Approach to help build the product better.',
            'professional10': 'With T-shaped skills Testers can play an advisory role from both a business and testing perspective.',
            'professional11': 'Testers are the intermediary to help communication between DEV and Business where necessary.',
            'master1': 'Test Plan, Strategy and Process is adaptive and  easily responsive to change.',
            'master2': 'Team is able to evolve testing as the product and team dynamics matures.',
            'master3': 'QA leads are fully engaged with business and Development leads in making product related decisions.',
            'master4': 'Governance values team throughput and value add.',
            'master5': 'Customer feedback is acknowledged, given priority and taken into consideration when planning releases and iterations.',
            'master6': 'The feature teams consists of  Operational team members and the whole team is responsible for the product quality, from the inception to maintenance in production - You build it, you run it.'
        };

        var practiceInnovationTasks = {
            'traveller1': 'Work distribution relies heavily on formal documentation.',
            'traveller2': 'Transparency is inexistent and team members do what they are told to without any knowledge for the bigger picture.',
            'traveller3': 'Role of QA is solely to perform testing to find defects and bugs in the product.',
            'traveller4': 'There are no records of any testing done.',
            'traveller5': 'Handover is informal and not documented.',
            'traveller6': 'Once-off informal in-house training conducted.',
            'traveller7': 'Customers are not in the loop when it comes to product development and progress.',
            'traveller8': 'Kanban - not release bounded or Scrum - not time boxed properly due to lack of proper planning.',
            'traveller9': 'No set structure or guidelines for User stories.',
            'traveller10': 'Code packages are not shippable at the end of releases.',
            'traveller11': 'Written tests are not programming adaptive (i.e. cannot be coded/automated).',
            'artisan1': 'Work distribution is done based on strategic planning and regular sync-up takes place to provide updates on WIP.',
            'artisan2': 'QA input is valued in the design phase of the product.',
            'artisan3': 'Handover is documented and available but not maintained.',
            'artisan4': 'Training requirement is identified regularly.',
            'artisan5': 'Consistent training process for new team members is in place.',
            'expert1': 'Teams adhere to the agile principles and values.',
            'expert2': 'Formal ceremonies in place to promote communication amongst the teams and through all levels of the enterprise but not done regularly.',
            'expert3': 'Pair Programming and Test First Approach is favoured and more focus is put on defect prevention.',
            'expert4': 'All QA team members have basic knowledge of performance, security and other NFT and applies their knowledge when promoting quality throughout the process.',
            'expert5': 'Feature teams are able to provide coverage reports and record of all testing and QA activities done upon request.',
            'expert6': 'Formal handover documentation continuously reviewed and updated.',
            'expert7': 'Updating the formal documentation is part of Definition of Done for continuity purposes.',
            'expert8': 'Formal training is arranged and continuously revised and adhered to market demand.',
            'expert9': 'Use of Personas based on real customer profiles.',
            'expert10': 'Kanban - release bounded or scrum - time boxed properly to align with company vision and product releases (i.e. teams apply Cadence and Synchronise with other feature teams).',
            'expert11': 'All code packages are shippable at the end of a release.',
            'professional1': 'Daily stand-ups (concise and time framed) takes place where team members gives quick feedback and  their goals for the day.',
            'professional2': 'Scrum of scrum meetings takes place, where all important information are filtered down to each feature team (transparency and knowledge of the big picture).',
            'professional3': 'QA is fully cross-skilled with knowledge of business, development, functional and non functional testing.',
            'professional4': 'All activities should adhere to a set list of Definition of Readiness and Definition of Done.',
            'professional5': 'Regular occurrence of Showcase involving Product owners and other feature teams.',
            'professional6': 'Sprint Demo, Product Increment Demo are used to showcase successful delivery of the User Story/Function point to Business before releases/implementations.',
            'professional7': 'Knowledge sharing sessions are happening proactively within team members.',
            'professional8': 'Team members are given the opportunity to go to workshops/training to upskill themselves.',
            'professional9': 'Test First approach is adopted and all written test are in a programming adaptive manner.',
            'professional10': 'Proper structure and guidelines set for User Stories based on criteria such as Description, functionality and time estimation (estimation is optional but good to have).',
            'master1': 'Feature Teams adopts methods (like the happiness metrics and team health checks) to promote individual and team productivity.'};

        var toolsArtefactsTasks = {
            'traveller1': 'Test Artefacts on test management tool is created once off and not maintained.',
            'traveller2': 'Test results require manual intervention to be created.',
            'traveller3': 'No reporting process in place, team not aware of any reporting needs.',
            'traveller4': 'Tools used are ones that were used previously with no collaboration/integration whatsoever.',
            'artisan1': 'Metrics Report are provided only when requested.',
            'artisan2': 'Only high-level details provided.',
            'artisan3': 'Team uses tools such as Jira and Confluence to collaborate with one other.',
            'artisan4': 'Other stakeholders have access to Jira/Confluence to view issues and pages with only viewer rights.',
            'artisan5': 'Tools integration is investigated and lightly documented as part of Test Architecture.',
            'expert1': 'All scripts are stored on a central repository and called upon when required.',
            'expert2': 'Common UI used to store all test artefacts and scripts.',
            'expert3': 'Release status is shared regularly with stakeholders, with information about the  current status of the PI.',
            'expert4': 'The team understands and uses tools (like Mind Maps etc.) for Collaboration.',
            'expert5': 'Collaboration tools are used to breakdown problems into smaller chunks to work with and identify the tasks involved in a user story.',
            'expert6': 'Stakeholders are constantly involved to help the team align.',
            'expert7': 'Test tool talks to at least one additional (external test or task management) tool.',
            'professional1': 'A dedicated team is assigned to repository maintenance and version control.',
            'professional2': 'Test artefacts and scripts can be accessed from anywhere and continuously maintained.',
            'professional3': 'Proper log tracking and reports created for use of artefacts and related information.',
            'professional4': 'Daily update are shared to relevant stakeholders.',
            'professional5': 'Template for report is in place with escalation in terms of PI/Release risks.',
            'professional6': 'Collaboration Tools are used throughout to align and collaborate within and across Feature Teams and the Release Train (including System/Specialist Teams) for successful delivery of value to end customer.',
            'professional7': 'Use of collaboration tools to provide updates  for all tasks and progress and metrics charts and are updated often. (e.g. scrum/Kanban boards and printed charts and graphs).',
            'professional8': 'Testing Tool(s) is/are talking to test management tool, task management tool, defect management tool, reporting tool, code repository, scheduler.',
            'professional9': 'The team applies organisation wide standard on tool used.',
            'master1': 'Real-time update of all status via the Dashboard and is accessible to all stakeholders.',
            'master2': 'Real-time update of all progress and metrics constantly displayed and is visible and accessible to all individual throughout the levels of SAFE.',
            'master3': 'Use of Customer feedback platforms to gather feedback and information which enables the team to collaborate on and prioritize customer feature requests and create stories for possible inclusion in upcoming releases.',
            'master4': 'Full toolset integration that enables automated metrics generation, updating of testware statuses, auto-scheduled executions, etc.'};

        var formatResultsForTesting = function(assessmentResults, score){
            var testingResults = {};
            var testCriteriaAssessments = assessmentResults !== undefined ? assessmentResults['test-criteria'] : {};
            var defectAndExploratoryAssessments = assessmentResults !== undefined ? assessmentResults['defect-and-exploratory'] : {};
            var automationTestingAssessments = assessmentResults !== undefined ? assessmentResults['automation-testing'] : {};

            testCriteriaAssessments = testCriteriaAssessments !== undefined ? testCriteriaAssessments : {};
            defectAndExploratoryAssessments = defectAndExploratoryAssessments !== undefined ? defectAndExploratoryAssessments : {};
            automationTestingAssessments = automationTestingAssessments !== undefined ? automationTestingAssessments : {};

            testingResults['tasks'] = [];
            testingResults['undoTasks'] = [];

            testingResults['current_score'] = score;
            testingResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!testCriteriaAssessments['artisan1']){
                    testingResults['tasks'].push(testCriteriaTasks['artisan1']);
                }

                if(!testCriteriaAssessments['artisan2']){
                    testingResults['tasks'].push(testCriteriaTasks['artisan2']);
                }

                if(!testCriteriaAssessments['artisan3']){
                    testingResults['tasks'].push(testCriteriaTasks['artisan3']);
                }

                if(!testCriteriaAssessments['artisan4']){
                    testingResults['tasks'].push(testCriteriaTasks['artisan4']);
                }

                if(!testCriteriaAssessments['artisan5']){
                    testingResults['tasks'].push(testCriteriaTasks['artisan5']);
                }

                if(!defectAndExploratoryAssessments['artisan1']){
                    testingResults['tasks'].push(defectAndExploratoryTestingTasks['artisan1']);
                }

                if(!defectAndExploratoryAssessments['artisan2']){
                    testingResults['tasks'].push(defectAndExploratoryTestingTasks['artisan2']);
                }

                if(!defectAndExploratoryAssessments['artisan3']){
                    testingResults['tasks'].push(defectAndExploratoryTestingTasks['artisan3']);
                }

                if(!automationTestingAssessments['artisan1']){
                    testingResults['tasks'].push(automationTestingTasks['artisan1']);
                }

                if(!automationTestingAssessments['artisan2']){
                    testingResults['tasks'].push(automationTestingTasks['artisan2']);
                }

                if(!automationTestingAssessments['artisan3']){
                    testingResults['tasks'].push(automationTestingTasks['artisan3']);
                }

                if(testCriteriaAssessments['traveller1']){
                    testingResults['undoTasks'].push(testCriteriaTasks['traveller1']);
                }

                if(defectAndExploratoryAssessments['traveller1']){
                    testingResults['undoTasks'].push(defectAndExploratoryTestingTasks['traveller1']);
                }

                if(automationTestingAssessments['traveller1']){
                    testingResults['undoTasks'].push(automationTestingTasks['traveller1']);
                }

                if(testCriteriaAssessments['traveller2']){
                    testingResults['undoTasks'].push(testCriteriaTasks['traveller2']);
                }

                if(defectAndExploratoryAssessments['traveller2']){
                    testingResults['undoTasks'].push(defectAndExploratoryTestingTasks['traveller2']);
                }

                if(automationTestingAssessments['traveller2']){
                    testingResults['undoTasks'].push(automationTestingTasks['traveller2']);
                }

                if(testCriteriaAssessments['traveller3']){
                    testingResults['undoTasks'].push(testCriteriaTasks['traveller3']);
                }

                if(defectAndExploratoryAssessments['traveller3']){
                    testingResults['undoTasks'].push(defectAndExploratoryTestingTasks['traveller3']);
                }

                if(automationTestingAssessments['traveller3']){
                    testingResults['undoTasks'].push(automationTestingTasks['traveller3']);
                }

                if(automationTestingAssessments['traveller4']){
                    testingResults['undoTasks'].push(automationTestingTasks['traveller4']);
                }

                if(automationTestingAssessments['traveller5']){
                    testingResults['undoTasks'].push(automationTestingTasks['traveller5']);
                }
            }

            if(score === 2){
                if(!testCriteriaAssessments['expert1']){
                    testingResults['tasks'].push(testCriteriaTasks['expert1']);
                }

                if(!testCriteriaAssessments['expert2']){
                    testingResults['tasks'].push(testCriteriaTasks['expert2']);
                }

                if(!testCriteriaAssessments['expert3']){
                    testingResults['tasks'].push(testCriteriaTasks['expert3']);
                }

                if(!testCriteriaAssessments['expert4']){
                    testingResults['tasks'].push(testCriteriaTasks['expert4']);
                }

                if(!testCriteriaAssessments['expert5']){
                    testingResults['tasks'].push(testCriteriaTasks['expert5']);
                }

                if(!testCriteriaAssessments['expert6']){
                    testingResults['tasks'].push(testCriteriaTasks['expert6']);
                }

                if(!defectAndExploratoryAssessments['expert1']){
                    testingResults['tasks'].push(defectAndExploratoryTestingTasks['expert1']);
                }

                if(!defectAndExploratoryAssessments['expert2']){
                    testingResults['tasks'].push(defectAndExploratoryTestingTasks['expert2']);
                }

                if(!defectAndExploratoryAssessments['expert3']){
                    testingResults['tasks'].push(defectAndExploratoryTestingTasks['expert3']);
                }

                if(!automationTestingAssessments['expert1']){
                    testingResults['tasks'].push(automationTestingTasks['expert1']);
                }

                if(!automationTestingAssessments['expert2']){
                    testingResults['tasks'].push(automationTestingTasks['expert2']);
                }

                if(!automationTestingAssessments['expert3']){
                    testingResults['tasks'].push(automationTestingTasks['expert3']);
                }

                if(!automationTestingAssessments['expert4']){
                    testingResults['tasks'].push(automationTestingTasks['expert4']);
                }

                if(!automationTestingAssessments['expert5']){
                    testingResults['tasks'].push(automationTestingTasks['expert5']);
                }

                if(!automationTestingAssessments['expert6']){
                    testingResults['tasks'].push(automationTestingTasks['expert6']);
                }

                if(!automationTestingAssessments['expert7']){
                    testingResults['tasks'].push(automationTestingTasks['expert7']);
                }

                if(testCriteriaAssessments['artisan1']){
                    testingResults['undoTasks'].push(testCriteriaTasks['artisan1']);
                }

                if(defectAndExploratoryAssessments['artisan1']){
                    testingResults['undoTasks'].push(defectAndExploratoryTestingTasks['artisan1']);
                }

                if(automationTestingAssessments['artisan1']){
                    testingResults['undoTasks'].push(automationTestingTasks['artisan1']);
                }

                if(defectAndExploratoryAssessments['artisan2']){
                    testingResults['undoTasks'].push(defectAndExploratoryTestingTasks['artisan2']);
                }

                if(automationTestingAssessments['artisan2']){
                    testingResults['undoTasks'].push(automationTestingTasks['artisan2']);
                }

                if(defectAndExploratoryAssessments['artisan3']){
                    testingResults['undoTasks'].push(defectAndExploratoryTestingTasks['artisan3']);
                }

                if(automationTestingAssessments['artisan3']){
                    testingResults['undoTasks'].push(automationTestingTasks['artisan3']);
                }

                if(testCriteriaAssessments['artisan5']){
                    testingResults['undoTasks'].push(testCriteriaTasks['artisan5']);
                }
            }

            if(score === 3){
                if(!testCriteriaAssessments['professional1']){
                    testingResults['tasks'].push(testCriteriaTasks['professional1']);
                }

                if(!testCriteriaAssessments['professional2']){
                    testingResults['tasks'].push(testCriteriaTasks['professional2']);
                }

                if(!testCriteriaAssessments['professional3']){
                    testingResults['tasks'].push(testCriteriaTasks['professional3']);
                }

                if(!testCriteriaAssessments['professional4']){
                    testingResults['tasks'].push(testCriteriaTasks['professional4']);
                }

                if(!testCriteriaAssessments['professional5']){
                    testingResults['tasks'].push(testCriteriaTasks['professional5']);
                }

                if(!testCriteriaAssessments['professional6']){
                    testingResults['tasks'].push(testCriteriaTasks['professional6']);
                }

                if(!defectAndExploratoryAssessments['professional1']){
                    testingResults['tasks'].push(defectAndExploratoryTestingTasks['professional1']);
                }

                if(!defectAndExploratoryAssessments['professional2']){
                    testingResults['tasks'].push(defectAndExploratoryTestingTasks['professional2']);
                }

                if(!defectAndExploratoryAssessments['professional3']){
                    testingResults['tasks'].push(defectAndExploratoryTestingTasks['professional3']);
                }

                if(!defectAndExploratoryAssessments['professional4']){
                    testingResults['tasks'].push(defectAndExploratoryTestingTasks['professional4']);
                }

                if(!defectAndExploratoryAssessments['professional5']){
                    testingResults['tasks'].push(defectAndExploratoryTestingTasks['professional5']);
                }

                if(!defectAndExploratoryAssessments['professional6']){
                    testingResults['tasks'].push(defectAndExploratoryTestingTasks['professional6']);
                }

                if(!automationTestingAssessments['professional1']){
                    testingResults['tasks'].push(automationTestingTasks['professional1']);
                }

                if(!automationTestingAssessments['professional2']){
                    testingResults['tasks'].push(automationTestingTasks['professional2']);
                }

                if(!automationTestingAssessments['professional3']){
                    testingResults['tasks'].push(automationTestingTasks['professional3']);
                }

                if(!automationTestingAssessments['professional4']){
                    testingResults['tasks'].push(automationTestingTasks['professional4']);
                }

                if(!automationTestingAssessments['professional5']){
                    testingResults['tasks'].push(automationTestingTasks['professional5']);
                }

                if(!automationTestingAssessments['professional6']){
                    testingResults['tasks'].push(automationTestingTasks['professional6']);
                }

                if(!automationTestingAssessments['professional7']){
                    testingResults['tasks'].push(automationTestingTasks['professional7']);
                }

                if(!automationTestingAssessments['professional8']){
                    testingResults['tasks'].push(automationTestingTasks['professional8']);
                }

                if(!automationTestingAssessments['professional9']){
                    testingResults['tasks'].push(automationTestingTasks['professional9']);
                }

                if(!automationTestingAssessments['professional10']){
                    testingResults['tasks'].push(automationTestingTasks['professional10']);
                }
            }

            if(score === 4){
                if(!testCriteriaAssessments['master1']){
                    testingResults['tasks'].push(testCriteriaTasks['master1']);
                }

                if(!testCriteriaAssessments['master2']){
                    testingResults['tasks'].push(testCriteriaTasks['master2']);
                }

                if(!defectAndExploratoryAssessments['master1']){
                    testingResults['tasks'].push(defectAndExploratoryTestingTasks['master1']);
                }

                if(!defectAndExploratoryAssessments['master2']){
                    testingResults['tasks'].push(defectAndExploratoryTestingTasks['master2']);
                }

                if(!defectAndExploratoryAssessments['master3']){
                    testingResults['tasks'].push(defectAndExploratoryTestingTasks['master3']);
                }

                if(!defectAndExploratoryAssessments['master4']){
                    testingResults['tasks'].push(defectAndExploratoryTestingTasks['master4']);
                }

                if(!defectAndExploratoryAssessments['master5']){
                    testingResults['tasks'].push(defectAndExploratoryTestingTasks['master5']);
                }

                if(!automationTestingAssessments['master1']){
                    testingResults['tasks'].push(automationTestingTasks['master1']);
                }

                if(!automationTestingAssessments['master2']){
                    testingResults['tasks'].push(automationTestingTasks['master2']);
                }

                if(!automationTestingAssessments['master3']){
                    testingResults['tasks'].push(automationTestingTasks['master3']);
                }

                if(!automationTestingAssessments['master4']){
                    testingResults['tasks'].push(automationTestingTasks['master4']);
                }

                if(!automationTestingAssessments['master5']){
                    testingResults['tasks'].push(automationTestingTasks['master5']);
                }

                if(!automationTestingAssessments['master6']){
                    testingResults['tasks'].push(automationTestingTasks['master6']);
                }

                if(!automationTestingAssessments['master7']){
                    testingResults['tasks'].push(automationTestingTasks['master7']);
                }

                if(!automationTestingAssessments['master8']){
                    testingResults['tasks'].push(automationTestingTasks['master8']);
                }

                if(!automationTestingAssessments['master9']){
                    testingResults['tasks'].push(automationTestingTasks['master9']);
                }

                if(!automationTestingAssessments['master10']){
                    testingResults['tasks'].push(automationTestingTasks['master10']);
                }
            }

            testingResults['next_score'] = limitToFive(testingResults['next_score']);
            return testingResults;

        };

        var formatResultsForTestMetrics = function(assessmentResults, score){
            var testMetricsResults = {};
            var testMetricsAssessments = assessmentResults !== undefined ? assessmentResults['test-metrics'] : {};

            testMetricsAssessments = testMetricsAssessments !== undefined ? testMetricsAssessments : {};

            testMetricsResults['tasks'] = [];
            testMetricsResults['undoTasks'] = [];

            testMetricsResults['current_score'] = score;
            testMetricsResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!testMetricsAssessments['artisan1']){
                    testMetricsResults['tasks'].push(testMetricsTasks['artisan1']);
                }

                if(!testMetricsAssessments['artisan2']){
                    testMetricsResults['tasks'].push(testMetricsTasks['artisan2']);
                }

                if(!testMetricsAssessments['artisan3']){
                    testMetricsResults['tasks'].push(testMetricsTasks['artisan3']);
                }

                if(!testMetricsAssessments['artisan4']){
                    testMetricsResults['tasks'].push(testMetricsTasks['artisan4']);
                }

                if(!testMetricsAssessments['artisan5']){
                    testMetricsResults['tasks'].push(testMetricsTasks['artisan5']);
                }

                if(!testMetricsAssessments['artisan6']){
                    testMetricsResults['tasks'].push(testMetricsTasks['artisan6']);
                }

                if(!testMetricsAssessments['artisan7']){
                    testMetricsResults['tasks'].push(testMetricsTasks['artisan7']);
                }

                if(!testMetricsAssessments['artisan8']){
                    testMetricsResults['tasks'].push(testMetricsTasks['artisan8']);
                }

                if(testMetricsAssessments['traveller1']){
                    testMetricsResults['undoTasks'].push(testMetricsTasks['traveller1']);
                }

                if(testMetricsAssessments['traveller2']){
                    testMetricsResults['undoTasks'].push(testMetricsTasks['traveller2']);
                }

                if(testMetricsAssessments['traveller3']){
                    testMetricsResults['undoTasks'].push(testMetricsTasks['traveller3']);
                }

                if(testMetricsAssessments['traveller4']){
                    testMetricsResults['undoTasks'].push(testMetricsTasks['traveller4']);
                }

                if(testMetricsAssessments['traveller5']){
                    testMetricsResults['undoTasks'].push(testMetricsTasks['traveller5']);
                }
            }

            if(score === 2){
                if(testMetricsAssessments['artisan1']){
                    testMetricsResults['undoTasks'].push(testMetricsTasks['artisan1']);
                }

                if(testMetricsAssessments['artisan2']){
                    testMetricsResults['undoTasks'].push(testMetricsTasks['artisan2']);
                }

                if(testMetricsAssessments['artisan4']){
                    testMetricsResults['undoTasks'].push(testMetricsTasks['artisan4']);
                }

                if(testMetricsAssessments['artisan5']){
                    testMetricsResults['undoTasks'].push(testMetricsTasks['artisan5']);
                }

                if(testMetricsAssessments['artisan6']){
                    testMetricsResults['undoTasks'].push(testMetricsTasks['artisan6']);
                }

                if(testMetricsAssessments['artisan7']){
                    testMetricsResults['undoTasks'].push(testMetricsTasks['artisan7']);
                }

                if(!testMetricsAssessments['artisan8']){
                    testMetricsResults['tasks'].push(testMetricsTasks['artisan8']);
                }

                if(!testMetricsAssessments['expert1']){
                    testMetricsResults['tasks'].push(testMetricsTasks['expert1']);
                }

                if(!testMetricsAssessments['expert2']){
                    testMetricsResults['tasks'].push(testMetricsTasks['expert2']);
                }

                if(!testMetricsAssessments['expert3']){
                    testMetricsResults['tasks'].push(testMetricsTasks['expert3']);
                }

                if(!testMetricsAssessments['expert4']){
                    testMetricsResults['tasks'].push(testMetricsTasks['expert4']);
                }

                if(!testMetricsAssessments['expert5']){
                    testMetricsResults['tasks'].push(testMetricsTasks['expert5']);
                }

                if(!testMetricsAssessments['expert6']){
                    testMetricsResults['tasks'].push(testMetricsTasks['expert6']);
                }

                if(!testMetricsAssessments['expert7']){
                    testMetricsResults['tasks'].push(testMetricsTasks['expert7']);
                }

                if(!testMetricsAssessments['expert8']){
                    testMetricsResults['tasks'].push(testMetricsTasks['expert8']);
                }
            }

            if(score === 3){
                if(!testMetricsAssessments['professional1']){
                    testMetricsResults['tasks'].push(testMetricsTasks['professional1']);
                }

                if(!testMetricsAssessments['professional2']){
                    testMetricsResults['tasks'].push(testMetricsTasks['professional2']);
                }

                if(!testMetricsAssessments['professional3']){
                    testMetricsResults['tasks'].push(testMetricsTasks['professional3']);
                }

                if(!testMetricsAssessments['professional4']){
                    testMetricsResults['tasks'].push(testMetricsTasks['professional4']);
                }

                if(!testMetricsAssessments['professional5']){
                    testMetricsResults['tasks'].push(testMetricsTasks['professional5']);
                }

                if(!testMetricsAssessments['professional6']){
                    testMetricsResults['tasks'].push(testMetricsTasks['professional6']);
                }

                if(!testMetricsAssessments['professional7']){
                    testMetricsResults['tasks'].push(testMetricsTasks['professional7']);
                }

                if(!testMetricsAssessments['professional8']){
                    testMetricsResults['tasks'].push(testMetricsTasks['professional8']);
                }

                if(!testMetricsAssessments['professional9']){
                    testMetricsResults['tasks'].push(testMetricsTasks['professional9']);
                }

                if(!testMetricsAssessments['professional10']){
                    testMetricsResults['tasks'].push(testMetricsTasks['professional10']);
                }

                if(!testMetricsAssessments['professional11']){
                    testMetricsResults['tasks'].push(testMetricsTasks['professional11']);
                }

                if(!testMetricsAssessments['professional12']){
                    testMetricsResults['tasks'].push(testMetricsTasks['professional12']);
                }
            }

            if(score === 4){
                if(!testMetricsAssessments['master1']){
                    testMetricsResults['tasks'].push(testMetricsTasks['master1']);
                }

                if(!testMetricsAssessments['master2']){
                    testMetricsResults['tasks'].push(testMetricsTasks['master2']);
                }

                if(!testMetricsAssessments['master3']){
                    testMetricsResults['tasks'].push(testMetricsTasks['master3']);
                }

                if(!testMetricsAssessments['master4']){
                    testMetricsResults['tasks'].push(testMetricsTasks['master4']);
                }

                if(!testMetricsAssessments['master5']){
                    testMetricsResults['tasks'].push(testMetricsTasks['master5']);
                }

                if(!testMetricsAssessments['master6']){
                    testMetricsResults['tasks'].push(testMetricsTasks['master6']);
                }

                if(!testMetricsAssessments['master7']){
                    testMetricsResults['tasks'].push(testMetricsTasks['master7']);
                }

                if(!testMetricsAssessments['master8']){
                    testMetricsResults['tasks'].push(testMetricsTasks['master8']);
                }

                if(!testMetricsAssessments['master9']){
                    testMetricsResults['tasks'].push(testMetricsTasks['master9']);
                }

                if(!testMetricsAssessments['master10']){
                    testMetricsResults['tasks'].push(testMetricsTasks['master10']);
                }

                if(!testMetricsAssessments['master11']){
                    testMetricsResults['tasks'].push(testMetricsTasks['master11']);
                }

                if(!testMetricsAssessments['master12']){
                    testMetricsResults['tasks'].push(testMetricsTasks['master12']);
                }

                if(!testMetricsAssessments['master13']){
                    testMetricsResults['tasks'].push(testMetricsTasks['master13']);
                }
            }

            testMetricsResults['next_score'] = limitToFive(testMetricsResults['next_score']);
            return testMetricsResults;

        };

        var formatResultsForQualityAlignment = function(assessmentResults, score){
            var qualityAlignmentResults = {};
            var qualityAlignmentAssessments = assessmentResults !== undefined ? assessmentResults['quality-alignment'] : {};

            qualityAlignmentAssessments = qualityAlignmentAssessments !== undefined ? qualityAlignmentAssessments : {};

            qualityAlignmentResults['tasks'] = [];
            qualityAlignmentResults['undoTasks'] = [];

            qualityAlignmentResults['current_score'] = score;
            qualityAlignmentResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!qualityAlignmentAssessments['artisan1']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['artisan1']);
                }

                if(!qualityAlignmentAssessments['artisan2']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['artisan2']);
                }

                if(!qualityAlignmentAssessments['artisan3']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['artisan3']);
                }

                if(!qualityAlignmentAssessments['artisan4']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['artisan4']);
                }

                if(!qualityAlignmentAssessments['artisan5']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['artisan5']);
                }

                if(!qualityAlignmentAssessments['artisan6']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['artisan6']);
                }

                if(qualityAlignmentAssessments['traveller1']){
                    qualityAlignmentResults['undoTasks'] = [qualityAlignmentTasks['traveller1']];
                }

                if(qualityAlignmentAssessments['traveller2']){
                    qualityAlignmentResults['undoTasks'] = [qualityAlignmentTasks['traveller2']];
                }

                if(qualityAlignmentAssessments['traveller3']){
                    qualityAlignmentResults['undoTasks'] = [qualityAlignmentTasks['traveller3']];
                }

                if(qualityAlignmentAssessments['traveller4']){
                    qualityAlignmentResults['undoTasks'] = [qualityAlignmentTasks['traveller4']];
                }

                if(qualityAlignmentAssessments['traveller5']){
                    qualityAlignmentResults['undoTasks'] = [qualityAlignmentTasks['traveller5']];
                }

                if(qualityAlignmentAssessments['traveller6']){
                    qualityAlignmentResults['undoTasks'] = [qualityAlignmentTasks['traveller6']];
                }

                if(qualityAlignmentAssessments['traveller7']){
                    qualityAlignmentResults['undoTasks'] = [qualityAlignmentTasks['traveller7']];
                }

                if(qualityAlignmentAssessments['traveller8']){
                    qualityAlignmentResults['undoTasks'] = [qualityAlignmentTasks['traveller8']];
                }

                if(qualityAlignmentAssessments['traveller9']){
                    qualityAlignmentResults['undoTasks'] = [qualityAlignmentTasks['traveller9']];
                }
            }

            if(score === 2){
                if(!qualityAlignmentAssessments['expert1']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['expert1']);
                }

                if(!qualityAlignmentAssessments['expert2']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['expert2']);
                }

                if(!qualityAlignmentAssessments['expert3']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['expert3']);
                }

                if(!qualityAlignmentAssessments['expert4']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['expert4']);
                }

                if(!qualityAlignmentAssessments['expert5']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['expert5']);
                }

                if(!qualityAlignmentAssessments['expert6']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['expert6']);
                }

                if(!qualityAlignmentAssessments['expert7']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['expert27']);
                }

                if(!qualityAlignmentAssessments['expert8']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['expert8']);
                }

                if(!qualityAlignmentAssessments['expert9']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['expert9']);
                }

                if(!qualityAlignmentAssessments['expert10']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['expert10']);
                }

                if(qualityAlignmentAssessments['artisan2']){
                    qualityAlignmentResults['undoTasks'] = [qualityAlignmentTasks['artisan2']];
                }

                if(qualityAlignmentAssessments['artisan3']){
                    qualityAlignmentResults['undoTasks'] = [qualityAlignmentTasks['artisan3']];
                }

                if(qualityAlignmentAssessments['artisan5']){
                    qualityAlignmentResults['undoTasks'] = [qualityAlignmentTasks['artisan5']];
                }

                if(qualityAlignmentAssessments['artisan6']){
                    qualityAlignmentResults['undoTasks'] = [qualityAlignmentTasks['artisan6']];
                }
            }

            if(score === 3){
                if(!qualityAlignmentAssessments['professional1']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['professional1']);
                }

                if(!qualityAlignmentAssessments['professional2']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['professional2']);
                }

                if(!qualityAlignmentAssessments['professional3']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['professional3']);
                }

                if(!qualityAlignmentAssessments['professional4']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['professional4']);
                }

                if(!qualityAlignmentAssessments['professional5']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['professional5']);
                }

                if(!qualityAlignmentAssessments['professional6']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['professional6']);
                }

                if(!qualityAlignmentAssessments['professional7']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['professional7']);
                }

                if(!qualityAlignmentAssessments['professional8']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['professional8']);
                }

                if(!qualityAlignmentAssessments['professional9']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['professional9']);
                }

                if(!qualityAlignmentAssessments['professional10']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['professional10']);
                }

                if(!qualityAlignmentAssessments['professional11']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['professional11']);
                }

                if(qualityAlignmentAssessments['artisan4']){
                    qualityAlignmentResults['undoTasks'] = [qualityAlignmentTasks['artisan4']];
                }

                if(qualityAlignmentAssessments['expert9']){
                    qualityAlignmentResults['undoTasks'] = [qualityAlignmentTasks['expert9']];
                }
            }

            if(score === 4){
                if(!qualityAlignmentAssessments['master1']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['master1']);
                }

                if(!qualityAlignmentAssessments['master2']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['master2']);
                }

                if(!qualityAlignmentAssessments['master3']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['master3']);
                }

                if(!qualityAlignmentAssessments['master4']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['master4']);
                }

                if(!qualityAlignmentAssessments['master5']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['master5']);
                }

                if(!qualityAlignmentAssessments['master6']){
                    qualityAlignmentResults['tasks'].push(qualityAlignmentTasks['master6']);
                }
            }

            qualityAlignmentResults['next_score'] = limitToFive(qualityAlignmentResults['next_score']);
            return qualityAlignmentResults;

        };

        var formatResultsForPracticeInnovation = function(assessmentResults, score){
            var practiceInnovationResults = {};
            var practiceInnovationAssessments = assessmentResults !== undefined ? assessmentResults['practice-innovation'] : {};

            practiceInnovationAssessments = practiceInnovationAssessments !== undefined ? practiceInnovationAssessments : {};

            practiceInnovationResults['tasks'] = [];
            practiceInnovationResults['undoTasks'] = [];

            practiceInnovationResults['current_score'] = score;
            practiceInnovationResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!practiceInnovationAssessments['artisan1']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['artisan1']);
                }

                if(!practiceInnovationAssessments['artisan2']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['artisan2']);
                }

                if(!practiceInnovationAssessments['artisan3']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['artisan3']);
                }

                if(!practiceInnovationAssessments['artisan4']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['artisan4']);
                }

                if(!practiceInnovationAssessments['artisan5']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['artisan5']);
                }

                if(practiceInnovationAssessments['traveller1']){
                    practiceInnovationResults['undoTasks'].push(practiceInnovationTasks['traveller1']);
                }

                if(practiceInnovationAssessments['traveller2']){
                    practiceInnovationResults['undoTasks'].push(practiceInnovationTasks['traveller2']);
                }

                if(practiceInnovationAssessments['traveller3']){
                    practiceInnovationResults['undoTasks'].push(practiceInnovationTasks['traveller3']);
                }

                if(practiceInnovationAssessments['traveller5']){
                    practiceInnovationResults['undoTasks'].push(practiceInnovationTasks['traveller5']);
                }

                if(practiceInnovationAssessments['traveller6']){
                    practiceInnovationResults['undoTasks'].push(practiceInnovationTasks['traveller6']);
                }
            }

            if(score === 2){
                if(!practiceInnovationAssessments['expert1']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['expert1']);
                }

                if(!practiceInnovationAssessments['expert2']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['expert2']);
                }

                if(!practiceInnovationAssessments['expert3']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['expert3']);
                }

                if(!practiceInnovationAssessments['expert4']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['expert4']);
                }

                if(!practiceInnovationAssessments['expert5']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['expert5']);
                }

                if(!practiceInnovationAssessments['expert6']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['expert6']);
                }

                if(!practiceInnovationAssessments['expert7']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['expert7']);
                }

                if(!practiceInnovationAssessments['expert8']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['expert8']);
                }

                if(!practiceInnovationAssessments['expert9']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['expert9']);
                }

                if(!practiceInnovationAssessments['expert10']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['expert10']);
                }

                if(!practiceInnovationAssessments['expert11']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['expert11']);
                }

                if(practiceInnovationAssessments['traveller4']){
                    practiceInnovationResults['undoTasks'].push(practiceInnovationTasks['traveller4']);
                }

                if(practiceInnovationAssessments['traveller7']){
                    practiceInnovationResults['undoTasks'].push(practiceInnovationTasks['traveller7']);
                }

                if(practiceInnovationAssessments['traveller8']){
                    practiceInnovationResults['undoTasks'].push(practiceInnovationTasks['traveller8']);
                }

                if(practiceInnovationAssessments['traveller10']){
                    practiceInnovationResults['undoTasks'].push(practiceInnovationTasks['traveller10']);
                }

                if(practiceInnovationAssessments['artisan3']){
                    practiceInnovationResults['undoTasks'].push(practiceInnovationTasks['artisan3']);
                }
            }

            if(score === 3){
                if(!practiceInnovationAssessments['professional1']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['professional1']);
                }

                if(!practiceInnovationAssessments['professional2']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['professional2']);
                }

                if(!practiceInnovationAssessments['professional3']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['professional3']);
                }

                if(!practiceInnovationAssessments['professional4']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['professional4']);
                }

                if(!practiceInnovationAssessments['professional5']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['professional5']);
                }

                if(!practiceInnovationAssessments['professional6']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['professional6']);
                }

                if(!practiceInnovationAssessments['professional7']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['professional7']);
                }

                if(!practiceInnovationAssessments['professional8']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['professional8']);
                }

                if(!practiceInnovationAssessments['professional9']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['professional9']);
                }

                if(!practiceInnovationAssessments['professional10']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['professional10']);
                }

                if(practiceInnovationAssessments['traveller9']){
                    practiceInnovationResults['undoTasks'].push(practiceInnovationTasks['traveller9']);
                }

                if(practiceInnovationAssessments['traveller11']){
                    practiceInnovationResults['undoTasks'].push(practiceInnovationTasks['traveller11']);
                }
            }

            if(score === 4){
                if(!practiceInnovationAssessments['master1']){
                    practiceInnovationResults['tasks'].push(practiceInnovationTasks['master1']);
                }
            }

            practiceInnovationResults['next_score'] = limitToFive(practiceInnovationResults['next_score']);
            return practiceInnovationResults;

        };

        var formatResultsForToolsArtefact = function(assessmentResults, score){
            var toolsArtefactsResults = {};
            var toolsArtefactsAssessments = assessmentResults !== undefined ? assessmentResults['tools-artefacts'] : {};

            toolsArtefactsAssessments = toolsArtefactsAssessments !== undefined ? toolsArtefactsAssessments : {};

            toolsArtefactsResults['tasks'] = [];
            toolsArtefactsResults['undoTasks'] = [];

            toolsArtefactsResults['current_score'] = score;
            toolsArtefactsResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!toolsArtefactsAssessments['artisan1']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['artisan1']);
                }

                if(!toolsArtefactsAssessments['artisan2']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['artisan2']);
                }

                if(!toolsArtefactsAssessments['artisan3']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['artisan3']);
                }

                if(!toolsArtefactsAssessments['artisan4']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['artisan4']);
                }

                if(!toolsArtefactsAssessments['artisan5']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['artisan5']);
                }

                if(toolsArtefactsAssessments['traveller3']){
                    toolsArtefactsResults['undoTasks'].push(toolsArtefactsTasks['traveller3']);
                }

                if(toolsArtefactsAssessments['traveller4']){
                    toolsArtefactsResults['undoTasks'].push(toolsArtefactsTasks['traveller4']);
                }
            }

            if(score === 2){
                if(!toolsArtefactsAssessments['expert1']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['expert1']);
                }

                if(!toolsArtefactsAssessments['expert2']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['expert2']);
                }

                if(!toolsArtefactsAssessments['expert3']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['expert3']);
                }

                if(!toolsArtefactsAssessments['expert4']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['expert4']);
                }

                if(!toolsArtefactsAssessments['expert5']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['expert5']);
                }

                if(!toolsArtefactsAssessments['expert6']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['expert6']);
                }

                if(!toolsArtefactsAssessments['expert7']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['expert7']);
                }

                if(toolsArtefactsAssessments['artisan1']){
                    toolsArtefactsResults['undoTasks'].push(toolsArtefactsTasks['artisan1']);
                }

                if(toolsArtefactsAssessments['artisan2']){
                    toolsArtefactsResults['undoTasks'].push(toolsArtefactsTasks['artisan2']);
                }
            }

            if(score === 3){
                if(!toolsArtefactsAssessments['professional1']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['professional1']);
                }

                if(!toolsArtefactsAssessments['professional2']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['professional2']);
                }

                if(!toolsArtefactsAssessments['professional3']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['professional3']);
                }

                if(!toolsArtefactsAssessments['professional4']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['professional4']);
                }

                if(!toolsArtefactsAssessments['professional5']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['professional5']);
                }

                if(!toolsArtefactsAssessments['professional6']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['professional6']);
                }

                if(!toolsArtefactsAssessments['professional7']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['professional7']);
                }

                if(!toolsArtefactsAssessments['professional8']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['professional8']);
                }

                if(!toolsArtefactsAssessments['professional9']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['professional9']);
                }

                if(toolsArtefactsAssessments['artisan1']){
                    toolsArtefactsResults['undoTasks'].push(toolsArtefactsTasks['artisan1']);
                }

                if(toolsArtefactsAssessments['artisan2']){
                    toolsArtefactsResults['undoTasks'].push(toolsArtefactsTasks['artisan2']);
                }

                if(toolsArtefactsAssessments['traveller1']){
                    toolsArtefactsResults['undoTasks'].push(toolsArtefactsTasks['traveller1']);
                }

                if(toolsArtefactsAssessments['traveller2']){
                    toolsArtefactsResults['undoTasks'].push(toolsArtefactsTasks['traveller2']);
                }

                if(toolsArtefactsAssessments['artisan1']){
                    toolsArtefactsResults['undoTasks'].push(toolsArtefactsTasks['artisan1']);
                }

                if(toolsArtefactsAssessments['artisan2']){
                    toolsArtefactsResults['undoTasks'].push(toolsArtefactsTasks['artisan2']);
                }
            }

            if(score === 4){
                if(!toolsArtefactsAssessments['master1']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['master1']);
                }

                if(!toolsArtefactsAssessments['master2']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['master2']);
                }

                if(!toolsArtefactsAssessments['master3']){
                    toolsArtefactsResults['tasks'].push(toolsArtefactsTasks['master3']);
                }

                if(toolsArtefactsAssessments['artisan5']){
                    toolsArtefactsResults['undoTasks'].push(toolsArtefactsTasks['artisan5']);
                }
            }

            toolsArtefactsResults['next_score'] = limitToFive(toolsArtefactsResults['next_score']);
            return toolsArtefactsResults;
        };

        $scope.saveAssessmentResult = function () {
            SaveQAMAMResults.saveAssessments($scope.resultsData, $scope.bodyData).then(function (response) {
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

    .factory('SaveQAMAMResults', ['$http', function ($http) {
        return {
            saveAssessments: function (data, body) {
                return $http({
                    url: "http://178.62.75.15:8081/saveTeamData-qamam",
                    method: "POST",
                    params: data,
                    data: body
                });
            },
            drawChart: function (teamName, testingScore, testMetricsScore, qualityAlignmentScore, practiceInnovationScore,
                                 toolsArtefactScore) {
                new Chart(document.getElementById("radar-chart-qa"), {
                    type: 'radar',
                    data: {
                        labels: ["Testing", "Test Metrics", "Quality Alignment",
                            "Practice and Innovation", "Tools & Artefacts"
                        ],
                        datasets: [
                            {
                                label: "TEAM: " + teamName,
                                fill: true,
                                backgroundColor: "rgba(255,99,132,0.2)",
                                borderColor: "rgba(255,99,132,1)",
                                pointBorderColor: "#fff",
                                pointBackgroundColor: "rgba(255,99,132,1)",
                                data: [testingScore, testMetricsScore, qualityAlignmentScore, practiceInnovationScore,
                                    toolsArtefactScore
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

    .factory('RetrieveQAMAMAssessment', ['$http', function ($http) {
        return {
            getAssessment: function (teamName) {
                return $http({
                    url: "http://178.62.75.15:8081/assessment-qamam?teamName="+teamName,
                    method: "GET"
                });
            }
        }
    }]);
