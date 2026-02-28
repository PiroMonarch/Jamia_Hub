import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { dataService, CompareItem, PG } from '../services/dataService';

export default function Compare() {
  const [compareItems, setCompareItems] = useState<CompareItem[]>([]);
  const [pgs, setPgs] = useState<PG[]>([]);

  useEffect(() => {
    Promise.all([
      dataService.getCompareItems(),
      dataService.getPgs()
    ]).then(([compareData, pgsData]) => {
      setCompareItems(compareData);
      setPgs(pgsData);
    });
  }, []);

  const removeCompare = async (itemId: number, type: 'pg' | 'roommate') => {
    const res = await dataService.toggleCompare(itemId, type);
    if (res.success && res.action === 'removed') {
      setCompareItems(prev => prev.filter(i => !(i.itemId === itemId && i.type === type)));
    }
  };

  const selectedPgs = compareItems
    .filter(item => item.type === 'pg')
    .map(item => pgs.find(p => p.id === item.itemId))
    .filter((p): p is PG => !!p);

  if (selectedPgs.length === 0) {
    return (
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display pb-20 flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-3xl text-slate-400">compare_arrows</span>
        </div>
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">No items to compare</h3>
        <p className="text-sm text-slate-500 mt-1 mb-4">Add properties to compare them side by side.</p>
        <Link to="/" className="text-primary font-semibold text-sm hover:underline">Browse Properties</Link>
        <Link to="/saved" className="mt-4 text-sm font-semibold text-slate-500 hover:text-slate-700">Go to Saved</Link>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display pb-20">
      {/* Fixed Main Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 px-4 pt-14 pb-3 flex items-center gap-3 shadow-sm h-[96px]">
        <Link to="/saved" className="p-2 -ml-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="text-lg font-bold">Compare Properties</h1>
      </header>

      {/* Fixed Property Columns Header */}
      <div className="fixed top-[96px] left-0 right-0 z-40 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-3 grid gap-3 items-end h-[160px]" style={{ gridTemplateColumns: `40px repeat(${selectedPgs.length}, 1fr)` }}>
        <div className="flex items-center justify-center pb-6">
          <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-300">VS</span>
          </div>
        </div>
        {selectedPgs.map(pg => (
          <div key={pg.id} className="text-center flex flex-col items-center relative group">
            <button onClick={() => removeCompare(pg.id, 'pg')} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-[14px]">close</span>
            </button>
            <div className="relative size-20 rounded-xl overflow-hidden mb-2 shadow-sm border border-white dark:border-slate-700">
              <img className="w-full h-full object-cover" src={pg.image} alt={pg.name} />
            </div>
            <h3 className="text-xs font-bold leading-tight line-clamp-2 w-full px-1 h-8 flex items-center justify-center">{pg.name}</h3>
          </div>
        ))}
      </div>

      {/* Scrollable Comparison Rows */}
      <main className="pt-[256px] pb-8">
        
        {/* Price Row */}
        <div className="grid gap-3 px-4 py-4 border-b border-slate-100 dark:border-slate-800 items-center bg-white dark:bg-slate-900" style={{ gridTemplateColumns: `40px repeat(${selectedPgs.length}, 1fr)` }}>
          <div className="flex justify-center text-slate-400">
            <span className="material-symbols-outlined">payments</span>
          </div>
          {selectedPgs.map(pg => (
            <div key={pg.id} className="text-center font-bold text-primary text-sm">₹{pg.price.toLocaleString()}<span className="text-[10px] text-slate-400 font-normal">/mo</span></div>
          ))}
        </div>

        {/* Location Row */}
        <div className="grid gap-3 px-4 py-4 border-b border-slate-100 dark:border-slate-800 items-center bg-slate-50 dark:bg-slate-800/30" style={{ gridTemplateColumns: `40px repeat(${selectedPgs.length}, 1fr)` }}>
          <div className="flex justify-center text-slate-400">
            <span className="material-symbols-outlined">location_on</span>
          </div>
          {selectedPgs.map(pg => (
            <div key={pg.id} className="text-center text-xs font-medium text-slate-700 dark:text-slate-300">{pg.location}</div>
          ))}
        </div>

        {/* Distance Row */}
        <div className="grid gap-3 px-4 py-4 border-b border-slate-100 dark:border-slate-800 items-center bg-white dark:bg-slate-900" style={{ gridTemplateColumns: `40px repeat(${selectedPgs.length}, 1fr)` }}>
          <div className="flex justify-center text-slate-400">
            <span className="material-symbols-outlined">directions_walk</span>
          </div>
          {selectedPgs.map(pg => (
            <div key={pg.id} className="text-center text-sm font-medium text-slate-700 dark:text-slate-300">{pg.distance}</div>
          ))}
        </div>

        {/* WiFi Row (Mock Data for now as DB doesn't have it) */}
        <div className="grid gap-3 px-4 py-4 border-b border-slate-100 dark:border-slate-800 items-center bg-slate-50 dark:bg-slate-800/30" style={{ gridTemplateColumns: `40px repeat(${selectedPgs.length}, 1fr)` }}>
          <div className="flex justify-center text-slate-400">
            <span className="material-symbols-outlined">wifi</span>
          </div>
          {selectedPgs.map(pg => (
            <div key={pg.id} className="flex justify-center text-green-500">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid gap-3 px-4 py-6 items-center bg-white dark:bg-slate-900" style={{ gridTemplateColumns: `40px repeat(${selectedPgs.length}, 1fr)` }}>
          <div className="flex justify-center text-slate-400">
          </div>
          {selectedPgs.map(pg => (
            <button key={pg.id} className="w-full bg-primary text-white py-2.5 rounded-xl text-xs font-bold shadow-md shadow-primary/20 active:scale-95 transition-transform">
              Book
            </button>
          ))}
        </div>

      </main>
    </div>
  );
}
