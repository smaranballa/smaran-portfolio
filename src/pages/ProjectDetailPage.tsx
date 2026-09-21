import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, MessageCircle, MapPin, Eye, Compass } from 'lucide-react';
import { PORTFOLIO_PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { useRouter } from '../navigation/RouterContext';

interface ProjectDetailPageProps {
  onOpenLiveDemo: (projectId: string) => void;
  onOpenContact: () => void;
  onOpenWhatsApp: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  onOpenLiveDemo,
  onOpenContact,
  onOpenWhatsApp,
}) => {
  const { currentProjectId, navigate } = useRouter();

  const project =
    PORTFOLIO_PROJECTS.find((p) => p.id === currentProjectId) || PORTFOLIO_PROJECTS[0];
  const { caseStudy, liveDemoHighlights } = project;

  // Next project helper
  const currentIndex = PORTFOLIO_PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject =
    PORTFOLIO_PROJECTS[(currentIndex + 1) % PORTFOLIO_PROJECTS.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="pt-24 sm:pt-28 lg:pt-30 pb-16 sm:pb-20"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-4 mb-8 sm:mb-12">
          <button
            onClick={() => navigate('work')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#5A554E] hover:text-[#161513] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Selected Work</span>
          </button>

          <div className="flex items-center gap-2 text-xs">
            <span className="font-mono text-[#8F6641] font-semibold">
              CASE STUDY · {project.number}
            </span>
            <span className="text-[#A49F96]">/</span>
            <span className="text-[#656057]">{project.status}</span>
          </div>
        </div>

        {/* Hero Title & Lead */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161513]/5 text-[#5A554E] text-xs font-medium mb-4">
            <span>{project.studioArchetype}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#161513] tracking-tight leading-[1.14] mb-6">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#58534C] font-normal leading-relaxed">
            {project.tagline}
          </p>

          {/* Quick Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1B4D2E] hover:bg-[#143B23] text-white text-xs sm:text-sm font-medium transition-all shadow-xs"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={() => onOpenLiveDemo(project.id)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#161513] text-[#FBF9F5] hover:bg-[#282522] text-xs sm:text-sm font-medium shadow-xs transition-all"
            >
              <Eye className="w-3.5 h-3.5 text-[#C4BEB4]" />
              <span>Interactive Sandbox</span>
            </button>

            <button
              onClick={onOpenWhatsApp}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#F3EFE8] hover:bg-[#EAE4DC] border border-[#161513]/10 text-[#161513] text-xs sm:text-sm font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#1B4D2E]" />
              <span>WhatsApp Smaran</span>
            </button>
          </div>
        </div>

        {/* Full-bleed Showcase Image */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#161513]/10 bg-[#EAE5DC] shadow-[0_12px_40px_rgba(0,0,0,0.04)] mb-16 sm:mb-20">
          <img
            src={project.desktopScreenshot}
            alt={project.title}
            className="w-full h-80 sm:h-[500px] lg:h-[620px] object-cover object-top"
          />
          <div className="p-4 sm:p-5 bg-[#F5F2EA] border-t border-[#161513]/8 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#706B62] gap-2">
            <span>Primary Desktop monograph view showing spatial flow and material richness</span>
            <span className="font-mono text-[#8F6641]">Optimized for mobile WhatsApp referrals</span>
          </div>
        </div>

        {/* Specifications Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-[#F5F2EA]/80 border border-[#161513]/8 mb-16 sm:mb-20">
          <div>
            <span className="text-[11px] font-semibold text-[#8F6641] uppercase tracking-wider block mb-1">
              Project Type
            </span>
            <span className="text-sm font-semibold text-[#161513]">
              {project.status}
            </span>
          </div>

          <div>
            <span className="text-[11px] font-semibold text-[#8F6641] uppercase tracking-wider block mb-1">
              Archetype
            </span>
            <span className="text-sm font-semibold text-[#161513]">
              {project.studioArchetype}
            </span>
          </div>

          <div>
            <span className="text-[11px] font-semibold text-[#8F6641] uppercase tracking-wider block mb-1">
              Technologies
            </span>
            <span className="text-sm font-semibold text-[#161513]">
              Next.js · Tailwind · TS
            </span>
          </div>

          <div>
            <span className="text-[11px] font-semibold text-[#8F6641] uppercase tracking-wider block mb-1">
              Primary Objective
            </span>
            <span className="text-sm font-semibold text-[#161513]">
              WhatsApp Enquiry Intake
            </span>
          </div>
        </div>

        {/* The Goal & Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16 sm:mb-20">
          <div className="bg-[#F5F2EA] p-8 rounded-2xl border border-[#161513]/8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8F6641] block mb-2">
              The Objective
            </span>
            <h2 className="text-2xl font-semibold text-[#161513] mb-4">
              The Goal
            </h2>
            <p className="text-sm sm:text-base text-[#57524A] leading-relaxed">
              {caseStudy.goal}
            </p>
          </div>

          <div className="bg-[#F5F2EA] p-8 rounded-2xl border border-[#161513]/8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8F6641] block mb-2">
              Aesthetic Strategy
            </span>
            <h2 className="text-2xl font-semibold text-[#161513] mb-4">
              Design Approach
            </h2>
            <p className="text-sm sm:text-base text-[#57524A] leading-relaxed">
              {caseStudy.designApproach}
            </p>
          </div>
        </div>

        {/* The Experience Breakdown */}
        <div className="mb-16 sm:mb-20">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#8F6641] mb-2">
            Visitor Flow & Features
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#161513] mb-8">
            The Experience Designed
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {caseStudy.theExperience.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-5 bg-white rounded-xl border border-[#161513]/8 shadow-2xs"
              >
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                <span className="text-sm text-[#48443E] font-medium leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 5-Phase Execution Narrative */}
        <div className="border-t border-[#161513]/10 pt-16 mb-16 sm:mb-20">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#8F6641] mb-2">
            Execution Stages
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#161513] mb-8">
            Challenge → Approach → Design → Build → Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-[#F5F2EA]/80 border border-[#161513]/8">
              <span className="text-xs font-semibold text-[#8F6641] block mb-1">STAGE 01</span>
              <h3 className="text-lg font-semibold text-[#161513] mb-2">The Challenge</h3>
              <p className="text-xs sm:text-sm text-[#5C564E] leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F2EA]/80 border border-[#161513]/8">
              <span className="text-xs font-semibold text-[#8F6641] block mb-1">STAGE 02</span>
              <h3 className="text-lg font-semibold text-[#161513] mb-2">The Approach</h3>
              <p className="text-xs sm:text-sm text-[#5C564E] leading-relaxed">
                {caseStudy.approach}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F2EA]/80 border border-[#161513]/8">
              <span className="text-xs font-semibold text-[#8F6641] block mb-1">STAGE 03</span>
              <h3 className="text-lg font-semibold text-[#161513] mb-2">Design & Hierarchy</h3>
              <p className="text-xs sm:text-sm text-[#5C564E] leading-relaxed">
                {caseStudy.design}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#F5F2EA]/80 border border-[#161513]/8">
              <span className="text-xs font-semibold text-[#8F6641] block mb-1">STAGE 04</span>
              <h3 className="text-lg font-semibold text-[#161513] mb-2">Engineering & Speed</h3>
              <p className="text-xs sm:text-sm text-[#5C564E] leading-relaxed">
                {caseStudy.build}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F2EA]/80 border border-[#161513]/8">
              <span className="text-xs font-semibold text-[#8F6641] block mb-1">STAGE 05</span>
              <h3 className="text-lg font-semibold text-[#161513] mb-2">Experience & Conversion</h3>
              <p className="text-xs sm:text-sm text-[#5C564E] leading-relaxed">
                {caseStudy.experience}
              </p>
            </div>
          </div>
        </div>

        {/* Interface Details Visuals */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl font-semibold text-[#161513] mb-6">
            Interface Details & Craftsmanship
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.detailShots.map((shot) => (
              <div key={shot.id} className="rounded-2xl overflow-hidden border border-[#161513]/10 bg-white">
                <img
                  src={shot.imageUrl}
                  alt={shot.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-[#161513] mb-1">{shot.title}</h3>
                  <p className="text-xs text-[#6A655C] leading-relaxed">{shot.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Delivery Phases */}
        <div className="border-t border-[#161513]/10 pt-16 mb-16 sm:mb-20">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#8F6641] mb-2">
            Structured Phases
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#161513] mb-8">
            The 5 Phased Sprints
          </h2>

          <div className="divide-y divide-[#161513]/10 border-y border-[#161513]/10">
            {caseStudy.phases.map((phase) => (
              <div key={phase.number} className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                <div className="sm:col-span-2 font-mono text-base font-semibold text-[#8F6641]">
                  {phase.number} —
                </div>
                <div className="sm:col-span-4 font-semibold text-lg text-[#161513]">
                  {phase.title}
                </div>
                <div className="sm:col-span-6 text-sm text-[#5C564E] space-y-2">
                  <p>{phase.desc}</p>
                  <div className="text-xs text-[#8F6641] font-medium">
                    <strong className="text-[#161513]">Deliverable:</strong> {phase.deliverable}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Project & Contact Callout */}
        <div className="border-t border-[#161513]/10 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={() => navigate('project-detail', nextProject.id)}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-10 h-10 rounded-full bg-[#161513]/5 flex items-center justify-center text-[#161513] group-hover:bg-[#161513] group-hover:text-[#FBF9F5] transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#8F6641] block">
                Next Concept
              </span>
              <span className="text-base font-semibold text-[#161513] group-hover:text-[#8F6641] transition-colors">
                {nextProject.title}
              </span>
            </div>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 bg-[#161513] text-[#FBF9F5] hover:bg-[#282522] text-xs sm:text-sm font-medium rounded-full shadow-xs transition-colors"
            >
              Discuss Your Website
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
