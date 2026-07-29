const fs = require('fs');

let content = fs.readFileSync('src/components/ThemeDoorsCatalog.tsx', 'utf8');

const brokenBlock = `                </div></div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}`;

const correctBlock = `              </div>

              {/* Title & Action Footer */}
              <div className="p-5 text-center bg-white flex flex-col justify-between flex-1 space-y-3">
                <div>
                  <h3 className="text-sm font-bold text-stone-900 group-hover:text-[#1a2e68] transition-colors leading-snug">
                    {door.title}
                  </h3>
                  <p className="text-xs font-semibold text-stone-500 mt-1">
                    {door.code}
                  </p>
                </div>

                <div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDoor(door);
                    }}
                    className="w-full py-2 bg-stone-100 hover:bg-[#1a2e68] text-stone-800 hover:text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  >
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      <AnimatePresence>
        {selectedDoor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="theme-door-detail-modal">
            {/* Modal Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoor(null)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDoor(null)}
                className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-md rounded-full text-stone-600 hover:text-stone-900 shadow-md border border-stone-200 z-10 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Left Door Display */}
                <div className="md:col-span-5 bg-[#f5f4f0] p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-stone-200">
                  <div className="w-36 h-64 bg-white rounded-md shadow-xl p-1.5 border border-stone-300">
                    {renderThemeDoorGraphic(selectedDoor.id)}
                  </div>
                  <span className="text-xs font-bold text-[#b38e5d] uppercase tracking-widest mt-4">
                    {selectedDoor.code}
                  </span>
                </div>

                {/* Right Specifications - Specification Sheet */}
                <div className="md:col-span-7 p-6 sm:p-8 space-y-4">
                  <div>
                    <h2 className="text-xl font-black text-stone-900 leading-tight">
                      {selectedDoor.title} Specification
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      {selectedDoor.finish}
                    </p>
                  </div>

                  {/* Professional Specification Features List */}
                  <div className="space-y-2 py-2">
                    <div className="grid grid-cols-1 gap-2 text-xs">
                      {selectedDoor.keySpecs.map((spec, i) => (
                        <div key={i} className="flex items-start gap-2 text-stone-700">
                          <Check className="w-3.5 h-3.5 text-[#b38e5d] shrink-0 mt-0.5" />
                          <span className="leading-snug">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-stone-100 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1.5 bg-stone-100 rounded text-xs font-bold text-stone-600">
                        HD DIGITAL PRINT
                      </div>
                      <div className="px-3 py-1.5 bg-stone-100 rounded text-xs font-bold text-stone-600">
                        MDF/HDF CORE
                      </div>
                    </div>
                    
                    <button
                      onClick={() => {
                        setSelectedDoor(null);
                        onOpenConsultation();
                      }}
                      className="w-full py-3 px-4 bg-[#b38e5d] text-white text-xs font-bold tracking-wider uppercase rounded-md hover:bg-[#967448] transition-all shadow-sm text-center cursor-pointer"
                    >
                      REQUEST CATALOGUE & QUOTE
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}`;

content = content.replace(brokenBlock, correctBlock);
fs.writeFileSync('src/components/ThemeDoorsCatalog.tsx', content, 'utf8');
