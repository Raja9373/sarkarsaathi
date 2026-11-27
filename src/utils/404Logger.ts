export interface NotFoundHitEvent {
  event: 'page_not_found_404';
  statusCode: 404;
  requestedUrl: string;
  pathname: string;
  search: string;
  hash: string;
  referrer: string;
  routeContext?: string;
  timestamp: string;
  userAgent: string;
}

export interface LogNotFoundOptions {
  requestedUrl?: string;
  routeContext?: string;
  monitoringEndpoint?: string;
  logToConsole?: boolean;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Array<Record<string, unknown>>;
    __sarkarsaathiGet404Logs?: () => NotFoundHitEvent[];
  }
}

const STORAGE_KEY = 'sarkarsaathi_404_hits';
const MAX_STORED_HITS = 100;
const DEDUPE_WINDOW_MS = 2000;

let lastLoggedKey = '';
let lastLoggedAt = 0;

function isSafeMonitoringEndpoint(endpoint: string): boolean {
  const trimmed = endpoint.trim();
  if (!trimmed) return false;
  if (trimmed.startsWith('/')) return !trimmed.startsWith('//');
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'https:' || (parsed.protocol === 'http:' && parsed.hostname === 'localhost');
  } catch {
    return false;
  }
}

function getConfiguredMonitoringEndpoint(override?: string): string | null {
  if (typeof override === 'string' && override.trim()) return override.trim();
  try {
    const envVal = (import.meta as unknown as { env?: Record<string, string | undefined> })?.env?.VITE_404_MONITORING_ENDPOINT;
    if (typeof envVal === 'string' && envVal.trim()) {
      return envVal.trim();
    }
    return null;
  } catch {
    return null;
  }
}

export function getRecordedNotFoundHits(): NotFoundHitEvent[] {
  if (typeof window === 'undefined' || !window.localStorage) return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function clearRecordedNotFoundHits(): void {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore storage access errors (private browsing / restricted iframes)
  }
}

export function resetNotFoundLoggerDedupeState(): void {
  lastLoggedKey = '';
  lastLoggedAt = 0;
}

function persistHitLocally(hit: NotFoundHitEvent): void {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    const existing = getRecordedNotFoundHits();
    const updated = [...existing, hit].slice(-MAX_STORED_HITS);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // Ignore quota or storage security errors
  }
}

function dispatchAnalyticsEvents(hit: NotFoundHitEvent): void {
  if (typeof window === 'undefined') return;

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_not_found_404', {
        page_location: hit.requestedUrl,
        page_path: hit.pathname,
        page_referrer: hit.referrer,
        route_context: hit.routeContext || 'unknown',
        non_interaction: true,
      });
    }
  } catch {
    // Never block rendering on analytics dispatch failures
  }

  try {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'page_not_found_404',
        statusCode: 404,
        requestedUrl: hit.requestedUrl,
        pathname: hit.pathname,
        referrer: hit.referrer,
        routeContext: hit.routeContext,
        timestamp: hit.timestamp,
      });
    }
  } catch {
    // Ignore dataLayer push failures
  }
}

function sendToExternalEndpoint(hit: NotFoundHitEvent, endpoint: string): void {
  const serialized = JSON.stringify(hit);
  try {
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      const blob = new Blob([serialized], { type: 'application/json' });
      const queued = navigator.sendBeacon(endpoint, blob);
      if (queued) return;
    }
  } catch {
    // Fall back to keepalive fetch below
  }

  try {
    if (typeof fetch === 'function') {
      void fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: serialized,
        keepalive: true,
      }).catch(() => {
        // Swallow network monitoring failures silently
      });
    }
  } catch {
    // Swallow monitoring dispatch failures silently
  }
}

/**
 * Captures the current URL, referrer, and timestamp when NotFoundView is rendered.
 * Always stores the event in localStorage and dispatches to GA4/GTM if available.
 * If an optional external endpoint is configured via VITE_404_MONITORING_ENDPOINT,
 * forwards the payload there; otherwise logs the 404 details to the browser console.
 */
export function logNotFoundHit(options: LogNotFoundOptions = {}): NotFoundHitEvent | null {
  if (typeof window === 'undefined') return null;

  const loc = window.location;
  const requestedUrl = (options.requestedUrl || loc.href || '').slice(0, 2048);

  let pathname = loc.pathname || '/';
  let search = loc.search || '';
  let hash = loc.hash || '';

  if (options.requestedUrl) {
    try {
      const parsed = new URL(options.requestedUrl, loc.origin || 'https://sarkarsaathi.org');
      pathname = parsed.pathname;
      search = parsed.search;
      hash = parsed.hash;
    } catch {
      pathname = options.requestedUrl;
    }
  }

  // Deduplicate immediate duplicate logs (e.g. React StrictMode double effect invocation)
  const now = Date.now();
  const dedupeKey = `${requestedUrl}|${options.routeContext || ''}`;
  if (dedupeKey === lastLoggedKey && now - lastLoggedAt < DEDUPE_WINDOW_MS) {
    return null;
  }
  lastLoggedKey = dedupeKey;
  lastLoggedAt = now;

  const hit: NotFoundHitEvent = {
    event: 'page_not_found_404',
    statusCode: 404,
    requestedUrl,
    pathname,
    search,
    hash,
    referrer: typeof document !== 'undefined' ? (document.referrer || '').slice(0, 2048) : '',
    routeContext: options.routeContext,
    timestamp: new Date().toISOString(),
    userAgent: typeof navigator !== 'undefined' ? (navigator.userAgent || '').slice(0, 512) : '',
  };

  persistHitLocally(hit);
  dispatchAnalyticsEvents(hit);

  const endpoint = getConfiguredMonitoringEndpoint(options.monitoringEndpoint);
  const hasExternalEndpoint = Boolean(endpoint && isSafeMonitoringEndpoint(endpoint));

  if (hasExternalEndpoint && endpoint) {
    sendToExternalEndpoint(hit, endpoint);
  }

  const shouldLogToConsole = options.logToConsole ?? !hasExternalEndpoint;
  if (shouldLogToConsole) {
    console.warn('[SarkarSaathi 404 Monitor] Missing route hit:', {
      requestedUrl: hit.requestedUrl,
      pathname: hit.pathname,
      referrer: hit.referrer || '(direct)',
      routeContext: hit.routeContext || 'unmatched-route',
      timestamp: hit.timestamp,
    });
  }

  try {
    window.__sarkarsaathiGet404Logs = getRecordedNotFoundHits;
  } catch {
    // Ignore read-only window environments
  }

  return hit;
}
