import { useState } from 'react';
import { Factory, Zap, Sun } from 'lucide-react';
import { MAX_CONTAINER, THEME2 } from './cardStyles';
// 图片由 cases 数据里的 `image` 字段提供，不再使用 import.meta.glob

export default function Cases() {
  

  const cases = [
    {
      industry: '制造业',
      icon: Factory,
      color: 'from-red-600 to-red-800',
      projects: [
        {
          name: '基于智能体的制造业生产规划系统',
          scenario: '制造业生产流程规划、产能调度、资源优化等环节',
          value: '通过智能体技术自动分析生产数据，优化生产排程，减少资源浪费，提升生产效率，助力企业实现生产环节的数智化升级',
          image: 'data/pic/智能生产管理系统.png',
        }
      ]
    },
    {
      industry: '电力行业',
      icon: Zap,
      color: 'from-yellow-600 to-red-700',
      projects: [
        {
          name: '电力绝缘子爬电距离自动测量装置',
          scenario: '电力设备巡检中绝缘子爬电距离的精准测量环节',
          value: '替代传统人工测量方式，提升测量精度与效率，降低巡检人员工作强度，保障电力设备安全运行',
          image: 'data/pic/绝缘子爬电距离自动测量系统.png',
        },
        {
          name: '电力巡检红外温度异常检测系统',
          scenario: '电力线路、设备日常巡检中的温度异常监测',
          value: '通过红外AI检测技术实时识别设备温度异常，提前预警故障风险，减少停电事故发生概率，提升电力系统运维可靠性',
          image: 'data/pic/电力巡检红外温度异常检测系统.png',
        },
        {
          name: '电力设备运检人工智能开放服务平台',
          scenario: '电力企业设备运行、检修全流程管理',
          value: '整合多维度运检数据，提供故障预警、检修计划制定、检修效果评估等一站式服务，开放平台能力赋能电力行业整体数智化水平提升',
          image: 'data/pic/输变电设备运检人工智能开放服务平台.png',
        },
      ]
    },
    {
      industry: '新能源',
      icon: Sun,
      color: 'from-orange-600 to-red-700',
      projects: [
        {
          name: '基于卫星影像的光伏装机容量预测项目',
          scenario: '光伏电站规划、容量评估、能源产出预测等环节',
          value: '通过卫星影像分析结合AI算法，精准预测光伏装机容量与能源产出，为光伏电站选址、规划及运营提供数据支撑，降低投资风险',
          image: 'data/pic/国网山东省电力公司健康评估实验室检测测试区.png',
        }
      ]
    }
  ];
  // 构建滑块数据：每个项目成为一个滑块，图片来自项目的 `image` 字段
  const slides = cases.flatMap((c) =>
    (c.projects || []).map((p) => ({
      industry: c.industry,
      icon: c.icon,
      name: p.name,
      scenario: p.scenario,
      value: p.value,
      image: p.image || 'data/pic/样本标注界面.png',
    }))
  );

  // 轮播索引
  const [slideIndex, setSlideIndex] = useState(0);
  const prevSlide = () => setSlideIndex((i) => (i - 1 + slides.length) % slides.length);
  const nextSlide = () => setSlideIndex((i) => (i + 1) % slides.length);
  

  return (
    <section id="cases" className="min-h-screen py-20 px-4 anim-section overflow-hidden relative" style={THEME2 as React.CSSProperties}>
      {/* Decorative slanted panels (reuse About styles) */}
      <div aria-hidden className="about-top" />
      <div aria-hidden className="about-center" />
      <div aria-hidden className="about-bottom" />
      <div className={`${MAX_CONTAINER.className} relative z-40`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#333333]">
            项目案例
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-red-600 to-red-800 rounded-full mb-8"></div>
          <p className="text-xl text-[#333333] max-w-4xl mx-auto leading-relaxed">
            深耕多个行业领域，提供技术创新性与实际价值兼具的解决方案
          </p>
        </div>

        {/* 图片轮播：基于 cases 数据生成滑块，每张图对应一个项目的文字（不使用 import.meta.glob） */}
        {slides.length > 0 && (
          <div className="mb-10 relative px-8">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${slideIndex * 100}%)` }}
              >
                {slides.map((s, i) => (
                  <div key={i} className="swiper-slide" style={{ minWidth: '100%' }}>
                    <div className="case_tban relative flex items-stretch bg-gradient-to-br from-white to-white rounded-lg overflow-hidden h-64 md:h-80 lg:h-96 p-4 gap-4">
                      <div className="gl w-1/2">
                        <div className="case_tban w-full h-full p-2">
                          <div className="gl w-full h-full">
                              <div
                                className="public-img w-full h-full border border-white/10 rounded-md overflow-hidden bg-center bg-cover"
                                style={{ backgroundImage: `url(${s.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
                                role="img"
                                aria-label={s.name}
                              />
                          </div>
                        </div>
                      </div>
                      <div className="gr w-1/2 p-6 flex flex-col justify-center">
                        <div className="txt">
                            <div className="txt_span mb-2 flex items-center">
                              {s.icon ? (
                                <s.icon className="text-[#333333] mr-2" size={16} />
                              ) : null}
                              <span className="text-sm text-[#333333] ml-3">{s.industry}</span>
                            </div>
                            <h2 className="font36 text-2xl font-bold text-[#333333]">{s.name}</h2>
                            <p className="text-[#333333] mt-3">{s.value}</p>
                          </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="pub_nav pub_prev pub_prev1 absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
              aria-disabled={slides.length <= 1 ? 'true' : 'false'}
              onClick={prevSlide}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') prevSlide();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" data-inject-url="https://www.actionsoft.com.cn/static/images/r3.svg">
                <defs>
                  <style>{`.cls-1{fill:#fff;fill-rule:evenodd}`}</style>
                </defs>
                <path className="cls-1" d="M1630,842.465h-0.37l-4.3,4.3a1,1,0,0,0,1.42,1.416l6.01-6.008,0.22-.325,0.08-.379v0l-0.08-.383-0.22-.324-6.01-6.008a1,1,0,0,0-1.42,1.416l4.3,4.3H1630" transform="translate(-1625.06 -834.469) rotate(180 1630 842.465)" />
              </svg>
            </div>

            <div
              className="pub_nav pub_next pub_next1 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
              aria-disabled={slides.length <= 1 ? 'true' : 'false'}
              onClick={nextSlide}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') nextSlide();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" data-inject-url="https://www.actionsoft.com.cn/static/images/r3.svg">
                <defs>
                  <style>{`.cls-1{fill:#fff;fill-rule:evenodd}`}</style>
                </defs>
                <path className="cls-1" d="M1630,842.465h-0.37l-4.3,4.3a1,1,0,0,0,1.42,1.416l6.01-6.008,0.22-.325,0.08-.379v0l-0.08-.383-0.22-.324-6.01-6.008a1,1,0,0,0-1.42,1.416l4.3,4.3H1630" transform="translate(-1625.06 -834.469)" />
              </svg>
            </div>
          </div>
        )}
        {/* 案例卡片列表已移除；仅保留上方基于 slides 的轮播展示 */}

          <div className="mt-12 bg-gradient-to-br from-white to-white backdrop-blur-sm p-8 rounded-2xl border border-red-800/20 text-center">
          <p className="text-[#333333] text-lg">
            更多行业解决方案正在开发中，期待与您共创未来
          </p>
        </div>
      </div>
    </section>
  );
}
