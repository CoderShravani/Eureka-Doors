import { motion } from 'motion/react';

const LOGOS = [
  '/org1.jpg',
  '/org2.png',
  '/org3.png',
  '/org4.jpeg',
  '/org5.png',
  '/org6.jpeg',
  '/org7.jpg',
  '/org8.jpg',
  '/org9.jpeg',
  '/org10.jpeg'
];

export default function Clients() {
  // 10 logos at 1.5 seconds each = 15 seconds for one full cycle
  const DURATION = LOGOS.length * 1.5;

  return (
    <section id="dealer-network" className="bg-[#f5f4f0] border-y border-stone-200/60 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-8 w-full overflow-hidden">
          {/* Label */}
          <div className="text-xs font-bold text-stone-500 uppercase tracking-widest shrink-0">
            TRUSTED BY
          </div>
          
          {/* Logos Marquee Carousel */}
          <div className="w-full flex-none md:flex-1 relative overflow-hidden h-24 mask-image-fade">
            <motion.div 
              className="absolute inset-y-0 left-0 flex items-center gap-6 md:gap-10 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: DURATION }}
            >
              {/* We render the list twice to create a seamless infinite loop */}
              {[...LOGOS, ...LOGOS].map((logo, idx) => (
                <div key={idx} className="shrink-0 flex items-center justify-center w-[120px] h-[60px] md:w-[150px] md:h-[75px] bg-white rounded-lg shadow-sm border border-stone-200/50 p-2">
                  <img src={logo} alt={`Partner ${idx}`} className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105" />
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="text-[11px] md:text-xs font-medium text-stone-500 italic shrink-0 whitespace-nowrap">
            And many more esteemed partners...
          </div>
        </div>
      </div>
      <style>{`
        .mask-image-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}
