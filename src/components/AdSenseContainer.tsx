import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

export type AdFormat = 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';

export interface AdSenseContainerProps {
  /** AdSense publisher client ID (defaults to verified publisher ID) */
  client?: string;
  /** AdSense ad unit slot ID */
  slot?: string;
  /** Ad format / layout mode */
  format?: AdFormat;
  /** Enable full width responsive behavior */
  responsive?: boolean;
  /** In-article or In-feed layout key */
  layoutKey?: string;
  /** Custom CSS class name for the wrapper container */
  className?: string;
  /** Minimum container height to reserve space and eliminate CLS (Cumulative Layout Shift) */
  minHeight?: number | string;
  /** Aspect ratio string (e.g. '728/90', '300/250', '16/9', 'auto') */
  aspectRatio?: string;
  /** Whether to display a subtle Google Publisher-compliant "ADVERTISEMENT" badge */
  showLabel?: boolean;
  /** Optional custom test/preview fallback label */
  fallbackNotice?: string;
}

export const AdSenseContainer: React.FC<AdSenseContainerProps> = ({
  client = 'ca-pub-9048615701580913',
  slot,
  format = 'auto',
  responsive = true,
  layoutKey,
  className = '',
  minHeight,
  aspectRatio,
  showLabel = true,
  fallbackNotice
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const adRef = useRef<HTMLModElement>(null);
  const isPushed = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Derive default min-height & aspect ratio based on format to lock layout and prevent CLS
  const resolvedMinHeight = minHeight ?? (
    format === 'horizontal' ? 90 :
    format === 'rectangle' ? 250 :
    format === 'vertical' ? 600 :
    100
  );

  const resolvedAspectRatio = aspectRatio ?? (
    format === 'horizontal' ? '728 / 90' :
    format === 'rectangle' ? '300 / 250' :
    format === 'vertical' ? '160 / 600' :
    'auto'
  );

  // Lazy loading observer: only initialize ad when near the viewport (250px margin)
  useEffect(() => {
    if (!containerRef.current) return;

    // If IntersectionObserver is not supported, display immediately
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '250px 0px', // Pre-fetch slightly before it enters the viewport
        threshold: 0.01,
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Trigger adsbygoogle push when visible and ins tag is mounted
  useEffect(() => {
    if (!isVisible || !slot || isPushed.current) return;

    try {
      if (typeof window !== 'undefined') {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
        isPushed.current = true;
        setIsLoaded(true);
      }
    } catch (err) {
      console.warn('AdSense loading notice:', err);
      setHasError(true);
    }
  }, [isVisible, slot]);

  return (
    <div
      ref={containerRef}
      className={`adsense-wrapper my-6 relative overflow-hidden flex flex-col items-center justify-center transition-opacity duration-300 ${className}`}
      style={{
        minHeight: typeof resolvedMinHeight === 'number' ? `${resolvedMinHeight}px` : resolvedMinHeight,
        aspectRatio: resolvedAspectRatio !== 'auto' ? resolvedAspectRatio : undefined,
      }}
    >
      {/* Google Policy-Compliant Subtle Ad Label */}
      {showLabel && (
        <div className="w-full flex items-center justify-between px-2 py-0.5 text-[9px] uppercase tracking-wider text-zinc-500 select-none">
          <span>ADVERTISEMENT</span>
          <span className="text-[8px] text-zinc-600">SarkarSaathi.org</span>
        </div>
      )}

      {/* CLS-Proof Ad Slot Container */}
      <div className="w-full h-full flex items-center justify-center bg-zinc-900/40 rounded-xl border border-zinc-800/60 p-1.5 relative overflow-hidden">
        {isVisible && slot ? (
          <ins
            ref={adRef}
            className="adsbygoogle block w-full text-center"
            style={{ display: 'block' }}
            data-ad-client={client}
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive={responsive ? 'true' : 'false'}
            data-ad-layout-key={layoutKey}
          />
        ) : (
          /* Zero-Shift Layout Skeleton Placeholder during lazy pre-load / slot configuration */
          <div className="flex flex-col items-center justify-center text-center p-4 space-y-1.5 opacity-60">
            <div className="w-6 h-6 rounded-full border-2 border-zinc-700 border-t-[#FF6B00] animate-spin" />
            <span className="text-[11px] text-zinc-500 font-medium">
              {fallbackNotice || 'Authorized Ad Unit • Space Reserved'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdSenseContainer;
