import { Menu, X } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import hzLogoWord from '../../data/logo/hz  logo red.png';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { id: 'home', label: '首页' },
      { id: 'about', label: '关于我们' },
      { id: 'services', label: '核心业务' },
      { id: 'cases', label: '项目案例' },
      { id: 'talent', label: '人才发展' },
      { id: 'contact', label: '联系我们' },
    ],
    []
  );

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  // Scrollspy: monitor scroll position and update activeSection
  useEffect(() => {
    let ticking = false;

    const ids = navItems.map((n) => n.id);

    const updateActive = () => {
      const viewportMid = window.scrollY + window.innerHeight / 2;
      let found = ids[0] || 'home';

      for (let i = 0; i < ids.length; i++) {
        const el = document.getElementById(ids[i]);
        if (!el) continue;
        const top = el.offsetTop;
        const nextEl = document.getElementById(ids[i + 1]);
        const nextTop = nextEl ? nextEl.offsetTop : Number.POSITIVE_INFINITY;

        if (viewportMid >= top && viewportMid < nextTop) {
          found = ids[i];
          break;
        }
      }

      if (found !== activeSection) {
        setActiveSection(found);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          updateActive();
          ticking = false;
        });
      }
    };

    // initial
    updateActive();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateActive);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateActive);
    };
  }, [activeSection, navItems, setActiveSection]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #E5E7EB' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="h-12 flex items-center">
              <img src={hzLogoWord} alt="红蛛科技 Red Spider Technology" className="h-full w-auto object-contain" />
            </div>
          </div>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-red-600 text-white'
                    : 'text-[#111827] hover:text-red-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-[#111827] p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #E5E7EB' }}>
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-red-600 text-white'
                    : 'text-[#111827] hover:text-red-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
