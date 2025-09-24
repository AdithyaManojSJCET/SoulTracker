import React, { useState } from 'react';
import { MessageCircle, Users, Heart, Shield, Send, Plus } from 'lucide-react';

export const PeerConnect: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rooms' | 'chat'>('rooms');
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [message, setMessage] = useState('');

  const supportRooms = [
    {
      id: 1,
      name: 'Anxiety Support',
      description: 'Share experiences and coping strategies for anxiety',
      members: 24,
      online: 8,
      icon: '🤗',
      lastActivity: '2 min ago'
    },
    {
      id: 2,
      name: 'Daily Check-ins',
      description: 'Start your day by sharing how you\'re feeling',
      members: 41,
      online: 12,
      icon: '🌅',
      lastActivity: 'Just now'
    },
    {
      id: 3,
      name: 'Mindfulness Circle',
      description: 'Meditation tips, mindful moments, and peaceful discussions',
      members: 18,
      online: 5,
      icon: '🧘',
      lastActivity: '5 min ago'
    },
    {
      id: 4,
      name: 'Goal Achievers',
      description: 'Support each other in reaching personal wellness goals',
      members: 33,
      online: 9,
      icon: '🎯',
      lastActivity: '12 min ago'
    }
  ];

  const chatMessages = [
    {
      id: 1,
      user: 'MindfulSoul',
      avatar: '🌸',
      message: 'Good morning everyone! Starting the day with gratitude practice 🙏',
      time: '9:23 AM',
      likes: 5
    },
    {
      id: 2,
      user: 'CalmSeeker',
      avatar: '🌿',
      message: 'That breathing exercise from yesterday really helped with my anxiety. Thank you for sharing!',
      time: '9:45 AM',
      likes: 3
    },
    {
      id: 3,
      user: 'PositiveVibes',
      avatar: '☀️',
      message: 'Remember: it\'s okay to have difficult days. You\'re not alone in this journey.',
      time: '10:12 AM',
      likes: 8
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Peer Support Community</h1>
        <p className="text-gray-600">Connect anonymously with others on their wellness journey</p>
      </div>

      {/* Safety Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 flex items-start space-x-4">
        <Shield className="w-6 h-6 text-blue-600 mt-1" />
        <div>
          <h3 className="font-semibold text-blue-900 mb-2">Safe Space Guidelines</h3>
          <p className="text-blue-700 text-sm">
            This is an anonymous, supportive community. Please be kind, respectful, and avoid sharing personal information. 
            If you're in crisis, please contact emergency services or a crisis hotline.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-4">
        <button
          onClick={() => setActiveTab('rooms')}
          className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-200 ${
            activeTab === 'rooms'
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
              : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-200'
          }`}
        >
          <Users className="w-5 h-5" />
          <span className="font-medium">Support Rooms</span>
        </button>
        <button
          onClick={() => setActiveTab('chat')}
          className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-200 ${
            activeTab === 'chat'
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
              : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-200'
          }`}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">Active Chat</span>
        </button>
      </div>

      {/* Support Rooms Tab */}
      {activeTab === 'rooms' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Available Support Rooms</h2>
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Create Room</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportRooms.map((room) => (
              <div
                key={room.id}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedRoom(room.id);
                  setActiveTab('chat');
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{room.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{room.name}</h3>
                      <p className="text-gray-600 text-sm">{room.description}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span>{room.members} members</span>
                    <span className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>{room.online} online</span>
                    </span>
                  </div>
                  <span>Active {room.lastActivity}</span>
                </div>

                <div className="mt-4">
                  <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-200">
                    Join Conversation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Chat Tab */}
      {activeTab === 'chat' && (
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">🌅</div>
                <div>
                  <h3 className="text-xl font-bold">Daily Check-ins</h3>
                  <p className="text-indigo-100 text-sm">12 members online</p>
                </div>
              </div>
              <button
                onClick={() => setActiveTab('rooms')}
                className="text-indigo-100 hover:text-white"
              >
                Leave Room
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-6 space-y-4 h-96 overflow-y-auto">
            {chatMessages.map((msg) => (
              <div key={msg.id} className="flex items-start space-x-3">
                <div className="text-2xl">{msg.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-gray-800">{msg.user}</span>
                    <span className="text-xs text-gray-500">{msg.time}</span>
                  </div>
                  <p className="text-gray-700 bg-gray-50 rounded-lg p-3">{msg.message}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-500">
                      <Heart className="w-4 h-4" />
                      <span>{msg.likes}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-200 p-6">
            <div className="flex space-x-4">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your thoughts with the community..."
                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
                onClick={() => setMessage('')}
              >
                <Send className="w-5 h-5" />
                <span>Send</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};