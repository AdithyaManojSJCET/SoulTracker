import React from 'react';
import { TrendingUp, Award, Target, Calendar } from 'lucide-react';

export const StatsCards: React.FC = () => {
  const stats = [
    {
      title: 'Current Streak',
      value: '7 days',
      change: '+2 from last week',
      icon: TrendingUp,
      color: 'from-green-400 to-emerald-500',
      textColor: 'text-green-600'
    },
    {
      title: 'Total Points',
      value: '2,340',
      change: '+120 this week',
      icon: Award,
      color: 'from-yellow-400 to-orange-500',
      textColor: 'text-orange-600'
    },
    {
      title: 'Weekly Goal',
      value: '5/7',
      change: '71% complete',
      icon: Target,
      color: 'from-blue-400 to-indigo-500',
      textColor: 'text-indigo-600'
    },
    {
      title: 'Total Entries',
      value: '43',
      change: 'This month',
      icon: Calendar,
      color: 'from-purple-400 to-pink-500',
      textColor: 'text-purple-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className={`text-sm ${stat.textColor} font-medium`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
            <p className="text-gray-600 text-sm">{stat.title}</p>
          </div>
        );
      })}
    </div>
  );
};