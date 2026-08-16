import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Dealer } from '../data/dealersData';
import { Phone, MapPin, X, Copy, Check, Navigation, ShieldCheck } from 'lucide-react';

interface DealerMapProps {
  dealers: Dealer[];
  selectedDealer: Dealer | null;
  onSelectDealer: (dealer: Dealer) => void;
  onCloseCallout: () => void;
  copiedId: string | null;
  onCopyDealer: (dealer: Dealer) => void;
  onOpenConsultation: (info: string) => void;
}

export default function DealerMap({
  dealers,
  selectedDealer,
  onSelectDealer,
  onCloseCallout,
  copiedId,
  onCopyDealer,
  onOpenConsultation,
}: DealerMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Default view over Maharashtra / Western India
      const map = L.map(mapContainerRef.current, {
        center: [18.8, 75.0],
        zoom: 7,
        zoomControl: true,
        scrollWheelZoom: true,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map);

      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Sync Markers
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear old markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current.clear();

    dealers.forEach((dealer) => {
      const isSelected = selectedDealer?.id === dealer.id;
      const isDistributor = dealer.type === 'Distributor';

      const iconBg = isSelected
        ? '#1a2e68'
        : isDistributor
        ? '#b38e5d'
        : '#0284c7';

      const icon = L.divIcon({
        className: 'custom-dealer-pin',
        html: `
          <div style="
            background-color: ${iconBg};
            width: ${isSelected ? '38px' : '28px'};
            height: ${isSelected ? '38px' : '28px'};
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 4px 14px rgba(0,0,0,0.35);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            cursor: pointer;
            transition: transform 0.2s ease, background-color 0.2s ease;
            transform: ${isSelected ? 'scale(1.2)' : 'scale(1)'};
          ">
            <svg width="${isSelected ? '18' : '14'}" height="${isSelected ? '18' : '14'}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
        `,
        iconSize: [isSelected ? 38 : 28, isSelected ? 38 : 28],
        iconAnchor: [isSelected ? 19 : 14, isSelected ? 19 : 14],
      });

      const marker = L.marker(dealer.coordinates, { icon }).addTo(map);

      marker.on('click', () => {
        onSelectDealer(dealer);
      });

      markersRef.current.set(dealer.id, marker);
    });
  }, [dealers, selectedDealer, onSelectDealer]);

  // Handle selected dealer pan/flyTo
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !selectedDealer) return;

    map.flyTo(selectedDealer.coordinates, 13, {
      animate: true,
      duration: 1.2,
    });
  }, [selectedDealer]);

  return (
    <div className="relative w-full h-[600px] lg:h-[700px] rounded-2xl overflow-hidden border border-stone-200 shadow-lg">
      
      {/* Map Container */}
      <div ref={mapContainerRef} className="w-full h-full z-0" />

      {/* Map Header Overlay Badge */}
      <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-stone-200/80 flex items-center gap-2">
        <MapPin className="w-4 h-4 text-[#b38e5d]" />
        <span className="text-xs font-bold text-stone-900">
          Interactive Map ({dealers.length} Locations)
        </span>
      </div>

      {/* Floating Dealer Callout Popup Card (Exact match to reference image) */}
      {selectedDealer && (
        <div className="absolute top-12 right-4 sm:top-16 sm:right-6 z-20 w-80 sm:w-96 bg-white rounded-2xl p-5 shadow-2xl border border-stone-200 text-stone-900 animate-in fade-in slide-in-from-top-4 duration-300">
          
          {/* Header & Close Button */}
          <div className="flex items-start justify-between gap-3 mb-3 border-b border-stone-100 pb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                  selectedDealer.type === 'Distributor'
                    ? 'bg-[#1a2e68] text-amber-300'
                    : 'bg-emerald-100 text-emerald-800'
                }`}>
                  {selectedDealer.type}
                </span>
                <span className="text-[10px] text-stone-500 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Verified
                </span>
              </div>

              <h3 className="text-lg font-black text-stone-900 leading-snug">
                {selectedDealer.name}
              </h3>
            </div>

            <button
              onClick={onCloseCallout}
              className="p-1.5 text-stone-400 hover:text-stone-800 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
              title="Close popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Detailed Info List matching exact requested format */}
          <div className="space-y-2.5 text-xs text-stone-700">
            <div className="flex items-start gap-2">
              <span className="font-bold text-stone-900 shrink-0 w-16">Contact:</span>
              {selectedDealer.phone ? (
                <a
                  href={`tel:${selectedDealer.phone}`}
                  className="font-bold text-[#1a2e68] hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-[#b38e5d]" />
                  {selectedDealer.contactPerson ? `${selectedDealer.contactPerson} (${selectedDealer.phone})` : selectedDealer.phone}
                </a>
              ) : (
                <span className="font-semibold text-stone-800">{selectedDealer.contactPerson || 'N/A'}</span>
              )}
            </div>

            <div className="flex items-start gap-2">
              <span className="font-bold text-stone-900 shrink-0 w-16">Location:</span>
              <span className="font-bold text-stone-800">{selectedDealer.city}</span>
            </div>

            <div className="flex items-start gap-2 pt-1 border-t border-stone-100">
              <span className="font-bold text-stone-900 shrink-0 w-16">Address:</span>
              <span className="font-normal text-stone-600 leading-relaxed">
                {selectedDealer.address}
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-2">
            <button
              onClick={() => onOpenConsultation(`Inquiry for dealer: ${selectedDealer.name} (${selectedDealer.city})`)}
              className="flex-1 py-2 px-3 bg-[#1a2e68] hover:bg-[#12214d] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Contact Dealer</span>
            </button>

            <button
              onClick={() => onCopyDealer(selectedDealer)}
              className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl transition-colors cursor-pointer border border-stone-200"
              title="Copy Dealer Information"
            >
              {copiedId === selectedDealer.id ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Copy className="w-4 h-4 text-stone-600" />
              )}
            </button>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${selectedDealer.name}, ${selectedDealer.address}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-amber-50 hover:bg-amber-100 text-amber-900 rounded-xl transition-colors cursor-pointer border border-amber-200"
              title="Open Directions in Google Maps"
            >
              <Navigation className="w-4 h-4 text-[#b38e5d]" />
            </a>
          </div>

        </div>
      )}

    </div>
  );
}
