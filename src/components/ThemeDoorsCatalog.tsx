import { useState, useEffect, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, X, Check, ArrowLeft, Home, Star, Upload, Image as ImageIcon, ChevronRight} from 'lucide-react';
import { THEME_DOORS } from '../data';
import { LaminateDoorProduct } from '../types';

interface ThemeDoorsCatalogProps {
  onOpenConsultation: () => void;
  onNavigateHome?: () => void;
}

export default function ThemeDoorsCatalog({ onOpenConsultation, onNavigateHome }: ThemeDoorsCatalogProps) {
  const [selectedDoor, setSelectedDoor] = useState<LaminateDoorProduct | null>(null);
  const [sortBy, setSortBy] = useState('default');
  // Render SVG graphics or uploaded image
  const renderThemeDoorGraphic = (doorId: string) => {

    switch (doorId) {
      case 'theme-15':
        // Dark Mahogany Wood Texture with Vertical Panel Accent
        return (
          <svg className="w-full h-full rounded shadow-xs" viewBox="0 0 100 210" fill="none">
            <rect width="100" height="210" fill="#321c14" rx="1" />
            <rect x="4" y="4" width="92" height="202" fill="#29160e" rx="1" />
            <line x1="25" y1="4" x2="25" y2="206" stroke="#3d2319" strokeWidth="1.5" />
            <line x1="50" y1="4" x2="50" y2="206" stroke="#3d2319" strokeWidth="1.5" />
            <line x1="75" y1="4" x2="75" y2="206" stroke="#3d2319" strokeWidth="1.5" />
            <rect x="12" y="10" width="76" height="190" stroke="#1d0f09" strokeWidth="1" fill="none" opacity="0.4" />
          </svg>
        );

      case 'theme-16':
        // Dark Walnut Wood Grain Finish
        return (
          <svg className="w-full h-full rounded shadow-xs" viewBox="0 0 100 210" fill="none">
            <rect width="100" height="210" fill="#42291d" rx="1" />
            <rect x="4" y="4" width="92" height="202" fill="#362016" rx="1" />
            <line x1="15" y1="4" x2="15" y2="206" stroke="#4a2f22" strokeWidth="1" />
            <line x1="35" y1="4" x2="35" y2="206" stroke="#2c1a11" strokeWidth="1" />
            <line x1="65" y1="4" x2="65" y2="206" stroke="#4a2f22" strokeWidth="1" />
            <line x1="85" y1="4" x2="85" y2="206" stroke="#2c1a11" strokeWidth="1" />
          </svg>
        );

      case 'theme-17':
        // Rustic Warm Teak Grain Texture
        return (
          <svg className="w-full h-full rounded shadow-xs" viewBox="0 0 100 210" fill="none">
            <rect width="100" height="210" fill="#593422" rx="1" />
            <rect x="4" y="4" width="92" height="202" fill="#4d2b1a" rx="1" />
            {/* Warm timber grain specks */}
            <line x1="20" y1="4" x2="20" y2="206" stroke="#633b28" strokeWidth="2" opacity="0.6" />
            <line x1="50" y1="4" x2="50" y2="206" stroke="#3a1e11" strokeWidth="2" opacity="0.6" />
            <line x1="80" y1="4" x2="80" y2="206" stroke="#633b28" strokeWidth="2" opacity="0.6" />
          </svg>
        );

      case 'theme-18':
        // Dark Espresso Wood with Off-Center Vertical White Inlay Strip (as shown in reference screenshot)
        return (
          <svg className="w-full h-full rounded shadow-xs" viewBox="0 0 100 210" fill="none">
            <rect width="100" height="210" fill="#301f19" rx="1" />
            <rect x="4" y="4" width="92" height="202" fill="#261712" rx="1" />
            {/* Horizontal wood grain texture lines */}
            {[20, 40, 60, 80, 100, 120, 140, 160, 180].map((y) => (
              <line key={y} x1="4" y1={y} x2="96" y2={y} stroke="#1b100c" strokeWidth="1" opacity="0.5" />
            ))}
            {/* Distinct off-center vertical white strip */}
            <rect x="22" y="10" width="12" height="190" fill="#fcfbf7" rx="1" />
            <rect x="24" y="12" width="8" height="186" fill="#ffffff" rx="1" />
          </svg>
        );

      case 'theme-2':
        return (
          <img
            src="/theme2.png"
            alt="Theme 2 Door"
            className="w-full h-full object-cover rounded shadow-xs"
            referrerPolicy="no-referrer"
          />
        );

      case 'theme-3':
        return (
          <img
            src="/theme3.png"
            alt="Theme 3 Door"
            className="w-full h-full object-cover rounded shadow-xs"
            referrerPolicy="no-referrer"
          />
        );

      case 'theme-4':
        return (
          <img
            src="/theme4.png"
            alt="Theme 4 Door"
            className="w-full h-full object-cover rounded shadow-xs"
            referrerPolicy="no-referrer"
          />
        );
      case 'theme-8':
        return (
          <img
            src="/theme8.png"
            alt="Theme 8 Door"
            className="w-full h-full object-cover rounded shadow-xs"
            referrerPolicy="no-referrer"
          />
        );
      default:
        return null;
    }
  };

  const sortedDoors = [...THEME_DOORS].sort((a, b) => {
    if (sortBy === 'model') return a.code.localeCompare(b.code);
    return 0;
  });

  return (
    <div id="theme-doors-catalog" className="pt-20 pb-12 bg-[#faf9f6] min-h-screen">
      
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
            <span className="text-[#b38e5d] font-bold">Theme Doors</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        {/* Page Titles matching reference screenshot + Upload Helper Bar */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
              Theme Doors
            </h1>
            <p className="text-sm font-medium text-stone-500 mt-1">
              Theme Doors
            </p>
          </div>

          </div>

        {/* Results Counter & Sorting Dropdown Bar matching screenshot */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-3 mb-8 border-b border-stone-200/80">
          <span className="text-xs font-semibold text-stone-500">
            Showing all {THEME_DOORS.length} results
          </span>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white text-xs font-semibold text-stone-700 py-2 pl-3 pr-8 rounded-md border border-stone-300 focus:outline-none focus:border-[#b38e5d] cursor-pointer shadow-xs"
            >
              <option value="default">Default sorting</option>
              <option value="model">Sort by theme number</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Product Cards Grid matching reference screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="theme-doors-grid">
          {sortedDoors.map((door, index) => (
            <motion.div
              key={door.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              onClick={() => setSelectedDoor(door)}
              className="group bg-white rounded-xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative"
              id={`theme-door-card-${door.id}`}
            >
              {/* White framed door graphic preview container */}
              <div className="bg-[#f9f8f6] p-6 flex justify-center items-center min-h-[260px] relative border-b border-stone-100 group/image">
                <div className="w-24 h-52 bg-white rounded shadow-md p-1 border border-stone-200/80 group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                  {renderThemeDoorGraphic(door.id)}
                </div>

              </div>

              {/* Title & Action Footer */}
              <div className="p-5 text-center bg-white flex flex-col justify-between flex-1 space-y-3">
                <div>
                  <h3 className="text-sm font-bold text-stone-900 group-hover:text-[#1a2e68] transition-colors leading-snug">
                    {door.title}
                  </h3>
                </div>

                <div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDoor(door);
                    }}
                    className="w-full py-2 bg-stone-100 hover:bg-[#1a2e68] text-stone-800 hover:text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  >
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <AnimatePresence>
        {selectedDoor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="theme-door-detail-modal">
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
                    {renderThemeDoorGraphic(selectedDoor.id)}
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

                  <div className="pt-6 border-t border-stone-100 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1.5 bg-stone-100 rounded text-xs font-bold text-stone-600">
                        HD DIGITAL PRINT
                      </div>
                      <div className="px-3 py-1.5 bg-stone-100 rounded text-xs font-bold text-stone-600">
                        MDF/HDF CORE
                      </div>
                    </div>
                    
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
