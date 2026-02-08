import React, { useState } from 'react';
import { MessageCircle, BookOpen, ChevronUp } from 'lucide-react';
import officialServiceQR from '../../data/contact/官方客服.png';
import masterClassQR from '../../data/contact/名师讲堂.png';
import aiTutorialQR from '../../data/contact/ai教程.png';
import videoAccountQR from '../../data/contact/视频号.png';
export default function FloatingPanel() {
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const togglePanel = (panelName: string) => {
    setActivePanel(activePanel === panelName ? null : panelName);
  };

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">

      {/* Official Service WeChat */}
      <div className="relative">
        <button
          onClick={() => togglePanel('official')}
          className="w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 text-white hover:shadow-xl hover:scale-110"
          aria-label="官方客服"
        >
          <MessageCircle size={36} />
        </button>
        {activePanel === 'official' && (
          <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl p-4 w-56 animate-in fade-in slide-in-from-bottom">
            <p className="text-gray-800 font-semibold mb-3 text-center">官方客服</p>
            <img src={officialServiceQR} alt="官方客服二维码" className="w-full rounded-lg" />
            <p className="text-gray-600 text-sm text-center mt-3">扫码获取专属客服</p>
          </div>
        )}
      </div>

      {/* Master Class */}
      <div className="relative">
        <button
          onClick={() => togglePanel('masterclass')}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 overflow-hidden hover:shadow-xl hover:scale-110"
          aria-label="名师讲堂"
        >
          <img src={videoAccountQR} alt="名师讲堂" className="w-full h-full object-cover" />
        </button>
        {activePanel === 'masterclass' && (
          <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl p-4 w-56 animate-in fade-in slide-in-from-bottom">
            <p className="text-gray-800 font-semibold mb-3 text-center">名师讲堂</p>
            <img src={masterClassQR} alt="名师讲堂二维码" className="w-full rounded-lg" />
            <p className="text-gray-600 text-sm text-center mt-3">扫码观看讲座视频</p>
          </div>
        )}
      </div>

      {/* AI Tutorial */}
      <div className="relative">
        <button
          onClick={() => togglePanel('aitutorial')}
          className="w-14 h-14 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 text-white hover:shadow-xl hover:scale-110"
          aria-label="AI教程"
        >
          <BookOpen size={36} />
        </button>
        {activePanel === 'aitutorial' && (
          <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl p-4 w-56 animate-in fade-in slide-in-from-bottom">
            <p className="text-gray-800 font-semibold mb-3 text-center">AI教程</p>
            <img src={aiTutorialQR} alt="AI教程二维码" className="w-full rounded-lg" />
            <p className="text-gray-600 text-sm text-center mt-3">扫码学习AI相关教程</p>
          </div>
        )}
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-14 h-14 bg-gray-800 hover:bg-gray-900 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 text-white animate-in fade-in"
          aria-label="回到顶部"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}
