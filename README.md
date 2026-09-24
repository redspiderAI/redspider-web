# 红蛛科技官网

杭州红蛛科技有限公司官网，使用 React、TypeScript 与 Vite 构建。网站包含首页、AI 创造课程、研学体验、关于红蛛四个独立 HTML 页面。课程目录对接七个既有训练营介绍/报名入口，并使用用户提供的红蛛吉祥物与课堂实拍。

## 本地运行与验证

```powershell
npm ci
npm run dev
npm run typecheck
npm run lint
npm run build
npx playwright install chromium
npm run preview -- --host 127.0.0.1 --port 4188
```

另开一个终端运行：

```powershell
node scripts/smoke.mjs http://127.0.0.1:4188/
```

浏览器检查覆盖四个页面及刷新、全部站内链接与锚点、七门课程的实际点击跳转、分类筛选、六张实拍与吉祥物加载、四篇微信原文入口、FAQ、视频号复制、二维码打开、手机导航、320–1440px 横向溢出和控制台错误。PR 的 `Website checks / verify` 执行同一套检查。Windows 可设置 `$env:SMOKE_CHANNEL='chrome'` 使用已安装 Chrome；加 `--screenshots` 输出桌面与手机截图到 `evidence/redesign-20260924/`。

## 内容和素材

- `src/App.tsx`：首页、课程、研学与关于红蛛四页内容。
- `src/content/site.ts`：七项课程事实、对外链接及兼容部署前缀的站内链接。
- `src/components/SiteLayout.tsx`、`SiteMedia.tsx`、`CourseCatalog.tsx`：共用导航、联系信息、页脚、素材与课程目录。
- `src/components/CourseArt.tsx`：七种课程的原创 SVG 插图。
- `src/index.css`：新版视觉与响应式样式。
- `public/redesign/`：提交到仓库的 WebP 实拍、原品牌标志和官方客服二维码；构建无需访问本地素材目录。
- `public/redesign/sources.json`：六张实拍与用户提供的原始文件名对应关系。
- `scripts/prepare-media.mjs`：重新压缩素材，默认来源 `E:/redspider/pic`，可传入其他素材目录。
- `scripts/prepare-mascots.mjs`：将用户提供的四张吉祥物 PNG 裁去透明边距并压缩成 WebP；产物及来源说明已入项目，构建无需读取用户图片目录。
- `index.html`、`courses.html`、`study.html`、`about.html`：Vite 多页面入口，可直接打开和刷新，不依赖 SPA 回退。

课程名称、内容、适合年级与课时于 2026-09-24 对照 `https://hzai.tech/AiCampHomePage/` 及其七个目标页核实。六项主题课卡片直接打开各自的课程与报名页；第七项暑期营原页面为 2026 年 8 月营期，明确标为往期方案，不表示当前开班。费用与近期安排保留在原报名页维护。没有把报名操作统一指向客服。

微信图文访问校验阻止了正文读取，因此保留用户提供的四个原文链接，未冒用文章标题、摘录或未经核实的师资姓名。电话和上课地址来自现有训练营页面，咨询二维码沿用原项目。研学卡片进入本站详细介绍，只有明确的咨询入口进入联系信息。

## 构建路径

| 命令                   | 资源前缀           | 用途                          |
| ---------------------- | ------------------ | ----------------------------- |
| `npm run build`        | `/`                | 本地验收                      |
| `npm run build:pages`  | `/redspider-web/`  | 原 GitHub Pages 工作流        |
| `npm run build:server` | `/redspider-site/` | `https://hzai.tech/` 正式首页 |

产物目录保持为 `docs/`（Git 忽略）。

## 生产部署与回滚

确认过的服务器 SSH 别名为 `zgyjserver`。`hzai.tech` 使用现有 `teenai-h5-gateway-1` HTTPS 网关。本项目作为独立 Docker 静态服务运行，复用 `teenai-h5_application` 网络，不替换报名服务、API 或数据库。

1. 运行完整本地检查，提交源码，执行 `npm run build:server`。
2. 在 `docs/release.json` 写入发布编号与对应源码 commit。把 `docs/`、`infra/` 打包，校验本地与服务器上传包 SHA-256。
3. 将归档上传到 `/tmp/redspider-<release>.tar.gz`；上传 `scripts/deploy.sh` 和 `scripts/rollback.sh`。
4. 执行 `sudo bash /tmp/redspider-deploy.sh <release> /tmp/redspider-<release>.tar.gz`。
5. 校验公网首页、`/redspider-site/release.json`、静态资源、手机/桌面交互及原报名路径。

脚本将完整静态产物封装为 Docker 镜像，为每次发布启动独立 Compose 项目与网络别名，再基于当前网关镜像构建独立的网关配置镜像。只新增或更新首页精确路由与 `/redspider-site/` 资源路由，其余路径仍指向原 `web` 服务。只有候选服务健康、网关配置检查通过后，才切换网关；旧服务保留作为回滚目标，失败时恢复原镜像配置。

发布目录为 `/opt/redspider-web/releases/<release>`。原网关镜像标记、原 Compose 环境文件与原项目 release 路径保存在 `/opt/redspider-web/backups/<release>/`，环境文件保持 600 权限，不进仓库。手动回滚：

```bash
sudo bash /tmp/redspider-rollback.sh <release>
```

未来重新部署 teenaiH5 网关时，需保留本项目新增的两个路由。TLS 仍由原网关的证书挂载提供；更换证书后应重建网关并重新验证公网证书。

实测结果、部署版本与已知限制见 `evidence/acceptance.md`。

本轮多页改版的本地检查见 `evidence/redesign-20260924.md`；2026-09-24 已完成的生产证书更新见 `evidence/ssl-20260924.md`。证书发布与页面发布分开记录。
