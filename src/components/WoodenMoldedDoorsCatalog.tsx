import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, X, Check, ArrowLeft, Home , ChevronRight, RotateCcw } from 'lucide-react';
import { WOODEN_MOLDED_DOORS } from '../data';
import { LaminateDoorProduct } from '../types';

interface WoodenMoldedDoorsCatalogProps {
  onOpenConsultation: () => void;
  onNavigateHome?: () => void;
}

export default function WoodenMoldedDoorsCatalog({ onOpenConsultation, onNavigateHome }: WoodenMoldedDoorsCatalogProps) {
  const [selectedDoor, setSelectedDoor] = useState<LaminateDoorProduct | null>(null);
  const [sortBy, setSortBy] = useState('default');

  // Render SVG Moulded FRP Door Graphic matching the exact 2-panel arched and 4-panel arched designs from user screenshot
  const renderMoldedDoorGraphic = (doorId: string) => {
    if (doorId === 'efrpd-02') {
      // Eureka FRP 2 Panel Door (White / Cream Finish)
      return (
        <svg className="w-full h-full rounded shadow-xs" viewBox="0 0 100 210" fill="none">
          {/* Base Off-White Molded Door Slab */}
          <rect width="100" height="210" fill="#f0ede6" rx="1" />
          <rect width="98" height="208" x="1" y="1" stroke="#dcd6c9" strokeWidth="0.8" rx="1" />

          {/* Outer Stile and Rail Edging shadow */}
          <rect x="6" y="6" width="88" height="198" fill="#e8e4db" rx="1" />

          {/* Top Arched Panel Relief */}
          <g transform="translate(12, 14)">
            {/* Outer Inset Shadow Frame */}
            <path d="M0,20 Q0,0 38,0 Q76,0 76,20 L76,105 L0,105 Z" fill="#d8d2c3" />
            {/* Raised Panel Face */}
            <path d="M3,22 Q3,3 38,3 Q73,3 73,22 L73,102 L3,102 Z" fill="#f5f3ec" />
            <path d="M3,22 Q3,3 38,3 Q73,3 73,22 L73,102 L3,102 Z" stroke="#c2bbb0" strokeWidth="0.8" />
            {/* Inner Molded Contour Lines */}
            <path d="M6,24 Q6,6 38,6 Q70,6 70,24 L70,99 L6,99 Z" fill="#eae6dc" opacity="0.6" />
          </g>

          {/* Bottom Rectangular Panel Relief */}
          <g transform="translate(12, 128)">
            {/* Outer Inset Shadow Frame */}
            <rect width="76" height="68" fill="#d8d2c3" rx="1" />
            {/* Raised Panel Face */}
            <rect x="3" y="3" width="70" height="62" fill="#f5f3ec" stroke="#c2bbb0" strokeWidth="0.8" rx="1" />
            {/* Inner Molded Contour Lines */}
            <rect x="6" y="6" width="64" height="56" fill="#eae6dc" opacity="0.6" rx="1" />
          </g>
        </svg>
      );
    } else if (doorId === 'efrpd-05') {
      // Eureka FRP 2 Panel Door (Dark Walnut Finish)
      return (
        <svg className="w-full h-full rounded shadow-xs" viewBox="0 0 100 210" fill="none">
          {/* Base Dark Roasted Walnut Slab */}
          <rect width="100" height="210" fill="#3b251a" rx="1" />
          
          {/* Wood Grain subtle overlay lines */}
          <path d="M10 0v210M30 0v210M50 0v210M70 0v210M90 0v210" stroke="#2b1a11" strokeWidth="1" opacity="0.5" />

          {/* Outer Stile and Rail Edging */}
          <rect x="6" y="6" width="88" height="198" fill="#331e14" rx="1" />

          {/* Top Arched Panel Relief */}
          <g transform="translate(12, 14)">
            {/* Outer Inset Shadow Frame */}
            <path d="M0,20 Q0,0 38,0 Q76,0 76,20 L76,105 L0,105 Z" fill="#24150e" />
            {/* Raised Panel Face */}
            <path d="M3,22 Q3,3 38,3 Q73,3 73,22 L73,102 L3,102 Z" fill="#442c1f" />
            <path d="M3,22 Q3,3 38,3 Q73,3 73,22 L73,102 L3,102 Z" stroke="#1c100a" strokeWidth="0.8" />
            {/* Inner Molded Contour Lines */}
            <path d="M6,24 Q6,6 38,6 Q70,6 70,24 L70,99 L6,99 Z" fill="#362217" opacity="0.7" />
          </g>

          {/* Bottom Rectangular Panel Relief */}
          <g transform="translate(12, 128)">
            {/* Outer Inset Shadow Frame */}
            <rect width="76" height="68" fill="#24150e" rx="1" />
            {/* Raised Panel Face */}
            <rect x="3" y="3" width="70" height="62" fill="#442c1f" stroke="#1c100a" strokeWidth="0.8" rx="1" />
            {/* Inner Molded Contour Lines */}
            <rect x="6" y="6" width="64" height="56" fill="#362217" opacity="0.7" rx="1" />
          </g>
        </svg>
      );
    } else {
      // Eureka FRP 4 Panel Door (White / Cream 4 Panel Finish)
      return (
        <svg className="w-full h-full rounded shadow-xs" viewBox="0 0 100 210" fill="none">
          {/* Base Off-White Molded Slab */}
          <rect width="100" height="210" fill="#f0ede6" rx="1" />
          <rect width="98" height="208" x="1" y="1" stroke="#dcd6c9" strokeWidth="0.8" rx="1" />

          {/* Outer Stile and Rail Edging */}
          <rect x="6" y="6" width="88" height="198" fill="#e8e4db" rx="1" />

          {/* Top Left Arched Panel */}
          <g transform="translate(11, 14)">
            <path d="M0,16 Q0,0 18,0 Q36,0 36,16 L36,105 L0,105 Z" fill="#d8d2c3" />
            <path d="M2,18 Q2,2 18,2 Q34,2 34,18 L34,103 L2,103 Z" fill="#f5f3ec" stroke="#c2bbb0" strokeWidth="0.8" />
          </g>

          {/* Top Right Arched Panel */}
          <g transform="translate(53, 14)">
            <path d="M0,16 Q0,0 18,0 Q36,0 36,16 L36,105 L0,105 Z" fill="#d8d2c3" />
            <path d="M2,18 Q2,2 18,2 Q34,2 34,18 L34,103 L2,103 Z" fill="#f5f3ec" stroke="#c2bbb0" strokeWidth="0.8" />
          </g>

          {/* Bottom Left Rectangular Panel */}
          <g transform="translate(11, 128)">
            <rect width="36" height="68" fill="#d8d2c3" rx="1" />
            <rect x="2" y="2" width="32" height="64" fill="#f5f3ec" stroke="#c2bbb0" strokeWidth="0.8" rx="1" />
          </g>

          {/* Bottom Right Rectangular Panel */}
          <g transform="translate(53, 128)">
            <rect width="36" height="68" fill="#d8d2c3" rx="1" />
            <rect x="2" y="2" width="32" height="64" fill="#f5f3ec" stroke="#c2bbb0" strokeWidth="0.8" rx="1" />
          </g>
        </svg>
      );
    }
  };

  const sortedDoors = [...WOODEN_MOLDED_DOORS].sort((a, b) => {
    if (sortBy === 'model') return a.code.localeCompare(b.code);
    return 0;
  });

  return (
    <div id="wooden-molded-doors-catalog" className="pt-20 pb-12 bg-[#faf9f6] min-h-screen">

      
      {/* Breadcrumb & Navigation Bar - Light Theme */}
      <div className="bg-white border-b border-stone-200/80 py-3.5 shadow-sm mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-stone-500 font-medium">
            <button onClick={onNavigateHome} className="hover:text-stone-900 transition-colors cursor-pointer">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="hover:text-stone-900 transition-colors">Products</span>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#b38e5d] font-bold">Wooden Molded Doors</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        {/* Page Titles matching reference screenshot */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
            Wooden Molded Doors
          </h1>
          <p className="text-sm font-medium text-stone-500 mt-1">
            Wooden Molded Doors
          </p>
        </div>

        {/* Results Counter & Sorting Dropdown Bar matching screenshot */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-3 mb-8 border-b border-stone-200/80">
          <span className="text-xs font-semibold text-stone-500">
            Showing all {WOODEN_MOLDED_DOORS.length} results
          </span>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white text-xs font-semibold text-stone-700 py-2 pl-3 pr-8 rounded-md border border-stone-300 focus:outline-none focus:border-[#b38e5d] cursor-pointer shadow-xs"
            >
              <option value="default">Default sorting</option>
              <option value="model">Sort by model code</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Product Cards Grid matching reference screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="wooden-molded-doors-grid">
          {sortedDoors.map((door, index) => (
            <motion.div
              key={door.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => setSelectedDoor(door)}
              className="group bg-white rounded-xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              id={`molded-door-card-${door.id}`}
            >
              {/* White framed door graphic preview container */}
              <div className="bg-[#f9f8f6] p-6 flex justify-center items-center min-h-[260px] relative border-b border-stone-100">
                <div className="w-28 h-52 bg-white rounded shadow-md p-1 border border-stone-200/80 group-hover:scale-105 transition-transform duration-300">
                  {renderMoldedDoorGraphic(door.id)}
                </div>
              </div>

              {/* Title & Action Footer matching screenshot */}
              <div className="p-5 text-center bg-white flex flex-col justify-between flex-1 space-y-3">
                <div>
                  <h3 className="text-sm font-bold text-stone-900 group-hover:text-[#1a2e68] transition-colors leading-snug">
                    {door.title}
                  </h3>
                  <p className="text-xs font-semibold text-stone-500 mt-1">
                    {door.code}
                  </p>
                </div>

                <div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDoor(door);
                    }}
                    className="inline-block text-[11px] font-extrabold text-[#3b2b80] uppercase tracking-wider hover:underline transition-all cursor-pointer"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Navigation Return to Home Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-white rounded-2xl border border-stone-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-stone-900">Looking for custom molded panel designs or FRP bulk orders?</h4>
            <p className="text-xs font-medium text-stone-500">Contact Eureka India for custom skin pressing, water-proof door solutions, and architectural pricing.</p>
          </div>
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#1a2e68] text-white text-xs font-bold rounded-xl shadow-md hover:bg-[#12214d] hover:shadow-lg transition-all cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-4 h-4 text-[#b38e5d]" />
            <span>Return to Home Page</span>
          </button>
        </div>

      </div>

      {/* Product Detail Modal matching exact specification sheet design */}
      <AnimatePresence>
        {selectedDoor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="molded-door-detail-modal">
            {/* Modal Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoor(null)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDoor(null)}
                className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-md rounded-full text-stone-600 hover:text-stone-900 shadow-md border border-stone-200 z-10 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Left Door Display */}
                <div className="md:col-span-5 bg-[#f5f4f0] p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-stone-200">
                  <div className="w-36 h-64 bg-white rounded-md shadow-xl p-1.5 border border-stone-300">
                    {renderMoldedDoorGraphic(selectedDoor.id)}
                  </div>
                  <span className="text-xs font-bold text-[#b38e5d] uppercase tracking-widest mt-4">
                    {selectedDoor.code}
                  </span>
                </div>

                {/* Right Specifications - Specification Sheet */}
                <div className="md:col-span-7 p-6 sm:p-8 space-y-4">
                  <div>
                    <h2 className="text-xl font-black text-stone-900 leading-tight">
                      {selectedDoor.title} Specification
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      {selectedDoor.finish}
                    </p>
                  </div>

                  {/* Professional Specification Features List */}
                  <div className="space-y-2 py-2">
                    <div className="grid grid-cols-1 gap-2 text-xs">
                      {selectedDoor.keySpecs.map((spec, i) => (
                        <div key={i} className="flex items-start gap-2 text-stone-700">
                          <Check className="w-3.5 h-3.5 text-[#b38e5d] shrink-0 mt-0.5" />
                          <span className="leading-snug">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Red Category Pill matching screenshot */}
                  <div className="pt-2 flex items-center gap-2 text-xs font-bold text-stone-800">
                    <span>Category:</span>
                    <span className="px-3 py-1 bg-[#e63946] text-white text-[11px] font-extrabold rounded-full uppercase tracking-wider">
                      Molded Door
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-stone-100">
                    <button
                      onClick={() => {
                        setSelectedDoor(null);
                        onOpenConsultation();
                      }}
                      className="w-full py-3 px-4 bg-[#b38e5d] text-white text-xs font-bold tracking-wider uppercase rounded-md hover:bg-[#967448] transition-all shadow-sm text-center cursor-pointer"
                    >
                      REQUEST CATALOGUE & QUOTE
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
