import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Smartphone, Monitor, Layers, Eye, ArrowRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { useRouter } from '../navigation/RouterContext';
import { ScaledDesktopPreview } from '../components/ScaledDesktopPreview';

interface WorkPageProps {
  onOpenLiveDemo: (projectId: string) => void;
  onOpenContact: () => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onOpenLiveDemo, onOpenContact }) => {
  const { navigate } = useRouter();
  const [filter, setFilter] = useState<'all' | 'residential' | 'modular'>('all');
  const [viewports, setViewports] = useState<{ [key: string]: 'desktop' | 'mobile' }>({
    'geetha-interiors': 'desktop',
    'bheema-interiors': 'desktop',
  });

  const filteredProjects = PORTFOLIO_PROJECTS.filter((p) => {
    if (filter === 'residential') return p.id === 'geetha-interiors';
    if (filter === 'modular') return p.id === 'bheema-interiors';
    return true;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="pt-24 sm:pt-28 pb-20 sm:pb-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="text-[12px] font-semibold tracking-wider uppercase text-[#8F6641] mb-2">
            Work
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#161513] tracking-tight leading-[1.12] mb-4">
            Selected Work
          </h1>
          <p className="text-base sm:text-lg text-[#5A554E] font-normal leading-relaxed">
            Live websites for clients in Bengaluru.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mb-8 pb-3 border-b border-[#161513]/8">
          <span className="text-xs font-semibold text-[#7C776F] mr-2 hidden sm:inline">
            Filter:
          </span>
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              filter === 'all'
                ? 'bg-[#161513] text-[#FBF9F5]'
                : 'bg-[#EAE5DC]/60 text-[#544F48] hover:bg-[#EAE5DC]'
            }`}
          >
            All Clients ({PORTFOLIO_PROJECTS.length})
          </button>
          <button
            onClick={() => setFilter('residential')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              filter === 'residential'
                ? 'bg-[#161513] text-[#FBF9F5]'
                : 'bg-[#EAE5DC]/60 text-[#544F48] hover:bg-[#EAE5DC]'
            }`}
          >
            Residential Interior Studio
          </button>
          <button
            onClick={() => setFilter('modular')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              filter === 'modular'
                ? 'bg-[#161513] text-[#FBF9F5]'
                : 'bg-[#EAE5DC]/60 text-[#544F48] hover:bg-[#EAE5DC]'
            }`}
          >
            Modular Kitchens & Carpentry
          </button>
        </div>

        {/* Projects List */}
        <div className="space-y-24 sm:space-y-32">
          {filteredProjects.map((project) => {
            const currentMode = viewports[project.id] || 'desktop';

            return (
              <article
                key={project.id}
                className="group border-t border-[#161513]/12 pt-10 sm:pt-14"
              >
                {/* Header Row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-8 sm:mb-10">
                  <div className="lg:col-span-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="font-mono text-xs font-semibold text-[#8F6641] tracking-wider">
                        PROJECT {project.number}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#7A746B]/40" />
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#161513]/5 text-[#5A554E] border border-[#161513]/8">
                        {project.status}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#161513] tracking-tight mb-3">
                      {project.title}
                    </h2>

                    <p className="text-base sm:text-lg text-[#5A554E] leading-relaxed max-w-3xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="lg:col-span-4 flex flex-wrap lg:flex-col lg:items-end justify-start gap-2.5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium text-[#1B4D2E] bg-[#1B4D2E]/8 hover:bg-[#1B4D2E]/14 border border-[#1B4D2E]/20 rounded-full transition-colors"
                      >
                        <span>Visit Live Website</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => navigate('project-detail', project.id)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#161513] text-[#FBF9F5] hover:bg-[#282522] text-xs sm:text-sm font-medium transition-all shadow-xs group"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#C4BEB4] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>

                      <button
                        onClick={() => onOpenLiveDemo(project.id)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-medium text-[#403C36] bg-[#EFECE5] hover:bg-[#E5E0D6] rounded-full border border-[#161513]/8 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#8F6641]" />
                        <span>Preview</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Visual Viewport Box */}
                <div className="bg-[#EFECE6] border border-[#161513]/10 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
                  {/* Viewport controls */}
                  <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-[#161513]/8 gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#7A746B]">
                        Viewport:
                      </span>
                      <div className="inline-flex rounded-lg bg-[#E2DDC] p-1 border border-[#161513]/6 text-xs">
                        <button
                          id={`workpage-toggle-desktop-${project.id}`}
                          onClick={() => setViewports((p) => ({ ...p, [project.id]: 'desktop' }))}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-all ${
                            currentMode === 'desktop'
                              ? 'bg-[#161513] text-[#FBF9F5] shadow-xs'
                              : 'text-[#5C5750] hover:text-[#161513]'
                          }`}
                        >
                          <Monitor className="w-3.5 h-3.5" />
                          <span>Desktop View</span>
                        </button>
                        <button
                          id={`workpage-toggle-mobile-${project.id}`}
                          onClick={() => setViewports((p) => ({ ...p, [project.id]: 'mobile' }))}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-all ${
                            currentMode === 'mobile'
                              ? 'bg-[#161513] text-[#FBF9F5] shadow-xs'
                              : 'text-[#5C5750] hover:text-[#161513]'
                          }`}
                        >
                          <Smartphone className="w-3.5 h-3.5" />
                          <span>Mobile View</span>
                        </button>
                      </div>
                    </div>

                    <div className="text-xs text-[#7A746B] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                      <span>{currentMode === 'desktop' ? 'Proportional 1280px desktop canvas' : 'Direct WhatsApp enquiry journey'}</span>
                    </div>
                  </div>

                  {/* Browser Mockup */}
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#FBF9F5] border border-[#161513]/10 shadow-sm">
                    <div className="px-4 py-2 bg-[#F4F0E8] border-b border-[#161513]/6 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#E57373]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFB74D]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#81C784]" />
                      </div>
                      <div className="text-[11px] font-mono text-[#78726A] bg-white/80 px-3 py-0.5 rounded border border-[#161513]/6 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                        <span>{project.liveUrl ? project.liveUrl.replace('https://', '') : `demo.${project.id}.com`}</span>
                      </div>
                      <div className="text-[11px] text-[#1B4D2E] font-medium hidden sm:flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                        Live Website
                      </div>
                    </div>

                    {currentMode === 'mobile' ? (
                      /* Realistic Smartphone Device Chassis without corner clipping */
                      <div className="py-6 px-4 bg-[#E8E4DC]/50 flex justify-center items-center">
                        <div className="w-[370px] max-w-full bg-[#1A1918] rounded-[42px] p-2.5 shadow-2xl border-2 border-[#33312E] relative flex flex-col overflow-hidden">
                          {/* Clean Top Status Bar with Dynamic Island */}
                          <div className="h-8 bg-[#1A1918] flex items-center justify-between px-5 text-[10px] text-white/70 font-mono select-none shrink-0 mb-1">
                            <span>9:41</span>
                            <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center gap-1 px-2 border border-white/10 shadow-inner">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                              <div className="w-2 h-2 rounded-full bg-[#222] border border-white/20" />
                            </div>
                            <div className="flex items-center gap-1 text-[9px]">
                              <span>5G</span>
                              <div className="w-3.5 h-2 border border-white/60 rounded-xs p-0.5 flex items-center">
                                <div className="w-2 h-1 bg-white/80 rounded-xs" />
                              </div>
                            </div>
                          </div>

                          {/* Mobile Screen Frame - Flat top edge ensures logo and menu are never clipped by corners */}
                          <div className="h-[540px] sm:h-[600px] bg-white rounded-b-[28px] overflow-hidden relative shadow-inner">
                            <iframe
                              src={project.liveUrl}
                              title={`${project.title} live mobile preview`}
                              className="w-full h-full border-0"
                              loading="lazy"
                            />
                          </div>

                          {/* Bottom Home Indicator */}
                          <div className="py-2 bg-[#1A1918] flex justify-center shrink-0">
                            <div className="w-28 h-1 bg-white/40 rounded-full" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Desktop Showcase Frame */
                      <ScaledDesktopPreview
                        url={project.liveUrl}
                        title={`${project.title} live desktop preview`}
                        nativeWidth={1280}
                        nativeHeight={820}
                      />
                    )}
                  </div>

                  {/* UI Detail Highlights - 3 cards only */}
                  <div className="mt-5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#78726A] mb-3 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-[#8F6641]" />
                      <span>Interface & Materiality Crops</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {project.detailShots.slice(0, 3).map((shot) => (
                        <div
                          key={shot.id}
                          className="bg-[#FBF9F5] border border-[#161513]/8 rounded-xl p-3 flex flex-col"
                        >
                          <div className="rounded-lg overflow-hidden h-36 mb-2.5 bg-[#ECE7DE]">
                            <img
                              src={shot.imageUrl}
                              alt={shot.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>
                          <h3 className="text-xs font-semibold text-[#161513]">
                            {shot.title}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer specs */}
                  <div className="mt-6 pt-5 border-t border-[#161513]/8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div>
                      <span className="block font-medium text-[#7C776F] mb-1">Focus</span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.focus.map((item, i) => (
                          <span
                            key={i}
                            className="bg-[#E5DFC] text-[#3D3A35] px-2 py-0.5 rounded border border-[#161513]/6 text-[11px]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="block font-medium text-[#7C776F] mb-1">Built with</span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.builtWith.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-[#E5DFC] text-[#3D3A35] px-2 py-0.5 rounded border border-[#161513]/6 text-[11px]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex sm:justify-end items-center">
                      <button
                        onClick={() => navigate('project-detail', project.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#161513] hover:text-[#8F6641] transition-colors"
                      >
                        <span>Explore full design blueprint</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 p-8 sm:p-10 bg-[#161513] text-[#FBF9F5] rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              Ready to elevate your digital presence?
            </h3>
            <p className="text-sm text-[#B8B2A6]">
              Let's craft a bespoke website designed to reflect your craftsmanship and capture serious clients.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-3 bg-[#FBF9F5] text-[#161513] hover:bg-white text-sm font-semibold rounded-full shrink-0 transition-colors"
          >
            Discuss a Project
          </button>
        </div>
      </div>
    </motion.div>
  );
};
