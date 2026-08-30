import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, BookOpen, CalendarRange, X } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Products from './components/Products';
import WoodenLaminateDoorsCatalog from './components/WoodenLaminateDoorsCatalog';
import PostFormingDoorsCatalog from './components/PostFormingDoorsCatalog';
import WoodenFlushDoorsCatalog from './components/WoodenFlushDoorsCatalog';
import WoodenMoldedDoorsCatalog from './components/WoodenMoldedDoorsCatalog';
import PvcPanelDoorsCatalog from './components/PvcPanelDoorsCatalog';
import PvcFlushDoorsCatalog from './components/PvcFlushDoorsCatalog';
import ThemeDoorsCatalog from './components/ThemeDoorsCatalog';
import FramesCatalog from './components/FramesCatalog';
import PlywoodCatalog from './components/PlywoodCatalog';
import DealerNetwork from './components/DealerNetwork';
import OurClients from './components/OurClients';
import AboutUs from './components/AboutUs';
import ArchitectsHub from './components/ArchitectsHub';
import Values from './components/Values';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import ContactUs from './components/ContactUs';
import Careers from './components/Careers';
import BecomeADealer from './components/BecomeADealer';
import Footer from './components/Footer';
import ToastContainer from './components/ToastContainer';
import SEOHead from './components/SEOHead';

type PageView = 'home' | 'wooden-laminate-doors' | 'post-forming-doors' | 'wooden-flush-doors' | 'wooden-molded-doors' | 'pvc-panel-doors' | 'pvc-flush-doors' | 'theme-doors' | 'frames' | 'plywood' | 'architects-hub' | 'dealer-network' | 'become-a-dealer' | 'our-clients' | 'careers' | 'about-us' | 'contact';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Smooth scroll & page navigation handler
  const handleScrollToSection = (sectionId: string) => {
    // If navigating to wooden laminate doors page specifically
    if (
      sectionId === 'wooden-laminate-doors' ||
      sectionId === 'wooden-laminate-doors-catalog' ||
      sectionId === 'wooden-laminate-doors-page'
    ) {
      setCurrentView('wooden-laminate-doors');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If navigating to post forming doors page specifically
    if (
      sectionId === 'post-forming-doors' ||
      sectionId === 'post-forming-doors-catalog' ||
      sectionId === 'post-forming-doors-page' ||
      sectionId === 'post-form'
    ) {
      setCurrentView('post-forming-doors');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If navigating to wooden flush doors page specifically
    if (
      sectionId === 'wooden-flush-doors' ||
      sectionId === 'wooden-flush-doors-catalog' ||
      sectionId === 'wooden-flush-doors-page' ||
      sectionId === 'flush-doors'
    ) {
      setCurrentView('wooden-flush-doors');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If navigating to wooden molded doors page specifically
    if (
      sectionId === 'wooden-molded-doors' ||
      sectionId === 'wooden-molded-doors-catalog' ||
      sectionId === 'wooden-molded-doors-page' ||
      sectionId === 'molded-doors' ||
      sectionId === 'frp-doors'
    ) {
      setCurrentView('wooden-molded-doors');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If navigating to PVC panel doors page specifically
    if (
      sectionId === 'pvc-panel-doors' ||
      sectionId === 'pvc-panel-doors-catalog' ||
      sectionId === 'pvc-doors' ||
      sectionId === 'solid-pvc-doors' ||
      sectionId === 'spvc-doors'
    ) {
      setCurrentView('pvc-panel-doors');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If navigating to PVC flush doors page specifically
    if (
      sectionId === 'pvc-flush-doors' ||
      sectionId === 'pvc-flush-doors-catalog' ||
      sectionId === 'spvcfd-doors'
    ) {
      setCurrentView('pvc-flush-doors');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If navigating to Theme doors page specifically
    if (
      sectionId === 'theme-doors' ||
      sectionId === 'theme-doors-catalog' ||
      sectionId === 'theme-doors-page'
    ) {
      setCurrentView('theme-doors');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If navigating to Frames page specifically
    if (
      sectionId === 'frames' ||
      sectionId === 'frames-catalog' ||
      sectionId === 'frames-page' ||
      sectionId === 'frame'
    ) {
      setCurrentView('frames');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If navigating to Plywood page specifically
    if (
      sectionId === 'plywood' ||
      sectionId === 'plywood-catalog' ||
      sectionId === 'plywood-page'
    ) {
      setCurrentView('plywood');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If navigating to Architects Hub specifically
    if (
      sectionId === 'architects-hub' ||
      sectionId === 'architect-hub' ||
      sectionId === 'architects' ||
      sectionId === 'architect' ||
      sectionId === 'architects-hub-page'
    ) {
      setCurrentView('architects-hub');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If navigating to Dealer Network page specifically
    if (
      sectionId === 'dealer-network' ||
      sectionId === 'dealers' ||
      sectionId === 'dealer-network-page'
    ) {
      setCurrentView('dealer-network');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If navigating to Become a Dealer page specifically
    if (
      sectionId === 'become-a-dealer' ||
      sectionId === 'dealer-application' ||
      sectionId === 'dealership' ||
      sectionId === 'become-a-dealer-page'
    ) {
      setCurrentView('become-a-dealer');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If navigating to Our Clients page specifically
    if (
      sectionId === 'our-clients' ||
      sectionId === 'clients' ||
      sectionId === 'our-clients-page'
    ) {
      setCurrentView('our-clients');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If navigating to Careers page specifically
    if (
      sectionId === 'careers' ||
      sectionId === 'jobs' ||
      sectionId === 'careers-page' ||
      sectionId === 'career'
    ) {
      setCurrentView('careers');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If navigating to About Us page specifically
    if (
      sectionId === 'about-us' ||
      sectionId === 'about' ||
      sectionId === 'about-us-page' ||
      sectionId === 'company'
    ) {
      setCurrentView('about-us');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If navigating to Contact page specifically
    if (
      sectionId === 'contact' ||
      sectionId === 'contact-us'
    ) {
      setCurrentView('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }


    // Navigating back to home or a section on home page
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        if (sectionId === 'home' || sectionId === 'hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
    } else {
      if (sectionId === 'home' || sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Pre-fill / open modal for site visits or bookings
  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  // Floating widgets array matching reference image side rail
  const floatingWidgets = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      ),
      action: () => {
        window.open('https://wa.me/919811054101?text=Hello%20Eureka%20Doors%2C%20I%20am%20interested%20in%20premium%20custom%20doors.', '_blank');
      }
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-stone-800 font-sans antialiased selection:bg-[#b38e5d]/35 selection:text-stone-900 scroll-smooth">
      <SEOHead currentView={currentView} />
      
      {/* Sticky Header */}
      <Header onNavigate={handleScrollToSection} onOpenConsultation={handleOpenConsultation} />

      {/* Main Sections - Render based on active Page View */}
      <main>
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {/* Hero Banner */}
              <Hero onNavigate={handleScrollToSection} onOpenConsultation={handleOpenConsultation} />

              {/* Client Showcase (Mappe of Certified eurekaindia.com Clients) */}
              <Clients />

              {/* Core Value Features Ribbon */}
              <Values />

              {/* Categories Showcase */}
              <Products onOpenConsultation={handleOpenConsultation} onNavigate={handleScrollToSection} />

              {/* Verified Client Testimonials Carousel */}
              <Testimonials onOpenConsultation={handleOpenConsultation} />
            </motion.div>
          )}

          {currentView === 'wooden-laminate-doors' && (
            <motion.div
              key="wooden-laminate-doors"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {/* Dedicated Separate Page View for Wooden Laminate Doors Catalog */}
              <WoodenLaminateDoorsCatalog 
                onOpenConsultation={handleOpenConsultation} 
                onNavigateHome={() => handleScrollToSection('home')}
              />
            </motion.div>
          )}

          {currentView === 'post-forming-doors' && (
            <motion.div
              key="post-forming-doors"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {/* Dedicated Separate Page View for Post Forming Doors Catalog */}
              <PostFormingDoorsCatalog 
                onOpenConsultation={handleOpenConsultation} 
                onNavigateHome={() => handleScrollToSection('home')}
              />
            </motion.div>
          )}

          {currentView === 'wooden-flush-doors' && (
            <motion.div
              key="wooden-flush-doors"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {/* Dedicated Separate Page View for Wooden Flush Doors Catalog */}
              <WoodenFlushDoorsCatalog 
                onOpenConsultation={handleOpenConsultation} 
                onNavigateHome={() => handleScrollToSection('home')}
              />
            </motion.div>
          )}

          {currentView === 'wooden-molded-doors' && (
            <motion.div
              key="wooden-molded-doors"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {/* Dedicated Separate Page View for Wooden Molded Doors Catalog */}
              <WoodenMoldedDoorsCatalog 
                onOpenConsultation={handleOpenConsultation} 
                onNavigateHome={() => handleScrollToSection('home')}
              />
            </motion.div>
          )}

          {currentView === 'pvc-panel-doors' && (
            <motion.div
              key="pvc-panel-doors"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {/* Dedicated Separate Page View for PVC Panel Doors Catalog */}
              <PvcPanelDoorsCatalog 
                onOpenConsultation={handleOpenConsultation} 
                onNavigateHome={() => handleScrollToSection('home')}
              />
            </motion.div>
          )}

          {currentView === 'pvc-flush-doors' && (
            <motion.div
              key="pvc-flush-doors"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {/* Dedicated Separate Page View for PVC Flush Doors Catalog */}
              <PvcFlushDoorsCatalog 
                onOpenConsultation={handleOpenConsultation} 
                onNavigateHome={() => handleScrollToSection('home')}
              />
            </motion.div>
          )}

          {currentView === 'theme-doors' && (
            <motion.div
              key="theme-doors"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {/* Dedicated Separate Page View for Theme Doors Catalog */}
              <ThemeDoorsCatalog 
                onOpenConsultation={handleOpenConsultation} 
                onNavigateHome={() => handleScrollToSection('home')}
              />
            </motion.div>
          )}

          {currentView === 'frames' && (
            <motion.div
              key="frames"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {/* Dedicated Separate Page View for Frames Catalog */}
              <FramesCatalog 
                onOpenConsultation={handleOpenConsultation} 
                onNavigateHome={() => handleScrollToSection('home')}
              />
            </motion.div>
          )}

          {currentView === 'plywood' && (
            <motion.div
              key="plywood"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {/* Dedicated Separate Page View for Plywood Catalog */}
              <PlywoodCatalog 
                onOpenConsultation={handleOpenConsultation} 
                onNavigateHome={() => handleScrollToSection('home')}
              />
            </motion.div>
          )}

          {currentView === 'architects-hub' && (
            <motion.div
              key="architects-hub"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {/* Dedicated Separate Page View for Architect's Hub & Specification Portal */}
              <ArchitectsHub 
                onOpenConsultation={handleOpenConsultation} 
                onNavigateHome={() => handleScrollToSection('home')}
                onNavigate={handleScrollToSection}
              />
            </motion.div>
          )}

          {currentView === 'dealer-network' && (
            <motion.div
              key="dealer-network"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {/* Dedicated Separate Page View for Dealer Network */}
              <DealerNetwork 
                onOpenConsultation={handleOpenConsultation} 
                onNavigateHome={() => handleScrollToSection('home')}
                onNavigate={handleScrollToSection}
              />
            </motion.div>
          )}

          {currentView === 'become-a-dealer' && (
            <motion.div
              key="become-a-dealer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {/* Dedicated Separate Page View for Become an Authorised Dealer */}
              <BecomeADealer 
                onNavigateHome={() => handleScrollToSection('home')}
                onNavigate={handleScrollToSection}
              />
            </motion.div>
          )}

          {currentView === 'our-clients' && (
            <motion.div
              key="our-clients"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {/* Dedicated Separate Page View for Our Clients */}
              <OurClients 
                onOpenConsultation={handleOpenConsultation} 
                onNavigateHome={() => handleScrollToSection('home')}
              />
            </motion.div>
          )}

          {currentView === 'careers' && (
            <motion.div
              key="careers"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {/* Dedicated Separate Page View for Careers */}
              <Careers 
                onNavigateHome={() => handleScrollToSection('home')}
                onOpenConsultation={handleOpenConsultation}
              />
            </motion.div>
          )}

          {currentView === 'about-us' && (
            <motion.div
              key="about-us"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {/* Dedicated Separate Page View for About Us */}
              <AboutUs 
                onOpenConsultation={handleOpenConsultation} 
                onNavigateHome={() => handleScrollToSection('home')}
                onNavigate={handleScrollToSection}
              />
            </motion.div>
          )}

          {currentView === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {/* Dedicated Separate Page View for Contact Us */}
              <ContactUs 
                onNavigateHome={() => handleScrollToSection('home')}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      {/* Footer - Displayed across all webpages */}
      <Footer onNavigate={handleScrollToSection} onOpenConsultation={handleOpenConsultation} />


      {/* Floating Side Action Rail */}
      <div 
        className="fixed right-6 bottom-6 z-40 flex flex-col gap-4"
        id="floating-side-rail"
      >
        {floatingWidgets.map((widget) => (
          <button
            key={widget.id}
            onClick={widget.action}
            className="flex items-center justify-center p-3 rounded-full bg-[#25D366] hover:bg-[#20b858] shadow-2xl shadow-[#25D366]/40 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            title={widget.label}
            id={`floating-widget-${widget.id}`}
          >
            {widget.icon}
          </button>
        ))}
      </div>

      {/* Booking / Consultation Floating Pop-up Modal */}
      <AnimatePresence>
        {isConsultationOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" id="consultation-modal">
            {/* Overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsConsultationOpen(false)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-stone-100 overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsConsultationOpen(false)}
                className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-stone-600 hover:text-stone-900 shadow-md border border-stone-200 z-10 transition-colors"
                aria-label="Close consultation modal"
              >
                <X className="w-4 h-4" />
              </button>

              <ContactCTA isModalMode={true} onCloseModal={() => setIsConsultationOpen(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Toast Notification Container */}
      <ToastContainer />

    </div>
  );
}
