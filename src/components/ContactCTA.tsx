import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, MessageSquare, Phone, Mail, ArrowRight, MapPin, ClipboardList } from 'lucide-react';
import { showToast } from './ToastContainer';

interface ContactCTAProps {
  isModalMode?: boolean;
  onCloseModal?: () => void;
}

export default function ContactCTA({ isModalMode = false, onCloseModal }: ContactCTAProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    doorType: 'wooden',
    quantity: '2-10',
    requirements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'Consultation & Custom Order Request',
          fullName: formData.name,
          phone: formData.phone,
          email: formData.email,
          projectType: `Door Type: ${formData.doorType} | Estimated Qty: ${formData.quantity}`,
          message: formData.requirements
        })
      });

      if (!res.ok) {
        throw new Error('Failed to send inquiry.');
      }

      setIsSubmitted(true);
      showToast('Your consultation request has been submitted successfully!', 'Consultation Request Sent');
      setFormData({
        name: '',
        phone: '',
        email: '',
        doorType: 'wooden',
        quantity: '2-10',
        requirements: ''
      });
    } catch (err) {
      console.error(err);
      alert('Unable to send message at this time. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className={`${isModalMode ? 'p-0' : 'py-20 bg-[#faf9f6] border-b border-stone-200/50'}`}
    >
      <div className={`${isModalMode ? 'max-w-full' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        
        <div className={`grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-white ${isModalMode ? 'rounded-0' : 'rounded-3xl border border-stone-200/60 shadow-xl'}`}>
          
          {/* Left Side: Form Panel */}
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 md:space-y-8" id="form-panel">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <ClipboardList className="w-5 h-5 text-[#b38e5d]" />
                <span className="text-[10px] font-bold text-[#b38e5d] uppercase tracking-wider">Book a Consultation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-stone-900 leading-tight">
                Need <span className="italic font-serif font-normal text-stone-700">Custom</span> Doors?
              </h2>
              <p className="text-xs text-stone-500">
                Share your specifications, and our engineering team will provide a customized CAD design layout and quotation within 24 hours.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  id="consultation-form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-800 rounded-xl text-xs focus:outline-none focus:border-[#b38e5d] transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 99999 99999"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-800 rounded-xl text-xs focus:outline-none focus:border-[#b38e5d] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-800 rounded-xl text-xs focus:outline-none focus:border-[#b38e5d] transition-all"
                      />
                    </div>

                    {/* Door Category Interest */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Door Type Interest</label>
                      <select
                        value={formData.doorType}
                        onChange={(e) => setFormData({ ...formData, doorType: e.target.value })}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-800 rounded-xl text-xs focus:outline-none focus:border-[#b38e5d] transition-all"
                      >
                        <option value="wooden">Premium Wooden Doors</option>
                        <option value="pvc">Waterproof PVC Doors</option>
                        <option value="frp">FRP Heavy Duty Doors</option>
                        <option value="theme">Geometric Theme Doors</option>
                        <option value="frames">Sturdy Door Frames</option>
                        <option value="plywood">Calibrated Plywood</option>
                      </select>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Estimated Quantity Required</label>
                    <div className="grid grid-cols-4 gap-2">
                      {['1 (Single)', '2-10', '10-50', '50+ (Bulk)'].map((qty) => (
                        <button
                          key={qty}
                          type="button"
                          onClick={() => setFormData({ ...formData, quantity: qty })}
                          className={`py-2 text-[11px] font-semibold rounded-lg border transition-all text-center ${
                            formData.quantity === qty
                              ? 'bg-stone-900 text-white border-stone-900'
                              : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                          }`}
                        >
                          {qty}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Requirements Textbox */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">Requirements / Dimensions</label>
                    <textarea
                      rows={3}
                      placeholder="E.g. Standard 7x3 ft doors, teak wood laminate, heavy-duty handles required..."
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 text-stone-800 rounded-xl text-xs focus:outline-none focus:border-[#b38e5d] resize-none transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-[#b38e5d] transition-all duration-300 shadow-md shadow-stone-950/10 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        BOOK CONSULTATION
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </motion.form>
              ) : (
                <motion.div
                  key="form-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                  id="form-success-container"
                >
                  <div className="inline-flex p-3 bg-emerald-100 text-emerald-600 rounded-full">
                    <CheckCircle2 className="w-8 h-8 animate-bounce" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-800">Booking Confirmed!</h3>
                    <p className="text-xs text-stone-500 max-w-sm mx-auto mt-1 leading-relaxed">
                      Thank you. Your consultation booking has been received. Our expert design engineer will contact you shortly with custom CAD catalogs.
                    </p>
                  </div>
                  <div className="flex gap-2 justify-center pt-2">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-[10px] font-bold rounded-lg transition-colors"
                    >
                      Submit Another
                    </button>
                    {isModalMode && onCloseModal && (
                      <button
                        onClick={onCloseModal}
                        className="px-4 py-2 bg-[#b38e5d] hover:bg-[#9c7849] text-white text-[10px] font-bold rounded-lg transition-colors"
                      >
                        Close Window
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Right Side: Media & Address Panel */}
          <div className="lg:col-span-5 relative bg-stone-950 flex flex-col justify-between p-8 sm:p-12 text-white h-full min-h-[400px]">
            {/* Background Architecture */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                alt="Luxury home architectural exterior"
                className="w-full h-full object-cover opacity-35"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/20" />
            </div>

            {/* Logo and Tagline */}
            <div className="relative z-10 space-y-2">
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold tracking-wider text-white">EUREKA</span>
                <span className="text-[9px] font-bold text-[#b38e5d] px-1 border border-[#b38e5d] rounded">R</span>
              </div>
              <p className="text-[9px] font-bold text-[#b38e5d] uppercase tracking-widest">
                Excellence in Craftsmanship
              </p>
            </div>

            {/* Physical & Digital Contact Information */}
            <div className="relative z-10 space-y-6 pt-12">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 text-white rounded-lg">
                  <MapPin className="w-5 h-5 text-[#b38e5d]" />
                </div>
                <div>
                  <span className="block text-[10px] text-stone-400 font-bold uppercase tracking-wider">Manufacturing Unit & Office</span>
                  <p className="text-xs text-stone-200 font-medium leading-relaxed mt-1">
                    Eureka Decorative Ply & Doors,<br />
                    203, Vikram Goldmine Opp Venus Traders Behind Hotel Rupali, FC Road,<br />
                    Pune – 411 004. Maharashtra, India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 text-white rounded-lg">
                  <Phone className="w-5 h-5 text-[#b38e5d]" />
                </div>
                <div>
                  <span className="block text-[10px] text-stone-400 font-bold uppercase tracking-wider">Direct Business Helpline</span>
                  <p className="text-xs text-stone-200 font-medium mt-1">
                    +91 – 8888 78 4444 / +91 – 9373040830
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 text-white rounded-lg">
                  <Mail className="w-5 h-5 text-[#b38e5d]" />
                </div>
                <div>
                  <span className="block text-[10px] text-stone-400 font-bold uppercase tracking-wider">Email Inquiry</span>
                  <p className="text-xs text-stone-200 font-medium mt-1">
                    sales@eurekaindia.com / info@eurekaindia.com
                  </p>
                </div>
              </div>
            </div>

            {/* Small Footer Notice */}
            <div className="relative z-10 pt-8 border-t border-white/10 text-[10px] text-stone-400 flex justify-between items-center">
              <span>GSTIN: 07AAAHE4101M1ZA</span>
              <span>ISO 9001:2008 Certified</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
