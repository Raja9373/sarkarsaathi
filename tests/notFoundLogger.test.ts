import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import {
  logNotFoundHit,
  getRecordedNotFoundHits,
  clearRecordedNotFoundHits,
  resetNotFoundLoggerDedupeState,
} from '../src/utils/notFoundLogger';

describe('NotFoundView 404 Hit Logger', () => {
  const originalWindow = (globalThis as any).window;
  const originalDocument = (globalThis as any).document;
  const originalNavigator = (globalThis as any).navigator;
  const originalConsoleWarn = console.warn;

  let storageMap: Map<string, string>;
  let warnCalls: any[][];
  let gtagCalls: any[][];
  let dataLayerItems: any[];
  let beaconCalls: Array<{ url: string; data: any }>;

  beforeEach(() => {
    resetNotFoundLoggerDedupeState();
    storageMap = new Map();
    warnCalls = [];
    gtagCalls = [];
    dataLayerItems = [];
    beaconCalls = [];

    console.warn = (...args: any[]) => {
      warnCalls.push(args);
    };

    (globalThis as any).window = {
      location: {
        href: 'https://sarkarsaathi.org/missing/gsc-route?ref=google',
        origin: 'https://sarkarsaathi.org',
        pathname: '/missing/gsc-route',
        search: '?ref=google',
        hash: '',
      },
      localStorage: {
        getItem: (k: string) => storageMap.get(k) ?? null,
        setItem: (k: string, v: string) => {
          storageMap.set(k, v);
        },
        removeItem: (k: string) => {
          storageMap.delete(k);
        },
      },
      gtag: (...args: any[]) => {
        gtagCalls.push(args);
      },
      dataLayer: dataLayerItems,
    };

    (globalThis as any).document = {
      referrer: 'https://www.google.com/',
    };

    Object.defineProperty(globalThis, 'navigator', {
      configurable: true,
      value: {
        userAgent: 'TestAgent/1.0',
        sendBeacon: (url: string, data: any) => {
          beaconCalls.push({ url, data });
          return true;
        },
      },
    });
  });

  afterEach(() => {
    console.warn = originalConsoleWarn;
    (globalThis as any).window = originalWindow;
    (globalThis as any).document = originalDocument;
    Object.defineProperty(globalThis, 'navigator', {
      configurable: true,
      value: originalNavigator,
    });
  });

  it('1. Logs structured 404 event to console.warn, localStorage, gtag, and dataLayer', () => {
    const hit = logNotFoundHit({ routeContext: 'unmatched-route' });
    assert.ok(hit);
    assert.equal(hit.statusCode, 404);
    assert.equal(hit.pathname, '/missing/gsc-route');
    assert.equal(hit.requestedUrl, 'https://sarkarsaathi.org/missing/gsc-route?ref=google');
    assert.equal(hit.referrer, 'https://www.google.com/');
    assert.equal(warnCalls.length, 1);
    assert.equal(gtagCalls.length, 1);
    assert.equal(gtagCalls[0][1], 'page_not_found_404');
    assert.equal(dataLayerItems.length, 1);
    assert.equal(dataLayerItems[0].pathname, '/missing/gsc-route');

    const recorded = getRecordedNotFoundHits();
    assert.equal(recorded.length, 1);
    assert.equal(recorded[0].requestedUrl, 'https://sarkarsaathi.org/missing/gsc-route?ref=google');

    clearRecordedNotFoundHits();
    assert.equal(getRecordedNotFoundHits().length, 0);
  });

  it('2. Deduplicates immediate double-invocation for the same URL (React StrictMode safety)', () => {
    const first = logNotFoundHit({ routeContext: 'unmatched-route' });
    const second = logNotFoundHit({ routeContext: 'unmatched-route' });
    assert.ok(first);
    assert.equal(second, null);
    assert.equal(warnCalls.length, 1);
  });

  it('3. Dispatches beacon to safe monitoring endpoint and blocks unsafe schemes', () => {
    const blocked = logNotFoundHit({
      requestedUrl: 'https://sarkarsaathi.org/bad-1',
      monitoringEndpoint: 'javascript:alert(1)',
    });
    assert.ok(blocked);
    assert.equal(beaconCalls.length, 0);

    const allowed = logNotFoundHit({
      requestedUrl: 'https://sarkarsaathi.org/bad-2',
      monitoringEndpoint: 'https://monitoring.sarkarsaathi.org/404-events',
    });
    assert.ok(allowed);
    assert.equal(beaconCalls.length, 1);
    assert.equal(beaconCalls[0].url, 'https://monitoring.sarkarsaathi.org/404-events');
  });
});
