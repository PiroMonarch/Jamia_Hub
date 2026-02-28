import { Link } from 'react-router-dom';

export default function AccountDetails() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display pb-20">
      <div className="max-w-md mx-auto min-h-screen bg-white dark:bg-slate-900 shadow-xl relative flex flex-col">
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 px-4 py-3 flex items-center gap-3">
          <Link to="/profile" className="p-2 -ml-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-lg font-bold">Account Details</h1>
        </header>

        <main className="flex-1 p-4 space-y-6">
          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-3 group cursor-pointer">
              <div className="size-24 rounded-full bg-gray-100 dark:bg-gray-800 p-1 ring-1 ring-gray-200 dark:ring-gray-700">
                <img alt="User profile" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDDY9qmQbg6XCsVujfbNFWgTgb34lhQUzVnOpxTZseCTD-OvxmvJ6ioy-j3qSYkTsySdBdBsuMckHcv1hQ400lg-Ytt7YkNrPibArq68xQVQ1xlFMnpdChVc_pylnrYMQ2b0jbNHqOFYigOQfpediCvtQJKzz8z0aKCcZcqR852kNQBWMRt706x15sfHtR3a4MoUnZ0Dn0bZnehzhfQFh49LCksGvMGoh87yESRTIUlvuJC4nrjuwPWNqKTLJVHaJN6YcMkodFu_w"/>
              </div>
              <div className="absolute bottom-1 right-1 bg-primary text-white p-1.5 rounded-full ring-4 ring-background-light dark:ring-background-dark shadow-sm transition-transform group-hover:scale-105">
                <span className="material-symbols-outlined text-[16px] block">camera_alt</span>
              </div>
            </div>
            <h2 className="text-xl font-bold">Zara Khan</h2>
            <p className="text-sm text-slate-500">zara.khan@jamia.ac.in</p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Full Name</label>
              <input type="text" defaultValue="Zara Khan" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Email Address</label>
              <input type="email" defaultValue="zara.khan@jamia.ac.in" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Phone Number</label>
              <input type="tel" defaultValue="+91 98765 43210" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Course / Department</label>
              <input type="text" defaultValue="B.A. Psychology" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Year of Graduation</label>
              <input type="text" defaultValue="2025" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
            </div>

            <div className="pt-4">
              <button type="button" className="w-full bg-primary text-white font-semibold py-3 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform hover:bg-primary/90">
                Save Changes
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
