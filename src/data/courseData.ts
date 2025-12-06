import { 
  BookOpen, 
  Settings, 
  TestTube, 
  Layers, 
  PenTool, 
  FileText, 
  Target, 
  Bug, 
  Zap, 
  HelpCircle, 
  CheckSquare,
  FileSearch,
  ClipboardList
} from "lucide-react";

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: any;
  lessons: Lesson[];
  color: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  content: LessonContent;
}

export interface LessonContent {
  overview: string;
  sections: ContentSection[];
  keyTakeaways: string[];
  quiz?: QuizQuestion[];
}

export interface ContentSection {
  title: string;
  content: string;
  type: "text" | "table" | "diagram" | "code" | "example";
  tableData?: { headers: string[]; rows: string[][] };
  codeBlock?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface TestCase {
  id: string;
  category: string;
  title: string;
  preconditions: string;
  steps: string[];
  testData: string;
  expectedResult: string;
  priority: "P1" | "P2" | "P3";
  type: "Positive" | "Negative" | "Boundary" | "Edge Case";
}

export const testCases: TestCase[] = [
  // Login Test Cases
  {
    id: "TC_LOGIN_001",
    category: "Login",
    title: "Valid Login with Correct Credentials",
    preconditions: "User has a registered account",
    steps: ["Navigate to login page", "Enter valid email", "Enter valid password", "Click Login button"],
    testData: "email: user@test.com, password: Valid@123",
    expectedResult: "User redirected to dashboard with welcome message",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_LOGIN_002",
    category: "Login",
    title: "Login with Invalid Email Format",
    preconditions: "None",
    steps: ["Navigate to login page", "Enter invalid email format", "Click Login button"],
    testData: "email: invalidformat, password: Valid@123",
    expectedResult: "Error message: 'Please enter a valid email address'",
    priority: "P1",
    type: "Negative"
  },
  {
    id: "TC_LOGIN_003",
    category: "Login",
    title: "Login with Wrong Password",
    preconditions: "User has a registered account",
    steps: ["Navigate to login page", "Enter valid email", "Enter incorrect password", "Click Login button"],
    testData: "email: user@test.com, password: WrongPass",
    expectedResult: "Error message: 'Invalid credentials'",
    priority: "P1",
    type: "Negative"
  },
  {
    id: "TC_LOGIN_004",
    category: "Login",
    title: "Login with Empty Fields",
    preconditions: "None",
    steps: ["Navigate to login page", "Leave email and password empty", "Click Login button"],
    testData: "email: (empty), password: (empty)",
    expectedResult: "Error messages for both required fields",
    priority: "P1",
    type: "Negative"
  },
  {
    id: "TC_LOGIN_005",
    category: "Login",
    title: "Account Lockout After 3 Failed Attempts",
    preconditions: "User has a registered account",
    steps: ["Navigate to login page", "Enter wrong password 3 times", "Attempt 4th login"],
    testData: "email: user@test.com",
    expectedResult: "Account locked message with cooldown timer",
    priority: "P1",
    type: "Negative"
  },
  {
    id: "TC_LOGIN_006",
    category: "Login",
    title: "Password Minimum Length Boundary",
    preconditions: "Password must be 8+ characters",
    steps: ["Navigate to login page", "Enter 7 character password", "Click Login"],
    testData: "password: Pass123 (7 chars)",
    expectedResult: "Error: 'Password must be at least 8 characters'",
    priority: "P2",
    type: "Boundary"
  },
  {
    id: "TC_LOGIN_007",
    category: "Login",
    title: "SQL Injection Prevention",
    preconditions: "None",
    steps: ["Navigate to login page", "Enter SQL injection string in email", "Click Login"],
    testData: "email: ' OR '1'='1",
    expectedResult: "Error message, no database breach",
    priority: "P1",
    type: "Edge Case"
  },
  {
    id: "TC_LOGIN_008",
    category: "Login",
    title: "Remember Me Functionality",
    preconditions: "Valid user account",
    steps: ["Login with Remember Me checked", "Close browser", "Reopen application"],
    testData: "email: user@test.com",
    expectedResult: "User remains logged in",
    priority: "P2",
    type: "Positive"
  },
  // Registration Test Cases
  {
    id: "TC_REG_001",
    category: "Registration",
    title: "Successful User Registration",
    preconditions: "Email not already registered",
    steps: ["Navigate to signup page", "Fill all required fields", "Accept terms", "Click Register"],
    testData: "name: John Doe, email: new@test.com, password: Valid@123",
    expectedResult: "Success message, verification email sent",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_REG_002",
    category: "Registration",
    title: "Registration with Duplicate Email",
    preconditions: "Email already exists in database",
    steps: ["Navigate to signup page", "Enter existing email", "Fill other fields", "Click Register"],
    testData: "email: existing@test.com",
    expectedResult: "Error: 'Email already registered'",
    priority: "P1",
    type: "Negative"
  },
  {
    id: "TC_REG_003",
    category: "Registration",
    title: "Password Confirmation Mismatch",
    preconditions: "None",
    steps: ["Navigate to signup page", "Enter password", "Enter different confirm password", "Click Register"],
    testData: "password: Valid@123, confirm: Valid@456",
    expectedResult: "Error: 'Passwords do not match'",
    priority: "P1",
    type: "Negative"
  },
  {
    id: "TC_REG_004",
    category: "Registration",
    title: "Weak Password Rejection",
    preconditions: "None",
    steps: ["Navigate to signup page", "Enter password without special character", "Click Register"],
    testData: "password: password123",
    expectedResult: "Error: 'Password must include special character'",
    priority: "P1",
    type: "Negative"
  },
  {
    id: "TC_REG_005",
    category: "Registration",
    title: "Age Boundary - Under 18",
    preconditions: "Minimum age requirement is 18",
    steps: ["Navigate to signup page", "Enter birthdate making user 17", "Click Register"],
    testData: "dob: (17 years old)",
    expectedResult: "Error: 'Must be 18 or older to register'",
    priority: "P2",
    type: "Boundary"
  },
  // Search Test Cases
  {
    id: "TC_SEARCH_001",
    category: "Search",
    title: "Valid Search Returns Results",
    preconditions: "Products exist in database",
    steps: ["Navigate to search page", "Enter valid search term", "Click Search"],
    testData: "query: 'laptop'",
    expectedResult: "Relevant products displayed with count",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_SEARCH_002",
    category: "Search",
    title: "Search with No Results",
    preconditions: "None",
    steps: ["Enter non-existent search term", "Click Search"],
    testData: "query: 'xyznonexistent123'",
    expectedResult: "'No results found' message with suggestions",
    priority: "P1",
    type: "Negative"
  },
  {
    id: "TC_SEARCH_003",
    category: "Search",
    title: "Search with Special Characters",
    preconditions: "None",
    steps: ["Enter special characters in search", "Click Search"],
    testData: "query: '@#$%^&*'",
    expectedResult: "Handled gracefully, no crash or error",
    priority: "P2",
    type: "Edge Case"
  },
  {
    id: "TC_SEARCH_004",
    category: "Search",
    title: "Case Insensitive Search",
    preconditions: "Products exist",
    steps: ["Search 'LAPTOP'", "Search 'laptop'", "Compare results"],
    testData: "query: 'LAPTOP' and 'laptop'",
    expectedResult: "Same results returned for both",
    priority: "P2",
    type: "Positive"
  },
  {
    id: "TC_SEARCH_005",
    category: "Search",
    title: "Search with Maximum Characters",
    preconditions: "Field limit is 100 characters",
    steps: ["Enter 101 character search string", "Observe behavior"],
    testData: "query: (101 chars)",
    expectedResult: "Field truncates or shows limit warning",
    priority: "P3",
    type: "Boundary"
  },
  // Cart Test Cases
  {
    id: "TC_CART_001",
    category: "Shopping Cart",
    title: "Add Single Item to Cart",
    preconditions: "User is on product page",
    steps: ["Select product", "Click 'Add to Cart'", "View cart"],
    testData: "Product: iPhone 15, Qty: 1",
    expectedResult: "Product added, cart count updates to 1",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_CART_002",
    category: "Shopping Cart",
    title: "Update Item Quantity",
    preconditions: "Cart has items",
    steps: ["Open cart", "Change quantity from 1 to 3", "Save"],
    testData: "Initial: 1, New: 3",
    expectedResult: "Quantity updated, total recalculated",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_CART_003",
    category: "Shopping Cart",
    title: "Remove Item from Cart",
    preconditions: "Cart has 3 items",
    steps: ["Open cart", "Click remove on item 2", "Confirm"],
    testData: "Remove middle item",
    expectedResult: "Item removed, 2 items remain, total updated",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_CART_004",
    category: "Shopping Cart",
    title: "Add Item Beyond Stock Limit",
    preconditions: "Product has 5 units in stock",
    steps: ["Add 6 units to cart"],
    testData: "Qty: 6, Stock: 5",
    expectedResult: "Error: 'Only 5 units available'",
    priority: "P1",
    type: "Boundary"
  },
  {
    id: "TC_CART_005",
    category: "Shopping Cart",
    title: "Cart Persistence After Logout",
    preconditions: "Cart has items, user logged in",
    steps: ["Add items to cart", "Logout", "Login again", "Check cart"],
    testData: "3 items in cart",
    expectedResult: "Cart items preserved after re-login",
    priority: "P2",
    type: "Positive"
  },
  // Payment Test Cases
  {
    id: "TC_PAY_001",
    category: "Payment",
    title: "Successful Credit Card Payment",
    preconditions: "Cart has items, valid card",
    steps: ["Proceed to checkout", "Enter valid card details", "Click Pay"],
    testData: "Card: 4111111111111111, CVV: 123",
    expectedResult: "Payment processed, order confirmation shown",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_PAY_002",
    category: "Payment",
    title: "Payment with Expired Card",
    preconditions: "Cart has items",
    steps: ["Proceed to checkout", "Enter expired card", "Click Pay"],
    testData: "Expiry: 01/2020",
    expectedResult: "Error: 'Card has expired'",
    priority: "P1",
    type: "Negative"
  },
  {
    id: "TC_PAY_003",
    category: "Payment",
    title: "Payment with Invalid CVV",
    preconditions: "Cart has items",
    steps: ["Enter valid card with wrong CVV", "Click Pay"],
    testData: "CVV: 999 (invalid)",
    expectedResult: "Error: 'Invalid CVV'",
    priority: "P1",
    type: "Negative"
  },
  {
    id: "TC_PAY_004",
    category: "Payment",
    title: "Apply Valid Coupon Code",
    preconditions: "Active coupon exists",
    steps: ["Enter coupon code", "Click Apply"],
    testData: "Code: SAVE20",
    expectedResult: "20% discount applied, total updated",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_PAY_005",
    category: "Payment",
    title: "Apply Expired Coupon Code",
    preconditions: "Coupon has expired",
    steps: ["Enter expired coupon", "Click Apply"],
    testData: "Code: OLDCODE",
    expectedResult: "Error: 'Coupon has expired'",
    priority: "P2",
    type: "Negative"
  },
  // File Upload Test Cases
  {
    id: "TC_UPLOAD_001",
    category: "File Upload",
    title: "Upload Valid Image File",
    preconditions: "On file upload page",
    steps: ["Click upload", "Select valid JPG file", "Confirm upload"],
    testData: "File: photo.jpg (2MB)",
    expectedResult: "File uploaded successfully, preview shown",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_UPLOAD_002",
    category: "File Upload",
    title: "Upload File Exceeding Size Limit",
    preconditions: "Max file size is 5MB",
    steps: ["Select 10MB file", "Attempt upload"],
    testData: "File: large.jpg (10MB)",
    expectedResult: "Error: 'File exceeds 5MB limit'",
    priority: "P1",
    type: "Boundary"
  },
  {
    id: "TC_UPLOAD_003",
    category: "File Upload",
    title: "Upload Invalid File Type",
    preconditions: "Only images allowed",
    steps: ["Select .exe file", "Attempt upload"],
    testData: "File: virus.exe",
    expectedResult: "Error: 'File type not allowed'",
    priority: "P1",
    type: "Negative"
  },
  {
    id: "TC_UPLOAD_004",
    category: "File Upload",
    title: "Cancel Upload Mid-Progress",
    preconditions: "Large file uploading",
    steps: ["Start large file upload", "Click Cancel", "Verify"],
    testData: "File: video.mp4 (50MB)",
    expectedResult: "Upload cancelled, no partial file saved",
    priority: "P2",
    type: "Positive"
  },
  // Form Validation Test Cases
  {
    id: "TC_FORM_001",
    category: "Form Validation",
    title: "Submit Form with All Valid Data",
    preconditions: "On form page",
    steps: ["Fill all fields correctly", "Click Submit"],
    testData: "All fields valid",
    expectedResult: "Form submitted, success message",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_FORM_002",
    category: "Form Validation",
    title: "Required Field Validation",
    preconditions: "On form page",
    steps: ["Leave required field empty", "Click Submit"],
    testData: "Name: (empty)",
    expectedResult: "Error: 'This field is required'",
    priority: "P1",
    type: "Negative"
  },
  {
    id: "TC_FORM_003",
    category: "Form Validation",
    title: "Email Format Validation",
    preconditions: "On form page",
    steps: ["Enter invalid email format", "Tab out or submit"],
    testData: "email: 'not-an-email'",
    expectedResult: "Error: 'Enter a valid email address'",
    priority: "P1",
    type: "Negative"
  },
  {
    id: "TC_FORM_004",
    category: "Form Validation",
    title: "Phone Number Format Validation",
    preconditions: "On form page",
    steps: ["Enter letters in phone field", "Submit"],
    testData: "phone: 'abcdefghij'",
    expectedResult: "Error: 'Enter a valid phone number'",
    priority: "P2",
    type: "Negative"
  },
  {
    id: "TC_FORM_005",
    category: "Form Validation",
    title: "Maximum Character Limit",
    preconditions: "Field has 100 char limit",
    steps: ["Enter 101 characters", "Submit"],
    testData: "text: (101 chars)",
    expectedResult: "Error or field truncates at 100",
    priority: "P2",
    type: "Boundary"
  },
  // Pagination Test Cases
  {
    id: "TC_PAGE_001",
    category: "Pagination",
    title: "Navigate to Next Page",
    preconditions: "Multiple pages exist",
    steps: ["Load list view", "Click Next"],
    testData: "On page 1 of 5",
    expectedResult: "Page 2 content loads",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_PAGE_002",
    category: "Pagination",
    title: "Navigate to Specific Page",
    preconditions: "Multiple pages exist",
    steps: ["Click page number 4"],
    testData: "On page 1 of 5",
    expectedResult: "Page 4 content loads directly",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_PAGE_003",
    category: "Pagination",
    title: "First Page - Previous Disabled",
    preconditions: "On first page",
    steps: ["Verify Previous button state"],
    testData: "On page 1",
    expectedResult: "Previous button is disabled",
    priority: "P2",
    type: "Boundary"
  },
  {
    id: "TC_PAGE_004",
    category: "Pagination",
    title: "Last Page - Next Disabled",
    preconditions: "On last page",
    steps: ["Navigate to last page", "Verify Next button"],
    testData: "On page 5 of 5",
    expectedResult: "Next button is disabled",
    priority: "P2",
    type: "Boundary"
  },
  {
    id: "TC_PAGE_005",
    category: "Pagination",
    title: "Change Items Per Page",
    preconditions: "On paginated list",
    steps: ["Change dropdown from 10 to 50", "Verify"],
    testData: "Items per page: 50",
    expectedResult: "50 items displayed, pagination updates",
    priority: "P2",
    type: "Positive"
  },
  
  // Insurance Test Cases
  {
    id: "TC_INS_001",
    category: "Insurance",
    title: "New Policy Creation with Valid Details",
    preconditions: "User is logged in as agent",
    steps: ["Navigate to New Policy", "Enter policyholder details", "Select coverage type", "Enter premium amount", "Submit policy"],
    testData: "Name: John Doe, DOB: 15/03/1985, Coverage: Life Insurance, Premium: $500/month",
    expectedResult: "Policy created successfully with unique policy number generated",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_INS_002",
    category: "Insurance",
    title: "Claim Submission with Required Documents",
    preconditions: "Valid policy exists, User logged in",
    steps: ["Go to Claims section", "Select policy", "Enter claim details", "Upload documents", "Submit claim"],
    testData: "Policy: POL123456, Claim Type: Medical, Amount: $5000",
    expectedResult: "Claim submitted with tracking number, status shows 'Under Review'",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_INS_003",
    category: "Insurance",
    title: "Premium Calculation Based on Age",
    preconditions: "On policy creation page",
    steps: ["Enter DOB for 25-year-old", "Select term life", "View premium", "Change DOB to 55-year-old", "Compare premium"],
    testData: "Age 25 vs Age 55, Same coverage amount",
    expectedResult: "Premium for 55-year-old is higher than 25-year-old",
    priority: "P1",
    type: "Boundary"
  },
  {
    id: "TC_INS_004",
    category: "Insurance",
    title: "Policy Renewal Before Expiry",
    preconditions: "Policy expiring in 30 days",
    steps: ["Login", "View expiring policy", "Click Renew", "Confirm renewal terms", "Make payment"],
    testData: "Policy: POL789012, Expiry: 30 days",
    expectedResult: "Policy renewed, new expiry date extended by 1 year",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_INS_005",
    category: "Insurance",
    title: "Claim Rejection for Expired Policy",
    preconditions: "Policy has expired",
    steps: ["Attempt to file claim", "Enter claim details", "Submit"],
    testData: "Expired Policy: POL456789",
    expectedResult: "Error: 'Cannot file claim - Policy expired on [date]'",
    priority: "P1",
    type: "Negative"
  },
  {
    id: "TC_INS_006",
    category: "Insurance",
    title: "Beneficiary Update on Existing Policy",
    preconditions: "Active policy exists",
    steps: ["Navigate to policy details", "Edit beneficiary", "Enter new beneficiary", "Save changes"],
    testData: "New Beneficiary: Jane Doe, Relationship: Spouse",
    expectedResult: "Beneficiary updated, confirmation sent to policyholder",
    priority: "P2",
    type: "Positive"
  },
  {
    id: "TC_INS_007",
    category: "Insurance",
    title: "Quote Generation for Multiple Coverage Types",
    preconditions: "Guest or logged-in user",
    steps: ["Go to Get Quote", "Enter details", "Select multiple coverages", "Generate quote"],
    testData: "Life + Health + Auto bundle",
    expectedResult: "Combined quote displayed with bundle discount applied",
    priority: "P2",
    type: "Positive"
  },
  {
    id: "TC_INS_008",
    category: "Insurance",
    title: "Policy Document Download",
    preconditions: "Active policy exists",
    steps: ["Go to My Policies", "Select policy", "Click Download Documents"],
    testData: "Policy: POL123456",
    expectedResult: "PDF downloaded with policy terms, coverage details, premium schedule",
    priority: "P2",
    type: "Positive"
  },

  // Banking Test Cases
  {
    id: "TC_BANK_001",
    category: "Banking",
    title: "Fund Transfer Between Own Accounts",
    preconditions: "User has savings and checking accounts",
    steps: ["Login to banking portal", "Go to Transfers", "Select From/To accounts", "Enter amount", "Confirm transfer"],
    testData: "From: Savings (Bal: $5000), To: Checking, Amount: $1000",
    expectedResult: "Transfer successful, balances updated immediately",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_BANK_002",
    category: "Banking",
    title: "Transfer Exceeding Available Balance",
    preconditions: "User logged in with known balance",
    steps: ["Go to Transfers", "Enter amount greater than balance", "Submit"],
    testData: "Balance: $500, Transfer Amount: $1000",
    expectedResult: "Error: 'Insufficient funds. Available balance: $500'",
    priority: "P1",
    type: "Negative"
  },
  {
    id: "TC_BANK_003",
    category: "Banking",
    title: "Bill Payment with Scheduled Date",
    preconditions: "User has registered billers",
    steps: ["Go to Bill Pay", "Select biller", "Enter amount", "Set future date", "Confirm"],
    testData: "Biller: Electric Company, Amount: $150, Date: 15th next month",
    expectedResult: "Payment scheduled, appears in pending transactions",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_BANK_004",
    category: "Banking",
    title: "ATM Card Block/Unblock",
    preconditions: "User has active ATM card",
    steps: ["Go to Card Services", "Select card", "Click Block Card", "Confirm action"],
    testData: "Card: **** 4567",
    expectedResult: "Card blocked immediately, SMS/Email notification sent",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_BANK_005",
    category: "Banking",
    title: "Fixed Deposit Creation",
    preconditions: "Sufficient balance in savings",
    steps: ["Go to Deposits", "Click New FD", "Enter amount and tenure", "Select interest payout", "Confirm"],
    testData: "Amount: $10,000, Tenure: 12 months, Rate: 6.5%",
    expectedResult: "FD created, maturity amount displayed, FD certificate generated",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_BANK_006",
    category: "Banking",
    title: "Loan EMI Calculator",
    preconditions: "On loan section",
    steps: ["Select loan type", "Enter principal amount", "Enter tenure", "Enter interest rate", "Calculate"],
    testData: "Principal: $50,000, Tenure: 60 months, Rate: 8%",
    expectedResult: "Monthly EMI displayed with amortization schedule",
    priority: "P2",
    type: "Positive"
  },
  {
    id: "TC_BANK_007",
    category: "Banking",
    title: "International Wire Transfer",
    preconditions: "User has international transfer enabled",
    steps: ["Go to International Transfers", "Enter SWIFT/BIC", "Enter beneficiary details", "Enter amount", "Submit"],
    testData: "To: UK Account, Amount: $2000, SWIFT: BARCGB22",
    expectedResult: "Transfer initiated, exchange rate applied, fees displayed",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_BANK_008",
    category: "Banking",
    title: "Transaction History with Date Filter",
    preconditions: "User has transaction history",
    steps: ["Go to Statements", "Select date range", "Apply filter", "View transactions"],
    testData: "From: 01/01/2024, To: 31/01/2024",
    expectedResult: "Only transactions within date range displayed",
    priority: "P2",
    type: "Positive"
  },
  {
    id: "TC_BANK_009",
    category: "Banking",
    title: "Cheque Book Request",
    preconditions: "Account eligible for cheque book",
    steps: ["Go to Services", "Request Cheque Book", "Select leaves count", "Confirm address", "Submit"],
    testData: "Leaves: 25, Delivery: Registered address",
    expectedResult: "Request submitted, tracking number provided",
    priority: "P3",
    type: "Positive"
  },
  {
    id: "TC_BANK_010",
    category: "Banking",
    title: "Negative Balance Alert",
    preconditions: "Overdraft facility enabled",
    steps: ["Make transaction exceeding balance", "Go into overdraft"],
    testData: "Balance: $100, Transaction: $150",
    expectedResult: "Transaction allowed, overdraft notification sent, interest info displayed",
    priority: "P1",
    type: "Edge Case"
  },

  // Telecommunication Test Cases
  {
    id: "TC_TELCO_001",
    category: "Telecom",
    title: "Prepaid Mobile Recharge",
    preconditions: "Valid mobile number exists",
    steps: ["Go to Recharge", "Enter mobile number", "Select plan", "Make payment", "Confirm"],
    testData: "Mobile: 9876543210, Plan: $30 Unlimited",
    expectedResult: "Recharge successful, new balance/validity updated",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_TELCO_002",
    category: "Telecom",
    title: "Postpaid Bill Payment",
    preconditions: "Bill generated for the month",
    steps: ["Login", "View current bill", "Click Pay Now", "Select payment method", "Complete payment"],
    testData: "Bill Amount: $85.50, Due Date: 15th",
    expectedResult: "Payment successful, receipt generated, status updated to Paid",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_TELCO_003",
    category: "Telecom",
    title: "Data Usage Tracking Real-time",
    preconditions: "Active data plan",
    steps: ["Go to My Usage", "View data consumption", "Check remaining data"],
    testData: "Plan: 50GB/month",
    expectedResult: "Used/Remaining data displayed, usage graph shown",
    priority: "P2",
    type: "Positive"
  },
  {
    id: "TC_TELCO_004",
    category: "Telecom",
    title: "Plan Upgrade/Downgrade",
    preconditions: "Active subscription exists",
    steps: ["Go to Plans", "Compare plans", "Select new plan", "Confirm change"],
    testData: "Current: Basic $30, New: Premium $50",
    expectedResult: "Plan changed, prorated charges applied, confirmation sent",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_TELCO_005",
    category: "Telecom",
    title: "Number Portability Request",
    preconditions: "Number eligible for porting",
    steps: ["Go to Port Number", "Enter current provider", "Enter number", "Submit UPC", "Confirm"],
    testData: "Number: 9876543210, UPC: PORT12345",
    expectedResult: "Porting request initiated, expected date displayed",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_TELCO_006",
    category: "Telecom",
    title: "International Roaming Activation",
    preconditions: "User traveling abroad",
    steps: ["Go to Roaming", "Select country", "Choose roaming pack", "Activate"],
    testData: "Country: USA, Pack: 7-day unlimited",
    expectedResult: "Roaming activated, pack details SMS sent",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_TELCO_007",
    category: "Telecom",
    title: "SIM Replacement Request",
    preconditions: "User has active connection",
    steps: ["Go to SIM Services", "Select SIM Replacement", "Choose reason", "Verify identity", "Submit"],
    testData: "Reason: Lost SIM, ID: Verified",
    expectedResult: "Old SIM deactivated, new SIM dispatched, tracking provided",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_TELCO_008",
    category: "Telecom",
    title: "Add-on Data Pack Purchase",
    preconditions: "Main data exhausted",
    steps: ["Receive low data notification", "Click Add Data", "Select pack", "Purchase"],
    testData: "Add-on: 10GB for $10",
    expectedResult: "Data added immediately, validity extended",
    priority: "P2",
    type: "Positive"
  },
  {
    id: "TC_TELCO_009",
    category: "Telecom",
    title: "Auto-Pay Setup",
    preconditions: "Postpaid account",
    steps: ["Go to Payments", "Enable Auto-Pay", "Add card/bank", "Set deduction date", "Confirm"],
    testData: "Card: **** 1234, Date: 5th of month",
    expectedResult: "Auto-pay enabled, confirmation email sent",
    priority: "P2",
    type: "Positive"
  },
  {
    id: "TC_TELCO_010",
    category: "Telecom",
    title: "Service Suspension Due to Non-Payment",
    preconditions: "Bill overdue by 30 days",
    steps: ["Bill remains unpaid", "Grace period expires", "Attempt outgoing call"],
    testData: "Overdue: $120, Days: 35",
    expectedResult: "Outgoing calls blocked, incoming allowed, payment reminder plays",
    priority: "P1",
    type: "Negative"
  },

  // Communication App Test Cases
  {
    id: "TC_COMM_001",
    category: "Communication",
    title: "One-to-One Text Message Send",
    preconditions: "User logged in, contact exists",
    steps: ["Open chat with contact", "Type message", "Click Send"],
    testData: "Message: 'Hello, how are you?'",
    expectedResult: "Message sent with single tick, then double tick on delivery",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_COMM_002",
    category: "Communication",
    title: "Group Chat Creation",
    preconditions: "User has multiple contacts",
    steps: ["Click New Group", "Select participants", "Enter group name", "Add group icon", "Create"],
    testData: "Name: Project Team, Members: 5",
    expectedResult: "Group created, all members notified, chat opens",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_COMM_003",
    category: "Communication",
    title: "Voice Call Initiation",
    preconditions: "Contact online, mic permission granted",
    steps: ["Open contact chat", "Click voice call icon", "Wait for connection"],
    testData: "Contact: John Doe",
    expectedResult: "Call connects, audio works both ways, call timer starts",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_COMM_004",
    category: "Communication",
    title: "Video Call with Screen Share",
    preconditions: "Both users have camera",
    steps: ["Start video call", "Click screen share", "Select screen/window", "Share"],
    testData: "Share: Full screen",
    expectedResult: "Screen visible to other participant with smooth streaming",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_COMM_005",
    category: "Communication",
    title: "File Attachment Send (Image/Doc)",
    preconditions: "Chat open",
    steps: ["Click attachment icon", "Select file", "Add caption", "Send"],
    testData: "File: document.pdf (5MB)",
    expectedResult: "File uploaded with progress, preview shown, downloadable by recipient",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_COMM_006",
    category: "Communication",
    title: "Message Edit After Sending",
    preconditions: "Message sent within edit window",
    steps: ["Long press sent message", "Click Edit", "Modify text", "Save"],
    testData: "Original: 'Helo', Edited: 'Hello'",
    expectedResult: "Message updated, 'Edited' label appears",
    priority: "P2",
    type: "Positive"
  },
  {
    id: "TC_COMM_007",
    category: "Communication",
    title: "Message Delete for Everyone",
    preconditions: "Message sent recently",
    steps: ["Long press message", "Select Delete", "Choose 'Delete for Everyone'"],
    testData: "Message sent 5 minutes ago",
    expectedResult: "Message replaced with 'This message was deleted'",
    priority: "P2",
    type: "Positive"
  },
  {
    id: "TC_COMM_008",
    category: "Communication",
    title: "Push Notification on New Message",
    preconditions: "App in background, notifications enabled",
    steps: ["Receive message while app closed"],
    testData: "New message from contact",
    expectedResult: "Push notification shows sender name and message preview",
    priority: "P1",
    type: "Positive"
  },
  {
    id: "TC_COMM_009",
    category: "Communication",
    title: "Block Contact",
    preconditions: "Contact exists in chat list",
    steps: ["Open contact profile", "Click Block", "Confirm"],
    testData: "Contact: Spammer123",
    expectedResult: "Contact blocked, no messages received, removed from chat list",
    priority: "P2",
    type: "Positive"
  },
  {
    id: "TC_COMM_010",
    category: "Communication",
    title: "Message Search in Chat History",
    preconditions: "Chat has message history",
    steps: ["Open chat", "Click search icon", "Enter keyword", "View results"],
    testData: "Keyword: 'meeting'",
    expectedResult: "All messages containing 'meeting' highlighted and navigable",
    priority: "P2",
    type: "Positive"
  }
];

export const testScenarioGuide = {
  definition: "A Test Scenario is a high-level documentation of a test case that describes what functionality needs to be tested. It's a one-line statement that captures a testable condition.",
  vsTestCase: `
| Aspect | Test Scenario | Test Case |
|--------|---------------|-----------|
| Level | High-level | Detailed |
| Format | Single statement | Step-by-step |
| Data | Not specified | Specific data |
| Focus | What to test | How to test |
| Example | "Verify user can login" | "Enter email, password, click login..." |
`,
  realExamples: [
    {
      feature: "User Authentication",
      scenarios: [
        "Verify user can login with valid credentials",
        "Verify error message for invalid password",
        "Verify account lockout after multiple failed attempts",
        "Verify password reset email is sent",
        "Verify session timeout after inactivity",
        "Verify 'Remember Me' functionality persists login",
        "Verify logout clears all session data",
        "Verify concurrent login handling"
      ]
    },
    {
      feature: "Shopping Cart",
      scenarios: [
        "Verify user can add product to cart",
        "Verify cart total updates when quantity changes",
        "Verify user can remove items from cart",
        "Verify cart persists across sessions",
        "Verify out-of-stock items cannot be added",
        "Verify cart badge updates in real-time",
        "Verify coupon code applies discount correctly",
        "Verify shipping calculation based on location"
      ]
    },
    {
      feature: "Search Functionality",
      scenarios: [
        "Verify search returns relevant results",
        "Verify search with no results shows appropriate message",
        "Verify search suggestions appear while typing",
        "Verify search filters work correctly",
        "Verify search results pagination",
        "Verify search history is saved",
        "Verify voice search functionality",
        "Verify search works with special characters"
      ]
    },
    {
      feature: "Insurance - Policy Management",
      scenarios: [
        "Verify user can create a new insurance policy",
        "Verify premium calculation based on age and coverage",
        "Verify policy renewal before expiry date",
        "Verify policy cancellation with refund calculation",
        "Verify beneficiary addition and modification",
        "Verify policy document download in PDF format",
        "Verify grace period handling for late payments",
        "Verify policy upgrade/downgrade options"
      ]
    },
    {
      feature: "Insurance - Claims Processing",
      scenarios: [
        "Verify claim submission with required documents",
        "Verify claim status tracking throughout lifecycle",
        "Verify claim rejection for expired policy",
        "Verify claim approval notification via email/SMS",
        "Verify partial claim settlement",
        "Verify claim resubmission after rejection",
        "Verify claim amount calculation based on coverage",
        "Verify fraud detection flags during claim review"
      ]
    },
    {
      feature: "Banking - Fund Transfer",
      scenarios: [
        "Verify transfer between own accounts",
        "Verify transfer to other bank accounts (NEFT/RTGS)",
        "Verify transfer with insufficient balance",
        "Verify scheduled/recurring transfers",
        "Verify international wire transfer with currency conversion",
        "Verify transfer limits per day/transaction",
        "Verify beneficiary management (add/edit/delete)",
        "Verify transfer confirmation via OTP"
      ]
    },
    {
      feature: "Banking - Account Management",
      scenarios: [
        "Verify account balance inquiry",
        "Verify mini statement generation",
        "Verify full statement download with date filter",
        "Verify cheque book request",
        "Verify ATM card block/unblock",
        "Verify PIN change functionality",
        "Verify account closure request",
        "Verify joint account holder management"
      ]
    },
    {
      feature: "Banking - Loans & Deposits",
      scenarios: [
        "Verify loan EMI calculator accuracy",
        "Verify loan application submission",
        "Verify fixed deposit creation with interest preview",
        "Verify FD premature withdrawal penalty",
        "Verify recurring deposit setup",
        "Verify loan prepayment and foreclosure",
        "Verify collateral document upload",
        "Verify loan disbursement notification"
      ]
    },
    {
      feature: "Telecom - Recharge & Billing",
      scenarios: [
        "Verify prepaid mobile recharge",
        "Verify postpaid bill payment",
        "Verify auto-pay setup and execution",
        "Verify bill due date reminder notification",
        "Verify recharge history display",
        "Verify failed payment retry mechanism",
        "Verify partial bill payment",
        "Verify bill dispute submission"
      ]
    },
    {
      feature: "Telecom - Plan & Services",
      scenarios: [
        "Verify data usage tracking in real-time",
        "Verify plan upgrade/downgrade",
        "Verify add-on data pack purchase",
        "Verify international roaming activation",
        "Verify number portability request",
        "Verify SIM replacement/swap request",
        "Verify caller tune activation",
        "Verify DND (Do Not Disturb) activation"
      ]
    },
    {
      feature: "Communication - Messaging",
      scenarios: [
        "Verify one-to-one text message delivery",
        "Verify group chat creation and messaging",
        "Verify message read receipts (double tick)",
        "Verify message edit after sending",
        "Verify message delete for everyone",
        "Verify file/image attachment sending",
        "Verify message search in chat history",
        "Verify offline message queuing"
      ]
    },
    {
      feature: "Communication - Calls & Video",
      scenarios: [
        "Verify voice call initiation and connection",
        "Verify video call with camera toggle",
        "Verify screen sharing during call",
        "Verify call mute/unmute functionality",
        "Verify call on hold and resume",
        "Verify group video call with multiple participants",
        "Verify call quality indicator display",
        "Verify call recording (where permitted)"
      ]
    }
  ],
  bestPractices: [
    "Write scenarios from user's perspective",
    "Keep scenarios independent of each other",
    "Cover both positive and negative scenarios",
    "Include boundary conditions",
    "Consider different user roles",
    "Think about integration points",
    "Document assumptions clearly",
    "Prioritize based on business impact"
  ]
};

export const testStrategyGuide = {
  definition: "A Test Strategy is a high-level document that defines the testing approach for a project. It outlines the testing objectives, scope, resources, schedule, and methodologies to be used.",
  components: [
    {
      name: "Scope and Objectives",
      description: "Define what will and won't be tested",
      example: "In-scope: Web application, mobile responsive views. Out-of-scope: Native mobile apps, third-party integrations"
    },
    {
      name: "Testing Approach",
      description: "Types of testing to be performed",
      example: "Functional testing, Regression testing, Integration testing, UAT"
    },
    {
      name: "Test Environment",
      description: "Infrastructure and tools needed",
      example: "Chrome, Firefox, Safari, iOS Safari, Android Chrome, QA server environment"
    },
    {
      name: "Entry/Exit Criteria",
      description: "Conditions to start and end testing",
      example: "Entry: Build deployed to QA. Exit: 95% test pass rate, no P1 bugs open"
    },
    {
      name: "Risk Assessment",
      description: "Identify potential risks and mitigation",
      example: "Risk: Third-party API instability. Mitigation: Mock services for testing"
    },
    {
      name: "Defect Management",
      description: "How bugs are logged, tracked, prioritized",
      example: "Use JIRA, triage meetings daily, SLA: P1 fix within 24 hours"
    },
    {
      name: "Test Deliverables",
      description: "Documents and reports to be produced",
      example: "Test cases, execution reports, defect reports, test summary"
    },
    {
      name: "Resource Allocation",
      description: "Team members and responsibilities",
      example: "2 manual testers, 1 automation engineer, 1 test lead"
    }
  ],
  domainStrategies: [
    {
      domain: "Insurance Application",
      focus: "Policy lifecycle, claims processing, regulatory compliance",
      keyAreas: [
        "Policy creation and premium calculation accuracy",
        "Claims workflow from submission to settlement",
        "Document upload and verification",
        "Renewal and cancellation processes",
        "Regulatory compliance (HIPAA, GDPR for health insurance)",
        "Integration with payment gateways",
        "Agent portal vs customer portal testing"
      ],
      risks: [
        "Incorrect premium calculations affecting revenue",
        "Claims fraud not detected",
        "Policy document generation failures",
        "Payment processing errors"
      ]
    },
    {
      domain: "Banking Application",
      focus: "Transaction accuracy, security, regulatory compliance",
      keyAreas: [
        "Fund transfer accuracy and limits",
        "Account balance consistency",
        "Interest calculation for loans/deposits",
        "Multi-factor authentication",
        "Session timeout and security",
        "Core banking integration",
        "Regulatory compliance (PCI-DSS, SOX)"
      ],
      risks: [
        "Incorrect transaction amounts",
        "Security breaches and data theft",
        "System downtime during peak hours",
        "Failed reconciliation with core banking"
      ]
    },
    {
      domain: "Telecom Application",
      focus: "Real-time usage, billing accuracy, service provisioning",
      keyAreas: [
        "Real-time data/voice usage tracking",
        "Prepaid balance deduction accuracy",
        "Postpaid billing cycle calculations",
        "Plan activation and deactivation",
        "Number portability workflow",
        "International roaming charges",
        "Network integration testing"
      ],
      risks: [
        "Billing discrepancies leading to customer complaints",
        "Usage not tracked in real-time",
        "Plan changes not reflecting immediately",
        "Roaming charge calculation errors"
      ]
    },
    {
      domain: "Communication Application",
      focus: "Real-time messaging, call quality, cross-platform sync",
      keyAreas: [
        "Message delivery and read receipts",
        "Voice/video call quality",
        "File sharing and media handling",
        "Push notification delivery",
        "Cross-device synchronization",
        "End-to-end encryption verification",
        "Offline mode and sync on reconnect"
      ],
      risks: [
        "Message delivery failures",
        "Call drops and quality issues",
        "Notification delays",
        "Data sync conflicts across devices"
      ]
    }
  ],
  template: `
# TEST STRATEGY DOCUMENT

## 1. Introduction
### 1.1 Purpose
This document outlines the testing strategy for [Project Name].

### 1.2 Scope
**In-Scope:**
- Feature A testing
- Feature B testing
- Cross-browser testing

**Out-of-Scope:**
- Performance testing
- Security penetration testing

## 2. Test Approach
### 2.1 Testing Types
| Type | Description | Responsibility |
|------|-------------|----------------|
| Unit Testing | Code-level testing | Developers |
| Functional Testing | Feature verification | QA Team |
| Regression Testing | Impact analysis | QA Team |
| UAT | Business validation | Product Team |

### 2.2 Testing Levels
- Component Testing → Integration Testing → System Testing → UAT

## 3. Environment Strategy
| Environment | Purpose | Owner |
|-------------|---------|-------|
| DEV | Development testing | Developers |
| QA | QA testing | QA Team |
| STAGING | Pre-production | DevOps |
| PROD | Live system | Operations |

## 4. Entry and Exit Criteria
### Entry Criteria
- [ ] Requirements reviewed and approved
- [ ] Test environment available
- [ ] Test data prepared
- [ ] Build deployed successfully

### Exit Criteria
- [ ] 100% test case execution
- [ ] 95%+ pass rate
- [ ] No open P1/P2 defects
- [ ] UAT sign-off obtained

## 5. Risk Management
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Delayed build | Medium | High | Buffer time in schedule |
| Resource unavailability | Low | High | Cross-training |
| Requirement changes | High | Medium | Change control process |

## 6. Defect Management
- **Tool:** JIRA
- **Severity Levels:** Critical, Major, Minor, Trivial
- **Priority Levels:** P1 (Immediate), P2 (High), P3 (Medium), P4 (Low)
- **SLA:** P1 - 24hrs, P2 - 48hrs, P3 - 1 week

## 7. Deliverables
- Test Plan
- Test Cases
- Test Execution Report
- Defect Report
- Test Summary Report
`,
  vsTestPlan: `
| Aspect | Test Strategy | Test Plan |
|--------|---------------|-----------|
| Level | Organization/Project | Release/Cycle |
| Scope | What to test | How to test |
| Detail | High-level | Detailed |
| Owner | Test Manager | Test Lead |
| Frequency | Once per project | Each release |
| Focus | Approach & methods | Execution & schedule |
`
};

export const modules: Module[] = [
  {
    id: "intro",
    title: "Introduction to Testing",
    description: "Learn the fundamentals of software testing and the role of a tester",
    icon: BookOpen,
    color: "from-violet-500 to-purple-600",
    lessons: [
      {
        id: "what-is-testing",
        title: "What is Software Testing?",
        duration: "15 min",
        content: {
          overview: "Software Testing is the process of evaluating and verifying that a software application does what it is supposed to do.",
          sections: [
            {
              title: "Simple Analogy",
              type: "text",
              content: "Think of buying a new mobile phone. Before using it daily, you check if the screen works, calls connect, camera takes photos, and apps install. This is exactly what software testing does - but for applications!"
            },
            {
              title: "Why Testing is Critical",
              type: "table",
              content: "",
              tableData: {
                headers: ["Reason", "Real-World Impact"],
                rows: [
                  ["Prevent Financial Loss", "Banking bug transferred ₹10,000 instead of ₹1,000"],
                  ["Ensure Safety", "Medical software malfunction could harm patients"],
                  ["Protect Reputation", "E-commerce crash during sale = lost customers"],
                  ["Save Cost", "Finding bugs early is 10x cheaper than post-release"],
                  ["Customer Satisfaction", "Users abandon apps that crash or have bugs"]
                ]
              }
            }
          ],
          keyTakeaways: [
            "Testing ensures software meets requirements",
            "Early bug detection saves time and money",
            "Quality impacts business reputation and safety"
          ],
          quiz: [
            {
              question: "What is the primary goal of software testing?",
              options: [
                "To prove the software has no bugs",
                "To find and report defects",
                "To verify software meets requirements",
                "To delay the release"
              ],
              correctAnswer: 2,
              explanation: "The primary goal is to verify that software meets its requirements and works as expected."
            }
          ]
        }
      },
      {
        id: "role-of-tester",
        title: "Role of a Functional Tester",
        duration: "20 min",
        content: {
          overview: "A Software Tester (QA Engineer) finds bugs before customers do and ensures software quality.",
          sections: [
            {
              title: "Daily Activities",
              type: "table",
              content: "",
              tableData: {
                headers: ["Time", "Activity"],
                rows: [
                  ["09:00 AM", "Stand-up meeting - Discuss yesterday's work"],
                  ["09:30 AM", "Review new requirements/user stories"],
                  ["10:30 AM", "Write/update test cases"],
                  ["12:00 PM", "Execute test cases"],
                  ["02:00 PM", "Log defects in JIRA"],
                  ["03:00 PM", "Retest fixed bugs"],
                  ["04:00 PM", "Regression testing"],
                  ["05:00 PM", "Update test reports"]
                ]
              }
            },
            {
              title: "Required Skills",
              type: "table",
              content: "",
              tableData: {
                headers: ["Technical Skills", "Soft Skills"],
                rows: [
                  ["Understanding SDLC/STLC", "Analytical thinking"],
                  ["Test case writing", "Attention to detail"],
                  ["Bug tracking tools (JIRA)", "Communication"],
                  ["SQL basics", "Curiosity"],
                  ["API testing basics", "Patience"],
                  ["Browser DevTools", "Team collaboration"]
                ]
              }
            }
          ],
          keyTakeaways: [
            "Testers are quality guardians",
            "Balance of technical and soft skills needed",
            "Communication is as important as finding bugs"
          ]
        }
      }
    ]
  },
  {
    id: "sdlc-stlc",
    title: "SDLC & STLC",
    description: "Understanding Software Development and Testing Life Cycles",
    icon: Settings,
    color: "from-blue-500 to-cyan-500",
    lessons: [
      {
        id: "sdlc-phases",
        title: "SDLC Phases Explained",
        duration: "25 min",
        content: {
          overview: "SDLC (Software Development Life Cycle) is the systematic process for planning, creating, testing, and deploying software.",
          sections: [
            {
              title: "The 6 SDLC Phases",
              type: "table",
              content: "",
              tableData: {
                headers: ["Phase", "What Happens", "Deliverables"],
                rows: [
                  ["1. Requirement Gathering", "Collect client needs", "BRD, FRD, SRS"],
                  ["2. Design", "Create system architecture", "HLD, LLD, UI mockups"],
                  ["3. Development", "Write the code", "Source code, unit tests"],
                  ["4. Testing", "Verify quality", "Test cases, defect reports"],
                  ["5. Deployment", "Release to production", "Release notes, user guides"],
                  ["6. Maintenance", "Post-release support", "Bug fixes, enhancements"]
                ]
              }
            }
          ],
          keyTakeaways: [
            "SDLC provides structure to software development",
            "Each phase has specific deliverables",
            "Testing is integral, not an afterthought"
          ],
          quiz: [
            {
              question: "Which SDLC phase comes immediately after Development?",
              options: ["Requirement Gathering", "Design", "Testing", "Deployment"],
              correctAnswer: 2,
              explanation: "Testing follows Development to verify the code works correctly before Deployment."
            }
          ]
        }
      },
      {
        id: "stlc-stages",
        title: "STLC Stages in Detail",
        duration: "30 min",
        content: {
          overview: "STLC (Software Testing Life Cycle) defines the specific steps involved in testing software systematically.",
          sections: [
            {
              title: "STLC Stages",
              type: "table",
              content: "",
              tableData: {
                headers: ["Stage", "Activities", "Deliverables"],
                rows: [
                  ["1. Requirement Analysis", "Review requirements, identify testable items", "RTM, Feasibility report"],
                  ["2. Test Planning", "Define scope, estimate effort, allocate resources", "Test Plan document"],
                  ["3. Test Case Design", "Write test cases, prepare test data", "Test cases, test scripts"],
                  ["4. Environment Setup", "Prepare test environment, install software", "Ready test environment"],
                  ["5. Test Execution", "Run test cases, log defects", "Execution reports, defects"],
                  ["6. Test Closure", "Evaluate completion, prepare reports", "Test summary report"]
                ]
              }
            }
          ],
          keyTakeaways: [
            "STLC is testing-focused, unlike broader SDLC",
            "Each stage has clear entry and exit criteria",
            "Documentation is crucial at every stage"
          ]
        }
      }
    ]
  },
  {
    id: "testing-types",
    title: "Types of Testing",
    description: "Explore different testing methodologies and when to use them",
    icon: TestTube,
    color: "from-emerald-500 to-teal-500",
    lessons: [
      {
        id: "smoke-sanity",
        title: "Smoke vs Sanity Testing",
        duration: "15 min",
        content: {
          overview: "Understanding the difference between Smoke and Sanity testing is crucial for efficient test execution.",
          sections: [
            {
              title: "Comparison",
              type: "table",
              content: "",
              tableData: {
                headers: ["Aspect", "Smoke Testing", "Sanity Testing"],
                rows: [
                  ["Purpose", "Check if build is stable", "Verify specific fix/feature"],
                  ["Scope", "Broad, shallow", "Narrow, deep"],
                  ["When", "New build received", "After bug fix"],
                  ["Analogy", "Does the car start?", "Does the fixed brake work?"],
                  ["Documentation", "Scripted", "Usually unscripted"]
                ]
              }
            }
          ],
          keyTakeaways: [
            "Smoke = broad health check of new build",
            "Sanity = focused check after specific change",
            "Both are quick, surface-level tests"
          ],
          quiz: [
            {
              question: "When should you perform Smoke Testing?",
              options: [
                "After fixing a specific bug",
                "When receiving a new build",
                "Before release to production",
                "During requirements analysis"
              ],
              correctAnswer: 1,
              explanation: "Smoke testing is done when a new build is received to check basic stability."
            }
          ]
        }
      },
      {
        id: "regression-testing",
        title: "Regression Testing",
        duration: "20 min",
        content: {
          overview: "Regression testing ensures that new changes haven't broken existing functionality.",
          sections: [
            {
              title: "When to Perform Regression",
              type: "text",
              content: "After bug fixes, new feature additions, configuration changes, or any code modifications that could impact existing features."
            },
            {
              title: "Regression Test Selection",
              type: "table",
              content: "",
              tableData: {
                headers: ["Strategy", "Description", "When to Use"],
                rows: [
                  ["Retest All", "Run all test cases", "Major release, enough time"],
                  ["Selective", "Test impacted areas only", "Limited time, clear impact"],
                  ["Priority-based", "Test critical flows first", "Time constraints"],
                  ["Risk-based", "Focus on high-risk areas", "Risk mitigation priority"]
                ]
              }
            }
          ],
          keyTakeaways: [
            "Regression prevents 'fix one, break another' scenario",
            "Choose strategy based on time and risk",
            "Automation is ideal for regression"
          ]
        }
      },
      {
        id: "integration-system",
        title: "Integration & System Testing",
        duration: "25 min",
        content: {
          overview: "Integration testing verifies module interactions, while System testing validates the complete system.",
          sections: [
            {
              title: "Integration Testing Approaches",
              type: "table",
              content: "",
              tableData: {
                headers: ["Approach", "Description", "Example"],
                rows: [
                  ["Big Bang", "Test all modules together", "Integrate login+cart+payment at once"],
                  ["Top-Down", "Test from top hierarchy", "Start with main menu, add sub-modules"],
                  ["Bottom-Up", "Start from lowest level", "Test database, then API, then UI"],
                  ["Sandwich", "Combine top-down and bottom-up", "Test middle layer both ways"]
                ]
              }
            }
          ],
          keyTakeaways: [
            "Integration finds interface defects",
            "System testing validates end-to-end flows",
            "Both are essential before UAT"
          ]
        }
      }
    ]
  },
  {
    id: "test-design",
    title: "Test Design Techniques",
    description: "Master techniques like BVA, Equivalence Partitioning, and Decision Tables",
    icon: PenTool,
    color: "from-orange-500 to-amber-500",
    lessons: [
      {
        id: "bva",
        title: "Boundary Value Analysis",
        duration: "20 min",
        content: {
          overview: "BVA tests at the boundaries where 80% of bugs occur - the edges of valid input ranges.",
          sections: [
            {
              title: "BVA Rule",
              type: "text",
              content: "Test at: Minimum-1, Minimum, Minimum+1, Maximum-1, Maximum, Maximum+1"
            },
            {
              title: "Example: Age Field (Valid 18-60)",
              type: "table",
              content: "",
              tableData: {
                headers: ["Test Case", "Input", "Expected Result"],
                rows: [
                  ["TC_BVA_01", "17", "Error: Age must be 18+"],
                  ["TC_BVA_02", "18", "Accepted"],
                  ["TC_BVA_03", "19", "Accepted"],
                  ["TC_BVA_04", "59", "Accepted"],
                  ["TC_BVA_05", "60", "Accepted"],
                  ["TC_BVA_06", "61", "Error: Age must be 60 or below"]
                ]
              }
            }
          ],
          keyTakeaways: [
            "Focus on boundary values, not middle values",
            "Test just inside and outside valid range",
            "Catches off-by-one errors effectively"
          ],
          quiz: [
            {
              question: "For a field accepting 1-100, which values should you test using BVA?",
              options: [
                "50",
                "0, 1, 100, 101",
                "25, 50, 75",
                "1, 50, 100"
              ],
              correctAnswer: 1,
              explanation: "BVA tests at boundaries: just below min (0), min (1), max (100), just above max (101)."
            }
          ]
        }
      },
      {
        id: "equivalence-partitioning",
        title: "Equivalence Partitioning",
        duration: "20 min",
        content: {
          overview: "EP divides inputs into groups where all values behave the same - test ONE from each group.",
          sections: [
            {
              title: "Example: Discount by Age",
              type: "table",
              content: "",
              tableData: {
                headers: ["Partition", "Age Range", "Discount", "Test Value"],
                rows: [
                  ["Invalid", "< 0", "Error", "-5"],
                  ["Child", "0-12", "50%", "6"],
                  ["Adult", "13-59", "0%", "35"],
                  ["Senior", "60+", "30%", "70"]
                ]
              }
            }
          ],
          keyTakeaways: [
            "Reduces test cases by testing one value per partition",
            "Assumes all values in partition behave identically",
            "Combine with BVA for comprehensive coverage"
          ]
        }
      },
      {
        id: "decision-table",
        title: "Decision Table Testing",
        duration: "25 min",
        content: {
          overview: "Decision tables test combinations of conditions and their resulting actions - perfect for complex business rules.",
          sections: [
            {
              title: "Example: Loan Eligibility",
              type: "table",
              content: "",
              tableData: {
                headers: ["Rule", "Income>50K", "Credit>700", "Existing Customer", "Action"],
                rows: [
                  ["R1", "Yes", "Yes", "Yes", "Approve + Low Rate"],
                  ["R2", "Yes", "Yes", "No", "Approve"],
                  ["R3", "Yes", "No", "Yes", "Approve (Higher Rate)"],
                  ["R4", "Yes", "No", "No", "Reject"],
                  ["R5", "No", "Yes", "Yes", "Approve"],
                  ["R6", "No", "Yes", "No", "Reject"],
                  ["R7", "No", "No", "-", "Reject"]
                ]
              }
            }
          ],
          keyTakeaways: [
            "Ideal for multiple conditions with different outcomes",
            "Ensures all combinations are tested",
            "Helps identify missing business rules"
          ]
        }
      }
    ]
  },
  {
    id: "test-cases",
    title: "Writing Test Cases",
    description: "Learn to write effective, comprehensive test cases",
    icon: FileText,
    color: "from-pink-500 to-rose-500",
    lessons: [
      {
        id: "test-case-template",
        title: "Test Case Template & Best Practices",
        duration: "25 min",
        content: {
          overview: "A well-written test case is clear, complete, and reproducible by anyone.",
          sections: [
            {
              title: "Essential Test Case Components",
              type: "table",
              content: "",
              tableData: {
                headers: ["Component", "Description", "Example"],
                rows: [
                  ["Test Case ID", "Unique identifier", "TC_LOGIN_001"],
                  ["Title", "Brief description", "Valid login with correct credentials"],
                  ["Preconditions", "Required setup", "User has registered account"],
                  ["Test Steps", "Numbered actions", "1. Open login page 2. Enter email..."],
                  ["Test Data", "Input values", "email: test@test.com, pwd: Test@123"],
                  ["Expected Result", "What should happen", "User redirected to dashboard"],
                  ["Priority", "Importance level", "P1 (Critical)"]
                ]
              }
            }
          ],
          keyTakeaways: [
            "One test case = one scenario",
            "Steps should be precise and repeatable",
            "Include both positive and negative cases"
          ]
        }
      },
      {
        id: "positive-negative",
        title: "Positive vs Negative Testing",
        duration: "15 min",
        content: {
          overview: "Positive testing verifies expected behavior; negative testing verifies graceful error handling.",
          sections: [
            {
              title: "Examples: Email Field Validation",
              type: "table",
              content: "",
              tableData: {
                headers: ["Type", "Input", "Expected Result"],
                rows: [
                  ["Positive", "user@example.com", "Accepted"],
                  ["Positive", "john.doe@company.co.uk", "Accepted"],
                  ["Negative", "userexample.com (no @)", "Error: Invalid format"],
                  ["Negative", "user@.com (no domain)", "Error: Invalid format"],
                  ["Negative", "(empty)", "Error: Required field"],
                  ["Negative", "user@exam!ple.com", "Error: Invalid characters"]
                ]
              }
            }
          ],
          keyTakeaways: [
            "Test the happy path AND the unhappy path",
            "Negative tests often find more bugs",
            "Both types are equally important"
          ]
        }
      }
    ]
  },
  {
    id: "test-scenarios",
    title: "Test Scenarios & Strategy",
    description: "Master test scenario writing and strategic test planning",
    icon: FileSearch,
    color: "from-indigo-500 to-blue-600",
    lessons: [
      {
        id: "test-scenario-writing",
        title: "Writing Effective Test Scenarios",
        duration: "30 min",
        content: {
          overview: "Test scenarios are high-level descriptions of what to test, written from the user's perspective.",
          sections: [
            {
              title: "Test Scenario vs Test Case",
              type: "table",
              content: "",
              tableData: {
                headers: ["Aspect", "Test Scenario", "Test Case"],
                rows: [
                  ["Level", "High-level overview", "Detailed steps"],
                  ["Format", "Single statement", "Multi-step procedure"],
                  ["Data", "Not specified", "Specific test data"],
                  ["Focus", "What to test", "How to test"],
                  ["Owner", "Test Lead/BA", "Test Engineer"],
                  ["Example", "Verify user can reset password", "1. Click forgot password 2. Enter email..."]
                ]
              }
            },
            {
              title: "Best Practices",
              type: "text",
              content: "Write from user's perspective, keep independent, cover positive/negative/boundary cases, consider different user roles, document assumptions, and prioritize by business impact."
            }
          ],
          keyTakeaways: [
            "Scenarios are the 'what', test cases are the 'how'",
            "One scenario can generate multiple test cases",
            "Think like an end user when writing scenarios"
          ],
          quiz: [
            {
              question: "Which is a well-written test scenario?",
              options: [
                "Click login button and enter password",
                "Verify user can login with valid credentials",
                "Test the authentication module",
                "Login page should work"
              ],
              correctAnswer: 1,
              explanation: "A good test scenario describes the goal from user perspective without implementation details."
            }
          ]
        }
      },
      {
        id: "test-strategy",
        title: "Creating a Test Strategy",
        duration: "35 min",
        content: {
          overview: "A Test Strategy is a high-level document defining the testing approach, scope, resources, and methodologies for a project.",
          sections: [
            {
              title: "Test Strategy Components",
              type: "table",
              content: "",
              tableData: {
                headers: ["Component", "Description", "Example"],
                rows: [
                  ["Scope & Objectives", "What will/won't be tested", "In-scope: Web app, Out-scope: Mobile native"],
                  ["Testing Approach", "Types of testing", "Functional, Regression, Integration, UAT"],
                  ["Test Environment", "Infrastructure needed", "Chrome, Firefox, QA server, Staging"],
                  ["Entry/Exit Criteria", "Start/end conditions", "Entry: Build deployed, Exit: 95% pass rate"],
                  ["Risk Assessment", "Potential risks & mitigation", "API instability - use mock services"],
                  ["Defect Management", "Bug tracking process", "JIRA, P1 fix within 24hrs"],
                  ["Deliverables", "Documents produced", "Test cases, reports, summary"],
                  ["Resources", "Team allocation", "2 manual, 1 automation, 1 lead"]
                ]
              }
            },
            {
              title: "Strategy vs Plan",
              type: "table",
              content: "",
              tableData: {
                headers: ["Aspect", "Test Strategy", "Test Plan"],
                rows: [
                  ["Level", "Project-wide", "Release/Sprint level"],
                  ["Scope", "Overall approach", "Specific execution"],
                  ["Owner", "Test Manager", "Test Lead"],
                  ["Frequency", "Once per project", "Each release cycle"],
                  ["Detail", "High-level guidelines", "Detailed schedules"]
                ]
              }
            }
          ],
          keyTakeaways: [
            "Strategy is the master plan, Test Plan is the tactical execution",
            "Include risk assessment and mitigation",
            "Define clear entry/exit criteria",
            "Resource planning is crucial for success"
          ]
        }
      }
    ]
  },
  {
    id: "real-scenarios",
    title: "Real-Time Scenarios",
    description: "Practice with real-world functional testing scenarios",
    icon: Target,
    color: "from-cyan-500 to-blue-500",
    lessons: [
      {
        id: "paginated-table",
        title: "Testing Paginated Tables",
        duration: "30 min",
        content: {
          overview: "Paginated tables are common in admin panels and require comprehensive testing of search, filter, and navigation.",
          sections: [
            {
              title: "Test Scenarios",
              type: "table",
              content: "",
              tableData: {
                headers: ["Scenario", "What to Verify"],
                rows: [
                  ["Search within results", "Results update across all pages"],
                  ["Search + Pagination", "Navigate through filtered results"],
                  ["Sort + Search", "Sorting maintains search filter"],
                  ["Filter + Sort + Page", "All three work together"],
                  ["Clear filters", "Original data restored"],
                  ["No results", "Appropriate message displayed"],
                  ["Page size change", "Items per page updates correctly"]
                ]
              }
            }
          ],
          keyTakeaways: [
            "Test combinations of search, filter, sort, and pagination",
            "Verify data consistency across page changes",
            "Check performance with large datasets"
          ]
        }
      },
      {
        id: "file-upload",
        title: "File Upload Testing",
        duration: "25 min",
        content: {
          overview: "File upload features require testing for security, usability, and error handling.",
          sections: [
            {
              title: "Comprehensive Test Cases",
              type: "table",
              content: "",
              tableData: {
                headers: ["Scenario", "Test Data", "Expected Result"],
                rows: [
                  ["Valid file", "photo.jpg (2MB)", "Upload successful"],
                  ["Oversized file", "video.mp4 (100MB)", "Error: File too large"],
                  ["Invalid type", "script.exe", "Error: Type not allowed"],
                  ["Multiple files", "3 images", "All uploaded"],
                  ["Cancel upload", "Mid-progress", "Upload cancelled, no partial file"],
                  ["Drag and drop", "Drag file to zone", "Upload via drag works"],
                  ["Empty file", "0 KB file", "Error: Empty file"],
                  ["Special characters in name", "file@#$.jpg", "Handle gracefully"]
                ]
              }
            }
          ],
          keyTakeaways: [
            "Always test file type and size restrictions",
            "Verify security against malicious files",
            "Test progress indicators and cancellation"
          ]
        }
      }
    ]
  },
  {
    id: "defect-management",
    title: "Defect Reporting",
    description: "Learn to write effective bug reports and understand defect lifecycle",
    icon: Bug,
    color: "from-red-500 to-pink-500",
    lessons: [
      {
        id: "defect-lifecycle",
        title: "Defect Life Cycle",
        duration: "20 min",
        content: {
          overview: "Understanding the defect lifecycle helps testers track bugs from discovery to resolution.",
          sections: [
            {
              title: "Defect States",
              type: "table",
              content: "",
              tableData: {
                headers: ["State", "Description", "Next Possible States"],
                rows: [
                  ["New", "Bug just reported", "Open, Rejected"],
                  ["Open", "Bug acknowledged", "Assigned"],
                  ["Assigned", "Developer working on it", "Fixed, Deferred"],
                  ["Fixed", "Developer claims fixed", "Retest"],
                  ["Retest", "Tester verifying fix", "Closed, Reopen"],
                  ["Closed", "Bug verified fixed", "-"],
                  ["Reopen", "Bug still exists", "Assigned"]
                ]
              }
            }
          ],
          keyTakeaways: [
            "Every bug has a lifecycle from New to Closed",
            "Testers are responsible for retesting",
            "Reopened bugs indicate incomplete fixes"
          ]
        }
      },
      {
        id: "bug-report",
        title: "Writing Effective Bug Reports",
        duration: "25 min",
        content: {
          overview: "A good bug report helps developers fix issues quickly without back-and-forth.",
          sections: [
            {
              title: "Bug Report Components (STEPS)",
              type: "table",
              content: "",
              tableData: {
                headers: ["Component", "Description", "Example"],
                rows: [
                  ["Summary", "Clear, concise title", "[Login] Error message not displayed for wrong password"],
                  ["Technical Details", "Environment info", "Chrome 120, Windows 11, QA Server"],
                  ["Evidence", "Screenshots, logs", "Attached screenshot, console error log"],
                  ["Procedure", "Steps to reproduce", "1. Open login 2. Enter wrong password 3. Click login"],
                  ["State", "Expected vs Actual", "Expected: Error message. Actual: Silent failure"]
                ]
              }
            },
            {
              title: "Severity vs Priority",
              type: "table",
              content: "",
              tableData: {
                headers: ["Level", "Severity (Impact)", "Priority (Urgency)"],
                rows: [
                  ["Critical/P1", "System crash, data loss", "Fix immediately"],
                  ["Major/P2", "Feature broken, no workaround", "Fix in current sprint"],
                  ["Minor/P3", "Feature works with workaround", "Fix in next sprint"],
                  ["Trivial/P4", "Cosmetic issues", "Fix when time permits"]
                ]
              }
            }
          ],
          keyTakeaways: [
            "Good bug reports save developer time",
            "Always include steps to reproduce",
            "Attach evidence (screenshots, logs)",
            "Severity = Impact, Priority = Urgency"
          ],
          quiz: [
            {
              question: "A company logo is spelled wrong on the homepage. What is its Severity and Priority?",
              options: [
                "High Severity, High Priority",
                "Low Severity, High Priority",
                "High Severity, Low Priority",
                "Low Severity, Low Priority"
              ],
              correctAnswer: 1,
              explanation: "It's Low Severity (just cosmetic) but High Priority (visible to all users, affects brand)."
            }
          ]
        }
      }
    ]
  },
  {
    id: "agile",
    title: "Agile & Scrum Testing",
    description: "Understand the tester's role in Agile development",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    lessons: [
      {
        id: "agile-basics",
        title: "Agile Testing Fundamentals",
        duration: "25 min",
        content: {
          overview: "In Agile, testing is continuous and integrated throughout the sprint, not a separate phase.",
          sections: [
            {
              title: "Sprint Activities",
              type: "table",
              content: "",
              tableData: {
                headers: ["Phase", "Tester's Role"],
                rows: [
                  ["Sprint Planning", "Estimate testing effort, clarify acceptance criteria"],
                  ["Daily Standup", "Share progress, raise blockers"],
                  ["Development", "Write test cases, prepare test data"],
                  ["Testing", "Execute tests, log defects"],
                  ["Sprint Review", "Demo tested features, share metrics"],
                  ["Retrospective", "Suggest process improvements"]
                ]
              }
            },
            {
              title: "Key Agile Terms",
              type: "table",
              content: "",
              tableData: {
                headers: ["Term", "Definition"],
                rows: [
                  ["Sprint", "2-4 week development cycle"],
                  ["User Story", "Feature from user perspective"],
                  ["Acceptance Criteria", "Conditions to mark story 'Done'"],
                  ["Definition of Done", "Checklist for completion"],
                  ["Product Backlog", "Prioritized list of all features"],
                  ["Sprint Backlog", "Features selected for current sprint"]
                ]
              }
            }
          ],
          keyTakeaways: [
            "Testing is continuous, not end-of-cycle",
            "Testers participate in all ceremonies",
            "Close collaboration with developers"
          ]
        }
      }
    ]
  },
  {
    id: "interview",
    title: "Mock Interview Questions",
    description: "Prepare for testing interviews with real questions",
    icon: HelpCircle,
    color: "from-purple-500 to-violet-500",
    lessons: [
      {
        id: "beginner-questions",
        title: "Beginner Level Questions",
        duration: "30 min",
        content: {
          overview: "Common entry-level questions asked in fresher interviews.",
          sections: [
            {
              title: "Q&A",
              type: "table",
              content: "",
              tableData: {
                headers: ["Question", "Key Points to Cover"],
                rows: [
                  ["What is software testing?", "Verification, finding defects, quality assurance"],
                  ["Difference between SDLC and STLC?", "Development vs Testing focus, phases"],
                  ["What is a test case?", "Steps, data, expected result, components"],
                  ["Smoke vs Sanity testing?", "Build stability vs specific fix verification"],
                  ["What is regression testing?", "Testing after changes, prevent breakage"],
                  ["Positive vs Negative testing?", "Valid inputs vs invalid/error handling"]
                ]
              }
            }
          ],
          keyTakeaways: [
            "Know definitions clearly",
            "Use examples to explain concepts",
            "Relate to real project experience"
          ]
        }
      },
      {
        id: "scenario-questions",
        title: "Scenario-Based Questions",
        duration: "35 min",
        content: {
          overview: "Real-world scenarios to test your practical thinking.",
          sections: [
            {
              title: "Scenarios",
              type: "table",
              content: "",
              tableData: {
                headers: ["Scenario", "How to Answer"],
                rows: [
                  ["How would you test a login page?", "Positive, negative, boundary, security, usability"],
                  ["P1 bug found day before release?", "Risk assessment, stakeholder meeting, mitigation"],
                  ["Requirements are incomplete?", "Ask BA, document assumptions, exploratory testing"],
                  ["No time for full regression?", "Risk-based selection, critical path first"],
                  ["Dev says 'cannot reproduce'?", "Detailed steps, environment details, screen recording"]
                ]
              }
            }
          ],
          keyTakeaways: [
            "Think systematically before answering",
            "Mention trade-offs and risks",
            "Show collaborative problem-solving"
          ]
        }
      }
    ]
  },
  {
    id: "test-case-library",
    title: "Test Case Library",
    description: "Ready-to-use test cases for common features",
    icon: ClipboardList,
    color: "from-teal-500 to-green-500",
    lessons: [
      {
        id: "library-overview",
        title: "Browse Test Case Library",
        duration: "Self-paced",
        content: {
          overview: "A comprehensive library of test cases covering Login, Registration, Search, Cart, Payment, File Upload, Forms, and Pagination.",
          sections: [
            {
              title: "Categories Available",
              type: "table",
              content: "",
              tableData: {
                headers: ["Category", "Test Cases", "Coverage"],
                rows: [
                  ["Login", "8 test cases", "Valid, invalid, security, boundary"],
                  ["Registration", "5 test cases", "Signup flows, validation"],
                  ["Search", "5 test cases", "Results, filters, edge cases"],
                  ["Shopping Cart", "5 test cases", "Add, update, remove, persistence"],
                  ["Payment", "5 test cases", "Success, failure, coupons"],
                  ["File Upload", "4 test cases", "Valid, invalid, limits"],
                  ["Form Validation", "5 test cases", "Required, format, length"],
                  ["Pagination", "5 test cases", "Navigation, boundaries"]
                ]
              }
            }
          ],
          keyTakeaways: [
            "Use as templates for your projects",
            "Customize based on specific requirements",
            "Cover both functional and edge cases"
          ]
        }
      }
    ]
  }
];
