import { Link } from 'react-router-dom';

export default function Notifications() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display pb-20">
      <div className="max-w-md mx-auto min-h-screen bg-white dark:bg-slate-900 shadow-xl relative flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 px-4 py-3 flex items-center gap-3">
          <Link to="/" className="p-2 -ml-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-lg font-bold">Notifications</h1>
          <div className="ml-auto">
            <button className="text-xs font-semibold text-primary hover:text-primary/80">Mark all read</button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {/* Notification Item 1 (Unread) */}
            <div className="p-4 bg-primary/5 dark:bg-primary/10 hover:bg-primary/10 transition-colors cursor-pointer">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-primary shrink-0 border border-primary/20">
                  <span className="material-symbols-outlined text-[20px] filled">favorite</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-900 dark:text-slate-100 leading-snug">
                    <span className="font-semibold">Greenwood Residency</span> dropped their price by ₹500!
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">2 hours ago</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0"></div>
              </div>
            </div>

            {/* Notification Item 2 (Unread) */}
            <div className="p-4 bg-primary/5 dark:bg-primary/10 hover:bg-primary/10 transition-colors cursor-pointer">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-blue-500 shrink-0 border border-blue-100 dark:border-blue-900">
                  <span className="material-symbols-outlined text-[20px] filled">chat</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-900 dark:text-slate-100 leading-snug">
                    <span className="font-semibold">Ananya Sharma</span> sent you a message request.
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">5 hours ago</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0"></div>
              </div>
            </div>

            {/* Notification Item 3 (Read) */}
            <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer opacity-70">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 shrink-0">
                  <span className="material-symbols-outlined text-[20px]">verified</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-900 dark:text-slate-100 leading-snug">
                    Your stay at <span className="font-semibold">Al-Hidayat PG</span> has been verified successfully.
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Yesterday</p>
                </div>
              </div>
            </div>

            {/* Notification Item 4 (Read) */}
            <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer opacity-70">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-orange-500 shrink-0">
                  <span className="material-symbols-outlined text-[20px]">local_fire_department</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-900 dark:text-slate-100 leading-snug">
                    New listings in <span className="font-semibold">Batla House</span> match your preferences.
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
