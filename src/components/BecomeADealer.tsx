import React, { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { showToast } from './ToastContainer';
import { 
  Building2, 
  Store, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowLeft, 
  Send, 
  ShieldCheck, 
  Award, 
  Truck, 
  Briefcase, 
  Layers,
  Sparkles
} from 'lucide-react';

interface BecomeADealerProps {
  onNavigateHome: () => void;
  onNavigate?: (id: string) => void;
}

export default function BecomeADealer({ onNavigateHome, onNavigate }: BecomeADealerProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    storeName: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    pincode: '',
    address: '',
    businessType: 'Existing Retailer / Showroom',
    scaleOfBusiness: '100 - 500 Doors / Month',
    storeArea: '500 - 1500 sq.ft.',
    message: ''
  });

  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const productOptions = [
    'Wooden Laminate Doors',
    'Wooden Flush Doors',
    'Wooden Molded Doors',
    'Post Forming Doors',
    'PVC Panel Doors',
    'PVC Flush Doors',
    'Theme / Designer Doors',
    'Wooden & PVC Frames',
    'Marine & Commercial Plywood',
    'Entire Eureka Product Range'
  ];

  const handleProductToggle = (product: string) => {
    if (selectedProducts.includes(product)) {
      setSelectedProducts(selectedProducts.filter(p => p !== product));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.storeName) {
      setErrorMessage('Please fill in all mandatory fields (Full Name, Store Name, Phone).');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'Authorised Dealership Application',
          fullName: formData.fullName,
          company: formData.storeName,
          phone: formData.phone,
          email: formData.email,
          city: `${formData.city}, ${formData.state} (${formData.pincode})`,
          location: formData.address,
          projectType: `Business Type: ${formData.businessType} | Store Area: ${formData.storeArea}`,
          keySkills: `Dealing Products: ${selectedProducts.join(', ')}`,
          expectedCtc: `Operating Scale: ${formData.scaleOfBusiness}`,
          message: formData.message
        })
      });

      if (!res.ok) {
        throw new Error('Failed to submit application. Please try again.');
      }

      const randomId = 'EUR-DLR-' + Math.floor(100000 + Math.random() * 900000);
      setApplicationId(randomId);
      setIsSubmitted(true);
      showToast('Your dealership application has been submitted successfully!', 'Application Received');
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'Submission failed. Please check your network connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="become-a-dealer-page" className="pt-20 pb-16 bg-[#faf9f6] min-h-screen">
      
      {/* Breadcrumb Navigation Header */}
      <div className="bg-white border-b border-stone-200/80 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
            <button 
              onClick={onNavigateHome}
              className="hover:text-[#b38e5d] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span>/</span>
            {onNavigate && (
              <>
                <button 
                  onClick={() => onNavigate('dealer-network')}
                  className="hover:text-[#b38e5d] transition-colors cursor-pointer"
                >
                  Dealer Network
                </button>
                <span>/</span>
              </>
            )}
            <span className="text-[#b38e5d] font-bold">Become an Authorised Partner</span>
          </div>

          <button
            onClick={onNavigateHome}
            className="text-xs font-bold text-stone-600 hover:text-stone-900 flex items-center gap-1 cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="bg-gradient-to-r from-[#0b1d33] via-[#1a2e68] to-[#0b1d33] text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#b38e5d_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-4">
          <span className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-bold tracking-wider uppercase border border-amber-500/30">
            Partner With Eureka India
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Become an Authorised Eureka Dealer
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Expand your building materials retail business. Join 115+ authorized distributors with direct factory pricing, marketing display setups, and exclusive regional supply rights.
          </p>
        </div>
      </section>

      {/* Main Form Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        
        {/* Top Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-amber-50 text-[#b38e5d] rounded-xl shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900">Direct Factory Pricing</h4>
              <p className="text-xs text-stone-500 mt-0.5">Maximum margin profitability with zero intermediary overheads.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-[#1a2e68] rounded-xl shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900">Fast Regional Supply</h4>
              <p className="text-xs text-stone-500 mt-0.5">Rapid dispatch across North, Central & West India logistics hubs.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900">100% Genuine Guarantee</h4>
              <p className="text-xs text-stone-500 mt-0.5">BIS Certified flush doors, molded doors & marine plywood range.</p>
            </div>
          </div>
        </div>

        {/* Application Form Box */}
        <div className="bg-white rounded-3xl shadow-xl border border-stone-200/80 p-6 sm:p-10 overflow-hidden">
          
          {isSubmitted ? (
            <div className="text-center py-12 space-y-6 max-w-lg mx-auto">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Application Received
                </span>
                <h3 className="text-2xl font-black text-stone-900">Dealership Application Submitted</h3>
                <p className="text-xs text-stone-500">
                  Application Reference Number: <span className="font-mono font-bold text-stone-900">{applicationId}</span>
                </p>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">
                Thank you, <strong className="text-stone-900">{formData.fullName}</strong>. Your dealership inquiry for <strong className="text-stone-900">{formData.storeName}</strong> has been forwarded to our Business Development team at <span className="text-[#1a2e68] font-bold">sales@eurekaindia.com</span>.
              </p>

              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-xs text-stone-600 text-left space-y-1">
                <div className="font-bold text-stone-900 mb-1">What Happens Next?</div>
                <div>• Our regional sales representative will review your store scale and location.</div>
                <div>• You will receive a call / email within 24–48 business hours with product catalogs and margin slabs.</div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={onNavigateHome}
                  className="px-6 py-3 bg-[#0b1d33] hover:bg-[#1a2e68] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Return to Home
                </button>
                {onNavigate && (
                  <button
                    onClick={() => onNavigate('dealer-network')}
                    className="px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                  >
                    Explore Existing Dealers
                  </button>
                )}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="border-b border-stone-200 pb-4">
                <h3 className="text-xl font-black text-stone-900 flex items-center gap-2">
                  <Store className="w-5 h-5 text-[#b38e5d]" />
                  Authorised Dealer Partner Application Form
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Fill in your store and business details below. Our team will get in touch with regional distributorship terms.
                </p>
              </div>

              {errorMessage && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-medium">
                  {errorMessage}
                </div>
              )}

              {/* Section 1: Applicant & Store Information */}
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase text-[#1a2e68] tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-4 h-4" />
                  1. Contact & Firm Information
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Applicant Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-900 focus:ring-2 focus:ring-[#b38e5d] focus:bg-white outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Name of Store / Firm / Hardware Agency <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sharma Hardware & Door Center"
                      value={formData.storeName}
                      onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-900 focus:ring-2 focus:ring-[#b38e5d] focus:bg-white outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Mobile / WhatsApp Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-900 focus:ring-2 focus:ring-[#b38e5d] focus:bg-white outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. sharmahardware@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-900 focus:ring-2 focus:ring-[#b38e5d] focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Store Location */}
              <div className="space-y-4 pt-2 border-t border-stone-100">
                <h4 className="text-xs font-black uppercase text-[#1a2e68] tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  2. Store / Showroom Location
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      City / District <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jaipur"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-900 focus:ring-2 focus:ring-[#b38e5d] focus:bg-white outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajasthan"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-900 focus:ring-2 focus:ring-[#b38e5d] focus:bg-white outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Pincode
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 302001"
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-900 focus:ring-2 focus:ring-[#b38e5d] focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Store / Office Street Address
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Shop No 14, Main Hardware Market, Industrial Area Phase 1"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-900 focus:ring-2 focus:ring-[#b38e5d] focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>

              {/* Section 3: Products Wish to Deal With */}
              <div className="space-y-4 pt-2 border-t border-stone-100">
                <h4 className="text-xs font-black uppercase text-[#1a2e68] tracking-wider flex items-center gap-1.5">
                  <Layers className="w-4 h-4" />
                  3. What Products Do You Wish to Deal With?
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {productOptions.map((prod) => {
                    const isChecked = selectedProducts.includes(prod);
                    return (
                      <button
                        type="button"
                        key={prod}
                        onClick={() => handleProductToggle(prod)}
                        className={`p-3 rounded-xl text-left text-xs font-bold transition-all flex items-center justify-between border cursor-pointer ${
                          isChecked
                            ? 'bg-[#0b1d33] text-white border-emerald-500 shadow-sm'
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        <span>{prod}</span>
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                          isChecked ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-stone-300 bg-white'
                        }`}>
                          {isChecked && <CheckCircle2 className="w-4 h-4 text-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Section 4: Business Scale & Capacity */}
              <div className="space-y-4 pt-2 border-t border-stone-100">
                <h4 className="text-xs font-black uppercase text-[#1a2e68] tracking-wider flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" />
                  4. Business Scale & Store Capacity
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Current Business Type
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-900 focus:ring-2 focus:ring-[#b38e5d] outline-none"
                    >
                      <option value="Existing Retailer / Showroom">Existing Retail Showroom</option>
                      <option value="Building Materials Wholesaler">Building Materials Wholesaler</option>
                      <option value="Door & Plywood Distributor">Door & Plywood Distributor</option>
                      <option value="Builder / Contracting Firm">Builder / Contracting Firm</option>
                      <option value="New Store Setup">New Store Setup</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Expected Monthly Volume / Scale
                    </label>
                    <select
                      value={formData.scaleOfBusiness}
                      onChange={(e) => setFormData({ ...formData, scaleOfBusiness: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-900 focus:ring-2 focus:ring-[#b38e5d] outline-none"
                    >
                      <option value="50 - 100 Doors / Month">50 - 100 Doors / Month</option>
                      <option value="100 - 500 Doors / Month">100 - 500 Doors / Month</option>
                      <option value="500 - 1000 Doors / Month">500 - 1000 Doors / Month</option>
                      <option value="1000+ Doors / Month (Bulk)">1000+ Doors / Month (Bulk)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Showroom / Store Area
                    </label>
                    <select
                      value={formData.storeArea}
                      onChange={(e) => setFormData({ ...formData, storeArea: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-900 focus:ring-2 focus:ring-[#b38e5d] outline-none"
                    >
                      <option value="Under 500 sq.ft.">Under 500 sq.ft.</option>
                      <option value="500 - 1500 sq.ft.">500 - 1500 sq.ft.</option>
                      <option value="1500 - 3000 sq.ft.">1500 - 3000 sq.ft.</option>
                      <option value="3000+ sq.ft. Premium Showroom">3000+ sq.ft. Premium Showroom</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Additional Details or Specific Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention current brands handled, preferred delivery timelines, or regional territory coverage interest..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-900 focus:ring-2 focus:ring-[#b38e5d] focus:bg-white outline-none transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-end">

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 bg-[#b38e5d] hover:bg-[#9c794a] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Dealership Application</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}
