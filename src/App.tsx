/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { RouterProvider, useRouter } from './navigation/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyWhatsAppBar } from './components/StickyWhatsAppBar';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ProjectLivePreviewModal } from './components/ProjectLivePreviewModal';
import { ContactModal } from './components/ContactModal';

// Multi-page components
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProcessPage } from './pages/ProcessPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

import { PortfolioProject } from './types';
import { PERSONAL_INFO } from './data/portfolioData';

function MainApp() {
  const { currentPage } = useRouter();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<PortfolioProject | null>(null);
  const [activeLiveDemoId, setActiveLiveDemoId] = useState<string | null>(null);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  const handleOpenWhatsApp = () => {
    window.open(PERSONAL_INFO.whatsappDirectUrl, '_blank');
  };

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleOpenLiveDemo = (projectId: string) => {
    setActiveLiveDemoId(projectId);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#161513] selection:bg-[#2A2724] selection:text-[#FAF8F5] relative flex flex-col font-sans-body">
      {/* Navigation */}
      <Navbar
        onOpenContact={handleOpenContact}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* Animated Multi-Page View Container */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <HomePage
              key="home"
              onOpenContact={handleOpenContact}
              onOpenWhatsApp={handleOpenWhatsApp}
              onSelectCaseStudy={(proj) => setSelectedCaseStudy(proj)}
              onOpenLiveDemo={handleOpenLiveDemo}
            />
          )}

          {currentPage === 'work' && (
            <WorkPage
              key="work"
              onOpenLiveDemo={handleOpenLiveDemo}
              onOpenContact={handleOpenContact}
            />
          )}

          {currentPage === 'project-detail' && (
            <ProjectDetailPage
              key="project-detail"
              onOpenLiveDemo={handleOpenLiveDemo}
              onOpenContact={handleOpenContact}
              onOpenWhatsApp={handleOpenWhatsApp}
            />
          )}

          {currentPage === 'services' && (
            <ServicesPage
              key="services"
              onOpenContact={handleOpenContact}
              onOpenWhatsApp={handleOpenWhatsApp}
            />
          )}

          {currentPage === 'process' && (
            <ProcessPage
              key="process"
              onOpenContact={handleOpenContact}
            />
          )}

          {currentPage === 'about' && (
            <AboutPage
              key="about"
              onOpenContact={handleOpenContact}
              onOpenWhatsApp={handleOpenWhatsApp}
            />
          )}

          {currentPage === 'contact' && (
            <ContactPage
              key="contact"
            />
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenLiveDemo={(id) => {
          setSelectedCaseStudy(null);
          setActiveLiveDemoId(id);
        }}
        onOpenContact={() => {
          setSelectedCaseStudy(null);
          setIsContactOpen(true);
        }}
      />

      {/* Interactive Project Live Preview Sandbox */}
      <ProjectLivePreviewModal
        projectId={activeLiveDemoId}
        onClose={() => setActiveLiveDemoId(null)}
        onOpenContact={() => {
          setActiveLiveDemoId(null);
          setIsContactOpen(true);
        }}
      />

      {/* Contact & Discussion Flow Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Sticky Bottom Bar on Mobile & Floating Badge on Desktop */}
      <StickyWhatsAppBar onOpenWhatsApp={handleOpenWhatsApp} />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <MainApp />
    </RouterProvider>
  );
}
