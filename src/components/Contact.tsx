import { Mail, Phone, MapPin, Send, MessageSquare, Briefcase, UserPlus } from 'lucide-react';
import { useState } from 'react';
import { LAYOUT_CARD, INPUT_BASE, FORM_TYPE_BUTTON_BASE, MAX_CONTAINER, THEME2 } from './cardStyles';

export default function Contact() {
  const [activeForm, setActiveForm] = useState<'consult' | 'cooperate' | 'intern'>('consult');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('表单提交功能将在后续开发中集成');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formTypes = [
    { id: 'consult' as const, label: '业务咨询', icon: MessageSquare },
    { id: 'cooperate' as const, label: '合作洽谈', icon: Briefcase },
    { id: 'intern' as const, label: '实习申请', icon: UserPlus }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 anim-section" style={THEME2 as React.CSSProperties}>
  <div className={MAX_CONTAINER.className}>
        <div className="text-center mb-16 anim-item" style={{ ['--delay']: '0s' } as React.CSSProperties}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#333333]">
            联系我们
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-red-600 to-red-800 rounded-full mb-8"></div>
          <p className="text-xl text-[#333333] max-w-4xl mx-auto leading-relaxed">
            期待与您共创未来，携手开启数智化新篇章
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6 anim-item" style={{ ['--delay']: '0.08s' } as React.CSSProperties}>
            <div className={LAYOUT_CARD.className}>
              <h3 className="text-2xl font-bold mb-6">联系方式</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-lg">
                    <MapPin className="text-red-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">公司地址</h4>
                    <p className="text-[#333333] text-sm">请通过邮箱或电话联系获取详细地址</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-lg">
                    <Phone className="text-red-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">联系电话</h4>
                    <p className="text-[#333333] text-sm">工作时间：周一至周五 9:00-18:00</p>
                    <p className="text-red-400 text-sm mt-1">电话号码：待补充</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-lg">
                    <Mail className="text-red-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">电子邮箱</h4>
                    <p className="text-[#333333] text-sm">我们将在24小时内回复您的邮件</p>
                    <p className="text-red-400 text-sm mt-1">邮箱地址：待补充</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={LAYOUT_CARD.className}>
              <h3 className="text-2xl font-bold mb-4">意见反馈</h3>
              <p className="text-[#333333] text-sm mb-4">
                您的每一条建议都将帮助我们变得更好。欢迎用户、合作伙伴及员工通过右侧表单提出宝贵意见。
              </p>
              <p className="text-red-400 text-sm">
                我们承诺认真对待每一条反馈，持续优化服务品质。
              </p>
            </div>
          </div>

            <div className={LAYOUT_CARD.className + ' anim-item'} style={{ ['--delay']: '0.12s' } as React.CSSProperties}>
            <h3 className="text-2xl font-bold mb-6">在线留言</h3>

              <div className="flex space-x-2 mb-6">
                {formTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveForm(type.id)}
                    className={`${FORM_TYPE_BUTTON_BASE.className} border border-[#E5E7EB] ${
                    activeForm === type.id
                      ? 'bg-red-600 text-white '
                      : 'bg-white text-black hover:bg-red-900/30 hover:text-white'
                  }`}
                >
                  <type.icon size={18} />
                  <span className="text-sm font-medium">{type.label}</span>
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 anim-item" style={{ ['--delay']: '0.16s' } as React.CSSProperties}>
              <div>
                <label className="block text-sm font-medium mb-2 ">
                  {activeForm === 'intern' ? '姓名' : '联系人'}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={INPUT_BASE.className} 
                  placeholder="请输入您的姓名"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">联系方式</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  className={INPUT_BASE.className}
                  placeholder="手机号码或邮箱"
                />
              </div>

              {activeForm !== 'intern' && (
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {activeForm === 'consult' ? '企业名称' : '公司名称'}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={INPUT_BASE.className}
                    placeholder="请输入企业/公司名称"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">
                  {activeForm === 'consult' && '需求描述'}
                  {activeForm === 'cooperate' && '合作意向'}
                  {activeForm === 'intern' && '自我介绍及实习意向'}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={INPUT_BASE.className + ' resize-none'}
                  placeholder={
                    activeForm === 'consult' ? '请简要描述您的业务需求...' :
                    activeForm === 'cooperate' ? '请描述您的合作意向...' :
                    '请介绍您的教育背景、技能特长及实习期望...'
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 shadow-lg shadow-red-900/50 hover:shadow-red-700/50 flex items-center justify-center space-x-2"
              >
                <span>提交</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
