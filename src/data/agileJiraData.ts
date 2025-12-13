export interface AgileBasics {
  title: string;
  description: string;
  scrumRoles: {
    role: string;
    responsibilities: string[];
    realWorldExample: string;
  }[];
  ceremonies: {
    name: string;
    purpose: string;
    duration: string;
    participants: string[];
    outcomes: string[];
    tips: string[];
  }[];
  artifacts: {
    name: string;
    description: string;
    owner: string;
    example: string;
  }[];
}

export interface JiraOverview {
  whatIsJira: string;
  whyCompaniesUseIt: string[];
  hierarchy: {
    level: string;
    description: string;
    example: string;
    whenToUse: string;
  }[];
  keyFeatures: string[];
}

export interface DomainRequirement {
  domain: string;
  projectName: string;
  businessContext: string;
  functionalRequirements: string[];
  howToIdentifyFeatures: {
    step: string;
    explanation: string;
    example: string;
  }[];
  epics: {
    name: string;
    description: string;
    businessValue: string;
    userStories: {
      id: string;
      title: string;
      asA: string;
      iWant: string;
      soThat: string;
      acceptanceCriteria: string[];
      priority: string;
      storyPoints: number;
    }[];
  }[];
}

export interface HandsOnPhase {
  phase: string;
  title: string;
  objective: string;
  steps: {
    stepNumber: number;
    action: string;
    details: string[];
    tips: string[];
  }[];
  expectedOutcome: string;
}

export interface AgileTemplate {
  name: string;
  purpose: string;
  sections: {
    sectionName: string;
    content: string;
  }[];
  example: string;
}

export interface TestingActivity {
  activity: string;
  description: string;
  deliverables: string[];
  bestPractices: string[];
  domainExample: string;
}

export interface InterviewQuestion {
  category: string;
  questions: {
    question: string;
    expectedAnswer: string;
    followUpQuestions: string[];
  }[];
}

export interface TraineeChecklist {
  category: string;
  items: {
    task: string;
    completed: boolean;
    notes: string;
  }[];
}

export const agileBasics: AgileBasics = {
  title: "Agile Methodology Fundamentals",
  description: "Agile is an iterative approach to project management and software development that helps teams deliver value to customers faster. Instead of betting everything on a 'big bang' launch, Agile delivers work in small, consumable increments.",
  scrumRoles: [
    {
      role: "Product Owner",
      responsibilities: [
        "Defines and prioritizes the product backlog",
        "Represents stakeholders and customers",
        "Makes decisions about product features",
        "Accepts or rejects work results",
        "Ensures the team delivers value"
      ],
      realWorldExample: "In a Banking app project, the Product Owner decides that 'Fund Transfer' feature should be prioritized over 'Investment Dashboard' based on customer feedback and business value."
    },
    {
      role: "Scrum Master",
      responsibilities: [
        "Facilitates Scrum ceremonies",
        "Removes impediments for the team",
        "Coaches the team on Agile practices",
        "Shields the team from external distractions",
        "Promotes continuous improvement"
      ],
      realWorldExample: "When the development team is blocked due to unclear requirements, the Scrum Master arranges a quick meeting with the Product Owner to clarify acceptance criteria."
    },
    {
      role: "Development Team",
      responsibilities: [
        "Self-organizing and cross-functional",
        "Delivers potentially shippable increments",
        "Estimates effort for backlog items",
        "Commits to sprint goals",
        "Includes developers, testers, designers"
      ],
      realWorldExample: "The team includes 3 developers, 2 QA engineers, and 1 UI designer working together to deliver the 'User Registration' feature within the sprint."
    }
  ],
  ceremonies: [
    {
      name: "Sprint Planning",
      purpose: "Define what can be delivered in the sprint and how the work will be achieved",
      duration: "2-4 hours for a 2-week sprint",
      participants: ["Product Owner", "Scrum Master", "Development Team"],
      outcomes: [
        "Sprint Goal defined",
        "Sprint Backlog created",
        "Team commitment to deliverables"
      ],
      tips: [
        "Break down stories into tasks before committing",
        "Consider team capacity and holidays",
        "Ensure acceptance criteria are clear"
      ]
    },
    {
      name: "Daily Stand-up",
      purpose: "Synchronize activities and create plan for the next 24 hours",
      duration: "15 minutes maximum",
      participants: ["Development Team", "Scrum Master"],
      outcomes: [
        "Visibility of progress",
        "Quick identification of blockers",
        "Team coordination"
      ],
      tips: [
        "Stand up to keep it short",
        "Focus on: What did I do? What will I do? Any blockers?",
        "Take detailed discussions offline"
      ]
    },
    {
      name: "Sprint Review",
      purpose: "Inspect the increment and adapt the product backlog",
      duration: "1-2 hours for a 2-week sprint",
      participants: ["Product Owner", "Scrum Master", "Development Team", "Stakeholders"],
      outcomes: [
        "Demo of completed work",
        "Stakeholder feedback",
        "Updated product backlog"
      ],
      tips: [
        "Demo working software, not slides",
        "Encourage stakeholder participation",
        "Capture feedback for future sprints"
      ]
    },
    {
      name: "Sprint Retrospective",
      purpose: "Inspect the sprint and create improvement plan",
      duration: "1-1.5 hours for a 2-week sprint",
      participants: ["Scrum Master", "Development Team"],
      outcomes: [
        "What went well identified",
        "What needs improvement identified",
        "Action items for next sprint"
      ],
      tips: [
        "Create a safe space for honest feedback",
        "Focus on process, not people",
        "Limit action items to 2-3 per sprint"
      ]
    }
  ],
  artifacts: [
    {
      name: "Product Backlog",
      description: "Ordered list of everything that is known to be needed in the product",
      owner: "Product Owner",
      example: "All features for an E-commerce platform: User Registration, Product Catalog, Shopping Cart, Payment Integration, Order Tracking, etc."
    },
    {
      name: "Sprint Backlog",
      description: "Set of Product Backlog items selected for the Sprint plus a plan for delivering them",
      owner: "Development Team",
      example: "Sprint 1 items: User Registration (8 points), Login/Logout (5 points), Profile Management (5 points)"
    },
    {
      name: "Increment",
      description: "Sum of all Product Backlog items completed during a Sprint plus all previous Sprints",
      owner: "Development Team",
      example: "At the end of Sprint 3, the working software includes: User Management, Product Catalog, and Basic Cart functionality"
    }
  ]
};

export const jiraOverview: JiraOverview = {
  whatIsJira: "Jira is a project management tool developed by Atlassian, widely used for Agile project management, bug tracking, and issue tracking. It helps teams plan, track, and manage their work with customizable workflows.",
  whyCompaniesUseIt: [
    "Industry standard for Agile project management",
    "Customizable workflows to match team processes",
    "Real-time visibility into project progress",
    "Integration with development tools (Git, CI/CD)",
    "Comprehensive reporting and analytics",
    "Scalable for teams of all sizes"
  ],
  hierarchy: [
    {
      level: "Epic",
      description: "Large body of work that can be broken down into smaller pieces",
      example: "User Management System, Payment Gateway Integration",
      whenToUse: "When you have a major feature that spans multiple sprints"
    },
    {
      level: "Story",
      description: "User-focused requirement describing a feature from end-user perspective",
      example: "As a customer, I want to reset my password so that I can regain access to my account",
      whenToUse: "For individual features that deliver user value"
    },
    {
      level: "Task",
      description: "Technical work needed to complete a story",
      example: "Create password reset API endpoint, Design reset email template",
      whenToUse: "For breaking down stories into implementable work items"
    },
    {
      level: "Sub-task",
      description: "Smaller pieces of work within a task",
      example: "Write unit tests for password reset API, Add validation for email format",
      whenToUse: "When tasks need further breakdown for tracking"
    },
    {
      level: "Bug",
      description: "Defect or issue found in the software",
      example: "Password reset email not sent when special characters in email address",
      whenToUse: "When reporting defects found during testing"
    }
  ],
  keyFeatures: [
    "Scrum and Kanban boards",
    "Backlog management",
    "Sprint planning and tracking",
    "Burndown and velocity charts",
    "Custom fields and workflows",
    "Automation rules",
    "Integration with Confluence, Bitbucket, and more"
  ]
};

export const domainRequirements: DomainRequirement[] = [
  {
    domain: "E-Commerce",
    projectName: "ShopEase - Online Shopping Platform",
    businessContext: "Build a modern e-commerce platform where customers can browse products, add to cart, checkout, and track orders. The platform should support multiple payment methods and provide a seamless shopping experience.",
    functionalRequirements: [
      "User registration and authentication",
      "Product catalog with search and filters",
      "Shopping cart management",
      "Secure checkout and payment processing",
      "Order management and tracking",
      "Customer reviews and ratings",
      "Wishlist functionality",
      "Admin dashboard for inventory management"
    ],
    howToIdentifyFeatures: [
      {
        step: "1. Understand Business Goals",
        explanation: "Start by understanding what the business wants to achieve. Ask: What problem are we solving? Who are our users? What value do we provide?",
        example: "ShopEase wants to provide a convenient online shopping experience. Primary users are customers who want to buy products online. Value: Save time, compare prices, doorstep delivery."
      },
      {
        step: "2. Identify User Personas",
        explanation: "Define different types of users who will interact with the system. Each persona has different needs and goals.",
        example: "Personas: Guest User (browses without account), Registered Customer (buys products), Admin (manages inventory), Seller (lists products)"
      },
      {
        step: "3. Map User Journeys",
        explanation: "For each persona, trace their journey from entry to goal completion. This reveals all touchpoints and features needed.",
        example: "Customer Journey: Visit site → Browse/Search products → View details → Add to cart → Register/Login → Checkout → Pay → Track order → Receive delivery → Review product"
      },
      {
        step: "4. Group Features into Epics",
        explanation: "Cluster related features together based on functionality or user journey phase. Each cluster becomes an Epic.",
        example: "Epics identified: User Management, Product Catalog, Shopping Cart, Checkout & Payment, Order Management, Reviews & Ratings"
      },
      {
        step: "5. Write User Stories for Each Epic",
        explanation: "For each Epic, write user stories using the format: As a [persona], I want [action], so that [benefit]. Each story should deliver user value.",
        example: "Epic: Shopping Cart → Stories: Add item to cart, Update quantity, Remove item, View cart summary, Save cart for later"
      }
    ],
    epics: [
      {
        name: "User Management",
        description: "All features related to user registration, authentication, and profile management",
        businessValue: "Enable personalized experience and secure transactions",
        userStories: [
          {
            id: "EC-US-001",
            title: "User Registration",
            asA: "new customer",
            iWant: "to create an account with my email and password",
            soThat: "I can save my preferences and order history",
            acceptanceCriteria: [
              "User can register with email, password, and basic details",
              "Email format is validated",
              "Password must be at least 8 characters with 1 uppercase and 1 number",
              "Duplicate email addresses are rejected",
              "Confirmation email is sent after registration",
              "User is redirected to login page after successful registration"
            ],
            priority: "High",
            storyPoints: 5
          },
          {
            id: "EC-US-002",
            title: "User Login",
            asA: "registered customer",
            iWant: "to login using my email and password",
            soThat: "I can access my account and saved information",
            acceptanceCriteria: [
              "User can login with valid email and password",
              "Invalid credentials show appropriate error message",
              "Account is locked after 5 failed attempts",
              "Remember me option keeps user logged in for 30 days",
              "Forgot password link is available on login page"
            ],
            priority: "High",
            storyPoints: 3
          },
          {
            id: "EC-US-003",
            title: "Password Reset",
            asA: "customer who forgot password",
            iWant: "to reset my password via email",
            soThat: "I can regain access to my account",
            acceptanceCriteria: [
              "Reset link is sent to registered email",
              "Link expires after 24 hours",
              "User must enter new password twice for confirmation",
              "Old password cannot be reused",
              "Success message displayed after reset"
            ],
            priority: "High",
            storyPoints: 3
          }
        ]
      },
      {
        name: "Shopping Cart",
        description: "Features for managing items in the shopping cart",
        businessValue: "Enable customers to collect and manage items before purchase",
        userStories: [
          {
            id: "EC-US-010",
            title: "Add to Cart",
            asA: "customer",
            iWant: "to add products to my shopping cart",
            soThat: "I can purchase multiple items together",
            acceptanceCriteria: [
              "Add to cart button visible on product listing and detail pages",
              "Quantity can be specified before adding",
              "Cart icon shows updated item count",
              "Confirmation message appears after adding",
              "Out of stock items cannot be added",
              "Guest users can add items (cart saved in session)"
            ],
            priority: "High",
            storyPoints: 5
          },
          {
            id: "EC-US-011",
            title: "View Cart",
            asA: "customer",
            iWant: "to view all items in my cart with prices",
            soThat: "I can review before checkout",
            acceptanceCriteria: [
              "Cart page shows all items with images, names, prices",
              "Quantity for each item is editable",
              "Subtotal for each item is calculated",
              "Cart total is displayed",
              "Applied discounts are visible",
              "Continue shopping link is available"
            ],
            priority: "High",
            storyPoints: 3
          },
          {
            id: "EC-US-012",
            title: "Update Cart Quantity",
            asA: "customer",
            iWant: "to change the quantity of items in my cart",
            soThat: "I can buy more or fewer items",
            acceptanceCriteria: [
              "Quantity can be increased or decreased",
              "Quantity cannot exceed available stock",
              "Minimum quantity is 1",
              "Subtotal updates automatically",
              "Cart total recalculates on quantity change"
            ],
            priority: "Medium",
            storyPoints: 2
          }
        ]
      },
      {
        name: "Checkout & Payment",
        description: "Features for completing purchases and processing payments",
        businessValue: "Convert cart items to orders and collect payment securely",
        userStories: [
          {
            id: "EC-US-020",
            title: "Checkout Process",
            asA: "customer",
            iWant: "to complete my purchase through a simple checkout",
            soThat: "I can receive my ordered items",
            acceptanceCriteria: [
              "Checkout button proceeds from cart page",
              "Shipping address form with validation",
              "Multiple shipping options with delivery estimates",
              "Order summary displayed before payment",
              "Guest checkout option available",
              "Save address option for registered users"
            ],
            priority: "High",
            storyPoints: 8
          },
          {
            id: "EC-US-021",
            title: "Payment Processing",
            asA: "customer",
            iWant: "to pay using various payment methods",
            soThat: "I can choose my preferred payment option",
            acceptanceCriteria: [
              "Credit/Debit card payment supported",
              "UPI and Net Banking options available",
              "Card details validated in real-time",
              "Payment confirmation displayed",
              "Order confirmation email sent",
              "Failed payment shows retry option"
            ],
            priority: "High",
            storyPoints: 8
          }
        ]
      }
    ]
  },
  {
    domain: "Banking",
    projectName: "SecureBank - Digital Banking Platform",
    businessContext: "Develop a secure digital banking platform that allows customers to manage accounts, transfer funds, pay bills, and access banking services 24/7 from any device.",
    functionalRequirements: [
      "Secure user authentication with MFA",
      "Account dashboard and balance inquiry",
      "Fund transfer (internal and external)",
      "Bill payment and scheduling",
      "Transaction history and statements",
      "Beneficiary management",
      "Fixed deposit and investment",
      "Loan application and tracking"
    ],
    howToIdentifyFeatures: [
      {
        step: "1. Understand Business Goals",
        explanation: "Banking apps prioritize security, convenience, and regulatory compliance. Understand what banking services need to be digitized.",
        example: "SecureBank wants to reduce branch visits by 60% by offering comprehensive digital banking. Must comply with RBI guidelines and PCI-DSS standards."
      },
      {
        step: "2. Identify User Personas",
        explanation: "Banking has diverse users with different needs - from tech-savvy millennials to senior citizens who need simple interfaces.",
        example: "Personas: Retail Customer (individual banking), Business Customer (company accounts), Senior Citizen (simplified interface), Bank Admin (backend operations)"
      },
      {
        step: "3. Map User Journeys",
        explanation: "Trace common banking activities from login to completion, identifying security checkpoints.",
        example: "Fund Transfer Journey: Login with password → MFA verification → Select transfer type → Add/Select beneficiary → Enter amount → Review details → Confirm with OTP → View confirmation"
      },
      {
        step: "4. Group Features into Epics",
        explanation: "Cluster features by banking domain - accounts, payments, loans, investments, etc.",
        example: "Epics: Authentication & Security, Account Management, Fund Transfers, Bill Payments, Investments, Loans, Customer Support"
      },
      {
        step: "5. Write User Stories with Security Focus",
        explanation: "Banking stories must include security acceptance criteria. Every action needs proper authorization and audit logging.",
        example: "Each fund transfer story includes: transaction limits, OTP verification, fraud detection alerts, and audit trail requirements"
      }
    ],
    epics: [
      {
        name: "Authentication & Security",
        description: "Secure login, MFA, and session management",
        businessValue: "Protect customer accounts and prevent fraud",
        userStories: [
          {
            id: "BK-US-001",
            title: "Secure Login with MFA",
            asA: "bank customer",
            iWant: "to login with multi-factor authentication",
            soThat: "my account is protected from unauthorized access",
            acceptanceCriteria: [
              "Login requires customer ID and password",
              "OTP sent to registered mobile after password verification",
              "OTP expires in 3 minutes",
              "Maximum 3 OTP attempts allowed",
              "Account locked after 3 failed login attempts",
              "Session timeout after 5 minutes of inactivity",
              "All login attempts are logged for audit"
            ],
            priority: "High",
            storyPoints: 8
          },
          {
            id: "BK-US-002",
            title: "Biometric Login",
            asA: "mobile app user",
            iWant: "to login using fingerprint or face recognition",
            soThat: "I can access my account quickly and securely",
            acceptanceCriteria: [
              "Biometric can be enabled after successful password login",
              "Device must be registered",
              "Fallback to password if biometric fails",
              "Biometric data stored securely on device only",
              "Can disable biometric from settings"
            ],
            priority: "Medium",
            storyPoints: 5
          }
        ]
      },
      {
        name: "Fund Transfers",
        description: "Internal and external money transfer features",
        businessValue: "Enable convenient money movement between accounts",
        userStories: [
          {
            id: "BK-US-010",
            title: "Internal Fund Transfer",
            asA: "customer with multiple accounts",
            iWant: "to transfer money between my own accounts",
            soThat: "I can manage my funds across accounts",
            acceptanceCriteria: [
              "Select source and destination accounts",
              "Real-time balance displayed",
              "Transfer amount validated against available balance",
              "Immediate transfer with no waiting period",
              "Transaction reference number generated",
              "SMS and email confirmation sent"
            ],
            priority: "High",
            storyPoints: 5
          },
          {
            id: "BK-US-011",
            title: "NEFT/RTGS Transfer",
            asA: "customer",
            iWant: "to transfer money to other bank accounts",
            soThat: "I can pay vendors and family members",
            acceptanceCriteria: [
              "Select from saved beneficiaries or add new",
              "IFSC code validation",
              "NEFT/RTGS selection based on amount and time",
              "Transaction limits enforced per day",
              "OTP required for amounts above Rs. 10,000",
              "Scheduled transfer option available",
              "Transfer status tracking available"
            ],
            priority: "High",
            storyPoints: 8
          }
        ]
      },
      {
        name: "Account Management",
        description: "Account dashboard, statements, and profile management",
        businessValue: "Provide visibility and control over banking relationship",
        userStories: [
          {
            id: "BK-US-020",
            title: "Account Dashboard",
            asA: "customer",
            iWant: "to see all my accounts and balances at a glance",
            soThat: "I can monitor my financial position",
            acceptanceCriteria: [
              "All linked accounts displayed",
              "Current balance shown for each account",
              "Last 5 transactions visible",
              "Quick links to common actions",
              "Account nickname can be set",
              "Hide balance option available"
            ],
            priority: "High",
            storyPoints: 5
          }
        ]
      }
    ]
  },
  {
    domain: "Telecom",
    projectName: "ConnectPlus - Telecom Self-Service Portal",
    businessContext: "Create a self-service portal for telecom customers to manage their mobile connections, view usage, pay bills, and subscribe to value-added services without visiting stores.",
    functionalRequirements: [
      "User registration and account linking",
      "Plan and usage dashboard",
      "Bill viewing and payment",
      "Recharge and plan upgrade",
      "Data and minute balance tracking",
      "Value-added services subscription",
      "Complaint registration and tracking",
      "Number portability requests"
    ],
    howToIdentifyFeatures: [
      {
        step: "1. Understand Business Goals",
        explanation: "Telecom self-service aims to reduce call center load and store visits while improving customer satisfaction.",
        example: "ConnectPlus wants to handle 70% of customer queries through self-service, reducing support costs by 40%."
      },
      {
        step: "2. Identify User Personas",
        explanation: "Telecom users range from prepaid users wanting quick recharges to postpaid users managing family plans.",
        example: "Personas: Prepaid User (frequent recharges), Postpaid User (bill management), Family Plan Admin (manages multiple lines), Enterprise User (bulk connections)"
      },
      {
        step: "3. Map User Journeys",
        explanation: "Focus on high-frequency actions like recharge, bill payment, and usage checking.",
        example: "Recharge Journey: Login → View balance → Select recharge pack → Apply coupon → Choose payment → Complete payment → View updated balance"
      },
      {
        step: "4. Group Features into Epics",
        explanation: "Organize by service type - prepaid services, postpaid services, VAS, support, etc.",
        example: "Epics: Account Management, Prepaid Services, Postpaid Services, Value-Added Services, Customer Support, Plan Management"
      },
      {
        step: "5. Write User Stories with Mobile-First Approach",
        explanation: "Telecom apps are primarily used on mobile. Stories should consider mobile UX and quick actions.",
        example: "Recharge stories include: quick recharge with saved cards, one-tap repeat last recharge, share recharge option"
      }
    ],
    epics: [
      {
        name: "Prepaid Services",
        description: "Recharge, balance check, and pack management for prepaid users",
        businessValue: "Enable instant self-service for prepaid customers",
        userStories: [
          {
            id: "TC-US-001",
            title: "Quick Recharge",
            asA: "prepaid customer",
            iWant: "to recharge my number instantly",
            soThat: "I can continue using my mobile services",
            acceptanceCriteria: [
              "Recharge packs displayed by category (data, calls, combo)",
              "Popular packs highlighted",
              "Pack details show validity and benefits",
              "Multiple payment methods supported",
              "Recharge confirmation via SMS",
              "Repeat last recharge option available"
            ],
            priority: "High",
            storyPoints: 5
          },
          {
            id: "TC-US-002",
            title: "Check Balance and Usage",
            asA: "prepaid customer",
            iWant: "to view my remaining balance and usage",
            soThat: "I know when to recharge",
            acceptanceCriteria: [
              "Main balance displayed prominently",
              "Data balance shown in GB/MB",
              "Call minutes remaining visible",
              "SMS count remaining",
              "Validity date for each benefit",
              "Usage history for last 30 days"
            ],
            priority: "High",
            storyPoints: 3
          }
        ]
      },
      {
        name: "Postpaid Services",
        description: "Bill management, payment, and plan changes for postpaid users",
        businessValue: "Streamline billing and payment for postpaid customers",
        userStories: [
          {
            id: "TC-US-010",
            title: "View and Download Bill",
            asA: "postpaid customer",
            iWant: "to view my monthly bill details",
            soThat: "I can understand my charges",
            acceptanceCriteria: [
              "Current bill amount displayed",
              "Due date clearly shown",
              "Bill breakdown by category",
              "Download PDF option",
              "Email bill option",
              "Bill history for last 12 months"
            ],
            priority: "High",
            storyPoints: 5
          },
          {
            id: "TC-US-011",
            title: "Pay Bill Online",
            asA: "postpaid customer",
            iWant: "to pay my bill online",
            soThat: "I can avoid late payment charges",
            acceptanceCriteria: [
              "Outstanding amount pre-filled",
              "Partial payment option",
              "Multiple payment methods",
              "Auto-pay setup option",
              "Payment confirmation instant",
              "Receipt generated for download"
            ],
            priority: "High",
            storyPoints: 5
          }
        ]
      },
      {
        name: "Customer Support",
        description: "Complaint registration, tracking, and resolution",
        businessValue: "Provide self-service support reducing call center dependency",
        userStories: [
          {
            id: "TC-US-020",
            title: "Register Complaint",
            asA: "customer",
            iWant: "to register a complaint about service issues",
            soThat: "my problem gets resolved quickly",
            acceptanceCriteria: [
              "Complaint categories available for selection",
              "Description field with 500 character limit",
              "Attachment option for screenshots",
              "Complaint ID generated immediately",
              "SMS confirmation with ticket number",
              "Expected resolution time displayed"
            ],
            priority: "High",
            storyPoints: 5
          }
        ]
      }
    ]
  },
  {
    domain: "Insurance",
    projectName: "SafeGuard - Insurance Management Portal",
    businessContext: "Build a comprehensive insurance portal where customers can buy policies, manage existing policies, file claims, and track claim status. The platform should simplify insurance for everyday users.",
    functionalRequirements: [
      "User registration and KYC",
      "Policy browsing and comparison",
      "Online policy purchase",
      "Policy management dashboard",
      "Premium payment and auto-debit",
      "Claim filing and tracking",
      "Document upload and management",
      "Renewal reminders and processing"
    ],
    howToIdentifyFeatures: [
      {
        step: "1. Understand Business Goals",
        explanation: "Insurance portals aim to increase policy sales, improve claim processing efficiency, and enhance customer retention.",
        example: "SafeGuard wants to sell 50% policies online, reduce claim processing time by 60%, and achieve 90% renewal rate."
      },
      {
        step: "2. Identify User Personas",
        explanation: "Insurance users have varying needs from buying new policies to managing claims during emergencies.",
        example: "Personas: First-time Buyer (needs guidance), Existing Policyholder (manages multiple policies), Claimant (filing claims), Agent (sells and services)"
      },
      {
        step: "3. Map User Journeys",
        explanation: "Focus on critical journeys - buying a policy and filing a claim. These are high-stakes interactions.",
        example: "Claim Journey: Report incident → Select policy → Fill claim form → Upload documents → Submit claim → Track status → Receive settlement"
      },
      {
        step: "4. Group Features into Epics",
        explanation: "Organize by insurance lifecycle - discovery, purchase, management, claims, renewal.",
        example: "Epics: Policy Discovery, Policy Purchase, Policy Management, Claims Processing, Renewals, Document Management"
      },
      {
        step: "5. Write User Stories with Compliance Focus",
        explanation: "Insurance stories must consider regulatory requirements, KYC norms, and document verification.",
        example: "Policy purchase stories include: IRDAI disclosure requirements, KYC verification, cooling-off period information"
      }
    ],
    epics: [
      {
        name: "Policy Purchase",
        description: "Browsing, comparing, and buying insurance policies",
        businessValue: "Enable online sales and reduce intermediary costs",
        userStories: [
          {
            id: "IN-US-001",
            title: "Browse Insurance Products",
            asA: "prospective customer",
            iWant: "to browse different insurance products",
            soThat: "I can find the right coverage for my needs",
            acceptanceCriteria: [
              "Products categorized (Health, Life, Motor, Home)",
              "Key features highlighted for each product",
              "Premium calculator available",
              "Compare up to 3 products",
              "Coverage details expandable",
              "Customer reviews visible"
            ],
            priority: "High",
            storyPoints: 5
          },
          {
            id: "IN-US-002",
            title: "Get Quote",
            asA: "interested customer",
            iWant: "to get an instant premium quote",
            soThat: "I can decide if the policy fits my budget",
            acceptanceCriteria: [
              "Basic details form (age, sum insured, tenure)",
              "Instant premium calculation",
              "Add-on options with additional premium",
              "Discount codes applicable",
              "Quote valid for 7 days",
              "Email quote option"
            ],
            priority: "High",
            storyPoints: 3
          },
          {
            id: "IN-US-003",
            title: "Complete Policy Purchase",
            asA: "customer",
            iWant: "to buy a policy online",
            soThat: "I get insurance coverage immediately",
            acceptanceCriteria: [
              "Detailed proposal form",
              "KYC document upload",
              "Medical questionnaire where applicable",
              "Nominee details capture",
              "Payment gateway integration",
              "Policy document generated instantly",
              "Welcome email with policy details"
            ],
            priority: "High",
            storyPoints: 13
          }
        ]
      },
      {
        name: "Claims Processing",
        description: "Filing, tracking, and settling insurance claims",
        businessValue: "Simplify claims experience and reduce processing time",
        userStories: [
          {
            id: "IN-US-010",
            title: "File a Claim",
            asA: "policyholder",
            iWant: "to file an insurance claim online",
            soThat: "I can get my claim processed quickly",
            acceptanceCriteria: [
              "Select policy for claim",
              "Claim type selection",
              "Incident date and details",
              "Document upload (bills, photos, reports)",
              "Bank details for settlement",
              "Claim ID generated",
              "Acknowledgment email sent"
            ],
            priority: "High",
            storyPoints: 8
          },
          {
            id: "IN-US-011",
            title: "Track Claim Status",
            asA: "claimant",
            iWant: "to track my claim status in real-time",
            soThat: "I know when to expect settlement",
            acceptanceCriteria: [
              "Current status displayed",
              "Timeline of claim stages",
              "Documents verified status",
              "Pending action items shown",
              "Expected settlement date",
              "Contact support option",
              "SMS updates on status change"
            ],
            priority: "High",
            storyPoints: 5
          }
        ]
      },
      {
        name: "Policy Management",
        description: "View, manage, and renew existing policies",
        businessValue: "Improve customer retention and policy renewal rates",
        userStories: [
          {
            id: "IN-US-020",
            title: "View Policy Dashboard",
            asA: "policyholder",
            iWant: "to see all my policies in one place",
            soThat: "I can manage my insurance portfolio",
            acceptanceCriteria: [
              "All active policies listed",
              "Policy status indicator",
              "Premium due dates",
              "Sum insured for each policy",
              "Quick actions (renew, claim, download)",
              "Expired policies section"
            ],
            priority: "High",
            storyPoints: 5
          }
        ]
      }
    ]
  }
];

export const handsOnPhases: HandsOnPhase[] = [
  {
    phase: "Phase 1",
    title: "Jira Project Setup",
    objective: "Create and configure a Scrum project in Jira",
    steps: [
      {
        stepNumber: 1,
        action: "Access Jira and Create Project",
        details: [
          "Navigate to Jira Cloud (your-domain.atlassian.net)",
          "Click 'Projects' in the top navigation",
          "Click 'Create Project' button",
          "Select 'Scrum' template from Software category"
        ],
        tips: [
          "Use a clear naming convention like 'PROJ-TrainingAgile'",
          "Project key should be short (3-4 characters)"
        ]
      },
      {
        stepNumber: 2,
        action: "Configure Project Settings",
        details: [
          "Go to Project Settings → Details",
          "Set project lead and default assignee",
          "Configure issue types if needed",
          "Set up project permissions"
        ],
        tips: [
          "Keep default issue types initially",
          "Add custom fields only when necessary"
        ]
      },
      {
        stepNumber: 3,
        action: "Set Up Board",
        details: [
          "Go to Board → Board Settings",
          "Configure columns (To Do, In Progress, Done)",
          "Set WIP limits if using Kanban elements",
          "Configure quick filters"
        ],
        tips: [
          "Add 'In Review' column for QA",
          "Set swimlanes by Epic for better visibility"
        ]
      }
    ],
    expectedOutcome: "A fully configured Scrum project ready for backlog management"
  },
  {
    phase: "Phase 2",
    title: "Backlog Creation",
    objective: "Create Epics and User Stories with proper details",
    steps: [
      {
        stepNumber: 1,
        action: "Create Epics",
        details: [
          "Go to Backlog view",
          "Click 'Create Epic' from the Epic panel",
          "Enter Epic name and description",
          "Set Epic color for easy identification"
        ],
        tips: [
          "Each Epic should represent a major feature area",
          "Epic names should be business-friendly"
        ]
      },
      {
        stepNumber: 2,
        action: "Add User Stories",
        details: [
          "Click 'Create' button or use 'c' shortcut",
          "Select 'Story' as issue type",
          "Write story in 'As a... I want... So that...' format",
          "Link story to appropriate Epic"
        ],
        tips: [
          "Keep stories small enough for one sprint",
          "Add acceptance criteria immediately"
        ]
      },
      {
        stepNumber: 3,
        action: "Add Acceptance Criteria",
        details: [
          "Open the story",
          "Add acceptance criteria in description or custom field",
          "Use Given-When-Then format for clarity",
          "Include edge cases and error scenarios"
        ],
        tips: [
          "Criteria should be testable",
          "Include both happy path and error scenarios"
        ]
      },
      {
        stepNumber: 4,
        action: "Estimate Stories",
        details: [
          "Use Story Points field",
          "Apply Fibonacci scale (1, 2, 3, 5, 8, 13)",
          "Consider complexity, not time",
          "Discuss estimates with team"
        ],
        tips: [
          "13+ points means story needs splitting",
          "Use Planning Poker for team estimation"
        ]
      }
    ],
    expectedOutcome: "A prioritized backlog with estimated user stories linked to Epics"
  },
  {
    phase: "Phase 3",
    title: "Sprint Planning",
    objective: "Create a sprint and plan work for delivery",
    steps: [
      {
        stepNumber: 1,
        action: "Create a Sprint",
        details: [
          "Go to Backlog view",
          "Click 'Create Sprint' button",
          "Name the sprint (e.g., 'Sprint 1 - User Management')",
          "Set sprint duration (typically 2 weeks)"
        ],
        tips: [
          "Include sprint goal in the name",
          "Keep sprint duration consistent"
        ]
      },
      {
        stepNumber: 2,
        action: "Move Stories to Sprint",
        details: [
          "Drag stories from backlog to sprint",
          "Consider team velocity for capacity",
          "Ensure stories are ready (meet DoR)",
          "Balance work across team members"
        ],
        tips: [
          "Don't overcommit in initial sprints",
          "Include buffer for meetings and reviews"
        ]
      },
      {
        stepNumber: 3,
        action: "Start the Sprint",
        details: [
          "Click 'Start Sprint' button",
          "Set start and end dates",
          "Enter sprint goal",
          "Confirm sprint details"
        ],
        tips: [
          "Sprint goal should be achievable",
          "Communicate sprint start to stakeholders"
        ]
      }
    ],
    expectedOutcome: "An active sprint with committed user stories and clear goal"
  },
  {
    phase: "Phase 4",
    title: "Bug/Defect Reporting",
    objective: "Learn to log defects with complete information",
    steps: [
      {
        stepNumber: 1,
        action: "Create a Bug",
        details: [
          "Click 'Create' and select 'Bug' issue type",
          "Write clear, specific summary",
          "Add detailed description with steps to reproduce",
          "Specify environment details"
        ],
        tips: [
          "Summary format: [Module] - Brief description",
          "Include what was expected vs actual"
        ]
      },
      {
        stepNumber: 2,
        action: "Add Reproduction Steps",
        details: [
          "List steps in numbered format",
          "Include test data used",
          "Mention preconditions",
          "Add screenshots or recordings"
        ],
        tips: [
          "Steps should be reproducible by anyone",
          "Include login credentials if needed"
        ]
      },
      {
        stepNumber: 3,
        action: "Set Priority and Severity",
        details: [
          "Set Priority: How urgent is the fix?",
          "Set Severity: How bad is the impact?",
          "Add labels for categorization",
          "Link to affected user story"
        ],
        tips: [
          "Priority: Critical/High/Medium/Low",
          "Severity: Blocker/Major/Minor/Trivial"
        ]
      }
    ],
    expectedOutcome: "A well-documented bug that developers can reproduce and fix"
  },
  {
    phase: "Phase 5",
    title: "Agile Deliverables",
    objective: "Create essential Agile documentation",
    steps: [
      {
        stepNumber: 1,
        action: "Create User Story Document",
        details: [
          "Document story ID and title",
          "Include complete acceptance criteria",
          "Add technical notes if any",
          "Link related stories and dependencies"
        ],
        tips: [
          "Keep document updated as story evolves",
          "Include stakeholder sign-off section"
        ]
      },
      {
        stepNumber: 2,
        action: "Maintain Sprint Backlog",
        details: [
          "Export sprint data from Jira",
          "Track daily progress",
          "Update remaining estimates",
          "Note blockers and risks"
        ],
        tips: [
          "Update burndown chart daily",
          "Flag items at risk early"
        ]
      },
      {
        stepNumber: 3,
        action: "Prepare Retrospective Report",
        details: [
          "Collect feedback from team",
          "Document what went well",
          "List improvement areas",
          "Define action items with owners"
        ],
        tips: [
          "Use formats like Start-Stop-Continue",
          "Limit action items to 2-3"
        ]
      }
    ],
    expectedOutcome: "Complete documentation for sprint delivery and improvement"
  },
  {
    phase: "Phase 6",
    title: "Testing Activities in Sprint",
    objective: "Execute all testing activities within the sprint",
    steps: [
      {
        stepNumber: 1,
        action: "Requirement Analysis",
        details: [
          "Review user stories and acceptance criteria",
          "Identify testable requirements",
          "Clarify ambiguities with Product Owner",
          "Document testing scope"
        ],
        tips: [
          "Raise questions early in the sprint",
          "Create requirement traceability matrix"
        ]
      },
      {
        stepNumber: 2,
        action: "Test Planning",
        details: [
          "Define test approach for each story",
          "Estimate testing effort",
          "Identify test data needs",
          "Plan test environment requirements"
        ],
        tips: [
          "Include exploratory testing time",
          "Coordinate with developers on testability"
        ]
      },
      {
        stepNumber: 3,
        action: "Test Case Development",
        details: [
          "Write test cases for each acceptance criterion",
          "Include positive and negative scenarios",
          "Document test data requirements",
          "Review with developers and PO"
        ],
        tips: [
          "Use test management tools",
          "Maintain test case templates"
        ]
      },
      {
        stepNumber: 4,
        action: "Automation Feasibility",
        details: [
          "Identify candidates for automation",
          "Assess ROI for each test case",
          "Consider maintenance effort",
          "Document automation decisions"
        ],
        tips: [
          "Prioritize stable, repetitive tests",
          "Start with smoke test automation"
        ]
      }
    ],
    expectedOutcome: "Complete testing documentation and execution plan"
  },
  {
    phase: "Phase 7",
    title: "Metrics & Reporting",
    objective: "Track and report sprint progress and quality",
    steps: [
      {
        stepNumber: 1,
        action: "Track Sprint Metrics",
        details: [
          "Monitor velocity (story points completed)",
          "Track burndown chart",
          "Calculate test execution progress",
          "Monitor defect metrics"
        ],
        tips: [
          "Compare with previous sprints",
          "Look for trends, not just numbers"
        ]
      },
      {
        stepNumber: 2,
        action: "Create Sprint Review Presentation",
        details: [
          "Summarize completed stories",
          "Show demo of features",
          "Present quality metrics",
          "Highlight risks and issues"
        ],
        tips: [
          "Keep presentation concise",
          "Focus on business value delivered"
        ]
      },
      {
        stepNumber: 3,
        action: "Quality Metrics to Track",
        details: [
          "Test Pass Rate: (Passed / Total) × 100",
          "Defect Density: Defects / Story Points",
          "Escaped Defects: Bugs found in production",
          "Test Coverage: Requirements covered / Total"
        ],
        tips: [
          "Set quality gates for sprint completion",
          "Track trends across sprints"
        ]
      }
    ],
    expectedOutcome: "Comprehensive metrics dashboard and sprint review presentation"
  }
];

export const agileTemplates: AgileTemplate[] = [
  {
    name: "User Story Document",
    purpose: "Detailed documentation of a user story with all necessary information for development and testing",
    sections: [
      { sectionName: "Story Details", content: "ID, Title, Epic, Sprint, Assignee, Status" },
      { sectionName: "User Story", content: "As a [persona], I want [action], so that [benefit]" },
      { sectionName: "Acceptance Criteria", content: "Numbered list of testable criteria" },
      { sectionName: "Technical Notes", content: "API endpoints, database changes, dependencies" },
      { sectionName: "Test Scenarios", content: "High-level test scenarios derived from AC" },
      { sectionName: "Definition of Done", content: "Checklist for story completion" }
    ],
    example: `
**Story ID:** EC-US-001
**Title:** User Registration
**Epic:** User Management
**Sprint:** Sprint 1
**Assignee:** John Developer
**Status:** In Progress

**User Story:**
As a new customer, I want to create an account with my email and password, so that I can save my preferences and order history.

**Acceptance Criteria:**
1. User can register with email, password, and basic details
2. Email format is validated (must contain @ and domain)
3. Password must be at least 8 characters with 1 uppercase and 1 number
4. Duplicate email addresses show "Email already registered" error
5. Confirmation email is sent within 30 seconds of registration
6. User is redirected to login page after successful registration

**Technical Notes:**
- API: POST /api/v1/users/register
- Database: users table with encrypted password
- Email service: SendGrid integration

**Test Scenarios:**
1. Successful registration with valid data
2. Registration with invalid email format
3. Registration with weak password
4. Registration with existing email

**Definition of Done:**
☐ Code complete and peer reviewed
☐ Unit tests written (>80% coverage)
☐ Integration tests passing
☐ Acceptance criteria verified
☐ Documentation updated
`
  },
  {
    name: "Sprint Backlog",
    purpose: "Track all work items committed to the sprint with daily progress",
    sections: [
      { sectionName: "Sprint Info", content: "Sprint name, goal, dates, team members" },
      { sectionName: "Committed Stories", content: "List of stories with estimates and owners" },
      { sectionName: "Daily Progress", content: "Status updates for each day" },
      { sectionName: "Burndown Data", content: "Points remaining by day" },
      { sectionName: "Blockers", content: "Issues blocking progress" },
      { sectionName: "Risks", content: "Identified risks and mitigation" }
    ],
    example: `
**Sprint:** Sprint 1 - User Management Foundation
**Goal:** Implement core user registration and authentication
**Dates:** Jan 15 - Jan 28, 2025
**Team:** 2 Developers, 1 QA, 1 Scrum Master

**Committed Stories (Total: 24 Points):**
| ID | Story | Points | Owner | Status |
|----|-------|--------|-------|--------|
| EC-US-001 | User Registration | 5 | John | In Progress |
| EC-US-002 | User Login | 3 | Jane | To Do |
| EC-US-003 | Password Reset | 3 | John | To Do |
| EC-US-004 | Profile Management | 5 | Jane | To Do |
| EC-US-005 | Email Verification | 3 | John | To Do |
| EC-US-006 | Session Management | 5 | Jane | To Do |

**Burndown Data:**
Day 1: 24 points | Day 5: 18 points | Day 10: 8 points

**Blockers:**
- Email service credentials pending from DevOps

**Risks:**
- Third-party email service SLA might affect testing
`
  },
  {
    name: "Retrospective Report",
    purpose: "Document sprint retrospective outcomes and action items",
    sections: [
      { sectionName: "Sprint Summary", content: "What was planned vs delivered" },
      { sectionName: "What Went Well", content: "Successes and positives" },
      { sectionName: "What Needs Improvement", content: "Challenges and issues" },
      { sectionName: "Action Items", content: "Specific improvements with owners" },
      { sectionName: "Team Mood", content: "Overall team sentiment" },
      { sectionName: "Kudos", content: "Team member recognition" }
    ],
    example: `
**Sprint:** Sprint 1 - User Management
**Date:** Jan 28, 2025
**Attendees:** Full Scrum Team

**Sprint Summary:**
- Planned: 24 story points
- Completed: 21 story points (87.5%)
- Incomplete: EC-US-006 (Session Management) - carried to next sprint

**What Went Well:**
✓ Great collaboration between dev and QA
✓ Daily standups were effective
✓ Early bug detection saved rework
✓ Clear acceptance criteria reduced confusion

**What Needs Improvement:**
✗ Delayed environment setup affected testing
✗ Some stories had unclear edge cases
✗ Sprint started without all team members onboarded
✗ Estimation was slightly optimistic

**Action Items:**
| Action | Owner | Due Date |
|--------|-------|----------|
| Set up staging environment before sprint | DevOps | Feb 1 |
| Include edge cases in AC template | PO | Feb 1 |
| Onboard new members before sprint starts | SM | Ongoing |
| Use Planning Poker for estimation | SM | Sprint 2 |

**Team Mood:** 7/10 (Positive but room for improvement)

**Kudos:**
🌟 John - Excellent proactive communication about blockers
🌟 Jane - Thorough testing caught critical bug early
`
  }
];

export interface DeliverableDetail {
  name: string;
  description: string;
  purpose: string;
  keyElements: string[];
  sampleContent?: string;
}

export interface EnhancedTestingActivity {
  activity: string;
  description: string;
  whatItIs: string;
  whyItMatters: string;
  deliverables: DeliverableDetail[];
  bestPractices: string[];
  domainExample: {
    domain: string;
    scenario: string;
    sampleDeliverable: string;
  };
}

export const enhancedTestingActivities: EnhancedTestingActivity[] = [
  {
    activity: "Requirement Analysis",
    whatItIs: "Requirement Analysis is the process of examining user stories, acceptance criteria, and business requirements to understand what needs to be tested. Testers break down requirements into testable conditions and identify gaps or ambiguities.",
    whyItMatters: "Without proper requirement analysis, testers may miss critical scenarios, leading to defects in production. It ensures complete test coverage and helps identify issues early when they are cheaper to fix.",
    description: "Review and understand user stories and acceptance criteria to identify testable requirements",
    deliverables: [
      {
        name: "Requirement Traceability Matrix (RTM)",
        description: "A document that maps requirements to test cases, ensuring every requirement has corresponding tests",
        purpose: "Track test coverage and ensure no requirement is left untested",
        keyElements: ["Requirement ID", "Requirement Description", "Test Case ID", "Test Case Description", "Status", "Priority"],
        sampleContent: `| Req ID | Requirement | Test Case ID | Test Case | Status |
|--------|-------------|--------------|-----------|--------|
| REQ-001 | User can add items to cart | TC-001, TC-002 | Add single item, Add multiple items | Covered |
| REQ-002 | Cart shows updated total | TC-003 | Verify cart total updates | Covered |
| REQ-003 | Guest user can checkout | TC-004, TC-005 | Guest checkout flow | Covered |`
      },
      {
        name: "Clarification Questions Document",
        description: "A list of questions raised during requirement review that need answers from stakeholders",
        purpose: "Resolve ambiguities before testing begins to avoid rework",
        keyElements: ["Question ID", "Question", "Asked To", "Date Asked", "Answer", "Impact on Testing"],
        sampleContent: `| Q# | Question | Asked To | Answer |
|----|----------|----------|--------|
| Q1 | What is the max items allowed in cart? | Product Owner | 50 items |
| Q2 | Can guest users save cart for later? | BA | No, only registered users |
| Q3 | Is cart persistent across sessions? | Dev Lead | Yes, for 7 days |`
      },
      {
        name: "Test Scope Document",
        description: "Defines what will and will not be tested for a particular user story or sprint",
        purpose: "Set clear boundaries and manage stakeholder expectations",
        keyElements: ["In-Scope Features", "Out-of-Scope Features", "Assumptions", "Dependencies", "Risks"],
        sampleContent: `IN SCOPE:
- Add to cart functionality
- Cart quantity updates
- Remove from cart
- Apply coupon codes

OUT OF SCOPE:
- Payment processing (separate story)
- Wishlist feature (future sprint)

ASSUMPTIONS:
- Test environment will have product catalog loaded
- Test users will be pre-created`
      }
    ],
    bestPractices: [
      "Participate in grooming sessions actively",
      "Ask clarifying questions early",
      "Identify implicit requirements",
      "Document all assumptions",
      "Review with BA and Dev before finalizing"
    ],
    domainExample: {
      domain: "E-Commerce",
      scenario: "Add to Cart Feature",
      sampleDeliverable: `REQUIREMENT ANALYSIS - ADD TO CART

User Story: As a customer, I want to add products to my cart so I can purchase them later.

TESTABLE CONDITIONS IDENTIFIED:
1. Add single item to empty cart
2. Add same item multiple times (quantity increase)
3. Add different items to cart
4. Add item when cart is at max capacity (50 items)
5. Add out-of-stock item (should show error)
6. Add item as guest user
7. Add item as logged-in user
8. Cart persistence after logout/login
9. Cart merge when guest logs in with existing cart

EDGE CASES:
- Item goes out of stock while in cart
- Price changes while item in cart
- Promotional item with purchase limit`
    }
  },
  {
    activity: "Test Planning",
    whatItIs: "Test Planning is the strategic phase where testers define the approach, scope, resources, timelines, and risks for testing a particular feature or sprint. It answers 'how will we test this?'",
    whyItMatters: "A well-defined test plan ensures efficient use of time and resources, prevents last-minute surprises, and helps teams stay aligned on testing expectations.",
    description: "Define the testing approach, scope, resources, and schedule for the sprint",
    deliverables: [
      {
        name: "Sprint Test Plan",
        description: "A document outlining what, how, when, and who will test features in the sprint",
        purpose: "Provide a roadmap for testing activities during the sprint",
        keyElements: ["Objectives", "Scope", "Test Approach", "Entry/Exit Criteria", "Schedule", "Resources", "Risks"],
        sampleContent: `SPRINT TEST PLAN - Sprint 5

OBJECTIVE: Validate Fund Transfer feature for Banking App

SCOPE:
- Same bank transfers
- NEFT/RTGS transfers
- Transfer limits validation
- Transaction history updates

TEST APPROACH:
- Functional testing: 60%
- Integration testing: 25%
- Security testing: 15%

ENTRY CRITERIA:
- Dev complete & unit tested
- Test environment available
- Test data prepared

EXIT CRITERIA:
- All P1/P2 test cases passed
- Zero critical defects open
- 90% test case execution`
      },
      {
        name: "Test Effort Estimation",
        description: "Breakdown of time required for each testing activity",
        purpose: "Plan sprint capacity and set realistic timelines",
        keyElements: ["Activity", "Estimated Hours", "Resource", "Buffer Time"],
        sampleContent: `| Activity | Est. Hours | Resource |
|----------|------------|----------|
| Test Case Writing | 8 hrs | Tester 1 |
| Test Data Setup | 4 hrs | Tester 1 |
| Functional Testing | 16 hrs | Tester 1, 2 |
| Regression Testing | 8 hrs | Tester 2 |
| Defect Retesting | 4 hrs | Tester 1 |
| TOTAL | 40 hrs | - |`
      },
      {
        name: "Risk Assessment",
        description: "Identification and mitigation plan for potential testing risks",
        purpose: "Proactively address issues that could impact testing success",
        keyElements: ["Risk", "Probability", "Impact", "Mitigation Strategy"],
        sampleContent: `| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Payment gateway unavailable | Medium | High | Use mock service |
| Late code delivery | High | High | Start with API testing |
| Test data corruption | Low | Medium | Daily backup of test DB |`
      }
    ],
    bestPractices: [
      "Plan for exploratory testing time",
      "Consider test data setup time",
      "Identify environment needs early",
      "Include regression time in estimates",
      "Add buffer for defect retesting"
    ],
    domainExample: {
      domain: "Banking",
      scenario: "Fund Transfer Feature",
      sampleDeliverable: `TEST PLAN - FUND TRANSFER MODULE

1. INTRODUCTION
   Feature: Inter-bank and intra-bank fund transfers
   Sprint: Sprint 7
   Test Lead: [Tester Name]

2. TEST SCOPE
   IN SCOPE:
   - IMPS transfers (up to ₹2 lakhs)
   - NEFT transfers
   - RTGS transfers (min ₹2 lakhs)
   - Beneficiary management
   - Transaction limits
   
   OUT OF SCOPE:
   - International transfers (future release)
   - Scheduled transfers

3. TEST APPROACH
   - Positive scenarios: Valid transfers
   - Negative scenarios: Invalid account, insufficient balance
   - Boundary testing: Min/max limits
   - Security: OTP validation, session timeout
   - Integration: Core banking system

4. TEST ENVIRONMENT
   - UAT server with mock banking core
   - Test accounts with various balance levels
   - SMS gateway simulator

5. SCHEDULE
   - Day 1-2: Test case review
   - Day 3-5: Execution
   - Day 6: Defect retesting
   - Day 7: Sign-off`
    }
  },
  {
    activity: "Test Case Development",
    whatItIs: "Test Case Development involves creating detailed, step-by-step instructions for testing each requirement. Each test case includes preconditions, test steps, test data, and expected results.",
    whyItMatters: "Well-written test cases ensure consistent testing across team members and provide documentation that can be reused. They form the basis for both manual and automated testing.",
    description: "Create detailed test cases covering all acceptance criteria and scenarios",
    deliverables: [
      {
        name: "Test Cases Document",
        description: "Comprehensive collection of test cases for the feature being tested",
        purpose: "Provide step-by-step instructions for executing tests",
        keyElements: ["Test Case ID", "Title", "Preconditions", "Test Steps", "Test Data", "Expected Result", "Priority"],
        sampleContent: `TEST CASE: TC-REQ-001
Title: Verify successful mobile recharge
Priority: P1 - Critical
Preconditions: 
- User is logged in
- Wallet has sufficient balance

Test Steps:
1. Navigate to Recharge section
2. Enter valid mobile number: 9876543210
3. Select operator: Airtel
4. Select recharge plan: ₹199 Unlimited
5. Click 'Pay Now'
6. Confirm transaction

Expected Result:
- Recharge successful message displayed
- SMS confirmation received
- Transaction appears in history
- Wallet balance deducted by ₹199`
      },
      {
        name: "Test Data Requirements",
        description: "Specification of data needed to execute test cases",
        purpose: "Ensure all necessary test data is prepared before execution",
        keyElements: ["Data Type", "Sample Values", "Quantity Needed", "Source/Creation Method"],
        sampleContent: `TEST DATA REQUIREMENTS

| Data Type | Sample | Qty | Source |
|-----------|--------|-----|--------|
| Valid Mobile Numbers | 98765xxxxx | 10 | Generate |
| Invalid Numbers | 12345 | 5 | Manual |
| Prepaid Users | With active plan | 5 | Test DB |
| Postpaid Users | With pending bill | 3 | Test DB |
| Recharge Amounts | 10, 99, 199, 999 | 4 | Config |
| Wallet Balance | 0, 100, 5000 | 3 | Setup |`
      },
      {
        name: "Expected Results Documentation",
        description: "Detailed description of expected system behavior for each scenario",
        purpose: "Provide clear pass/fail criteria for test execution",
        keyElements: ["Scenario", "Expected Behavior", "Validation Points"],
        sampleContent: `EXPECTED RESULTS - MOBILE RECHARGE

SCENARIO 1: Successful Recharge
- Success message: "Recharge of ₹XXX successful"
- SMS to user with transaction ID
- Balance deducted immediately
- History updated within 5 seconds

SCENARIO 2: Insufficient Balance
- Error: "Insufficient wallet balance"
- Link to 'Add Money' displayed
- Transaction not processed
- No SMS sent

SCENARIO 3: Invalid Number
- Error: "Please enter valid 10-digit number"
- Submit button disabled
- No API call made`
      }
    ],
    bestPractices: [
      "Cover positive and negative scenarios",
      "Include boundary conditions",
      "Write reusable test cases",
      "Get peer review on test cases",
      "Use clear, unambiguous language"
    ],
    domainExample: {
      domain: "Telecom",
      scenario: "Mobile Recharge Feature",
      sampleDeliverable: `TEST CASES - MOBILE RECHARGE

TC-001: Successful Prepaid Recharge
Priority: P1
Preconditions: Logged in user, wallet balance ₹500
Steps:
1. Click 'Recharge' from home
2. Enter number: 9876543210
3. System auto-detects Airtel
4. Select ₹199 plan
5. Click 'Proceed to Pay'
6. Confirm payment
Expected: Success message, SMS received, ₹199 deducted

TC-002: Recharge with Insufficient Balance
Priority: P1
Preconditions: Logged in user, wallet balance ₹50
Steps:
1. Enter number: 9876543210
2. Select ₹199 plan
3. Click 'Proceed to Pay'
Expected: "Insufficient balance" error, "Add Money" option shown

TC-003: Invalid Mobile Number
Priority: P2
Preconditions: User on recharge page
Steps:
1. Enter number: 12345
2. Tab out of field
Expected: "Enter valid 10-digit mobile number" error

TC-004: Recharge at Maximum Limit
Priority: P2
Preconditions: Daily limit ₹10,000, already recharged ₹9,900
Steps:
1. Attempt ₹199 recharge
Expected: "Daily limit exceeded" message

TC-005: Operator Auto-Detection
Priority: P3
Steps:
1. Enter number: 9876543210 (Airtel)
2. Observe operator field
Expected: "Airtel" auto-selected with logo`
    }
  },
  {
    activity: "Automation Feasibility",
    whatItIs: "Automation Feasibility Analysis evaluates which test cases should be automated based on factors like ROI, test stability, execution frequency, and maintenance effort.",
    whyItMatters: "Not all tests should be automated. This analysis helps prioritize automation efforts on tests that provide the most value, saving time and resources.",
    description: "Analyze which test cases are suitable for automation and prioritize them",
    deliverables: [
      {
        name: "Automation Candidates List",
        description: "Prioritized list of test cases recommended for automation",
        purpose: "Focus automation efforts on high-value tests",
        keyElements: ["Test Case ID", "Automation Priority", "Complexity", "ROI Score", "Recommendation"],
        sampleContent: `AUTOMATION CANDIDATES

| TC ID | Test Case | Priority | Complexity | ROI | Recommend |
|-------|-----------|----------|------------|-----|-----------|
| TC-001 | Login validation | High | Low | 9/10 | Automate |
| TC-015 | Calculate premium | High | Medium | 8/10 | Automate |
| TC-023 | PDF policy download | Medium | High | 5/10 | Manual |
| TC-007 | Form validations | High | Low | 9/10 | Automate |
| TC-031 | Visual layout | Low | High | 2/10 | Manual |`
      },
      {
        name: "ROI Analysis",
        description: "Cost-benefit analysis of automating specific test cases",
        purpose: "Justify automation investment with measurable benefits",
        keyElements: ["Manual Effort", "Automation Effort", "Maintenance Cost", "Break-even Point", "Annual Savings"],
        sampleContent: `ROI ANALYSIS - PREMIUM CALCULATOR

MANUAL TESTING COST:
- Time per execution: 2 hours
- Executions per sprint: 4
- Annual executions: 52
- Hourly rate: ₹500
- Annual cost: 52 × 2 × 500 = ₹52,000

AUTOMATION COST:
- Development: 16 hours = ₹8,000
- Maintenance: 2 hrs/month = ₹12,000/year
- Total first year: ₹20,000

ROI: ₹32,000 saved annually (61% savings)
Break-even: 4 months`
      },
      {
        name: "Automation Approach Document",
        description: "Technical approach for implementing test automation",
        purpose: "Define tools, frameworks, and patterns for automation",
        keyElements: ["Tool Selection", "Framework Design", "Coding Standards", "CI/CD Integration Plan"],
        sampleContent: `AUTOMATION APPROACH

TOOL STACK:
- Language: Java
- Framework: Selenium + TestNG
- Build: Maven
- Reporting: ExtentReports
- CI: Jenkins

DESIGN PATTERNS:
- Page Object Model (POM)
- Data-driven testing
- Keyword-driven for complex flows

FOLDER STRUCTURE:
├── src/test/java
│   ├── pages/
│   ├── tests/
│   ├── utils/
│   └── data/
├── testng.xml
└── pom.xml`
      }
    ],
    bestPractices: [
      "Prioritize smoke and regression tests",
      "Consider test stability before automating",
      "Evaluate ongoing maintenance effort",
      "Start with high-value, low-complexity tests",
      "Avoid automating one-time tests"
    ],
    domainExample: {
      domain: "Insurance",
      scenario: "Premium Calculator Feature",
      sampleDeliverable: `AUTOMATION FEASIBILITY - INSURANCE PREMIUM CALCULATOR

FEATURE: Calculate insurance premium based on user inputs

TEST CASES ANALYSIS:

✅ AUTOMATE (High Priority):
1. TC-101: Basic premium calculation
   - Runs every build
   - Stable inputs/outputs
   - Easy to validate

2. TC-102: Age-based premium variation
   - Data-driven: 20+ age combinations
   - Manual execution tedious
   - High regression value

3. TC-103: Sum assured validation
   - Boundary testing: 1L, 5L, 10L, 1Cr
   - Repetitive calculations

❌ DO NOT AUTOMATE:
1. TC-110: UI layout verification
   - Frequent UI changes
   - Visual testing needed

2. TC-115: Document upload
   - Complex file handling
   - Flaky in CI environment

⚠️ AUTOMATE LATER:
1. TC-120: Quote comparison
   - Dependent on external APIs
   - Wait for API stability

RECOMMENDATION:
Start with TC-101, 102, 103 in Sprint 1
Add TC-104-109 in Sprint 2
Total automation coverage: 65%`
    }
  },
  {
    activity: "Sprint Automation",
    whatItIs: "Sprint Automation is the development and execution of automated test scripts within the sprint. It involves writing code that simulates user actions and validates system behavior automatically.",
    whyItMatters: "Automating tests within the sprint ensures that new features have automated regression coverage from day one, enabling faster feedback and more frequent releases.",
    description: "Develop and execute automated tests within the sprint",
    deliverables: [
      {
        name: "Automated Test Scripts",
        description: "Executable code that performs tests automatically",
        purpose: "Enable repeatable, fast test execution without manual effort",
        keyElements: ["Page Objects", "Test Classes", "Test Data Files", "Configuration Files"],
        sampleContent: `// LoginPage.java
public class LoginPage {
    @FindBy(id = "username")
    private WebElement usernameField;
    
    @FindBy(id = "password")
    private WebElement passwordField;
    
    @FindBy(id = "login-btn")
    private WebElement loginButton;
    
    public void login(String user, String pass) {
        usernameField.sendKeys(user);
        passwordField.sendKeys(pass);
        loginButton.click();
    }
}

// LoginTest.java
@Test
public void testValidLogin() {
    loginPage.login("testuser", "Pass@123");
    Assert.assertTrue(homePage.isDisplayed());
}`
      },
      {
        name: "Test Execution Reports",
        description: "Automated reports generated after test suite execution",
        purpose: "Provide visibility into test results and trends",
        keyElements: ["Total Tests", "Passed/Failed", "Execution Time", "Screenshots on Failure"],
        sampleContent: `AUTOMATION EXECUTION REPORT
Date: 2024-01-15
Suite: Checkout Flow Regression

SUMMARY:
Total Tests: 45
Passed: 42 (93.3%)
Failed: 2 (4.4%)
Skipped: 1 (2.2%)
Duration: 12 min 34 sec

FAILED TESTS:
1. testPaymentTimeout
   Error: Element not found: #confirm-btn
   Screenshot: attached
   
2. testCouponExpired
   Error: Expected discount 10%, Actual 0%
   
SKIPPED:
1. testGiftCard - Feature not deployed`
      },
      {
        name: "Defect Reports from Automation",
        description: "Bugs discovered during automated test execution",
        purpose: "Document issues found by automation for developer fix",
        keyElements: ["Bug ID", "Test Case", "Error Message", "Steps to Reproduce", "Evidence"],
        sampleContent: `DEFECT REPORT
ID: BUG-2024-0156
Source: Automated Test - testCartTotal
Severity: High
Priority: P1

DESCRIPTION:
Cart total calculation incorrect when coupon applied to items with existing discount.

STEPS TO REPRODUCE:
1. Add item with 20% discount (₹800 → ₹640)
2. Apply coupon EXTRA10 (10% off)
3. Observe total

EXPECTED: ₹576 (10% off ₹640)
ACTUAL: ₹520 (10% off original ₹800, then 20%)

EVIDENCE:
- Screenshot attached
- API response log attached
- Test execution log attached`
      }
    ],
    bestPractices: [
      "Follow Page Object Model pattern",
      "Use data-driven testing approach",
      "Integrate with CI/CD pipeline",
      "Maintain test data separately",
      "Add meaningful assertions and logging"
    ],
    domainExample: {
      domain: "E-Commerce",
      scenario: "Checkout Flow Automation",
      sampleDeliverable: `AUTOMATED TEST SCRIPT - CHECKOUT FLOW

// CheckoutTest.java
@Test(dataProvider = "checkoutData")
public void testCompleteCheckout(String product, 
    String qty, String coupon, String expectedTotal) {
    
    // Step 1: Add product to cart
    productPage.searchProduct(product);
    productPage.addToCart();
    
    // Step 2: Update quantity
    cartPage.updateQuantity(qty);
    
    // Step 3: Apply coupon if provided
    if (coupon != null) {
        cartPage.applyCoupon(coupon);
    }
    
    // Step 4: Proceed to checkout
    cartPage.proceedToCheckout();
    
    // Step 5: Fill shipping details
    checkoutPage.fillShippingAddress(TestData.getAddress());
    
    // Step 6: Select payment method
    checkoutPage.selectPaymentMethod("COD");
    
    // Step 7: Verify total and place order
    Assert.assertEquals(checkoutPage.getTotal(), expectedTotal);
    checkoutPage.placeOrder();
    
    // Step 8: Verify order confirmation
    Assert.assertTrue(confirmationPage.isOrderPlaced());
    Assert.assertNotNull(confirmationPage.getOrderId());
}

@DataProvider
public Object[][] checkoutData() {
    return new Object[][] {
        {"iPhone 15", "1", null, "₹79,999"},
        {"iPhone 15", "2", "SAVE10", "₹1,43,998"},
        {"AirPods", "1", "FIRST50", "₹12,450"}
    };
}`
    }
  },
  {
    activity: "Regression & Smoke Testing",
    whatItIs: "Smoke Testing verifies critical functionalities work after a new build (sanity check). Regression Testing ensures new changes haven't broken existing features. Both are essential quality gates.",
    whyItMatters: "These tests catch integration issues early. Smoke tests prevent wasted effort on broken builds, while regression tests ensure system stability as features are added.",
    description: "Ensure new changes don't break existing functionality",
    deliverables: [
      {
        name: "Smoke Test Suite",
        description: "Minimal set of tests covering critical paths that must pass before detailed testing",
        purpose: "Quick validation that build is stable enough for further testing",
        keyElements: ["Critical User Journeys", "Core Features", "Fast Execution Time"],
        sampleContent: `SMOKE TEST SUITE - BANKING APP

Duration: ~15 minutes
Frequency: Every build

TEST CASES:
✓ SM-001: User Login
✓ SM-002: View Account Balance
✓ SM-003: View Transaction History
✓ SM-004: Quick Fund Transfer (same bank)
✓ SM-005: Bill Payment
✓ SM-006: User Logout

PASS CRITERIA: All 6 tests must pass
FAILURE ACTION: Reject build, notify dev team`
      },
      {
        name: "Regression Test Suite",
        description: "Comprehensive test suite covering all existing functionality",
        purpose: "Ensure new changes don't break existing features",
        keyElements: ["All Features", "All User Types", "Integration Points", "Historical Bug Areas"],
        sampleContent: `REGRESSION TEST SUITE - BANKING APP

Duration: ~4 hours
Frequency: Before each release

MODULES COVERED:
1. Authentication (12 tests)
2. Account Management (18 tests)
3. Fund Transfer (25 tests)
4. Bill Payments (15 tests)
5. Cards Management (10 tests)
6. Loans (8 tests)
7. Support/Help (5 tests)

TOTAL: 93 test cases
AUTOMATION: 78 automated (84%)
MANUAL: 15 (complex scenarios)

PRIORITY EXECUTION:
First: P1 tests (45) - 2 hours
Then: P2 tests (35) - 1.5 hours
Finally: P3 tests (13) - 0.5 hours`
      },
      {
        name: "Execution Summary Report",
        description: "Results summary after smoke/regression execution",
        purpose: "Communicate test results to stakeholders for go/no-go decisions",
        keyElements: ["Pass/Fail Summary", "Blockers Found", "Recommendation"],
        sampleContent: `REGRESSION EXECUTION SUMMARY
Release: v2.5.0
Date: 2024-01-20

RESULTS:
Total Executed: 93
Passed: 89 (95.7%)
Failed: 3 (3.2%)
Blocked: 1 (1.1%)

FAILED TESTS:
1. REG-045: NEFT transfer above 5L (P2)
   - Timeout on confirmation screen
2. REG-067: Credit card statement (P3)
   - PDF not loading
3. REG-078: Loan EMI calculator (P3)
   - Rounding error in display

BLOCKED:
1. REG-082: UPI payment (P2)
   - UPI service down for maintenance

RECOMMENDATION: ✅ GO
No P1 failures. P2 failures have workarounds.
P3 failures are cosmetic, can fix post-release.`
      }
    ],
    bestPractices: [
      "Automate smoke tests completely",
      "Run regression on stable builds only",
      "Prioritize critical path tests",
      "Update suites when new features added",
      "Track regression suite growth"
    ],
    domainExample: {
      domain: "Banking",
      scenario: "Core Banking Regression",
      sampleDeliverable: `SMOKE & REGRESSION STRATEGY - BANKING APP

SMOKE TEST SUITE (Must pass before any testing):
Duration: 15 min | Automated: 100%

1. Login with valid credentials
2. Dashboard loads with balance
3. View recent transactions
4. Initiate transfer (don't complete)
5. Open settings
6. Logout successfully

RUN TRIGGER: Every deployment to test environment

---

REGRESSION TEST SUITE:
Duration: 4 hours | Automated: 85%

MODULE BREAKDOWN:
┌─────────────────┬───────┬──────┐
│ Module          │ Tests │ Auto │
├─────────────────┼───────┼──────┤
│ Login/Auth      │ 12    │ 12   │
│ Dashboard       │ 8     │ 8    │
│ Transfers       │ 25    │ 20   │
│ Bill Pay        │ 15    │ 15   │
│ Cards           │ 10    │ 8    │
│ Statements      │ 8     │ 6    │
│ Settings        │ 10    │ 10   │
│ Security        │ 5     │ 0    │
└─────────────────┴───────┴──────┘

RUN SCHEDULE:
- Nightly: Full regression
- Pre-release: Full regression + manual security
- Hotfix: Smoke + affected module only`
    }
  },
  {
    activity: "Test Execution",
    whatItIs: "Test Execution is the phase where testers run prepared test cases against the application, record actual results, compare with expected results, and log defects for any failures.",
    whyItMatters: "This is where bugs are actually found. Proper execution with detailed documentation ensures issues are reproducible and fixable by developers.",
    description: "Execute planned test cases and document results",
    deliverables: [
      {
        name: "Test Execution Log",
        description: "Detailed record of each test case execution with actual results",
        purpose: "Track what was tested, when, and with what outcome",
        keyElements: ["Test ID", "Execution Date", "Tester", "Status", "Actual Result", "Comments"],
        sampleContent: `TEST EXECUTION LOG
Sprint: 5 | Feature: Bill Payment
Tester: [Name] | Environment: UAT

| TC ID | Date | Status | Actual Result | Comments |
|-------|------|--------|---------------|----------|
| TC-201 | Jan 15 | PASS | Bill paid successfully | - |
| TC-202 | Jan 15 | PASS | Receipt generated | PDF verified |
| TC-203 | Jan 15 | FAIL | Timeout error | See BUG-156 |
| TC-204 | Jan 15 | PASS | Schedule saved | - |
| TC-205 | Jan 16 | PASS | Reminder sent | SMS received |
| TC-206 | Jan 16 | BLOCKED | - | Dependent on TC-203 |`
      },
      {
        name: "Defect Reports",
        description: "Detailed bug reports for failed test cases",
        purpose: "Provide developers with all information needed to fix issues",
        keyElements: ["Bug ID", "Summary", "Steps to Reproduce", "Expected vs Actual", "Severity", "Priority", "Evidence"],
        sampleContent: `DEFECT REPORT
ID: BUG-2024-0156
Title: Bill payment timeout for amounts > ₹50,000

ENVIRONMENT: UAT | Browser: Chrome 120

STEPS TO REPRODUCE:
1. Login as testuser01
2. Navigate to Bill Payments
3. Select: Electricity - BESCOM
4. Enter amount: ₹55,000
5. Click 'Pay Now'
6. Complete OTP verification

EXPECTED RESULT:
Payment processed, success message displayed

ACTUAL RESULT:
Spinner shows for 30 seconds, then
"Request Timeout" error displayed

SEVERITY: High
PRIORITY: P1

ATTACHMENTS:
- Screenshot of error
- Network console log
- HAR file`
      },
      {
        name: "Test Summary Report",
        description: "Overall summary of test execution for stakeholders",
        purpose: "Communicate testing progress and quality status",
        keyElements: ["Execution Metrics", "Pass/Fail Analysis", "Defect Summary", "Risk Assessment", "Recommendation"],
        sampleContent: `TEST SUMMARY REPORT
Project: Bill Payment Module
Sprint: 5 | Date: Jan 16, 2024

EXECUTION SUMMARY:
┌──────────────┬───────┐
│ Total TCs    │ 45    │
│ Executed     │ 42    │
│ Passed       │ 38    │
│ Failed       │ 3     │
│ Blocked      │ 4     │
└──────────────┴───────┘

Pass Rate: 90.5%

DEFECT SUMMARY:
- Critical: 0
- High: 1 (BUG-156)
- Medium: 2
- Low: 1

RISK ASSESSMENT:
High amount transactions timeout - P1 blocker

RECOMMENDATION:
Hold release until BUG-156 fixed.
Medium/Low defects can go as known issues.`
      }
    ],
    bestPractices: [
      "Follow test case steps exactly as written",
      "Document actual results clearly",
      "Capture evidence (screenshots, logs)",
      "Re-test fixed defects promptly",
      "Update test cases if steps are unclear"
    ],
    domainExample: {
      domain: "Telecom",
      scenario: "Bill Payment Execution",
      sampleDeliverable: `TEST EXECUTION RECORD - TELECOM BILL PAYMENT

SPRINT 5 - EXECUTION LOG
Feature: Bill Payment for Postpaid Users
Environment: UAT-2 | Date: Jan 15-16, 2024

DAY 1 EXECUTION:
┌────────┬─────────────────────────┬────────┬─────────────────┐
│ TC ID  │ Test Case               │ Status │ Notes           │
├────────┼─────────────────────────┼────────┼─────────────────┤
│ BP-001 │ View outstanding bill   │ PASS   │ Displays ₹1,234 │
│ BP-002 │ Pay full amount         │ PASS   │ Receipt #12345  │
│ BP-003 │ Pay partial amount      │ PASS   │ Balance updated │
│ BP-004 │ Pay via saved card      │ PASS   │ -               │
│ BP-005 │ Pay via net banking     │ FAIL   │ BUG-157 logged  │
│ BP-006 │ Pay via UPI             │ PASS   │ -               │
│ BP-007 │ Schedule future payment │ PASS   │ Date validated  │
│ BP-008 │ Cancel scheduled pay    │ PASS   │ -               │
└────────┴─────────────────────────┴────────┴─────────────────┘

DEFECT LOGGED:
BUG-157: Net banking redirect fails for HDFC
Severity: Medium | Assigned: Dev Team

DAY 1 SUMMARY: 7/8 Passed (87.5%)

DAY 2 EXECUTION:
- Retested BP-005 after fix: PASS
- Completed remaining 6 test cases
- All PASS

FINAL STATUS: 14/14 Passed (100%)`
    }
  },
  {
    activity: "CI/CD Integration",
    whatItIs: "CI/CD Integration involves connecting automated tests to the Continuous Integration/Continuous Deployment pipeline. Tests run automatically on code changes, providing immediate feedback.",
    whyItMatters: "Automated tests in CI/CD catch bugs within minutes of code being committed, enabling faster releases with higher confidence. It shifts testing left in the development cycle.",
    description: "Integrate automated tests into the continuous integration pipeline",
    deliverables: [
      {
        name: "CI/CD Pipeline Configuration",
        description: "Configuration files that define when and how tests run in the pipeline",
        purpose: "Automate test execution on code changes",
        keyElements: ["Pipeline Stages", "Test Triggers", "Environment Setup", "Parallel Execution"],
        sampleContent: `# Jenkinsfile
pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'mvn clean compile'
            }
        }
        
        stage('Unit Tests') {
            steps {
                sh 'mvn test'
            }
        }
        
        stage('Smoke Tests') {
            steps {
                sh 'mvn verify -Dsuite=smoke'
            }
        }
        
        stage('Deploy to QA') {
            when { branch 'develop' }
            steps {
                sh './deploy-qa.sh'
            }
        }
        
        stage('Regression Tests') {
            when { branch 'main' }
            steps {
                sh 'mvn verify -Dsuite=regression'
            }
        }
    }
    
    post {
        always {
            publishHTML(target: [
                reportDir: 'target/reports',
                reportFiles: 'index.html'
            ])
        }
    }
}`
      },
      {
        name: "Pipeline Test Reports",
        description: "Test results published as part of pipeline execution",
        purpose: "Provide visibility into test results for each build",
        keyElements: ["Build Number", "Test Results", "Duration", "Trend Analysis"],
        sampleContent: `JENKINS BUILD REPORT
Build: #245
Branch: feature/payment-gateway
Trigger: Pull Request

STAGE RESULTS:
┌─────────────────┬────────┬──────────┐
│ Stage           │ Status │ Duration │
├─────────────────┼────────┼──────────┤
│ Build           │ ✓      │ 45s      │
│ Unit Tests      │ ✓      │ 2m 15s   │
│ Smoke Tests     │ ✓      │ 8m 30s   │
│ API Tests       │ ✗      │ 5m 12s   │
└─────────────────┴────────┴──────────┘

OVERALL: FAILED

FAILURE DETAILS:
API Tests: 2 of 35 failed
- testPaymentWebhook: Timeout
- testRefundAPI: 500 error

ACTION REQUIRED:
Fix failing tests before merge`
      },
      {
        name: "Quality Gates Definition",
        description: "Rules that determine if a build passes or fails based on quality metrics",
        purpose: "Enforce quality standards automatically",
        keyElements: ["Pass Rate Threshold", "Code Coverage", "Critical Bug Count", "Performance Metrics"],
        sampleContent: `QUALITY GATES CONFIGURATION

GATE 1: Unit Test Gate
- Minimum pass rate: 100%
- Code coverage: > 80%
- New code coverage: > 85%
→ Blocks: Merge to develop

GATE 2: Integration Test Gate
- Minimum pass rate: 95%
- No critical defects
- API response time < 2s
→ Blocks: Deploy to QA

GATE 3: Regression Test Gate
- Minimum pass rate: 98%
- No P1/P2 defects
- Performance within 10% baseline
→ Blocks: Deploy to Production

GATE 4: Security Gate
- No high/critical vulnerabilities
- OWASP top 10 scan pass
- Dependency check pass
→ Blocks: Production release`
      }
    ],
    bestPractices: [
      "Fail build immediately on test failure",
      "Run smoke tests on every commit",
      "Run full regression nightly",
      "Archive test reports for each build",
      "Set up notifications for failures"
    ],
    domainExample: {
      domain: "Insurance",
      scenario: "Portal CI/CD Pipeline",
      sampleDeliverable: `CI/CD PIPELINE - INSURANCE PORTAL

PIPELINE OVERVIEW:
┌──────────────────────────────────────────────────────────┐
│  COMMIT → BUILD → UNIT → SMOKE → DEPLOY → REGRESSION   │
└──────────────────────────────────────────────────────────┘

STAGE CONFIGURATION:

1. ON EVERY COMMIT:
   - Compile code
   - Run unit tests (target: 100% pass)
   - Run static analysis (SonarQube)
   Duration: ~5 minutes

2. ON PULL REQUEST:
   - All above +
   - Run smoke tests (15 critical tests)
   - Run API tests (50 tests)
   Duration: ~20 minutes

3. ON MERGE TO DEVELOP:
   - Deploy to QA environment
   - Run integration tests
   - Run performance baseline
   Duration: ~45 minutes

4. ON MERGE TO MAIN:
   - Deploy to Staging
   - Run full regression (200 tests)
   - Run security scan
   - Generate release notes
   Duration: ~2 hours

5. ON RELEASE TAG:
   - Deploy to Production
   - Run production smoke
   - Enable monitoring alerts
   Duration: ~30 minutes

NOTIFICATIONS:
- Slack: #insurance-builds
- Email: qa-team@company.com
- PagerDuty: On production failure`
    }
  }
];

// Keep the original for backward compatibility
export const testingActivities: TestingActivity[] = enhancedTestingActivities.map(activity => ({
  activity: activity.activity,
  description: activity.description,
  deliverables: activity.deliverables.map(d => d.name),
  bestPractices: activity.bestPractices,
  domainExample: activity.domainExample.sampleDeliverable.substring(0, 150) + "..."
}));

export const interviewQuestions: InterviewQuestion[] = [
  {
    category: "Agile & Jira",
    questions: [
      {
        question: "What are the key ceremonies in Scrum?",
        expectedAnswer: "The four key ceremonies are: 1) Sprint Planning - where the team selects and commits to work for the sprint, 2) Daily Stand-up - 15-minute daily sync on progress and blockers, 3) Sprint Review - demo of completed work to stakeholders, 4) Sprint Retrospective - team reflection on process improvements.",
        followUpQuestions: [
          "Who participates in each ceremony?",
          "What happens if a team skips retrospectives?",
          "How do you handle a long daily stand-up?"
        ]
      },
      {
        question: "Explain the difference between Epic, Story, and Task in Jira.",
        expectedAnswer: "Epic is a large body of work spanning multiple sprints (e.g., User Management). Story is a user-focused feature that delivers value (e.g., User Registration). Task is technical work needed to complete a story (e.g., Create registration API). The hierarchy helps organize and track work at different levels.",
        followUpQuestions: [
          "When would you use a Sub-task?",
          "How do you decide if something is an Epic or Story?",
          "Can a Task exist without a Story?"
        ]
      },
      {
        question: "How do you prioritize backlog items?",
        expectedAnswer: "Prioritization considers: 1) Business value - ROI and customer impact, 2) Dependencies - what unblocks other work, 3) Risk - tackle high-risk items early, 4) Effort - balance quick wins with larger features. Techniques include MoSCoW (Must/Should/Could/Won't), WSJF (Weighted Shortest Job First), and Value vs Effort matrix.",
        followUpQuestions: [
          "Who is responsible for prioritization?",
          "How do you handle conflicting priorities?",
          "What if stakeholders disagree on priority?"
        ]
      }
    ]
  },
  {
    category: "Testing in Agile",
    questions: [
      {
        question: "How do you write acceptance criteria for a user story?",
        expectedAnswer: "Acceptance criteria should be: 1) Specific and testable, 2) Written from user perspective, 3) Include happy path and edge cases, 4) Use Given-When-Then format for clarity. Example: Given I am a registered user, When I enter correct credentials, Then I should be logged in and redirected to dashboard.",
        followUpQuestions: [
          "How many acceptance criteria is too many?",
          "Who writes acceptance criteria?",
          "How do you handle changing criteria mid-sprint?"
        ]
      },
      {
        question: "What is the purpose of a Sprint Retrospective?",
        expectedAnswer: "Sprint Retrospective allows the team to: 1) Reflect on the sprint process, 2) Identify what went well (continue), 3) Find areas for improvement (change), 4) Create actionable improvement items for next sprint. It promotes continuous improvement and team ownership of process.",
        followUpQuestions: [
          "What if team members don't speak up?",
          "How do you ensure action items get done?",
          "Should managers attend retrospectives?"
        ]
      },
      {
        question: "How do you decide which test cases to automate?",
        expectedAnswer: "Consider: 1) Frequency of execution - automate repetitive tests, 2) Stability - automate stable features, 3) Risk - automate critical paths, 4) ROI - compare automation cost vs manual effort saved. Good candidates: smoke tests, regression tests, data-driven tests. Avoid: one-time tests, frequently changing UI, exploratory testing.",
        followUpQuestions: [
          "What's your automation to manual ratio?",
          "How do you handle flaky tests?",
          "When would you de-automate a test?"
        ]
      }
    ]
  },
  {
    category: "CI/CD & Automation",
    questions: [
      {
        question: "How do you integrate automated tests into a CI/CD pipeline?",
        expectedAnswer: "Integration steps: 1) Choose a CI tool (Jenkins, GitLab CI, GitHub Actions), 2) Configure test execution in pipeline stages, 3) Set up test reporting and notifications, 4) Define quality gates (fail build on test failure). Best practice: Run fast tests (unit, smoke) on every commit, full regression on scheduled or pre-release builds.",
        followUpQuestions: [
          "How do you handle test environment in CI?",
          "What if tests are slow and blocking deployment?",
          "How do you manage test data in CI?"
        ]
      },
      {
        question: "What is the difference between Smoke and Regression testing?",
        expectedAnswer: "Smoke Testing: Quick, high-level tests to verify basic functionality works after a build. It's a 'go/no-go' check. Regression Testing: Comprehensive tests to ensure new changes haven't broken existing functionality. It covers broader scenarios. Smoke is subset of regression, run more frequently.",
        followUpQuestions: [
          "How many test cases in a smoke suite?",
          "How often do you update regression suite?",
          "Can smoke testing replace regression?"
        ]
      }
    ]
  },
  {
    category: "Metrics & Reporting",
    questions: [
      {
        question: "What metrics do you track during a sprint?",
        expectedAnswer: "Key metrics: 1) Velocity - story points completed per sprint, 2) Burndown - work remaining over time, 3) Test Pass Rate - percentage of tests passing, 4) Defect metrics - found vs fixed, severity distribution, 5) Code coverage - percentage of code tested. Use trends, not absolute numbers, to drive improvement.",
        followUpQuestions: [
          "What's a good velocity for a new team?",
          "How do you handle incomplete stories in velocity?",
          "What metrics indicate team health?"
        ]
      },
      {
        question: "How do you define Definition of Done for a user story?",
        expectedAnswer: "Definition of Done (DoD) is a checklist ensuring quality: 1) Code complete and peer reviewed, 2) Unit tests written (>80% coverage), 3) Integration tests passing, 4) Acceptance criteria verified, 5) Documentation updated, 6) No critical bugs open, 7) Deployed to staging. DoD is team-agreed and applies to all stories.",
        followUpQuestions: [
          "How is DoD different from acceptance criteria?",
          "Can DoD change during the project?",
          "What happens if a story doesn't meet DoD?"
        ]
      }
    ]
  }
];

export const traineeChecklists: TraineeChecklist[] = [
  {
    category: "Agile Fundamentals",
    items: [
      { task: "Understand Agile principles and Scrum framework", completed: false, notes: "Read Agile Manifesto, understand 12 principles" },
      { task: "Know the three Scrum roles and their responsibilities", completed: false, notes: "Product Owner, Scrum Master, Development Team" },
      { task: "Understand all Scrum ceremonies and their purposes", completed: false, notes: "Planning, Stand-up, Review, Retrospective" },
      { task: "Know the Scrum artifacts and who owns them", completed: false, notes: "Product Backlog, Sprint Backlog, Increment" }
    ]
  },
  {
    category: "Jira Proficiency",
    items: [
      { task: "Create a Scrum project and configure basic settings", completed: false, notes: "Use Scrum template, set up board" },
      { task: "Create and manage Epics with proper descriptions", completed: false, notes: "Epic should represent major feature area" },
      { task: "Write User Stories with acceptance criteria", completed: false, notes: "As a... I want... So that... format" },
      { task: "Estimate stories using story points", completed: false, notes: "Use Fibonacci scale, consider complexity" },
      { task: "Create and start a sprint", completed: false, notes: "Move stories, set goal, configure dates" },
      { task: "Log defects with complete information", completed: false, notes: "Steps to reproduce, environment, severity" }
    ]
  },
  {
    category: "Agile Deliverables",
    items: [
      { task: "Create a User Story Document with all sections", completed: false, notes: "Include AC, technical notes, DoD" },
      { task: "Maintain Sprint Backlog with daily updates", completed: false, notes: "Track progress, blockers, risks" },
      { task: "Prepare a Retrospective Report with action items", completed: false, notes: "What went well, improvements, actions" }
    ]
  },
  {
    category: "Testing in Agile",
    items: [
      { task: "Analyze requirements and identify test scenarios", completed: false, notes: "Review stories, ask clarifying questions" },
      { task: "Write test cases for acceptance criteria", completed: false, notes: "Cover positive, negative, edge cases" },
      { task: "Determine automation feasibility for test cases", completed: false, notes: "Evaluate ROI, stability, maintenance" },
      { task: "Execute tests and report defects", completed: false, notes: "Follow process, capture evidence" },
      { task: "Understand smoke vs regression testing", completed: false, notes: "Know when to use each" }
    ]
  },
  {
    category: "Metrics & Reporting",
    items: [
      { task: "Track and interpret sprint velocity", completed: false, notes: "Story points completed per sprint" },
      { task: "Read and explain burndown charts", completed: false, notes: "Work remaining over time" },
      { task: "Calculate and report test metrics", completed: false, notes: "Pass rate, defect density, coverage" },
      { task: "Prepare sprint review presentation", completed: false, notes: "Demo, metrics, highlights" }
    ]
  }
];
