import React, { useEffect } from "react";

/**
 * Performance Monitor Component
 * Monitors and logs performance metrics in development mode
 */
const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    if (typeof window === "undefined" || import.meta.env.PROD) return;

    // Monitor page load performance
    window.addEventListener("load", () => {
      if (window.performance && window.performance.timing) {
        const timing = window.performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        const domReadyTime = timing.domContentLoadedEventEnd - timing.navigationStart;
        const renderTime = timing.domComplete - timing.domLoading;

        console.log("⚡ Performance Metrics:");
        console.log(`  📊 Page Load Time: ${loadTime}ms`);
        console.log(`  📊 DOM Ready Time: ${domReadyTime}ms`);
        console.log(`  📊 Render Time: ${renderTime}ms`);
      }

      // Monitor resource loading
      if (window.performance && window.performance.getEntriesByType) {
        const resources = window.performance.getEntriesByType("resource");
        const images = resources.filter((r: any) => r.initiatorType === "img");
        const scripts = resources.filter((r: any) => r.initiatorType === "script");
        const styles = resources.filter((r: any) => r.initiatorType === "link");

        console.log("📦 Resources Loaded:");
        console.log(`  🖼️  Images: ${images.length}`);
        console.log(`  📜 Scripts: ${scripts.length}`);
        console.log(`  🎨 Stylesheets: ${styles.length}`);
      }
    });

    // Monitor Core Web Vitals
    if ("PerformanceObserver" in window) {
      try {
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log(`🎯 LCP: ${Math.round((lastEntry as any).renderTime || (lastEntry as any).loadTime)}ms`);
        });
        lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            console.log(`⚡ FID: ${Math.round(entry.processingStart - entry.startTime)}ms`);
          });
        });
        fidObserver.observe({ type: "first-input", buffered: true });

        // Cumulative Layout Shift
        let clsScore = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsScore += (entry as any).value;
            }
          }
          console.log(`📐 CLS: ${clsScore.toFixed(4)}`);
        });
        clsObserver.observe({ type: "layout-shift", buffered: true });
      } catch (e) {
        // Silently fail if observers not supported
      }
    }
  }, []);

  return null;
};

export default PerformanceMonitor;
