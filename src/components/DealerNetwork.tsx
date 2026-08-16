import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Phone, ShieldCheck, ArrowLeft, Building2, Check, Copy, ChevronDown, ChevronUp, Navigation, Store, Sparkles, ChevronRight, RotateCcw } from 'lucide-react';
import { DEALERS_DATA, ALL_CITIES, Dealer } from '../data/dealersData';
import DealerMap from './DealerMap';

interface DealerNetworkProps {
  onOpenConsultation: (prefillInfo?: string) => void;
  onNavigateHome?: () => void;
  onNavigate?: (id: string) => void;
}

export default function DealerNetwork({ onOpenConsultation, onNavigateHome, onNavigate }: DealerNetworkProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('ALL');
  const [selectedDealer, setSelectedDealer] = useState<Dealer | null>(DEALERS_DATA[0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedAssociatedId, setExpandedAssociatedId] = useState<string | null>(null);

  // Filtered Dealers calculation
  const filteredDealers = useMemo(() => {
    return DEALERS_DATA.filter((dealer) => {
      const matchesCity = selectedCity === 'ALL' || dealer.city.toLowerCase() === selectedCity.toLowerCase();
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        dealer.name.toLowerCase().includes(query) ||
        dealer.city.toLowerCase().includes(query) ||
        dealer.contactPerson.toLowerCase().includes(query) ||
        dealer.address.toLowerCase().includes(query) ||
        dealer.districtState.toLowerCase().includes(query);

      return matchesCity && matchesSearch;
    });
  }, [selectedCity, searchQuery]);

  // City counts for badge rendering
  const cityCounts = useMemo(() => {
    const counts: Record<string, number> = { ALL: DEALERS_DATA.length };
    DEALERS_DATA.forEach((dealer) => {
      counts[dealer.city] = (counts[dealer.city] || 0) + 1;
    });
    return counts;
  }, []);

  // Sorted list of cities by count descending for quick filtering
  const sortedCities = useMemo(() => {
    return [...ALL_CITIES].sort((a, b) => (cityCounts[b] || 0) - (cityCounts[a] || 0));
  }, [cityCounts]);

  const handleCopyDealer = (dealer: Dealer) => {
    const text = `${dealer.name}\nContact: ${dealer.contactPerson}\nPhone: ${dealer.phone}\nAddress: ${dealer.address}`;
    navigator.clipboard.writeText(text);
    setCopiedId(dealer.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleAssociated = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedAssociatedId(prev => prev === id ? null : id);
  };

  return (
    <div id="dealer-network-page" className="pt-20 pb-8 bg-[#faf9f6] min-h-screen">
      {/* Breadcrumb & Navigation Bar - Light Theme */}
      <div className="bg-white border-b border-stone-200/80 py-3.5 shadow-sm mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-stone-500 font-medium">
            <button onClick={onNavigateHome} className="hover:text-stone-900 transition-colors cursor-pointer">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#b38e5d] font-bold">Dealer Network</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Title & Subtitle Matching Reference */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a2e68] text-white text-[11px] font-bold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              115+ Authorised Partners
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight">
            Find a Distributor near you
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 font-medium">
            Discover Authorised Eureka Distributors and Dealers in Your Area with 100% genuine products.
          </p>
        </div>

        {/* Split Container: Left Search & Cards / Right Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-12">
          
          {/* LEFT PANEL: Search & Dealers List (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Search Input Box */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search by State/Pin-code/Locality"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-8 py-3 text-xs font-semibold text-stone-900 bg-white border border-stone-300 rounded-xl shadow-xs focus:outline-none focus:ring-2 focus:ring-[#1a2e68]/30 focus:border-[#1a2e68] transition-all placeholder:text-stone-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-400 hover:text-stone-700"
                >
                  ✕
                </button>
              )}
            </div>

            {/* City Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none text-xs font-semibold">
              <button
                onClick={() => setSelectedCity('ALL')}
                className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer text-xs ${
                  selectedCity === 'ALL'
                    ? 'bg-[#1a2e68] text-white font-bold shadow-xs'
                    : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                All ({cityCounts['ALL']})
              </button>

              {sortedCities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer text-xs ${
                    selectedCity.toLowerCase() === city.toLowerCase()
                      ? 'bg-[#1a2e68] text-white font-bold shadow-xs'
                      : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                  }`}
                >
                  {city} ({cityCounts[city]})
                </button>
              ))}
            </div>

            {/* Result Counter */}
            <div className="flex items-center justify-between px-1 text-xs text-stone-500 font-bold">
              <span>Showing {filteredDealers.length} of {DEALERS_DATA.length} Partners</span>
              {selectedDealer && (
                <span className="text-[#1a2e68] font-black">Active: {selectedDealer.name}</span>
              )}
            </div>

            {/* Scrollable List of Dealer Cards */}
            <div className="space-y-3.5 max-h-[620px] overflow-y-auto pr-1 scrollbar-thin">
              {filteredDealers.length === 0 ? (
                <div className="bg-white rounded-2xl p-8 text-center border border-stone-200 shadow-sm">
                  <Building2 className="w-10 h-10 text-stone-300 mx-auto mb-2" />
                  <h4 className="text-sm font-bold text-stone-800">No Partners Found</h4>
                  <p className="text-xs text-stone-500 mt-1">
                    Try searching for another city, state or pincode.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCity('ALL');
                    }}
                    className="mt-3 px-3.5 py-1.5 bg-[#1a2e68] text-white text-xs font-bold rounded-lg hover:bg-[#12214d] transition-colors cursor-pointer"
                  >
                    Reset Search
                  </button>
                </div>
              ) : (
                filteredDealers.map((dealer) => {
                  const isSelected = selectedDealer?.id === dealer.id;

                  return (
                    <div
                      key={dealer.id}
                      onClick={() => setSelectedDealer(dealer)}
                      className={`group bg-white rounded-2xl p-4 sm:p-5 border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'border-[#1a2e68] ring-2 ring-[#1a2e68]/15 shadow-md bg-amber-50/20'
                          : 'border-stone-200/90 shadow-xs hover:border-[#b38e5d] hover:shadow-sm'
                      }`}
                    >
                      {/* Store Header & Badge */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="text-sm sm:text-base font-black text-[#1a2e68] uppercase tracking-wide">
                          {dealer.name}
                        </h3>

                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shrink-0 ${
                          dealer.type === 'Distributor'
                            ? 'bg-[#1a2e68] text-white'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {dealer.type}
                        </span>
                      </div>

                      {/* Info Fields matching reference card format */}
                      <div className="bg-stone-50/80 rounded-xl p-3.5 border border-stone-100 space-y-2 text-xs text-stone-700">
                        
                        {/* Name / Contact Person */}
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-1.5 font-bold text-stone-900">
                            <span className="text-stone-500 font-semibold">Name:</span>
                            <span>{dealer.contactPerson}</span>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopyDealer(dealer);
                            }}
                            className="p-1 text-stone-400 hover:text-stone-800 rounded transition-colors cursor-pointer"
                            title="Copy details"
                          >
                            {copiedId === dealer.id ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>

                        {/* Contact No */}
                        <div className="flex items-center gap-1.5 font-bold">
                          <Phone className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                          <span className="text-stone-500 font-semibold">Contact No:</span>
                          <a href={`tel:${dealer.phone}`} className="text-[#1a2e68] hover:underline">
                            {dealer.phone}
                          </a>
                        </div>

                        {/* District & State */}
                        <div className="flex items-start gap-1.5">
                          <Navigation className="w-3.5 h-3.5 text-[#b38e5d] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-stone-500 font-semibold">District & State: </span>
                            <span className="font-bold text-stone-900">{dealer.districtState}</span>
                          </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-1.5 pt-1.5 border-t border-stone-200/60">
                          <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-stone-500 font-semibold">Address: </span>
                            <span className="text-stone-700 leading-normal">{dealer.address}</span>
                          </div>
                        </div>

                      </div>

                      {/* Associated Dealers Collapsible Accordion (if Distributor) */}
                      {dealer.type === 'Distributor' && (
                        <div className="mt-3 pt-2">
                          <button
                            onClick={(e) => toggleAssociated(dealer.id, e)}
                            className="flex items-center justify-between w-full text-xs font-bold text-[#1a2e68] hover:text-[#12214d] transition-colors cursor-pointer"
                          >
                            <span className="flex items-center gap-1">
                              <Store className="w-3.5 h-3.5 text-[#b38e5d]" />
                              Associated Dealers ({dealer.associatedDealersCount || 2})
                            </span>
                            {expandedAssociatedId === dealer.id ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </button>

                          {expandedAssociatedId === dealer.id && (
                            <div className="mt-2 text-[11px] text-stone-600 space-y-1.5 bg-amber-50/50 p-2.5 rounded-lg border border-amber-200/60 animate-in fade-in duration-200">
                              <div className="font-bold text-stone-800">Sub-dealers under {dealer.name}:</div>
                              <ul className="list-disc list-inside space-y-0.5 text-stone-700 font-medium">
                                <li>{dealer.city} Hardware & Plywood Hub</li>
                                <li>Mahalaxmi Door Center ({dealer.city})</li>
                              </ul>
                            </div>
                          )}
                        </div>
                      )}

                    </div>
                  );
                })
              )}
            </div>

          </div>

          {/* RIGHT PANEL: Interactive Leaflet Map (7 cols) */}
          <div className="lg:col-span-7 sticky top-6">
            <DealerMap
              dealers={filteredDealers}
              selectedDealer={selectedDealer}
              onSelectDealer={(dealer) => setSelectedDealer(dealer)}
              onCloseCallout={() => setSelectedDealer(null)}
              copiedId={copiedId}
              onCopyDealer={handleCopyDealer}
              onOpenConsultation={onOpenConsultation}
            />
          </div>

        </div>

        {/* Become a Dealer Recruitment Banner */}
        <div className="bg-gradient-to-r from-stone-900 via-[#1a2e68] to-stone-900 rounded-2xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-800">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-black uppercase text-amber-400 tracking-wider">
              Expand Your Business
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Become an Authorised Eureka Partner
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl font-medium">
              Join 115+ authorized distributors and dealers. Gain access to direct factory supply, marketing collateral, and exclusive regional rights for Eureka Flush Doors, Molded Doors, and Marine Plywood.
            </p>
          </div>

          <button
            onClick={() => onNavigate ? onNavigate('become-a-dealer') : onOpenConsultation('Dealership Partnership Inquiry')}
            className="px-6 py-3.5 bg-[#b38e5d] hover:bg-[#9c794a] text-white rounded-xl text-xs font-bold tracking-wider uppercase transition-all shadow-md shrink-0 cursor-pointer"
          >
            <span>Apply for Dealership</span>
          </button>
        </div>

      </div>
    </div>
  );
}
