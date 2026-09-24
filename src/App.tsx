import { useEffect } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
} from "lucide-react";
import { CourseCatalog } from "./components/CourseCatalog";
import {
  ContactSection,
  SiteFooter,
  SiteHeader,
  type PageName,
} from "./components/SiteLayout";
import { Mascot, Photo } from "./components/SiteMedia";
import { articles, campHome, homeHref, pageHref } from "./content/site";

function Breadcrumb({ label }: { label: string }) {
  return (
    <nav className="breadcrumb" aria-label="面包屑">
      <a href={homeHref}>首页</a>
      <ChevronRight size={14} />
      <span aria-current="page">{label}</span>
    </nav>
  );
}

function ExperienceCards() {
  return (
    <div className="experience-grid">
      <a className="experience-card" href={pageHref("study", "#family")}>
        <Photo name="together" alt="孩子们在课堂上合作连接电子元件" />
        <div className="experience-content">
          <span className="eyebrow">01 / TOGETHER, WE DISCOVER</span>
          <h3>亲子研学营</h3>
          <p>一起观察、一起动手，给共同的好奇留一点时间。</p>
          <span className="experience-link">
            看看怎样一起学
            <ArrowUpRight size={20} />
          </span>
        </div>
      </a>
      <a className="experience-card" href={pageHref("study", "#university")}>
        <Photo name="university" alt="孩子与家长参观高校实验室展示" />
        <div className="experience-content">
          <span className="eyebrow">02 / HELLO, REAL SCIENCE</span>
          <h3>高校实验室研学</h3>
          <p>走进真实的科研环境，把“为什么”带到科学面前。</p>
          <span className="experience-link">
            了解实验室研学
            <ArrowUpRight size={20} />
          </span>
        </div>
      </a>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="red-dot" />
            红蛛科技 · 梦不设限 AI 训练营
          </p>
          <h1>
            好奇的小脑袋，
            <br />
            做点<span className="handwritten">大事情。</span>
          </h1>
          <p className="hero-description">
            做一个会聊天的玩偶，造一只听得懂话的机械狗。
            <br className="desktop-break" />
            从第一件 AI 作品开始，让想象有模有样。
          </p>
          <div className="hero-actions">
            <a className="button button-red" href={pageHref("courses")}>
              找到我的创造课
              <ArrowUpRight size={19} />
            </a>
            <a className="text-link" href={campHome}>
              走进 AI 训练营
              <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="hero-note">
            <span>边学 · 边做 · 边发现</span>
            <p>AI 编程 / 智能硬件 / 亲子与高校研学</p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-circle" />
          <span className="orbit-text">HELLO, YOUNG MAKER!</span>
          <span className="doodle-spark spark-one">✳</span>
          <span className="doodle-spark spark-two">+</span>
          <div className="mascot-speech">
            带上好奇心，
            <br />
            <strong>和红蛛一起开工！</strong>
          </div>
          <Mascot eager className="hero-mascot" />
          <div className="hero-photo">
            <Photo name="making" alt="孩子们在课堂上动手制作电路作品" eager />
            <span>小小创造者的日常 ↗</span>
          </div>
          <div className="hero-sticker">
            <span>IDEA</span>
            <ArrowRight size={18} />
            <span>REAL</span>
          </div>
        </div>
      </section>
      <div className="promise-strip">
        <div className="container">
          <span>
            <i>01</i>把想法说出来
          </span>
          <span>
            <i>02</i>亲手试一试
          </span>
          <span>
            <i>03</i>带着新问题继续
          </span>
          <a href="#courses" aria-label="向下查看课程">
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
      <section className="section container" id="courses">
        <div className="section-heading">
          <div>
            <p className="eyebrow section-kicker">
              THE MAKER’S MENU / 创造，从兴趣开始
            </p>
            <h2>
              第一件作品，
              <br />
              你想做什么？
            </h2>
          </div>
          <div className="heading-aside">
            <p>
              能说、能看、能动，也能解决小问题。
              <br />7 个创造方向，点开就能了解具体课程。
            </p>
            <a className="text-link" href={pageHref("courses")}>
              选课指南与课程详情
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
        <CourseCatalog />
      </section>
      <section className="experience-section" id="experiences">
        <div className="container section">
          <div className="section-heading">
            <div>
              <p className="eyebrow section-kicker">
                LEARNING OUTSIDE THE BOX / 走出去看看
              </p>
              <h2>世界，也是教室。</h2>
            </div>
            <p className="section-intro">
              和家人一起发现，走进实验室里提问。
              <br />
              让课本里的科技，变成眼前的体验。
            </p>
          </div>
          <ExperienceCards />
        </div>
      </section>
      <section className="teaching-section" id="teaching">
        <div className="container teaching-layout">
          <div className="teaching-photo">
            <Photo
              name="robot-dog"
              alt="老师围绕机器狗讲解，孩子近距离观察机器人结构"
            />
            <span className="photo-label">
              真实课堂 / 每个“为什么”都值得认真回答
            </span>
          </div>
          <div className="teaching-copy">
            <p className="eyebrow">LEARN WITH PEOPLE WHO MAKE.</p>
            <h2>
              有人带着学，
              <br />
              也有空间自己试。
            </h2>
            <span className="faculty-label">
              <span className="red-dot" />
              高校人工智能资深教授授课
            </span>
            <p>
              从孩子能理解的问题出发，把原理讲清楚，再把时间交给动手实践。连接不通就检查电路，动作不对就调整程序，作品在一次次尝试中成形。
            </p>
            <a className="text-link" href={pageHref("about", "#teaching")}>
              认识红蛛的课堂
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
      <section className="section container moments" id="moments">
        <div className="section-heading">
          <div>
            <p className="eyebrow section-kicker">
              MADE OF REAL MOMENTS / 课堂里的小片段
            </p>
            <h2>“等一下，我再试试。”</h2>
          </div>
          <p className="section-intro">认真起来的样子，真好。</p>
        </div>
        <div className="moment-grid">
          <figure>
            <Photo
              name="workshop"
              alt="孩子们围坐课堂长桌，专注调试自己的作品"
            />
            <figcaption>
              <span>动手实践</span>让想法接上电路。
            </figcaption>
          </figure>
          <figure>
            <Photo name="discovery" alt="两个孩子合作研究桌面上的硬件电路" />
            <figcaption>
              <span>一起钻研</span>再试一次，会有什么不同？
            </figcaption>
          </figure>
        </div>
        <div className="journal">
          <div>
            <p className="eyebrow section-kicker">FROM OUR JOURNAL</p>
            <h3>课堂之外，分享还在继续。</h3>
            <p>在微信图文里，看看更多课程与活动。</p>
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
                <ArrowUpRight size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}

function CoursesPage() {
  return (
    <>
      <section className="container page-intro courses-intro">
        <div>
          <Breadcrumb label="AI 创造课程" />
          <p className="eyebrow section-kicker">FIND YOUR FIRST PROJECT</p>
          <h1>
            从“我喜欢”，
            <br />
            到“我做的”。
          </h1>
          <p className="page-lead">
            喜欢聊天、画图，还是想让机器人动起来？
            <br />
            先选一个想做的作品，再走进它背后的 AI 世界。
          </p>
          <a className="button button-red" href="#catalog">
            看看全部课程
            <ArrowDown size={18} />
          </a>
        </div>
        <div className="intro-mascot">
          <span>
            你负责想象，
            <br />
            我们一起试着实现。
          </span>
          <Mascot pose="tech" eager />
        </div>
      </section>
      <section className="container choose-guide" aria-label="按兴趣选课">
        <div>
          <span className="guide-number">01</span>
          <h2>想和 AI 聊天、做应用</h2>
          <p>从语音玩具、AI 应用开发开始，练习表达需求和创作。</p>
        </div>
        <div>
          <span className="guide-number">02</span>
          <h2>喜欢拆装，想让作品动起来</h2>
          <p>看看桌面搭子、机械臂、小车与机械狗，把程序接到硬件上。</p>
        </div>
        <div>
          <span className="guide-number">03</span>
          <h2>想完整经历一次作品创作</h2>
          <p>参考暑期营的综合实践方案，了解 AI、建模与电路怎样配合。</p>
        </div>
      </section>
      <section className="section container" id="catalog">
        <div className="section-heading">
          <div>
            <p className="eyebrow section-kicker">07 WAYS TO CREATE</p>
            <h2>选一个，让好奇落地。</h2>
          </div>
          <a href={campHome} className="text-link">
            训练营原始主页
            <ArrowUpRight size={17} />
          </a>
        </div>
        <CourseCatalog detailed />
      </section>
      <section className="faq-section">
        <div className="container faq-layout">
          <div>
            <p className="eyebrow section-kicker">BEFORE YOU START</p>
            <h2>
              出发前，
              <br />
              你可能想知道。
            </h2>
            <Mascot pose="reader" />
          </div>
          <div className="faq-list">
            <details open>
              <summary>没有编程基础，可以参加吗？</summary>
              <p>
                AI
                应用开发、桌面学习搭子、机械臂、智能小车和机械狗的介绍页均提供零基础学习说明。可先根据兴趣选择，再结合孩子的年级向课程顾问确认。
              </p>
            </details>
            <details>
              <summary>在哪里上课？每节课多长？</summary>
              <p>
                六项主题课程页面标注的地址为杭州市钱塘区文海南路91号，每节课 60
                分钟。课时总数因课程而异，分别为 5、7、9 或 10 节。
              </p>
            </details>
            <details>
              <summary>怎样查看费用和报名？</summary>
              <p>
                点击课程卡片，会直接进入该课程的介绍与报名页。费用、班级安排和报名信息在对应页面查看和填写。
              </p>
            </details>
            <details>
              <summary>暑期创造营现在可以报名吗？</summary>
              <p>
                当前原页面展示的是 2026 年 8
                月营期，本站将其保留为往期方案。下一期安排请先向课程顾问确认。
              </p>
              <a className="text-link" href={pageHref("about", "#contact")}>
                咨询下一期安排
                <ArrowRight size={16} />
              </a>
            </details>
          </div>
        </div>
      </section>
      <section className="container bottom-cta">
        <div>
          <p className="eyebrow section-kicker">TAKE A CLOSER LOOK</p>
          <h2>想先看看真实课堂？</h2>
        </div>
        <a className="button button-outline" href={`${homeHref}#moments`}>
          去看成长现场
          <ArrowUpRight size={18} />
        </a>
      </section>
    </>
  );
}

function StudyPage() {
  return (
    <>
      <section className="container page-intro study-intro">
        <div>
          <Breadcrumb label="研学体验" />
          <p className="eyebrow section-kicker">TAKE YOUR CURIOSITY OUTSIDE</p>
          <h1>
            带着问题出发，
            <br />
            带着发现回来。
          </h1>
          <p className="page-lead">
            在共同的体验里认识科技，
            <br />
            也看见孩子观察、提问和尝试的样子。
          </p>
          <div className="hero-actions">
            <a className="button button-red" href="#family">
              亲子一起探索
              <ArrowDown size={18} />
            </a>
            <a className="text-link" href="#university">
              走进高校实验室
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
        <div className="intro-mascot explorer-intro">
          <span>今天，我们去哪里发现？</span>
          <Mascot pose="explorer" eager />
        </div>
      </section>
      <section className="study-story container" id="family">
        <div className="story-photo">
          <Photo name="together" alt="孩子们围绕电子元件共同观察和动手" />
          <span className="photo-label">一起投入，比给出答案更有意思。</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow section-kicker">
            01 / A DAY TO DISCOVER TOGETHER
          </p>
          <h2>亲子研学营</h2>
          <p className="story-lead">
            孩子说“我想试试”，
            <br />
            大人说“我们一起”。
          </p>
          <p>
            把陪伴放进一次具体的探索：一起观察科技现象，一起讨论想法，再试着完成一个动手任务。家长也可以放下“标准答案”，听听孩子会怎么解释。
          </p>
          <ul className="check-list">
            <li>
              <Check size={17} />
              从共同感兴趣的问题开始
            </li>
            <li>
              <Check size={17} />
              在观察和制作中交流想法
            </li>
            <li>
              <Check size={17} />
              用一次分享记录自己的发现
            </li>
          </ul>
          <a className="text-link" href={pageHref("courses")}>
            先看看可以做什么作品
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
      <section className="university-section" id="university">
        <div className="container study-story reverse">
          <div className="story-photo">
            <Photo
              name="university"
              alt="孩子和家长走进高校实验室参观科技展示"
            />
            <span className="photo-label">
              把书本上的科技，变成眼前的发现。
            </span>
          </div>
          <div className="story-copy">
            <p className="eyebrow section-kicker">
              02 / MEET SCIENCE IN PERSON
            </p>
            <h2>高校实验室研学</h2>
            <p className="story-lead">
              机器为什么这样动？
              <br />
              答案，就从眼前找。
            </p>
            <p>
              走进真实科研环境，近距离观察设备与技术应用。带着自己关心的问题听讲解，把看见的现象和学过的知识联系起来。
            </p>
            <ul className="check-list">
              <li>
                <Check size={17} />
                认识实验室里的研究与设备
              </li>
              <li>
                <Check size={17} />
                把“看到了什么”变成具体问题
              </li>
              <li>
                <Check size={17} />
                回到课堂，用小项目继续探索
              </li>
            </ul>
            <a className="text-link" href={pageHref("about", "#teaching")}>
              了解我们的教学方式
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
      <section className="container section study-planning">
        <div>
          <p className="eyebrow section-kicker">PLAN A VISIT</p>
          <h2>
            给这次出发，
            <br />
            留一点准备。
          </h2>
          <p>
            研学的时间、地点、适合年级与活动内容，
            <br />
            请结合当期安排沟通确认。
          </p>
        </div>
        <div className="planning-list">
          <div>
            <span>01</span>
            <p>
              <strong>从兴趣开始</strong>想看机器人，还是更喜欢亲手搭建？
            </p>
          </div>
          <div>
            <span>02</span>
            <p>
              <strong>说说参与情况</strong>
              孩子的年级、参与人数，以及希望出发的时间。
            </p>
          </div>
          <div>
            <span>03</span>
            <p>
              <strong>确认活动安排</strong>
              再一起确认地点、行程与需要携带的物品。
            </p>
          </div>
          <a className="button button-red" href={pageHref("about", "#contact")}>
            咨询研学安排
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <section className="container page-intro about-intro">
        <div>
          <Breadcrumb label="关于红蛛" />
          <p className="eyebrow section-kicker">RED SPIDER TECHNOLOGY</p>
          <h1>
            认真对待，
            <br />
            每一个小小的想法。
          </h1>
          <p className="page-lead">
            杭州红蛛科技有限公司
            <br />
            把人工智能带进孩子能理解、能参与的实践。
          </p>
        </div>
        <div className="intro-mascot">
          <span>
            认识一下，
            <br />
            我是你的创造伙伴红蛛。
          </span>
          <Mascot pose="reader" eager />
        </div>
      </section>
      <section className="about-manifesto">
        <div className="container">
          <p className="eyebrow section-kicker">WHY WE MAKE</p>
          <h2>学 AI，从做一件真实的事开始。</h2>
          <p>
            我们围绕 AI
            编程、智能硬件、亲子研学和高校实验室研学开展学习体验。一个能对话的玩具、一只会走路的机械狗、一款解决小问题的应用，都是理解技术的入口。
          </p>
          <a className="text-link" href={pageHref("courses")}>
            了解红蛛的课程
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
      <section className="container section about-teaching" id="teaching">
        <div className="teaching-photo">
          <Photo name="robot-dog" alt="老师与孩子围绕机器狗进行讲解和观察" />
        </div>
        <div>
          <p className="eyebrow section-kicker">OUR CLASSROOM</p>
          <h2>有原理，也有实践。</h2>
          <span className="faculty-label">
            <span className="red-dot" />
            高校人工智能资深教授授课
          </span>
          <div className="teaching-points">
            <div>
              <span>01</span>
              <p>
                <strong>先问一个好问题</strong>
                小车怎样知道前面有障碍？机械臂怎样认出一株植物？用具体的问题打开学习。
              </p>
            </div>
            <div>
              <span>02</span>
              <p>
                <strong>给尝试留出时间</strong>
                接电路、写程序、做测试。遇到不工作的地方，就一起检查和调整。
              </p>
            </div>
            <div>
              <span>03</span>
              <p>
                <strong>讲清自己的作品</strong>
                它能做什么，哪里还可以改？让孩子表达自己的思考，继续发展新想法。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mascot-band">
        <div className="container">
          <Mascot pose="maker" />
          <div>
            <p className="eyebrow section-kicker">MEET RED SPIDER</p>
            <h2>爱动手，也爱问为什么。</h2>
            <p>
              拿起扳手就想试试，举起望远镜就想看得更远。
              <br />
              红蛛带着这样的好奇，陪你认识 AI、走进课堂、开始创造。
            </p>
          </div>
          <Mascot pose="explorer" />
        </div>
      </section>
      <ContactSection />
    </>
  );
}

function App() {
  useEffect(() => {
    // A multi-page fragment can arrive before React has mounted its target.
    const frame = requestAnimationFrame(() => {
      const id = window.location.hash.slice(1);
      if (id)
        document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, []);
  const file = window.location.pathname.split("/").pop();
  const active: PageName =
    file === "courses.html"
      ? "courses"
      : file === "study.html"
        ? "study"
        : file === "about.html"
          ? "about"
          : "home";
  return (
    <div id="top">
      <SiteHeader active={active} />
      <main id="main">
        {active === "home" ? (
          <HomePage />
        ) : active === "courses" ? (
          <CoursesPage />
        ) : active === "study" ? (
          <StudyPage />
        ) : (
          <AboutPage />
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
export default App;
