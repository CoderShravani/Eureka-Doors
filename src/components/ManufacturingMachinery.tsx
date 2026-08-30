import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Layers,
  Scissors,
  Repeat,
  Droplet,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Cpu,
  Boxes,
  Factory,
  Cog,
  Wrench,
  CheckCheck,
  FileText,
  Workflow,
  ChevronDown,
  LayoutList,
  Sliders
} from 'lucide-react';

export default function ManufacturingMachinery() {
  const [viewMode, setViewMode] = useState<'all' | 'tabs'>('all');
  const [activeTab, setActiveTab] = useState<string>('cold-press');

  const scrollToMachine = (id: string) => {
    if (viewMode === 'tabs') {
      setActiveTab(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="bg-[#faf8f4] text-stone-800 border-t border-stone-200" id="door-manufacturing-machines">
      
      {/* ---------------------------------------------------- */}
      {/* HEADER SECTION: Door Manufacturing Machines */}
      {/* ---------------------------------------------------- */}
      <section className="bg-gradient-to-b from-[#f5eee3] to-[#faf8f4] py-16 sm:py-20 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b38e5d]/15 text-[#8a6839] text-xs font-bold uppercase tracking-wider mb-4 border border-[#b38e5d]/25">
              <Factory className="w-3.5 h-3.5 text-[#b38e5d]" />
              <span>Plant Machinery &amp; Infrastructure</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-stone-900 tracking-tight leading-tight">
              Door Manufacturing Machines
            </h2>
            
            <p className="text-base sm:text-lg text-stone-700 mt-4 leading-relaxed font-normal">
              Our manufacturing facility utilizes specialized woodworking and panel-processing machinery for the preparation, bonding, pressing, sizing and finishing of door components. Each machine performs a specific stage of the production process, helping maintain dimensional consistency, controlled adhesive application and efficient material processing.
            </p>

            <p className="text-sm sm:text-base text-stone-600 mt-3 font-medium">
              The principal machinery used in the production workflow includes hydraulic pressing equipment, panel saws, rip saws and glue-spreading systems.
            </p>
            
            {/* Quick Navigation Chips */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              <button
                onClick={() => scrollToMachine('cold-press')}
                className="bg-white hover:bg-stone-50 text-stone-800 px-3.5 py-2 rounded-xl border border-stone-200 text-xs font-bold flex items-center gap-2 shadow-2xs hover:border-[#b38e5d] transition-all cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-[#b38e5d]"></span>
                1. Cold Press Machine
              </button>
              <button
                onClick={() => scrollToMachine('panel-saw')}
                className="bg-white hover:bg-stone-50 text-stone-800 px-3.5 py-2 rounded-xl border border-stone-200 text-xs font-bold flex items-center gap-2 shadow-2xs hover:border-[#b38e5d] transition-all cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-[#b38e5d]"></span>
                2. Sliding Table Panel Saw
              </button>
              <button
                onClick={() => scrollToMachine('rip-saw')}
                className="bg-white hover:bg-stone-50 text-stone-800 px-3.5 py-2 rounded-xl border border-stone-200 text-xs font-bold flex items-center gap-2 shadow-2xs hover:border-[#b38e5d] transition-all cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-[#b38e5d]"></span>
                3. Industrial Rip Saw
              </button>
              <button
                onClick={() => scrollToMachine('glue-spreader')}
                className="bg-white hover:bg-stone-50 text-stone-800 px-3.5 py-2 rounded-xl border border-stone-200 text-xs font-bold flex items-center gap-2 shadow-2xs hover:border-[#b38e5d] transition-all cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-[#b38e5d]"></span>
                4. Glue Spreader Machine
              </button>
              <button
                onClick={() => scrollToMachine('integrated-facility')}
                className="bg-stone-900 hover:bg-stone-800 text-white px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <Workflow className="w-3.5 h-3.5 text-[#b38e5d]" />
                5. Integrated Workflow &amp; Benefits
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* VIEW TOGGLE BAR */}
      {/* ---------------------------------------------------- */}
      <div className="bg-white border-b border-stone-200 py-3 sticky top-16 z-20 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold text-stone-700">
            <Cog className="w-4 h-4 text-[#b38e5d]" />
            <span>Industrial Machinery Directory</span>
          </div>

          <div className="flex items-center gap-2 bg-[#faf8f4] p-1 rounded-xl border border-stone-200">
            <button
              onClick={() => setViewMode('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'all'
                  ? 'bg-[#b38e5d] text-white shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <LayoutList className="w-3.5 h-3.5" />
              <span>Comprehensive View</span>
            </button>
            <button
              onClick={() => setViewMode('tabs')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'tabs'
                  ? 'bg-[#b38e5d] text-white shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Tab Explorer</span>
            </button>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* TAB SELECTOR IF TAB MODE ACTIVE */}
      {/* ---------------------------------------------------- */}
      {viewMode === 'tabs' && (
        <div className="bg-[#f5eee3] border-b border-stone-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                onClick={() => setActiveTab('cold-press')}
                className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                  activeTab === 'cold-press'
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                    : 'bg-white text-stone-800 border-stone-200 hover:border-[#b38e5d]'
                }`}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider block opacity-70">Machine 01</span>
                <span className="text-xs font-extrabold block truncate">Cold Press Machine</span>
              </button>

              <button
                onClick={() => setActiveTab('panel-saw')}
                className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                  activeTab === 'panel-saw'
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                    : 'bg-white text-stone-800 border-stone-200 hover:border-[#b38e5d]'
                }`}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider block opacity-70">Machine 02</span>
                <span className="text-xs font-extrabold block truncate">Sliding Table Panel Saw</span>
              </button>

              <button
                onClick={() => setActiveTab('rip-saw')}
                className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                  activeTab === 'rip-saw'
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                    : 'bg-white text-stone-800 border-stone-200 hover:border-[#b38e5d]'
                }`}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider block opacity-70">Machine 03</span>
                <span className="text-xs font-extrabold block truncate">Industrial Rip Saw</span>
              </button>

              <button
                onClick={() => setActiveTab('glue-spreader')}
                className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                  activeTab === 'glue-spreader'
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                    : 'bg-white text-stone-800 border-stone-200 hover:border-[#b38e5d]'
                }`}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider block opacity-70">Machine 04</span>
                <span className="text-xs font-extrabold block truncate">Glue Spreader Machine</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* MACHINERY DETAILED CONTENT */}
      {/* ---------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* ==================================================== */}
        {/* 1. Hydraulic Multi-Daylight Cold Press Machine */}
        {/* ==================================================== */}
        {(viewMode === 'all' || activeTab === 'cold-press') && (
          <section
            id="cold-press"
            className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm scroll-mt-28"
          >
            {/* Machine Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-stone-200">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b38e5d]/10 text-[#8a6839] text-xs font-bold uppercase tracking-wider mb-2 border border-[#b38e5d]/20">
                  <Layers className="w-3.5 h-3.5 text-[#b38e5d]" />
                  <span>Machine 01 • Pressing &amp; Bonding</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                  1. Hydraulic Multi-Daylight Cold Press Machine
                </h3>
                <p className="text-sm font-semibold text-[#8a6839] mt-1">
                  Controlled Mechanical Pressure Without Heated Platens
                </p>
              </div>

              <div className="bg-[#faf8f4] px-4 py-2.5 rounded-2xl border border-stone-200 text-xs font-bold text-stone-700">
                Multi-Daylight Vertical Configuration
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
              
              {/* Left Column: Overview & Working Principle */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Overview */}
                <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-[#8a6839] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#b38e5d]" />
                    <span>Overview</span>
                  </h4>
                  <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
                    <p>
                      A hydraulic cold press machine is used to apply controlled mechanical pressure to assembled and glued wood-based components. Unlike a hot press, a cold press performs the pressing operation without heating the press platens.
                    </p>
                    <p>
                      The multi-daylight configuration consists of multiple pressing levels, or daylights, arranged vertically. This configuration allows multiple assemblies to be positioned within the press at the same time, making it suitable for production environments where several panels or door assemblies require pressing.
                    </p>
                    <p>
                      Cold presses are commonly used in woodworking and panel-manufacturing applications including plywood, blockboard, flush doors, veneer products, laminated panels and other wood-based assemblies.
                    </p>
                  </div>
                </div>

                {/* Working Principle */}
                <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-[#8a6839] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Cog className="w-4 h-4 text-[#b38e5d]" />
                    <span>Working Principle</span>
                  </h4>
                  <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#b38e5d] text-white text-xs font-bold flex items-center justify-center mt-0.5">1</span>
                      <p>The door or panel components are first prepared and adhesive is applied to the required surfaces. The components are then assembled and positioned between the press platens.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#b38e5d] text-white text-xs font-bold flex items-center justify-center mt-0.5">2</span>
                      <p>The hydraulic system drives the pressing cylinders, bringing the platens together and applying pressure to the assembled components.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#b38e5d] text-white text-xs font-bold flex items-center justify-center mt-0.5">3</span>
                      <p>The pressure is maintained for the required bonding period, after which the press is released and the bonded assembly is removed for subsequent operations.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#b38e5d] text-white text-xs font-bold flex items-center justify-center mt-0.5">4</span>
                      <p className="font-medium text-stone-800">The actual pressing pressure, cycle time and holding time depend on factors such as the adhesive system, material composition, panel construction, moisture content and machine configuration.</p>
                    </div>
                  </div>
                </div>

                {/* Multi-Daylight Configuration Callout */}
                <div className="bg-amber-50/70 p-6 rounded-2xl border border-amber-200">
                  <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-700" />
                    <span>Multi-Daylight Configuration</span>
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm text-amber-950 leading-relaxed">
                    <p>A multi-daylight press provides several working levels within one machine frame. This allows multiple assemblies to be loaded into the press during a pressing cycle.</p>
                    <p>The number of daylights and the working dimensions are machine-specific. Commercial cold presses are available in configurations ranging from single-daylight arrangements to multiple-daylight systems.</p>
                  </div>
                </div>

              </div>

              {/* Right Column: Applications, Advantages & Important Note */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Applications in Door Manufacturing */}
                <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-[#8a6839] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-[#b38e5d]" />
                    <span>Applications in Door Manufacturing</span>
                  </h4>
                  <p className="text-xs text-stone-600 mb-3 font-medium">The machine can be used for pressing:</p>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-800">
                    <li className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-stone-200">
                      <span className="w-2 h-2 rounded-full bg-[#b38e5d] shrink-0"></span>
                      <span>Flush-door assemblies</span>
                    </li>
                    <li className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-stone-200">
                      <span className="w-2 h-2 rounded-full bg-[#b38e5d] shrink-0"></span>
                      <span>Wood-based door panels</span>
                    </li>
                    <li className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-stone-200">
                      <span className="w-2 h-2 rounded-full bg-[#b38e5d] shrink-0"></span>
                      <span>Veneer assemblies</span>
                    </li>
                    <li className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-stone-200">
                      <span className="w-2 h-2 rounded-full bg-[#b38e5d] shrink-0"></span>
                      <span>Laminated wood panels</span>
                    </li>
                    <li className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-stone-200">
                      <span className="w-2 h-2 rounded-full bg-[#b38e5d] shrink-0"></span>
                      <span>Plywood and blockboard components</span>
                    </li>
                    <li className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-stone-200">
                      <span className="w-2 h-2 rounded-full bg-[#b38e5d] shrink-0"></span>
                      <span>Other glued wood-based assemblies</span>
                    </li>
                  </ul>
                </div>

                {/* Key Advantages */}
                <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-[#8a6839] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <CheckCheck className="w-4 h-4 text-[#b38e5d]" />
                    <span>Key Advantages</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-800">
                    {[
                      'Controlled hydraulic pressing',
                      'Suitable for multiple assemblies in multi-daylight configurations',
                      'Efficient use of production-floor space',
                      'Consistent application of mechanical pressure',
                      'Suitable for glued wood and panel assemblies',
                      'Supports batch production',
                      'Helps maintain alignment of components during bonding'
                    ].map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Important Technical Note */}
                <div className="bg-stone-900 text-white p-6 rounded-2xl border border-stone-800 shadow-md">
                  <div className="flex items-center gap-2 text-[#d4af37] font-bold text-xs uppercase tracking-wider mb-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Important Note</span>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-stone-300 leading-relaxed">
                    <p>
                      A cold press should not be described as a heating press. It applies mechanical pressure without heating the platens. Hot pressing is a separate process in which heated platens are used.
                    </p>
                    <p className="text-stone-400 text-xs">
                      The actual pressing capacity, number of daylights, platen dimensions, hydraulic pressure and other technical specifications should be stated only according to the specific machine manufacturer's documentation.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </section>
        )}

        {/* ==================================================== */}
        {/* 2. Sliding Table Panel Saw */}
        {/* ==================================================== */}
        {(viewMode === 'all' || activeTab === 'panel-saw') && (
          <section
            id="panel-saw"
            className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm scroll-mt-28"
          >
            {/* Machine Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-stone-200">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b38e5d]/10 text-[#8a6839] text-xs font-bold uppercase tracking-wider mb-2 border border-[#b38e5d]/20">
                  <Scissors className="w-3.5 h-3.5 text-[#b38e5d]" />
                  <span>Machine 02 • Precision Sizing</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                  2. Sliding Table Panel Saw
                </h3>
                <p className="text-sm font-semibold text-[#8a6839] mt-1">
                  Precision Straight Cutting, Squaring &amp; Scoring for Panels
                </p>
              </div>

              <div className="bg-[#faf8f4] px-4 py-2.5 rounded-2xl border border-stone-200 text-xs font-bold text-stone-700">
                Main Blade + Scoring Blade System
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
              
              {/* Left Column: Overview, Materials & Working Principle */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Overview */}
                <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-[#8a6839] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#b38e5d]" />
                    <span>Overview</span>
                  </h4>
                  <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
                    <p>
                      A sliding table panel saw is a precision woodworking machine designed primarily for straight cutting and sizing of sheet materials and wood-based panels.
                    </p>
                    <p>
                      The machine uses a sliding table or carriage to support and guide the workpiece during cutting. Depending on the machine configuration, panel saws can be equipped with a main saw blade and a scoring blade. Scoring systems are commonly used when processing laminated or coated panels to help achieve cleaner cuts on the material surface.
                    </p>
                  </div>
                </div>

                {/* Materials That Can Be Processed */}
                <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-[#8a6839] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Boxes className="w-4 h-4 text-[#b38e5d]" />
                    <span>Materials That Can Be Processed</span>
                  </h4>
                  <p className="text-xs text-stone-600 mb-3 font-medium">Depending on the machine and blade configuration, panel saws may be used for materials such as:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-800">
                    {[
                      'Plywood',
                      'MDF',
                      'Particleboard',
                      'Laminated boards',
                      'Pre-laminated panels',
                      'Decorative wood-based panels',
                      'Other suitable sheet materials'
                    ].map((mat, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-stone-200">
                        <CheckCircle2 className="w-4 h-4 text-[#b38e5d] shrink-0" />
                        <span>{mat}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-stone-500 mt-3 italic">
                    Manufacturers offer panel saws specifically for processing plywood, MDF, particleboard and laminated panels, while some machines are designed to process additional materials such as WPC and PVC.
                  </p>
                </div>

                {/* Working Principle */}
                <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-[#8a6839] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Cog className="w-4 h-4 text-[#b38e5d]" />
                    <span>Working Principle</span>
                  </h4>
                  <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#b38e5d] text-white text-xs font-bold flex items-center justify-center mt-0.5">1</span>
                      <p>The workpiece is positioned on the sliding table and aligned against the appropriate guide or fence.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#b38e5d] text-white text-xs font-bold flex items-center justify-center mt-0.5">2</span>
                      <p>The table then moves the material through the rotating saw blade, producing the required straight cut. The rip fence is used for controlled parallel cutting, while a cross-cut fence can be used for squaring and cross-cutting operations.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#b38e5d] text-white text-xs font-bold flex items-center justify-center mt-0.5">3</span>
                      <p>Some sliding-table machines also allow the saw unit to tilt for angled cuts, depending on their design and configuration.</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Applications, Features & Advantages */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Applications in Door Manufacturing */}
                <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-[#8a6839] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-[#b38e5d]" />
                    <span>Applications in Door Manufacturing</span>
                  </h4>
                  <p className="text-xs text-stone-600 mb-3 font-medium">Panel saws can be used for:</p>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-800">
                    {[
                      'Cutting door skins to size',
                      'Sizing plywood and MDF panels',
                      'Preparing core and face materials',
                      'Cutting laminated sheets',
                      'Dimensioning wood-based panels before assembly',
                      'Preparing components for subsequent machining'
                    ].map((app, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-stone-200">
                        <span className="w-2 h-2 rounded-full bg-[#b38e5d] shrink-0"></span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 p-3 bg-white rounded-xl border border-stone-200 text-xs text-stone-600 leading-relaxed font-medium">
                    Accurate panel sizing is important because dimensional errors introduced during initial cutting can affect subsequent assembly and finishing operations.
                  </div>
                </div>

                {/* Key Features */}
                <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-[#8a6839] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#b38e5d]" />
                    <span>Key Features</span>
                  </h4>
                  <p className="text-xs text-stone-600 mb-2 font-medium">Depending on the model, a sliding table panel saw may include:</p>
                  <ul className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-stone-800">
                    {[
                      'Sliding work table',
                      'Rip fence',
                      'Cross-cut fence',
                      'Main saw blade',
                      'Scoring blade',
                      'Adjustable saw unit',
                      'Blade-tilting mechanism',
                      'Material support system',
                      'Manual or digital measurement systems'
                    ].map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 bg-white p-2 rounded-lg border border-stone-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-stone-500 mt-2 italic">The exact features vary between machines and manufacturers.</p>
                </div>

                {/* Key Advantages */}
                <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-[#8a6839] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <CheckCheck className="w-4 h-4 text-[#b38e5d]" />
                    <span>Key Advantages</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-800">
                    {[
                      'Accurate straight cutting',
                      'Repeatable panel sizing',
                      'Controlled handling of large sheets',
                      'Suitable for different wood-based panels',
                      'Supports both rip and cross-cutting operations',
                      'Can improve consistency in component preparation'
                    ].map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          </section>
        )}

        {/* ==================================================== */}
        {/* 3. Industrial Rip Saw Machine */}
        {/* ==================================================== */}
        {(viewMode === 'all' || activeTab === 'rip-saw') && (
          <section
            id="rip-saw"
            className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm scroll-mt-28"
          >
            {/* Machine Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-stone-200">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b38e5d]/10 text-[#8a6839] text-xs font-bold uppercase tracking-wider mb-2 border border-[#b38e5d]/20">
                  <Repeat className="w-3.5 h-3.5 text-[#b38e5d]" />
                  <span>Machine 03 • Timber Preparation</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                  3. Industrial Rip Saw Machine
                </h3>
                <p className="text-sm font-semibold text-[#8a6839] mt-1">
                  Longitudinal Grain Cutting &amp; Controlled Timber Width Sizing
                </p>
              </div>

              <div className="bg-[#faf8f4] px-4 py-2.5 rounded-2xl border border-stone-200 text-xs font-bold text-stone-700">
                Mechanical Feed Rollers
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
              
              {/* Left Column: Overview, Working Principle & Materials */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Overview */}
                <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-[#8a6839] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#b38e5d]" />
                    <span>Overview</span>
                  </h4>
                  <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
                    <p>
                      A rip saw is a woodworking machine designed for <strong className="text-stone-900">longitudinal cutting</strong>, meaning cutting wood in the direction of the grain.
                    </p>
                    <p>
                      Rip saws are used to convert wider pieces of timber, boards or other suitable wood materials into narrower strips or components with controlled widths. Industrial versions may incorporate mechanical feed systems and multiple feed rollers for continuous material movement.
                    </p>
                  </div>
                </div>

                {/* Working Principle */}
                <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-[#8a6839] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Cog className="w-4 h-4 text-[#b38e5d]" />
                    <span>Working Principle</span>
                  </h4>
                  <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#b38e5d] text-white text-xs font-bold flex items-center justify-center mt-0.5">1</span>
                      <p>The workpiece is positioned and guided through the cutting area.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#b38e5d] text-white text-xs font-bold flex items-center justify-center mt-0.5">2</span>
                      <p>A rotating circular saw blade performs the longitudinal cut while the material is moved through the machine.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#b38e5d] text-white text-xs font-bold flex items-center justify-center mt-0.5">3</span>
                      <p>In industrial configurations, feed rollers can provide controlled movement of the material through the cutting zone. The exact feeding arrangement depends on the machine design.</p>
                    </div>
                  </div>
                </div>

                {/* Materials */}
                <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-[#8a6839] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Boxes className="w-4 h-4 text-[#b38e5d]" />
                    <span>Materials</span>
                  </h4>
                  <p className="text-xs text-stone-600 mb-3 font-medium">Depending on the machine's design, blade configuration and operating limits, rip saws may process:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-800">
                    {[
                      'Solid wood',
                      'Timber',
                      'Wooden boards',
                      'Plywood',
                      'Other suitable wood-based materials'
                    ].map((mat, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-stone-200">
                        <CheckCircle2 className="w-4 h-4 text-[#b38e5d] shrink-0" />
                        <span>{mat}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-stone-500 mt-3 italic">
                    The permitted material thickness and dimensions depend on the particular machine.
                  </p>
                </div>

              </div>

              {/* Right Column: Applications, Features & Advantages */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Applications in Door Manufacturing */}
                <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-[#8a6839] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-[#b38e5d]" />
                    <span>Applications in Door Manufacturing</span>
                  </h4>
                  <p className="text-xs text-stone-600 mb-3 font-medium">A rip saw can be used during preparation of wooden components required for door construction, including:</p>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-800">
                    {[
                      'Timber strips',
                      'Wooden frame components',
                      'Core components',
                      'Narrow wooden sections',
                      'Structural or supporting wooden elements',
                      'Other components requiring straight longitudinal cuts'
                    ].map((app, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-stone-200">
                        <span className="w-2 h-2 rounded-full bg-[#b38e5d] shrink-0"></span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-stone-600 mt-3 font-medium bg-white p-3 rounded-xl border border-stone-200">
                    It can also be used in general woodworking operations where timber or boards need to be reduced to a specific width.
                  </p>
                </div>

                {/* Key Features */}
                <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-[#8a6839] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#b38e5d]" />
                    <span>Key Features</span>
                  </h4>
                  <p className="text-xs text-stone-600 mb-2 font-medium">Industrial rip saw configurations may include:</p>
                  <ul className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-stone-800">
                    {[
                      'Heavy-duty machine frame',
                      'Circular saw blade',
                      'Material guide system',
                      'Feed rollers',
                      'Mechanical feed system',
                      'Adjustable cutting arrangements',
                      'Motor-driven cutting unit'
                    ].map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 bg-white p-2 rounded-lg border border-stone-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-stone-500 mt-2 italic">Not every rip saw includes all of these features, so the exact configuration should be confirmed from the machine documentation.</p>
                </div>

                {/* Key Advantages */}
                <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-[#8a6839] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <CheckCheck className="w-4 h-4 text-[#b38e5d]" />
                    <span>Key Advantages</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-800">
                    {[
                      'Efficient longitudinal cutting',
                      'Consistent material width',
                      'Suitable for repetitive production work',
                      'Controlled material feeding on equipped machines',
                      'Useful for preparing timber and wooden components',
                      'Supports high-volume woodworking operations'
                    ].map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          </section>
        )}

        {/* ==================================================== */}
        {/* 4. Glue Spreader Machine */}
        {/* ==================================================== */}
        {(viewMode === 'all' || activeTab === 'glue-spreader') && (
          <section
            id="glue-spreader"
            className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm scroll-mt-28"
          >
            {/* Machine Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-stone-200">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b38e5d]/10 text-[#8a6839] text-xs font-bold uppercase tracking-wider mb-2 border border-[#b38e5d]/20">
                  <Droplet className="w-3.5 h-3.5 text-[#b38e5d]" />
                  <span>Machine 04 • Adhesive Application</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                  4. Glue Spreader Machine
                </h3>
                <p className="text-sm font-semibold text-[#8a6839] mt-1">
                  Controlled Roller Distribution for Core &amp; Substrate Adhesion
                </p>
              </div>

              <div className="bg-[#faf8f4] px-4 py-2.5 rounded-2xl border border-stone-200 text-xs font-bold text-stone-700">
                Core Glue Spreading System
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
              
              {/* Left Column: Overview, Working Principle & Importance */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Overview */}
                <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-[#8a6839] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#b38e5d]" />
                    <span>Overview</span>
                  </h4>
                  <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
                    <p>
                      A glue spreader machine is designed to apply adhesive across the surface of wood-based materials before the components are assembled and pressed.
                    </p>
                    <p>
                      Roller-type glue spreaders are widely used in plywood, blockboard and flush-door manufacturing. The machines use rollers to transfer and distribute adhesive across the working surface.
                    </p>
                    <p className="font-semibold text-stone-900">
                      The machine shown in the facility is identified as a <span className="text-[#8a6839]">Glue Spreader Machine</span> and is marked for applying glue to the core.
                    </p>
                  </div>
                </div>

                {/* Working Principle */}
                <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-[#8a6839] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Cog className="w-4 h-4 text-[#b38e5d]" />
                    <span>Working Principle</span>
                  </h4>
                  <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#b38e5d] text-white text-xs font-bold flex items-center justify-center mt-0.5">1</span>
                      <p>The adhesive is supplied to the roller system, and the workpiece is passed through the machine.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#b38e5d] text-white text-xs font-bold flex items-center justify-center mt-0.5">2</span>
                      <p>As the rollers rotate, adhesive is transferred onto the surface of the material. The roller arrangement distributes the adhesive across the working width.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#b38e5d] text-white text-xs font-bold flex items-center justify-center mt-0.5">3</span>
                      <p>Depending on the machine design, roller settings can influence the amount and uniformity of adhesive applied. Commercial glue spreaders are available with different roller configurations, working widths and application arrangements.</p>
                    </div>
                  </div>
                </div>

                {/* Importance of Uniform Glue Application */}
                <div className="bg-amber-50/70 p-6 rounded-2xl border border-amber-200">
                  <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-700" />
                    <span>Importance of Uniform Glue Application</span>
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm text-amber-950 leading-relaxed">
                    <p>Consistent adhesive distribution is an important part of panel bonding.</p>
                    <p>Uneven adhesive application can result in areas with insufficient or excessive adhesive. Controlled application helps maintain more consistent bonding conditions across the assembly.</p>
                    <p className="text-xs text-amber-800 font-medium">The appropriate adhesive quantity depends on the adhesive type, material, surface condition, construction and manufacturer's process recommendations.</p>
                  </div>
                </div>

              </div>

              {/* Right Column: Applications, Features & Advantages */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Applications in Door Manufacturing */}
                <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-[#8a6839] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-[#b38e5d]" />
                    <span>Applications in Door Manufacturing</span>
                  </h4>
                  <p className="text-xs text-stone-600 mb-3 font-medium">Glue spreaders can be used for adhesive application during the manufacture of:</p>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-800">
                    {[
                      'Flush doors',
                      'Plywood',
                      'Blockboard',
                      'Veneer-based panels',
                      'Laminated wood assemblies',
                      'Other glued wood-based panels'
                    ].map((app, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-stone-200">
                        <span className="w-2 h-2 rounded-full bg-[#b38e5d] shrink-0"></span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-stone-600 mt-3 font-medium bg-white p-3 rounded-xl border border-stone-200">
                    In a door-production workflow, the machine may be used to apply adhesive to the core or other components before the assembly is placed in a pressing machine.
                  </p>
                </div>

                {/* Key Features */}
                <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-[#8a6839] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#b38e5d]" />
                    <span>Key Features</span>
                  </h4>
                  <p className="text-xs text-stone-600 mb-2 font-medium">Depending on the model, a glue spreader may include:</p>
                  <ul className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-stone-800">
                    {[
                      'Adhesive application rollers',
                      'Rubber-coated rollers',
                      'Metering or doctor rollers',
                      'Adhesive tray or supply arrangement',
                      'Adjustable roller settings',
                      'Motorized roller drive',
                      'Material feed arrangement'
                    ].map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 bg-white p-2 rounded-lg border border-stone-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-stone-500 mt-2 italic">Some industrial machines use four-roller configurations, while other machines use different roller arrangements.</p>
                </div>

                {/* Key Advantages */}
                <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                  <h4 className="text-xs font-bold text-[#8a6839] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <CheckCheck className="w-4 h-4 text-[#b38e5d]" />
                    <span>Key Advantages</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-800">
                    {[
                      'More consistent adhesive application than manual spreading',
                      'Faster processing',
                      'Controlled glue distribution',
                      'Suitable for repetitive production',
                      'Supports preparation of panels before pressing',
                      'Helps reduce variation in adhesive coverage'
                    ].map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          </section>
        )}

        {/* ==================================================== */}
        {/* 5. Integrated Wood & Door Manufacturing Facility */}
        {/* ==================================================== */}
        <section
          id="integrated-facility"
          className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm scroll-mt-28"
        >
          {/* Header */}
          <div className="max-w-3xl pb-6 border-b border-stone-200">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b38e5d]/10 text-[#8a6839] text-xs font-bold uppercase tracking-wider mb-2 border border-[#b38e5d]/20">
              <Workflow className="w-3.5 h-3.5 text-[#b38e5d]" />
              <span>Section 05 • System Architecture</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              5. Integrated Wood &amp; Door Manufacturing Facility
            </h3>
            
            <div className="mt-4 space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <p>
                The manufacturing facility brings together several specialized woodworking operations rather than relying on a single machine.
              </p>
              <p>
                Different machines are used at different stages of production. Cutting equipment prepares materials to the required dimensions, rip saws prepare timber components, glue spreaders apply adhesive, and pressing equipment applies pressure to bonded assemblies.
              </p>
              <p className="font-semibold text-stone-900">
                The exact production sequence depends on the door construction, materials, adhesive system and manufacturing method.
              </p>
            </div>
          </div>

          {/* Typical Manufacturing Workflow (11 Steps) */}
          <div className="mt-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold text-[#8a6839] uppercase tracking-wider block">Sequence of Operations</span>
                <h4 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                  Typical Manufacturing Workflow
                </h4>
              </div>
              <span className="text-xs font-bold bg-[#faf8f4] px-3 py-1.5 rounded-xl border border-stone-200 text-stone-600">
                11 Defined Stages
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { num: '1', title: 'Material Preparation', text: 'Wood, plywood, MDF, veneer, core material and other required components are inspected and prepared for processing.' },
                { num: '2', title: 'Cutting and Sizing', text: 'Panel saws and other cutting equipment are used to bring sheet materials and panels to the required dimensions.' },
                { num: '3', title: 'Timber and Component Preparation', text: 'Rip saws and other woodworking machines can be used to prepare wooden strips, timber components and other parts required for the door assembly.' },
                { num: '4', title: 'Adhesive Application', text: 'A glue spreader applies adhesive to the required surfaces of the core or other components.' },
                { num: '5', title: 'Assembly / Lay-Up', text: 'The prepared components are positioned in the required sequence to form the door or panel assembly.' },
                { num: '6', title: 'Pressing', text: 'The assembled components are placed in a hydraulic press. Pressure is applied for the required bonding period according to the process and adhesive requirements.' },
                { num: '7', title: 'Trimming and Dimensioning', text: 'After bonding, the assembly may undergo trimming, sizing and other machining operations to achieve the required final dimensions.' },
                { num: '8', title: 'Surface Preparation', text: 'The panel or door component may undergo sanding or other surface-preparation operations before finishing.' },
                { num: '9', title: 'Finishing', text: 'Depending on the product, subsequent operations may include surface treatment, laminating, painting, polishing or other finishing processes.' },
                { num: '10', title: 'Quality Inspection', text: 'The finished door components are inspected for dimensional accuracy, surface quality, bonding condition and other applicable quality requirements.' },
                { num: '11', title: 'Packing and Dispatch', text: 'Approved products are protected, packed and prepared for storage or dispatch.' }
              ].map((step) => (
                <div
                  key={step.num}
                  className="bg-[#faf8f4] p-5 rounded-2xl border border-stone-200 hover:border-[#b38e5d] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#b38e5d]/15 text-[#8a6839]">
                        Stage {step.num}
                      </span>
                    </div>
                    <h5 className="font-extrabold text-stone-900 text-sm mb-1.5">{step.title}</h5>
                    <p className="text-xs text-stone-600 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How the Machines Work Together */}
          <div className="mt-14 pt-10 border-t border-stone-200">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-[#8a6839] uppercase tracking-wider block mb-1">Process Synchronicity</span>
              <h4 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                How the Machines Work Together
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                The machines shown in the facility perform complementary functions within the manufacturing process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Rip Saw', desc: 'Prepares timber and wooden components by making longitudinal cuts.' },
                { title: 'Panel Saw', desc: 'Cuts and sizes sheet materials and panels.' },
                { title: 'Glue Spreader', desc: 'Applies adhesive to the required surfaces.' },
                { title: 'Assembly / Lay-Up', desc: 'Positions the prepared components in the required configuration.' },
                { title: 'Hydraulic Cold Press', desc: 'Applies controlled pressure to the assembled components during bonding.' },
                { title: 'Trimming & Surface Preparation', desc: 'Brings the bonded assembly to the required dimensions and surface condition.' },
                { title: 'Finishing & Quality Inspection', desc: 'Prepares the finished door for its intended application.' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#faf8f4] p-5 rounded-2xl border border-stone-200 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-[#8a6839] mb-1 block">Step {index + 1}</span>
                    <h5 className="font-extrabold text-stone-900 text-sm mb-1">{item.title}</h5>
                    <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                  {index < 6 && (
                    <div className="mt-3 flex items-center justify-end text-[#b38e5d] text-xs font-bold">
                      <span className="mr-1 text-[11px]">Next</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Production Benefits */}
          <div className="mt-14 pt-10 border-t border-stone-200">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-[#8a6839] uppercase tracking-wider block mb-1">Process-Level Advantages</span>
              <h4 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                Production Benefits
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                The use of dedicated machinery at different stages of production provides several process-level advantages:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              
              <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#b38e5d] border border-stone-200 mb-3 shadow-2xs">
                  <Scissors className="w-5 h-5" />
                </div>
                <h5 className="font-extrabold text-stone-900 text-sm mb-2">Consistent Material Preparation</h5>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Dedicated cutting equipment helps produce components with controlled dimensions and repeatable cuts.
                </p>
              </div>

              <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#b38e5d] border border-stone-200 mb-3 shadow-2xs">
                  <Droplet className="w-5 h-5" />
                </div>
                <h5 className="font-extrabold text-stone-900 text-sm mb-2">Controlled Adhesive Application</h5>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Roller-based glue-spreading equipment provides a more consistent method of applying adhesive than manual application.
                </p>
              </div>

              <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#b38e5d] border border-stone-200 mb-3 shadow-2xs">
                  <Layers className="w-5 h-5" />
                </div>
                <h5 className="font-extrabold text-stone-900 text-sm mb-2">Controlled Pressing</h5>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Hydraulic pressing equipment provides mechanical pressure during the bonding process and can accommodate multiple assemblies in multi-daylight configurations.
                </p>
              </div>

              <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#b38e5d] border border-stone-200 mb-3 shadow-2xs">
                  <Workflow className="w-5 h-5" />
                </div>
                <h5 className="font-extrabold text-stone-900 text-sm mb-2">Improved Production Workflow</h5>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Using specialized machines for individual operations allows different manufacturing stages to be organized into a systematic production workflow.
                </p>
              </div>

              <div className="bg-[#faf8f4] p-6 rounded-2xl border border-stone-200 md:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#b38e5d] border border-stone-200 mb-3 shadow-2xs">
                  <CheckCheck className="w-5 h-5" />
                </div>
                <h5 className="font-extrabold text-stone-900 text-sm mb-2">Repeatability</h5>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Mechanized cutting, adhesive application and pressing can improve repeatability when the machines are correctly configured and operated.
                </p>
              </div>

            </div>
          </div>

        </section>

      </div>

    </div>
  );
}
