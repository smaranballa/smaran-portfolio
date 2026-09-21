import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface StickyWhatsAppBarProps {
  onOpenWhatsApp: () => void;
}

export const StickyWhatsAppBar: React.FC<StickyWhatsAppBarProps> = ({ onOpenWhatsApp }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky button after scrolling past hero (~350px)
      if (window.scrollY > 350 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 350) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <>
      {/* Mobile Bottom Fixed Bar (Only on small screens) */}
      <aside
        id="mobile-sticky-whatsapp-bar"
        aria-label="Quick WhatsApp Contact"
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#FBF9F5]/95 backdrop-blur-md border-t border-[#161513]/10 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] animate-in slide-in-from-bottom duration-200"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold text-[#161513] leading-tight">
              Have a project in mind?
            </span>
            <span className="text-[10px] text-[#7A746B]">
              Chat directly with Smaran
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenWhatsApp}
              className="px-3.5 py-1.5 bg-[#1B4D2E] hover:bg-[#153D24] text-white text-xs font-medium rounded-full flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Me</span>
            </button>
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1 text-[#8C867E] hover:text-[#161513]"
              aria-label="Dismiss sticky bar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Desktop Floating Subtle Badge (Bottom Right) */}
      <aside
        id="desktop-floating-whatsapp-pill"
        aria-label="Quick WhatsApp Contact"
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2 bg-[#FBF9F5] hover:bg-[#F3EFE9] text-[#161513] border border-[#161513]/12 px-3.5 py-2 rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition-all hover:scale-102 group cursor-pointer"
        onClick={onOpenWhatsApp}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2E7D32] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2E7D32]" />
        </span>
        <MessageCircle className="w-3.5 h-3.5 text-[#2E7D32] fill-current" />
        <span className="text-xs font-medium text-[#161513]">
          WhatsApp Smaran
        </span>
      </aside>
    </>
  );
};
