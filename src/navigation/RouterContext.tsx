import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type PageRoute = 'home' | 'work' | 'services' | 'process' | 'about' | 'contact' | 'project-detail';

interface RouterContextType {
  currentPage: PageRoute;
  currentProjectId?: string;
  navigate: (page: PageRoute, projectId?: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

const BASE = import.meta.env.BASE_URL || '/';

/** Strip Vite/GitHub Pages base prefix → route segment like `work/geetha-interiors` */
const getPathSegments = (): string => {
  const basePath = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  let pathname = window.location.pathname;

  if (basePath && pathname.startsWith(basePath)) {
    pathname = pathname.slice(basePath.length) || '/';
  }

  return pathname.replace(/^\/+|\/+$/g, '');
};

const pathToUrl = (page: PageRoute, projectId?: string): string => {
  const prefix = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;

  if (page === 'project-detail' && projectId) {
    return `${prefix}/work/${projectId}`;
  }
  if (page === 'home') {
    return prefix ? `${prefix}/` : '/';
  }
  return `${prefix}/${page}`;
};

const parseLocation = (): { page: PageRoute; projectId?: string } => {
  // Migrate old hash URLs (#/work/...) to clean paths once.
  if (window.location.hash.startsWith('#/')) {
    const hashPath = window.location.hash.slice(1); // /work/...
    const prefix = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
    const clean = `${prefix}${hashPath.startsWith('/') ? hashPath : `/${hashPath}`}`;
    window.history.replaceState(null, '', clean);
  }

  const segments = getPathSegments();

  if (!segments) {
    return { page: 'home' };
  }

  if (segments.startsWith('work/')) {
    const id = segments.slice('work/'.length);
    if (id) {
      return { page: 'project-detail', projectId: id };
    }
    return { page: 'work' };
  }

  if (['work', 'services', 'process', 'about', 'contact'].includes(segments)) {
    return { page: segments as PageRoute };
  }

  return { page: 'home' };
};

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initial = parseLocation();
  const [currentPage, setCurrentPage] = useState<PageRoute>(initial.page);
  const [currentProjectId, setCurrentProjectId] = useState<string | undefined>(initial.projectId);

  const syncFromLocation = useCallback(() => {
    const { page, projectId } = parseLocation();
    setCurrentPage(page);
    setCurrentProjectId(projectId);
  }, []);

  useEffect(() => {
    syncFromLocation();
    window.addEventListener('popstate', syncFromLocation);
    return () => window.removeEventListener('popstate', syncFromLocation);
  }, [syncFromLocation]);

  const navigate = (page: PageRoute, projectId?: string) => {
    setCurrentPage(page);
    setCurrentProjectId(projectId);
    window.history.pushState(null, '', pathToUrl(page, projectId));
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
