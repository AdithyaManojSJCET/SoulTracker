import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { MoodLogger } from './components/MoodLogger';
import { Rewards } from './components/Rewards';
import { Suggestions } from './components/Suggestions';
import { PeerConnect } from './components/PeerConnect';
import { Profile } from './components/Profile';

export type NavigationTab = 'dashboard' | 'mood' | 'rewards' | 'suggestions' | 'peers' | 'profile';

function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'mood':
        return <MoodLogger />;
      case 'rewards':
        return <Rewards />;
      case 'suggestions':
        return <Suggestions />;
      case 'peers':
        return <PeerConnect />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 ml-64">
          <div className="p-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;