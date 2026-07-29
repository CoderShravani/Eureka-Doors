import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  SlidersHorizontal,
  Grid,
  Maximize2,
  BadgeCheck
} from 'lucide-react';

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  location: string;
  avatarText: string;
  rating: number;
  category: 'developer' | 'architect' | 'institutional' | 'residential';
  categoryLabel: string;
  productUsed: string;
  verificationDate: string;
  title: string;
  quote: string;
  highlights: string[];
  projectScale: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'testi-1',
    author: 'Rajesh Malhotra',
    role: 'Vice President - Procurement & Projects',
    company: 'Oberoi Realty Ltd.',
    location: 'Mumbai, Maharashtra',
    avatarText: 'RM',
    rating: 5,
    category: 'developer',
    categoryLabel: 'Commercial & Developers',
    productUsed: 'Eureka Gold BWP 710 Plywood & Fire-Rated Flush Doors',
    verificationDate: 'Verified Client • Project Audit Q4 2025',
    title: 'Zero warping in high-rise coastal weather — unmatched structural integrity',
    quote: 'We specified Eureka BWP 710 Plywood and 2-Hour Fire-Rated Flush Doors for over 420 luxury residences. After 3 monsoons near the coastline, there is literally zero moisture swell or warping. Their IS:2202 compliance documentation and batch testing logs give us complete peace of mind.',
    highlights: ['Zero Moisture Swell', '2-Hour Fire Rating Certified', '100% Boiling Water Proof'],
    projectScale: '420+ Luxury Apartments'
  },
  {
    id: 'testi-2',
    author: 'Ar. Ananya Deshmukh',
    role: 'Principal Interior Architect',
    company: 'Studio Form & Space',
    location: 'Pune, Maharashtra',
    avatarText: 'AD',
    rating: 5,
    category: 'architect',
    categoryLabel: 'Architects & Designers',
    productUsed: 'Eureka High-Pressure Laminate & Post-Forming Doors',
    verificationDate: 'Verified Architect Partner • 2025',
    title: 'Flawless edge post-forming and exquisite veneer consistency',
    quote: 'As an interior architect, seamless corner radii and tactile surfaces matter immensely. Eureka post-forming doors feature uniform curves with zero laminate cracking or seam separation. The tactile woodgrain textures elevate our contemporary villa projects effortlessly.',
    highlights: ['Seamless Edge Radii', 'Scratch & Heat Resistant HPL', 'Custom Veneer Matching'],
    projectScale: '18 Premium Villa Estates'
  },
  {
    id: 'testi-3',
    author: 'Vikramaditya Rao',
    role: 'General Manager - Infrastructure',
    company: 'Tata Projects Ltd.',
    location: 'Bengaluru / Hyderabad',
    avatarText: 'VR',
    rating: 5,
    category: 'institutional',
    categoryLabel: 'Institutional & Corporate',
    productUsed: 'Eureka Acoustic Flush Doors & SPVC Panel Doors',
    verificationDate: 'Verified Corporate Contractor • 2025',
    title: 'Precision CNC fitting and acoustic insulation across 1,200 hotel keys',
    quote: 'Executing large-scale hospitality developments requires strict adherence to schedules and acoustic ratings. Eureka supplied over 1,200 acoustic-insulated flush doors for our IT park hotel project on time. The factory-prepped lock mortising saved our site engineers hundreds of labor hours.',
    highlights: ['Acoustic STC Rating 38dB+', 'Pre-Mortised Lock Cavities', 'On-Time Bulk Dispatch'],
    projectScale: '1,200+ Keys Commercial Complex'
  },
  {
    id: 'testi-4',
    author: 'Sanjay & Sunita Joshi',
    role: 'Homeowner & Custom Villa Owner',
    company: 'Private Residence',
    location: 'Savedi, Ahamednagar',
    avatarText: 'SJ',
    rating: 5,
    category: 'residential',
    categoryLabel: 'Residential Projects',
    productUsed: 'Eureka Molded Panel Doors & Teak Laminate Main Door',
    verificationDate: 'Verified Homeowner • Installed 2024',
    title: 'Elegant solid feel, rich sound dampening, and hassle-free maintenance',
    quote: 'We wanted doors for our multi-storey bungalow that would look majestic yet withstand heavy daily use. Eureka molded doors are dense, heavy, and shut with a solid, satisfying acoustic feel. Even after 2 years, the finish shines like brand new without any polish maintenance!',
    highlights: ['Dense Solid Core', 'Noise Reduction', 'Zero Maintenance Polish'],
    projectScale: '3-Story Residential Bungalow'
  },
  {
    id: 'testi-5',
    author: 'Mahesh B. Patel',
    role: 'Managing Director',
    company: 'Bhojwani Waghire Associates',
    location: 'Pimpri-Chinchwad, Pune',
    avatarText: 'MP',
    rating: 5,
    category: 'developer',
    categoryLabel: 'Commercial & Developers',
    productUsed: 'Eureka Solid PVC Flush Doors & Waterproof Frames',
    verificationDate: 'Verified Developer • Project Audit 2025',
    title: '100% Termite proof and waterproof solutions for wet areas',
    quote: 'Bathroom and kitchen wet zones are traditionally problematic for timber doors. Switching to Eureka SPVC Flush Doors and WPC frames eliminated client complaints completely. They are 100% water-resistant, immune to termites, and look indistinguishable from real natural wood.',
    highlights: ['100% Water & Steam Proof', 'Lifetime Termite Guarantee', 'WPC Matching Frames'],
    projectScale: '650 Residential Units'
  },
  {
    id: 'testi-6',
    author: 'Ar. Rohan Mehta',
    role: 'Lead Design Consultant',
    company: 'Nexus Architecture Studio',
    location: 'Nashik, Maharashtra',
    avatarText: 'RM',
    rating: 5,
    category: 'architect',
    categoryLabel: 'Architects & Designers',
    productUsed: 'Eureka Theme Doors & Premium Plywood',
    verificationDate: 'Verified Design Partner • 2025',
    title: 'Empowers unlimited design creativity with custom groove routing',
    quote: 'Eureka’s custom CNC engraving capabilities allow us to translate intricate geometric CAD patterns directly onto door surfaces. The core density of their plywood ensures clean, sharp routing lines without fiber chipping or rough edges.',
    highlights: ['Precision CNC Grooving', 'Chip-Free Timber Core', 'Bespoke Architectural Motifs'],
    projectScale: 'Boutique Commercial Hubs'
  }
];

interface TestimonialsProps {
  onOpenConsultation: (prefillInfo?: string) => void;
}

export default function Testimonials({ onOpenConsultation }: TestimonialsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Filter dataset based on category
  const filteredTestimonials = activeCategory === 'all' 
    ? TESTIMONIALS_DATA 
    : TESTIMONIALS_DATA.filter(t => t.category === activeCategory);

  // Ensure currentIndex stays within bounds when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Handle slide movement
  const slideNext = () => {
    setHasInteracted(true);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const slidePrev = () => {
    setHasInteracted(true);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  // Autoplay handler
  useEffect(() => {
    if (!hasInteracted && !isHovered && viewMode === 'carousel' && filteredTestimonials.length > 1) {
      timerRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
      }, 12000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [hasInteracted, isHovered, viewMode, filteredTestimonials.length]);

  const currentItem = filteredTestimonials[currentIndex] || filteredTestimonials[0];

  // Motion variants for slide animation
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.96
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.96
    })
  };

  return (
    <section 
      id="testimonials-section" 
      className="py-16 sm:py-24 bg-gradient-to-b from-[#faf9f6] via-[#f5f3ed] to-[#faf9f6] relative overflow-hidden border-t border-stone-200/80"
    >
      {/* Background Decorative Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#b38e5d]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d93829]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
      
      {/* Subtle Woodgrain Pattern Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%3C%23000000%3E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b38e5d]/10 border border-[#b38e5d]/20 text-[#967448] text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#b38e5d]" />
            <span>VERIFIED CLIENT FEEDBACK</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight"
          >
            Trusted by Leaders in <span className="text-[#b38e5d] italic font-normal">Architecture</span> & Real Estate
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-stone-600 font-sans leading-relaxed"
          >
            Discover how Eureka’s IS:2202 certified doors, waterproof plywood, and precision post-forming finish perform in real-world residential, commercial, and institutional projects.
          </motion.p>
        </div>

        {/* Quality Metrics Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 bg-white rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-200/80 mb-10 text-stone-800"
        >
          <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-50/80 border border-stone-100">
            <div className="p-2.5 rounded-lg bg-[#b38e5d]/15 text-[#967448] shrink-0">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-serif text-stone-900">4.9 / 5.0</div>
              <div className="text-[11px] text-stone-500 font-medium">1,200+ Verified Audits</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-50/80 border border-stone-100">
            <div className="p-2.5 rounded-lg bg-emerald-500/15 text-emerald-700 shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-serif text-stone-900">10,000+</div>
              <div className="text-[11px] text-stone-500 font-medium">Completed Projects</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-50/80 border border-stone-100">
            <div className="p-2.5 rounded-lg bg-blue-500/15 text-blue-700 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-serif text-stone-900">100%</div>
              <div className="text-[11px] text-stone-500 font-medium">IS:2202 Certified Quality</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-50/80 border border-stone-100">
            <div className="p-2.5 rounded-lg bg-amber-500/15 text-amber-700 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-serif text-stone-900">25+ Yrs</div>
              <div className="text-[11px] text-stone-500 font-medium">Engineering Excellence</div>
            </div>
          </div>
        </motion.div>

        {/* Filter Bar & View Toggle */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-stone-200/60 backdrop-blur-md rounded-2xl overflow-x-auto w-full md:w-auto scrollbar-none">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-white text-stone-900 shadow-md border border-stone-200/80'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
              }`}
            >
              All Feedback ({TESTIMONIALS_DATA.length})
            </button>
            <button
              onClick={() => setActiveCategory('developer')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                activeCategory === 'developer'
                  ? 'bg-white text-stone-900 shadow-md border border-stone-200/80'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
              }`}
            >
              Developers
            </button>
            <button
              onClick={() => setActiveCategory('architect')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                activeCategory === 'architect'
                  ? 'bg-white text-stone-900 shadow-md border border-stone-200/80'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
              }`}
            >
              Architects
            </button>
            <button
              onClick={() => setActiveCategory('institutional')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                activeCategory === 'institutional'
                  ? 'bg-white text-stone-900 shadow-md border border-stone-200/80'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
              }`}
            >
              Institutional
            </button>
            <button
              onClick={() => setActiveCategory('residential')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                activeCategory === 'residential'
                  ? 'bg-white text-stone-900 shadow-md border border-stone-200/80'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
              }`}
            >
              Residential
            </button>
          </div>

          {/* Controls: Autoplay Toggle & Carousel/Grid Mode Switch */}
          <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
            

            <div className="flex items-center bg-stone-200/60 p-1 rounded-xl border border-stone-300/50">
              <button
                onClick={() => setViewMode('carousel')}
                className={`p-1.5 rounded-lg text-xs transition-colors ${
                  viewMode === 'carousel' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500 hover:text-stone-900'
                }`}
                title="Carousel View"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg text-xs transition-colors ${
                  viewMode === 'grid' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500 hover:text-stone-900'
                }`}
                title="Grid Wall View"
              >
                <Grid className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* MAIN DISPLAY CONTENT */}
        {viewMode === 'carousel' ? (
          /* CAROUSEL MODE */
          <div 
            className="relative min-h-[460px] sm:min-h-[420px] flex flex-col justify-between"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Motion Animated Slide Container with Floating Side Arrows */}
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl shadow-stone-300/40 border border-stone-200/90 p-6 sm:p-10 md:p-12 group/card">
              <Quote className="absolute top-6 right-8 w-24 h-24 text-stone-100 pointer-events-none select-none z-0" />

              {/* Floating Side Navigation Arrows on Card */}
              {filteredTestimonials.length > 1 && (
                <>
                  <button
                    onClick={slidePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/90 border border-stone-200 shadow-lg text-stone-700 hover:text-stone-900 hover:bg-white hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none backdrop-blur-sm hidden sm:flex items-center justify-center"
                    aria-label="Previous Feedback (Backward)"
                    title="Previous Feedback"
                  >
                    <ChevronLeft className="w-5 h-5 text-stone-700" />
                  </button>

                  <button
                    onClick={slideNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-[#b38e5d] border border-[#b38e5d] shadow-lg text-white hover:bg-[#967448] hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none hidden sm:flex items-center justify-center"
                    aria-label="Next Feedback (Forward)"
                    title="Next Feedback"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </>
              )}

              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentItem.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut"
                  }}
                  className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Left Column: Client Details & Verification */}
                  <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-100 pb-6 lg:pb-0 lg:pr-8">
                    
                    <div>
                      {/* Category & Verified Badge */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-stone-100 text-stone-700 font-medium text-xs rounded-full border border-stone-200">
                          {currentItem.categoryLabel}
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-700 font-semibold text-xs rounded-full border border-emerald-200/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Verified Client</span>
                        </span>
                      </div>

                      {/* Client Avatar & Name */}
                      <div className="flex items-center gap-4 my-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#b38e5d] to-[#8c6a3e] text-white flex items-center justify-center font-bold text-lg shadow-md shrink-0">
                          {currentItem.avatarText}
                        </div>
                        <div>
                          <h3 className="text-xl font-serif font-bold text-stone-900 leading-tight">
                            {currentItem.author}
                          </h3>
                          <p className="text-xs font-medium text-[#967448] mt-0.5">
                            {currentItem.role}
                          </p>
                          <p className="text-xs text-stone-500 font-sans mt-0.5">
                            {currentItem.company} • {currentItem.location}
                          </p>
                        </div>
                      </div>

                      {/* Product Specified Badge */}
                      <div className="mt-5 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
                        <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">
                          PRODUCT SPECIFIED & INSTALLED
                        </div>
                        <div className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                          <BadgeCheck className="w-4 h-4 text-[#b38e5d] shrink-0" />
                          <span>{currentItem.productUsed}</span>
                        </div>
                        <div className="text-[11px] text-stone-500 mt-1">
                          Scale: <span className="font-semibold text-stone-700">{currentItem.projectScale}</span>
                        </div>
                      </div>
                    </div>

                    {/* Star Rating & Audit Note */}
                    <div className="mt-6 pt-4 border-t border-stone-100">
                      <div className="flex items-center gap-1 text-amber-500 mb-1">
                        {[...Array(currentItem.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <div className="text-[11px] font-medium text-stone-400">
                        {currentItem.verificationDate}
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Quote & Technical Highlights */}
                  <div className="lg:col-span-7 flex flex-col justify-between pl-0 lg:pl-2">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 leading-snug mb-4">
                        "{currentItem.title}"
                      </h4>
                      <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans italic">
                        "{currentItem.quote}"
                      </p>
                    </div>

                    {/* Quality Highlights Tags */}
                    <div className="mt-8 pt-6 border-t border-stone-100">
                      <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-3">
                        KEY QUALITY HIGHLIGHTS
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {currentItem.highlights.map((highlight, idx) => (
                          <span 
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#b38e5d]/10 text-[#8c6a3e] rounded-xl text-xs font-bold border border-[#b38e5d]/20"
                          >
                            <Sparkles className="w-3 h-3 text-[#b38e5d]" />
                            <span>{highlight}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              
              {/* Slide Counter & Dots */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-stone-600 bg-stone-100 px-3 py-1.5 rounded-xl border border-stone-200">
                  Feedback {currentIndex + 1} of {filteredTestimonials.length}
                </span>

                <div className="flex items-center gap-1.5">
                  {filteredTestimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setHasInteracted(true);
                        setDirection(idx > currentIndex ? 1 : -1);
                        setCurrentIndex(idx);
                      }}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? 'w-8 bg-[#b38e5d]'
                          : 'w-2.5 bg-stone-300 hover:bg-stone-400'
                      }`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                      title={`Feedback ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Labeled Prev / Next Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={slidePrev}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-white border border-stone-200 shadow-sm text-stone-700 hover:text-stone-900 hover:bg-stone-50 active:scale-95 transition-all duration-200 font-bold text-xs"
                  aria-label="Previous Testimonial"
                  title="Previous Feedback (Backward)"
                >
                  <ChevronLeft className="w-4 h-4 text-stone-600" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={slideNext}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-[#b38e5d] text-white shadow-md hover:bg-[#967448] active:scale-95 transition-all duration-200 font-bold text-xs"
                  aria-label="Next Testimonial"
                  title="Next Feedback (Forward)"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>

            </div>
          </div>
        ) : (
          /* GRID WALL VIEW */
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTestimonials.map((t) => (
              <div 
                key={t.id}
                className="bg-white rounded-2xl p-6 shadow-xl shadow-stone-200/40 border border-stone-200/80 flex flex-col justify-between hover:border-[#b38e5d]/50 transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Verified
                    </span>
                  </div>

                  <h4 className="text-base font-serif font-bold text-stone-900 mb-2 leading-snug group-hover:text-[#b38e5d] transition-colors">
                    "{t.title}"
                  </h4>

                  <p className="text-xs text-stone-600 italic line-clamp-4 leading-relaxed mb-4">
                    "{t.quote}"
                  </p>
                </div>

                <div>
                  <div className="pt-3 border-t border-stone-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-stone-100 text-[#b38e5d] flex items-center justify-center font-bold text-xs shrink-0 border border-stone-200">
                      {t.avatarText}
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs font-bold text-stone-900 truncate">{t.author}</div>
                      <div className="text-[10px] text-stone-500 truncate">{t.company}</div>
                    </div>
                  </div>

                  <div className="mt-3 text-[10px] text-stone-500 bg-stone-50 p-2 rounded-lg border border-stone-100">
                    <span className="font-bold text-stone-700">Product:</span> {t.productUsed}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* CTA Footer Prompt */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-8 bg-stone-900 text-white rounded-3xl relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#b38e5d]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
              Ready to elevate your project with certified timber craftsmanship?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mb-6 font-sans">
              Request a physical sample box, detailed technical specification sheet, or schedule an architect consultation.
            </p>
            <button
              onClick={() => onOpenConsultation('Testimonial Page CTA')}
              className="px-6 py-3 bg-[#b38e5d] text-white rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#967448] transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
            >
              Request Free Consultation & Samples
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
