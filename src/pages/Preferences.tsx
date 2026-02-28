import { Link } from 'react-router-dom';

export default function Preferences() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display pb-20">
      <div className="max-w-md mx-auto min-h-screen bg-white dark:bg-slate-900 shadow-xl relative flex flex-col">
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 px-4 py-3 flex items-center gap-3">
          <Link to="/profile" className="p-2 -ml-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-lg font-bold">Preferences</h1>
        </header>

        <main className="flex-1 p-4 space-y-6">
          {/* Notification Preferences */}
          <section>
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Notifications</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">New Listings Alert</p>
                  <p className="text-xs text-slate-500">Get notified when new PGs are added</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Price Drops</p>
                  <p className="text-xs text-slate-500">Notify when saved properties lower rent</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </section>

          <hr className="border-slate-100 dark:border-slate-800" />

          {/* Search Preferences */}
          <section>
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Search Filters</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Max Budget</label>
                <input type="range" min="2000" max="20000" step="500" className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-primary" />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>₹2k</span>
                  <span>₹20k</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Gender</label>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800">Boys</button>
                  <button className="flex-1 py-2 rounded-lg bg-primary text-white text-sm font-medium shadow-md">Girls</button>
                  <button className="flex-1 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800">Any</button>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-slate-100 dark:border-slate-800" />

          {/* App Settings */}
          <section>
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">App Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="font-medium text-sm">Dark Mode</p>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
