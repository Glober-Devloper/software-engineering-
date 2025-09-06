import React from 'react';
import { X, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  currentSection: string;
  setCurrentSection: (section: string) => void;
  setSidebarOpen: (open: boolean) => void;
  menuItems: Array<{ id: string; label: string; icon: React.ReactNode }>;
  units: Array<{ id: number; title: string; hours: number }>;
  selectedUnit: number;
  setSelectedUnit: (unit: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  currentSection,
  setCurrentSection,
  setSidebarOpen,
  menuItems,
  units,
  selectedUnit,
  setSelectedUnit
}) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <aside className={`fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 z-40 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <nav className="space-y-2 mb-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentSection(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                  currentSection === item.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center">
              Course Units
              <ChevronRight className="w-4 h-4 ml-2 text-gray-400" />
            </h3>
            
            <div className="space-y-2">
              {units.map((unit) => (
                <button
                  key={unit.id}
                  onClick={() => {
                    setSelectedUnit(unit.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    selectedUnit === unit.id
                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-medium text-sm">Unit {unit.id}</div>
                  <div className="text-xs opacity-75 truncate">{unit.title}</div>
                  <div className="text-xs opacity-60 mt-1">{unit.hours} hours</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;