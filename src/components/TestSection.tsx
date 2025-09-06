import React, { useState } from 'react';
import { Trophy, Clock, Target, CheckCircle, X, ArrowRight, RotateCcw, Star } from 'lucide-react';

interface TestSectionProps {
  selectedUnit: number;
  units: Array<{ id: number; title: string; hours: number }>;
  onSelectUnit: (unit: number) => void;
}

const TestSection: React.FC<TestSectionProps> = ({ selectedUnit, units, onSelectUnit }) => {
  const [activeTest, setActiveTest] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (activeTest && !showResults && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setShowResults(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [activeTest, showResults, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getTestQuestions = (unitId: number) => {
    switch (unitId) {
      case 1:
        return [
          {
            id: 1,
            question: "What is the primary goal of Software Engineering?",
            options: [
              "To write code quickly",
              "To develop high-quality software systematically",
              "To reduce development costs only",
              "To use the latest technologies"
            ],
            correct: 1,
            explanation: "Software Engineering aims to develop high-quality software using systematic, disciplined, and quantifiable approaches."
          },
          {
            id: 2,
            question: "Which of the following is NOT a characteristic of software?",
            options: [
              "Software is intangible",
              "Software does not wear out",
              "Software is manufactured like hardware",
              "Software is complex"
            ],
            correct: 2,
            explanation: "Software is developed or engineered, not manufactured. Manufacturing involves physical production processes, while software development is an intellectual activity."
          },
          {
            id: 3,
            question: "What is the main cause of Software Crisis?",
            options: [
              "Lack of programming languages",
              "Increasing complexity of software systems and lack of systematic approach",
              "Hardware limitations",
              "Internet connectivity issues"
            ],
            correct: 1,
            explanation: "Software Crisis is primarily caused by increasing complexity of software systems, lack of systematic development approaches, and inadequate project management."
          },
          {
            id: 4,
            question: "In the Waterfall model, which phase comes immediately after System Design?",
            options: [
              "Testing",
              "Implementation",
              "Requirements Analysis",
              "Maintenance"
            ],
            correct: 1,
            explanation: "In the Waterfall model, Implementation (coding) phase comes after System Design phase."
          },
          {
            id: 5,
            question: "Which COCOMO model is suitable for small to medium-sized projects with experienced teams?",
            options: [
              "Embedded",
              "Semi-detached",
              "Organic",
              "Complex"
            ],
            correct: 2,
            explanation: "The Organic model is suitable for small to medium-sized projects developed by experienced teams in familiar environments."
          },
          {
            id: 6,
            question: "What does LOC stand for in software metrics?",
            options: [
              "Level of Complexity",
              "Lines of Code",
              "Logic of Control",
              "Language of Communication"
            ],
            correct: 1,
            explanation: "LOC stands for Lines of Code, which is a simple size metric used to measure the size of software."
          },
          {
            id: 7,
            question: "Which of the following is an advantage of the Prototype model?",
            options: [
              "Reduced development time",
              "Better user involvement and feedback",
              "Lower development costs",
              "Simplified documentation"
            ],
            correct: 1,
            explanation: "The Prototype model allows better user involvement and early feedback, helping to clarify requirements and reduce the risk of building the wrong system."
          },
          {
            id: 8,
            question: "In Function Point analysis, which of the following is NOT a component?",
            options: [
              "External Inputs",
              "Internal Logical Files",
              "Lines of Code",
              "External Outputs"
            ],
            correct: 2,
            explanation: "Lines of Code is not a component of Function Point analysis. Function Points measure functionality independent of the programming language used."
          },
          {
            id: 9,
            question: "What is the primary disadvantage of the Waterfall model?",
            options: [
              "High cost",
              "Difficulty in understanding",
              "No flexibility for changes",
              "Requires large teams"
            ],
            correct: 2,
            explanation: "The primary disadvantage of the Waterfall model is its inflexibility to accommodate changes once a phase is completed."
          },
          {
            id: 10,
            question: "Which software quality attribute refers to the ease of making changes to software?",
            options: [
              "Reliability",
              "Maintainability",
              "Usability",
              "Portability"
            ],
            correct: 1,
            explanation: "Maintainability refers to how easily software can be modified to correct defects, improve performance, or adapt to new requirements."
          }
        ];
      case 2:
        return [
          {
            id: 1,
            question: "What does SRS stand for?",
            options: [
              "System Requirements Specification",
              "Software Requirements Specification", 
              "Standard Requirements Specification",
              "Structured Requirements Specification"
            ],
            correct: 1,
            explanation: "SRS stands for Software Requirements Specification, which is a comprehensive description of the intended purpose and environment for software under development."
          },
          {
            id: 2,
            question: "Which of the following is NOT a characteristic of a good SRS?",
            options: [
              "Unambiguous",
              "Complete",
              "Ambiguous",
              "Verifiable"
            ],
            correct: 2,
            explanation: "A good SRS should be unambiguous, not ambiguous. Ambiguity leads to different interpretations and implementation problems."
          },
          {
            id: 3,
            question: "In DFD, what does a circle represent?",
            options: [
              "Data Store",
              "External Entity",
              "Process",
              "Data Flow"
            ],
            correct: 2,
            explanation: "In Data Flow Diagrams (DFD), a circle (or bubble) represents a process that transforms input data into output data."
          },
          {
            id: 4,
            question: "Which requirement engineering activity involves gathering requirements from stakeholders?",
            options: [
              "Requirements Analysis",
              "Requirements Elicitation",
              "Requirements Validation",
              "Requirements Management"
            ],
            correct: 1,
            explanation: "Requirements Elicitation is the process of gathering, discovering, and understanding requirements from stakeholders."
          },
          {
            id: 5,
            question: "What is the primary purpose of ERD (Entity Relationship Diagram)?",
            options: [
              "Show program flow",
              "Model data structure and relationships",
              "Display user interface",
              "Represent system architecture"
            ],
            correct: 1,
            explanation: "ERD is used to model the data structure of a system by showing entities, their attributes, and the relationships between entities."
          }
        ];
      default:
        return [];
    }
  };

  const currentUnitTests = [
    {
      id: `unit-${selectedUnit}-basic`,
      title: `Unit ${selectedUnit} - Basic Test`,
      questions: getTestQuestions(selectedUnit).slice(0, 5),
      duration: 900, // 15 minutes
      difficulty: 'Basic',
      description: 'Fundamental concepts and basic understanding'
    },
    {
      id: `unit-${selectedUnit}-advanced`,
      title: `Unit ${selectedUnit} - Advanced Test`,
      questions: getTestQuestions(selectedUnit),
      duration: 1800, // 30 minutes
      difficulty: 'Advanced',
      description: 'Comprehensive test covering all topics in detail'
    }
  ];

  const startTest = (testId: string) => {
    const test = currentUnitTests.find(t => t.id === testId);
    if (test) {
      setActiveTest(testId);
      setCurrentQuestion(0);
      setSelectedAnswers({});
      setShowResults(false);
      setTimeLeft(test.duration);
    }
  };

  const submitTest = () => {
    setShowResults(true);
  };

  const resetTest = () => {
    setActiveTest(null);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex.toString()
    }));
  };

  const calculateScore = () => {
    const test = currentUnitTests.find(t => t.id === activeTest);
    if (!test) return { score: 0, total: 0, percentage: 0 };
    
    let correct = 0;
    test.questions.forEach(question => {
      const selectedAnswer = selectedAnswers[question.id];
      if (selectedAnswer !== undefined && parseInt(selectedAnswer) === question.correct) {
        correct++;
      }
    });
    
    const total = test.questions.length;
    const percentage = Math.round((correct / total) * 100);
    
    return { score: correct, total, percentage };
  };

  if (!activeTest) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                <Trophy className="w-8 h-8 text-yellow-600 mr-3" />
                Practice Tests
              </h1>
              <p className="text-gray-600">Test your knowledge with comprehensive practice questions</p>
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

        {/* Test Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {currentUnitTests.map((test) => (
            <div key={test.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg ${test.difficulty === 'Basic' ? 'bg-green-100' : 'bg-red-100'}`}>
                    <Trophy className={`w-6 h-6 ${test.difficulty === 'Basic' ? 'text-green-600' : 'text-red-600'}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{test.title}</h3>
                    <p className="text-sm text-gray-600">{test.description}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  test.difficulty === 'Basic' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {test.difficulty}
                </span>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    {test.questions.length} Questions
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {Math.floor(test.duration / 60)} minutes
                  </span>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Test Coverage:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Core Concepts</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Practical Applications</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Problem Solving</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => startTest(test.id)}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Start Test</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Star className="w-6 h-6 text-yellow-500 mr-3" />
            Your Progress
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-sm text-gray-600">Tests Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-sm text-gray-600">Average Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">47h</div>
              <div className="text-sm text-gray-600">Study Time</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentTest = currentUnitTests.find(t => t.id === activeTest);
  if (!currentTest) return null;

  if (showResults) {
    const { score, total, percentage } = calculateScore();
    
    return (
      <div className="space-y-6">
        {/* Results Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="text-center">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
              percentage >= 80 ? 'bg-green-100' : percentage >= 60 ? 'bg-yellow-100' : 'bg-red-100'
            }`}>
              <Trophy className={`w-8 h-8 ${
                percentage >= 80 ? 'text-green-600' : percentage >= 60 ? 'text-yellow-600' : 'text-red-600'
              }`} />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Test Results</h1>
            <div className="text-4xl font-bold mb-2">
              <span className={
                percentage >= 80 ? 'text-green-600' : percentage >= 60 ? 'text-yellow-600' : 'text-red-600'
              }>
                {percentage}%
              </span>
            </div>
            <p className="text-gray-600">You scored {score} out of {total} questions correctly</p>
            
            <div className="flex items-center justify-center space-x-4 mt-6">
              <button
                onClick={resetTest}
                className="flex items-center space-x-2 px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Take Again</span>
              </button>
              <button
                onClick={() => setActiveTest(null)}
                className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <span>Back to Tests</span>
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Results */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Detailed Review</h2>
          
          <div className="space-y-6">
            {currentTest.questions.map((question, index) => {
              const selectedAnswer = selectedAnswers[question.id];
              const isCorrect = selectedAnswer !== undefined && parseInt(selectedAnswer) === question.correct;
              
              return (
                <div key={question.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-medium ${
                      isCorrect ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                      {isCorrect ? <CheckCircle className="w-4 h-4" /> : <X className="w-4 h-4" />}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-3">
                        Question {index + 1}: {question.question}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        {question.options.map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            className={`p-3 rounded-lg border ${
                              optionIndex === question.correct
                                ? 'border-green-500 bg-green-50 text-green-800'
                                : selectedAnswer !== undefined && parseInt(selectedAnswer) === optionIndex && optionIndex !== question.correct
                                  ? 'border-red-500 bg-red-50 text-red-800'
                                  : 'border-gray-200 bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                optionIndex === question.correct
                                  ? 'border-green-500 bg-green-500'
                                  : selectedAnswer !== undefined && parseInt(selectedAnswer) === optionIndex && optionIndex !== question.correct
                                    ? 'border-red-500 bg-red-500'
                                    : 'border-gray-300'
                              }`}>
                                {optionIndex === question.correct && <CheckCircle className="w-3 h-3 text-white" />}
                                {selectedAnswer !== undefined && parseInt(selectedAnswer) === optionIndex && optionIndex !== question.correct && <X className="w-3 h-3 text-white" />}
                              </div>
                              <span className="text-sm">{option}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg">
                        <p className="text-sm text-blue-800">
                          <strong>Explanation:</strong> {question.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Test Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">{currentTest.title}</h1>
            <p className="text-gray-600">Question {currentQuestion + 1} of {currentTest.questions.length}</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
            </div>
            <button
              onClick={() => setActiveTest(null)}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Exit Test
            </button>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / currentTest.questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {currentTest.questions[currentQuestion].question}
          </h2>
          
          <div className="space-y-3">
            {currentTest.questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(currentTest.questions[currentQuestion].id, index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                  selectedAnswers[currentTest.questions[currentQuestion].id] === index.toString()
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswers[currentTest.questions[currentQuestion].id] === index.toString()
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedAnswers[currentTest.questions[currentQuestion].id] === index.toString() && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span>Previous</span>
          </button>
          
          <div className="text-sm text-gray-600">
            Answered: {Object.keys(selectedAnswers).length} / {currentTest.questions.length}
          </div>
          
          {currentQuestion === currentTest.questions.length - 1 ? (
            <button
              onClick={submitTest}
              className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <span>Submit Test</span>
              <CheckCircle className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setCurrentQuestion(Math.min(currentTest.questions.length - 1, currentQuestion + 1))}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestSection;