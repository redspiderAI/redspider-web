import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Menu, Phone, Play, X } from "lucide-react";
import {
  assetBase,
  campHome,
  channel,
  homeHref,
  pageHref,
} from "../content/site";
import { Mascot } from "./SiteMedia";

export type PageName = "home" | "courses" | "study" | "about";
export function SiteHeader({ active }: { active: PageName }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const links = [
    { id: "home", text: "首页", href: homeHref },
    { id: "courses", text: "AI 创造课程", href: pageHref("courses") },
    { id: "study", text: "研学体验", href: pageHref("study") },
    { id: "about", text: "关于红蛛", href: pageHref("about") },
  ];
  useEffect(() => {
    const query = matchMedia("(min-width: 961px)");
    const close = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", close);
    return () => query.removeEventListener("change", close);
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        跳到主要内容
      </a>
      <header
        className="site-header"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setOpen(false);
            toggle.current?.focus();
          }
        }}
      >
        <div className="container header-inner">
          <a className="brand" href={homeHref} aria-label="红蛛科技首页">
            <img
              src={`${assetBase}logo.png`}
              alt="红蛛科技 Red Spider Technology"
              width="600"
              height="160"
            />
          </a>
          <nav className="desktop-nav" aria-label="主导航">
            {links.map((link) => (
              <a
                href={link.href}
                key={link.id}
                aria-current={active === link.id ? "page" : undefined}
              >
                {link.text}
              </a>
            ))}
          </nav>
          <a className="header-enroll" href={pageHref("courses", "#catalog")}>
            选课报名
            <ArrowUpRight size={17} />
          </a>
          <button
            ref={toggle}
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "关闭导航" : "打开导航"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="手机导航"
          >
            {[
              ...links,
              {
                id: "contact",
                text: "联系我们",
                href: pageHref("about", "#contact"),
              },
            ].map((link) => (
              <a
                href={link.href}
                key={link.id}
                aria-current={active === link.id ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.text}
                <ArrowUpRight size={18} />
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copyChannel() {
    try {
      await navigator.clipboard.writeText(channel);
      setCopied(true);
      setFailed(false);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 3000);
    } catch {
      setFailed(true);
      document.getElementById("channel-name")?.focus();
    }
  }
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">LET’S MAKE SOMETHING.</p>
          <h2>
            有个想法，
            <br />
            一起聊聊。
          </h2>
          <p>
            选课有疑问，或想组织一次学校、机构研学？
            <br />
            把孩子的兴趣和你的计划告诉我们。
          </p>
          <a className="phone-link" href="tel:19511208669">
            <Phone size={20} />
            195-1120-8669
            <ArrowUpRight size={18} />
          </a>
          <p className="address">杭州市钱塘区文海南路91号</p>
        </div>
        <div className="contact-card">
          <div className="qr-block">
            <img
              src={`${assetBase}contact-qr.png`}
              alt="红蛛科技官方客服微信二维码"
              width="180"
              height="180"
              loading="lazy"
            />
            <div>
              <strong>
                微信扫一扫
                <br />
                和红蛛聊一聊
              </strong>
              <a
                href={`${assetBase}contact-qr.png`}
                target="_blank"
                rel="noopener noreferrer"
              >
                打开客服二维码
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <div className="channel-block">
            <Play size={20} />
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
          <p className="copy-status" role="status">
            {copied
              ? "已复制视频号名称，打开微信搜索即可"
              : failed
                ? `请在微信手动搜索：${channel}`
                : "看看课堂里，新的想法是怎么长出来的。"}
          </p>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Mascot pose="reader" />
            <div>
              <strong>让好奇有去处。</strong>
              <span>RED SPIDER · KEEP CREATING</span>
            </div>
          </div>
          <div className="footer-links">
            <a href={pageHref("courses")}>课程与报名</a>
            <a href={pageHref("study")}>研学体验</a>
            <a href={campHome}>
              训练营主页
              <ArrowUpRight size={14} />
            </a>
            <a href={pageHref("about", "#contact")}>联系我们</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} 杭州红蛛科技有限公司</span>
          <span>杭州 · 中国</span>
          <a href="#top">回到顶部 ↑</a>
        </div>
      </div>
    </footer>
  );
}
