import { useRef, useEffect } from 'react';
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

  useEffect(() => {
    if (isOpen) {
      finishedTriggeredRef.current = false;

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
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

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
      if (videoRef.current.currentTime >= videoRef.current.duration - 0.08) {
        triggerFinish();
      }
    }
  };

  const togglePlay = () => {
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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          id="door-video-modal"
        >
          {/* Dark backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={triggerFinish}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl bg-stone-950 rounded-2xl sm:rounded-3xl shadow-2xl border border-stone-800/80 overflow-hidden z-10 flex flex-col"
          >
            {/* Minimal Top Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-stone-900/90 border-b border-stone-800">
              <div className="flex items-center gap-2.5">
                <span className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase">
                  Eureka Doors Collection
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={triggerFinish}
                  className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition-colors flex items-center gap-1.5"
                >
                  <span>Skip to Categories</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#b38e5d]" />
                </button>
                <button
                  onClick={triggerFinish}
                  className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
                  aria-label="Close video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Natural Video Player Display */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
              <video
                ref={videoRef}
                src="/door_video.mp4"
                playsInline
                autoPlay
                preload="auto"
                onEnded={handleEnded}
                onTimeUpdate={handleTimeUpdate}
                onClick={togglePlay}
                className="w-full h-full object-contain cursor-pointer"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
