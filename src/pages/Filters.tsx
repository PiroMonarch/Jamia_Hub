import { Link, useNavigate } from 'react-router-dom';

export default function Filters() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 font-display text-slate-900 dark:text-slate-100 antialiased overflow-hidden">
      <div className="relative flex h-full min-h-screen w-full flex-col items-center justify-end bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2686&auto=format&fit=crop')] bg-cover bg-center group/design-root overflow-hidden" data-alt="Blurred map background of university area">
        {/* Background Overlay mimicking a map view behind the drawer */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" onClick={() => navigate(-1)}></div>
        {/* Bottom Sheet Container */}
        <div className="relative w-full max-w-md flex flex-col items-stretch rounded-t-3xl bg-background-light dark:bg-background-dark shadow-2xl transform transition-transform duration-300 ease-out">
          {/* Handle */}
          <div className="flex h-6 w-full items-center justify-center pt-3 pb-1" onClick={() => navigate(-1)}>
            <div className="h-1.5 w-12 rounded-full bg-slate-300 dark:bg-slate-600"></div>
          </div>
          {/* Header */}
          <div className="flex items-center justify-between px-6 pb-2 pt-2">
            <h3 className="text-slate-900 dark:text-white tracking-tight text-xl font-bold leading-tight">Filter Results</h3>
            <button className="text-primary text-sm font-semibold hover:opacity-80">Reset</button>
          </div>
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-6 pb-8 pt-4 space-y-8 max-h-[80vh]">
            {/* Budget Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-slate-900 dark:text-white text-base font-semibold">Monthly Budget</p>
                <p className="text-primary font-medium text-sm">₹3,000 - ₹12,000</p>
              </div>
              <div className="relative h-12 pt-4">
                {/* Custom Range Visual */}
                <div className="relative h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                  <div className="absolute left-[20%] right-[15%] h-full rounded-full bg-primary"></div>
                  {/* Thumbs (simulated for visual fidelity) */}
                  <div className="absolute top-1/2 -mt-[9px] left-[20%] -ml-2 h-5 w-5 rounded-full border-2 border-white bg-primary shadow-md z-10"></div>
                  <div className="absolute top-1/2 -mt-[9px] right-[15%] -mr-2 h-5 w-5 rounded-full border-2 border-white bg-primary shadow-md z-10"></div>
                </div>
                <div className="flex justify-between mt-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <span>₹1k</span>
                  <span>₹20k+</span>
                </div>
              </div>
            </div>
            {/* Distance Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-slate-900 dark:text-white text-base font-semibold">Distance from Campus</p>
                <p className="text-primary font-medium text-sm">Within 2.5 km</p>
              </div>
              <div className="relative pt-2">
                <input className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary" max="10" min="0" step="0.5" type="range" defaultValue="2.5"/>
                <div className="flex justify-between mt-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <span>0 km</span>
                  <span>10 km</span>
                </div>
              </div>
            </div>
            {/* Gender Filter */}
            <div className="space-y-3">
              <p className="text-slate-900 dark:text-white text-base font-semibold">Gender</p>
              <div className="flex w-full rounded-xl bg-slate-200 dark:bg-slate-800 p-1">
                <label className="flex-1 cursor-pointer">
                  <input className="peer sr-only" name="gender" type="radio" value="Boys"/>
                  <div className="flex items-center justify-center rounded-lg py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 transition-all peer-checked:bg-white dark:peer-checked:bg-slate-600 peer-checked:text-blue-600 dark:peer-checked:text-white peer-checked:shadow-sm">
                    Boys
                  </div>
                </label>
                <label className="flex-1 cursor-pointer">
                  <input className="peer sr-only" name="gender" type="radio" value="Girls"/>
                  <div className="flex items-center justify-center rounded-lg py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 transition-all peer-checked:bg-white dark:peer-checked:bg-slate-600 peer-checked:text-pink-500 dark:peer-checked:text-white peer-checked:shadow-sm">
                    Girls
                  </div>
                </label>
                <label className="flex-1 cursor-pointer">
                  <input className="peer sr-only" name="gender" type="radio" value="Co-ed"/>
                  <div className="flex items-center justify-center rounded-lg py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 transition-all peer-checked:bg-white dark:peer-checked:bg-slate-600 peer-checked:text-purple-600 dark:peer-checked:text-white peer-checked:shadow-sm">
                    Co-ed
                  </div>
                </label>
              </div>
            </div>
            {/* Room Type Segmented Control */}
            <div className="space-y-3">
              <p className="text-slate-900 dark:text-white text-base font-semibold">Room Type</p>
              <div className="flex w-full rounded-xl bg-slate-200 dark:bg-slate-800 p-1">
                <label className="flex-1 cursor-pointer">
                  <input className="peer sr-only" name="room_type" type="radio" value="single"/>
                  <div className="flex items-center justify-center rounded-lg py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 transition-all peer-checked:bg-white dark:peer-checked:bg-slate-600 peer-checked:text-slate-900 dark:peer-checked:text-white peer-checked:shadow-sm">
                    Single Room
                  </div>
                </label>
                <label className="flex-1 cursor-pointer">
                  <input defaultChecked className="peer sr-only" name="room_type" type="radio" value="double"/>
                  <div className="flex items-center justify-center rounded-lg py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 transition-all peer-checked:bg-white dark:peer-checked:bg-slate-600 peer-checked:text-slate-900 dark:peer-checked:text-white peer-checked:shadow-sm">
                    Double Sharing
                  </div>
                </label>
              </div>
            </div>
            {/* Amenities (AC / Non-AC) */}
            <div className="space-y-3">
              <p className="text-slate-900 dark:text-white text-base font-semibold">Amenities</p>
              <div className="flex gap-3">
                <label className="group relative flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/20 transition-all flex-1">
                  <input defaultChecked className="sr-only" type="checkbox"/>
                  <span className="material-symbols-outlined text-slate-500 group-has-[:checked]:text-primary group-has-[:checked]:fill">ac_unit</span>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300 group-has-[:checked]:text-primary">AC</span>
                </label>
                <label className="group relative flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/20 transition-all flex-1">
                  <input className="sr-only" type="checkbox"/>
                  <span className="material-symbols-outlined text-slate-500 group-has-[:checked]:text-primary group-has-[:checked]:fill">mode_fan</span>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300 group-has-[:checked]:text-primary">Non-AC</span>
                </label>
                <label className="group relative flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/20 transition-all flex-1">
                  <input className="sr-only" type="checkbox"/>
                  <span className="material-symbols-outlined text-slate-500 group-has-[:checked]:text-primary group-has-[:checked]:fill">wifi</span>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300 group-has-[:checked]:text-primary">WiFi</span>
                </label>
              </div>
            </div>
            {/* Safety Rating */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">verified_user</span>
                <p className="text-slate-900 dark:text-white text-base font-semibold">Minimum Safety Rating</p>
              </div>
              <div className="flex w-full gap-2 overflow-x-auto pb-2 no-scrollbar">
                <label className="cursor-pointer">
                  <input className="peer sr-only" name="safety" type="radio" value="3"/>
                  <div className="flex items-center gap-1 rounded-full border border-slate-200 dark:border-slate-700 px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white transition-colors">
                    <span className="text-sm font-medium">3.0+</span>
                    <span className="material-symbols-outlined text-[16px]">star</span>
                  </div>
                </label>
                <label className="cursor-pointer">
                  <input defaultChecked className="peer sr-only" name="safety" type="radio" value="4"/>
                  <div className="flex items-center gap-1 rounded-full border border-slate-200 dark:border-slate-700 px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white transition-colors">
                    <span className="text-sm font-medium">4.0+</span>
                    <span className="material-symbols-outlined text-[16px]">star</span>
                  </div>
                </label>
                <label className="cursor-pointer">
                  <input className="peer sr-only" name="safety" type="radio" value="4.5"/>
                  <div className="flex items-center gap-1 rounded-full border border-slate-200 dark:border-slate-700 px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white transition-colors">
                    <span className="text-sm font-medium">4.5+</span>
                    <span className="material-symbols-outlined text-[16px]">star</span>
                  </div>
                </label>
              </div>
            </div>
            {/* Footer / Action Button */}
            <div className="pt-4 pb-2 sticky bottom-0 bg-background-light dark:bg-background-dark z-20">
              <button onClick={() => navigate(-1)} className="w-full rounded-xl bg-primary py-4 text-center text-base font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 active:scale-[0.98] transition-all">
                Show 24 PGs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
