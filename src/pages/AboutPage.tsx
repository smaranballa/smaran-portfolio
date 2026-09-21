import React from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  MessageCircle,
  Search,
  Layout,
  Share2,
  Cpu,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FaqSection } from '../components/FaqSection';

interface AboutPageProps {
  onOpenContact: () => void;
  onOpenWhatsApp: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact, onOpenWhatsApp }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="pt-24 sm:pt-28 pb-20 sm:pb-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header with Photo Card and Text Overlay */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 sm:mb-24">
          {/* Photo Card Placeholder */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#E9E4DB] border border-[#161513]/10 shadow-[0_16px_40px_rgba(0,0,0,0.06)] aspect-[4/5] max-w-md mx-auto group">
              <img
                src="/smaran.jpg"
                alt="Smaran — Digital Growth Partner"
                className="w-full h-full object-cover object-top filter grayscale contrast-[1.04] brightness-95 transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />

              {/* Minimal text overlay at the bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#161513]/95 via-[#161513]/40 to-transparent flex flex-col justify-end p-6 text-[#FBF9F5]">
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-70" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E] shadow-[0_0_0_2px_rgba(34,197,94,0.35)]" />
                  </span>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-[#D8D2C4]">
                    Available for Client Projects
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-tight">
                  Smaran
                </h2>

                <p className="text-xs sm:text-[13px] text-[#D0C9BD] font-normal mt-1 leading-snug">
                  AI-Accelerated Digital Design, Engineering & Growth
                </p>

                <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-[#A8A296]">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#D0C9BD]" />
                    Bangalore, India · Serving clients nationally
                  </span>
                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E4DFD5] hover:text-white underline underline-offset-2 transition-colors font-medium"
                  >
                    LinkedIn Profile →
                  </a>
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-[#7A746B] mt-3 font-medium">
              Direct founder collaboration · No account managers · No junior handoffs
            </p>
          </div>

          {/* Narrative & Positioning */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[12px] font-semibold tracking-wider uppercase text-[#8F6641]">
                About Smaran
              </span>
              <span className="text-[#161513]/25 font-light">·</span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#161513]/6 text-[#3E3A34]">
                Digital Growth Partner
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#161513] tracking-tight leading-[1.12]">
              A digital presence that does more than look good.
            </h1>

            {/* Service Pillar Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {['Websites', 'Visibility', 'Content', 'Lead Generation', 'AI Automation'].map((pillar) => (
                <span
                  key={pillar}
                  className="inline-flex items-center text-xs sm:text-[13px] font-medium px-3 py-1 rounded-md bg-[#EAE5DC] text-[#453F38] border border-[#161513]/8"
                >
                  {pillar}
                </span>
              ))}
            </div>

            <p className="text-base sm:text-lg text-[#554F47] font-normal leading-relaxed">
              Your website should help people <strong className="font-semibold text-[#161513]">discover you, trust you, and take the next step.</strong>
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-[#FBF9F5] bg-[#161513] hover:bg-[#282522] rounded-full transition-all duration-200 shadow-xs"
              >
                <span>Start a Conversation</span>
              </button>

              <button
                onClick={onOpenWhatsApp}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-medium text-[#1B4D2E] hover:text-[#123620] bg-[#1B4D2E]/8 hover:bg-[#1B4D2E]/14 border border-[#1B4D2E]/20 rounded-full transition-all duration-200"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp Me</span>
              </button>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-medium text-[#403C36] hover:text-[#161513] bg-[#EFECE5] hover:bg-[#E5E0D6] rounded-full border border-[#161513]/8 transition-colors"
              >
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Systemic Growth: 5 Pillars */}
        <div className="border-t border-[#161513]/10 pt-14 sm:pt-18 mb-16 sm:mb-24">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <div className="text-[12px] font-semibold tracking-wider uppercase text-[#8F6641] mb-2">
              The Digital System
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#161513] tracking-tight">
              I don't just build the website.
            </h2>
            <p className="text-xl sm:text-2xl font-semibold text-[#8F6641] tracking-tight mt-1">
              I build the digital system around the business.
            </p>
            <p className="text-sm sm:text-base text-[#605A52] mt-3">
              A website is one part of it. The rest is how people find you, trust you, and get in touch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <div className="p-6 rounded-2xl bg-[#F5F2EA] border border-[#161513]/8 flex flex-col justify-between hover:border-[#161513]/20 transition-all">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#161513] text-white flex items-center justify-center shrink-0 mb-3">
                  <Search className="w-4 h-4 text-[#C29B72]" />
                </div>
                <h3 className="text-base font-semibold text-[#161513] mb-2">
                  Get discovered
                </h3>
                <p className="text-xs sm:text-[13px] text-[#605A52] leading-relaxed">
                  Improve your Google Business Profile, local SEO, and search visibility so more customers can find you.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F2EA] border border-[#161513]/8 flex flex-col justify-between hover:border-[#161513]/20 transition-all">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#161513] text-white flex items-center justify-center shrink-0 mb-3">
                  <Layout className="w-4 h-4 text-[#C29B72]" />
                </div>
                <h3 className="text-base font-semibold text-[#161513] mb-2">
                  Look credible
                </h3>
                <p className="text-xs sm:text-[13px] text-[#605A52] leading-relaxed">
                  A premium website that reflects the quality of your actual work.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F2EA] border border-[#161513]/8 flex flex-col justify-between hover:border-[#161513]/20 transition-all">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#161513] text-white flex items-center justify-center shrink-0 mb-3">
                  <Share2 className="w-4 h-4 text-[#C29B72]" />
                </div>
                <h3 className="text-base font-semibold text-[#161513] mb-2">
                  Stay visible
                </h3>
                <p className="text-xs sm:text-[13px] text-[#605A52] leading-relaxed">
                  A practical social system — planning, creatives, captions, and AI-assisted production.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F2EA] border border-[#161513]/8 flex flex-col justify-between hover:border-[#161513]/20 transition-all">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#161513] text-white flex items-center justify-center shrink-0 mb-3">
                  <MessageCircle className="w-4 h-4 text-[#C29B72]" />
                </div>
                <h3 className="text-base font-semibold text-[#161513] mb-2">
                  Generate enquiries
                </h3>
                <p className="text-xs sm:text-[13px] text-[#605A52] leading-relaxed">
                  WhatsApp, calls, forms, and consultation flows that make the next step easy.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F2EA] border border-[#161513]/8 flex flex-col justify-between hover:border-[#161513]/20 transition-all md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#161513] text-white flex items-center justify-center shrink-0 mb-3">
                  <Cpu className="w-4 h-4 text-[#C29B72]" />
                </div>
                <h3 className="text-base font-semibold text-[#161513] mb-2">
                  Follow up automatically
                </h3>
                <p className="text-xs sm:text-[13px] text-[#605A52] leading-relaxed">
                  AI that qualifies leads, answers common questions, and cuts repetitive follow-up.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section: The approach */}
        <div className="border-t border-[#161513]/10 pt-14 sm:pt-18 mb-16 sm:mb-24">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <div className="text-[12px] font-semibold tracking-wider uppercase text-[#8F6641] mb-2">
              Our Methodology
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#161513] tracking-tight">
              The approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F7F4EE] border border-[#161513]/8">
              <div className="w-9 h-9 rounded-lg bg-[#8F6641]/15 text-[#8F6641] flex items-center justify-center font-mono text-sm font-bold mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-[#161513] mb-2">
                Bespoke, not cookie-cutter
              </h3>
              <p className="text-sm text-[#5C564E] leading-relaxed">
                Every business has a different audience, positioning and sales process. I build around those realities instead of forcing businesses into generic templates.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#F7F4EE] border border-[#161513]/8">
              <div className="w-9 h-9 rounded-lg bg-[#8F6641]/15 text-[#8F6641] flex items-center justify-center font-mono text-sm font-bold mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-[#161513] mb-2">
                AI-powered, human-directed
              </h3>
              <p className="text-sm text-[#5C564E] leading-relaxed">
                I use AI to move faster on research, content, and build — and I still make the design and business decisions.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#F7F4EE] border border-[#161513]/8">
              <div className="w-9 h-9 rounded-lg bg-[#8F6641]/15 text-[#8F6641] flex items-center justify-center font-mono text-sm font-bold mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-[#161513] mb-2">
                Built for action
              </h3>
              <p className="text-sm text-[#5C564E] leading-relaxed">
                Discover, trust, explore, enquire — by WhatsApp, call, or a short form.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#F7F4EE] border border-[#161513]/8">
              <div className="w-9 h-9 rounded-lg bg-[#8F6641]/15 text-[#8F6641] flex items-center justify-center font-mono text-sm font-bold mb-4">
                04
              </div>
              <h3 className="text-lg font-semibold text-[#161513] mb-2">
                One partner, not five vendors
              </h3>
              <p className="text-sm text-[#5C564E] leading-relaxed">
                Instead of managing separate people for your website, Google presence, content and automation, I can bring those pieces together into one connected digital system.
              </p>
            </div>
          </div>
        </div>


        {/* Section: The Principle */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#161513] text-[#FBF9F5] relative overflow-hidden mb-20">
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#8F6641]/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-wider text-[#C29B72] mb-3">
              The Guiding Principle
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight mb-8">
              "Your digital presence should work as hard as you do."
            </h3>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-[#161513] bg-white hover:bg-[#EBE5DA] rounded-full transition-all duration-200 shadow-sm"
              >
                <span>Start a Conversation</span>
              </button>

              <button
                onClick={onOpenWhatsApp}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#205734] hover:bg-[#194529] border border-[#2E7D32]/30 rounded-full transition-all duration-200"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp Me</span>
              </button>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-medium text-[#E4DFD5] hover:text-white bg-white/10 hover:bg-white/15 rounded-full border border-white/15 transition-colors"
              >
                <span>LinkedIn Profile →</span>
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FaqSection />
      </div>
    </motion.div>
  );
};
