import { useState, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layers, 
  Maximize2, 
  CheckCircle2, 
  Eye, 
  ChevronRight, 
  Cpu, 
  X, 
  Share2, 
  Check, 
  Droplet,
  Scissors,
  Wrench,
  CheckCheck,
  Building,
  Factory,
  SlidersHorizontal,
  FileText,
  Boxes,
  Workflow,
  AlertCircle
} from 'lucide-react';

interface ArchitectsHubProps {
  onOpenConsultation?: (prefillInfo?: string) => void;
  onNavigateHome?: () => void;
  onNavigate?: (sectionId: string) => void;
}

export interface MachineryExhibitItem {
  id: string;
  image: string;
  machineNumber: string;
  tag: string;
  category: 'pressing' | 'sizing' | 'timber' | 'adhesive' | 'facility';
  categoryLabel: string;
  title: string;
  subtitle: string;
  badge: string;
  overview: string[];
  workingPrinciple: string[];
  materialsOrConfigs: {
    heading: string;
    items: string[];
    note?: string;
  };
  applications: string[];
  features: string[];
  advantages: string[];
  technicalDistinction?: string;
  quickSpecs: {
    operationType: string;
    feedOrPressure: string;
    keyMechanism: string;
    productionRole: string;
  };
}

const MACHINERY_EXHIBITS: MachineryExhibitItem[] = [
  {
    id: 'machine-1',
    image: '/Img1.jpg',
    machineNumber: '01',
    tag: 'MACHINE 01 • PRESSING & BONDING',
    category: 'pressing',
    categoryLabel: 'Hydraulic Pressing',
    title: 'Hydraulic Multi-Daylight Cold Press Machine',
    subtitle: 'Controlled Mechanical Pressure Without Heated Platens',
    badge: 'Multi-Daylight Vertical Configuration',
    overview: [
      'A hydraulic cold press machine is used to apply controlled mechanical pressure to assembled and glued wood-based components. Unlike a hot press, a cold press performs the pressing operation without heating the press platens.',
      'The multi-daylight configuration consists of multiple pressing levels, or daylights, arranged vertically. This configuration allows multiple assemblies to be positioned within the press at the same time, making it suitable for production environments where several panels or door assemblies require pressing.',
      'Cold presses are commonly used in woodworking and panel-manufacturing applications including plywood, blockboard, flush doors, veneer products, laminated panels and other wood-based assemblies.'
    ],
    workingPrinciple: [
      'The door or panel components are first prepared and adhesive is applied to the required surfaces. The components are then assembled and positioned between the press platens.',
      'The hydraulic system drives the pressing cylinders, bringing the platens together and applying uniform pressure to the assembled components.',
      'The pressure is maintained for the required bonding period, after which the press is released and the bonded assembly is removed for subsequent operations.',
      'The actual pressing pressure, cycle time and holding time depend on factors such as the adhesive system, material composition, panel construction, moisture content and machine configuration.'
    ],
    materialsOrConfigs: {
      heading: 'Multi-Daylight Configuration System',
      items: [
        'Multi-level vertical platen stacking',
        'Simultaneous batch pressing of multiple door leaves',
        'Even pressure distribution across full daylight spans',
        'Compatible with cold-setting PVA & synthetic resin adhesives'
      ],
      note: 'A multi-daylight press provides several working levels within one machine frame, allowing multiple assemblies to be loaded and bonded simultaneously.'
    },
    applications: [
      'Flush-door assemblies',
      'Wood-based door panels',
      'Veneer assemblies',
      'Laminated wood panels',
      'Plywood and blockboard components',
      'Glued wood-based structural assemblies'
    ],
    features: [
      'Heavy-duty hydraulic cylinder array',
      'Multi-daylight vertical platen stack',
      'High-tonnage uniform mechanical clamping',
      'Calibrated hydraulic pressure control',
      'Rigid planar steel platen structure',
      'Automated cycle timer & pressure retention'
    ],
    advantages: [
      'Controlled hydraulic pressing across all surfaces',
      'Suitable for multiple assemblies in multi-daylight configurations',
      'Efficient use of production-floor space',
      'Consistent application of mechanical pressure',
      'Suitable for glued wood and panel assemblies',
      'Supports high-volume batch production',
      'Helps maintain alignment of components during bonding'
    ],
    technicalDistinction: 'A cold press should not be described as a heating press. It applies mechanical pressure without heating the platens. Hot pressing is a separate process in which heated platens are used. Actual pressing capacity, daylights, platen dimensions, and hydraulic pressure are calibrated according to manufacturer specifications.',
    quickSpecs: {
      operationType: 'Mechanical Hydraulic Cold Pressing',
      feedOrPressure: 'Multi-Cylinder High Hydraulic Clamping',
      keyMechanism: 'Multi-Daylight Vertical Platens',
      productionRole: 'Core & Skin Adhesive Bonding'
    }
  },
  {
    id: 'machine-2',
    image: '/Img2.jpg',
    machineNumber: '02',
    tag: 'MACHINE 02 • PRECISION SIZING & SQUARING',
    category: 'sizing',
    categoryLabel: 'Panel Sizing & Saws',
    title: 'Sliding Table Panel Saw',
    subtitle: 'Precision Straight Cutting, Squaring & Scoring for Panels',
    badge: 'Main Blade + Counter-Rotating Scoring Blade',
    overview: [
      'A sliding table panel saw is a precision woodworking machine designed primarily for straight cutting and sizing of sheet materials and wood-based panels.',
      'The machine uses a sliding table or carriage to support and guide the workpiece during cutting. Depending on the machine configuration, panel saws can be equipped with a main saw blade and a scoring blade.',
      'Scoring systems are commonly used when processing laminated or coated panels to help achieve cleaner cuts on the material surface without edge chipping.'
    ],
    workingPrinciple: [
      'The workpiece is positioned on the sliding table and aligned against the appropriate guide or fence.',
      'The table moves the material smoothly through the rotating saw blade, producing the required straight cut. The rip fence is used for controlled parallel cutting, while a cross-cut fence is used for squaring and cross-cutting operations.',
      'Some sliding-table machines also allow the saw unit to tilt for angled bevel cuts, depending on their design and configuration.'
    ],
    materialsOrConfigs: {
      heading: 'Materials That Can Be Processed',
      items: [
        'Plywood & Marine Grade Sheets',
        'MDF (Medium Density Fiberboard)',
        'Particleboard & Chipboard',
        'Laminated Boards & High-Pressure Laminates',
        'Pre-laminated Panels',
        'Decorative Wood-Based Panels',
        'WPC & PVC Sheets (on equipped machines)'
      ],
      note: 'Equipped with precision scoring blade systems to eliminate surface tear-out and chipping on delicate decorative veneers and laminates.'
    },
    applications: [
      'Cutting door skins to exact architectural size',
      'Sizing plywood and MDF panels',
      'Preparing core and face materials',
      'Cutting laminated sheets with zero edge splintering',
      'Dimensioning wood-based panels before assembly',
      'Preparing components for subsequent CNC machining'
    ],
    features: [
      'Heavy-duty sliding work table with smooth guide tracks',
      'Micro-adjustable rip fence for parallel cutting',
      'Cross-cut fence with flip stops for squaring',
      'High-speed main saw blade',
      'Independent counter-rotating scoring blade',
      'Blade-tilting mechanism for bevel cutting',
      'Material support outrigger table'
    ],
    advantages: [
      'Accurate straight cutting with high precision',
      'Repeatable panel sizing across large production runs',
      'Controlled handling of large full-size sheets',
      'Suitable for diverse wood-based panels and substrates',
      'Supports both rip and cross-cutting operations',
      'Improves consistency in component preparation, preventing downstream assembly errors'
    ],
    technicalDistinction: 'Accurate panel sizing is essential because dimensional errors introduced during initial cutting can propagate into assembly and finishing defects. The dual-blade scoring system ensures chip-free edges.',
    quickSpecs: {
      operationType: 'Straight Sizing, Squaring & Beveling',
      feedOrPressure: 'Manual / Guided Sliding Carriage',
      keyMechanism: 'Dual Blade (Main + Scoring Blade)',
      productionRole: 'Skin & Panel Substrate Dimensioning'
    }
  },
  {
    id: 'machine-3',
    image: '/Img3.jpg',
    machineNumber: '03',
    tag: 'MACHINE 03 • TIMBER PREPARATION & SIZING',
    category: 'timber',
    categoryLabel: 'Timber Processing',
    title: 'Industrial Rip Saw Machine',
    subtitle: 'Longitudinal Grain Cutting & Controlled Timber Width Sizing',
    badge: 'Powered Mechanical Feed Rollers',
    overview: [
      'A rip saw is a woodworking machine designed for longitudinal cutting, meaning cutting wood in the direction of the grain.',
      'Rip saws are used to convert wider pieces of timber, boards or other suitable wood materials into narrower strips or components with controlled widths.',
      'Industrial versions incorporate mechanical feed systems and multiple feed rollers for continuous, controlled material movement through the cutting zone.'
    ],
    workingPrinciple: [
      'The workpiece is positioned and guided through the cutting area along an adjustable guide fence.',
      'A rotating circular saw blade performs the longitudinal cut while the material is moved through the machine.',
      'In industrial configurations, feed rollers provide continuous, controlled movement of the material through the cutting zone, ensuring consistent cut speed and operator safety.'
    ],
    materialsOrConfigs: {
      heading: 'Materials That Can Be Processed',
      items: [
        'Solid Wood & Hardwood Scantlings',
        'Kiln-Seasoned Plantation Timber',
        'Wooden Boards & Planks',
        'Plywood & Blockboard Sections',
        'Structural Wood-Based Elements'
      ],
      note: 'The permitted material thickness and dimensions depend on the particular machine motor rating and saw blade diameter.'
    },
    applications: [
      'Timber strips for door frames and stiles',
      'Wooden frame components (rails and lock blocks)',
      'Core components and solid battens',
      'Narrow wooden sections with precise parallel edges',
      'Structural or supporting wooden elements',
      'General woodworking operations requiring timber width reduction'
    ],
    features: [
      'Heavy-duty cast-iron / steel machine chassis',
      'High-torque motor-driven circular saw unit',
      'Precision material guide fence',
      'Multiple powered feed rollers for continuous feed',
      'Mechanical feed speed regulation',
      'Anti-kickback safety fingers and blade guarding'
    ],
    advantages: [
      'Efficient longitudinal cutting along the grain',
      'Consistent material width across entire timber lengths',
      'Suitable for continuous, repetitive production runs',
      'Controlled material feeding on equipped machines',
      'Useful for preparing timber and wooden framing components',
      'Supports high-volume industrial woodworking operations'
    ],
    technicalDistinction: 'Unlike cross-cut saws, the industrial rip saw cuts parallel to the timber grain fibers, requiring specific tooth geometry, high torque, and continuous feed rollers to prevent binding.',
    quickSpecs: {
      operationType: 'Longitudinal Grain Ripping',
      feedOrPressure: 'Continuous Powered Feed Rollers',
      keyMechanism: 'High-Torque Circular Rip Blade',
      productionRole: 'Frame Stiles, Rails & Batten Sizing'
    }
  },
  {
    id: 'machine-4',
    image: '/Img4.jpg',
    machineNumber: '04',
    tag: 'MACHINE 04 • ADHESIVE APPLICATION',
    category: 'adhesive',
    categoryLabel: 'Adhesive Application',
    title: 'Glue Spreader Machine',
    subtitle: 'Controlled Roller Distribution for Core & Substrate Adhesion',
    badge: 'Core Glue Spreading System',
    overview: [
      'A glue spreader machine is designed to apply adhesive across the surface of wood-based materials before the components are assembled and pressed.',
      'Roller-type glue spreaders are widely used in plywood, blockboard and flush-door manufacturing. The machines use rollers to transfer and distribute adhesive across the working surface.',
      'The machine shown in the facility is identified as a Glue Spreader Machine and is marked specifically for applying glue to the core.'
    ],
    workingPrinciple: [
      'The adhesive is supplied to the roller trough system, and the workpiece is passed through the machine.',
      'As the rollers rotate, adhesive is transferred onto the surface of the material. The roller arrangement distributes the adhesive uniformly across the working width.',
      'Depending on the machine design, doctor and metering roller settings influence the exact coat thickness and uniformity of adhesive applied.'
    ],
    materialsOrConfigs: {
      heading: 'Adhesives & Cores Handled',
      items: [
        'Synthetic Resin & Phenol Formaldehyde Adhesives',
        'PVA & Water-Resistant Wood Glues',
        'Solid Timber Batten Cores',
        'Plywood Cross-Band Veneers',
        'HDF / MDF Face Substrates',
        'Blockboard Internal Cores'
      ],
      note: 'Uniform adhesive application prevents starved dry spots (which cause delamination) and excess glue puddles (which cause face telegraphing and blistering).'
    },
    applications: [
      'Spreading adhesive onto door core components',
      'Glue application for flush-door assembly',
      'Adhesive coating for plywood and blockboard layers',
      'Spreading adhesive prior to cold pressing or hot pressing',
      'Veneer and decorative laminate lay-up preparation'
    ],
    features: [
      'Motorized grooved application rollers',
      'Adjustable doctor / metering rollers for glue film thickness',
      'Variable-speed feed roller drive',
      'Adhesive reservoir / trough recirculation system',
      'Adjustable daylight gap for varying workpiece thicknesses',
      'Washout-friendly maintenance construction'
    ],
    advantages: [
      'Rapid, uniform glue distribution across the entire surface',
      'Precise control over glue spread rate and film thickness',
      'Minimizes adhesive wastage compared to manual application',
      'Ensures consistent bonding strength across the door surface',
      'Essential preparatory stage before hydraulic cold pressing',
      'Supports high-speed continuous door assembly lines'
    ],
    technicalDistinction: 'Uniform adhesive application is critical. Too little glue creates dry spots and bonding failure (delamination), while too much glue creates curing delays, blisters, and surface telegraphing under the door skin.',
    quickSpecs: {
      operationType: 'Roller Adhesive Metering & Coating',
      feedOrPressure: 'Motorized Roller Continuous Pass',
      keyMechanism: 'Grooved Applicator + Doctor Rollers',
      productionRole: 'Core & Cross-Band Glue Application'
    }
  },
  {
    id: 'machine-5',
    image: '/Img5.jpg',
    machineNumber: '05',
    tag: 'FACILITY 05 • PLANT INFRASTRUCTURE & WORKFLOW',
    category: 'facility',
    categoryLabel: 'Plant Infrastructure',
    title: 'Integrated Wood & Door Manufacturing Facility',
    subtitle: 'End-to-End Synchronized Production Workflow & Machinery Integration',
    badge: 'Complete Synchronized Production Line',
    overview: [
      'In a complete door manufacturing facility, individual machines operate as part of an integrated production line. Each machine contributes to a specific phase of production, from raw timber preparation and panel sizing to adhesive application, pressing and final finishing.',
      'The combination of rip saws, panel saws, glue spreaders and hydraulic presses creates a structured, repeatable manufacturing workflow.',
      'Our facility ensures high dimensional consistency, controlled bonding strength, and industrial reliability across every production batch.'
    ],
    workingPrinciple: [
      '1. Timber Ripping: Raw timber boards are cut longitudinally into frame stiles, rails, and core battens on the Industrial Rip Saw.',
      '2. Panel Sizing: Plywood, MDF, and door skins are trimmed to exact dimensions with zero edge chipping on the Sliding Table Panel Saw.',
      '3. Core Glue Spreading: Adhesive is evenly applied across core battens and cross-bands using the Glue Spreader Machine.',
      '4. Lay-Up & Hydraulic Pressing: Components are aligned in assembly jigs and consolidated under uniform mechanical force in the Hydraulic Multi-Daylight Cold Press.',
      '5. Finishing & Inspection: Bonded leaves undergo precision perimeter trimming, surface sanding, acoustic/moisture audits, and packaging.'
    ],
    materialsOrConfigs: {
      heading: '11-Stage End-to-End Workflow',
      items: [
        'Stage 1: Material Preparation & Inward QC',
        'Stage 2: Cutting & Panel Sizing',
        'Stage 3: Timber & Component Preparation',
        'Stage 4: Adhesive Application (Core Spreader)',
        'Stage 5: Assembly / Lay-Up in Alignment Jigs',
        'Stage 6: Pressing (Multi-Daylight Cold Press)',
        'Stage 7: Trimming & Dimensioning',
        'Stage 8: Surface Preparation & Calibration Sanding',
        'Stage 9: Finishing & Architectural Coating',
        'Stage 10: BIS Quality & Immersion Inspection',
        'Stage 11: Protective Packing & Dispatch'
      ],
      note: 'Every door moves systematically through all 11 stages to ensure full compliance with IS: 2202 and IS: 710 quality benchmarks.'
    },
    applications: [
      'High-volume commercial flush door production',
      'Architectural bespoke oversized residential portals',
      'Hospitality acoustic and fire-retardant doorsets',
      'BWP / BWR marine-grade moisture resistant doors',
      'Veneered and decorative laminate pre-finished doors'
    ],
    features: [
      '250,000+ Sq. Ft. continuous industrial layout',
      'Synchronized material handling and transfer stations',
      'Multi-machine workflow: Rip Saw → Panel Saw → Glue Spreader → Cold Press',
      'Dust extraction and air filtration infrastructure',
      'In-house destructive and non-destructive BIS testing lab',
      'Computerized batch tracking and dimension verification'
    ],
    advantages: [
      'Consistent material preparation eliminating dimension flaws',
      'Controlled adhesive application preventing dry spots or telegraphing',
      'Uniform multi-daylight pressing ensuring planar stability',
      'Improved production workflow with minimal bottlenecks',
      'Industrial repeatability across small and large project orders'
    ],
    technicalDistinction: 'The synchronized integration of specialized woodworking machines replaces manual inconsistency with automated precision, guaranteeing that every door meets strict structural, acoustic, and aesthetic tolerances.',
    quickSpecs: {
      operationType: '11-Stage Synchronized Manufacturing',
      feedOrPressure: 'Multi-Station Automated Industrial Flow',
      keyMechanism: 'Integrated Sawing, Spreading & Pressing Lines',
      productionRole: 'Complete Door Manufacturing & Quality Control'
    }
  }
];

const THICKNESS_GUIDES = [
  {
    thickness: '32mm',
    type: 'Interior Secondary Doors',
    useCase: 'Bedrooms, Powder Rooms, Wardrobes',
    acoustic: '30 - 32 dB',
    core: 'Semi-Solid Seasoned Pine',
    weight: '~22 kg / leaf'
  },
  {
    thickness: '35mm',
    type: 'Standard Residential Flush',
    useCase: 'Guest Rooms, Study, Living Transitions',
    acoustic: '32 - 34 dB',
    core: 'Solid Pine Blockboard Core',
    weight: '~26 kg / leaf'
  },
  {
    thickness: '40mm',
    type: 'Acoustic Suite & Hotel Doors',
    useCase: 'Master Suites, Hotel Corridors, Conference',
    acoustic: '35 - 38 dB',
    core: 'Heavy-Duty Double Batten Core',
    weight: '~32 kg / leaf'
  },
  {
    thickness: '45mm - 50mm',
    type: 'Grand Luxury Portals & Pivots',
    useCase: 'Main Villa Entry, Executive Boardrooms, Theatres',
    acoustic: '38 - 42 dB',
    core: 'Reinforced 5-Ply Solid Pine & Hardwood',
    weight: '~40 - 52 kg / leaf'
  }
];

export default function ArchitectsHub({ onNavigateHome }: ArchitectsHubProps) {
  const [selectedMachine, setSelectedMachine] = useState<MachineryExhibitItem | null>(null);
  const [activeCardTab, setActiveCardTab] = useState<Record<string, 'overview' | 'principle' | 'materials' | 'applications' | 'features'>>({});
  const [selectedThicknessIndex, setSelectedThicknessIndex] = useState<number>(2);

  const getTab = (id: string) => activeCardTab[id] || 'overview';
  const setTab = (id: string, tab: 'overview' | 'principle' | 'materials' | 'applications' | 'features', e?: MouseEvent) => {
    e?.stopPropagation();
    setActiveCardTab(prev => ({ ...prev, [id]: tab }));
  };

  return (
    <div className="bg-[#fcfaf7] text-stone-800 min-h-screen pt-20 pb-28" id="architects-hub-page">
      
      {/* Top Breadcrumb Navigation */}
      <div className="bg-white/90 backdrop-blur-md border-b border-stone-200 sticky top-16 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <button 
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1 hover:text-[#b38e5d] transition-colors cursor-pointer"
            >
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-stone-900 font-bold">Plant Machinery &amp; Industrial Infrastructure</span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-[#b38e5d]/10 text-[#8f6d3f] border border-[#b38e5d]/20 font-semibold flex items-center shadow-2xs">
              <span className="hidden sm:inline">IS: 2202 &amp; IS: 710 Industrial Standards</span>
              <span className="sm:hidden">IS: 2202 &amp; 710</span>
            </span>
          </div>
        </div>
      </div>

      {/* Hero Header in Refined Warm Sand & Brushed Gold Aesthetic */}
      <section className="bg-gradient-to-b from-[#f7f3eb] via-[#faf7f0] to-[#fcfaf7] pt-14 pb-12 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#b38e5d]/30 text-[#8a6839] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Factory className="w-3.5 h-3.5 text-[#b38e5d]" />
              <span>Khed-Shivapur Industrial Facility • 250,000+ Sq. Ft.</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.15]">
              Door Manufacturing Machinery &amp; Infrastructure
            </h1>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
              High-precision woodworking and panel-processing systems engineered for the preparation, bonding, pressing, sizing, and finishing of architectural doors. Every unit guarantees repeatable dimensional accuracy and superior bond integrity.
            </p>

            {/* Quick Jump Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#machinery-exhibits"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold shadow-xs transition-all hover:translate-y-[-1px]"
              >
                <Cpu className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Explore 5 Machinery Units</span>
              </a>
              <a
                href="#thickness-matrix"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-stone-800 text-xs font-bold shadow-2xs hover:border-[#b38e5d] transition-all hover:translate-y-[-1px]"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#b38e5d]" />
                <span>Door Thickness Matrix</span>
              </a>
            </div>
          </div>

          {/* Plant Capability Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 hover:border-[#b38e5d] shadow-2xs hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center justify-between text-[#b38e5d] mb-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#b38e5d]/10 flex items-center justify-center">
                  <Building className="w-4 h-4 text-[#b38e5d]" />
                </div>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-stone-100 text-stone-700">Capacity</span>
              </div>
              <p className="text-2xl font-extrabold text-stone-900 group-hover:text-[#8a6839] transition-colors">250,000+</p>
              <p className="text-xs text-stone-500 mt-1 font-medium leading-snug">Sq. Ft. Automated Facility</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 hover:border-[#b38e5d] shadow-2xs hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center justify-between text-[#b38e5d] mb-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#b38e5d]/10 flex items-center justify-center">
                  <Layers className="w-4 h-4 text-[#b38e5d]" />
                </div>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-stone-100 text-stone-700">Pressing</span>
              </div>
              <p className="text-2xl font-extrabold text-stone-900 group-hover:text-[#8a6839] transition-colors">Multi-Daylight</p>
              <p className="text-xs text-stone-500 mt-1 font-medium leading-snug">Hydraulic Cold Pressing</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 hover:border-[#b38e5d] shadow-2xs hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center justify-between text-[#b38e5d] mb-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#b38e5d]/10 flex items-center justify-center">
                  <Scissors className="w-4 h-4 text-[#b38e5d]" />
                </div>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-stone-100 text-stone-700">Sizing</span>
              </div>
              <p className="text-2xl font-extrabold text-stone-900 group-hover:text-[#8a6839] transition-colors">Dual Blade</p>
              <p className="text-xs text-stone-500 mt-1 font-medium leading-snug">Main + Scoring Blade Saws</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 hover:border-[#b38e5d] shadow-2xs hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center justify-between text-[#b38e5d] mb-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#b38e5d]/10 flex items-center justify-center">
                  <Droplet className="w-4 h-4 text-[#b38e5d]" />
                </div>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-stone-100 text-stone-700">Bonding</span>
              </div>
              <p className="text-2xl font-extrabold text-stone-900 group-hover:text-[#8a6839] transition-colors">Metered</p>
              <p className="text-xs text-stone-500 mt-1 font-medium leading-snug">Roller Glue Spreader</p>
            </div>
          </div>

        </div>
      </section>

      {/* Main Machinery Section: Vertically Aligned Stack (Original Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 scroll-mt-28" id="machinery-exhibits">
        
        {/* Navigation Section Header */}
        <div className="pb-6 border-b border-stone-200/90">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#b38e5d]"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#8a6839]">Industrial Machinery Exhibits</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            5 Core Production Machinery Units
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Each unit is equipped with photo documentation, working principle, material tolerances, and structural advantages.
          </p>
        </div>

        {/* Vertically Aligned Stack: Each Machine in an Expanded Side-by-Side Architectural Row */}
        <div className="mt-8 space-y-12">
          {MACHINERY_EXHIBITS.map((item) => {
            const currentTab = getTab(item.id);

            return (
              <article
                key={item.id}
                className="bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                id={`machine-card-${item.id}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left 5 Cols: High-Res Image Viewport & Quick Specs */}
                  <div className="lg:col-span-5 bg-[#f6f2ea] p-6 sm:p-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-200/80 group">
                    <div className="flex items-center justify-between gap-2 pb-3">
                      <span className="px-3 py-1 rounded-md bg-white border border-stone-300/80 text-stone-800 text-[11px] font-bold tracking-wider uppercase shadow-2xs">
                        {item.tag}
                      </span>
                      <span className="text-[11px] font-semibold text-[#8a6839] bg-[#b38e5d]/15 px-2.5 py-0.5 rounded-md border border-[#b38e5d]/20">
                        {item.categoryLabel}
                      </span>
                    </div>

                    {/* Interactive Zoomable Image Frame */}
                    <div 
                      onClick={() => setSelectedMachine(item)}
                      className="w-full my-3 aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md border-2 border-white hover:border-[#b38e5d] transition-all duration-500 relative flex items-center justify-center bg-stone-950"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />

                      <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4 text-center">
                        <div className="w-11 h-11 rounded-full bg-white text-stone-900 flex items-center justify-center shadow-xl transform scale-80 group-hover:scale-100 transition-transform duration-300">
                          <Maximize2 className="w-5 h-5" />
                        </div>
                        <p className="text-[11px] font-bold text-white uppercase tracking-wider">Inspect High-Res View</p>
                      </div>
                    </div>

                    {/* Quick Specs Micro-Panel */}
                    <div className="pt-3 border-t border-stone-300/70 space-y-1.5 bg-white/90 backdrop-blur-xs p-3.5 rounded-xl text-xs text-stone-700">
                      <div className="flex justify-between items-center">
                        <span className="text-stone-400 font-semibold uppercase text-[10px]">Operation:</span>
                        <span className="font-bold text-stone-800 text-right text-[11px]">{item.quickSpecs.operationType}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-stone-400 font-semibold uppercase text-[10px]">Mechanism:</span>
                        <span className="font-bold text-[#8a6839] text-right text-[11px]">{item.quickSpecs.keyMechanism}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-stone-400 font-semibold uppercase text-[10px]">Feed / Clamping:</span>
                        <span className="font-semibold text-stone-800 text-right text-[11px]">{item.quickSpecs.feedOrPressure}</span>
                      </div>
                    </div>

                    <div className="pt-3 flex items-center justify-between text-xs text-stone-500">
                      <span className="text-[11px] font-medium">Plant Unit #{item.machineNumber}</span>
                      <button 
                        onClick={() => setSelectedMachine(item)}
                        className="text-[#8a6839] hover:text-stone-900 font-bold inline-flex items-center gap-1 cursor-pointer text-xs"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Machine</span>
                      </button>
                    </div>
                  </div>

                  {/* Right 7 Cols: Complete Technical Brief Mapped Directly Beside Image */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white">
                    <div className="space-y-5">
                      
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="text-xs font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200">
                            Unit #{item.machineNumber}
                          </span>
                          <span className="text-xs font-bold text-[#8a6839] bg-[#b38e5d]/10 px-2.5 py-0.5 rounded-full border border-[#b38e5d]/20">
                            {item.badge}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-[#8a6839] mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>

                      {/* Interactive Tab Switcher */}
                      <div className="flex flex-wrap items-center gap-1.5 border-b border-stone-200 pb-2.5">
                        {[
                          { id: 'overview', label: 'Overview & Principle', icon: FileText },
                          { id: 'materials', label: 'Materials & Setup', icon: Boxes },
                          { id: 'applications', label: 'Applications', icon: Wrench },
                          { id: 'features', label: 'Features & Benefits', icon: CheckCheck },
                        ].map((t) => {
                          const Icon = t.icon;
                          const isActive = currentTab === t.id;
                          return (
                            <button
                              key={t.id}
                              onClick={(e) => setTab(item.id, t.id as any, e)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                                isActive
                                  ? 'bg-stone-900 text-white shadow-xs'
                                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                              }`}
                            >
                              <Icon className="w-3.5 h-3.5" />
                              <span>{t.label}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Tab Content Panes */}
                      <div className="text-xs sm:text-sm">
                        {currentTab === 'overview' && (
                          <div className="space-y-4">
                            <div className="bg-[#faf8f4] p-4 sm:p-5 rounded-2xl border border-stone-200/80 space-y-2 text-stone-700 leading-relaxed text-xs sm:text-[13px]">
                              {item.overview.map((para, pIdx) => (
                                <p key={pIdx}>{para}</p>
                              ))}
                            </div>

                            <div>
                              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                <Workflow className="w-3.5 h-3.5 text-[#b38e5d]" />
                                <span>Step-by-Step Working Principle</span>
                              </h4>
                              <div className="space-y-2">
                                {item.workingPrinciple.map((step, sIdx) => (
                                  <div key={sIdx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white border border-stone-200/80">
                                    <span className="w-5 h-5 rounded-full bg-[#b38e5d] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                      {sIdx + 1}
                                    </span>
                                    <p className="text-stone-700 leading-relaxed text-xs">{step}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {currentTab === 'materials' && (
                          <div className="space-y-3.5">
                            <div className="bg-[#faf8f4] p-4 sm:p-5 rounded-2xl border border-stone-200/80">
                              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                                <Boxes className="w-3.5 h-3.5 text-[#b38e5d]" />
                                <span>{item.materialsOrConfigs.heading}</span>
                              </h4>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {item.materialsOrConfigs.items.map((mat, mIdx) => (
                                  <div key={mIdx} className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-stone-200/80 text-xs text-stone-800">
                                    <CheckCircle2 className="w-4 h-4 text-[#b38e5d] shrink-0" />
                                    <span className="font-medium">{mat}</span>
                                  </div>
                                ))}
                              </div>

                              {item.materialsOrConfigs.note && (
                                <p className="text-xs text-stone-600 mt-3 pt-3 border-t border-stone-200 leading-relaxed">
                                  {item.materialsOrConfigs.note}
                                </p>
                              )}
                            </div>

                            {item.technicalDistinction && (
                              <div className="bg-amber-50/80 p-3.5 rounded-2xl border border-amber-200/80 text-xs text-amber-950 leading-relaxed">
                                <div className="flex items-center gap-1.5 font-bold text-amber-900 uppercase tracking-wider mb-1">
                                  <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                                  <span>Engineering Clarification</span>
                                </div>
                                <p>{item.technicalDistinction}</p>
                              </div>
                            )}
                          </div>
                        )}

                        {currentTab === 'applications' && (
                          <div className="space-y-3">
                            <div className="bg-[#faf8f4] p-4 sm:p-5 rounded-2xl border border-stone-200/80">
                              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                                <Wrench className="w-3.5 h-3.5 text-[#b38e5d]" />
                                <span>Applications in Door Manufacturing</span>
                              </h4>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-800">
                                {item.applications.map((app, aIdx) => (
                                  <li key={aIdx} className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-stone-200/80">
                                    <span className="w-2 h-2 rounded-full bg-[#b38e5d] shrink-0"></span>
                                    <span className="font-medium">{app}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="p-3 bg-stone-100 rounded-xl border border-stone-200 text-xs text-stone-600">
                              <span className="font-bold text-stone-800">Production Role: </span>
                              {item.quickSpecs.productionRole}
                            </div>
                          </div>
                        )}

                        {currentTab === 'features' && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-[#faf8f4] p-4 rounded-2xl border border-stone-200/80">
                              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                <Cpu className="w-3.5 h-3.5 text-[#b38e5d]" />
                                <span>Key Machine Features</span>
                              </h4>
                              <ul className="space-y-1.5 text-xs text-stone-700">
                                {item.features.map((feat, fIdx) => (
                                  <li key={fIdx} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#b38e5d] shrink-0"></span>
                                    <span>{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-[#faf8f4] p-4 rounded-2xl border border-stone-200/80">
                              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Production Advantages</span>
                              </h4>
                              <ul className="space-y-1.5 text-xs text-stone-700">
                                {item.advantages.map((adv, adIdx) => (
                                  <li key={adIdx} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                    <span>{adv}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>

                    </div>

                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </section>

      {/* Interactive Door Thickness & Acoustic Performance Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 scroll-mt-28" id="thickness-matrix">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-md">
          
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b38e5d]/10 text-[#8a6839] text-xs font-bold uppercase tracking-wider mb-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#b38e5d]" />
              <span>Interactive Dimension &amp; Acoustic Explorer</span>
            </div>
            <h3 className="text-2xl font-extrabold text-stone-900 tracking-tight">
              Door Thickness &amp; Performance Matrix
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Select a thickness rating below to inspect recommended architectural applications, sound attenuation ratings, and internal core composition.
            </p>
          </div>

          {/* Interactive Thickness Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {THICKNESS_GUIDES.map((guide, idx) => (
              <button
                key={guide.thickness}
                onClick={() => setSelectedThicknessIndex(idx)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                  selectedThicknessIndex === idx
                    ? 'bg-[#faf6ee] border-[#b38e5d] shadow-sm ring-2 ring-[#b38e5d]/20'
                    : 'bg-stone-50 border-stone-200 hover:bg-stone-100 text-stone-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-lg font-extrabold text-stone-900">{guide.thickness}</span>
                  {selectedThicknessIndex === idx && (
                    <CheckCircle2 className="w-4 h-4 text-[#b38e5d]" />
                  )}
                </div>
                <p className="text-xs font-semibold text-[#8a6839]">{guide.type}</p>
                <p className="text-[11px] text-stone-500 mt-1">{guide.acoustic}</p>
              </button>
            ))}
          </div>

          {/* Active Thickness Detail Bento Box */}
          <div className="bg-[#faf8f4] rounded-2xl p-6 border border-stone-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-stone-400 font-bold uppercase tracking-wider text-[10px] block">Recommended Use Cases</span>
              <p className="font-semibold text-stone-800 text-sm mt-1">{THICKNESS_GUIDES[selectedThicknessIndex].useCase}</p>
            </div>
            <div>
              <span className="text-stone-400 font-bold uppercase tracking-wider text-[10px] block">Acoustic Attenuation (STC)</span>
              <p className="font-semibold text-[#8a6839] text-sm mt-1">{THICKNESS_GUIDES[selectedThicknessIndex].acoustic}</p>
            </div>
            <div>
              <span className="text-stone-400 font-bold uppercase tracking-wider text-[10px] block">Internal Timber Core</span>
              <p className="font-semibold text-stone-800 text-sm mt-1">{THICKNESS_GUIDES[selectedThicknessIndex].core}</p>
            </div>
            <div>
              <span className="text-stone-400 font-bold uppercase tracking-wider text-[10px] block">Approximate Leaf Weight</span>
              <p className="font-semibold text-stone-800 text-sm mt-1">{THICKNESS_GUIDES[selectedThicknessIndex].weight}</p>
            </div>
          </div>

        </div>
      </section>

      {/* Full-Image Lightbox Modal for Machine Photo */}
      <AnimatePresence>
        {selectedMachine && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6" id="machinery-lightbox-modal">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMachine(null)}
              className="absolute inset-0 bg-stone-950/85 backdrop-blur-md"
            />

            {/* Modal Container: High-Res Image Only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl bg-stone-900 text-white rounded-3xl border border-stone-800 shadow-2xl overflow-hidden z-10 flex flex-col"
            >
              {/* Clean Top Bar with Machine Title and Close Button */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-stone-950/90 border-b border-stone-800 backdrop-blur-sm">
                <div className="flex items-center gap-3 truncate pr-4">
                  <span className="px-2.5 py-0.5 rounded bg-[#b38e5d]/20 text-[#d4af37] text-[11px] font-bold uppercase tracking-wider shrink-0">
                    {selectedMachine.tag}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white truncate">
                    {selectedMachine.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedMachine(null)}
                  className="p-1.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  aria-label="Close full view"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* High-Resolution Full Image View */}
              <div className="p-3 sm:p-5 flex items-center justify-center bg-stone-950 max-h-[82vh] overflow-hidden">
                <img
                  src={selectedMachine.image}
                  alt={selectedMachine.title}
                  className="max-h-[76vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
