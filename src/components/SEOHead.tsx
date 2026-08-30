import { useEffect } from 'react';

interface SEOHeadProps {
  currentView: string;
}

const META_CONFIGS: Record<string, { title: string; description: string; ogTitle: string; keywords: string }> = {
  'home': {
    title: 'Eureka Decorative Ply & Doors | Premium Doors & Marine Plywood Manufacturer',
    description: "India's trusted manufacturer of wooden laminate doors, flush doors, molded doors, PVC doors, frames, and marine plywood. Connect with 115+ authorised dealers.",
    ogTitle: 'Eureka Decorative Ply & Doors - Premium Doors & Plywood Manufacturer',
    keywords: 'Eureka Doors, Decorative Ply, Wooden Doors India, Marine Plywood, Authorised Dealers'
  },
  'wooden-laminate-doors': {
    title: 'Wooden Laminate Doors Catalog | Eureka Decorative Ply & Doors',
    description: 'Explore high-durability scratch-proof wooden laminate doors for residential and commercial interiors. Available in rich textured wood grain finishes.',
    ogTitle: 'Wooden Laminate Doors Collection | Eureka Doors',
    keywords: 'Wooden Laminate Doors, Laminate Doors, Textured Wooden Doors, Interior Doors'
  },
  'post-forming-doors': {
    title: 'Post Forming Doors Collection | Eureka Decorative Ply & Doors',
    description: 'Seamless curved edge post forming doors with superior moisture resistance and elegant modern aesthetics.',
    ogTitle: 'Post Forming Curved Edge Doors | Eureka Doors',
    keywords: 'Post Forming Doors, Seamless Curved Doors, Flush Edge Doors'
  },
  'wooden-flush-doors': {
    title: 'Wooden Flush Doors | High-Density Pine Core | Eureka Doors',
    description: 'BIS-certified heavy duty seasoned pine wood flush doors built for maximum warp resistance and longevity.',
    ogTitle: 'Heavy-Duty Wooden Flush Doors | Eureka Doors',
    keywords: 'Wooden Flush Doors, Solid Core Flush Doors, Seasoned Pine Doors, BIS Flush Doors'
  },
  'wooden-molded-doors': {
    title: 'Wooden Molded Panel Doors | Eureka Decorative Ply & Doors',
    description: 'Classic 2-panel, 4-panel, and 6-panel molded door designs with craft wood grain textures and durable core construction.',
    ogTitle: 'Wooden Molded Panel Doors | Eureka Doors',
    keywords: 'Molded Panel Doors, 4 Panel Doors, 2 Panel Doors, Craft Wood Doors'
  },
  'pvc-panel-doors': {
    title: '100% Waterproof PVC Panel Doors | Eureka Doors',
    description: 'Waterproof, termite-proof PVC panel doors ideal for bathrooms, balconies, and high-moisture environments.',
    ogTitle: '100% Waterproof PVC Panel Doors | Eureka Doors',
    keywords: 'PVC Panel Doors, Waterproof Bathroom Doors, Termite Proof Doors'
  },
  'pvc-flush-doors': {
    title: 'PVC Flush Doors Collection | Eureka Decorative Ply & Doors',
    description: 'Solid core PVC flush doors engineered for zero maintenance, all-weather durability, and wet area performance.',
    ogTitle: 'Solid Core PVC Flush Doors | Eureka Doors',
    keywords: 'PVC Flush Doors, All Weather Doors, Waterproof Flush Doors'
  },
  'theme-doors': {
    title: 'Designer Theme Doors | Artistic Interior Doors | Eureka',
    description: 'Custom designer theme doors featuring artistic grooves, geometric motifs, and luxury modern inlay finishes.',
    ogTitle: 'Designer Theme Doors | Eureka Doors',
    keywords: 'Designer Theme Doors, Luxury Interior Doors, Artistic Grooved Doors'
  },
  'frames': {
    title: 'Door Frames (Chowkhat) | Wooden & PVC Frames | Eureka',
    description: 'Seasoned hardwood chowkhats and waterproof PVC door frames engineered for exact structural fit and longevity.',
    ogTitle: 'Door Frames & Chowkhats | Eureka Doors',
    keywords: 'Door Frames, Hardwood Chowkhat, PVC Door Frames, Wooden Frames'
  },
  'plywood': {
    title: 'Marine & Commercial Plywood | IS 710 & IS 303 | Eureka',
    description: 'Boiling Waterproof (BWP) Marine Plywood IS 710 and Moisture Resistant (MR) Commercial Plywood for premium furniture.',
    ogTitle: 'Marine & Commercial Plywood Range | Eureka',
    keywords: 'Marine Plywood, BWP Grade Plywood, IS 710 Plywood, Commercial Plywood'
  },
  'architects-hub': {
    title: "Architect's Hub | Specifications, CAD Drawings & Showcase | Eureka Doors",
    description: 'Explore high-resolution architectural installations, technical sectional drawings, and material specifications for architects, interior designers, and project consultants.',
    ogTitle: "Architect's Hub & Specification Portal | Eureka Doors",
    keywords: "Architects Hub, Interior Design Doors, Architectural Doors, Eureka Specifications, CAD BIM Models"
  },
  'dealer-network': {
    title: 'Authorised Dealer Network | Find Eureka Distributors Near You',
    description: 'Locate 115+ authorised Eureka distributors and dealers across India with 100% genuine guaranteed products.',
    ogTitle: 'Eureka Authorised Dealer Network',
    keywords: 'Eureka Dealers, Find Eureka Store, Door Distributors Near Me, Eureka Showrooms'
  },
  'become-a-dealer': {
    title: 'Become an Authorised Eureka Dealer | Apply For Dealership',
    description: 'Expand your hardware & building materials business. Apply for direct factory dealership, regional supply rights, and display support.',
    ogTitle: 'Apply for Authorised Eureka Dealership',
    keywords: 'Become a Eureka Dealer, Dealership Application, Hardware Business Opportunity, Door Distributorship'
  },
  'our-clients': {
    title: 'Our Corporate Clients & Institutional Projects | Eureka',
    description: 'Trusted by India top real estate developers, hotel chains, hospital networks, and government infrastructure projects.',
    ogTitle: 'Corporate Clients & Project Partners | Eureka Doors',
    keywords: 'Eureka Corporate Clients, Hotel Door Suppliers, Builder Door Orders, Commercial Projects'
  },
  'careers': {
    title: 'Careers at Eureka | Join Our Team',
    description: 'Explore exciting career opportunities in manufacturing, sales engineering, supply chain, and retail business development.',
    ogTitle: 'Careers & Job Openings at Eureka',
    keywords: 'Eureka Careers, Job Openings Eureka, Join Eureka Doors Team'
  },
  'about-us': {
    title: 'About Eureka Decorative Ply & Doors | Manufacturing Heritage',
    description: 'Discover Eureka decades of excellence in timber craftsmanship, state-of-the-art manufacturing plants, and quality standards.',
    ogTitle: 'About Eureka Decorative Ply & Doors',
    keywords: 'About Eureka, Door Manufacturers Heritage, Timber Craftsmanship'
  },
  'contact': {
    title: 'Contact Us | Eureka Decorative Ply & Doors',
    description: 'Get in touch with Eureka sales and support teams. Email sales@eurekaindia.com or call our corporate helpline.',
    ogTitle: 'Contact Eureka Decorative Ply & Doors',
    keywords: 'Contact Eureka, Eureka Helpline, Email Sales Eureka, Support'
  }
};

export default function SEOHead({ currentView }: SEOHeadProps) {
  useEffect(() => {
    const config = META_CONFIGS[currentView] || META_CONFIGS['home'];

    // Update Title
    document.title = config.title;

    // Helper to update or create meta element
    const updateMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrVal);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update Primary Meta
    updateMetaTag('meta[name="description"]', 'name', 'description', config.description);
    updateMetaTag('meta[name="keywords"]', 'name', 'keywords', config.keywords);
    updateMetaTag('meta[name="title"]', 'name', 'title', config.title);

    // Update OpenGraph
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', config.ogTitle);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', config.description);
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', window.location.href);

    // Update Twitter Cards
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', config.ogTitle);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', config.description);

  }, [currentView]);

  return null;
}
