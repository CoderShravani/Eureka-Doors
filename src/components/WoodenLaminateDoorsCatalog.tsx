import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, X, Check, MessageSquare, Phone, Shield, Sparkles, ArrowRight, ArrowLeft, Home , ChevronRight, RotateCcw } from 'lucide-react';
import { WOODEN_LAMINATE_DOORS } from '../data';
import { LaminateDoorProduct } from '../types';

interface WoodenLaminateDoorsCatalogProps {
  onOpenConsultation: () => void;
  onNavigateHome?: () => void;
}

export default function WoodenLaminateDoorsCatalog({ onOpenConsultation, onNavigateHome }: WoodenLaminateDoorsCatalogProps) {
  const [selectedDoor, setSelectedDoor] = useState<LaminateDoorProduct | null>(null);
  const [sortBy, setSortBy] = useState('default');

  // Render SVG Door Graphic matching the 8 exact reference designs
  const renderDoorGraphic = (style: string) => {
    switch (style) {
      case 'vertical-inlay':
        // EWLD -01: Dark espresso with twin metallic vertical inlays
        return (
          <svg className="w-full h-full rounded shadow-sm" viewBox="0 0 100 190" fill="none">
            {/* Background dark wood */}
            <rect width="100" height="190" fill="#26201e" rx="1" />
            {/* Subtle vertical grain lines */}
            <path d="M10 0v190M25 0v190M75 0v190M90 0v190" stroke="#1d1816" strokeWidth="0.8" opacity="0.6" />
            <path d="M5 0v190M45 0v190M55 0v190M95 0v190" stroke="#312927" strokeWidth="0.5" opacity="0.4" />
            {/* Twin silver vertical inlay lines */}
            <rect x="36" y="0" width="2" height="190" fill="#d1d5db" />
            <rect x="62" y="0" width="2" height="190" fill="#d1d5db" />
          </svg>
        );

      case 'horizontal-grooves':
        // EWLD -02: Dark espresso with 5 horizontal grooves
        return (
          <svg className="w-full h-full rounded shadow-sm" viewBox="0 0 100 190" fill="none">
            <rect width="100" height="190" fill="#26201e" rx="1" />
            <path d="M12 0v190M88 0v190" stroke="#1d1816" strokeWidth="0.8" opacity="0.5" />
            {/* 4 horizontal divider lines creating 5 panels */}
            <rect x="0" y="38" width="100" height="1.5" fill="#d1d5db" />
            <rect x="0" y="76" width="100" height="1.5" fill="#d1d5db" />
            <rect x="0" y="114" width="100" height="1.5" fill="#d1d5db" />
            <rect x="0" y="152" width="100" height="1.5" fill="#d1d5db" />
          </svg>
        );

      case 'dark-solid':
        // EWLD -03: Dark charcoal grain solid
        return (
          <svg className="w-full h-full rounded shadow-sm" viewBox="0 0 100 190" fill="none">
            <rect width="100" height="190" fill="#211d1c" rx="1" />
            {/* Rich vertical woodgrain lines */}
            <path d="M8 0v190M18 0v190M32 0v190M48 0v190M62 0v190M78 0v190M92 0v190" stroke="#151211" strokeWidth="1" opacity="0.7" />
            <path d="M14 0v190M28 0v190M56 0v190M84 0v190" stroke="#2e2826" strokeWidth="0.8" opacity="0.5" />
          </svg>
        );

      case 'warm-teak':
        // EWLD -04: Natural teak & golden walnut grain
        return (
          <svg className="w-full h-full rounded shadow-sm" viewBox="0 0 100 190" fill="none">
            <rect width="100" height="190" fill="#9e673f" rx="1" />
            {/* Warm wood grain textures */}
            <path d="M10 0v190M25 0v190M40 0v190M60 0v190M75 0v190M90 0v190" stroke="#85522e" strokeWidth="1.2" opacity="0.7" />
            <path d="M18 0v190M33 0v190M52 0v190M68 0v190M82 0v190" stroke="#b87a4d" strokeWidth="0.8" opacity="0.5" />
          </svg>
        );

      case 'light-horizontal':
        // EWLD -05: Ash maple face with dark walnut left border & 6 horizontal grooves
        return (
          <svg className="w-full h-full rounded shadow-sm" viewBox="0 0 100 190" fill="none">
            {/* Right main light ash wood */}
            <rect x="0" y="0" width="100" height="190" fill="#e0d1be" rx="1" />
            {/* Left dark walnut border */}
            <rect x="0" y="0" width="22" height="190" fill="#362a26" />
            {/* 6 horizontal lines across light area */}
            <rect x="22" y="27" width="78" height="1" fill="#8c7a67" />
            <rect x="22" y="54" width="78" height="1" fill="#8c7a67" />
            <rect x="22" y="81" width="78" height="1" fill="#8c7a67" />
            <rect x="22" y="108" width="78" height="1" fill="#8c7a67" />
            <rect x="22" y="135" width="78" height="1" fill="#8c7a67" />
            <rect x="22" y="162" width="78" height="1" fill="#8c7a67" />
          </svg>
        );

      case 'dual-border':
        // EWLD -06: Birch cream center with dual dark side borders
        return (
          <svg className="w-full h-full rounded shadow-sm" viewBox="0 0 100 190" fill="none">
            {/* Birch cream center */}
            <rect width="100" height="190" fill="#ede3d5" rx="1" />
            {/* Left dark border */}
            <rect x="0" y="0" width="18" height="190" fill="#362a26" />
            {/* Right dark border */}
            <rect x="82" y="0" width="18" height="190" fill="#362a26" />
            {/* Subtle vertical center lines */}
            <path d="M50 0v190" stroke="#d4c6b5" strokeWidth="0.8" opacity="0.5" />
          </svg>
        );

      case 'light-vertical':
        // EWLD -07: Light natural oak with vertical twin grooves
        return (
          <svg className="w-full h-full rounded shadow-sm" viewBox="0 0 100 190" fill="none">
            <rect width="100" height="190" fill="#ddcebc" rx="1" />
            {/* Light oak grain */}
            <path d="M15 0v190M85 0v190" stroke="#ccbcab" strokeWidth="0.8" opacity="0.6" />
            {/* Twin dark vertical router lines */}
            <rect x="36" y="0" width="1.2" height="190" fill="#665647" />
            <rect x="64" y="0" width="1.2" height="190" fill="#665647" />
          </svg>
        );

      case 'side-accent':
        // EWLD -08: Cream birch with left dark walnut accent strip
        return (
          <svg className="w-full h-full rounded shadow-sm" viewBox="0 0 100 190" fill="none">
            {/* Light cream body */}
            <rect width="100" height="190" fill="#ede3d5" rx="1" />
            {/* Dark walnut left accent strip */}
            <rect x="0" y="0" width="22" height="190" fill="#362a26" />
            {/* Soft vertical grain */}
            <path d="M45 0v190M70 0v190" stroke="#d9cdbc" strokeWidth="0.8" opacity="0.6" />
          </svg>
        );

      default:
        return (
          <rect width="100" height="190" fill="#26201e" rx="1" />
        );
    }
  };

  const sortedDoors = [...WOODEN_LAMINATE_DOORS].sort((a, b) => {
    if (sortBy === 'model') return a.code.localeCompare(b.code);
    return 0;
  });

  return (
    <div id="wooden-laminate-doors-catalog" className="pt-20 pb-12 bg-[#faf9f6] min-h-screen">
      
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
            <span className="text-[#b38e5d] font-bold">Wooden Laminate Doors</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        {/* Page Titles matching screenshot */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
            Wooden Laminate Doors
          </h1>
          <p className="text-sm font-medium text-stone-500 mt-1">
            Wooden Laminate Doors
          </p>
        </div>

        {/* Results Counter & Sorting Dropdown Bar matching screenshot */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-3 mb-8 border-b border-stone-200/80">
          <span className="text-xs font-semibold text-stone-500">
            Showing all {WOODEN_LAMINATE_DOORS.length} results
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

        {/* 8 Product Cards Grid matching reference screenshots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="laminate-doors-grid">
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
                  {renderDoorGraphic(door.designStyle)}
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
            <h4 className="text-base font-bold text-stone-900">Finished exploring these Wooden Laminate Door designs?</h4>
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

      {/* Product Detail Modal */}
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
                className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-md rounded-full text-stone-600 hover:text-stone-900 shadow-md border border-stone-200 z-10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Left Door Display */}
                <div className="md:col-span-5 bg-[#f5f4f0] p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-stone-200">
                  <div className="w-36 h-64 bg-white rounded-md shadow-xl p-1.5 border border-stone-300">
                    {renderDoorGraphic(selectedDoor.designStyle)}
                  </div>
                  <span className="text-xs font-bold text-[#b38e5d] uppercase tracking-widest mt-4">
                    {selectedDoor.code}
                  </span>
                </div>

                {/* Right Specifications */}
                <div className="md:col-span-7 p-6 sm:p-8 space-y-5">
                  <div>
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-1">
                      {selectedDoor.type}
                    </span>
                    <h2 className="text-lg font-black text-stone-900 leading-tight">
                      {selectedDoor.title}
                    </h2>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      {selectedDoor.description}
                    </p>
                  </div>

                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200/60">
                    <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">Finish & Texture:</span>
                    <span className="text-xs font-semibold text-stone-800">{selectedDoor.finish}</span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">Core Specifications:</span>
                    <div className="grid grid-cols-1 gap-1.5">
                      {selectedDoor.keySpecs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                          <Check className="w-3.5 h-3.5 text-[#b38e5d] shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-stone-100 flex items-center gap-3">
                    <button
                      onClick={() => {
                        setSelectedDoor(null);
                        onOpenConsultation();
                      }}
                      className="flex-1 py-3 px-4 bg-[#b38e5d] text-white text-xs font-bold tracking-wider uppercase rounded-md hover:bg-[#967448] transition-all shadow-sm text-center"
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
