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

export const testingActivities: TestingActivity[] = [
  {
    activity: "Requirement Analysis",
    description: "Review and understand user stories and acceptance criteria to identify testable requirements",
    deliverables: [
      "Requirement Traceability Matrix (RTM)",
      "Clarification questions document",
      "Test scope document"
    ],
    bestPractices: [
      "Participate in grooming sessions",
      "Ask clarifying questions early",
      "Identify implicit requirements",
      "Document assumptions"
    ],
    domainExample: "For E-commerce 'Add to Cart' story: Analyze what happens when item is out of stock, max quantity limits, guest vs registered user behavior, cart persistence rules"
  },
  {
    activity: "Test Planning",
    description: "Define the testing approach, scope, resources, and schedule for the sprint",
    deliverables: [
      "Sprint Test Plan",
      "Test effort estimation",
      "Resource allocation",
      "Risk assessment"
    ],
    bestPractices: [
      "Plan for exploratory testing",
      "Consider test data setup time",
      "Identify environment needs early",
      "Include regression time"
    ],
    domainExample: "For Banking 'Fund Transfer' feature: Plan for security testing, performance testing for high-value transfers, integration testing with payment gateway"
  },
  {
    activity: "Test Case Development",
    description: "Create detailed test cases covering all acceptance criteria and scenarios",
    deliverables: [
      "Test cases document",
      "Test data requirements",
      "Expected results documentation"
    ],
    bestPractices: [
      "Cover positive and negative scenarios",
      "Include boundary conditions",
      "Write reusable test cases",
      "Peer review test cases"
    ],
    domainExample: "For Telecom 'Recharge' feature: Test cases for valid amounts, minimum/maximum limits, expired offers, concurrent recharges, payment failures"
  },
  {
    activity: "Automation Feasibility",
    description: "Analyze which test cases are suitable for automation and prioritize them",
    deliverables: [
      "Automation candidates list",
      "ROI analysis",
      "Automation approach document"
    ],
    bestPractices: [
      "Prioritize smoke and regression tests",
      "Consider test stability",
      "Evaluate maintenance effort",
      "Start with high-value tests"
    ],
    domainExample: "For Insurance 'Premium Calculator': Automate calculation scenarios with different inputs, compare results with expected premium tables"
  },
  {
    activity: "Sprint Automation",
    description: "Develop and execute automated tests within the sprint",
    deliverables: [
      "Automated test scripts",
      "Test execution reports",
      "Defect reports from automation"
    ],
    bestPractices: [
      "Follow page object pattern",
      "Use data-driven approach",
      "Integrate with CI/CD",
      "Maintain test data separately"
    ],
    domainExample: "Automate E-commerce checkout flow: Add item, update quantity, apply coupon, complete payment - run on every build"
  },
  {
    activity: "Regression & Smoke Testing",
    description: "Ensure new changes don't break existing functionality",
    deliverables: [
      "Smoke test suite",
      "Regression test suite",
      "Execution summary"
    ],
    bestPractices: [
      "Automate smoke tests",
      "Run regression on stable builds",
      "Prioritize critical paths",
      "Update suite with new features"
    ],
    domainExample: "Banking app smoke suite: Login, View Balance, Quick Transfer, Logout - must pass before any deployment"
  },
  {
    activity: "Test Execution",
    description: "Execute planned test cases and document results",
    deliverables: [
      "Test execution log",
      "Defect reports",
      "Test summary report"
    ],
    bestPractices: [
      "Follow test case steps exactly",
      "Document actual results",
      "Capture evidence (screenshots/logs)",
      "Re-test fixed defects"
    ],
    domainExample: "Execute Telecom bill payment tests: Verify amount display, payment processing, SMS confirmation, receipt generation"
  },
  {
    activity: "CI/CD Integration",
    description: "Integrate automated tests into the continuous integration pipeline",
    deliverables: [
      "CI/CD configuration",
      "Pipeline test reports",
      "Quality gates defined"
    ],
    bestPractices: [
      "Fail build on test failure",
      "Run smoke tests on every commit",
      "Run full regression nightly",
      "Archive test reports"
    ],
    domainExample: "Insurance portal: On every PR - run unit tests + API tests; On merge to main - run full regression; On release - run smoke + security tests"
  }
];

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
