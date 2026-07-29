import { useState, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ArrowLeft, Home, Upload, RotateCcw, PhoneCall, ShieldCheck, Layers, ChevronDown, Image as ImageIcon , ChevronRight} from 'lucide-react';

interface PlywoodCatalogProps {
  onOpenConsultation: () => void;
  onNavigateHome?: () => void;
}

export default function PlywoodCatalog({ onOpenConsultation, onNavigateHome }: PlywoodCatalogProps) {
  const [selectedPlywood, setSelectedPlywood] = useState<boolean>(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // Default clean calibrated plywood stacked board image matching user's screenshot
  const defaultPlywoodImage = 'public/PLYWOOD.jpg';

  const specifications = [
    'Boiling Water Proof (BWP IS 710 Grade) & BWR Grade Marine Plywood',
    'Calibrated 100% High-Density Hardwood Core',
    '100% Borer & Termite Proof (Vacuum Pressure Chemical Treated)',
    'Zero Core Gap & Uniform Calibrated Thickness',
    'Superior Screw & Nail Holding Tensile Strength',
    'Optimal for Modular Kitchens, Wardrobes, Doors & Heavy Furniture',
    'Available Thicknesses: 6mm, 9mm, 12mm, 16mm, 19mm, 25mm'
  ];

  const displayImage = defaultPlywoodImage;

  return (
    <div id="plywood-catalog-page" className="pt-20 pb-12 bg-[#faf9f6] min-h-screen">
      
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
          <span className="text-[#b38e5d] font-bold">Plywood</span>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
              Plywood
            </h1>
            <p className="text-sm font-medium text-stone-500 mt-1">
              Showing all 1 result
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Default Sorting Dropdown matching screenshot */}
            <div className="relative inline-block text-left">
              <button className="px-4 py-2.5 bg-white border border-stone-300 rounded-lg text-xs font-semibold text-stone-600 hover:text-stone-900 flex items-center gap-2 shadow-xs cursor-pointer">
                <span>Default sorting</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Plywood Card View (Matching exact user screenshot) */}
        {!selectedPlywood ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => setSelectedPlywood(true)}
              className="group bg-white rounded-xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between max-w-xs relative"
            >
              {/* Image Box */}
              <div className="bg-[#f9f8f6] p-6 flex justify-center items-center min-h-[220px] relative border-b border-stone-100 group/image">
                <div className="w-full aspect-[4/3] bg-white rounded shadow-sm overflow-hidden border border-stone-200/80 relative">
                  <img
                    src={displayImage}
                    alt="Plywood Sheets"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Title & Read More matching screenshot */}
              <div className="p-5 text-center space-y-3">
                <h3 className="text-base font-bold text-stone-900 tracking-tight">
                  Plywood
                </h3>

                <div className="pt-1 flex items-center justify-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPlywood(true);
                    }}
                    className="text-xs font-black text-[#1a2e68] tracking-wider uppercase hover:text-[#b38e5d] transition-colors cursor-pointer"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          /* Detail Specifications Showcase Page View */
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl border border-stone-200/80 shadow-md p-6 sm:p-10 mb-12"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-100">
              <button
                onClick={() => setSelectedPlywood(false)}
                className="inline-flex items-center gap-2 text-xs font-bold text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 text-[#b38e5d]" />
                <span>Back to Catalog</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Main Image */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative bg-[#f5f3ef] rounded-xl overflow-hidden border border-stone-200 group aspect-[4/3] flex items-center justify-center">
                  <img
                    src={displayImage}
                    alt="Plywood Board Detail"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <button
                    onClick={() => setIsZoomOpen(true)}
                    className="absolute top-4 right-4 z-10 p-2.5 bg-white/90 hover:bg-white text-stone-800 rounded-full shadow-lg backdrop-blur-xs transition-transform hover:scale-110 cursor-pointer"
                    title="Zoom Image"
                  >
                    <Search className="w-5 h-5" />
                  </button>

                  <div className="absolute inset-x-0 bottom-0 p-3 px-4 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent flex items-center justify-between text-white">
                    <span className="text-xs font-semibold truncate">
                      Calibrated Hardwood Marine Plywood
                    </span>
                  </div>
                </div>
              </div>

              {/* Specifications & Category Badge */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h2 className="text-xl font-black text-stone-900 tracking-tight">
                    Premium Calibrated Plywood
                  </h2>
                  <p className="text-xs font-semibold text-[#b38e5d] uppercase tracking-wider mt-1">
                    IS:710 BWP & IS:303 BWR Grade
                  </p>
                </div>

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

                {/* Category: Red Pill Badge matching screenshot */}
                <div className="pt-2 flex items-center gap-2">
                  <span className="text-sm font-semibold text-stone-600">Category:</span>
                  <span className="px-3 py-1 bg-[#d93829] text-white text-xs font-bold rounded-full shadow-xs">
                    Plywood
                  </span>
                </div>

                {/* CTA Buttons */}
                <div className="pt-6 border-t border-stone-200 space-y-3">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-3.5 px-6 bg-[#1a2e68] text-white rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-[#12214d] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4 text-[#b38e5d]" />
                    <span>Request Plywood Wholesale Quote</span>
                  </button>
                </div>

                {/* Guarantee highlights */}
                <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/80 grid grid-cols-2 gap-3 text-xs text-stone-700">
                  <div className="flex items-center gap-2 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>100% Borer & Termite Free</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <Layers className="w-4 h-4 text-amber-600" />
                    <span>Zero Core Gap Calibrated</span>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        )}

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
                src={displayImage}
                alt="Enlarged Plywood Detail"
                className="w-full h-full max-h-[85vh] object-contain mx-auto"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
