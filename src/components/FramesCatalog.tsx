import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronRight, PhoneCall, ShieldCheck, Layers } from 'lucide-react';

interface FramesCatalogProps {
  onOpenConsultation: () => void;
  onNavigateHome?: () => void;
}

export default function FramesCatalog({ onOpenConsultation, onNavigateHome }: FramesCatalogProps) {
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const defaultImage = 'public/FRAMES.jpg';

  const specifications = [
    'Solid Wood & Red Meranti Door Frames Available',
    'FRP Coated Bottom to Prevent Moisture',
    'Easy to Install',
    'Single and Double Rebate Options',
    'Premium Seasoned Wood',
    'Borer & Termite Resistant',
    'Custom Sections and Sizes Made to Order'
  ];

  return (
    <div id="frames-catalog-page" className="pt-20 pb-12 bg-[#faf9f6] min-h-screen">
      
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
            <span className="text-[#b38e5d] font-bold">Frames</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        {/* Page Title & Upload Banner */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
              Frames
            </h1>
            <p className="text-sm font-medium text-stone-500 mt-1">
              Solid Wood & FRP Coated Door Chaukhat Frames
            </p>
          </div>
        </div>

        {/* Main Product Showcase Layout (Matching Reference Screenshot) */}
        <div className="bg-white rounded-2xl border border-stone-200/80 shadow-md p-6 sm:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Main Image + Thumbnails */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Main Image Container */}
              <div className="relative bg-[#f5f3ef] rounded-xl overflow-hidden border border-stone-200 group aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center">
                
                <img
                  src={defaultImage}
                  alt="Solid Wood Door Frame Detail"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Search / Zoom Button on top right (matching screenshot icon) */}
                <button
                  onClick={() => setIsZoomOpen(true)}
                  className="absolute top-4 right-4 z-10 p-2.5 bg-white/90 hover:bg-white text-stone-800 rounded-full shadow-lg backdrop-blur-xs transition-transform hover:scale-110 cursor-pointer"
                  title="Zoom Image"
                >
                  <Search className="w-5 h-5" />
                </button>

                {/* Custom Upload Badge overlay bar at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-3 px-4 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent flex items-center justify-between text-white">
                  <span className="text-xs font-semibold truncate max-w-[220px] sm:max-w-xs">
                    Solid Wood & Red Meranti Door Frame
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Bullet Points Specs + Red Pill Badge */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Bullet Points matching screenshot */}
              <ul className="space-y-3">
                {specifications.map((spec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-stone-800 text-base leading-none font-black mt-0.5">•</span>
                    <span className="text-sm font-semibold text-stone-800 leading-snug">
                      {spec}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Category: Red Pill Badge (Matching screenshot Category: [Frames]) */}
              <div className="pt-2 flex items-center gap-2">
                <span className="text-sm font-semibold text-stone-600">Category:</span>
                <span className="px-3 py-1 bg-[#d93829] text-white text-xs font-bold rounded-full shadow-xs">
                  Frames
                </span>
              </div>

              {/* CTA Buttons & Action Box */}
              <div className="pt-6 border-t border-stone-200 space-y-3">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3.5 px-6 bg-[#1a2e68] text-white rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-[#12214d] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#b38e5d]" />
                  <span>Request Custom Size Quote</span>
                </button>
              </div>

              {/* Guarantee highlights */}
              <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/80 grid grid-cols-2 gap-3 text-xs text-stone-700">
                <div className="flex items-center gap-2 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-6 carefully" />
                  <span>100% Seasoned Wood</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <Layers className="w-4 h-4 text-amber-600" />
                  <span>FRP Moisture Barrier</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Fullscreen Zoom Modal */}
      <AnimatePresence>
        {isZoomOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-stone-950 rounded-2xl overflow-hidden p-2"
            >
              <button
                onClick={() => setIsZoomOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-stone-800/80 text-white rounded-full hover:bg-stone-700 transition-colors cursor-pointer"
              >
                ✕
              </button>

              <img
                src={defaultImage}
                alt="Enlarged Frame Detail"
                className="w-full h-full max-h-[85vh] object-contain mx-auto"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
