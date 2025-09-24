import React from 'react';
import { Heart, Mic, PenTool, Wind } from 'lucide-react';

export const QuickActions: React.FC = () => {
  const actions = [
    {
      title: 'Log Mood',
      description: 'Quick mood check-in',
      icon: Heart,
      color: 'from-pink-400 to-red-500',
      action: () => console.log('Log mood')
    },
    {
      title: 'Voice Note',
      description: 'Record your thoughts',
      icon: Mic,
      color: 'from-blue-400 to-indigo-500',
      action: () => console.log('Voice note')
    },
    {
      title: 'Journal Entry',
      description: 'Write your feelings',
      icon: PenTool,
      color: 'from-purple-400 to-pink-500',
      action: () => console.log('Journal entry')
    },
    {
      title: 'Breathing Exercise',
      description: '5-minute relaxation',
      icon: Wind,
      color: 'from-green-400 to-teal-500',
      action: () => console.log('Breathing exercise')
    }
  ];

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              onClick={action.action}
              className="group relative overflow-hidden bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-3 group-hover:shadow-lg transition-all duration-300`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 text-left">{action.title}</h3>
              <p className="text-sm text-gray-600 text-left">{action.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};