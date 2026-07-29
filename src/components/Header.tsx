import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export default function Header({ onNavigate, onOpenConsultation }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [activeSubCategoryCat, setActiveSubCategoryCat] = useState<string | null>('wooden-doors');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Products', hasDropdown: true, id: 'products' },
    { name: 'Architects Hub', id: 'architects-hub' },
    { name: 'Dealer Network', id: 'dealer-network' },
    { name: 'Our Clients', id: 'our-clients' },
    { name: 'About Us', id: 'about-us' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleItemClick = (id: string) => {
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
    onNavigate(id);
  };

  const activeCategoryObj = PRODUCT_CATEGORIES.find(c => c.id === activeSubCategoryCat);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-stone-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo matching Eureka Doors & Plywood */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleItemClick('hero')}
            id="logo-container"
          >
            <img src="/Eureka_logo.png" alt="Eureka India Logo" className="h-10 object-contain" />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => {
                  if (item.hasDropdown) setIsProductsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (item.hasDropdown) setIsProductsDropdownOpen(false);
                }}
              >
                <button
                  onClick={() => handleItemClick(item.id)}
                  className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 py-2 ${
                    isProductsDropdownOpen && item.hasDropdown
                      ? 'text-[#d93829]'
                      : 'text-stone-700 hover:text-[#d93829]'
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {/* Dropdown & Flyout Menu for Products matching reference images */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {isProductsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-1 flex shadow-2xl rounded-md overflow-visible border border-stone-200/80 bg-white"
                        id="products-dropdown"
                      >
                        {/* Main Category Column */}
                        <div className="w-52 bg-white py-2 divide-y divide-stone-100">
                          {PRODUCT_CATEGORIES.map((cat) => {
                            const isSelected = activeSubCategoryCat === cat.id;
                            const hasSub = !!cat.subCategories?.length;
                            return (
                              <div
                                key={cat.id}
                                onMouseEnter={() => setActiveSubCategoryCat(cat.id)}
                                onClick={() => handleItemClick(cat.id)}
                                className={`flex items-center justify-between px-4 py-2.5 text-xs font-semibold cursor-pointer transition-colors ${
                                  isSelected
                                    ? 'bg-stone-100 text-[#d93829]'
                                    : 'text-stone-700 hover:bg-stone-50 hover:text-[#d93829]'
                                }`}
                              >
                                <span>{cat.name}</span>
                                {hasSub && <ChevronRight className="w-3.5 h-3.5 text-stone-400" />}
                              </div>
                            );
                          })}
                        </div>

                        {/* Side Flyout Sub-Category Column (Appears if active category has subcategories) */}
                        {activeCategoryObj?.subCategories && activeCategoryObj.subCategories.length > 0 && (
                          <div className="w-56 bg-white py-2 border-l border-stone-200/80 shadow-lg relative">
                            {/* Little side arrow pointing back to parent */}
                            <div className="absolute top-4 -left-1.5 w-3 h-3 bg-white border-l border-b border-stone-200/80 rotate-45" />

                            <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest px-4 py-1.5 border-b border-stone-100">
                              {activeCategoryObj.name}
                            </div>
                            
                            {activeCategoryObj.subCategories.map((sub) => (
                              <div
                                key={sub.id}
                                onClick={() => handleItemClick(sub.id)}
                                className="px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-[#d93829] hover:bg-stone-50 cursor-pointer transition-colors"
                              >
                                {sub.name}
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Utilities */}
          <div className="hidden lg:flex items-center gap-5" id="right-utilities">
            <button
              onClick={onOpenConsultation}
              className="px-4 py-2 bg-[#b38e5d] text-white rounded-md text-xs font-bold tracking-wider uppercase hover:bg-[#967448] transition-colors duration-200 shadow-sm"
              id="btn-get-in-touch"
            >
              GET IN TOUCH
            </button>
          </div>

          {/* Mobile Menu Control */}
          <div className="flex items-center lg:hidden gap-3" id="mobile-menu-controls">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 bg-[#b38e5d] text-white rounded text-[10px] font-bold uppercase tracking-wider"
            >
              GET IN TOUCH
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-stone-700 border border-stone-300 rounded"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-stone-200 overflow-hidden"
            id="mobile-nav-container"
          >
            <div className="px-4 py-4 space-y-3 max-h-[80vh] overflow-y-auto">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest px-2 block">
                  Product Categories
                </span>
                {PRODUCT_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="py-1 px-2">
                    <button
                      onClick={() => handleItemClick(cat.id)}
                      className="text-xs font-bold text-stone-800 hover:text-[#d93829] text-left"
                    >
                      {cat.name}
                    </button>
                    {cat.subCategories && (
                      <div className="pl-3 mt-1 space-y-1 border-l-2 border-stone-200">
                        {cat.subCategories.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => handleItemClick(sub.id)}
                            className="text-[11px] font-medium text-stone-600 block hover:text-[#d93829] text-left"
                          >
                            • {sub.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
                <button
                  onClick={() => handleItemClick('architects-hub')}
                  className="text-xs font-bold text-stone-800 text-left px-2"
                >
                  Architects Hub
                </button>
                <button
                  onClick={() => handleItemClick('dealer-network')}
                  className="text-xs font-bold text-stone-800 text-left px-2"
                >
                  Dealer Network
                </button>
                <button
                  onClick={() => handleItemClick('our-clients')}
                  className="text-xs font-bold text-stone-800 text-left px-2"
                >
                  Our Clients
                </button>
                <button
                  onClick={() => handleItemClick('about-us')}
                  className="text-xs font-bold text-stone-800 text-left px-2"
                >
                  About Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
