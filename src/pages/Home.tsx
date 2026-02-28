import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import React, { useState, useEffect } from 'react';
import { dataService, PG } from '../services/dataService';

export default function Home() {
  const [pgs, setPgs] = useState<PG[]>([]);
  const [savedItems, setSavedItems] = useState<number[]>([]);
  const [compareItems, setCompareItems] = useState<number[]>([]);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  useEffect(() => {
    dataService.getPgs(selectedGender ? { gender: selectedGender } : undefined).then(setPgs);
    dataService.getSavedItems().then((data) => {
      setSavedItems(data.filter(i => i.type === 'pg').map(i => i.itemId));
    });
    dataService.getCompareItems().then((data) => {
      setCompareItems(data.filter(i => i.type === 'pg').map(i => i.itemId));
    });
  }, [selectedGender]);

  const toggleSave = async (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    e.stopPropagation();
    const res = await dataService.toggleSave(id, 'pg');
    if (res.success) {
      if (res.action === 'added') {
        setSavedItems([...savedItems, id]);
      } else {
        setSavedItems(savedItems.filter(i => i !== id));
      }
    }
  };

  const toggleCompare = async (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    e.stopPropagation();
    const res = await dataService.toggleCompare(id, 'pg');
    if (res.success) {
      if (res.action === 'added') {
        setCompareItems([...compareItems, id]);
      } else {
        setCompareItems(compareItems.filter(i => i !== id));
      }
    } else {
      alert(res.error || 'Max 3 items allowed for comparison');
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased min-h-screen pb-20">
      <div className="max-w-md mx-auto min-h-screen flex flex-col bg-white dark:bg-slate-900 shadow-xl relative">
        {/* Top Branding Section */}
        <header className="pt-14 px-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <span className="material-symbols-outlined text-3xl font-bold">hub</span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 font-display">
                Jamia<span className="text-slate-800 dark:text-white">Hub</span>
              </h1>
            </div>
            <Link to="/notifications" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors relative border border-slate-100 dark:border-slate-700 shadow-sm">
              <span className="material-symbols-outlined text-xl">notifications</span>
              <span className="absolute top-3 right-3.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse"></span>
            </Link>
          </div>
          {/* Search Bar (12px rounded) */}
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
            <input className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-4 pl-12 pr-4 text-base focus:ring-2 focus:ring-primary/20 placeholder:text-slate-500 transition-all shadow-inner" placeholder="Search PGs nearby" type="text"/>
          </div>

          {/* Gender Filters */}
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
            <button 
              onClick={() => setSelectedGender(null)}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all shadow-sm ${!selectedGender ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700'}`}
            >
              All
            </button>
            <button 
              onClick={() => setSelectedGender('Boys')}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all shadow-sm ${selectedGender === 'Boys' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700'}`}
            >
              Boys
            </button>
            <button 
              onClick={() => setSelectedGender('Girls')}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all shadow-sm ${selectedGender === 'Girls' ? 'bg-pink-500 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700'}`}
            >
              Girls
            </button>
            <button 
              onClick={() => setSelectedGender('Co-ed')}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all shadow-sm ${selectedGender === 'Co-ed' ? 'bg-purple-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700'}`}
            >
              Co-ed
            </button>
          </div>
        </header>
        {/* Feed Section */}
        <main className="flex-1 px-4 pt-6 pb-24 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
              Nearby Listings
            </h2>
            <button className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors">See All</button>
          </div>
          
          {/* Listing Stack */}
          <div className="space-y-4">
            {pgs.map(pg => (
              <Link to={`/property/${pg.id}`} key={pg.id} className="block group bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative h-48 w-full overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={pg.name} src={pg.image}/>
                  {pg.tags.includes('Trusted') && (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                      <span className="material-symbols-outlined text-primary text-sm !fill-1">verified</span>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Trusted</span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 flex gap-2">
                    <div onClick={(e) => toggleCompare(e, pg.id)} className={`w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center cursor-pointer transition-colors ${compareItems.includes(pg.id) ? 'bg-primary text-white' : 'bg-white/20 text-white hover:bg-white/30'}`}>
                      <span className="material-symbols-outlined text-lg">compare_arrows</span>
                    </div>
                    <div onClick={(e) => toggleSave(e, pg.id)} className={`w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center cursor-pointer transition-colors ${savedItems.includes(pg.id) ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'}`}>
                      <span className={`material-symbols-outlined text-lg ${savedItems.includes(pg.id) ? 'filled' : ''}`}>favorite</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">{pg.name}</h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        {pg.location}, {pg.distance}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary font-bold">₹{pg.price.toLocaleString()}<span className="text-[10px] text-slate-400 font-normal">/mo</span></p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
        <BottomNav />
      </div>
    </div>
  );
}
