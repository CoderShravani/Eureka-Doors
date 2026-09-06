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

      // Attempt autoplay
      const timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              // If unmuted autoplay is blocked by browser policy, play muted
              if (videoRef.current) {
                videoRef.current.muted = true;
                videoRef.current.play().catch(() => {});
              }
            });
          }
        }
      }, 100);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          triggerFinish();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        clearTimeout(timer);
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
          className="fixed inset-0 z-50 w-screen h-screen bg-[#0f0e0c] overflow-hidden flex items-center justify-center select-none"
          id="door-video-modal"
        >
          {/* Fullscreen Video with natural object cover */}
          <video
            ref={videoRef}
            src="/door_video.mp4"
            playsInline
            autoPlay
            preload="auto"
            onEnded={handleEnded}
            onTimeUpdate={handleTimeUpdate}
            onClick={togglePlay}
            className="w-full h-full object-cover cursor-pointer"
          />

          {/* Discreet Auto-Hiding Floating Controls */}
          <div
            className={`absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center gap-2.5 transition-opacity duration-500 ease-out ${
              showControls ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
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
              className="px-4 py-2 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium transition-all shadow-xl flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Categories</span>
              <ArrowRight className="w-4 h-4 text-[#b38e5d]" />
            </button>
            <button
              onClick={triggerFinish}
              className="p-2 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/20 text-stone-300 hover:text-white transition-all shadow-xl hover:scale-105 active:scale-95"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
