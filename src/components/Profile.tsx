import React from 'react';
import { User, Calendar, TrendingUp, Award, Settings, Bell, Shield, Download } from 'lucide-react';

export const Profile: React.FC = () => {
  const profileStats = [
    { label: 'Days Active', value: '43', change: '+5 this week' },
    { label: 'Total Entries', value: '127', change: '+12 this week' },
    { label: 'Average Mood', value: '3.8/5', change: '+0.3 this month' },
    { label: 'Streak Record', value: '14 days', change: 'Personal best' }
  ];

  const recentAchievements = [
    { name: 'Week Warrior', date: 'Today', icon: '🏆' },
    { name: 'Mindful Master', date: '2 days ago', icon: '🧘' },
    { name: 'First Steps', date: '1 week ago', icon: '⭐' }
  ];

  const moodHistory = [
    { month: 'January', average: 3.2 },
    { month: 'February', average: 3.5 },
    { month: 'March', average: 3.8 },
    { month: 'April', average: 4.1 },
    { month: 'May', average: 3.9 }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Profile</h1>
        <p className="text-gray-600">Track your wellness journey and manage your settings</p>
      </div>

      {/* Profile Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Alex Johnson</h2>
            <p className="text-indigo-100 mb-2">Member since March 2024</p>
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>43 days active</span>
              </span>
              <span className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4" />
                <span>7 day streak</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {profileStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
            <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
            <p className="text-green-600 text-xs">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Achievements */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="w-6 h-6 text-indigo-600" />
            <h2 className="text-xl font-bold text-gray-800">Recent Achievements</h2>
          </div>
          <div className="space-y-4">
            {recentAchievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-100">
                <div className="text-2xl">{achievement.icon}</div>
                <div>
                  <p className="font-semibold text-gray-800">{achievement.name}</p>
                  <p className="text-sm text-gray-600">Earned {achievement.date}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-3 text-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors">
            View All Achievements
          </button>
        </div>

        {/* Mood Trend */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="w-6 h-6 text-indigo-600" />
            <h2 className="text-xl font-bold text-gray-800">Mood Trend</h2>
          </div>
          <div className="space-y-4">
            {moodHistory.map((month, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-16 text-sm font-medium text-gray-600">{month.month}</div>
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-indigo-400 to-purple-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${(month.average / 5) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="w-12 text-sm font-medium text-gray-600">{month.average}/5</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Settings Section */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
        <div className="flex items-center space-x-3 mb-6">
          <Settings className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-bold text-gray-800">Settings & Preferences</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800 mb-3">Notifications</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" defaultChecked className="rounded text-indigo-600" />
                <span className="text-gray-700">Daily mood reminders</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" defaultChecked className="rounded text-indigo-600" />
                <span className="text-gray-700">Achievement notifications</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="rounded text-indigo-600" />
                <span className="text-gray-700">Community updates</span>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800 mb-3">Privacy</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" defaultChecked className="rounded text-indigo-600" />
                <span className="text-gray-700">Anonymous community participation</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" defaultChecked className="rounded text-indigo-600" />
                <span className="text-gray-700">Data encryption</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-200">
            <Download className="w-5 h-5" />
            <span>Export Data</span>
          </button>
          <button className="flex items-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-200">
            <Shield className="w-5 h-5" />
            <span>Privacy Settings</span>
          </button>
          <button className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-200">
            <Bell className="w-5 h-5" />
            <span>Notification Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};