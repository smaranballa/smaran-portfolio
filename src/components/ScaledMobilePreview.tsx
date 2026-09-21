import React, { useEffect, useRef, useState } from 'react';

interface ScaledMobilePreviewProps {
  url?: string;
  title: string;
  nativeWidth?: number;
  nativeHeight?: number;
}

/**
 * Renders a live site at a true mobile viewport size, then scales it to fit
 * the phone screen frame — avoids 100vh / letterboxing black gaps.
 */
export const ScaledMobilePreview: React.FC<ScaledMobilePreviewProps> = ({
  url,
  title,
  nativeWidth = 390,
  nativeHeight = 780,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      if (width > 0) {
        setScale(Math.min(width / nativeWidth, 1));
      }
    };

    update();
    const observer = new ResizeObserver(update);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [nativeWidth]);

  const frameHeight = Math.round(nativeHeight * scale);

  if (!url) {
    return (
      <div className="w-full h-64 bg-[#F4F0E8] flex items-center justify-center text-xs text-[#7A746B]">
        No preview available
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full relative overflow-hidden bg-white select-none"
      style={{ height: `${frameHeight}px` }}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-[#FBF9F5] flex flex-col items-center justify-center gap-3 z-10">
          <div className="w-6 h-6 border-2 border-[#161513]/20 border-t-[#161513] rounded-full animate-spin" />
          <span className="text-xs font-mono text-[#78726A]">Loading mobile view...</span>
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
