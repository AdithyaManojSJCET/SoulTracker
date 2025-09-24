import React from 'react';
import { BarChart3, Heart, Award, Lightbulb, Users, User, Brain } from 'lucide-react';
import type { NavigationTab } from '../App';

interface SidebarProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard' as NavigationTab, label: 'Dashboard', icon: BarChart3 },
    { id: 'mood' as NavigationTab, label: 'Log Mood', icon: Heart },
    { id: 'rewards' as NavigationTab, label: 'Rewards', icon: Award },
    { id: 'suggestions' as NavigationTab, label: 'Wellness', icon: Lightbulb },
    { id: 'peers' as NavigationTab, label: 'Community', icon: Users },
    { id: 'profile' as NavigationTab, label: 'Profile', icon: User },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-white/80 backdrop-blur-xl border-r border-indigo-100 shadow-lg z-10">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">MindSpace</h1>
            <p className="text-sm text-gray-500">Your wellness journey</p>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : ''}`} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Daily Streak</p>
              <p className="text-2xl font-bold">7 days</p>
            </div>
            <div className="text-2xl">🔥</div>
          </div>
        </div>
      </div>
    </div>
  );
};