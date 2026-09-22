import {
  PortfolioProject,
  ServiceItem,
  ProcessStep,
  FaqItem,
  ValueFrameworkItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Smaran',
  title: 'Digital Presence Specialist & Engineer',
  role: 'Independent Web Designer & Digital Partner',
  email: 'smaranballa@gmail.com',
  whatsappNumber: '917012449484',
  whatsappDisplay: '+91 70124 49484',
  phoneDisplay: '+91 70124 49484',
  phoneTel: '+917012449484',
  whatsappDirectUrl: 'https://wa.me/917012449484?text=Hi%20Smaran,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20website%20for%20my%20business.',
  location: 'Bangalore, India · Serving clients nationally',
  linkedinUrl: 'https://www.linkedin.com/in/smaranballa/',
  avatarUrl: '', // Optional user portrait image URL; falls back to premium designer placeholder
};

// ==========================================
// 1. SELECTED WORK (Live Client Websites)
// High-craft, production-grade websites delivering real enquiries.
// ==========================================
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'geetha-interiors',
    number: '01',
    title: 'Geetha Interiors',
    tagline: 'Residential interior design studio in Varthur, Bengaluru — bespoke living spaces, modular kitchens, and custom joinery.',
    description: 'A serene architectural web presence that presents Geetha Interiors\' residential portfolio with dignity, making it seamless for local homeowners to explore spaces and enquire over WhatsApp.',
    studioArchetype: 'Residential Interior Architecture & Turnkey Design Studio',
    clientLocation: 'Varthur, Bengaluru',
    focus: ['Bespoke portfolio curation', 'Direct WhatsApp enquiries', 'Room typology filtering', 'Sub-second mobile loading'],
    builtWith: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    status: 'Client Website · Live',
    liveUrl: 'https://geetha-interiors.vercel.app/',
    heroPreviewImage: 'https://geetha-interiors.vercel.app/projects/1/1.2.webp',
    desktopScreenshot: 'https://geetha-interiors.vercel.app/projects/1/1.2.webp',
    mobileScreenshot: 'https://geetha-interiors.vercel.app/projects/1/1.3.webp',
    detailShots: [
      {
        id: 'g-d1',
        title: 'Bespoke Living Space & Wall Panelling',
        caption: 'Architectural fluted wood panelling with integrated warm ambient backlighting and bespoke modern seating.',
        imageUrl: 'https://geetha-interiors.vercel.app/projects/1/1.2.webp',
        aspect: '16/9',
      },
      {
        id: 'g-d2',
        title: 'Mint Modular Kitchen & Quartz Countertop',
        caption: 'Handleless profile channel cabinetry with seamless quartz countertop and under-cabinet LED task lighting.',
        imageUrl: 'https://geetha-interiors.vercel.app/projects/1/1.3.webp',
        aspect: '4/3',
      },
      {
        id: 'g-d3',
        title: 'Arched Media Unit & Louver Detailing',
        caption: 'Contemporary arched television feature wall with fluted acoustic paneling and concealed cable management.',
        imageUrl: 'https://geetha-interiors.vercel.app/projects/2/2.2.webp',
        aspect: '4/3',
      },
      {
        id: 'g-d4',
        title: 'Sage Bedroom Wardrobes & Brass Edge Pulls',
        caption: 'Full-height floor-to-ceiling wardrobes finished in subtle sage green with precision brushed brass hardware.',
        imageUrl: 'https://geetha-interiors.vercel.app/projects/2/2.4.webp',
        aspect: '16/9',
      },
      {
        id: 'g-d5',
        title: 'Master Bedroom Suite Sanctuary',
        caption: 'Vertical fluted upholstered headboard with warm neutral bedding and suspended bedside illumination.',
        imageUrl: 'https://geetha-interiors.vercel.app/projects/1/1.6.webp',
        aspect: '4/3',
      },
      {
        id: 'g-d6',
        title: 'Curated Home Workstation & Shelving',
        caption: 'Integrated study nook with floating ashwood shelving tailored for high-density modern apartment living.',
        imageUrl: 'https://geetha-interiors.vercel.app/projects/1/1.5.webp',
        aspect: '4/3',
      },
    ],
    caseStudy: {
      goal: 'Replace fragmented social media links with an authoritative, fast-loading digital monograph that presents Geetha Interiors\' residential craftsmanship to discerning Bangalore homeowners.',
      theExperience: [
        'Full-bleed residential project photography highlighting real living spaces, kitchens, and bedrooms',
        'Transparent service scopes explaining turnkey execution, modular kitchens, and custom woodwork',
        'Structured 4-phase design methodology that builds homeowner confidence prior to site visits',
        'One-tap WhatsApp enquiry workflow pre-populated with floor plan discussion details',
        'Local Varthur & Bengaluru SEO structure and Google Maps routing integration',
      ],
      designApproach: 'Refined editorial layout utilizing tactile warm neutrals (#F8F6F0, #1C1916), generous whitespace, and responsive picture delivery. The typography pairs an elegant high-contrast serif for room titles with crisp modern sans for specifications.',
      challenge: 'High-end homeowners in East Bengaluru were discovering Geetha Interiors mainly via word-of-mouth or Instagram, lacking a central catalog to view full room collections or understand turnkey timelines.',
      approach: 'We organized projects by room typologies, engineered a frictionless mobile-first experience, and anchored direct WhatsApp triggers at moments of highest visual interest.',
      design: 'Tactile architectural neutrals paired with deep charcoal, letting the finished photography take center stage without distracting gimmicks.',
      build: 'Next.js with type-safe React, WebP image compression, zero layout shifts, and sub-second load times on 4G networks.',
      experience: 'Homeowners can inspect bespoke joinery, review the turnkey design process, and instantly send their floor plans to Geetha Interiors on WhatsApp.',
      phases: [
        {
          number: '01',
          title: 'Discovery & Photography Curation',
          desc: 'Audit real completed residential projects in Varthur and select highest-fidelity photographs across kitchens, living rooms, and bedrooms.',
          deliverable: 'Visual content inventory & project taxonomy',
        },
        {
          number: '02',
          title: 'Spatial Architecture & Wireframing',
          desc: 'Design intuitive room-by-room navigation so prospective clients quickly find inspiration matching their home layout.',
          deliverable: 'Mobile & desktop wireframes with conversion triggers',
        },
        {
          number: '03',
          title: 'Editorial Interface & Prototyping',
          desc: 'Craft an understated luxury aesthetic matching the studio\'s real-world craftsmanship in Bangalore.',
          deliverable: 'Figma design system & interactive prototype',
        },
        {
          number: '04',
          title: 'Clean Next.js Codebase',
          desc: 'Implement with Next.js, modern Tailwind CSS, and optimized asset delivery for instant page flips.',
          deliverable: 'Production-ready responsive website',
        },
        {
          number: '05',
          title: 'Local SEO & WhatsApp Launch',
          desc: 'Integrate Google Maps location data, structured JSON-LD schema, and direct WhatsApp routing.',
          deliverable: 'Live Vercel deployment on custom domain',
        },
      ],
    },
    liveDemoHighlights: {
      heroTitle: 'Living spaces conceived with architectural restraint & warmth.',
      heroSubtitle: 'Bespoke residential interiors in Varthur, Bengaluru — living spaces, modular kitchens, bedrooms and custom storage.',
      featuredProjects: [
        {
          name: 'The Varthur Residence',
          location: 'Varthur, Bengaluru',
          type: 'Full Residential Turnkey',
          image: 'https://geetha-interiors.vercel.app/projects/1/1.2.webp',
          squareFeet: '3,800 sq.ft',
        },
        {
          name: 'Arched Living & Entertainment Suite',
          location: 'East Bengaluru',
          type: 'Contemporary Joinery',
          image: 'https://geetha-interiors.vercel.app/projects/2/2.2.webp',
          squareFeet: '2,600 sq.ft',
        },
        {
          name: 'Mint Modern Modular Kitchen',
          location: 'Varthur Lake View',
          type: 'Custom Kitchen Design',
          image: 'https://geetha-interiors.vercel.app/projects/1/1.3.webp',
          squareFeet: 'Modular Suite',
        },
      ],
      services: ['Full Home Interiors', 'Modular Kitchens', 'Custom Wardrobes & Storage', 'Living Spaces & Ceilings'],
      processSteps: ['Design Consultation', '3D Visualization & Space Planning', 'Material Selection', 'Turnkey Handover'],
      whatsappPrompt: 'Hi Geetha Interiors, I came across your website and would like to discuss my home interior project.',
    },
  },
  {
    id: 'studio-samaya',
    number: '02',
    title: 'Studio Samaya',
    tagline: 'Luxury interior architecture & spatial design studio in Indiranagar, Bangalore — quiet luxury, timeless materials, considered living.',
    description: 'An editorial monograph for a Bangalore interior architecture practice — full-bleed project photography, clear service scopes, and a refined commission-enquiry journey for discerning residential and commercial clients.',
    studioArchetype: 'Luxury Interior Architecture & Spatial Design Studio',
    clientLocation: 'Indiranagar, Bangalore',
    focus: ['Editorial project monograph', 'Residential & commercial portfolio', 'Commission enquiry flow', 'Quiet-luxury brand presence'],
    builtWith: ['Vite', 'React', 'TypeScript', 'Tailwind CSS'],
    status: 'Client Website · Live',
    liveUrl: 'https://studio-samaya.vercel.app/',
    heroPreviewImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
    desktopScreenshot: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
    mobileScreenshot: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    detailShots: [
      {
        id: 's-d1',
        title: 'The Courtyard Residence',
        caption: 'Sunlit Indiranagar villa centered on an open courtyard, honed Kota stone, and warm Burma teak joinery.',
        imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
        aspect: '16/9',
      },
      {
        id: 's-d2',
        title: 'Sadashivanagar Sky Penthouse',
        caption: 'High-altitude living framed by silver Navona travertine, custom walnut joinery, and treetop vistas.',
        imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85',
        aspect: '16/9',
      },
      {
        id: 's-d3',
        title: 'Atelier No. 7 & Private Gallery',
        caption: 'Boutique advisory workplace and client salon on Lavelle Road with museum-grade lighting and acoustic privacy.',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=85',
        aspect: '4/3',
      },
      {
        id: 's-d4',
        title: 'Dining Pavilion & Teak Screens',
        caption: 'Floor-to-ceiling slatted teak room dividers framing a dining pavilion with natural daylight ingress.',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
        aspect: '4/3',
      },
      {
        id: 's-d5',
        title: 'Primary Bath Suite',
        caption: 'Seamless micro-cement and monolithic travertine bathing suite with quiet material restraint.',
        imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85',
        aspect: '16/9',
      },
      {
        id: 's-d6',
        title: 'Quartzite Kitchen Island',
        caption: 'Bespoke kitchen island carved from brushed grey quartzite with integrated warm ambient lighting.',
        imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85',
        aspect: '4/3',
      },
    ],
    caseStudy: {
      goal: 'Give Studio Samaya an authoritative digital monograph that mirrors their quiet-luxury craft — elevating perceived fee authority and making commission enquiries feel natural for high-intent residential and commercial clients.',
      theExperience: [
        'Full-bleed architectural photography across Indiranagar villas, penthouses, and boutique commercial ateliers',
        'Clear service scopes spanning turnkey homes, renovations, bespoke millwork, and commercial fit-outs',
        'Structured design methodology that builds client confidence before a site visit',
        'Refined commission-enquiry journey with WhatsApp and email routing',
        'Bangalore-local SEO and schema for luxury interior architecture discovery',
      ],
      designApproach: 'Architectural monograph aesthetic — warm paper neutrals, Marcellus/Tenor Sans display pairing, generous whitespace, and photography-first compositions that let materials and light lead.',
      challenge: 'Discerning Bangalore homeowners and commercial clients needed a calm, credible digital presence that matched Studio Samaya\'s offline craft — not a generic interior-design template.',
      approach: 'We structured the site as an editorial portfolio: selected works first, studio philosophy second, clear services, and a frictionless path to begin a project.',
      design: 'Quiet luxury palette (#FBF9F5, #1E1C1A) with tactile warm neutrals — no visual noise competing with the photography.',
      build: 'Vite + React + TypeScript with motion-driven parallax, optimized Unsplash/CDN imagery, and fast client-side route transitions.',
      experience: 'Visitors can explore courtyard residences and commercial ateliers, understand turnkey scopes, and start a commission conversation in one step.',
      phases: [
        {
          number: '01',
          title: 'Brand & Portfolio Audit',
          desc: 'Align on studio positioning — quiet luxury, honest materials, Indiranagar atelier — and curate flagship residential and commercial projects.',
          deliverable: 'Content hierarchy & visual inventory',
        },
        {
          number: '02',
          title: 'Monograph Information Architecture',
          desc: 'Map Work, Studio, Services, Reviews, and Contact into an editorial navigation suited to high-end commissions.',
          deliverable: 'Route structure & conversion touchpoints',
        },
        {
          number: '03',
          title: 'Interface & Motion Design',
          desc: 'Craft full-bleed hero compositions, inset photographic studies, and restrained micro-interactions that feel architectural rather than decorative.',
          deliverable: 'High-fidelity design system & prototypes',
        },
        {
          number: '04',
          title: 'Vite React Engineering',
          desc: 'Implement with React, TypeScript, Tailwind CSS, and Motion for scroll/parallax presence without sacrificing performance.',
          deliverable: 'Production-ready responsive website',
        },
        {
          number: '05',
          title: 'SEO Schema & Launch',
          desc: 'Ship LocalBusiness JSON-LD, Open Graph cards, and Vercel deployment for studio-samaya.vercel.app.',
          deliverable: 'Live deployment & enquiry analytics ready',
        },
      ],
    },
    liveDemoHighlights: {
      heroTitle: 'Spaces designed to be lived in.',
      heroSubtitle: 'Interior architecture and spatial design for refined residential and commercial spaces — Bangalore, working across India.',
      featuredProjects: [
        {
          name: 'The Courtyard Residence',
          location: 'Indiranagar, Bangalore',
          type: 'Full Residential Turnkey',
          image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
          squareFeet: '6,800 sq.ft',
        },
        {
          name: 'Sadashivanagar Sky Penthouse',
          location: 'Sadashivanagar, Bangalore',
          type: 'Luxury Penthouse Interiors',
          image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85',
          squareFeet: 'Penthouse Suite',
        },
        {
          name: 'Atelier No. 7 & Private Gallery',
          location: 'Lavelle Road, Bangalore',
          type: 'Commercial Fit-Out',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=85',
          squareFeet: '4,200 sq.ft',
        },
      ],
      services: ['Complete Home Interiors (Turnkey)', 'Home Renovation & Remodeling', 'Bespoke Millwork & Built-Ins', 'Commercial & Boutique Spaces'],
      processSteps: ['Understanding How You Live', 'Visualizing Your Home', 'Precision On-Site Build', 'Welcome to Your New Home'],
      whatsappPrompt: 'Hi Studio Samaya, I came across your website and would like to discuss a commission for my project.',
    },
  },
  {
    id: 'bheema-interiors',
    number: '03',
    title: 'Bheema Modular Kitchen & Interiors',
    tagline: 'Precision modular kitchens, acoustic panelling, and modern living room carpentry in Bengaluru.',
    description: 'A high-conversion digital presence engineered to showcase factory-direct modular kitchen craftsmanship, modern entertainment walls, and capture instant quotation requests.',
    studioArchetype: 'Modular Kitchen & Full Home Interior Studio',
    clientLocation: 'Munnekollal / Marathahalli, Bengaluru',
    focus: ['Modular kitchen showcase', 'Lead generation & instant quotes', 'Service clarity', 'Fast mobile access'],
    builtWith: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    status: 'Client Website · Live',
    liveUrl: 'https://bheema-interiors.vercel.app/',
    heroPreviewImage: 'https://bheema-interiors.vercel.app/media/kitchen-sage.webp',
    desktopScreenshot: 'https://bheema-interiors.vercel.app/media/kitchen-sage.webp',
    mobileScreenshot: 'https://bheema-interiors.vercel.app/media/bedroom-panel.webp',
    detailShots: [
      {
        id: 'b-d1',
        title: 'Sage Green Modular Kitchen Suite',
        caption: 'Factory-calibrated tandem drawer systems, soft-close Blum fittings, and durable quartz countertop finishes.',
        imageUrl: 'https://bheema-interiors.vercel.app/media/kitchen-sage.webp',
        aspect: '16/9',
      },
      {
        id: 'b-d2',
        title: 'Evening Living Lounge & Atmospheric Lighting',
        caption: 'Warm layered lighting paired with bespoke acoustic louvers and contemporary entertainment joinery.',
        imageUrl: 'https://bheema-interiors.vercel.app/media/living-evening.webp',
        aspect: '16/9',
      },
      {
        id: 'b-d3',
        title: 'Acoustic Bedroom Fluted Wall Panelling',
        caption: 'Textured wood slat headboard wall with concealed ambient LED strip lighting for modern master bedrooms.',
        imageUrl: 'https://bheema-interiors.vercel.app/media/bedroom-panel.webp',
        aspect: '4/3',
      },
      {
        id: 'b-d4',
        title: 'Chevron Pattern Geometric Wardrobes',
        caption: 'Precision CNC-machined chevron veneer finish with integrated full-height dressing mirror.',
        imageUrl: 'https://bheema-interiors.vercel.app/media/wardrobe-chevron.webp',
        aspect: '4/3',
      },
      {
        id: 'b-d5',
        title: 'Slatted Wood Television Feature Wall',
        caption: 'Contemporary media console wall with floating under-drawers and hidden cabling channels.',
        imageUrl: 'https://bheema-interiors.vercel.app/media/tv-wood-wall.webp',
        aspect: '16/9',
      },
      {
        id: 'b-d6',
        title: 'Dining Partition & Foyer Screen',
        caption: 'Architectural wood slat room divider providing visual separation between living and dining zones.',
        imageUrl: 'https://bheema-interiors.vercel.app/media/dining-passage.webp',
        aspect: '4/3',
      },
    ],
    caseStudy: {
      goal: 'Build an authoritative, high-converting digital storefront for Bheema Modular Kitchen & Interiors that clearly showcases factory engineering quality and makes quote requests effortless.',
      theExperience: [
        'Curated gallery of modular kitchen finishes (sage, teal, wood grains, matte acrylic)',
        'Clear breakdown of hardware standards, tandem boxes, and moisture-resistant carcass materials',
        'Transparent 4-step workflow from site measurement to on-site assembly',
        'Immediate quote and consultation request via WhatsApp pre-filled with project scope',
        'Optimized for mobile viewing to accommodate clients browsing from WhatsApp chats',
      ],
      designApproach: 'Clean, structured editorial grid with tactile warm greige tones, crisp typography, and high-contrast imagery that emphasizes fit-and-finish precision.',
      challenge: 'Prospective clients comparing modular kitchen vendors needed clear visual proof of finish quality and a fast, non-intimidating way to request preliminary estimates.',
      approach: 'We developed an intuitive showcase highlighting modular kitchen layouts (L-shaped, parallel, island), reinforced durability credentials, and engineered instant WhatsApp quotation triggers.',
      design: 'High-contrast imagery and warm architectural stone palettes that distinguish Bheema from generic low-quality carpenter directories.',
      build: 'Lightweight Next.js architecture with next-gen image optimization, lightning-fast interactive drawers, and clean semantic markup.',
      experience: 'Visitors can inspect drawer ergonomics, explore wardrobe options, and immediately connect via WhatsApp or phone with one tap.',
      phases: [
        {
          number: '01',
          title: 'Modular Offering Analysis',
          desc: 'Define key client personas (new apartment owners, kitchen renovations) and identify high-converting modular finishes.',
          deliverable: 'Content structure & modular product hierarchy',
        },
        {
          number: '02',
          title: 'Visual Asset Curation',
          desc: 'Select standout photography of completed modular kitchens, TV feature walls, and custom wardrobes in Bangalore.',
          deliverable: 'High-resolution image catalog & specifications',
        },
        {
          number: '03',
          title: 'Conversion-Focused Interface Design',
          desc: 'Design mobile-optimized layouts with persistent quick-quote triggers and direct WhatsApp access.',
          deliverable: 'Figma prototypes & responsive design specs',
        },
        {
          number: '04',
          title: 'High-Velocity Web Build',
          desc: 'Code with React, TypeScript, and Tailwind CSS ensuring instantaneous page speed and smooth micro-interactions.',
          deliverable: 'Fully responsive, accessible codebase',
        },
        {
          number: '05',
          title: 'Local SEO & Direct Inquiries',
          desc: 'Deploy on Vercel with structured schema for modular kitchen designers in Marathahalli/Bengaluru.',
          deliverable: 'Live site deployment & inquiry analytics',
        },
      ],
    },
    liveDemoHighlights: {
      heroTitle: 'Factory-direct modular kitchens & bespoke home interiors.',
      heroSubtitle: 'Engineered for durability, modern ergonomics, and timeless style across Bengaluru homes.',
      featuredProjects: [
        {
          name: 'Sage Green Modular Kitchen',
          location: 'Munnekollal, Bengaluru',
          type: 'Modular Kitchen Suite',
          image: 'https://bheema-interiors.vercel.app/media/kitchen-sage.webp',
          squareFeet: 'Parallel Layout',
        },
        {
          name: 'Fluted Acoustic Bedroom Suite',
          location: 'Marathahalli, Bengaluru',
          type: 'Master Bedroom Carpentry',
          image: 'https://bheema-interiors.vercel.app/media/bedroom-panel.webp',
          squareFeet: 'Master Bedroom',
        },
        {
          name: 'Geometric Chevron Wardrobes',
          location: 'Varthur Road Apartment',
          type: 'Custom Storage Joinery',
          image: 'https://bheema-interiors.vercel.app/media/wardrobe-chevron.webp',
          squareFeet: 'Full Height Storage',
        },
      ],
      services: ['Modular Kitchens', 'Custom Wardrobes & Storage', 'Living Room Entertainment Units', 'Foyer & Partitions'],
      processSteps: ['Site Measurement & Brief', '3D Layout & Quotation', 'Factory Precision Manufacturing', 'On-Site Installation'],
      whatsappPrompt: 'Hi Bheema Interiors, I came across your website and would like to discuss my modular kitchen and interior requirements.',
    },
  },
];

export const getProjectById = (id: string): PortfolioProject | undefined => {
  return PORTFOLIO_PROJECTS.find(
    (p) =>
      p.id === id ||
      (id === 'project-01' && p.id === 'geetha-interiors') ||
      (id === 'project-02' && p.id === 'studio-samaya') ||
      (id === 'project-03' && p.id === 'bheema-interiors')
  );
};

// ==========================================
// 2. SERVICES SECTION
// ==========================================
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'AI-Accelerated Web Design & Engineering',
    badge: 'Core Offering',
    description: 'Bespoke websites, from first concept to a live site, in days rather than months.',
    deliverables: [
      'Rapid AI-powered prototyping & bespoke design curation',
      'Modern Next.js & React engineering with zero bloated templates',
      'Tailored for clinics, consultancies, retail, services & modern businesses',
      'Sub-second mobile speed & responsive device optimization',
    ],
    icon: 'Layout',
  },
  {
    id: 'local-seo',
    title: 'Local SEO & Google Presence',
    badge: 'Discoverability',
    description: 'So local clients searching for your business can find you on Google and trust what they see.',
    deliverables: [
      'Google Business Profile audit & optimization',
      'Clean local schema (JSON-LD) structured metadata',
      'Targeted on-page SEO for high-intent neighborhood keywords',
      'Fast Core Web Vitals to rank higher in local results',
    ],
    icon: 'Search',
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation & Conversion Journeys',
    badge: 'High Conversion',
    description: 'Clear paths to call, enquire, or book a consultation without a long form.',
    deliverables: [
      'Low-friction consultation inquiry flows',
      'Strategic CTA placement at peak interest moments',
      'Qualification steps that filter budget & timeline',
      'Analytics tracking to see what spaces convert best',
    ],
    icon: 'Target',
  },
  {
    id: 'whatsapp-integration',
    title: 'WhatsApp Integration',
    badge: 'Instant Enquiries',
    description: 'One tap from the page into a WhatsApp chat that already says which project they liked.',
    deliverables: [
      'One-tap mobile sticky WhatsApp engagement bar',
      'Pre-populated enquiry text based on page viewed',
      'Desktop click-to-chat QR and direct routing',
      'Direct client communication with zero barrier',
    ],
    icon: 'MessageCircle',
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance & Care',
    badge: 'Ongoing Support',
    description: 'New projects, copy changes, and performance checks after launch.',
    deliverables: [
      'Adding newly completed project photographs',
      'Copy adjustments, award updates, and press features',
      'Continuous security checks and dependency updates',
      'Direct priority WhatsApp support when you need changes',
    ],
    icon: 'ShieldCheck',
  },
  {
    id: 'ai-search-ready',
    title: 'AI-Ready Content & Search',
    badge: 'Future-Proof',
    description: 'Content structured so Google and AI search can understand and surface the business.',
    deliverables: [
      'Semantic HTML5 structure for AI indexers',
      'Clear entity definitions (services, geography, expertise)',
      'FAQ and structured schema for rich snippet answers',
      'LLM-friendly content hierarchy',
    ],
    icon: 'Sparkles',
  },
];

// ==========================================
// 3. VALUE FRAMEWORK ("What I Actually Care About")
// ==========================================
export const VALUE_FRAMEWORK: ValueFrameworkItem[] = [
  {
    pillar: '01',
    title: 'Look Credible',
    summary: 'Professional visual presentation',
    description: 'A bespoke website that immediately reflects the quality, finish, and aesthetic taste of your offline projects. First impressions define your pricing leverage.',
    metricFocus: 'Elevates perceived fee authority',
  },
  {
    pillar: '02',
    title: 'Show the Work',
    summary: 'Clear portfolio and service structure',
    description: 'Curated galleries organized clearly by what you sell. Clients should quickly see work that matches what they need.',
    metricFocus: 'Engaging, low-friction project discovery',
  },
  {
    pillar: '03',
    title: 'Get Discovered',
    summary: 'Strong technical and local SEO foundation',
    description: 'Clean code, lightning-fast mobile speeds, and accurate local structured data so prospective clients searching in your city find your practice.',
    metricFocus: 'High-intent organic search traffic',
  },
  {
    pillar: '04',
    title: 'Generate Enquiries',
    summary: 'Calls, WhatsApp and enquiry flows built in',
    description: 'Every page provides an inviting, effortless next step. Connect warm prospects directly to your WhatsApp with one tap while they are inspired.',
    metricFocus: 'Direct, qualified client conversations',
  },
];

// ==========================================
// 4. TECHNOLOGY SECTION
// ==========================================
export const TECH_CATEGORIES = [
  {
    category: 'Frontend Architecture',
    summary: 'Fast, responsive, type-safe interfaces designed for longevity.',
    items: [
      { name: 'Next.js & React', role: 'Fast server-side rendering and client transitions' },
      { name: 'TypeScript', role: 'Rock-solid reliability and clean code structure' },
      { name: 'Tailwind CSS', role: 'Lightweight utility styling with zero bloat' },
    ],
  },
  {
    category: 'Infrastructure & Deployment',
    summary: 'Global edge networks ensuring instant load times worldwide.',
    items: [
      { name: 'Vercel / Cloud Edge', role: 'Global content delivery network and instant asset caching' },
      { name: 'Git & GitHub', role: 'Version control and transparent deployment history' },
    ],
  },
  {
    category: 'Analytics & Discoverability',
    summary: 'Built-in visibility tracking without heavy trackers.',
    items: [
      { name: 'Google Analytics & Search Console', role: 'Insight into traffic sources and search rankings' },
      { name: 'Structured Schema (JSON-LD)', role: 'Rich snippets and Google Business Profile indexing' },
    ],
  },
  {
    category: 'Conversion & Integrations',
    summary: 'Connecting visitors directly into your business workflow.',
    items: [
      { name: 'Direct WhatsApp Routing', role: 'Instant mobile messaging with prefilled context' },
      { name: 'Fast Email & Forms', role: 'Frictionless consultation submissions' },
      { name: 'Google Maps Embeds', role: 'Local business visibility and direction routing' },
    ],
  },
];

// ==========================================
// 5. PROCESS
// ==========================================
export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Understand',
    duration: 'Phase 01',
    description: 'We discuss your business, the customers you want to win, your current intake process, and what makes your work distinct.',
    points: [
      'Identify target client bracket & project scale',
      'Audit existing digital touchpoints or Instagram assets',
      'Define clear website objectives and conversion channels',
    ],
  },
  {
    step: '02',
    title: 'Plan',
    duration: 'Phase 02',
    description: 'We define the page structure, organize your work into clear collections, and plan the exact journey visitors will take to reach you.',
    points: [
      'Curate your best work and proof points',
      'Map out mobile and desktop user flows',
      'Define enquiry & WhatsApp touchpoints',
    ],
  },
  {
    step: '03',
    title: 'Design',
    duration: 'Phase 03',
    description: 'I design a bespoke, high-fidelity visual experience tailored to your aesthetic. Generous whitespace, refined typography, and thoughtful layouts.',
    points: [
      'Tailored typography and material color palette',
      'Desktop & mobile responsive layouts',
      'Design review and alignment before writing code',
    ],
  },
  {
    step: '04',
    title: 'Build',
    duration: 'Phase 04',
    description: 'I build the website with modern, clean code. Every image is optimized for rapid mobile loading, and technical SEO foundations are baked in.',
    points: [
      'Modern, performant code (Next.js / React / Tailwind)',
      'Sub-second mobile loading with responsive images',
      'Structured metadata, OpenGraph cards & WhatsApp linking',
    ],
  },
  {
    step: '05',
    title: 'Launch & Improve',
    duration: 'Phase 05',
    description: 'We test across devices, launch the website on your custom domain, verify Google indexing, and provide ongoing updates as you complete new projects.',
    points: [
      'Comprehensive multi-device QA & speed test',
      'Domain configuration and SSL deployment',
      'Ongoing support for new project additions',
    ],
  },
];

// ==========================================
// 6. WHY WORK WITH ME
// ==========================================
export const WHY_WORK_WITH_ME = [
  {
    title: 'Direct communication',
    description: 'You work directly with the person designing and building your website. No account managers, no junior handoffs, no lost context.',
  },
  {
    title: 'Business-first thinking',
    description: 'The website is built around what your business needs—generating enquiries, showcasing work, and building credibility—not just what looks pretty.',
  },
  {
    title: 'Custom, not cookie-cutter',
    description: 'Each website is thoughtfully designed around your specific business and brand rather than dropped into an overused, generic WordPress template.',
  },
  {
    title: 'Long-term support',
    description: 'The relationship doesn\'t end when the website goes live. I remain available to add newly completed projects, refine copy, and maintain performance.',
  },
];

// ==========================================
// 7. FREQUENTLY ASKED QUESTIONS
// ==========================================
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Do you only work with a specific industry?',
    answer: 'No. I work with any business that depends on credibility, clear presentation, and direct client enquiries — clinics, consultancies, retail, local services, and more. Interior and architecture brands happen to be among the live case studies.',
    highlight: 'Any modern business',
  },
  {
    question: 'How do you design and make websites live using AI?',
    answer: 'I leverage an AI-accelerated engineering workflow. Modern AI tools help me rapidly draft architectural wireframes, iterate on visual layouts, and scaffold clean production code in days rather than waiting months for traditional agencies. Every screen, typography pairing, mobile viewport, and WhatsApp conversion route is then hand-refined with software engineering rigor.',
    highlight: 'Live in days, not months',
  },
  {
    question: 'Do you work with businesses outside Bangalore?',
    answer: 'Yes. Projects are handled remotely across India, with communication, design reviews, and delivery managed seamlessly through video calls and WhatsApp.',
    highlight: 'Remote across India',
  },
  {
    question: 'Do you only build websites?',
    answer: 'Websites are the core offering, but I also help with local SEO, Google Business Profile presence, lead capture mechanisms, and direct WhatsApp enquiry integrations.',
    highlight: 'Full digital presence',
  },
  {
    question: 'Can you work with an existing website?',
    answer: 'Yes. Existing websites can be redesigned, rebuilt with modern high-performance code, or incrementally improved depending on what will drive the highest impact for your business.',
    highlight: 'Redesign or rebuild',
  },
  {
    question: 'What happens before development starts?',
    answer: 'The business goals, target audience, project photography, and desired customer journey are thoroughly discussed and aligned before the design and build process begins.',
    highlight: 'Aligned before coding',
  },
  {
    question: 'How long does a project take?',
    answer: 'Thanks to AI-accelerated development and focused single-principal collaboration, typical projects go live in 1 to 2 weeks (compared to 6–12 weeks at traditional agencies), depending on content readiness and scope.',
    highlight: 'Fast 1–2 week turnaround',
  },
];
