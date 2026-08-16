import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, ChevronRight, Facebook, Twitter, Instagram, Linkedin, Send, Check } from 'lucide-react';
import { showToast } from './ToastContainer';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export default function Footer({ onNavigate, onOpenConsultation }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'Footer Quick Contact Inquiry',
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        })
      });
    } catch (err) {
      console.error(err);
    }

    setFormSubmitted(true);
    showToast('Your quick contact message has been sent successfully!', 'Message Sent');
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  const productLinks = [
    { name: 'Wooden Laminate Doors', id: 'wooden-laminate-doors' },
    { name: 'Wooden Flush Doors', id: 'wooden-flush-doors' },
    { name: 'Wooden Molded Doors', id: 'wooden-molded-doors' },
    { name: 'Post Forming Doors', id: 'post-forming-doors' },
    { name: 'Theme Doors', id: 'theme-doors' },
    { name: 'Solid PVC Panel Doors', id: 'pvc-panel-doors' },
    { name: 'Solid PVC Flush Doors', id: 'pvc-flush-doors' },
    { name: 'Frames Catalog', id: 'frames' },
    { name: 'Plywood Catalog', id: 'plywood' },
    { name: 'FRP Doors', id: 'wooden-molded-doors' }
  ];

  return (
    <footer className="bg-[#0b1d33] text-white pt-14 pb-6 border-t border-slate-800" id="contact-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns Grid matching reference screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-700/60">
          
          {/* Column 1: ABOUT US */}
          <div className="space-y-5">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center justify-between">
              <span>ABOUT US</span>
            </h3>
            <p 
              className="text-xs text-slate-300 leading-relaxed font-normal cursor-pointer hover:text-white transition-colors"
              onClick={() => onNavigate('about-us')}
            >
              Since its founding in Pune and 250,000+ sq. ft. manufacturing complex in Khed-Shivapur, Pune, Eureka Doors & Plywood has become the leading manufacturer & supplier of Solid PVC Doors, Wooden Flush Doors & IS:710 Plywood.
            </p>
            {/* Social Media Row */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="#facebook"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded bg-[#3b5998] hover:opacity-90 flex items-center justify-center text-white transition-opacity shadow-xs"
                title="Facebook"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </a>
              <a
                href="#twitter"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded bg-[#1da1f2] hover:opacity-90 flex items-center justify-center text-white transition-opacity shadow-xs"
                title="Twitter"
              >
                <Twitter className="w-4 h-4 fill-current" />
              </a>
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded bg-[#e1306c] hover:opacity-90 flex items-center justify-center text-white transition-opacity shadow-xs"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded bg-[#0077b5] hover:opacity-90 flex items-center justify-center text-white transition-opacity shadow-xs"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Column 2: OUR PRODUCTS */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">
              OUR PRODUCTS
            </h3>
            <ul className="space-y-2 text-xs">
              {productLinks.map((item, idx) => (
                <li key={idx} className="border-b border-slate-700/50 pb-2 last:border-b-0">
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="group inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer w-full text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: CONTACT US */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">
              CONTACT US
            </h3>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>203, Vikram Goldmine Opp Venus Traders Behind Hotel Rupali, FC Road, Pune – 411 004. Maharashtra, India.</span>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p>+91 – 8888 78 4444</p>
                  <p>+91 – 9373040830</p>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p>sales@eurekaindia.com</p>
                  <p>info@eurekaindia.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: QUICK CONTACT */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">
              QUICK CONTACT
            </h3>

            {formSubmitted ? (
              <div className="p-4 bg-emerald-950/80 border border-emerald-500/40 rounded-lg text-emerald-300 text-xs space-y-1">
                <div className="flex items-center gap-2 font-bold text-white">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Message Sent Successfully!</span>
                </div>
                <p className="text-[11px] text-emerald-200/80">Our sales representative will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2.5">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Name*"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#071322] border border-slate-600/80 text-white placeholder-slate-400 text-xs px-3 py-2 rounded focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email*"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#071322] border border-slate-600/80 text-white placeholder-slate-400 text-xs px-3 py-2 rounded focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#071322] border border-slate-600/80 text-white placeholder-slate-400 text-xs px-3 py-2 rounded focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    rows={2}
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#071322] border border-slate-600/80 text-white placeholder-slate-400 text-xs px-3 py-2 rounded focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#e63946] hover:bg-[#d62828] text-white text-xs font-black tracking-wider uppercase rounded transition-colors shadow-sm cursor-pointer"
                >
                  SEND
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright & Accreditation Line matching reference screenshot */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-slate-400 font-medium">
          <div>
            © {currentYear} Eureka Decorative Ply & Doors. All rights reserved.
          </div>
          <div className="flex items-center gap-3 text-slate-300 font-bold uppercase tracking-wider text-[10px]">
            <span>ISO 9001:2008 CERTIFIED</span>
            <span>•</span>
            <span>BIS APPROVED VENDOR</span>
          </div>
        </div>

      </div>
    </footer>
  );
}



