import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type?: 'success' | 'info' | 'error';
}

export function showToast(message: string, title: string = 'Success!') {
  const event = new CustomEvent('show-app-toast', {
    detail: { message, title, type: 'success' }
  });
  window.dispatchEvent(event);
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const handleToastEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ message: string; title: string; type?: 'success' | 'info' | 'error' }>;
      const newToast: ToastMessage = {
        id: 'toast-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
        title: customEvent.detail.title || 'Success!',
        message: customEvent.detail.message,
        type: customEvent.detail.type || 'success'
      };

      setToasts((prev) => [...prev, newToast]);

      // Auto dismiss after 4.5 seconds
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
      }, 4500);
    };

    window.addEventListener('show-app-toast', handleToastEvent);
    return () => {
      window.removeEventListener('show-app-toast', handleToastEvent);
    };
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="fixed bottom-6 right-6 z-[99999] flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="pointer-events-auto bg-[#0b1d33] text-white p-4 rounded-2xl shadow-2xl border border-amber-500/30 flex items-start gap-3.5 relative overflow-hidden group"
          >
            {/* Green Glow Accent Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500" />

            {/* Checkmark Icon */}
            <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl shrink-0 mt-0.5">
              <CheckCircle2 className="w-5 h-5" />
            </div>

            {/* Message Content */}
            <div className="flex-1 min-w-0 pr-6">
              <h5 className="text-xs font-bold text-white tracking-wide uppercase">{toast.title}</h5>
              <p className="text-xs text-stone-300 mt-0.5 leading-snug">{toast.message}</p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => removeToast(toast.id)}
              className="text-stone-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer shrink-0"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
