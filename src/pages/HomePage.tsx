import React from 'react';
import { motion } from 'motion/react';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { SelectedWork } from '../components/SelectedWork';
import { ServicesSection } from '../components/ServicesSection';
import { ProcessSection } from '../components/ProcessSection';
import { AboutSection } from '../components/AboutSection';
import { FinalCta } from '../components/FinalCta';
import { PortfolioProject } from '../types';
import { useRouter } from '../navigation/RouterContext';

interface HomePageProps {
  onOpenContact: () => void;
  onOpenWhatsApp: () => void;
  onSelectCaseStudy: (project: PortfolioProject) => void;
  onOpenLiveDemo: (projectId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenContact,
  onOpenWhatsApp,
  onSelectCaseStudy,
  onOpenLiveDemo,
}) => {
  const { navigate } = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-0"
    >
      <Hero
        onOpenContact={onOpenContact}
        onOpenProjectDemo={onOpenLiveDemo}
      />

      <TrustStrip />

      <SelectedWork
        onSelectCaseStudy={(proj) => {
          navigate('project-detail', proj.id);
        }}
        onOpenLiveDemo={onOpenLiveDemo}
      />

      <ServicesSection onOpenContact={onOpenContact} />

      <ProcessSection />

      <AboutSection onOpenContact={onOpenContact} />

      <FinalCta
        onOpenContact={onOpenContact}
        onOpenWhatsApp={onOpenWhatsApp}
      />
    </motion.div>
  );
};
