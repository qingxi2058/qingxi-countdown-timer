# 到点提醒 · 下班倒计时

把流逝的时间，变成可判断的进度。

这是一个给打工人用的轻量网页工具。输入下班时间和月薪后，页面会实时显示倒计时、时间进度和对应的金额感知，并在临近下班时给出提醒。

在线体验：

- https://qingxi-countdown-timer.vercel.app

快速部署（最省事）：

- 一键部署（Vercel）：https://vercel.com/new/clone?repository-url=https://github.com/qingxi2058/qingxi-countdown-timer
- 一行命令部署（已安装并登录 Vercel CLI 后）：
  `npx vercel --prod --yes`
- 如果你已经把仓库接到 Vercel，后续只要 `git push` 就会自动更新线上版本

主要特点：

- 实时显示距离下班还有多久
- 支持 30 分钟提前提醒
- 用更直观的文案和视觉状态表达“该下班了”
- 适合直接部署成静态网页使用

本仓库当前保留了两部分内容：

- 直接上线使用的静态页面版本
- 早期探索时保留的扩展文件

如果你只是想本地打开和体验，直接使用下面这组文件即可：

- `index.html`
- `app.js`
- `styles.css`
