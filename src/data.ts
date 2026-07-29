import { ProductCategory, Client, ValueProp, Testimonial, Stat, LaminateDoorProduct } from './types';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'wooden-doors',
    name: 'Wooden Doors',
    image: '/wooden_door.jpeg',
    iconName: 'TreePine',
    description: 'Exquisite solid wood, veneer, laminate, and flush doors crafted using generations of carpentry expertise and seasoned hardwood cores.',
    keyFeatures: ['Kiln-Seasoned Hardwood Core', 'Luxury Real Wood Veneers & HPL Laminates', 'Superior Acoustic Insulation', 'Scratch & Warp Resistant'],
    subCategories: [
      {
        id: 'wooden-laminate-doors',
        name: 'Wooden Laminate Doors',
        description: 'High-pressure decorative laminate doors offering rich woodgrain finishes, scratch resistance, and zero polishing requirements.',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop',
        keyFeatures: ['High Pressure Laminate (HPL) Finish', 'Stain & Scratch Resistant', 'Wide Variety of Wood Textures', 'No Maintenance Polishing Needed']
      },
      {
        id: 'wooden-flush-doors',
        name: 'Wooden Flush Doors',
        description: 'Heavy-duty solid core wooden flush doors constructed according to IS: 2202 specifications with seasoned timber fill.',
        image: '/wooden_door.jpeg',
        keyFeatures: ['IS 2202 Certified Quality', 'Boiling Water Resistant Bonding', 'High Screw Holding Strength', 'Dimensional Stability']
      },
      {
        id: 'wooden-molded-doors',
        name: 'Wooden Molded Doors',
        description: 'Elegantly panelled molded skin doors combining classic architectural aesthetic contours with lightweight hardwood frames.',
        image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop',
        keyFeatures: ['Classic Panel Contours', 'High Density Fiberboard Skins', 'Uniform Factory Surface', 'Termite & Borer Treated']
      }
    ]
  },
  {
    id: 'post-forming-doors',
    name: 'Post Forming Doors',
    image: '/post_forming.jpeg',
    iconName: 'Compass',
    description: 'Precision curved-edge post-formed laminate doors designed for seamless continuous edge finishes, ideal for modern interiors.',
    keyFeatures: ['Seamless Continuous Edge Wrapping', 'Impact Resistant Curved Edges', 'Ultra-Modern Minimalist Finish', 'Water Repellent Edges'],
    subCategories: [
      {
        id: 'post-forming-doors',
        name: 'Post Forming Doors Catalog',
        description: 'Explore our complete gallery of seamless curved-edge post-formed laminate door designs.',
        image: '/post_forming.jpeg',
        keyFeatures: ['Seamless Continuous Edge Wrapping', 'Impact Resistant Curved Edges', 'Ultra-Modern Minimalist Finish']
      }
    ]
  },
  {
    id: 'solid-pvc-doors',
    name: 'Solid PVC Doors',
    image: '/pvc.jpeg',
    iconName: 'DoorClosed',
    description: 'Premium 100% waterproof solid PVC doors engineered for absolute durability, maintenance-free longevity, and hygienic wet area usage.',
    keyFeatures: ['100% Waterproof & Termite-Proof', 'Zero Maintenance Required', 'High Structural Resistance', 'Ideal for Bathrooms & Wet Areas'],
    subCategories: [
      {
        id: 'pvc-panel-doors',
        name: 'PVC Panel Doors',
        description: 'Designer extruded PVC panel doors featuring elegant recessed profiles and durable hollow/solid polymer sections.',
        image: '/pvc.jpeg',
        keyFeatures: ['Extruded Multi-Chamber Panels', 'Lightweight & High Strength', 'Corrosion Free', 'Easy Wipe Clean Surface']
      },
      {
        id: 'pvc-flush-doors',
        name: 'PVC Flush Doors',
        description: 'Heavy solid core PVC flush doors combining rigid PVC skins with solid internal reinforcing for high traffic areas.',
        image: '/frp.jpeg',
        keyFeatures: ['Solid Internal Structure', 'Completely Waterproof', 'Sound Insulation Properties', 'Heavy Hardware Compatible']
      }
    ]
  },
  {
    id: 'theme-doors',
    name: 'Theme Doors',
    image: '/theme.jpeg',
    iconName: 'Palette',
    description: 'Designer concept doors with artistic geometric routing, metallic brass strip inlays, and bespoke artistic patterns.',
    keyFeatures: ['Custom CNC Routed Patterns', 'Elegant Metallic Brass Inlays', 'Bespoke Architectural Styling', 'Contemporary Accent Designs'],
    subCategories: [
      {
        id: 'theme-doors',
        name: 'Theme Doors Catalog',
        description: 'Browse our collection of full HD digital art, nature, character, and woodgrain theme door designs.',
        image: 'theme/theme.jpeg',
        keyFeatures: ['Full HD Digital Theme Overlay', 'High Scratch & Moisture Resistance', 'Vibrant Interior Artwork']
      }
    ]
  },
  {
    id: 'frp-doors',
    name: 'FRP Doors',
    image: '/frp.jpeg',
    iconName: 'ShieldAlert',
    description: 'Fiberglass Reinforced Polymer doors combining industrial-grade resilience with elegant decorative wood-grain textures.',
    keyFeatures: ['Weather & UV Proof Coating', 'Chemical & Acid Resistant', 'High Impact Core Structure', 'Optimal for Main Entrances & Terraces'],
    subCategories: [
      {
        id: 'wooden-molded-doors',
        name: 'FRP / Molded Doors Catalog',
        description: 'Explore weather-proof FRP and molded fiberglass door designs.',
        image: '/frp.jpeg',
        keyFeatures: ['100% Weatherproof', 'Impact & Corrosion Proof', 'Woodgrain Texture Finish']
      }
    ]
  },
  {
    id: 'frames',
    name: 'Frames',
    image: '/frames.jpeg',
    iconName: 'Frame',
    description: 'Extremely sturdy, warp-resistant wooden and composite chaukhats (frames) designed to hold heavy doors flawlessly.',
    keyFeatures: ['Perfect Leveling & Right Angles', 'Moisture-Resistant Sealant', 'Heavy Load-Bearing Capacity', 'Custom Wall Thickness Matching'],
    subCategories: [
      {
        id: 'frames',
        name: 'Door Frames Catalog',
        description: 'Explore Solid Wood, Red Maranty, Seasoned Teak, and FRP moisture-proof door frames.',
        image: '/frames.jpeg',
        keyFeatures: ['Solid Wood & Red Meranti', 'FRP Bottom Coating', 'Single & Double Rebate Options']
      }
    ]
  },
  {
    id: 'plywood',
    name: 'Plywood',
    image: '/plywood.jpeg',
    iconName: 'Layers',
    description: 'Heavy-duty decorative plywood and block boards made of high-density selected hardwood species bonded with synthetic resin.',
    keyFeatures: ['Boiling Water Resistant (BWR) Grade', 'Borer & Termite Proof Shield', 'Superior Nail Holding Strength', 'Perfect Ply Calibration']
  }
];

export const CLIENT_DATA: Client[] = [
  // Government Departments & Public Sectors
  {
    name: 'CPWD (Central Public Works Dept)',
    category: 'government',
    description: 'Approved vendor and manufacturer of premium wooden, flush, and PVC doors across extensive central government housing schemes and luxury ministerial bungalows.',
    keyProjects: ['Central Vista Housing', 'Government Officers Residences', 'Administrative Complexes']
  },
  {
    name: 'Military Engineer Services (MES)',
    category: 'government',
    description: 'Trusted, certified door supplier complying with rigorous defense specifications for military cantonments, staff residential quarters, and defense command headquarters.',
    keyProjects: ['Defense Officers Housing', 'Technical Command Quarters', 'Cantonment Infrastructure']
  },
  {
    name: 'DMRC (Delhi Metro Rail Corporation)',
    category: 'government',
    description: 'Supplying specialized high-integrity fire-resistant doors and structural door solutions for multiple underground, elevated stations, and administrative depots.',
    keyProjects: ['Phase-III and Phase-IV Stations', 'DMRC Depots', 'Metro Administrative Building']
  },
  {
    name: 'PWD (Public Works Department)',
    category: 'government',
    description: 'Supplying robust, anti-bacterial, and high-durability doors for government medical colleges, schools, courtrooms, and civil administration complexes.',
    keyProjects: ['State Hospital Upgrades', 'Public Secondary Schools', 'Judicial Court Complexes']
  },
  {
    name: 'Delhi Development Authority (DDA)',
    category: 'government',
    description: 'Strategic supplier of cost-effective, premium-finish PVC and flush doors for expansive urban housing complexes and commercial local shopping centers.',
    keyProjects: ['DDA Smart Housing Projects', 'Dwarka Residential Hubs', 'LSC Commercial Blocks']
  },
  {
    name: 'Northern Railway',
    category: 'government',
    description: 'Approved provider of wood-plastic composite and FRP doors for station staff residences, station manager cabins, and waiting lounge upgrades.',
    keyProjects: ['Station Modernization Phase 1', 'Railway Colony Housing', 'Staff Rest Complexes']
  },

  // Private Builders & Developers
  {
    name: 'DLF Limited',
    category: 'builder',
    description: 'Crafting bespoke luxury wood-veneer doors and heavy double-leaf entrances for flagship luxury residential towers and high-end Grade-A commercial IT parks.',
    keyProjects: ['DLF Magnolias', 'DLF Cybercity Phase III', 'DLF Camellias']
  },
  {
    name: 'Unitech Group',
    category: 'builder',
    description: 'Supplier of premium interior flush doors and robust wood frames for massive multi-acre integrated townships and residential high-rises.',
    keyProjects: ['Unitech Grande', 'Uniworld City Townships', 'Unitech Infospace']
  },
  {
    name: 'Omaxe Limited',
    category: 'builder',
    description: 'Providing a rich variety of premium PVC doors, design-routed theme doors, and calibrated blockboards for luxury residential towers and retail mall complexes.',
    keyProjects: ['Omaxe Hills', 'Omaxe Forest Spa', 'Omaxe Celebration Mall']
  },
  {
    name: 'Parsvnath Developers',
    category: 'builder',
    description: 'Manufacturing custom main doors, luxury wood paneling, and calibrated plywood for premium high-rise residences and upscale metro-station retail hubs.',
    keyProjects: ['Parsvnath Exotica', 'Parsvnath Prestige', 'Parsvnath Metro Mall']
  },
  {
    name: 'Eldeco Group',
    category: 'builder',
    description: 'Supplying weather-proof, highly secure FRP doors and wood-grain flush doors for premium private villa developments and secure row-housing schemes.',
    keyProjects: ['Eldeco County Villas', 'Eldeco Utopia', 'Eldeco Greens']
  },
  {
    name: 'Ansal API',
    category: 'builder',
    description: 'Long-standing contract manufacturer for durable wood frames and main doors in luxury golf-course townships and sub-urban residential projects.',
    keyProjects: ['Sushant Golf City', 'Ansal Aquapolis', 'Palam Vihar Luxury Villas']
  },
  {
    name: 'Gaursons India (Gaur Group)',
    category: 'builder',
    description: 'High-volume production of durable PVC bathroom doors, balcony FRP doors, and commercial flush doors for extensive smart city townships.',
    keyProjects: ['Gaur City 1 & 2', 'Gaur Saundaryam', 'Gaur Sportswood']
  },

  // Corporate & Institutional
  {
    name: 'Larsen & Toubro (L&T)',
    category: 'corporate',
    description: 'Approved Class-1 vendor for large-scale engineering, procurement, and construction (EPC) projects, supplying high-performance fire-rated and industrial-grade doors.',
    keyProjects: ['Corporate IT Hubs', 'Integrated Smart Infrastructure', 'Airport Terminal Extensions']
  },
  {
    name: 'Tata Projects',
    category: 'corporate',
    description: 'Supplying customized, high-density laminate doors and acoustic wood paneling for high-spec academic institutes and luxury research labs constructed by Tata Projects.',
    keyProjects: ['Academic Campus Facilities', 'Corporate Research & Tech Parks', 'Premium Civic Centers']
  },
  {
    name: 'Shapoorji Pallonji',
    category: 'corporate',
    description: 'Vendor of premium high-density fire doors, sound-attenuating doors, and custom-designed lobby portals for high-end residential and luxury corporate spaces.',
    keyProjects: ['SP Residences', 'Luxury Commercial Skyscrapers', 'State Administration Offices']
  },
  {
    name: 'Godrej Properties',
    category: 'corporate',
    description: 'Exclusive manufacturer of eco-friendly, FSC-certified solid wood core doors and WPC frames for premium sustainable residential projects.',
    keyProjects: ['Godrej Summit', 'Godrej Aria', 'Godrej Frontier']
  },
  {
    name: 'ITC Hotels',
    category: 'corporate',
    description: 'Crafting ultra-premium bespoke teakwood main doors, specialized high-decibel acoustic soundproof suite doors, and gold-leaf paneling for luxury heritage hospitality.',
    keyProjects: ['ITC Grand Bharat Luxury Suites', 'ITC Maurya Presidential Suite', 'ITC Mughal Lounge Doors']
  },
  {
    name: 'The Oberoi Group',
    category: 'corporate',
    description: 'Bespoke custom-designed doors using exotic burled wood veneers, solid brass hinges, and custom hand-polished lacquered finishes for elite hotel lobbies.',
    keyProjects: ['The Oberoi Gurgaon Lounges', 'Trident Hotel Suite Entrances', 'Oberoi Executive Boardrooms']
  },
  {
    name: 'Max Healthcare',
    category: 'corporate',
    description: 'Supplying high-pressure laminate (HPL) medical-grade doors featuring seamless airtight sealing, antimicrobial copper shields, and hermetic lead-lining for X-Ray zones.',
    keyProjects: ['Max Super Speciality Hospitals', 'Hygienic ICU Swing Doors', 'Radiation Shielded Lab Doors']
  },
  {
    name: 'Amity University',
    category: 'corporate',
    description: 'Supplying thousands of heavy-duty acoustic classroom doors, double-leaf seminar hall doors, sturdy hostel fire exits, and premium decorative mahogany laminate panels.',
    keyProjects: ['Noida Main Campus Upgrade', 'Amity Academic Blocks', 'Amity International Hostels']
  }
];

export const VALUE_PROPS: ValueProp[] = [
  {
    title: 'Premium Materials',
    description: 'Selecting only high-density seasoned timber, Grade-A resins, and high-impact polymers for maximum longevity.',
    iconName: 'Award'
  },
  {
    title: 'Water Resistant',
    description: '100% moisture protection through advanced polymer wrapping and waterproof resin binding.',
    iconName: 'Droplet'
  },
  {
    title: 'Termite Proof',
    description: 'Infused with chemical preservation shields that guarantee permanent protection against borers and termites.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Long Warranty',
    description: 'Uncompromising performance backed by a comprehensive product warranty up to 10 full years.',
    iconName: 'Calendar'
  },
  {
    title: 'Made in India',
    description: 'Proudly manufactured locally since 1998, supporting domestic craftsmanship and engineering standards.',
    iconName: 'Heart'
  },
  {
    title: 'Customization',
    description: 'Bespoke dimensions, wood carvings, metallic routing, and premium veneers engineered precisely for your home.',
    iconName: 'Settings'
  }
];

export const STATS: Stat[] = [
  {
    value: '25+',
    label: 'Years of Excellence',
    description: 'Leading the decorative ply and luxury doors industry since 1998 with uncompromising quality.'
  },
  {
    value: '50,000+',
    label: 'Successful Projects',
    description: 'Installed in premium luxury villas, high-rise apartments, metro stations, and defense cantonments.'
  },
  {
    value: '500+',
    label: 'Designs & Finishes',
    description: 'An expansive catalogue of custom carvings, veneer textures, laminate shades, and metallic inlays.'
  },
  {
    value: '200+',
    label: 'Dealer Network',
    description: 'Extensive retail and wholesale partner presence across north and central India for reliable logistics.'
  }
];

export const WOODEN_LAMINATE_DOORS: LaminateDoorProduct[] = [
  {
    id: 'ewld-01',
    code: 'EWLD -01',
    title: 'Eureka Wooden Laminate Door EWLD -01',
    type: 'Wooden Laminate Door',
    finish: 'Dark Espresso Walnut with Twin Metallic Vertical Inlays',
    designStyle: 'vertical-inlay',
    description: 'Contemporary dark woodgrain laminate door featuring twin vertical brushed aluminum inlay strips running parallel for a sleek modern architectural entrance.',
    keySpecs: ['Dual Silver Vertical Inlay Lines', 'High Pressure Decorative Laminate (HPL)', 'Boiling Water Resistant Solid Hardwood Core', 'Maintenance-Free Polish Finish']
  },
  {
    id: 'ewld-02',
    code: 'EWLD -02',
    title: 'Eureka Wooden Laminate Door EWLD -02',
    type: 'Wooden Laminate Door',
    finish: 'Espresso Oak with 5-Panel Horizontal Inlay Grooves',
    designStyle: 'horizontal-grooves',
    description: 'Rich dark espresso laminate door styled with 5 evenly spaced horizontal CNC routed inlay lines dividing the face into clean balanced segments.',
    keySpecs: ['5 Horizontal CNC Grooves', 'Scratch & Heat Resistant HPL Surface', 'Termite & Borer Proof Core', 'Uniform Factory Calibration']
  },
  {
    id: 'ewld-03',
    code: 'EWLD -03',
    title: 'Eureka Wooden Laminate Door EWLD -03',
    type: 'Wooden Laminate Door',
    finish: 'Dark Charcoal Grain Solid Finish',
    designStyle: 'dark-solid',
    description: 'Minimalist dark charcoal solid woodgrain laminate door showcasing a seamless natural linear timber grain pattern for executive interiors.',
    keySpecs: ['Seamless Vertical Grain Pattern', 'Anti-Fingerprint Satin Finish', 'Heavy Core Screw Holding Capability', 'IS:2202 Certified Quality']
  },
  {
    id: 'ewld-04',
    code: 'EWLD -04',
    title: 'Eureka Wooden Laminate Door EWLD -04',
    type: 'Wooden Laminate Door',
    finish: 'Natural Teak & Golden Walnut Grain',
    designStyle: 'warm-teak',
    description: 'Warm golden teakwood laminate door highlighting rich natural organic wood grain variations, ideal for cozy residential room entrances.',
    keySpecs: ['Rich Teakwood Grain Texture', 'UV Protected Non-Fading Color', 'Kiln-Seasoned Solid Timber Core', 'Moisture Sealing Protection']
  },
  {
    id: 'ewld-05',
    code: 'EWLD -05',
    title: 'Eureka Wooden Laminate Door EWLD -05',
    type: 'Wooden Laminate Door',
    finish: 'Ash Maple with Dark Walnut Side Border & Horizontal Lines',
    designStyle: 'light-horizontal',
    description: 'Dual-tone designer laminate door combining light ash maple wood with a dark walnut accent border and 6 horizontal inlay grooves.',
    keySpecs: ['Contrast Dark Walnut Left Border', '6 Horizontal Accent Inlays', 'Light Ash Maple Face', 'Zero Polish Required']
  },
  {
    id: 'ewld-06',
    code: 'EWLD -06',
    title: 'Eureka Wooden Laminate Door EWLD -06',
    type: 'Wooden Laminate Door',
    finish: 'Birch Cream Center with Dual Dark Side Borders',
    designStyle: 'dual-border',
    description: 'Striking contrast door featuring a central light birch cream laminate panel framed symmetrically by dark walnut vertical side stiles.',
    keySpecs: ['Symmetrical Dual Side Borders', 'High Density Fiber Laminate Face', 'Heavy Load Bearing Hardwood Core', 'Modern Italian Interior Design']
  },
  {
    id: 'ewld-07',
    code: 'EWLD -07',
    title: 'Eureka Wooden Laminate Door EWLD -07',
    type: 'Wooden Laminate Door',
    finish: 'Light Natural Oak with Vertical Twin Grooves',
    designStyle: 'light-vertical',
    description: 'Elegant light natural oak laminate door subtly accented by two fine vertical routed detail lines running top to bottom.',
    keySpecs: ['Dual Vertical Routered Lines', 'Natural Scandinavian Oak Texture', 'Sound & Heat Insulation Core', 'Stain & Chemical Resistant']
  },
  {
    id: 'ewld-08',
    code: 'EWLD -08',
    title: 'Eureka Wooden Laminate Door EWLD -08',
    type: 'Wooden Laminate Door',
    finish: 'Cream Birch with Left Dark Walnut Accent Strip',
    designStyle: 'side-accent',
    description: 'Modern asymmetrical designer laminate door showcasing a soft cream birch main body offset by a dark walnut vertical left side strip.',
    keySpecs: ['Asymmetrical Dark Side Accent', 'Silky Smooth Tactile Laminate', 'Waterproof Edge Banding', '10 Year Structural Guarantee']
  }
];

export const POST_FORMING_DOORS: LaminateDoorProduct[] = [
  {
    id: 'epfd-01',
    code: 'EPFD -01',
    title: 'Post Forming Door Specification',
    type: 'Post Forming Door',
    finish: 'Premium Post Forming Dark Walnut Laminate with Metallic Inlay Lines',
    designStyle: 'horizontal-grooves',
    description: 'Engineered post-formed laminate door featuring 180-degree seamless curved edge wrapping, kiln-seasoned hardwood core, and precision metallic accent lines.',
    keySpecs: [
      'Premium Quality Post-Forming High-Pressure Laminates',
      'Hardwood Core with Eco-Friendly Moisture-Resistant Board',
      'Vacuum Kiln-Seasoned Wood Construction',
      'Advanced Hydraulic Hot-Press Bonding Method',
      'High-Strength Finger-Jointed Frame Architecture',
      'Factory Finished Surface — Zero Polish or Paint Needed',
      'Complete Factory-Cured Ready-to-Install Product',
      'Precision Section and Size Made-to-Order',
      'Extensive Palette of Colors & CMD Computerized Designs',
      'Seamless Hardware, Lock & Accessories Fitting',
      'Bespoke Made-to-Order Manufacturing'
    ]
  }
];

export const WOODEN_FLUSH_DOORS: LaminateDoorProduct[] = [
  {
    id: 'ewfd-01',
    code: 'EWFD - 01',
    title: 'Eureka Gold Flush Door',
    type: 'Wooden Flush Door',
    finish: 'Golden Honey Hardwood Finish with Eureka Gold Seal Stamp',
    designStyle: 'warm-teak',
    description: 'IS:2202 certified premium solid core flush door crafted with 100% vacuum kiln-seasoned hardwood timber and BWP grade synthetic resin hot-press bonding.',
    keySpecs: [
      'IS: 2202 Certified High-Grade Solid Core Flush Door',
      '100% Vacuum Kiln-Seasoned Selected Hardwood Core & Frame',
      'BWP (Boiling Water Proof) Phenolic Resin Hot-Press Bonding',
      'Pressure Vacuum Chemically Treated Against Termites & Borer',
      'Exceptional Screw Holding Capacity & High Dimensional Stability',
      'Smooth Precision Calibrated Surface Ready for Paint, Polish or Veneer',
      'Heavy Duty High Impact Resistance Construction',
      'Bespoke Custom Sizes and Sections Manufactured to Order'
    ]
  },
  {
    id: 'ewfd-02',
    code: 'EWFD - 02',
    title: 'Eureka Prime Flush Door',
    type: 'Wooden Flush Door',
    finish: 'Prime Roasted Walnut Finish with Eureka Prime Seal Stamp',
    designStyle: 'dark-solid',
    description: 'Heavy-duty commercial & luxury residential flush door featuring finger-jointed hardwood framing, anti-warping hydraulic press assembly, and all-weather durability.',
    keySpecs: [
      'Premium Grade Commercial & Residential Solid Core Flush Door',
      'Seasoned Timber Internal Infill with Finger-Jointed Hardwood Frame',
      'BWP Grade Synthetic Resin Bonding for Extreme Weather Resistance',
      'Deep Vacuum Chemical Treatment Against Borer, Termites & Fungi',
      'Anti-Warping Hydraulic Hot Press Technology',
      'Ready for Direct Polish, Paint, or Decorative Laminate Overlay',
      'Superior Sound Insulation & High Thermal Resistance',
      'Engineered for High-Traffic Heavy Usage Entrances'
    ]
  }
];

export const WOODEN_MOLDED_DOORS: LaminateDoorProduct[] = [
  {
    id: 'efrpd-02',
    code: 'EFRPD – 02',
    title: 'Eureka FRP 2 Panel Door',
    type: 'Wooden Molded Door',
    finish: 'Smooth Off-White Molded 2-Panel Arched Finish',
    designStyle: 'white-2panel',
    description: 'Classic 2-panel molded door with top arched panel relief, vacuum-pressed FRP skin, and moisture-resistant internal core.',
    keySpecs: [
      'High-Density Fiber/FRP Premium Molded Panel Skins',
      'Vacuum Kiln-Seasoned Seasoned Timber Stile & Rail Frame',
      'Waterproof, Borer-Proof & Termite-Resistant Core Treatment',
      'Factory Primed White Smooth Finish — Ready for Custom Paint or Polish',
      'High Impact Strength & Dimensional Stability',
      'Sound Insulating Honeycomb Core Structure',
      'Standard & Custom Architectural Door Sizes Available'
    ]
  },
  {
    id: 'efrpd-05',
    code: 'EFRPD – 05',
    title: 'Eureka FRP 2 Panel Door',
    type: 'Wooden Molded Door',
    finish: 'Deep Walnut Grain Molded 2-Panel Arched Finish',
    designStyle: 'dark-2panel',
    description: 'Elegant dark walnut wood-grain textured 2-panel arched molded door combining traditional millwork aesthetics with modern FRP durability.',
    keySpecs: [
      'High-Density Fiber/FRP Molded Textured Wood-Grain Skins',
      'Vacuum Kiln-Seasoned Timber Stile & Rail Internal Framing',
      '100% Water Resistant & Anti-Termite Chemically Treated',
      'Rich Dark Walnut Factory Surface Finish',
      'Anti-Warping Hydraulic Press Assembly',
      'Superior Thermal and Acoustic Insulation Properties',
      'Custom Sizes and Hardware Pre-Lock Machining Offered'
    ]
  },
  {
    id: 'efrpd-03',
    code: 'EFRPD – 03',
    title: 'Eureka FRP 4 Panel Door',
    type: 'Wooden Molded Door',
    finish: 'Smooth Off-White Molded 4-Panel Colonial Arched Finish',
    designStyle: 'white-4panel',
    description: 'Symmetrical 4-panel colonial molded door with dual upper arched panels, offering timeless European architectural elegance.',
    keySpecs: [
      'High-Density Fiber/FRP 4-Panel Deep Relief Skin',
      'Kiln-Seasoned Hardwood Perimeter Framing',
      'BWP Grade Moisture Resistant Hot-Press Bonding',
      '100% Termite, Borer & Weather Proof Construction',
      'Factory Finished Off-White Ready for Immediate Installation',
      'Heavy-Duty Screw Holding Capacity & Lock Block Reinforced',
      'Bespoke Sizing and Customized Hardware Fitting Options'
    ]
  }
];

export const PVC_PANEL_DOORS: LaminateDoorProduct[] = [
  {
    id: 'spvcd-04',
    code: 'SPVCD – 04',
    title: 'PVC Panel Door Brown With Ivory SPVCD – 04',
    type: 'PVC Panel Door',
    finish: 'Dark Brown Frame with Charcoal Gray Inset Panels',
    designStyle: 'brown-dark',
    description: '100% waterproof solid PVC 2-panel door featuring a dark brown perimeter frame and contrasting high-impact charcoal inset panels.',
    keySpecs: [
      '100% Waterproof & Termite Proof Solid Polymer PVC Composition',
      'Dual-Tone Dark Brown Outer Frame & Charcoal Inset Panels',
      'Zero Maintenance — Never Requires Painting or Varnish',
      'High Structural Rigidity with Internal Reinforcement Ribs',
      'Lightweight Construction Easy on Hinges & Hardware',
      'Ideal for Bathroom, Toilet, Coastal & High Moisture Areas',
      'Custom Widths & Heights Manufactured to Order'
    ]
  },
  {
    id: 'spvcd-05',
    code: 'SPVCD – 05',
    title: 'PVC Panel Door Brown With Ivory SPVCD – 05',
    type: 'PVC Panel Door',
    finish: 'Dark Brown Frame with Warm Ivory Inset Panels',
    designStyle: 'brown-ivory',
    description: 'High-contrast 2-panel solid PVC door with rich dark brown framing and bright ivory center panels for modern residential interiors.',
    keySpecs: [
      '100% Waterproof, Borer Proof & Chemical Resistant Polymer',
      'Rich Dark Brown Stile/Rail Frame with Warm Ivory Insets',
      'UV-Stabilized Anti-Fading Surface Finish',
      'Seamless Joint Welding for Superior Durability',
      'Effortless Cleaning & Stain Resistant Surface',
      'Engineered for High Humidity Enclosures & Washrooms',
      'Standard Architectural Sizes & Fast Delivery'
    ]
  },
  {
    id: 'spvcd-03',
    code: 'SPVCD – 03',
    title: 'PVC Panel Door Gary Color SPVCD – 03',
    type: 'PVC Panel Door',
    finish: 'Dark Espresso Finish with Gold Beading Inlay',
    designStyle: 'espresso-gold',
    description: 'Premium dark solid PVC door with dual recessed panels accented by thin golden border lines for a sleek minimalist look.',
    keySpecs: [
      'Heavy-Duty Solid PVC Construction with Gold Inlay Detailing',
      '100% Water, Rot & Termite Proof Material',
      'Deep Espresso / Charcoal Monochrome Finish',
      'Smooth Precision Extruded Edge Profiles',
      'High Impact Resistance & Fire-Retardant Grade',
      'Suitable for Both Interior Bedrooms & Wet Area Entrances',
      'Pre-Cut Fitting Channels for Standard Hardware'
    ]
  },
  {
    id: 'spvcd-02',
    code: 'SPVCD – 02',
    title: 'PVC Panel Door Gray Color SPVCD – 02',
    type: 'PVC Panel Door',
    finish: 'Slate Gray Finish with Fine Border Grooves',
    designStyle: 'gray-solid',
    description: 'Modern monochrome slate gray solid PVC panel door offering clean minimalist styling and complete moisture protection.',
    keySpecs: [
      'Solid Extruded PVC Polymer Structure',
      '100% Impervious to Water, Steam & Humidity',
      'Uniform Slate Gray Matte Factory Finish',
      'Dual Recessed Panel Relief with Fine Molded Edges',
      'Thermal Insulated & Sound Dampening Infill',
      'Long Service Life with Zero Swelling or Warping',
      'Wide Range of Standard Door Sizes Available'
    ]
  },
  {
    id: 'spvcd-07',
    code: 'SPVCD – 07',
    title: 'PVC Panel Door Gray With Ivory SPVCD – 07',
    type: 'PVC Panel Door',
    finish: 'Slate Gray Frame with Warm Ivory Inset Panels',
    designStyle: 'gray-ivory',
    description: 'Contemporary two-tone solid PVC door with slate gray outer perimeter framing and light ivory interior panels.',
    keySpecs: [
      '100% Waterproof Dual-Tone Solid PVC Construction',
      'Slate Gray Exterior Rail/Stile Frame with Ivory Panel Face',
      'Rot-Free, Termite-Proof & Fungus Resistant Composition',
      'Heavy-Duty Screw Anchoring Capacity along Lock Edge',
      'Wipe-Clean Surface Resistant to Household Cleaners',
      'Ideal for Modern Apartments, Hotels & Commercial Bathrooms',
      'Custom Millwork Sizing Manufactured on Request'
    ]
  },
  {
    id: 'spvcd-01',
    code: 'SPVCD – 01',
    title: 'PVC Panel Door Ivory Color SPVCD – 01',
    type: 'PVC Panel Door',
    finish: 'Warm Ivory Finish with Golden Border Accents',
    designStyle: 'ivory-gold',
    description: 'Elegant cream ivory solid PVC door with double panel outline highlighted by golden accent inlay lines.',
    keySpecs: [
      'Premium Ivory Solid PVC Material with Metallic Gold Lining',
      '100% Waterproof, Washable & Weatherproof',
      'Bright Cream Ivory Satin Surface Finish',
      'Reinforced Corner Jointing for High Torsional Strength',
      'Eco-Friendly Recyclable Flame-Retardant Polymer',
      'Popular Choice for Residential Bathrooms & Utility Rooms',
      'Comes Ready to Install with Pre-Trimmed Edges'
    ]
  },
  {
    id: 'spvcd-06',
    code: 'SPVCD – 06',
    title: 'PVC Panel Door Ivory With Gray SPVCD – 06',
    type: 'PVC Panel Door',
    finish: 'Warm Ivory Frame with Charcoal Gray Inset Panels',
    designStyle: 'ivory-gray',
    description: 'Distinctive contrast solid PVC door featuring bright ivory outer framing with bold charcoal gray inset panels.',
    keySpecs: [
      'Solid Polymer PVC Construction — Guaranteed 100% Waterproof',
      'Ivory Outer Stile/Rail Frame paired with Charcoal Gray Insets',
      'High Mechanical Strength & Anti-Scratch Properties',
      'Chemical & Salt-Air Resistant — Perfect for Coastal Climates',
      'Zero Swelling, Shrinking or Splintering',
      'Easy DIY Maintenance and Care',
      'Full Range of Thicknesses and Width Options'
    ]
  }
];

export const PVC_FLUSH_DOORS: LaminateDoorProduct[] = [
  {
    id: 'spvcfd-01',
    code: 'SPVCFD – 01',
    title: 'PVC Flush Door Ivory SPVCFD – 01',
    type: 'PVC Flush Door',
    finish: 'Smooth Warm Ivory Solid Flush Slab',
    designStyle: 'flush-ivory',
    description: '100% waterproof solid extruded PVC flush door slab with flat seamless surface and high density internal ribbing.',
    keySpecs: [
      '100% Waterproof, Damp-Proof & Termite Proof Solid PVC',
      'Seamless Flat Flush Surface Profile',
      'UV Stabilized Warm Ivory Satin Surface Finish',
      'Lightweight Construction Easy on Hinges & Hardware',
      'Zero Swelling or Warping in Heavy Moisture Enclosures',
      'Ideal Choice for Bathrooms, Restrooms & Coastal Areas'
    ]
  },
  {
    id: 'spvcfd-02',
    code: 'SPVCFD – 02',
    title: 'PVC Flush Door Slate Gray SPVCFD – 02',
    type: 'PVC Flush Door',
    finish: 'Matte Slate Gray Solid Flush Slab',
    designStyle: 'flush-gray',
    description: 'Ultra-modern matte slate gray solid polymer PVC flush door designed for contemporary residential and office washrooms.',
    keySpecs: [
      '100% Waterproof & Chemical Resistant PVC Extrusion',
      'Uniform Matte Slate Gray Flat Surface Finish',
      'Hollow-Core Reinforcement Ribs for Thermal Insulation',
      'Fire-Retardant & Self-Extinguishing Grade Material',
      'Easy Wipe-Clean Surface Resistant to Stains',
      'Precision Factory Calibrated Standard Dimensions'
    ]
  },
  {
    id: 'spvcfd-03',
    code: 'SPVCFD – 03',
    title: 'PVC Flush Door Dark Brown SPVCFD – 03',
    type: 'PVC Flush Door',
    finish: 'Deep Roasted Espresso Dark Brown Solid Flush Slab',
    designStyle: 'flush-brown',
    description: 'Top-rated heavy-duty dark espresso brown solid PVC flush door with smooth satin sheen and extreme weather durability.',
    keySpecs: [
      'Top Rated 5-Star Architectural Solid PVC Flush Door',
      '100% Impervious to Water, Steam & Marine Humidity',
      'Luxurious Dark Espresso Brown Satin Finish',
      'Superior Screw Holding Capacity along Reinforced Stiles',
      'Scratch Resistant & Completely Maintenance-Free',
      'Ready to Hang with Pre-Cut Fitting Channels'
    ]
  }
];

export const THEME_DOORS: LaminateDoorProduct[] = [
  {
    id: 'theme-15',
    code: 'Theme 15',
    title: 'Theme 15',
    type: 'Theme Door',
    finish: 'Rich Dark Mahogany Texture with Vertical Grain Line Accent',
    designStyle: 'dark-mahogany',
    description: 'Elegant dark mahogany textured theme door featuring vertical accent lining for upscale residential interiors.',
    keySpecs: [
      'High-Definition Digital Theme Surface Lamination',
      'Rich Dark Mahogany Wood Grain Aesthetics',
      'Scratch, Stain & Moisture Resistant Protective Coating',
      'Solid Core High-Density Fiber Board Structure',
      'Precision Factory Finished Edges',
      'Ideal for Main Bedrooms, Living Rooms & Executive Offices'
    ]
  },
  {
    id: 'theme-16',
    code: 'Theme 16',
    title: 'Theme 16',
    type: 'Theme Door',
    finish: 'Dark Walnut Finish with Warm Timber Grain Details',
    designStyle: 'dark-walnut',
    description: 'Contemporary dark walnut theme door offering deep warm wood tones with smooth satin finish.',
    keySpecs: [
      'Premium Printed Theme Overlay with Clear UV Sheen',
      'Natural Dark Walnut Timber Grain Texture',
      'Borer & Termite Treated Internal Core Structure',
      'Dimensional Stability — No Warping or Shrinking',
      'Low Maintenance Wipe-Clean Surface',
      'Architectural Standard Dimensions Available'
    ]
  },
  {
    id: 'theme-17',
    code: 'Theme 17',
    title: 'Theme 17',
    type: 'Theme Door',
    finish: 'Rustic Warm Teak Grain Texture',
    designStyle: 'warm-teak',
    description: 'Warm rustic teak timber theme door bringing natural wood aesthetics into modern living spaces.',
    keySpecs: [
      'Authentic Teak Wood Grain Graphic Film Surface',
      'Heavy-Duty Flush Core Frame Construction',
      'Resistant to Daily Wear, Scratches and Stains',
      'Pre-Finished Factory Lamination — No Polish Needed',
      'Custom Height and Width Fabrication Options'
    ]
  },
  {
    id: 'theme-18',
    code: 'Theme 18',
    title: 'Theme 18',
    type: 'Theme Door',
    finish: 'Dark Espresso Wood with Vertical Off-Center White Inlay Strip',
    designStyle: 'espresso-white-inlay',
    description: 'Modern architectural theme door with horizontal dark wood grain and a clean off-center white vertical inlay strip.',
    keySpecs: [
      'Striking Dual-Contrast Design with White Vertical Accent',
      'Horizontal Espresso Wood Texture Print Overlay',
      'High Impact Resistance & Scratch Resistant Sheen',
      'Engineered Solid Core Frame for Sound Insulation',
      'Designed for Contemporary Luxury Homes and Apartments'
    ]
  },
  {
    id: 'theme-2',
    code: 'Theme 2',
    title: 'Theme 2',
    type: 'Theme Door',
    finish: 'Vibrant Pink Floral & Character Art Print',
    designStyle: 'kids-pink',
    description: 'Playful pink character theme door designed specially for kids bedrooms, nurseries, and playroom entrances.',
    keySpecs: [
      'Full-Door High-Resolution Digital Character Print',
      'Non-Toxic Anti-Bacterial Easy-to-Clean Surface Film',
      'Water Resistant UV-Cured Matte Polish Overlay',
      'Lightweight Durable Solid Polymer / Wood Core',
      'Bright Pink Soft Pastel Floral Background Pattern'
    ]
  },
  {
    id: 'theme-3',
    code: 'Theme 3',
    title: 'Theme 3',
    type: 'Theme Door',
    finish: 'Vibrant Sunburst Floral Abstract Digital Art',
    designStyle: 'floral-abstract',
    description: 'Artistic theme door featuring vivid multi-color floral vector artwork with warm sunburst background gradients.',
    keySpecs: [
      'Artistic Full-Face High Definition Digital Floral Print',
      'Vivid Multi-Color Swirls & Sunflower Center Motif',
      'Scratch & Wash Proof Glossy Protective Overlay',
      'Termite-Proof Internal Wooden Core Frame',
      'Instant Visual Focal Point for Modern Interiors'
    ]
  },
  {
    id: 'theme-4',
    code: 'Theme 4',
    title: 'Theme 4',
    type: 'Theme Door',
    finish: 'Spring Nature Garden with Birdhouse & Falling Leaves Art',
    designStyle: 'nature-garden',
    description: 'Refreshing nature-inspired theme door depicting a cozy birdhouse, cheerful songbirds, and colorful spring foliage.',
    keySpecs: [
      'Serene Nature Theme Digital Graphic Lamination',
      'Spring Garden Motif with Birds, Leaves & Birdhouse Art',
      'Wipe-Clean Surface Resistant to Fingerprints & Moisture',
      'Solid Engineered Core for Durability and Quiet Closure',
      'Perfect Accent Door for Bathrooms, Bedrooms & Balconies'
    ]
  },
  {
    id: 'theme-8',
    code: 'Theme 8',
    title: 'Theme 8',
    type: 'Theme Door',
    finish: 'Golden Butterfly Sunburst Artistic Digital Print',
    designStyle: 'golden-butterfly',
    description: 'Popular 4-star rated golden butterfly motif theme door with warm glowing background accents.',
    keySpecs: [
      'Top-Rated Customer Choice 4-Star Theme Door',
      'Vibrant Golden Butterfly & Floral Flourish Graphic Film',
      'High-Gloss Moisture & Scratch Resistant Surface Coat',
      'Heavy-Duty Solid Core Structure with Termite Resistance',
      'Comes Ready to Hang with Pre-Finished Edges'
    ]
  }
];




