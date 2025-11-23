import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';
import MealPlanner from './components/MealPlanner';
import WorkoutPlanner from './components/WorkoutPlanner';
import AiAssistant from './components/AiAssistant';
import { UserProfile } from './types';
import { User } from 'lucide-react';

const App: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Basic persistence
  useEffect(() => {
    const saved = localStorage.getItem('smartfit_profile');
    if (saved) {
      try {
        setProfile(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved profile");
      }
    }
  }, []);

  const handleOnboardingComplete = (newProfile: UserProfile) => {
    setProfile(newProfile);
    localStorage.setItem('smartfit_profile', JSON.stringify(newProfile));
  };

  const handleLogout = () => {
    setProfile(null);
    localStorage.removeItem('smartfit_profile');
  };

  // Profile View Component (Simple Read-only view for this demo)
  const ProfileView = ({ data }: { data: UserProfile }) => (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm p-8 border border-slate-100">
      <div className="flex flex-col items-center mb-6">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
          <User className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">{data.name}</h2>
        <p className="text-slate-500">{data.age}岁 • {data.gender === 'Male' ? '男' : '女'}</p>
      </div>
      
      <div className="space-y-4 border-t border-slate-100 pt-6">
        <div className="flex justify-between">
          <span className="text-slate-500">身高</span>
          <span className="font-medium text-slate-800">{data.height} cm</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500">当前体重</span>
          <span className="font-medium text-slate-800">{data.weight} kg</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500">目标体重</span>
          <span className="font-medium text-slate-800">{data.targetWeight} kg</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500">活动量</span>
          <span className="font-medium text-slate-800 text-right">{data.activityLevel}</span>
        </div>
        {data.dietaryRestrictions && (
          <div className="flex justify-between">
            <span className="text-slate-500">饮食禁忌</span>
            <span className="font-medium text-slate-800 text-right">{data.dietaryRestrictions}</span>
          </div>
        )}
      </div>

      <button 
        onClick={handleLogout}
        className="mt-8 w-full border border-red-200 text-red-600 py-2 rounded-lg hover:bg-red-50 transition-colors"
      >
        退出登录 / 重置数据
      </button>
    </div>
  );

  if (!profile) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'dashboard' && <Dashboard profile={profile} />}
      {activeTab === 'meals' && <MealPlanner profile={profile} />}
      {activeTab === 'workouts' && <WorkoutPlanner profile={profile} />}
      {activeTab === 'chat' && <AiAssistant profile={profile} />}
      {activeTab === 'profile' && <ProfileView data={profile} />}
    </Layout>
  );
};

export default App;