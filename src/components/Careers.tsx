import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { showToast } from './ToastContainer';
import { 
  Briefcase, 
  Upload, 
  CheckCircle2, 
  FileText, 
  Building2, 
  Users, 
  Award, 
  Clock, 
  ChevronRight, 
  MapPin, 
  ArrowRight, 
  X, 
  AlertCircle,
  IndianRupee,
  GraduationCap,
  Send,
  Home
} from 'lucide-react';

interface CareersProps {
  onNavigateHome: () => void;
  onOpenConsultation?: () => void;
}

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

const OPEN_POSITIONS: JobPosition[] = [
  {
    id: 'sales-executive',
    title: 'Senior Sales Executive / Manager',
    department: 'Sales & Marketing',
    location: 'Pune / Satara / Nashik',
    type: 'Full-Time',
    experience: '3-5 Years',
    description: 'Lead builder, architect, and dealer relationship management across Maharashtra. Drive commercial door and plywood bulk orders.',
    requirements: [
      'Experience in building materials, timber, or door manufacturing sales',
      'Proven track record with architect networks and real estate developers',
      'Strong negotiation and client management skills'
    ]
  },
  {
    id: 'plant-engineer',
    title: 'Production & Machinery Engineer',
    department: 'Plant Operations',
    location: 'Khed-Shivapur Factory, Pune',
    type: 'Full-Time',
    experience: '3-5 Years',
    description: 'Supervise automated hot-press bonding lines, CNC door mortising, and timber seasoning kilns at our main plant.',
    requirements: [
      'B.Tech / Diploma in Mechanical or Industrial Engineering',
      'Hands-on experience with wood processing machinery and hydraulic presses',
      'Knowledge of IS:2202 and IS:710 quality standards'
    ]
  },
  {
    id: 'qc-inspector',
    title: 'Quality Control & Testing Specialist',
    department: 'Quality Assurance',
    location: 'Khed-Shivapur Factory, Pune',
    type: 'Full-Time',
    experience: '1-3 Years',
    description: 'Execute rigorous moisture testing, glue shear strength analysis, and dimensional calibration on finished flush doors and plywood.',
    requirements: [
      'Diploma or B.Sc in Chemistry / Quality Engineering',
      'Familiarity with BIS testing procedures and timber calibration',
      'High attention to detail and batch reporting accuracy'
    ]
  },
  {
    id: 'management-trainee',
    title: 'Management Trainee (Graduate Freshers)',
    department: 'Cross-Functional',
    location: 'Pune Head Office / Factory',
    type: 'Full-Time',
    experience: 'Freshers',
    description: 'Rotational learning opportunity across production, supply chain logistics, dealer operations, and customer support.',
    requirements: [
      'Recent graduates in Engineering, Management, or Commerce',
      'Strong enthusiasm for timber manufacturing and industrial operations',
      'Excellent verbal and written communication skills'
    ]
  }
];

const EXPERIENCE_OPTIONS = [
  { id: 'fresher', label: 'Freshers' },
  { id: '1-3', label: '1-3 Years' },
  { id: '3-5', label: '3-5 Years' },
  { id: '5-10', label: '5-10 Years' },
  { id: '10+', label: '10+ Years' },
];

const NOTICE_PERIOD_OPTIONS = [
  'Immediate / Less than 15 Days',
  '15 Days',
  '30 Days',
  '60 Days',
  '90 Days'
];

export default function Careers({ onNavigateHome }: CareersProps) {
  const formRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form State
  const [selectedRole, setSelectedRole] = useState<string>('General Application');
  const [experienceLevel, setExperienceLevel] = useState<string>('Freshers');
  const [noticePeriod, setNoticePeriod] = useState<string>('30 Days');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    currentCtc: '',
    expectedCtc: '',
    keySkills: '',
    coverNote: ''
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  // Filter jobs by department
  const filteredPositions = selectedDepartment === 'All'
    ? OPEN_POSITIONS
    : OPEN_POSITIONS.filter(p => p.department === selectedDepartment);

  // Handle file selection
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
        setFileError('Please upload a PDF or Word document (.pdf, .doc, .docx)');
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setFileError('File size exceeds 10MB limit.');
        return;
      }
      setResumeFile(file);
    }
  };

  const handleApplyClick = (positionTitle: string) => {
    setSelectedRole(positionTitle);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!resumeFile) {
      setFileError('Please attach your resume file before submitting.');
      return;
    }

    setIsSubmitting(true);
    setFileError(null);

    try {
      const payload = new FormData();
      payload.append('formType', 'Job Application');
      payload.append('selectedRole', selectedRole);
      payload.append('fullName', formData.fullName);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('location', formData.location);
      payload.append('experience', experienceLevel);
      payload.append('noticePeriod', noticePeriod);
      payload.append('currentCtc', formData.currentCtc);
      payload.append('expectedCtc', formData.expectedCtc);
      payload.append('keySkills', formData.keySkills);
      payload.append('coverNote', formData.coverNote);
      payload.append('resume', resumeFile);

      const res = await fetch('/api/send-email', {
        method: 'POST',
        body: payload
      });

      if (!res.ok) {
        throw new Error('Failed to send application. Please try again.');
      }

      setIsSubmitted(true);
      const randomId = 'EUR-APP-' + Math.floor(100000 + Math.random() * 900000);
      setApplicationId(randomId);
      showToast('Your job application and resume have been submitted successfully!', 'Application Sent');
    } catch (err: any) {
      console.error(err);
      setFileError(err.message || 'Submission failed. Please check network connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      location: '',
      currentCtc: '',
      expectedCtc: '',
      keySkills: '',
      coverNote: ''
    });
    setResumeFile(null);
    setFileError(null);
    setSelectedRole('General Application');
    setExperienceLevel('Freshers');
  };

  return (
    <div className="bg-[#faf9f6] pt-24 pb-16 min-h-screen text-stone-800">
      
      {/* Top Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider">
          <button 
            onClick={onNavigateHome}
            className="flex items-center gap-1 hover:text-[#b38e5d] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="text-stone-800 font-bold">Careers</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0b1d33] via-[#102a48] to-[#1a2e68] text-white p-8 sm:p-14 overflow-hidden shadow-2xl border border-slate-800">
          
          {/* Subtle background overlay decorative element */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-[#b38e5d]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#b38e5d]/20 border border-[#b38e5d]/40 text-[#f3e3ca] text-xs font-bold uppercase tracking-widest mb-4">
              <span>CAREERS AT EUREKA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight mb-4">
              Build Your Future With India’s Timber & Door Leaders
            </h1>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans mb-8">
              Join a high-performing team in Pune with over 25 years of engineering mastery, manufacturing 250,000+ sq. ft. of premium certified doors and plywood.
            </p>

            <div className="flex flex-wrap gap-3">
              <a 
                href="#open-positions" 
                className="px-6 py-3 bg-[#b38e5d] hover:bg-[#967448] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
              >
                <span>View Open Positions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#careers-apply-form" 
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-xs uppercase tracking-wider border border-white/20 transition-all"
              >
                Direct Application Form
              </a>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-700/80">
            <div className="space-y-0.5">
              <div className="text-2xl font-extrabold text-amber-300 font-serif">25+ Yrs</div>
              <div className="text-[11px] text-slate-300 uppercase tracking-wider font-medium">Industry Legacy</div>
            </div>
            <div className="space-y-0.5">
              <div className="text-2xl font-extrabold text-amber-300 font-serif">250,000+</div>
              <div className="text-[11px] text-slate-300 uppercase tracking-wider font-medium">Sq. Ft. Plant</div>
            </div>
            <div className="space-y-0.5">
              <div className="text-2xl font-extrabold text-amber-300 font-serif">115+</div>
              <div className="text-[11px] text-slate-300 uppercase tracking-wider font-medium">Dealer Network</div>
            </div>
            <div className="space-y-0.5">
              <div className="text-2xl font-extrabold text-amber-300 font-serif">ISO 9001</div>
              <div className="text-[11px] text-slate-300 uppercase tracking-wider font-medium">Certified Operations</div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold text-[#b38e5d] uppercase tracking-widest block mb-1">
            LIFE AT EUREKA
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            Why Professionals Choose Eureka
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            We foster a culture of quality craftsmanship, technological innovation, and sustainable career progression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-3 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b38e5d] flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900 font-serif">Industry Benchmark</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              Work with state-of-the-art timber processing technology, IS:2202 certified flush door lines, and solid PVC manufacturing systems.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-3 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b38e5d] flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900 font-serif">Collaborative Environment</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              Work alongside experienced engineers, timber specialists, and sales leaders dedicated to mentorship and team growth.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-3 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b38e5d] flex items-center justify-center font-bold">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900 font-serif">Clear Career Growth</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              Structured performance evaluation, skill advancement workshops, competitive compensation, and leadership pathways.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section id="open-positions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-extrabold text-[#b38e5d] uppercase tracking-widest block mb-1">
              CURRENT OPPORTUNITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Explore Open Positions
            </h2>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Sales & Marketing', 'Plant Operations', 'Quality Assurance', 'Cross-Functional'].map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedDepartment === dept
                    ? 'bg-[#0b1d33] text-white shadow-xs'
                    : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300/70'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Position Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPositions.map((job) => (
            <div 
              key={job.id} 
              className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm hover:border-[#b38e5d]/60 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold text-[#b38e5d] uppercase tracking-wider block">
                      {job.department}
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 font-serif mt-0.5">
                      {job.title}
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 text-[11px] font-bold border border-stone-200 shrink-0">
                    {job.type}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-stone-600 font-medium">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-stone-400" />
                    <span>Experience: {job.experience}</span>
                  </div>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {job.description}
                </p>

                <div className="pt-2 border-t border-stone-100">
                  <span className="text-[11px] font-bold text-stone-800 uppercase tracking-wider block mb-1.5">
                    Key Requirements:
                  </span>
                  <ul className="space-y-1 text-xs text-stone-600">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => handleApplyClick(job.title)}
                  className="w-full py-2.5 bg-stone-900 hover:bg-[#b38e5d] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply For This Position</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form Section */}
      <section ref={formRef} id="careers-apply-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xl p-6 sm:p-10 overflow-hidden">
          
          <div className="border-b border-stone-200 pb-6 mb-8">
            <span className="text-xs font-extrabold text-[#b38e5d] uppercase tracking-widest block mb-1">
              JOIN OUR TEAM
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Submit Job Application
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Fill out your information below and upload your CV/Resume. Our HR team in Pune will review your profile promptly.
            </p>
          </div>

          {isSubmitted ? (
            <AnimatePresence>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4"
              >
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-serif font-bold text-emerald-950">
                    Application Submitted Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-800 font-sans max-w-md mx-auto">
                    Thank you for your interest in joining Eureka Decorative Ply & Doors. Your application reference code is:
                  </p>
                  <div className="inline-block bg-white px-4 py-2 rounded-xl border border-emerald-300 text-stone-900 font-mono font-bold text-base my-2 shadow-xs">
                    {applicationId}
                  </div>
                </div>

                <div className="text-xs text-stone-600 bg-white/80 p-4 rounded-xl border border-emerald-200 max-w-lg mx-auto text-left space-y-1">
                  <p><strong>Applicant:</strong> {formData.fullName}</p>
                  <p><strong>Applied Role:</strong> {selectedRole}</p>
                  <p><strong>Experience Level:</strong> {experienceLevel}</p>
                  <p><strong>Resume File:</strong> {resumeFile?.name}</p>
                  <p className="pt-1 text-[11px] text-stone-500">A confirmation has been sent to {formData.email}. Our recruitment coordinator will reach out if your profile matches our requirements.</p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleResetForm}
                    className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Submit Another Application
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Target Position Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Position Applied For*
                </label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 text-stone-900 text-xs sm:text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#b38e5d] focus:bg-white transition-all"
                >
                  <option value="General Application">General Application (All Departments)</option>
                  {OPEN_POSITIONS.map(p => (
                    <option key={p.id} value={p.title}>{p.title} ({p.department})</option>
                  ))}
                </select>
              </div>

              {/* Personal Details Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 text-stone-900 text-xs sm:text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#b38e5d] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. rahul.sharma@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 text-stone-900 text-xs sm:text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#b38e5d] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 text-stone-900 text-xs sm:text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#b38e5d] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Current City / Location*
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pune, Satara, Nashik, Mumbai"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 text-stone-900 text-xs sm:text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#b38e5d] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Work Experience Buttons (As explicitly requested by user) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Total Work Experience*
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {EXPERIENCE_OPTIONS.map((exp) => (
                    <button
                      type="button"
                      key={exp.id}
                      onClick={() => setExperienceLevel(exp.label)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                        experienceLevel === exp.label
                          ? 'bg-[#b38e5d] text-white border-[#b38e5d] shadow-sm scale-102'
                          : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100 hover:border-stone-400'
                      }`}
                    >
                      {exp.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Compensation & Notice Period Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Notice Period
                  </label>
                  <select
                    value={noticePeriod}
                    onChange={(e) => setNoticePeriod(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 text-stone-900 text-xs sm:text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#b38e5d] focus:bg-white transition-all"
                  >
                    {NOTICE_PERIOD_OPTIONS.map(np => (
                      <option key={np} value={np}>{np}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Current CTC (LPA)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹ 4.5 LPA / NA"
                    value={formData.currentCtc}
                    onChange={(e) => setFormData({ ...formData, currentCtc: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 text-stone-900 text-xs sm:text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#b38e5d] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Expected CTC (LPA)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹ 6.0 LPA"
                    value={formData.expectedCtc}
                    onChange={(e) => setFormData({ ...formData, expectedCtc: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 text-stone-900 text-xs sm:text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#b38e5d] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Key Skills */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Key Skills / Core Expertise
                </label>
                <input
                  type="text"
                  placeholder="e.g. Architect Sales, Quality Inspection, Timber Mortising"
                  value={formData.keySkills}
                  onChange={(e) => setFormData({ ...formData, keySkills: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 text-stone-900 text-xs sm:text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#b38e5d] focus:bg-white transition-all"
                />
              </div>

              {/* Resume File Upload */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Attach Resume / CV* (.PDF, .DOC, .DOCX)
                </label>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="hidden"
                />

                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                    resumeFile 
                      ? 'border-emerald-500 bg-emerald-50/50' 
                      : 'border-stone-300 bg-stone-50 hover:bg-amber-50/40 hover:border-[#b38e5d]'
                  }`}
                >
                  {resumeFile ? (
                    <div className="flex items-center justify-between gap-3 text-left max-w-md mx-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-stone-900 truncate max-w-[200px] sm:max-w-[280px]">
                            {resumeFile.name}
                          </p>
                          <p className="text-[11px] text-stone-500">
                            {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setResumeFile(null);
                        }}
                        className="p-1.5 text-stone-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                        title="Remove file"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="w-10 h-10 rounded-full bg-stone-200/80 text-stone-600 flex items-center justify-center mx-auto">
                        <Upload className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#b38e5d] underline">Click to upload resume</span>
                        <span className="text-xs text-stone-500"> or drag and drop file</span>
                      </div>
                      <p className="text-[10px] text-stone-400 font-medium">
                        Supported formats: PDF, DOC, DOCX (Max size: 10MB)
                      </p>
                    </div>
                  )}
                </div>

                {fileError && (
                  <div className="flex items-center gap-1.5 text-xs text-red-600 font-medium mt-2">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{fileError}</span>
                  </div>
                )}
              </div>

              {/* Cover Note */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Cover Note / Additional Remarks
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us briefly about your background and why you want to work at Eureka..."
                  value={formData.coverNote}
                  onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 text-stone-900 text-xs sm:text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#b38e5d] focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#0b1d33] hover:bg-[#b38e5d] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-xl cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-amber-300" />
                      <span>Submit Application Now</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>
      </section>

    </div>
  );
}
