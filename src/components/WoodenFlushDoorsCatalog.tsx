import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, X, Check, ArrowLeft, Home , ChevronRight, RotateCcw } from 'lucide-react';
import { WOODEN_FLUSH_DOORS } from '../data';
import { LaminateDoorProduct } from '../types';

interface WoodenFlushDoorsCatalogProps {
  onOpenConsultation: () => void;
  onNavigateHome?: () => void;
}

export default function WoodenFlushDoorsCatalog({ onOpenConsultation, onNavigateHome }: WoodenFlushDoorsCatalogProps) {
  const [selectedDoor, setSelectedDoor] = useState<LaminateDoorProduct | null>(null);
  const [sortBy, setSortBy] = useState('default');

  // Render SVG Flush Door Graphic matching the exact Eureka Gold and Prime stamps from screenshot
  const renderFlushDoorGraphic = (doorId: string) => {
    if (doorId === 'ewfd-01') {
      // Eureka Gold Flush Door - Warm Golden Wood Tone
      return (
        <svg className="w-full h-full rounded shadow-sm" viewBox="0 0 100 210" fill="none">
          {/* Base Golden Timber Finish */}
          <rect width="100" height="210" fill="#cc7837" rx="1" />
          
          {/* Wood Grain Texture Lines */}
          <path d="M8 0v210M22 0v210M38 0v210M62 0v210M78 0v210M92 0v210" stroke="#b06225" strokeWidth="1" opacity="0.6" />
          <path d="M15 0v210M30 0v210M48 0v210M70 0v210M85 0v210" stroke="#df8e48" strokeWidth="0.8" opacity="0.5" />
          <path d="M5 0v210M52 0v210M96 0v210" stroke="#99501a" strokeWidth="0.5" opacity="0.4" />

          {/* Top Right "eureka Gold" Brand Stamp */}
          <g transform="translate(62, 12)">
            <text x="0" y="8" fill="#1f1813" fontSize="6.5" fontFamily="sans-serif" fontWeight="900" letterSpacing="0.2">
              eureka
            </text>
            <text x="18" y="14" fill="#1f1813" fontSize="4.5" fontFamily="sans-serif" fontWeight="700">
              Gold
            </text>
            <circle cx="2" cy="18" r="1.5" fill="#f59e0b" opacity="0.8" />
          </g>

          {/* Bottom Left Upside-Down "eureka" Stamp (matching the real sample photo) */}
          <g transform="translate(12, 198) rotate(180)">
            <text x="0" y="8" fill="#1f1813" fontSize="6.5" fontFamily="sans-serif" fontWeight="900" opacity="0.9">
              eureka
            </text>
          </g>
        </svg>
      );
    } else {
      // Eureka Prime Flush Door - Dark Roasted Walnut Timber
      return (
        <svg className="w-full h-full rounded shadow-sm" viewBox="0 0 100 210" fill="none">
          {/* Base Dark Roasted Walnut Finish */}
          <rect width="100" height="210" fill="#4d3226" rx="1" />
          
          {/* Wood Grain Texture Lines */}
          <path d="M8 0v210M20 0v210M36 0v210M58 0v210M75 0v210M90 0v210" stroke="#362219" strokeWidth="1" opacity="0.7" />
          <path d="M14 0v210M28 0v210M46 0v210M68 0v210M84 0v210" stroke="#664638" strokeWidth="0.8" opacity="0.5" />
          <path d="M4 0v210M50 0v210M96 0v210" stroke="#291912" strokeWidth="0.6" opacity="0.4" />

          {/* Top Right "eureka Prime" Brand Stamp */}
          <g transform="translate(62, 12)">
            <text x="0" y="8" fill="#120c09" fontSize="6.5" fontFamily="sans-serif" fontWeight="900" letterSpacing="0.2">
              eureka
            </text>
            <text x="16" y="14" fill="#120c09" fontSize="4.5" fontFamily="sans-serif" fontWeight="700">
              Prime
            </text>
            <circle cx="2" cy="18" r="1.5" fill="#e11d48" opacity="0.8" />
          </g>

          {/* Bottom Left Upside-Down "eureka" Stamp (matching real sample photo) */}
          <g transform="translate(12, 198) rotate(180)">
            <text x="0" y="8" fill="#120c09" fontSize="6.5" fontFamily="sans-serif" fontWeight="900" opacity="0.9">
              eureka
            </text>
          </g>
        </svg>
      );
    }
  };

  const sortedDoors = [...WOODEN_FLUSH_DOORS].sort((a, b) => {
    if (sortBy === 'model') return a.code.localeCompare(b.code);
    return 0;
  });

  return (
    <div id="wooden-flush-doors-catalog" className="pt-20 pb-12 bg-[#faf9f6] min-h-screen">

      
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
            <span className="text-[#b38e5d] font-bold">Wooden Flush Doors</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        {/* Page Titles matching reference screenshot */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
            Wooden Flush Doors
          </h1>
          <p className="text-sm font-medium text-stone-500 mt-1">
            Wooden Flush Doors
          </p>
        </div>

        {/* Results Counter & Sorting Dropdown Bar matching screenshot */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-3 mb-8 border-b border-stone-200/80">
          <span className="text-xs font-semibold text-stone-500">
            Showing all {WOODEN_FLUSH_DOORS.length} results
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

        {/* Product Cards Grid matching reference screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="wooden-flush-doors-grid">
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
                  {renderFlushDoorGraphic(door.id)}
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
            <h4 className="text-base font-bold text-stone-900">Need IS:2202 Certified Flush Doors for your project?</h4>
            <p className="text-xs font-medium text-stone-500">Contact our sales engineering team for custom timber sizing, bulk quotes, and technical specification sheets.</p>
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
                    {renderFlushDoorGraphic(selectedDoor.id)}
                  </div>
                  <span className="text-xs font-bold text-[#b38e5d] uppercase tracking-widest mt-4">
                    {selectedDoor.code}
                  </span>
                </div>

                {/* Right Specifications - Exact Flush Door Specification Sheet */}
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

                  {/* Red Category Pill matching user screenshot */}
                  <div className="pt-2 flex items-center gap-2 text-xs font-bold text-stone-800">
                    <span>Category:</span>
                    <span className="px-3 py-1 bg-[#e63946] text-white text-[11px] font-extrabold rounded-full uppercase tracking-wider">
                      Flush Door
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
