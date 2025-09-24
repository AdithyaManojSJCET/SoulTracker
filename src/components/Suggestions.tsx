import React, { useState } from 'react';
import { Wind, BookOpen, Music, Coffee, Headphones, PlayCircle, Clock, Star } from 'lucide-react';

export const Suggestions: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'breathing' | 'reading' | 'audio'>('breathing');

  const breathingExercises = [
    {
      id: 1,
      title: '4-7-8 Breathing',
      description: 'A simple technique to reduce anxiety and promote sleep',
      duration: '5 min',
      difficulty: 'Beginner',
      icon: Wind,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 2,
      title: 'Box Breathing',
      description: 'Used by Navy SEALs to stay calm under pressure',
      duration: '10 min',
      difficulty: 'Intermediate',
      icon: Wind,
      color: 'from-green-400 to-teal-500'
    },
    {
      id: 3,
      title: 'Mindful Breathing',
      description: 'Focus on the present moment through breath awareness',
      duration: '15 min',
      difficulty: 'Beginner',
      icon: Wind,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const readingContent = [
    {
      id: 1,
      title: 'Understanding Anxiety',
      description: 'Learn about the science behind anxiety and coping strategies',
      readTime: '8 min',
      category: 'Mental Health',
      icon: BookOpen,
      color: 'from-indigo-400 to-purple-500'
    },
    {
      id: 2,
      title: 'Building Daily Habits',
      description: 'Small changes that lead to big improvements in wellbeing',
      readTime: '6 min',
      category: 'Self-Improvement',
      icon: Coffee,
      color: 'from-amber-400 to-orange-500'
    },
    {
      id: 3,
      title: 'The Power of Gratitude',
      description: 'How practicing gratitude can transform your mindset',
      readTime: '5 min',
      category: 'Mindfulness',
      icon: Star,
      color: 'from-yellow-400 to-red-500'
    }
  ];

  const audioContent = [
    {
      id: 1,
      title: 'Morning Meditation',
      description: 'Start your day with intention and clarity',
      duration: '12 min',
      type: 'Guided Meditation',
      icon: Headphones,
      color: 'from-rose-400 to-pink-500'
    },
    {
      id: 2,
      title: 'Sleep Stories',
      description: 'Calming narratives to help you drift off peacefully',
      duration: '25 min',
      type: 'Sleep Aid',
      icon: Music,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      id: 3,
      title: 'Stress Relief Sounds',
      description: 'Nature sounds and white noise for relaxation',
      duration: '30 min',
      type: 'Ambient',
      icon: PlayCircle,
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const categories = [
    { id: 'breathing' as const, label: 'Breathing', icon: Wind, count: breathingExercises.length },
    { id: 'reading' as const, label: 'Reading', icon: BookOpen, count: readingContent.length },
    { id: 'audio' as const, label: 'Audio', icon: Headphones, count: audioContent.length }
  ];

  const getCurrentContent = () => {
    switch (activeCategory) {
      case 'breathing':
        return breathingExercises;
      case 'reading':
        return readingContent;
      case 'audio':
        return audioContent;
      default:
        return breathingExercises;
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Wellness Suggestions</h1>
        <p className="text-gray-600">Personalized content to support your mental health journey</p>
      </div>

      {/* Category Tabs */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
        <div className="flex space-x-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{category.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeCategory === category.id ? 'bg-white/20' : 'bg-gray-100'
                }`}>
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getCurrentContent().map((item: any) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                <Icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{item.duration || item.readTime}</span>
                </div>
                <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                  {item.difficulty || item.category || item.type}
                </span>
              </div>

              <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-200 group-hover:transform group-hover:scale-105">
                {activeCategory === 'breathing' ? 'Start Exercise' : 
                 activeCategory === 'reading' ? 'Read Article' : 'Play Audio'}
              </button>
            </div>
          );
        })}
      </div>

      {/* Personalized Recommendation */}
      <div className="bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <Star className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Personalized for You</h3>
            <p className="text-emerald-100">Based on your recent mood patterns</p>
          </div>
        </div>
        <p className="text-emerald-50 mb-6">
          We noticed you've been feeling a bit stressed lately. Try the "4-7-8 Breathing" exercise - it's been shown to reduce anxiety in just a few minutes.
        </p>
        <button className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:transform hover:scale-105">
          Try Recommended Exercise
        </button>
      </div>
    </div>
  );
};