import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight, 
  Layers, 
  TreePine, 
  Users, 
  Clock, 
  Flame, 
  Droplets, 
  Wrench, 
  FileCheck, 
  Target, 
  Compass, 
  Factory,
  ChevronDown,
  Quote,
  Star,
  Globe,
  HardHat,
  Microscope,
  RotateCcw,
  GraduationCap,
  HeartHandshake,
  BookOpen,
  Trophy,
  Lightbulb,
  Heart
} from 'lucide-react';

interface AboutUsProps {
  onOpenConsultation: (info?: string) => void;
  onNavigateHome: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function AboutUs({ onOpenConsultation, onNavigateHome, onNavigate }: AboutUsProps) {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [activeInfraTab, setActiveInfraTab] = useState<'overview' | 'craftsmanship' | 'sustainability' | 'certifications' | null>(null);

  // Key Corporate Stats
  const stats = [
    { label: 'Manufacturing Hub', value: '250,000+', unit: 'Sq. Ft.', desc: 'High-precision plant in Khed-Shivapur, Pune' },
    { label: 'Monthly Capacity', value: '50,000+', unit: 'Units', desc: 'Doors, blockboards & plywood delivered pan-India' },
    { label: 'Landmark Projects', value: '10,000+', unit: 'Sites', desc: 'Residential towers, hotels, hospitals & IT parks' },
    { label: 'Dealer Network', value: '500+', unit: 'Dealers', desc: 'Authorized partners across 20+ Indian states' }
  ];

  // Founder & MD Qualifications
  const mdQualifications = [
    { title: 'PhD in Entrepreneurship', desc: 'Doctoral research on industrial scaling & sustainable business strategy' },
    { title: 'MBA in Marketing', desc: 'Specialized in customer experience, brand building & channel distribution' },
    { title: 'Bachelors in Political Science', desc: 'Strong foundation in governance, ethics & community development' },
    { title: 'DIE (Diploma in Industrial Electronic Engg.)', desc: 'Technical mastery of automated systems, CNC control & heavy machinery' }
  ];

  // Founder Awards & Recognitions
  const mdAwards = [
    { award: 'Best Businessman Award', presenter: 'Social Activist Medha Patkar', category: 'Social & Business Leadership' },
    { award: 'Natrang Academy Award', presenter: 'Minister Girish Bapat & Dr. Nilesh Sabale', category: 'Cultural & Entrepreneurial Excellence' },
    { award: 'Udyogratna Business Award', presenter: 'Minister Balasaheb Thorat (Bhausaheb Thorat Trust)', category: 'Industrial Achievement' },
    { award: 'Veer Bharati Business Award', presenter: 'Minister Madhukar Pichad (Aantarbharati Trust)', category: 'Rural Development & Commerce' },
    { award: 'Lions Club Award', presenter: 'Lions Club International', category: 'Outstanding Social Contribution' },
    { award: 'Best Businessman Award', presenter: 'Industrial Cooperative Society', category: 'Cooperative Commerce Excellence' },
    { award: 'Sidhdh Seva Award', presenter: 'Swami Hardas Foundation', category: 'Community Welfare & Service' },
    { award: 'Dr. Radhakrishnan Award', presenter: 'Educational Excellence Committee', category: 'Contribution to Academic & Student Mentorship' }
  ];

  // Core Corporate Values
  const coreValues = [
    {
      title: 'Dedication',
      quote: '"It’s not capability, but the willingness that counts."',
      desc: 'Willingness is the first step towards dedication. We strive to do something outstanding in every door and panel we create.'
    },
    {
      title: 'Continuous Improvement',
      quote: 'Learning and evolving at every step.',
      desc: 'Our culture promotes continuous learning and empowered decision-making, driving personal skill enhancement and organizational growth.'
    },
    {
      title: 'Reliability',
      quote: 'Ethics over supervision.',
      desc: 'We forgive mistakes but never lies or unfaithfulness. We believe in strict ethical business conduct rather than micromanagement.'
    },
    {
      title: 'Innovativeness',
      quote: 'Pioneering new industry trends.',
      desc: 'While we adopt emerging market trends, our primary focus is to innovate and create new benchmarks for waterproof, fire-safe doors.'
    },
    {
      title: 'Compassion',
      quote: 'Recognizing suffering and taking action.',
      desc: 'We proactively identify the needs and challenges of others—our workforce, clients, and society—and take immediate action to help.'
    }
  ];

  // Company Timeline / Milestones
  const milestones = [
    {
      year: '2000',
      title: 'Company Inception in Pune',
      subtitle: 'Founded by Dr. Pramod Bhalerao',
      description: 'Eureka Doors & Plywood commenced operations in Pune with a vision to replace low-quality timber doors with seasoned, engineered flush doors and high-density PVC panels.',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b2?auto=format&fit=crop&q=80&w=800',
      tag: 'Foundation'
    },
    {
      year: '2008',
      title: 'Mega Manufacturing Hub in Khed-Shivapur, Pune',
      subtitle: '250,000+ Sq. Ft. Automated Industrial Plant',
      description: 'Established our sprawling manufacturing facility in Khed-Shivapur, Pune, equipped with heavy-duty cold & hot pressing machinery, automated kiln dryers, and CNC routers.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
      tag: 'Khed-Shivapur Facility'
    },
    {
      year: '2014',
      title: 'Solid PVC & SPVC Waterproof Door Division',
      subtitle: '100% Termite & Waterproof Breakthrough',
      description: 'Pioneered Solid PVC and SPVC panel door lines to solve moisture, humidity, and termite problems in bathrooms, coastal homes, and commercial wet areas.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
      tag: 'Waterproof Tech'
    },
    {
      year: '2019',
      title: 'German CNC Post-Forming & 3D Vacuum Press',
      subtitle: 'European Architectural Finish',
      description: 'Imported state-of-the-art European CNC vacuum membrane presses and automatic edge-lining machinery for seamless 3D post-forming doors with zero joint lines.',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=800',
      tag: 'Automation'
    },
    {
      year: '2023',
      title: '120-Minute Fire-Rated Door Certification',
      subtitle: 'Safety & Institutional Excellence',
      description: 'Achieved official CBRI & BIS certification for 120-minute fire-rated wooden flush doors, becoming a trusted choice for IT parks, hospital escapes, and luxury towers.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      tag: 'Fire Safety'
    },
    {
      year: '2025+',
      title: 'Pan-India 500+ Dealer Network & Green Eco-Plant',
      subtitle: 'Zero-Emission Eco Future',
      description: 'Transitioned to solar-powered wood seasoning kilns, eco-friendly low-emission adhesives, and expanding our footprint across 20+ states in India.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
      tag: 'Sustainability'
    }
  ];

  // Manufacturing Process
  const manufacturingSteps = [
    {
      step: '01',
      title: 'Kiln Seasoning & Pressure Impregnation',
      icon: <TreePine className="w-6 h-6 text-[#b38e5d]" />,
      desc: '100% plantation timber undergoes vacuum pressure impregnation with anti-borer chemicals and computer-controlled kiln drying to reduce moisture below 10%.'
    },
    {
      step: '02',
      title: 'Precision CNC Core Assembly',
      icon: <Wrench className="w-6 h-6 text-[#b38e5d]" />,
      desc: 'Solid hardwood stiles and rails are finger-jointed and interlocking timber batten cores are laid down with zero internal gaps in Khed-Shivapur.'
    },
    {
      step: '03',
      title: 'High-Tonnage Hydraulic Hot Pressing',
      icon: <Layers className="w-6 h-6 text-[#b38e5d]" />,
      desc: 'Cross-bands and HDF/HPL faces are bonded using phenol-formaldehyde synthetic resin under 200°C steam heat and multi-day hydraulic pressure.'
    },
    {
      step: '04',
      title: '3D Vacuum Membrane & Edge Post-Forming',
      icon: <Factory className="w-6 h-6 text-[#b38e5d]" />,
      desc: 'High-density PVC, natural wood veneers, or textured laminates are post-formed around edges under uniform vacuum pressure for seamless protection.'
    },
    {
      step: '05',
      title: 'Rigid BIS Quality Inspection & Dispatch',
      icon: <Microscope className="w-6 h-6 text-[#b38e5d]" />,
      desc: 'Every door undergoes boiling water immersion test, slam test, edge impact resistance audit, and pre-mortising dimensional verification.'
    }
  ];

  // Quality Certifications
  const certifications = [
    {
      code: 'IS:2202 (Part 1)',
      name: 'Wooden Flush Door Shutters Specification',
      authority: 'Bureau of Indian Standards (BIS)',
      badge: 'Certified',
      desc: 'Ensures dimensional stability, core density, and structural endurance under heavy cyclic usage.'
    },
    {
      code: 'IS:710 Marine Grade',
      name: 'Boiling Water Proof (BWP) Plywood',
      authority: 'Bureau of Indian Standards (BIS)',
      badge: 'Certified',
      desc: 'Guarantees 72 hours of uninterrupted boiling water resistance without ply delamination.'
    },
    {
      code: 'IS:303 Moisture Resistant',
      name: 'Commercial Plywood & Blockboards',
      authority: 'Bureau of Indian Standards (BIS)',
      badge: 'Certified',
      desc: 'High moisture resistance for interior cabinetry, wardrobes, and panelling.'
    },
    {
      code: 'ISO 9001:2015',
      name: 'Quality Management Systems',
      authority: 'International Organization for Standardization',
      badge: 'Global Standard',
      desc: 'Standardized factory workflows, batch traceability, and continuous customer audit loops.'
    },
    {
      code: '120-Min Fire Rated',
      name: 'CBRI / Fire Safety Certificate',
      authority: 'Central Building Research Institute',
      badge: 'Safety Compliance',
      desc: 'Intumescent seal technology preventing toxic gas and heat propagation for 2 hours.'
    },
    {
      code: 'Green Pro & Eco-Label',
      name: 'Environmentally Sustainable Timber',
      authority: 'Indian Green Building Council (IGBC)',
      badge: 'Eco-Certified',
      desc: 'Sourced exclusively from certified sustainable agro-forestry plantations.'
    }
  ];

  // FAQ Accordion
  const faqs = [
    {
      q: 'Where is Eureka Doors & Plywood factory located?',
      a: 'Our main state-of-the-art manufacturing plant is located at Khed-Shivapur (near Pune), Maharashtra, India. Spanning over 250,000 sq. ft., this modern complex houses our automated kiln-seasoning chambers, hydraulic hot presses, and CNC routers.'
    },
    {
      q: 'Who is the Founder and Managing Director of Eureka India?',
      a: 'Dr. Pramod Bhalerao is the Founder & Managing Director of Eureka India. Holding a PhD in Entrepreneurship, an MBA in Marketing, a Bachelors in Political Science, and a Diploma in Industrial Electronic Engineering, he has guided Eureka since 2000 with the core purpose "To secure privacy with ambience".'
    },
    {
      q: 'What social initiatives is Eureka India involved in?',
      a: 'Dr. Pramod Bhalerao is the Chairperson & Director of Chaitanya Sevabhawi Sanstha and founder of Shree Sai Seva Residential School for mentally challenged children. Eureka allocates corporate resources to support special education and social welfare.'
    },
    {
      q: 'What makes Eureka flush doors superior to traditional local timber doors?',
      a: 'Unlike unseasoned local doors that warp or swell during monsoons, Eureka doors utilize kiln-seasoned hardwood pre-treated against termites and borers at our Khed-Shivapur facility. Our solid blockboard cores are hot-pressed with phenol-formaldehyde resin for 100% dimensional stability.'
    }
  ];

  return (
    <div className="bg-[#FAF8F5] text-stone-800 pt-20 pb-16 font-sans">
      
      {/* Breadcrumb & Navigation Bar - Light Theme */}
      <div className="bg-white border-b border-stone-200/80 py-3.5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-stone-500 font-medium">
            <button onClick={onNavigateHome} className="hover:text-stone-900 transition-colors">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#b38e5d] font-bold">About Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section - Light Theme Elegant Design */}
      <section className="relative bg-gradient-to-b from-stone-100 via-amber-50/30 to-[#FAF8F5] text-stone-900 pt-12 pb-20 overflow-hidden border-b border-stone-200/60">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#b38e5d]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/20 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#b38e5d]/15 border border-[#b38e5d]/30 text-[#967448] text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
            >
              <span>FACTORY AT KHED-SHIVAPUR, PUNE • ESTD 2000</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-serif font-extrabold text-stone-900 tracking-tight leading-[1.15]"
            >
              Engineering <span className="text-[#b38e5d] italic font-normal">Perfection</span> in Wood, Doors & Plywood
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-stone-600 font-sans leading-relaxed"
            >
              Founded by <strong>Dr. Pramod Bhalerao</strong> with a massive manufacturing facility spanning over 250,000+ sq. ft. in <strong>Khed-Shivapur, Pune</strong>, Eureka India is a trusted pioneer in IS:2202 certified flush doors, solid PVC doors, and IS:710 marine plywood.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => onOpenConsultation('About Us Page Hero')}
                className="px-6 py-3.5 bg-[#b38e5d] text-white rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#967448] transition-all shadow-lg hover:shadow-xl hover:shadow-[#b38e5d]/20"
              >
                Inquire & Request Catalog
              </button>
              <button
                onClick={() => onNavigate('products')}
                className="px-6 py-3.5 bg-white hover:bg-stone-50 text-stone-800 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase border border-stone-300 transition-all shadow-sm"
              >
                Explore Product Range
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Corporate Metrics Band - Light Theme */}
      <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-white rounded-3xl shadow-xl shadow-stone-200/70 border border-stone-200">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-amber-50/40 to-stone-50 border border-stone-200/80 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-[#b38e5d] uppercase tracking-wider block mb-1">
                  {stat.label}
                </span>
                <div className="text-3xl font-serif font-extrabold text-stone-900">
                  {stat.value} <span className="text-sm font-sans font-medium text-stone-500">{stat.unit}</span>
                </div>
              </div>
              <p className="mt-3 text-xs text-stone-600 font-sans border-t border-stone-200/80 pt-2.5">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROMINENT MD'S DESK / FOUNDER SECTION - LIGHT THEME */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white text-stone-900 rounded-3xl shadow-xl overflow-hidden border border-stone-200 p-8 sm:p-12 relative">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

          {/* Header Tag */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8 border-b border-stone-100 pb-6">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-[#b38e5d]/15 border border-[#b38e5d]/30 text-[#967448] text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-sm">
                <Award className="w-4 h-4 text-[#b38e5d]" />
                <span>MD'S DESK & FOUNDER PROFILE</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Founder Photo Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative group rounded-3xl overflow-hidden border-2 border-[#b38e5d]/40 shadow-xl bg-stone-100">
                
                {/* Real Founder Photo */}
                <img 
                  src="/founder.jpg" 
                  alt="Dr. Pramod Bhalerao - Managing Director" 
                  className="w-full h-[420px] object-cover object-top transition-transform duration-500 group-hover:scale-102"
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="text-2xl font-serif font-bold text-white">
                    Dr. Pramod Bhalerao
                  </h3>
                  <p className="text-xs font-bold text-[#b38e5d] uppercase tracking-wider mt-1">
                    Founder & Managing Director, Eureka India Group
                  </p>
                  <p className="text-xs text-stone-200 mt-2 font-sans italic">
                    "To secure privacy with ambience."
                  </p>
                </div>
              </div>

              {/* Qualifications Box */}
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
                <div className="flex items-center gap-2 text-xs font-bold text-[#b38e5d] uppercase tracking-wider mb-4">
                  <GraduationCap className="w-4 h-4 text-[#b38e5d]" />
                  <span>ACADEMIC QUALIFICATIONS</span>
                </div>
                <div className="space-y-3">
                  {mdQualifications.map((q, idx) => (
                    <div key={idx} className="flex items-start gap-3 border-b border-stone-200/80 pb-2.5 last:border-0 last:pb-0">
                      <div className="w-2 h-2 rounded-full bg-[#b38e5d] mt-1.5 shrink-0" />
                      <div>
                        <h4 className="text-xs font-bold text-stone-900">{q.title}</h4>
                        <p className="text-[11px] text-stone-600 font-sans">{q.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Inspirational Journey & Core Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <span className="text-xs font-bold text-[#b38e5d] uppercase tracking-widest block mb-1">
                  HISTORICAL ORIGINS
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
                  How Eureka Doors Came Into Existence
                </h2>
                <div className="w-20 h-1 bg-[#b38e5d] rounded-full mt-3" />
              </div>

              <div className="space-y-4 text-sm text-stone-600 leading-relaxed font-sans">
                <p>
                  Since childhood, <strong>Dr. Pramod Bhalerao</strong> was a curious and deeply observant mind, constantly analyzing market needs. During his school days, he was associated with social organizations where raising funds for social cause was a primary concern.
                </p>
                <p>
                  Observing that donations received were not sufficient to cater to the large number of needy people in society, a strong desire generated in his mind to earn independently so he could serve the betterment of society.
                </p>
                <p>
                  He realized he would never be able to earn that much doing a monotonous job and resolved that he must run a business to generate funds to help society the way he wanted to. In 2000, Eureka Doors was born in Pune, later establishing its state-of-the-art 250,000+ sq. ft. manufacturing facility at <strong>Khed-Shivapur, Pune</strong>.
                </p>
              </div>

              {/* Core Purpose Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-50 to-stone-50 border border-amber-200/80 flex items-start gap-4 shadow-sm">
                <Quote className="w-8 h-8 text-[#b38e5d] shrink-0 mt-1" />
                <div>
                  <span className="text-[10px] font-bold text-[#b38e5d] uppercase tracking-widest block mb-1">
                    CORE PURPOSE OF EUREKA INDIA
                  </span>
                  <p className="text-xl font-serif font-bold text-stone-900 italic">
                    "To secure privacy with ambience"
                  </p>
                  <p className="text-xs text-stone-600 mt-1">
                    Guiding every door, blockboard, and marine plywood panel engineered at Khed-Shivapur, Pune.
                  </p>
                </div>
              </div>

              {/* Social Responsibility & Philanthropy Box */}
              <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                  <Heart className="w-4 h-4 text-emerald-600" />
                  <span>SOCIAL RESPONSIBILITY & PHILANTHROPY</span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  Dr. Pramod Bhalerao is <strong>Chairperson and Director of Chaitanya Sevabhawi Sanstha</strong>, involved in many social welfare activities and running <strong>Shree Sai Seva Residential School</strong> for mentally challenged children. He has also delivered over <strong>150+ motivational & technical lectures</strong> to students of management institutes and entrepreneurs to develop effective business strategies.
                </p>
              </div>

            </div>

          </div>

          {/* Awards & Recognitions Showcase Grid - Light Theme */}
          <div className="mt-12 pt-10 border-t border-stone-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold text-[#b38e5d] uppercase tracking-widest">
                  HONORS & RECOGNITION
                </span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">
                  Awards Bestowed Upon Dr. Pramod Bhalerao
                </h3>
              </div>
              <Trophy className="w-6 h-6 text-[#b38e5d]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {mdAwards.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 hover:border-[#b38e5d]/60 transition-all shadow-sm group"
                >
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                  <h4 className="text-xs font-serif font-bold text-stone-900 group-hover:text-[#b38e5d] transition-colors">{item.award}</h4>
                  <p className="text-[11px] text-[#b38e5d] font-semibold mt-1">By {item.presenter}</p>
                  <p className="text-[10px] text-stone-500 mt-1 font-sans">{item.category}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#b38e5d] uppercase tracking-widest">
              OUR GUIDING PILLARS
            </span>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mt-2">
              The 5 Core Values of Eureka India
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 hover:border-[#b38e5d]/60 transition-all flex flex-col justify-between shadow-sm group"
              >
                <div>
                  <span className="text-2xl font-serif font-black text-stone-200 group-hover:text-[#b38e5d] transition-colors block mb-2">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-stone-900 group-hover:text-[#b38e5d] transition-colors mb-1">{v.title}</h3>
                  <p className="text-xs font-serif font-bold text-[#967448] italic mb-3">{v.quote}</p>
                  <p className="text-sm text-stone-600 leading-relaxed font-sans">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section: Overview, Craftsmanship, Sustainability, Certifications */}
      <section className="py-16 bg-stone-100/60 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#b38e5d] uppercase tracking-widest">
              INFRASTRUCTURE & TECHNOLOGY
            </span>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mt-2">
              World-Class Manufacturing
            </h2>
          </div>

          <AnimatePresence mode="wait">
            {!activeInfraTab ? (
              <motion.div
                key="infra-thumbnails"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {[
                  { id: 'overview', title: 'Khed-Shivapur Factory & Infrastructure', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800' },
                  { id: 'craftsmanship', title: 'Precision Engineering', image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=800' },
                  { id: 'sustainability', title: 'Green Forestry', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800' },
                  { id: 'certifications', title: 'BIS & IS Certifications', image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=800' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5, scale: 1.05 }}
                    onClick={() => setActiveInfraTab(item.id as any)}
                    className="group cursor-pointer rounded-3xl overflow-hidden shadow-md border border-stone-200 relative aspect-square"
                  >
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h4 className="text-lg font-serif font-bold text-white leading-tight">{item.title}</h4>
                      <span className="inline-block mt-3 text-xs font-bold text-amber-400 uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                        Read More &rarr;
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="infra-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* 1. Overview */}
                {activeInfraTab === 'overview' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-stone-200">
                  <div className="lg:col-span-6 space-y-4">
                    <span className="text-xs font-bold text-[#b38e5d] uppercase tracking-widest">
                      KHED-SHIVAPUR, PUNE
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                      250,000 Sq. Ft. Automated Production Powerhouse
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed font-sans">
                      Located in Khed-Shivapur, Pune, our integrated manufacturing complex houses heavy hydraulic multi-opening hot presses, automated kiln-seasoning chambers, CNC router suites, dust-free lacquer booths, and 3D membrane vacuum presses under one roof.
                    </p>
                    <ul className="space-y-2 pt-2">
                      <li className="flex items-center gap-2 text-xs font-bold text-stone-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Capacity to deliver 50,000+ units every month seamlessly</span>
                      </li>
                      <li className="flex items-center gap-2 text-xs font-bold text-stone-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>In-house chemical pressure treatment cylinders for 100% borer protection</span>
                      </li>
                      <li className="flex items-center gap-2 text-xs font-bold text-stone-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Factory pre-mortising and custom size sizing cutters</span>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:col-span-6">
                    <img 
                      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800" 
                      alt="Eureka Manufacturing Unit in Khed-Shivapur" 
                      className="rounded-2xl shadow-lg object-cover w-full h-80 border border-stone-200"
                    />
                  </div>
                </div>
                )}

                {/* 2. Craftsmanship */}
                {activeInfraTab === 'craftsmanship' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-stone-200">
                  <div className="lg:col-span-6 order-last lg:order-first">
                    <img 
                      src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=800" 
                      alt="Precision Engineering" 
                      className="rounded-2xl shadow-lg object-cover w-full h-80 border border-stone-200"
                    />
                  </div>
                  <div className="lg:col-span-6 space-y-4">
                    <span className="text-xs font-bold text-[#b38e5d] uppercase tracking-widest">
                      GERMAN & EUROPEAN TECHNOLOGY
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                      Seamless Post-Forming & Zero-Gap Blockboard Core
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed font-sans">
                      We combine old-world timber craftsmanship with European precision machinery. Our post-forming door series features rounded edges wrapped continuously in high-pressure laminates without visible joinery seams.
                    </p>
                    <ul className="space-y-2 pt-2">
                      <li className="flex items-center gap-2 text-xs font-bold text-stone-800">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>Phenol Formaldehyde (PF) synthetic resin hot bonding</span>
                      </li>
                      <li className="flex items-center gap-2 text-xs font-bold text-stone-800">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>High STC acoustic damping cores for 38dB+ noise reduction</span>
                      </li>
                      <li className="flex items-center gap-2 text-xs font-bold text-stone-800">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>Micro-polished smooth surfaces ready for polish or paint</span>
                      </li>
                    </ul>
                  </div>
                </div>
                )}

                {/* 3. Sustainability */}
                {activeInfraTab === 'sustainability' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-stone-200">
                  <div className="lg:col-span-6 space-y-4">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
                      SUSTAINABLE FORESTRY & ECO RESPONSIBILITY
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                      100% Plantation Timber & Low-Emission Adhesives
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed font-sans">
                      Eureka is deeply committed to preserving natural rainforests. We source 100% of our timber requirement from certified renewable agro-forestry species like Poplar, Gurjan, Eucalyptus, and Rubberwood.
                    </p>
                    <ul className="space-y-2 pt-2">
                      <li className="flex items-center gap-2 text-xs font-bold text-stone-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Zero deforestation timber sourcing policy</span>
                      </li>
                      <li className="flex items-center gap-2 text-xs font-bold text-stone-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>E0 & E1 low formaldehyde emissions for safe indoor air quality</span>
                      </li>
                      <li className="flex items-center gap-2 text-xs font-bold text-stone-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Recyclable water-treatment plants and solar wood drying kilns</span>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:col-span-6">
                    <img 
                      src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" 
                      alt="Sustainable Forestry" 
                      className="rounded-2xl shadow-lg object-cover w-full h-80 border border-stone-200"
                    />
                  </div>
                </div>
                )}

                {/* 4. Certifications */}
                {activeInfraTab === 'certifications' && (
                <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-stone-200">
                  <div className="text-center max-w-2xl mx-auto mb-8">
                    <span className="text-xs font-bold text-[#b38e5d] uppercase tracking-widest">
                      BIS & ISO COMPLIANCE
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                      Certified Quality Standards You Can Trust
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((c, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-[#b38e5d]/60 transition-colors shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-[#b38e5d]">{c.code}</span>
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            {c.badge}
                          </span>
                        </div>
                        <h4 className="text-sm font-serif font-bold text-stone-900 mb-1">{c.name}</h4>
                        <div className="text-[11px] font-semibold text-stone-400 mb-2">{c.authority}</div>
                        <p className="text-xs text-stone-600 leading-relaxed">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {activeInfraTab && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setActiveInfraTab(null)}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-stone-300 text-xs font-bold uppercase tracking-wider text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-all"
              >
                Back
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Interactive Manufacturing Process - Light Theme */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-[#b38e5d] uppercase tracking-widest">
            THE KHED-SHIVAPUR CRAFT PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-2">
            From Kiln Seasoning to Final IS Quality Seal
          </h2>
          <p className="mt-3 text-sm text-stone-600 font-sans">
            Every door passes through 5 distinct quality control stages before leaving our Khed-Shivapur facility in Pune.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {manufacturingSteps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-stone-200 shadow-md flex flex-col justify-between relative group hover:border-[#b38e5d] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-serif font-black text-stone-300 group-hover:text-[#b38e5d] transition-colors">
                    {step.step}
                  </span>
                  <div className="p-2 rounded-xl bg-amber-50/80 border border-amber-200/60">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-sm font-serif font-bold text-stone-900 mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Brand Growth Journey / Timeline - Light Theme */}
      <section className="py-16 bg-white text-stone-900 relative overflow-hidden border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#b38e5d] uppercase tracking-widest">
              OUR MILESTONES
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-2">
              Over Two Decades of Pioneering Growth
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-stone-600">
              Click on any year to explore how Dr. Pramod Bhalerao evolved Eureka India into a leader in doors & plywood.
            </p>
          </div>

          {/* Year Buttons */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
            {milestones.map((m, idx) => (
              <button
                key={m.year}
                onClick={() => setActiveMilestoneIndex(idx)}
                className={`px-5 py-2.5 rounded-2xl font-bold text-xs transition-all whitespace-nowrap ${
                  idx === activeMilestoneIndex
                    ? 'bg-[#b38e5d] text-white shadow-md scale-105'
                    : 'bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200/80'
                }`}
              >
                {m.year}
              </button>
            ))}
          </div>

          {/* Active Milestone Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={milestones[activeMilestoneIndex].year}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF8F5] border border-stone-200 p-8 sm:p-12 rounded-3xl shadow-md"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl font-serif font-black text-[#b38e5d]">
                    {milestones[activeMilestoneIndex].year}
                  </span>
                  <span className="px-3 py-1 bg-[#b38e5d]/15 text-[#967448] text-xs font-bold rounded-full border border-[#b38e5d]/30">
                    {milestones[activeMilestoneIndex].tag}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                  {milestones[activeMilestoneIndex].title}
                </h3>
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  {milestones[activeMilestoneIndex].subtitle}
                </p>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans pt-2">
                  {milestones[activeMilestoneIndex].description}
                </p>
              </div>

              <div className="lg:col-span-5">
                <img 
                  src={milestones[activeMilestoneIndex].image} 
                  alt={milestones[activeMilestoneIndex].title} 
                  className="rounded-2xl shadow-lg object-cover w-full h-72 border border-stone-200"
                />
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#b38e5d] uppercase tracking-widest">
            COMPANY FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-2">
            Frequently Asked Questions About Eureka India
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif font-bold text-stone-900 hover:text-[#b38e5d] transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-stone-400 transition-transform ${isOpen ? 'rotate-180 text-[#b38e5d]' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans border-t border-stone-100 pt-3"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>



    </div>
  );
}
