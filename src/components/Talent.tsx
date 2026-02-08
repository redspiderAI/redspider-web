import { Heart, Eye, TrendingUp, Thermometer, Feather } from 'lucide-react';
import {
  MAX_CONTAINER,
  LAYOUT_CARD,
  THEME_SECTION_STYLE,
  GRADIENT_BORDER_STYLE,
} from './cardStyles';

import EyeIcon from '../../data/talent/洞察.png';
import HeartIcon from '../../data/talent/热爱.png';
import TrendingUpIcon from '../../data/talent/成长.png';
import ThermometerIcon from '../../data/talent/温度.png';
export default function Talent() {
  const principles = [
    {
      icon: Eye,
      title: '洞察',
      subtitle: '以需求为根，以真实为本',
      description: '我们鼓励每一位红蛛人保持对社会的敏锐感知，深入一线了解企业痛点、年轻人困惑，拒绝"闭门造车"。无论是技术研发、产品设计还是实习对接，都以"解决真实问题"为核心，让每一份努力都有明确的价值指向。'
    },
    {
      icon: Heart,
      title: '热爱',
      subtitle: '以初心为光，以坚守为翼',
      description: '我们相信，热爱是抵御迷茫的最好武器。我们支持员工探索自己的兴趣领域，在工作中寻找热爱的闪光点；也倡导对事业的坚守，不急于求成、不随波逐流，用长期主义的心态打磨产品、沉淀能力。'
    },
    {
      icon: TrendingUp,
      title: '成长',
      subtitle: '以互助为桥，以共赢为果',
      description: '红蛛科技是"年轻人的成长共同体"。我们倡导开放分享的氛围，让知识与经验自由流动；我们重视每一个人的成长诉求，提供个性化的发展支持，让员工全方位发展，实现自我价值的提升。'
    },
    {
      icon: Thermometer,
      title: '温度',
      subtitle: '以人文为魂，以关怀为尺',
      description: '"有温度"是红蛛科技的底色。我们尊重每一个个体的独特性，关注员工的工作状态与心理需求，拒绝内耗，倡导"工作与生活平衡"；我们对待用户、合作伙伴始终保持真诚与善意。'
    }
  ];

  return (
    <section id="talent" className="min-h-screen py-20 px-4 anim-section" style={THEME_SECTION_STYLE as React.CSSProperties}>
  <div className={MAX_CONTAINER.className}>
        <div className="text-center mb-16 anim-item" style={{ ['--delay']: '0s' } as React.CSSProperties}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r text-white bg-clip-text text-transparent">
            人才发展
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-red-600 to-red-800 rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            打造"共同成长的家园"，让年轻人在实践中读懂社会、明确方向
          </p>
        </div>



        <div className="mt-12 mb-16">

          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-2 grid-rows-2 gap-0 h-[420px] md:h-[520px]">
              {principles.map((principle, index) => {
                const images = [
                  EyeIcon,
                  HeartIcon,
                  TrendingUpIcon,
                  ThermometerIcon
                ];
                const cornerClasses = ['rounded-tl-3xl', 'rounded-tr-3xl', 'rounded-bl-3xl', 'rounded-br-3xl'];
                return (
                  <div
                    key={index}
                    className={`group relative overflow-hidden flex items-center justify-center p-8 text-center ${cornerClasses[index]}`}
                    aria-hidden={false}
                    style={{ backgroundImage: `url(${images[index]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  >
                    {/* dark overlay to keep text readable */}
                    <div className="absolute inset-0 bg-black/30 z-0" />
                    <div className="z-10 w-full">
                      <div className="transition-opacity duration-300 group-hover:opacity-0">
                        <div className="mb-4 flex justify-center">
                          <principle.icon className="text-white" size={48} />
                        </div>
                        <h4 className="text-4xl md:text-5xl font-bold mb-2 text-white">{principle.title}</h4>
                        <p className="text-lg font-semibold text-white">{principle.subtitle}</p>
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm text-white leading-relaxed">{principle.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-44 md:h-44 rounded-full bg-white flex items-center justify-center z-20 shadow-lg">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#111827]">发展</div>
                <div className="text-base md:text-3xl font-semibold text-[#111827]">理念</div>
              </div>
            </div>
          </div>
        </div>

  <div className={`${LAYOUT_CARD.className} max-w-5xl mx-auto`} style={GRADIENT_BORDER_STYLE as React.CSSProperties}>
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-black/40 p-4 rounded-xl">
              <Feather className="text-white" size={36} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1 text-white">实习实训计划</h3>
              <p className="text-red-400">搭建从校园到社会的成长桥梁</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1">
            <div className={`bg-black/40 p-6  border-red-900/20 anim-item flex flex-row items-start space-x-3` }>
              <div>
                <h4 className="font-bold mb-2 text-white"><span className="mr-2 text-red-400">·</span>面向人群：</h4>
                <p className="text-white text-sm">在校大学生及应届毕业生</p>
              </div>
            </div>
            <div className={`bg-black/40 p-6 border-red-900/20 anim-item flex flex-row items-start space-x-3`}>
              <div>
                <h4 className="font-bold mb-2 text-white"><span className="mr-2 text-red-400">·</span>实习内容：</h4>
                <p className="text-white text-sm">参与真实项目开发、企业服务对接、市场调研等工作，由资深员工一对一指导</p>
              </div>
            </div>
            <div className={`bg-black/40 p-6 border-red-900/20 anim-item flex flex-row items-start space-x-3`}>
              <div>
                <h4 className="font-bold mb-2 text-white"><span className="mr-2 text-red-400">·</span>核心收获：</h4>
                <p className="text-white text-sm">积累实战经验，明确职业方向，优秀实习生可获得转正机会或行业内推荐</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
