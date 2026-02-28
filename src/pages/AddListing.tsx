import { Link } from 'react-router-dom';

export default function AddListing() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-white dark:bg-background-dark shadow-2xl">
        <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-background-dark sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800/60">
          <Link to="/profile" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors active:scale-95">
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </Link>
          <h2 className="text-[17px] font-semibold text-slate-900 dark:text-white text-center">Add New Listing</h2>
          <div className="w-10"></div> 
        </div>
        <div className="px-6 py-5 bg-white dark:bg-background-dark">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">Step 1 of 3</span>
            <span className="text-xs font-medium text-slate-400">Basic Details</span>
          </div>
          <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex">
            <div className="h-full bg-primary w-1/3 rounded-full relative">
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>
            </div>
          </div>
        </div>
        <div className="flex-1 px-6 pb-32 pt-2 bg-white dark:bg-background-dark">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">Tell us about your property</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Help students find the perfect stay. Start with the core details.</p>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Property Type</label>
              <div className="grid grid-cols-2 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-[14px]">
                <label className="cursor-pointer">
                  <input defaultChecked className="peer sr-only" name="type" type="radio"/>
                  <div className="flex items-center justify-center gap-2 py-2.5 rounded-[10px] text-sm font-medium text-slate-500 dark:text-slate-400 transition-all peer-checked:bg-white dark:peer-checked:bg-slate-700 peer-checked:text-primary dark:peer-checked:text-white peer-checked:shadow-sm">
                    <span className="material-symbols-outlined text-[20px] fill-current">home_work</span>
                    PG / Hostel
                  </div>
                </label>
                <label className="cursor-pointer">
                  <input className="peer sr-only" name="type" type="radio"/>
                  <div className="flex items-center justify-center gap-2 py-2.5 rounded-[10px] text-sm font-medium text-slate-500 dark:text-slate-400 transition-all peer-checked:bg-white dark:peer-checked:bg-slate-700 peer-checked:text-primary dark:peer-checked:text-white peer-checked:shadow-sm">
                    <span className="material-symbols-outlined text-[20px] fill-current">restaurant</span>
                    Mess
                  </div>
                </label>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Property Name</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">apartment</span>
                </div>
                <input className="block w-full rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 pl-11 pr-4 py-3.5 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-input text-[15px]" placeholder="e.g. Jamia Boys Hostel" type="text"/>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Full Address</label>
              <div className="relative group">
                <div className="absolute top-3.5 left-0 pl-3.5 flex items-start pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <textarea className="block w-full rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 pl-11 pr-4 py-3.5 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-input resize-none min-h-[96px] text-[15px]" placeholder="House No, Street, Locality (e.g. Batla House)"></textarea>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Monthly Rent</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">currency_rupee</span>
                </div>
                <input className="block w-full rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 pl-11 pr-16 py-3.5 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-input text-[15px]" placeholder="5000" type="number"/>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <span className="text-xs font-medium text-slate-500 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">/ month</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 px-1">Average rent for a single person sharing</p>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-background-dark/90 backdrop-blur-lg border-t border-slate-100 dark:border-slate-800 z-30 max-w-md mx-auto">
          <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold text-[15px] h-12 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-all active:scale-[0.98]">
            <span>Next Step</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}
