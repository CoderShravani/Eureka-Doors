import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';

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

          {/* Foreground Video: 100% full uncropped frame with natural proportions (neither side wall nor top/bottom chopped, zero stretch) */}
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
            className="relative z-10 w-full h-full max-w-full max-h-full object-contain md:object-cover object-center cursor-pointer shadow-2xl"
          />

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
