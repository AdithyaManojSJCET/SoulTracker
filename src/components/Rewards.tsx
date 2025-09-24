import React from 'react';
import { Trophy, Star, Target, Zap, Crown, Medal } from 'lucide-react';

export const Rewards: React.FC = () => {
  const badges = [
    {
      id: 1,
      name: 'First Steps',
      description: 'Complete your first mood log',
      icon: Star,
      earned: true,
      color: 'from-yellow-400 to-orange-500',
      earnedDate: '2 days ago'
    },
    {
      id: 2,
      name: 'Week Warrior',
      description: 'Log mood for 7 consecutive days',
      icon: Trophy,
      earned: true,
      color: 'from-blue-400 to-indigo-500',
      earnedDate: 'Today'
    },
    {
      id: 3,
      name: 'Mindful Master',
      description: 'Complete 10 breathing exercises',
      icon: Target,
      earned: false,
      color: 'from-green-400 to-teal-500',
      progress: 7
    },
    {
      id: 4,
      name: 'Consistency Champion',
      description: 'Log mood for 30 consecutive days',
      icon: Zap,
      earned: false,
      color: 'from-purple-400 to-pink-500',
      progress: 7
    },
    {
      id: 5,
      name: 'Community Helper',
      description: 'Help 5 community members',
      icon: Crown,
      earned: false,
      color: 'from-red-400 to-pink-500',
      progress: 2
    },
    {
      id: 6,
      name: 'Reflection Master',
      description: 'Write 50 journal entries',
      icon: Medal,
      earned: false,
      color: 'from-indigo-400 to-purple-500',
      progress: 12
    }
  ];

  const currentPoints = 2340;
  const nextMilestone = 2500;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Rewards & Achievements</h1>
        <p className="text-gray-600">Celebrate your wellness journey milestones</p>
      </div>

      {/* Points Overview */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold">{currentPoints.toLocaleString()}</h2>
            <p className="text-indigo-100">Total Points Earned</p>
          </div>
          <div className="text-right">
            <p className="text-indigo-100">Next milestone in</p>
            <p className="text-2xl font-bold">{nextMilestone - currentPoints} points</p>
          </div>
        </div>
        
        <div className="bg-white/20 rounded-full h-3 overflow-hidden">
          <div
            className="bg-white h-full rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${(currentPoints / nextMilestone) * 100}%` }}
          />
        </div>
        
        <div className="flex justify-between text-sm text-indigo-100 mt-2">
          <span>0</span>
          <span>{nextMilestone.toLocaleString()}</span>
        </div>
      </div>

      {/* Badges Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.id}
                className={`relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 transition-all duration-300 ${
                  badge.earned ? 'transform hover:scale-105' : 'opacity-75'
                }`}
              >
                {badge.earned && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                )}

                <div className={`w-16 h-16 bg-gradient-to-r ${badge.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg ${!badge.earned && 'grayscale'}`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">{badge.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{badge.description}</p>

                {badge.earned ? (
                  <div className="text-green-600 font-medium text-sm">
                    ✓ Earned {badge.earnedDate}
                  </div>
                ) : (
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span>{badge.progress}/10</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${badge.color} h-full rounded-full transition-all duration-500`}
                        style={{ width: `${((badge.progress || 0) / 10) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Leaderboard Preview */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Weekly Leaderboard</h2>
        <div className="space-y-4">
          {[
            { rank: 1, name: 'You', points: 420, avatar: '🎯' },
            { rank: 2, name: 'MindfulUser', points: 385, avatar: '🌟' },
            { rank: 3, name: 'WellnessWarrior', points: 362, avatar: '🧘' },
            { rank: 4, name: 'PositiveVibes', points: 340, avatar: '☀️' },
            { rank: 5, name: 'CalmSeeker', points: 315, avatar: '🌿' }
          ].map((user) => (
            <div key={user.rank} className="flex items-center space-x-4 p-4 bg-white rounded-xl">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                user.rank === 1 ? 'bg-yellow-500' : user.rank === 2 ? 'bg-gray-400' : user.rank === 3 ? 'bg-amber-600' : 'bg-gray-300'
              }`}>
                {user.rank}
              </div>
              <div className="text-2xl">{user.avatar}</div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{user.name}</p>
                <p className="text-sm text-gray-600">{user.points} points this week</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};