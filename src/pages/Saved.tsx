import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { useState, useEffect } from 'react';
import { dataService, SavedItem, PG, Roommate } from '../services/dataService';

export default function Saved() {
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);
  const [pgs, setPgs] = useState<PG[]>([]);
  const [roommates, setRoommates] = useState<Roommate[]>([]);

  useEffect(() => {
    Promise.all([
      dataService.getSavedItems(),
      dataService.getPgs(),
      dataService.getRoommates()
    ]).then(([savedData, pgsData, roommatesData]) => {
      setSavedItems(savedData);
      setPgs(pgsData);
      setRoommates(roommatesData);
    });
  }, []);

  const toggleSave = async (id: number, type: 'pg' | 'roommate') => {
    const res = await dataService.toggleSave(id, type);
    if (res.success) {
      if (res.action === 'removed') {
        setSavedItems(prev => prev.filter(i => !(i.itemId === id && i.type === type)));
      }
    }
  };

  const savedPgs = savedItems
    .filter(item => item.type === 'pg')
    .map(item => pgs.find(p => p.id === item.itemId))
    .filter((p): p is PG => !!p);

  const savedRoommates = savedItems
    .filter(item => item.type === 'roommate')
    .map(item => roommates.find(r => r.id === item.itemId))
    .filter((r): r is Roommate => !!r);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display pb-20">
      <div className="max-w-md mx-auto min-h-screen bg-white dark:bg-slate-900 shadow-xl relative flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold">Saved</h1>
          <Link to="/compare" className="text-sm font-semibold text-primary hover:text-primary/80">Compare</Link>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 space-y-6">
          {savedPgs.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Properties</h2>
              {savedPgs.map(pg => (
                <div key={pg.id} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden shadow-sm flex">
                  <div className="w-32 h-32 relative shrink-0">
                    <img className="w-full h-full object-cover" src={pg.image} alt={pg.name} />
                    {pg.tags.includes('Trusted') && (
                      <div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-1.5 py-0.5 rounded text-[10px] font-bold text-primary uppercase tracking-wide">Trusted</div>
                    )}
                  </div>
                  <div className="p-3 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-sm line-clamp-1">{pg.name}</h3>
                        <button onClick={() => toggleSave(pg.id, 'pg')} className="text-red-500 hover:text-red-600">
                          <span className="material-symbols-outlined text-[20px] filled">favorite</span>
                        </button>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{pg.location} • {pg.distance}</p>
                    </div>
                    <div className="flex justify-between items-end mt-2">
                      <p className="text-primary font-bold">₹{pg.price.toLocaleString()}<span className="text-[10px] text-slate-400 font-normal">/mo</span></p>
                      <Link to={`/property/${pg.id}`} className="text-xs font-semibold bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 px-3 py-1.5 rounded-full transition-colors">View</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {savedRoommates.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Roommates</h2>
              {savedRoommates.map(person => (
                <div key={person.id} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden shadow-sm flex p-3 gap-3">
                  <div className="relative shrink-0">
                    {person.image ? (
                      <img alt={person.name} className="size-14 rounded-full object-cover" src={person.image}/>
                    ) : (
                      <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">{person.initials}</div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-sm">{person.name}</h3>
                        <p className="text-xs text-slate-500">{person.course}, {person.year}</p>
                      </div>
                      <button onClick={() => toggleSave(person.id, 'roommate')} className="text-primary hover:text-primary/80">
                        <span className="material-symbols-outlined text-[20px] filled">bookmark</span>
                      </button>
                    </div>
                    <div className="mt-2 flex justify-between items-end">
                      <p className="text-xs font-medium text-slate-600 dark:text-slate-300">{person.budget}</p>
                      <Link to="/chat" className="text-xs font-semibold bg-primary text-white px-3 py-1.5 rounded-full shadow-sm shadow-primary/20">Message</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {savedPgs.length === 0 && savedRoommates.length === 0 && (
            <div className="flex flex-col items-center justify-center h-64 text-center p-4">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-3xl text-slate-400">favorite_border</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">No saved items yet</h3>
              <p className="text-sm text-slate-500 mt-1">Items you save will appear here for quick access.</p>
              <Link to="/" className="mt-4 text-primary font-semibold text-sm hover:underline">Browse Properties</Link>
            </div>
          )}
        </main>
        <BottomNav />
      </div>
    </div>
  );
}
