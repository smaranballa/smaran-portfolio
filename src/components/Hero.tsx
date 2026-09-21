import React, { useState } from 'react';
import { ArrowDown, MessageCircle, Sparkles, ExternalLink, Smartphone, Monitor } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
  onOpenProjectDemo: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenProjectDemo }) => {
  const [activeTab, setActiveTab] = useState<'geetha-interiors' | 'bheema-interiors'>('geetha-interiors');
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  const currentProject = PORTFOLIO_PROJECTS.find((p) => p.id === activeTab) || PORTFOLIO_PROJECTS[0];

  return (
    <section id="hero" className="relative pt-24 sm:pt-28 pb-14 sm:pb-20 overflow-hidden">
      {/* Background ambient lighting subtle gradients */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#EBE5DA]/40 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Top Eyebrow / Credibility badge */}
        <div className="flex items-center justify-center sm:justify-start mb-6 sm:mb-7">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#161513]/5 border border-[#161513]/8 text-[12px] sm:text-[13px] font-medium text-[#504B43]">
            <Sparkles className="w-3.5 h-3.5 text-[#8F6641]" />
            <span>AI-accelerated design and engineering</span>
          </div>
        </div>

        {/* Editorial Headline and Value Proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-semibold text-[#161513] tracking-tight leading-[1.14] mb-5 sm:mb-6">
              Websites that make your business look as good online as it does in real life.
            </h1>
            <p className="text-base sm:text-lg text-[#58534C] font-normal leading-relaxed max-w-2xl mb-8 sm:mb-9">
              For any business that wants a site people trust — and enquire from.
            </p>

            {/* Simple & Premium Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#work"
                id="hero-view-work-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-[#FBF9F5] bg-[#161513] hover:bg-[#282522] rounded-full transition-all duration-200 shadow-xs group"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#C4BEB4] transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>

              <button
                id="hero-start-conversation-btn"
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-[#161513] bg-[#EBE5DB]/70 hover:bg-[#E2DBD0] border border-[#161513]/12 rounded-full transition-all duration-200"
              >
                <span>Start a Conversation</span>
              </button>

              <button
                id="hero-whatsapp-btn"
                onClick={() => window.open('https://wa.me/917012449484?text=Hi%20Smaran,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20website.', '_blank')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-medium text-[#1B4D2E] hover:text-[#123620] bg-[#1B4D2E]/8 hover:bg-[#1B4D2E]/14 border border-[#1B4D2E]/20 rounded-full transition-all duration-200"
                title="Chat directly with Smaran on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp Me</span>
              </button>
            </div>

          </div>

          {/* Right Hero Composition: Live Client Preview Mockup */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#EFECE6] border border-[#161513]/10 rounded-2xl p-4 sm:p-5 shadow-[0_12px_36px_rgba(0,0,0,0.04)] relative">
              {/* Preview Bar Controls */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#161513]/8">
                {/* Project Selector Tabs */}
                <div className="flex items-center gap-1 p-1 bg-[#E4DFC] rounded-lg text-xs">
                  <button
                    onClick={() => setActiveTab('geetha-interiors')}
                    className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                      activeTab === 'geetha-interiors'
                        ? 'bg-[#161513] text-[#FBF9F5] shadow-xs'
                        : 'text-[#656057] hover:text-[#161513]'
                    }`}
                  >
                    01 · Geetha Interiors
                  </button>
                  <button
                    onClick={() => setActiveTab('bheema-interiors')}
                    className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                      activeTab === 'bheema-interiors'
                        ? 'bg-[#161513] text-[#FBF9F5] shadow-xs'
                        : 'text-[#656057] hover:text-[#161513]'
                    }`}
                  >
                    02 · Bheema Interiors
                  </button>
                </div>

                {/* Viewport switch */}
                <div className="hidden sm:flex items-center gap-1 text-[#656057]">
                  <button
                    onClick={() => setViewMode('desktop')}
                    className={`p-1.5 rounded transition-colors ${
                      viewMode === 'desktop' ? 'bg-[#161513]/10 text-[#161513]' : 'hover:text-[#161513]'
                    }`}
                    title="Desktop Preview"
                  >
                    <Monitor className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setViewMode('mobile')}
                    className={`p-1.5 rounded transition-colors ${
                      viewMode === 'mobile' ? 'bg-[#161513]/10 text-[#161513]' : 'hover:text-[#161513]'
                    }`}
                    title="Mobile Preview"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Mockup Frame */}
              <div className="mt-3 relative rounded-xl overflow-hidden bg-[#FBF9F5] border border-[#161513]/8 group">
                {/* Browser bar top */}
                <div className="px-3.5 py-2 bg-[#F3EFE9] border-b border-[#161513]/6 flex items-center justify-between text-[11px] text-[#7C776F]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#D6D0C5]" />
                    <span className="w-2 h-2 rounded-full bg-[#D6D0C5]" />
                    <span className="w-2 h-2 rounded-full bg-[#D6D0C5]" />
                  </div>
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] text-[#555048] hover:text-[#161513] hover:underline truncate max-w-[190px]"
                  >
                    {currentProject.liveUrl?.replace('https://', '')}
                  </a>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#1B4D2E] bg-[#1B4D2E]/10 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                    Live Website
                  </span>
                </div>

                {/* Image Frame */}
                <div className={`relative ${viewMode === 'mobile' ? 'max-w-[240px] mx-auto py-2' : ''}`}>
                  <img
                    src={viewMode === 'mobile' ? currentProject.mobileScreenshot : currentProject.desktopScreenshot}
                    alt={currentProject.title}
                    className="w-full h-56 sm:h-64 object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  
                  {/* Floating overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161513]/85 via-[#161513]/30 to-transparent flex flex-col justify-end p-4 text-white opacity-95 group-hover:opacity-100 transition-opacity">
                    <div className="text-[10px] uppercase tracking-wider text-[#E8E2D6] font-medium mb-1">
                      {currentProject.studioArchetype} · {currentProject.clientLocation}
                    </div>
                    <div className="font-medium text-sm leading-snug line-clamp-2 mb-2">
                      {currentProject.title}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/20">
                      <a
                        href={currentProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-white/90 hover:text-white underline underline-offset-2"
                      >
                        <span>Visit live site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <button
                        onClick={() => onOpenProjectDemo(currentProject.id)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-[#161513] text-[11px] font-medium hover:bg-[#FBF9F5] transition-colors"
                      >
                        <span>Interactive Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom detail teaser */}
              <div className="mt-3 px-1 flex items-center justify-between text-xs text-[#78736B]">
                <span className="flex items-center gap-1.5 text-[#1B4D2E] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                  Direct WhatsApp floor plan sharing
                </span>
                <span className="text-[#555048] font-medium">
                  Sub-second mobile speed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
