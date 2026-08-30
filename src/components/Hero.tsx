import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Download, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

const heroImages = [
  '/door1.jpeg',
  '/door2.jpeg',
  '/door3.jpeg',
  '/door4.jpeg'
];

export default function Hero({ onNavigate, onOpenConsultation }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (hasInteracted || isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [hasInteracted, isHovered]);

  const nextSlide = () => {
    setHasInteracted(true);
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };
  const prevSlide = () => {
    setHasInteracted(true);
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-16 md:py-0 flex items-center bg-[#faf9f6] overflow-hidden"
    >
      {/* Dynamic Background Light Gradients */}
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-amber-50/40 via-stone-50/0 to-stone-50/0 pointer-events-none" />
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#b38e5d]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content Left */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8" id="hero-left-content">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2.5"
            >
              <div className="w-8 h-[1.5px] bg-[#b38e5d]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#b38e5d] uppercase">
                Since Generations
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-stone-900 leading-[1.1]">
                Crafting <span className="italic font-normal font-serif text-stone-800">Beautiful</span> Entrances
                <span className="block text-stone-900 mt-2">
                  Since Generations
                </span>
              </h1>
              <p className="text-base text-stone-500 max-w-lg font-normal leading-relaxed">
                Premium PVC, Wooden & FRP Doors designed meticulously for contemporary homes. Combining ancestral carpentry techniques with modern weatherproofing engineering.
              </p>
            </motion.div>

            {/* CTA Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              id="hero-cta-buttons"
            >
              <button
                onClick={() => onNavigate('products')}
                className="px-7 py-4 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-[#b38e5d] transition-all duration-300 shadow-md shadow-stone-950/10 flex items-center justify-center gap-2 group"
              >
                EXPLORE COLLECTION
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </button>
              <a
                href="/Eureka_Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-2xs hover:border-[#b38e5d]"
                id="hero-download-catalogue-btn"
              >
                <span>DOWNLOAD CATALOGUE</span>
                <Download className="w-4 h-4 text-[#b38e5d]" />
              </a>
            </motion.div>

            {/* Trust Accents */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="pt-6 sm:pt-8 grid grid-cols-3 gap-6 border-t border-stone-200/60"
            >
              <div>
                <span className="block text-xl font-bold text-stone-900">100%</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-400">Termite-Proof</span>
              </div>
              <div className="border-l border-stone-200 pl-6">
                <span className="block text-xl font-bold text-stone-900">BWR</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-400">Water Resistant</span>
              </div>
              <div className="border-l border-stone-200 pl-6">
                <span className="block text-xl font-bold text-stone-900">5 Years</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-400">Solid Warranty</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Content Right */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center" id="hero-right-visual">
            <motion.div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  src={heroImages[currentSlide]}
                  alt={`Luxury door entrance ${currentSlide + 1}`}
                  className="w-full h-full object-cover absolute inset-0"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              {/* Subtle Navigation Arrows Overlay */}
              <div className="absolute inset-0 flex items-center justify-between p-4 z-10 pointer-events-none">
                <button 
                  onClick={prevSlide}
                  className="w-10 h-10 bg-white/50 hover:bg-white backdrop-blur-md rounded-full flex items-center justify-center text-stone-800 transition-colors pointer-events-auto shadow-sm"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-10 h-10 bg-white/50 hover:bg-white backdrop-blur-md rounded-full flex items-center justify-center text-stone-800 transition-colors pointer-events-auto shadow-sm"
                  aria-label="Next slide"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* Pagination / Slide indicators matching reference image in light-mode styling */}
            <div className="absolute right-4 bottom-[-40px] hidden sm:flex items-center gap-4">
              <span className="text-xs font-bold text-stone-400 font-mono">0{currentSlide + 1}</span>
              <div className="w-16 h-[2px] bg-stone-200 relative">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-[#b38e5d]"
                  initial={false}
                  animate={{ width: `${((currentSlide + 1) / heroImages.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <span className="text-xs font-bold text-stone-400 font-mono">0{heroImages.length}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
