import React, { useState } from 'react';
import { Target, Award, TrendingUp, Users } from 'lucide-react';
import {
  ABOUT_VALUE_CARD,
  G_SVG_SMALL,
  MAX_CONTAINER,
} from './cardStyles';

export default function About() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const values = [
    {
      icon: Award,
      title: '成就',
      slogan: '成就客户，就是成就我们',
      description: '我们的最终目标是实现客户的成功。我们不仅仅交付项目，更致力于成为客户长期信赖的伙伴，通过数智化赋能，帮助客户实现业务增长与未来愿景。'
    },
    {
      icon: Users,
      title: '共创',
      slogan: '智慧共振，价值共创',
      description: '我们拒绝单向的甲乙方关系。我们深入客户的业务场景，与客户团队坐在一起，融合彼此的智慧与经验。这种深度协同的"联合共创"模式，是确保AI能力精准匹配需求、真正落地生根的核心方法论。'
    },
    {
      icon: Target,
      title: '专业',
      slogan: '专业立身，值得托付',
      description: '我们以严谨的态度和精深的技术构建起我们的专业壁垒。从顶层的战略咨询到具体的代码开发，再到最终的项目交付与运维，我们始终秉持最高的专业标准。'
    },
    {
      icon: TrendingUp,
      title: '至善',
      slogan: '精益求精，止于至善',
      description: '"至善"是我们对过程与结果的不懈追求。它意味着我们不满足于"够用就好"，而是在每一个细节上追求极致，不断优化与迭代。'
    }
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 anim-section overflow-hidden relative"
      style={{ backgroundColor: '#111216', color: '#333333', marginTop: '150px' } as React.CSSProperties}
    >

      {/* Decorative slanted panels: top dark, center pale, bottom dark */}
      <div aria-hidden className="about-top" />
      <div aria-hidden className="about-center" />
      <div aria-hidden className="about-bottom" />

      <div className={`${MAX_CONTAINER.className} relative z-40`}>
        <div className="text-center mb-16 anim-item" style={{ ['--delay']: '0s' } as React.CSSProperties}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#333333]">
            关于我们
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-red-600 to-red-800 rounded-full mb-8"></div>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed text-[#333333]">
            红蛛科技是一家以人文驱动为核心的AI数智化企业
          </p>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed text-[#333333]">
            专注于构建共创式AI数智平台，致力于打造生生不息的共创生态
          </p>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className={LAYOUT_CARD.className}>
            <div className="flex items-center space-x-3 mb-4">
              <Target className="text-red-500" size={32} />
              <h3 className="text-2xl font-bold">战略定位</h3>
            </div>
            <p className="text-gray-300 text-lg">人文驱动的共创式AI数智平台</p>
          </div>

          <div className={LAYOUT_CARD.className}>
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="text-red-500" size={32} />
              <h3 className="text-2xl font-bold">企业愿景</h3>
            </div>
            <p className="text-gray-300 text-lg">打造生生不息的共创生态，成为值得信赖的长期数智化伙伴</p>
          </div>
        </div> */}

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                tabIndex={0}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onFocus={() => setActiveIndex(index)}
                onBlur={() => setActiveIndex(null)}
                className={`${ABOUT_VALUE_CARD.className} ${activeIndex === index ? 'turn on' : ''}`}
                style={{ ['--delay']: `${0.08 + index * 0.06}s`, backgroundColor: '#ffffff' } as React.CSSProperties}
              >
                <div className="flex items-start space-x-4">
                  <div className={G_SVG_SMALL.className}>
                    <value.icon className="text-red-700" size={32} />
                  </div>
                  <div className="flex-1 txt_box">
                    <div className="txt_t">
                      <h4 className="text-xl font-bold mb-2 text-[#333333]">{value.title}</h4>
                      <p className="font-semibold mb-3 text-sm text-[#333333]">{value.slogan}</p>
                    </div>

                    {/* description 与 更多 链接：始终渲染，通过 CSS/Tailwind 控制显隐以实现平滑过渡 */}
                    <div className="mt-2 b_a overflow-visible opacity-100 translate-y-0 max-h-none">
                      <p className="text-sm leading-relaxed text-[#333333]">{value.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-advantages">
          <h3 className="text-2xl font-bold mb-4 text-center text-[#333333] ">组织与方法论优势</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
            {/* Card 1: left, top layer */}
            <div
              className="item relative md:rounded-3xl p-8 md:p-12 z-30"
              style={{ backgroundColor: '#FAF0E6' }}
            >
              <div className="g_p">
                <p className="font20 text-4xl font-bold text-[#333333] mb-2">动能布局</p>
                <p className="text-sm text-[#333333]">从顶层设计、定制开发到人员赋能的一站式解决方案</p>
              </div>
            </div>

            {/* Card 2: middle, overlaps left */}
            <div
              className="item relative md:rounded-3xl p-8 md:p-12 z-20 md:-ml-8 mt-6 md:mt-0"
              style={{ backgroundColor: '#FADBCB' }}
            >
              <div className="g_p">
                <p className="font20 text-4xl font-bold text-[#333333] mb-2">共创方法论</p>
                <p className="text-sm text-[#333333]">技术+业务联合共创，精准洞察转型痛点</p>
              </div>
            </div>

            {/* Card 3: right, behind middle */}
            <div
              className="item relative md:rounded-3xl p-8 md:p-12 z-10 md:-ml-8 mt-12 md:mt-0"
              style={{ backgroundColor: '#DFF7F5' }}
            >
              <div className="g_p">
                <p className="font20 text-4xl font-bold text-[#333333] mb-2">组织创新</p>
                <p className="text-sm text-[#333333]">高度共识与自驱的敏捷团队</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
