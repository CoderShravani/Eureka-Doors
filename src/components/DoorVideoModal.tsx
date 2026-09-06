import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ShieldCheck, Droplets, Layers, Award } from 'lucide-react';

interface DoorVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFinished: () => void;
}

export default function DoorVideoModal({ isOpen, onClose, onFinished }: DoorVideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const finishedTriggeredRef = useRef(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetControlsTimer = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 1800);
  }, []);

  useEffect(() => {
    if (isOpen) {
      finishedTriggeredRef.current = false;
      resetControlsTimer();

      // Immediate playback to maintain mobile user-gesture context
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // If browser blocks unmuted playback on mobile, fallback to muted autoplay
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play().catch(() => {});
            }
          });
        }
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          triggerFinish();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        if (controlsTimeoutRef.current) {
          clearTimeout(controlsTimeoutRef.current);
        }
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, resetControlsTimer]);

  const triggerFinish = () => {
    if (!finishedTriggeredRef.current) {
      finishedTriggeredRef.current = true;
      onFinished();
    }
  };

  const handleEnded = () => {
    triggerFinish();
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const remainingTime = videoRef.current.duration - videoRef.current.currentTime;

      // Soft ambient audio fade-out in final 0.6s
      if (!videoRef.current.muted && videoRef.current.volume > 0 && remainingTime <= 0.6) {
        videoRef.current.volume = Math.max(0, Math.min(1, remainingTime / 0.6));
      }

      // Finish seamlessly right as the final movement settles
      if (remainingTime <= 0.08) {
        triggerFinish();
      }
    }
  };

  const togglePlay = () => {
    resetControlsTimer();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          onMouseMove={resetControlsTimer}
          onTouchStart={resetControlsTimer}
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100dvh',
            zIndex: 9999,
          }}
          className="fixed inset-0 z-[9999] w-screen h-screen bg-[#0a0908] overflow-hidden select-none flex items-center justify-center"
          id="door-video-modal"
        >
          {/* Ambient blurred backdrop video filling the entire mobile screen so there are never empty bars */}
          <video
            src="/door_video.mp4"
            playsInline
            autoPlay
            muted
            loop
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-40 pointer-events-none"
          />

          {/* Eureka logo badge with crisp white background for high clarity */}
          <div
            className="absolute z-30 pointer-events-none transition-opacity duration-300"
            style={{
              top: 'max(1rem, env(safe-area-inset-top, 1rem))',
              left: 'max(1rem, env(safe-area-inset-left, 1rem))',
            }}
            id="video-eureka-logo"
          >
            <div className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white shadow-xl border border-stone-200/80 flex items-center justify-center">
              <img
                src="/Eureka_logo.png"
                alt="Eureka Logo"
                className="h-7 sm:h-9 w-auto object-contain"
              />
            </div>
          </div>

          {/* Foreground Video:
              - Desktop (md:): w-full h-full object-cover (exact original desktop behavior)
              - Mobile (<md): inside a centered 16:9 container so the feature badges align perfectly inside the video frame */}
          <div className="relative z-10 w-full md:h-full flex items-center justify-center pointer-events-auto">
            <div className="relative w-full aspect-video md:aspect-auto md:w-full md:h-full flex items-center justify-center">
              <video
                ref={videoRef}
                src="/door_video.mp4"
                playsInline
                autoPlay
                preload="auto"
                onEnded={handleEnded}
                onTimeUpdate={handleTimeUpdate}
                onClick={togglePlay}
                {...{
                  'webkit-playsinline': 'true',
                  'x5-playsinline': 'true',
                  'x5-video-player-type': 'h5',
                  'x5-video-player-fullscreen': 'true',
                }}
                className="w-full h-full object-contain md:object-cover object-center cursor-pointer shadow-2xl"
              />

              {/* Feature Highlights Overlay on Left Side:
                  - Positioned inside the video's 16:9 boundary on mobile so all 4 badges are guaranteed to be 100% inside the video frame!
                  - On desktop (md:): retains exact original desktop position & scale */}
              <div
                className="absolute z-20 left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 flex flex-col gap-1 sm:gap-2 md:gap-2.5 max-w-[130px] xs:max-w-[150px] sm:max-w-[210px] md:max-w-[240px] pointer-events-none"
                id="video-features-overlay"
              >
                {[
                  {
                    icon: ShieldCheck,
                    title: 'Termite & Borer Proof',
                    desc: 'Lifetime wood immunity',
                  },
                  {
                    icon: Droplets,
                    title: '100% Boiling Waterproof',
                    desc: 'IS:710 Marine standard',
                  },
                  {
                    icon: Layers,
                    title: 'Calibrated Smooth Finish',
                    desc: 'Zero-warp engineered core',
                  },
                  {
                    icon: Award,
                    title: '5-Year Guarantee',
                    desc: 'Factory certified quality',
                  },
                ].map((feat, i) => (
                  <motion.div
                    key={feat.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + i * 0.18, duration: 0.5, ease: 'easeOut' }}
                    className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-2 rounded-lg md:rounded-xl bg-black/55 md:bg-black/45 backdrop-blur-md border border-white/15 text-white shadow-lg"
                  >
                    <div className="p-1 sm:p-1.5 rounded-md sm:rounded-lg bg-[#b38e5d]/25 text-[#dfbe91] shrink-0 border border-[#b38e5d]/30">
                      <feat.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] sm:text-[11px] md:text-xs font-semibold leading-tight text-white/95 truncate">
                        {feat.title}
                      </p>
                      <p className="text-[7.5px] sm:text-[9px] md:text-[10px] text-stone-300 leading-tight truncate">
                        {feat.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Discreet Auto-Hiding Floating Controls */}
          <div
            className={`absolute z-20 flex items-center gap-2 transition-opacity duration-500 ease-out ${
              showControls ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            style={{
              top: 'max(0.75rem, env(safe-area-inset-top, 0.75rem))',
              right: 'max(0.75rem, env(safe-area-inset-right, 0.75rem))',
            }}
            onMouseEnter={() => {
              if (controlsTimeoutRef.current) {
                clearTimeout(controlsTimeoutRef.current);
              }
              setShowControls(true);
            }}
            onMouseLeave={resetControlsTimer}
          >
            <button
              onClick={triggerFinish}
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/65 hover:bg-black/85 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium transition-all shadow-xl flex items-center gap-1.5 sm:gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Categories</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#b38e5d]" />
            </button>
            <button
              onClick={triggerFinish}
              className="p-1.5 sm:p-2 rounded-full bg-black/65 hover:bg-black/85 backdrop-blur-md border border-white/20 text-stone-300 hover:text-white transition-all shadow-xl hover:scale-105 active:scale-95"
              aria-label="Close"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
