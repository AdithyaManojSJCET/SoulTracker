import React from 'react';
import { BarChart3 } from 'lucide-react';

export const MoodChart: React.FC = () => {
  const moodData = [
    { day: 'Mon', mood: 4, emoji: '😊' },
    { day: 'Tue', mood: 3, emoji: '😐' },
    { day: 'Wed', mood: 5, emoji: '😄' },
    { day: 'Thu', mood: 4, emoji: '😊' },
    { day: 'Fri', mood: 2, emoji: '😔' },
    { day: 'Sat', mood: 5, emoji: '😄' },
    { day: 'Sun', mood: 4, emoji: '😊' }
  ];

  const maxMood = 5;

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
      <div className="flex items-center space-x-3 mb-6">
        <BarChart3 className="w-6 h-6 text-indigo-600" />
        <h2 className="text-xl font-bold text-gray-800">Weekly Mood Trend</h2>
      </div>

      <div className="space-y-4">
        {moodData.map((day, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-10 text-sm font-medium text-gray-600">{day.day}</div>
            <div className="flex-1">
              <div className="bg-gray-100 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-indigo-400 to-purple-500 h-full rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(day.mood / maxMood) * 100}%` }}
                />
              </div>
            </div>
            <div className="text-2xl">{day.emoji}</div>
            <div className="w-8 text-sm font-medium text-gray-600">{day.mood}/5</div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-green-600">Great progress!</span> Your average mood this week is 3.9/5
        </p>
      </div>
    </div>
  );
};