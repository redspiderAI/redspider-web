import React, { useState } from 'react';
import { BarChart3, Shield} from 'lucide-react';
import { MAX_CONTAINER, SERVICES_WRAPPER, SERVICE_FEATURE_CARD, THEME_SECTION_STYLE, GRADIENT_BORDER_STYLE } from './cardStyles';
import imgDataViz from '../../data/services/imgDataViz.png';
import imgAI from '../../data/services/imgAI.png';
import imgManufacture from '../../data/services/imgManufacture.png';
import imgTalent from '../../data/services/imgTalent.png';

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const services = [
    {
      category: '数据智能与可视化',
      icon: imgDataViz,
      description: '让业务状况一目了然',
      features: [
        {
          title: '(数据整合)',
          desc: '打通各环节数据，打破信息孤岛，实现全业务流程的线上化、透明化管理'
        },
        {
          title: '(数据大屏)',
          desc: '实时可视化呈现关键业务数据，涵盖生产进度、库存状态、销售业绩等核心指标'
        },
        {
          title: '(智能预测)',
          desc: '基于历史数据与AI算法，精准预测市场需求、设备故障风险、原材料价格趋势'
        }
      ]
    },
    {
      category: 'AI与机器学习模型',
      icon: imgAI,
      description: '将业务难题转化为智能应用',
      features: [
        {
          title: '(定制化AI开发)',
          desc: '针对企业特定场景开发专属AI模型，实现技术与业务的深度适配'
        },
        {
          title: '(生产流程优化) ',
          desc: '通过AI算法自动分析生产全链路数据，寻找最优生产参数，提升设备利用率'
        },
        {
          title: '(智能质检与预警)',
          desc: '运用AI视觉等先进技术，实现产品自动质量检验与设备运行异常实时预警'
        }
      ]
    },
    {
      category: '制造业专项解决方案',
      icon: imgManufacture,
      description: '为智能制造注入AI动力',
      features: [
        {
          title: '(生产规划与调度)',
          desc: '开发基于智能体的生产规划系统，动态响应订单变更与设备状态变化'
        },
        {
          title: '(设备管理与维护)',
          desc: '通过AI模型持续分析设备运行数据，精准预测潜在故障风险'
        },
        {
          title: '(全链路管理)',
          desc: '涵盖统一门户建设、智能计划与供应链管理、智能仓储管理等全场景服务'
        }
      ]
    },
    {
      category: '人才赋能服务',
      icon: imgTalent,
      description: '为企业培养和赋能人才',
      features: [
        {
          title: '实习实践机会',
          desc: '为大学生提供校内校外实习机会，让其深度参与真实项目开发、企业服务对接等工作，在实践中了解行业需求、积累实战能力',
          iconComponent: BarChart3
        },
        {
          title: '定向人才培养',
          desc: '针对企业数智化转型后的人才需求，定向培训系统运维人才与后期需求迭代人才，搭建从校园到社会、从新人到专业人才的过渡桥梁',
          iconComponent: Shield
        }
      ]
    }
  ];

  return (
    <section id="services" className="min-h-screen py-20 px-4 anim-section" style={THEME_SECTION_STYLE as React.CSSProperties}>
      <div className={MAX_CONTAINER.className}>
        <div className="text-center mb-16 anim-item" style={{ ['--delay']: '0s' } as React.CSSProperties}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
            核心业务
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-red-600 to-red-800 rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            以"智驱业务，赋能未来"为核心导向，提供数据智能、AI模型开发、制造业专项解决方案等全流程数智化服务
          </p>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${SERVICES_WRAPPER.className} ${expanded === index ? 'service-expanded' : 'service-collapsed'}`}
                style={{
                  ...(GRADIENT_BORDER_STYLE as unknown as React.CSSProperties),
                  ['--delay']: `${0.08 + index * 0.06}s`
                } as React.CSSProperties}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <h4 className="text-2xl font-bold text-white text-center">{service.category}</h4>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => setExpanded(expanded === index ? null : index)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setExpanded(expanded === index ? null : index); }}
                      className="bg-black/40 rounded-3xl overflow-hidden cursor-pointer"
                    >
                      <img src={service.icon}
                        alt={service.category}
                        className="w-full h-[170px] md:h-[210px] lg:h-[260px] object-cover" />
                    </div>
                  </div>
                </div>

                <div className={`service-features transition-all duration-500 ease-in-out ${expanded === index ? 'opacity-100 max-h-[2000px] mt-3' : 'opacity-0 max-h-0'}`}>
                  <div className={`grid ${service.features.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-3'} gap-3`}>
                    {service.features.map((feature, featureIndex) => {
                      const IconComponent = 'iconComponent' in feature ? feature.iconComponent : undefined;
                      return (
                        <div
                          key={featureIndex}
                          className={IconComponent ? 'flex items-start space-x-3 bg-[#131112] p-4 rounded-lg' : SERVICE_FEATURE_CARD.className}
                          style={{ ['--delay']: `${0.12 + featureIndex * 0.04}s` } as React.CSSProperties}
                        >
                          {IconComponent && <IconComponent className="text-white mt-1 flex-shrink-0" size={24} />}
                          <div>
                            {IconComponent && <h4 className="font-semibold mb-2 text-white">{feature.title}</h4>}
                            <p className="text-white text-sm mb-3">{feature.desc}</p>
                            {!IconComponent && <h5 className="font-semibold text-red-500">{feature.title}</h5>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
