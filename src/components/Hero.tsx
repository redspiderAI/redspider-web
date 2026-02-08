import DecorativeRects from './HeroDecor';
import {
  CARD_CLASSES,
  OVERLAY_CLASSES,
  THEME_SECTION_STYLE,
} from './cardStyles';
import imgTech from '../../data/theme/技术驱动.jpg';
import imgHuman from '../../data/theme/人文温度.jpg';
import imgCo from '../../data/theme/共创赋能.jpg';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-3 px-2 anim-section"
      style={{ ...(THEME_SECTION_STYLE as React.CSSProperties), fontFamily: 'FZLanTingDHJ, ui-sans-serif, system-ui, -apple-system, "Helvetica Neue", "Segoe UI", "Noto Sans SC", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif' } as React.CSSProperties}
    >
      {/* Decorative rectangles (randomized) - rendered behind main content */}
      {/** shapes are generated on mount to give subtle pink/deep-red accents on left/right */}
      <DecorativeRects />

      <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 10 }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Left: text/content */}

          <div className="md:col-span-7 text-left px-3 md:px-0 fz-lanting">
            <div className="mb-2 anim-item fz-lanting" style={{ ['--delay']: '0s' } as React.CSSProperties}>
              <p className="md:text-[70px] font-extrabold text-white mb-3 whitespace-nowrap overflow-visible">人文驱动的共创式<span className="text-red-500">AI</span>数智平台</p>

              <h1 className="font-extrabold md:text-[120px] leading-tight md:leading-[1.21] text-white">
                <span className="block">智驱业务</span>
                <span className="block -mt-2 md:-mt-3">赋能未来</span>
              </h1>

              <div className="h-1 w-44 md:w-64 mt-3 mb-5 bg-gradient-to-r from-transparent to-transparent rounded-full"></div>

              <p className="text-sm md:text-[25px] text-white max-w-xl mb-6 leading-snug anim-item" style={{ ['--delay']: '0.12s' } as React.CSSProperties}>
                <span className="block">以"技术+人文"双驱动特色，提供从顶层设计</span>
                <span className="block">定制开发到人员赋能的一站式AI数智解决方案</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-red-900/50 hover:shadow-red-700/50 flex items-center justify-center space-x-2"
                >
                  <span className='text-white text-lg md:text-xl'>探索核心业务</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform text-white">
                    <path d="M5 12h14"></path>
                    <path d="M13 5l7 7-7 7"></path>
                  </svg>
                </button>

                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 text-white border-2 border-white bg-transparent rounded-lg font-semibold transition-all duration-300"
                >
                  <span className='text-white text-lg md:text-xl'>联系我们</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: three tiles — on md+ position absolute to bottom-right of hero container */}
          <div className="md:col-span-5 px-5 md:px-0">
            <div className="md:absolute md:bottom-2 md:right-1 md:z-20 flex items-center gap-4">
              <div
                className={CARD_CLASSES.className}
                style={{ backgroundImage: `url(${imgTech})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '15rem', height: '10rem' } as React.CSSProperties}
              >
                <span className={OVERLAY_CLASSES.className}></span>
              </div>

              <div
                className={CARD_CLASSES.className}
                style={{ backgroundImage: `url(${imgHuman})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '15rem', height: '10rem' } as React.CSSProperties}
              >
                <span className={OVERLAY_CLASSES.className}></span>

              </div>
              <div
                className={CARD_CLASSES.className}
                style={{ backgroundImage: `url(${imgCo})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '15rem', height: '10rem' } as React.CSSProperties}
              >
                <span className={OVERLAY_CLASSES.className}></span>
              </div>

              {/* On small screens show a single compact row of small boxes
              <div className="sm:hidden flex gap-3">
                <div className="w-20 h-20 bg-gray-400 rounded-md" />
                <div className="w-20 h-20 bg-gray-400 rounded-md" />
                <div className="w-20 h-20 bg-gray-400 rounded-md" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
