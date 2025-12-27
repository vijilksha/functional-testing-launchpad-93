// Complete Interview Preparation Package with all questions from all tabs
// Enhanced with STLC Agile and Agile & Jira examples and sample documents

export interface InterviewCategory {
  category: string;
  icon: string;
  description: string;
  questions: EnhancedQuestion[];
}

export interface FollowUpQuestion {
  question: string;
  answer: string;
  realTimeExample: string;
}

export interface EnhancedQuestion {
  id: string;
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
  stlcAgileExample?: {
    context: string;
    realWorldScenario: string;
    sampleDocument?: string;
  };
  agileJiraExample?: {
    context: string;
    realWorldScenario: string;
    sampleDocument?: string;
  };
  tips: string[];
  commonMistakes: string[];
  followUpQuestions: (string | FollowUpQuestion)[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export const interviewCategories: InterviewCategory[] = [
  {
    category: "SDLC & STLC Fundamentals",
    icon: "🔄",
    description: "Core questions about Software Development and Testing Life Cycles",
    questions: [
      {
        id: "STLC-001",
        question: "What is STLC and how does it differ from SDLC?",
        shortAnswer: "STLC is Software Testing Life Cycle - phases for testing software. SDLC is broader, covering entire software development.",
        detailedAnswer: `STLC (Software Testing Life Cycle) consists of specific phases:
1. Requirement Analysis - Understand what to test
2. Test Planning - Define strategy, resources, timeline
3. Test Case Development - Write detailed test cases
4. Environment Setup - Prepare test environment
5. Test Execution - Run tests, log defects
6. Test Cycle Closure - Final reports, lessons learned

SDLC (Software Development Life Cycle) includes:
Requirements → Design → Development → Testing → Deployment → Maintenance

Key Difference: STLC is a subset focusing only on testing activities within SDLC.`,
        stlcAgileExample: {
          context: "In an Agile STLC approach, these phases happen within each sprint rather than sequentially.",
          realWorldScenario: "For an E-Commerce checkout feature, STLC phases occur during the 2-week sprint: Day 1-2 (Requirement Analysis), Day 3 (Test Planning), Day 4-6 (Test Case Development), Day 7-12 (Execution), Day 13-14 (Closure).",
          sampleDocument: `SPRINT STLC MAPPING - E-Commerce Checkout
═══════════════════════════════════════════
Sprint: Sprint 5 | Duration: 2 weeks
Feature: Shopping Cart Checkout

PHASE TIMELINE:
┌─────────────────────────────────────────┐
│ Day 1-2   │ Requirement Analysis        │
│           │ - Review user stories       │
│           │ - Clarify acceptance criteria│
├───────────┼─────────────────────────────┤
│ Day 3     │ Test Planning               │
│           │ - Identify test scope       │
│           │ - Allocate resources        │
├───────────┼─────────────────────────────┤
│ Day 4-6   │ Test Case Development       │
│           │ - Write test cases          │
│           │ - Prepare test data         │
├───────────┼─────────────────────────────┤
│ Day 7-12  │ Test Execution              │
│           │ - Execute tests             │
│           │ - Log and verify defects    │
├───────────┼─────────────────────────────┤
│ Day 13-14 │ Test Closure                │
│           │ - Prepare metrics report    │
│           │ - Sprint retrospective      │
└───────────┴─────────────────────────────┘`
        },
        agileJiraExample: {
          context: "In Jira, STLC phases are tracked using custom workflows and issue types.",
          realWorldScenario: "Create a Test Plan issue linked to the Epic. Test Cases are sub-tasks. Use Zephyr or Xray for test management integrated with Jira.",
          sampleDocument: `JIRA STLC TRACKING SETUP
═══════════════════════════════════════════
Issue Types:
├── Epic: User Management
│   ├── Story: US-101 User Registration
│   │   ├── Test Plan: TP-101
│   │   ├── Test Case: TC-101-01
│   │   ├── Test Case: TC-101-02
│   │   └── Bug: BUG-201 (linked)
│   └── Story: US-102 User Login
│       ├── Test Plan: TP-102
│       └── Test Cases...

Custom Fields:
- STLC Phase: Analysis | Planning | Development | Execution | Closure
- Test Status: Not Started | In Progress | Passed | Failed | Blocked`
        },
        tips: [
          "Always relate STLC phases to specific activities in your projects",
          "Mention how phases overlap in Agile vs Waterfall",
          "Be prepared to explain entry/exit criteria for each phase"
        ],
        commonMistakes: [
          "Confusing STLC with SDLC",
          "Not mentioning all 6 phases",
          "Describing phases without real examples"
        ],
        followUpQuestions: [
          {
            question: "What are entry and exit criteria for Test Execution phase?",
            answer: `**Entry Criteria for Test Execution:**
- Test Plan approved
- Test cases reviewed and approved
- Test environment ready with correct build deployed
- Test data prepared and validated
- Required access/permissions granted

**Exit Criteria for Test Execution:**
- All planned test cases executed (95%+ execution rate)
- All critical and high priority defects resolved and retested
- Test summary report generated
- Defect metrics within acceptable threshold
- Sign-off from QA Lead/Manager`,
            realTimeExample: `In our E-Commerce project, Sprint 8 Payment Gateway testing had these criteria:

**Entry Criteria (All met before starting):**
✅ Build 2.3.5 deployed to QA environment
✅ 45 test cases approved in Zephyr
✅ Stripe sandbox API credentials configured
✅ Test accounts created with various card types

**Exit Criteria (Checked before sign-off):**
✅ 43/45 test cases executed (96%)
✅ 2 cases blocked (third-party API issue - documented)
✅ 0 Critical bugs open, 1 Medium deferred to next sprint
✅ Test execution report shared with stakeholders`
          },
          {
            question: "How do you handle STLC in Agile sprints?",
            answer: `In Agile, STLC phases run within each sprint rather than sequentially across the project:

**Sprint STLC Mapping:**
1. **Requirement Analysis** - During Sprint Planning and Backlog Refinement
2. **Test Planning** - First 1-2 days of sprint, lightweight mini test plans
3. **Test Case Development** - Parallel with development, based on acceptance criteria
4. **Environment Setup** - Continuous, often automated via CI/CD
5. **Test Execution** - Continuous testing as features complete
6. **Closure** - Sprint Review and Retrospective

**Key Differences from Waterfall:**
- Phases overlap significantly
- Testing starts from Day 1
- Testers collaborate with developers throughout
- Automation is integrated from the start`,
            realTimeExample: `Our Banking app sprint for "Account Statement Download":

**Day 1-2 (Planning + Analysis):**
- Attended Sprint Planning, clarified 3 acceptance criteria
- Created 2-page mini test plan covering scope and risks

**Day 3-6 (Test Development + Environment):**
- Wrote 25 test cases while dev was coding
- Automated 10 smoke tests using existing framework
- Verified statement format templates in test environment

**Day 7-12 (Continuous Execution):**
- Started testing each completed sub-feature
- Found 4 bugs - 3 fixed same day, 1 medium priority

**Day 13-14 (Closure):**
- Final regression run (automated)
- Demo in Sprint Review with test metrics
- Retro action: "Improve PDF generation test data"`
          },
          {
            question: "What happens if requirements change during Test Case Development?",
            answer: `Requirements changes in the middle of testing are common, especially in Agile. Here's how to handle them:

**Immediate Steps:**
1. Assess the impact on existing test cases
2. Communicate with team about timeline implications
3. Update/create new test cases for changed requirements
4. Review test data validity
5. Adjust test plan scope if needed

**Best Practices:**
- Maintain requirement traceability matrix
- Version control test cases
- Use modular test case design for easier updates
- Flag impacted test cases immediately
- Document change in test summary report

**Impact Analysis Questions:**
- Which test cases are affected?
- Do we need new test data?
- Is environment still valid?
- Timeline impact?`,
            realTimeExample: `Insurance Claims project - Mid-sprint requirement change:

**Original Requirement:** Auto-approve claims under $500
**Changed To:** Auto-approve claims under $300, with manager review for $300-$500

**Our Response:**
1. **Impact Analysis (2 hours):**
   - 8 of 15 test cases affected
   - Test data: 12 claim amounts needed adjustment
   - New test cases needed: 5 (for manager review flow)

2. **Actions Taken:**
   - Updated 8 test cases (marked v2 in test management tool)
   - Created 5 new test cases for manager approval workflow
   - Refreshed test data with new boundary values ($299, $300, $301, $499, $500)
   - Sprint extended by 1 day with stakeholder approval

3. **Documentation:**
   - Logged change in Jira under Epic
   - Updated test plan "Scope Changes" section
   - Added note in test summary report about mid-sprint change`
          }
        ],
        difficulty: "Beginner"
      },
      {
        id: "STLC-002",
        question: "What is a Test Plan and what are its key components?",
        shortAnswer: "A Test Plan is a document outlining testing strategy, scope, approach, resources, and schedule for a project.",
        detailedAnswer: `Key components of a Test Plan:

1. **Test Plan ID** - Unique identifier
2. **Introduction** - Purpose and objectives
3. **Scope** - What's in/out of testing scope
4. **Test Items** - Features to be tested
5. **Approach/Strategy** - How testing will be performed
6. **Entry/Exit Criteria** - Start and end conditions
7. **Test Deliverables** - Documents to be produced
8. **Resources** - Team, tools, environments needed
9. **Schedule** - Timeline and milestones
10. **Risks & Mitigation** - Potential issues and solutions
11. **Approvals** - Sign-off requirements`,
        stlcAgileExample: {
          context: "In Agile, Test Plans are lightweight and created per user story or sprint rather than entire project.",
          realWorldScenario: "For a Banking Fund Transfer feature, a mini test plan covers that specific functionality within the sprint.",
          sampleDocument: `AGILE TEST PLAN - Fund Transfer Feature
═══════════════════════════════════════════
User Story: US-301 Bank Transfer
Sprint: Sprint 8

OBJECTIVE:
Validate fund transfer between accounts works correctly 
with proper validation and error handling.

SCOPE:
✓ In Scope:
  - Same bank transfers
  - Inter-bank NEFT/RTGS transfers
  - Transfer validation rules
  - Transaction history update

✗ Out of Scope:
  - International transfers
  - Scheduled transfers (future sprint)

TEST APPROACH:
- Functional testing: Positive & negative scenarios
- Security testing: Authentication, encryption
- Integration testing: Core banking API

ENTRY CRITERIA:
□ User story in "Ready for Testing" status
□ Test environment deployed with latest build
□ Test data prepared (test accounts)
□ API endpoints available

EXIT CRITERIA:
□ All P1 test cases executed
□ No critical or high severity bugs open
□ Test coverage ≥ 90%
□ Sign-off from Product Owner

RISKS:
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| API instability | Medium | High | Mock services |
| Test data issues | Low | Medium | Data refresh script |`
        },
        agileJiraExample: {
          context: "Test Plans can be created as Confluence pages linked to Jira Epics/Stories, or using test management tools.",
          realWorldScenario: "Create a Test Plan in Confluence, link it to the Epic in Jira. Use Jira queries to track test case status.",
          sampleDocument: `JIRA + CONFLUENCE TEST PLAN SETUP
═══════════════════════════════════════════

CONFLUENCE PAGE STRUCTURE:
📄 Test Plan - Sprint 8 Fund Transfer
├── Linked Epic: BANK-EP-005
├── Test Scope
├── Test Cases (embedded Jira filter)
├── Entry/Exit Criteria
└── Sign-off Section

JIRA FILTER FOR TEST TRACKING:
JQL: project = BANK AND type = "Test Case" 
     AND "Epic Link" = BANK-EP-005
     
JIRA DASHBOARD GADGETS:
┌─────────────────────────────────────────┐
│ Test Execution Status    │ Defects Open │
│ ████████░░ 80% Executed │ 🔴 3 Critical │
│ ██████████ 75% Passed   │ 🟡 5 Major    │
│ ██░░░░░░░░ 20% Failed   │ 🟢 8 Minor    │
└─────────────────────────────────────────┘`
        },
        tips: [
          "Keep Agile test plans concise - 1-2 pages max",
          "Focus on what's unique for this feature, not generic content",
          "Always include entry/exit criteria - interviewers love this"
        ],
        commonMistakes: [
          "Creating overly detailed test plans in Agile",
          "Not including risk assessment",
          "Missing entry/exit criteria"
        ],
        followUpQuestions: [
          {
            question: "How detailed should a test plan be in Agile?",
            answer: `In Agile, test plans should be lightweight and focused - typically 1-2 pages maximum per sprint or feature.

**Key Characteristics:**
- Focus on sprint-specific scope, not generic content
- Include only what's unique to this feature/sprint
- Skip sections that haven't changed from the strategy
- Update iteratively as the sprint progresses

**Essential Sections (Keep):**
- Scope (In/Out)
- Entry/Exit Criteria
- Key Risks
- Test Data needs

**Optional Sections (Skip if unchanged):**
- Team roles (defined at project level)
- Tool details (in Test Strategy)
- Standard processes`,
            realTimeExample: `For our E-Commerce "Wishlist" feature sprint:

**Lightweight Test Plan (1 page):**
┌─────────────────────────────────────────┐
│ SPRINT 10 - WISHLIST FEATURE TEST PLAN  │
├─────────────────────────────────────────┤
│ Stories: SHOP-201, SHOP-202, SHOP-203   │
│                                         │
│ IN SCOPE:                               │
│ ✓ Add to wishlist from PDP              │
│ ✓ View wishlist page                    │
│ ✓ Remove from wishlist                  │
│ ✓ Move to cart                          │
│                                         │
│ OUT OF SCOPE:                           │
│ ✗ Share wishlist (Sprint 11)            │
│ ✗ Multiple wishlists (backlog)          │
│                                         │
│ ENTRY: Stories in "Ready for Test"      │
│ EXIT: 0 Critical bugs, 90% executed     │
│                                         │
│ RISKS: Third-party cart API latency     │
└─────────────────────────────────────────┘

Total: 1 page vs. 10+ pages in Waterfall!`
          },
          {
            question: "Who approves the test plan?",
            answer: `Test Plan approval depends on the organization structure and project methodology:

**In Agile:**
- Test Lead or QA Lead reviews and approves
- Product Owner validates scope alignment
- Scrum Master ensures it fits sprint goals
- Often informal - discussed in Sprint Planning

**In Traditional/Waterfall:**
- QA Manager formally approves
- Project Manager signs off
- Client/Stakeholder approval for large projects
- Change Control Board for modifications

**Approval Levels:**
- Sprint Test Plan: QA Lead + PO (lightweight)
- Release Test Plan: QA Manager + PM
- Master Test Strategy: QA Director + PMO`,
            realTimeExample: `Banking Project Test Plan Approval Flow:

**Sprint Level (Agile):**
Day 1 Sprint Planning:
- QA Lead presents 1-page test plan
- PO confirms scope matches sprint goals
- Scrum Master logs in Confluence
- Verbal approval, no formal sign-off

**Release Level:**
Week before release:
- QA Manager reviews consolidated test plan
- Project Manager signs off on timeline
- Compliance Officer verifies security testing included
- Formal approval in Document Management System

**Audit Trail:**
- All approvals tracked in Confluence
- Version history maintained
- Digital signatures for compliance`
          },
          {
            question: "How often do you update the test plan?",
            answer: `Test Plan updates depend on the type and project methodology:

**Sprint Test Plan (Agile):**
- Created fresh each sprint
- Updated if scope changes mid-sprint
- Closed at sprint end with summary

**Release Test Plan:**
- Major update per release cycle
- Minor updates for scope changes
- Reviewed before each testing phase

**Test Strategy:**
- Updated quarterly or annually
- Changed when tools/processes change
- Reviewed for new project types

**When to Update:**
- New requirements added
- Risk profile changes
- Timeline shifts
- Resource changes
- After major incidents`,
            realTimeExample: `Telecom Project Update Schedule:

**Test Strategy:** Updated once per year
- Last updated: January (added AI testing tools section)
- Next review: December

**Release Test Plan:** Updated per release (6 per year)
- Release 2024.3: Updated when payment module added mid-cycle
- Added 2 sections: Payment testing scope, PCI compliance checks

**Sprint Test Plan:** Created/closed each sprint
Sprint 15 Updates:
- Day 1: Initial plan created
- Day 5: Updated when Story TELE-305 descoped
- Day 12: Added risk for API timeout discovered
- Day 14: Closed with test summary, lessons learned

All updates tracked in Confluence with version history:
v1.0 → v1.1 (scope change) → v1.2 (final)`
          }
        ],
        difficulty: "Beginner"
      },
      {
        id: "STLC-003",
        question: "Explain the difference between Test Strategy and Test Plan.",
        shortAnswer: "Test Strategy is organization-wide testing approach. Test Plan is project/feature-specific testing document.",
        detailedAnswer: `**Test Strategy:**
- High-level document
- Created once for organization/product line
- Defines overall testing approach
- Covers tools, environments, standards
- Rarely changes
- Created by Test Manager/Lead

**Test Plan:**
- Detailed document
- Created per project/release/sprint
- Specific scope, timeline, resources
- Derived from Test Strategy
- Updated frequently
- Created by Test Lead/QA

Example: Test Strategy says "Use Selenium for web automation"
Test Plan says "Sprint 5 will automate 15 login test cases using Selenium"`,
        stlcAgileExample: {
          context: "In Agile, Test Strategy is set at program level, Test Plans at sprint/story level.",
          realWorldScenario: "An Insurance company has one Test Strategy covering all products. Each sprint for Claims Processing has its own mini Test Plan.",
          sampleDocument: `STRATEGY vs PLAN COMPARISON
═══════════════════════════════════════════

TEST STRATEGY (Organization Level):
├── Testing Approach: Risk-based testing
├── Tools: Selenium, JMeter, Postman
├── Environments: Dev, QA, Staging, Prod
├── Automation Policy: Automate regression
├── Defect Process: Log in Jira, SLA 24hr
└── Standards: IEEE 829, ISTQB guidelines

TEST PLAN (Sprint Level):
├── Sprint: 12 - Claims Auto-Approval
├── Scope: Auto-approve claims < $500
├── Test Cases: 45 functional, 10 integration
├── Resources: 2 QA engineers, 5 days
├── Automation: 20 cases (44%)
└── Timeline: 
    - Day 1-2: Test case review
    - Day 3-7: Execution
    - Day 8: Defect retesting
    - Day 9-10: Sign-off`
        },
        agileJiraExample: {
          context: "Strategy stored in Confluence wiki, Plans as sprint documents or Jira issues.",
          realWorldScenario: "Test Strategy is a Confluence space with all standards. Each sprint's Test Plan is a child page with specific details.",
          sampleDocument: `CONFLUENCE STRUCTURE
═══════════════════════════════════════════

📁 QA Wiki (Space)
├── 📄 Test Strategy (Master Document)
│   ├── Testing Approach
│   ├── Tool Standards
│   ├── Environment Strategy
│   └── Process Guidelines
│
├── 📁 Release 2024-Q2
│   ├── 📄 Test Plan - Sprint 10
│   ├── 📄 Test Plan - Sprint 11
│   └── 📄 Test Plan - Sprint 12
│
└── 📁 Templates
    ├── 📄 Test Plan Template
    └── 📄 Test Summary Template`
        },
        tips: [
          "Strategy = What & Why, Plan = How & When",
          "Mention that Strategy is reusable, Plan is specific",
          "Be ready with examples from your experience"
        ],
        commonMistakes: [
          "Using the terms interchangeably",
          "Not understanding hierarchy (Strategy → Plan)",
          "Creating too detailed Strategy or too vague Plan"
        ],
        followUpQuestions: [
          {
            question: "Who creates the Test Strategy?",
            answer: `Test Strategy is created by senior testing leadership:

**Primary Authors:**
- Test Manager / QA Manager
- Test Architect (for large organizations)
- QA Director (for enterprise-level)

**Contributors:**
- Senior Test Leads (domain expertise)
- DevOps (CI/CD and environment strategy)
- Architecture Team (technical constraints)
- Security Team (security testing standards)

**Reviewers & Approvers:**
- Project Management Office (PMO)
- Engineering Director
- CTO (for critical products)

The Test Strategy should be reviewed and updated periodically, typically annually or when major changes occur.`,
            realTimeExample: `Insurance Company Test Strategy Creation:

**Author:** QA Director (Sarah) with 15+ years experience

**Contributors:**
- Test Manager (Banking domain expertise)
- Test Manager (Claims domain expertise)  
- DevOps Lead (CI/CD pipeline standards)
- InfoSec Lead (OWASP testing requirements)

**Review Committee:**
- VP of Engineering
- Product Director
- Compliance Officer

**Timeline:**
- Week 1-2: Draft by QA Director
- Week 3: Review with contributors
- Week 4: Leadership review and approval
- Annual review every December

Document stored in Confluence with restricted edit access.`
          },
          {
            question: "How often is Test Strategy updated?",
            answer: `Test Strategy updates are infrequent compared to Test Plans:

**Regular Updates:**
- Annual review (minimum)
- Quarterly check for relevance

**Trigger-Based Updates:**
- New tools adopted (e.g., switching from Selenium to Playwright)
- Major process changes (moving from Waterfall to Agile)
- New testing types added (AI testing, accessibility)
- Organizational restructuring
- After major production incidents
- New compliance requirements

**What Typically Changes:**
- Tool stack updates
- Environment strategy
- Automation policies
- Security testing standards
- Metrics and reporting requirements`,
            realTimeExample: `E-Commerce Platform Strategy Updates (2024):

**Scheduled Annual Review (January):**
- Added AI-powered testing section (new tools)
- Updated automation target: 60% → 75%
- Revised environment strategy (cloud migration)

**Unscheduled Update (March):**
Trigger: GDPR audit finding
- Added data privacy testing requirements
- Included test data anonymization standards

**Unscheduled Update (August):**
Trigger: Mobile app launch
- Added mobile testing strategy
- Updated device/browser matrix
- Added performance benchmarks for mobile

**Version History:**
v3.0 (Jan 2024) - Annual update
v3.1 (Mar 2024) - GDPR compliance
v3.2 (Aug 2024) - Mobile strategy`
          },
          {
            question: "Can you have a Test Plan without a Test Strategy?",
            answer: `Yes, but it's not ideal. Here's why:

**Without Strategy:**
- Each Test Plan reinvents the wheel
- Inconsistent testing approaches across projects
- No organizational standards
- Higher risk of missing important aspects
- More effort per Test Plan

**With Strategy:**
- Test Plans reference common standards
- Consistent quality across projects
- Faster Test Plan creation
- Clear guidelines for testers
- Reduced redundancy

**When It Happens:**
- Small companies without formal QA process
- Startups in early stages
- One-off projects
- New QA teams still building processes

**Recommendation:**
Even a simple 1-page Test Strategy is better than none. It can grow over time.`,
            realTimeExample: `Startup vs Enterprise Comparison:

**Startup (No Strategy - Initially):**
Project A: "We'll test on Chrome"
Project B: "Let's test on all browsers"
Project C: "What browsers should we test?"

Result: Inconsistent, repeated discussions, wasted time

**After Creating Simple Strategy:**
All Projects: "Per our strategy, test on Chrome, Firefox, Safari. Mobile: iOS Safari, Android Chrome."

Time saved: 2 hours per sprint on browser discussions!

**Enterprise (With Strategy):**
┌─────────────────────────────────────────┐
│ TEST STRATEGY (Referenced by all plans) │
├─────────────────────────────────────────┤
│ • Browser Matrix: Defined               │
│ • Automation: Selenium Grid             │
│ • Environments: Dev → QA → Stage → Prod │
│ • Defect Process: Jira with SLA         │
└─────────────────────────────────────────┘

TEST PLAN (Sprint 15):
"Following the Test Strategy v3.2, this sprint will..."
(No need to redefine standards)`
          }
        ],
        difficulty: "Intermediate"
      }
    ]
  },
  {
    category: "Test Case Design & Writing",
    icon: "📝",
    description: "Questions about writing effective test cases and test design techniques",
    questions: [
      {
        id: "TC-001",
        question: "How do you write effective test cases?",
        shortAnswer: "Effective test cases are clear, concise, have defined preconditions, steps, expected results, and are traceable to requirements.",
        detailedAnswer: `Components of an effective test case:

1. **Test Case ID**: Unique identifier (e.g., TC_LOGIN_001)
2. **Title**: Brief description of what's being tested
3. **Preconditions**: Setup required before execution
4. **Test Steps**: Clear, numbered action steps
5. **Test Data**: Specific values to use
6. **Expected Result**: What should happen
7. **Priority**: P1/P2/P3 for execution order
8. **Type**: Positive/Negative/Boundary/Edge Case

Best Practices:
- One test case = one scenario
- Steps should be reproducible by anyone
- Expected result must be verifiable
- Avoid vague terms like "system works properly"`,
        stlcAgileExample: {
          context: "In Agile STLC, test cases are derived directly from acceptance criteria of user stories.",
          realWorldScenario: "For E-Commerce Add to Cart story, each acceptance criterion becomes one or more test cases.",
          sampleDocument: `TEST CASE DERIVATION FROM USER STORY
═══════════════════════════════════════════

USER STORY: EC-US-010 Add to Cart
As a customer, I want to add products to cart
So that I can purchase multiple items

ACCEPTANCE CRITERIA → TEST CASES:

AC1: "Add to cart button visible on product pages"
├── TC_CART_001: Verify Add to Cart on product listing
└── TC_CART_002: Verify Add to Cart on product detail

AC2: "Quantity can be specified before adding"
├── TC_CART_003: Add item with default quantity (1)
├── TC_CART_004: Add item with quantity 5
└── TC_CART_005: Add item with quantity 0 (negative)

AC3: "Out of stock items cannot be added"
├── TC_CART_006: Verify Add to Cart disabled for out of stock
└── TC_CART_007: Verify message shown for out of stock

SAMPLE TEST CASE:
┌────────────────────────────────────────────┐
│ TC_CART_004: Add Item with Custom Quantity │
├────────────────────────────────────────────┤
│ Story: EC-US-010                           │
│ Priority: P1 | Type: Positive              │
├────────────────────────────────────────────┤
│ Preconditions:                             │
│ - User is on product detail page           │
│ - Product has 10+ items in stock           │
├────────────────────────────────────────────┤
│ Steps:                                     │
│ 1. Select quantity = 5                     │
│ 2. Click "Add to Cart" button              │
│ 3. Observe cart icon                       │
├────────────────────────────────────────────┤
│ Test Data:                                 │
│ Product: iPhone 15, Qty: 5                 │
├────────────────────────────────────────────┤
│ Expected Result:                           │
│ - Success toast "Added to cart"            │
│ - Cart icon shows 5                        │
│ - Cart page shows iPhone 15 x 5            │
└────────────────────────────────────────────┘`
        },
        agileJiraExample: {
          context: "Test cases linked to user stories in Jira using test management plugins or sub-tasks.",
          realWorldScenario: "Each test case is a sub-task under the user story, or linked issue using Zephyr/Xray.",
          sampleDocument: `JIRA TEST CASE STRUCTURE
═══════════════════════════════════════════

EPIC: Shopping Cart (SHOP-100)
└── Story: SHOP-110 Add to Cart
    ├── [Test] SHOP-110-TC01: Add single item
    ├── [Test] SHOP-110-TC02: Add with quantity
    ├── [Test] SHOP-110-TC03: Add out of stock
    ├── [Test] SHOP-110-TC04: Cart count update
    └── [Bug] SHOP-BUG-045: Count not updating

TEST CASE JIRA FIELDS:
┌─────────────────────────────────────────┐
│ Issue Type: Test Case                   │
│ Summary: Add item with custom quantity  │
│ Story Link: SHOP-110                    │
│ Test Priority: P1                       │
│ Test Type: Functional                   │
│ Automation Status: To Automate          │
│ Execution Status: Not Executed          │
│                                         │
│ Preconditions:                          │
│ [Text field with setup steps]           │
│                                         │
│ Test Steps: (Using Zephyr format)       │
│ Step 1: Select qty=5                    │
│ Step 2: Click Add to Cart               │
│ Expected: Success message shown         │
└─────────────────────────────────────────┘`
        },
        tips: [
          "Always trace test cases to requirements",
          "Include both positive and negative scenarios",
          "Make steps detailed enough for junior testers"
        ],
        commonMistakes: [
          "Writing vague expected results",
          "Missing preconditions",
          "Combining multiple scenarios in one test case"
        ],
        followUpQuestions: [
          {
            question: "How do you handle test case maintenance?",
            answer: `Test case maintenance is critical for keeping your test suite relevant and efficient:

**Regular Maintenance Activities:**
- Review test cases after each release
- Update steps when UI/workflow changes
- Remove obsolete test cases
- Consolidate redundant test cases
- Update test data references

**Best Practices:**
- Version control test cases
- Link test cases to requirements (traceability)
- Use modular test case design
- Schedule periodic reviews (quarterly)
- Track test case effectiveness

**Maintenance Triggers:**
- Requirement changes
- UI redesigns
- Failed test case reviews
- New feature additions
- Defect patterns discovered`,
            realTimeExample: `E-Commerce Project Maintenance Cycle:

**Monthly Review (Sprint Planning):**
- Reviewed 150 regression test cases
- Found 12 obsolete (feature removed) → Archived
- Found 8 outdated (UI changed) → Updated

**Quarterly Deep Cleanup:**
┌─────────────────────────────────────────┐
│ Q3 2024 TEST CASE MAINTENANCE REPORT    │
├─────────────────────────────────────────┤
│ Total Test Cases: 450                   │
│ Active: 420 (93%)                       │
│ Archived: 30 (7%)                       │
│                                         │
│ Updated this quarter: 45                │
│ New additions: 38                       │
│ Consolidated (merged): 15               │
│                                         │
│ Pass Rate Impact: 92% → 95%             │
│ (Fewer false failures after updates)   │
└─────────────────────────────────────────┘`
          },
          {
            question: "What's the difference between test case and test scenario?",
            answer: `**Test Scenario:**
- High-level description of what to test
- Business-oriented, end-to-end flow
- One line or brief description
- Derived from requirements/user stories
- Example: "Verify user can complete purchase"

**Test Case:**
- Detailed steps to execute
- Specific inputs and expected outputs
- Includes preconditions, test data
- Multiple test cases per scenario
- Example: "Purchase with valid credit card, qty=1"

**Relationship:**
Test Scenario → Multiple Test Cases

**Hierarchy:**
Requirement → Test Scenario → Test Cases → Test Steps`,
            realTimeExample: `Banking Login Feature:

**Test Scenario (1 line):**
"Verify user login functionality"

**Test Cases Derived (Multiple):**
┌─────────────────────────────────────────┐
│ SCENARIO: Verify user login             │
├─────────────────────────────────────────┤
│ TC-001: Login with valid credentials    │
│ TC-002: Login with invalid password     │
│ TC-003: Login with unregistered email   │
│ TC-004: Login with empty fields         │
│ TC-005: Login with locked account       │
│ TC-006: Login after password reset      │
│ TC-007: Login with "Remember Me"        │
│ TC-008: Login timeout handling          │
└─────────────────────────────────────────┘

Each test case has:
- Preconditions
- Step-by-step instructions
- Specific test data
- Expected results`
          },
          {
            question: "How many test cases per requirement is ideal?",
            answer: `There's no fixed number - it depends on requirement complexity. Use risk-based approach:

**General Guidelines:**
- Simple requirement: 3-5 test cases
- Medium complexity: 5-15 test cases
- Complex requirement: 15-30+ test cases

**Factors Affecting Count:**
- Number of input fields
- Business rules involved
- Integration points
- User roles/permissions
- Error handling scenarios

**Coverage Types Needed:**
- Positive scenarios (happy path)
- Negative scenarios (error handling)
- Boundary conditions (BVA)
- Edge cases
- Security scenarios (if applicable)

**Quality over Quantity:**
- Focus on coverage, not count
- Avoid redundant test cases
- Each test case should add value`,
            realTimeExample: `Password Reset Feature Analysis:

**Requirement:** User should be able to reset password via email

**Complexity Analysis:**
- 1 input field (email)
- 5 validation rules
- 2 integration points (email service, database)
- 3 error scenarios

**Test Cases (12 total):**
┌─────────────────────────────────────────┐
│ POSITIVE (4):                           │
│ • Valid email, link received            │
│ • Reset with new valid password         │
│ • Login with new password               │
│ • Reset request while logged out        │
├─────────────────────────────────────────┤
│ NEGATIVE (5):                           │
│ • Invalid email format                  │
│ • Unregistered email                    │
│ • Expired reset link                    │
│ • Already used reset link               │
│ • New password doesn't meet criteria    │
├─────────────────────────────────────────┤
│ EDGE CASES (3):                         │
│ • Request multiple times rapidly        │
│ • Very long email address               │
│ • Reset during active session           │
└─────────────────────────────────────────┘

Coverage: 100% of scenarios with 12 test cases`
          }
        ],
        difficulty: "Beginner"
      },
      {
        id: "TC-002",
        question: "What are test design techniques? Explain BVA and EP.",
        shortAnswer: "Test design techniques help create effective test cases. BVA tests boundary values. EP divides data into equivalent partitions.",
        detailedAnswer: `**Boundary Value Analysis (BVA):**
Tests at the edges of input ranges where defects commonly occur.

For age field (18-60):
- Test: 17, 18, 19, 59, 60, 61

**Equivalence Partitioning (EP):**
Divides input into groups where system behaves similarly, test one from each.

For age field (18-60):
- Invalid: < 18 (test: 10)
- Valid: 18-60 (test: 35)
- Invalid: > 60 (test: 75)

Other techniques:
- Decision Table: For multiple conditions
- State Transition: For state-based systems
- Use Case Testing: Based on user scenarios`,
        stlcAgileExample: {
          context: "In Agile, apply these techniques when writing test cases from acceptance criteria.",
          realWorldScenario: "For Insurance Premium Calculator with age 25-65, use BVA and EP to ensure complete coverage.",
          sampleDocument: `TEST DESIGN - Insurance Premium Calculator
═══════════════════════════════════════════

REQUIREMENT: Calculate premium for age 25-65

EQUIVALENCE PARTITIONING:
┌────────────────────────────────────────────┐
│ Invalid    │  Valid       │   Invalid      │
│ (< 25)     │  (25-65)     │   (> 65)       │
│ Test: 20   │  Test: 40    │   Test: 70     │
└────────────────────────────────────────────┘

BOUNDARY VALUE ANALYSIS:
      24    25    26    ...    64    65    66
       ▲     ▲     ▲            ▲     ▲     ▲
    Invalid                           Invalid
         Valid Boundaries
         
TEST CASES DERIVED:
┌──────────┬───────────────────────────────┐
│ TC-001   │ Age = 24 → Error "Min age 25" │
│ TC-002   │ Age = 25 → Premium calculated │
│ TC-003   │ Age = 26 → Premium calculated │
│ TC-004   │ Age = 40 → Premium calculated │
│ TC-005   │ Age = 64 → Premium calculated │
│ TC-006   │ Age = 65 → Premium calculated │
│ TC-007   │ Age = 66 → Error "Max age 65" │
└──────────┴───────────────────────────────┘

COVERAGE ANALYSIS:
EP Coverage: 3/3 partitions (100%)
BVA Coverage: 6/6 boundaries (100%)
Total Test Cases: 7 (efficient coverage)`
        },
        agileJiraExample: {
          context: "Document test design technique in test case description for traceability.",
          realWorldScenario: "Add custom field 'Design Technique' to track which technique generated the test case.",
          sampleDocument: `JIRA CUSTOM FIELDS FOR DESIGN TECHNIQUES
═══════════════════════════════════════════

TEST CASE: Age Validation - Lower Boundary
┌─────────────────────────────────────────┐
│ Design Technique: BVA (Lower Boundary)  │
│ Related Requirement: Premium Calculator │
│                                         │
│ Test Data:                              │
│ Age: 25 (minimum valid boundary)        │
│                                         │
│ Expected: Premium = $150/month          │
│                                         │
│ Labels: BVA, Boundary, Positive         │
└─────────────────────────────────────────┘

JQL FOR TECHNIQUE COVERAGE:
"Design Technique" = BVA AND project = INS
→ Returns all BVA-based test cases`
        },
        tips: [
          "Always combine BVA and EP for better coverage",
          "Mention specific examples with numbers",
          "Know when to use each technique"
        ],
        commonMistakes: [
          "Only testing middle values, missing boundaries",
          "Testing all values in a partition (defeats EP purpose)",
          "Not considering negative/positive boundaries"
        ],
        followUpQuestions: [
          {
            question: "How many boundary values should you test?",
            answer: `The number of boundary values depends on the approach:

**Two-Value Boundary Testing (Minimum):**
- Test AT the boundary only
- Example: For range 1-100, test: 1, 100
- 2 values per boundary

**Three-Value Boundary Testing (Recommended):**
- Test AT, BELOW, and ABOVE boundary
- Example: For range 1-100, test: 0, 1, 2, 99, 100, 101
- 6 total values (3 per boundary)

**Robust Boundary Testing:**
- Include min-1, min, min+1, max-1, max, max+1
- Plus nominal value in middle
- 7 total values

**Best Practice:**
For critical fields, use three-value approach.
For less critical, two-value may suffice.`,
            realTimeExample: `Age Field Validation (18-65 allowed):

**Two-Value Approach (4 tests):**
- Lower boundary: 18 (valid)
- Upper boundary: 65 (valid)
- Below lower: 17 (invalid)
- Above upper: 66 (invalid)

**Three-Value Approach (6 tests - Recommended):**
┌─────────────────────────────────────────┐
│ VALUE │ EXPECTED    │ TYPE              │
├───────┼─────────────┼───────────────────┤
│ 17    │ Error msg   │ Below lower bound │
│ 18    │ Accepted    │ AT lower bound    │
│ 19    │ Accepted    │ Above lower bound │
│ 64    │ Accepted    │ Below upper bound │
│ 65    │ Accepted    │ AT upper bound    │
│ 66    │ Error msg   │ Above upper bound │
└─────────────────────────────────────────┘

We used 6 tests in our Insurance project
for the age field - caught 2 off-by-one bugs!`
          },
          {
            question: "What if there are multiple input fields?",
            answer: `For multiple input fields, use a combination approach:

**Option 1: All Combinations (Exhaustive)**
- Test every boundary of every field together
- Very thorough but time-consuming
- Use for critical, high-risk features

**Option 2: One Field at a Time (Practical)**
- Keep other fields at valid values
- Test boundaries of one field
- Repeat for each field
- Most common approach

**Option 3: Pairwise/Orthogonal (Optimal)**
- Cover all pairs of boundary conditions
- Uses mathematical techniques
- Tools: PICT, AllPairs

**Risk-Based Selection:**
- Identify fields that interact
- Focus on field combinations that matter
- Document coverage decisions`,
            realTimeExample: `Loan Application Form (3 fields):
- Age: 25-65
- Amount: $1,000-$500,000  
- Term: 1-30 years

**One at a Time Approach (18 tests):**
┌─────────────────────────────────────────┐
│ TEST │ AGE   │ AMOUNT    │ TERM │ TYPE  │
├──────┼───────┼───────────┼──────┼───────┤
│ 1    │ 24    │ $10,000   │ 5    │ Age-  │
│ 2    │ 25    │ $10,000   │ 5    │ Age=  │
│ 3    │ 26    │ $10,000   │ 5    │ Age+  │
│ 4    │ 40    │ $999      │ 5    │ Amt-  │
│ 5    │ 40    │ $1,000    │ 5    │ Amt=  │
│ 6    │ 40    │ $1,001    │ 5    │ Amt+  │
│ ...  │       │           │      │       │
└─────────────────────────────────────────┘

**High-Risk Combinations Added:**
- Young age + Maximum amount + Long term
- Elderly age + Minimum amount + Short term
(These caught 1 calculation bug in our project)`
          },
          {
            question: "How do you apply BVA to non-numeric fields?",
            answer: `BVA applies to any field with boundaries, not just numbers:

**String Length Boundaries:**
- Password: min 8, max 20 characters
- Test: 7 chars, 8 chars, 9 chars, 19 chars, 20 chars, 21 chars

**Date Boundaries:**
- Valid date range: Jan 1, 2020 - Dec 31, 2024
- Test: Dec 31, 2019 | Jan 1, 2020 | Dec 31, 2024 | Jan 1, 2025

**Dropdown/Selection:**
- First option, last option
- Empty selection if allowed

**File Upload:**
- Min file size, max file size
- Allowed extensions at boundaries

**Time-Based:**
- Session timeout boundaries
- Booking time slots`,
            realTimeExample: `Username Field Validation:
Requirement: 3-20 characters, alphanumeric only

**String Length BVA:**
┌─────────────────────────────────────────┐
│ LENGTH │ VALUE              │ EXPECTED  │
├────────┼────────────────────┼───────────┤
│ 2      │ "ab"              │ Error     │
│ 3      │ "abc"             │ Valid     │
│ 4      │ "abcd"            │ Valid     │
│ 19     │ "abcdefghij..."   │ Valid     │
│ 20     │ "abcdefghijk..."  │ Valid     │
│ 21     │ "abcdefghijkl..." │ Error     │
└─────────────────────────────────────────┘

**Date Field (Booking System):**
Available dates: Today to 90 days ahead

| DATE            | EXPECTED      |
|-----------------|---------------|
| Yesterday       | Error (past)  |
| Today           | Valid         |
| Tomorrow        | Valid         |
| Day 89          | Valid         |
| Day 90          | Valid         |
| Day 91          | Error (too far)|

Caught bug: System allowed day 91 bookings!`
          }
        ],
        difficulty: "Intermediate"
      }
    ]
  },
  {
    category: "Agile & Scrum Testing",
    icon: "🔁",
    description: "Questions about testing in Agile environment",
    questions: [
      {
        id: "AGILE-001",
        question: "What are the key Scrum ceremonies and tester's role in each?",
        shortAnswer: "Sprint Planning, Daily Standup, Sprint Review, Retrospective. Testers participate in all, providing testing perspective.",
        detailedAnswer: `**1. Sprint Planning:**
- Tester Role: Review stories for testability, estimate testing effort, identify test dependencies
- Output: Test tasks added to sprint backlog

**2. Daily Stand-up:**
- Tester Role: Share testing progress, blockers, defects found
- Focus: Yesterday's testing, today's plan, any impediments

**3. Sprint Review:**
- Tester Role: Demo tested features, share quality metrics, highlight critical bugs
- Output: Stakeholder feedback on quality

**4. Sprint Retrospective:**
- Tester Role: Suggest process improvements, discuss defect patterns
- Output: Action items for better testing`,
        stlcAgileExample: {
          context: "Testers are integral part of Scrum team, not separate QA team.",
          realWorldScenario: "In a Banking app sprint, tester attends planning to flag that payment testing needs mock server setup.",
          sampleDocument: `TESTER PARTICIPATION - SPRINT CEREMONIES
═══════════════════════════════════════════

SPRINT PLANNING (2-4 hours):
┌─────────────────────────────────────────┐
│ TESTER CONTRIBUTIONS:                   │
│ ✓ Review acceptance criteria clarity    │
│ ✓ Flag missing testability requirements │
│ ✓ Estimate testing effort per story     │
│ ✓ Identify test data/env needs          │
│ ✓ Break down test tasks                 │
└─────────────────────────────────────────┘

Example: Story "Fund Transfer"
Developer estimate: 5 points
Tester estimate: +2 points for integration testing
Final: 7 points with test tasks

DAILY STANDUP (15 min):
"Yesterday: Tested US-301, found 2 bugs
 Today: Will retest after fix, start US-302
 Blocker: Test server down since morning"

SPRINT REVIEW:
┌─────────────────────────────────────────┐
│ QA Metrics Shared:                      │
│ • Test cases executed: 45/50 (90%)      │
│ • Pass rate: 42/45 (93%)                │
│ • Open bugs: 3 (1 Critical, 2 Medium)   │
│ • Automation added: 15 new tests        │
└─────────────────────────────────────────┘

RETROSPECTIVE:
What went well: Early testing caught design issue
Improve: Need better test data management
Action: Create test data refresh script`
        },
        agileJiraExample: {
          context: "Use Jira boards and dashboards to track testing activities in ceremonies.",
          realWorldScenario: "During standup, QA opens Jira board filtered by 'In Testing' to discuss status.",
          sampleDocument: `JIRA FOR CEREMONY SUPPORT
═══════════════════════════════════════════

SPRINT PLANNING - Story Selection View:
Filter: Sprint = "Sprint 15" AND status = "To Do"
Fields shown: Summary, Points, AC Count, Test Tasks

DAILY STANDUP - QA Quick Filters:
┌─────────────────────────────────────────┐
│ My In Progress │ Blocked │ Done Today   │
│     ████       │   ██    │    ████████  │
└─────────────────────────────────────────┘

Filter: assignee = currentUser() 
        AND Sprint = activeSprint()
        AND status changed during -1d

SPRINT REVIEW - Dashboard Gadget:
┌─────────────────────────────────────────┐
│        Sprint 15 Quality Report         │
├─────────────────────────────────────────┤
│ Stories Tested: 8/8                     │
│ Test Cases: 45 Passed, 3 Failed, 2 NA   │
│ Bugs Found: 12 | Fixed: 10 | Open: 2    │
│ Automation: +15 new | 120 total         │
└─────────────────────────────────────────┘`
        },
        tips: [
          "Emphasize tester as team member, not gatekeeper",
          "Mention shift-left testing approach",
          "Be ready with examples of your ceremony participation"
        ],
        commonMistakes: [
          "Saying testing happens after development in Agile",
          "Not mentioning retrospective improvements",
          "Describing testers as separate from the team"
        ],
        followUpQuestions: [
          "How do you handle incomplete stories at sprint end?",
          "What if developers finish late, leaving no time for testing?",
          "How do you estimate testing effort in planning?"
        ],
        difficulty: "Beginner"
      },
      {
        id: "AGILE-002",
        question: "Explain the Jira issue hierarchy and when to use each level.",
        shortAnswer: "Epic > Story > Task > Sub-task > Bug. Epics for features, Stories for user requirements, Tasks for technical work.",
        detailedAnswer: `**Jira Issue Hierarchy:**

1. **Epic**: Large feature spanning multiple sprints
   - Example: "User Management System"
   
2. **Story**: User requirement delivering value
   - Example: "As a user, I want to reset password"
   
3. **Task**: Technical work within a story
   - Example: "Create password reset API"
   
4. **Sub-task**: Smaller work items
   - Example: "Write unit tests for reset API"
   
5. **Bug**: Defects found during testing
   - Example: "Reset link expires immediately"

Use the right level based on:
- Scope and complexity
- Who needs visibility
- How work is tracked/reported`,
        stlcAgileExample: {
          context: "Test activities map to different Jira levels based on scope.",
          realWorldScenario: "For Telecom billing feature: Epic for Billing System, Stories for each billing function, Sub-tasks for test cases.",
          sampleDocument: `JIRA HIERARCHY - TELECOM BILLING PROJECT
═══════════════════════════════════════════

EPIC: TELE-EP-001 Billing & Invoicing System
├── STORY: TELE-101 Generate Monthly Invoice
│   ├── TASK: TELE-101-DEV: API development
│   ├── TASK: TELE-101-TEST: Test planning
│   │   ├── SUB-TASK: Write test cases
│   │   ├── SUB-TASK: Prepare test data
│   │   └── SUB-TASK: Execute tests
│   └── BUG: TELE-BUG-201: Tax calculation wrong
│
├── STORY: TELE-102 View Invoice History
│   ├── TASK: TELE-102-UI: Frontend development
│   ├── TASK: TELE-102-TEST: Test execution
│   └── BUG: TELE-BUG-202: Pagination missing
│
└── STORY: TELE-103 Download Invoice PDF

WHEN TO USE WHAT:
┌──────────────┬─────────────────────────────┐
│ Level        │ Test Use Case               │
├──────────────┼─────────────────────────────┤
│ Epic         │ Overall test strategy       │
│ Story        │ Feature test plan           │
│ Task         │ Test execution              │
│ Sub-task     │ Individual test cases       │
│ Bug          │ Defects found               │
└──────────────┴─────────────────────────────┘`
        },
        agileJiraExample: {
          context: "Proper hierarchy enables reporting and traceability.",
          realWorldScenario: "Manager views Epic to see overall feature status. QA views Story to see test progress. Developer views Bug to see defects assigned.",
          sampleDocument: `JIRA REPORTING BY HIERARCHY LEVEL
═══════════════════════════════════════════

EPIC LEVEL REPORT (For Management):
JQL: type = Epic AND project = TELE

Shows: Feature completion, Story count, Timeline

STORY LEVEL REPORT (For Product Owner):
JQL: type = Story AND "Epic Link" = TELE-EP-001

Shows: Story status, Points, Linked bugs

BUG LEVEL REPORT (For QA):
JQL: type = Bug AND Sprint = activeSprint()
     ORDER BY priority DESC

Shows: All sprint bugs by priority

DASHBOARD CONFIGURATION:
┌───────────────────────────────────────────┐
│ EPIC PROGRESS          │ STORIES BY STATUS│
│ █████████░░ 85%        │ Done: 5          │
│                        │ In Progress: 2   │
├────────────────────────┼──────────────────┤
│ BUGS BY SEVERITY       │ TEST COVERAGE    │
│ 🔴 Critical: 1         │ █████████░ 92%   │
│ 🟠 High: 3             │ 46/50 test cases │
│ 🟡 Medium: 5           │                  │
└────────────────────────┴──────────────────┘`
        },
        tips: [
          "Explain with specific examples",
          "Mention how hierarchy enables reporting",
          "Know your organization's customizations"
        ],
        commonMistakes: [
          "Confusing Task with Story",
          "Creating Epics for small features",
          "Not linking bugs to stories"
        ],
        followUpQuestions: [
          "Can a Task exist without a Story?",
          "How do you handle cross-story bugs?",
          "When would you use a Spike instead of a Story?"
        ],
        difficulty: "Beginner"
      },
      {
        id: "AGILE-003",
        question: "How do you decide which test cases to automate?",
        shortAnswer: "Automate stable, repetitive, high-risk tests. Consider ROI - automation cost vs manual effort saved over time.",
        detailedAnswer: `**Criteria for Automation:**

✅ **Good Candidates:**
- Smoke tests (run every build)
- Regression tests (run frequently)
- Data-driven tests (many combinations)
- Critical business flows
- Stable features (low change frequency)

❌ **Avoid Automating:**
- One-time tests
- Exploratory testing
- Frequently changing UI
- Tests requiring human judgment
- Low ROI tests

**ROI Calculation:**
Automation ROI = (Manual Cost × Executions) - Automation Cost
If positive, automate!

**Coverage Target:**
Typically 60-80% of regression suite automated`,
        stlcAgileExample: {
          context: "In Agile STLC, automation decisions are made during test planning and sprint automation phases.",
          realWorldScenario: "For E-commerce checkout, automate happy path and payment flows. Keep exploratory tests manual.",
          sampleDocument: `AUTOMATION DECISION MATRIX
═══════════════════════════════════════════

E-COMMERCE CHECKOUT - AUTOMATION ANALYSIS

USER STORY: EC-US-020 Checkout Process

TEST CASE ANALYSIS:
┌────────────────────┬───────────┬──────────┬─────────┬───────┐
│ Test Case          │ Runs/Sprt │ Stable?  │ Complex │ ROI   │
├────────────────────┼───────────┼──────────┼─────────┼───────┤
│ TC-001: Add to cart│    20     │   Yes    │   Low   │ High  │ ✅
│ TC-002: Valid pay  │    20     │   Yes    │   Med   │ High  │ ✅
│ TC-003: Card error │    10     │   Yes    │   Low   │ High  │ ✅
│ TC-004: UI layout  │     5     │   No     │   High  │ Low   │ ❌
│ TC-005: Exploratory│    N/A    │   N/A    │   N/A   │ N/A   │ ❌
└────────────────────┴───────────┴──────────┴─────────┴───────┘

ROI CALCULATION:
TC-001: Add to Cart
├── Manual: 10 min × 20 runs × 12 sprints = 2400 min/year
├── Automation: 2 hours initial + 30 min/sprint maint
├── Automation total: 120 + (30 × 12) = 480 min/year
└── SAVINGS: 1920 min/year = 32 hours! ✅

AUTOMATION RECOMMENDATION:
Automate: 3 of 5 test cases (60%)
Keep Manual: UI layout, exploratory testing`
        },
        agileJiraExample: {
          context: "Track automation status in Jira with custom fields and workflows.",
          realWorldScenario: "Add 'Automation Status' field: Manual, To Automate, Automated, Not Suitable.",
          sampleDocument: `JIRA AUTOMATION TRACKING
═══════════════════════════════════════════

CUSTOM FIELD: Automation Status
Options:
- Manual (default)
- To Automate
- In Progress
- Automated
- Not Suitable

AUTOMATION WORKFLOW:
Manual → To Automate → In Progress → Automated
                    ↘ Not Suitable

DASHBOARD - AUTOMATION COVERAGE:
┌─────────────────────────────────────────┐
│      SPRINT 15 AUTOMATION STATUS        │
├─────────────────────────────────────────┤
│ Automated    ████████████████ 65%       │
│ To Automate  ████░░░░░░░░░░░░ 15%       │
│ Manual       ████░░░░░░░░░░░░ 15%       │
│ Not Suitable ██░░░░░░░░░░░░░░  5%       │
└─────────────────────────────────────────┘

JQL FOR AUTOMATION BACKLOG:
"Automation Status" = "To Automate" 
AND Sprint = activeSprint()
ORDER BY priority DESC`
        },
        tips: [
          "Always mention ROI - shows business thinking",
          "Give specific automation percentages (60-80%)",
          "Know the tools and frameworks used"
        ],
        commonMistakes: [
          "Saying 'automate everything'",
          "Not considering maintenance cost",
          "Ignoring test stability before automating"
        ],
        followUpQuestions: [
          "What's your automation to manual ratio?",
          "How do you handle flaky automated tests?",
          "When would you de-automate a test?"
        ],
        difficulty: "Intermediate"
      }
    ]
  },
  {
    category: "Defect Management",
    icon: "🐛",
    description: "Questions about finding, reporting, and tracking defects",
    questions: [
      {
        id: "DEF-001",
        question: "How do you write a good bug report?",
        shortAnswer: "Include title, steps to reproduce, expected vs actual result, environment, severity, priority, and attachments.",
        detailedAnswer: `**Essential Bug Report Components:**

1. **Title**: Clear, specific summary
2. **Environment**: Browser, OS, version, build
3. **Preconditions**: Setup before reproducing
4. **Steps to Reproduce**: Numbered, specific steps
5. **Actual Result**: What happened
6. **Expected Result**: What should happen
7. **Severity**: Critical/High/Medium/Low
8. **Priority**: P1/P2/P3/P4
9. **Attachments**: Screenshots, videos, logs

**Good Title Example:**
❌ "Login not working"
✅ "Login fails with 500 error when email contains '+' symbol"`,
        stlcAgileExample: {
          context: "In Agile, bugs are linked to stories and fixed within the same sprint if possible.",
          realWorldScenario: "Banking app fund transfer shows wrong balance - critical bug blocking story completion.",
          sampleDocument: `BUG REPORT - BANKING APPLICATION
═══════════════════════════════════════════

BUG ID: BANK-BUG-1045
TITLE: Fund Transfer Shows Incorrect Balance After Transaction

LINKED STORY: BANK-301 Fund Transfer
REPORTER: QA Analyst | DATE: 2024-01-15
SEVERITY: Critical | PRIORITY: P1

ENVIRONMENT:
├── Application: Banking Portal v2.3.1
├── Browser: Chrome 120.0.6099.109
├── OS: Windows 11
├── Test Server: qa-bank.company.com
└── Test Data: Account A123, B456

PRECONDITIONS:
1. User logged in with valid credentials
2. Account A123 balance: $10,000
3. Account B456 balance: $5,000

STEPS TO REPRODUCE:
1. Navigate to Fund Transfer page
2. Select Source Account: A123
3. Select Destination Account: B456
4. Enter Amount: $500
5. Click "Transfer" button
6. Observe confirmation page

ACTUAL RESULT:
✗ Source Account shows: $10,000 (unchanged)
✗ Destination Account shows: $5,000 (unchanged)
✗ Transaction appears in history
✗ Database shows correct balances

EXPECTED RESULT:
✓ Source Account should show: $9,500
✓ Destination Account should show: $5,500
✓ UI should refresh with correct balances

ROOT CAUSE ANALYSIS:
UI not refreshing after API success response

ATTACHMENTS:
📎 Screenshot_balance_error.png
📎 Network_log.har
📎 Console_errors.txt`
        },
        agileJiraExample: {
          context: "Configure Jira with mandatory fields for consistent bug reporting.",
          realWorldScenario: "Jira workflow requires Environment, Steps to Reproduce before bug can be submitted.",
          sampleDocument: `JIRA BUG TEMPLATE CONFIGURATION
═══════════════════════════════════════════

PROJECT SETTINGS > ISSUE TYPES > BUG

REQUIRED FIELDS:
├── Summary (Title)
├── Environment (Custom Field - dropdown)
│   Options: Chrome, Firefox, Safari, Mobile
├── Steps to Reproduce (Text Area)
├── Expected Result (Text Area)
├── Actual Result (Text Area)
├── Severity (Custom Field)
│   Options: Critical, High, Medium, Low
└── Attachments (Minimum 1 required)

OPTIONAL BUT RECOMMENDED:
├── Affected Version
├── Reproducibility (Always, Sometimes, Rarely)
├── Workaround Available (Yes/No)
└── Root Cause (Text - filled by dev)

AUTOMATION RULE:
IF Severity = Critical 
THEN @mention QA Lead and Dev Lead
AND set Priority = P1

SAMPLE JIRA BUG SCREEN:
┌─────────────────────────────────────────┐
│ BANK-BUG-1045                           │
│ Fund Transfer Shows Incorrect Balance   │
├─────────────────────────────────────────┤
│ Type: Bug  Severity: Critical  P1       │
│ Status: Open  Assignee: @developer      │
│ Sprint: Sprint 15  Story: BANK-301      │
├─────────────────────────────────────────┤
│ Environment: Chrome 120 / Windows 11    │
│ Affected Version: 2.3.1                 │
├─────────────────────────────────────────┤
│ Steps to Reproduce:                     │
│ 1. Navigate to Fund Transfer...         │
│ [Expand to see all]                     │
└─────────────────────────────────────────┘`
        },
        tips: [
          "Always include screenshots or videos",
          "Be specific - no assumptions",
          "Distinguish severity from priority"
        ],
        commonMistakes: [
          "Vague titles like 'system crashes'",
          "Missing steps to reproduce",
          "Not providing environment details",
          "Confusing severity and priority"
        ],
        followUpQuestions: [
          "What's the difference between severity and priority?",
          "How do you handle non-reproducible bugs?",
          "What if the bug is already known?"
        ],
        difficulty: "Beginner"
      }
    ]
  },
  {
    category: "Testing Types",
    icon: "🧪",
    description: "Questions about different types of testing",
    questions: [
      {
        id: "TYPE-001",
        question: "What is the difference between Smoke and Regression testing?",
        shortAnswer: "Smoke is quick build verification. Regression ensures new changes don't break existing functionality.",
        detailedAnswer: `**Smoke Testing:**
- Purpose: Verify build is stable enough for testing
- Scope: Critical paths only (10-20 tests)
- When: After every build deployment
- Time: 15-30 minutes
- Also called: Build Verification Testing (BVT)

**Regression Testing:**
- Purpose: Ensure new changes don't break existing features
- Scope: Comprehensive test suite (100s of tests)
- When: Before release, after major changes
- Time: Hours to days
- Often automated for efficiency

**Key Difference:**
Smoke = "Does the build work at all?"
Regression = "Does everything still work?"`,
        stlcAgileExample: {
          context: "In Agile, smoke tests run on every deployment, regression before sprint end.",
          realWorldScenario: "E-commerce site runs 15 smoke tests after each build, full 200-test regression before release.",
          sampleDocument: `SMOKE vs REGRESSION - E-COMMERCE
═══════════════════════════════════════════

SMOKE TEST SUITE (15 tests, 20 min):
┌─────────────────────────────────────────┐
│ ID      │ Test Case            │ Time   │
├─────────────────────────────────────────┤
│ SM-001  │ Home page loads      │ 30s    │
│ SM-002  │ User can login       │ 1min   │
│ SM-003  │ Search works         │ 45s    │
│ SM-004  │ Add to cart works    │ 1min   │
│ SM-005  │ Checkout accessible  │ 45s    │
│ SM-006  │ Payment page loads   │ 1min   │
│ SM-007  │ Order confirmation   │ 1min   │
│ ...     │ (8 more critical)    │ ...    │
└─────────────────────────────────────────┘
Run: Every build | Automated: 100%

REGRESSION TEST SUITE (200 tests, 8 hours):
┌─────────────────────────────────────────┐
│ Module          │ Tests │ Auto │ Manual │
├─────────────────────────────────────────┤
│ User Management │   35  │  28  │    7   │
│ Product Catalog │   45  │  40  │    5   │
│ Shopping Cart   │   30  │  25  │    5   │
│ Checkout/Pay    │   40  │  30  │   10   │
│ Order Tracking  │   25  │  20  │    5   │
│ Admin Features  │   25  │  15  │   10   │
│ TOTAL           │  200  │ 158  │   42   │
└─────────────────────────────────────────┘
Run: Pre-release | Automated: 79%

EXECUTION STRATEGY:
┌─────────────────────────────────────────┐
│ SPRINT TIMELINE                         │
├─────────────────────────────────────────┤
│ Day 1-7: Development (Smoke after builds)
│ Day 8-10: Testing (Manual + Automation) │
│ Day 11-12: Regression Suite             │
│ Day 13: Bug fixes + Retesting           │
│ Day 14: Release                         │
└─────────────────────────────────────────┘`
        },
        agileJiraExample: {
          context: "Track smoke and regression as test cycles or test plans in Jira.",
          realWorldScenario: "Create separate test cycles for Smoke (daily) and Regression (sprint-end).",
          sampleDocument: `JIRA TEST MANAGEMENT - ZEPHYR SETUP
═══════════════════════════════════════════

TEST CYCLES:
├── Smoke Test - Build 2.3.1.45
│   ├── Status: Passed
│   ├── Tests: 15/15 Passed
│   ├── Duration: 18 min
│   └── Executed: 2024-01-15 14:30
│
├── Smoke Test - Build 2.3.1.46
│   ├── Status: Failed
│   ├── Tests: 13/15 Passed, 2 Failed
│   ├── Duration: 22 min
│   └── Blocker: Payment page broken
│
└── Regression - Sprint 15 Release
    ├── Status: In Progress
    ├── Tests: 180/200 Executed
    ├── Passed: 170, Failed: 8, Blocked: 2
    └── ETA: 4 hours remaining

DASHBOARD VIEW:
┌─────────────────────────────────────────┐
│     SMOKE TEST TREND (LAST 7 DAYS)      │
│  ✓   ✓   ✓   ✓   ✗   ✓   ✓             │
│ Mon Tue Wed Thu Fri Sat Sun             │
├─────────────────────────────────────────┤
│     REGRESSION PROGRESS                 │
│  ██████████████████░░░░ 90%             │
│  180/200 executed                       │
└─────────────────────────────────────────┘`
        },
        tips: [
          "Know the scope difference (critical vs comprehensive)",
          "Mention automation - both should be automated",
          "Be ready with numbers (10-20 smoke, 100+ regression)"
        ],
        commonMistakes: [
          "Saying smoke tests everything",
          "Not automating regression tests",
          "Running full regression on every build"
        ],
        followUpQuestions: [
          "How many smoke tests is ideal?",
          "Can smoke test replace regression?",
          "How do you prioritize regression tests?"
        ],
        difficulty: "Beginner"
      },
      {
        id: "TYPE-002",
        question: "What is Integration Testing and when do you perform it?",
        shortAnswer: "Testing interaction between integrated modules/components. Done after unit testing, before system testing.",
        detailedAnswer: `**Integration Testing:**
Tests how different modules work together when integrated.

**Types:**
1. **Big Bang**: Integrate all at once, test together
2. **Incremental**: Integrate and test step by step
   - Top-Down: Start from top module
   - Bottom-Up: Start from bottom module
   - Sandwich/Hybrid: Both directions

**When to Perform:**
- After unit testing of individual modules
- When modules are ready to integrate
- Before system testing

**Focus Areas:**
- Data flow between modules
- API contracts and responses
- Database interactions
- Third-party service integrations`,
        stlcAgileExample: {
          context: "In Agile, integration testing happens as features are developed and integrated.",
          realWorldScenario: "E-commerce: Test integration between Cart module and Payment Gateway API.",
          sampleDocument: `INTEGRATION TEST PLAN - CHECKOUT FLOW
═══════════════════════════════════════════

MODULES INVOLVED:
┌─────────────────────────────────────────┐
│    UI (React)                           │
│         │                               │
│         ▼                               │
│    Cart Service ──► Product Service     │
│         │                               │
│         ▼                               │
│    Payment Gateway (Stripe API)         │
│         │                               │
│         ▼                               │
│    Order Service ──► Notification       │
│         │                               │
│         ▼                               │
│    Database (PostgreSQL)                │
└─────────────────────────────────────────┘

INTEGRATION TEST CASES:
┌────────────────────────────────────────────┐
│ INT-001: Cart to Payment Integration       │
├────────────────────────────────────────────┤
│ Verify cart data passes correctly to       │
│ payment gateway with amount, currency      │
│                                            │
│ Modules: Cart Service → Stripe API         │
│                                            │
│ Test Data:                                 │
│ - Cart total: $150.00                      │
│ - Currency: USD                            │
│                                            │
│ Expected:                                  │
│ - Stripe receives exact amount             │
│ - Payment intent created                   │
│ - Client secret returned                   │
└────────────────────────────────────────────┘

┌────────────────────────────────────────────┐
│ INT-002: Payment to Order Integration      │
├────────────────────────────────────────────┤
│ Verify successful payment creates order    │
│ with correct details                       │
│                                            │
│ Modules: Stripe Webhook → Order Service    │
│                                            │
│ Test Data:                                 │
│ - Payment status: succeeded                │
│ - Transaction ID: pi_123abc               │
│                                            │
│ Expected:                                  │
│ - Order created with status "Confirmed"    │
│ - Transaction ID stored                    │
│ - Confirmation email triggered             │
└────────────────────────────────────────────┘`
        },
        agileJiraExample: {
          context: "Track integration tests as separate test type in Jira.",
          realWorldScenario: "Label integration test cases with 'Integration' and link to multiple stories.",
          sampleDocument: `JIRA INTEGRATION TEST STRUCTURE
═══════════════════════════════════════════

ISSUE TYPE: Test Case
LABELS: Integration, API, E2E

SAMPLE TEST CASE IN JIRA:
┌─────────────────────────────────────────┐
│ INT-001: Cart to Payment Integration    │
├─────────────────────────────────────────┤
│ Type: Test Case                         │
│ Labels: Integration, API                │
│                                         │
│ Linked Stories:                         │
│ - SHOP-110: Add to Cart                 │
│ - SHOP-120: Payment Processing          │
│                                         │
│ Component: Checkout                     │
│ Test Level: Integration                 │
│ Automation: Automated (Postman)         │
│                                         │
│ Execution History:                      │
│ Sprint 15: ✓ Passed                     │
│ Sprint 14: ✗ Failed (timeout issue)     │
│ Sprint 13: ✓ Passed                     │
└─────────────────────────────────────────┘

JQL FOR INTEGRATION TESTS:
labels = Integration AND type = "Test Case"
AND project = SHOP`
        },
        tips: [
          "Know the different integration approaches",
          "Mention API testing as key integration testing",
          "Be ready to explain stubs and drivers"
        ],
        commonMistakes: [
          "Confusing with system testing",
          "Not testing error scenarios in integration",
          "Missing API contract testing"
        ],
        followUpQuestions: [
          "What's the difference between integration and system testing?",
          "How do you test when dependent service is unavailable?",
          "What tools do you use for API integration testing?"
        ],
        difficulty: "Intermediate"
      }
    ]
  },
  {
    category: "CI/CD & Automation",
    icon: "⚙️",
    description: "Questions about continuous integration, delivery, and test automation",
    questions: [
      {
        id: "CICD-001",
        question: "How do you integrate automated tests into a CI/CD pipeline?",
        shortAnswer: "Configure CI tool to trigger tests on code changes. Define test stages, quality gates, and notifications.",
        detailedAnswer: `**CI/CD Test Integration Steps:**

1. **Select CI Tool**: Jenkins, GitLab CI, GitHub Actions
2. **Configure Pipeline Stages**:
   - Build → Unit Tests → Integration → Deploy → E2E
3. **Set Up Test Execution**:
   - Define test commands
   - Configure test reports
4. **Define Quality Gates**:
   - Fail build on test failure
   - Code coverage thresholds
5. **Notifications**:
   - Slack/Email on failure

**Best Practices:**
- Fast tests early (unit < 5 min)
- Parallel test execution
- Flaky test quarantine
- Test environment management`,
        stlcAgileExample: {
          context: "In Agile STLC, CI/CD integration is part of Sprint Automation phase.",
          realWorldScenario: "Insurance portal pipeline runs smoke tests on every PR, full regression nightly.",
          sampleDocument: `CI/CD PIPELINE - INSURANCE PORTAL
═══════════════════════════════════════════

PIPELINE STAGES:
┌──────────────────────────────────────────┐
│  CODE PUSH                               │
│      │                                   │
│      ▼                                   │
│  ┌───────────┐                           │
│  │   BUILD   │ → Compile, Package        │
│  └─────┬─────┘                           │
│        ▼                                 │
│  ┌───────────┐                           │
│  │UNIT TESTS │ → 100+ tests (2 min)      │
│  └─────┬─────┘                           │
│        ▼                                 │
│  ┌───────────┐                           │
│  │SMOKE TESTS│ → 15 critical (5 min)     │
│  └─────┬─────┘                           │
│        ▼                                 │
│  ┌───────────┐                           │
│  │ DEPLOY QA │ → Auto-deploy to QA       │
│  └─────┬─────┘                           │
│        ▼                                 │
│  ┌───────────┐                           │
│  │ API TESTS │ → 50 tests (10 min)       │
│  └───────────┘                           │
└──────────────────────────────────────────┘

NIGHTLY REGRESSION (Scheduled 2 AM):
┌──────────────────────────────────────────┐
│ Full Regression: 200 tests (2 hours)     │
│ Security Scan: OWASP ZAP                 │
│ Performance: JMeter baseline             │
│ Report: Email + Slack                    │
└──────────────────────────────────────────┘

QUALITY GATES:
Gate 1: Unit tests 100% pass → Proceed
Gate 2: Smoke tests pass → Deploy to QA
Gate 3: Regression 95%+ → Proceed to staging
Gate 4: No Critical bugs → Production release

JENKINSFILE EXAMPLE:
\`\`\`groovy
pipeline {
  stages {
    stage('Build') {
      steps { sh 'mvn clean package' }
    }
    stage('Unit Tests') {
      steps { sh 'mvn test' }
      post {
        always { junit 'target/surefire-reports/*.xml' }
      }
    }
    stage('Smoke Tests') {
      steps { sh 'mvn verify -Dsuite=smoke' }
    }
    stage('Deploy QA') {
      when { branch 'develop' }
      steps { sh './deploy-qa.sh' }
    }
  }
}
\`\`\``
        },
        agileJiraExample: {
          context: "Link Jira to CI/CD for automatic status updates and build tracking.",
          realWorldScenario: "GitHub Actions updates Jira ticket status when tests pass.",
          sampleDocument: `JIRA CI/CD INTEGRATION
═══════════════════════════════════════════

GITHUB ACTIONS → JIRA SYNC:
┌─────────────────────────────────────────┐
│ Action: On PR Merge to develop          │
│                                         │
│ 1. Run tests                            │
│ 2. If pass → Update Jira to "Done"      │
│ 3. If fail → Comment on Jira ticket     │
│ 4. Add build link to Jira               │
└─────────────────────────────────────────┘

JIRA SMART COMMITS:
Commit: "SHOP-110 fix cart total calculation"
Result: Jira SHOP-110 gets linked commit

JIRA DASHBOARD - BUILD STATUS:
┌─────────────────────────────────────────┐
│       RECENT BUILDS                     │
├─────────────────────────────────────────┤
│ #245 develop  ✓ Passed   2 min ago      │
│ #244 feature  ✗ Failed   15 min ago     │
│ #243 develop  ✓ Passed   1 hour ago     │
├─────────────────────────────────────────┤
│ Linked Stories: 5 updated automatically │
└─────────────────────────────────────────┘`
        },
        tips: [
          "Know specific CI tools and their syntax",
          "Mention quality gates and thresholds",
          "Explain parallel execution for speed"
        ],
        commonMistakes: [
          "Not failing build on test failure",
          "Running slow tests on every commit",
          "No notifications for failures"
        ],
        followUpQuestions: [
          "How do you handle flaky tests in CI?",
          "What's the ideal pipeline duration?",
          "How do you manage test environments?"
        ],
        difficulty: "Advanced"
      }
    ]
  },
  {
    category: "AI in Testing",
    icon: "🤖",
    description: "Questions about AI-powered testing tools and techniques",
    questions: [
      {
        id: "AI-001",
        question: "How is AI used in software testing?",
        shortAnswer: "AI helps with test generation, self-healing locators, visual testing, bug prediction, and test optimization.",
        detailedAnswer: `**AI Applications in Testing:**

1. **Test Case Generation**:
   - Generate tests from requirements
   - Create edge case scenarios
   - Tools: ChatGPT, TestSigma AI

2. **Self-Healing Tests**:
   - Auto-update locators when UI changes
   - Reduce maintenance
   - Tools: Testim.io, Mabl

3. **Visual Testing**:
   - Detect UI anomalies
   - Compare screenshots
   - Tools: Applitools, Percy

4. **Bug Prediction**:
   - Identify bug-prone areas
   - Prioritize testing
   - Based on code changes

5. **Test Optimization**:
   - Select relevant tests
   - Reduce execution time
   - Smart test ordering`,
        stlcAgileExample: {
          context: "AI tools integrate into Agile STLC at test design and execution phases.",
          realWorldScenario: "Use ChatGPT to generate test cases from user stories, Testim for self-healing automation.",
          sampleDocument: `AI IN AGILE TESTING WORKFLOW
═══════════════════════════════════════════

SPRINT ACTIVITIES WITH AI:

DAY 1-2: REQUIREMENT ANALYSIS
┌─────────────────────────────────────────┐
│ AI TOOL: ChatGPT                        │
│ PURPOSE: Generate test scenarios        │
│                                         │
│ PROMPT:                                 │
│ "Generate test scenarios for user       │
│ story: As a customer, I want to apply   │
│ coupon codes at checkout so I get       │
│ discounts. Include positive, negative,  │
│ and edge cases."                        │
│                                         │
│ OUTPUT: 15 test scenarios generated     │
└─────────────────────────────────────────┘

DAY 3-6: TEST CASE DEVELOPMENT
┌─────────────────────────────────────────┐
│ AI TOOL: TestSigma AI                   │
│ PURPOSE: Auto-generate test steps       │
│                                         │
│ INPUT: Natural language test            │
│ "Login and apply coupon SAVE20"         │
│                                         │
│ OUTPUT: Executable test script          │
│ with element identification             │
└─────────────────────────────────────────┘

DAY 7-12: TEST EXECUTION
┌─────────────────────────────────────────┐
│ AI TOOL: Testim.io                      │
│ PURPOSE: Self-healing automation        │
│                                         │
│ SCENARIO:                               │
│ Button class changed from               │
│ 'btn-apply' to 'coupon-apply-btn'       │
│                                         │
│ AI ACTION:                              │
│ ✓ Detected locator failure              │
│ ✓ Analyzed DOM for alternatives         │
│ ✓ Auto-updated to new locator           │
│ ✓ Test passed without manual fix        │
│                                         │
│ SAVINGS: 2 hours maintenance avoided    │
└─────────────────────────────────────────┘`
        },
        agileJiraExample: {
          context: "AI insights can be tracked and reported in Jira dashboards.",
          realWorldScenario: "Create custom fields to track AI-generated vs manual tests, AI-detected bugs.",
          sampleDocument: `JIRA AI TESTING METRICS
═══════════════════════════════════════════

CUSTOM FIELDS:
├── Test Source: Manual | AI-Generated | Hybrid
├── AI Tool Used: ChatGPT | Testim | Mabl
├── Self-Healing Events: (count)
└── AI Bug Detection: Yes/No

SPRINT AI INSIGHTS DASHBOARD:
┌─────────────────────────────────────────┐
│     AI TESTING METRICS - SPRINT 15      │
├─────────────────────────────────────────┤
│ Tests by Source:                        │
│ ▓▓▓▓▓▓▓▓▓▓░░░░ Manual: 60 (60%)         │
│ ▓▓▓▓▓▓░░░░░░░░ AI-Gen: 30 (30%)         │
│ ▓▓░░░░░░░░░░░░ Hybrid: 10 (10%)         │
├─────────────────────────────────────────┤
│ Self-Healing Events: 23 locator fixes   │
│ Time Saved: ~8 hours maintenance        │
├─────────────────────────────────────────┤
│ AI-Detected Bugs: 5 of 18 total (28%)   │
│ False Positives: 2                      │
└─────────────────────────────────────────┘

JQL FOR AI TESTS:
"Test Source" = "AI-Generated" 
AND Sprint = activeSprint()`
        },
        tips: [
          "Know specific AI testing tools",
          "Mention practical benefits (time/cost saved)",
          "Be honest about limitations"
        ],
        commonMistakes: [
          "Claiming AI can replace testers",
          "Not mentioning false positives",
          "Overhyping AI capabilities"
        ],
        followUpQuestions: [
          "What are limitations of AI testing?",
          "How do you validate AI-generated tests?",
          "Can AI do exploratory testing?"
        ],
        difficulty: "Advanced"
      }
    ]
  },
  {
    category: "Metrics & Reporting",
    icon: "📊",
    description: "Questions about test metrics, reports, and quality assessment",
    questions: [
      {
        id: "MET-001",
        question: "What metrics do you track during testing?",
        shortAnswer: "Test execution status, pass/fail rate, defect metrics, test coverage, and velocity in Agile.",
        detailedAnswer: `**Key Testing Metrics:**

1. **Test Execution Metrics:**
   - Tests Executed vs Planned
   - Pass Rate = Passed / Total Executed
   - Blocked/Skipped count

2. **Defect Metrics:**
   - Defects Found vs Fixed
   - Severity Distribution
   - Defect Density = Bugs / KLOC
   - Defect Leakage to Prod

3. **Coverage Metrics:**
   - Requirement Coverage
   - Code Coverage (for automation)

4. **Agile Metrics:**
   - Velocity (story points completed)
   - Sprint Burndown
   - Escaped Defects

5. **Automation Metrics:**
   - Automation Coverage %
   - Automation ROI`,
        stlcAgileExample: {
          context: "In Agile STLC, metrics are reviewed daily and during sprint review.",
          realWorldScenario: "Banking app sprint tracks test pass rate, defects by severity, and automation coverage.",
          sampleDocument: `SPRINT TEST METRICS REPORT
═══════════════════════════════════════════

PROJECT: Banking Portal | SPRINT: 15
PERIOD: Jan 1-14, 2024

TEST EXECUTION SUMMARY:
┌─────────────────────────────────────────┐
│ Metric          │ Value  │ Target  │ ✓/✗│
├─────────────────────────────────────────┤
│ Total Planned   │ 120    │ 120     │ ✓  │
│ Executed        │ 115    │ 120     │ ✗  │
│ Passed          │ 105    │ -       │ -  │
│ Failed          │ 8      │ < 10    │ ✓  │
│ Blocked         │ 2      │ 0       │ ✗  │
│ Pass Rate       │ 91.3%  │ > 95%   │ ✗  │
└─────────────────────────────────────────┘

DEFECT METRICS:
┌─────────────────────────────────────────┐
│ Defects Found    │ 18                   │
│ Defects Fixed    │ 15                   │
│ Defects Open     │ 3                    │
│ Reopen Rate      │ 2/15 = 13%          │
├─────────────────────────────────────────┤
│ By Severity:                            │
│ Critical: 1 (fixed) | High: 5 (2 open)  │
│ Medium: 8 (all fixed) | Low: 4 (1 open) │
└─────────────────────────────────────────┘

AUTOMATION METRICS:
┌─────────────────────────────────────────┐
│ Total Test Cases     │ 300              │
│ Automated            │ 195 (65%)        │
│ Sprint New Auto      │ +15              │
│ Automation Pass Rate │ 98%              │
│ Execution Time       │ 45 min           │
└─────────────────────────────────────────┘

SPRINT VELOCITY:
Planned: 45 points | Completed: 42 points
Velocity: 42 (vs 40 last sprint → +5%)

RECOMMENDATIONS:
1. Address 2 blocked test cases (env issue)
2. Fix 2 open High severity bugs before release
3. Increase automation to 70% next sprint`
        },
        agileJiraExample: {
          context: "Configure Jira dashboards to auto-generate test metrics.",
          realWorldScenario: "QA dashboard shows real-time pass rate, defect trends, and sprint burndown.",
          sampleDocument: `JIRA QA DASHBOARD CONFIGURATION
═══════════════════════════════════════════

DASHBOARD: QA Sprint Metrics

GADGETS:
┌─────────────────────────────────────────┐
│ 1. TEST EXECUTION PIE CHART             │
│    Filter: type = "Test Case"           │
│            AND Sprint = activeSprint()  │
│    Group by: Execution Status           │
│                                         │
│    Display:                             │
│    🟢 Passed: 105 (91%)                 │
│    🔴 Failed: 8 (7%)                    │
│    🟡 Blocked: 2 (2%)                   │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ 2. DEFECT SEVERITY DISTRIBUTION         │
│    Filter: type = Bug                   │
│            AND Sprint = activeSprint()  │
│    Group by: Severity                   │
│                                         │
│    Display:                             │
│    🔴 Critical: ██ 1                    │
│    🟠 High: █████ 5                     │
│    🟡 Medium: ████████ 8                │
│    🟢 Low: ████ 4                       │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ 3. BURNDOWN CHART                       │
│    Y: Story Points Remaining            │
│    X: Sprint Days                       │
│                                         │
│    Shows: Actual vs Ideal burndown      │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ 4. DEFECT TREND (Created vs Resolved)   │
│    Period: Last 5 sprints               │
│                                         │
│    Sprint 11: 15/12 (Gap: +3)           │
│    Sprint 12: 18/20 (Gap: -2)           │
│    Sprint 13: 14/15 (Gap: -1)           │
│    Sprint 14: 16/14 (Gap: +2)           │
│    Sprint 15: 18/15 (Gap: +3) ⚠️        │
└─────────────────────────────────────────┘`
        },
        tips: [
          "Focus on actionable metrics, not vanity metrics",
          "Always compare against targets/trends",
          "Know how to calculate each metric"
        ],
        commonMistakes: [
          "Tracking too many metrics",
          "Not acting on metric insights",
          "Missing trend analysis"
        ],
        followUpQuestions: [
          "What's more important: pass rate or coverage?",
          "How do you handle metric gaming?",
          "What metrics indicate team health?"
        ],
        difficulty: "Intermediate"
      }
    ]
  }
];

// Quick reference for common interview questions
export const quickReferenceQuestions = [
  "What is STLC?",
  "Difference between Smoke and Regression testing?",
  "How do you write a test case?",
  "What is BVA and EP?",
  "Explain Agile ceremonies",
  "What is Definition of Done?",
  "How do you prioritize test cases?",
  "What metrics do you track?",
  "How do you handle flaky tests?",
  "What is API testing?"
];

export const interviewTips = {
  preparation: [
    "Review your project experience and prepare specific examples",
    "Practice STAR method for behavioral questions",
    "Know the tools and technologies on your resume",
    "Prepare questions to ask the interviewer"
  ],
  during: [
    "Listen carefully to the full question before answering",
    "Ask for clarification if needed",
    "Use specific examples from your experience",
    "Be honest about what you don't know"
  ],
  common: [
    "Keep answers concise - 2-3 minutes max",
    "Quantify your achievements when possible",
    "Show enthusiasm for testing and quality",
    "Relate answers to the company's domain/products"
  ]
};
