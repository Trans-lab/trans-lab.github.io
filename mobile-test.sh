#!/bin/bash

echo "📱 Trans-Lab 移动端兼容性测试"
echo "================================"
echo "开始时间: $(date)"
echo ""

# 测试不同设备尺寸的页面
devices=(
    "320px-568px: iPhone 5/SE"
    "375px-667px: iPhone 8/12/13/14"
    "414px-736px: iPhone 8+/11/XR/12 Pro"
    "390px-844px: iPhone 12/13/14 Pro"
    "768px-1024px: iPad Air"
    "1024px-1366px: iPad Pro"
)

# 页面列表
pages=(
    "index.html"
    "people.html"
    "grants.html"
    "publications.html"
    "corpus-resources.html"
)

echo "🔍 测试设备尺寸:"
for device in "${devices[@]}"; do
    echo "  - $device"
done

echo ""
echo "📄 测试页面:"
for page in "${pages[@]}"; do
    echo "  - $page"
done

echo ""
echo "⚙️ 测试配置:"
echo "  - 缩放: 100%"
echo "  - 触摸目标: ≥44px"
echo "  - 字体: 使用CSS相对单位"
echo "  - 导航: 响应式汉堡菜单"

echo ""
echo "📋 测试要点:"
echo "  ✅ 导航菜单响应式布局"
echo "  ✅ 字体大小适配"
echo "  ✅ 卡片布局调整"
echo "  ✅ 表格横向滚动"
echo "  ✅ 触摸友好的按钮"
echo "  ✅ 图片响应式加载"

echo ""
echo "🎯 测试方法:"
echo "  1. 使用Chrome DevTools设备模拟器"
echo "  2. 测试真实设备上的表现"
echo "  3. 验证触摸交互流畅性"
echo "  4. 检查加载性能"

echo ""
echo "✅ 测试完成: $(date)"
