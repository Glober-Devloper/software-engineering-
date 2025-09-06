import React from 'react';
import { Book, Trophy, Clock, Target, TrendingUp, Award, Users, Zap, ArrowRight, CheckCircle, Star, BarChart3 } from 'lucide-react';

interface DashboardProps {
  units: Array<{ id: number; title: string; hours: number; topics: string[] }>;
  onNavigate: (section: string) => void;
  onSelectUnit: (unit: number) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ units, onNavigate, onSelectUnit }) => {
  const stats = [
    { label: 'Study Progress', value: '68%', icon: <TrendingUp className="w-6 h-6" />, color: 'blue' },
    { label: 'Tests Completed', value: '12/20', icon: <Trophy className="w-6 h-6" />, color: 'green' },
    { label: 'Study Hours', value: '47h', icon: <Clock className="w-6 h-6" />, color: 'purple' },
    { label: 'Average Score', value: '85%', icon: <Target className="w-6 h-6" />, color: 'orange' },
  ];

  const quickActions = [
    { label: 'Continue Reading', action: 'notes', icon: <Book className="w-5 h-5" />, color: 'blue' },
    { label: 'Practice MCQs', action: 'mcq', icon: <Zap className="w-5 h-5" />, color: 'green' },
    { label: 'Take Mock Test', action: 'tests', icon: <Trophy className="w-5 h-5" />, color: 'purple' },
    { label: 'View Examples', action: 'examples', icon: <Star className="w-5 h-5" />, color: 'orange' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">Welcome to Software Engineering Study Hub</h1>
            <p className="text-lg opacity-90 mb-6 max-w-2xl">
              Master Software Engineering with comprehensive notes, practical examples, and 200+ practice questions. 
              From SDLC models to software maintenance - everything you need for BCA Semester IV.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => onNavigate('notes')}
                className="px-6 py-3 bg-white text-purple-600 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center space-x-2"
              >
                <Book className="w-5 h-5" />
                <span>Start Learning</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => onNavigate('tests')}
                className="px-6 py-3 border-2 border-white text-white rounded-xl font-medium hover:bg-white hover:text-purple-600 transition-colors flex items-center space-x-2"
              >
                <Trophy className="w-5 h-5" />
                <span>Practice Tests</span>
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block lg:ml-8">
            <div className="w-48 h-48 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
              <Book className="w-24 h-24 text-white/80" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                <div className={`text-${stat.color}-600`}>{stat.icon}</div>
              </div>
              <BarChart3 className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <Zap className="w-6 h-6 text-blue-600 mr-3" />
          Quick Actions
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => onNavigate(action.action)}
              className={`p-4 rounded-xl border-2 border-gray-100 hover:border-${action.color}-200 hover:bg-${action.color}-50 transition-all group`}
            >
              <div className={`w-10 h-10 bg-${action.color}-100 text-${action.color}-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                {action.icon}
              </div>
              <div className="font-medium text-gray-900">{action.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Course Units Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <Book className="w-6 h-6 text-blue-600 mr-3" />
          Course Units Overview
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {units.map((unit) => (
            <div 
              key={unit.id}
              className="p-5 border border-gray-200 rounded-xl hover:shadow-md transition-shadow cursor-pointer group"
              onClick={() => {
                onSelectUnit(unit.id);
                onNavigate('notes');
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                    {unit.id}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {unit.title}
                    </h3>
                    <p className="text-sm text-gray-600">{unit.hours} hours</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" />
              </div>
              
              <div className="space-y-2">
                {unit.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Section */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <Award className="w-6 h-6 mr-3" />
              Your Progress
            </h3>
            <p className="opacity-90 mb-4">
              Great job! You're making excellent progress. Keep up the momentum and achieve your goals.
            </p>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div className="bg-white h-2 rounded-full w-2/3"></div>
            </div>
            <p className="text-sm opacity-75 mt-2">68% Complete • 3 of 5 units mastered</p>
          </div>
          
          <div className="hidden sm:flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold">47</div>
              <div className="text-sm opacity-75">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">85</div>
              <div className="text-sm opacity-75">Avg Score</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;