import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Copy,
  Menu,
  Play,
  X,
} from "lucide-react";
import { CourseArt } from "./components/CourseArt";

const media = `${import.meta.env.BASE_URL}redesign/`;
const channel = "梦不设限AI训练营";
const courses = [
  {
    id: "voice",
    name: "AI 语音玩具",
    group: "初识 AI",
    en: "HELLO, AI",
    intro: "给玩具一个声音，也给想象一个回应。",
    detail:
      "从语音交互开始认识 AI，把麦克风、扬声器和程序连接起来，探索一个能听、能说的玩具是怎样工作的。",
    topics: ["语音交互", "硬件连接", "创意表达"],
  },
  {
    id: "companion",
    name: "桌面智能搭子",
    group: "初识 AI",
    en: "YOUR LITTLE BUDDY",
    intro: "让桌面上的小伙伴，有自己的表情与个性。",
    detail:
      "把屏幕表情、语音互动和硬件组合在一起，思考人与智能设备如何交流，设计属于自己的桌面伙伴。",
    topics: ["屏幕交互", "角色设计", "软硬件协作"],
  },
  {
    id: "code",
    name: "AI 开发",
    group: "编程创造",
    en: "CODE AN IDEA",
    intro: "用代码，把脑海里的点子变成应用。",
    detail:
      "从一个想解决的小问题出发，理解 AI 应用的输入、处理和输出，在编程与调试中逐步实现自己的创意。",
    topics: ["编程思维", "AI 应用", "项目实践"],
  },
  {
    id: "wheel",
    name: "双轮足机器人",
    group: "机器人探索",
    en: "FIND THE BALANCE",
    intro: "从平衡与运动开始，理解机器人的身体。",
    detail:
      "观察轮足结构怎样运动，认识传感器、电机与控制程序的配合，在调试中探索机器人如何保持平衡。",
    topics: ["运动控制", "传感器", "结构探索"],
  },
  {
    id: "car",
    name: "AI 智能汽车",
    group: "编程创造",
    en: "DRIVE YOUR CODE",
    intro: "让小车感知环境，跟着你的程序出发。",
    detail:
      "以智能小车为载体，把环境感知与运动控制联系起来，探索从获取信号到执行动作的完整过程。",
    topics: ["环境感知", "编程控制", "动手调试"],
  },
  {
    id: "dog",
    name: "机器狗",
    group: "机器人探索",
    en: "MEET YOUR ROBOT",
    intro: "认识四足伙伴，探索行走背后的逻辑。",
    detail:
      "观察四足机器人的结构与步态，认识关节协同和动作控制，感受程序如何驱动真实世界里的运动。",
    topics: ["四足结构", "步态观察", "动作编程"],
  },
  {
    id: "arm",
    name: "机械臂",
    group: "机器人探索",
    en: "MAKE A MOVE",
    intro: "从一个关节到一次抓取，练习精准控制。",
    detail:
      "认识机械臂的关节、连杆与末端执行器，通过动作拆解与编程，探索抓取、移动和放置的过程。",
    topics: ["关节控制", "空间思维", "任务拆解"],
  },
] as const;
type Course = (typeof courses)[number];
const filters = ["全部课程", "初识 AI", "编程创造", "机器人探索"];
const articles = [
  "https://mp.weixin.qq.com/s/mO3kE-TMzw8ihOQo0OMOuA",
  "https://mp.weixin.qq.com/s/u3DO3J8tOdfsO18_v0utmA",
  "https://mp.weixin.qq.com/s/orhsg9w7XwRvFtWwkmnV3w",
  "https://mp.weixin.qq.com/s/vR7QofFtZ4XE93PcBrLK3A",
];

function Photo({
  name,
  alt,
  className = "",
  eager = false,
}: {
  name: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <img
      className={className}
      src={`${media}${name}-1400.webp`}
      srcSet={`${media}${name}-640.webp 640w, ${media}${name}-1400.webp 1400w`}
      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 700px"
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      width="1400"
      height="1000"
    />
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("全部课程");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [copied, setCopied] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(copyTimer.current), []);
  useEffect(() => {
    if (selectedCourse) {
      dialog.current?.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
    dialog.current?.close();
  }, [selectedCourse]);

  async function copyChannel() {
    try {
      await navigator.clipboard.writeText(channel);
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
      document.getElementById("channel-name")?.focus();
    }
  }

  const navLinks = [
    ["研学体验", "#experiences"],
    ["AI 创造课程", "#courses"],
    ["师资与理念", "#teaching"],
    ["成长现场", "#moments"],
  ];

  return (
    <>
      <a className="skip-link" href="#main">
        跳到主要内容
      </a>
      <header className="site-header">
        <div className="header-inner container">
          <a href="#home" className="brand" aria-label="红蛛科技首页">
            <img
              src={`${media}logo.png`}
              width="600"
              height="160"
              alt="红蛛科技 Red Spider Technology"
            />
          </a>
          <nav className="desktop-nav" aria-label="主导航">
            {navLinks.map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
          <a className="header-contact" href="#contact">
            聊聊学习计划 <ArrowUpRight size={17} />
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "关闭导航" : "打开导航"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="手机导航"
            onKeyDown={(e) => {
              if (e.key === "Escape") setMenuOpen(false);
            }}
          >
            {[...navLinks, ["联系我们", "#contact"]].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
                <ArrowUpRight size={18} />
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="main">
        <section className="hero container" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="red-dot" /> 梦不设限 · AI 创造从这里开始
            </p>
            <h1>
              从好奇出发，
              <br />把{" "}
              <span className="hero-ai">
                AI
                <svg viewBox="0 0 160 15" aria-hidden="true">
                  <path d="M3 10Q75 0 155 7M18 14Q75 5 139 11" />
                </svg>
              </span>{" "}
              做出来<span className="red-period">。</span>
            </h1>
            <p className="hero-description">
              走进高校实验室，跟着教授认识人工智能。
              <br className="desktop-break" />
              从第一行代码到会动的机器人，让每个想法都有机会成为作品。
            </p>
            <div className="hero-actions">
              <a className="button button-red" href="#courses">
                找到我的创造起点 <ArrowUpRight size={19} />
              </a>
              <a className="text-link" href="#experiences">
                去研学，见见真实的 AI <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-note">
              <span className="note-line" />
              <p>
                亲子研学营 / 高校实验室研学
                <br />
                <strong>全阶硬件 + AI 编程课程</strong>
              </p>
            </div>
          </div>
          <div className="hero-visual">
            <div className="photo-frame">
              <Photo
                name="making"
                alt="研学课堂上，孩子们一起连接电路、动手制作"
                eager
              />
              <div className="photo-caption">
                <span>REAL MOMENTS. REAL CREATION.</span>
                <p>
                  小小的双手，
                  <br />
                  大大的可能。
                </p>
              </div>
              <span className="photo-tag">
                <span /> 课堂实拍
              </span>
            </div>
            <div className="orbit-stamp" aria-hidden="true">
              <span>KEEP CURIOUS</span>
              <svg viewBox="0 0 70 70">
                <path d="M35 3v64M3 35h64M12 12l46 46M12 58l46-46" />
              </svg>
              <span>STAY CREATIVE</span>
            </div>
            <div className="maker-note">
              <span className="maker-symbol">↗</span>
              <div>
                <strong>你好，未来创造者。</strong>
                <span>YOUR IDEAS START HERE</span>
              </div>
            </div>
          </div>
        </section>
        <div className="promise-strip">
          <div className="container promise-inner">
            <span className="promise-intro">在红蛛，让学习真实发生</span>
            <span>
              <i>01</i> 高校教授带你学
            </span>
            <span>
              <i>02</i> 实验室里看前沿
            </span>
            <span>
              <i>03</i> 动手创造自己的作品
            </span>
            <a href="#experiences" aria-label="向下探索">
              <ArrowDown size={22} />
            </a>
          </div>
        </div>
        <section className="section container experiences" id="experiences">
          <div className="section-heading">
            <div>
              <p className="eyebrow section-kicker">
                01 / LEARNING BEYOND THE CLASSROOM
              </p>
              <h2>世界，就是下一间教室。</h2>
            </div>
            <p className="section-intro">
              把屏幕上的 AI，变成眼前的发现。
              <br />
              带着问题走进去，带着新的想法回来。
            </p>
          </div>
          <div className="experience-grid">
            <a className="experience-card" href="#contact">
              <Photo
                name="together"
                alt="两位孩子在研学活动中一起观察和组装电子元件"
              />
              <div className="experience-overlay" />
              <div className="experience-top">
                <span>一起发现，一起创造</span>
                <span>01</span>
              </div>
              <div className="experience-bottom">
                <p>PARENT–CHILD CAMP</p>
                <h3>亲子研学营</h3>
                <div>
                  <span>把共同的好奇，变成一次有趣的探索。</span>
                  <span className="circle-arrow">
                    <ArrowUpRight />
                  </span>
                </div>
              </div>
            </a>
            <a className="experience-card" href="#contact">
              <Photo
                name="university"
                alt="孩子和家长走进高校实验室，参观科研展示"
              />
              <div className="experience-overlay" />
              <div className="experience-top">
                <span>让前沿科技触手可及</span>
                <span>02</span>
              </div>
              <div className="experience-bottom">
                <p>UNIVERSITY LAB VISIT</p>
                <h3>高校实验室研学</h3>
                <div>
                  <span>走进真实科研环境，打开关于 AI 的新问题。</span>
                  <span className="circle-arrow">
                    <ArrowUpRight />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </section>
        <section className="courses-section" id="courses">
          <div className="section container">
            <div className="section-heading">
              <div>
                <p className="eyebrow section-kicker">
                  02 / LESS WATCHING, MORE MAKING
                </p>
                <h2>
                  你的第一个 AI 作品，
                  <br />
                  会是什么？
                </h2>
              </div>
              <div className="course-heading-aside">
                <span className="small-label">全阶硬件 + AI 编程课程</span>
                <p>
                  从会说话的玩具，到能行动的机器人。
                  <br />
                  让兴趣找到入口，让创造继续进阶。
                </p>
              </div>
            </div>
            <div className="course-filter" aria-label="筛选课程方向">
              {filters.map((item) => (
                <button
                  key={item}
                  className={filter === item ? "active" : ""}
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                >
                  {item}
                  {item === "全部课程" && <span>07</span>}
                </button>
              ))}
            </div>
            <div className="course-grid" aria-live="polite">
              {courses
                .filter(
                  (course) => filter === "全部课程" || course.group === filter,
                )
                .map((course) => (
                  <button
                    className={`course-card course-${course.id}`}
                    key={course.id}
                    onClick={() => setSelectedCourse(course)}
                    aria-label={`了解${course.name}`}
                  >
                    <div className="course-art">
                      <span className="course-number">
                        {String(courses.indexOf(course) + 1).padStart(2, "0")}
                      </span>
                      <CourseArt kind={course.id} />
                      <span className="art-plus">+</span>
                    </div>
                    <div className="course-card-body">
                      <p className="course-english">{course.en}</p>
                      <h3>
                        {course.name}
                        <ArrowUpRight size={20} />
                      </h3>
                      <p>{course.intro}</p>
                      <span className="course-tag">{course.group}</span>
                    </div>
                  </button>
                ))}
              {filter === "全部课程" && (
                <a href="#contact" className="course-callout">
                  <span>WHAT'S NEXT?</span>
                  <svg viewBox="0 0 120 120" aria-hidden="true">
                    <path d="M60 7v106M7 60h106M22 22l76 76M22 98l76-76" />
                  </svg>
                  <h3>
                    还没想好？
                    <br />
                    从你的兴趣聊起。
                  </h3>
                  <p>一起寻找适合的学习起点。</p>
                  <span className="callout-link">
                    咨询课程 <ArrowUpRight size={22} />
                  </span>
                </a>
              )}
            </div>
            <p className="course-footnote">
              适合年龄、开课时间与具体安排，请联系咨询。
            </p>
          </div>
        </section>
        <section className="teaching-section" id="teaching">
          <div className="container teaching-layout">
            <div className="teaching-photo">
              <Photo
                name="robot-dog"
                alt="老师围绕机器狗讲解，孩子们近距离观察机器人结构"
              />
              <span className="teaching-photo-note">
                从一次真实的提问开始。
              </span>
            </div>
            <div className="teaching-copy">
              <p className="eyebrow">03 / GOOD QUESTIONS. GREAT TEACHERS.</p>
              <h2>
                前沿的知识，
                <br />
                面对面地学。
              </h2>
              <div className="faculty-label">
                <span className="red-dot" /> 高校人工智能资深教授授课
              </div>
              <p className="teaching-description">
                杭州红蛛科技有限公司，把人工智能的学习带进真实的课堂与实践。我们关注孩子如何提出问题、理解原理，再一步步把想法做出来。
              </p>
              <div className="teaching-points">
                <div>
                  <span>01</span>
                  <p>
                    <strong>从“为什么”开始</strong>
                    让好奇心带路，理解技术背后的原理。
                  </p>
                </div>
                <div>
                  <span>02</span>
                  <p>
                    <strong>在动手中找到答案</strong>
                    连接、编程、调试，把每次尝试变成经验。
                  </p>
                </div>
                <div>
                  <span>03</span>
                  <p>
                    <strong>给自己的想法一个机会</strong>
                    鼓励提问和表达，让作品留下自己的思考。
                  </p>
                </div>
              </div>
              <a href="#contact" className="text-link light-link">
                认识红蛛，聊聊课程 <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
        <section className="section container moments" id="moments">
          <div className="section-heading">
            <div>
              <p className="eyebrow section-kicker">
                04 / SMALL MOMENTS, BIG DISCOVERIES
              </p>
              <h2>认真起来的样子，真好。</h2>
            </div>
            <p className="section-intro">
              那些专注、讨论和恍然大悟的瞬间，
              <br />
              都是创造正在发生的证据。
            </p>
          </div>
          <div className="moment-grid">
            <figure>
              <Photo
                name="workshop"
                alt="课堂长桌旁，孩子们专注连接电路与调试作品"
              />
              <figcaption>
                <span>动手实践</span>让想法接上电路。
                <ArrowUpRight size={18} />
              </figcaption>
            </figure>
            <figure>
              <Photo name="discovery" alt="两个孩子合作研究桌面上的硬件电路" />
              <figcaption>
                <span>一起钻研</span>再试一次，会有什么不同？
                <ArrowUpRight size={18} />
              </figcaption>
            </figure>
          </div>
          <div className="journal">
            <div>
              <span className="small-label">继续了解我们</span>
              <h3>课堂之外，分享仍在继续。</h3>
              <p>在微信图文里，了解更多课程与活动。</p>
            </div>
            <div className="journal-links">
              {articles.map((url, i) => (
                <a
                  href={url}
                  key={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`阅读微信图文 ${i + 1}（新窗口打开）`}
                >
                  <span>0{i + 1}</span>
                  <div>
                    课程与活动分享<small>微信图文 · 阅读原文</small>
                  </div>
                  <ArrowUpRight size={20} />
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="container contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">LET'S MAKE SOMETHING GREAT.</p>
              <h2>
                下一个好点子，
                <br />
                从一句“我想试试”开始。
              </h2>
              <p>
                想了解课程、参加研学，或一起开展校园合作？
                <br />
                欢迎联系红蛛，聊聊你的想法。
              </p>
              <div className="contact-topics">
                <span>课程咨询</span>
                <span>研学活动</span>
                <span>学校 / 机构合作</span>
              </div>
            </div>
            <div className="contact-card">
              <div className="qr-block">
                <img
                  src={`${media}contact-qr.png`}
                  alt="红蛛科技官方客服微信二维码"
                  width="180"
                  height="180"
                  loading="lazy"
                />
                <div>
                  <strong>
                    微信扫一扫，
                    <br />
                    和我们聊一聊。
                  </strong>
                  <span>课程与研学咨询</span>
                  <a
                    href={`${media}contact-qr.png`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    打开二维码 <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
              <div className="channel-block">
                <div className="channel-icon">
                  <Play size={19} fill="currentColor" />
                </div>
                <div>
                  <span>微信视频号 · 搜索关注</span>
                  <strong id="channel-name" tabIndex={-1}>
                    {channel}
                  </strong>
                </div>
                <button onClick={copyChannel} aria-label="复制视频号名称">
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
              <span className="copy-status" role="status">
                {copied
                  ? "已复制视频号名称，打开微信搜索即可"
                  : "在微信里，遇见更多创造的瞬间"}
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer container">
        <div className="footer-top">
          <a className="brand" href="#home" aria-label="回到顶部">
            <img
              src={`${media}logo.png`}
              alt="红蛛科技"
              width="600"
              height="160"
            />
          </a>
          <p>让好奇生长，让创造发生。</p>
          <a href="#home" className="back-top">
            回到顶部 <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} 杭州红蛛科技有限公司</span>
          <span>
            杭州 · 中国 <span className="footer-dot">/</span> RED SPIDER
            TECHNOLOGY
          </span>
        </div>
      </footer>
      <dialog
        ref={dialog}
        className="course-dialog"
        aria-labelledby="course-dialog-title"
        onClose={() => setSelectedCourse(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelectedCourse(null);
        }}
      >
        {selectedCourse && (
          <div className="dialog-content">
            <button
              className="dialog-close"
              aria-label="关闭课程介绍"
              onClick={() => setSelectedCourse(null)}
            >
              <X size={24} />
            </button>
            <div className={`dialog-art course-${selectedCourse.id}`}>
              <CourseArt kind={selectedCourse.id} />
            </div>
            <div className="dialog-copy">
              <p className="eyebrow section-kicker">{selectedCourse.en}</p>
              <h2 id="course-dialog-title">{selectedCourse.name}</h2>
              <p>{selectedCourse.detail}</p>
              <div className="dialog-tags">
                {selectedCourse.topics.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </div>
              <p className="dialog-note">
                以上为课程方向介绍。适合年龄、课时、费用与近期安排，请通过官方客服咨询。
              </p>
              <a
                className="button button-red"
                href="#contact"
                onClick={() => setSelectedCourse(null)}
              >
                咨询这门课程 <ChevronRight size={18} />
              </a>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
export default App;
