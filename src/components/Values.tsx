import { Award, Droplet, ShieldCheck, Calendar, Heart, Settings } from 'lucide-react';

export default function Values() {
  const values = [
    { title: 'Premium Materials', sub: 'Finest Quality', icon: <Award className="w-5 h-5 text-[#b38e5d]" /> },
    { title: 'Water Resistant', sub: '100% Protection', icon: <Droplet className="w-5 h-5 text-[#b38e5d]" /> },
    { title: 'Termite Proof', sub: 'Long Lasting', icon: <ShieldCheck className="w-5 h-5 text-[#b38e5d]" /> },
    { title: 'Long Warranty', sub: 'Up to 10 Years', icon: <Calendar className="w-5 h-5 text-[#b38e5d]" /> },
    { title: 'Made in India', sub: 'Proudly Indian', icon: <Heart className="w-5 h-5 text-[#b38e5d]" /> },
    { title: 'Customization', sub: 'Made For You', icon: <Settings className="w-5 h-5 text-[#b38e5d]" /> },
  ];

  return (
    <section className="bg-stone-950 py-6 border-y border-stone-800" id="architects-hub">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {values.map((item) => (
            <div key={item.title} className="flex items-center gap-3 justify-center md:justify-start">
              <div className="p-2 bg-stone-900 rounded-lg shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-stone-100 tracking-tight leading-tight truncate">
                  {item.title}
                </span>
                <span className="text-[10px] text-stone-400 font-medium tracking-wide">
                  {item.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

