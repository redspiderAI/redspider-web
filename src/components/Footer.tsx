import { Heart } from 'lucide-react';
import { FOOTER_BASE, MAX_CONTAINER } from './cardStyles';
import hzLogoWord from '../../data/logo/hzlogoreddown.png';

export default function Footer() {
  return (
    <footer className={FOOTER_BASE.className}>
      <div className={MAX_CONTAINER.className}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-center mb-4 h-16">
            <img src={hzLogoWord} alt="红蛛科技 Red Spider Technology" className="h-full w-auto object-contain" />
          </div>

          <div>
            <h4 className="font-bold mb-4 text-red-400">快速链接</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors text-sm">
                关于我们
              </a>
              <a href="#services" className="block text-gray-400 hover:text-white transition-colors text-sm">
                核心业务
              </a>
              <a href="#cases" className="block text-gray-400 hover:text-white transition-colors text-sm">
                项目案例
              </a>
              <a href="#talent" className="block text-gray-400 hover:text-white transition-colors text-sm">
                人才发展
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-red-400">核心理念</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>使命：智驱业务，赋能未来</p>
              <p>愿景：成为值得信赖的长期数智化伙伴</p>
              <p>价值观：成就 · 共创 · 专业 · 至善</p>
            </div>
          </div>
        </div>

        <div className="border-t border-red-900/30 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 红蛛科技有限公司. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-gray-500 text-sm">
            <span>Made with</span>
            <Heart className="text-red-500" size={16} fill="currentColor" />
            <span>by Red Spider Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
