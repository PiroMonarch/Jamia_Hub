import { Link } from 'react-router-dom';

export default function MyListings() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen font-display pb-20">
      <div className="max-w-md mx-auto min-h-screen bg-white dark:bg-slate-900 shadow-xl relative flex flex-col">
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 px-4 py-3 flex items-center gap-3">
          <Link to="/profile" className="p-2 -ml-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-lg font-bold">My Listings</h1>
          <Link to="/add-listing" className="ml-auto text-primary font-semibold text-sm">+ Add New</Link>
        </header>

        <main className="flex-1 p-4 space-y-4">
          {/* Listing 1 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden shadow-sm flex flex-col">
            <div className="relative h-40 w-full">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw5FMm80JOn6rQPQCt5uqrH9M4DMpp6b5QnCw8fgz9F8d49NcFKTMWrU_dFTbq6cFwTZCmGZxq9M19PhL2d9rniujHUqkUo3CgypI0qaBbT-a7b1qqsy3_-44ayhWHvJfheceavOBYIHeH2aEf9FNsc7brZ7-LP9VhQWgEyWZV_iJaENAhd55CJFwQnGzK5OaxuRhJJzdN-Vuqju4p79Oj9PJi9P_XR-T3PbvjmMoyxxvbnpXY3q0riNCGEHvPQB3-SwkqHvR9gDY" alt="My PG" />
              <div className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded">ACTIVE</div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">Al-Hidayat Premium PG</h3>
                <p className="text-primary font-bold">₹8,500<span className="text-xs font-normal text-slate-400">/mo</span></p>
              </div>
              <p className="text-xs text-slate-500 mb-4">Jamia Nagar • 3 Beds Available</p>
              <div className="flex gap-2">
                <button className="flex-1 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-sm">edit</span> Edit
                </button>
                <button className="flex-1 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 text-red-500 hover:text-red-600 flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-sm">delete</span> Delete
                </button>
              </div>
            </div>
          </div>

          {/* Listing 2 (Draft) */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden shadow-sm flex flex-col opacity-75">
            <div className="relative h-40 w-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-slate-300">image</span>
              <div className="absolute top-2 right-2 bg-yellow-500 text-white text-[10px] font-bold px-2 py-1 rounded">DRAFT</div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">Untitled Listing</h3>
                <p className="text-slate-400 font-bold">--<span className="text-xs font-normal">/mo</span></p>
              </div>
              <p className="text-xs text-slate-500 mb-4">Okhla Vihar • Incomplete</p>
              <div className="flex gap-2">
                <button className="flex-1 py-2 rounded-lg bg-primary text-white text-sm font-medium shadow-md hover:bg-primary/90 transition-colors">
                  Continue Editing
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
