export interface RequirementDocument {
  id: string;
  domain: string;
  title: string;
  projectName: string;
  version: string;
  description: string;
  objectives: string[];
  functionalRequirements: {
    id: string;
    title: string;
    description: string;
    acceptanceCriteria: string[];
  }[];
  nonFunctionalRequirements: string[];
  assumptions: string[];
  constraints: string[];
}

export interface DerivedTestStrategy {
  scope: string;
  objectives: string[];
  testLevels: string[];
  testTypes: string[];
  entryExitCriteria: {
    entry: string[];
    exit: string[];
  };
  riskAnalysis: {
    risk: string;
    mitigation: string;
  }[];
  testEnvironment: string;
  tools: string[];
}

export interface DerivedTestPlan {
  testApproach: string;
  schedule: {
    phase: string;
    duration: string;
    activities: string[];
  }[];
  resources: string[];
  deliverables: string[];
  defectManagement: string;
}

export interface DerivedTestScenario {
  scenarioId: string;
  requirement: string;
  scenario: string;
}

export interface DerivedTestCase {
  id: string;
  scenario: string;
  title: string;
  preconditions: string;
  steps: string[];
  testData: string;
  expectedResult: string;
  priority: string;
}

export interface PracticeProject {
  requirementDocument: RequirementDocument;
  testStrategy: DerivedTestStrategy;
  testPlan: DerivedTestPlan;
  testScenarios: DerivedTestScenario[];
  testCases: DerivedTestCase[];
}

export const practiceProjects: PracticeProject[] = [
  // Shopping Cart / E-commerce
  {
    requirementDocument: {
      id: "REQ-ECOM-001",
      domain: "E-commerce / Shopping Cart",
      title: "Online Shopping Cart Module",
      projectName: "ShopEase E-commerce Platform",
      version: "1.0",
      description: "Develop an online shopping cart module that allows customers to browse products, add items to cart, apply coupons, and complete checkout with multiple payment options.",
      objectives: [
        "Enable users to add, update, and remove products from shopping cart",
        "Implement coupon/discount code functionality",
        "Support multiple payment methods (Credit Card, PayPal, UPI)",
        "Provide order summary with tax and shipping calculations",
        "Send order confirmation via email and SMS"
      ],
      functionalRequirements: [
        {
          id: "FR-001",
          title: "Add to Cart",
          description: "Users should be able to add products to cart from product listing or detail page",
          acceptanceCriteria: [
            "Cart icon shows updated item count",
            "Product appears in cart with correct quantity and price",
            "Out of stock products cannot be added",
            "Maximum 10 units per product can be added"
          ]
        },
        {
          id: "FR-002",
          title: "Cart Management",
          description: "Users should be able to view, update quantity, and remove items from cart",
          acceptanceCriteria: [
            "Cart displays product image, name, price, quantity, and subtotal",
            "Quantity can be increased/decreased using +/- buttons",
            "Remove button deletes item from cart",
            "Cart total updates in real-time"
          ]
        },
        {
          id: "FR-003",
          title: "Coupon Application",
          description: "Users can apply promotional coupon codes for discounts",
          acceptanceCriteria: [
            "Valid coupon shows discount amount",
            "Invalid/expired coupon shows error message",
            "Only one coupon allowed per order",
            "Minimum order value requirements enforced"
          ]
        },
        {
          id: "FR-004",
          title: "Checkout Process",
          description: "Complete order placement with shipping and payment",
          acceptanceCriteria: [
            "Shipping address form with validation",
            "Payment method selection",
            "Order summary before confirmation",
            "Order confirmation number generated"
          ]
        }
      ],
      nonFunctionalRequirements: [
        "Page load time should be under 3 seconds",
        "Cart should persist across browser sessions for logged-in users",
        "Support 1000 concurrent users",
        "99.9% uptime availability"
      ],
      assumptions: [
        "User is registered and logged in",
        "Product catalog is already available",
        "Payment gateway integration is complete"
      ],
      constraints: [
        "Must work on mobile and desktop browsers",
        "Cart expires after 30 days of inactivity",
        "Maximum 50 items per cart"
      ]
    },
    testStrategy: {
      scope: "Testing of Shopping Cart module including add to cart, cart management, coupon application, and checkout functionality",
      objectives: [
        "Verify all functional requirements are implemented correctly",
        "Ensure cart calculations are accurate",
        "Validate payment gateway integration",
        "Test across multiple browsers and devices"
      ],
      testLevels: ["Unit Testing", "Integration Testing", "System Testing", "UAT"],
      testTypes: ["Functional Testing", "UI Testing", "Performance Testing", "Security Testing", "Usability Testing"],
      entryExitCriteria: {
        entry: [
          "Requirements document approved",
          "Test environment is set up",
          "Test data is available",
          "Build deployed to test environment"
        ],
        exit: [
          "All P1 and P2 test cases passed",
          "No critical or major defects open",
          "95% test case execution complete",
          "UAT sign-off received"
        ]
      },
      riskAnalysis: [
        { risk: "Payment gateway downtime", mitigation: "Use payment gateway sandbox for testing" },
        { risk: "High traffic during sales", mitigation: "Conduct load testing with 2x expected users" },
        { risk: "Cart data loss", mitigation: "Test session persistence thoroughly" },
        { risk: "Price calculation errors", mitigation: "Create comprehensive calculation test scenarios" }
      ],
      testEnvironment: "Staging server with production-like configuration, connected to payment sandbox",
      tools: ["Selenium for UI automation", "JMeter for performance testing", "Postman for API testing", "JIRA for defect tracking"]
    },
    testPlan: {
      testApproach: "Risk-based testing approach focusing on critical checkout and payment functionality first, followed by cart management features",
      schedule: [
        { phase: "Test Planning", duration: "3 days", activities: ["Review requirements", "Create test scenarios", "Set up test environment"] },
        { phase: "Test Design", duration: "5 days", activities: ["Write test cases", "Prepare test data", "Review test cases"] },
        { phase: "Test Execution", duration: "10 days", activities: ["Execute test cases", "Log defects", "Retest fixes"] },
        { phase: "UAT Support", duration: "3 days", activities: ["Support UAT team", "Address feedback", "Final sign-off"] }
      ],
      resources: ["2 QA Engineers", "1 Automation Engineer", "Test environment access", "Payment sandbox credentials"],
      deliverables: ["Test Plan document", "Test Cases", "Test Execution Report", "Defect Report", "UAT Sign-off"],
      defectManagement: "Defects logged in JIRA with severity (Critical/Major/Minor/Trivial) and priority (P1/P2/P3). Critical defects must be fixed within 24 hours."
    },
    testScenarios: [
      { scenarioId: "TS-001", requirement: "FR-001: Add to Cart", scenario: "Verify user can add a product to cart from product listing page" },
      { scenarioId: "TS-002", requirement: "FR-001: Add to Cart", scenario: "Verify cart icon count updates when product is added" },
      { scenarioId: "TS-003", requirement: "FR-001: Add to Cart", scenario: "Verify out of stock products show disabled Add to Cart button" },
      { scenarioId: "TS-004", requirement: "FR-002: Cart Management", scenario: "Verify user can increase product quantity in cart" },
      { scenarioId: "TS-005", requirement: "FR-002: Cart Management", scenario: "Verify user can remove product from cart" },
      { scenarioId: "TS-006", requirement: "FR-003: Coupon Application", scenario: "Verify valid coupon code applies discount correctly" },
      { scenarioId: "TS-007", requirement: "FR-003: Coupon Application", scenario: "Verify expired coupon shows appropriate error message" },
      { scenarioId: "TS-008", requirement: "FR-004: Checkout", scenario: "Verify user can complete checkout with credit card payment" },
      { scenarioId: "TS-009", requirement: "FR-004: Checkout", scenario: "Verify order confirmation email is sent after successful order" },
      { scenarioId: "TS-010", requirement: "FR-004: Checkout", scenario: "Verify order fails gracefully when payment is declined" }
    ],
    testCases: [
      {
        id: "TC-ECOM-001",
        scenario: "TS-001",
        title: "Add single product to cart from listing page",
        preconditions: "User is logged in, Product is in stock",
        steps: ["Navigate to product listing page", "Click 'Add to Cart' button for any product", "Verify success message appears", "Click cart icon"],
        testData: "Product: Laptop, Price: $999",
        expectedResult: "Product is added to cart with quantity 1, cart icon shows '1'",
        priority: "P1"
      },
      {
        id: "TC-ECOM-002",
        scenario: "TS-004",
        title: "Increase product quantity in cart",
        preconditions: "User has 1 item in cart",
        steps: ["Navigate to cart page", "Click '+' button next to product quantity", "Verify quantity changes to 2", "Verify subtotal is updated"],
        testData: "Initial Qty: 1, Product Price: $50",
        expectedResult: "Quantity becomes 2, subtotal shows $100",
        priority: "P1"
      },
      {
        id: "TC-ECOM-003",
        scenario: "TS-006",
        title: "Apply valid coupon code",
        preconditions: "Cart total is $100, Valid coupon 'SAVE10' exists (10% off)",
        steps: ["Navigate to cart page", "Enter coupon code 'SAVE10'", "Click 'Apply' button", "Verify discount is applied"],
        testData: "Coupon: SAVE10, Discount: 10%",
        expectedResult: "Discount of $10 applied, new total is $90",
        priority: "P1"
      },
      {
        id: "TC-ECOM-004",
        scenario: "TS-008",
        title: "Complete checkout with credit card",
        preconditions: "Cart has items, Shipping address saved",
        steps: ["Click 'Proceed to Checkout'", "Select Credit Card payment", "Enter card details", "Click 'Place Order'", "Verify order confirmation"],
        testData: "Card: 4111111111111111, Exp: 12/25, CVV: 123",
        expectedResult: "Order placed successfully, confirmation number displayed",
        priority: "P1"
      },
      {
        id: "TC-ECOM-005",
        scenario: "TS-007",
        title: "Apply expired coupon code",
        preconditions: "Cart has items, Coupon 'EXPIRED20' has expired",
        steps: ["Navigate to cart page", "Enter coupon code 'EXPIRED20'", "Click 'Apply' button"],
        testData: "Coupon: EXPIRED20 (expired on previous date)",
        expectedResult: "Error message: 'This coupon has expired'",
        priority: "P2"
      }
    ]
  },

  // Banking
  {
    requirementDocument: {
      id: "REQ-BANK-001",
      domain: "Banking",
      title: "Fund Transfer Module",
      projectName: "SecureBank Online Banking",
      version: "2.0",
      description: "Develop a secure fund transfer module that allows customers to transfer money between accounts, to other bank accounts (NEFT/RTGS/IMPS), and schedule recurring transfers.",
      objectives: [
        "Enable instant transfers between own accounts",
        "Support NEFT, RTGS, and IMPS transfers to other banks",
        "Implement beneficiary management",
        "Provide transaction history and e-receipts",
        "Support scheduled and recurring transfers"
      ],
      functionalRequirements: [
        {
          id: "FR-001",
          title: "Own Account Transfer",
          description: "Transfer funds between user's own accounts instantly",
          acceptanceCriteria: [
            "Show all user's accounts in dropdown",
            "Validate sufficient balance before transfer",
            "Instant transfer completion",
            "SMS and email notification sent"
          ]
        },
        {
          id: "FR-002",
          title: "Beneficiary Management",
          description: "Add, modify, and delete beneficiaries for fund transfer",
          acceptanceCriteria: [
            "IFSC code validation",
            "Account number verification",
            "24-hour cooling period for new beneficiaries",
            "Maximum 20 beneficiaries allowed"
          ]
        },
        {
          id: "FR-003",
          title: "NEFT/RTGS/IMPS Transfer",
          description: "Transfer funds to other bank accounts",
          acceptanceCriteria: [
            "Show transfer mode options based on amount",
            "Display applicable charges",
            "Real-time status tracking",
            "Transaction reference number generated"
          ]
        },
        {
          id: "FR-004",
          title: "Transaction Authentication",
          description: "Secure transfer with OTP verification",
          acceptanceCriteria: [
            "OTP sent to registered mobile",
            "OTP valid for 5 minutes",
            "3 invalid OTP attempts lock transaction",
            "Resend OTP option available"
          ]
        }
      ],
      nonFunctionalRequirements: [
        "All transactions must be encrypted with 256-bit SSL",
        "Transaction completion within 30 seconds",
        "99.99% uptime for fund transfer service",
        "Comply with RBI guidelines for digital transactions"
      ],
      assumptions: [
        "User has completed KYC verification",
        "Core banking system is integrated",
        "SMS gateway is operational"
      ],
      constraints: [
        "Daily transfer limit of ₹10,00,000",
        "RTGS minimum amount ₹2,00,000",
        "NEFT available during banking hours only"
      ]
    },
    testStrategy: {
      scope: "End-to-end testing of Fund Transfer module including own account transfer, beneficiary management, inter-bank transfers, and authentication",
      objectives: [
        "Verify secure fund transfer between accounts",
        "Validate all transfer modes (NEFT/RTGS/IMPS)",
        "Ensure OTP authentication works correctly",
        "Test transaction limits and restrictions"
      ],
      testLevels: ["Unit Testing", "Integration Testing", "System Testing", "Security Testing", "UAT"],
      testTypes: ["Functional Testing", "Security Testing", "Performance Testing", "Regression Testing", "Compliance Testing"],
      entryExitCriteria: {
        entry: [
          "Requirement document signed off",
          "Test environment connected to core banking sandbox",
          "Security certificates installed",
          "Test accounts created with various balance levels"
        ],
        exit: [
          "100% critical path test cases passed",
          "Zero security vulnerabilities",
          "Performance benchmarks met",
          "RBI compliance verified"
        ]
      },
      riskAnalysis: [
        { risk: "Unauthorized access to accounts", mitigation: "Implement multi-factor authentication testing" },
        { risk: "Transaction data manipulation", mitigation: "Test encryption and data integrity checks" },
        { risk: "System timeout during transfer", mitigation: "Test rollback mechanisms" },
        { risk: "Incorrect amount deduction", mitigation: "Extensive calculation testing with edge cases" }
      ],
      testEnvironment: "Isolated banking test environment with mock core banking system and SMS simulator",
      tools: ["OWASP ZAP for security testing", "LoadRunner for performance", "Selenium for automation", "Banking test data generator"]
    },
    testPlan: {
      testApproach: "Security-first testing approach with focus on authentication, authorization, and transaction integrity. All tests to be executed in isolated environment.",
      schedule: [
        { phase: "Security Assessment", duration: "5 days", activities: ["Penetration testing", "Vulnerability scan", "Security code review"] },
        { phase: "Functional Testing", duration: "8 days", activities: ["Execute functional test cases", "Integration testing with core banking"] },
        { phase: "Performance Testing", duration: "3 days", activities: ["Load testing", "Stress testing", "Endurance testing"] },
        { phase: "UAT & Compliance", duration: "5 days", activities: ["Business validation", "RBI compliance check", "Final sign-off"] }
      ],
      resources: ["3 QA Engineers", "1 Security Tester", "1 Performance Tester", "Core banking sandbox access"],
      deliverables: ["Security Test Report", "Functional Test Report", "Performance Benchmark Report", "RBI Compliance Certificate"],
      defectManagement: "Security defects are P0 priority. All defects must include transaction logs and screenshots. Daily defect triage meeting required."
    },
    testScenarios: [
      { scenarioId: "TS-001", requirement: "FR-001: Own Account Transfer", scenario: "Verify user can transfer funds between own savings and current account" },
      { scenarioId: "TS-002", requirement: "FR-001: Own Account Transfer", scenario: "Verify transfer fails when balance is insufficient" },
      { scenarioId: "TS-003", requirement: "FR-002: Beneficiary Management", scenario: "Verify user can add new beneficiary with valid IFSC" },
      { scenarioId: "TS-004", requirement: "FR-002: Beneficiary Management", scenario: "Verify 24-hour cooling period is enforced for new beneficiary" },
      { scenarioId: "TS-005", requirement: "FR-003: NEFT Transfer", scenario: "Verify NEFT transfer to other bank beneficiary" },
      { scenarioId: "TS-006", requirement: "FR-003: RTGS Transfer", scenario: "Verify RTGS is only available for amounts >= ₹2,00,000" },
      { scenarioId: "TS-007", requirement: "FR-004: OTP Verification", scenario: "Verify OTP is sent to registered mobile number" },
      { scenarioId: "TS-008", requirement: "FR-004: OTP Verification", scenario: "Verify transaction is blocked after 3 invalid OTP attempts" }
    ],
    testCases: [
      {
        id: "TC-BANK-001",
        scenario: "TS-001",
        title: "Transfer between own accounts",
        preconditions: "User logged in, has Savings (₹50,000) and Current account",
        steps: ["Select 'Own Account Transfer'", "Choose From: Savings, To: Current", "Enter amount ₹10,000", "Enter OTP", "Confirm transfer"],
        testData: "Amount: ₹10,000, From: Savings, To: Current",
        expectedResult: "Transfer successful, Savings balance: ₹40,000, Current balance increased by ₹10,000",
        priority: "P1"
      },
      {
        id: "TC-BANK-002",
        scenario: "TS-002",
        title: "Transfer with insufficient balance",
        preconditions: "User has Savings account with ₹5,000 balance",
        steps: ["Select 'Own Account Transfer'", "Enter amount ₹10,000", "Click Transfer"],
        testData: "Amount: ₹10,000, Balance: ₹5,000",
        expectedResult: "Error: 'Insufficient balance. Available balance: ₹5,000'",
        priority: "P1"
      },
      {
        id: "TC-BANK-003",
        scenario: "TS-003",
        title: "Add new beneficiary",
        preconditions: "User logged in, less than 20 beneficiaries",
        steps: ["Navigate to Beneficiary Management", "Click 'Add Beneficiary'", "Enter Name, Account Number, IFSC", "Submit"],
        testData: "Name: John Doe, Account: 1234567890, IFSC: HDFC0001234",
        expectedResult: "Beneficiary added with 'Active after 24 hours' status",
        priority: "P1"
      },
      {
        id: "TC-BANK-004",
        scenario: "TS-008",
        title: "Block after 3 invalid OTP attempts",
        preconditions: "User initiating fund transfer",
        steps: ["Initiate transfer", "Enter wrong OTP 3 times"],
        testData: "Wrong OTP: 000000 (3 times)",
        expectedResult: "Transaction blocked, message: 'Transaction locked due to multiple invalid attempts'",
        priority: "P1"
      }
    ]
  },

  // Telecom
  {
    requirementDocument: {
      id: "REQ-TEL-001",
      domain: "Telecom",
      title: "Prepaid Recharge Module",
      projectName: "TeleConnect Mobile App",
      version: "1.5",
      description: "Develop a prepaid mobile recharge module that allows users to recharge their mobile number, select plans, view usage, and manage auto-recharge settings.",
      objectives: [
        "Enable quick recharge with saved payment methods",
        "Display available plans with data, calls, and validity",
        "Show real-time balance and usage statistics",
        "Implement auto-recharge functionality",
        "Support recharge for other numbers"
      ],
      functionalRequirements: [
        {
          id: "FR-001",
          title: "Quick Recharge",
          description: "Recharge with preset amounts or custom amount",
          acceptanceCriteria: [
            "Preset amounts: ₹49, ₹99, ₹199, ₹299, ₹499",
            "Custom amount between ₹10 and ₹5000",
            "Recharge confirmation within 30 seconds",
            "Transaction receipt generated"
          ]
        },
        {
          id: "FR-002",
          title: "Plan Selection",
          description: "Browse and select from available recharge plans",
          acceptanceCriteria: [
            "Filter plans by category (Data, Talktime, Combo)",
            "Display plan details (data, calls, SMS, validity)",
            "Sort by price, data, validity",
            "Show recommended plans based on usage"
          ]
        },
        {
          id: "FR-003",
          title: "Usage Dashboard",
          description: "View current balance and usage statistics",
          acceptanceCriteria: [
            "Show remaining data, calls, SMS",
            "Display validity expiry date",
            "Usage history for last 30 days",
            "Low balance alerts"
          ]
        },
        {
          id: "FR-004",
          title: "Auto-Recharge",
          description: "Set up automatic recharge when balance falls below threshold",
          acceptanceCriteria: [
            "Set minimum balance threshold",
            "Select recharge amount or plan",
            "Choose payment method",
            "Enable/disable anytime"
          ]
        }
      ],
      nonFunctionalRequirements: [
        "Recharge should complete within 30 seconds",
        "App should work on 2G network",
        "Support offline mode for viewing balance",
        "Battery efficient background processes"
      ],
      assumptions: [
        "User mobile number is verified",
        "Payment gateway integration complete",
        "Operator APIs are available"
      ],
      constraints: [
        "Maximum recharge ₹5000 per transaction",
        "Auto-recharge maximum 3 times per day",
        "Recharge history limited to 90 days"
      ]
    },
    testStrategy: {
      scope: "Complete testing of Prepaid Recharge module covering recharge flow, plan selection, usage dashboard, and auto-recharge features",
      objectives: [
        "Verify recharge completion across all payment methods",
        "Validate plan details accuracy with operator data",
        "Test auto-recharge trigger conditions",
        "Ensure app performance on slow networks"
      ],
      testLevels: ["Unit Testing", "Integration Testing", "System Testing", "Performance Testing", "UAT"],
      testTypes: ["Functional Testing", "API Testing", "Performance Testing", "Usability Testing", "Compatibility Testing"],
      entryExitCriteria: {
        entry: [
          "API documentation available",
          "Test mobile numbers provisioned",
          "Payment sandbox configured",
          "Test build deployed to devices"
        ],
        exit: [
          "All recharge flows working end-to-end",
          "API response times within SLA",
          "No P1/P2 defects open",
          "Compatibility verified on target devices"
        ]
      },
      riskAnalysis: [
        { risk: "Recharge failure due to operator downtime", mitigation: "Test retry mechanism and failure handling" },
        { risk: "Incorrect plan data displayed", mitigation: "Regular sync testing with operator systems" },
        { risk: "Auto-recharge overcharging user", mitigation: "Test daily limit enforcement" },
        { risk: "Payment success but recharge fails", mitigation: "Test refund and reversal scenarios" }
      ],
      testEnvironment: "Android and iOS devices on multiple network conditions, operator sandbox environment",
      tools: ["Appium for mobile automation", "Charles Proxy for API testing", "Firebase Test Lab for device testing"]
    },
    testPlan: {
      testApproach: "Mobile-first testing approach with emphasis on various network conditions and device compatibility",
      schedule: [
        { phase: "API Testing", duration: "4 days", activities: ["Test operator APIs", "Validate response formats", "Error handling verification"] },
        { phase: "Functional Testing", duration: "6 days", activities: ["Test all recharge flows", "Plan selection testing", "Auto-recharge testing"] },
        { phase: "Compatibility Testing", duration: "3 days", activities: ["Test on multiple Android/iOS versions", "Network condition testing"] },
        { phase: "UAT", duration: "3 days", activities: ["Beta user testing", "Feedback incorporation", "Release sign-off"] }
      ],
      resources: ["2 Mobile QA Engineers", "10 test devices (Android + iOS)", "Multiple SIM cards", "Network throttling tools"],
      deliverables: ["API Test Report", "Device Compatibility Matrix", "Performance Report", "UAT Report"],
      defectManagement: "Defects categorized by device/OS version. Reproduction steps must include device info, OS version, and network type."
    },
    testScenarios: [
      { scenarioId: "TS-001", requirement: "FR-001: Quick Recharge", scenario: "Verify user can recharge with preset amount ₹199" },
      { scenarioId: "TS-002", requirement: "FR-001: Quick Recharge", scenario: "Verify custom amount recharge between ₹10-₹5000" },
      { scenarioId: "TS-003", requirement: "FR-002: Plan Selection", scenario: "Verify plans can be filtered by Data category" },
      { scenarioId: "TS-004", requirement: "FR-002: Plan Selection", scenario: "Verify plan details match operator data" },
      { scenarioId: "TS-005", requirement: "FR-003: Usage Dashboard", scenario: "Verify remaining data/calls display correctly" },
      { scenarioId: "TS-006", requirement: "FR-003: Usage Dashboard", scenario: "Verify low balance alert is triggered" },
      { scenarioId: "TS-007", requirement: "FR-004: Auto-Recharge", scenario: "Verify auto-recharge triggers at set threshold" },
      { scenarioId: "TS-008", requirement: "FR-004: Auto-Recharge", scenario: "Verify auto-recharge respects daily limit of 3" }
    ],
    testCases: [
      {
        id: "TC-TEL-001",
        scenario: "TS-001",
        title: "Recharge with preset amount",
        preconditions: "User logged in, payment method saved",
        steps: ["Tap 'Quick Recharge'", "Select ₹199", "Confirm payment", "Verify recharge success"],
        testData: "Amount: ₹199, Payment: Saved UPI",
        expectedResult: "Recharge successful, balance updated, receipt shown",
        priority: "P1"
      },
      {
        id: "TC-TEL-002",
        scenario: "TS-002",
        title: "Custom amount recharge",
        preconditions: "User logged in",
        steps: ["Tap 'Quick Recharge'", "Enter ₹350", "Select payment method", "Complete payment"],
        testData: "Amount: ₹350",
        expectedResult: "Recharge of ₹350 successful",
        priority: "P1"
      },
      {
        id: "TC-TEL-003",
        scenario: "TS-007",
        title: "Auto-recharge trigger test",
        preconditions: "Auto-recharge enabled, threshold: ₹20, recharge amount: ₹99",
        steps: ["Consume balance to ₹15", "Wait for auto-recharge trigger", "Verify recharge occurs"],
        testData: "Threshold: ₹20, Amount: ₹99",
        expectedResult: "Auto-recharge of ₹99 triggered when balance reached ₹15",
        priority: "P1"
      },
      {
        id: "TC-TEL-004",
        scenario: "TS-003",
        title: "Filter plans by Data category",
        preconditions: "User on plan selection screen",
        steps: ["Tap filter icon", "Select 'Data Only' category", "Verify filtered results"],
        testData: "Category: Data Only",
        expectedResult: "Only data-only plans displayed, no talktime plans shown",
        priority: "P2"
      }
    ]
  },

  // Insurance
  {
    requirementDocument: {
      id: "REQ-INS-001",
      domain: "Insurance",
      title: "Health Insurance Claim Module",
      projectName: "HealthGuard Insurance Portal",
      version: "3.0",
      description: "Develop a comprehensive health insurance claim module that allows policyholders to file claims, upload documents, track claim status, and receive reimbursements.",
      objectives: [
        "Enable online claim filing with document upload",
        "Implement real-time claim status tracking",
        "Support both cashless and reimbursement claims",
        "Automate claim validation and processing",
        "Provide claim history and analytics"
      ],
      functionalRequirements: [
        {
          id: "FR-001",
          title: "Claim Filing",
          description: "File new insurance claim with required documents",
          acceptanceCriteria: [
            "Select claim type (Hospitalization, OPD, Maternity)",
            "Enter treatment details and hospital information",
            "Upload required documents (bills, prescriptions, discharge summary)",
            "Submit claim for processing"
          ]
        },
        {
          id: "FR-002",
          title: "Document Management",
          description: "Upload and manage claim supporting documents",
          acceptanceCriteria: [
            "Support PDF, JPG, PNG formats",
            "Maximum file size 5MB per document",
            "Document verification status shown",
            "Re-upload option for rejected documents"
          ]
        },
        {
          id: "FR-003",
          title: "Claim Status Tracking",
          description: "Track claim through various processing stages",
          acceptanceCriteria: [
            "Display current claim status with timestamp",
            "Show expected processing time",
            "Notify via SMS/email on status change",
            "Display rejection reason if applicable"
          ]
        },
        {
          id: "FR-004",
          title: "Reimbursement Processing",
          description: "Process approved claims for payment",
          acceptanceCriteria: [
            "Show approved amount with breakdown",
            "Support NEFT transfer to registered bank account",
            "Generate claim settlement letter",
            "Update claim status to 'Settled'"
          ]
        }
      ],
      nonFunctionalRequirements: [
        "Document upload should complete within 60 seconds for 5MB file",
        "Claim data must be encrypted at rest and in transit",
        "System should support 500 concurrent claim submissions",
        "Comply with IRDAI regulations"
      ],
      assumptions: [
        "Policy is active at time of claim",
        "Policyholder bank account is verified",
        "Third-party administrator (TPA) system is integrated"
      ],
      constraints: [
        "Claim must be filed within 30 days of discharge",
        "Maximum 10 documents per claim",
        "Reimbursement within 30 days of approval"
      ]
    },
    testStrategy: {
      scope: "Complete testing of Health Insurance Claim module including claim filing, document management, status tracking, and reimbursement processing",
      objectives: [
        "Verify end-to-end claim processing workflow",
        "Validate document upload and verification",
        "Test integration with TPA systems",
        "Ensure regulatory compliance"
      ],
      testLevels: ["Unit Testing", "Integration Testing", "System Testing", "Regression Testing", "UAT"],
      testTypes: ["Functional Testing", "Integration Testing", "Security Testing", "Compliance Testing", "Performance Testing"],
      entryExitCriteria: {
        entry: [
          "Requirements approved by IRDAI compliance team",
          "TPA sandbox environment available",
          "Test policies created with various coverage",
          "Document templates available"
        ],
        exit: [
          "All claim workflows tested end-to-end",
          "TPA integration verified",
          "IRDAI compliance checklist completed",
          "Business sign-off received"
        ]
      },
      riskAnalysis: [
        { risk: "Incorrect claim amount calculation", mitigation: "Comprehensive testing of deductibles, co-pay, and coverage limits" },
        { risk: "Document rejection at TPA level", mitigation: "Validate document format and size before submission" },
        { risk: "Claim fraud", mitigation: "Test duplicate claim detection and fraud markers" },
        { risk: "Delayed reimbursement", mitigation: "Test SLA monitoring and escalation triggers" }
      ],
      testEnvironment: "Integrated test environment with TPA sandbox, policy administration system, and payment gateway",
      tools: ["Selenium for UI automation", "Rest Assured for API testing", "Compliance testing checklists", "Document verification tools"]
    },
    testPlan: {
      testApproach: "Compliance-driven testing approach ensuring all IRDAI requirements are met, followed by end-to-end workflow testing",
      schedule: [
        { phase: "Compliance Testing", duration: "4 days", activities: ["IRDAI checklist verification", "Document format validation", "SLA testing"] },
        { phase: "Functional Testing", duration: "8 days", activities: ["Claim filing flows", "Document upload testing", "Status tracking", "Reimbursement testing"] },
        { phase: "Integration Testing", duration: "4 days", activities: ["TPA integration", "Payment gateway integration", "Notification testing"] },
        { phase: "UAT", duration: "4 days", activities: ["Business user testing", "Edge case validation", "Sign-off"] }
      ],
      resources: ["3 QA Engineers", "1 Domain Expert (Insurance)", "TPA sandbox access", "Sample medical documents"],
      deliverables: ["Compliance Test Report", "Functional Test Report", "Integration Test Report", "UAT Sign-off"],
      defectManagement: "Compliance defects are highest priority. All defects must include policy number, claim type, and step-by-step reproduction."
    },
    testScenarios: [
      { scenarioId: "TS-001", requirement: "FR-001: Claim Filing", scenario: "Verify user can file hospitalization claim with all required documents" },
      { scenarioId: "TS-002", requirement: "FR-001: Claim Filing", scenario: "Verify claim filing fails if policy is expired" },
      { scenarioId: "TS-003", requirement: "FR-002: Document Management", scenario: "Verify user can upload PDF document under 5MB" },
      { scenarioId: "TS-004", requirement: "FR-002: Document Management", scenario: "Verify error for document exceeding 5MB" },
      { scenarioId: "TS-005", requirement: "FR-003: Status Tracking", scenario: "Verify claim status updates are displayed in timeline" },
      { scenarioId: "TS-006", requirement: "FR-003: Status Tracking", scenario: "Verify SMS notification sent on status change" },
      { scenarioId: "TS-007", requirement: "FR-004: Reimbursement", scenario: "Verify approved amount is transferred to bank account" },
      { scenarioId: "TS-008", requirement: "FR-004: Reimbursement", scenario: "Verify claim settlement letter is generated" }
    ],
    testCases: [
      {
        id: "TC-INS-001",
        scenario: "TS-001",
        title: "File hospitalization claim successfully",
        preconditions: "Active policy with hospitalization coverage, documents ready",
        steps: ["Login to portal", "Click 'File New Claim'", "Select 'Hospitalization'", "Enter hospital and treatment details", "Upload discharge summary, bills, prescription", "Submit claim"],
        testData: "Policy: POL-2024-001, Claim Amount: ₹50,000, Hospital: City Hospital",
        expectedResult: "Claim submitted successfully, claim ID generated, status shows 'Under Review'",
        priority: "P1"
      },
      {
        id: "TC-INS-002",
        scenario: "TS-002",
        title: "Claim filing with expired policy",
        preconditions: "Policy expired 10 days ago",
        steps: ["Login to portal", "Click 'File New Claim'", "Select claim type"],
        testData: "Policy: POL-2023-999 (expired)",
        expectedResult: "Error: 'Your policy is not active. Please renew to file claims.'",
        priority: "P1"
      },
      {
        id: "TC-INS-003",
        scenario: "TS-004",
        title: "Upload document exceeding size limit",
        preconditions: "Claim filing in progress",
        steps: ["Click 'Upload Document'", "Select PDF file of 8MB", "Click Upload"],
        testData: "File: large_bill.pdf (8MB)",
        expectedResult: "Error: 'File size exceeds 5MB limit. Please compress or split the document.'",
        priority: "P2"
      },
      {
        id: "TC-INS-004",
        scenario: "TS-007",
        title: "Verify reimbursement transfer",
        preconditions: "Claim approved, amount: ₹45,000, bank account verified",
        steps: ["Navigate to approved claim", "Click 'Process Reimbursement'", "Confirm bank details", "Initiate transfer"],
        testData: "Claim ID: CLM-001, Amount: ₹45,000",
        expectedResult: "Reimbursement initiated, transaction ID generated, status: 'Payment Processing'",
        priority: "P1"
      }
    ]
  }
];
