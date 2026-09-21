export interface ProjectDetailShot {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  aspect?: string;
}

export interface CaseStudyPhase {
  number: string;
  title: string;
  desc: string;
  deliverable: string;
}

export interface CaseStudy {
  goal: string;
  theExperience: string[];
  designApproach: string;
  challenge: string;
  approach: string;
  design: string;
  build: string;
  experience: string;
  phases: CaseStudyPhase[];
}

export interface PortfolioProject {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  studioArchetype: string;
  focus: string[];
  builtWith: string[];
  status: string; // e.g. "Live Client Website"
  liveUrl?: string;
  clientLocation?: string;
  heroPreviewImage: string;
  desktopScreenshot: string;
  mobileScreenshot: string;
  detailShots: ProjectDetailShot[];
  caseStudy: CaseStudy;
  liveDemoHighlights: {
    heroTitle: string;
    heroSubtitle: string;
    featuredProjects: {
      name: string;
      location: string;
      type: string;
      image: string;
      squareFeet: string;
    }[];
    services: string[];
    processSteps: string[];
    whatsappPrompt: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  points: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  highlight?: string;
}

export interface ValueFrameworkItem {
  pillar: string;
  title: string;
  summary: string;
  description: string;
  metricFocus: string;
}

export interface TechItem {
  name: string;
  category: string;
  role: string;
}
