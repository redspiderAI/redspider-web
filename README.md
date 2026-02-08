# 项目说明

这是一个基于 Vite + React + TypeScript + Tailwind 的前端演示项目。

下面说明如何在本地安装、配置并运行该项目（Windows / PowerShell）：

## 先决条件

- 安装 Node.js（包含 npm）。可从 <https://nodejs.org/> 下载并安装。建议安装 LTS 版本。

## 本地运行步骤

1. 在项目根目录打开 PowerShell（或其他终端）。

2. 安装项目依赖：

   ```powershell
   npm install
   ```

   注意：安装过程中若命令行出现类似的提示：

   ```powershell
   npm notice To update run: npm install -g npm@11.6.2
   ```

   请按提示更新全局 npm（需要管理员权限）：

   ```powershell
   npm install -g npm@11.6.2
   ```

3. 启动开发服务器：

   ```powershell
   npm run dev
   ```

4. 启动后在终端会显示类似信息，找到 `Local` 地址并在浏览器中打开：

   ```powershell
   ➜  Local:   http://localhost:5173/
   ```

点击或手动在浏览器中打开该地址即可看到本项目页面。

## 静态资源（图片）说明

- 本项目示例引用了 `data/pic` 下的图片资源（路径如 `/data/pic/xxx.png`）。
- 开发时建议把图片放到项目根的 `public/data/pic/` 目录中，这样在运行时可通过 `/data/pic/...` 直接访问。

例如目录结构（示例）：

```powershell
project/
├─ public/
│  └─ data/
│     └─ pic/
│        ├─ 智能生产管理系统.png
│        ├─ 生产原料价格管理.png
│        └─ ...
└─ src/
   └─ components/
```

## 常见问题

- 若遇到浏览器控制台报错 `ERR_BLOCKED_BY_CLIENT`：通常是浏览器插件（如 AdBlock、uBlock 等）拦截了某些资源。建议：
  - 在无扩展的隐身窗口打开页面排查；或
  - 暂时禁用或为 `localhost` 添加白名单。

- 若看到 React 组件报错（如 `ReferenceError: Users is not defined`）：说明代码中有未导入的符号，查看控制台堆栈并定位到 `src/components` 对应文件修复即可.
