import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { useState, useEffect } from 'react';
import { dataService, Roommate } from '../services/dataService';

export default function Roommates() {
  const [roommates, setRoommates] = useState<Roommate[]>([]);
  const [savedItems, setSavedItems] = useState<number[]>([]);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  useEffect(() => {
    dataService.getRoommates(selectedGender ? { gender: selectedGender } : undefined).then(setRoommates);
    dataService.getSavedItems().then((data) => {
      setSavedItems(data.filter(i => i.type === 'roommate').map(i => i.itemId));
    });
  }, [selectedGender]);

  const toggleSave = async (id: number) => {
    const res = await dataService.toggleSave(id, 'roommate');
    if (res.success) {
      if (res.action === 'added') {
        setSavedItems([...savedItems, id]);
      } else {
        setSavedItems(savedItems.filter(i => i !== id));
      }
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased min-h-screen pb-28">
      <div className="fixed top-0 left-0 right-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-all duration-300">
        <div className="px-5 pt-14 pb-4 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-0.5 block">JamiaHub</span>
            <h1 className="text-text-main dark:text-slate-100 text-2xl font-bold leading-tight tracking-tight">Find Roommates</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/filters" className="relative flex items-center justify-center rounded-full size-10 bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 text-text-main dark:text-slate-200 active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-[22px]">tune</span>
            </Link>
          </div>
        </div>
        <div className="px-5 pb-4 overflow-x-auto no-scrollbar flex gap-2.5">
          <button 
            onClick={() => setSelectedGender(null)}
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-sm transition-all active:scale-95 ${!selectedGender ? 'bg-primary text-white shadow-primary/20' : 'bg-white dark:bg-gray-800 text-slate-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700'}`}
          >
            All Profiles
          </button>
          <button 
            onClick={() => setSelectedGender('Male')}
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-sm transition-all active:scale-95 ${selectedGender === 'Male' ? 'bg-blue-600 text-white shadow-blue-600/20' : 'bg-white dark:bg-gray-800 text-slate-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700'}`}
          >
            Boys
          </button>
          <button 
            onClick={() => setSelectedGender('Female')}
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-sm transition-all active:scale-95 ${selectedGender === 'Female' ? 'bg-pink-500 text-white shadow-pink-500/20' : 'bg-white dark:bg-gray-800 text-slate-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700'}`}
          >
            Girls
          </button>
          <button className="bg-white dark:bg-gray-800 text-slate-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap active:bg-gray-50 dark:active:bg-gray-700 transition-all active:scale-95">Same Course</button>
          <button className="bg-white dark:bg-gray-800 text-slate-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap active:bg-gray-50 dark:active:bg-gray-700 transition-all active:scale-95">Jamia Nagar</button>
        </div>
      </div>
      <div className="px-5 pt-[190px] space-y-4">
        
        {roommates.map((person) => (
          <div key={person.id} className="bg-white dark:bg-gray-800 rounded-3xl p-5 shadow-card border border-gray-100 dark:border-gray-800 relative group active:scale-[0.99] transition-transform duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex gap-4">
                <div className="relative shrink-0">
                  {person.image ? (
                    <img alt={`${person.name} Profile`} className="size-14 rounded-full object-cover ring-2 ring-white dark:ring-gray-700 shadow-sm" src={person.image}/>
                  ) : (
                    <div className="size-14 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary/30 dark:to-primary/10 flex items-center justify-center text-primary-600 dark:text-primary-200 text-xl font-bold border-2 border-white dark:border-gray-700 shadow-sm">{person.initials}</div>
                  )}
                  {person.isOnline && (
                    <div className="absolute -bottom-1 -right-1 size-5 bg-green-500 rounded-full border-[3px] border-white dark:border-gray-800 flex items-center justify-center">
                      <span className="sr-only">Online</span>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{person.name}</h3>
                  <p className="text-sm text-primary font-medium mt-0.5">{person.course}, {person.year}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                    {person.age} years old
                  </p>
                </div>
              </div>
              <button onClick={() => toggleSave(person.id)} className={`transition-colors p-1 ${savedItems.includes(person.id) ? 'text-primary' : 'text-gray-400 hover:text-primary'}`}>
                <span className={`material-symbols-outlined ${savedItems.includes(person.id) ? 'filled' : ''}`}>bookmark</span>
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-primary-50 dark:bg-primary/5 rounded-xl p-3 border border-primary-100 dark:border-primary/10">
                <div className="flex items-center gap-2 text-primary-600 dark:text-primary-200 mb-1">
                  <span className="material-symbols-outlined text-lg">account_balance_wallet</span>
                  <span className="text-xs font-semibold uppercase tracking-wide">Budget</span>
                </div>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-100">{person.budget}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-3 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-1">
                  <span className="material-symbols-outlined text-lg">location_on</span>
                  <span className="text-xs font-semibold uppercase tracking-wide">Area</span>
                </div>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-100 truncate">{person.area}</p>
              </div>
            </div>

            {/* New Details Section */}
            <div className="mb-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-slate-400 text-[18px]">school</span>
                <span className="text-slate-600 dark:text-slate-300 font-medium">Study: <span className="text-slate-800 dark:text-slate-100">{person.studyHabits}</span></span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-slate-400 text-[18px]">smoke_free</span>
                <span className="text-slate-600 dark:text-slate-300 font-medium">Smoking: <span className="text-slate-800 dark:text-slate-100">{person.smokingPreference}</span></span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <span className="material-symbols-outlined text-slate-400 text-[18px] mt-0.5">sports_esports</span>
                <span className="text-slate-600 dark:text-slate-300 font-medium">Hobbies: <span className="text-slate-800 dark:text-slate-100">{person.hobbies.join(', ')}</span></span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              {person.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-600 dark:text-gray-300 text-xs font-medium rounded-full shadow-sm">{tag}</span>
              ))}
            </div>

            <div className="flex gap-3">
              <button className="flex-1 h-11 flex items-center justify-center rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-slate-700 dark:text-gray-200 font-semibold text-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                View Profile
              </button>
              <Link to="/chat" className="flex-1 h-11 flex items-center justify-center gap-2 rounded-xl bg-primary text-white font-semibold text-sm shadow-md shadow-primary/20 hover:bg-primary-600 active:bg-primary-600 transition-colors">
                <span className="material-symbols-outlined text-[18px] fill-current">chat_bubble</span>
                Message
              </Link>
            </div>
          </div>
        ))}

      </div>
      <BottomNav />
    </div>
  );
}
