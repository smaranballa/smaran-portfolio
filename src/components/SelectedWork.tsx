import React, { useState } from 'react';
import { ArrowUpRight, Smartphone, Monitor, Layers, Eye } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { PortfolioProject } from '../types';
import { ScaledDesktopPreview } from './ScaledDesktopPreview';
import { ScaledMobilePreview } from './ScaledMobilePreview';

interface SelectedWorkProps {
  onSelectCaseStudy: (project: PortfolioProject) => void;
  onOpenLiveDemo: (projectId: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onSelectCaseStudy,
  onOpenLiveDemo,
}) => {
  const [activePreviewDevice, setActivePreviewDevice] = useState<{ [key: string]: 'desktop' | 'mobile' }>({
    'geetha-interiors': 'desktop',
    'bheema-interiors': 'desktop',
  });

  const toggleDevice = (projectId: string, mode: 'desktop' | 'mobile') => {
    setActivePreviewDevice((prev) => ({ ...prev, [projectId]: mode }));
  };

  return (
    <section id="work" className="py-16 sm:py-20 lg:py-24 scroll-mt-[4.5rem]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="text-[12px] font-semibold tracking-wider uppercase text-[#8F6641] mb-2.5">
            Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#161513] tracking-tight leading-[1.15] mb-4">
            Selected Work
          </h2>
          <p className="text-base sm:text-lg text-[#5A554E] font-normal leading-relaxed">
            Live websites for clients in Bengaluru.
          </p>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-16 sm:gap-20">
          {PORTFOLIO_PROJECTS.map((project, index) => {
            const currentMode = activePreviewDevice[project.id] || 'desktop';

            return (
              <article
                key={project.id}
                id={`project-card-${project.id}`}
                className="group border-t border-[#161513]/12 pt-10 sm:pt-14"
              >
                {/* Project Header Row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-8 sm:mb-10">
                  <div className="lg:col-span-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="font-mono text-xs font-semibold text-[#8F6641] tracking-wider">
                        PROJECT {project.number}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#7A746B]/40" />
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#1B4D2E]/10 text-[#1B4D2E] border border-[#1B4D2E]/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                        {project.status}
                      </span>
                      {project.clientLocation && (
                        <span className="text-xs text-[#7A746B] font-medium">
                          · {project.clientLocation}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#161513] tracking-tight mb-3">
                      {project.title}
                    </h3>

                    <p className="text-base sm:text-lg text-[#5A554E] leading-relaxed max-w-3xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Actions & Live Demo Trigger */}
                  <div className="lg:col-span-4 flex flex-wrap lg:flex-col lg:items-end justify-start gap-2.5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium text-[#1B4D2E] bg-[#1B4D2E]/8 hover:bg-[#1B4D2E]/14 border border-[#1B4D2E]/20 rounded-full transition-colors"
                        title="Open live website in new tab"
                      >
                        <span>Visit Live Website</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <div className="flex items-center gap-2">
                      <button
                        id={`view-case-study-${project.id}`}
                        onClick={() => onSelectCaseStudy(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#161513] text-[#FBF9F5] hover:bg-[#282522] text-xs sm:text-sm font-medium transition-all shadow-xs group"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#C4BEB4] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>

                      <button
                        id={`view-interactive-demo-${project.id}`}
                        onClick={() => onOpenLiveDemo(project.id)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-medium text-[#403C36] bg-[#EFECE5] hover:bg-[#E5E0D6] rounded-full border border-[#161513]/8 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#8F6641]" />
                        <span>Preview</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Primary Visual Showcase: Frame with Desktop / Mobile switch */}
                <div className="bg-[#EFECE6] border border-[#161513]/10 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
                  {/* Visual Control Header */}
                  <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-[#161513]/8 gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#7A746B]">
                        Design Viewport:
                      </span>
                      <div className="inline-flex rounded-lg bg-[#E2DDC] p-1 border border-[#161513]/6 text-xs">
                        <button
                          id={`toggle-desktop-${project.id}`}
                          onClick={() => toggleDevice(project.id, 'desktop')}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-all ${
                            currentMode === 'desktop'
                              ? 'bg-[#161513] text-[#FBF9F5] shadow-xs'
                              : 'text-[#5C5750] hover:text-[#161513]'
                          }`}
                        >
                          <Monitor className="w-3.5 h-3.5" />
                          <span>Desktop Showcase</span>
                        </button>
                        <button
                          id={`toggle-mobile-${project.id}`}
                          onClick={() => toggleDevice(project.id, 'mobile')}
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
                  </div>

                  {/* Browser / Device Viewport Window */}
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#FBF9F5] border border-[#161513]/10 shadow-sm transition-all">
                    {/* Browser Chrome Header */}
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
                      <div className="flex items-center gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] text-[#1B4D2E] hover:underline font-medium hidden sm:inline-flex items-center gap-1"
                          >
                            <span>Open Direct</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Viewport Content */}
                    {currentMode === 'mobile' ? (
                      <div className="py-6 px-4 bg-[#E8E4DC]/50 flex justify-center items-center">
                        <div className="w-[370px] max-w-full bg-[#1A1918] rounded-[42px] p-2.5 shadow-2xl border-2 border-[#33312E] relative flex flex-col overflow-hidden">
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

                          <div className="rounded-b-[28px] overflow-hidden relative shadow-inner bg-white">
                            <ScaledMobilePreview
                              url={project.liveUrl}
                              title={`${project.title} live mobile preview`}
                            />
                          </div>

                          <div className="py-2 bg-[#1A1918] flex justify-center shrink-0">
                            <div className="w-28 h-1 bg-white/40 rounded-full" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Desktop Scaled Showcase Frame */
                      <ScaledDesktopPreview
                        url={project.liveUrl}
                        title={`${project.title} live desktop preview`}
                        nativeWidth={1280}
                        nativeHeight={820}
                      />
                    )}
                  </div>

                  {/* Curated UI Details Cropped Grid - 3 cards only */}
                  <div className="mt-7 sm:mt-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#78726A] mb-3 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-[#8F6641]" />
                      <span>Interface & Experience Highlights</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {project.detailShots.slice(0, 3).map((shot) => (
                        <div
                          key={shot.id}
                          className="bg-[#FBF9F5] border border-[#161513]/8 rounded-xl p-3 flex flex-col hover:border-[#161513]/20 transition-all"
                        >
                          <div className="rounded-lg overflow-hidden h-36 mb-2.5 bg-[#ECE7DE]">
                            <img
                              src={shot.imageUrl}
                              alt={shot.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>
                          <h4 className="text-xs font-semibold text-[#161513]">
                            {shot.title}
                          </h4>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Metadata Footer */}
                  <div className="mt-6 pt-5 border-t border-[#161513]/8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
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
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
