#!/bin/bash
# ══════════════════════════════════════════════════════
# sync-timer.sh — 一键同步 + 双仓库推送
# 用法：在终端执行  bash sync-timer.sh
# ══════════════════════════════════════════════════════

SRC="/Users/zhangxin/3-主项目/1-项目库/001骂人功能的下班倒计时屏保"
DST="/Users/zhangxin/3-主项目/1-项目库/清溪-个人网页/timer"

echo "📦 同步文件到中国版目录..."
rsync -av --delete \
  --exclude='.git' \
  --exclude='.vercel' \
  --exclude='node_modules' \
  --exclude='App.tsx' \
  --exclude='index.tsx' \
  --exclude='types.ts' \
  --exclude='tsconfig.json' \
  --exclude='vite.config.ts' \
  --exclude='package.json' \
  --exclude='metadata.json' \
  --exclude='README.md' \
  --exclude='vercel.json' \
  --exclude='*.save' \
  --exclude='sync-timer.sh' \
  "$SRC/" "$DST/"

echo ""
echo "🚀 推送国际版（qingxi-countdown-timer）..."
cd "$SRC"
git add -A
git commit -m "sync: 同步更新 $(date '+%Y-%m-%d %H:%M')" 2>/dev/null || echo "（无新改动）"
git push origin main

echo ""
echo "🚀 推送中国版（qingxi-portfolio/timer）..."
cd "/Users/zhangxin/3-主项目/1-项目库/清溪-个人网页"
git add timer/
git commit -m "sync: 同步 timer 更新 $(date '+%Y-%m-%d %H:%M')" 2>/dev/null || echo "（无新改动）"
git push origin main

echo ""
echo "✅ 全部完成！Vercel 将自动部署，1-2分钟后生效。"
echo "   国际版：https://qingxi-countdown-timer.vercel.app"
echo "   中国版：https://qingxihub.com/timer/"
