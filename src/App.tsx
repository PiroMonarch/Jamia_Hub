import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map';
import Roommates from './pages/Roommates';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import PropertyDetails from './pages/PropertyDetails';
import AddListing from './pages/AddListing';
import VerifyStay from './pages/VerifyStay';
import Filters from './pages/Filters';
import Saved from './pages/Saved';
import Notifications from './pages/Notifications';
import Compare from './pages/Compare';
import Preferences from './pages/Preferences';
import MyListings from './pages/MyListings';
import AccountDetails from './pages/AccountDetails';

export default function App() {
  return (
    <BrowserRouter>
      {/* Desktop wrapper: centers the mobile frame on large screens */}
      <div className="min-h-screen w-full bg-[#121212] flex justify-center items-center py-10">
        
        {/* Mobile Device Frame */}
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[812px] w-[375px] shadow-2xl ring-2 ring-gray-700 overflow-hidden">
          
          {/* Screen Area */}
          <div className="h-full w-full bg-background-light dark:bg-slate-900 rounded-[2rem] overflow-hidden relative bg-white transform-gpu">
            
            {/* Status Bar (In-UI) */}
            <div className="absolute top-0 left-0 right-0 h-10 flex justify-between items-center px-6 pt-2 z-50 text-black dark:text-white pointer-events-none select-none">
              <span className="font-semibold text-[15px] tracking-wide">9:41</span>
              <div className="flex items-center gap-1.5">
                <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8.5L4.5 5L8 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.5 5L8 1.5L11.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.5 5L15 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 8.5L17 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="ml-0.5">
                  <path d="M8.00004 1.33331C4.78004 1.33331 1.96671 2.76665 0.0667114 5.03331L8.00004 14.6333L15.9334 5.03331C14.0334 2.76665 11.22 1.33331 8.00004 1.33331Z" fill="currentColor"/>
                </svg>
                <div className="w-[22px] h-[10px] rounded-[3px] border border-current ml-1 relative opacity-90">
                  <div className="absolute top-0.5 left-0.5 bottom-0.5 right-0.5 bg-current rounded-[1px]"></div>
                </div>
              </div>
            </div>

            {/* Scrollable content area */}
            <div className="h-full overflow-y-auto overflow-x-hidden no-scrollbar scroll-smooth pb-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/map" element={<Map />} />
                <Route path="/saved" element={<Saved />} />
                <Route path="/roommates" element={<Roommates />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/property/:id" element={<PropertyDetails />} />
                <Route path="/add-listing" element={<AddListing />} />
                <Route path="/verify" element={<VerifyStay />} />
                <Route path="/filters" element={<Filters />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/preferences" element={<Preferences />} />
                <Route path="/my-listings" element={<MyListings />} />
                <Route path="/account-details" element={<AccountDetails />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
