import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ExternalLink, Navigation } from 'lucide-react';

interface ContactUsProps {
  onNavigateHome: () => void;
}

export default function ContactUs({ onNavigateHome }: ContactUsProps) {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm font-semibold text-stone-500 mb-8 mt-4">
          <button onClick={onNavigateHome} className="hover:text-stone-900 transition-colors text-stone-500">
            Home
          </button>
          <svg className="w-4 h-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-[#b38e5d] font-bold">Contact Us</span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h1 className="text-[40px] md:text-[44px] font-sans font-bold text-[#2b3543] tracking-tight leading-tight">
                Get In Touch
              </h1>
              <p className="text-[#4a5568] leading-relaxed max-w-[480px] text-[15px] pr-4">
                Our friendly customer support team provide the best service in the industry. We are passionate about our products and solutions as well as our customers. We are always happy to help find the solutions for your needs.Get in touch with us today.
              </p>
            </div>

            <div className="space-y-8">
              
              <div className="space-y-3">
                <h3 className="text-[17px] font-bold text-[#2b3543] font-sans flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#b38e5d]" />
                  Our Office
                </h3>
                <p className="text-[15px] text-[#4a5568] leading-relaxed max-w-[400px]">
                  203, Vikram Goldmine Opp Venus Traders Behind Hotel Rupali, FC Road, Pune - 411 004. Maharashtra, India.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-[17px] font-bold text-[#2b3543] font-sans flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#b38e5d]" />
                  Call
                </h3>
                <div className="flex flex-col gap-1 text-[15px] text-[#4a5568] font-medium">
                  <a href="tel:+918888784444" className="hover:text-[#b38e5d] transition-colors w-fit">+91 - 8888 78 4444</a>
                  <a href="tel:+919373040830" className="hover:text-[#b38e5d] transition-colors w-fit">+91 - 9373040830</a>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-[17px] font-bold text-[#2b3543] font-sans flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#b38e5d]" />
                  Email
                </h3>
                <div className="flex flex-col gap-1 text-[15px] text-[#4a5568] font-medium">
                  <a href="mailto:sales@eurekaindia.com" className="hover:text-[#b38e5d] transition-colors w-fit">sales@eurekaindia.com</a>
                  <a href="mailto:info@eurekaindia.com" className="hover:text-[#b38e5d] transition-colors w-fit">info@eurekaindia.com</a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full h-[360px] md:h-[420px] bg-stone-100 relative mt-4 lg:mt-0"
          >
            {/* Embedded Google Maps pointing to the specific location */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1754020922883!2d73.83981881489283!3d18.52097728740927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c077b94420e1%3A0xc3fbfda9dc748bd1!2sEureka%20Doors!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Eureka Doors Office Location"
              className="absolute inset-0"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
