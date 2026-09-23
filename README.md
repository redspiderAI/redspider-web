# 红蛛科技官网

杭州红蛛科技有限公司官网，使用 React、TypeScript 与 Vite 构建。官网介绍高校师资、亲子研学营、高校实验室研学，以及七个硬件与 AI 编程课程方向。

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

浏览器检查覆盖七门课程、六张实拍、四篇微信原文入口、全部课程弹窗、分类筛选、咨询跳转、视频号复制、手机导航、320–1440px 横向溢出和控制台错误。PR 的 `Website checks / verify` 执行同一套检查。

## 内容和素材

- `src/App.tsx`：业务介绍、课程内容与页面交互。
- `src/components/CourseArt.tsx`：七种课程的原创 SVG 插图。
- `src/index.css`：新版视觉与响应式样式。
- `public/redesign/`：提交到仓库的 WebP 实拍、原品牌标志和官方客服二维码；构建无需访问本地素材目录。
- `public/redesign/sources.json`：六张实拍与用户提供的原始文件名对应关系。
- `scripts/prepare-media.mjs`：重新压缩素材，默认来源 `E:/redspider/pic`，可传入其他素材目录。

微信图文访问校验阻止了正文读取，因此保留用户提供的四个原文链接，未冒用文章标题、摘录或未经核实的师资姓名。教授授课、业务范围与视频号名称采用用户提供的信息。课程详情为方向介绍，未添加年龄、课时、费用与招生承诺。咨询使用原项目的官方客服二维码，不提供无法投递的表单。

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
