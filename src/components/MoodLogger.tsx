import React, { useState } from 'react';
import { Heart, Mic, PenTool, Send } from 'lucide-react';

export const MoodLogger: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [journalText, setJournalText] = useState('');
  const [logType, setLogType] = useState<'emoji' | 'text' | 'voice'>('emoji');

  const moods = [
    { value: 1, emoji: '😢', label: 'Very Sad', color: 'from-red-400 to-pink-500' },
    { value: 2, emoji: '😔', label: 'Sad', color: 'from-orange-400 to-red-400' },
    { value: 3, emoji: '😐', label: 'Neutral', color: 'from-yellow-400 to-orange-400' },
    { value: 4, emoji: '😊', label: 'Happy', color: 'from-green-400 to-yellow-400' },
    { value: 5, emoji: '😄', label: 'Very Happy', color: 'from-blue-400 to-green-400' }
  ];

  const handleSubmit = () => {
    console.log('Mood logged:', { mood: selectedMood, text: journalText, type: logType });
    // Reset form
    setSelectedMood(null);
    setJournalText('');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">How are you feeling?</h1>
        <p className="text-gray-600">Take a moment to check in with yourself</p>
      </div>

      {/* Log Type Selection */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Choose your log type</h2>
        <div className="flex space-x-4">
          {[
            { type: 'emoji' as const, icon: Heart, label: 'Mood & Emoji' },
            { type: 'text' as const, icon: PenTool, label: 'Text Journal' },
            { type: 'voice' as const, icon: Mic, label: 'Voice Note' }
          ].map(({ type, icon: Icon, label }) => (
            <button
              key={type}
              onClick={() => setLogType(type)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-200 ${
                logType === type
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-indigo-50 border border-gray-200'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mood Selection */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Select your mood</h2>
        <div className="flex justify-between space-x-4">
          {moods.map((mood) => (
            <button
              key={mood.value}
              onClick={() => setSelectedMood(mood.value)}
              className={`relative flex flex-col items-center p-6 rounded-2xl transition-all duration-300 ${
                selectedMood === mood.value
                  ? 'transform scale-110 shadow-xl'
                  : 'hover:transform hover:scale-105'
              }`}
            >
              <div
                className={`w-20 h-20 bg-gradient-to-r ${mood.color} rounded-full flex items-center justify-center text-3xl shadow-lg mb-3 ${
                  selectedMood === mood.value ? 'ring-4 ring-white ring-opacity-50' : ''
                }`}
              >
                {mood.emoji}
              </div>
              <span className="text-sm font-medium text-gray-700">{mood.label}</span>
              {selectedMood === mood.value && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Text Journal */}
      {logType === 'text' && (
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <h2 className="text-xl font-bold text-gray-800 mb-4">What's on your mind?</h2>
          <textarea
            value={journalText}
            onChange={(e) => setJournalText(e.target.value)}
            placeholder="Write about your day, feelings, thoughts, or anything else..."
            className="w-full h-40 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
          />
          <div className="mt-2 text-right text-sm text-gray-500">
            {journalText.length} characters
          </div>
        </div>
      )}

      {/* Voice Note */}
      {logType === 'voice' && (
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Record a voice note</h2>
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Mic className="w-12 h-12 text-white" />
            </div>
            <button className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
              Start Recording
            </button>
            <p className="text-gray-500 text-sm mt-4">Tap to start recording your thoughts</p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          disabled={!selectedMood}
          className={`flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-200 ${
            selectedMood
              ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:shadow-xl hover:transform hover:scale-105'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <Send className="w-5 h-5" />
          <span>Log Entry</span>
        </button>
      </div>
    </div>
  );
};