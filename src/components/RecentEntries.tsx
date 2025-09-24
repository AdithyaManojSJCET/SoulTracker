import React from 'react';
import { Calendar, MessageCircle, Mic } from 'lucide-react';

export const RecentEntries: React.FC = () => {
  const entries = [
    {
      id: 1,
      type: 'mood',
      emoji: '😊',
      content: 'Feeling great after morning meditation',
      time: '2 hours ago',
      icon: MessageCircle
    },
    {
      id: 2,
      type: 'voice',
      emoji: '🎤',
      content: 'Voice note about work stress',
      time: '1 day ago',
      icon: Mic
    },
    {
      id: 3,
      type: 'journal',
      emoji: '📝',
      content: 'Grateful for family time on weekend',
      time: '2 days ago',
      icon: MessageCircle
    }
  ];

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
      <div className="flex items-center space-x-3 mb-6">
        <Calendar className="w-6 h-6 text-indigo-600" />
        <h2 className="text-xl font-bold text-gray-800">Recent Entries</h2>
      </div>

      <div className="space-y-4">
        {entries.map((entry) => {
          const Icon = entry.icon;
          return (
            <div
              key={entry.id}
              className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="text-2xl">{entry.emoji}</div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <Icon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500 capitalize">{entry.type} entry</span>
                </div>
                <p className="text-gray-800 font-medium">{entry.content}</p>
                <p className="text-sm text-gray-500 mt-1">{entry.time}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-4 py-3 text-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors">
        View All Entries
      </button>
    </div>
  );
};