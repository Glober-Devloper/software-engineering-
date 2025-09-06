import React, { useState } from 'react';
import { BookOpen, Target, Brain, HelpCircle, PlayCircle } from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import NotesSection from './components/NotesSection';
import ExamplesSection from './components/ExamplesSection';
import TestSection from './components/TestSection';
import MCQSection from './components/MCQSection';

function App() {
  const [currentSection, setCurrentSection] = useState('dashboard');
  const [selectedUnit, setSelectedUnit] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Target className="w-5 h-5" /> },
    { id: 'notes', label: 'Study Notes', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'examples', label: 'Examples', icon: <PlayCircle className="w-5 h-5" /> },
    { id: 'tests', label: 'Practice Tests', icon: <Brain className="w-5 h-5" /> },
    { id: 'mcq', label: 'MCQ Practice', icon: <HelpCircle className="w-5 h-5" /> },
  ];

  const units = [
    { 
      id: 1, 
      title: 'Software Engineering Concepts', 
      hours: 14, 
      topics: ['Introduction to SE', 'Software Crisis', 'SDLC Models', 'Project Management']
    },
    { 
      id: 2, 
      title: 'Requirements Analysis', 
      hours: 14, 
      topics: ['SRS Documents', 'Requirement Engineering', 'Function Oriented Modeling']
    },
    { 
      id: 3, 
      title: 'Software Design', 
      hours: 12, 
      topics: ['Design Approaches', 'Cohesion & Coupling', 'UI Design Process']
    },
    { 
      id: 4, 
      title: 'Coding and Testing', 
      hours: 12, 
      topics: ['Coding Standards', 'Testing Types', 'Debugging Techniques']
    },
    { 
      id: 5, 
      title: 'Software Maintenance', 
      hours: 8, 
      topics: ['Maintenance Types', 'Reverse Engineering', 'Cost Estimation']
    },
  ];

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'dashboard':
        return <Dashboard units={units} onNavigate={setCurrentSection} onSelectUnit={setSelectedUnit} />;
      case 'notes':
        return <NotesSection selectedUnit={selectedUnit} units={units} onSelectUnit={setSelectedUnit} />;
      case 'examples':
        return <ExamplesSection selectedUnit={selectedUnit} units={units} onSelectUnit={setSelectedUnit} />;
      case 'tests':
        return <TestSection selectedUnit={selectedUnit} units={units} onSelectUnit={setSelectedUnit} />;
      case 'mcq':
        return <MCQSection selectedUnit={selectedUnit} units={units} onSelectUnit={setSelectedUnit} />;
      default:
        return <Dashboard units={units} onNavigate={setCurrentSection} onSelectUnit={setSelectedUnit} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          setSidebarOpen={setSidebarOpen}
          menuItems={menuItems}
          units={units}
          selectedUnit={selectedUnit}
          setSelectedUnit={setSelectedUnit}
        />
        
        <main className="flex-1 lg:ml-64 pt-16">
          <div className="p-6">
            {renderCurrentSection()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;