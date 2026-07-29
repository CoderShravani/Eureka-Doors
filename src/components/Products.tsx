import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DoorClosed, ChevronRight, RotateCcw, TreePine, Palette, Frame, ShieldAlert, Layers, Compass, ArrowRight, X, Check } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data';
import { ProductCategory } from '../types';

interface ProductsProps {
  onOpenConsultation: () => void;
  onNavigate?: (id: string) => void;
}

export default function Products({ onOpenConsultation, onNavigate }: ProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductCategory | null>(null);

  const getCategorySvgIcon = (iconName: string) => {
    switch (iconName) {
      case 'DoorClosed':
        return (
          <svg className="w-5 h-5 text-stone-300 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="5" y="3" width="14" height="18" rx="1" />
            <circle cx="8" cy="12" r="1" />
            <path d="M12 3v18" strokeDasharray="2 2" />
          </svg>
        );
      case 'TreePine':
        return (
          <svg className="w-5 h-5 text-stone-300 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="5" y="3" width="14" height="18" rx="1" />
            <circle cx="8" cy="12" r="1" />
          </svg>
        );
      case 'Palette':
        return (
          <svg className="w-5 h-5 text-stone-300 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="5" y="3" width="14" height="18" rx="1" />
            <path d="M12 3v18" />
          </svg>
        );
      case 'Frame':
        return (
          <svg className="w-5 h-5 text-stone-300 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 3h16v18H4z" />
          </svg>
        );
      case 'ShieldAlert':
        return (
          <svg className="w-5 h-5 text-stone-300 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="5" y="3" width="14" height="18" rx="1" />
            <circle cx="8" cy="12" r="1" />
          </svg>
        );
      case 'Layers':
        return (
          <svg className="w-5 h-5 text-stone-300 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
        );
      case 'Compass':
        return (
          <svg className="w-5 h-5 text-stone-300 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M8 8l8 8M16 8l-8 8" />
          </svg>
        );
      default:
        return <DoorClosed className="w-5 h-5 text-stone-300" />;
    }
  };

  return (
    <section id="products" className="pt-24 pb-16 bg-[#f7f6f2] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto space-y-1 mb-10">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#b38e5d] uppercase block">
            — EXPLORE OUR —
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-wider uppercase">
            PRODUCT CATEGORIES
          </h2>
        </div>

        {/* 7 Cards Grid matching Reference Image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4" id="product-categories-grid">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <div key={category.id} className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedProduct(category)}
                className="group relative bg-[#1c1b18] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between h-[210px] p-4 text-white border border-stone-800"
                id={`product-card-${category.id}`}
              >
                {/* Product Door Photo on the Right half */}
                <div className="absolute right-0 top-0 bottom-0 w-[55%] h-full overflow-hidden">
                  <img
                    src={category.id === 'wooden-doors' ? '/wooden_door.jpeg' : category.id === 'post-forming-doors' ? '/post_forming.jpeg' : category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1c1b18] via-[#1c1b18]/40 to-transparent" />
                </div>

                {/* Left Content Column */}
                <div className="relative z-10 flex flex-col justify-between h-full w-[60%]">
                  <div>
                    <h3 className="text-xs font-extrabold tracking-wider uppercase text-white leading-tight group-hover:text-[#b38e5d] transition-colors">
                      {category.name}
                    </h3>
                    <div className="mt-3">
                      {getCategorySvgIcon(category.iconName)}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[10px] font-semibold text-stone-300 group-hover:text-white transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="product-detail-modal">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-100 overflow-hidden z-10"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-stone-600 hover:text-stone-900 shadow-md border border-stone-200 z-10 transition-colors"
                aria-label="Close details"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-5 h-48 md:h-full min-h-[220px] relative">
                  <img
                    src={selectedProduct.id === 'wooden-doors' ? '/wooden_door.jpeg' : selectedProduct.id === 'post-forming-doors' ? '/post_forming.jpeg' : selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-stone-900/60 to-transparent" />
                  
                  <div className="absolute bottom-5 left-5 text-white">
                    <span className="text-[9px] font-bold tracking-wider uppercase bg-[#b38e5d] px-2 py-0.5 rounded text-white block w-fit mb-2">
                      Premium Class
                    </span>
                    <h3 className="text-xl font-bold">{selectedProduct.name}</h3>
                  </div>
                </div>

                <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Specifications</span>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Subcategories if available */}
                  {selectedProduct.subCategories && selectedProduct.subCategories.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <span className="text-[10px] font-bold text-[#b38e5d] uppercase tracking-wider block">
                        Sub-Categories & Varieties:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {selectedProduct.subCategories.map((sub) => (
                          <div
                            key={sub.id}
                            onClick={() => {
                              setSelectedProduct(null);
                              if (onNavigate) onNavigate(sub.id);
                            }}
                            className="p-2.5 bg-stone-50 hover:bg-[#1a2e68]/5 hover:border-[#1a2e68]/30 transition-all cursor-pointer rounded-lg border border-stone-200/80 space-y-1 group/sub"
                          >
                            <div className="flex items-center justify-between">
                              <h4 className="text-xs font-bold text-stone-800 group-hover/sub:text-[#1a2e68] transition-colors">{sub.name}</h4>
                              <ArrowRight className="w-3 h-3 text-stone-400 group-hover/sub:translate-x-1 group-hover/sub:text-[#1a2e68] transition-all" />
                            </div>
                            {sub.description && (
                              <p className="text-[10px] text-stone-500 line-clamp-2 leading-tight">
                                {sub.description}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-3">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Verified Core Features:</span>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedProduct.keyFeatures.map((feature) => (
                        <div key={feature} className="flex items-center gap-2.5 text-xs text-stone-700 font-medium">
                          <div className="p-0.5 bg-emerald-100 text-emerald-600 rounded-full">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => {
                        setSelectedProduct(null);
                        let targetId = selectedProduct.id;
                        if (targetId === 'wooden-doors') targetId = 'wooden-laminate-doors';
                        if (targetId === 'frp-doors') targetId = 'wooden-molded-doors';
                        if (targetId === 'pvc-doors' || targetId === 'solid-pvc-doors') targetId = 'pvc-panel-doors';
                        if (onNavigate) onNavigate(targetId);
                      }}
                      className="w-full py-3 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-[#b38e5d] transition-colors text-center cursor-pointer"
                    >
                      VIEW CATALOGUE
                    </button>
                    <button
                      onClick={() => {
                        setSelectedProduct(null);
                        onOpenConsultation();
                      }}
                      className="w-full py-3 border border-stone-200 text-stone-900 rounded-xl text-xs font-semibold hover:bg-stone-50 transition-colors text-center cursor-pointer"
                    >
                      REQUEST SAMPLES
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

