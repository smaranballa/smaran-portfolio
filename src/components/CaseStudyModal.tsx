import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2, MessageCircle, ExternalLink, ShieldCheck, Compass } from 'lucide-react';
import { PortfolioProject } from '../types';

interface CaseStudyModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onOpenLiveDemo: (projectId: string) => void;
  onOpenContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenLiveDemo,
  onOpenContact,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const { caseStudy } = project || {};

  return (
    <AnimatePresence>
      {project && caseStudy && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-[#161513]/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FBF9F5] w-full max-w-5xl h-full sm:h-[92vh] sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-[#161513]/10"
          >
        {/* Sticky Header */}
        <div className="px-6 py-4 border-b border-[#161513]/8 bg-[#FBF9F5]/90 backdrop-blur-md flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-[#8F6641] bg-[#8F6641]/10 px-2.5 py-1 rounded">
              CASE STUDY · {project.number}
            </span>
            <span className="text-xs text-[#7A746B] hidden sm:inline">
              Concept / Demo Project
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenLiveDemo(project.id)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EAE5DC] hover:bg-[#DDD7CC] text-xs font-medium text-[#161513] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open Interactive Demo</span>
              <span className="sm:hidden">Demo</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#555048] hover:text-[#161513] hover:bg-[#161513]/5 transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-6 sm:px-10 lg:px-14 py-8 sm:py-12 space-y-16">
          {/* Top Title & Metadata */}
          <div className="max-w-3xl">
            <h2 id="case-study-title" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#161513] tracking-tight mb-4">
              {project.title}
            </h2>
            <p className="text-lg text-[#5A554E] leading-relaxed mb-6">
              {project.tagline}
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2 pt-2 text-xs">
              <span className="bg-[#161513] text-[#FBF9F5] px-3 py-1 rounded-full font-medium">
                {project.status}
              </span>
              <span className="bg-[#EFECE6] text-[#48433C] px-3 py-1 rounded-full border border-[#161513]/8">
                {project.studioArchetype}
              </span>
              {project.builtWith.map((tech, i) => (
                <span key={i} className="bg-[#EFECE6] text-[#635E55] px-3 py-1 rounded-full border border-[#161513]/8">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Image Showcase */}
          <div className="rounded-2xl overflow-hidden border border-[#161513]/10 bg-[#EBE5DB]">
            <img
              src={project.desktopScreenshot}
              alt={project.title}
              className="w-full h-80 sm:h-[450px] object-cover object-top"
            />
            <div className="p-4 bg-[#F5F2EA] border-t border-[#161513]/8 flex items-center justify-between text-xs text-[#706B62]">
              <span>Desktop editorial layout showing curated living space photography</span>
              <span className="font-mono">Sub-1s mobile paint</span>
            </div>
          </div>

          {/* The Goal & Design Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-[#F5F2EA] p-6 sm:p-8 rounded-2xl border border-[#161513]/8">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#8F6641] mb-2">
                The Objective
              </div>
              <h3 className="text-xl font-semibold text-[#161513] mb-3">
                The Goal
              </h3>
              <p className="text-sm sm:text-base text-[#57524A] leading-relaxed">
                {caseStudy.goal}
              </p>
            </div>

            <div className="bg-[#F5F2EA] p-6 sm:p-8 rounded-2xl border border-[#161513]/8">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#8F6641] mb-2">
                Aesthetic Strategy
              </div>
              <h3 className="text-xl font-semibold text-[#161513] mb-3">
                Design Approach
              </h3>
              <p className="text-sm sm:text-base text-[#57524A] leading-relaxed">
                {caseStudy.designApproach}
              </p>
            </div>
          </div>

          {/* The Experience Breakdown */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#8F6641] mb-2">
              Visitor Journey
            </div>
            <h3 className="text-2xl font-semibold text-[#161513] mb-6">
              The Experience Designed
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caseStudy.theExperience.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-white/80 rounded-xl border border-[#161513]/8"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#48443E] font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Narrative: Challenge -> Approach -> Design -> Build -> Experience */}
          <div className="border-t border-[#161513]/10 pt-12 space-y-10">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#8F6641]">
              Execution Blueprint
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-[#F5F2EA]/80 border border-[#161513]/8">
                <span className="text-xs font-semibold text-[#8F6641] block mb-1">STAGE 01</span>
                <h4 className="text-lg font-semibold text-[#161513] mb-2">Challenge</h4>
                <p className="text-sm text-[#5C564E] leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F5F2EA]/80 border border-[#161513]/8">
                <span className="text-xs font-semibold text-[#8F6641] block mb-1">STAGE 02</span>
                <h4 className="text-lg font-semibold text-[#161513] mb-2">Approach</h4>
                <p className="text-sm text-[#5C564E] leading-relaxed">
                  {caseStudy.approach}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F5F2EA]/80 border border-[#161513]/8">
                <span className="text-xs font-semibold text-[#8F6641] block mb-1">STAGE 03</span>
                <h4 className="text-lg font-semibold text-[#161513] mb-2">Design</h4>
                <p className="text-sm text-[#5C564E] leading-relaxed">
                  {caseStudy.design}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F5F2EA]/80 border border-[#161513]/8">
                <span className="text-xs font-semibold text-[#8F6641] block mb-1">STAGE 04</span>
                <h4 className="text-lg font-semibold text-[#161513] mb-2">Build</h4>
                <p className="text-sm text-[#5C564E] leading-relaxed">
                  {caseStudy.build}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F5F2EA]/80 border border-[#161513]/8 md:col-span-2">
                <span className="text-xs font-semibold text-[#8F6641] block mb-1">STAGE 05</span>
                <h4 className="text-lg font-semibold text-[#161513] mb-2">Experience & Conversion</h4>
                <p className="text-sm text-[#5C564E] leading-relaxed">
                  {caseStudy.experience}
                </p>
              </div>
            </div>
          </div>

          {/* Visual Details Gallery */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#161513]">
              Interface Details & Materiality
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.detailShots.map((shot) => (
                <div key={shot.id} className="rounded-xl overflow-hidden border border-[#161513]/8 bg-[#F4F1EA]">
                  <img
                    src={shot.imageUrl}
                    alt={shot.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3">
                    <h5 className="text-xs font-semibold text-[#161513] mb-1">{shot.title}</h5>
                    <p className="text-xs text-[#6A655C]">{shot.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Numbered Phases: 01 Discover, 02 Structure, 03 Design, 04 Build, 05 Refine */}
          <div className="border-t border-[#161513]/10 pt-12 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#8F6641]">
              The 5-Step Execution Methodology
            </div>
            <h3 className="text-2xl font-semibold text-[#161513]">
              Phased Delivery Structure
            </h3>

            <div className="divide-y divide-[#161513]/8 border-y border-[#161513]/8">
              {caseStudy.phases.map((phase) => (
                <div key={phase.number} className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-start">
                  <div className="sm:col-span-2 font-mono text-sm font-semibold text-[#8F6641]">
                    {phase.number} —
                  </div>
                  <div className="sm:col-span-4 font-semibold text-base text-[#161513]">
                    {phase.title}
                  </div>
                  <div className="sm:col-span-6 text-sm text-[#5C564E] space-y-1.5">
                    <p>{phase.desc}</p>
                    <div className="text-xs text-[#8F6641] font-medium flex items-center gap-1.5">
                      <span className="font-semibold text-[#161513]">Deliverable:</span>
                      <span>{phase.deliverable}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Card */}
          <div className="bg-[#161513] text-[#FBF9F5] p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-1">
                Want a website with this level of craft for your business?
              </h4>
              <p className="text-sm text-[#C4BEB4]">
                Let's discuss how your portfolio, services, and enquiry journey could look.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="px-5 py-2.5 bg-[#FBF9F5] text-[#161513] hover:bg-white text-sm font-medium rounded-full transition-colors"
              >
                Discuss a Project
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
  );
};
