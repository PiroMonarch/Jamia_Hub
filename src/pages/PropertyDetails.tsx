
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { dataService, PG } from '../services/dataService';

// Custom marker icon for details page
const createDetailIcon = (price: number) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div class="bg-primary text-white border-white dark:border-surface-dark font-bold text-xs px-3 py-1.5 rounded-xl shadow-lg border-2 transform transition-all relative flex items-center justify-center min-w-[60px]">
        ₹${(price / 1000).toFixed(1)}k
        <div class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-r-2 border-b-2 bg-primary border-white dark:border-surface-dark"></div>
      </div>
    `,
    iconSize: [60, 40],
    iconAnchor: [30, 40],
    popupAnchor: [0, -40],
  });
};

export default function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<PG | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      dataService.getPgs().then(pgs => {
        const found = pgs.find(p => p.id === parseInt(id));
        setProperty(found || null);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">Property Not Found</h2>
        <p className="text-slate-500 mt-2">The property you are looking for does not exist.</p>
        <Link to="/" className="mt-4 text-primary font-semibold hover:underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 min-h-screen flex flex-col relative pb-32">
        {/* Top Navigation Bar */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-primary/10 px-4 py-3 flex items-center justify-between">
          <Link to="/" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back</span>
          </Link>
          <h1 className="text-lg font-bold font-display">Property Details</h1>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">share</span>
          </button>
        </header>
        {/* Main Content */}
        <main className="flex-1">
          {/* Image Gallery */}
          <div className="px-4 py-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-200" style={{backgroundImage: `url("${property.image}")`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white/50"></div>
                <div className="w-2 h-2 rounded-full bg-white/50"></div>
                <div className="w-2 h-2 rounded-full bg-white/50"></div>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-sm text-amber-500 !fill-1">star</span>
                4.8 (120)
              </div>
            </div>
          </div>
          {/* Price & Basic Details */}
          <section className="px-4 pb-6 border-b border-primary/5">
            <div className="flex items-baseline justify-between mb-1">
              <h2 className="text-3xl font-bold text-primary font-display">₹{property.price.toLocaleString()}<span className="text-sm font-normal text-slate-500 dark:text-slate-400"> / month</span></h2>
              <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">Double Sharing</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 font-medium">Security Deposit: <span className="text-slate-900 dark:text-slate-100">₹{property.price.toLocaleString()}</span></p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="flex items-center gap-1 text-sm bg-background-light dark:bg-slate-800 px-3 py-1.5 rounded-lg">
                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                {property.location}
              </span>
              <span className="flex items-center gap-1 text-sm bg-background-light dark:bg-slate-800 px-3 py-1.5 rounded-lg">
                <span className="material-symbols-outlined text-primary text-lg">male</span>
                {property.gender} Only
              </span>
            </div>
          </section>
          {/* Facilities Checklist */}
          <section className="px-4 py-6">
            <h3 className="text-base font-bold mb-4 font-display">Facilities</h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">wifi</span>
                </div>
                <span className="text-sm font-medium">High-speed Wi-Fi</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">local_laundry_service</span>
                </div>
                <span className="text-sm font-medium">Laundry Service</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">restaurant</span>
                </div>
                <span className="text-sm font-medium">3 Meals Provided</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">cleaning_services</span>
                </div>
                <span className="text-sm font-medium">Daily Cleaning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">ac_unit</span>
                </div>
                <span className="text-sm font-medium">Air Conditioning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">security</span>
                </div>
                <span className="text-sm font-medium">24/7 Security</span>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="px-4 py-6 border-t border-primary/5">
            <h3 className="text-base font-bold mb-4 font-display">Location</h3>
            <div className="h-48 w-full rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 relative z-0">
              {property.lat && property.lng ? (
                <MapContainer 
                  center={[property.lat, property.lng]} 
                  zoom={15} 
                  scrollWheelZoom={false} 
                  className="h-full w-full"
                  zoomControl={false}
                  dragging={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker 
                    position={[property.lat, property.lng]}
                    icon={createDetailIcon(property.price)}
                  />
                </MapContainer>
              ) : (
                <div className="h-full w-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400">
                  Map not available
                </div>
              )}
            </div>
            <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">near_me</span>
              {property.location} • {property.distance}
            </p>
          </section>

          {/* Trust Section: Verified by Students */}
          <section className="mx-4 mb-8 p-5 bg-primary/5 rounded-xl border border-primary/10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-sm">verified</span>
              </div>
              <h3 className="text-base font-bold font-display">Verified by Students</h3>
            </div>
            <div className="space-y-4">
              {/* Safety Rating */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Safety &amp; Security</span>
                  <span className="text-sm font-bold text-primary">4.9/5</span>
                </div>
                <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[98%] rounded-full"></div>
                </div>
              </div>
              {/* Cleanliness Rating */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Cleanliness</span>
                  <span className="text-sm font-bold text-primary">4.6/5</span>
                </div>
                <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[92%] rounded-full"></div>
                </div>
              </div>
              {/* Food Quality Rating */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Food Quality</span>
                  <span className="text-sm font-bold text-primary">4.4/5</span>
                </div>
                <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[88%] rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden bg-slate-200" data-alt="Student profile 1" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYSj6N3O6AZm3GhhE64d28Jp_i78tW8D2ixIc2aAbqV5c-ur2eGRPPA04GzSQVo13woWQQDMkwpVEo4CcEjJbn7nI4HGK2zzFiU-ndKRcQoOAL5NXEYGoIFzHnVGqI-0PkEJHl2KRS-8xN3M_XbvsCjOZequ6zOocb8SbcGhTMZJRq6gJRpaVCOhYFhSEGjiAABfG8-ppHV4H7esNc2iilN_RkPOd9pddEx1Ec9J3ZfSbd_BG4_AuNamiE3NO-s1JKw-1SF0oc3ys")', backgroundSize: 'cover'}}></div>
              <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden bg-slate-200" data-alt="Student profile 2" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzi52CfXq47q3_B-AmX_cQ8Ba_HA-0EUPrEmfEzk5GGl6KD7mhEFnl9w1qV9Xz-OWdQcAnKgUTf6I-1xunz79JPWk0yg5R5vxMSjY_3v8vSrxXQvA3-wMA2k1AK-9wvQiApA2yRg4lahgrQ_vWjYnmy7AhK0pbvAFfGhzEOa0Ba11oy2vI20evVA3_jyz6IHrE0ToXrbGmceHdxwgLahV40JXFI9zOiRfhlW1H1i-TGsey4SMvIgVbhXfQrRPO8EttBQ78Qf9gTm4")', backgroundSize: 'cover'}}></div>
              <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden bg-slate-200" data-alt="Student profile 3" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvqv2ts8z9ll-xu1KZ_hjchg5HHxiGV1xAq6pK3lig7UBPkegl1tIMKRt93g-npAPz86PfA5Reb6As4VVb7OGhhXSEgH3mZpaqBRautVYQhMJj9en-NkNS8Ugmpc97sSAwvZmPEzR9qqGzdhg10k9DIlBwswb5n8z5x89575uHaid8A4E70UlruQYrBLVDrdD9Qoyj_KZJf3wKSCMN9TQ0IPoVr3ZGTHx1kF8vKCr-kSzFSfh2yFTnrllulKYA8PIs32igxC-cqRs")', backgroundSize: 'cover'}}></div>
              <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">+15</div>
              <span className="ml-4 text-xs text-slate-500 dark:text-slate-400 self-center">students stayed here recently</span>
            </div>
          </section>
        </main>
        {/* Fixed Bottom Call to Action */}
        <div className="fixed bottom-[72px] left-0 right-0 max-w-md mx-auto px-4 py-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-primary/5 z-40">
          <Link to="/verify" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">event_available</span>
            Book Visit
          </Link>
        </div>
        {/* Bottom Navigation Bar */}
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto flex border-t border-primary/5 bg-white dark:bg-slate-900 px-4 pb-3 pt-2 z-50">
          <Link to="/" className="flex flex-1 flex-col items-center justify-end gap-1 text-primary">
            <span className="material-symbols-outlined !fill-1">explore</span>
            <p className="text-[10px] font-bold leading-normal uppercase tracking-wider">Explore</p>
          </Link>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-slate-500" href="#">
            <span className="material-symbols-outlined">favorite</span>
            <p className="text-[10px] font-medium leading-normal uppercase tracking-wider">Saved</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-slate-500" href="#">
            <span className="material-symbols-outlined">calendar_month</span>
            <p className="text-[10px] font-medium leading-normal uppercase tracking-wider">Visits</p>
          </a>
          <Link to="/profile" className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400 dark:text-slate-500">
            <span className="material-symbols-outlined">person</span>
            <p className="text-[10px] font-medium leading-normal uppercase tracking-wider">Profile</p>
          </Link>
        </nav>
      </div>
    </div>
  );
}
