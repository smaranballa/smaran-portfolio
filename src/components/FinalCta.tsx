import React from 'react';
import { MessageCircle, ArrowUpRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FinalCtaProps {
  onOpenContact: () => void;
  onOpenWhatsApp: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenContact, onOpenWhatsApp }) => {
  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-28 bg-[#161513] text-[#FBF9F5] relative overflow-hidden scroll-mt-[4.5rem]">
      {/* Subtle ambient luxury light blur */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#8F6641]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-[#DCD6CA] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
          <span>Currently accepting select client projects</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight leading-[1.12] mb-5 sm:mb-6 text-white">
          Let's build something your customers remember.
        </h2>

        <p className="text-base sm:text-lg text-[#B8B2A6] max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
          Tell me what you're trying to improve, and I'll show you what the digital experience could look like.
        </p>

        {/* Simple & Premium CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-md mx-auto">
          <button
            id="cta-whatsapp-btn"
            onClick={onOpenWhatsApp}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#205734] hover:bg-[#194529] border border-[#2E7D32]/30 rounded-full transition-all duration-200 shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current text-white" />
            <span>WhatsApp Me</span>
          </button>

          <button
            id="cta-start-conversation-btn"
            onClick={onOpenContact}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-[#FBF9F5] bg-white/6 hover:bg-white/12 border border-white/15 rounded-full transition-all duration-200"
          >
            <Mail className="w-3.5 h-3.5 text-[#C4BEB4]" />
            <span>Start a Conversation</span>
          </button>
        </div>

        {/* Direct Contact Context */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#8C867B]">
          <span>
            Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#DDD7CC] hover:underline">{PERSONAL_INFO.email}</a>
          </span>
          <span className="hidden sm:inline">·</span>
          <span>
            Response time: <strong className="text-[#DDD7CC] font-normal">Usually within a few hours</strong>
          </span>
          <span className="hidden sm:inline">·</span>
          <span>
            Location: <strong className="text-[#DDD7CC] font-normal">Bangalore · Working nationally</strong>
          </span>
        </div>
      </div>
    </section>
  );
};
