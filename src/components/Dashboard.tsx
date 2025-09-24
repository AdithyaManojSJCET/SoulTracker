import React from 'react';
import { MoodChart } from './MoodChart';
import { StatsCards } from './StatsCards';
import { RecentEntries } from './RecentEntries';
import { QuickActions } from './QuickActions';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Good morning, Alex! 🌅</h1>
        <p className="text-gray-600">How are you feeling today?</p>
      </div>

      <StatsCards />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <MoodChart />
        <QuickActions />
      </div>

      <RecentEntries />
    </div>
  );
};