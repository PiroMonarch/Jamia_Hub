import { Link } from 'react-router-dom';

export default function VerifyStay() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 flex justify-center min-h-screen">
      {/* Mobile Container */}
      <div className="relative flex h-full min-h-screen w-full max-w-md flex-col bg-white dark:bg-[#1a2621] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center bg-white dark:bg-[#1a2621] p-4 pb-2 justify-between sticky top-0 z-10 border-b border-gray-100 dark:border-white/5">
          <Link to="/" className="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center justify-center cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 rounded-full transition-colors">
            <span className="material-symbols-outlined text-2xl">close</span>
          </Link>
          <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Verify Your Stay</h2>
          <div className="flex w-12 items-center justify-end">
            <p className="text-primary text-base font-bold leading-normal tracking-[0.015em] shrink-0 cursor-pointer hover:opacity-80">Help</p>
          </div>
        </div>
        {/* Progress Indicator */}
        <div className="flex w-full flex-row items-center justify-center gap-3 py-5 bg-white dark:bg-[#1a2621]">
          <div className="h-2 w-8 rounded-full bg-primary transition-all duration-300"></div> {/* Active Step Extended */}
          <div className="h-2 w-2 rounded-full bg-[#dee3e1] dark:bg-white/20"></div>
          <div className="h-2 w-2 rounded-full bg-[#dee3e1] dark:bg-white/20"></div>
        </div>
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
          {/* Step 1: Ratings */}
          <div className="px-6 flex flex-col items-center">
            <h2 className="text-slate-900 dark:text-slate-100 tracking-light text-[28px] font-bold leading-tight text-center pb-3 pt-2">Rate your experience</h2>
            <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pb-8 text-center">Your feedback helps other Jamia students find safe and clean places near campus.</p>
            {/* Rating Group: Safety */}
            <div className="w-full mb-8">
              <div className="flex justify-between items-end mb-3">
                <label className="text-primary text-sm font-bold uppercase tracking-wider">Safety</label>
                <span className="text-slate-900 dark:text-slate-100 font-bold text-lg">4/5</span>
              </div>
              <div className="flex justify-between gap-2">
                <button className="group p-2 rounded-full hover:bg-primary/5 dark:hover:bg-primary/20 transition-colors focus:outline-none">
                  <span className="material-symbols-outlined text-4xl text-yellow-400 !fill-1">star</span>
                </button>
                <button className="group p-2 rounded-full hover:bg-primary/5 dark:hover:bg-primary/20 transition-colors focus:outline-none">
                  <span className="material-symbols-outlined text-4xl text-yellow-400 !fill-1">star</span>
                </button>
                <button className="group p-2 rounded-full hover:bg-primary/5 dark:hover:bg-primary/20 transition-colors focus:outline-none">
                  <span className="material-symbols-outlined text-4xl text-yellow-400 !fill-1">star</span>
                </button>
                <button className="group p-2 rounded-full hover:bg-primary/5 dark:hover:bg-primary/20 transition-colors focus:outline-none">
                  <span className="material-symbols-outlined text-4xl text-yellow-400 !fill-1">star</span>
                </button>
                <button className="group p-2 rounded-full hover:bg-primary/5 dark:hover:bg-primary/20 transition-colors focus:outline-none">
                  <span className="material-symbols-outlined text-4xl text-slate-200 dark:text-white/20">star</span>
                </button>
              </div>
            </div>
            {/* Rating Group: Cleanliness */}
            <div className="w-full mb-8">
              <div className="flex justify-between items-end mb-3">
                <label className="text-primary text-sm font-bold uppercase tracking-wider">Cleanliness</label>
                <span className="text-slate-900 dark:text-slate-100 font-bold text-lg">3/5</span>
              </div>
              <div className="flex justify-between gap-2">
                <button className="group p-2 rounded-full hover:bg-primary/5 dark:hover:bg-primary/20 transition-colors focus:outline-none">
                  <span className="material-symbols-outlined text-4xl text-yellow-400 !fill-1">star</span>
                </button>
                <button className="group p-2 rounded-full hover:bg-primary/5 dark:hover:bg-primary/20 transition-colors focus:outline-none">
                  <span className="material-symbols-outlined text-4xl text-yellow-400 !fill-1">star</span>
                </button>
                <button className="group p-2 rounded-full hover:bg-primary/5 dark:hover:bg-primary/20 transition-colors focus:outline-none">
                  <span className="material-symbols-outlined text-4xl text-yellow-400 !fill-1">star</span>
                </button>
                <button className="group p-2 rounded-full hover:bg-primary/5 dark:hover:bg-primary/20 transition-colors focus:outline-none">
                  <span className="material-symbols-outlined text-4xl text-slate-200 dark:text-white/20">star</span>
                </button>
                <button className="group p-2 rounded-full hover:bg-primary/5 dark:hover:bg-primary/20 transition-colors focus:outline-none">
                  <span className="material-symbols-outlined text-4xl text-slate-200 dark:text-white/20">star</span>
                </button>
              </div>
            </div>
            {/* Rating Group: Food */}
            <div className="w-full mb-8">
              <div className="flex justify-between items-end mb-3">
                <label className="text-primary text-sm font-bold uppercase tracking-wider">Food Quality</label>
                <span className="text-slate-400 dark:text-slate-500 font-medium text-sm">Select a rating</span>
              </div>
              <div className="flex justify-between gap-2">
                <button className="group p-2 rounded-full hover:bg-primary/5 dark:hover:bg-primary/20 transition-colors focus:outline-none">
                  <span className="material-symbols-outlined text-4xl text-slate-200 dark:text-white/20 hover:text-yellow-400 transition-colors">star</span>
                </button>
                <button className="group p-2 rounded-full hover:bg-primary/5 dark:hover:bg-primary/20 transition-colors focus:outline-none">
                  <span className="material-symbols-outlined text-4xl text-slate-200 dark:text-white/20 hover:text-yellow-400 transition-colors">star</span>
                </button>
                <button className="group p-2 rounded-full hover:bg-primary/5 dark:hover:bg-primary/20 transition-colors focus:outline-none">
                  <span className="material-symbols-outlined text-4xl text-slate-200 dark:text-white/20 hover:text-yellow-400 transition-colors">star</span>
                </button>
                <button className="group p-2 rounded-full hover:bg-primary/5 dark:hover:bg-primary/20 transition-colors focus:outline-none">
                  <span className="material-symbols-outlined text-4xl text-slate-200 dark:text-white/20 hover:text-yellow-400 transition-colors">star</span>
                </button>
                <button className="group p-2 rounded-full hover:bg-primary/5 dark:hover:bg-primary/20 transition-colors focus:outline-none">
                  <span className="material-symbols-outlined text-4xl text-slate-200 dark:text-white/20 hover:text-yellow-400 transition-colors">star</span>
                </button>
              </div>
            </div>
            <div className="h-px w-full bg-slate-100 dark:bg-white/10 my-6"></div>
            {/* Step 2: Photo Upload */}
            <div className="w-full mb-8">
              <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold mb-2">Add a Photo</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Sharing a real photo helps verify your review.</p>
              <div className="border-2 border-dashed border-primary/30 dark:border-primary/20 rounded-xl bg-background-light dark:bg-white/5 hover:bg-primary/5 dark:hover:bg-white/10 transition-colors cursor-pointer group flex flex-col items-center justify-center p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-primary text-2xl">add_a_photo</span>
                </div>
                <p className="text-primary font-semibold text-sm">Tap to upload</p>
                <p className="text-slate-400 text-xs mt-1">JPG or PNG max 5MB</p>
              </div>
            </div>
            {/* Step 3: Review Text */}
            <div className="w-full mb-4">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold">Write a Review</h3>
                <span className="text-slate-400 text-xs">0/120 words</span>
              </div>
              <div className="relative">
                <textarea className="w-full bg-background-light dark:bg-white/5 border-0 rounded-xl p-4 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50 resize-none min-h-[120px]" placeholder="Share details about your stay... (e.g. WiFi speed, water availability, distance to campus)"></textarea>
                <div className="absolute bottom-3 right-3 text-slate-400 pointer-events-none">
                  <span className="material-symbols-outlined text-lg">edit_note</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sticky Bottom Action Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-[#1a2621] border-t border-slate-100 dark:border-white/5 z-20">
          <button className="w-full h-12 bg-primary hover:bg-primary/90 active:bg-primary/95 text-white font-bold rounded-full flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20">
            <span>Submit Verification</span>
            <span className="material-symbols-outlined text-lg">check_circle</span>
          </button>
        </div>
      </div>
    </div>
  );
}
