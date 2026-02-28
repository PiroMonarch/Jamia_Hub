
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import BottomNav from '../components/BottomNav';
import { dataService, PG } from '../services/dataService';

// Custom marker icon
const createCustomIcon = (price: number, isSelected: boolean) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div class="${isSelected ? 'bg-primary text-white border-white dark:border-surface-dark z-50 scale-110' : 'bg-white dark:bg-surface-dark text-text-main dark:text-white border-gray-100 dark:border-gray-700'} font-bold text-xs px-3 py-1.5 rounded-xl shadow-lg border-2 transform transition-all relative flex items-center justify-center min-w-[60px]">
        ₹${(price / 1000).toFixed(1)}k
        <div class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-r-2 border-b-2 ${isSelected ? 'bg-primary border-white dark:border-surface-dark' : 'bg-white dark:bg-surface-dark border-gray-100 dark:border-gray-700'}"></div>
      </div>
    `,
    iconSize: [60, 40],
    iconAnchor: [30, 40],
    popupAnchor: [0, -40],
  });
};

// Custom user location icon
const createUserIcon = () => {
  return L.divIcon({
    className: 'user-marker',
    html: `
      <div class="relative flex items-center justify-center w-8 h-8">
        <div class="absolute w-full h-full bg-blue-500 rounded-full opacity-30 animate-ping"></div>
        <div class="relative w-4 h-4 bg-blue-600 border-2 border-white rounded-full shadow-md"></div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
};

// Component to handle map movement when a property is selected
function MapUpdater({ center, zoom }: { center: [number, number], zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { duration: 1.5 });
  }, [center, zoom, map]);
  return null;
}

export default function Map() {
  const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('Price');
  const [properties, setProperties] = useState<PG[]>([]);
  const [mapCenter, setMapCenter] = useState<[number, number]>([28.5616, 77.2802]);
  const [mapZoom, setMapZoom] = useState(15);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

  useEffect(() => {
    dataService.getPgs().then(data => {
      setProperties(data);
      if (data.length > 0) {
        // Optional: Set initial selection or center
        // setSelectedPropertyId(data[0].id);
      }
    });
  }, []);

  const handlePropertySelect = (id: number, lat: number, lng: number) => {
    setSelectedPropertyId(id);
    setMapCenter([lat, lng]);
    setMapZoom(16);
  };

  const handleLocateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          setMapCenter([latitude, longitude]);
          setMapZoom(16);
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to retrieve your location. Please check your permissions.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const selectedProperty = properties.find(p => p.id === selectedPropertyId);

  const filteredProperties = properties.filter(prop => {
    if (activeFilter === 'Boys') return prop.gender === 'Boys';
    if (activeFilter === 'Girls') return prop.gender === 'Girls';
    return true;
  });

  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased overflow-hidden h-screen w-full flex flex-col text-text-main dark:text-white">
      <div className="relative flex-1 w-full h-full overflow-hidden">
        
        {/* Leaflet Map */}
        <MapContainer 
          center={[28.5616, 77.2802]} 
          zoom={15} 
          scrollWheelZoom={true} 
          className="absolute inset-0 z-0 h-full w-full"
          zoomControl={false}
          attributionControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          <MapUpdater center={mapCenter} zoom={mapZoom} />

          {userLocation && (
            <Marker 
              position={userLocation}
              icon={createUserIcon()}
            >
              <Popup>You are here</Popup>
            </Marker>
          )}

          {filteredProperties.map((prop) => (
            prop.lat && prop.lng ? (
              <Marker 
                key={prop.id} 
                position={[prop.lat, prop.lng]}
                icon={createCustomIcon(prop.price, selectedPropertyId === prop.id)}
                eventHandlers={{
                  click: () => handlePropertySelect(prop.id, prop.lat, prop.lng),
                }}
              >
              </Marker>
            ) : null
          ))}
        </MapContainer>

        {/* Top Search Bar */}
        <div className="absolute top-0 left-0 right-0 z-[1000] flex flex-col gap-3 p-4 pt-14 bg-gradient-to-b from-background-light/90 via-background-light/50 to-transparent dark:from-background-dark/90 dark:via-background-dark/50 pointer-events-none">
          <div className="flex w-full items-center gap-3 pointer-events-auto">
            <div className="relative flex-1 shadow-float rounded-full bg-white dark:bg-surface-dark transition-all duration-200 focus-within:ring-2 focus-within:ring-primary/50">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-text-muted dark:text-text-secondary-dark">search</span>
              </div>
              <input className="block w-full pl-11 pr-4 py-3.5 bg-transparent border-none text-sm text-text-main dark:text-white placeholder-text-muted dark:placeholder-text-secondary-dark focus:ring-0 rounded-full" placeholder="Search areas, PGs or landmarks..." type="text"/>
              <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                <button className="p-2 hover:bg-background-light dark:hover:bg-background-dark rounded-full text-text-muted dark:text-text-secondary-dark">
                  <span className="material-symbols-outlined filled text-[20px]">mic</span>
                </button>
              </div>
            </div>
            <Link to="/filters" className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-surface-dark shadow-float text-text-main dark:text-white border border-gray-100 dark:border-gray-800">
              <span className="material-symbols-outlined">tune</span>
            </Link>
          </div>
          
          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 px-1 -mx-1 pointer-events-auto">
            {['Price', 'Boys', 'Girls', 'AC', 'Mess Included'].map((filter) => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex h-9 shrink-0 items-center justify-center gap-x-1.5 rounded-full px-4 shadow-sm border active:scale-95 transition-transform ${activeFilter === filter ? 'bg-primary text-white border-primary' : 'bg-white dark:bg-surface-dark text-slate-600 dark:text-gray-300 border-gray-200 dark:border-gray-700'}`}
              >
                {filter === 'Price' && <span className="material-symbols-outlined text-lg">currency_rupee</span>}
                {filter === 'Boys' && <span className="material-symbols-outlined text-lg filled">male</span>}
                {filter === 'Girls' && <span className="material-symbols-outlined text-lg filled">female</span>}
                <p className="text-xs font-semibold">{filter}</p>
                {activeFilter === filter && <span className="material-symbols-outlined text-lg">close</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Floating Action Buttons */}
        <div className="absolute right-4 bottom-[440px] flex flex-col gap-3 z-[1000] pointer-events-auto">
          <button 
            className="flex size-11 items-center justify-center rounded-full bg-white dark:bg-surface-dark shadow-float text-text-main dark:text-white border border-gray-100 dark:border-gray-800 active:bg-gray-50 dark:active:bg-gray-800 transition-colors"
            onClick={handleLocateMe}
          >
            <span className="material-symbols-outlined">my_location</span>
          </button>
          <button className="flex size-11 items-center justify-center rounded-full bg-white dark:bg-surface-dark shadow-float text-text-main dark:text-white border border-gray-100 dark:border-gray-800 active:bg-gray-50 dark:active:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined">layers</span>
          </button>
        </div>

        {/* Bottom Cards */}
        <div className="absolute bottom-20 left-0 right-0 z-[1000] flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-6 pt-2 no-scrollbar pointer-events-auto">
          {filteredProperties.map((prop) => (
            <div 
              key={prop.id} 
              className={`snap-center shrink-0 w-[90%] max-w-[340px] transition-all duration-300 ${selectedPropertyId === prop.id ? 'scale-100 opacity-100' : 'scale-95 opacity-70'}`} 
              onClick={() => handlePropertySelect(prop.id, prop.lat, prop.lng)}
            >
              <div className={`flex flex-col bg-white dark:bg-surface-dark rounded-3xl shadow-float overflow-hidden border ${selectedPropertyId === prop.id ? 'border-primary ring-2 ring-primary/20' : 'border-white/50 dark:border-gray-700'}`}>
                <div className="relative h-32 w-full bg-gray-200">
                  <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url("${prop.image}")`}}></div>
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2 py-1 rounded-lg bg-white/90 dark:bg-black/60 backdrop-blur-sm text-[10px] font-bold text-text-main dark:text-white border border-white/20">
                      {prop.gender}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 size-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-lg">favorite</span>
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-text-main dark:text-white text-lg font-bold leading-tight">{prop.name}</h3>
                      <p className="text-text-muted dark:text-text-secondary-dark text-xs mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">location_on</span>
                        {prop.location} • {prop.distance}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 bg-green-500 text-white px-1.5 py-0.5 rounded-md text-xs font-bold shadow-sm">
                      4.5 <span className="material-symbols-outlined text-[10px] filled">star</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-text-muted dark:text-text-secondary-dark font-medium">Monthly Rent</span>
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-primary-600 dark:text-primary font-bold text-xl">₹{prop.price.toLocaleString()}</span>
                        <span className="text-xs text-text-muted dark:text-text-secondary-dark">/mo</span>
                      </div>
                    </div>
                    <Link to={`/property/${prop.id}`} className="h-9 px-4 rounded-full bg-text-main dark:bg-white text-white dark:text-surface-dark font-semibold text-sm flex items-center justify-center gap-1 shadow-lg active:scale-95 transition-transform">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <BottomNav />
      </div>
    </div>
  );
}
