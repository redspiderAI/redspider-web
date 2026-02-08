import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Cases from './components/Cases';
import Talent from './components/Talent';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingPanel from './components/FloatingPanel';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('in-view');
          } else {
            // keep removal optional; here we remove so re-scrolling replays the animation
            el.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );

    const els = document.querySelectorAll('.anim-section');
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Diagnostics: after navigation, detect elements overflowing viewport width
  useEffect(() => {
    const detectOverflow = () => {
      const overflows: Array<{el: Element; r: DOMRect}> = [];
      const all = Array.from(document.querySelectorAll('body *')) as Element[];
      const vw = window.innerWidth;
      for (const el of all) {
        try {
          const he = el as HTMLElement;
          // ignore invisible or zero-size elements
          if (!he.offsetWidth || !he.offsetHeight) continue;
          const style = window.getComputedStyle(he);
          if (style.visibility === 'hidden' || style.display === 'none') continue;
          // ignore fixed-positioned elements (tooltips, modals) and elements intentionally overflowing
          if (style.position === 'fixed' || style.position === 'sticky') continue;
          // ignore elements inside animated sections or elements that are transformed (they may be temporarily off-screen)
          if (he.closest && he.closest('.anim-section')) continue;
          // ignore elements that have CSS transforms applied or whose computed transform is not 'none'
          if (style.transform && style.transform !== 'none') continue;
          // ignore elements that intentionally allow overflow on the x axis
          if (style.overflowX === 'visible') continue;
          const rect = he.getBoundingClientRect();
          // only count elements that start inside viewport but extend beyond right edge
          if (rect.left < vw && rect.right > vw + 0.5) {
            overflows.push({ el: he, r: rect });
            he.style.outline = '2px solid rgba(255,0,0,0.85)';
          } else {
            if (he.style.outline && he.style.outline.indexOf('rgba(255,0,0') >= 0) he.style.outline = '';
          }
        } catch {
          // ignore
        }
      }
      if (overflows.length > 0) {
        console.warn('Detected overflow elements (right > viewport):', overflows.map(o => ({tag: o.el.tagName, rect: o.r}))); 
      } else {
        console.info('No overflowing elements detected.');
      }
      // remove outlines after 3s
      setTimeout(() => {
        for (const { el } of overflows) {
          try { (el as HTMLElement).style.outline = ''; } catch { /* ignore */ }
        }
      }, 3000);
    };

    // run shortly after scrollIntoView completes
    const t = setTimeout(detectOverflow, 300);
    return () => clearTimeout(t);
  }, [activeSection]);

  return (
    <div className="min-h-screen "style={{ backgroundColor: '#131114'} as React.CSSProperties}>
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      <Services />
      <Cases />
      <Talent />
      <Contact />
      <Footer />
      <FloatingPanel />
    </div>
  );
}

export default App;
