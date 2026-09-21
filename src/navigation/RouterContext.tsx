import React, { createContext, useContext, useState, useEffect } from 'react';

export type PageRoute = 'home' | 'work' | 'services' | 'process' | 'about' | 'contact' | 'project-detail';

interface RouterContextType {
  currentPage: PageRoute;
  currentProjectId?: string;
  navigate: (page: PageRoute, projectId?: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [currentProjectId, setCurrentProjectId] = useState<string | undefined>(undefined);

  // Sync with window.location.hash
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').trim();
      if (!hash) {
        setCurrentPage('home');
        setCurrentProjectId(undefined);
        return;
      }

      if (hash.startsWith('work/')) {
        const id = hash.replace('work/', '');
        setCurrentPage('project-detail');
        setCurrentProjectId(id);
      } else if (['work', 'services', 'process', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageRoute);
        setCurrentProjectId(undefined);
      } else {
        setCurrentPage('home');
        setCurrentProjectId(undefined);
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const navigate = (page: PageRoute, projectId?: string) => {
    setCurrentPage(page);
    setCurrentProjectId(projectId);

    if (page === 'project-detail' && projectId) {
      window.location.hash = `#/work/${projectId}`;
    } else if (page === 'home') {
      window.location.hash = '#/';
    } else {
      window.location.hash = `#/${page}`;
    }

    // Scroll smoothly to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentPage, currentProjectId, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
