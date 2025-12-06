# 📘 PACK 2: COMPLETE FUNCTIONAL TESTING GUIDE
## From Zero to Hero - A Comprehensive Training Manual for Freshers

---

# TABLE OF CONTENTS

1. [Introduction to Testing](#1-introduction-to-testing)
2. [SDLC - Software Development Life Cycle](#2-sdlc---software-development-life-cycle)
3. [STLC - Software Testing Life Cycle](#3-stlc---software-testing-life-cycle)
4. [Types of Testing](#4-types-of-testing)
5. [Test Design Techniques](#5-test-design-techniques)
6. [Writing Test Cases](#6-writing-test-cases)
7. [Real-Time Functional Testing Scenarios](#7-real-time-functional-testing-scenarios)
8. [Defect Reporting](#8-defect-reporting)
9. [Agile & Scrum Testing](#9-agile--scrum-testing)
10. [Mock Interview Questions](#10-mock-interview-questions)
11. [Summary & Quick Revision Notes](#11-summary--quick-revision-notes)

---

# 1. INTRODUCTION TO TESTING

## 1.1 What is Software Testing?

**Definition:** Software Testing is the process of evaluating and verifying that a software application or product does what it is supposed to do.

**Simple Analogy:** 
Think of buying a new mobile phone. Before using it daily, you would:
- Check if the screen works
- Test if calls connect properly
- Verify the camera takes photos
- Ensure apps install correctly

This is exactly what software testing does - but for software applications!

```
┌─────────────────────────────────────────────────────────────┐
│                    SOFTWARE TESTING                          │
│                                                              │
│   INPUT          →      PROCESS        →      OUTPUT         │
│   (Requirements)    (Testing Activity)    (Quality Product)  │
│                                                              │
│   • User needs       • Execute tests      • Bug-free app     │
│   • Specifications   • Find defects       • Happy customers  │
│   • Design docs      • Report issues      • Business value   │
└─────────────────────────────────────────────────────────────┘
```

## 1.2 Why is Testing Needed?

| Reason | Real-World Example |
|--------|-------------------|
| **Prevent Financial Loss** | A banking app bug transferred ₹10,000 instead of ₹1,000 |
| **Ensure Safety** | Medical equipment software malfunction could harm patients |
| **Protect Reputation** | E-commerce site crash during sale = lost customers |
| **Save Time & Cost** | Finding bugs early is 10x cheaper than after release |
| **Customer Satisfaction** | Users abandon apps that crash or have bugs |
| **Legal Compliance** | Healthcare, finance apps must meet regulations |

### Real-World Testing Failures:

1. **Knight Capital Group (2012):** A software bug caused $440 million loss in 45 minutes
2. **NASA Mars Climate Orbiter (1999):** Unit conversion bug caused $125 million spacecraft loss
3. **Therac-25 (1985-87):** Medical radiation machine bug caused patient deaths

## 1.3 Who is a Tester?

A **Software Tester** (also called QA Engineer/Quality Analyst) is a professional who:
- Finds bugs before customers do
- Ensures software meets requirements
- Validates user experience
- Documents issues clearly
- Collaborates with developers

### Tester's Daily Activities:
```
┌────────────────────────────────────────────────────────────┐
│                  A DAY IN TESTER'S LIFE                    │
├────────────────────────────────────────────────────────────┤
│  09:00 AM │ Stand-up meeting - Discuss yesterday's work    │
│  09:30 AM │ Review new requirements/user stories           │
│  10:30 AM │ Write/update test cases                        │
│  12:00 PM │ Execute test cases                             │
│  02:00 PM │ Log defects in JIRA/bug tracking tool          │
│  03:00 PM │ Retest fixed bugs                              │
│  04:00 PM │ Regression testing                             │
│  05:00 PM │ Update test reports & documentation            │
│  05:30 PM │ Sync with developers on blockers               │
└────────────────────────────────────────────────────────────┘
```

### Skills Required for a Tester:

| Technical Skills | Soft Skills |
|-----------------|-------------|
| Understanding of SDLC/STLC | Analytical thinking |
| Test case writing | Attention to detail |
| Bug tracking tools (JIRA) | Communication |
| SQL basics | Curiosity |
| API testing basics | Patience |
| Browser DevTools | Team collaboration |

## 1.4 SDLC vs STLC

```
┌─────────────────────────────────────────────────────────────────────┐
│                         SDLC vs STLC                                │
├────────────────────────────┬────────────────────────────────────────┤
│          SDLC              │              STLC                      │
├────────────────────────────┼────────────────────────────────────────┤
│ Software Development       │ Software Testing                       │
│ Life Cycle                 │ Life Cycle                             │
├────────────────────────────┼────────────────────────────────────────┤
│ Focuses on building        │ Focuses on testing                     │
│ the software               │ the software                           │
├────────────────────────────┼────────────────────────────────────────┤
│ Involves entire team       │ Primarily involves                     │
│ (BA, Dev, QA, DevOps)      │ testing team                           │
├────────────────────────────┼────────────────────────────────────────┤
│ Starts from requirement    │ Starts when requirements               │
│ gathering                  │ are ready for analysis                 │
├────────────────────────────┼────────────────────────────────────────┤
│ Output: Working Software   │ Output: Tested, Quality Software       │
└────────────────────────────┴────────────────────────────────────────┘
```

## 1.5 Role of a Functional Tester in Real Projects

### Project Example: E-Commerce Website (like Amazon/Flipkart)

**Functional Tester's Responsibilities:**

1. **Requirement Phase:**
   - Review requirements for testability
   - Identify ambiguous requirements
   - Ask clarifying questions

2. **Test Planning:**
   - Estimate testing effort
   - Identify test scenarios
   - Plan test data requirements

3. **Test Design:**
   - Write detailed test cases
   - Create test data
   - Design test scenarios

4. **Test Execution:**
   - Execute test cases manually
   - Record results (Pass/Fail)
   - Take screenshots for evidence

5. **Defect Management:**
   - Log bugs with clear steps
   - Retest fixed bugs
   - Track bug status

6. **Reporting:**
   - Daily status reports
   - Test summary reports
   - Defect metrics

---

# 2. SDLC - SOFTWARE DEVELOPMENT LIFE CYCLE

## 2.1 What is SDLC?

**SDLC (Software Development Life Cycle)** is a systematic process for planning, creating, testing, and deploying software applications.

```
┌─────────────────────────────────────────────────────────────────────┐
│                         SDLC PHASES                                 │
│                                                                     │
│    ┌──────────────┐                                                 │
│    │ REQUIREMENT  │ ──────────────────────────────┐                 │
│    │  GATHERING   │                               │                 │
│    └──────────────┘                               ▼                 │
│           │                              ┌──────────────┐           │
│           │                              │  MAINTENANCE │           │
│           ▼                              └──────────────┘           │
│    ┌──────────────┐                               ▲                 │
│    │    DESIGN    │                               │                 │
│    └──────────────┘                               │                 │
│           │                              ┌──────────────┐           │
│           │                              │  DEPLOYMENT  │           │
│           ▼                              └──────────────┘           │
│    ┌──────────────┐                               ▲                 │
│    │ DEVELOPMENT  │                               │                 │
│    └──────────────┘                               │                 │
│           │                              ┌──────────────┐           │
│           └─────────────────────────────▶│   TESTING    │           │
│                                          └──────────────┘           │
└─────────────────────────────────────────────────────────────────────┘
```

## 2.2 SDLC Phases Explained

### Phase 1: Requirement Gathering

**What happens:** Business Analysts (BAs) collect requirements from clients/stakeholders.

**Real Example - Food Delivery App (like Swiggy/Zomato):**

| Requirement Type | Example |
|-----------------|---------|
| Functional | User should be able to search restaurants by location |
| Functional | User should add items to cart |
| Functional | User should pay using multiple payment methods |
| Non-Functional | App should load within 3 seconds |
| Non-Functional | App should handle 10,000 concurrent users |

**Deliverables:**
- Business Requirements Document (BRD)
- Functional Requirements Document (FRD)
- Software Requirements Specification (SRS)

### Phase 2: Design

**What happens:** Architects and senior developers design the system.

**Real Example - Food Delivery App:**

```
┌─────────────────────────────────────────────────────────────────┐
│                    HIGH-LEVEL DESIGN (HLD)                      │
│                                                                 │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐  │
│  │  Mobile  │───▶│   API    │───▶│ Business │───▶│ Database │  │
│  │   App    │    │ Gateway  │    │  Logic   │    │  Server  │  │
│  └──────────┘    └──────────┘    └──────────┘    └──────────┘  │
│                                                                 │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐                  │
│  │ Payment  │    │ Location │    │  Push    │                  │
│  │ Gateway  │    │ Services │    │ Notif.   │                  │
│  └──────────┘    └──────────┘    └──────────┘                  │
└─────────────────────────────────────────────────────────────────┘
```

**Deliverables:**
- High-Level Design (HLD) document
- Low-Level Design (LLD) document
- Database design
- UI/UX mockups

### Phase 3: Development

**What happens:** Developers write code based on design documents.

**Real Example - Food Delivery App:**

| Module | Developer Task |
|--------|---------------|
| User Authentication | Implement login, signup, OTP verification |
| Restaurant Listing | Build API to fetch restaurant data |
| Cart Management | Develop add/remove/update cart items |
| Payment Integration | Integrate Razorpay/PayTM APIs |
| Order Tracking | Real-time order status updates |

**Deliverables:**
- Source code
- Unit test cases
- Code documentation

### Phase 4: Testing

**What happens:** QA team tests the application thoroughly.

**Real Example - Food Delivery App:**

| Test Type | What We Test |
|-----------|-------------|
| Smoke Testing | Basic features work (login, search, add to cart) |
| Functional Testing | All features work as per requirements |
| Integration Testing | Restaurant API + Cart + Payment work together |
| Regression Testing | Old features still work after new code |
| Performance Testing | App handles 10,000 users |
| Security Testing | Payment data is encrypted |

**Deliverables:**
- Test cases
- Test execution reports
- Defect reports
- Test summary report

### Phase 5: Deployment

**What happens:** Application is released to production environment.

**Real Example - Food Delivery App:**

```
┌─────────────────────────────────────────────────────────────────┐
│                    DEPLOYMENT PIPELINE                          │
│                                                                 │
│  Developer  ──▶  Dev Server  ──▶  QA Server  ──▶  Staging       │
│    Code          (Testing)       (Testing)        Server        │
│                                                     │           │
│                                                     ▼           │
│                              Production Server  ◀───┘           │
│                              (Live to Users)                    │
└─────────────────────────────────────────────────────────────────┘
```

**Deployment Types:**
- **Big Bang:** All features deployed at once
- **Phased:** Features deployed in phases
- **Blue-Green:** Two identical production environments
- **Canary:** Gradual rollout to subset of users

### Phase 6: Maintenance

**What happens:** Post-release support and enhancements.

**Real Example - Food Delivery App:**

| Maintenance Type | Example |
|-----------------|---------|
| Bug Fixes | Fix: "Cart total showing wrong amount" |
| Enhancements | Add: "Schedule order for later" feature |
| Performance | Optimize: Reduce app load time from 5s to 2s |
| Security Patches | Update: Fix vulnerability in payment module |

## 2.3 SDLC Models

### Waterfall Model

```
┌─────────────────┐
│  Requirements   │
└────────┬────────┘
         ▼
┌─────────────────┐
│     Design      │
└────────┬────────┘
         ▼
┌─────────────────┐
│   Development   │
└────────┬────────┘
         ▼
┌─────────────────┐
│    Testing      │
└────────┬────────┘
         ▼
┌─────────────────┐
│   Deployment    │
└────────┬────────┘
         ▼
┌─────────────────┐
│  Maintenance    │
└─────────────────┘
```

**When to use:** Clear, fixed requirements that won't change

### Agile Model

```
┌─────────────────────────────────────────────────────────────┐
│                      AGILE SPRINTS                          │
│                                                             │
│   Sprint 1        Sprint 2        Sprint 3        Sprint N  │
│  ┌───────┐       ┌───────┐       ┌───────┐       ┌───────┐ │
│  │Plan   │       │Plan   │       │Plan   │       │Plan   │ │
│  │Design │       │Design │       │Design │       │Design │ │
│  │Develop│  ──▶  │Develop│  ──▶  │Develop│  ──▶  │Develop│ │
│  │Test   │       │Test   │       │Test   │       │Test   │ │
│  │Release│       │Release│       │Release│       │Release│ │
│  └───────┘       └───────┘       └───────┘       └───────┘ │
│                                                             │
│   2 weeks         2 weeks         2 weeks         2 weeks   │
└─────────────────────────────────────────────────────────────┘
```

**When to use:** Requirements change frequently, need quick releases

---

# 3. STLC - SOFTWARE TESTING LIFE CYCLE

## 3.1 What is STLC?

**STLC (Software Testing Life Cycle)** is a sequence of activities performed by the testing team to ensure software quality.

```
┌─────────────────────────────────────────────────────────────────────┐
│                         STLC PHASES                                 │
│                                                                     │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐               │
│  │ Requirement │──▶│    Test     │──▶│  Test Case  │               │
│  │  Analysis   │   │  Planning   │   │   Design    │               │
│  └─────────────┘   └─────────────┘   └─────────────┘               │
│                                              │                      │
│         ┌────────────────────────────────────┘                      │
│         ▼                                                           │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐               │
│  │ Environment │──▶│    Test     │──▶│   Defect    │               │
│  │    Setup    │   │  Execution  │   │  Reporting  │               │
│  └─────────────┘   └─────────────┘   └─────────────┘               │
│                                              │                      │
│         ┌────────────────────────────────────┘                      │
│         ▼                                                           │
│  ┌─────────────┐                                                    │
│  │    Test     │                                                    │
│  │   Closure   │                                                    │
│  └─────────────┘                                                    │
└─────────────────────────────────────────────────────────────────────┘
```

## 3.2 STLC Phases in Detail

### Phase 1: Requirement Analysis

**Objective:** Understand WHAT to test

**Activities:**
- Review SRS/BRD documents
- Identify testable requirements
- Clarify ambiguous requirements
- Identify automation scope

**Real Example - Login Feature:**

| Requirement ID | Requirement | Testable? |
|---------------|-------------|-----------|
| REQ-001 | User should login with email and password | ✅ Yes |
| REQ-002 | System should be user-friendly | ❌ No (Ambiguous) |
| REQ-003 | Password must be minimum 8 characters | ✅ Yes |
| REQ-004 | Show error message for invalid credentials | ✅ Yes |

**Deliverables:**
- Requirement Traceability Matrix (RTM)
- Automation feasibility report
- List of queries for BA/Client

### Phase 2: Test Planning

**Objective:** Define HOW to test

**Activities:**
- Estimate testing effort
- Define test strategy
- Identify resources needed
- Define entry/exit criteria
- Risk analysis

**Real Example - E-commerce Project:**

| Planning Element | Details |
|-----------------|---------|
| **Scope** | Login, Search, Cart, Checkout, Payment |
| **Testing Types** | Functional, Regression, Integration, UAT |
| **Environment** | Chrome, Firefox, Safari, Mobile (iOS/Android) |
| **Team** | 2 Senior QA, 3 Junior QA |
| **Duration** | 4 weeks |
| **Tools** | JIRA (defects), TestRail (test cases), Postman (API) |

**Entry Criteria:**
- Requirements document approved
- Test environment ready
- Test data available

**Exit Criteria:**
- 100% test cases executed
- 95% test cases passed
- All Critical/High bugs fixed
- Test summary report approved

**Deliverable:** Test Plan Document

### Phase 3: Test Case Design

**Objective:** Create detailed test cases

**Activities:**
- Write test cases
- Create test scenarios
- Design test data
- Review test cases

**Real Example - Login Test Cases:**

| TC ID | Test Scenario | Test Steps | Expected Result |
|-------|--------------|------------|-----------------|
| TC_001 | Valid Login | 1. Enter valid email 2. Enter valid password 3. Click Login | User should be redirected to homepage |
| TC_002 | Invalid Password | 1. Enter valid email 2. Enter wrong password 3. Click Login | Error: "Invalid credentials" |
| TC_003 | Empty Fields | 1. Leave email blank 2. Leave password blank 3. Click Login | Error: "Email is required" |
| TC_004 | SQL Injection | 1. Enter "' OR '1'='1" in email 2. Click Login | Error: "Invalid email format" |

**Deliverables:**
- Test cases
- Test scenarios
- Test data

### Phase 4: Environment Setup

**Objective:** Prepare the testing environment

**Activities:**
- Setup test environment
- Install required software
- Configure test data
- Verify environment connectivity

**Real Example - Environment Setup Checklist:**

| Item | Status | Details |
|------|--------|---------|
| Test Server URL | ✅ | https://test.example.com |
| Database Access | ✅ | MySQL - test_db |
| Test User Accounts | ✅ | 5 test users created |
| Browser Versions | ✅ | Chrome 120, Firefox 121 |
| Mobile Devices | ✅ | iPhone 14, Samsung S23 |
| API Testing Tool | ✅ | Postman installed |
| VPN Access | ✅ | VPN credentials received |

**Deliverable:** Environment Setup Report

### Phase 5: Test Execution

**Objective:** Execute test cases and record results

**Activities:**
- Execute test cases
- Record Pass/Fail status
- Capture screenshots
- Log defects for failures
- Re-test fixed defects

**Real Example - Test Execution Log:**

| TC ID | Description | Status | Executed By | Date | Defect ID |
|-------|-------------|--------|-------------|------|-----------|
| TC_001 | Valid Login | PASS | John | 2024-01-15 | - |
| TC_002 | Invalid Password | FAIL | John | 2024-01-15 | BUG-101 |
| TC_003 | Empty Fields | PASS | Sarah | 2024-01-15 | - |
| TC_004 | SQL Injection | PASS | Sarah | 2024-01-15 | - |

**Deliverables:**
- Test execution report
- Defect reports
- Screenshots/evidence

### Phase 6: Defect Reporting

**Objective:** Report and track defects

**Activities:**
- Log defects with proper details
- Assign severity and priority
- Track defect status
- Retest fixed defects
- Close verified defects

**Real Example - Defect Report:**

```
┌─────────────────────────────────────────────────────────────────┐
│                    DEFECT REPORT - BUG-101                      │
├─────────────────────────────────────────────────────────────────┤
│ Title: Wrong error message for invalid password                 │
├─────────────────────────────────────────────────────────────────┤
│ Severity: Medium          │ Priority: High                      │
├─────────────────────────────────────────────────────────────────┤
│ Environment: Chrome 120, Windows 11                             │
├─────────────────────────────────────────────────────────────────┤
│ Steps to Reproduce:                                             │
│ 1. Go to https://test.example.com/login                         │
│ 2. Enter email: testuser@example.com                            │
│ 3. Enter password: wrongpass123                                 │
│ 4. Click "Login" button                                         │
├─────────────────────────────────────────────────────────────────┤
│ Expected Result: "Invalid credentials. Please try again."       │
│ Actual Result: "Error 500: Internal Server Error"               │
├─────────────────────────────────────────────────────────────────┤
│ Attachments: screenshot_bug101.png                              │
└─────────────────────────────────────────────────────────────────┘
```

**Deliverable:** Defect Log

### Phase 7: Test Closure

**Objective:** Summarize testing activities and lessons learned

**Activities:**
- Verify all test cases executed
- Check exit criteria met
- Create test summary report
- Document lessons learned
- Archive test artifacts

**Real Example - Test Summary Report:**

| Metric | Value |
|--------|-------|
| Total Test Cases | 250 |
| Executed | 250 (100%) |
| Passed | 238 (95.2%) |
| Failed | 12 (4.8%) |
| Total Defects Found | 45 |
| Critical Defects | 2 (Fixed) |
| High Defects | 8 (Fixed) |
| Medium Defects | 15 (10 Fixed, 5 Deferred) |
| Low Defects | 20 (8 Fixed, 12 Deferred) |

**Deliverables:**
- Test Summary Report
- Test Metrics
- Lessons Learned Document

---

# 4. TYPES OF TESTING

## 4.1 Testing Categories Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                      TYPES OF TESTING                               │
│                                                                     │
│  ┌─────────────────────────────┐  ┌─────────────────────────────┐  │
│  │      MANUAL TESTING         │  │    AUTOMATION TESTING       │  │
│  │                             │  │                             │  │
│  │  Executed by humans         │  │  Executed by tools/scripts  │  │
│  │  Good for exploratory       │  │  Good for regression        │  │
│  │  Flexible, intuitive        │  │  Fast, repeatable           │  │
│  └─────────────────────────────┘  └─────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────┐  ┌─────────────────────────────┐  │
│  │    FUNCTIONAL TESTING       │  │  NON-FUNCTIONAL TESTING     │  │
│  │                             │  │                             │  │
│  │  WHAT the system does       │  │  HOW the system performs    │  │
│  │  - Login works correctly    │  │  - Performance              │  │
│  │  - Cart adds items          │  │  - Security                 │  │
│  │  - Payment processes        │  │  - Usability                │  │
│  └─────────────────────────────┘  └─────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
```

## 4.2 Functional Testing Types

### 4.2.1 Smoke Testing

**Definition:** Quick, basic testing to verify the most critical functions work.

**Analogy:** Before cooking a full meal, you check if the stove turns on.

**When to perform:** After receiving a new build

**Real Example - E-commerce Smoke Test:**

| # | Test | Status |
|---|------|--------|
| 1 | Application launches without errors | ✅ |
| 2 | Login page loads | ✅ |
| 3 | User can login with valid credentials | ✅ |
| 4 | Homepage displays products | ✅ |
| 5 | Search functionality works | ✅ |
| 6 | Cart page accessible | ✅ |
| 7 | Checkout page loads | ✅ |

**Time:** 30 minutes - 1 hour

### 4.2.2 Sanity Testing

**Definition:** Focused testing on specific functionality after minor changes.

**Analogy:** After fixing a car's headlight, you check if the headlight works (not the entire car).

**When to perform:** After receiving a bug fix or minor change

**Real Example:**
- Bug Fixed: "Add to Cart button not working on Safari"
- Sanity Test: Test "Add to Cart" on Safari browser specifically

**Smoke vs Sanity:**

| Smoke Testing | Sanity Testing |
|---------------|----------------|
| Broad, covers major features | Narrow, focused on specific areas |
| Done on new builds | Done after bug fixes |
| Tests if build is stable | Tests if changes work correctly |
| Like checking all rooms in house | Like checking only repaired room |

### 4.2.3 Regression Testing

**Definition:** Re-testing existing functionality after code changes to ensure nothing is broken.

**Analogy:** After adding a new room to your house, you check if doors, windows, and plumbing in other rooms still work.

**When to perform:** After any code change, bug fix, or new feature

**Real Example - Adding "Wishlist" Feature:**

| Area | Regression Tests Needed |
|------|------------------------|
| Login | Login still works |
| Products | Product display not affected |
| Cart | Add to cart still works |
| Checkout | Payment flow unaffected |
| User Profile | Profile page loads correctly |

**Regression Test Suite Example:**

```
Regression Suite - E-commerce App
├── Login Module (10 test cases)
│   ├── TC_001: Valid Login
│   ├── TC_002: Invalid Password
│   └── ...
├── Product Module (15 test cases)
│   ├── TC_011: Search Products
│   ├── TC_012: Filter by Category
│   └── ...
├── Cart Module (12 test cases)
│   ├── TC_026: Add Single Item
│   ├── TC_027: Remove Item
│   └── ...
└── Checkout Module (8 test cases)
    ├── TC_038: Apply Coupon
    ├── TC_039: Select Payment Method
    └── ...
```

### 4.2.4 Integration Testing

**Definition:** Testing the interaction between different modules/components.

**Analogy:** Testing if the engine, transmission, and wheels work together in a car.

**Real Example - Food Delivery App Integration:**

```
┌─────────────────────────────────────────────────────────────────┐
│               INTEGRATION TESTING SCENARIOS                     │
│                                                                 │
│   Module A          Module B          Integration Test          │
│  ┌──────────┐      ┌──────────┐      ┌─────────────────────┐   │
│  │   User   │ ───▶ │Restaurant│ ───▶ │ User searches and    │   │
│  │   Login  │      │  Search  │      │ sees restaurants     │   │
│  └──────────┘      └──────────┘      └─────────────────────┘   │
│                                                                 │
│  ┌──────────┐      ┌──────────┐      ┌─────────────────────┐   │
│  │   Cart   │ ───▶ │ Payment  │ ───▶ │ Cart total passed    │   │
│  │  Module  │      │ Gateway  │      │ correctly to payment │   │
│  └──────────┘      └──────────┘      └─────────────────────┘   │
│                                                                 │
│  ┌──────────┐      ┌──────────┐      ┌─────────────────────┐   │
│  │  Order   │ ───▶ │   Push   │ ───▶ │ Order confirmation   │   │
│  │ Confirm  │      │  Notify  │      │ triggers notification│   │
│  └──────────┘      └──────────┘      └─────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

**Integration Testing Approaches:**

| Approach | Description | Example |
|----------|-------------|---------|
| **Big Bang** | Integrate all modules at once, test together | Test entire payment flow at once |
| **Top-Down** | Test from main module to sub-modules | Login → Dashboard → Products |
| **Bottom-Up** | Test from sub-modules to main module | Database → API → UI |
| **Sandwich** | Combination of top-down and bottom-up | Critical paths first |

### 4.2.5 System Testing

**Definition:** End-to-end testing of the complete, integrated system.

**Analogy:** Test driving a fully assembled car on the road.

**Real Example - Complete E-commerce Flow:**

```
┌─────────────────────────────────────────────────────────────────┐
│                  SYSTEM TEST SCENARIO                           │
│                                                                 │
│  Step 1: User opens website                                     │
│     ↓                                                           │
│  Step 2: User registers with email                              │
│     ↓                                                           │
│  Step 3: User receives verification email                       │
│     ↓                                                           │
│  Step 4: User verifies email and logs in                        │
│     ↓                                                           │
│  Step 5: User searches for "iPhone 15"                          │
│     ↓                                                           │
│  Step 6: User adds product to cart                              │
│     ↓                                                           │
│  Step 7: User enters shipping address                           │
│     ↓                                                           │
│  Step 8: User applies coupon code "SAVE10"                      │
│     ↓                                                           │
│  Step 9: User pays via Credit Card                              │
│     ↓                                                           │
│  Step 10: User receives order confirmation email                │
│     ↓                                                           │
│  Step 11: Order appears in "My Orders" section                  │
└─────────────────────────────────────────────────────────────────┘
```

### 4.2.6 User Acceptance Testing (UAT)

**Definition:** Testing by end-users/clients to verify the system meets business requirements.

**Analogy:** Customer test-driving a car before purchasing.

**Who performs:** Business users, Product Owners, Clients

**Types of UAT:**

| Type | Description |
|------|-------------|
| **Alpha Testing** | Internal users test in development environment |
| **Beta Testing** | Real users test in production-like environment |

**Real Example - UAT Scenarios for Banking App:**

| UAT Scenario | Performed By | Expected Outcome |
|--------------|--------------|------------------|
| Transfer money to another bank | Bank Manager | Money transferred, notification received |
| Check account statement | Account Holder | Correct balance and transactions shown |
| Apply for loan | Loan Officer | Loan application submitted successfully |
| Set up recurring payment | Customer | Payment scheduled, confirmation displayed |

### 4.2.7 Exploratory Testing

**Definition:** Simultaneous learning, test design, and test execution without pre-defined test cases.

**Analogy:** Exploring a new city without a map - you discover things as you go.

**When to perform:**
- New feature with unclear requirements
- Time constraints for writing test cases
- Finding edge cases missed by scripted testing

**Real Example - Exploring a Search Feature:**

```
Session: Exploratory Testing - Search Functionality
Duration: 60 minutes
Tester: John Doe
Date: 2024-01-15

Charter: Explore the search feature to find usability 
         issues and edge cases

Observations:
┌─────────────────────────────────────────────────────────────┐
│ 1. Search with special characters (!@#$%) - App crashes    │
│    → Bug Logged: BUG-201                                    │
│                                                             │
│ 2. Search with 500+ characters - Field accepts but no      │
│    results, no error message                                │
│    → Bug Logged: BUG-202                                    │
│                                                             │
│ 3. Search while offline - No friendly error message        │
│    → Bug Logged: BUG-203                                    │
│                                                             │
│ 4. Rapid clicking search button - Duplicate requests sent  │
│    → Bug Logged: BUG-204                                    │
│                                                             │
│ 5. Copy-paste emoji in search - Works correctly ✓          │
└─────────────────────────────────────────────────────────────┘
```

## 4.3 Non-Functional Testing (Basic Introduction)

| Type | What It Tests | Example |
|------|---------------|---------|
| **Performance Testing** | Speed, response time | Page loads in < 3 seconds |
| **Load Testing** | Behavior under expected load | 1000 concurrent users |
| **Stress Testing** | Behavior beyond capacity | 10000 users (system limit is 5000) |
| **Security Testing** | Vulnerabilities, data protection | SQL injection, XSS attacks |
| **Usability Testing** | User-friendliness | Easy to navigate for new users |
| **Compatibility Testing** | Works across environments | Chrome, Firefox, Safari, Mobile |
| **Accessibility Testing** | Usable by people with disabilities | Screen reader compatibility |

## 4.4 Interview Use-Cases for Testing Types

**Q1: When would you choose Smoke Testing over Sanity Testing?**
> A: Smoke testing when receiving a completely new build to verify basic functionality. Sanity testing when verifying a specific bug fix or minor change.

**Q2: Your team added a payment gateway. What testing would you perform?**
> A: 
> 1. Integration Testing - Verify cart → payment gateway integration
> 2. Functional Testing - Test all payment scenarios
> 3. Regression Testing - Ensure existing checkout flow works
> 4. Security Testing - Verify payment data encryption

**Q3: How would you test a login feature?**
> A:
> - Positive: Valid credentials
> - Negative: Invalid email, wrong password, empty fields
> - Boundary: Password with exactly min/max characters
> - Security: SQL injection, brute force protection
> - Usability: Error messages are helpful

---

# 5. TEST DESIGN TECHNIQUES

## 5.1 Why Test Design Techniques?

**Problem:** We cannot test all possible inputs (infinite combinations)

**Solution:** Test design techniques help select EFFECTIVE test cases with MINIMUM effort

```
┌─────────────────────────────────────────────────────────────────┐
│         WITHOUT TECHNIQUES        │     WITH TECHNIQUES         │
├───────────────────────────────────┼─────────────────────────────┤
│  Test every possible input        │  Test representative values │
│  1000+ test cases                 │  50 test cases              │
│  Weeks of testing                 │  Days of testing            │
│  80% coverage                     │  95% coverage               │
└───────────────────────────────────┴─────────────────────────────┘
```

## 5.2 Boundary Value Analysis (BVA)

**Definition:** Testing at the boundaries/edges of input ranges where bugs are most likely.

**Why boundaries?** 80% of bugs occur at boundaries (off-by-one errors)

**Rule:** Test at: Minimum-1, Minimum, Minimum+1, Maximum-1, Maximum, Maximum+1

**Real Example - Age Input Field (Valid: 18-60):**

```
         Invalid      │         Valid          │      Invalid
    ◄─────────────────┼────────────────────────┼─────────────────►
                      │                        │
    17               18                       60               61
    ▲                ▲                        ▲                ▲
 Boundary         Boundary                Boundary         Boundary
 (Invalid)        (Valid)                 (Valid)          (Invalid)
```

| Test Case | Input Value | Expected Result |
|-----------|-------------|-----------------|
| TC_BVA_01 | 17 | Error: Age must be 18 or above |
| TC_BVA_02 | 18 | Accepted |
| TC_BVA_03 | 19 | Accepted |
| TC_BVA_04 | 59 | Accepted |
| TC_BVA_05 | 60 | Accepted |
| TC_BVA_06 | 61 | Error: Age must be 60 or below |

**Real Example - Password Field (Valid: 8-20 characters):**

| Test Case | Input | Length | Expected |
|-----------|-------|--------|----------|
| TC_01 | "Pass123" | 7 | Error: Minimum 8 characters |
| TC_02 | "Pass1234" | 8 | Valid |
| TC_03 | "Pass12345" | 9 | Valid |
| TC_04 | "Pass12345678901234" | 19 | Valid |
| TC_05 | "Pass123456789012345" | 20 | Valid |
| TC_06 | "Pass1234567890123456" | 21 | Error: Maximum 20 characters |

## 5.3 Equivalence Partitioning (EP)

**Definition:** Divide inputs into groups (partitions) where all values in a group are treated the same. Test ONE value from each group.

**Why?** If one value in a partition works, others will too. Reduces redundant testing.

**Real Example - Discount by Age:**

| Age Range | Discount | Partition |
|-----------|----------|-----------|
| 0-12 | 50% (Child) | Partition 1 |
| 13-59 | 0% (Adult) | Partition 2 |
| 60+ | 30% (Senior) | Partition 3 |
| Negative | Invalid | Invalid Partition |

```
┌─────────────────────────────────────────────────────────────────┐
│                    EQUIVALENCE PARTITIONS                       │
│                                                                 │
│   Invalid    │   Partition 1   │  Partition 2  │  Partition 3  │
│   Partition  │    (Child)      │    (Adult)    │   (Senior)    │
│              │                 │               │               │
│  ◄─────────► │ ◄─────────────► │ ◄───────────► │ ◄───────────► │
│    < 0       │     0 - 12      │    13 - 59    │     60+       │
│              │                 │               │               │
│    Test:     │    Test: 6      │   Test: 35    │   Test: 70    │
│    -5        │                 │               │               │
└─────────────────────────────────────────────────────────────────┘
```

| Test Case | Input Age | Expected Discount |
|-----------|-----------|-------------------|
| TC_EP_01 | -5 | Error: Invalid age |
| TC_EP_02 | 6 | 50% discount |
| TC_EP_03 | 35 | 0% discount |
| TC_EP_04 | 70 | 30% discount |

**Real Example - Email Validation:**

| Partition | Example | Expected |
|-----------|---------|----------|
| Valid email | user@example.com | Accepted |
| Missing @ | userexample.com | Error |
| Missing domain | user@ | Error |
| Invalid characters | user@exam!ple.com | Error |
| Empty | (blank) | Error |

## 5.4 Decision Table Testing

**Definition:** Test combinations of conditions and their corresponding actions.

**When to use:** Multiple inputs that create different outputs

**Real Example - Loan Eligibility:**

**Conditions:**
- Income > $50,000
- Credit Score > 700
- Existing Customer

**Actions:**
- Approve Loan
- Offer Low Interest
- Reject

| Rule | Income > $50K | Credit > 700 | Existing Customer | Action |
|------|---------------|--------------|-------------------|--------|
| R1 | Yes | Yes | Yes | Approve + Low Interest |
| R2 | Yes | Yes | No | Approve |
| R3 | Yes | No | Yes | Approve (Higher Rate) |
| R4 | Yes | No | No | Reject |
| R5 | No | Yes | Yes | Approve |
| R6 | No | Yes | No | Reject |
| R7 | No | No | Yes | Reject |
| R8 | No | No | No | Reject |

**Test Cases from Decision Table:**

| TC | Income | Credit Score | Customer Since | Expected Result |
|----|--------|--------------|----------------|-----------------|
| TC_DT_01 | $75,000 | 750 | 5 years | Approved, 8% interest |
| TC_DT_02 | $75,000 | 750 | New | Approved, 10% interest |
| TC_DT_03 | $75,000 | 650 | 3 years | Approved, 12% interest |
| TC_DT_04 | $75,000 | 650 | New | Rejected |
| TC_DT_05 | $40,000 | 750 | 2 years | Approved, 11% interest |
| TC_DT_06 | $40,000 | 750 | New | Rejected |
| TC_DT_07 | $40,000 | 650 | 4 years | Rejected |
| TC_DT_08 | $40,000 | 650 | New | Rejected |

## 5.5 State Transition Testing

**Definition:** Testing the system's behavior as it moves between different states.

**When to use:** Systems with clear states (e.g., order status, user account status)

**Real Example - E-commerce Order Status:**

```
┌─────────────────────────────────────────────────────────────────┐
│                    ORDER STATE DIAGRAM                          │
│                                                                 │
│  ┌─────────┐  Place Order   ┌──────────┐  Payment    ┌────────┐│
│  │  Cart   │ ──────────────▶│  Pending │ ──────────▶ │  Paid  ││
│  │         │                │  Payment │             │        ││
│  └─────────┘                └──────────┘             └────────┘│
│       │                          │                       │     │
│       │ Clear Cart               │ Cancel Order          │     │
│       ▼                          ▼                       ▼     │
│  ┌─────────┐                ┌──────────┐         ┌──────────┐  │
│  │  Empty  │                │ Cancelled│         │ Shipped  │  │
│  │  Cart   │                │          │         │          │  │
│  └─────────┘                └──────────┘         └──────────┘  │
│                                                       │        │
│                                                       ▼        │
│                                                 ┌──────────┐   │
│                                                 │Delivered │   │
│                                                 └──────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

**State Transition Table:**

| Current State | Event | Next State | Action |
|---------------|-------|------------|--------|
| Cart | Add Item | Cart (with items) | Update cart |
| Cart | Place Order | Pending Payment | Create order |
| Cart | Clear Cart | Empty Cart | Remove all items |
| Pending Payment | Complete Payment | Paid | Process payment |
| Pending Payment | Cancel | Cancelled | Refund if needed |
| Paid | Ship Order | Shipped | Generate tracking |
| Shipped | Deliver | Delivered | Confirm delivery |

**Test Cases:**

| TC | Start State | Action | Expected State |
|----|-------------|--------|----------------|
| TC_ST_01 | Empty Cart | Add Item | Cart (1 item) |
| TC_ST_02 | Cart | Place Order | Pending Payment |
| TC_ST_03 | Pending Payment | Pay | Paid |
| TC_ST_04 | Pending Payment | Cancel | Cancelled |
| TC_ST_05 | Paid | Ship | Shipped |
| TC_ST_06 | Shipped | Deliver | Delivered |
| TC_ST_07 | Delivered | Ship | Error (Invalid transition) |

## 5.6 Use Case Testing

**Definition:** Testing based on user interactions described in use cases.

**Real Example - Use Case: User Login**

```
┌─────────────────────────────────────────────────────────────────┐
│                    USE CASE: USER LOGIN                         │
├─────────────────────────────────────────────────────────────────┤
│ Actor: Registered User                                          │
│ Precondition: User has valid credentials                        │
├─────────────────────────────────────────────────────────────────┤
│ Main Flow:                                                      │
│ 1. User opens login page                                        │
│ 2. User enters email                                            │
│ 3. User enters password                                         │
│ 4. User clicks "Login" button                                   │
│ 5. System validates credentials                                 │
│ 6. System redirects to dashboard                                │
├─────────────────────────────────────────────────────────────────┤
│ Alternative Flow:                                               │
│ 5a. If credentials invalid:                                     │
│     5a1. System shows error message                             │
│     5a2. User corrects credentials                              │
│     5a3. Return to step 4                                       │
├─────────────────────────────────────────────────────────────────┤
│ Exception Flow:                                                 │
│ 5b. If account locked:                                          │
│     5b1. System shows "Account locked" message                  │
│     5b2. User clicks "Forgot Password"                          │
├─────────────────────────────────────────────────────────────────┤
│ Postcondition: User is logged in and on dashboard               │
└─────────────────────────────────────────────────────────────────┘
```

**Test Cases from Use Case:**

| TC | Scenario | Steps | Expected |
|----|----------|-------|----------|
| TC_UC_01 | Happy Path | Valid email, valid password | Login successful |
| TC_UC_02 | Invalid email | Wrong email, valid password | "Invalid credentials" |
| TC_UC_03 | Invalid password | Valid email, wrong password | "Invalid credentials" |
| TC_UC_04 | Account locked | 3 failed attempts | "Account locked" message |
| TC_UC_05 | Forgot Password | Click "Forgot Password" | Password reset email sent |

---

# 6. WRITING TEST CASES

## 6.1 What is a Test Case?

**Definition:** A test case is a set of conditions and steps to verify that a software feature works correctly.

**Components of a Good Test Case:**

| Component | Description | Example |
|-----------|-------------|---------|
| Test Case ID | Unique identifier | TC_LOGIN_001 |
| Title | Brief description | Verify successful login |
| Preconditions | Requirements before test | User account exists |
| Test Steps | Step-by-step actions | 1. Go to login page 2. Enter email... |
| Test Data | Input values | email: test@example.com |
| Expected Result | What should happen | User redirected to dashboard |
| Actual Result | What actually happened | (Filled during execution) |
| Status | Pass/Fail | Pass |
| Priority | P1/P2/P3 | P1 (High) |

## 6.2 Test Case Template

```
┌─────────────────────────────────────────────────────────────────┐
│                      TEST CASE TEMPLATE                         │
├─────────────────────────────────────────────────────────────────┤
│ Test Case ID:     TC_[MODULE]_[NUMBER]                          │
│ Module:           [Module Name]                                 │
│ Title:            [Brief description of what is being tested]  │
│ Priority:         P1 (Critical) / P2 (High) / P3 (Medium)       │
│ Preconditions:    [What must be true before test]               │
├─────────────────────────────────────────────────────────────────┤
│ Test Steps:                                                     │
│ 1. [Action 1]                                                   │
│ 2. [Action 2]                                                   │
│ 3. [Action 3]                                                   │
├─────────────────────────────────────────────────────────────────┤
│ Test Data:        [Input values to use]                         │
│ Expected Result:  [What should happen]                          │
│ Actual Result:    [What actually happened]                      │
│ Status:           Pass / Fail / Blocked / Not Executed          │
│ Executed By:      [Tester Name]                                 │
│ Execution Date:   [Date]                                        │
│ Defect ID:        [If failed, link to defect]                   │
│ Comments:         [Additional notes]                            │
└─────────────────────────────────────────────────────────────────┘
```

## 6.3 Positive and Negative Testing

### Positive Testing
Testing with VALID inputs to verify the system works correctly.

### Negative Testing
Testing with INVALID inputs to verify the system handles errors gracefully.

**Real Example - Email Field:**

| Test Type | Input | Expected Result |
|-----------|-------|-----------------|
| Positive | user@example.com | Accepted |
| Positive | john.doe@company.co.uk | Accepted |
| Negative | userexample.com | Error: Invalid email format |
| Negative | user@.com | Error: Invalid email format |
| Negative | @example.com | Error: Invalid email format |
| Negative | (empty) | Error: Email is required |
| Negative | user@example | Error: Invalid email format |

## 6.4 Sample Test Cases for Common Features

### 6.4.1 Login Test Cases

| TC ID | Title | Steps | Test Data | Expected Result |
|-------|-------|-------|-----------|-----------------|
| TC_LOGIN_001 | Valid login | 1. Go to login page 2. Enter email 3. Enter password 4. Click Login | email: valid@test.com, pwd: Valid@123 | Redirect to dashboard |
| TC_LOGIN_002 | Invalid email format | 1. Go to login page 2. Enter invalid email 3. Click Login | email: invalidformat | Error: "Invalid email format" |
| TC_LOGIN_003 | Wrong password | 1. Go to login page 2. Enter valid email 3. Enter wrong password 4. Click Login | email: valid@test.com, pwd: WrongPwd | Error: "Invalid credentials" |
| TC_LOGIN_004 | Empty email | 1. Go to login page 2. Leave email empty 3. Enter password 4. Click Login | email: (empty), pwd: Valid@123 | Error: "Email is required" |
| TC_LOGIN_005 | Empty password | 1. Go to login page 2. Enter email 3. Leave password empty 4. Click Login | email: valid@test.com, pwd: (empty) | Error: "Password is required" |
| TC_LOGIN_006 | Account locked | 1. Enter wrong password 3 times | email: valid@test.com | Error: "Account locked. Contact support" |
| TC_LOGIN_007 | Remember me | 1. Login with Remember Me checked 2. Close browser 3. Reopen app | - | User should stay logged in |
| TC_LOGIN_008 | SQL injection | 1. Enter malicious input | email: ' OR '1'='1 | Error: "Invalid email format" |
| TC_LOGIN_009 | Case sensitivity | 1. Enter email in uppercase | email: VALID@TEST.COM | Should work (email case-insensitive) |
| TC_LOGIN_010 | Password visibility | 1. Enter password 2. Click eye icon | - | Password should toggle visible/hidden |

### 6.4.2 Signup/Registration Test Cases

| TC ID | Title | Steps | Test Data | Expected Result |
|-------|-------|-------|-----------|-----------------|
| TC_REG_001 | Successful registration | 1. Go to signup page 2. Enter all valid details 3. Click Register | All valid data | Success message, verification email sent |
| TC_REG_002 | Duplicate email | 1. Try registering with existing email | email: existing@test.com | Error: "Email already registered" |
| TC_REG_003 | Password mismatch | 1. Enter different passwords | pwd: Pass@123, confirm: Pass@456 | Error: "Passwords don't match" |
| TC_REG_004 | Weak password | 1. Enter password without special char | pwd: password123 | Error: "Password needs special character" |
| TC_REG_005 | Invalid phone | 1. Enter letters in phone field | phone: abcdefghij | Error: "Invalid phone number" |
| TC_REG_006 | Future birthdate | 1. Select future date | dob: 2025-12-31 | Error: "Invalid date of birth" |
| TC_REG_007 | Terms not accepted | 1. Fill form without checking terms 2. Click Register | - | Error: "Accept terms to continue" |
| TC_REG_008 | Email verification | 1. Register 2. Check email | - | Verification email received within 5 minutes |

### 6.4.3 Search Test Cases

| TC ID | Title | Steps | Test Data | Expected Result |
|-------|-------|-------|-----------|-----------------|
| TC_SEARCH_001 | Valid search | 1. Enter search term 2. Click Search | query: "laptop" | Relevant results displayed |
| TC_SEARCH_002 | No results | 1. Search non-existent term | query: "xyzabc123" | "No results found" message |
| TC_SEARCH_003 | Empty search | 1. Click search without entering text | query: (empty) | Error or show all results |
| TC_SEARCH_004 | Special characters | 1. Enter special characters | query: "@#$%^&" | Handle gracefully, no crash |
| TC_SEARCH_005 | Case insensitive | 1. Search in uppercase | query: "LAPTOP" | Same results as "laptop" |
| TC_SEARCH_006 | Partial match | 1. Enter partial word | query: "lap" | Results containing "lap" shown |
| TC_SEARCH_007 | Search suggestions | 1. Type slowly | query: "pho" | Suggestions: phone, photo, etc. |
| TC_SEARCH_008 | Search with filters | 1. Search "laptop" 2. Filter by price | query: "laptop", price: $500-$1000 | Filtered results |

### 6.4.4 Dropdown Test Cases

| TC ID | Title | Steps | Test Data | Expected Result |
|-------|-------|-------|-----------|-----------------|
| TC_DROP_001 | Select single option | 1. Click dropdown 2. Select option | selection: "Option 1" | Option selected, dropdown closes |
| TC_DROP_002 | Default value | 1. Load page with dropdown | - | Default value displayed |
| TC_DROP_003 | All options visible | 1. Click dropdown | - | All options visible in list |
| TC_DROP_004 | Search in dropdown | 1. Type in searchable dropdown | search: "Ind" | Filtered options: India, Indonesia |
| TC_DROP_005 | Keyboard navigation | 1. Tab to dropdown 2. Use arrow keys | - | Options navigable via keyboard |
| TC_DROP_006 | Clear selection | 1. Select option 2. Click clear | - | Selection cleared |
| TC_DROP_007 | Multi-select | 1. Select multiple options | - | All selected options shown |
| TC_DROP_008 | Disabled options | 1. Try selecting disabled option | - | Cannot select disabled options |

### 6.4.5 Pagination Test Cases

| TC ID | Title | Steps | Test Data | Expected Result |
|-------|-------|-------|-----------|-----------------|
| TC_PAGE_001 | First page | 1. Load list page | - | First 10 items displayed |
| TC_PAGE_002 | Next page | 1. Click "Next" | - | Next 10 items displayed |
| TC_PAGE_003 | Previous page | 1. Go to page 3 2. Click "Previous" | - | Page 2 items displayed |
| TC_PAGE_004 | Specific page | 1. Click page number 5 | - | Page 5 items displayed |
| TC_PAGE_005 | Last page | 1. Click "Last" | - | Last page items displayed |
| TC_PAGE_006 | Items per page | 1. Change from 10 to 50 | - | 50 items per page displayed |
| TC_PAGE_007 | Page info | 1. Navigate pages | - | "Showing 11-20 of 100" displayed |
| TC_PAGE_008 | Empty last page | 1. If only 15 items, go to page 2 | items_per_page: 10 | Page 2 shows 5 items |

### 6.4.6 Form Validation Test Cases

| TC ID | Title | Steps | Test Data | Expected Result |
|-------|-------|-------|-----------|-----------------|
| TC_FORM_001 | All fields valid | 1. Fill all fields correctly 2. Submit | All valid | Form submitted successfully |
| TC_FORM_002 | Required field empty | 1. Leave required field empty 2. Submit | name: (empty) | Error: "Name is required" |
| TC_FORM_003 | Max length exceeded | 1. Enter 101 chars in 100-char field | name: 101 characters | Error: "Maximum 100 characters allowed" |
| TC_FORM_004 | Invalid format | 1. Enter invalid email | email: invalid | Error: "Invalid email format" |
| TC_FORM_005 | Tab order | 1. Press Tab through fields | - | Fields focused in correct order |
| TC_FORM_006 | Error clearing | 1. Fix error 2. Re-submit | - | Error message clears |
| TC_FORM_007 | Inline validation | 1. Type invalid data 2. Leave field | - | Error shows immediately |
| TC_FORM_008 | Form reset | 1. Fill form 2. Click Reset | - | All fields cleared |

---

# 7. REAL-TIME FUNCTIONAL TESTING SCENARIOS

## 7.1 Searching in a Paginated Table

**Scenario:** E-commerce admin panel with 10,000 products displayed in a paginated table.

### Test Scenarios:

```
┌─────────────────────────────────────────────────────────────────┐
│     SEARCH IN PAGINATED TABLE - TEST SCENARIOS                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Search: [iPhone______] [🔍Search]  [Clear]              │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Product ID  │ Name          │ Price  │ Stock  │ Status  │   │
│  │─────────────┼───────────────┼────────┼────────┼─────────│   │
│  │ P001        │ iPhone 15     │ $999   │ 50     │ Active  │   │
│  │ P002        │ iPhone 14     │ $799   │ 30     │ Active  │   │
│  │ P003        │ iPhone 15 Pro │ $1199  │ 25     │ Active  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  Showing 1-3 of 45 results    [<] [1] [2] [3] [4] [5] [>]      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

| TC ID | Scenario | Steps | Expected |
|-------|----------|-------|----------|
| TC_PT_001 | Search returns results on page 1 | 1. Search "iPhone" | Matching products displayed |
| TC_PT_002 | Search result on page 5 | 1. Search term that exists on page 5 | Results from all pages, not just page 1 |
| TC_PT_003 | Search with pagination | 1. Search "Apple" (100 results) 2. Navigate to page 3 | Page 3 of search results |
| TC_PT_004 | Clear search | 1. Search 2. Click Clear | Original paginated list restored |
| TC_PT_005 | Search persistence | 1. Search 2. Sort column | Search results maintained after sort |
| TC_PT_006 | No results | 1. Search "XYZNONEXISTENT" | "No results found" message |
| TC_PT_007 | Search + filter | 1. Search "phone" 2. Filter by "Active" | Results matching both criteria |

## 7.2 Dynamic Angular/React Table Validation

**Scenario:** Real-time data table that updates without page refresh.

### Test Scenarios:

| TC ID | Scenario | Steps | Expected |
|-------|----------|-------|----------|
| TC_DT_001 | Data binding | 1. Add new record via API 2. Check table | New record appears automatically |
| TC_DT_002 | Delete reflection | 1. Delete record 2. Check table | Record disappears without refresh |
| TC_DT_003 | Edit inline | 1. Double-click cell 2. Edit 3. Press Enter | Value updates in table |
| TC_DT_004 | Concurrent updates | 1. Open table in 2 browsers 2. Update in browser 1 | Browser 2 should reflect change |
| TC_DT_005 | Loading state | 1. Slow network 2. Load table | Loading spinner shown |
| TC_DT_006 | Error handling | 1. Disconnect network 2. Refresh | Error message displayed gracefully |
| TC_DT_007 | Virtual scrolling | 1. Scroll through 10,000 rows | Smooth scrolling, no lag |

## 7.3 Sorting, Filtering, and Column Validation

### Sorting Tests:

| TC ID | Scenario | Steps | Expected |
|-------|----------|-------|----------|
| TC_SORT_001 | Ascending sort | 1. Click "Name" header | A → Z order |
| TC_SORT_002 | Descending sort | 1. Click "Name" header again | Z → A order |
| TC_SORT_003 | Numeric sort | 1. Sort "Price" column | 100 < 1000 (not 100 < 20) |
| TC_SORT_004 | Date sort | 1. Sort "Created Date" | Oldest to newest |
| TC_SORT_005 | Multi-column sort | 1. Sort by Status, then Name | Grouped by status, then alphabetical |
| TC_SORT_006 | Sort indicator | 1. Sort column | Arrow icon shows sort direction |

### Filtering Tests:

| TC ID | Scenario | Steps | Expected |
|-------|----------|-------|----------|
| TC_FILT_001 | Single filter | 1. Filter Status = "Active" | Only active records shown |
| TC_FILT_002 | Multiple filters | 1. Filter Status = "Active" 2. Filter Price > $100 | Combined filter results |
| TC_FILT_003 | Date range filter | 1. Select From: Jan 1, To: Jan 31 | Records within date range |
| TC_FILT_004 | Clear single filter | 1. Apply 3 filters 2. Clear 1 | Other 2 filters remain |
| TC_FILT_005 | Clear all filters | 1. Apply filters 2. Click "Clear All" | All filters removed |
| TC_FILT_006 | Filter + pagination | 1. Filter 2. Navigate pages | Correct filtered records on each page |

### Column Validation:

| TC ID | Scenario | Steps | Expected |
|-------|----------|-------|----------|
| TC_COL_001 | Column resizing | 1. Drag column border | Column width changes |
| TC_COL_002 | Column reordering | 1. Drag column header | Column position changes |
| TC_COL_003 | Column hiding | 1. Hide "Description" column | Column hidden, data still accessible |
| TC_COL_004 | Column showing | 1. Show hidden column | Column reappears |
| TC_COL_005 | Fixed columns | 1. Scroll horizontally | ID column stays fixed |
| TC_COL_006 | Column persistence | 1. Customize columns 2. Refresh page | Settings remembered |

## 7.4 File Upload Testing

### Test Scenarios:

```
┌─────────────────────────────────────────────────────────────────┐
│                    FILE UPLOAD SCENARIOS                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                                                          │  │
│  │          📁 Drag and drop files here                     │  │
│  │              or click to browse                          │  │
│  │                                                          │  │
│  │          Allowed: JPG, PNG, PDF (Max: 5MB)               │  │
│  │                                                          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  Uploaded Files:                                                │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ 📄 document.pdf    2.3 MB    ✅ Uploaded    [🗑️Delete]   │  │
│  │ 🖼️ image.jpg       1.2 MB    ⏳ Uploading... [Cancel]    │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

| TC ID | Scenario | Steps | Expected |
|-------|----------|-------|----------|
| TC_UP_001 | Valid file upload | 1. Upload valid JPG | File uploaded successfully |
| TC_UP_002 | Invalid file type | 1. Upload .exe file | Error: "File type not allowed" |
| TC_UP_003 | File too large | 1. Upload 10MB file (limit 5MB) | Error: "File exceeds size limit" |
| TC_UP_004 | Multiple files | 1. Select 3 files 2. Upload | All files uploaded |
| TC_UP_005 | Drag and drop | 1. Drag file to upload zone | File uploads via drag-drop |
| TC_UP_006 | Cancel upload | 1. Start upload 2. Click Cancel | Upload cancelled |
| TC_UP_007 | Progress indicator | 1. Upload large file | Progress bar shows percentage |
| TC_UP_008 | Resume failed upload | 1. Upload 2. Disconnect network 3. Reconnect | Upload resumes |
| TC_UP_009 | Delete uploaded file | 1. Upload 2. Click Delete | File removed |
| TC_UP_010 | Empty file | 1. Upload 0 KB file | Error: "Empty file not allowed" |

## 7.5 API Validation Basics (CRUD Operations)

### API Testing for User Management:

| TC ID | Operation | Endpoint | Request | Expected |
|-------|-----------|----------|---------|----------|
| TC_API_001 | Create User | POST /api/users | {"name": "John", "email": "john@test.com"} | 201 Created, user ID returned |
| TC_API_002 | Get User | GET /api/users/1 | - | 200 OK, user details returned |
| TC_API_003 | Update User | PUT /api/users/1 | {"name": "John Doe"} | 200 OK, updated data returned |
| TC_API_004 | Delete User | DELETE /api/users/1 | - | 204 No Content |
| TC_API_005 | Get Non-existent | GET /api/users/9999 | - | 404 Not Found |
| TC_API_006 | Invalid Data | POST /api/users | {"name": ""} | 400 Bad Request |
| TC_API_007 | Duplicate Email | POST /api/users | {"email": "existing@test.com"} | 409 Conflict |
| TC_API_008 | Unauthorized | GET /api/users (no token) | - | 401 Unauthorized |

### API Response Validation:

```
┌─────────────────────────────────────────────────────────────────┐
│                    API VALIDATION CHECKLIST                     │
├─────────────────────────────────────────────────────────────────┤
│ ✓ Status code is correct (200, 201, 400, 404, 500)             │
│ ✓ Response time is within limits (< 2 seconds)                 │
│ ✓ Response body structure matches expected schema              │
│ ✓ Required fields are present                                  │
│ ✓ Data types are correct (string, number, boolean)             │
│ ✓ Error messages are descriptive and user-friendly             │
│ ✓ Pagination works correctly                                   │
│ ✓ Rate limiting is enforced                                    │
│ ✓ Authentication tokens are validated                          │
│ ✓ CORS headers are present (for browser clients)               │
└─────────────────────────────────────────────────────────────────┘
```

## 7.6 Database Validation Basics

### Verifying Data in Database:

| TC ID | Scenario | SQL Query | Validation |
|-------|----------|-----------|------------|
| TC_DB_001 | User created | SELECT * FROM users WHERE email = 'new@test.com' | Record exists |
| TC_DB_002 | Correct data | SELECT name, email FROM users WHERE id = 1 | Name = 'John', Email = 'john@test.com' |
| TC_DB_003 | Timestamp | SELECT created_at FROM orders WHERE id = 100 | Timestamp is current |
| TC_DB_004 | Foreign key | SELECT * FROM orders WHERE user_id = 999 | Links to valid user |
| TC_DB_005 | Cascade delete | DELETE FROM users WHERE id = 1; SELECT * FROM orders WHERE user_id = 1 | Related orders deleted |
| TC_DB_006 | Unique constraint | INSERT duplicate email | Error: Duplicate entry |

### Common SQL for Testers:

```sql
-- Select all records
SELECT * FROM users;

-- Select with condition
SELECT * FROM orders WHERE status = 'pending';

-- Count records
SELECT COUNT(*) FROM products WHERE price > 100;

-- Join tables
SELECT users.name, orders.total 
FROM users 
JOIN orders ON users.id = orders.user_id;

-- Check data after insert
SELECT * FROM users WHERE email = 'test@example.com';

-- Verify update
SELECT updated_at FROM products WHERE id = 5;

-- Check delete
SELECT * FROM users WHERE id = 10; -- Should return 0 rows
```

## 7.7 Handling Dynamic IDs

**Challenge:** IDs change with each test run, breaking test scripts.

### Solutions:

| Approach | Description | Example |
|----------|-------------|---------|
| Partial Match | Match part of ID | id contains "product-" |
| XPath Relative | Find by relationship | //div[text()='iPhone']//following-sibling::button |
| CSS Attribute | Match by attribute | [data-testid="submit-btn"] |
| Dynamic Locator | Build locator dynamically | `#product-${productId}` |
| API First | Create data via API, get ID | POST /products → returns ID → use in UI test |

### Real Example:

```
Problem: Button ID changes from "btn-123" to "btn-456"

Solution 1: Use data-testid
  <button data-testid="submit-order">Submit</button>
  Locator: [data-testid="submit-order"]

Solution 2: Use visible text
  <button>Submit Order</button>
  Locator: //button[text()='Submit Order']

Solution 3: Use parent-child relationship
  <div class="order-form">
    <button>Submit</button>
  </div>
  Locator: .order-form button
```

## 7.8 Date Picker Testing

### Test Scenarios:

```
┌─────────────────────────────────────────────────────────────────┐
│                    DATE PICKER TESTING                          │
│                                                                 │
│     ◄ January 2024 ►                                            │
│  ┌─────────────────────────────────────┐                        │
│  │ Sun  Mon  Tue  Wed  Thu  Fri  Sat  │                        │
│  │      1    2    3    4    5    6    │                        │
│  │  7   8    9   10   11   12   13    │                        │
│  │ 14  15  [16]  17   18   19   20    │ ← Selected Date        │
│  │ 21  22   23   24   25   26   27    │                        │
│  │ 28  29   30   31                   │                        │
│  └─────────────────────────────────────┘                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

| TC ID | Scenario | Steps | Expected |
|-------|----------|-------|----------|
| TC_DATE_001 | Select today | 1. Open date picker 2. Click today | Today's date selected |
| TC_DATE_002 | Navigate months | 1. Click next month arrow | Next month displayed |
| TC_DATE_003 | Previous year | 1. Navigate to previous year | Year changes correctly |
| TC_DATE_004 | Future date disabled | 1. Try selecting future date (for DOB) | Future dates not selectable |
| TC_DATE_005 | Past date disabled | 1. Try selecting past date (for booking) | Past dates not selectable |
| TC_DATE_006 | Date format | 1. Select date | Format matches requirement (DD/MM/YYYY) |
| TC_DATE_007 | Manual entry | 1. Type date in input field | Valid date accepted |
| TC_DATE_008 | Invalid manual entry | 1. Type "32/13/2024" | Error: "Invalid date" |
| TC_DATE_009 | Clear date | 1. Select date 2. Clear | Date field empty |
| TC_DATE_010 | Date range | 1. Select start date 2. Select end date | Range validated (start < end) |

## 7.9 Accessibility Testing Basics

### Key Checks:

| Check | What to Test | How to Test |
|-------|--------------|-------------|
| Keyboard Navigation | All features accessible via keyboard | Tab through page |
| Screen Reader | Content read correctly | Use NVDA/JAWS/VoiceOver |
| Color Contrast | Text readable against background | Use contrast checker tool |
| Alt Text | Images have descriptions | Inspect img alt attributes |
| Form Labels | Inputs have labels | Check for label elements |
| Focus Indicator | Focused element visible | Tab and look for highlight |
| Error Identification | Errors announced to screen readers | Submit form with errors |
| Skip Links | Can skip navigation | Tab first element |

### Accessibility Test Cases:

| TC ID | Scenario | Steps | Expected |
|-------|----------|-------|----------|
| TC_A11Y_001 | Tab order | 1. Press Tab repeatedly | Focus moves in logical order |
| TC_A11Y_002 | Skip to content | 1. Press Tab once | "Skip to main content" link appears |
| TC_A11Y_003 | Image alt text | 1. Inspect images | All images have meaningful alt text |
| TC_A11Y_004 | Button labels | 1. Check buttons with icons only | Buttons have aria-label |
| TC_A11Y_005 | Form errors | 1. Submit invalid form | Error associated with input field |
| TC_A11Y_006 | Zoom 200% | 1. Zoom browser to 200% | Content still readable and usable |
| TC_A11Y_007 | Contrast ratio | 1. Check text/background | Ratio ≥ 4.5:1 for normal text |

---

# 8. DEFECT REPORTING

## 8.1 What is a Defect?

**Definition:** A defect (bug) is a deviation from the expected behavior of the software.

**Defect vs Bug vs Error vs Failure:**

| Term | Definition | Example |
|------|------------|---------|
| **Error** | Mistake made by developer | Typo in code: `if (x = 5)` instead of `if (x == 5)` |
| **Bug/Defect** | Flaw in the software | Button doesn't work when clicked |
| **Failure** | Bug manifests to user | User cannot login |
| **Fault** | Root cause of defect | Missing null check in code |

## 8.2 Defect Life Cycle

```
┌─────────────────────────────────────────────────────────────────────┐
│                       DEFECT LIFE CYCLE                             │
│                                                                     │
│  ┌─────┐    ┌──────┐    ┌──────────┐    ┌───────┐    ┌─────────┐  │
│  │ NEW │───▶│ OPEN │───▶│ ASSIGNED │───▶│ FIXED │───▶│ RETEST  │  │
│  └─────┘    └──────┘    └──────────┘    └───────┘    └─────────┘  │
│                │              │              │             │       │
│                │              │              │             │       │
│                ▼              ▼              ▼             ▼       │
│           ┌─────────┐   ┌─────────┐   ┌──────────┐  ┌──────────┐  │
│           │REJECTED │   │DEFERRED │   │ REOPEN   │  │  CLOSED  │  │
│           │(Invalid)│   │(Later)  │   │(Not Fixed)│ │(Verified)│  │
│           └─────────┘   └─────────┘   └──────────┘  └──────────┘  │
│                                            │                       │
│                                            │                       │
│                                            └───▶ Back to ASSIGNED  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Status Definitions:

| Status | Description | Who Changes |
|--------|-------------|-------------|
| New | Defect just reported | Tester |
| Open | Defect accepted as valid | Test Lead |
| Assigned | Assigned to developer | Dev Lead |
| Fixed | Developer fixed the issue | Developer |
| Retest | Ready for verification | Developer |
| Verified | Tester confirmed fix works | Tester |
| Closed | Defect resolved | Test Lead |
| Rejected | Not a valid defect | Developer/Test Lead |
| Deferred | Fix postponed to later release | Product Manager |
| Reopen | Fix didn't work | Tester |

## 8.3 Sample JIRA Defect Ticket

```
┌─────────────────────────────────────────────────────────────────────┐
│                         JIRA DEFECT TICKET                          │
├─────────────────────────────────────────────────────────────────────┤
│ BUG-2024: Unable to apply coupon code in cart                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ Type: Bug              Status: Open           Priority: High        │
│ Severity: Major        Reporter: John Doe     Assignee: Jane Smith  │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ DESCRIPTION:                                                        │
│ When applying a valid coupon code in the shopping cart, the         │
│ discount is not applied and no error message is displayed.          │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ ENVIRONMENT:                                                        │
│ Browser: Chrome 120.0                                               │
│ OS: Windows 11                                                      │
│ URL: https://staging.example.com/cart                               │
│ Test Account: testuser@example.com                                  │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ STEPS TO REPRODUCE:                                                 │
│ 1. Login with testuser@example.com / Test@123                       │
│ 2. Add any product to cart                                          │
│ 3. Go to cart page                                                  │
│ 4. Enter coupon code: SAVE20                                        │
│ 5. Click "Apply" button                                             │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ EXPECTED RESULT:                                                    │
│ 20% discount should be applied to cart total.                       │
│ Cart total should show: Original Price: $100, Discount: -$20,       │
│ Final Total: $80                                                    │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ ACTUAL RESULT:                                                      │
│ No discount applied. Cart total remains $100.                       │
│ No error message displayed.                                         │
│ Console shows: "TypeError: Cannot read property 'discount' of null" │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ ATTACHMENTS:                                                        │
│ 📎 screenshot_coupon_issue.png                                      │
│ 📎 console_error_log.txt                                            │
│ 📎 network_request_capture.har                                      │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ ADDITIONAL INFO:                                                    │
│ - Issue reproduces 100% of the time                                 │
│ - Same issue on Firefox and Safari                                  │
│ - Coupon "FREESHIP" also doesn't work                               │
│ - Issue started after build #456 deployment                         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## 8.4 Good vs Bad Bug Reports

### Bad Bug Report ❌

```
Title: Coupon not working
Description: Coupon doesn't work. Please fix.
```

**Problems:**
- No environment details
- No steps to reproduce
- No expected/actual result
- No evidence

### Good Bug Report ✅

```
Title: [Cart] Coupon code "SAVE20" not applying 20% discount - TypeError in console

Description: 
Valid coupon code SAVE20 fails to apply discount. Cart total unchanged.

Environment: Chrome 120 | Windows 11 | staging.example.com

Steps:
1. Login as testuser@example.com
2. Add "iPhone 15" to cart
3. Enter coupon "SAVE20"
4. Click Apply

Expected: 20% discount applied, total shows $799 (was $999)
Actual: No discount, total stays $999, console shows TypeError

Evidence: 
- Screenshot attached
- Console error logged
- Reproducible 100%
```

## 8.5 Severity vs Priority

```
┌─────────────────────────────────────────────────────────────────────┐
│                     SEVERITY vs PRIORITY                            │
├──────────────────────────────────┬──────────────────────────────────┤
│            SEVERITY              │           PRIORITY               │
├──────────────────────────────────┼──────────────────────────────────┤
│ How bad is the impact?           │ How soon to fix?                 │
├──────────────────────────────────┼──────────────────────────────────┤
│ Technical perspective            │ Business perspective             │
├──────────────────────────────────┼──────────────────────────────────┤
│ Set by: Tester                   │ Set by: Product Manager          │
├──────────────────────────────────┼──────────────────────────────────┤
│ Remains constant                 │ Can change based on business     │
└──────────────────────────────────┴──────────────────────────────────┘
```

### Severity Levels:

| Level | Description | Example |
|-------|-------------|---------|
| **Critical** | System crash, data loss, security breach | Payment data exposed |
| **Major** | Major feature broken, no workaround | Cannot checkout |
| **Minor** | Feature issue with workaround | Can't sort by price, but filter works |
| **Trivial** | Cosmetic issues | Typo, alignment off by 2px |

### Priority Levels:

| Level | Description | Timeline |
|-------|-------------|----------|
| **P1 - Critical** | Fix immediately | Same day |
| **P2 - High** | Fix before release | Within 2-3 days |
| **P3 - Medium** | Fix if time permits | Current sprint |
| **P4 - Low** | Nice to have | Future release |

### Severity-Priority Matrix:

| | High Priority | Medium Priority | Low Priority |
|---|---------------|-----------------|--------------|
| **High Severity** | Payment failure on launch day | Payment failure (launch in 1 month) | Payment failure in old browser (2% users) |
| **Medium Severity** | CEO's name spelled wrong on homepage | Search results slow | Profile pic upload fails |
| **Low Severity** | Company logo wrong color (rebrand launch) | Footer link color | Typo in rarely visited page |

---

# 9. AGILE & SCRUM TESTING

## 9.1 What is Agile?

**Definition:** Agile is an iterative approach to software development that delivers value in small, incremental releases.

### Agile vs Waterfall:

```
┌─────────────────────────────────────────────────────────────────────┐
│                    WATERFALL vs AGILE                               │
├──────────────────────────────────┬──────────────────────────────────┤
│           WATERFALL              │             AGILE                │
├──────────────────────────────────┼──────────────────────────────────┤
│ Linear, sequential               │ Iterative, incremental           │
├──────────────────────────────────┼──────────────────────────────────┤
│ Testing at the end               │ Testing throughout               │
├──────────────────────────────────┼──────────────────────────────────┤
│ Changes are costly               │ Changes are welcomed             │
├──────────────────────────────────┼──────────────────────────────────┤
│ Deliver complete product         │ Deliver working increments       │
├──────────────────────────────────┼──────────────────────────────────┤
│ Documentation heavy              │ Working software > docs          │
├──────────────────────────────────┼──────────────────────────────────┤
│ Customer sees at end             │ Customer feedback every sprint   │
└──────────────────────────────────┴──────────────────────────────────┘
```

## 9.2 Scrum Framework

### Scrum Roles:

| Role | Responsibility |
|------|----------------|
| **Product Owner** | Defines what to build, prioritizes backlog |
| **Scrum Master** | Facilitates process, removes blockers |
| **Development Team** | Builds the product (includes developers AND testers) |

### Scrum Ceremonies:

| Ceremony | Purpose | Duration | Frequency |
|----------|---------|----------|-----------|
| Sprint Planning | Plan what to build in sprint | 2-4 hours | Start of sprint |
| Daily Stand-up | Sync team, identify blockers | 15 minutes | Daily |
| Sprint Review | Demo completed work | 1-2 hours | End of sprint |
| Sprint Retrospective | Improve team process | 1 hour | End of sprint |
| Backlog Refinement | Clarify and estimate stories | 1-2 hours | Mid-sprint |

### Sprint Workflow:

```
┌─────────────────────────────────────────────────────────────────────┐
│                      2-WEEK SPRINT                                  │
│                                                                     │
│  Week 1                                                             │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ Day 1: Sprint Planning                                       │   │
│  │   → Select user stories from backlog                         │   │
│  │   → Break stories into tasks                                 │   │
│  │   → QA identifies test scenarios                             │   │
│  │                                                              │   │
│  │ Days 2-5: Development & Testing                              │   │
│  │   → Developers code features                                 │   │
│  │   → QA writes test cases                                     │   │
│  │   → QA tests completed features                              │   │
│  │   → Daily stand-ups                                          │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  Week 2                                                             │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ Days 6-8: Development & Testing continues                    │   │
│  │   → Bug fixes                                                │   │
│  │   → Regression testing                                       │   │
│  │                                                              │   │
│  │ Day 9: Code freeze, final testing                            │   │
│  │   → Smoke test                                               │   │
│  │   → Sign-off                                                 │   │
│  │                                                              │   │
│  │ Day 10: Sprint Review + Retrospective                        │   │
│  │   → Demo to stakeholders                                     │   │
│  │   → Discuss what went well/poorly                            │   │
│  └─────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

## 9.3 User Stories

**Definition:** A user story describes a feature from the end user's perspective.

**Format:**
```
As a [type of user],
I want [some goal],
So that [some reason/benefit].
```

### Example User Stories:

**Story 1: User Login**
```
As a registered user,
I want to login with my email and password,
So that I can access my account dashboard.
```

**Story 2: Add to Cart**
```
As a shopper,
I want to add products to my cart,
So that I can purchase multiple items at once.
```

**Story 3: Order Tracking**
```
As a customer,
I want to track my order status,
So that I know when my delivery will arrive.
```

## 9.4 Acceptance Criteria

**Definition:** Specific, testable conditions that must be met for a story to be "Done."

### Example: User Login Story

```
┌─────────────────────────────────────────────────────────────────────┐
│                    ACCEPTANCE CRITERIA                              │
│              User Story: User Login                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ Given: User is on the login page                                    │
│ When: User enters valid email and password and clicks Login         │
│ Then: User is redirected to dashboard                               │
│                                                                     │
│ Given: User is on the login page                                    │
│ When: User enters invalid password                                  │
│ Then: Error message "Invalid credentials" is displayed              │
│                                                                     │
│ Given: User is on the login page                                    │
│ When: User enters wrong password 3 times                            │
│ Then: Account is locked for 30 minutes                              │
│                                                                     │
│ Given: User is on the login page                                    │
│ When: User clicks "Forgot Password"                                 │
│ Then: User is redirected to password reset page                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Acceptance Criteria Format (Given-When-Then):

| Component | Description | Example |
|-----------|-------------|---------|
| **Given** | Initial context/state | User is logged in |
| **When** | Action performed | User clicks "Add to Cart" |
| **Then** | Expected outcome | Product appears in cart |

## 9.5 Definition of Ready (DoR)

**Definition:** Criteria a user story must meet BEFORE it can be worked on.

### DoR Checklist:

| # | Criteria | ✓ |
|---|----------|---|
| 1 | User story is clear and understandable | □ |
| 2 | Acceptance criteria are defined | □ |
| 3 | Story is estimated (story points) | □ |
| 4 | Dependencies are identified | □ |
| 5 | UI mockups are available (if needed) | □ |
| 6 | Technical approach discussed | □ |
| 7 | Story fits in one sprint | □ |

## 9.6 Definition of Done (DoD)

**Definition:** Criteria that must be met for a user story to be considered COMPLETE.

### DoD Checklist:

| # | Criteria | ✓ |
|---|----------|---|
| 1 | Code is written and committed | □ |
| 2 | Unit tests written and passing | □ |
| 3 | Code reviewed by peer | □ |
| 4 | Feature deployed to QA environment | □ |
| 5 | All test cases executed | □ |
| 6 | All critical/high bugs fixed | □ |
| 7 | Regression tests passed | □ |
| 8 | Documentation updated | □ |
| 9 | Product Owner approved | □ |

## 9.7 What Testers Do in Agile

### Sprint Activities:

| Phase | Tester Activities |
|-------|-------------------|
| **Sprint Planning** | Estimate testing effort, identify test scenarios |
| **During Sprint** | Write test cases, execute tests, log bugs |
| **Daily Stand-up** | Report progress, raise blockers |
| **Sprint Review** | Participate in demo, provide feedback |
| **Retrospective** | Suggest process improvements |

### Tester's Daily Activities in Sprint:

```
┌─────────────────────────────────────────────────────────────────────┐
│              AGILE TESTER'S DAILY ACTIVITIES                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  09:00  Daily Stand-up                                              │
│         → What I did yesterday                                      │
│         → What I'll do today                                        │
│         → Any blockers                                              │
│                                                                     │
│  09:15  Check new builds/deployments                                │
│         → Run smoke tests                                           │
│                                                                     │
│  10:00  Test newly completed features                               │
│         → Execute test cases                                        │
│         → Log any bugs found                                        │
│                                                                     │
│  12:00  Write test cases for upcoming features                      │
│         → Review user stories                                       │
│         → Create test scenarios                                     │
│                                                                     │
│  02:00  Bug triage with developers                                  │
│         → Discuss reported bugs                                     │
│         → Retest fixed bugs                                         │
│                                                                     │
│  03:30  Regression testing                                          │
│         → Run regression suite                                      │
│                                                                     │
│  05:00  Update test documentation                                   │
│         → Update test cases                                         │
│         → Update bug status                                         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

# 10. MOCK INTERVIEW QUESTIONS

## 10.1 Beginner Level Questions

### Q1: What is Software Testing?
> **Answer:** Software Testing is the process of evaluating a software application to find defects and verify that it meets the specified requirements. It ensures the software is reliable, secure, and performs as expected.

### Q2: What is the difference between Verification and Validation?
> **Answer:**
> - **Verification:** "Are we building the product right?" - Checks if product meets specifications (reviews, inspections)
> - **Validation:** "Are we building the right product?" - Checks if product meets user needs (actual testing)

### Q3: What is a Test Case?
> **Answer:** A test case is a set of conditions, inputs, and steps designed to verify whether a specific feature or functionality works correctly. It includes test case ID, steps, test data, expected result, and actual result.

### Q4: What is the difference between Smoke Testing and Sanity Testing?
> **Answer:**
> - **Smoke Testing:** Broad testing to verify if the build is stable enough for detailed testing. Tests all major features briefly.
> - **Sanity Testing:** Narrow testing focused on specific functionality after a bug fix or minor change.

### Q5: What is Regression Testing?
> **Answer:** Regression testing is re-executing test cases to ensure that previously working features still work correctly after code changes, bug fixes, or new feature additions.

### Q6: What is the difference between Severity and Priority?
> **Answer:**
> - **Severity:** How badly the defect impacts the system (set by tester)
> - **Priority:** How soon the defect should be fixed (set by product manager)
> - Example: Spelling mistake on homepage - Low Severity, High Priority (visible to all users)

### Q7: What is a Defect/Bug Life Cycle?
> **Answer:** The defect life cycle shows the different states a bug goes through:
> New → Open → Assigned → Fixed → Retest → Closed
> (Or it can be Rejected, Deferred, or Reopened)

### Q8: What is SDLC?
> **Answer:** SDLC (Software Development Life Cycle) is the process of planning, creating, testing, and deploying software. Phases: Requirement → Design → Development → Testing → Deployment → Maintenance

### Q9: What is STLC?
> **Answer:** STLC (Software Testing Life Cycle) is the sequence of testing activities. Phases: Requirement Analysis → Test Planning → Test Design → Environment Setup → Test Execution → Defect Reporting → Test Closure

### Q10: What is the difference between Functional and Non-Functional Testing?
> **Answer:**
> - **Functional:** Tests WHAT the system does (login works, cart adds items)
> - **Non-Functional:** Tests HOW the system performs (speed, security, usability)

## 10.2 Intermediate Level Questions

### Q11: Explain Boundary Value Analysis with an example.
> **Answer:** BVA tests at the edges of input ranges where bugs are most likely.
> 
> Example: If age field accepts 18-60:
> - Test: 17 (below min - invalid)
> - Test: 18 (at min - valid)
> - Test: 60 (at max - valid)
> - Test: 61 (above max - invalid)

### Q12: Explain Equivalence Partitioning with an example.
> **Answer:** EP divides inputs into groups where all values behave the same. Test one value from each group.
> 
> Example: Age-based discount
> - Partition 1: 0-12 (50% child discount) → Test: age 5
> - Partition 2: 13-59 (no discount) → Test: age 30
> - Partition 3: 60+ (30% senior discount) → Test: age 70

### Q13: What is a Test Plan? What does it contain?
> **Answer:** A Test Plan is a document describing the testing scope, approach, resources, and schedule.
> 
> Contents:
> - Test objectives and scope
> - Test strategy and approach
> - Entry and exit criteria
> - Test environment
> - Resource allocation
> - Test schedule
> - Risk and mitigation

### Q14: What is RTM (Requirement Traceability Matrix)?
> **Answer:** RTM is a document that maps requirements to test cases, ensuring all requirements are covered by tests.
> 
> | Req ID | Requirement | Test Case IDs |
> |--------|-------------|---------------|
> | REQ-001 | User Login | TC_001, TC_002, TC_003 |
> | REQ-002 | Add to Cart | TC_010, TC_011 |

### Q15: How would you test a Login functionality?
> **Answer:**
> - **Positive Tests:**
>   - Valid email and password
>   - Login with "Remember Me"
> - **Negative Tests:**
>   - Invalid email format
>   - Wrong password
>   - Empty fields
>   - SQL injection attempt
> - **Boundary Tests:**
>   - Password at min/max length
> - **Other Tests:**
>   - Account lockout after 3 failures
>   - Forgot password flow
>   - Session timeout

### Q16: What is Integration Testing? What are its types?
> **Answer:** Integration testing verifies that different modules work correctly when combined.
> 
> Types:
> - **Big Bang:** All modules integrated and tested together
> - **Top-Down:** Test from main module to sub-modules
> - **Bottom-Up:** Test from sub-modules to main module
> - **Sandwich:** Combination of top-down and bottom-up

### Q17: What is UAT? Who performs it?
> **Answer:** UAT (User Acceptance Testing) is final testing performed by end-users or clients to verify the system meets business requirements. It's the last step before production release.
> 
> Performed by: Business users, Product Owners, actual customers (beta testing)

### Q18: What is the difference between Re-testing and Regression Testing?
> **Answer:**
> - **Re-testing:** Testing the specific fixed bug to verify it's actually fixed
> - **Regression Testing:** Testing other areas to ensure the fix didn't break anything else

### Q19: What is Exploratory Testing?
> **Answer:** Exploratory testing is simultaneous learning, test design, and test execution without pre-written test cases. The tester explores the application, learns about it, and tests based on intuition and experience.

### Q20: What is a Sprint in Agile?
> **Answer:** A Sprint is a fixed time period (usually 2 weeks) in which a specific set of work must be completed. At the end of each sprint, a potentially shippable product increment is delivered.

## 10.3 Advanced Level Questions

### Q21: How would you test a shopping cart with multiple products, coupons, and taxes?
> **Answer:**
> ```
> Test Scenarios:
> 1. Add single product - verify price
> 2. Add multiple products - verify total
> 3. Remove product - verify updated total
> 4. Apply valid coupon - verify discount applied
> 5. Apply invalid coupon - verify error message
> 6. Apply expired coupon - verify error message
> 7. Verify tax calculation based on location
> 8. Verify final total = (Items - Discount) + Tax
> 9. Change quantity - verify recalculation
> 10. Edge: Apply coupon with minimum purchase requirement
> ```

### Q22: You find a critical bug 1 day before release. What do you do?
> **Answer:**
> 1. Immediately report to Test Lead and Product Manager
> 2. Document the bug thoroughly with steps, screenshots, impact
> 3. Assess the severity and business impact
> 4. Propose options:
>    - Fix and retest (if quick fix possible)
>    - Release with known issue and hotfix later
>    - Delay release
> 5. Decision made by Product Manager based on business impact
> 6. If releasing with bug, document in release notes

### Q23: How would you test a search functionality with filters and pagination?
> **Answer:**
> ```
> Search Tests:
> - Valid search term returns results
> - Invalid term shows "No results"
> - Special characters handled
> - Case insensitivity
> 
> Filter Tests:
> - Single filter works
> - Multiple filters combined
> - Clear filter resets results
> - Filter + search combined
> 
> Pagination Tests:
> - Correct items per page
> - Navigate next/previous
> - Jump to specific page
> - Filters persist across pages
> 
> Edge Cases:
> - Search with 1000+ results
> - Empty page at end
> - Filter with 0 results
> ```

### Q24: Explain a scenario where a bug has High Severity but Low Priority.
> **Answer:** 
> **Scenario:** The payment gateway crashes when using Bitcoin payment option.
> 
> - **High Severity:** Complete payment failure is a critical issue
> - **Low Priority:** Only 0.1% of users use Bitcoin, other payment methods work fine
> 
> The business decides to defer this to the next release since it affects very few users.

### Q25: Explain a scenario where a bug has Low Severity but High Priority.
> **Answer:**
> **Scenario:** Company name is spelled wrong on the homepage footer.
> 
> - **Low Severity:** It's just a typo, doesn't affect functionality
> - **High Priority:** It's visible to all users and affects brand reputation
> 
> This should be fixed immediately despite being a minor issue.

### Q26: How do you test when requirements are incomplete?
> **Answer:**
> 1. Document all assumptions
> 2. Raise questions to BA/Product Owner
> 3. Reference similar features in the application
> 4. Look at competitor products for standard behavior
> 5. Use exploratory testing
> 6. Test based on common user expectations
> 7. Create test cases with assumptions clearly stated

### Q27: How would you test an e-commerce checkout process?
> **Answer:**
> ```
> End-to-End Flow:
> 1. Add products to cart
> 2. Proceed to checkout
> 3. Enter/select shipping address
> 4. Choose shipping method
> 5. Apply coupon code
> 6. Select payment method
> 7. Enter payment details
> 8. Review order summary
> 9. Place order
> 10. Verify confirmation
> 11. Check email receipt
> 12. Verify in order history
> 
> Edge Cases:
> - Cart expires during checkout
> - Payment failure mid-transaction
> - Out of stock during checkout
> - Address validation
> - International shipping
> ```

### Q28: What is the difference between Error, Bug, Defect, and Failure?
> **Answer:**
> - **Error:** Mistake made by the developer while coding
> - **Bug/Defect:** The manifestation of the error in the software
> - **Failure:** When the defect is encountered by the end-user
> 
> Flow: Human makes Error → Creates Defect in code → Causes Failure when executed

### Q29: How do you prioritize test cases when time is limited?
> **Answer:**
> 1. **Critical Path:** Test main business flows first
> 2. **Risk-Based:** Focus on high-risk areas
> 3. **Frequently Used:** Test features used most by users
> 4. **Recently Changed:** Test new/modified code
> 5. **Past Defects:** Areas with history of bugs
> 
> Create test priority matrix:
> - P1: Must execute (critical flows)
> - P2: Should execute (important features)
> - P3: Could execute (if time permits)

### Q30: Describe your approach to testing a new feature from scratch.
> **Answer:**
> 1. **Understand Requirements:** Review user story, acceptance criteria
> 2. **Ask Questions:** Clarify ambiguities with BA/PO
> 3. **Identify Test Scenarios:** Positive, negative, edge cases
> 4. **Write Test Cases:** Detailed steps, data, expected results
> 5. **Review:** Get test cases reviewed by peers
> 6. **Prepare Test Data:** Create necessary test data
> 7. **Environment Check:** Verify test environment is ready
> 8. **Execute Tests:** Run test cases, document results
> 9. **Report Bugs:** Log any defects found
> 10. **Retest:** Verify bug fixes
> 11. **Regression:** Ensure no impact on existing features
> 12. **Sign-off:** Provide test completion report

---

# 11. SUMMARY & QUICK REVISION NOTES

## 11.1 Key Concepts Cheat Sheet

### Testing Fundamentals

| Term | Quick Definition |
|------|-----------------|
| SDLC | Software Development Life Cycle - Process to build software |
| STLC | Software Testing Life Cycle - Process to test software |
| Test Case | Step-by-step instructions to test a feature |
| Test Scenario | High-level testing objective |
| Defect | Something that doesn't work as expected |
| Severity | How bad the defect is |
| Priority | How soon to fix the defect |

### Testing Types Quick Reference

| Type | When to Use | Example |
|------|-------------|---------|
| Smoke | New build received | Check if app opens |
| Sanity | After bug fix | Test the fixed bug |
| Regression | After any change | Test existing features |
| Integration | Modules combined | Test login + dashboard |
| System | Complete system | End-to-end checkout |
| UAT | Before release | User tests real scenarios |

### Test Design Techniques

| Technique | Use For | Example |
|-----------|---------|---------|
| Boundary Value | Numeric ranges | Age: 17, 18, 60, 61 |
| Equivalence Partitioning | Group similar inputs | Age groups: child, adult, senior |
| Decision Table | Multiple conditions | Loan eligibility matrix |
| State Transition | State changes | Order: pending → paid → shipped |

### Defect Life Cycle States

```
New → Open → Assigned → Fixed → Retest → Closed
                ↓           ↓        ↓
            Deferred     Rejected   Reopen
```

### Agile Key Terms

| Term | Definition |
|------|------------|
| Sprint | 2-week work cycle |
| User Story | Feature from user's perspective |
| Acceptance Criteria | Conditions for story to be "done" |
| Stand-up | Daily 15-min sync meeting |
| Product Backlog | List of all features to build |
| Sprint Backlog | Features selected for current sprint |

## 11.2 Quick Formulas

### Test Coverage
```
Test Coverage = (Requirements with test cases / Total requirements) × 100%
```

### Defect Density
```
Defect Density = Number of defects / Size of software (KLOC or function points)
```

### Defect Leakage
```
Defect Leakage = (Defects found in production / Total defects) × 100%
```

### Test Case Pass Rate
```
Pass Rate = (Passed test cases / Total executed) × 100%
```

## 11.3 Common Interview Mnemonics

### STLC Phases (Remember: "Really Test Cases Every Day Responsibly, Close")
- **R**equirement Analysis
- **T**est Planning
- **C**ase Design
- **E**nvironment Setup
- **D**efect Reporting (after Execution)
- **R**etest
- **C**losure

### Bug Report Essentials (Remember: "STEPS")
- **S**ummary (clear title)
- **T**echnical details (environment, browser)
- **E**vidence (screenshots, logs)
- **P**rocedure (steps to reproduce)
- **S**tate (expected vs actual)

### Test Case Components (Remember: "ID STEPS DONE")
- **ID**
- **S**teps
- **T**est data
- **E**xpected result
- **P**reconditions
- **S**tatus

## 11.4 Final Checklist for Freshers

Before your first testing project, ensure you can:

- [ ] Explain SDLC and STLC phases
- [ ] Write a proper test case
- [ ] Identify positive and negative test scenarios
- [ ] Apply BVA and EP techniques
- [ ] Write a clear bug report
- [ ] Understand severity vs priority
- [ ] Explain Agile/Scrum process
- [ ] Perform basic SQL queries
- [ ] Use a bug tracking tool (JIRA)
- [ ] Communicate effectively with developers

---

# APPENDIX

## A. Sample Test Case Template (Excel Format)

| Field | Description |
|-------|-------------|
| Test Case ID | TC_[Module]_[Number] |
| Module | Feature area being tested |
| Title | Brief description |
| Priority | P1/P2/P3 |
| Preconditions | Setup requirements |
| Test Steps | Numbered steps |
| Test Data | Input values |
| Expected Result | What should happen |
| Actual Result | What actually happened |
| Status | Pass/Fail/Blocked |
| Executed By | Tester name |
| Execution Date | Date |
| Defect ID | Link to bug if failed |
| Comments | Additional notes |

## B. Sample Bug Report Template (JIRA Format)

```
Summary: [Module] Brief description of the issue

Description:
When [action], the system [actual behavior] instead of [expected behavior].

Environment:
- Browser: 
- OS: 
- URL:
- Build:

Steps to Reproduce:
1. 
2. 
3. 

Expected Result:
[What should happen]

Actual Result:
[What actually happens]

Attachments:
- Screenshot
- Video recording
- Console logs

Severity: Critical/Major/Minor/Trivial
Priority: P1/P2/P3/P4
```

## C. Useful SQL Queries for Testers

```sql
-- Check if record exists
SELECT * FROM users WHERE email = 'test@example.com';

-- Count records
SELECT COUNT(*) FROM orders WHERE status = 'pending';

-- Check recent records
SELECT * FROM transactions ORDER BY created_at DESC LIMIT 10;

-- Join tables
SELECT u.name, o.total 
FROM users u 
JOIN orders o ON u.id = o.user_id
WHERE o.status = 'completed';

-- Check duplicates
SELECT email, COUNT(*) 
FROM users 
GROUP BY email 
HAVING COUNT(*) > 1;
```

## D. Browser DevTools Shortcuts

| Action | Chrome Shortcut |
|--------|-----------------|
| Open DevTools | F12 or Ctrl+Shift+I |
| Console | Ctrl+Shift+J |
| Network tab | Ctrl+Shift+E |
| Clear console | Ctrl+L |
| Responsive mode | Ctrl+Shift+M |

---

**Document Version:** 1.0
**Last Updated:** December 2024
**For:** Freshers Training Program

---

*"Quality is never an accident; it is always the result of intelligent effort." - John Ruskin*

---

# END OF DOCUMENT
