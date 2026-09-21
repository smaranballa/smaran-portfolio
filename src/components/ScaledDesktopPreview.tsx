import React, { useRef, useState, useEffect } from 'react';

interface ScaledDesktopPreviewProps {
  url?: string;
  title: string;
  className?: string;
  nativeWidth?: number;
  nativeHeight?: number;
}

export const ScaledDesktopPreview: React.FC<ScaledDesktopPreviewProps> = ({
  url,
  title,
  className = '',
  nativeWidth = 1280,
  nativeHeight = 820,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      if (width > 0) {
        setScale(Math.min(width / nativeWidth, 1));
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [nativeWidth]);

  // Height must match scaled content exactly — a larger min-height left a black gap below.
  const containerHeight = Math.max(Math.round(nativeHeight * scale), 1);

  if (!url) {
    return (
      <div className="w-full h-80 bg-[#F4F0E8] flex items-center justify-center text-xs text-[#7A746B]">
        No preview available
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`w-full relative overflow-hidden bg-[#F4F0E8] select-none ${className}`}
      style={{ height: `${containerHeight}px` }}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-[#FBF9F5] flex flex-col items-center justify-center gap-3 z-10 transition-opacity">
          <div className="w-6 h-6 border-2 border-[#161513]/20 border-t-[#161513] rounded-full animate-spin" />
          <span className="text-xs font-mono text-[#78726A]">Loading live desktop experience...</span>
        </div>
      )}

      <div
        style={{
          width: `${nativeWidth}px`,
          height: `${nativeHeight}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
        className="absolute top-0 left-0"
      >
        <iframe
          src={url}
          title={title}
          className="w-full h-full border-0 bg-white"
          loading="lazy"
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
};
