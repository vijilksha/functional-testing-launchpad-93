export interface AITool {
  name: string;
  description: string;
  keyFeatures: string[];
  howItUsesAI: string;
  realTimeExamples: string[];
  advantages: string[];
  limitations: string[];
  bestUseCases: string[];
  workflow: string;
}

export interface PromptCategory {
  level: "Basic" | "Intermediate" | "Advanced" | "Bonus";
  title: string;
  prompts: {
    purpose: string;
    prompt: string;
    example: string;
  }[];
}

export interface AIAutomationExample {
  title: string;
  scenario: string;
  sampleInput: string;
  expectedOutput: string;
  codeSnippet: string;
  explanation: string;
}

export interface BugType {
  type: string;
  description: string;
  howAIDetects: string;
}

export interface AIBugExample {
  scenario: string;
  description: string;
  aiDetection: string;
  resolution: string;
}

export const aiTestGenTools: AITool[] = [
  {
    name: "Testim.io",
    description: "AI-powered test automation platform that uses machine learning to create, execute, and maintain automated tests with self-healing capabilities.",
    keyFeatures: [
      "AI-powered element locators",
      "Self-healing tests with Smart Locators",
      "Visual test editor with code access",
      "Cross-browser testing",
      "Integration with CI/CD pipelines",
      "Root cause analysis for failures"
    ],
    howItUsesAI: "Testim uses ML algorithms to identify the most stable element locators. When DOM changes occur, AI automatically updates locators without manual intervention. It learns from test executions to improve stability.",
    realTimeExamples: [
      "E-commerce: AI auto-heals checkout button locator when class name changes",
      "Banking: Detects and adapts to dynamic form field IDs",
      "Insurance: Maintains tests despite frequent UI redesigns"
    ],
    advantages: [
      "Reduces test maintenance by 70%",
      "Fast test creation with low-code approach",
      "Excellent self-healing capabilities",
      "Strong CI/CD integration"
    ],
    limitations: [
      "Higher cost for enterprise features",
      "Learning curve for advanced customizations",
      "May require JavaScript knowledge for complex scenarios"
    ],
    bestUseCases: [
      "Teams with frequent UI changes",
      "Organizations needing quick test automation",
      "Projects requiring minimal maintenance overhead"
    ],
    workflow: `┌─────────────────┐
│  Test Recorder  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  AI Locator     │──► Smart Element Detection
│  Generation     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Test Execution │──► Cross-browser
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Self-Healing   │──► Auto-update locators
│  Engine         │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Reports &      │
│  Analytics      │
└─────────────────┘`
  },
  {
    name: "Mabl",
    description: "Intelligent test automation platform that combines low-code test creation with AI-powered insights and auto-healing capabilities.",
    keyFeatures: [
      "Auto-healing element locators",
      "Visual change detection",
      "Performance regression testing",
      "API testing integration",
      "Accessibility testing",
      "Link crawler for broken links"
    ],
    howItUsesAI: "Mabl's AI engine continuously learns from test runs, automatically repairing broken tests, detecting visual regressions, and identifying performance anomalies using behavioral analysis.",
    realTimeExamples: [
      "Retail: Auto-detects layout shifts after deployment",
      "Telecom: Identifies performance degradation in customer portal",
      "Healthcare: Catches accessibility violations automatically"
    ],
    advantages: [
      "Unified functional, visual, and API testing",
      "Excellent visual regression detection",
      "Built-in performance insights",
      "Strong SaaS application support"
    ],
    limitations: [
      "Primarily cloud-based (limited on-premise)",
      "Best suited for web applications",
      "May miss edge cases requiring custom logic"
    ],
    bestUseCases: [
      "SaaS product testing",
      "Visual regression testing needs",
      "Teams wanting unified test platform"
    ],
    workflow: `┌─────────────────┐
│  Trainer Mode   │──► Record user journeys
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  AI Analysis    │──► Learn element patterns
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Test Cloud     │──► Parallel execution
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Auto-Healing   │──► Fix broken locators
│  + Insights     │──► Performance data
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Visual Report  │
│  + Alerts       │
└─────────────────┘`
  },
  {
    name: "Katalon TestOps AI",
    description: "Enterprise test orchestration platform with AI-driven test management, smart scheduling, and failure analysis capabilities.",
    keyFeatures: [
      "AI-powered failure analysis",
      "Smart test scheduling",
      "Predictive analytics",
      "Integration with Katalon Studio",
      "Flaky test detection",
      "Release readiness assessment"
    ],
    howItUsesAI: "Uses machine learning to categorize test failures, detect patterns in flaky tests, and provide predictive insights on release quality based on historical data.",
    realTimeExamples: [
      "Banking: Predicts high-risk areas before major releases",
      "E-commerce: Identifies recurring flaky tests in payment flow",
      "Insurance: Smart scheduling prioritizes critical path tests"
    ],
    advantages: [
      "Free tier available",
      "Excellent for Katalon Studio users",
      "Strong failure categorization",
      "Good historical trend analysis"
    ],
    limitations: [
      "Best value with Katalon Studio",
      "AI features mainly in higher tiers",
      "Less self-healing compared to Testim/Mabl"
    ],
    bestUseCases: [
      "Teams already using Katalon Studio",
      "Organizations needing test analytics",
      "Projects requiring release quality prediction"
    ],
    workflow: `┌─────────────────┐
│  Katalon Studio │──► Create tests
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  TestOps        │──► Orchestrate execution
│  Platform       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  AI Failure     │──► Categorize failures
│  Analysis       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Predictive     │──► Release readiness
│  Analytics      │
└─────────────────┘`
  },
  {
    name: "ChatGPT for Testing",
    description: "Large Language Model that can generate test cases, test scripts, analyze requirements, and assist with test automation code generation.",
    keyFeatures: [
      "Natural language test case generation",
      "Code generation for test automation",
      "Requirements analysis",
      "Bug report writing",
      "Test data generation",
      "Documentation assistance"
    ],
    howItUsesAI: "Uses transformer-based neural networks trained on vast code and documentation to understand context, generate human-like text, and produce code snippets based on prompts.",
    realTimeExamples: [
      "Generate 20 edge case scenarios for login feature in seconds",
      "Convert user story to Gherkin BDD format instantly",
      "Create Selenium scripts from plain English descriptions"
    ],
    advantages: [
      "Extremely versatile and flexible",
      "Rapid content generation",
      "Helps with learning and documentation",
      "No setup or infrastructure needed"
    ],
    limitations: [
      "May generate incorrect or outdated code",
      "Requires human validation",
      "No direct test execution capability",
      "Context window limitations"
    ],
    bestUseCases: [
      "Test case brainstorming",
      "Learning automation concepts",
      "Documentation and reporting",
      "Quick script generation"
    ],
    workflow: `┌─────────────────┐
│  User Prompt    │──► Describe testing need
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  LLM Processing │──► Understand context
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Response       │──► Generate test assets
│  Generation     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Human Review   │──► Validate & refine
│  & Validation   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Integration    │──► Use in test suite
└─────────────────┘`
  },
  {
    name: "TestSigma AI",
    description: "AI-powered test automation platform using natural language processing for test creation, with self-healing and cross-platform support.",
    keyFeatures: [
      "Natural Language Processing (NLP) based tests",
      "Self-healing with AI",
      "Web, mobile, and API testing",
      "Data-driven testing",
      "Visual testing",
      "CI/CD integration"
    ],
    howItUsesAI: "TestSigma uses NLP to convert plain English test steps into automated actions. AI learns element patterns and auto-heals tests when DOM changes occur.",
    realTimeExamples: [
      "Write 'Click on Add to Cart button' - AI identifies correct element",
      "Insurance: NLP understands 'Fill policy details form'",
      "Banking: Self-heals when transaction table structure changes"
    ],
    advantages: [
      "Very low learning curve with NLP",
      "Supports all platforms (web, mobile, API)",
      "Strong community and documentation",
      "Free plan available"
    ],
    limitations: [
      "NLP may misinterpret complex steps",
      "Performance overhead with NLP processing",
      "Limited offline capabilities"
    ],
    bestUseCases: [
      "Teams new to automation",
      "Cross-platform testing needs",
      "Organizations wanting plain English tests"
    ],
    workflow: `┌─────────────────┐
│  Plain English  │──► Write test in NLP
│  Test Steps     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  NLP Engine     │──► Parse & understand
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  AI Element     │──► Identify UI elements
│  Recognition    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Test Execution │──► Run on cloud/local
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Self-Healing   │──► Auto-fix broken tests
│  + Reports      │
└─────────────────┘`
  },
  {
    name: "ACCELQ AI",
    description: "Codeless test automation platform with AI-driven test design, self-healing capabilities, and enterprise-grade test management.",
    keyFeatures: [
      "AI-powered test design",
      "Codeless test creation",
      "Self-healing automation",
      "Business process testing",
      "API lifecycle testing",
      "SAP and Salesforce support"
    ],
    howItUsesAI: "ACCELQ uses AI to analyze application behavior, generate optimal test paths, and maintain tests through intelligent element detection and self-healing algorithms.",
    realTimeExamples: [
      "SAP: AI generates test flows for complex business processes",
      "Salesforce: Auto-adapts to Lightning component changes",
      "ERP: Detects optimal paths through complex workflows"
    ],
    advantages: [
      "Excellent for enterprise applications",
      "Strong SAP and Salesforce support",
      "No coding required",
      "Good for business users"
    ],
    limitations: [
      "Higher cost for full features",
      "May be overkill for simple applications",
      "Steeper learning curve for advanced features"
    ],
    bestUseCases: [
      "SAP/Salesforce testing",
      "Complex enterprise workflows",
      "Business process automation testing"
    ],
    workflow: `┌─────────────────┐
│  AI Test Design │──► Analyze application
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Codeless Test  │──► Build without code
│  Builder        │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Smart Element  │──► Multi-locator strategy
│  Detection      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Execution &    │──► Cloud/on-premise
│  Self-Healing   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Enterprise     │──► Analytics & reports
│  Dashboard      │
└─────────────────┘`
  },
  {
    name: "BrowserStack Test Generator",
    description: "AI-powered test generation tool that records user actions and generates robust automation scripts with intelligent locator strategies.",
    keyFeatures: [
      "Record and playback with AI",
      "Intelligent locator generation",
      "Cross-browser script generation",
      "Integration with major frameworks",
      "Cloud device lab access",
      "Real device testing"
    ],
    howItUsesAI: "Uses computer vision and ML to analyze recorded interactions, generate multiple fallback locators, and produce framework-specific test code.",
    realTimeExamples: [
      "Record on Chrome, generate tests for all browsers",
      "E-commerce: Generate Selenium scripts from user journey",
      "Mobile: Create Appium tests from device recordings"
    ],
    advantages: [
      "Seamless BrowserStack integration",
      "Real device cloud access",
      "Multiple framework export options",
      "Excellent cross-browser support"
    ],
    limitations: [
      "Requires BrowserStack subscription",
      "Best for web/mobile, limited for desktop",
      "Generated code may need refactoring"
    ],
    bestUseCases: [
      "Cross-browser testing at scale",
      "Teams using BrowserStack infrastructure",
      "Rapid test script generation"
    ],
    workflow: `┌─────────────────┐
│  Recording      │──► Capture user actions
│  Extension      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  AI Analysis    │──► Analyze interactions
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Smart Locator  │──► Generate resilient
│  Generation     │    element selectors
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Code Export    │──► Selenium/Appium/etc
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  BrowserStack   │──► Execute on cloud
│  Cloud          │
└─────────────────┘`
  }
];

export const toolComparisonTable = {
  headers: ["Feature", "Testim", "Mabl", "Katalon AI", "ChatGPT", "TestSigma", "ACCELQ", "BrowserStack"],
  rows: [
    ["Self-Healing", "★★★★★", "★★★★☆", "★★★☆☆", "N/A", "★★★★☆", "★★★★☆", "★★★☆☆"],
    ["Learning Curve", "Medium", "Easy", "Medium", "Easy", "Easy", "Medium", "Easy"],
    ["NLP Support", "Limited", "Limited", "Limited", "★★★★★", "★★★★★", "★★★☆☆", "Limited"],
    ["Visual Testing", "★★★☆☆", "★★★★★", "★★★☆☆", "N/A", "★★★★☆", "★★★☆☆", "★★★★☆"],
    ["API Testing", "★★★☆☆", "★★★★☆", "★★★★☆", "★★★☆☆", "★★★★☆", "★★★★★", "★★★☆☆"],
    ["Mobile Support", "★★★☆☆", "★★★☆☆", "★★★★★", "N/A", "★★★★★", "★★★★☆", "★★★★★"],
    ["Enterprise Ready", "★★★★☆", "★★★★☆", "★★★★☆", "★★☆☆☆", "★★★☆☆", "★★★★★", "★★★★☆"],
    ["Free Tier", "Limited", "Trial", "Yes", "Yes", "Yes", "Trial", "Trial"],
    ["CI/CD Integration", "★★★★★", "★★★★★", "★★★★★", "★★★☆☆", "★★★★☆", "★★★★☆", "★★★★★"]
  ]
};

export const promptsGuide: PromptCategory[] = [
  {
    level: "Basic",
    title: "Foundational Testing Prompts",
    prompts: [
      {
        purpose: "Generate Test Cases",
        prompt: "Generate comprehensive test cases for [feature name] including positive, negative, and edge cases. Include test ID, description, preconditions, steps, test data, and expected results.",
        example: "Generate comprehensive test cases for user login functionality including positive, negative, and edge cases. Include test ID, description, preconditions, steps, test data, and expected results.\n\n---\nOutput:\nTC_LOGIN_001: Valid Login\nPreconditions: User account exists\nSteps:\n1. Navigate to login page\n2. Enter valid email\n3. Enter valid password\n4. Click Login\nExpected: User redirected to dashboard"
      },
      {
        purpose: "Generate Acceptance Criteria",
        prompt: "Write acceptance criteria in Given-When-Then format for the following user story: [user story]",
        example: "User Story: As a customer, I want to reset my password so I can regain access to my account.\n\n---\nGiven: User is on the login page\nWhen: User clicks 'Forgot Password' and enters registered email\nThen: Password reset link is sent within 2 minutes\n\nGiven: User clicks the reset link\nWhen: User enters new password meeting complexity requirements\nThen: Password is updated and confirmation message displayed"
      },
      {
        purpose: "Convert Requirements to Test Scenarios",
        prompt: "Analyze the following requirement and create test scenarios covering all functional aspects: [requirement text]",
        example: "Requirement: Shopping cart should allow users to add, update quantity, and remove items.\n\n---\nTest Scenarios:\n1. Add single item to empty cart\n2. Add multiple items to cart\n3. Add same item twice (quantity update)\n4. Update item quantity to valid number\n5. Update quantity to zero (remove)\n6. Remove item from cart\n7. Add item when cart is at max limit"
      },
      {
        purpose: "Convert Test Cases to Automation Steps",
        prompt: "Convert the following manual test case into automation test steps with Selenium commands: [test case]",
        example: "Manual Test: Login with valid credentials\n\n---\nAutomation Steps:\n1. driver.get(\"https://app.com/login\")\n2. driver.findElement(By.id(\"email\")).sendKeys(\"user@test.com\")\n3. driver.findElement(By.id(\"password\")).sendKeys(\"Pass@123\")\n4. driver.findElement(By.id(\"loginBtn\")).click()\n5. Assert.assertTrue(driver.getCurrentUrl().contains(\"/dashboard\"))"
      }
    ]
  },
  {
    level: "Intermediate",
    title: "Advanced Testing Prompts",
    prompts: [
      {
        purpose: "Compare UI vs API Response",
        prompt: "Create a validation framework to compare UI displayed data with API response for [feature]. Include fields to check, data transformations, and assertion logic.",
        example: "Feature: User Profile Display\n\n---\nValidation Framework:\n1. API Call: GET /api/user/{id}\n2. UI Elements to Validate:\n   - #userName → api.fullName\n   - #userEmail → api.email\n   - #memberSince → formatDate(api.createdAt)\n3. Assertions:\n   - getText(#userName).equals(api.fullName)\n   - Check null handling for optional fields"
      },
      {
        purpose: "Extract Locators from HTML",
        prompt: "Analyze this HTML snippet and provide the best locator strategies (ID, CSS, XPath) ranked by reliability: [HTML code]",
        example: "HTML: <button class=\"btn primary\" data-testid=\"submit-order\" onclick=\"submit()\">Place Order</button>\n\n---\nLocator Strategies (Best to Worst):\n1. data-testid: [data-testid='submit-order'] ★★★★★\n2. CSS: button.btn.primary ★★★☆☆\n3. XPath: //button[text()='Place Order'] ★★☆☆☆\n4. XPath: //button[contains(@class,'primary')] ★★☆☆☆"
      },
      {
        purpose: "Generate Dynamic XPath",
        prompt: "Generate robust XPath locators for the following element that handles dynamic attributes: [element description and HTML]",
        example: "Element: Product 'Add to Cart' button in a list where IDs are dynamic\n\nHTML: <div class=\"product\" id=\"prod_12345\"><span>iPhone 15</span><button class=\"add-cart\">Add</button></div>\n\n---\nRobust XPath:\n//div[.//span[text()='iPhone 15']]//button[contains(@class,'add-cart')]\n\nAlternative:\n//span[text()='iPhone 15']/following-sibling::button"
      },
      {
        purpose: "Analyze Logs for Issues",
        prompt: "Analyze the following test execution logs and identify: 1) Root cause of failures, 2) Patterns in errors, 3) Recommended fixes: [log content]",
        example: "Log: NoSuchElementException at LoginPage.java:45 - element 'submit-btn' not found. TimeoutException at line 47.\n\n---\nAnalysis:\n1. Root Cause: Element locator changed or page not fully loaded\n2. Pattern: Timing issue - element search before render\n3. Fixes:\n   - Add explicit wait before element interaction\n   - Verify locator in current build\n   - Add retry mechanism with 10s timeout"
      },
      {
        purpose: "Identify Risky Areas for Regression",
        prompt: "Based on recent code changes in [module/feature], identify high-risk areas that require regression testing priority.",
        example: "Changes: Payment gateway integration updated, new card validation logic added\n\n---\nHigh-Risk Areas:\n1. ★★★★★ Card validation (direct change)\n2. ★★★★★ Payment processing flow\n3. ★★★★☆ Order confirmation (downstream)\n4. ★★★☆☆ Cart checkout integration\n5. ★★☆☆☆ User payment history display"
      }
    ]
  },
  {
    level: "Advanced",
    title: "Expert-Level Testing Prompts",
    prompts: [
      {
        purpose: "Create Test Strategy",
        prompt: "Create a comprehensive test strategy for [project/feature] including: scope, objectives, test levels, test types, entry/exit criteria, risk analysis, environment needs, and timeline.",
        example: "Project: Mobile Banking App v2.0\n\n---\nTEST STRATEGY:\n\n1. SCOPE:\n- In-scope: All new features, regression for core flows\n- Out-scope: Backend migration (separate team)\n\n2. TEST LEVELS:\n- Unit (Dev), Integration, System, UAT\n\n3. TEST TYPES:\n- Functional, Security, Performance, Usability\n\n4. ENTRY CRITERIA:\n- Dev complete, test environment ready\n\n5. RISK ANALYSIS:\n- High: Payment flows - Mitigation: 100% automation"
      },
      {
        purpose: "Optimize Automation Framework",
        prompt: "Review this automation framework structure and suggest optimizations for: maintainability, scalability, execution speed, and reporting: [framework details]",
        example: "Current: Single module, 500 tests, 3-hour execution\n\n---\nOptimizations:\n1. MAINTAINABILITY:\n   - Implement Page Object Model\n   - Create reusable component library\n\n2. SCALABILITY:\n   - Parallel execution with TestNG/Selenium Grid\n   - Containerize with Docker\n\n3. SPEED:\n   - Headless browser for non-visual tests\n   - Reduce implicit waits, use explicit\n   - Target: 45 mins with 10 parallel threads\n\n4. REPORTING:\n   - Integrate Allure/ExtentReports"
      },
      {
        purpose: "Self-Healing Locator Suggestions",
        prompt: "Suggest a self-healing locator strategy for elements that frequently change. Include primary, secondary, and fallback locators with auto-repair logic.",
        example: "Element: Submit Button (frequently changes class)\n\n---\nSELF-HEALING STRATEGY:\n\nPrimary: data-testid=\"submit-btn\"\nSecondary: #submit, .submit-button\nFallback: //button[contains(text(),'Submit')]\n\nAuto-Repair Logic:\n```java\npublic WebElement findWithHealing(By... locators) {\n  for (By locator : locators) {\n    try {\n      return wait.until(ExpectedConditions\n        .elementToBeClickable(locator));\n    } catch (Exception e) {\n      log.warn(\"Locator failed: \" + locator);\n    }\n  }\n  throw new NoSuchElementException(\"All locators failed\");\n}\n```"
      },
      {
        purpose: "Generate BDD Stories",
        prompt: "Convert the following requirements into complete BDD feature files with scenarios, examples, and data tables: [requirements]",
        example: "Requirement: User registration with email verification\n\n---\nFeature: User Registration\n\n  Scenario Outline: Successful registration\n    Given I am on registration page\n    When I enter \"<email>\" and \"<password>\"\n    And I click Register\n    Then I should see \"Verification email sent\"\n    And email should be sent to \"<email>\"\n\n    Examples:\n      | email           | password  |\n      | user@test.com   | Pass@123  |\n      | new@domain.com  | Secure#1  |"
      },
      {
        purpose: "Generate CI/CD Pipeline Steps",
        prompt: "Create CI/CD pipeline configuration for test automation including: stages, triggers, parallel execution, reporting, and failure handling: [project details]",
        example: "Project: Java/Maven/Selenium with Jenkins\n\n---\nJENKINS PIPELINE:\n\n```groovy\npipeline {\n  agent any\n  stages {\n    stage('Build') {\n      steps {\n        sh 'mvn clean compile'\n      }\n    }\n    stage('Test') {\n      parallel {\n        stage('Smoke') {\n          steps {\n            sh 'mvn test -Dgroups=smoke'\n          }\n        }\n        stage('Regression') {\n          steps {\n            sh 'mvn test -Dgroups=regression'\n          }\n        }\n      }\n    }\n    stage('Report') {\n      steps {\n        allure includeProperties: false\n      }\n    }\n  }\n  post {\n    failure {\n      slackSend message: \"Build Failed\"\n    }\n  }\n}\n```"
      }
    ]
  },
  {
    level: "Bonus",
    title: "Prompt Engineering Patterns",
    prompts: [
      {
        purpose: "CUPA Pattern (Context, User, Purpose, Action)",
        prompt: "Context: [project context]\nUser: [who you are]\nPurpose: [what you need]\nAction: [what AI should do]",
        example: "Context: E-commerce platform with 50k daily users\nUser: Senior QA Engineer\nPurpose: Need comprehensive security test scenarios\nAction: Generate OWASP Top 10 based security test cases for checkout flow including SQL injection, XSS, CSRF tests with specific payloads and expected behaviors."
      },
      {
        purpose: "CO-STAR Pattern (Context, Objective, Style, Tone, Audience, Response)",
        prompt: "Context: [background]\nObjective: [goal]\nStyle: [writing style]\nTone: [professional/casual]\nAudience: [who reads this]\nResponse: [format needed]",
        example: "Context: Banking app regression suite failing frequently\nObjective: Root cause analysis of test failures\nStyle: Technical, detailed\nTone: Professional\nAudience: Development and QA teams\nResponse: Structured report with categories, patterns, and actionable recommendations in bullet points."
      },
      {
        purpose: "REACT Pattern (Role, Evaluate, Analyze, Create, Test)",
        prompt: "Role: Act as [expert type]\nEvaluate: Review [input]\nAnalyze: Identify [issues/patterns]\nCreate: Generate [solution]\nTest: Validate with [criteria]",
        example: "Role: Act as a Senior Test Architect\nEvaluate: Review current test suite of 200 tests taking 4 hours\nAnalyze: Identify bottlenecks and dependencies\nCreate: Generate optimized test execution strategy\nTest: Validate approach reduces time to under 1 hour"
      },
      {
        purpose: "Prompt Debugging Technique",
        prompt: "When AI output is incorrect:\n1. Add specific constraints\n2. Provide examples of desired output\n3. Break complex prompts into steps\n4. Ask AI to explain its reasoning",
        example: "Original (Poor): Generate test cases for login\n\nDebugged (Better):\n\"Generate exactly 5 test cases for web login feature.\nEach test case must include:\n- Unique ID (TC_LOGIN_XXX)\n- One-line description\n- Preconditions\n- 3-5 numbered steps\n- Expected result\n\nInclude: 2 positive, 2 negative, 1 edge case.\nOutput in markdown table format.\""
      },
      {
        purpose: "Context-Building for Complex Scenarios",
        prompt: "Step 1: Provide project context\nStep 2: Share relevant documentation\nStep 3: Define constraints\nStep 4: Request specific output\nStep 5: Ask for alternatives",
        example: "Step 1: We're testing a healthcare patient portal\nStep 2: Patients can view records, schedule appointments, message doctors\nStep 3: Must be HIPAA compliant, data encrypted, audit logging required\nStep 4: Generate test scenarios for patient data access\nStep 5: Also suggest security testing approaches for PHI protection"
      }
    ]
  }
];

export const aiAutomationExamples: AIAutomationExample[] = [
  {
    title: "AI Auto-Generating Selenium Scripts",
    scenario: "Tester describes a login test in natural language, AI generates complete Selenium Java code.",
    sampleInput: "Create a Selenium test that: logs into the application with valid credentials, verifies successful login by checking for welcome message, and logs out.",
    expectedOutput: "Complete Java Selenium test class with proper waits, assertions, and error handling.",
    codeSnippet: `@Test
public void testValidLogin() {
    // Navigate to login page
    driver.get("https://app.example.com/login");
    
    // Wait for page load
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    
    // Enter credentials
    wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("email")))
        .sendKeys("user@example.com");
    driver.findElement(By.id("password")).sendKeys("SecurePass123!");
    
    // Click login
    driver.findElement(By.cssSelector("[data-testid='login-btn']")).click();
    
    // Verify successful login
    WebElement welcomeMsg = wait.until(
        ExpectedConditions.visibilityOfElementLocated(By.className("welcome-message"))
    );
    Assert.assertTrue(welcomeMsg.getText().contains("Welcome"));
    
    // Logout
    driver.findElement(By.id("logout-btn")).click();
    Assert.assertTrue(driver.getCurrentUrl().contains("/login"));
}`,
    explanation: "AI analyzed the natural language description and generated: proper WebDriver initialization, explicit waits for reliability, element location strategies, assertions for verification, and complete test flow including cleanup."
  },
  {
    title: "Self-Healing Locators",
    scenario: "Application UI changes cause element ID to change from 'submit-btn' to 'submit-button'. AI detects and auto-heals.",
    sampleInput: "Original locator: By.id('submit-btn') → Element not found exception",
    expectedOutput: "AI identifies alternative locators and updates test automatically",
    codeSnippet: `public class SelfHealingLocator {
    private List<By> locatorStrategies;
    private WebDriver driver;
    
    public SelfHealingLocator(WebDriver driver) {
        this.driver = driver;
        this.locatorStrategies = Arrays.asList(
            By.id("submit-btn"),           // Primary
            By.id("submit-button"),         // Alternative
            By.cssSelector("[type='submit']"),  // Fallback CSS
            By.xpath("//button[contains(text(),'Submit')]")  // Fallback XPath
        );
    }
    
    public WebElement findElement() {
        for (By locator : locatorStrategies) {
            try {
                WebElement element = driver.findElement(locator);
                if (element.isDisplayed() && element.isEnabled()) {
                    logHealingEvent(locator);
                    return element;
                }
            } catch (NoSuchElementException e) {
                continue;  // Try next locator
            }
        }
        throw new NoSuchElementException("All locator strategies failed");
    }
    
    private void logHealingEvent(By usedLocator) {
        // Log which locator worked for analytics
        System.out.println("Self-healed using: " + usedLocator);
    }
}`,
    explanation: "The self-healing mechanism tries multiple locator strategies in order of reliability. When the primary locator fails, it automatically falls back to alternatives, logs the healing event for later analysis, and continues test execution without human intervention."
  },
  {
    title: "AI Identifying Dynamic XPath",
    scenario: "E-commerce product list has dynamically generated IDs. AI generates robust XPath using stable attributes.",
    sampleInput: "HTML: <div id='prod_a1b2c3'><span class='name'>iPhone 15</span><button>Add to Cart</button></div>",
    expectedOutput: "AI generates XPath based on stable text content rather than dynamic IDs",
    codeSnippet: `public class DynamicXPathGenerator {
    
    /**
     * AI-generated robust XPath strategies for dynamic elements
     */
    public static By getProductAddButton(String productName) {
        // Strategy 1: Text-based navigation (Most Robust)
        String xpath1 = String.format(
            "//span[text()='%s']/following-sibling::button", 
            productName
        );
        
        // Strategy 2: Contains for partial match
        String xpath2 = String.format(
            "//div[contains(.,'%s')]//button[contains(text(),'Add')]", 
            productName
        );
        
        // Strategy 3: Ancestor-based
        String xpath3 = String.format(
            "//span[text()='%s']/ancestor::div[contains(@id,'prod_')]//button",
            productName
        );
        
        // Return with fallback mechanism
        return By.xpath(xpath1);
    }
    
    /**
     * AI Pattern: Avoid dynamic IDs, use:
     * 1. Text content
     * 2. Structural relationships (parent/sibling/ancestor)
     * 3. Stable class names
     * 4. Data attributes (data-testid, data-product-name)
     */
}`,
    explanation: "AI analyzes the DOM structure and identifies that while IDs are dynamic (prod_a1b2c3), the product name and button text are stable. It generates XPath using these stable anchors, making tests resilient to ID changes."
  },
  {
    title: "Visual Testing with AI",
    scenario: "AI compares screenshots to detect visual regressions like color changes, misalignment, or missing elements.",
    sampleInput: "Baseline screenshot of dashboard vs current screenshot",
    expectedOutput: "AI-generated visual diff report with highlighted differences",
    codeSnippet: `public class AIVisualTesting {
    
    @Test
    public void testDashboardVisualRegression() {
        driver.get("https://app.example.com/dashboard");
        
        // Capture current state
        Screenshot current = new AShot()
            .shootingStrategy(ShootingStrategies.viewportPasting(100))
            .takeScreenshot(driver);
        
        // Load baseline
        BufferedImage baseline = ImageIO.read(
            new File("baselines/dashboard_baseline.png")
        );
        
        // AI-powered comparison
        ImageDiffer differ = new ImageDiffer();
        ImageDiff diff = differ.makeDiff(baseline, current.getImage());
        
        if (diff.hasDiff()) {
            // AI categorizes differences
            List<DiffRegion> regions = diff.getDiffRegions();
            
            for (DiffRegion region : regions) {
                System.out.println("Visual difference detected:");
                System.out.println("  Location: " + region.getBounds());
                System.out.println("  Severity: " + categorizeByAI(region));
                System.out.println("  Type: " + classifyDifferenceType(region));
            }
            
            // Save diff image
            ImageIO.write(diff.getMarkedImage(), "png", 
                new File("reports/dashboard_diff.png"));
            
            // Fail if significant differences
            Assert.assertFalse("Visual regression detected", 
                hasSignificantDifferences(regions));
        }
    }
    
    private String classifyDifferenceType(DiffRegion region) {
        // AI classifies: color_change, missing_element, 
        // alignment_shift, content_change
        return "AI_CLASSIFIED_TYPE";
    }
}`,
    explanation: "AI-powered visual testing captures screenshots, compares against baselines using computer vision, classifies differences (color changes, layout shifts, missing elements), and determines if differences are intentional updates or regression bugs."
  },
  {
    title: "AI Validating PDFs & Reports",
    scenario: "Automated validation of generated PDF reports including text content, formatting, and data accuracy.",
    sampleInput: "Generated invoice PDF needs validation against order data",
    expectedOutput: "AI extracts text, validates data points, and checks formatting",
    codeSnippet: `public class AIPDFValidator {
    
    @Test
    public void validateInvoicePDF() throws Exception {
        // Generate invoice
        driver.findElement(By.id("generate-invoice")).click();
        File pdfFile = waitForDownload("invoice_*.pdf");
        
        // AI-powered PDF analysis
        PDDocument document = PDDocument.load(pdfFile);
        PDFTextStripper stripper = new PDFTextStripper();
        String pdfContent = stripper.getText(document);
        
        // Validate against expected data
        OrderData expectedData = getOrderData();
        
        // AI extraction and validation
        Map<String, String> extractedData = aiExtractInvoiceData(pdfContent);
        
        assertAll(
            () -> assertEquals(expectedData.getOrderId(), 
                extractedData.get("orderId")),
            () -> assertEquals(expectedData.getTotal(), 
                extractedData.get("totalAmount")),
            () -> assertEquals(expectedData.getCustomerName(), 
                extractedData.get("customerName")),
            () -> assertTrue(pdfContent.contains("Tax Invoice"))
        );
        
        // Validate PDF structure
        validatePDFFormatting(document);
        
        document.close();
    }
    
    private Map<String, String> aiExtractInvoiceData(String content) {
        // AI uses pattern recognition to extract:
        // - Order numbers (regex + context)
        // - Currency amounts
        // - Dates in various formats
        // - Customer details
        Map<String, String> data = new HashMap<>();
        
        // AI pattern matching
        Pattern orderPattern = Pattern.compile("Order #?:?\\s*(\\w+)");
        Matcher matcher = orderPattern.matcher(content);
        if (matcher.find()) {
            data.put("orderId", matcher.group(1));
        }
        
        return data;
    }
}`,
    explanation: "AI extracts structured data from unstructured PDF content using pattern recognition and NLP. It validates data accuracy against source systems, checks formatting compliance, and handles various date/currency formats automatically."
  },
  {
    title: "Intelligent Wait Strategies",
    scenario: "AI determines optimal wait conditions based on page behavior patterns rather than fixed timeouts.",
    sampleInput: "Page with AJAX content that loads at variable speeds",
    expectedOutput: "Dynamic waits that adapt to actual page state",
    codeSnippet: `public class AISmartWait {
    
    /**
     * AI-powered intelligent wait that learns from page behavior
     */
    public WebElement smartWait(By locator) {
        long startTime = System.currentTimeMillis();
        
        // Check network activity
        waitForNetworkIdle();
        
        // Check DOM stability
        waitForDOMStability();
        
        // Check element state progression
        WebElement element = waitForElementReady(locator);
        
        // Log timing for AI learning
        long duration = System.currentTimeMillis() - startTime;
        AIWaitAnalytics.recordWaitTime(locator, duration);
        
        return element;
    }
    
    private void waitForNetworkIdle() {
        new WebDriverWait(driver, Duration.ofSeconds(30)).until(d -> {
            JavascriptExecutor js = (JavascriptExecutor) d;
            
            // Check for pending AJAX requests
            Long activeConnections = (Long) js.executeScript(
                "return window.performance.getEntriesByType('resource')" +
                ".filter(r => !r.responseEnd).length"
            );
            
            return activeConnections == 0;
        });
    }
    
    private void waitForDOMStability() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        
        String previousDOM = "";
        int stableCount = 0;
        
        while (stableCount < 3) {
            String currentDOM = (String) js.executeScript(
                "return document.body.innerHTML.length.toString()"
            );
            
            if (currentDOM.equals(previousDOM)) {
                stableCount++;
            } else {
                stableCount = 0;
            }
            
            previousDOM = currentDOM;
            sleep(100);
        }
    }
    
    private WebElement waitForElementReady(By locator) {
        return new WebDriverWait(driver, Duration.ofSeconds(10))
            .until(ExpectedConditions.and(
                ExpectedConditions.visibilityOfElementLocated(locator),
                ExpectedConditions.elementToBeClickable(locator)
            ));
    }
}`,
    explanation: "Instead of fixed waits (Thread.sleep) or simple explicit waits, AI analyzes page behavior: network activity, DOM mutations, and element state transitions. It adapts wait strategies based on learned patterns, reducing flaky tests while optimizing execution time."
  },
  {
    title: "Reducing Flaky Tests with AI",
    scenario: "AI identifies patterns in test failures and suggests fixes for intermittent failures.",
    sampleInput: "Test failure rate of 15% over 100 runs with no code changes",
    expectedOutput: "AI analysis of flakiness patterns and automated fixes",
    codeSnippet: `public class AIFlakyTestAnalyzer {
    
    /**
     * AI-powered flaky test detection and resolution
     */
    public FlakinessReport analyzeTestHistory(String testName) {
        List<TestRun> history = getTestHistory(testName, 100);
        
        FlakinessReport report = new FlakinessReport();
        
        // Calculate flakiness score
        long failures = history.stream().filter(r -> !r.passed).count();
        report.setFlakinessScore(failures * 100.0 / history.size());
        
        // AI pattern detection
        report.setPatterns(detectFailurePatterns(history));
        
        // Generate fix suggestions
        report.setSuggestions(generateFixSuggestions(report.getPatterns()));
        
        return report;
    }
    
    private List<FlakinessPattern> detectFailurePatterns(List<TestRun> runs) {
        List<FlakinessPattern> patterns = new ArrayList<>();
        
        // Time-based patterns
        if (failuresClusterAtTime(runs, "09:00", "10:00")) {
            patterns.add(new FlakinessPattern(
                "TIME_BASED", 
                "Failures occur during peak load hours",
                "Add retry mechanism or run in off-peak"
            ));
        }
        
        // Element-based patterns
        Map<String, Long> failuresByElement = runs.stream()
            .filter(r -> !r.passed)
            .collect(Collectors.groupingBy(
                r -> r.failedElement, 
                Collectors.counting()
            ));
        
        failuresByElement.entrySet().stream()
            .filter(e -> e.getValue() > 5)
            .forEach(e -> patterns.add(new FlakinessPattern(
                "ELEMENT_INSTABILITY",
                "Element '" + e.getKey() + "' frequently fails",
                "Add explicit wait or self-healing locator"
            )));
        
        return patterns;
    }
    
    /**
     * AI auto-fix implementation
     */
    public void applyAutoFix(String testClass, FlakinessPattern pattern) {
        switch (pattern.getType()) {
            case "ELEMENT_INSTABILITY":
                // Inject retry annotation
                addRetryAnnotation(testClass, 3);
                break;
            case "TIMING_ISSUE":
                // Increase wait timeouts
                adjustWaitTimeouts(testClass, 1.5);
                break;
            case "DATA_DEPENDENCY":
                // Add data isolation
                addDataSetupTeardown(testClass);
                break;
        }
    }
}`,
    explanation: "AI analyzes historical test execution data to identify flakiness patterns: timing issues, resource contention, element instability, or data dependencies. It automatically suggests and can apply fixes like retry mechanisms, improved waits, or data isolation."
  },
  {
    title: "AI Auto-Writing Gherkin Scenarios",
    scenario: "AI converts user story and acceptance criteria into complete BDD feature files.",
    sampleInput: "User Story: As a customer, I want to filter products by price range",
    expectedOutput: "Complete Gherkin feature file with multiple scenarios",
    codeSnippet: `Feature: Product Price Filter
  As a customer browsing the e-commerce store
  I want to filter products by price range
  So that I can find products within my budget

  Background:
    Given I am on the products page
    And there are products with various prices

  @smoke @filter
  Scenario: Filter products with minimum price only
    When I set minimum price to "$50"
    And I click Apply Filter
    Then all displayed products should have price >= $50
    And the filter badge should show "Min: $50"

  @smoke @filter
  Scenario: Filter products with maximum price only
    When I set maximum price to "$100"
    And I click Apply Filter
    Then all displayed products should have price <= $100
    And the filter badge should show "Max: $100"

  @regression @filter
  Scenario Outline: Filter products with price range
    When I set minimum price to "<min>"
    And I set maximum price to "<max>"
    And I click Apply Filter
    Then all displayed products should have price between <min> and <max>
    And I should see <expected_count> products

    Examples:
      | min  | max   | expected_count |
      | $0   | $50   | 15             |
      | $50  | $100  | 23             |
      | $100 | $500  | 12             |

  @edge-case @filter
  Scenario: Filter with invalid price range
    When I set minimum price to "$100"
    And I set maximum price to "$50"
    And I click Apply Filter
    Then I should see error message "Minimum price cannot exceed maximum price"
    And the filter should not be applied

  @edge-case @filter
  Scenario: Clear price filter
    Given products are filtered by price range "$50" to "$100"
    When I click Clear Filter
    Then all products should be displayed
    And no filter badge should be visible`,
    explanation: "AI analyzes the user story to understand the feature intent, then generates comprehensive Gherkin scenarios covering: happy paths, edge cases, error handling, and data-driven tests with examples. It includes proper tagging for test organization."
  },
  {
    title: "AI Optimizing Test Data",
    scenario: "AI generates optimal test data sets that maximize coverage while minimizing redundancy.",
    sampleInput: "Registration form with: name, email, password, age, country fields",
    expectedOutput: "Optimized test data covering boundary values, equivalence partitions",
    codeSnippet: `public class AITestDataGenerator {
    
    /**
     * AI-generated optimal test data using pairwise testing
     * and boundary value analysis
     */
    public List<RegistrationTestData> generateOptimalTestData() {
        return Arrays.asList(
            // Valid cases - equivalence partitions
            new RegistrationTestData(
                "John Doe",           // Valid name
                "john@example.com",   // Valid email
                "SecurePass123!",     // Valid password
                25,                   // Valid age (mid-range)
                "USA"                 // Valid country
            ),
            
            // Boundary values - Age field
            new RegistrationTestData("User1", "u1@test.com", "Pass123!", 18, "UK"),  // Min age
            new RegistrationTestData("User2", "u2@test.com", "Pass123!", 65, "CA"),  // Max age
            new RegistrationTestData("User3", "u3@test.com", "Pass123!", 17, "AU"),  // Below min
            new RegistrationTestData("User4", "u4@test.com", "Pass123!", 66, "DE"),  // Above max
            
            // Name field edge cases
            new RegistrationTestData("A", "a@test.com", "Pass123!", 30, "FR"),       // Min length
            new RegistrationTestData("A".repeat(50), "b@t.com", "Pass123!", 30, "IN"), // Max length
            
            // Email edge cases
            new RegistrationTestData("User", "a@b.co", "Pass123!", 30, "JP"),        // Min valid email
            new RegistrationTestData("User", "invalid-email", "Pass123!", 30, "BR"), // Invalid format
            
            // Password edge cases
            new RegistrationTestData("User", "pwd@test.com", "Short1!", 30, "MX"),   // Min length
            new RegistrationTestData("User", "pwd@test.com", "NoSpecialChar1", 30, "ES"), // Missing special
            new RegistrationTestData("User", "pwd@test.com", "noupperlower1!", 30, "IT"), // Missing uppercase
            
            // Special characters & internationalization
            new RegistrationTestData("José García", "jose@test.com", "Pass123!", 30, "ES"),
            new RegistrationTestData("山田太郎", "yamada@test.jp", "Pass123!", 30, "JP"),
            
            // SQL injection attempt
            new RegistrationTestData("'; DROP TABLE users;--", "hack@test.com", "Pass123!", 30, "US"),
            
            // XSS attempt
            new RegistrationTestData("<script>alert('xss')</script>", "xss@test.com", "Pass123!", 30, "US")
        );
    }
    
    /**
     * AI calculates coverage metrics
     */
    public CoverageReport calculateCoverage(List<RegistrationTestData> testData) {
        CoverageReport report = new CoverageReport();
        
        report.setEquivalencePartitionsCovered(95.0);
        report.setBoundaryValuesCovered(100.0);
        report.setNegativeScenariosCovered(90.0);
        report.setSecurityTestsCovered(80.0);
        report.setInternationalizationCovered(70.0);
        
        report.setOverallCoverage(
            calculateWeightedAverage(report)
        );
        
        return report;
    }
}`,
    explanation: "AI applies testing techniques automatically: equivalence partitioning, boundary value analysis, pairwise testing, and security considerations. It generates minimal but comprehensive test data sets that maximize code coverage while avoiding redundant tests."
  }
];

export const aiBugDetectionGuide = {
  bugTypes: [
    {
      type: "UI Anomalies",
      description: "Visual defects like wrong colors, fonts, sizes, or styling issues",
      howAIDetects: "Computer vision compares pixel-level differences against baselines, detecting color shifts >5%, font mismatches, and spacing inconsistencies"
    },
    {
      type: "Missing Elements",
      description: "Expected UI components not rendering on the page",
      howAIDetects: "AI maintains expected element registry and validates presence using multiple locator strategies. Alerts when critical elements are absent"
    },
    {
      type: "Broken Flows",
      description: "User journey interruptions due to errors, infinite loops, or dead ends",
      howAIDetects: "Behavioral AI tracks user flow patterns and flags deviations: unexpected redirects, missing navigation, or stuck states"
    },
    {
      type: "API Mismatches",
      description: "Discrepancies between API responses and UI display",
      howAIDetects: "Simultaneous capture of API data and UI content, with AI comparing values, formats, and handling of null/empty states"
    },
    {
      type: "Performance Degradation",
      description: "Slower response times, increased load times, or resource bottlenecks",
      howAIDetects: "ML models trained on baseline performance metrics flag anomalies: >20% slower load times, memory leaks, or CPU spikes"
    },
    {
      type: "Test Flakiness",
      description: "Intermittent test failures not caused by actual bugs",
      howAIDetects: "Statistical analysis of test history identifies patterns: timing issues, resource contention, or environmental factors"
    },
    {
      type: "Visual Misalignment",
      description: "Layout shifts, overlapping elements, or responsive design breaks",
      howAIDetects: "Layout analysis algorithms detect element overlap, calculate alignment scores, and compare across viewport sizes"
    },
    {
      type: "Slow-Loading Elements",
      description: "Components that take unusually long to render or become interactive",
      howAIDetects: "Performance monitoring tracks Time to Interactive (TTI) per element, flagging outliers and bottlenecks"
    },
    {
      type: "DOM Instability",
      description: "Frequent DOM mutations causing element location failures",
      howAIDetects: "Mutation observers track DOM changes, AI correlates with test failures to identify unstable page sections"
    }
  ],
  
  detectionMethods: [
    {
      method: "Computer Vision",
      description: "AI analyzes screenshots using image recognition to detect visual bugs that traditional automation would miss.",
      examples: [
        "Detecting button color changed from #4CAF50 to #45a049",
        "Identifying text overflow in responsive layouts",
        "Finding missing icons or broken images"
      ]
    },
    {
      method: "Behavioral Learning",
      description: "ML models learn normal user behavior patterns and flag anomalies indicating potential bugs.",
      examples: [
        "User session ending abruptly on checkout page (80% vs 5% baseline)",
        "Unusual increase in 'Back' button clicks indicating confusion",
        "Error message appearance rate spike"
      ]
    },
    {
      method: "Pattern Detection",
      description: "AI identifies recurring patterns in logs, errors, and test results to predict and detect bugs.",
      examples: [
        "NullPointerException appearing after specific user action sequence",
        "Memory usage pattern indicating leak",
        "Correlation between deployment time and error rates"
      ]
    },
    {
      method: "Machine Learning Models",
      description: "Trained models predict bug probability, classify defect types, and prioritize fixes.",
      examples: [
        "Random Forest model predicting bug-prone modules with 85% accuracy",
        "Classification model categorizing bugs by severity",
        "Regression model estimating fix effort"
      ]
    }
  ],
  
  realTimeExamples: [
    {
      scenario: "AI Identifying Button Not Clickable",
      description: "Submit button exists in DOM but has pointer-events: none or is covered by overlay",
      aiDetection: "AI attempts click, detects no state change, analyzes CSS properties, and identifies the overlay element blocking interaction",
      resolution: "Report includes: element properties, blocking element details, screenshot with highlight, and suggested fix (remove overlay or adjust z-index)"
    },
    {
      scenario: "AI Detecting Layout Shifts",
      description: "Page content jumps after images/ads load, causing poor user experience",
      aiDetection: "Cumulative Layout Shift (CLS) monitoring detects >0.1 shift score. AI correlates with specific elements causing reflow",
      resolution: "Report identifies: shifting elements, trigger events, timing, and recommendations (add dimension attributes, use skeleton loaders)"
    },
    {
      scenario: "AI Catching Hidden Errors Through Logs",
      description: "Silent JavaScript errors not visible to users but logged in console",
      aiDetection: "AI monitors console.error(), network failures, and unhandled promise rejections during test execution",
      resolution: "Aggregated error report with: stack traces, affected user journeys, frequency, and severity classification"
    },
    {
      scenario: "AI Finding Broken API Responses",
      description: "API returns 200 OK but with error message in body, or missing expected data",
      aiDetection: "Schema validation catches structure issues. Semantic analysis detects error keywords in success responses",
      resolution: "Report shows: expected vs actual response, field-by-field comparison, and affected test scenarios"
    },
    {
      scenario: "AI Finding Untranslated Text in UI",
      description: "Internationalized app shows translation keys or English text in non-English locale",
      aiDetection: "AI language detection identifies text not matching expected locale. Pattern matching finds translation key formats (e.g., 'key.path.label')",
      resolution: "Report lists: untranslated strings, their locations, screenshots, and suggested translation lookup"
    }
  ],
  
  testerGuidelines: [
    {
      title: "Validate AI Recommendations",
      description: "Always verify AI-identified bugs before reporting. AI can have false positives.",
      tips: [
        "Reproduce the issue manually",
        "Check if it's environment-specific",
        "Verify against requirements",
        "Confirm with different browsers/devices"
      ]
    },
    {
      title: "Override Incorrect Suggestions",
      description: "AI may misclassify intentional changes as bugs. Use your domain knowledge.",
      tips: [
        "Update baselines after approved UI changes",
        "Mark false positives to train the AI",
        "Adjust sensitivity thresholds appropriately",
        "Document exceptions for future reference"
      ]
    },
    {
      title: "Apply Critical Thinking",
      description: "AI augments but doesn't replace human judgment. Focus on business impact.",
      tips: [
        "Prioritize user-impacting issues over cosmetic ones",
        "Consider context AI might miss",
        "Evaluate severity beyond AI classification",
        "Think about edge cases AI hasn't learned"
      ]
    },
    {
      title: "Incorporate AI into Existing Frameworks",
      description: "Integrate AI tools with your current test infrastructure for maximum value.",
      tips: [
        "Add AI validations to existing test suites",
        "Use AI insights in test planning",
        "Combine AI reports with traditional bug tracking",
        "Train team on AI tool capabilities and limitations"
      ]
    }
  ]
};
