'use strict';

describe('continuumAssessmentPlatform.results module', function() {

    beforeEach(module('continuumAssessmentPlatform.results'));

    describe('results controller', function(){

        var controller, q, deferred;
        var scope, rootScope;
        var saveResultsSpy;

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
            'expert2': 'When the team estimates, the estimates include all activities to reach \'Done\'.',
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
            'traveller1': 'No standards or mechanism\'s for ensuring code quality',
            'artisan1': 'Guidelines and/or standards are defined.',
            'artisan2': 'Consistent training process for new team members is in place',
            'expert1': 'There are mechanism’s in place to ensure that standards are followed',
            'expert2': 'Process\'s and practices are understood and followed by all',
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
            'master8': 'Release and Change Management fully integrated into deployment processes.',
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
            'traveller3': 'The team doesn\'t clearly understand the entire stakeholder landscape.',
            'artisan1': 'Team vision and goals are agreed, captured and understood.',
            'artisan2': 'There is a clear understanding of who are the teams stakeholders. (Consumers, partners and clients).',
            'artisan3': 'There is a clear definition of what the teams success is (definition of \'done\').',
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
            'expert8': 'Unit tests are created using TDD..',
            'professional1': 'Automated infrastructure testing is in place.',
            'professional2': 'Automated security testing is in place.',
            'professional3': 'Tests are automated as much as is practical.',
            'professional4': 'Quality metrics and trends are tracked.',
            'professional5': 'Anyone can execute the tests.',
            'master1': 'Active process is in place to understand root cause and respond to it.',
            'master2': 'Test artefacts are treated with the same importance as code and continually refactored and maintained.',
            'master3': 'Performance testing metrics are defined early in the process.',
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
            'expert1': 'Database changes are performed automatically as part of deployment process.',
            'expert2': 'Test environments are readily available. Can be reproduced with manual work + coordination between operational teams.',
            'expert3': 'Access to a production-like environment is restricted to a small group of closely-related application teams, and delays at this level are unusual.',
            'expert4': 'Environment provisioning partially automated.',
            'expert5': 'Some virtual environments have interfaces available ‘stubs’ to run end-to-end testing.',
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
            'traveller1': 'The team doesn\'t have all cross-functional and cross-component knowledge and skills to complete end-to-end customer feature.',
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
            'professional1': 'T-shaped skills emerge (team members can perform more than one function).',
            'professional2': 'The team is self-organizing. The team is self-managed and has necessary autonomy to modify the design of their team and/or aspects of the organisational context in which the operate.',
            'professional3': 'Metrics are in place to ensure constant improvement.',
            'master1': 'All decision-making is internal to the team, who can make decisions on how to deliver artefacts, and as to quality measures applied to artefacts.',
            'master2': 'T-shaped skill profile is a majority.',
            'master3': 'Team is responsible for all aspects of feature delivery, from equipment requisition to production.',
            'master4': 'Continuous improvement is in place, driven by retrospectives within the team and across the teams.'};

        beforeEach(inject(function($controller, $rootScope, $q, SaveResults){
            q = $q;
            deferred = $q.defer();
            saveResultsSpy = jasmine.createSpyObj("SaveResults", ['drawChart', 'saveAssessments']);
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('ResultsCtrl', {'$scope': scope, '$rootScope': rootScope, 'SaveResults': saveResultsSpy});
        }));

        it('should be defined', function() {
            expect(controller).toBeDefined();
        });

        it('should have the default values set for scores as zero', function(){
            var zero = 0;

            expect(scope.strategyScore).toEqual(zero);
            expect(scope.planningScore).toEqual(zero);
            expect(scope.codingScore).toEqual(zero);
            expect(scope.ciScore).toEqual(zero);
            expect(scope.incidentScore).toEqual(zero);
            expect(scope.riskScore).toEqual(zero);
            expect(scope.designScore).toEqual(zero);
            expect(scope.teamingScore).toEqual(zero);
            expect(scope.releaseScore).toEqual(zero);
            expect(scope.QAScore).toEqual(zero);
            expect(scope.environmentsScore).toEqual(zero);
            expect(scope.featureTeamsScore).toEqual(zero);
        });

        it('should have the no results data', function(){
            var expectedResultsData = {};
            expect(scope.resultsData).toEqual(expectedResultsData);
        });

        describe('#init', function(){
            it('should set the selected tab to 1', function(){
                scope.init();
                expect(scope.selectedTab).toEqual(1);
            });

            it('should set the default for isSaved to false', function(){
                scope.init();
                expect(scope.isSaved).toBeFalsy();
            });

            it('should set the default for isNotSaved to false', function(){
                scope.init();
                expect(scope.isNotSaved).toBeFalsy();
            });

            describe('#noAssessments', function(){
                it('should set the results data with initialisation values of zero and undefined team name', function(){
                    var expectedResultData = {'teamName': undefined, 'strategy': 0, 'planning': 0, 'coding': 0, 'ci': 0,
                    'incident': 0, 'risk': 0, 'design': 0, 'teaming': 0, 'release': 0, 'qa': 0, 'environments': 0,
                    'featureTeams': 0, 'portfolioName': undefined, 'rawData': undefined};
                    scope.init();

                    expect(scope.resultsData).toEqual(expectedResultData);
                });

                it('should call the draw chart function with the right parameters', function(){
                    scope.init();
                    expect(saveResultsSpy.drawChart).toHaveBeenCalledWith(undefined,0,0,0,0,0,0,0,0,0,0,0,0,undefined);
                });

                it('should have the expected formatted strategy tasks', function(){
                    var zero = 0;
                    var two = 2;
                    scope.init();
                    expect(scope.strategy['current_score']).toEqual(zero);
                    expect(scope.strategy['next_score']).toEqual(two);
                    expect(scope.strategy['tasks']).toContain(strategyTasks['artisan1']);
                    expect(scope.strategy['tasks']).toContain(strategyTasks['artisan2']);
                    expect(scope.strategy['tasks']).toContain(strategyTasks['artisan3']);
                    expect(scope.strategy['undoTasks'].length).toEqual(zero);
                });

                it('should have the expected formatted planning tasks', function(){
                    var zero = 0;
                    var two = 2;
                    scope.init();
                    expect(scope.planning['current_score']).toEqual(zero);
                    expect(scope.planning['next_score']).toEqual(two);
                    expect(scope.planning['tasks']).toContain(planningTasks['artisan1']);
                    expect(scope.planning['tasks']).toContain(planningTasks['artisan2']);
                    expect(scope.planning['tasks']).toContain(planningTasks['artisan3']);
                    expect(scope.planning['tasks']).toContain(planningTasks['artisan4']);
                    expect(scope.planning['tasks']).toContain(planningTasks['artisan5']);
                    expect(scope.planning['undoTasks'].length).toEqual(zero);
                });

                it('should have the expected formatted coding tasks', function(){
                    var zero = 0;
                    var two = 2;
                    scope.init();
                    expect(scope.coding['current_score']).toEqual(zero);
                    expect(scope.coding['next_score']).toEqual(two);
                    expect(scope.coding['tasks']).toContain(codingTasks['artisan1']);
                    expect(scope.coding['tasks']).toContain(codingTasks['artisan2']);
                    expect(scope.coding['undoTasks'].length).toEqual(zero);
                });

                it('should have the expected formatted ci tasks', function(){
                    var zero = 0;
                    var two = 2;
                    scope.init();
                    expect(scope.ci['current_score']).toEqual(zero);
                    expect(scope.ci['next_score']).toEqual(two);
                    expect(scope.ci['tasks']).toContain(ciTasks['artisan1']);
                    expect(scope.ci['tasks']).toContain(ciTasks['artisan2']);
                    expect(scope.ci['tasks']).toContain(ciTasks['artisan3']);
                    expect(scope.ci['tasks']).toContain(ciTasks['traveller2']);
                    expect(scope.ci['tasks']).toContain(ciTasks['traveller4']);
                    expect(scope.ci['tasks']).toContain(ciTasks['traveller6']);
                    expect(scope.ci['undoTasks'].length).toEqual(zero);
                });

                it('should have the expected formatted incident tasks', function(){
                    var zero = 0;
                    var two = 2;
                    scope.init();
                    expect(scope.incident['current_score']).toEqual(zero);
                    expect(scope.incident['next_score']).toEqual(two);
                    expect(scope.incident['tasks']).toContain(incidentTasks['artisan1']);
                    expect(scope.incident['tasks']).toContain(incidentTasks['artisan2']);
                    expect(scope.incident['tasks']).toContain(incidentTasks['artisan3']);
                    expect(scope.incident['undoTasks'].length).toEqual(zero);
                });

                it('should have the expected formatted risk tasks', function(){
                    var zero = 0;
                    var two = 2;
                    scope.init();
                    expect(scope.risk['current_score']).toEqual(zero);
                    expect(scope.risk['next_score']).toEqual(two);
                    expect(scope.risk['tasks']).toContain(riskTasks['artisan1']);
                    expect(scope.risk['tasks']).toContain(riskTasks['artisan2']);
                    expect(scope.risk['tasks']).toContain(riskTasks['artisan3']);
                    expect(scope.risk['undoTasks'].length).toEqual(zero);
                });

                it('should have the expected formatted design tasks', function(){
                    var zero = 0;
                    var two = 2;
                    scope.init();
                    expect(scope.design['current_score']).toEqual(zero);
                    expect(scope.design['next_score']).toEqual(two);
                    expect(scope.design['tasks']).toContain(designTasks['artisan1']);
                    expect(scope.design['tasks']).toContain(designTasks['artisan2']);
                    expect(scope.design['tasks']).toContain(designTasks['traveller3']);
                    expect(scope.design['undoTasks'].length).toEqual(zero);
                });

                it('should have the expected formatted teaming tasks', function(){
                    var zero = 0;
                    var two = 2;
                    scope.init();
                    expect(scope.teaming['current_score']).toEqual(zero);
                    expect(scope.teaming['next_score']).toEqual(two);
                    expect(scope.teaming['tasks']).toContain(teamingTasks['artisan1']);
                    expect(scope.teaming['tasks']).toContain(teamingTasks['artisan2']);
                    expect(scope.teaming['tasks']).toContain(teamingTasks['artisan3']);
                    expect(scope.teaming['tasks']).toContain(teamingTasks['traveller1']);
                    expect(scope.teaming['undoTasks'].length).toEqual(zero);
                });

                it('should have the expected formatted release tasks', function(){
                    var zero = 0;
                    var two = 2;
                    scope.init();
                    expect(scope.release['current_score']).toEqual(zero);
                    expect(scope.release['next_score']).toEqual(two);
                    expect(scope.release['tasks']).toContain(releaseTasks['artisan1']);
                    expect(scope.release['tasks']).toContain(releaseTasks['artisan2']);
                    expect(scope.release['tasks']).toContain(releaseTasks['artisan3']);
                    expect(scope.release['tasks']).toContain(releaseTasks['artisan4']);
                    expect(scope.release['tasks']).toContain(releaseTasks['traveller2']);
                    expect(scope.release['undoTasks'].length).toEqual(zero);
                });

                it('should have the expected formatted quality tasks', function(){
                    var zero = 0;
                    var two = 2;
                    scope.init();
                    expect(scope.quality['current_score']).toEqual(zero);
                    expect(scope.quality['next_score']).toEqual(two);
                    expect(scope.quality['tasks']).toContain(qaTasks['artisan1']);
                    expect(scope.quality['tasks']).toContain(qaTasks['artisan2']);
                    expect(scope.quality['tasks']).toContain(qaTasks['artisan3']);
                    expect(scope.quality['tasks']).toContain(qaTasks['traveller2']);
                    expect(scope.quality['tasks']).toContain(qaTasks['traveller3']);
                    expect(scope.quality['tasks']).toContain(qaTasks['traveller5']);
                    expect(scope.quality['tasks']).toContain(qaTasks['traveller6']);
                    expect(scope.quality['undoTasks'].length).toEqual(zero);
                });

                it('should have the expected formatted environments tasks', function(){
                    var zero = 0;
                    var two = 2;
                    scope.init();
                    expect(scope.environments['current_score']).toEqual(zero);
                    expect(scope.environments['next_score']).toEqual(two);
                    expect(scope.environments['tasks']).toContain(environmentsTasks['artisan1']);
                    expect(scope.environments['tasks']).toContain(environmentsTasks['artisan2']);
                    expect(scope.environments['tasks']).toContain(environmentsTasks['artisan3']);
                    expect(scope.environments['tasks']).toContain(environmentsTasks['artisan4']);
                    expect(scope.environments['tasks']).toContain(environmentsTasks['artisan5']);
                    expect(scope.environments['tasks']).toContain(environmentsTasks['artisan6']);
                    expect(scope.environments['tasks']).toContain(environmentsTasks['artisan7']);
                    expect(scope.environments['undoTasks'].length).toEqual(zero);
                });

                it('should have the expected formatted feature teams tasks', function(){
                    var zero = 0;
                    var two = 2;
                    scope.init();
                    expect(scope.featureTeams['current_score']).toEqual(zero);
                    expect(scope.featureTeams['next_score']).toEqual(two);
                    expect(scope.featureTeams['tasks']).toContain(featureTeamsTasks['artisan1']);
                    expect(scope.featureTeams['tasks']).toContain(featureTeamsTasks['artisan2']);
                    expect(scope.featureTeams['tasks']).toContain(featureTeamsTasks['artisan3']);
                    expect(scope.featureTeams['tasks']).toContain(featureTeamsTasks['traveller1']);
                    expect(scope.featureTeams['tasks']).toContain(featureTeamsTasks['traveller2']);
                    expect(scope.featureTeams['tasks']).toContain(featureTeamsTasks['traveller3']);
                    expect(scope.featureTeams['tasks']).toContain(featureTeamsTasks['traveller4']);
                    expect(scope.featureTeams['undoTasks'].length).toEqual(zero);
                });
            });
            describe('#emptyAssessments', function(){
                it('should set the results data with initialisation values of zero and undefined team name', function(){
                    rootScope.assessments = {};
                    var expectedResultData = {'teamName': undefined, 'strategy': 0, 'planning': 0, 'coding': 0, 'ci': 0,
                        'incident': 0, 'risk': 0, 'design': 0, 'teaming': 0, 'release': 0, 'qa': 0, 'environments': 0,
                        'featureTeams': 0, 'portfolioName': undefined, 'rawData': {}};
                    scope.init();

                    expect(scope.resultsData).toEqual(expectedResultData);
                });

                it('should call the draw chart function with the right parameters', function(){
                    rootScope.assessments = {};
                    scope.init();
                    expect(saveResultsSpy.drawChart).toHaveBeenCalledWith(undefined,0,0,0,0,0,0,0,0,0,0,0,0,undefined);
                });
            });
            describe('#withAssessmentResults', function(){
                it('should set the results data with initialisation values of zero and undefined team name', function(){
                    rootScope.teamName = 'Example Team';
                    rootScope.selectedPortfolioName = 'Example Portfolio';
                    rootScope.assessments = {'strategy': {'score': 2}, 'planning': {'score': 1}, 'coding': {'score': 3},
                        'ci': {'score': 3}, 'incident': {'score': 4}, 'risk': {'score': 1}, 'design': {'score': 2},
                        'teaming': {'score': 3}, 'release': {'score': 2}, 'QA': {'score': 4}, 'environments': {'score': 3},
                        'featureTeams': {'score': 2}};

                    var expectedResultData = {'teamName': 'Example Team', 'strategy': 2, 'planning': 1, 'coding': 3, 'ci': 3,
                        'incident': 4, 'risk': 1, 'design': 2, 'teaming': 3, 'release': 2, 'qa': 4, 'environments': 3,
                        'featureTeams': 2, 'portfolioName': 'Example Portfolio', 'rawData': rootScope.assessments};
                    scope.init();

                    expect(scope.resultsData).toEqual(expectedResultData);
                });

                it('should call the draw chart function with the right parameters', function(){
                    rootScope.teamName = 'Example Team';
                    rootScope.selectedPortfolioName = 'Example Portfolio';
                    rootScope.assessments = {'strategy': {'score': 2}, 'planning': {'score': 1}, 'coding': {'score': 3},
                        'ci': {'score': 3}, 'incident': {'score': 4}, 'risk': {'score': 1}, 'design': {'score': 2},
                        'teaming': {'score': 3}, 'release': {'score': 2}, 'QA': {'score': 4}, 'environments': {'score': 3},
                        'featureTeams': {'score': 2}};

                    scope.init();

                    expect(saveResultsSpy.drawChart).toHaveBeenCalledWith('Example Team',2,1,3,3,4,1,2,3,2,4,3,2,'Example Portfolio');
                });

                it('should set the scope parameters for the different scores', function(){
                    rootScope.teamName = 'Example Team';
                    rootScope.selectedPortfolioName = 'Example Portfolio';
                    rootScope.assessments = {'strategy': {'score': 2}, 'planning': {'score': 1}, 'coding': {'score': 3},
                        'ci': {'score': 3}, 'incident': {'score': 4}, 'risk': {'score': 1}, 'design': {'score': 2},
                        'teaming': {'score': 3}, 'release': {'score': 2}, 'QA': {'score': 4}, 'environments': {'score': 3},
                        'featureTeams': {'score': 2}};

                    scope.init();

                    expect(scope.strategyScore).toEqual(2);
                    expect(scope.planningScore).toEqual(1);
                    expect(scope.codingScore).toEqual(3);
                    expect(scope.ciScore).toEqual(3);
                    expect(scope.incidentScore).toEqual(4);
                    expect(scope.riskScore).toEqual(1);
                    expect(scope.designScore).toEqual(2);
                    expect(scope.teamingScore).toEqual(3);
                    expect(scope.releaseScore).toEqual(2);
                    expect(scope.QAScore).toEqual(4);
                    expect(scope.environmentsScore).toEqual(3);
                    expect(scope.featureTeamsScore).toEqual(2);
                });


                describe('#prepareParameters', function(){
                    describe('#strategy', function(){
                        it('should set the strategy undo tasks based on the selected true questions for level 1', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 1, 'traveller1': true}, 'planning': {'score': 1}, 'coding': {'score': 1},
                                'ci': {'score': 1}, 'incident': {'score': 1}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var one = 1;
                            var two = 2;

                            scope.init();
                            expect(scope.strategy['current_score']).toEqual(one);
                            expect(scope.strategy['next_score']).toEqual(two);
                            expect(scope.strategy['tasks']).toContain(strategyTasks['artisan1']);
                            expect(scope.strategy['tasks']).toContain(strategyTasks['artisan2']);
                            expect(scope.strategy['tasks']).toContain(strategyTasks['artisan3']);
                            expect(scope.strategy['undoTasks']).toContain(strategyTasks['traveller1']);
                            expect(scope.strategy['undoTasks'].length).toEqual(1);
                        });

                        it('should set the strategy undo tasks based on the selected true questions for level 2', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 2, 'artisan1': true}, 'planning': {'score': 1}, 'coding': {'score': 1},
                                'ci': {'score': 1}, 'incident': {'score': 1}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var two = 2;
                            var three = 3;

                            scope.init();
                            expect(scope.strategy['current_score']).toEqual(two);
                            expect(scope.strategy['next_score']).toEqual(three);
                            expect(scope.strategy['tasks']).toContain(strategyTasks['expert1']);
                            expect(scope.strategy['tasks']).toContain(strategyTasks['expert2']);
                            expect(scope.strategy['undoTasks']).toContain(strategyTasks['artisan1']);
                            expect(scope.strategy['undoTasks'].length).toEqual(1);
                        });

                        it('should set the strategy undo tasks based on the selected true questions for level 3', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 3, 'expert1': true}, 'planning': {'score': 1}, 'coding': {'score': 1},
                                'ci': {'score': 1}, 'incident': {'score': 1}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var three = 3;
                            var four = 4;

                            scope.init();
                            expect(scope.strategy['current_score']).toEqual(three);
                            expect(scope.strategy['next_score']).toEqual(four);
                            expect(scope.strategy['tasks']).toContain(strategyTasks['professional1']);
                            expect(scope.strategy['tasks']).toContain(strategyTasks['professional2']);
                            expect(scope.strategy['tasks']).toContain(strategyTasks['professional3']);
                            expect(scope.strategy['undoTasks']).toContain(strategyTasks['expert1']);
                            expect(scope.strategy['undoTasks'].length).toEqual(1);
                        });

                        it('should set the strategy undo tasks based on the selected true questions for level 4', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 4, 'traveller1': true}, 'planning': {'score': 1}, 'coding': {'score': 1},
                                'ci': {'score': 1}, 'incident': {'score': 1}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var four = 4;
                            var five = 5;

                            scope.init();
                            expect(scope.strategy['current_score']).toEqual(four);
                            expect(scope.strategy['next_score']).toEqual(five);
                            expect(scope.strategy['tasks']).toContain(strategyTasks['master1']);
                            expect(scope.strategy['tasks']).toContain(strategyTasks['master2']);
                            expect(scope.strategy['tasks']).toContain(strategyTasks['master3']);
                            expect(scope.strategy['tasks']).toContain(strategyTasks['master4']);
                            expect(scope.strategy['undoTasks'].length).toEqual(0);
                        });

                        it('should set the strategy undo tasks based on the selected true questions for level 5', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 5, 'traveller1': true}, 'planning': {'score': 1}, 'coding': {'score': 1},
                                'ci': {'score': 1}, 'incident': {'score': 1}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var five = 5;

                            scope.init();
                            expect(scope.strategy['current_score']).toEqual(five);
                            expect(scope.strategy['next_score']).toEqual(five);
                            expect(scope.strategy['tasks'].length).toEqual(0);
                            expect(scope.strategy['undoTasks'].length).toEqual(0);
                        });
                    });

                    describe('#planning', function(){
                        it('should set the planning undo tasks based on the selected true questions for level 1', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 1, 'traveller1': true},
                                'planning': {'score': 1, 'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true},
                                'coding': {'score': 1},
                                'ci': {'score': 1}, 'incident': {'score': 1}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var one = 1;
                            var two = 2;

                            scope.init();
                            expect(scope.planning['current_score']).toEqual(one);
                            expect(scope.planning['next_score']).toEqual(two);
                            expect(scope.planning['tasks']).toContain(planningTasks['artisan1']);
                            expect(scope.planning['tasks']).toContain(planningTasks['artisan2']);
                            expect(scope.planning['tasks']).toContain(planningTasks['artisan3']);
                            expect(scope.planning['tasks']).toContain(planningTasks['artisan4']);
                            expect(scope.planning['tasks']).toContain(planningTasks['artisan5']);
                            expect(scope.planning['undoTasks']).toContain(planningTasks['traveller1']);
                            expect(scope.planning['undoTasks']).toContain(planningTasks['traveller2']);
                            expect(scope.planning['undoTasks']).toContain(planningTasks['traveller3']);
                            expect(scope.planning['undoTasks']).toContain(planningTasks['traveller4']);
                            expect(scope.planning['undoTasks']).toContain(planningTasks['traveller5']);
                            expect(scope.planning['undoTasks'].length).toEqual(5);
                        });

                        it('should set the planning undo tasks based on the selected true questions for level 2', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 2, 'artisan1': true},
                                'planning': {'score': 2, 'artisan1': true, 'traveller5': true},
                                'coding': {'score': 1},
                                'ci': {'score': 1}, 'incident': {'score': 1}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var two = 2;
                            var three = 3;

                            scope.init();
                            expect(scope.planning['current_score']).toEqual(two);
                            expect(scope.planning['next_score']).toEqual(three);
                            expect(scope.planning['tasks']).toContain(planningTasks['expert1']);
                            expect(scope.planning['tasks']).toContain(planningTasks['expert2']);
                            expect(scope.planning['tasks']).toContain(planningTasks['expert3']);
                            expect(scope.planning['tasks']).toContain(planningTasks['expert4']);
                            expect(scope.planning['tasks']).toContain(planningTasks['expert5']);
                            expect(scope.planning['tasks']).toContain(planningTasks['expert6']);
                            expect(scope.planning['undoTasks']).toContain(planningTasks['artisan1']);
                            expect(scope.planning['undoTasks'].length).toEqual(1);
                        });

                        it('should set the planning undo tasks based on the selected true questions for level 3', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 3, 'expert1': true},
                                'planning': {'score': 3, 'artisan1': true, 'traveller5': true, 'expert2': true, 'expert4': true},
                                'coding': {'score': 1},
                                'ci': {'score': 1}, 'incident': {'score': 1}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var three = 3;
                            var four = 4;

                            scope.init();
                            expect(scope.planning['current_score']).toEqual(three);
                            expect(scope.planning['next_score']).toEqual(four);
                            expect(scope.planning['tasks']).toContain(planningTasks['professional1']);
                            expect(scope.planning['tasks']).toContain(planningTasks['professional2']);
                            expect(scope.planning['tasks']).toContain(planningTasks['professional3']);
                            expect(scope.planning['tasks']).toContain(planningTasks['professional4']);
                            expect(scope.planning['tasks']).toContain(planningTasks['professional5']);
                            expect(scope.planning['tasks']).toContain(planningTasks['professional6']);
                            expect(scope.planning['undoTasks'].length).toEqual(0);
                        });

                        it('should set the planning undo tasks based on the selected true questions for level 4', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 4, 'traveller1': true},
                                'planning': {'score': 4, 'artisan1': true, 'traveller5': true, 'expert2': true, 'expert4': true},
                                'coding': {'score': 1},
                                'ci': {'score': 1}, 'incident': {'score': 1}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var four = 4;
                            var five = 5;

                            scope.init();
                            expect(scope.planning['current_score']).toEqual(four);
                            expect(scope.planning['next_score']).toEqual(five);
                            expect(scope.planning['tasks']).toContain(planningTasks['master1']);
                            expect(scope.planning['tasks']).toContain(planningTasks['master2']);
                            expect(scope.planning['tasks']).toContain(planningTasks['master3']);
                            expect(scope.planning['undoTasks'].length).toEqual(0);
                        });

                        it('should set the planning undo tasks based on the selected true questions for level 5', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 5, 'traveller1': true}, 'planning': {'score': 5}, 'coding': {'score': 1},
                                'ci': {'score': 1}, 'incident': {'score': 1}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var five = 5;

                            scope.init();
                            expect(scope.planning['current_score']).toEqual(five);
                            expect(scope.planning['next_score']).toEqual(five);
                            expect(scope.planning['tasks'].length).toEqual(0);
                            expect(scope.planning['undoTasks'].length).toEqual(0);
                        });
                    });

                    describe('#coding', function(){
                        it('should set the coding undo tasks based on the selected true questions for level 1', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 1, 'traveller1': true},
                                'planning': {'score': 1, 'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true},
                                'coding': {'score': 1, 'traveller1': true},
                                'ci': {'score': 1}, 'incident': {'score': 1}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var one = 1;
                            var two = 2;

                            scope.init();
                            expect(scope.coding['current_score']).toEqual(one);
                            expect(scope.coding['next_score']).toEqual(two);
                            expect(scope.coding['tasks']).toContain(codingTasks['artisan1']);
                            expect(scope.coding['tasks']).toContain(codingTasks['artisan2']);
                            expect(scope.coding['undoTasks']).toContain(codingTasks['traveller1']);
                            expect(scope.coding['undoTasks'].length).toEqual(1);
                        });

                        it('should set the coding undo tasks based on the selected true questions for level 2', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 2, 'artisan1': true},
                                'planning': {'score': 2, 'artisan1': true, 'traveller5': true},
                                'coding': {'score': 2},
                                'ci': {'score': 1}, 'incident': {'score': 1}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var two = 2;
                            var three = 3;

                            scope.init();
                            expect(scope.coding['current_score']).toEqual(two);
                            expect(scope.coding['next_score']).toEqual(three);
                            expect(scope.coding['tasks']).toContain(codingTasks['expert1']);
                            expect(scope.coding['tasks']).toContain(codingTasks['expert2']);
                            expect(scope.coding['tasks']).toContain(codingTasks['expert3']);
                            expect(scope.coding['tasks']).toContain(codingTasks['expert4']);
                            expect(scope.coding['undoTasks'].length).toEqual(0);
                        });

                        it('should set the coding undo tasks based on the selected true questions for level 3', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 3, 'expert1': true},
                                'planning': {'score': 3, 'artisan1': true, 'traveller5': true, 'expert2': true, 'expert4': true},
                                'coding': {'score': 3},
                                'ci': {'score': 1}, 'incident': {'score': 1}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var three = 3;
                            var four = 4;

                            scope.init();
                            expect(scope.coding['current_score']).toEqual(three);
                            expect(scope.coding['next_score']).toEqual(four);
                            expect(scope.coding['tasks']).toContain(codingTasks['professional1']);
                            expect(scope.coding['tasks']).toContain(codingTasks['professional2']);
                            expect(scope.coding['tasks']).toContain(codingTasks['professional3']);
                            expect(scope.coding['tasks']).toContain(codingTasks['professional4']);
                            expect(scope.coding['undoTasks'].length).toEqual(0);
                        });

                        it('should set the coding undo tasks based on the selected true questions for level 4', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 4, 'traveller1': true},
                                'planning': {'score': 4, 'artisan1': true, 'traveller5': true, 'expert2': true, 'expert4': true},
                                'coding': {'score': 4},
                                'ci': {'score': 1}, 'incident': {'score': 1}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var four = 4;
                            var five = 5;

                            scope.init();
                            expect(scope.coding['current_score']).toEqual(four);
                            expect(scope.coding['next_score']).toEqual(five);
                            expect(scope.coding['tasks']).toContain(codingTasks['master1']);
                            expect(scope.coding['tasks']).toContain(codingTasks['master2']);
                            expect(scope.coding['tasks']).toContain(codingTasks['master3']);
                            expect(scope.coding['tasks']).toContain(codingTasks['master4']);
                            expect(scope.coding['undoTasks'].length).toEqual(0);
                        });

                        it('should set the coding undo tasks based on the selected true questions for level 5', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 5, 'traveller1': true}, 'planning': {'score': 5}, 'coding': {'score': 5},
                                'ci': {'score': 1}, 'incident': {'score': 1}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var five = 5;

                            scope.init();
                            expect(scope.coding['current_score']).toEqual(five);
                            expect(scope.coding['next_score']).toEqual(five);
                            expect(scope.coding['tasks'].length).toEqual(0);
                            expect(scope.coding['undoTasks'].length).toEqual(0);
                        });
                    });

                    describe('#continuousIntegration', function(){
                        it('should set the CI undo tasks based on the selected true questions for level 1', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 1, 'traveller1': true},
                                'planning': {'score': 1, 'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true},
                                'coding': {'score': 1, 'traveller1': true},
                                'ci': {'score': 1, 'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true},
                                'incident': {'score': 1}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var one = 1;
                            var two = 2;

                            scope.init();
                            expect(scope.ci['current_score']).toEqual(one);
                            expect(scope.ci['next_score']).toEqual(two);
                            expect(scope.ci['tasks']).toContain(ciTasks['artisan1']);
                            expect(scope.ci['tasks']).toContain(ciTasks['artisan2']);
                            expect(scope.ci['tasks']).toContain(ciTasks['artisan3']);
                            expect(scope.ci['undoTasks']).toContain(ciTasks['traveller1']);
                            expect(scope.ci['undoTasks']).toContain(ciTasks['traveller3']);
                            expect(scope.ci['undoTasks']).toContain(ciTasks['traveller5']);
                            expect(scope.ci['undoTasks'].length).toEqual(3);
                        });

                        it('should set the CI undo tasks based on the selected true questions for level 2', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 2, 'artisan1': true},
                                'planning': {'score': 2, 'artisan1': true, 'traveller5': true},
                                'coding': {'score': 2},
                                'ci': {'score': 2, 'traveller4': true, 'traveller6': true}, 'incident': {'score': 1}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var two = 2;
                            var three = 3;

                            scope.init();
                            expect(scope.ci['current_score']).toEqual(two);
                            expect(scope.ci['next_score']).toEqual(three);
                            expect(scope.ci['tasks']).toContain(ciTasks['traveller2']);
                            expect(scope.ci['tasks']).toContain(ciTasks['expert1']);
                            expect(scope.ci['tasks']).toContain(ciTasks['expert2']);
                            expect(scope.ci['tasks']).toContain(ciTasks['expert3']);
                            expect(scope.ci['tasks']).toContain(ciTasks['expert4']);
                            expect(scope.ci['tasks']).toContain(ciTasks['expert5']);
                            expect(scope.ci['tasks']).toContain(ciTasks['expert6']);
                            expect(scope.ci['tasks']).toContain(ciTasks['expert7']);
                            expect(scope.ci['undoTasks']).toContain(ciTasks['traveller4']);
                            expect(scope.ci['undoTasks']).toContain(ciTasks['traveller6']);
                            expect(scope.ci['undoTasks'].length).toEqual(2);
                        });

                        it('should set the CI undo tasks based on the selected true questions for level 3', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 3, 'expert1': true},
                                'planning': {'score': 3, 'artisan1': true, 'traveller5': true, 'expert2': true, 'expert4': true},
                                'coding': {'score': 3},
                                'ci': {'score': 3}, 'incident': {'score': 1}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var three = 3;
                            var four = 4;

                            scope.init();
                            expect(scope.ci['current_score']).toEqual(three);
                            expect(scope.ci['next_score']).toEqual(four);
                            expect(scope.ci['tasks']).toContain(ciTasks['professional1']);
                            expect(scope.ci['tasks']).toContain(ciTasks['professional2']);
                            expect(scope.ci['tasks']).toContain(ciTasks['professional3']);
                            expect(scope.ci['tasks']).toContain(ciTasks['professional4']);
                            expect(scope.ci['tasks']).toContain(ciTasks['professional5']);
                            expect(scope.ci['tasks']).toContain(ciTasks['professional6']);
                            expect(scope.ci['tasks']).toContain(ciTasks['professional7']);
                            expect(scope.ci['undoTasks'].length).toEqual(0);
                        });

                        it('should set the CI undo tasks based on the selected true questions for level 4', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 4, 'traveller1': true},
                                'planning': {'score': 4, 'artisan1': true, 'traveller5': true, 'expert2': true, 'expert4': true},
                                'coding': {'score': 4},
                                'ci': {'score': 4, 'traveller2': true}, 'incident': {'score': 1}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var four = 4;
                            var five = 5;

                            scope.init();
                            expect(scope.ci['current_score']).toEqual(four);
                            expect(scope.ci['next_score']).toEqual(five);
                            expect(scope.ci['tasks']).toContain(ciTasks['master1']);
                            expect(scope.ci['tasks']).toContain(ciTasks['master2']);
                            expect(scope.ci['tasks']).toContain(ciTasks['master3']);
                            expect(scope.ci['tasks']).toContain(ciTasks['master4']);
                            expect(scope.ci['tasks']).toContain(ciTasks['master5']);
                            expect(scope.ci['tasks']).toContain(ciTasks['master6']);
                            expect(scope.ci['tasks']).toContain(ciTasks['master7']);
                            expect(scope.ci['tasks']).toContain(ciTasks['master8']);
                            expect(scope.ci['tasks']).toContain(ciTasks['master9']);
                            expect(scope.ci['tasks']).toContain(ciTasks['master10']);
                            expect(scope.ci['undoTasks']).toContain(ciTasks['traveller2']);
                            expect(scope.ci['undoTasks'].length).toEqual(1);
                        });

                        it('should set the coding undo tasks based on the selected true questions for level 5', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 5, 'traveller1': true}, 'planning': {'score': 5}, 'coding': {'score': 5},
                                'ci': {'score': 5}, 'incident': {'score': 1}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var five = 5;

                            scope.init();
                            expect(scope.ci['current_score']).toEqual(five);
                            expect(scope.ci['next_score']).toEqual(five);
                            expect(scope.ci['tasks'].length).toEqual(0);
                            expect(scope.ci['undoTasks'].length).toEqual(0);
                        });
                    });

                    describe('#IncidentManagement', function(){
                        it('should set the incident undo tasks based on the selected true questions for level 1', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 1, 'traveller1': true},
                                'planning': {'score': 1, 'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true},
                                'coding': {'score': 1, 'traveller1': true},
                                'ci': {'score': 1},
                                'incident': {'score': 1, 'traveller1': true}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var one = 1;
                            var two = 2;

                            scope.init();
                            expect(scope.incident['current_score']).toEqual(one);
                            expect(scope.incident['next_score']).toEqual(two);
                            expect(scope.incident['tasks']).toContain(incidentTasks['artisan1']);
                            expect(scope.incident['tasks']).toContain(incidentTasks['artisan2']);
                            expect(scope.incident['tasks']).toContain(incidentTasks['artisan3']);
                            expect(scope.incident['undoTasks']).toContain(incidentTasks['traveller1']);
                            expect(scope.incident['undoTasks'].length).toEqual(1);
                        });

                        it('should set the incident undo tasks based on the selected true questions for level 2', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 2, 'artisan1': true},
                                'planning': {'score': 2, 'artisan1': true, 'traveller5': true},
                                'coding': {'score': 2},
                                'ci': {'score': 2},
                                'incident': {'score': 2}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var two = 2;
                            var three = 3;

                            scope.init();
                            expect(scope.incident['current_score']).toEqual(two);
                            expect(scope.incident['next_score']).toEqual(three);
                            expect(scope.incident['tasks']).toContain(incidentTasks['expert1']);
                            expect(scope.incident['tasks']).toContain(incidentTasks['expert2']);
                            expect(scope.incident['tasks']).toContain(incidentTasks['expert3']);
                            expect(scope.incident['tasks']).toContain(incidentTasks['expert4']);
                            expect(scope.incident['tasks']).toContain(incidentTasks['expert5']);
                            expect(scope.incident['tasks']).toContain(incidentTasks['expert6']);
                            expect(scope.incident['undoTasks'].length).toEqual(0);
                        });

                        it('should set the incident undo tasks based on the selected true questions for level 3', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 3, 'expert1': true},
                                'planning': {'score': 3, 'artisan1': true, 'traveller5': true, 'expert2': true, 'expert4': true},
                                'coding': {'score': 3},
                                'ci': {'score': 3}, 'incident': {'score': 3}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var three = 3;
                            var four = 4;

                            scope.init();
                            expect(scope.incident['current_score']).toEqual(three);
                            expect(scope.incident['next_score']).toEqual(four);
                            expect(scope.incident['tasks']).toContain(incidentTasks['professional1']);
                            expect(scope.incident['tasks']).toContain(incidentTasks['professional2']);
                            expect(scope.incident['tasks']).toContain(incidentTasks['professional3']);
                            expect(scope.incident['tasks']).toContain(incidentTasks['professional4']);
                            expect(scope.incident['undoTasks'].length).toEqual(0);
                        });

                        it('should set the incident undo tasks based on the selected true questions for level 4', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 4, 'traveller1': true},
                                'planning': {'score': 4, 'artisan1': true, 'traveller5': true, 'expert2': true, 'expert4': true},
                                'coding': {'score': 4},
                                'ci': {'score': 4, 'traveller2': true}, 'incident': {'score': 4}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var four = 4;
                            var five = 5;

                            scope.init();
                            expect(scope.incident['current_score']).toEqual(four);
                            expect(scope.incident['next_score']).toEqual(five);
                            expect(scope.incident['tasks']).toContain(incidentTasks['master1']);
                            expect(scope.incident['tasks']).toContain(incidentTasks['master2']);
                            expect(scope.incident['tasks']).toContain(incidentTasks['master3']);
                            expect(scope.incident['undoTasks'].length).toEqual(0);
                        });

                        it('should set the incident undo tasks based on the selected true questions for level 5', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 5, 'traveller1': true}, 'planning': {'score': 5}, 'coding': {'score': 5},
                                'ci': {'score': 5}, 'incident': {'score': 5}, 'risk': {'score': 1}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var five = 5;

                            scope.init();
                            expect(scope.incident['current_score']).toEqual(five);
                            expect(scope.incident['next_score']).toEqual(five);
                            expect(scope.incident['tasks'].length).toEqual(0);
                            expect(scope.incident['undoTasks'].length).toEqual(0);
                        });
                    });

                    describe('#RiskAndIssueManagement', function(){
                        it('should set the risk undo tasks based on the selected true questions for level 1', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 1, 'traveller1': true},
                                'planning': {'score': 1, 'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true},
                                'coding': {'score': 1, 'traveller1': true},
                                'ci': {'score': 1},
                                'incident': {'score': 1, 'traveller1': true},
                                'risk': {'score': 1, 'traveller1': true, 'traveller2': true}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var one = 1;
                            var two = 2;

                            scope.init();
                            expect(scope.risk['current_score']).toEqual(one);
                            expect(scope.risk['next_score']).toEqual(two);
                            expect(scope.risk['tasks']).toContain(riskTasks['artisan1']);
                            expect(scope.risk['tasks']).toContain(riskTasks['artisan2']);
                            expect(scope.risk['tasks']).toContain(riskTasks['artisan3']);
                            expect(scope.risk['undoTasks']).toContain(riskTasks['traveller1']);
                            expect(scope.risk['undoTasks']).toContain(riskTasks['traveller2']);
                            expect(scope.risk['undoTasks'].length).toEqual(2);
                        });

                        it('should set the risk undo tasks based on the selected true questions for level 2', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 2, 'artisan1': true},
                                'planning': {'score': 2, 'artisan1': true, 'traveller5': true},
                                'coding': {'score': 2},
                                'ci': {'score': 2},
                                'incident': {'score': 2}, 'risk': {'score': 2}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var two = 2;
                            var three = 3;

                            scope.init();
                            expect(scope.risk['current_score']).toEqual(two);
                            expect(scope.risk['next_score']).toEqual(three);
                            expect(scope.risk['tasks']).toContain(riskTasks['expert1']);
                            expect(scope.risk['tasks']).toContain(riskTasks['expert2']);
                            expect(scope.risk['tasks']).toContain(riskTasks['expert3']);
                            expect(scope.risk['undoTasks'].length).toEqual(0);
                        });

                        it('should set the risk undo tasks based on the selected true questions for level 3', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 3, 'expert1': true},
                                'planning': {'score': 3, 'artisan1': true, 'traveller5': true, 'expert2': true, 'expert4': true},
                                'coding': {'score': 3},
                                'ci': {'score': 3}, 'incident': {'score': 3}, 'risk': {'score': 3}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var three = 3;
                            var four = 4;

                            scope.init();
                            expect(scope.risk['current_score']).toEqual(three);
                            expect(scope.risk['next_score']).toEqual(four);
                            expect(scope.risk['tasks']).toContain(riskTasks['professional1']);
                            expect(scope.risk['tasks']).toContain(riskTasks['professional2']);
                            expect(scope.risk['tasks']).toContain(riskTasks['professional3']);
                            expect(scope.risk['undoTasks'].length).toEqual(0);
                        });

                        it('should set the risk undo tasks based on the selected true questions for level 4', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 4, 'traveller1': true},
                                'planning': {'score': 4, 'artisan1': true, 'traveller5': true, 'expert2': true, 'expert4': true},
                                'coding': {'score': 4},
                                'ci': {'score': 4, 'traveller2': true}, 'incident': {'score': 4}, 'risk': {'score': 4}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var four = 4;
                            var five = 5;

                            scope.init();
                            expect(scope.risk['current_score']).toEqual(four);
                            expect(scope.risk['next_score']).toEqual(five);
                            expect(scope.risk['tasks']).toContain(riskTasks['master1']);
                            expect(scope.risk['tasks']).toContain(riskTasks['master2']);
                            expect(scope.risk['tasks']).toContain(riskTasks['master3']);
                            expect(scope.risk['tasks']).toContain(riskTasks['master4']);
                            expect(scope.risk['tasks']).toContain(riskTasks['master5']);
                            expect(scope.risk['undoTasks'].length).toEqual(0);
                        });

                        it('should set the risk undo tasks based on the selected true questions for level 5', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 5, 'traveller1': true}, 'planning': {'score': 5}, 'coding': {'score': 5},
                                'ci': {'score': 5}, 'incident': {'score': 5}, 'risk': {'score': 5}, 'design': {'score': 1},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var five = 5;

                            scope.init();
                            expect(scope.risk['current_score']).toEqual(five);
                            expect(scope.risk['next_score']).toEqual(five);
                            expect(scope.risk['tasks'].length).toEqual(0);
                            expect(scope.risk['undoTasks'].length).toEqual(0);
                        });
                    });

                    describe('#SoftwareDesign', function(){
                        it('should set the design undo tasks based on the selected true questions for level 1', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 1, 'traveller1': true},
                                'planning': {'score': 1, 'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true},
                                'coding': {'score': 1, 'traveller1': true},
                                'ci': {'score': 1},
                                'incident': {'score': 1, 'traveller1': true},
                                'risk': {'score': 1, 'traveller1': true, 'traveller2': true},
                                'design': {'score': 1, 'traveller1': true, 'traveller2': true},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var one = 1;
                            var two = 2;

                            scope.init();
                            expect(scope.design['current_score']).toEqual(one);
                            expect(scope.design['next_score']).toEqual(two);
                            expect(scope.design['tasks']).toContain(designTasks['artisan1']);
                            expect(scope.design['tasks']).toContain(designTasks['artisan2']);
                            expect(scope.design['tasks']).toContain(designTasks['traveller3']);
                            expect(scope.design['undoTasks']).toContain(designTasks['traveller1']);
                            expect(scope.design['undoTasks']).toContain(designTasks['traveller2']);
                            expect(scope.design['undoTasks'].length).toEqual(2);
                        });

                        it('should set the design undo tasks based on the selected true questions for level 2', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 2, 'artisan1': true},
                                'planning': {'score': 2, 'artisan1': true, 'traveller5': true},
                                'coding': {'score': 2},
                                'ci': {'score': 2},
                                'incident': {'score': 2}, 'risk': {'score': 2},
                                'design': {'score': 2, 'traveller1': true, 'traveller2': true, 'traveller3': true},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var two = 2;
                            var three = 3;

                            scope.init();
                            expect(scope.design['current_score']).toEqual(two);
                            expect(scope.design['next_score']).toEqual(three);
                            expect(scope.design['tasks']).toContain(designTasks['artisan1']);
                            expect(scope.design['tasks']).toContain(designTasks['artisan2']);
                            expect(scope.design['tasks']).toContain(designTasks['expert1']);
                            expect(scope.design['tasks']).toContain(designTasks['expert2']);
                            expect(scope.design['tasks']).toContain(designTasks['expert3']);
                            expect(scope.design['tasks']).toContain(designTasks['expert4']);
                            expect(scope.design['undoTasks']).toContain(designTasks['traveller1']);
                            expect(scope.design['undoTasks']).toContain(designTasks['traveller2']);
                            expect(scope.design['undoTasks']).toContain(designTasks['traveller3']);
                            expect(scope.design['undoTasks'].length).toEqual(3);
                        });

                        it('should set the design undo tasks based on the selected true questions for level 3', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 3, 'expert1': true},
                                'planning': {'score': 3, 'artisan1': true, 'traveller5': true, 'expert2': true, 'expert4': true},
                                'coding': {'score': 3},
                                'ci': {'score': 3}, 'incident': {'score': 3}, 'risk': {'score': 3}, 'design': {'score': 3},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var three = 3;
                            var four = 4;

                            scope.init();
                            expect(scope.design['current_score']).toEqual(three);
                            expect(scope.design['next_score']).toEqual(four);
                            expect(scope.design['tasks']).toContain(designTasks['professional1']);
                            expect(scope.design['tasks']).toContain(designTasks['professional2']);
                            expect(scope.design['tasks']).toContain(designTasks['professional3']);
                            expect(scope.design['tasks']).toContain(designTasks['professional4']);
                            expect(scope.design['tasks']).toContain(designTasks['professional5']);
                            expect(scope.design['undoTasks'].length).toEqual(0);
                        });

                        it('should set the design undo tasks based on the selected true questions for level 4', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 4, 'traveller1': true},
                                'planning': {'score': 4, 'artisan1': true, 'traveller5': true, 'expert2': true, 'expert4': true},
                                'coding': {'score': 4},
                                'ci': {'score': 4, 'traveller2': true}, 'incident': {'score': 4}, 'risk': {'score': 4},
                                'design': {'score': 4, 'professional1': true},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var four = 4;
                            var five = 5;

                            scope.init();
                            expect(scope.design['current_score']).toEqual(four);
                            expect(scope.design['next_score']).toEqual(five);
                            expect(scope.design['tasks']).toContain(designTasks['master1']);
                            expect(scope.design['tasks']).toContain(designTasks['master2']);
                            expect(scope.design['undoTasks']).toContain(designTasks['professional1']);
                            expect(scope.design['undoTasks'].length).toEqual(1);
                        });

                        it('should set the design undo tasks based on the selected true questions for level 5', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 5, 'traveller1': true}, 'planning': {'score': 5}, 'coding': {'score': 5},
                                'ci': {'score': 5}, 'incident': {'score': 5}, 'risk': {'score': 5}, 'design': {'score': 5},
                                'teaming': {'score': 1}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var five = 5;

                            scope.init();
                            expect(scope.design['current_score']).toEqual(five);
                            expect(scope.design['next_score']).toEqual(five);
                            expect(scope.design['tasks'].length).toEqual(0);
                            expect(scope.design['undoTasks'].length).toEqual(0);
                        });
                    });

                    describe('#Teaming', function(){
                        it('should set the teaming undo tasks based on the selected true questions for level 1', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 1, 'traveller1': true},
                                'planning': {'score': 1, 'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true},
                                'coding': {'score': 1, 'traveller1': true},
                                'ci': {'score': 1},
                                'incident': {'score': 1, 'traveller1': true},
                                'risk': {'score': 1, 'traveller1': true, 'traveller2': true},
                                'design': {'score': 1, 'traveller1': true, 'traveller2': true},
                                'teaming': {'score': 1, 'traveller2': true, 'traveller3': true},
                                'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var one = 1;
                            var two = 2;

                            scope.init();
                            expect(scope.teaming['current_score']).toEqual(one);
                            expect(scope.teaming['next_score']).toEqual(two);
                            expect(scope.teaming['tasks']).toContain(teamingTasks['artisan1']);
                            expect(scope.teaming['tasks']).toContain(teamingTasks['artisan2']);
                            expect(scope.teaming['tasks']).toContain(teamingTasks['artisan3']);
                            expect(scope.teaming['tasks']).toContain(teamingTasks['traveller1']);
                            expect(scope.teaming['undoTasks']).toContain(teamingTasks['traveller2']);
                            expect(scope.teaming['undoTasks']).toContain(teamingTasks['traveller3']);
                            expect(scope.teaming['undoTasks'].length).toEqual(2);
                        });

                        it('should set the teaming undo tasks based on the selected true questions for level 2', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 2, 'artisan1': true},
                                'planning': {'score': 2, 'artisan1': true, 'traveller5': true},
                                'coding': {'score': 2},
                                'ci': {'score': 2},
                                'incident': {'score': 2}, 'risk': {'score': 2},
                                'design': {'score': 2, 'traveller1': true, 'traveller2': true, 'traveller3': true},
                                'teaming': {'score': 2}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var two = 2;
                            var three = 3;

                            scope.init();
                            expect(scope.teaming['current_score']).toEqual(two);
                            expect(scope.teaming['next_score']).toEqual(three);
                            expect(scope.teaming['tasks']).toContain(teamingTasks['expert1']);
                            expect(scope.teaming['tasks']).toContain(teamingTasks['expert2']);
                            expect(scope.teaming['tasks']).toContain(teamingTasks['expert3']);
                            expect(scope.teaming['undoTasks'].length).toEqual(0);
                        });

                        it('should set the teaming undo tasks based on the selected true questions for level 3', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 3, 'expert1': true},
                                'planning': {'score': 3, 'artisan1': true, 'traveller5': true, 'expert2': true, 'expert4': true},
                                'coding': {'score': 3},
                                'ci': {'score': 3}, 'incident': {'score': 3}, 'risk': {'score': 3}, 'design': {'score': 3},
                                'teaming': {'score': 3}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var three = 3;
                            var four = 4;

                            scope.init();
                            expect(scope.teaming['current_score']).toEqual(three);
                            expect(scope.teaming['next_score']).toEqual(four);
                            expect(scope.teaming['tasks']).toContain(teamingTasks['professional1']);
                            expect(scope.teaming['tasks']).toContain(teamingTasks['professional2']);
                            expect(scope.teaming['undoTasks'].length).toEqual(0);
                        });

                        it('should set the teaming undo tasks based on the selected true questions for level 4', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 4, 'traveller1': true},
                                'planning': {'score': 4, 'artisan1': true, 'traveller5': true, 'expert2': true, 'expert4': true},
                                'coding': {'score': 4},
                                'ci': {'score': 4, 'traveller2': true}, 'incident': {'score': 4}, 'risk': {'score': 4},
                                'design': {'score': 4, 'professional1': true},
                                'teaming': {'score': 4, 'traveller1': true}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var four = 4;
                            var five = 5;

                            scope.init();
                            expect(scope.teaming['current_score']).toEqual(four);
                            expect(scope.teaming['next_score']).toEqual(five);
                            expect(scope.teaming['tasks']).toContain(teamingTasks['master1']);
                            expect(scope.teaming['tasks']).toContain(teamingTasks['master2']);
                            expect(scope.teaming['tasks']).toContain(teamingTasks['master3']);
                            expect(scope.teaming['undoTasks']).toContain(teamingTasks['traveller1']);
                            expect(scope.teaming['undoTasks'].length).toEqual(1);
                        });

                        it('should set the teaming undo tasks based on the selected true questions for level 5', function(){
                            rootScope.teamName = 'Example Team';
                            rootScope.selectedPortfolioName = 'Example Portfolio';
                            rootScope.assessments = {'strategy': {'score': 5, 'traveller1': true}, 'planning': {'score': 5}, 'coding': {'score': 5},
                                'ci': {'score': 5}, 'incident': {'score': 5}, 'risk': {'score': 5}, 'design': {'score': 5},
                                'teaming': {'score': 5}, 'release': {'score': 1}, 'QA': {'score': 1}, 'environments': {'score': 1},
                                'featureTeams': {'score': 1}};

                            var five = 5;

                            scope.init();
                            expect(scope.teaming['current_score']).toEqual(five);
                            expect(scope.teaming['next_score']).toEqual(five);
                            expect(scope.teaming['tasks'].length).toEqual(0);
                            expect(scope.teaming['undoTasks'].length).toEqual(0);
                        });
                    });
                });
            });
        });

        describe('#saveAssessmentResult', function () {
            it('should call the save results service when called', function () {
                var resultsData = {'teamName': 'Example Team', 'strategy': 2, 'planning': 1, 'coding': 3, 'ci': 3,
                    'incident': 4, 'risk': 1, 'design': 2, 'teaming': 3, 'release': 2, 'qa': 4, 'environments': 3,
                    'featureTeams': 2, 'portfolioName': 'Example Portfolio'};
                scope.resultsData = resultsData;
                deferred.resolve({'status': 200, 'data': 'Saved Successfully'});
                saveResultsSpy.saveAssessments.and.returnValue(deferred.promise);

                scope.$apply();
                scope.saveAssessmentResult();

                expect(saveResultsSpy.saveAssessments).toHaveBeenCalledWith(resultsData);
            });

            it('should set the flags for the save appropriately', function () {
                scope.resultsData = {'teamName': 'Example Team', 'strategy': 2, 'planning': 1, 'coding': 3, 'ci': 3,
                    'incident': 4, 'risk': 1, 'design': 2, 'teaming': 3, 'release': 2, 'qa': 4, 'environments': 3,
                    'featureTeams': 2, 'portfolioName': 'Example Portfolio', 'rawData': {}};
                deferred.resolve({'status': 200, 'data': 'Saved Successfully'});
                spyOn(console, 'log');
                saveResultsSpy.saveAssessments.and.returnValue(deferred.promise);
                scope.saveAssessmentResult();
                scope.$apply();

                expect(console.log).toHaveBeenCalledWith('Saved Successfully');
                expect(scope.isSaved).toBeTruthy();
                expect(scope.isNotSaved).toBeFalsy();
            });

            it('should set the flags for the not saved appropriately if error is returned from the save call', function () {
                scope.resultsData = {'teamName': 'Example Team', 'strategy': 2, 'planning': 1, 'coding': 3, 'ci': 3,
                    'incident': 4, 'risk': 1, 'design': 2, 'teaming': 3, 'release': 2, 'qa': 4, 'environments': 3,
                    'featureTeams': 2, 'portfolioName': 'Example Portfolio', 'rawData': {}};
                deferred.reject({'status': 400, 'data': 'Not Saved Successfully'});

                spyOn(console, 'log');
                saveResultsSpy.saveAssessments.and.returnValue(deferred.promise);
                scope.saveAssessmentResult();
                scope.$apply();

                expect(console.log).toHaveBeenCalledWith('Not Saved Successfully');
                expect(scope.isSaved).toBeFalsy();
                expect(scope.isNotSaved).toBeTruthy();
            })
        });

        describe('#getImages', function(){
            it('should return traveller female icon if the score is 1', function(){
                expect(scope.getImage(1)).toEqual('images/traveller_female.png');
            });

            it('should return artisan female icon if the score is 2', function(){
                expect(scope.getImage(2)).toEqual('images/artisan_female.png');
            });

            it('should return expert female icon if the score is 3', function(){
                expect(scope.getImage(3)).toEqual('images/expert_female.png');
            });

            it('should return professional female icon if the score is 4', function(){
                expect(scope.getImage(4)).toEqual('images/professional_female.png');
            });

            it('should return master female icon if the score is 5', function(){
                expect(scope.getImage(5)).toEqual('images/master_female.png');
            });

            it('should return traveller male icon if the score is 0', function(){
                expect(scope.getImage(0)).toEqual('images/traveller_male.png');
            });
        });

    });
});