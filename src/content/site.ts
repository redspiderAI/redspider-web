export const assetBase = `${import.meta.env.BASE_URL}redesign/`;
export const homeHref =
  import.meta.env.BASE_URL === "/redspider-site/"
    ? "/"
    : import.meta.env.BASE_URL;
export const pageHref = (name: "courses" | "study" | "about", hash = "") =>
  `${import.meta.env.BASE_URL}${name}.html${hash}`;
export const campHome = "https://hzai.tech/AiCampHomePage/";
export const channel = "梦不设限AI训练营";

// Verified against AiCampHomePage and each linked introduction on 2026-09-24.
// Prices and active enrollment dates remain on the original registration pages.
export const courses = [
  {
    id: "voice",
    name: "AI 语音毛绒玩具",
    group: "AI 与编程",
    en: "HELLO, LITTLE FRIEND",
    intro: "亲手做一个能聊天的毛绒伙伴，给它设定自己的性格。",
    topics: ["语音互动", "角色创作"],
    duration: "5 节课",
    audience: "小学一年级及以上",
    href: "https://hzai.tech/AiCampSignUp/",
    action: "查看课程与报名",
    outcome: "在对话、故事创作和角色扮演中，认识 AI 语音交互。",
  },
  {
    id: "companion",
    name: "3D 智能桌面学习搭子",
    group: "硬件与机器人",
    en: "DESIGN YOUR COMPANION",
    intro: "从外形设计到 3D 打印，做一个看时间、报天气的桌面搭子。",
    topics: ["3D 建模", "智能编程"],
    duration: "9 节课",
    audience: "小学 1—6 年级",
    href: "https://hzai.tech/ai_camp_3d_desktop/",
    action: "查看课程与报名",
    outcome: "把建模、电路和传感器连起来，让设计变成实用的桌面作品。",
  },
  {
    id: "code",
    name: "AI 应用开发",
    group: "AI 与编程",
    en: "BUILD YOUR FIRST APP",
    intro: "从一个小点子出发，用 AI 搭建小程序、游戏或实用工具。",
    topics: ["零基础搭建", "作品发布"],
    duration: "5 节课",
    audience: "小学 1—6 年级",
    href: "https://hzai.tech/ai_camp_miaoda/",
    action: "查看课程与报名",
    outcome: "经历需求、生成、编辑、测试和发布，尝试解决身边的小问题。",
  },
  {
    id: "car",
    name: "AI 智能汽车",
    group: "硬件与机器人",
    en: "READY, SET, CREATE",
    intro: "组装、编程、调试，探索小车怎样感知环境、全向移动。",
    topics: ["AI 视觉", "麦克纳姆轮"],
    duration: "10 节课",
    audience: "小学 1—6 年级",
    href: "https://hzai.tech/ai_camp_car/",
    action: "查看课程与报名",
    outcome: "认识开发板、视觉感知与运动控制，在竞速挑战中检验自己的程序。",
  },
  {
    id: "dog",
    name: "AI 智能机械狗",
    group: "硬件与机器人",
    en: "MAKE A ROBOT FRIEND",
    intro: "用 3D 打印和舵机做一只机械狗，尝试步态控制与语音对话。",
    topics: ["仿生步态", "语音交互"],
    duration: "9 节课",
    audience: "小学 1—6 年级",
    href: "https://hzai.tech/ai_camp_robot_dog/",
    action: "查看课程与报名",
    outcome: "从结构设计到动作编程，理解四足运动，完成自己的机械狗作品。",
  },
  {
    id: "arm",
    name: "机械臂 AI 植物探索",
    group: "硬件与机器人",
    en: "TEACH A ROBOT TO SEE",
    intro: "拍照、训练、识别，让带摄像头的机械臂学会认识植物。",
    topics: ["视觉识别", "零代码训练"],
    duration: "7 节课",
    audience: "小学 1—6 年级",
    href: "https://hzai.tech/ai_camp_arm/",
    action: "查看课程与报名",
    outcome: "使用 WonderMK 训练模型，在植物识别任务里观察 AI 如何学习。",
  },
  {
    id: "camp",
    name: "暑期青少年 AI 创造营",
    group: "综合创造营",
    en: "FIVE DAYS OF MAKING",
    intro: "把 AI、3D 建模与硬件电路放进一段完整的作品创作旅程。",
    topics: ["教授指导", "AI + 硬件"],
    duration: "5 天 · 40 小时",
    audience: "8—18 岁",
    href: "https://hzai.tech/ai_camp_uni/",
    action: "查看往期营地方案",
    outcome:
      "日间沉浸式实践，从认识 AI 到完成科技作品。原页面展示 2026 年 8 月营期。",
    archived: true,
  },
] as const;
export const courseFilters = [
  "全部课程",
  "AI 与编程",
  "硬件与机器人",
  "综合创造营",
];
export const articles = [
  "https://mp.weixin.qq.com/s/mO3kE-TMzw8ihOQo0OMOuA",
  "https://mp.weixin.qq.com/s/u3DO3J8tOdfsO18_v0utmA",
  "https://mp.weixin.qq.com/s/orhsg9w7XwRvFtWwkmnV3w",
  "https://mp.weixin.qq.com/s/vR7QofFtZ4XE93PcBrLK3A",
];
