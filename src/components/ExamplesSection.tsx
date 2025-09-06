import React, { useState } from 'react';
import { PlayCircle, Code, FileText, ArrowRight, Lightbulb, CheckCircle, Copy, Download } from 'lucide-react';

interface ExamplesSectionProps {
  selectedUnit: number;
  units: Array<{ id: number; title: string; hours: number }>;
  onSelectUnit: (unit: number) => void;
}

const ExamplesSection: React.FC<ExamplesSectionProps> = ({ selectedUnit, units, onSelectUnit }) => {
  const [activeExample, setActiveExample] = useState<string>('waterfall-example');

  const getExamples = (unitId: number) => {
    switch (unitId) {
      case 1:
        return [
          {
            id: 'waterfall-example',
            title: 'Waterfall Model Implementation',
            type: 'Process Model',
            difficulty: 'Basic',
            description: 'Step-by-step implementation of Waterfall model for a Library Management System',
            code: `
// Library Management System - Waterfall Model Example

Phase 1: Requirements Analysis
==========================
Functional Requirements:
- User registration and login
- Book search and catalog browsing
- Book borrowing and returning
- Fine calculation for overdue books
- Admin panel for book management

Non-Functional Requirements:
- System should support 1000 concurrent users
- Response time should be under 2 seconds
- 99.9% uptime availability
- Data should be backed up daily

Phase 2: System Design
====================
High-Level Architecture:
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Presentation  │────│  Business Logic │────│   Data Access   │
│     Layer       │    │     Layer       │    │     Layer       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
        │                        │                        │
        │                        │                        │
    Web Client              Application Server         Database

Database Design:
Users Table:
- user_id (Primary Key)
- username
- password
- email
- registration_date

Books Table:
- book_id (Primary Key)
- title
- author
- isbn
- category
- total_copies
- available_copies

Transactions Table:
- transaction_id (Primary Key)
- user_id (Foreign Key)
- book_id (Foreign Key)
- issue_date
- return_date
- fine_amount

Phase 3: Implementation
=====================
// User Authentication Module
public class UserAuthentication {
    public boolean authenticateUser(String username, String password) {
        // Hash password and compare with database
        String hashedPassword = hashPassword(password);
        return database.verifyCredentials(username, hashedPassword);
    }
    
    private String hashPassword(String password) {
        // Implementation of password hashing
        return SHA256.hash(password + SALT);
    }
}

// Book Management Module
public class BookManager {
    public List<Book> searchBooks(String query) {
        return database.searchBooks(query);
    }
    
    public boolean issueBook(int userId, int bookId) {
        if (isBookAvailable(bookId)) {
            database.createTransaction(userId, bookId, new Date());
            database.decrementAvailableBooks(bookId);
            return true;
        }
        return false;
    }
}

Phase 4: Testing
===============
Unit Tests:
- Test user authentication with valid/invalid credentials
- Test book search functionality
- Test book issue/return operations
- Test fine calculation logic

Integration Tests:
- Test user login → book search → book issue flow
- Test database connectivity
- Test API endpoints

System Tests:
- Load testing with 1000 concurrent users
- Performance testing for response times
- Security testing for vulnerabilities

Phase 5: Deployment
==================
Production Environment Setup:
- Web server: Apache Tomcat
- Database: MySQL 8.0
- Operating System: Ubuntu 20.04 LTS
- Load balancer: Nginx

Deployment Steps:
1. Deploy database schema
2. Configure application server
3. Deploy application WAR file
4. Configure SSL certificates
5. Set up monitoring and logging
6. Perform smoke tests

Phase 6: Maintenance
===================
Maintenance Activities:
- Regular security updates
- Database optimization
- Performance monitoring
- Bug fixes and enhancements
- User feedback incorporation
            `,
            explanation: 'This example demonstrates how the Waterfall model is applied to develop a Library Management System, showing each phase in detail with specific deliverables.'
          },
          {
            id: 'cocomo-calculation',
            title: 'COCOMO Cost Estimation',
            type: 'Project Management',
            difficulty: 'Intermediate',
            description: 'Practical example of calculating project effort and time using COCOMO model',
            code: `
COCOMO Cost Estimation Example
=============================

Project: E-commerce Website Development
Project Type: Semi-detached (medium complexity)
Estimated Size: 50 KLOC (Thousand Lines of Code)

COCOMO Constants for Semi-detached:
a = 3.0
b = 1.12
c = 2.5
d = 0.35

Step 1: Calculate Effort
=======================
Effort = a × (KLOC)^b person-months
Effort = 3.0 × (50)^1.12
Effort = 3.0 × 61.92
Effort = 185.76 person-months

Step 2: Calculate Development Time
================================
Time = c × (Effort)^d months
Time = 2.5 × (185.76)^0.35
Time = 2.5 × 7.14
Time = 17.85 months (approximately 18 months)

Step 3: Calculate Team Size
==========================
People = Effort / Time
People = 185.76 / 17.85
People = 10.4 (approximately 10-11 people)

Step 4: Productivity Analysis
============================
Productivity = KLOC / Effort
Productivity = 50 / 185.76
Productivity = 0.269 KLOC per person-month

Step 5: Cost Estimation
======================
Assuming average salary: $8,000 per person-month

Total Cost = Effort × Average Salary
Total Cost = 185.76 × $8,000
Total Cost = $1,486,080

Additional Costs (20% of development cost):
- Hardware and Software: $150,000
- Infrastructure: $100,000
- Training: $50,000
- Contingency: $100,000

Total Project Cost = $1,486,080 + $400,000 = $1,886,080

Phase-wise Effort Distribution:
==============================
Requirements & Analysis: 15% = 27.86 person-months
Design: 20% = 37.15 person-months  
Coding: 30% = 55.73 person-months
Testing: 25% = 46.44 person-months
Integration & Deployment: 10% = 18.58 person-months

Monthly Progress Tracking:
=========================
Month 1-3: Requirements gathering and analysis
Month 4-7: System and detailed design
Month 8-13: Implementation and unit testing
Month 14-17: Integration testing and system testing
Month 18: Deployment and final testing

Risk Assessment:
===============
- Schedule overrun probability: 25%
- Effort overrun probability: 30% 
- Risk mitigation buffer: 15% additional effort

Adjusted Estimates:
==================
Effort with buffer = 185.76 × 1.15 = 213.62 person-months
Time with buffer = 17.85 × 1.10 = 19.64 months
Cost with buffer = $1,886,080 × 1.15 = $2,169,992
            `,
            explanation: 'This example shows how to use COCOMO for realistic project estimation, including effort, time, cost calculations, and risk considerations.'
          },
          {
            id: 'function-point',
            title: 'Function Point Analysis',
            type: 'Size Estimation',
            difficulty: 'Advanced',
            description: 'Complete Function Point calculation for a Student Information System',
            code: `
Function Point Analysis Example
==============================

Project: Student Information System (SIS)

Step 1: Identify System Functions
================================

External Inputs (EI):
- Student Registration Form
- Course Enrollment Form  
- Grade Entry Form
- Faculty Assignment Form
- Semester Setup Form

External Outputs (EO):
- Student Transcript
- Grade Report
- Faculty Schedule
- Course Catalog
- Enrollment Statistics

External Inquiries (EQ):
- Student Search
- Course Search
- Grade Inquiry  
- Schedule Inquiry
- Faculty Directory Search

Internal Logical Files (ILF):
- Student Master File
- Course Master File
- Enrollment File
- Grade File
- Faculty File

External Interface Files (EIF):
- Library System Interface
- Financial System Interface
- Email System Interface

Step 2: Classify Complexity
===========================

External Inputs (EI):
┌─────────────────────────┬────────────┬────────┬────────┐
│ Function                │ Complexity │ Count  │ Weight │
├─────────────────────────┼────────────┼────────┼────────┤
│ Student Registration    │ Average    │   1    │   4    │
│ Course Enrollment       │ Simple     │   1    │   3    │  
│ Grade Entry            │ Complex    │   1    │   6    │
│ Faculty Assignment     │ Average    │   1    │   4    │
│ Semester Setup         │ Simple     │   1    │   3    │
└─────────────────────────┴────────────┴────────┴────────┘
Total EI = 1×4 + 1×3 + 1×6 + 1×4 + 1×3 = 20

External Outputs (EO):
┌─────────────────────────┬────────────┬────────┬────────┐
│ Function                │ Complexity │ Count  │ Weight │
├─────────────────────────┼────────────┼────────┼────────┤
│ Student Transcript      │ Complex    │   1    │   7    │
│ Grade Report           │ Average    │   1    │   5    │
│ Faculty Schedule       │ Average    │   1    │   5    │
│ Course Catalog         │ Simple     │   1    │   4    │
│ Enrollment Statistics  │ Complex    │   1    │   7    │
└─────────────────────────┴────────────┴────────┴────────┘
Total EO = 1×7 + 1×5 + 1×5 + 1×4 + 1×7 = 28

External Inquiries (EQ):
┌─────────────────────────┬────────────┬────────┬────────┐
│ Function                │ Complexity │ Count  │ Weight │
├─────────────────────────┼────────────┼────────┼────────┤
│ Student Search          │ Simple     │   1    │   3    │
│ Course Search          │ Average    │   1    │   4    │
│ Grade Inquiry          │ Average    │   1    │   4    │
│ Schedule Inquiry       │ Simple     │   1    │   3    │
│ Faculty Directory      │ Simple     │   1    │   3    │
└─────────────────────────┴────────────┴────────┴────────┘
Total EQ = 1×3 + 1×4 + 1×4 + 1×3 + 1×3 = 17

Internal Logical Files (ILF):
┌─────────────────────────┬────────────┬────────┬────────┐
│ File                    │ Complexity │ Count  │ Weight │
├─────────────────────────┼────────────┼────────┼────────┤
│ Student Master          │ Complex    │   1    │   15   │
│ Course Master          │ Average    │   1    │   10   │
│ Enrollment File        │ Average    │   1    │   10   │
│ Grade File             │ Average    │   1    │   10   │
│ Faculty File           │ Simple     │   1    │   7    │
└─────────────────────────┴────────────┴────────┴────────┘
Total ILF = 1×15 + 1×10 + 1×10 + 1×10 + 1×7 = 52

External Interface Files (EIF):
┌─────────────────────────┬────────────┬────────┬────────┐
│ Interface               │ Complexity │ Count  │ Weight │
├─────────────────────────┼────────────┼────────┼────────┤
│ Library System          │ Simple     │   1    │   5    │
│ Financial System        │ Average    │   1    │   7    │
│ Email System           │ Simple     │   1    │   5    │
└─────────────────────────┴────────────┴────────┴────────┘
Total EIF = 1×5 + 1×7 + 1×5 = 17

Step 3: Calculate Unadjusted Function Points
==========================================

UFP = Total EI + Total EO + Total EQ + Total ILF + Total EIF
UFP = 20 + 28 + 17 + 52 + 17 = 134

Step 4: Technical Complexity Factor (TCF)
========================================

Technical Complexity Factors (0-5 scale):
1. Data communications: 4
2. Distributed data processing: 3  
3. Performance: 4
4. Heavily used configuration: 3
5. Transaction rate: 4
6. Online data entry: 5
7. End-user efficiency: 4
8. Online update: 5
9. Complex processing: 3
10. Reusability: 2
11. Installation ease: 3
12. Operational ease: 4
13. Multiple sites: 2
14. Facilitate change: 3

Total Degree of Influence (TDI) = 4+3+4+3+4+5+4+5+3+2+3+4+2+3 = 49

TCF = 0.65 + (TDI × 0.01)
TCF = 0.65 + (49 × 0.01) = 0.65 + 0.49 = 1.14

Step 5: Calculate Adjusted Function Points
=========================================

AFP = UFP × TCF
AFP = 134 × 1.14 = 152.76 ≈ 153 Function Points

Step 6: Convert to Lines of Code
===============================

Assuming Java development:
Java: 1 FP = 53 LOC (average)

Estimated LOC = 153 × 53 = 8,109 LOC

Step 7: Effort Estimation
========================

Using industry average: 1 FP = 5-7 person-hours
Effort = 153 × 6 = 918 person-hours
Effort = 918 / 160 = 5.74 person-months

Step 8: Project Schedule
=======================

Using Putnam's model:
Time = 2.5 × (Effort)^0.38
Time = 2.5 × (5.74)^0.38
Time = 2.5 × 1.86 = 4.65 months

Team Size = Effort / Time = 5.74 / 4.65 = 1.23 ≈ 2 developers

Summary:
========
Function Points: 153 FP
Estimated Lines of Code: 8,109 LOC  
Effort: 5.74 person-months
Duration: 4.65 months
Team Size: 2 developers
            `,
            explanation: 'This comprehensive example demonstrates Function Point Analysis methodology with detailed calculations, complexity assessment, and conversion to project estimates.'
          }
        ];
      case 2:
        return [
          {
            id: 'srs-example',
            title: 'Complete SRS Document',
            type: 'Requirements',
            difficulty: 'Advanced',
            description: 'Full Software Requirements Specification for Online Banking System',
            code: `
SOFTWARE REQUIREMENTS SPECIFICATION
===================================

1. INTRODUCTION
===============

1.1 Purpose
-----------
This Software Requirements Specification (SRS) describes the functional and 
non-functional requirements for the Online Banking System (OBS). This document 
is intended for:
- Development team
- Project managers
- Quality assurance team
- System administrators
- Bank stakeholders

1.2 Scope
---------
The Online Banking System will provide customers with secure access to their 
bank accounts via web browsers. The system will enable:
- Account balance inquiry
- Fund transfers between accounts
- Bill payments
- Transaction history viewing
- Account statements generation
- Customer profile management

1.3 Definitions and Abbreviations
--------------------------------
- OBS: Online Banking System
- ATM: Automated Teller Machine
- PIN: Personal Identification Number
- SSL: Secure Sockets Layer
- API: Application Programming Interface

2. OVERALL DESCRIPTION
======================

2.1 Product Perspective
----------------------
The OBS is a web-based system that interfaces with:
- Core banking system
- Payment processing networks
- Credit card systems
- ATM networks
- Third-party bill payment services

2.2 Product Functions
--------------------
Major functions include:
- User authentication and authorization
- Account management
- Transaction processing
- Report generation
- System administration

2.3 User Classes and Characteristics
-----------------------------------
- Bank Customers: Primary users performing banking transactions
- Bank Employees: Administrative users managing customer accounts
- System Administrators: Technical users maintaining the system

3. SPECIFIC REQUIREMENTS
========================

3.1 Functional Requirements
---------------------------

FR-001: User Authentication
Description: The system shall authenticate users using username and password
Inputs: Username, password
Processing: Validate credentials against customer database
Outputs: Authentication success/failure message
Priority: High

FR-002: Account Balance Inquiry
Description: The system shall display current account balance
Preconditions: User must be authenticated
Inputs: Account number
Processing: Retrieve balance from core banking system
Outputs: Current balance, last update timestamp
Priority: High

FR-003: Fund Transfer
Description: The system shall allow transfer between customer accounts
Preconditions: User authenticated, sufficient funds available
Inputs: Source account, destination account, transfer amount
Processing: 
  1. Validate account numbers
  2. Check available balance
  3. Execute transfer transaction
  4. Update account balances
  5. Generate transaction receipt
Outputs: Transaction confirmation, receipt number
Priority: High

FR-004: Bill Payment
Description: The system shall process bill payments to registered payees
Preconditions: User authenticated, payee registered
Inputs: Payee selection, payment amount, payment date
Processing:
  1. Validate payee information
  2. Check account balance
  3. Schedule or execute payment
  4. Send payment confirmation
Outputs: Payment confirmation, reference number
Priority: Medium

FR-005: Transaction History
Description: The system shall display account transaction history
Preconditions: User authenticated
Inputs: Account number, date range (optional)
Processing: Retrieve transactions from database
Outputs: List of transactions with details
Priority: Medium

3.2 Non-Functional Requirements
------------------------------

NFR-001: Performance
- Response time: < 3 seconds for all transactions
- Concurrent users: Support 10,000 simultaneous users
- Throughput: Process 1,000 transactions per minute

NFR-002: Security  
- Data encryption: 256-bit SSL encryption for all communications
- Session timeout: 15 minutes of inactivity
- Password policy: Minimum 8 characters, alphanumeric with special chars
- Login attempts: Lock account after 3 failed attempts

NFR-003: Availability
- System uptime: 99.9% (maximum 8.76 hours downtime per year)
- Scheduled maintenance: Maximum 4 hours per month
- Disaster recovery: RTO < 4 hours, RPO < 1 hour

NFR-004: Usability
- User interface: Intuitive design following web standards
- Accessibility: WCAG 2.1 Level AA compliance
- Browser support: Chrome, Firefox, Safari, Edge (latest 2 versions)
- Mobile responsive: Support for tablets and smartphones

NFR-005: Reliability
- Error handling: Graceful error messages for all failure scenarios
- Data integrity: ACID properties for all financial transactions
- Backup: Daily automated backups with 7-year retention

3.3 Interface Requirements
-------------------------

3.3.1 User Interfaces
- Web-based interface accessible via standard browsers
- Responsive design for desktop, tablet, and mobile devices
- Consistent look and feel across all pages
- Help and support features integrated

3.3.2 Hardware Interfaces
- No specific hardware interfaces required
- Standard web server and database server hardware

3.3.3 Software Interfaces
- Core Banking System API for account and transaction data
- Payment Gateway API for external bill payments
- SMS Gateway API for transaction notifications
- Email Service API for statements and notifications

3.3.4 Communication Interfaces
- HTTPS protocol for all client-server communications
- RESTful APIs for internal service communications
- SOAP/XML for legacy system integration

4. SYSTEM FEATURES
==================

4.1 Login Feature
----------------
4.1.1 Description
Secure user authentication system

4.1.2 Functional Requirements
- FR-001: User Authentication (as defined above)
- FR-006: Password reset functionality
- FR-007: Account lockout mechanism

4.1.3 User Interaction
1. User enters username and password
2. System validates credentials
3. System grants/denies access
4. System logs authentication attempt

4.2 Dashboard Feature
--------------------
4.2.1 Description
Main interface showing account summary and quick actions

4.2.2 Functional Requirements
- Display account balances
- Show recent transactions
- Provide quick action buttons
- Display account alerts/notifications

5. DATA REQUIREMENTS
====================

5.1 Data Dictionary
------------------

CUSTOMER Table:
- customer_id: INTEGER, PRIMARY KEY, Auto-increment
- first_name: VARCHAR(50), NOT NULL
- last_name: VARCHAR(50), NOT NULL
- email: VARCHAR(100), UNIQUE, NOT NULL
- phone: VARCHAR(20)
- date_of_birth: DATE
- created_date: TIMESTAMP, DEFAULT CURRENT_TIMESTAMP

ACCOUNT Table:
- account_id: INTEGER, PRIMARY KEY, Auto-increment
- customer_id: INTEGER, FOREIGN KEY REFERENCES CUSTOMER
- account_number: VARCHAR(20), UNIQUE, NOT NULL
- account_type: ENUM('SAVINGS', 'CHECKING', 'CREDIT')
- balance: DECIMAL(15,2), DEFAULT 0.00
- status: ENUM('ACTIVE', 'INACTIVE', 'CLOSED')

TRANSACTION Table:
- transaction_id: INTEGER, PRIMARY KEY, Auto-increment
- account_id: INTEGER, FOREIGN KEY REFERENCES ACCOUNT
- transaction_type: ENUM('DEPOSIT', 'WITHDRAWAL', 'TRANSFER')
- amount: DECIMAL(15,2), NOT NULL
- description: VARCHAR(255)
- transaction_date: TIMESTAMP, DEFAULT CURRENT_TIMESTAMP

6. EXTERNAL INTERFACE REQUIREMENTS
==================================

6.1 User Interface Requirements
- Clean, professional appearance
- Consistent navigation structure
- Error message display capability
- Help system integration

6.2 Software Interface Requirements
- Web browser compatibility (Chrome, Firefox, Safari, Edge)
- Database management system (MySQL/PostgreSQL)
- Application server (Tomcat/JBoss)

7. QUALITY ATTRIBUTES
=====================

7.1 Security
- Authentication and authorization
- Data encryption
- Audit trail logging
- Compliance with banking regulations

7.2 Performance
- Fast response times
- High throughput capability
- Efficient resource utilization

7.3 Maintainability
- Modular architecture
- Comprehensive documentation
- Automated testing capabilities

8. CONSTRAINTS
==============

8.1 Regulatory Constraints
- Compliance with banking regulations
- Data privacy laws (GDPR, CCPA)
- Financial reporting requirements

8.2 Technical Constraints
- Must use bank's existing infrastructure
- Integration with legacy systems required
- Specific security protocols mandated

9. ASSUMPTIONS AND DEPENDENCIES
===============================

9.1 Assumptions
- Users have basic computer literacy
- Reliable internet connection available
- Standard web browsers used

9.2 Dependencies
- Core banking system availability
- Third-party payment services
- Network infrastructure stability
            `,
            explanation: 'This complete SRS document demonstrates proper structure, detailed requirements specification, and professional documentation standards for a complex system.'
          }
        ];
      // Add more units...
      default:
        return [{
          id: 'placeholder',
          title: 'Examples Coming Soon',
          type: 'General',
          difficulty: 'Basic',
          description: 'Examples for this unit are being developed.',
          code: 'Examples will be available soon...',
          explanation: 'Please check back later for detailed examples.'
        }];
    }
  };

  const currentExamples = getExamples(selectedUnit);

  const difficultyColor = {
    Basic: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800'
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
              <PlayCircle className="w-8 h-8 text-blue-600 mr-3" />
              Practical Examples
            </h1>
            <p className="text-gray-600">Real-world examples and implementations</p>
          </div>
          
          <div className="flex items-center space-x-2 mt-4 lg:mt-0">
            <select
              value={selectedUnit}
              onChange={(e) => onSelectUnit(Number(e.target.value))}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {units.map((unit) => (
                <option key={unit.id} value={unit.id}>
                  Unit {unit.id}: {unit.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Examples Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Examples List */}
        <div className="lg:col-span-1 space-y-4">
          {currentExamples.map((example) => (
            <div
              key={example.id}
              onClick={() => setActiveExample(example.id)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                activeExample === example.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-blue-600" />
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${difficultyColor[example.difficulty as keyof typeof difficultyColor]}`}>
                    {example.difficulty}
                  </span>
                </div>
                <ArrowRight className={`w-4 h-4 transition-transform ${
                  activeExample === example.id ? 'rotate-90 text-blue-600' : 'text-gray-400'
                }`} />
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2">{example.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{example.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {example.type}
                </span>
                <PlayCircle className="w-4 h-4 text-blue-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Example Content */}
        <div className="lg:col-span-2">
          {currentExamples.map((example) => (
            <div
              key={example.id}
              className={`transition-all duration-300 ${
                activeExample === example.id ? 'block' : 'hidden'
              }`}
            >
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{example.title}</h2>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${difficultyColor[example.difficulty as keyof typeof difficultyColor]}`}>
                        {example.difficulty}
                      </span>
                      <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                        {example.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                      <Copy className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
                    Description
                  </h3>
                  <p className="text-gray-700">{example.description}</p>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Code className="w-5 h-5 text-blue-600 mr-2" />
                    Implementation
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm leading-relaxed">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Explanation
                  </h3>
                  <p className="text-blue-800 text-sm">{example.explanation}</p>
                </div>

                {/* Related Topics */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Related Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Software Processes</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Project Management</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">Cost Estimation</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full">Best Practices</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamplesSection;