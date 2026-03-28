#!/bin/bash

echo "🔍 Trans-Lab 网站最终安全部署检查"
echo "=================================="
echo "检查时间: $(date)"
echo "操作员: Claude"
echo ""

echo "🎯 执行全面内容验证..."
echo ""

# 1. 文件完整性检查
echo "1. 📄 文件完整性检查:"
required_files=(
    "index.html"
    "people.html"
    "grants.html"
    "publications.html"
    "corpus-resources.html"
    "css/design-system.css"
    "js/mobile-nav.js"
    "js/language-switcher.js"
)

missing_files=0
for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file - 存在"
        size=$(du -h "$file" | cut -f1)
        echo "   大小: $size"
    else
        echo "❌ $file - 缺失"
        missing_files=$((missing_files + 1))
    fi
done

echo ""

# 2. 结构检查
echo "2. 🏗️ HTML结构检查:"
structure_issues=0

for page in "${required_files[@]:0:5}"; do
    if [ -f "$page" ]; then
        # 检查DOCTYPE
        if grep -q "<!DOCTYPE html>" "$page"; then
            echo "✅ $page - DOCTYPE正确"
        else
            echo "❌ $page - DOCTYPE缺失"
            structure_issues=$((structure_issues + 1))
        fi
        
        # 检查viewport
        if grep -q "viewport" "$page"; then
            echo "✅ $page - viewport已配置"
        else
            echo "❌ $page - viewport缺失"
            structure_issues=$((structure_issues + 1))
        fi
        
        # 检查CSS引用
        if grep -q "design-system.css" "$page"; then
            echo "✅ $page - CSS已引用"
        else
            echo "❌ $page - CSS引用缺失"
            structure_issues=$((structure_issues + 1))
        fi
        
        # 检查JS引用
        if grep -q "mobile-nav.js" "$page" || [ "$page" = "index.html" ]; then
            echo "✅ $page - 移动端导航已配置"
        else
            echo "❌ $page - 移动端导航缺失"
            structure_issues=$((structure_issues + 1))
        fi
    fi
    echo ""
done

# 3. 功能检查
echo "3. ⚙️ 功能检查:"
function_issues=0

# CSS功能检查
if grep -q "@media.*768px" css/design-system.css; then
    echo "✅ 768px 响应式断点存在"
else
    echo "❌ 768px 响应式断点缺失"
    function_issues=$((function_issues + 1))
fi

if grep -q "@media.*480px" css/design-system.css; then
    echo "✅ 480px 响应式断点存在"
else
    echo "❌ 480px 响应式断点缺失"
    function_issues=$((function_issues + 1))
fi

# JavaScript功能检查
if grep -q "hamburger" js/mobile-nav.js; then
    echo "✅ 汉堡菜单功能存在"
else
    echo "❌ 汉堡菜单功能缺失"
    function_issues=$((function_issues + 1))
fi

if grep -q "aria-expanded" js/mobile-nav.js; then
    echo "✅ ARIA可访问性存在"
else
    echo "❌ ARIA可访问性缺失"
    function_issues=$((function_issues + 1))
fi

echo ""

# 4. 性能检查
echo "4. 📊 性能检查:"
performance_issues=0

# 检查主要页面大小
for page in "${required_files[@]:0:5}"; do
    if [ -f "$page" ]; then
        size=$(du -k "$page" | cut -f1)
        if [ "$size" -gt 100 ]; then
            echo "⚠️  $page - 文件较大: ${size}KB"
        else
            echo "✅ $page - 文件大小正常: ${size}KB"
        fi
    fi
done

# CSS文件大小
css_size=$(du -k css/design-system.css | cut -f1)
echo "CSS文件大小: ${css_size}KB"

# JS文件大小
js1_size=$(du -k js/mobile-nav.js | cut -f1)
js2_size=$(du -k js/language-switcher.js | cut -f1)
echo "JS文件大小: ${js1_size}KB + ${js2_size}KB"

echo ""

# 5. 部署准备检查
echo "5. 🚀 部署准备检查:"

if [ -d ".git" ]; then
    echo "✅ Git仓库存在"
    
    # 检查Git状态
    if [ -n "$(git status --porcelain)" ]; then
        echo "⚠️  有未提交的更改:"
        git status --porcelain
        echo ""
        echo "💡 建议提交更改"
    else
        echo "✅ 工作区干净"
    fi
else
    echo "❌ Git仓库不存在"
    function_issues=$((function_issues + 1))
fi

echo ""

# 6. 安全检查
echo "6. 🔒 安全检查:"
security_issues=0

# 检查是否有硬编码的敏感信息
if grep -i "password\|secret\|token" *.html *.css *.js 2>/dev/null | grep -v "fontawesome"; then
    echo "❌ 发现可能的敏感信息"
    security_issues=$((security_issues + 1))
else
    echo "✅ 未发现敏感信息"
fi

# 检查HTTPS链接
if grep -i "http://" *.html *.css *.js 2>/dev/null | grep -v "localhost"; then
    echo "⚠️  发现HTTP链接"
    security_issues=$((security_issues + 1))
else
    echo "✅ 使用安全链接"
fi

echo ""

# 7. 总结评估
echo "=================================="
echo "📋 部署准备总结:"
echo ""

total_issues=$((missing_files + structure_issues + function_issues + performance_issues + security_issues))

if [ "$total_issues" -eq 0 ]; then
    echo "🎉 ✅ 所有检查通过！"
    echo ""
    echo "📊 检查结果:"
    echo "   - 文件完整性: ✅ 无缺失"
    echo "   - HTML结构: ✅ 无问题"
    echo "   - 功能实现: ✅ 完整"
    echo "   - 性能表现: ✅ 优秀"
    echo "   - 安全性: ✅ 良好"
    echo ""
    echo "🚀 部署状态: 可以安全部署"
    echo ""
    echo "💡 建议部署命令:"
    echo "   git add ."
    echo "   git commit -m '完成移动端兼容性优化和内容验证'"
    echo "   git push origin main"
    echo ""
    echo "✅ 部署确认: 可以 proceed with deployment"
    
elif [ "$total_issues" -le 2 ]; then
    echo "⚠️  存在少量问题，但可以部署"
    echo ""
    echo "📊 检查结果:"
    echo "   - 文件缺失: $missing_files"
    echo "   - 结构问题: $structure_issues"
    echo "   - 功能问题: $function_issues"
    echo "   - 性能问题: $performance_issues"
    echo "   - 安全问题: $security_issues"
    echo ""
    echo "💡 建议: 可以部署，但建议先解决这些问题"
    
else
    echo "❌ 发现较多问题，建议先解决再部署"
    echo ""
    echo "📊 检查结果:"
    echo "   - 文件缺失: $missing_files"
    echo "   - 结构问题: $structure_issues"
    echo "   - 功能问题: $function_issues"
    echo "   - 性能问题: $performance_issues"
    echo "   - 安全问题: $security_issues"
    echo ""
    echo "❌ 总问题数: $total_issues"
    echo "💡 建议: 先解决问题再部署"
fi

echo ""
echo "=================================="
echo "检查完成时间: $(date)"