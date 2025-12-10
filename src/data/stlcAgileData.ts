// STLC Agile Methodology - Complete Hands-on Training Data

export interface UserStory {
  id: string;
  title: string;
  asA: string;
  iWant: string;
  soThat: string;
  acceptanceCriteria: string[];
  priority: "High" | "Medium" | "Low";
  storyPoints: number;
}

export interface TestPlan {
  userStoryId: string;
  objective: string;
  scope: string[];
  approach: string;
  testTypes: string[];
  entryExitCriteria: {
    entry: string[];
    exit: string[];
  };
  risks: string[];
  resources: string[];
}

export interface ManualTestCase {
  id: string;
  userStoryId: string;
  title: string;
  preconditions: string[];
  steps: { step: string; expectedResult: string }[];
  priority: "High" | "Medium" | "Low";
  automationCandidate: boolean;
  automationReason: string;
}

export interface AutomationAnalysis {
  userStoryId: string;
  testCases: {
    testCaseId: string;
    automatable: boolean;
    reason: string;
    framework: string;
    complexity: "Low" | "Medium" | "High";
    roi: "High" | "Medium" | "Low";
  }[];
  automationPercentage: number;
  recommendedTools: string[];
}

export interface SprintAutomation {
  sprintNumber: number;
  goals: string[];
  automatedTests: {
    testName: string;
    type: "Smoke" | "Regression" | "Functional";
    code: string;
    framework: string;
  }[];
  metrics: {
    totalTests: number;
    automated: number;
    coverage: number;
  };
}

export interface RegressionSmokeTest {
  type: "Regression" | "Smoke";
  tests: {
    id: string;
    name: string;
    priority: "P0" | "P1" | "P2";
    frequency: string;
    estimatedTime: string;
  }[];
  executionStrategy: string;
  ciCdIntegration: string;
}

export interface DomainSTLCProject {
  domain: string;
  domainIcon: string;
  feature: string;
  featureDescription: string;
  userStories: UserStory[];
  testPlans: TestPlan[];
  manualTestCases: ManualTestCase[];
  automationAnalysis: AutomationAnalysis[];
  sprintAutomation: SprintAutomation[];
  regressionTests: RegressionSmokeTest;
  smokeTests: RegressionSmokeTest;
}

export const stlcAgileProjects: DomainSTLCProject[] = [
  // E-Commerce Domain
  {
    domain: "E-Commerce",
    domainIcon: "🛒",
    feature: "Shopping Cart Checkout",
    featureDescription: "Complete checkout flow including cart management, payment processing, and order confirmation",
    userStories: [
      {
        id: "EC-US-001",
        title: "Add Items to Cart",
        asA: "Customer",
        iWant: "to add products to my shopping cart",
        soThat: "I can purchase multiple items in a single transaction",
        acceptanceCriteria: [
          "User can add item from product page",
          "Cart icon shows updated item count",
          "Cart total updates automatically",
          "Same item increases quantity instead of duplicate entry",
          "Out of stock items cannot be added"
        ],
        priority: "High",
        storyPoints: 5
      },
      {
        id: "EC-US-002",
        title: "Apply Discount Coupon",
        asA: "Customer",
        iWant: "to apply discount coupons at checkout",
        soThat: "I can get discounts on my purchase",
        acceptanceCriteria: [
          "Coupon input field visible on cart page",
          "Valid coupon shows discount amount",
          "Invalid coupon shows error message",
          "Only one coupon per order",
          "Expired coupons are rejected"
        ],
        priority: "High",
        storyPoints: 3
      },
      {
        id: "EC-US-003",
        title: "Complete Payment",
        asA: "Customer",
        iWant: "to pay using multiple payment methods",
        soThat: "I can complete my purchase conveniently",
        acceptanceCriteria: [
          "Support Credit/Debit cards",
          "Support PayPal integration",
          "Support Net Banking",
          "Payment failure shows retry option",
          "Success shows order confirmation"
        ],
        priority: "High",
        storyPoints: 8
      }
    ],
    testPlans: [
      {
        userStoryId: "EC-US-001",
        objective: "Validate add to cart functionality works correctly across all product types and user scenarios",
        scope: [
          "Add single item to cart",
          "Add multiple items",
          "Update quantity",
          "Cart persistence across sessions",
          "Cart sync across devices (logged in users)"
        ],
        approach: "Combination of functional testing, boundary value analysis, and integration testing with inventory system",
        testTypes: ["Functional", "Integration", "UI", "Performance"],
        entryExitCriteria: {
          entry: [
            "Product catalog API is stable",
            "Cart microservice deployed",
            "Test data prepared",
            "Test environment available"
          ],
          exit: [
            "All P0 test cases passed",
            "No critical defects open",
            "90% test coverage achieved",
            "Performance benchmarks met"
          ]
        },
        risks: [
          "Inventory sync delays",
          "Session timeout issues",
          "Price update conflicts"
        ],
        resources: ["2 QA Engineers", "Test Environment", "API Testing Tools", "Selenium Grid"]
      },
      {
        userStoryId: "EC-US-002",
        objective: "Ensure coupon application logic handles all valid and invalid scenarios correctly",
        scope: [
          "Valid coupon application",
          "Invalid/expired coupon handling",
          "Coupon + cart total calculation",
          "Minimum purchase requirements",
          "Category-specific coupons"
        ],
        approach: "Equivalence partitioning for coupon types, boundary testing for discount limits",
        testTypes: ["Functional", "Negative", "Integration", "Security"],
        entryExitCriteria: {
          entry: [
            "Coupon service API available",
            "Test coupons created in system",
            "Cart service integrated"
          ],
          exit: [
            "All coupon scenarios validated",
            "No calculation errors",
            "Security tests passed"
          ]
        },
        risks: [
          "Coupon code injection attacks",
          "Calculation rounding errors",
          "Race condition with multiple coupon attempts"
        ],
        resources: ["1 QA Engineer", "Security Testing Tools", "Test Data Generator"]
      },
      {
        userStoryId: "EC-US-003",
        objective: "Validate payment processing is secure, reliable, and handles all payment methods",
        scope: [
          "Credit/Debit card payments",
          "PayPal integration",
          "Net Banking flow",
          "Payment failure handling",
          "Refund processing"
        ],
        approach: "End-to-end testing with payment sandbox environments, security testing for PCI compliance",
        testTypes: ["Functional", "Integration", "Security", "Performance", "UAT"],
        entryExitCriteria: {
          entry: [
            "Payment gateway sandbox configured",
            "SSL certificates valid",
            "PCI compliance checklist reviewed"
          ],
          exit: [
            "All payment methods tested",
            "Security audit passed",
            "Load testing completed",
            "UAT sign-off received"
          ]
        },
        risks: [
          "Payment gateway downtime",
          "Currency conversion errors",
          "Double charging issues"
        ],
        resources: ["2 QA Engineers", "Security Specialist", "Payment Sandbox Accounts", "Load Testing Tools"]
      }
    ],
    manualTestCases: [
      {
        id: "EC-TC-001",
        userStoryId: "EC-US-001",
        title: "Add single item to empty cart",
        preconditions: ["User is logged in", "Cart is empty", "Product is in stock"],
        steps: [
          { step: "Navigate to product page", expectedResult: "Product details displayed" },
          { step: "Click 'Add to Cart' button", expectedResult: "Loading indicator shown" },
          { step: "Verify success message", expectedResult: "Item added to cart message displayed" },
          { step: "Check cart icon", expectedResult: "Cart count shows '1'" },
          { step: "Open cart page", expectedResult: "Item visible with correct price and quantity" }
        ],
        priority: "High",
        automationCandidate: true,
        automationReason: "High frequency, stable UI, critical path - ideal for regression suite"
      },
      {
        id: "EC-TC-002",
        userStoryId: "EC-US-001",
        title: "Add out of stock item",
        preconditions: ["User is logged in", "Product is out of stock"],
        steps: [
          { step: "Navigate to out of stock product", expectedResult: "Product page shows 'Out of Stock'" },
          { step: "Verify Add to Cart button state", expectedResult: "Button is disabled or hidden" },
          { step: "Try to add via API/console", expectedResult: "Server returns error" }
        ],
        priority: "High",
        automationCandidate: true,
        automationReason: "Negative test case, API validation needed - good for API automation"
      },
      {
        id: "EC-TC-003",
        userStoryId: "EC-US-002",
        title: "Apply valid percentage coupon",
        preconditions: ["Cart has items totaling $100", "Valid 20% coupon exists"],
        steps: [
          { step: "Go to cart page", expectedResult: "Cart with items displayed" },
          { step: "Enter coupon code 'SAVE20'", expectedResult: "Coupon field accepts input" },
          { step: "Click Apply button", expectedResult: "Success message shown" },
          { step: "Verify discount amount", expectedResult: "Discount shows $20.00" },
          { step: "Verify new total", expectedResult: "Total shows $80.00" }
        ],
        priority: "High",
        automationCandidate: true,
        automationReason: "Calculation verification, repeatable with different data - good for data-driven automation"
      },
      {
        id: "EC-TC-004",
        userStoryId: "EC-US-002",
        title: "Apply expired coupon",
        preconditions: ["Cart has items", "Expired coupon code available"],
        steps: [
          { step: "Go to cart page", expectedResult: "Cart displayed" },
          { step: "Enter expired coupon code", expectedResult: "Input accepted" },
          { step: "Click Apply button", expectedResult: "Error message displayed" },
          { step: "Verify error message", expectedResult: "Message says 'Coupon has expired'" },
          { step: "Verify cart total unchanged", expectedResult: "Original total remains" }
        ],
        priority: "Medium",
        automationCandidate: true,
        automationReason: "Negative test, error handling validation - important for stability testing"
      },
      {
        id: "EC-TC-005",
        userStoryId: "EC-US-003",
        title: "Complete payment with credit card",
        preconditions: ["Items in cart", "Valid test credit card", "User at checkout"],
        steps: [
          { step: "Select Credit Card payment", expectedResult: "Card form displayed" },
          { step: "Enter card number", expectedResult: "Field validates card type" },
          { step: "Enter expiry and CVV", expectedResult: "Fields accept valid input" },
          { step: "Click Pay Now", expectedResult: "Processing indicator shown" },
          { step: "Verify payment success", expectedResult: "Order confirmation page displayed" },
          { step: "Check order in history", expectedResult: "Order visible with correct details" }
        ],
        priority: "High",
        automationCandidate: false,
        automationReason: "Payment sandbox has limitations, requires human verification of actual payment flow"
      },
      {
        id: "EC-TC-006",
        userStoryId: "EC-US-003",
        title: "Payment failure and retry",
        preconditions: ["Items in cart", "Card that will decline"],
        steps: [
          { step: "Attempt payment with decline card", expectedResult: "Processing shown" },
          { step: "Verify failure message", expectedResult: "Payment declined message shown" },
          { step: "Verify retry option", expectedResult: "Retry button available" },
          { step: "Click retry", expectedResult: "Payment form reappears" },
          { step: "Verify cart intact", expectedResult: "All items still in cart" }
        ],
        priority: "High",
        automationCandidate: true,
        automationReason: "Error handling flow, can use test decline cards - good for API automation"
      }
    ],
    automationAnalysis: [
      {
        userStoryId: "EC-US-001",
        testCases: [
          {
            testCaseId: "EC-TC-001",
            automatable: true,
            reason: "Stable UI elements, critical path, high ROI for regression",
            framework: "Selenium WebDriver + TestNG",
            complexity: "Low",
            roi: "High"
          },
          {
            testCaseId: "EC-TC-002",
            automatable: true,
            reason: "API-level validation, quick execution, prevents critical bugs",
            framework: "REST Assured + JUnit",
            complexity: "Low",
            roi: "High"
          }
        ],
        automationPercentage: 100,
        recommendedTools: ["Selenium WebDriver", "REST Assured", "TestNG"]
      },
      {
        userStoryId: "EC-US-002",
        testCases: [
          {
            testCaseId: "EC-TC-003",
            automatable: true,
            reason: "Data-driven testing opportunity, calculation verification",
            framework: "Selenium + Data Provider",
            complexity: "Medium",
            roi: "High"
          },
          {
            testCaseId: "EC-TC-004",
            automatable: true,
            reason: "Negative testing, error message validation",
            framework: "Selenium WebDriver",
            complexity: "Low",
            roi: "Medium"
          }
        ],
        automationPercentage: 100,
        recommendedTools: ["Selenium WebDriver", "TestNG Data Provider", "Apache POI for test data"]
      },
      {
        userStoryId: "EC-US-003",
        testCases: [
          {
            testCaseId: "EC-TC-005",
            automatable: false,
            reason: "Payment sandbox limitations, requires manual verification of actual payment processing",
            framework: "Manual Testing",
            complexity: "High",
            roi: "Low"
          },
          {
            testCaseId: "EC-TC-006",
            automatable: true,
            reason: "Uses test decline cards, error handling validation",
            framework: "Selenium + REST Assured",
            complexity: "Medium",
            roi: "Medium"
          }
        ],
        automationPercentage: 50,
        recommendedTools: ["Selenium WebDriver", "REST Assured", "Payment Gateway Test Cards"]
      }
    ],
    sprintAutomation: [
      {
        sprintNumber: 1,
        goals: [
          "Set up automation framework",
          "Automate add to cart happy path",
          "Automate cart quantity update",
          "Create smoke test suite"
        ],
        automatedTests: [
          {
            testName: "Add Item to Cart",
            type: "Smoke",
            framework: "Selenium + TestNG",
            code: `@Test(priority = 1)
public void testAddItemToCart() {
    // Navigate to product page
    driver.get(baseUrl + "/product/12345");
    
    // Wait for page load
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    WebElement addToCartBtn = wait.until(
        ExpectedConditions.elementToBeClickable(By.id("add-to-cart"))
    );
    
    // Add item to cart
    addToCartBtn.click();
    
    // Verify success message
    WebElement successMsg = wait.until(
        ExpectedConditions.visibilityOfElementLocated(By.className("success-toast"))
    );
    Assert.assertTrue(successMsg.isDisplayed());
    
    // Verify cart count
    WebElement cartCount = driver.findElement(By.id("cart-count"));
    Assert.assertEquals(cartCount.getText(), "1");
}`
          },
          {
            testName: "Update Cart Quantity",
            type: "Functional",
            framework: "Selenium + TestNG",
            code: `@Test(priority = 2, dependsOnMethods = "testAddItemToCart")
public void testUpdateCartQuantity() {
    driver.get(baseUrl + "/cart");
    
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    WebElement quantityInput = wait.until(
        ExpectedConditions.elementToBeClickable(By.className("qty-input"))
    );
    
    // Update quantity to 3
    quantityInput.clear();
    quantityInput.sendKeys("3");
    quantityInput.sendKeys(Keys.TAB);
    
    // Wait for cart to update
    Thread.sleep(1000);
    
    // Verify total updated
    WebElement cartTotal = driver.findElement(By.id("cart-total"));
    String total = cartTotal.getText();
    Assert.assertTrue(total.contains("$"));
}`
          }
        ],
        metrics: {
          totalTests: 6,
          automated: 4,
          coverage: 67
        }
      },
      {
        sprintNumber: 2,
        goals: [
          "Automate coupon functionality",
          "Add API tests for cart service",
          "Implement data-driven testing",
          "Expand regression suite"
        ],
        automatedTests: [
          {
            testName: "Apply Valid Coupon - Data Driven",
            type: "Regression",
            framework: "Selenium + TestNG + DataProvider",
            code: `@DataProvider(name = "couponData")
public Object[][] getCouponData() {
    return new Object[][] {
        {"SAVE10", 100.00, 90.00},
        {"SAVE20", 100.00, 80.00},
        {"FLAT50", 200.00, 150.00},
        {"FREESHIP", 50.00, 50.00}
    };
}

@Test(dataProvider = "couponData")
public void testApplyCoupon(String couponCode, double cartTotal, double expectedTotal) {
    // Setup cart with specific total
    setupCartWithTotal(cartTotal);
    
    driver.get(baseUrl + "/cart");
    
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    
    // Enter coupon
    WebElement couponInput = wait.until(
        ExpectedConditions.elementToBeClickable(By.id("coupon-code"))
    );
    couponInput.sendKeys(couponCode);
    
    // Apply coupon
    driver.findElement(By.id("apply-coupon")).click();
    
    // Verify success
    WebElement successMsg = wait.until(
        ExpectedConditions.visibilityOfElementLocated(By.className("coupon-success"))
    );
    Assert.assertTrue(successMsg.isDisplayed());
    
    // Verify new total
    WebElement totalElement = driver.findElement(By.id("final-total"));
    double actualTotal = Double.parseDouble(
        totalElement.getText().replace("$", "")
    );
    Assert.assertEquals(actualTotal, expectedTotal, 0.01);
}`
          },
          {
            testName: "Cart API Validation",
            type: "Regression",
            framework: "REST Assured",
            code: `@Test
public void testCartAPIAddItem() {
    String requestBody = """
        {
            "productId": "12345",
            "quantity": 2,
            "userId": "user_001"
        }
        """;
    
    Response response = given()
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer " + authToken)
        .body(requestBody)
    .when()
        .post("/api/v1/cart/add")
    .then()
        .statusCode(200)
        .body("success", equalTo(true))
        .body("cart.items.size()", equalTo(1))
        .body("cart.items[0].quantity", equalTo(2))
        .extract().response();
    
    // Verify cart total calculation
    JsonPath jsonPath = response.jsonPath();
    double itemPrice = jsonPath.getDouble("cart.items[0].price");
    int quantity = jsonPath.getInt("cart.items[0].quantity");
    double expectedTotal = itemPrice * quantity;
    double actualTotal = jsonPath.getDouble("cart.total");
    
    Assert.assertEquals(actualTotal, expectedTotal, 0.01);
}`
          }
        ],
        metrics: {
          totalTests: 12,
          automated: 10,
          coverage: 83
        }
      }
    ],
    regressionTests: {
      type: "Regression",
      tests: [
        { id: "REG-EC-001", name: "Complete checkout flow", priority: "P0", frequency: "Every build", estimatedTime: "5 min" },
        { id: "REG-EC-002", name: "Add/Remove cart items", priority: "P0", frequency: "Every build", estimatedTime: "3 min" },
        { id: "REG-EC-003", name: "Coupon application", priority: "P1", frequency: "Daily", estimatedTime: "4 min" },
        { id: "REG-EC-004", name: "Cart persistence", priority: "P1", frequency: "Daily", estimatedTime: "2 min" },
        { id: "REG-EC-005", name: "Price calculation", priority: "P0", frequency: "Every build", estimatedTime: "3 min" },
        { id: "REG-EC-006", name: "Inventory sync", priority: "P1", frequency: "Daily", estimatedTime: "5 min" },
        { id: "REG-EC-007", name: "Payment gateway integration", priority: "P0", frequency: "Every build", estimatedTime: "4 min" },
        { id: "REG-EC-008", name: "Order confirmation email", priority: "P2", frequency: "Weekly", estimatedTime: "2 min" }
      ],
      executionStrategy: "Parallel execution using Selenium Grid with 4 nodes. P0 tests run on every build, P1 daily, P2 weekly.",
      ciCdIntegration: "Jenkins pipeline triggers regression suite on every merge to develop branch. Results published to TestRail."
    },
    smokeTests: {
      type: "Smoke",
      tests: [
        { id: "SMK-EC-001", name: "Homepage loads", priority: "P0", frequency: "Every deployment", estimatedTime: "30 sec" },
        { id: "SMK-EC-002", name: "Product search works", priority: "P0", frequency: "Every deployment", estimatedTime: "45 sec" },
        { id: "SMK-EC-003", name: "Add to cart functional", priority: "P0", frequency: "Every deployment", estimatedTime: "1 min" },
        { id: "SMK-EC-004", name: "Checkout page accessible", priority: "P0", frequency: "Every deployment", estimatedTime: "30 sec" },
        { id: "SMK-EC-005", name: "Payment form renders", priority: "P0", frequency: "Every deployment", estimatedTime: "30 sec" }
      ],
      executionStrategy: "Sequential execution, fail-fast approach. Any failure blocks deployment.",
      ciCdIntegration: "Runs as deployment gate in CD pipeline. Slack notification on failure. Auto-rollback if smoke fails in production."
    }
  },

  // Banking Domain
  {
    domain: "Banking",
    domainIcon: "🏦",
    feature: "Fund Transfer Module",
    featureDescription: "Secure fund transfer functionality including NEFT, RTGS, IMPS, and internal transfers",
    userStories: [
      {
        id: "BK-US-001",
        title: "Internal Fund Transfer",
        asA: "Account holder",
        iWant: "to transfer funds between my own accounts",
        soThat: "I can manage my finances efficiently",
        acceptanceCriteria: [
          "Select source and destination account",
          "Enter transfer amount",
          "Validate sufficient balance",
          "OTP verification for transfers > $1000",
          "Instant transfer with confirmation"
        ],
        priority: "High",
        storyPoints: 5
      },
      {
        id: "BK-US-002",
        title: "NEFT Transfer to Other Bank",
        asA: "Account holder",
        iWant: "to transfer funds to accounts in other banks via NEFT",
        soThat: "I can pay vendors and family members",
        acceptanceCriteria: [
          "Add beneficiary with IFSC code validation",
          "Daily transfer limit enforcement",
          "Transaction scheduling option",
          "Real-time status tracking",
          "Email/SMS notification on completion"
        ],
        priority: "High",
        storyPoints: 8
      },
      {
        id: "BK-US-003",
        title: "Transaction History and Statement",
        asA: "Account holder",
        iWant: "to view my transaction history and download statements",
        soThat: "I can track my spending and maintain records",
        acceptanceCriteria: [
          "Filter by date range",
          "Filter by transaction type",
          "Search by amount or description",
          "Download PDF/Excel statement",
          "Pagination for large data sets"
        ],
        priority: "Medium",
        storyPoints: 5
      }
    ],
    testPlans: [
      {
        userStoryId: "BK-US-001",
        objective: "Validate secure and accurate internal fund transfer between user's own accounts",
        scope: [
          "Account selection validation",
          "Balance verification",
          "Transfer amount limits",
          "OTP workflow",
          "Transaction logging"
        ],
        approach: "Security-focused testing with emphasis on data integrity and audit trails",
        testTypes: ["Functional", "Security", "Integration", "Performance"],
        entryExitCriteria: {
          entry: [
            "Core banking API available",
            "Test accounts configured",
            "OTP service mocked",
            "Security audit checklist ready"
          ],
          exit: [
            "All security tests passed",
            "No data integrity issues",
            "Performance under 2 seconds",
            "Audit logs verified"
          ]
        },
        risks: [
          "Race condition in balance update",
          "OTP timeout issues",
          "Session hijacking"
        ],
        resources: ["2 QA Engineers", "Security Tester", "Performance Testing Tools"]
      },
      {
        userStoryId: "BK-US-002",
        objective: "Ensure NEFT transfers comply with banking regulations and complete successfully",
        scope: [
          "Beneficiary management",
          "IFSC validation",
          "Transfer limits",
          "Scheduling",
          "Status tracking"
        ],
        approach: "End-to-end testing with regulatory compliance verification",
        testTypes: ["Functional", "Integration", "Compliance", "Security"],
        entryExitCriteria: {
          entry: [
            "NEFT gateway sandbox configured",
            "IFSC database accessible",
            "Compliance checklist available"
          ],
          exit: [
            "All NEFT scenarios tested",
            "Compliance requirements met",
            "Integration tests passed"
          ]
        },
        risks: [
          "NEFT window restrictions",
          "IFSC validation failures",
          "Gateway timeout"
        ],
        resources: ["2 QA Engineers", "Compliance Specialist", "Banking Domain Expert"]
      },
      {
        userStoryId: "BK-US-003",
        objective: "Validate transaction history display and statement generation accuracy",
        scope: [
          "Data retrieval accuracy",
          "Filtering functionality",
          "Search capability",
          "Document generation",
          "Performance with large datasets"
        ],
        approach: "Data accuracy testing with various transaction volumes",
        testTypes: ["Functional", "Performance", "Data Validation"],
        entryExitCriteria: {
          entry: [
            "Test data with 10000+ transactions prepared",
            "PDF generation service available",
            "Export functionality implemented"
          ],
          exit: [
            "All filters working correctly",
            "Statement accuracy verified",
            "Performance benchmarks met"
          ]
        },
        risks: [
          "Slow query performance",
          "PDF generation timeout",
          "Data inconsistency"
        ],
        resources: ["1 QA Engineer", "Performance Testing Tools", "Data Validation Scripts"]
      }
    ],
    manualTestCases: [
      {
        id: "BK-TC-001",
        userStoryId: "BK-US-001",
        title: "Successful internal transfer without OTP",
        preconditions: ["User logged in", "Has 2+ accounts", "Source account has $500+"],
        steps: [
          { step: "Navigate to Fund Transfer", expectedResult: "Transfer page displayed" },
          { step: "Select source account (Savings)", expectedResult: "Account selected, balance shown" },
          { step: "Select destination account (Checking)", expectedResult: "Account selected" },
          { step: "Enter amount $100", expectedResult: "Amount accepted" },
          { step: "Click Transfer", expectedResult: "Confirmation dialog appears" },
          { step: "Confirm transfer", expectedResult: "Success message, reference number shown" },
          { step: "Verify source account balance", expectedResult: "Reduced by $100" },
          { step: "Verify destination account balance", expectedResult: "Increased by $100" }
        ],
        priority: "High",
        automationCandidate: true,
        automationReason: "Critical path, repeatable, balance verification via API possible"
      },
      {
        id: "BK-TC-002",
        userStoryId: "BK-US-001",
        title: "Internal transfer with OTP verification",
        preconditions: ["User logged in", "Transfer amount > $1000"],
        steps: [
          { step: "Navigate to Fund Transfer", expectedResult: "Transfer page displayed" },
          { step: "Select accounts and enter $1500", expectedResult: "Amount accepted" },
          { step: "Click Transfer", expectedResult: "OTP input screen displayed" },
          { step: "Enter valid OTP", expectedResult: "OTP verified" },
          { step: "Verify transfer success", expectedResult: "Success message displayed" }
        ],
        priority: "High",
        automationCandidate: false,
        automationReason: "OTP involves real SMS/email, requires manual verification or mock setup"
      },
      {
        id: "BK-TC-003",
        userStoryId: "BK-US-001",
        title: "Transfer with insufficient balance",
        preconditions: ["User logged in", "Source account has $100"],
        steps: [
          { step: "Navigate to Fund Transfer", expectedResult: "Transfer page displayed" },
          { step: "Select source account with $100 balance", expectedResult: "Balance shown as $100" },
          { step: "Enter transfer amount $200", expectedResult: "Amount entered" },
          { step: "Click Transfer", expectedResult: "Error: Insufficient balance" },
          { step: "Verify no transaction created", expectedResult: "Transaction history unchanged" }
        ],
        priority: "High",
        automationCandidate: true,
        automationReason: "Negative test case, validates security control, repeatable"
      },
      {
        id: "BK-TC-004",
        userStoryId: "BK-US-002",
        title: "Add beneficiary with valid IFSC",
        preconditions: ["User logged in", "Valid IFSC code available"],
        steps: [
          { step: "Navigate to Manage Beneficiaries", expectedResult: "Beneficiary page displayed" },
          { step: "Click Add New Beneficiary", expectedResult: "Add form displayed" },
          { step: "Enter account number", expectedResult: "Field accepts input" },
          { step: "Enter IFSC code SBIN0001234", expectedResult: "Bank name auto-populated" },
          { step: "Enter beneficiary name", expectedResult: "Name accepted" },
          { step: "Submit and verify OTP", expectedResult: "Beneficiary added successfully" }
        ],
        priority: "High",
        automationCandidate: true,
        automationReason: "IFSC validation testable via API, repeatable process"
      },
      {
        id: "BK-TC-005",
        userStoryId: "BK-US-003",
        title: "Download statement for date range",
        preconditions: ["User logged in", "Account has transactions in selected range"],
        steps: [
          { step: "Navigate to Transaction History", expectedResult: "History page displayed" },
          { step: "Select date range (Last 30 days)", expectedResult: "Transactions filtered" },
          { step: "Click Download PDF", expectedResult: "Download starts" },
          { step: "Open downloaded PDF", expectedResult: "Statement shows correct transactions" },
          { step: "Verify totals match", expectedResult: "Credit/Debit totals accurate" }
        ],
        priority: "Medium",
        automationCandidate: true,
        automationReason: "Can verify PDF content programmatically, important for audit"
      }
    ],
    automationAnalysis: [
      {
        userStoryId: "BK-US-001",
        testCases: [
          {
            testCaseId: "BK-TC-001",
            automatable: true,
            reason: "Critical flow, balance verification via API, high regression value",
            framework: "Selenium + REST Assured",
            complexity: "Medium",
            roi: "High"
          },
          {
            testCaseId: "BK-TC-002",
            automatable: false,
            reason: "Real OTP required, security feature needs manual verification",
            framework: "Manual with OTP mock for specific scenarios",
            complexity: "High",
            roi: "Low"
          },
          {
            testCaseId: "BK-TC-003",
            automatable: true,
            reason: "Security validation, repeatable negative test",
            framework: "REST Assured",
            complexity: "Low",
            roi: "High"
          }
        ],
        automationPercentage: 67,
        recommendedTools: ["Selenium WebDriver", "REST Assured", "Database validation tools"]
      },
      {
        userStoryId: "BK-US-002",
        testCases: [
          {
            testCaseId: "BK-TC-004",
            automatable: true,
            reason: "IFSC validation testable, beneficiary management is stable feature",
            framework: "Selenium + API Testing",
            complexity: "Medium",
            roi: "Medium"
          }
        ],
        automationPercentage: 75,
        recommendedTools: ["Selenium WebDriver", "REST Assured", "IFSC Validation API"]
      },
      {
        userStoryId: "BK-US-003",
        testCases: [
          {
            testCaseId: "BK-TC-005",
            automatable: true,
            reason: "PDF parsing possible, data accuracy critical for compliance",
            framework: "REST Assured + PDFBox",
            complexity: "Medium",
            roi: "High"
          }
        ],
        automationPercentage: 80,
        recommendedTools: ["REST Assured", "Apache PDFBox", "Apache POI for Excel"]
      }
    ],
    sprintAutomation: [
      {
        sprintNumber: 1,
        goals: [
          "Set up banking automation framework",
          "Automate internal transfer happy path",
          "Create security test suite foundation"
        ],
        automatedTests: [
          {
            testName: "Internal Fund Transfer API",
            type: "Functional",
            framework: "REST Assured",
            code: `@Test
public void testInternalTransfer() {
    // Get initial balances
    double sourceBalance = getAccountBalance(sourceAccountId);
    double destBalance = getAccountBalance(destAccountId);
    double transferAmount = 100.00;
    
    String requestBody = String.format("""
        {
            "sourceAccount": "%s",
            "destinationAccount": "%s",
            "amount": %.2f,
            "remarks": "Test Transfer"
        }
        """, sourceAccountId, destAccountId, transferAmount);
    
    Response response = given()
        .header("Authorization", "Bearer " + authToken)
        .header("Content-Type", "application/json")
        .body(requestBody)
    .when()
        .post("/api/v1/transfer/internal")
    .then()
        .statusCode(200)
        .body("status", equalTo("SUCCESS"))
        .body("referenceNumber", notNullValue())
        .extract().response();
    
    // Verify balances updated correctly
    double newSourceBalance = getAccountBalance(sourceAccountId);
    double newDestBalance = getAccountBalance(destAccountId);
    
    Assert.assertEquals(newSourceBalance, sourceBalance - transferAmount, 0.01);
    Assert.assertEquals(newDestBalance, destBalance + transferAmount, 0.01);
}`
          },
          {
            testName: "Insufficient Balance Validation",
            type: "Smoke",
            framework: "REST Assured",
            code: `@Test
public void testInsufficientBalanceTransfer() {
    double sourceBalance = getAccountBalance(sourceAccountId);
    double transferAmount = sourceBalance + 1000; // Exceed balance
    
    String requestBody = String.format("""
        {
            "sourceAccount": "%s",
            "destinationAccount": "%s",
            "amount": %.2f
        }
        """, sourceAccountId, destAccountId, transferAmount);
    
    given()
        .header("Authorization", "Bearer " + authToken)
        .header("Content-Type", "application/json")
        .body(requestBody)
    .when()
        .post("/api/v1/transfer/internal")
    .then()
        .statusCode(400)
        .body("error.code", equalTo("INSUFFICIENT_BALANCE"))
        .body("error.message", containsString("Insufficient"));
    
    // Verify balance unchanged
    double newBalance = getAccountBalance(sourceAccountId);
    Assert.assertEquals(newBalance, sourceBalance, 0.01);
}`
          }
        ],
        metrics: {
          totalTests: 8,
          automated: 5,
          coverage: 62
        }
      },
      {
        sprintNumber: 2,
        goals: [
          "Automate NEFT transfer flow",
          "Add beneficiary management tests",
          "Implement statement validation"
        ],
        automatedTests: [
          {
            testName: "IFSC Code Validation",
            type: "Regression",
            framework: "REST Assured",
            code: `@Test
public void testIFSCValidation() {
    // Valid IFSC
    given()
        .header("Authorization", "Bearer " + authToken)
        .queryParam("ifsc", "SBIN0001234")
    .when()
        .get("/api/v1/ifsc/validate")
    .then()
        .statusCode(200)
        .body("valid", equalTo(true))
        .body("bankName", equalTo("State Bank of India"))
        .body("branch", notNullValue());
    
    // Invalid IFSC
    given()
        .header("Authorization", "Bearer " + authToken)
        .queryParam("ifsc", "INVALID123")
    .when()
        .get("/api/v1/ifsc/validate")
    .then()
        .statusCode(200)
        .body("valid", equalTo(false))
        .body("error", equalTo("Invalid IFSC code"));
}`
          },
          {
            testName: "Statement PDF Generation",
            type: "Regression",
            framework: "REST Assured + PDFBox",
            code: `@Test
public void testStatementDownload() throws IOException {
    // Request statement
    byte[] pdfBytes = given()
        .header("Authorization", "Bearer " + authToken)
        .queryParam("accountId", testAccountId)
        .queryParam("fromDate", "2024-01-01")
        .queryParam("toDate", "2024-01-31")
    .when()
        .get("/api/v1/statement/download")
    .then()
        .statusCode(200)
        .contentType("application/pdf")
        .extract().asByteArray();
    
    // Parse PDF and verify content
    PDDocument document = PDDocument.load(pdfBytes);
    PDFTextStripper stripper = new PDFTextStripper();
    String text = stripper.getText(document);
    
    Assert.assertTrue(text.contains("Account Statement"));
    Assert.assertTrue(text.contains(testAccountId));
    Assert.assertTrue(text.contains("January 2024"));
    
    document.close();
}`
          }
        ],
        metrics: {
          totalTests: 15,
          automated: 12,
          coverage: 80
        }
      }
    ],
    regressionTests: {
      type: "Regression",
      tests: [
        { id: "REG-BK-001", name: "Internal transfer flow", priority: "P0", frequency: "Every build", estimatedTime: "3 min" },
        { id: "REG-BK-002", name: "Balance validation", priority: "P0", frequency: "Every build", estimatedTime: "2 min" },
        { id: "REG-BK-003", name: "NEFT transfer", priority: "P0", frequency: "Daily", estimatedTime: "5 min" },
        { id: "REG-BK-004", name: "Beneficiary management", priority: "P1", frequency: "Daily", estimatedTime: "4 min" },
        { id: "REG-BK-005", name: "Transaction history", priority: "P1", frequency: "Daily", estimatedTime: "3 min" },
        { id: "REG-BK-006", name: "Statement generation", priority: "P1", frequency: "Daily", estimatedTime: "4 min" },
        { id: "REG-BK-007", name: "Session security", priority: "P0", frequency: "Every build", estimatedTime: "2 min" },
        { id: "REG-BK-008", name: "Audit logging", priority: "P1", frequency: "Daily", estimatedTime: "3 min" }
      ],
      executionStrategy: "Security-focused execution with data integrity checks after each test. Database snapshot comparison for balance tests.",
      ciCdIntegration: "Jenkins pipeline with security gates. Automated rollback on P0 failures. Integration with SIEM for audit log verification."
    },
    smokeTests: {
      type: "Smoke",
      tests: [
        { id: "SMK-BK-001", name: "Login successful", priority: "P0", frequency: "Every deployment", estimatedTime: "30 sec" },
        { id: "SMK-BK-002", name: "Account dashboard loads", priority: "P0", frequency: "Every deployment", estimatedTime: "45 sec" },
        { id: "SMK-BK-003", name: "Balance displayed correctly", priority: "P0", frequency: "Every deployment", estimatedTime: "30 sec" },
        { id: "SMK-BK-004", name: "Transfer form accessible", priority: "P0", frequency: "Every deployment", estimatedTime: "30 sec" },
        { id: "SMK-BK-005", name: "Core banking API responsive", priority: "P0", frequency: "Every deployment", estimatedTime: "20 sec" }
      ],
      executionStrategy: "Parallel API health checks followed by sequential UI validation. Immediate alerting on any failure.",
      ciCdIntegration: "Pre-deployment gate in all environments. Auto-blocks production deployment on failure. PagerDuty integration for critical alerts."
    }
  },

  // Telecom Domain
  {
    domain: "Telecom",
    domainIcon: "📱",
    feature: "Prepaid Recharge & Plan Management",
    featureDescription: "Mobile prepaid recharge system with plan selection, payment processing, and usage tracking",
    userStories: [
      {
        id: "TL-US-001",
        title: "Instant Prepaid Recharge",
        asA: "Prepaid customer",
        iWant: "to recharge my mobile number instantly",
        soThat: "I can continue using voice and data services",
        acceptanceCriteria: [
          "Enter mobile number with validation",
          "Display available recharge options",
          "Multiple payment methods supported",
          "Instant balance credit on success",
          "Transaction receipt via SMS/email"
        ],
        priority: "High",
        storyPoints: 5
      },
      {
        id: "TL-US-002",
        title: "Plan Comparison and Selection",
        asA: "Prepaid customer",
        iWant: "to compare different plans and select the best one",
        soThat: "I can get maximum value for my money",
        acceptanceCriteria: [
          "View all available plans",
          "Filter by data/voice/validity",
          "Side-by-side comparison",
          "Highlight best value plan",
          "One-click plan activation"
        ],
        priority: "High",
        storyPoints: 5
      },
      {
        id: "TL-US-003",
        title: "Usage Dashboard",
        asA: "Prepaid customer",
        iWant: "to view my current balance and usage statistics",
        soThat: "I can manage my consumption effectively",
        acceptanceCriteria: [
          "Display current balance",
          "Show data usage with visual chart",
          "Voice minutes remaining",
          "SMS count remaining",
          "Plan validity countdown"
        ],
        priority: "Medium",
        storyPoints: 3
      }
    ],
    testPlans: [
      {
        userStoryId: "TL-US-001",
        objective: "Validate end-to-end prepaid recharge flow including payment and balance credit",
        scope: [
          "Mobile number validation",
          "Recharge amount selection",
          "Payment processing",
          "Balance update",
          "Notification delivery"
        ],
        approach: "Integration testing with billing system and payment gateway",
        testTypes: ["Functional", "Integration", "Performance", "Security"],
        entryExitCriteria: {
          entry: [
            "Billing API available",
            "Payment gateway sandbox ready",
            "SMS gateway configured",
            "Test mobile numbers allocated"
          ],
          exit: [
            "All recharge scenarios passed",
            "Payment integration verified",
            "Balance credit < 5 seconds",
            "SMS delivery confirmed"
          ]
        },
        risks: [
          "Billing system latency",
          "Payment gateway failures",
          "SMS delivery delays"
        ],
        resources: ["2 QA Engineers", "Telecom Domain Expert", "Performance Testing Tools"]
      },
      {
        userStoryId: "TL-US-002",
        objective: "Ensure plan comparison feature displays accurate information and enables easy selection",
        scope: [
          "Plan data accuracy",
          "Filter functionality",
          "Comparison feature",
          "Plan activation",
          "UI responsiveness"
        ],
        approach: "Data validation testing with plan catalog verification",
        testTypes: ["Functional", "UI", "Data Validation", "Usability"],
        entryExitCriteria: {
          entry: [
            "Plan catalog populated",
            "Comparison logic implemented",
            "Filter functionality ready"
          ],
          exit: [
            "All plans displayed correctly",
            "Filters work accurately",
            "Comparison feature validated"
          ]
        },
        risks: [
          "Stale plan data",
          "Price discrepancies",
          "Filter logic errors"
        ],
        resources: ["1 QA Engineer", "Plan Catalog Access", "UI Testing Tools"]
      },
      {
        userStoryId: "TL-US-003",
        objective: "Validate usage dashboard displays accurate real-time data",
        scope: [
          "Balance accuracy",
          "Usage data sync",
          "Chart rendering",
          "Real-time updates",
          "Validity tracking"
        ],
        approach: "Real-time data validation with billing system integration",
        testTypes: ["Functional", "Integration", "Performance", "UI"],
        entryExitCriteria: {
          entry: [
            "Usage tracking API available",
            "Chart components ready",
            "Test account with usage history"
          ],
          exit: [
            "All metrics accurate",
            "Charts render correctly",
            "Real-time sync verified"
          ]
        },
        risks: [
          "Data sync delays",
          "Chart rendering issues",
          "Mobile responsiveness"
        ],
        resources: ["1 QA Engineer", "Usage Data Access", "Mobile Testing Devices"]
      }
    ],
    manualTestCases: [
      {
        id: "TL-TC-001",
        userStoryId: "TL-US-001",
        title: "Successful prepaid recharge",
        preconditions: ["Valid prepaid number", "Payment method available"],
        steps: [
          { step: "Navigate to Recharge page", expectedResult: "Recharge form displayed" },
          { step: "Enter mobile number 9876543210", expectedResult: "Number validated, operator detected" },
          { step: "Select recharge amount $10", expectedResult: "Amount selected" },
          { step: "Choose payment method (Card)", expectedResult: "Payment form displayed" },
          { step: "Complete payment", expectedResult: "Payment success message" },
          { step: "Verify balance update", expectedResult: "Balance increased by $10" },
          { step: "Check SMS receipt", expectedResult: "Receipt SMS received" }
        ],
        priority: "High",
        automationCandidate: true,
        automationReason: "Critical flow, can use test payment sandbox, balance verifiable via API"
      },
      {
        id: "TL-TC-002",
        userStoryId: "TL-US-001",
        title: "Invalid mobile number recharge",
        preconditions: ["Access to recharge page"],
        steps: [
          { step: "Navigate to Recharge page", expectedResult: "Recharge form displayed" },
          { step: "Enter invalid number 12345", expectedResult: "Validation error shown" },
          { step: "Enter competitor network number", expectedResult: "Error: Not a valid network number" },
          { step: "Enter deactivated number", expectedResult: "Error: Number not active" }
        ],
        priority: "High",
        automationCandidate: true,
        automationReason: "Negative test cases, input validation, repeatable"
      },
      {
        id: "TL-TC-003",
        userStoryId: "TL-US-002",
        title: "Compare and select plan",
        preconditions: ["User logged in", "Multiple plans available"],
        steps: [
          { step: "Navigate to Plans page", expectedResult: "All plans listed" },
          { step: "Apply filter: Data > 1GB", expectedResult: "Filtered plans shown" },
          { step: "Select 2 plans to compare", expectedResult: "Comparison view displayed" },
          { step: "Verify plan details match catalog", expectedResult: "All details accurate" },
          { step: "Click Activate on preferred plan", expectedResult: "Plan activation initiated" }
        ],
        priority: "High",
        automationCandidate: true,
        automationReason: "Data validation testable, UI stable, good for regression"
      },
      {
        id: "TL-TC-004",
        userStoryId: "TL-US-003",
        title: "View usage dashboard",
        preconditions: ["User logged in", "Active plan with usage"],
        steps: [
          { step: "Navigate to Dashboard", expectedResult: "Dashboard loads" },
          { step: "Verify current balance", expectedResult: "Balance matches billing system" },
          { step: "Check data usage chart", expectedResult: "Chart shows daily usage" },
          { step: "Verify voice minutes", expectedResult: "Minutes remaining accurate" },
          { step: "Check validity countdown", expectedResult: "Days remaining correct" }
        ],
        priority: "Medium",
        automationCandidate: true,
        automationReason: "Data accuracy critical, API verification possible"
      }
    ],
    automationAnalysis: [
      {
        userStoryId: "TL-US-001",
        testCases: [
          {
            testCaseId: "TL-TC-001",
            automatable: true,
            reason: "Critical business flow, payment sandbox available, high regression value",
            framework: "Selenium + REST Assured",
            complexity: "Medium",
            roi: "High"
          },
          {
            testCaseId: "TL-TC-002",
            automatable: true,
            reason: "Input validation, negative testing, quick execution",
            framework: "Selenium WebDriver",
            complexity: "Low",
            roi: "High"
          }
        ],
        automationPercentage: 100,
        recommendedTools: ["Selenium WebDriver", "REST Assured", "Payment Gateway Test Mode"]
      },
      {
        userStoryId: "TL-US-002",
        testCases: [
          {
            testCaseId: "TL-TC-003",
            automatable: true,
            reason: "Data validation, filter testing, comparison verification",
            framework: "Selenium + Database Validation",
            complexity: "Medium",
            roi: "Medium"
          }
        ],
        automationPercentage: 100,
        recommendedTools: ["Selenium WebDriver", "Database Queries", "Plan Catalog API"]
      },
      {
        userStoryId: "TL-US-003",
        testCases: [
          {
            testCaseId: "TL-TC-004",
            automatable: true,
            reason: "Data accuracy verification, API-based validation",
            framework: "REST Assured + Selenium",
            complexity: "Medium",
            roi: "High"
          }
        ],
        automationPercentage: 100,
        recommendedTools: ["REST Assured", "Selenium WebDriver", "Chart Validation Tools"]
      }
    ],
    sprintAutomation: [
      {
        sprintNumber: 1,
        goals: [
          "Set up telecom automation framework",
          "Automate recharge happy path",
          "Create mobile number validation tests"
        ],
        automatedTests: [
          {
            testName: "Prepaid Recharge API Test",
            type: "Smoke",
            framework: "REST Assured",
            code: `@Test
public void testPrepaidRecharge() {
    String requestBody = """
        {
            "mobileNumber": "9876543210",
            "amount": 199,
            "planId": "PLAN_199_28DAYS",
            "paymentMethod": "TEST_CARD"
        }
        """;
    
    // Get initial balance
    double initialBalance = getBalance("9876543210");
    
    Response response = given()
        .header("Authorization", "Bearer " + authToken)
        .header("Content-Type", "application/json")
        .body(requestBody)
    .when()
        .post("/api/v1/recharge")
    .then()
        .statusCode(200)
        .body("status", equalTo("SUCCESS"))
        .body("transactionId", notNullValue())
        .body("newBalance", greaterThan((float)initialBalance))
        .extract().response();
    
    // Verify balance credited
    double newBalance = getBalance("9876543210");
    Assert.assertEquals(newBalance, initialBalance + 199, 0.01);
}`
          },
          {
            testName: "Mobile Number Validation",
            type: "Functional",
            framework: "REST Assured",
            code: `@DataProvider(name = "invalidNumbers")
public Object[][] getInvalidNumbers() {
    return new Object[][] {
        {"12345", "Invalid format"},
        {"9999999999", "Not in network"},
        {"8765432100", "Number deactivated"},
        {"", "Number required"}
    };
}

@Test(dataProvider = "invalidNumbers")
public void testInvalidMobileNumber(String number, String expectedError) {
    given()
        .header("Authorization", "Bearer " + authToken)
        .queryParam("mobile", number)
    .when()
        .get("/api/v1/validate-number")
    .then()
        .statusCode(400)
        .body("error.message", containsString(expectedError));
}`
          }
        ],
        metrics: {
          totalTests: 6,
          automated: 5,
          coverage: 83
        }
      },
      {
        sprintNumber: 2,
        goals: [
          "Automate plan comparison tests",
          "Add usage dashboard validation",
          "Create performance test suite"
        ],
        automatedTests: [
          {
            testName: "Plan Comparison Data Validation",
            type: "Regression",
            framework: "REST Assured + Database",
            code: `@Test
public void testPlanComparisonData() {
    // Get plans from API
    Response response = given()
        .header("Authorization", "Bearer " + authToken)
    .when()
        .get("/api/v1/plans")
    .then()
        .statusCode(200)
        .extract().response();
    
    List<Map<String, Object>> apiPlans = response.jsonPath().getList("plans");
    
    // Get plans from database
    List<Plan> dbPlans = planRepository.findAllActive();
    
    // Verify count matches
    Assert.assertEquals(apiPlans.size(), dbPlans.size());
    
    // Verify each plan data
    for (Map<String, Object> apiPlan : apiPlans) {
        String planId = (String) apiPlan.get("id");
        Plan dbPlan = dbPlans.stream()
            .filter(p -> p.getId().equals(planId))
            .findFirst()
            .orElseThrow();
        
        Assert.assertEquals(apiPlan.get("price"), dbPlan.getPrice());
        Assert.assertEquals(apiPlan.get("data"), dbPlan.getDataGB());
        Assert.assertEquals(apiPlan.get("validity"), dbPlan.getValidityDays());
    }
}`
          },
          {
            testName: "Usage Dashboard Accuracy",
            type: "Regression",
            framework: "Selenium + REST Assured",
            code: `@Test
public void testUsageDashboardAccuracy() {
    // Get expected values from API
    Response usageResponse = given()
        .header("Authorization", "Bearer " + authToken)
    .when()
        .get("/api/v1/usage/" + testMobileNumber)
    .then()
        .statusCode(200)
        .extract().response();
    
    double expectedBalance = usageResponse.jsonPath().getDouble("balance");
    double expectedDataUsed = usageResponse.jsonPath().getDouble("dataUsedGB");
    int expectedMinutes = usageResponse.jsonPath().getInt("voiceMinutes");
    
    // Navigate to dashboard
    driver.get(baseUrl + "/dashboard");
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    
    // Verify balance
    WebElement balanceElement = wait.until(
        ExpectedConditions.visibilityOfElementLocated(By.id("current-balance"))
    );
    double displayedBalance = Double.parseDouble(
        balanceElement.getText().replace("$", "")
    );
    Assert.assertEquals(displayedBalance, expectedBalance, 0.01);
    
    // Verify data usage
    WebElement dataElement = driver.findElement(By.id("data-used"));
    Assert.assertTrue(dataElement.getText().contains(String.valueOf(expectedDataUsed)));
}`
          }
        ],
        metrics: {
          totalTests: 12,
          automated: 10,
          coverage: 83
        }
      }
    ],
    regressionTests: {
      type: "Regression",
      tests: [
        { id: "REG-TL-001", name: "Prepaid recharge flow", priority: "P0", frequency: "Every build", estimatedTime: "3 min" },
        { id: "REG-TL-002", name: "Mobile number validation", priority: "P0", frequency: "Every build", estimatedTime: "2 min" },
        { id: "REG-TL-003", name: "Plan catalog display", priority: "P1", frequency: "Daily", estimatedTime: "3 min" },
        { id: "REG-TL-004", name: "Plan comparison", priority: "P1", frequency: "Daily", estimatedTime: "4 min" },
        { id: "REG-TL-005", name: "Usage dashboard accuracy", priority: "P1", frequency: "Daily", estimatedTime: "3 min" },
        { id: "REG-TL-006", name: "Payment integration", priority: "P0", frequency: "Every build", estimatedTime: "4 min" },
        { id: "REG-TL-007", name: "SMS notification", priority: "P2", frequency: "Weekly", estimatedTime: "5 min" }
      ],
      executionStrategy: "High-frequency tests run in parallel. Billing system integration tests run sequentially to avoid conflicts.",
      ciCdIntegration: "GitLab CI pipeline with billing system health checks. Automated report generation in TestRail."
    },
    smokeTests: {
      type: "Smoke",
      tests: [
        { id: "SMK-TL-001", name: "App login", priority: "P0", frequency: "Every deployment", estimatedTime: "30 sec" },
        { id: "SMK-TL-002", name: "Recharge page loads", priority: "P0", frequency: "Every deployment", estimatedTime: "30 sec" },
        { id: "SMK-TL-003", name: "Plans page accessible", priority: "P0", frequency: "Every deployment", estimatedTime: "30 sec" },
        { id: "SMK-TL-004", name: "Billing API health", priority: "P0", frequency: "Every deployment", estimatedTime: "20 sec" },
        { id: "SMK-TL-005", name: "Payment gateway health", priority: "P0", frequency: "Every deployment", estimatedTime: "20 sec" }
      ],
      executionStrategy: "API health checks first, then critical UI paths. Total execution under 3 minutes.",
      ciCdIntegration: "Kubernetes deployment hook. Automatic rollback on smoke failure. Prometheus metrics for monitoring."
    }
  },

  // Insurance Domain
  {
    domain: "Insurance",
    domainIcon: "🛡️",
    feature: "Policy Purchase & Claims",
    featureDescription: "End-to-end insurance policy purchase and claims management system",
    userStories: [
      {
        id: "IN-US-001",
        title: "Get Insurance Quote",
        asA: "Potential customer",
        iWant: "to get an instant quote for insurance",
        soThat: "I can compare prices before purchasing",
        acceptanceCriteria: [
          "Select insurance type (Health/Auto/Life)",
          "Enter basic details",
          "Instant premium calculation",
          "Display coverage details",
          "Save quote for later"
        ],
        priority: "High",
        storyPoints: 5
      },
      {
        id: "IN-US-002",
        title: "Purchase Insurance Policy",
        asA: "Customer",
        iWant: "to purchase an insurance policy online",
        soThat: "I can get coverage immediately",
        acceptanceCriteria: [
          "Complete KYC verification",
          "Upload required documents",
          "Select payment plan",
          "Process payment",
          "Generate policy document"
        ],
        priority: "High",
        storyPoints: 8
      },
      {
        id: "IN-US-003",
        title: "File Insurance Claim",
        asA: "Policy holder",
        iWant: "to file a claim online",
        soThat: "I can get reimbursement quickly",
        acceptanceCriteria: [
          "Select claim type",
          "Enter incident details",
          "Upload supporting documents",
          "Track claim status",
          "Receive updates via email/SMS"
        ],
        priority: "High",
        storyPoints: 8
      }
    ],
    testPlans: [
      {
        userStoryId: "IN-US-001",
        objective: "Validate quote generation accuracy across all insurance types",
        scope: [
          "Insurance type selection",
          "Premium calculation logic",
          "Coverage display",
          "Quote saving functionality",
          "Cross-browser compatibility"
        ],
        approach: "Algorithm testing with actuarial validation, UI testing across browsers",
        testTypes: ["Functional", "Algorithm Validation", "UI", "Cross-Browser"],
        entryExitCriteria: {
          entry: [
            "Premium calculation API ready",
            "Actuarial tables loaded",
            "Quote storage implemented"
          ],
          exit: [
            "Premium calculations verified",
            "All quote scenarios tested",
            "Cross-browser testing passed"
          ]
        },
        risks: [
          "Calculation rounding errors",
          "Rate table updates",
          "Quote expiry handling"
        ],
        resources: ["2 QA Engineers", "Actuarial Consultant", "BrowserStack Access"]
      },
      {
        userStoryId: "IN-US-002",
        objective: "Ensure policy purchase flow is secure, compliant, and user-friendly",
        scope: [
          "KYC verification",
          "Document upload",
          "Payment processing",
          "Policy generation",
          "Regulatory compliance"
        ],
        approach: "End-to-end testing with compliance checklist verification",
        testTypes: ["Functional", "Security", "Compliance", "Integration"],
        entryExitCriteria: {
          entry: [
            "KYC service available",
            "Document processing ready",
            "Payment gateway configured",
            "Compliance requirements documented"
          ],
          exit: [
            "All purchase flows tested",
            "Security audit passed",
            "Compliance checklist verified",
            "Policy document generation validated"
          ]
        },
        risks: [
          "KYC service downtime",
          "Document format issues",
          "Payment failures",
          "Compliance violations"
        ],
        resources: ["2 QA Engineers", "Security Tester", "Compliance Officer"]
      },
      {
        userStoryId: "IN-US-003",
        objective: "Validate claims filing process is smooth and status tracking is accurate",
        scope: [
          "Claim submission",
          "Document upload",
          "Status tracking",
          "Notification delivery",
          "Workflow automation"
        ],
        approach: "Workflow testing with various claim scenarios",
        testTypes: ["Functional", "Workflow", "Integration", "UAT"],
        entryExitCriteria: {
          entry: [
            "Claims workflow implemented",
            "Document processing ready",
            "Notification service configured"
          ],
          exit: [
            "All claim types tested",
            "Workflow transitions verified",
            "Notifications validated"
          ]
        },
        risks: [
          "Document processing errors",
          "Status sync issues",
          "Notification delays"
        ],
        resources: ["2 QA Engineers", "Claims Domain Expert", "Workflow Testing Tools"]
      }
    ],
    manualTestCases: [
      {
        id: "IN-TC-001",
        userStoryId: "IN-US-001",
        title: "Generate health insurance quote",
        preconditions: ["Access to quote page", "Test data prepared"],
        steps: [
          { step: "Navigate to Get Quote", expectedResult: "Quote form displayed" },
          { step: "Select Health Insurance", expectedResult: "Health form fields shown" },
          { step: "Enter age: 35, Non-smoker", expectedResult: "Fields accepted" },
          { step: "Select coverage: $500,000", expectedResult: "Coverage selected" },
          { step: "Click Get Quote", expectedResult: "Premium calculated and displayed" },
          { step: "Verify premium matches actuarial table", expectedResult: "Premium is accurate" },
          { step: "Save quote", expectedResult: "Quote saved with reference number" }
        ],
        priority: "High",
        automationCandidate: true,
        automationReason: "Premium calculation verification, data-driven testing opportunity"
      },
      {
        id: "IN-TC-002",
        userStoryId: "IN-US-001",
        title: "Quote with pre-existing conditions",
        preconditions: ["Access to quote page"],
        steps: [
          { step: "Select Health Insurance", expectedResult: "Form displayed" },
          { step: "Enter details with pre-existing condition (Diabetes)", expectedResult: "Condition recorded" },
          { step: "Generate quote", expectedResult: "Higher premium displayed" },
          { step: "Verify loading factor applied", expectedResult: "Premium increased correctly" }
        ],
        priority: "High",
        automationCandidate: true,
        automationReason: "Algorithm validation, risk factor testing"
      },
      {
        id: "IN-TC-003",
        userStoryId: "IN-US-002",
        title: "Complete policy purchase with KYC",
        preconditions: ["Valid quote exists", "KYC documents ready"],
        steps: [
          { step: "Click Buy Now on quote", expectedResult: "Purchase flow starts" },
          { step: "Upload ID proof", expectedResult: "Document uploaded" },
          { step: "Upload address proof", expectedResult: "Document uploaded" },
          { step: "Enter bank details for premium", expectedResult: "Details accepted" },
          { step: "Complete payment", expectedResult: "Payment successful" },
          { step: "Verify policy document generated", expectedResult: "Policy PDF available" },
          { step: "Verify email with policy", expectedResult: "Email received with attachment" }
        ],
        priority: "High",
        automationCandidate: false,
        automationReason: "KYC verification requires manual document checks, regulatory compliance"
      },
      {
        id: "IN-TC-004",
        userStoryId: "IN-US-003",
        title: "File health insurance claim",
        preconditions: ["Active policy", "Claim documents ready"],
        steps: [
          { step: "Navigate to File Claim", expectedResult: "Claim form displayed" },
          { step: "Select policy number", expectedResult: "Policy details shown" },
          { step: "Select claim type: Hospitalization", expectedResult: "Hospital form shown" },
          { step: "Enter hospital details", expectedResult: "Details accepted" },
          { step: "Upload hospital bills", expectedResult: "Documents uploaded" },
          { step: "Upload discharge summary", expectedResult: "Document uploaded" },
          { step: "Submit claim", expectedResult: "Claim number generated" },
          { step: "Verify claim status", expectedResult: "Status shows 'Under Review'" }
        ],
        priority: "High",
        automationCandidate: true,
        automationReason: "Document upload testable, status verification via API"
      },
      {
        id: "IN-TC-005",
        userStoryId: "IN-US-003",
        title: "Track claim status updates",
        preconditions: ["Submitted claim exists"],
        steps: [
          { step: "Navigate to Claim Status", expectedResult: "Status page displayed" },
          { step: "Enter claim number", expectedResult: "Claim details shown" },
          { step: "Verify status timeline", expectedResult: "All status changes shown" },
          { step: "Verify notification history", expectedResult: "SMS/Email history displayed" },
          { step: "Download claim documents", expectedResult: "Documents downloadable" }
        ],
        priority: "Medium",
        automationCandidate: true,
        automationReason: "Status tracking testable, notification verification possible"
      }
    ],
    automationAnalysis: [
      {
        userStoryId: "IN-US-001",
        testCases: [
          {
            testCaseId: "IN-TC-001",
            automatable: true,
            reason: "Premium calculation verification, data-driven with actuarial tables",
            framework: "Selenium + REST Assured",
            complexity: "Medium",
            roi: "High"
          },
          {
            testCaseId: "IN-TC-002",
            automatable: true,
            reason: "Risk factor algorithm testing, multiple condition combinations",
            framework: "REST Assured + Data Provider",
            complexity: "Medium",
            roi: "High"
          }
        ],
        automationPercentage: 100,
        recommendedTools: ["REST Assured", "TestNG DataProvider", "Actuarial Validation Scripts"]
      },
      {
        userStoryId: "IN-US-002",
        testCases: [
          {
            testCaseId: "IN-TC-003",
            automatable: false,
            reason: "KYC verification involves manual document checks, regulatory requirements",
            framework: "Manual Testing with Checklist",
            complexity: "High",
            roi: "Low"
          }
        ],
        automationPercentage: 30,
        recommendedTools: ["Manual Testing", "Document Checklist", "Compliance Verification Tools"]
      },
      {
        userStoryId: "IN-US-003",
        testCases: [
          {
            testCaseId: "IN-TC-004",
            automatable: true,
            reason: "Document upload and status verification testable",
            framework: "Selenium + REST Assured",
            complexity: "Medium",
            roi: "High"
          },
          {
            testCaseId: "IN-TC-005",
            automatable: true,
            reason: "Status tracking and notification verification via API",
            framework: "REST Assured",
            complexity: "Low",
            roi: "Medium"
          }
        ],
        automationPercentage: 80,
        recommendedTools: ["Selenium WebDriver", "REST Assured", "Database Validation"]
      }
    ],
    sprintAutomation: [
      {
        sprintNumber: 1,
        goals: [
          "Set up insurance automation framework",
          "Automate quote generation",
          "Create premium calculation validation tests"
        ],
        automatedTests: [
          {
            testName: "Premium Calculation - Health Insurance",
            type: "Functional",
            framework: "REST Assured + TestNG",
            code: `@DataProvider(name = "healthQuoteData")
public Object[][] getHealthQuoteData() {
    return new Object[][] {
        // age, smoker, coverage, expectedPremium
        {25, false, 500000, 450.00},
        {35, false, 500000, 650.00},
        {45, false, 500000, 950.00},
        {35, true, 500000, 850.00},  // Smoker loading
        {35, false, 1000000, 1100.00}
    };
}

@Test(dataProvider = "healthQuoteData")
public void testHealthPremiumCalculation(
    int age, boolean smoker, int coverage, double expectedPremium) {
    
    String requestBody = String.format("""
        {
            "insuranceType": "HEALTH",
            "age": %d,
            "smoker": %b,
            "coverageAmount": %d
        }
        """, age, smoker, coverage);
    
    given()
        .header("Content-Type", "application/json")
        .body(requestBody)
    .when()
        .post("/api/v1/quote/calculate")
    .then()
        .statusCode(200)
        .body("premium", closeTo(expectedPremium, 0.01))
        .body("coverageDetails", notNullValue())
        .body("validUntil", notNullValue());
}`
          },
          {
            testName: "Quote Save and Retrieve",
            type: "Smoke",
            framework: "REST Assured",
            code: `@Test
public void testQuoteSaveAndRetrieve() {
    // Generate quote
    String quoteRequest = """
        {
            "insuranceType": "HEALTH",
            "age": 30,
            "smoker": false,
            "coverageAmount": 500000
        }
        """;
    
    Response quoteResponse = given()
        .header("Authorization", "Bearer " + authToken)
        .header("Content-Type", "application/json")
        .body(quoteRequest)
    .when()
        .post("/api/v1/quote/calculate")
    .then()
        .statusCode(200)
        .extract().response();
    
    double premium = quoteResponse.jsonPath().getDouble("premium");
    String quoteId = quoteResponse.jsonPath().getString("quoteId");
    
    // Save quote
    given()
        .header("Authorization", "Bearer " + authToken)
    .when()
        .post("/api/v1/quote/save/" + quoteId)
    .then()
        .statusCode(200)
        .body("saved", equalTo(true));
    
    // Retrieve saved quote
    given()
        .header("Authorization", "Bearer " + authToken)
    .when()
        .get("/api/v1/quote/" + quoteId)
    .then()
        .statusCode(200)
        .body("premium", closeTo(premium, 0.01))
        .body("status", equalTo("SAVED"));
}`
          }
        ],
        metrics: {
          totalTests: 8,
          automated: 6,
          coverage: 75
        }
      },
      {
        sprintNumber: 2,
        goals: [
          "Automate claims workflow",
          "Add status tracking tests",
          "Create document validation tests"
        ],
        automatedTests: [
          {
            testName: "File Insurance Claim",
            type: "Regression",
            framework: "REST Assured + File Upload",
            code: `@Test
public void testFileInsuranceClaim() {
    // Create claim
    String claimRequest = String.format("""
        {
            "policyNumber": "%s",
            "claimType": "HOSPITALIZATION",
            "incidentDate": "2024-01-15",
            "hospitalName": "City General Hospital",
            "treatmentDetails": "Emergency appendectomy",
            "claimAmount": 25000
        }
        """, testPolicyNumber);
    
    Response claimResponse = given()
        .header("Authorization", "Bearer " + authToken)
        .header("Content-Type", "application/json")
        .body(claimRequest)
    .when()
        .post("/api/v1/claims")
    .then()
        .statusCode(201)
        .body("claimNumber", notNullValue())
        .body("status", equalTo("DOCUMENT_PENDING"))
        .extract().response();
    
    String claimNumber = claimResponse.jsonPath().getString("claimNumber");
    
    // Upload hospital bill
    File hospitalBill = new File("testdata/hospital_bill.pdf");
    given()
        .header("Authorization", "Bearer " + authToken)
        .multiPart("document", hospitalBill)
        .multiPart("documentType", "HOSPITAL_BILL")
    .when()
        .post("/api/v1/claims/" + claimNumber + "/documents")
    .then()
        .statusCode(200)
        .body("uploaded", equalTo(true));
    
    // Verify status updated
    given()
        .header("Authorization", "Bearer " + authToken)
    .when()
        .get("/api/v1/claims/" + claimNumber)
    .then()
        .statusCode(200)
        .body("status", equalTo("UNDER_REVIEW"))
        .body("documents.size()", greaterThan(0));
}`
          },
          {
            testName: "Claim Status Tracking",
            type: "Regression",
            framework: "REST Assured",
            code: `@Test
public void testClaimStatusTracking() {
    // Get claim with status history
    given()
        .header("Authorization", "Bearer " + authToken)
    .when()
        .get("/api/v1/claims/" + existingClaimNumber + "/status-history")
    .then()
        .statusCode(200)
        .body("currentStatus", notNullValue())
        .body("history.size()", greaterThan(0))
        .body("history[0].status", equalTo("SUBMITTED"))
        .body("history[0].timestamp", notNullValue())
        .body("notifications.size()", greaterThan(0));
    
    // Verify notification was sent
    given()
        .header("Authorization", "Bearer " + authToken)
    .when()
        .get("/api/v1/notifications/claim/" + existingClaimNumber)
    .then()
        .statusCode(200)
        .body("emailSent", equalTo(true))
        .body("smsSent", equalTo(true));
}`
          }
        ],
        metrics: {
          totalTests: 15,
          automated: 11,
          coverage: 73
        }
      }
    ],
    regressionTests: {
      type: "Regression",
      tests: [
        { id: "REG-IN-001", name: "Quote generation all types", priority: "P0", frequency: "Every build", estimatedTime: "4 min" },
        { id: "REG-IN-002", name: "Premium calculation accuracy", priority: "P0", frequency: "Every build", estimatedTime: "5 min" },
        { id: "REG-IN-003", name: "Policy purchase flow", priority: "P0", frequency: "Daily", estimatedTime: "8 min" },
        { id: "REG-IN-004", name: "Document upload", priority: "P1", frequency: "Daily", estimatedTime: "4 min" },
        { id: "REG-IN-005", name: "Claim submission", priority: "P0", frequency: "Daily", estimatedTime: "5 min" },
        { id: "REG-IN-006", name: "Claim status tracking", priority: "P1", frequency: "Daily", estimatedTime: "3 min" },
        { id: "REG-IN-007", name: "Payment integration", priority: "P0", frequency: "Daily", estimatedTime: "4 min" },
        { id: "REG-IN-008", name: "Policy document generation", priority: "P1", frequency: "Daily", estimatedTime: "5 min" }
      ],
      executionStrategy: "Actuarial validation tests run first, followed by workflow tests. Document tests run in parallel.",
      ciCdIntegration: "Azure DevOps pipeline with compliance gates. Automated reporting to regulatory dashboard."
    },
    smokeTests: {
      type: "Smoke",
      tests: [
        { id: "SMK-IN-001", name: "Homepage loads", priority: "P0", frequency: "Every deployment", estimatedTime: "30 sec" },
        { id: "SMK-IN-002", name: "Quote form accessible", priority: "P0", frequency: "Every deployment", estimatedTime: "30 sec" },
        { id: "SMK-IN-003", name: "Premium API responsive", priority: "P0", frequency: "Every deployment", estimatedTime: "20 sec" },
        { id: "SMK-IN-004", name: "Claims portal accessible", priority: "P0", frequency: "Every deployment", estimatedTime: "30 sec" },
        { id: "SMK-IN-005", name: "Document upload working", priority: "P0", frequency: "Every deployment", estimatedTime: "45 sec" }
      ],
      executionStrategy: "Critical path validation with health checks. Any failure triggers immediate investigation.",
      ciCdIntegration: "Deployment gate in all environments. Integration with incident management system."
    }
  }
];

// STLC Agile Documentation Templates
export const stlcDocumentation = {
  sprintPlanningChecklist: [
    "Review and refine user stories from backlog",
    "Identify testing scope for each story",
    "Estimate testing effort (story points/hours)",
    "Identify automation candidates",
    "Plan test environment needs",
    "Identify test data requirements",
    "Coordinate with developers on testability"
  ],
  dailyScrumTestingFocus: [
    "What did I test yesterday?",
    "What will I test today?",
    "Any blockers for testing?",
    "Environment issues?",
    "Defects found that need discussion?"
  ],
  sprintReviewTestMetrics: [
    "Test cases executed vs planned",
    "Pass/Fail ratio",
    "Defects found vs fixed",
    "Test automation progress",
    "Code coverage metrics",
    "Performance benchmarks"
  ],
  retrospectiveTestingTopics: [
    "What testing practices worked well?",
    "What testing challenges did we face?",
    "How can we improve test efficiency?",
    "Automation improvements needed?",
    "Better ways to collaborate with dev?"
  ]
};

export const automationDecisionMatrix = {
  criteria: [
    { factor: "Execution Frequency", weight: 25, description: "How often the test needs to run" },
    { factor: "Business Criticality", weight: 25, description: "Impact on business if feature fails" },
    { factor: "Stability", weight: 20, description: "How stable is the feature/UI" },
    { factor: "Complexity", weight: 15, description: "Effort to automate vs manual execution" },
    { factor: "Data Variations", weight: 15, description: "Need for data-driven testing" }
  ],
  scoring: {
    high: 3,
    medium: 2,
    low: 1
  },
  recommendation: {
    "7-9": "High priority for automation",
    "4-6": "Consider for automation based on ROI",
    "1-3": "Keep as manual test"
  }
};
