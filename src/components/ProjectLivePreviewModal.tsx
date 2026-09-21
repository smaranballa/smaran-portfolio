import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Monitor, Smartphone, MessageCircle, ExternalLink, ArrowRight, RotateCw, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { ScaledMobilePreview } from './ScaledMobilePreview';

interface ProjectLivePreviewModalProps {
  projectId: string | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectLivePreviewModal: React.FC<ProjectLivePreviewModalProps> = ({
  projectId,
  onClose,
  onOpenContact,
}) => {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [iframeKey, setIframeKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (projectId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setIsLoading(true);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [projectId, onClose]);

  const project = PORTFOLIO_PROJECTS.find((p) => p.id === projectId) || PORTFOLIO_PROJECTS[0];

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      `Hi Smaran, I'm testing the live preview for "${project.title}" (${project.liveUrl}) from your portfolio and would like to discuss building a website for my business.`
    );
    window.open(`https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <AnimatePresence>
      {projectId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#121110]/85 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#1C1A18] w-full max-w-6xl h-[94vh] rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-white/10 text-[#F5F2EC]"
          >
            {/* Top Control Bar */}
            <div className="px-4 sm:px-6 py-3 border-b border-white/10 flex items-center justify-between bg-[#161513] shrink-0 gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-2 h-2 rounded-full bg-[#2E7D32] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-white truncate">
                  {project.title}
                </span>
                <span className="text-[11px] font-mono text-[#8F6641] bg-[#8F6641]/20 px-2 py-0.5 rounded border border-[#8F6641]/30 hidden md:inline shrink-0">
                  {project.clientLocation ? `${project.clientLocation} · Live` : 'Live Production'}
                </span>
              </div>

              {/* Viewport Toggles & Real Link */}
              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1B4D2E] hover:bg-[#143B23] text-white text-xs font-medium rounded-full transition-colors"
                  >
                    <span>Open Live Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}

                {/* Device switch */}
                <div className="flex items-center gap-1 bg-white/10 p-1 rounded-full text-xs">
                  <button
                    id="modal-toggle-desktop"
                    onClick={() => {
                      setDevice('desktop');
                      setIsLoading(true);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
                      device === 'desktop' ? 'bg-white text-[#161513] font-medium shadow-xs' : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Desktop</span>
                  </button>
                  <button
                    id="modal-toggle-mobile"
                    onClick={() => {
                      setDevice('mobile');
                      setIsLoading(true);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
                      device === 'mobile' ? 'bg-white text-[#161513] font-medium shadow-xs' : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Mobile (WhatsApp Ready)</span>
                  </button>
                </div>

                {/* Reload */}
                <button
                  onClick={handleRefresh}
                  className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
                  title="Reload preview"
                  aria-label="Reload preview"
                >
                  <RotateCw className="w-4 h-4" />
                </button>

                {/* Close */}
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close demo"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Viewport Canvas Container */}
            <div className="flex-1 bg-[#121110] p-3 sm:p-6 overflow-y-auto flex items-center justify-center">
              {device === 'desktop' ? (
                /* Desktop Browser Frame */
                <div className="w-full h-full max-h-[82vh] bg-[#FBF9F5] text-[#161513] rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-white/10 relative">
                  {/* Browser Chrome Bar */}
                  <div className="px-4 py-2.5 bg-[#EFECE6] border-b border-[#161513]/10 flex items-center justify-between shrink-0 gap-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#E57373]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFB74D]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#81C784]" />
                    </div>

                    <div className="flex-1 max-w-md mx-auto flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-[#161513]/8 text-xs font-mono text-[#5A554E]">
                      <ShieldCheck className="w-3 h-3 text-[#2E7D32]" />
                      <span className="truncate">{project.liveUrl || 'https://example.com'}</span>
                    </div>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#7A746B] hover:text-[#161513] flex items-center gap-1"
                    >
                      <span className="hidden sm:inline">Visit</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Desktop Iframe */}
                  <div className="flex-1 relative overflow-hidden bg-white">
                    {isLoading && (
                      <div className="absolute inset-0 bg-[#FBF9F5] flex flex-col items-center justify-center gap-3 z-10">
                        <div className="w-6 h-6 border-2 border-[#161513]/20 border-t-[#161513] rounded-full animate-spin" />
                        <span className="text-xs font-mono text-[#78726A]">Loading live desktop experience...</span>
                      </div>
                    )}
                    <iframe
                      key={`desktop-${iframeKey}`}
                      src={project.liveUrl}
                      title={`${project.title} Desktop Live View`}
                      className="w-full h-full border-0"
                      onLoad={() => setIsLoading(false)}
                    />
                  </div>
                </div>
              ) : (
                /* Mobile Phone Frame (iPhone 15 Pro Aesthetic) */
                <div className="w-[385px] max-w-[94vw] h-[720px] max-h-[82vh] rounded-[48px] ring-[12px] ring-[#1E1D1B] shadow-2xl relative overflow-hidden bg-[#1A1918] flex flex-col border border-white/10 shrink-0">
                  {/* Clean Top Status Bar with Dynamic Island */}
                  <div className="h-10 bg-[#1A1918] flex items-center justify-between px-6 text-[10px] text-white/70 font-mono select-none shrink-0">
                    <span>9:41</span>
                    <div className="w-24 h-5 bg-black rounded-full flex items-center justify-center gap-1.5 px-2 border border-white/10 shadow-inner">
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

                  {/* Mobile Screen Iframe - Flat top edge ensures logo and menu are never clipped */}
                  <div className="flex-1 relative bg-white rounded-b-[36px] overflow-hidden min-h-0">
                    <ScaledMobilePreview
                      url={project.liveUrl}
                      title={`${project.title} Mobile Live View`}
                      nativeHeight={720}
                    />
                  </div>

                  {/* Home Indicator Bar */}
                  <div className="py-2 bg-[#1A1918] flex justify-center shrink-0">
                    <div className="w-28 h-1 bg-white/40 rounded-full" />
                  </div>
                </div>
              )}
            </div>

            {/* Footer Info Bar */}
            <div className="px-5 py-3 bg-[#161513] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
              <div className="text-center sm:text-left">
                Live production website designed, built & deployed by <strong className="text-white">Smaran</strong>.
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#1B4D2E] hover:bg-[#143B23] text-white rounded-full transition-colors text-xs font-medium"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Discuss Project on WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="text-white hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
