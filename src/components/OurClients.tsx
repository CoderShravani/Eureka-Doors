import { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  ChevronRight, 
  Search, 
  Building2, 
  Landmark, 
  GraduationCap, 
  Hospital, 
  Briefcase, 
  Users, 
  Building, 
  MapPin, 
  Handshake, 
  Award, 
  ChevronLeft, 
  ArrowRight,
  CheckCircle2, RotateCcw
} from 'lucide-react';

interface OurClientsProps {
  onOpenConsultation: (prefillInfo?: string) => void;
  onNavigateHome?: () => void;
}

// Category lists extracted directly from official references & client lists
const BUILDERS_LIST = [
  'Aakar Construction',
  'Adhya Builders',
  'Anand Tara Construction',
  'Atharv Enterprises',
  'B. chavan Asso',
  'Balaji Builders',
  'Bhojwani Construction',
  'Bhojwani Waghire Associates',
  'Builder Combine',
  'D. S. Kulkarni Builders',
  'Darode Jog Builder',
  'Datta Digambar Construction',
  'DNV Realites',
  'Egale Properties',
  'Ganesh Bhintade',
  'Ganesh Construction',
  'Ganesh Developers & Co',
  'Gera Developers',
  'H. A. Developers',
  'Hardevi Associates',
  'Hindustan Builders',
  'J. J. Associates',
  'Kshitij Project',
  'Kothari Tingare Associates',
  'Kudale Construction',
  'Kunal Group',
  'Larsen & Toubro Ltd.',
  'Madkar Construction',
  'Mahalaxmi Construction',
  'Maharshi Enterprises',
  'Manual M.T. Construction',
  'Megha Construction',
  'Marvel Realtors',
  'Naiknaware Associates',
  'Natu Paranjpe',
  'Om Developers',
  'Om Realtors',
  'Omkar Construction',
  'P. P. Construction',
  'P. S. Developers',
  'Parth Construction',
  'Pathmesh Construction',
  'Polight Group',
  'Pragati Construction',
  'Purple Group',
  'R.K Lunkad',
  'Raja Properties',
  'Rane Karandikar Associates',
  'Raviraj Group',
  'Runwal Housing Corporation',
  'S.R. Construction',
  'Sai Shradha Developers',
  'Samarth Properties',
  'Sancheti Associates',
  'Shapoorji & Pallonji Group',
  'Shinde Builders',
  'Shiv Developers',
  'Shubham Associates',
  'Siddhi Developers',
  'Sidhivinayak Group',
  'Sonigara Construction',
  'Sukhwani Construction',
  'Sunraj Associates',
  'Surana Associates',
  'V.S. Kalbhor',
  'V. V. Phuge Construction Pvt. Ltd',
  'Yash Lxmi Developers',
  'Xrbia'
];

const EDUCATIONAL_INSTITUTES_LIST = [
  "Abhinav Education Society's",
  'DY Patil College of Engineering',
  'Sharad Pawar Technical Institute',
  'University of Pune',
  'Shree Sai Seva School',
  'Bharati Vidyapeeth University',
  'Maharshi Karve Stree Shikshan Sanstha',
  'Shri Siddhivinayak Arts and Commerce College',
  'Vision School',
  'Savali Matimanda Vidyalay',
  'Bishop School',
  'Modern College of Engineering',
  'Sinhgad Technical Education Society',
  'Suryadatta Institute of Managment',
  'Niwasi Matimanda Vidyalay'
];

const GOVERNMENT_LIST = [
  'Public Works Department (PWD)',
  'Military Engineer Services (MES)',
  'Maharashtra Housing and Area Development Authority (MHADA)',
  'Bharat Sanchar Nigam Limited (BSNL)',
  'Indian Army Services',
  'Municipal Corporation',
  'Irrigation Department',
  'Forest Department',
  'Maharashtra State Road Development Corporation',
  'City and Industrial Development Corporation (CIDCO)',
  'Central Public Works Department (CPWD)',
  'State Police Housing Corporation'
];

const HOSPITALS_LIST = [
  'Sassoon General Hospital',
  'Deenanath Mangeshkar Hospital',
  'Ruby Hall Clinic',
  'Jehangir Hospital',
  'Sahyadri Super Speciality Hospital',
  'Inamdar Regional Hospital',
  'KEM Hospital & Research Centre',
  'Sanjeevan Hospital',
  'Noble Hospital',
  'Galaxy Care Hospital',
  'Bharati Hospital',
  'Poona Hospital and Research Centre'
];

const CORPORATE_LIST = [
  'Tata Group',
  'SKF India Ltd.',
  'FIAT India Automobiles',
  'Godrej Industries',
  'Larsen & Toubro (L&T)',
  'Shapoorji Pallonji & Co.',
  'Vascon Engineers',
  'Gera Developments',
  'Eiffel Developers',
  'Pinnacle Group',
  'Nirman Group',
  'Mark Ventures'
];

// Industry Category Card Data
interface IndustryCategory {
  id: string;
  title: string;
  description: string;
  icon: any;
  bgImage: string;
}

const INDUSTRY_CATEGORIES: IndustryCategory[] = [
  {
    id: 'builders',
    title: 'Builders & Developers',
    description: 'Builders, Developers & Construction Companies',
    icon: Building2,
    bgImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'government',
    title: 'Government',
    description: 'Government Departments & Public Sector Units',
    icon: Landmark,
    bgImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'educational',
    title: 'Educational Institutes',
    description: 'Schools, Colleges, Universities & Institutes',
    icon: GraduationCap,
    bgImage: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'hospitals',
    title: 'Hospitals',
    description: 'Hospitals, Healthcare & Medical Institutions',
    icon: Hospital,
    bgImage: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'corporate',
    title: 'Corporate',
    description: 'Corporate Houses & Business Organizations',
    icon: Briefcase,
    bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
  },
];

// Featured Clients Carousel Data
const FEATURED_CLIENTS = [
  { id: 'tata', name: 'TATA', customDesign: 'tata' },
  { id: 'godrej', name: 'Godrej Properties', customDesign: 'godrej' },
  { id: 'shapoorji', name: 'Shapoorji Pallonji', customDesign: 'shapoorji' },
  { id: 'fiat', name: 'FIAT', customDesign: 'fiat' },
  { id: 'lt', name: 'L&T', customDesign: 'lt' },
  { id: 'mhada', name: 'MHADA', customDesign: 'mhada' },
  { id: 'bsnl', name: 'BSNL', customDesign: 'bsnl' },
  { id: 'skf', name: 'SKF', customDesign: 'skf' },
];

export default function OurClients({ onOpenConsultation, onNavigateHome }: OurClientsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'builders' | 'educational' | 'government' | 'hospitals' | 'corporate'>('all');

  // Filter lists based on search query
  const filteredBuilders = useMemo(() => {
    if (!searchQuery) return BUILDERS_LIST;
    return BUILDERS_LIST.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase().trim()));
  }, [searchQuery]);

  const filteredEducation = useMemo(() => {
    if (!searchQuery) return EDUCATIONAL_INSTITUTES_LIST;
    return EDUCATIONAL_INSTITUTES_LIST.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase().trim()));
  }, [searchQuery]);

  const filteredGovernment = useMemo(() => {
    if (!searchQuery) return GOVERNMENT_LIST;
    return GOVERNMENT_LIST.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase().trim()));
  }, [searchQuery]);

  const filteredHospitals = useMemo(() => {
    if (!searchQuery) return HOSPITALS_LIST;
    return HOSPITALS_LIST.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase().trim()));
  }, [searchQuery]);

  const filteredCorporate = useMemo(() => {
    if (!searchQuery) return CORPORATE_LIST;
    return CORPORATE_LIST.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase().trim()));
  }, [searchQuery]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="our-clients-page" className="bg-[#f8f9fa] min-h-screen text-stone-900 font-sans pb-20 pt-20">
      
      {/* Breadcrumb & Navigation Bar - Light Theme */}
      <div className="bg-white border-b border-stone-200/80 py-3.5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-stone-500 font-medium">
            <button onClick={onNavigateHome} className="hover:text-stone-900 transition-colors cursor-pointer">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#b38e5d] font-bold">Clients</span>
          </div>
        </div>
      </div>

      {/* 1. HERO HEADER SECTION */}
      <div className="relative bg-[#0d1424] text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b101c]/80 via-[#0d1424]/90 to-[#0d1424] z-0" />
        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Main Title Heading */}
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-normal leading-tight">
              Our <span className="italic text-[#b38e5d] font-serif font-normal">Client</span> Network
            </h1>

            <p className="mt-4 text-stone-300 text-xs sm:text-sm leading-relaxed font-normal max-w-2xl">
              For over two decades, Eureka has built enduring relationships with India's leading builders, developers, institutions and organizations across diverse sectors. Our commitment to quality, innovation and reliability has made us a trusted partner in their growth.
            </p>
          </div>
        </div>
      </div>

      {/* 2. FLOATING METRICS BAR CARD */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 mb-14">
        <div className="bg-white rounded-xl shadow-md border border-stone-200/80 p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-stone-100">
          
          {/* Metric 1 */}
          <div className="flex items-center gap-3.5 pt-2 sm:pt-0 lg:px-3">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-[#b38e5d] flex items-center justify-center shrink-0 border border-amber-100">
              <Handshake className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] font-medium text-stone-500 leading-snug">
                Trusted by <br />
                <strong className="text-stone-900 font-bold">Leading Organizations</strong>
              </div>
              <div className="text-[10px] text-stone-400">Across India</div>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="flex items-center gap-3.5 pt-4 sm:pt-0 lg:px-4">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-[#b38e5d] flex items-center justify-center shrink-0 border border-amber-100">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-stone-900 tracking-tight">50,000+</div>
              <div className="text-xs font-medium text-stone-500">Projects Delivered</div>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="flex items-center gap-3.5 pt-4 sm:pt-0 lg:px-4">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-[#b38e5d] flex items-center justify-center shrink-0 border border-amber-100">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-stone-900 tracking-tight">200+</div>
              <div className="text-xs font-medium text-stone-500">Cities Pan India</div>
            </div>
          </div>

          {/* Metric 4 */}
          <div className="flex items-center gap-3.5 pt-4 sm:pt-0 lg:px-4">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-[#b38e5d] flex items-center justify-center shrink-0 border border-amber-100">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-stone-900 tracking-tight">500+</div>
              <div className="text-xs font-medium text-stone-500">Channel Partners</div>
            </div>
          </div>

          {/* Metric 5 */}
          <div className="flex items-center gap-3.5 pt-4 sm:pt-0 lg:px-4">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-[#b38e5d] flex items-center justify-center shrink-0 border border-amber-100">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-stone-900 uppercase tracking-wide">Since Generations</div>
              <div className="text-xs font-medium text-stone-500">Trusted for Life</div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. OUR CLIENTS BY INDUSTRY CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="text-center mb-8">
          <h2 className="text-xs font-bold tracking-widest text-stone-900 uppercase">
            OUR CLIENTS BY INDUSTRY
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {INDUSTRY_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="bg-white rounded-xl border border-stone-200 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
                onClick={() => {
                  setActiveTab(cat.id as any);
                  scrollToSection('client-grids-container');
                }}
              >
                <div className="p-4">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#b38e5d] flex items-center justify-center mb-2.5">
                    <Icon className="w-4 h-4" />
                  </div>

                  <h3 className="text-xs font-bold text-stone-900 group-hover:text-[#006385] transition-colors leading-tight mb-1">
                    {cat.title}
                  </h3>

                  <p className="text-[10px] text-stone-500 font-medium leading-normal">
                    {cat.description}
                  </p>

                  <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-[#b38e5d] group-hover:text-[#8e6e42]">
                    <span>View Clients</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                <div className="h-20 relative overflow-hidden bg-stone-100 border-t border-stone-100">
                  <img
                    src={cat.bgImage}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. CLIENT LIST GRIDS (TEAL REFERENCE LAYOUT) */}
      <div id="client-grids-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 scroll-mt-6">
        
        {/* Search & Category Filter Navigation Bar */}
        <div className="bg-white rounded-xl border border-stone-200 shadow-xs p-4 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input Box */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search builder or client name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs font-medium text-stone-900 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006385]/30 focus:border-[#006385]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 w-full md:w-auto scrollbar-none text-xs font-bold">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'all'
                    ? 'bg-[#006385] text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                All Sectors
              </button>

              <button
                onClick={() => setActiveTab('builders')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'builders'
                    ? 'bg-[#006385] text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                Builders ({BUILDERS_LIST.length})
              </button>

              <button
                onClick={() => setActiveTab('educational')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'educational'
                    ? 'bg-[#006385] text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                Educational ({EDUCATIONAL_INSTITUTES_LIST.length})
              </button>

              <button
                onClick={() => setActiveTab('government')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'government'
                    ? 'bg-[#006385] text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                Government
              </button>

              <button
                onClick={() => setActiveTab('hospitals')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'hospitals'
                    ? 'bg-[#006385] text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                Hospitals
              </button>
            </div>

          </div>
        </div>

        {/* --- SECTION 1: BUILDERS GRID --- */}
        {(activeTab === 'all' || activeTab === 'builders') && (
          <div className="mb-14">
            <h2 className="text-sm font-extrabold tracking-wider text-stone-900 uppercase mb-3">
              BUILDERS
            </h2>

            {filteredBuilders.length > 0 ? (
              <div className="bg-[#006385] text-white rounded-xs overflow-hidden shadow-sm border border-[#005573]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-cyan-700/50">
                  
                  {/* Column 1 */}
                  <div className="divide-y divide-cyan-700/50">
                    {filteredBuilders.slice(0, Math.ceil(filteredBuilders.length / 3)).map((item, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2.5 text-xs font-medium"
                      >
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Column 2 */}
                  <div className="divide-y divide-cyan-700/50">
                    {filteredBuilders.slice(Math.ceil(filteredBuilders.length / 3), Math.ceil((filteredBuilders.length * 2) / 3)).map((item, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2.5 text-xs font-medium"
                      >
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Column 3 */}
                  <div className="divide-y divide-cyan-700/50">
                    {filteredBuilders.slice(Math.ceil((filteredBuilders.length * 2) / 3)).map((item, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2.5 text-xs font-medium"
                      >
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg border border-stone-200 text-center text-xs text-stone-500">
                No builders found matching "{searchQuery}".
              </div>
            )}
          </div>
        )}

        {/* --- SECTION 2: EDUCATIONAL INSTITUTE GRID --- */}
        {(activeTab === 'all' || activeTab === 'educational') && (
          <div className="mb-14">
            <h2 className="text-sm font-extrabold tracking-wider text-stone-900 uppercase mb-3">
              EDUCATIONAL INSTITUTE
            </h2>

            {filteredEducation.length > 0 ? (
              <div className="bg-[#006385] text-white rounded-xs overflow-hidden shadow-sm border border-[#005573]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-cyan-700/50">
                  
                  {/* Column 1 */}
                  <div className="divide-y divide-cyan-700/50">
                    {filteredEducation.slice(0, Math.ceil(filteredEducation.length / 3)).map((item, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2.5 text-xs font-medium"
                      >
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Column 2 */}
                  <div className="divide-y divide-cyan-700/50">
                    {filteredEducation.slice(Math.ceil(filteredEducation.length / 3), Math.ceil((filteredEducation.length * 2) / 3)).map((item, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2.5 text-xs font-medium"
                      >
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Column 3 */}
                  <div className="divide-y divide-cyan-700/50">
                    {filteredEducation.slice(Math.ceil((filteredEducation.length * 2) / 3)).map((item, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2.5 text-xs font-medium"
                      >
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg border border-stone-200 text-center text-xs text-stone-500">
                No educational institutes found matching "{searchQuery}".
              </div>
            )}
          </div>
        )}

        {/* --- SECTION 3: GOVERNMENT & PUBLIC SECTOR GRID --- */}
        {(activeTab === 'all' || activeTab === 'government') && (
          <div className="mb-14">
            <h2 className="text-sm font-extrabold tracking-wider text-stone-900 uppercase mb-3">
              GOVERNMENT & PUBLIC SECTOR
            </h2>

            {filteredGovernment.length > 0 && (
              <div className="bg-[#006385] text-white rounded-xs overflow-hidden shadow-sm border border-[#005573]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-cyan-700/50">
                  
                  {/* Column 1 */}
                  <div className="divide-y divide-cyan-700/50">
                    {filteredGovernment.slice(0, Math.ceil(filteredGovernment.length / 3)).map((item, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2.5 text-xs font-medium"
                      >
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Column 2 */}
                  <div className="divide-y divide-cyan-700/50">
                    {filteredGovernment.slice(Math.ceil(filteredGovernment.length / 3), Math.ceil((filteredGovernment.length * 2) / 3)).map((item, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2.5 text-xs font-medium"
                      >
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Column 3 */}
                  <div className="divide-y divide-cyan-700/50">
                    {filteredGovernment.slice(Math.ceil((filteredGovernment.length * 2) / 3)).map((item, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2.5 text-xs font-medium"
                      >
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            )}
          </div>
        )}

        {/* --- SECTION 4: HOSPITALS & HEALTHCARE GRID --- */}
        {(activeTab === 'all' || activeTab === 'hospitals') && (
          <div className="mb-14">
            <h2 className="text-sm font-extrabold tracking-wider text-stone-900 uppercase mb-3">
              HOSPITALS & HEALTHCARE
            </h2>

            {filteredHospitals.length > 0 && (
              <div className="bg-[#006385] text-white rounded-xs overflow-hidden shadow-sm border border-[#005573]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-cyan-700/50">
                  
                  {/* Column 1 */}
                  <div className="divide-y divide-cyan-700/50">
                    {filteredHospitals.slice(0, Math.ceil(filteredHospitals.length / 3)).map((item, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2.5 text-xs font-medium"
                      >
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Column 2 */}
                  <div className="divide-y divide-cyan-700/50">
                    {filteredHospitals.slice(Math.ceil(filteredHospitals.length / 3), Math.ceil((filteredHospitals.length * 2) / 3)).map((item, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2.5 text-xs font-medium"
                      >
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Column 3 */}
                  <div className="divide-y divide-cyan-700/50">
                    {filteredHospitals.slice(Math.ceil((filteredHospitals.length * 2) / 3)).map((item, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2.5 text-xs font-medium"
                      >
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            )}
          </div>
        )}

      </div>

      {/* 5. LET'S BUILD TOGETHER CTA BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#0d1424] rounded-2xl overflow-hidden shadow-xl border border-stone-800">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Image Section */}
            <div className="lg:col-span-5 h-48 lg:h-64 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                alt="Business Partnership Handshake"
                className="w-full h-full object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0d1424]/40 to-[#0d1424]" />
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-7 p-6 sm:p-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="text-[11px] font-bold text-[#b38e5d] uppercase tracking-widest mb-1.5">
                  LET'S BUILD TOGETHER
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-normal leading-tight">
                  Become Our Next Trusted Partner
                </h3>
                <p className="mt-2 text-stone-300 text-xs sm:text-sm font-normal max-w-lg leading-relaxed">
                  Join hundreds of satisfied partners who trust Eureka for quality, reliability and unmatched support.
                </p>
              </div>

              <button
                onClick={() => onOpenConsultation('Partner with Eureka Corporate Inquiry')}
                className="px-6 py-3.5 bg-[#b38e5d] hover:bg-[#9c794a] text-white text-xs font-bold rounded-lg tracking-wider uppercase shadow-md transition-all shrink-0 flex items-center gap-2 cursor-pointer"
              >
                <span>PARTNER WITH EUREKA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
