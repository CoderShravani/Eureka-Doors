import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, X, Check, ArrowLeft, Home , ChevronRight, RotateCcw } from 'lucide-react';
import { PVC_PANEL_DOORS } from '../data';
import { LaminateDoorProduct } from '../types';

interface PvcPanelDoorsCatalogProps {
  onOpenConsultation: () => void;
  onNavigateHome?: () => void;
}

export default function PvcPanelDoorsCatalog({ onOpenConsultation, onNavigateHome }: PvcPanelDoorsCatalogProps) {
  const [selectedDoor, setSelectedDoor] = useState<LaminateDoorProduct | null>(null);
  const [sortBy, setSortBy] = useState('default');

  // Render SVG PVC Panel Door Graphic based on color style
  const renderPvcDoorGraphic = (doorId: string) => {
    switch (doorId) {
      case 'spvcd-04':
        // Brown Frame with Charcoal Gray Inset Panels
        return (
          <svg className="w-full h-full rounded shadow-xs" viewBox="0 0 100 210" fill="none">
            {/* Outer Dark Brown Frame */}
            <rect width="100" height="210" fill="#362118" rx="1" />
            <rect x="8" y="8" width="84" height="194" fill="#2b1a13" rx="1" />

            {/* Top Charcoal Panel */}
            <rect x="12" y="14" width="76" height="88" fill="#3d3d3d" rx="1" />
            <rect x="14" y="16" width="72" height="84" stroke="#2b2b2b" strokeWidth="1" fill="#4a4a4a" rx="1" />

            {/* Middle Dividing Stile */}
            <rect x="8" y="106" width="84" height="8" fill="#2b1a13" />

            {/* Bottom Charcoal Panel */}
            <rect x="12" y="118" width="76" height="78" fill="#3d3d3d" rx="1" />
            <rect x="14" y="120" width="72" height="74" stroke="#2b2b2b" strokeWidth="1" fill="#4a4a4a" rx="1" />
          </svg>
        );

      case 'spvcd-05':
        // Brown Frame with Warm Ivory Inset Panels
        return (
          <svg className="w-full h-full rounded shadow-xs" viewBox="0 0 100 210" fill="none">
            {/* Outer Dark Brown Frame */}
            <rect width="100" height="210" fill="#362118" rx="1" />
            <rect x="8" y="8" width="84" height="194" fill="#2b1a13" rx="1" />

            {/* Top Warm Ivory Panel */}
            <rect x="12" y="14" width="76" height="88" fill="#fdfaf2" rx="1" />
            <rect x="14" y="16" width="72" height="84" stroke="#e8dfcb" strokeWidth="1" fill="#faf5e8" rx="1" />

            {/* Middle Dividing Stile */}
            <rect x="8" y="106" width="84" height="8" fill="#2b1a13" />

            {/* Bottom Warm Ivory Panel */}
            <rect x="12" y="118" width="76" height="78" fill="#fdfaf2" rx="1" />
            <rect x="14" y="120" width="72" height="74" stroke="#e8dfcb" strokeWidth="1" fill="#faf5e8" rx="1" />
          </svg>
        );

      case 'spvcd-03':
        // Dark Espresso / Gray Color with Gold Line Inlay
        return (
          <svg className="w-full h-full rounded shadow-xs" viewBox="0 0 100 210" fill="none">
            {/* Base Espresso Dark Slab */}
            <rect width="100" height="210" fill="#2b2826" rx="1" />
            <rect x="6" y="6" width="88" height="198" fill="#22201e" rx="1" />

            {/* Top Gold Inlaid Panel Border */}
            <rect x="12" y="14" width="76" height="88" stroke="#d4af37" strokeWidth="1.2" fill="#282523" rx="1" />
            <rect x="15" y="17" width="70" height="82" stroke="#b89628" strokeWidth="0.5" fill="none" opacity="0.6" />

            {/* Bottom Gold Inlaid Panel Border */}
            <rect x="12" y="116" width="76" height="80" stroke="#d4af37" strokeWidth="1.2" fill="#282523" rx="1" />
            <rect x="15" y="119" width="70" height="74" stroke="#b89628" strokeWidth="0.5" fill="none" opacity="0.6" />
          </svg>
        );

      case 'spvcd-02':
        // Slate Gray Solid Panel Door
        return (
          <svg className="w-full h-full rounded shadow-xs" viewBox="0 0 100 210" fill="none">
            {/* Outer Gray Frame */}
            <rect width="100" height="210" fill="#606469" rx="1" />
            <rect x="6" y="6" width="88" height="198" fill="#52555a" rx="1" />

            {/* Top Slate Gray Panel */}
            <rect x="12" y="14" width="76" height="88" fill="#6b6f75" rx="1" />
            <rect x="14" y="16" width="72" height="84" stroke="#484b50" strokeWidth="1" fill="#74787f" rx="1" />

            {/* Bottom Slate Gray Panel */}
            <rect x="12" y="116" width="76" height="80" fill="#6b6f75" rx="1" />
            <rect x="14" y="118" width="72" height="76" stroke="#484b50" strokeWidth="1" fill="#74787f" rx="1" />
          </svg>
        );

      case 'spvcd-07':
        // Slate Gray Frame with Warm Ivory Inset Panels
        return (
          <svg className="w-full h-full rounded shadow-xs" viewBox="0 0 100 210" fill="none">
            {/* Outer Gray Frame */}
            <rect width="100" height="210" fill="#52555a" rx="1" />
            <rect x="8" y="8" width="84" height="194" fill="#43464b" rx="1" />

            {/* Top Ivory Panel */}
            <rect x="12" y="14" width="76" height="88" fill="#fdfaf2" rx="1" />
            <rect x="14" y="16" width="72" height="84" stroke="#e3d8c1" strokeWidth="1" fill="#faf5e8" rx="1" />

            {/* Middle Stile */}
            <rect x="8" y="106" width="84" height="8" fill="#43464b" />

            {/* Bottom Ivory Panel */}
            <rect x="12" y="118" width="76" height="78" fill="#fdfaf2" rx="1" />
            <rect x="14" y="120" width="72" height="74" stroke="#e3d8c1" strokeWidth="1" fill="#faf5e8" rx="1" />
          </svg>
        );

      case 'spvcd-01':
        // Warm Ivory Finish with Gold Line Inlay
        return (
          <svg className="w-full h-full rounded shadow-xs" viewBox="0 0 100 210" fill="none">
            {/* Outer Cream Ivory Slab */}
            <rect width="100" height="210" fill="#fcf9f0" rx="1" />
            <rect x="6" y="6" width="88" height="198" fill="#f5f0e1" rx="1" />

            {/* Top Gold Inlaid Panel Border */}
            <rect x="12" y="14" width="76" height="88" stroke="#d4af37" strokeWidth="1.2" fill="#faf5e8" rx="1" />
            <rect x="15" y="17" width="70" height="82" stroke="#cca52b" strokeWidth="0.5" fill="none" opacity="0.6" />

            {/* Bottom Gold Inlaid Panel Border */}
            <rect x="12" y="116" width="76" height="80" stroke="#d4af37" strokeWidth="1.2" fill="#faf5e8" rx="1" />
            <rect x="15" y="119" width="70" height="74" stroke="#cca52b" strokeWidth="0.5" fill="none" opacity="0.6" />
          </svg>
        );

      case 'spvcd-06':
        // Warm Ivory Frame with Charcoal Gray Inset Panels
        return (
          <svg className="w-full h-full rounded shadow-xs" viewBox="0 0 100 210" fill="none">
            {/* Outer Ivory Frame */}
            <rect width="100" height="210" fill="#f5f0e1" rx="1" />
            <rect x="8" y="8" width="84" height="194" fill="#ede6d3" rx="1" />

            {/* Top Charcoal Gray Panel */}
            <rect x="12" y="14" width="76" height="88" fill="#4a4d52" rx="1" />
            <rect x="14" y="16" width="72" height="84" stroke="#36383b" strokeWidth="1" fill="#54585e" rx="1" />

            {/* Middle Stile */}
            <rect x="8" y="106" width="84" height="8" fill="#ede6d3" />

            {/* Bottom Charcoal Gray Panel */}
            <rect x="12" y="118" width="76" height="78" fill="#4a4d52" rx="1" />
            <rect x="14" y="120" width="72" height="74" stroke="#36383b" strokeWidth="1" fill="#54585e" rx="1" />
          </svg>
        );

      default:
        return null;
    }
  };

  const sortedDoors = [...PVC_PANEL_DOORS].sort((a, b) => {
    if (sortBy === 'model') return a.code.localeCompare(b.code);
    return 0;
  });

  return (
    <div id="pvc-panel-doors-catalog" className="pt-20 pb-12 bg-[#faf9f6] min-h-screen">

      
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
            <span className="text-[#b38e5d] font-bold">Pvc Panel Doors</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        {/* Page Titles matching reference screenshot */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
            PVC Panel Doors
          </h1>
          <p className="text-sm font-medium text-stone-500 mt-1">
            PVC Panel Doors
          </p>
        </div>

        {/* Results Counter & Sorting Dropdown Bar matching screenshot */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-3 mb-8 border-b border-stone-200/80">
          <span className="text-xs font-semibold text-stone-500">
            Showing all {PVC_PANEL_DOORS.length} results
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="pvc-panel-doors-grid">
          {sortedDoors.map((door, index) => (
            <motion.div
              key={door.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              onClick={() => setSelectedDoor(door)}
              className="group bg-white rounded-xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              id={`pvc-door-card-${door.id}`}
            >
              {/* White framed door graphic preview container */}
              <div className="bg-[#f9f8f6] p-6 flex justify-center items-center min-h-[260px] relative border-b border-stone-100">
                <div className="w-28 h-52 bg-white rounded shadow-md p-1 border border-stone-200/80 group-hover:scale-105 transition-transform duration-300">
                  {renderPvcDoorGraphic(door.id)}
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
            <h4 className="text-base font-bold text-stone-900">Need 100% Waterproof Solid PVC Doors for your wet area projects?</h4>
            <p className="text-xs font-medium text-stone-500">Get bulk architectural pricing, custom dimensions, and color customization directly from Eureka India.</p>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="pvc-door-detail-modal">
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
                    {renderPvcDoorGraphic(selectedDoor.id)}
                  </div>
                  <span className="text-xs font-bold text-[#b38e5d] uppercase tracking-widest mt-4">
                    {selectedDoor.code}
                  </span>
                </div>

                {/* Right Specifications */}
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
                      PVC Door
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
