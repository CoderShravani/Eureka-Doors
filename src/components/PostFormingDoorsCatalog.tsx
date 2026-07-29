import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, X, Check, ArrowLeft, Home , ChevronRight, RotateCcw } from 'lucide-react';
import { POST_FORMING_DOORS } from '../data';
import { LaminateDoorProduct } from '../types';

interface PostFormingDoorsCatalogProps {
  onOpenConsultation: () => void;
  onNavigateHome?: () => void;
}

export default function PostFormingDoorsCatalog({ onOpenConsultation, onNavigateHome }: PostFormingDoorsCatalogProps) {
  const [selectedDoor, setSelectedDoor] = useState<LaminateDoorProduct | null>(null);
  const [sortBy, setSortBy] = useState('default');

  // SVG Door Graphic representing the exact Post Forming Dark Walnut Door with Silver Horizontal Inlays
  const renderDoorGraphic = () => {
    return (
      <svg className="w-full h-full rounded shadow-sm" viewBox="0 0 100 190" fill="none">
        {/* Dark Walnut Wood Finish */}
        <rect width="100" height="190" fill="#2d221c" rx="1" />
        
        {/* Natural Vertical Grain Lines */}
        <path d="M10 0v190M25 0v190M75 0v190M90 0v190" stroke="#1d1511" strokeWidth="0.8" opacity="0.6" />
        <path d="M5 0v190M45 0v190M55 0v190M95 0v190" stroke="#3d2f27" strokeWidth="0.5" opacity="0.4" />
        
        {/* 4 Parallel Metallic Silver Horizontal Lines */}
        <rect x="0" y="38" width="100" height="1.5" fill="#e5e7eb" opacity="0.9" />
        <rect x="0" y="76" width="100" height="1.5" fill="#e5e7eb" opacity="0.9" />
        <rect x="0" y="114" width="100" height="1.5" fill="#e5e7eb" opacity="0.9" />
        <rect x="0" y="152" width="100" height="1.5" fill="#e5e7eb" opacity="0.9" />

        {/* Smart Digital Handle Graphic on Left */}
        <rect x="5" y="85" width="4" height="20" fill="#111827" rx="0.5" stroke="#4b5563" strokeWidth="0.3" />
        <circle cx="7" cy="89" r="0.8" fill="#10b981" />
        <rect x="6.5" y="94" width="3" height="1" fill="#9ca3af" />

        {/* 180-Degree Post-Formed Curved Edge Indicators */}
        <rect x="0" y="0" width="2" height="190" fill="#5c4538" opacity="0.8" />
        <rect x="98" y="0" width="2" height="190" fill="#5c4538" opacity="0.8" />
      </svg>
    );
  };

  const sortedDoors = [...POST_FORMING_DOORS].sort((a, b) => {
    if (sortBy === 'model') return a.code.localeCompare(b.code);
    return 0;
  });

  return (
    <div id="post-forming-doors-catalog" className="pt-20 pb-12 bg-[#faf9f6] min-h-screen">
      
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
            <span className="text-[#b38e5d] font-bold">Post Forming Doors</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        {/* Page Titles matching Wooden Laminate Doors layout */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
            Post Forming Doors
          </h1>
          <p className="text-sm font-medium text-stone-500 mt-1">
            Post Forming Doors
          </p>
        </div>

        {/* Results Counter & Sorting Dropdown Bar matching screenshot */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-3 mb-8 border-b border-stone-200/80">
          <span className="text-xs font-semibold text-stone-500">
            Showing all {POST_FORMING_DOORS.length} result
          </span>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white text-xs font-semibold text-stone-700 py-2 pl-3 pr-8 rounded-md border border-stone-300 focus:outline-none focus:border-[#b38e5d] cursor-pointer shadow-xs"
            >
              <option value="default">Default sorting</option>
              <option value="model">Sort by model code</option>
              <option value="popularity">Sort by popularity</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Product Cards Grid matching Wooden Laminate Doors layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="post-forming-doors-grid">
          {sortedDoors.map((door, index) => (
            <motion.div
              key={door.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => setSelectedDoor(door)}
              className="group bg-white rounded-xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              id={`door-card-${door.id}`}
            >
              {/* White framed door graphic preview container */}
              <div className="bg-[#f9f8f6] p-6 flex justify-center items-center min-h-[260px] relative border-b border-stone-100">
                <div className="w-28 h-52 bg-white rounded shadow-md p-1 border border-stone-200/80 group-hover:scale-105 transition-transform duration-300">
                  {renderDoorGraphic()}
                </div>
              </div>

              {/* Title & Action Footer matching screenshot */}
              <div className="p-5 text-center bg-white flex flex-col justify-between flex-1 space-y-4">
                <h3 className="text-sm font-bold text-stone-900 group-hover:text-[#1a2e68] transition-colors leading-snug">
                  {door.title}
                </h3>

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
            <h4 className="text-base font-bold text-stone-900">Finished exploring Post Forming Doors?</h4>
            <p className="text-xs font-medium text-stone-500">Return to our home page to view decorative plywoods, flush doors, client projects, or get in touch with our team.</p>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="door-detail-modal">
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
                    {renderDoorGraphic()}
                  </div>
                  <span className="text-xs font-bold text-[#b38e5d] uppercase tracking-widest mt-4">
                    {selectedDoor.code}
                  </span>
                </div>

                {/* Right Specifications - Exact Post Forming Door Specification Sheet */}
                <div className="md:col-span-7 p-6 sm:p-8 space-y-4">
                  <div>
                    <h2 className="text-xl font-black text-stone-900 leading-tight">
                      Post Forming Door Specification
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      {selectedDoor.finish}
                    </p>
                  </div>

                  {/* Rephrased Professional Specification Features List */}
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

                  {/* Red Category Pill matching user screenshot */}
                  <div className="pt-2 flex items-center gap-2 text-xs font-bold text-stone-800">
                    <span>Category:</span>
                    <span className="px-3 py-1 bg-[#e63946] text-white text-[11px] font-extrabold rounded-full uppercase tracking-wider">
                      Post Form
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
