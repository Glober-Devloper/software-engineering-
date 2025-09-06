import React, { useState } from 'react';
import { HelpCircle, CheckCircle, X, Star, Target, TrendingUp, RotateCcw } from 'lucide-react';

interface MCQSectionProps {
  selectedUnit: number;
  units: Array<{ id: number; title: string; hours: number }>;
  onSelectUnit: (unit: number) => void;
}

const MCQSection: React.FC<MCQSectionProps> = ({ selectedUnit, units, onSelectUnit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());

  const getMCQQuestions = (unitId: number) => {
    const allQuestions = [
      // Unit 1 Questions - Software Engineering Concepts
      {
        unit: 1,
        id: 1,
        question: "What is the main objective of Software Engineering?",
        options: [
          "To develop software quickly",
          "To develop high-quality software using systematic approaches",
          "To reduce development costs",
          "To use advanced programming languages"
        ],
        correct: 1,
        explanation: "Software Engineering focuses on developing high-quality software using systematic, disciplined, and quantifiable approaches to ensure reliability, maintainability, and efficiency.",
        difficulty: "Basic",
        topic: "Introduction"
      },
      {
        unit: 1,
        id: 2,
        question: "Which of the following is NOT a software quality attribute?",
        options: [
          "Reliability",
          "Maintainability",
          "Hardware dependency",
          "Usability"
        ],
        correct: 2,
        explanation: "Hardware dependency is not a software quality attribute. Good software should be as hardware-independent as possible to ensure portability and flexibility.",
        difficulty: "Basic",
        topic: "Software Quality"
      },
      {
        unit: 1,
        id: 3,
        question: "In the Waterfall model, what happens if an error is discovered in the testing phase?",
        options: [
          "The error is fixed immediately",
          "The project must go back to previous phases",
          "The error is ignored",
          "Testing continues with the error"
        ],
        correct: 1,
        explanation: "In the Waterfall model, if errors are discovered in testing, the project must go back to previous phases to fix them, which can be expensive and time-consuming due to the linear nature of the model.",
        difficulty: "Intermediate",
        topic: "SDLC Models"
      },
      {
        unit: 1,
        id: 4,
        question: "Which COCOMO project type has the highest effort multiplier?",
        options: [
          "Organic",
          "Semi-detached",
          "Embedded",
          "All have the same multiplier"
        ],
        correct: 2,
        explanation: "Embedded projects have the highest effort multiplier (a=3.6) as they are the most complex, involving real-time systems, tight constraints, and complex interfaces.",
        difficulty: "Advanced",
        topic: "Project Management"
      },
      {
        unit: 1,
        id: 5,
        question: "What is the primary advantage of the Prototype model?",
        options: [
          "Lower development cost",
          "Faster development",
          "Better user involvement and requirement understanding",
          "Requires less documentation"
        ],
        correct: 2,
        explanation: "The Prototype model's main advantage is better user involvement and understanding of requirements through early feedback on working prototypes, reducing the risk of building the wrong system.",
        difficulty: "Intermediate",
        topic: "SDLC Models"
      },
      {
        unit: 1,
        id: 6,
        question: "Function Point analysis is used to measure:",
        options: [
          "Code complexity",
          "Software functionality independent of technology",
          "Development time",
          "Number of programmers needed"
        ],
        correct: 1,
        explanation: "Function Point analysis measures software size based on functionality provided to users, independent of the technology used for implementation, making it language-neutral.",
        difficulty: "Intermediate",
        topic: "Size Estimation"
      },
      {
        unit: 1,
        id: 7,
        question: "Which of the following is a characteristic of software?",
        options: [
          "Software wears out over time",
          "Software is manufactured like hardware",
          "Software is intangible and logical",
          "Software has physical components"
        ],
        correct: 2,
        explanation: "Software is intangible and logical in nature. Unlike hardware, it doesn't wear out physically but may become obsolete or require updates due to changing requirements.",
        difficulty: "Basic",
        topic: "Introduction"
      },
      {
        unit: 1,
        id: 8,
        question: "What is the main cause of Software Crisis?",
        options: [
          "Lack of programming languages",
          "Increasing complexity and lack of systematic approach",
          "Hardware limitations",
          "Internet connectivity issues"
        ],
        correct: 1,
        explanation: "Software Crisis is primarily caused by increasing complexity of software systems, lack of systematic development approaches, inadequate project management, and growing demand for software.",
        difficulty: "Intermediate",
        topic: "Software Crisis"
      },
      {
        unit: 1,
        id: 9,
        question: "In Basic COCOMO, which project type is suitable for small teams with familiar environment?",
        options: [
          "Embedded",
          "Semi-detached",
          "Organic",
          "Complex"
        ],
        correct: 2,
        explanation: "The Organic model is suitable for small to medium-sized projects developed by experienced teams in familiar environments with well-understood requirements.",
        difficulty: "Intermediate",
        topic: "Project Management"
      },
      {
        unit: 1,
        id: 10,
        question: "What does LOC stand for in software metrics?",
        options: [
          "Level of Complexity",
          "Lines of Code",
          "Logic of Control",
          "Language of Communication"
        ],
        correct: 1,
        explanation: "LOC stands for Lines of Code, which is a simple size metric used to measure the size of software by counting the number of lines in the source code.",
        difficulty: "Basic",
        topic: "Size Estimation"
      },

      // Unit 2 Questions - Requirements Analysis
      {
        unit: 2,
        id: 11,
        question: "What does SRS stand for?",
        options: [
          "System Requirements Specification",
          "Software Requirements Specification",
          "Standard Requirements Specification",
          "Structured Requirements Specification"
        ],
        correct: 1,
        explanation: "SRS stands for Software Requirements Specification - a comprehensive description of the intended purpose and environment for software under development.",
        difficulty: "Basic",
        topic: "Requirements"
      },
      {
        unit: 2,
        id: 12,
        question: "Which of the following is NOT a characteristic of good requirements?",
        options: [
          "Unambiguous",
          "Complete",
          "Ambiguous",
          "Verifiable"
        ],
        correct: 2,
        explanation: "Good requirements should be unambiguous, not ambiguous. Ambiguous requirements lead to different interpretations and implementation problems.",
        difficulty: "Basic",
        topic: "Requirements Quality"
      },
      {
        unit: 2,
        id: 13,
        question: "In a Data Flow Diagram (DFD), what does a rectangle represent?",
        options: [
          "Process",
          "Data Store",
          "External Entity",
          "Data Flow"
        ],
        correct: 2,
        explanation: "In DFD notation, a rectangle represents an External Entity - a source or destination of data outside the system boundary.",
        difficulty: "Intermediate",
        topic: "Modeling"
      },
      {
        unit: 2,
        id: 14,
        question: "Which requirements engineering activity comes first?",
        options: [
          "Requirements Analysis",
          "Requirements Documentation",
          "Requirements Elicitation",
          "Requirements Validation"
        ],
        correct: 2,
        explanation: "Requirements Elicitation is the first activity where requirements are gathered from stakeholders through various techniques like interviews, surveys, observation, etc.",
        difficulty: "Intermediate",
        topic: "RE Process"
      },
      {
        unit: 2,
        id: 15,
        question: "What is the primary purpose of an Entity Relationship Diagram (ERD)?",
        options: [
          "Show system architecture",
          "Model data structure and relationships",
          "Display user interface",
          "Represent program flow"
        ],
        correct: 1,
        explanation: "ERD is used to model the data structure of a system by showing entities, their attributes, and relationships between entities.",
        difficulty: "Basic",
        topic: "Data Modeling"
      },
      {
        unit: 2,
        id: 16,
        question: "In requirements analysis, what is a feasibility study used for?",
        options: [
          "To gather requirements",
          "To assess if the project is viable",
          "To design the system",
          "To test the system"
        ],
        correct: 1,
        explanation: "A feasibility study assesses whether the proposed system is technically, economically, and operationally viable before proceeding with development.",
        difficulty: "Intermediate",
        topic: "Feasibility"
      },
      {
        unit: 2,
        id: 17,
        question: "Which of the following is a functional requirement?",
        options: [
          "System should respond within 2 seconds",
          "System should be available 99.9% of the time",
          "System should validate user login credentials",
          "System should support 1000 concurrent users"
        ],
        correct: 2,
        explanation: "Functional requirements define what the system should do. Validating user login credentials is a specific function the system must perform.",
        difficulty: "Basic",
        topic: "Requirements Types"
      },
      {
        unit: 2,
        id: 18,
        question: "In DFD, what does a circle represent?",
        options: [
          "Data Store",
          "External Entity",
          "Process",
          "Data Flow"
        ],
        correct: 2,
        explanation: "In Data Flow Diagrams (DFD), a circle (or bubble) represents a process that transforms input data into output data.",
        difficulty: "Basic",
        topic: "DFD Components"
      },
      {
        unit: 2,
        id: 19,
        question: "Which technique is used for requirements elicitation?",
        options: [
          "Coding",
          "Testing",
          "Interviews",
          "Debugging"
        ],
        correct: 2,
        explanation: "Interviews are a primary technique for requirements elicitation, allowing direct communication with stakeholders to gather their needs and expectations.",
        difficulty: "Basic",
        topic: "Elicitation Techniques"
      },
      {
        unit: 2,
        id: 20,
        question: "What is the main purpose of a Data Dictionary?",
        options: [
          "Store program code",
          "Define data elements and their properties",
          "Test software functionality",
          "Design user interfaces"
        ],
        correct: 1,
        explanation: "A Data Dictionary is a centralized repository that contains definitions of all data elements used in the system, ensuring consistency and clarity.",
        difficulty: "Intermediate",
        topic: "Data Dictionary"
      },

      // Unit 3 Questions - Software Design
      {
        unit: 3,
        id: 21,
        question: "What does coupling measure in software design?",
        options: [
          "How well elements within a module work together",
          "How much modules depend on each other",
          "The size of modules",
          "The complexity of algorithms"
        ],
        correct: 1,
        explanation: "Coupling measures the degree of interdependence between modules. Low coupling is desirable as it makes the system more maintainable and flexible.",
        difficulty: "Intermediate",
        topic: "Design Principles"
      },
      {
        unit: 3,
        id: 22,
        question: "Which type of cohesion is considered the best?",
        options: [
          "Logical cohesion",
          "Temporal cohesion",
          "Functional cohesion",
          "Coincidental cohesion"
        ],
        correct: 2,
        explanation: "Functional cohesion is the strongest and most desirable type where all elements of a module work together to perform a single, well-defined task.",
        difficulty: "Intermediate",
        topic: "Cohesion Types"
      },
      {
        unit: 3,
        id: 23,
        question: "What is the main goal of software design?",
        options: [
          "To write code faster",
          "To create a blueprint for implementation",
          "To test the software",
          "To gather requirements"
        ],
        correct: 1,
        explanation: "The main goal of software design is to create a detailed blueprint or plan that guides the implementation phase, defining the system's architecture and components.",
        difficulty: "Basic",
        topic: "Design Fundamentals"
      },
      {
        unit: 3,
        id: 24,
        question: "Which design approach focuses on data and operations together?",
        options: [
          "Function-oriented design",
          "Object-oriented design",
          "Structured design",
          "Modular design"
        ],
        correct: 1,
        explanation: "Object-oriented design focuses on combining data and operations (methods) together in objects, promoting encapsulation and data hiding.",
        difficulty: "Intermediate",
        topic: "Design Approaches"
      },
      {
        unit: 3,
        id: 25,
        question: "What is abstraction in software design?",
        options: [
          "Making software complex",
          "Hiding implementation details",
          "Adding more features",
          "Increasing code size"
        ],
        correct: 1,
        explanation: "Abstraction is the process of hiding implementation details while showing only essential features to reduce complexity and improve understanding.",
        difficulty: "Basic",
        topic: "Design Principles"
      },

      // Unit 4 Questions - Coding and Testing
      {
        unit: 4,
        id: 26,
        question: "What is the main purpose of unit testing?",
        options: [
          "Test the entire system",
          "Test individual components in isolation",
          "Test user interfaces",
          "Test system performance"
        ],
        correct: 1,
        explanation: "Unit testing focuses on testing individual components or modules in isolation to ensure they work correctly before integration with other components.",
        difficulty: "Basic",
        topic: "Testing"
      },
      {
        unit: 4,
        id: 27,
        question: "Which testing technique examines the internal structure of code?",
        options: [
          "Black box testing",
          "White box testing",
          "Gray box testing",
          "Acceptance testing"
        ],
        correct: 1,
        explanation: "White box testing examines the internal structure, logic, and code paths of the software to ensure all statements and branches are tested.",
        difficulty: "Intermediate",
        topic: "Testing Techniques"
      },
      {
        unit: 4,
        id: 28,
        question: "What is the purpose of coding standards?",
        options: [
          "To make code run faster",
          "To ensure consistency and readability",
          "To reduce file size",
          "To add more features"
        ],
        correct: 1,
        explanation: "Coding standards ensure consistency, readability, and maintainability of source code across development teams, making it easier to understand and modify.",
        difficulty: "Basic",
        topic: "Coding Standards"
      },
      {
        unit: 4,
        id: 29,
        question: "Which testing level comes after unit testing?",
        options: [
          "System testing",
          "Integration testing",
          "Acceptance testing",
          "Performance testing"
        ],
        correct: 1,
        explanation: "Integration testing comes after unit testing and focuses on testing the interfaces and interactions between integrated components or modules.",
        difficulty: "Basic",
        topic: "Testing Levels"
      },
      {
        unit: 4,
        id: 30,
        question: "What is debugging?",
        options: [
          "Writing new code",
          "Testing software functionality",
          "Finding and fixing errors in code",
          "Documenting software"
        ],
        correct: 2,
        explanation: "Debugging is the process of finding, analyzing, and fixing bugs or errors in software code to ensure it works as expected.",
        difficulty: "Basic",
        topic: "Debugging"
      },

      // Unit 5 Questions - Software Maintenance
      {
        unit: 5,
        id: 31,
        question: "What type of maintenance involves adding new features to existing software?",
        options: [
          "Corrective maintenance",
          "Adaptive maintenance",
          "Perfective maintenance",
          "Preventive maintenance"
        ],
        correct: 2,
        explanation: "Perfective maintenance involves enhancing software by adding new features or improving existing functionality based on user requests and changing requirements.",
        difficulty: "Intermediate",
        topic: "Maintenance Types"
      },
      {
        unit: 5,
        id: 32,
        question: "Which maintenance type fixes bugs and errors?",
        options: [
          "Corrective maintenance",
          "Adaptive maintenance",
          "Perfective maintenance",
          "Preventive maintenance"
        ],
        correct: 0,
        explanation: "Corrective maintenance involves fixing bugs, errors, and faults discovered in the software after it has been deployed and is in use.",
        difficulty: "Basic",
        topic: "Maintenance Types"
      },
      {
        unit: 5,
        id: 33,
        question: "What is reverse engineering in software maintenance?",
        options: [
          "Writing code backwards",
          "Analyzing existing code to understand its design",
          "Deleting old code",
          "Testing software performance"
        ],
        correct: 1,
        explanation: "Reverse engineering is the process of analyzing existing software to understand its design, architecture, and functionality, often used in legacy system maintenance.",
        difficulty: "Intermediate",
        topic: "Reverse Engineering"
      },
      {
        unit: 5,
        id: 34,
        question: "Which maintenance activity adapts software to new environments?",
        options: [
          "Corrective maintenance",
          "Adaptive maintenance",
          "Perfective maintenance",
          "Emergency maintenance"
        ],
        correct: 1,
        explanation: "Adaptive maintenance modifies software to work in new or changed environments, such as new operating systems, hardware platforms, or regulatory requirements.",
        difficulty: "Basic",
        topic: "Maintenance Types"
      },
      {
        unit: 5,
        id: 35,
        question: "What percentage of software lifecycle cost is typically spent on maintenance?",
        options: [
          "20-30%",
          "40-50%",
          "60-80%",
          "90-95%"
        ],
        correct: 2,
        explanation: "Studies show that 60-80% of the total software lifecycle cost is typically spent on maintenance activities, making it the most expensive phase.",
        difficulty: "Advanced",
        topic: "Maintenance Economics"
      },

      // Additional comprehensive questions across all units
      {
        unit: 1,
        id: 36,
        question: "Which SDLC model allows for iterative development with user feedback?",
        options: [
          "Waterfall model",
          "V-model",
          "Spiral model",
          "Big Bang model"
        ],
        correct: 2,
        explanation: "The Spiral model combines iterative development with systematic risk assessment, allowing for user feedback and refinement in each iteration.",
        difficulty: "Intermediate",
        topic: "SDLC Models"
      },
      {
        unit: 2,
        id: 37,
        question: "What is the highest level DFD called?",
        options: [
          "Level 0 DFD",
          "Context diagram",
          "Overview diagram",
          "System diagram"
        ],
        correct: 1,
        explanation: "The Context diagram (Level 0 DFD) is the highest level DFD that shows the system as a single process with external entities and major data flows.",
        difficulty: "Basic",
        topic: "DFD Levels"
      },
      {
        unit: 3,
        id: 38,
        question: "What is information hiding in software design?",
        options: [
          "Encrypting data",
          "Concealing implementation details from users",
          "Hiding bugs in code",
          "Removing documentation"
        ],
        correct: 1,
        explanation: "Information hiding is a design principle where implementation details are concealed from users, exposing only necessary interfaces to reduce complexity and improve maintainability.",
        difficulty: "Intermediate",
        topic: "Design Principles"
      },
      {
        unit: 4,
        id: 39,
        question: "What is the main difference between verification and validation?",
        options: [
          "No difference, they are the same",
          "Verification checks if we built the product right, validation checks if we built the right product",
          "Verification is done by users, validation by developers",
          "Verification is automated, validation is manual"
        ],
        correct: 1,
        explanation: "Verification ensures the product is built according to specifications (are we building the product right?), while validation ensures the product meets user needs (are we building the right product?).",
        difficulty: "Advanced",
        topic: "V&V Concepts"
      },
      {
        unit: 5,
        id: 40,
        question: "What is software reengineering?",
        options: [
          "Writing software from scratch",
          "Restructuring existing software to improve its quality",
          "Testing software thoroughly",
          "Documenting software requirements"
        ],
        correct: 1,
        explanation: "Software reengineering is the process of restructuring and modifying existing software to improve its quality, maintainability, and performance without changing its functionality.",
        difficulty: "Intermediate",
        topic: "Reengineering"
      }
    ];

    return allQuestions.filter(q => unitId === 0 || q.unit === unitId);
  };

  const questions = getMCQQuestions(selectedUnit);
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    if (showAnswer) return;
    
    setSelectedAnswer(answerIndex);
    setShowAnswer(true);
    
    const newAnsweredQuestions = new Set(answeredQuestions);
    if (!newAnsweredQuestions.has(currentQuestionIndex)) {
      newAnsweredQuestions.add(currentQuestionIndex);
      setAnsweredQuestions(newAnsweredQuestions);
      
      setScore(prev => ({
        correct: prev.correct + (answerIndex === currentQuestion.correct ? 1 : 0),
        total: prev.total + 1
      }));
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setScore({ correct: 0, total: 0 });
    setAnsweredQuestions(new Set());
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Basic': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (questions.length === 0) {
    return (
      <div className="text-center py-12">
        <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">No Questions Available</h2>
        <p className="text-gray-600">Questions for this unit are being prepared. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
              <HelpCircle className="w-8 h-8 text-blue-600 mr-3" />
              MCQ Practice
            </h1>
            <p className="text-gray-600">Practice with multiple choice questions - {questions.length} questions available</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <select
              value={selectedUnit}
              onChange={(e) => onSelectUnit(Number(e.target.value))}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={0}>All Units</option>
              {units.map((unit) => (
                <option key={unit.id} value={unit.id}>
                  Unit {unit.id}: {unit.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Progress and Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-blue-600">{currentQuestionIndex + 1}</div>
              <div className="text-sm text-gray-600">of {questions.length}</div>
            </div>
            <Target className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-green-600">{score.correct}</div>
              <div className="text-sm text-gray-600">Correct</div>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-purple-600">
                {score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0}%
              </div>
              <div className="text-sm text-gray-600">Accuracy</div>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-orange-600">{answeredQuestions.size}</div>
              <div className="text-sm text-gray-600">Answered</div>
            </div>
            <Star className="w-8 h-8 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${getDifficultyColor(currentQuestion.difficulty)}`}>
              {currentQuestion.difficulty}
            </span>
            <span className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
              {currentQuestion.topic}
            </span>
            <span className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full">
              Unit {currentQuestion.unit}
            </span>
          </div>
          
          <button
            onClick={resetQuiz}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {currentQuestion.question}
          </h2>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showAnswer}
                className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                  showAnswer
                    ? index === currentQuestion.correct
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : selectedAnswer === index
                        ? 'border-red-500 bg-red-50 text-red-800'
                        : 'border-gray-200 bg-gray-50 text-gray-600'
                    : selectedAnswer === index
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    showAnswer
                      ? index === currentQuestion.correct
                        ? 'border-green-500 bg-green-500'
                        : selectedAnswer === index
                          ? 'border-red-500 bg-red-500'
                          : 'border-gray-300'
                      : selectedAnswer === index
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                  }`}>
                    {showAnswer && index === currentQuestion.correct && <CheckCircle className="w-4 h-4 text-white" />}
                    {showAnswer && selectedAnswer === index && index !== currentQuestion.correct && <X className="w-4 h-4 text-white" />}
                    {!showAnswer && selectedAnswer === index && <div className="w-3 h-3 rounded-full bg-white" />}
                  </div>
                  <span className="flex-1">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {showAnswer && (
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6">
            <div className="flex items-start space-x-2">
              <HelpCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-medium text-blue-900 mb-1">Explanation</h3>
                <p className="text-blue-800 text-sm">{currentQuestion.explanation}</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
          <button
            onClick={previousQuestion}
            disabled={currentQuestionIndex === 0}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed rounded-lg hover:bg-gray-100 disabled:hover:bg-transparent"
          >
            <span>Previous</span>
          </button>
          
          <div className="text-sm text-gray-600">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>
          
          <button
            onClick={nextQuestion}
            disabled={currentQuestionIndex === questions.length - 1}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <span>Next</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm text-gray-600">
            {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default MCQSection;