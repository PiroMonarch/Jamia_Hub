import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function Profile() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-slate-100 font-display antialiased min-h-screen pb-24 selection:bg-primary-100 dark:selection:bg-primary-600/30">
      <div className="sticky top-0 z-50 flex items-center bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md px-5 py-3 justify-between border-b border-gray-200/50 dark:border-gray-800">
        <h2 className="text-xl font-bold tracking-tight text-text-main dark:text-white">Profile</h2>
        <Link to="/notifications" className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-text-main dark:text-slate-200">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-red-500 border border-white dark:border-background-dark"></span>
        </Link>
      </div>
      <main className="w-full max-w-lg mx-auto">
        <div className="px-5 pt-8 pb-6 flex flex-col items-center">
          <div className="relative mb-5 group cursor-pointer">
            <div className="size-28 rounded-full bg-gray-100 dark:bg-gray-800 p-1 ring-1 ring-gray-200 dark:ring-gray-700">
              <img alt="User profile" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDDY9qmQbg6XCsVujfbNFWgTgb34lhQUzVnOpxTZseCTD-OvxmvJ6ioy-j3qSYkTsySdBdBsuMckHcv1hQ400lg-Ytt7YkNrPibArq68xQVQ1xlFMnpdChVc_pylnrYMQ2b0jbNHqOFYigOQfpediCvtQJKzz8z0aKCcZcqR852kNQBWMRt706x15sfHtR3a4MoUnZ0Dn0bZnehzhfQFh49LCksGvMGoh87yESRTIUlvuJC4nrjuwPWNqKTLJVHaJN6YcMkodFu_w"/>
            </div>
            <div className="absolute bottom-1 right-1 bg-primary text-white p-1.5 rounded-full ring-4 ring-background-light dark:ring-background-dark shadow-sm transition-transform group-hover:scale-105">
              <span className="material-symbols-outlined text-[18px] block">edit</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-text-main dark:text-white mb-1.5 text-center">Zara Khan</h1>
          <div className="flex items-center gap-1.5 bg-blue-50/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-blue-100 dark:border-blue-800/50">
            <span className="material-symbols-outlined filled" style={{fontSize: '14px'}}>verified</span>
            Verified Student
          </div>
          <p className="text-text-muted dark:text-gray-400 text-sm text-center font-medium leading-relaxed max-w-[260px]">
            B.A. Psychology<br/>
            <span className="text-xs opacity-80 font-normal">Jamia Millia Islamia • Class of 2025</span>
          </p>
        </div>
        <div className="px-5 pb-8">
          <div className="grid grid-cols-2 gap-3">
            <Link to="/saved" className="bg-white dark:bg-surface-dark p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-card hover:shadow-md hover:border-gray-200 dark:hover:border-gray-700 transition-all group text-left">
              <div className="flex items-start justify-between mb-3">
                <div className="bg-primary-50 dark:bg-primary/20 text-primary p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined">favorite</span>
                </div>
                <span className="text-2xl font-bold text-text-main dark:text-white">12</span>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-text-main dark:text-white">Shortlist</h3>
                <p className="text-xs text-text-muted dark:text-gray-500 mt-0.5">Saved properties</p>
              </div>
            </Link>
            <Link to="/add-listing" className="bg-white dark:bg-surface-dark p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-card hover:shadow-md hover:border-gray-200 dark:hover:border-gray-700 transition-all group text-left">
              <div className="flex items-start justify-between mb-3">
                <div className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined">group</span>
                </div>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full">ACTIVE</span>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-text-main dark:text-white">Roommate Ad</h3>
                <p className="text-xs text-text-muted dark:text-gray-500 mt-0.5">Looking for flatmate</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="px-5 space-y-6 pb-6">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted dark:text-gray-500 mb-3 px-1">Property &amp; Listings</h3>
            <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200/60 dark:border-gray-800 overflow-hidden">
              <Link to="/my-listings" className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border-b border-gray-100 dark:border-gray-800 group">
                <div className="flex items-center gap-3.5">
                  <div className="text-purple-600 bg-purple-50 dark:bg-purple-900/20 p-2 rounded-lg">
                    <span className="material-symbols-outlined text-[20px]">home_work</span>
                  </div>
                  <span className="font-medium text-sm text-text-main dark:text-white">My Listings</span>
                </div>
                <span className="material-symbols-outlined text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 text-[20px] transition-colors">chevron_right</span>
              </Link>
              <Link to="/add-listing" className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-3.5">
                  <div className="text-purple-600 bg-purple-50 dark:bg-purple-900/20 p-2 rounded-lg">
                    <span className="material-symbols-outlined text-[20px]">add_business</span>
                  </div>
                  <span className="font-medium text-sm text-text-main dark:text-white">Post New Property</span>
                </div>
                <span className="material-symbols-outlined text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 text-[20px] transition-colors">chevron_right</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted dark:text-gray-500 mb-3 px-1">Settings</h3>
            <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200/60 dark:border-gray-800 overflow-hidden">
              <Link to="/account-details" className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border-b border-gray-100 dark:border-gray-800 group">
                <div className="flex items-center gap-3.5">
                  <div className="text-slate-600 dark:text-slate-400 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
                    <span className="material-symbols-outlined text-[20px]">manage_accounts</span>
                  </div>
                  <span className="font-medium text-sm text-text-main dark:text-white">Account Details</span>
                </div>
                <span className="material-symbols-outlined text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 text-[20px] transition-colors">chevron_right</span>
              </Link>
              <Link to="/preferences" className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-3.5">
                  <div className="text-slate-600 dark:text-slate-400 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
                    <span className="material-symbols-outlined text-[20px]">tune</span>
                  </div>
                  <span className="font-medium text-sm text-text-main dark:text-white">Preferences</span>
                </div>
                <span className="material-symbols-outlined text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 text-[20px] transition-colors">chevron_right</span>
              </Link>
            </div>
          </div>
          <button className="w-full group mt-8 py-3.5 px-4 rounded-xl border border-transparent hover:bg-red-50 dark:hover:bg-red-900/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-red-600 dark:text-red-400">
            <span className="material-symbols-outlined text-[20px] group-hover:-translate-x-0.5 transition-transform">logout</span>
            <span className="font-semibold text-sm">Log Out</span>
          </button>
          <div className="text-center pt-2">
            <p className="text-[10px] text-gray-400 dark:text-gray-600 font-mono">v2.4.2 (Build 205)</p>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
