'use strict';

angular.module('continuumAssessmentPlatform.results', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/results', {
            templateUrl: 'results/results.html',
            controller: 'ResultsCtrl'
        });
    }])

    .controller('ResultsCtrl', ['$scope', '$rootScope', 'SaveResults', '$location', 'RetrieveAssessment', function($scope, $rootScope, SaveResults, $location, RetrieveAssessment) {

        $scope.strategyScore = 1;
        $scope.planningScore = 1;
        $scope.codingScore = 1;
        $scope.ciScore = 1;
        $scope.incidentScore = 1;
        $scope.riskScore = 1;
        $scope.designScore = 1;
        $scope.teamingScore = 1;
        $scope.releaseScore = 1;
        $scope.QAScore = 1;
        $scope.environmentsScore = 1;
        $scope.featureTeamsScore = 1;
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
                RetrieveAssessment.getAssessment(teamName).then(function(response){
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
            if (typeof assessments !== "undefined") {
                $scope.strategyScore = assessments['strategy'] !== undefined ? assessments['strategy'].score : 1;
                $scope.planningScore = assessments['planning'] !== undefined ? assessments['planning'].score : 1;
                $scope.codingScore = assessments['coding'] !== undefined ? assessments['coding'].score : 1;
                $scope.ciScore = assessments['ci'] !== undefined ? assessments['ci'].score : 1;
                $scope.incidentScore = assessments['incident'] !== undefined ? assessments['incident'].score : 1;
                $scope.riskScore = assessments['risk'] !== undefined ? assessments['risk'].score : 1;
                $scope.designScore = assessments['design'] !== undefined ? assessments['design'].score : 1;
                $scope.teamingScore = assessments['teaming'] !== undefined ? assessments['teaming'].score : 1;
                $scope.releaseScore = assessments['release'] !== undefined ? assessments['release'].score : 1;
                $scope.QAScore = assessments['QA'] !== undefined ? assessments['QA'].score : 1;
                $scope.environmentsScore = assessments['environments'] !== undefined ? assessments['environments'].score : 1;
                $scope.featureTeamsScore = assessments['featureTeams'] !== undefined ? assessments['featureTeams'].score : 1;
            }

            $scope.resultsData['teamName'] = $rootScope.teamName;
            $scope.resultsData['strategy'] = $scope.strategyScore;
            $scope.resultsData['planning'] = $scope.planningScore;
            $scope.resultsData['coding'] = $scope.codingScore;
            $scope.resultsData['ci'] = $scope.ciScore;
            $scope.resultsData['incident'] = $scope.incidentScore;
            $scope.resultsData['risk'] = $scope.riskScore;
            $scope.resultsData['design'] = $scope.designScore;
            $scope.resultsData['teaming'] = $scope.teamingScore;
            $scope.resultsData['release'] = $scope.releaseScore;
            $scope.resultsData['qa'] = $scope.QAScore;
            $scope.resultsData['environments'] = $scope.environmentsScore;
            $scope.resultsData['featureTeams'] = $scope.featureTeamsScore;
            $scope.resultsData['portfolioName'] = $rootScope.selectedPortfolioName;
            $scope.resultsData['rawData'] = $rootScope.assessments;

            $scope.strategy = formatResultsForStrategy($rootScope.assessments, $scope.strategyScore);
            $scope.planning = formatResultsForPlanning($rootScope.assessments, $scope.planningScore);
            $scope.coding = formatResultsForCoding($rootScope.assessments, $scope.codingScore);
            $scope.ci = formatResultsForCI($rootScope.assessments, $scope.ciScore);
            $scope.incident = formatResultsForIncident($rootScope.assessments, $scope.incidentScore);
            $scope.risk = formatResultsForRisk($rootScope.assessments, $scope.riskScore);
            $scope.design = formatResultsForDesign($rootScope.assessments, $scope.designScore);
            $scope.teaming = formatResultsForTeaming($rootScope.assessments, $scope.teamingScore);
            $scope.release = formatResultsForRelease($rootScope.assessments, $scope.releaseScore);
            $scope.quality = formatResultsForQA($rootScope.assessments, $scope.QAScore);
            $scope.environments = formatResultsForEnvironments($rootScope.assessments, $scope.environmentsScore);
            $scope.featureTeams = formatResultsForFeatureTeams($rootScope.assessments, $scope.featureTeamsScore);

            $scope.bodyData['recommendedCapabilities'] = $scope.getRecommendedCapabilities('tasks');
            $scope.bodyData['capabilitiesToStop'] = $scope.getRecommendedCapabilities('undoTasks');

            var totalScore = ($scope.strategyScore + $scope.planningScore + $scope.codingScore + $scope.ciScore
            + $scope.incidentScore + $scope.riskScore + $scope.designScore + $scope.teamingScore + $scope.releaseScore
            + $scope.QAScore + $scope.environmentsScore + $scope.featureTeamsScore);

            $scope.teamScore = Math.floor(totalScore / 12);

            SaveResults.drawChart($rootScope.teamName, $scope.strategyScore, $scope.planningScore, $scope.codingScore, $scope.ciScore,
                $scope.incidentScore, $scope.riskScore, $scope.designScore, $scope.teamingScore, $scope.releaseScore,
                $scope.QAScore, $scope.environmentsScore, $scope.featureTeamsScore, $rootScope.selectedPortfolioName);
        };

        $scope.getRecommendedCapabilities = function (typeOfTask) {
            var tasks = {};
            tasks['strategy'] = $scope.strategy[typeOfTask];
            tasks['planning'] = $scope.planning[typeOfTask];
            tasks['coding'] = $scope.coding[typeOfTask];
            tasks['ci'] = $scope.ci[typeOfTask];
            tasks['incident'] = $scope.incident[typeOfTask];
            tasks['risk'] = $scope.risk[typeOfTask];
            tasks['design'] = $scope.design[typeOfTask];
            tasks['teaming'] = $scope.teaming[typeOfTask];
            tasks['release'] = $scope.release[typeOfTask];
            tasks['quality'] = $scope.quality[typeOfTask];
            tasks['environments'] = $scope.environments[typeOfTask];
            tasks['featureTeams'] = $scope.featureTeams[typeOfTask];

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

        var strategyTasks = {'traveller1': 'Any alignment to Strategy is coincidental or opportunistic',
            'artisan1': 'Upfront engagement with stakeholders to ensure Business and Technical Alignment',
            'artisan2': 'The product/project vision is explicitly aligned to strategy',
            'artisan3': 'Post implementation review to confirm strategy alignment',
            'expert1': 'Occasional engagement with stakeholders throughout delivery cycle to review business and technical alignment',
            'expert2': 'Backlog items are created to deal with strategy alignment issues',
            'professional1': 'Frequent engagement with Stakeholders to review Business and technical alignment',
            'professional2': 'Team presents product to Architecture and Design teams with the intent of picking up alignment issues ',
            'professional3': 'Metrics to measure strategy elements defined and tracked ',
            'master1': 'All major strategy alignment backlog items have been resolved',
            'master2': 'All requirements are attached to business metric',
            'master3': 'Metrics are tracked over time and improvements targets are set and achieved',
            'master4': 'Team independently innovates by creating new features or optimisations in support of or extending the strategy. '};

        var planningTasks = {
            'traveller1': 'Team is not involved in estimates',
            'traveller2': 'No Specific prioritization of requirements',
            'traveller3': 'Iteration lengths are erratic and based on the amount of functionality',
            'traveller4': 'The team does not know their velocity',
            'traveller5': 'No Stakeholder management in place ',
            'artisan1': 'Team performs estimates up-front',
            'artisan2': 'Requirements are prioritized based on business value',
            'artisan3': 'Iteration lengths are fixed',
            'artisan4': 'The team knows their velocity ',
            'artisan5': 'Stakeholders have been identified and a communication plan is in place',
            'expert1': 'Team performs estimation iteratively',
            'expert2': 'When the team estimates, the estimates include all activities to reach Done.',
            'expert3': 'The MVP and MVPS have been identified',
            'expert4': 'The teams velocity is predictable ',
            'expert5': 'All backlog items are sized by the teams',
            'expert6': 'Stakeholders attend showcase',
            'professional1': 'Team tracks performance against estimates',
            'professional2': 'Requirements are developed on a just –in –time basis',
            'professional3': 'Analytics are implemented to determine the effectiveness of requirements',
            'professional4': 'The amount of functionality for each iteration is determined by the teams velocity',
            'professional5': 'Technical debt and defects are tracked on the backlog and form part of the estimated team velocity',
            'professional6': 'Stakeholders actively participate in retrospective',
            'master1': 'Requirements are defined with an expected outcome with an objective measure',
            'master2': 'Release planning is performed based on the teams current velocity',
            'master3': 'A process is in place (e.g. a formal beta program)  to allow extended stakeholders and customers to evaluate the software and provide feedback.'};

        var codingTasks = {
            'traveller1': 'No standards or mechanisms for ensuring code quality',
            'artisan1': 'Guidelines and/or standards are defined.',
            'artisan2': 'Consistent training process for new team members is in place',
            'expert1': 'There are mechanism’s in place to ensure that standards are followed',
            'expert2': 'Processes and practices are understood and followed by all',
            'expert3': 'Metrics are defined but not necessarily reviewed and acted on',
            'expert4': 'The team proactively improves the code',
            'professional1': 'Code metrics are part of build automation and continuous integration',
            'professional2': 'Code metrics are tracked for trends and adjustments made on a continuous basis',
            'professional3': 'The team regularly performs katas with the objective of improving their skills',
            'professional4': 'Code is regularly refactored as part of the iteration',
            'master1': 'Standards and Practices are regularly reviewed and updated',
            'master2': 'Processes and Practices are regularly reviewed and updated',
            'master3': 'The code metrics are assessed and backlog items created to drive improvement',
            'master4': 'Technical debt is minimized'};

        var ciTasks = {
            'traveller1': 'No version management of artefacts and reports',
            'traveller2': 'Deployments & Rollbacks are manual',
            'traveller3': 'Build is performed manually and infrequently.',
            'traveller4': 'Build is owned by a specific person',
            'traveller5': 'Testing is manual',
            'traveller6': 'Development environments manually provisioned and shared between teams',
            'artisan1': 'Source code is under version management.',
            'artisan2': 'Build is automated and tests are run as part of the build',
            'artisan3': 'Testing partially automated, and code coverage greater than 0',
            'expert1': 'Team checks code into version management system on daily basis.',
            'expert2': 'All artefacts are under version management.',
            'expert3': 'Build and Deployment to development environment are automated.',
            'expert4': 'Anyone in the team can start build at any point in time',
            'expert5': 'Build status and broken builds are visible to all.',
            'expert6': 'Testing partially automated – greater than 50% code coverage.',
            'expert7': 'Release and Change Management partially automated.',
            'professional1': 'Automated build and test cycle every time a change is committed',
            'professional2': 'Build metrics gathered, visible, and acted on.',
            'professional3': 'Builds are not left broken and code is not committed on a broken build.',
            'professional4': 'Deployment to test environment is automated.',
            'professional5': 'Non-functional testing is automated.',
            'professional6': 'Testing is automated as much as is practical.',
            'professional7': 'Environments can be provisioned at on demand.',
            'master1': 'Build and deployment are automated as much as is practical',
            'master2': 'The build pipeline extends directly into production',
            'master3': 'Tests are run in parallel across multiple machines',
            'master4': 'Trunk-based development is the standard practice and integration happens continuously. Branches are rarely created and are short lived.',
            'master5': 'Check-ins occur multiple times each day.',
            'master6': 'Environment & infrastructure specifications are managed and versioned along with all other artefacts.',
            'master7': 'The CI build creates and provisions environments to allow scalability for testing.',
            'master8': 'Release and Change Management requirements can be generated and are fully integrated into deployment processes.',
            'master9': 'The product is always in releasable state.',
            'master10': 'Automated release process, release to customers is a business decision.'};

        var incidentTasks = {
            'traveller1': 'The process for handling problems and incidents is ad-hoc.',
            'artisan1': 'An incident management process is in place and understood.',
            'artisan2': 'Key people are identified for incident management.',
            'artisan3': 'The number of handoffs and teams involved in incident resolution is minimal.',
            'expert1': 'Incidents and problems feed into backlog',
            'expert2': 'Operation requirements are identified and tracked in the backlog',
            'expert3': 'Problem management includes an urgency to address the root cause',
            'expert4': 'Root cause analysis is consistently performed.',
            'expert5': 'Level 1, 2, 3 support structure in place',
            'expert6': 'Instrumentation (monitoring) in place.',
            'professional1': 'Defects are resolved once and deployed automatically across all environments.',
            'professional2': 'Defects resolution includes full regression tests',
            'professional3': 'System health is proactively monitored.',
            'professional4': 'Root cause analysis is highly valued and regularly trended.',
            'master1': 'Feature teams do own incident management',
            'master2': 'Fail Forward (failing in a way that enables you to identify and overcome underlying problem, encapsulates the way forward and reduce the likelihood of failure the next time around)',
            'master3': 'Team actively manages, monitors and reviews what happens in production, feedback loop is enabled and acted on.'};

        var riskTasks = {
            'traveller1': 'Risk Management does not exist or is just a box to tick in order to get through a process (i.e. something done to keep risk and audit people happy).',
            'traveller2': 'There is no awareness or transparency of current risks and issues in the team.',
            'artisan1': 'Risks have been identified and are captured using an appropriate artefact such as a risk story wall or risk register.',
            'artisan2': 'Each identified risk has been assigned a risk mitigation or action plan.',
            'artisan3': ' Risks are discussed as part of the iteration planning process.',
            'expert1': 'Risks, issues and blockers are discussed and updated in appropriate detail as part of all sessions (stand-ups; iteration planning; showcases; steering committee meetings)',
            'expert2': 'Unmitigated or uncontrollable risks are easily identifiable.',
            'expert3': 'Risks, controls and action plans are assigned to appropriate owners: someone who understand the risk, has responsibility and accountability for managing the risk, and has the authority to implement controls and actions.',
            'professional1': 'The cost and benefits of risk mitigations are evaluated and recorded before they are implemented.',
            'professional2': 'Risk management roles, responsibilities and accountabilities have been  defined and agreed upon.',
            'professional3': 'Regular check points with Business Stakeholders to ensure they are aware of all risks and issues.',
            'master1': 'Risk mitigations and actions are explicitly designed to increase positive outcomes and reduce negative outcomes.',
            'master2': 'The business participates in developing mitigation strategies',
            'master3': 'Risk management is used to identify potential opportunities and drive strategy by thinking about risk in terms of uncertainty (which could be positive or negative).',
            'master4': 'Measures and metrics exist to demonstrate the effectiveness of risk management and where improvement is required.',
            'master5': 'The financial impact of risk and issues is clearly understood.'
        };

        var designTasks = {
            'traveller1': 'Speculative design and technical decisions are made on an ad hoc basis. There is no vision or long team technical planning.',
            'traveller2': 'BDUF = Big Design Up-Front.',
            'traveller3': 'Solutions are tightly coupled and brittle.',
            'artisan1': 'Regular design reviews in place.',
            'artisan2': 'Design assumptions are tracked and validated during iterations.',
            'expert1': 'Design issues are tracked and prioritised in the backlog.',
            'expert2': 'Non-functional requirements are documented and tracked.',
            'expert3': 'Clear interfaces defined between modules.',
            'expert4': 'Design is owned by the team.',
            'professional1': 'There is a partial traceability between design and requirements.',
            'professional2': 'Design requirements are expressed as automated tests.',
            'professional3': 'Non-functional requirements are defined and associated metrics tracked automatically.',
            'professional4': 'Where practical all modules of the system can be simulated.',
            'professional5': 'Where possible design is captured in a model and code generated.',
            'master1': 'There is full traceability between design and requirements.',
            'master2': 'Design activities are performed on a Just In Time basis.'};

        var teamingTasks = {
            'traveller1': 'The team cannot make decisions without consultation.',
            'traveller2': 'The teams goals and visions are unclear.',
            'traveller3': 'The team does not clearly understand the entire stakeholder landscape.',
            'artisan1': 'Team vision and goals are agreed, captured and understood.',
            'artisan2': 'There is a clear understanding of who are the teams stakeholders. (Consumers, partners and clients).',
            'artisan3': 'There is a clear definition of what the teams success is (definition of done).',
            'expert1': 'The team actively seeks feedback in an effort to achieve the goals.',
            'expert2': 'Transparency and high level of collaboration  within the team are in place.',
            'expert3': 'Impact of blockers and dependencies are minimised and managed and the team knows what these are.',
            'professional1': 'Balanced participation is in place. Team members contribute as appropriate and each members opinion is valued.',
            'professional2': 'Team uses adequate measures to monitor success.',
            'master1': 'All decision-making is internal to the team.',
            'master2': 'Complete collective ownership is in place, both when team is successful and when it fails.',
            'master3': 'Team is actively improving. Retrospectives are driving improvement.'};

        var releaseTasks = {
            'traveller1': 'Cycle time is extremely long.',
            'traveller2': 'Deployment is mostly manual, very complex and requires high level of coordination between stakeholders on the day of the release.',
            'traveller3': 'Pace and delivery of work is inconsistent throughout the release cycle.',
            'traveller4': 'Separate build artefacts are created for each environment.',
            'artisan1': 'Releases are planned to a regular cycle and features are tracked and managed to the regular time frame.',
            'artisan2': 'Planned release dates are seldom moved out.',
            'artisan3': 'The process for handing the release to operations and support teams is in place.',
            'artisan4': 'Standard build artefacts are defined and produced (release notes, binaries, configurations, test coverage reports...)',
            'expert1': 'Releases and deployments are mostly automated (might require manual configuration and coordination between teams).',
            'expert2': 'The confidence level for the release is high.',
            'professional1': 'Release notes are automatically generated.',
            'professional2': 'Releases are not reliant on the knowledge of the key individuals.',
            'professional3': 'Operations teams collaborate closely with the delivery team and contribute to minimize the risk of failure in production.',
            'professional4': 'Release metrics and trends are tracked.',
            'master1': 'Releases can be deployed at any time and are fully automated.',
            'master2': 'The team controls the release.',
            'master3': 'The product owner is able to determine when release goes into production.',
            'master4': 'Operations team is part of the product/program team.',
            'master5': 'Releases are Routine. No roll backs, always roll forward.',
            'master6': 'Dark launching is enabled (Features can be released in switched of state).'};

        var qaTasks = {
            'traveller1': 'Testing is manual.',
            'traveller2': 'There is a high amount of rework due to testing late in the lifecycle.',
            'traveller3': 'Non-functional testing is not considered upfront.',
            'traveller4': 'Test cases are designed based only on the requirements document, mainly by testing team.',
            'traveller5': 'Absence of unit/integration testing.',
            'traveller6': 'There is very little reuse of Quality Assurance assets.',
            'artisan1': 'Regression test packs are partially automated.',
            'artisan2': 'Regression packs run frequently but on an ad hoc basis.',
            'artisan3': 'Test cases designed by the team, with testing, development and business analysts.',
            'expert1': 'Regression test packs are fully automated.',
            'expert2': 'Regression test packs are run as part of the build.',
            'expert3': '50% coverage automated testing.',
            'expert4': 'Automated smoke testing is in place.',
            'expert5': 'Automated performance testing is in place.',
            'expert6': 'Non-functional requirements are defined and measured.',
            'expert7': 'Test cases designed by the team as part of the iteration.',
            'expert8': 'Unit tests are created using a test first approach.',
            'expert9': 'Quality metrics are defined but not reviewed or acted on.',
            'professional1': 'Automated infrastructure testing is in place.',
            'professional2': 'Automated security testing is in place.',
            'professional3': 'Tests are automated as much as is practical.',
            'professional4': 'Quality metrics and trends are tracked.',
            'professional5': 'Anyone can execute the tests.',
            'professional6': 'Quality metrics are part of build automation and continuous integration.',
            'professional7': 'Quality metrics are tracked for trends and adjustments made on a continuous basis.',
            'professional8': 'Non-functional testing metrics are defined early in the process.',
            'master1': 'Active process is in place to understand root cause and respond to it.',
            'master2': 'Test artefacts are treated with the same importance as code and continually refactored and maintained.',
            'master3': 'The quality metrics are assessed and backlog items created to drive improvement.',
            'master4': 'Tests drive release readiness.'};

        var environmentsTasks = {
            'traveller1': 'Data migrations un-versioned and performed manually.',
            'traveller2': 'Test data is not controllable.',
            'traveller3': 'Environments are heavily governed.',
            'traveller4': 'Environments are not refreshed regularly.',
            'traveller5': 'Test environments and test data are frequently unavailable.',
            'traveller6': 'Environments are provisioned manually.',
            'traveller7': 'Key man dependencies.',
            'artisan1': 'Changes to database are done with automated scripts versioned with application.',
            'artisan2': 'A separate test environment is available.',
            'artisan3': 'Test environment is shared with other teams.',
            'artisan4': 'An external group maintains the environment.',
            'artisan5': 'Test environments are available during specific dates/time slots.',
            'artisan6': 'Ability to deploy basic virtual environments.',
            'artisan7': 'Team has a dedicated development  environment.',
            'artisan8': 'Test Data is readily available to the team.',
            'expert1': 'Database changes are performed automatically as part of deployment process.',
            'expert2': 'Test environments are readily available. Can be reproduced with manual work + coordination between operational teams.',
            'expert3': 'Access to a production-like environment is restricted to a small group of closely-related application teams, and delays at this level are unusual.',
            'expert4': 'Environment provisioning partially automated.',
            'expert5': 'Some virtual environments have interfaces available ‘stubs’ to run end-to-end testing.',
            'expert6': 'Test Data for non-functional test requirements are provisioned and readily available.',
            'professional1': 'Database upgrades and rollbacks are tested with every deployment.',
            'professional2': 'Database performance is monitored and optimized.',
            'professional3': 'Minimal manual work is required to replicate and configure environments but this can be completed within hours.',
            'professional4': 'Multiple test environments are readily available for the exclusive use of the team, including a production-like environment that’s allows a reasonable level of non-functional and cross-system integration testing and reliable acceptance testing.',
            'professional5': 'Dev workstations are easily configured and can be built in an automated manner.',
            'professional6': 'Virtual environments have all interfaces available ‘stubs’ to run end-to-end testing.',
            'master1': 'Data and environments are treated as code, versioned and frequently re-loaded.',
            'master2': 'Release to release feedback loop of database performance and deployment process is in place.',
            'master3': 'Proactive monitoring is in place with shortest possible time to resolve failure.',
            'master4': 'Infrastructure Provisioning is built into the process, including automated deployment, provisioning, configurations and data. Integral part of the build pipeline.',
            'master5': 'Environments are managed by the team, the team able to create complete simulated environment on demand.',
            'master6': 'All environments are managed effectively.',
            'master7': 'Provisioning is fully automated.',
            'master8': 'Main dependencies are simulated across the board.',
            'master9': 'Virtualization is used if applicable.'};

        var featureTeamsTasks = {
            'traveller1': 'The team does not have all cross-functional and cross-component knowledge and skills to complete end-to-end customer feature.',
            'traveller2': 'The team members are not dedicated.',
            'traveller3': 'The is a low level of collaboration between team members.',
            'traveller4': 'There are multiple handoffs and dependencies on the external teams and stakeholders.',
            'artisan1': 'The key skills are part of the team. This includes cross-functional and cross-component skills.',
            'artisan2': 'Handoffs are identified.',
            'artisan3': 'Triad is established across three functions, quality, product and technical. Triad is committed to execute a strategy together that gets specific, intended results.',
            'expert1': 'The team members are dedicated to the team.',
            'expert2': 'Cross-functional and cross-component skills are within the team, the team works on a complete feature, across all components and disciplines (analysis, programming, testing, …).',
            'expert3': 'New members are efficiently integrated into feature team.',
            'expert4': 'Triad is fully-functioning and not dependent on external validation and external authority.',
            'expert5': 'Goals are clearly prioritized and timeously achieved.',
            'expert6': 'Team understands the full impact of deployments.',
            'professional1': 'T-shaped skills emerge (team members can perform more than one function).',
            'professional2': 'The team is self-organizing. The team is self-managed and has necessary autonomy to modify the design of their team and/or aspects of the organisational context in which the operate.',
            'professional3': 'Metrics are in place to ensure constant improvement.',
            'master1': 'All decision-making is internal to the team, who can make decisions on how to deliver artefacts, and as to quality measures applied to artefacts.',
            'master2': 'T-shaped skill profile is a majority.',
            'master3': 'Team is responsible for all aspects of feature delivery, from equipment requisition to production.',
            'master4': 'Continuous improvement is in place, driven by retrospectives within the team and across the teams.'};

        var formatResultsForStrategy = function(assessmentResults, score){
            var strategyResults = {};
            var strategyAssessments = assessmentResults !== undefined ? assessmentResults['strategy'] : {};

            strategyAssessments = strategyAssessments !== undefined ? strategyAssessments : {};

            strategyResults['tasks'] = [];
            strategyResults['undoTasks'] = [];

            strategyResults['current_score'] = score;
            strategyResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!strategyAssessments['artisan1']){
                    strategyResults['tasks'].push(strategyTasks['artisan1']);
                }

                if(!strategyAssessments['artisan2']){
                    strategyResults['tasks'].push(strategyTasks['artisan2']);
                }

                if(!strategyAssessments['artisan3']){
                    strategyResults['tasks'].push(strategyTasks['artisan3']);
                }

                if(strategyAssessments['traveller1']){
                    strategyResults['undoTasks'].push(strategyTasks['traveller1']);
                }
            }

            if(score === 2){
                if(!strategyAssessments['expert1']){
                    strategyResults['tasks'].push(strategyTasks['expert1']);
                }

                if(!strategyAssessments['expert2']){
                    strategyResults['tasks'].push(strategyTasks['expert2']);
                }
            }

            if(score === 3){
                if(strategyAssessments['expert1']){
                    strategyResults['undoTasks'].push(strategyTasks['expert1']);
                }

                if(!strategyAssessments['professional1']){
                    strategyResults['tasks'].push(strategyTasks['professional1']);
                }

                if(!strategyAssessments['professional2']){
                    strategyResults['tasks'].push(strategyTasks['professional2']);
                }

                if(!strategyAssessments['professional3']){
                    strategyResults['tasks'].push(strategyTasks['professional3']);
                }
            }

            if(score === 4){
                if(!strategyAssessments['master1']){
                    strategyResults['tasks'].push(strategyTasks['master1']);
                }

                if(!strategyAssessments['master2']){
                    strategyResults['tasks'].push(strategyTasks['master2']);
                }

                if(!strategyAssessments['master3']){
                    strategyResults['tasks'].push(strategyTasks['master3']);
                }

                if(!strategyAssessments['master4']){
                    strategyResults['tasks'].push(strategyTasks['master4']);
                }
            }

            strategyResults['next_score'] = limitToFive(strategyResults['next_score']);
            return strategyResults;

        };

        var formatResultsForPlanning = function(assessmentResults, score){
            var planningResults = {};
            var planningAssessments = assessmentResults !== undefined ? assessmentResults['planning'] : {};

            planningAssessments = planningAssessments !== undefined ? planningAssessments : {};

            planningResults['tasks'] = [];
            planningResults['undoTasks'] = [];

            planningResults['current_score'] = score;
            planningResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!planningAssessments['artisan1']){
                    planningResults['tasks'].push(planningTasks['artisan1']);
                }

                if(!planningAssessments['artisan2']){
                    planningResults['tasks'].push(planningTasks['artisan2']);
                }

                if(!planningAssessments['artisan3']){
                    planningResults['tasks'].push(planningTasks['artisan3']);
                }

                if(!planningAssessments['artisan4']){
                    planningResults['tasks'].push(planningTasks['artisan4']);
                }

                if(!planningAssessments['artisan5']){
                    planningResults['tasks'].push(planningTasks['artisan5']);
                }

                if(planningAssessments['traveller1']){
                    planningResults['undoTasks'].push(planningTasks['traveller1']);
                }

                if(planningAssessments['traveller2']){
                    planningResults['undoTasks'].push(planningTasks['traveller2']);
                }

                if(planningAssessments['traveller3']){
                    planningResults['undoTasks'].push(planningTasks['traveller3']);
                }

                if(planningAssessments['traveller4']){
                    planningResults['undoTasks'].push(planningTasks['traveller4']);
                }

                if(planningAssessments['traveller5']){
                    planningResults['undoTasks'].push(planningTasks['traveller5']);
                }

            }

            if(score === 2){
                if(planningAssessments['artisan1']){
                    planningResults['undoTasks'].push(planningTasks['artisan1']);
                }

                if(!planningAssessments['expert1']){
                    planningResults['tasks'].push(planningTasks['expert1']);
                }

                if(!planningAssessments['expert2']){
                    planningResults['tasks'].push(planningTasks['expert2']);
                }

                if(!planningAssessments['expert3']){
                    planningResults['tasks'].push(planningTasks['expert3']);
                }

                if(!planningAssessments['expert4']){
                    planningResults['tasks'].push(planningTasks['expert4']);
                }

                if(!planningAssessments['expert5']){
                    planningResults['tasks'].push(planningTasks['expert5']);
                }

                if(!planningAssessments['expert6']){
                    planningResults['tasks'].push(planningTasks['expert6']);
                }

            }

            if(score === 3){
                if(!planningAssessments['professional1']){
                    planningResults['tasks'].push(planningTasks['professional1']);
                }

                if(!planningAssessments['professional2']){
                    planningResults['tasks'].push(planningTasks['professional2']);
                }

                if(!planningAssessments['professional3']){
                    planningResults['tasks'].push(planningTasks['professional3']);
                }

                if(!planningAssessments['professional4']){
                    planningResults['tasks'].push(planningTasks['professional4']);
                }

                if(!planningAssessments['professional5']){
                    planningResults['tasks'].push(planningTasks['professional5']);
                }

                if(!planningAssessments['professional6']){
                    planningResults['tasks'].push(planningTasks['professional6']);
                }

            }

            if(score === 4){
                if(!planningAssessments['master1']){
                    planningResults['tasks'].push(planningTasks['master1']);
                }

                if(!planningAssessments['master2']){
                    planningResults['tasks'].push(planningTasks['master2']);
                }

                if(!planningAssessments['master3']){
                    planningResults['tasks'].push(planningTasks['master3']);
                }
            }

            planningResults['next_score'] = limitToFive(planningResults['next_score']);
            return planningResults;

        };

        var formatResultsForCoding = function(assessmentResults, score){
            var codingResults = {};
            var codingAssessments = assessmentResults !== undefined ? assessmentResults['coding'] : {};

            codingAssessments = codingAssessments !== undefined ? codingAssessments : {};

            codingResults['tasks'] = [];
            codingResults['undoTasks'] = [];

            codingResults['current_score'] = score;
            codingResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!codingAssessments['artisan1']){
                    codingResults['tasks'].push(codingTasks['artisan1']);
                }

                if(!codingAssessments['artisan2']){
                    codingResults['tasks'].push(codingTasks['artisan2']);
                }

                if(codingAssessments['traveller1']){
                    codingResults['undoTasks'] = [codingTasks['traveller1']];
                }
            }

            if(score === 2){
                if(!codingAssessments['expert1']){
                    codingResults['tasks'].push(codingTasks['expert1']);
                }

                if(!codingAssessments['expert2']){
                    codingResults['tasks'].push(codingTasks['expert2']);
                }

                if(!codingAssessments['expert3']){
                    codingResults['tasks'].push(codingTasks['expert3']);
                }

                if(!codingAssessments['expert4']){
                    codingResults['tasks'].push(codingTasks['expert4']);
                }
            }

            if(score === 3){
                if(!codingAssessments['professional1']){
                    codingResults['tasks'].push(codingTasks['professional1']);
                }

                if(!codingAssessments['professional2']){
                    codingResults['tasks'].push(codingTasks['professional2']);
                }

                if(!codingAssessments['professional3']){
                    codingResults['tasks'].push(codingTasks['professional3']);
                }

                if(!codingAssessments['professional4']){
                    codingResults['tasks'].push(codingTasks['professional4']);
                }
            }

            if(score === 4){
                if(!codingAssessments['master1']){
                    codingResults['tasks'].push(codingTasks['master1']);
                }

                if(!codingAssessments['master2']){
                    codingResults['tasks'].push(codingTasks['master2']);
                }

                if(!codingAssessments['master3']){
                    codingResults['tasks'].push(codingTasks['master3']);
                }

                if(!codingAssessments['master4']){
                    codingResults['tasks'].push(codingTasks['master4']);
                }
            }

            codingResults['next_score'] = limitToFive(codingResults['next_score']);
            return codingResults;

        };

        var formatResultsForCI = function(assessmentResults, score){
            var ciResults = {};
            var ciAssessments = assessmentResults !== undefined ? assessmentResults['ci'] : {};

            ciAssessments = ciAssessments !== undefined ? ciAssessments : {};

            ciResults['tasks'] = [];
            ciResults['undoTasks'] = [];

            ciResults['current_score'] = score;
            ciResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!ciAssessments['traveller2']){
                    ciResults['tasks'].push(ciTasks['traveller2']);
                }

                if(!ciAssessments['traveller4']){
                    ciResults['tasks'].push(ciTasks['traveller4']);
                }

                if(!ciAssessments['traveller6']){
                    ciResults['tasks'].push(ciTasks['traveller6']);
                }

                if(!ciAssessments['artisan1']){
                    ciResults['tasks'].push(ciTasks['artisan1']);
                }

                if(!ciAssessments['artisan2']){
                    ciResults['tasks'].push(ciTasks['artisan2']);
                }

                if(!ciAssessments['artisan3']){
                    ciResults['tasks'].push(ciTasks['artisan3']);
                }

                if(ciAssessments['traveller1']){
                    ciResults['undoTasks'].push(ciTasks['traveller1']);
                }

                if(ciAssessments['traveller3']){
                    ciResults['undoTasks'].push(ciTasks['traveller3']);
                }

                if(ciAssessments['traveller5']){
                    ciResults['undoTasks'].push(ciTasks['traveller5']);
                }
            }

            if(score === 2){
                if(!ciAssessments['traveller2']){
                    ciResults['tasks'].push(ciTasks['traveller2']);
                }

                if(!ciAssessments['expert1']){
                    ciResults['tasks'].push(ciTasks['expert1']);
                }

                if(!ciAssessments['expert2']){
                    ciResults['tasks'].push(ciTasks['expert2']);
                }

                if(!ciAssessments['expert3']){
                    ciResults['tasks'].push(ciTasks['expert3']);
                }

                if(!ciAssessments['expert4']){
                    ciResults['tasks'].push(ciTasks['expert4']);
                }

                if(!ciAssessments['expert5']){
                    ciResults['tasks'].push(ciTasks['expert5']);
                }

                if(!ciAssessments['expert6']){
                    ciResults['tasks'].push(ciTasks['expert6']);
                }

                if(!ciAssessments['expert7']){
                    ciResults['tasks'].push(ciTasks['expert7']);
                }

                if(ciAssessments['traveller4']){
                    ciResults['undoTasks'].push(ciTasks['traveller4']);
                }

                if(ciAssessments['traveller6']){
                    ciResults['undoTasks'].push(ciTasks['traveller6']);
                }
            }

            if(score === 3){
                if(!ciAssessments['professional1']){
                    ciResults['tasks'].push(ciTasks['professional1']);
                }

                if(!ciAssessments['professional2']){
                    ciResults['tasks'].push(ciTasks['professional2']);
                }

                if(!ciAssessments['professional3']){
                    ciResults['tasks'].push(ciTasks['professional3']);
                }

                if(!ciAssessments['professional4']){
                    ciResults['tasks'].push(ciTasks['professional4']);
                }

                if(!ciAssessments['professional5']){
                    ciResults['tasks'].push(ciTasks['professional5']);
                }

                if(!ciAssessments['professional6']){
                    ciResults['tasks'].push(ciTasks['professional6']);
                }

                if(!ciAssessments['professional7']){
                    ciResults['tasks'].push(ciTasks['professional7']);
                }
            }

            if(score === 4){
                if(!ciAssessments['master1']){
                    ciResults['tasks'].push(ciTasks['master1']);
                }

                if(!ciAssessments['master2']){
                    ciResults['tasks'].push(ciTasks['master2']);
                }

                if(!ciAssessments['master3']){
                    ciResults['tasks'].push(ciTasks['master3']);
                }

                if(!ciAssessments['master4']){
                    ciResults['tasks'].push(ciTasks['master4']);
                }

                if(!ciAssessments['master5']){
                    ciResults['tasks'].push(ciTasks['master5']);
                }

                if(!ciAssessments['master6']){
                    ciResults['tasks'].push(ciTasks['master6']);
                }

                if(!ciAssessments['master7']){
                    ciResults['tasks'].push(ciTasks['master7']);
                }

                if(!ciAssessments['master8']){
                    ciResults['tasks'].push(ciTasks['master8']);
                }

                if(!ciAssessments['master9']){
                    ciResults['tasks'].push(ciTasks['master9']);
                }

                if(ciAssessments['traveller2']){
                    ciResults['undoTasks'].push(ciTasks['traveller2']);
                }

                if(!ciAssessments['master10']){
                    ciResults['tasks'].push(ciTasks['master10']);
                }
            }

            ciResults['next_score'] = limitToFive(ciResults['next_score']);
            return ciResults;

        };

        var formatResultsForIncident = function(assessmentResults, score){
            var incidentResults = {};
            var incidentAssessments = assessmentResults !== undefined ? assessmentResults['incident'] : {};

            incidentAssessments = incidentAssessments !== undefined ? incidentAssessments : {};

            incidentResults['tasks'] = [];
            incidentResults['undoTasks'] = [];

            incidentResults['current_score'] = score;
            incidentResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!incidentAssessments['artisan1']){
                    incidentResults['tasks'].push(incidentTasks['artisan1']);
                }

                if(!incidentAssessments['artisan2']){
                    incidentResults['tasks'].push(incidentTasks['artisan2']);
                }

                if(!incidentAssessments['artisan3']){
                    incidentResults['tasks'].push(incidentTasks['artisan3']);
                }

                if(incidentAssessments['traveller1']){
                    incidentResults['undoTasks'] = [incidentTasks['traveller1']];
                }
            }

            if(score === 2){
                if(!incidentAssessments['expert1']){
                    incidentResults['tasks'].push(incidentTasks['expert1']);
                }

                if(!incidentAssessments['expert2']){
                    incidentResults['tasks'].push(incidentTasks['expert2']);
                }

                if(!incidentAssessments['expert3']){
                    incidentResults['tasks'].push(incidentTasks['expert3']);
                }

                if(!incidentAssessments['expert4']){
                    incidentResults['tasks'].push(incidentTasks['expert4']);
                }

                if(!incidentAssessments['expert5']){
                    incidentResults['tasks'].push(incidentTasks['expert5']);
                }

                if(!incidentAssessments['expert6']){
                    incidentResults['tasks'].push(incidentTasks['expert6']);
                }

            }

            if(score === 3){
                if(!incidentAssessments['professional1']){
                    incidentResults['tasks'].push(incidentTasks['professional1']);
                }

                if(!incidentAssessments['professional2']){
                    incidentResults['tasks'].push(incidentTasks['professional2']);
                }

                if(!incidentAssessments['professional3']){
                    incidentResults['tasks'].push(incidentTasks['professional3']);
                }

                if(!incidentAssessments['professional4']){
                    incidentResults['tasks'].push(incidentTasks['professional4']);
                }
            }

            if(score === 4){
                if(!incidentAssessments['master1']){
                    incidentResults['tasks'].push(incidentTasks['master1']);
                }

                if(!incidentAssessments['master2']){
                    incidentResults['tasks'].push(incidentTasks['master2']);
                }

                if(!incidentAssessments['master3']){
                    incidentResults['tasks'].push(incidentTasks['master3']);
                }
            }

            incidentResults['next_score'] = limitToFive(incidentResults['next_score']);
            return incidentResults;
        };

        var formatResultsForRisk = function(assessmentResults, score){
            var riskResults = {};
            var riskAssessments = assessmentResults !== undefined ? assessmentResults['risk'] : {};

            riskAssessments = riskAssessments !== undefined ? riskAssessments : {};

            riskResults['tasks'] = [];
            riskResults['undoTasks'] = [];

            riskResults['current_score'] = score;
            riskResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!riskAssessments['artisan1']){
                    riskResults['tasks'].push(riskTasks['artisan1']);
                }

                if(!riskAssessments['artisan2']){
                    riskResults['tasks'].push(riskTasks['artisan2']);
                }

                if(!riskAssessments['artisan3']){
                    riskResults['tasks'].push(riskTasks['artisan3']);
                }

                if(riskAssessments['traveller1']){
                    riskResults['undoTasks'].push(riskTasks['traveller1']);
                }

                if(riskAssessments['traveller2']){
                    riskResults['undoTasks'].push(riskTasks['traveller2']);
                }
            }

            if(score === 2){
                if(!riskAssessments['expert1']){
                    riskResults['tasks'].push(riskTasks['expert1']);
                }

                if(!riskAssessments['expert2']){
                    riskResults['tasks'].push(riskTasks['expert2']);
                }

                if(!riskAssessments['expert3']){
                    riskResults['tasks'].push(riskTasks['expert3']);
                }
            }

            if(score === 3){
                if(!riskAssessments['professional1']){
                    riskResults['tasks'].push(riskTasks['professional1']);
                }

                if(!riskAssessments['professional2']){
                    riskResults['tasks'].push(riskTasks['professional2']);
                }

                if(!riskAssessments['professional3']){
                    riskResults['tasks'].push(riskTasks['professional3']);
                }
            }

            if(score === 4){
                if(!riskAssessments['master1']){
                    riskResults['tasks'].push(riskTasks['master1']);
                }

                if(!riskAssessments['master2']){
                    riskResults['tasks'].push(riskTasks['master2']);
                }

                if(!riskAssessments['master3']){
                    riskResults['tasks'].push(riskTasks['master3']);
                }

                if(!riskAssessments['master4']){
                    riskResults['tasks'].push(riskTasks['master4']);
                }

                if(!riskAssessments['master5']){
                    riskResults['tasks'].push(riskTasks['master5']);
                }
            }

            riskResults['next_score'] = limitToFive(riskResults['next_score']);
            return riskResults;
        };

        var formatResultsForDesign = function(assessmentResults, score){
            var designResults = {};
            var designAssessments = assessmentResults !== undefined ? assessmentResults['design'] : {};

            designAssessments = designAssessments !== undefined ? designAssessments : {};

            designResults['tasks'] = [];
            designResults['undoTasks'] = [];

            designResults['current_score'] = score;
            designResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!designAssessments['artisan1']){
                    designResults['tasks'].push(designTasks['artisan1']);
                }

                if(!designAssessments['artisan2']){
                    designResults['tasks'].push(designTasks['artisan2']);
                }

                if(designAssessments['traveller1']){
                    designResults['undoTasks'].push(designTasks['traveller1']);
                }

                if(designAssessments['traveller2']){
                    designResults['undoTasks'].push(designTasks['traveller2']);
                }
            }

            if(score === 2){

                if(designAssessments['traveller1']){
                    designResults['undoTasks'].push(designTasks['traveller1']);
                }

                if(designAssessments['traveller2']){
                    designResults['undoTasks'].push(designTasks['traveller2']);
                }

                if(designAssessments['traveller3']){
                    designResults['undoTasks'].push(designTasks['traveller3']);
                }

                if(!designAssessments['artisan1']){
                    designResults['tasks'].push(designTasks['artisan1']);
                }

                if(!designAssessments['artisan2']){
                    designResults['tasks'].push(designTasks['artisan2']);
                }

                if(!designAssessments['expert1']){
                    designResults['tasks'].push(designTasks['expert1']);
                }

                if(!designAssessments['expert2']){
                    designResults['tasks'].push(designTasks['expert2']);
                }

                if(!designAssessments['expert3']){
                    designResults['tasks'].push(designTasks['expert3']);
                }

                if(!designAssessments['expert4']){
                    designResults['tasks'].push(designTasks['expert4']);
                }
            }

            if(score === 3){
                if(!designAssessments['professional1']){
                    designResults['tasks'].push(designTasks['professional1']);
                }

                if(!designAssessments['professional2']){
                    designResults['tasks'].push(designTasks['professional2']);
                }

                if(!designAssessments['professional3']){
                    designResults['tasks'].push(designTasks['professional3']);
                }

                if(!designAssessments['professional4']){
                    designResults['tasks'].push(designTasks['professional4']);
                }

                if(!designAssessments['professional5']){
                    designResults['tasks'].push(designTasks['professional5']);
                }
            }

            if(score === 4){

                if(designAssessments['professional1']){
                    designResults['undoTasks'].push(designTasks['professional1']);
                }

                if(!designAssessments['master1']){
                    designResults['tasks'].push(designTasks['master1']);
                }

                if(!designAssessments['master2']){
                    designResults['tasks'].push(designTasks['master2']);
                }
            }

            designResults['next_score'] = limitToFive(designResults['next_score']);
            return designResults;
        };

        var formatResultsForTeaming = function(assessmentResults, score){
            var teamingResults = {};
            var teamingAssessments = assessmentResults !== undefined ? assessmentResults['teaming'] : {};

            teamingAssessments = teamingAssessments !== undefined ? teamingAssessments : {};

            teamingResults['tasks'] = [];
            teamingResults['undoTasks'] = [];

            teamingResults['current_score'] = score;
            teamingResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!teamingAssessments['artisan1']){
                    teamingResults['tasks'].push(teamingTasks['artisan1']);
                }

                if(!teamingAssessments['artisan2']){
                    teamingResults['tasks'].push(teamingTasks['artisan2']);
                }

                if(!teamingAssessments['artisan3']){
                    teamingResults['tasks'].push(teamingTasks['artisan3']);
                }

                if(teamingAssessments['traveller2']){
                    teamingResults['undoTasks'].push(teamingTasks['traveller2']);
                }

                if(teamingAssessments['traveller3']){
                    teamingResults['undoTasks'].push(teamingTasks['traveller3']);
                }
            }

            if(score === 2){

                if(!teamingAssessments['expert1']){
                    teamingResults['tasks'].push(teamingTasks['expert1']);
                }

                if(!teamingAssessments['expert2']){
                    teamingResults['tasks'].push(teamingTasks['expert2']);
                }

                if(!teamingAssessments['expert3']){
                    teamingResults['tasks'].push(teamingTasks['expert3']);
                }
            }

            if(score === 3){
                if(!teamingAssessments['professional1']){
                    teamingResults['tasks'].push(teamingTasks['professional1']);
                }

                if(!teamingAssessments['professional2']){
                    teamingResults['tasks'].push(teamingTasks['professional2']);
                }
            }

            if(score === 4){
                if(teamingAssessments['traveller1']){
                    teamingResults['undoTasks'].push(teamingTasks['traveller1']);
                }

                if(!teamingAssessments['master1']){
                    teamingResults['tasks'].push(teamingTasks['master1']);
                }

                if(!teamingAssessments['master2']){
                    teamingResults['tasks'].push(teamingTasks['master2']);
                }

                if(!teamingAssessments['master3']){
                    teamingResults['tasks'].push(teamingTasks['master3']);
                }
            }

            teamingResults['next_score'] = limitToFive(teamingResults['next_score']);
            return teamingResults;
        };

        var formatResultsForRelease = function(assessmentResults, score){
            var releaseResults = {};
            var releaseAssessments = assessmentResults !== undefined ? assessmentResults['release'] : {};

            releaseAssessments = releaseAssessments !== undefined ? releaseAssessments : {};

            releaseResults['tasks'] = [];
            releaseResults['undoTasks'] = [];

            releaseResults['current_score'] = score;
            releaseResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!releaseAssessments['artisan1']){
                    releaseResults['tasks'].push(releaseTasks['artisan1']);
                }

                if(!releaseAssessments['artisan2']){
                    releaseResults['tasks'].push(releaseTasks['artisan2']);
                }

                if(!releaseAssessments['artisan3']){
                    releaseResults['tasks'].push(releaseTasks['artisan3']);
                }

                if(!releaseAssessments['artisan4']){
                    releaseResults['tasks'].push(releaseTasks['artisan4']);
                }

                if(releaseAssessments['traveller1']){
                    releaseResults['undoTasks'].push(releaseTasks['traveller1']);
                }

                if(releaseAssessments['traveller3']){
                    releaseResults['undoTasks'].push(releaseTasks['traveller3']);
                }

                if(releaseAssessments['traveller4']){
                    releaseResults['undoTasks'].push(releaseTasks['traveller4']);
                }
            }

            if(score === 2){

                if(!releaseAssessments['expert1']){
                    releaseResults['tasks'].push(releaseTasks['expert1']);
                }

                if(!releaseAssessments['expert2']){
                    releaseResults['tasks'].push(releaseTasks['expert2']);
                }

                if(releaseAssessments['traveller1']){
                    releaseResults['undoTasks'].push(releaseTasks['traveller1']);
                }

                if(releaseAssessments['traveller2']){
                    releaseResults['undoTasks'].push(releaseTasks['traveller2']);
                }

                if(releaseAssessments['traveller3']){
                    releaseResults['undoTasks'].push(releaseTasks['traveller3']);
                }

                if(releaseAssessments['traveller4']){
                    releaseResults['undoTasks'].push(releaseTasks['traveller4']);
                }
            }

            if(score === 3){
                if(!releaseAssessments['professional1']){
                    releaseResults['tasks'].push(releaseTasks['professional1']);
                }

                if(!releaseAssessments['professional2']){
                    releaseResults['tasks'].push(releaseTasks['professional2']);
                }

                if(!releaseAssessments['professional3']){
                    releaseResults['tasks'].push(releaseTasks['professional3']);
                }

                if(!releaseAssessments['professional4']){
                    releaseResults['tasks'].push(releaseTasks['professional4']);
                }
            }

            if(score === 4){
                if(releaseAssessments['traveller1']){
                    releaseResults['undoTasks'].push(releaseTasks['traveller1']);
                }

                if(!releaseAssessments['master1']){
                    releaseResults['tasks'].push(releaseTasks['master1']);
                }

                if(!releaseAssessments['master2']){
                    releaseResults['tasks'].push(releaseTasks['master2']);
                }

                if(!releaseAssessments['master3']){
                    releaseResults['tasks'].push(releaseTasks['master3']);
                }

                if(!releaseAssessments['master4']){
                    releaseResults['tasks'].push(releaseTasks['master4']);
                }

                if(!releaseAssessments['master5']){
                    releaseResults['tasks'].push(releaseTasks['master5']);
                }

                if(!releaseAssessments['master6']){
                    releaseResults['tasks'].push(releaseTasks['master6']);
                }

                if(releaseAssessments['professional3']){
                    releaseResults['undoTasks'].push(releaseTasks['professional3']);
                }
            }

            releaseResults['next_score'] = limitToFive(releaseResults['next_score']);
            return releaseResults;
        };

        var formatResultsForQA = function(assessmentResults, score){
            var qaResults = {};
            var qaAssessments = assessmentResults !== undefined ? assessmentResults['QA'] : {};

            qaAssessments = qaAssessments !== undefined ? qaAssessments : {};

            qaResults['tasks'] = [];
            qaResults['undoTasks'] = [];

            qaResults['current_score'] = score;
            qaResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!qaAssessments['artisan1']){
                    qaResults['tasks'].push(qaTasks['artisan1']);
                }

                if(!qaAssessments['artisan2']){
                    qaResults['tasks'].push(qaTasks['artisan2']);
                }

                if(!qaAssessments['artisan3']){
                    qaResults['tasks'].push(qaTasks['artisan3']);
                }

                if(qaAssessments['traveller1']){
                    qaResults['undoTasks'].push(qaTasks['traveller1']);
                }

                if(qaAssessments['traveller4']){
                    qaResults['undoTasks'].push(qaTasks['traveller4']);
                }
            }

            if(score === 2){
                if(!qaAssessments['expert1']){
                    qaResults['tasks'].push(qaTasks['expert1']);
                }

                if(!qaAssessments['expert2']){
                    qaResults['tasks'].push(qaTasks['expert2']);
                }

                if(!qaAssessments['expert3']){
                    qaResults['tasks'].push(qaTasks['expert3']);
                }

                if(!qaAssessments['expert4']){
                    qaResults['tasks'].push(qaTasks['expert4']);
                }

                if(!qaAssessments['expert5']){
                    qaResults['tasks'].push(qaTasks['expert5']);
                }

                if(!qaAssessments['expert6']){
                    qaResults['tasks'].push(qaTasks['expert6']);
                }

                if(!qaAssessments['expert7']){
                    qaResults['tasks'].push(qaTasks['expert7']);
                }

                if(!qaAssessments['expert8']){
                    qaResults['tasks'].push(qaTasks['expert8']);
                }

                if(!qaAssessments['expert9']){
                    qaResults['tasks'].push(qaTasks['expert9']);
                }

                if(qaAssessments['traveller1']){
                    qaResults['undoTasks'].push(qaTasks['traveller1']);
                }

                if(qaAssessments['traveller2']){
                    qaResults['undoTasks'].push(qaTasks['traveller2']);
                }

                if(qaAssessments['traveller3']){
                    qaResults['undoTasks'].push(qaTasks['traveller3']);
                }

                if(qaAssessments['traveller4']){
                    qaResults['undoTasks'].push(qaTasks['traveller4']);
                }

                if(qaAssessments['traveller5']){
                    qaResults['undoTasks'].push(qaTasks['traveller5']);
                }

                if(qaAssessments['traveller6']){
                    qaResults['undoTasks'].push(qaTasks['traveller6']);
                }

                if(qaAssessments['artisan1']){
                    qaResults['undoTasks'].push(qaTasks['artisan1']);
                }
            }

            if(score === 3){
                if(!qaAssessments['professional1']){
                    qaResults['tasks'].push(qaTasks['professional1']);
                }

                if(!qaAssessments['professional2']){
                    qaResults['tasks'].push(qaTasks['professional2']);
                }

                if(!qaAssessments['professional3']){
                    qaResults['tasks'].push(qaTasks['professional3']);
                }

                if(!qaAssessments['professional4']){
                    qaResults['tasks'].push(qaTasks['professional4']);
                }

                if(!qaAssessments['professional5']){
                    qaResults['tasks'].push(qaTasks['professional5']);
                }

                if(!qaAssessments['professional6']){
                    qaResults['tasks'].push(qaTasks['professional6']);
                }

                if(!qaAssessments['professional7']){
                    qaResults['tasks'].push(qaTasks['professional7']);
                }

                if(!qaAssessments['professional8']){
                    qaResults['tasks'].push(qaTasks['professional8']);
                }
            }

            if(score === 4){
                if(qaAssessments['traveller1']){
                    qaResults['undoTasks'].push(qaTasks['traveller1']);
                }

                if(!qaAssessments['master1']){
                    qaResults['tasks'].push(qaTasks['master1']);
                }

                if(!qaAssessments['master2']){
                    qaResults['tasks'].push(qaTasks['master2']);
                }

                if(!qaAssessments['master3']){
                    qaResults['tasks'].push(qaTasks['master3']);
                }

                if(!qaAssessments['master4']){
                    qaResults['tasks'].push(qaTasks['master4']);
                }
            }

            qaResults['next_score'] = limitToFive(qaResults['next_score']);
            return qaResults;
        };

        var formatResultsForEnvironments = function(assessmentResults, score){
            var environmentsResults = {};
            var environmentsAssessments = assessmentResults !== undefined ? assessmentResults['environments'] : {};

            environmentsAssessments = environmentsAssessments !== undefined ? environmentsAssessments : {};

            environmentsResults['tasks'] = [];
            environmentsResults['undoTasks'] = [];

            environmentsResults['current_score'] = score;
            environmentsResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!environmentsAssessments['artisan1']){
                    environmentsResults['tasks'].push(environmentsTasks['artisan1']);
                }

                if(!environmentsAssessments['artisan2']){
                    environmentsResults['tasks'].push(environmentsTasks['artisan2']);
                }

                if(!environmentsAssessments['artisan6']){
                    environmentsResults['tasks'].push(environmentsTasks['artisan6']);
                }

                if(!environmentsAssessments['artisan7']){
                    environmentsResults['tasks'].push(environmentsTasks['artisan7']);
                }

                if(!environmentsAssessments['artisan8']){
                    environmentsResults['tasks'].push(environmentsTasks['artisan8']);
                }

                if(environmentsAssessments['traveller1']){
                    environmentsResults['undoTasks'].push(environmentsTasks['traveller1']);
                }

                if(environmentsAssessments['traveller2']){
                    environmentsResults['undoTasks'].push(environmentsTasks['traveller2']);
                }

                if(environmentsAssessments['traveller3']){
                    environmentsResults['undoTasks'].push(environmentsTasks['traveller3']);
                }

                if(environmentsAssessments['traveller4']){
                    environmentsResults['undoTasks'].push(environmentsTasks['traveller4']);
                }

                if(environmentsAssessments['traveller5']){
                    environmentsResults['undoTasks'].push(environmentsTasks['traveller5']);
                }

                if(environmentsAssessments['traveller6']){
                    environmentsResults['undoTasks'].push(environmentsTasks['traveller6']);
                }

                if(environmentsAssessments['traveller7']){
                    environmentsResults['undoTasks'].push(environmentsTasks['traveller7']);
                }
            }

            if(score === 2){

                if(environmentsAssessments['artisan1']){
                    environmentsResults['undoTasks'].push(environmentsTasks['artisan1']);
                }

                if(environmentsAssessments['artisan5']){
                    environmentsResults['undoTasks'].push(environmentsTasks['artisan5']);
                }

                if(!environmentsAssessments['expert1']){
                    environmentsResults['tasks'].push(environmentsTasks['expert1']);
                }

                if(!environmentsAssessments['expert2']){
                    environmentsResults['tasks'].push(environmentsTasks['expert2']);
                }

                if(!environmentsAssessments['expert3']){
                    environmentsResults['tasks'].push(environmentsTasks['expert3']);
                }

                if(!environmentsAssessments['expert4']){
                    environmentsResults['tasks'].push(environmentsTasks['expert4']);
                }

                if(!environmentsAssessments['expert5']){
                    environmentsResults['tasks'].push(environmentsTasks['expert5']);
                }

                if(!environmentsAssessments['expert6']){
                    environmentsResults['tasks'].push(environmentsTasks['expert6']);
                }
            }

            if(score === 3){
                if(!environmentsAssessments['professional1']){
                    environmentsResults['tasks'].push(environmentsTasks['professional1']);
                }

                if(!environmentsAssessments['professional2']){
                    environmentsResults['tasks'].push(environmentsTasks['professional2']);
                }

                if(!environmentsAssessments['professional3']){
                    environmentsResults['tasks'].push(environmentsTasks['professional3']);
                }

                if(!environmentsAssessments['professional4']){
                    environmentsResults['tasks'].push(environmentsTasks['professional4']);
                }

                if(!environmentsAssessments['professional5']){
                    environmentsResults['tasks'].push(environmentsTasks['professional5']);
                }

                if(!environmentsAssessments['professional6']){
                    environmentsResults['tasks'].push(environmentsTasks['professional6']);
                }
            }

            if(score === 4){
                if(!environmentsAssessments['master1']){
                    environmentsResults['tasks'].push(environmentsTasks['master1']);
                }

                if(!environmentsAssessments['master2']){
                    environmentsResults['tasks'].push(environmentsTasks['master2']);
                }

                if(!environmentsAssessments['master3']){
                    environmentsResults['tasks'].push(environmentsTasks['master3']);
                }

                if(!environmentsAssessments['master4']){
                    environmentsResults['tasks'].push(environmentsTasks['master4']);
                }

                if(!environmentsAssessments['master5']){
                    environmentsResults['tasks'].push(environmentsTasks['master5']);
                }

                if(!environmentsAssessments['master6']){
                    environmentsResults['tasks'].push(environmentsTasks['master6']);
                }

                if(!environmentsAssessments['master7']){
                    environmentsResults['tasks'].push(environmentsTasks['master7']);
                }

                if(!environmentsAssessments['master8']){
                    environmentsResults['tasks'].push(environmentsTasks['master8']);
                }

                if(!environmentsAssessments['master9']){
                    environmentsResults['tasks'].push(environmentsTasks['master9']);
                }
            }

            environmentsResults['next_score'] = limitToFive(environmentsResults['next_score']);
            return environmentsResults;
        };

        var formatResultsForFeatureTeams = function(assessmentResults, score){
            var featureTeamsResults = {};
            var featureTeamsAssessments = assessmentResults !== undefined ? assessmentResults['featureTeams'] : {};

            featureTeamsAssessments = featureTeamsAssessments !== undefined ? featureTeamsAssessments : {};

            featureTeamsResults['tasks'] = [];
            featureTeamsResults['undoTasks'] = [];

            featureTeamsResults['current_score'] = score;
            featureTeamsResults['next_score'] = score === 0 ? 2 : score + 1;

            if(score === 0 || score === 1){
                if(!featureTeamsAssessments['artisan1']){
                    featureTeamsResults['tasks'].push(featureTeamsTasks['artisan1']);
                }

                if(!featureTeamsAssessments['artisan2']){
                    featureTeamsResults['tasks'].push(featureTeamsTasks['artisan2']);
                }

                if(!featureTeamsAssessments['artisan3']){
                    featureTeamsResults['tasks'].push(featureTeamsTasks['artisan3']);
                }
            }

            if(score === 2){
                if(featureTeamsAssessments['traveller1']){
                    featureTeamsResults['undoTasks'].push(featureTeamsTasks['traveller1']);
                }

                if(featureTeamsAssessments['traveller2']){
                    featureTeamsResults['undoTasks'].push(featureTeamsTasks['traveller2']);
                }

                if(featureTeamsAssessments['traveller3']){
                    featureTeamsResults['undoTasks'].push(featureTeamsTasks['traveller3']);
                }

                if(featureTeamsAssessments['traveller4']){
                    featureTeamsResults['undoTasks'].push(featureTeamsTasks['traveller4']);
                }

                if(featureTeamsAssessments['artisan1']){
                    featureTeamsResults['undoTasks'].push(featureTeamsTasks['artisan1']);
                }

                if(!featureTeamsAssessments['artisan2']){
                    featureTeamsResults['tasks'].push(featureTeamsTasks['artisan2']);
                }

                if(!featureTeamsAssessments['artisan3']){
                    featureTeamsResults['tasks'].push(featureTeamsTasks['artisan3']);
                }

                if(!featureTeamsAssessments['expert1']){
                    featureTeamsResults['tasks'].push(featureTeamsTasks['expert1']);
                }

                if(!featureTeamsAssessments['expert2']){
                    featureTeamsResults['tasks'].push(featureTeamsTasks['expert2']);
                }

                if(!featureTeamsAssessments['expert3']){
                    featureTeamsResults['tasks'].push(featureTeamsTasks['expert3']);
                }

                if(!featureTeamsAssessments['expert4']){
                    featureTeamsResults['tasks'].push(featureTeamsTasks['expert4']);
                }

                if(!featureTeamsAssessments['expert5']){
                    featureTeamsResults['tasks'].push(featureTeamsTasks['expert5']);
                }

                if(!featureTeamsAssessments['expert6']){
                    featureTeamsResults['tasks'].push(featureTeamsTasks['expert6']);
                }
            }

            if(score === 3){
                if(!featureTeamsAssessments['professional1']){
                    featureTeamsResults['tasks'].push(featureTeamsTasks['professional1']);
                }

                if(!featureTeamsAssessments['professional2']){
                    featureTeamsResults['tasks'].push(featureTeamsTasks['professional2']);
                }

                if(!featureTeamsAssessments['professional3']){
                    featureTeamsResults['tasks'].push(featureTeamsTasks['professional3']);
                }
            }

            if(score === 4){
                if(!featureTeamsAssessments['master1']){
                    featureTeamsResults['tasks'].push(featureTeamsTasks['master1']);
                }

                if(!featureTeamsAssessments['master2']){
                    featureTeamsResults['tasks'].push(featureTeamsTasks['master2']);
                }

                if(!featureTeamsAssessments['master3']){
                    featureTeamsResults['tasks'].push(featureTeamsTasks['master3']);
                }

                if(!featureTeamsAssessments['master4']){
                    featureTeamsResults['tasks'].push(featureTeamsTasks['master4']);
                }
            }

            featureTeamsResults['next_score'] = limitToFive(featureTeamsResults['next_score']);
            return featureTeamsResults;
        };

        $scope.saveAssessmentResult = function () {
            SaveResults.saveAssessments($scope.resultsData, $scope.bodyData).then(function (response) {
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

    .factory('SaveResults', ['$http', function ($http) {
        return {
            saveAssessments: function (data, body) {
                return $http({
                    url: "http://localhost:8080/saveTeamData",
                    method: "POST",
                    params: data,
                    data: body
                });
            },
            drawChart: function (teamName, strategyScore, planningScore, codingScore, ciScore, incidentScore, riskScore,
                                 designScore, teamingScore, releaseScore, QAScore, environmentsScore, featureTeamsScore,
                                 selectedPortfolioName) {

                if(window.myChart != undefined && Object.keys(window.myChart).length !== 0)
                    window.myChart.destroy();

                window.myChart = new Chart(document.getElementById("radar-chart"), {
                    type: 'radar',
                    data: {
                        labels: ["Strategy Alignment", "Planning and Requirements", "Coding Practices",
                            "Continuous Integration", "Incident Management", "Risk and Issue Management", "Software Design",
                            "Teaming", "Release Management", "Quality Assurance", "Environments", "Feature Teams"
                        ],
                        datasets: [
                            {
                                label: "TEAM: " + teamName,
                                fill: true,
                                backgroundColor: "rgba(255,99,132,0.2)",
                                borderColor: "rgba(255,99,132,1)",
                                pointBorderColor: "#fff",
                                pointBackgroundColor: "rgba(255,99,132,1)",
                                data: [strategyScore, planningScore, codingScore, ciScore,
                                    incidentScore, riskScore, designScore, teamingScore,
                                    releaseScore, QAScore, environmentsScore, featureTeamsScore
                                ]
                            }
                        ]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'Assessment Results for ' + teamName
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

    .factory('RetrieveAssessment', ['$http', function ($http) {
        return {
            getAssessment: function (teamName) {
                return $http({
                    url: "http://localhost:8080/assessment?teamName="+teamName,
                    method: "GET"
                });
            }
        }
    }]);

