#!/bin/bash

echo "🔄 重新组织论文排序，确保2024年在2025和2023之间..."

# 创建临时文件
temp_file="publications_reorganized.html"

# 备份原文件
cp publications.html publications_backup.html

# 提取各个年份的内容
year_2026=$(sed -n '/<!-- 2026 -->/,/<!--.*-->/p' publications.html | sed '/<!--.*-->/d')
year_2025=$(sed -n '/<!-- 2025 -->/,/<!--.*-->/p' publications.html | sed '/<!--.*-->/d')
year_2024=$(sed -n '/<!-- 2024 -->/,/<!--.*-->/p' publications.html | sed '/<!--.*-->/d')
year_2023=$(sed -n '/<!-- 2023 -->/,/<!--.*-->/p' publications.html | sed '/<!--.*-->/d')
year_2022=$(sed -n '/<!-- 2022 -->/,/<!--.*-->/p' publications.html | sed '/<!--.*-->/d')
year_2021=$(sed -n '/<!-- 2021 -->/,/<!--.*-->/p' publications.html | sed '/<!--.*-->/d')
year_2020=$(sed -n '/<!-- 2020 -->/,/<!--.*-->/p' publications.html | sed '/<!--.*-->/d')
year_2014=$(sed -n '/<!-- 2014 -->/,/<!--.*-->/p' publications.html | sed '/<!--.*-->/d')
year_2011=$(sed -n '/<!-- 2011 -->/,/<!--.*-->/p' publications.html | sed '/<!--.*-->/d')

# 获取文件头部（到开始年份内容之前）
header_end=$(grep -n "<!-- 2026 -->" publications.html | head -1 | cut -d: -f1)
head -n $((header_end - 1)) publications.html > "$temp_file"

# 重新排序年份：2026 -> 2025 -> 2024 -> 2023 -> 2022 -> 2021 -> 2020 -> 2014 -> 2011
echo "$year_2026" >> "$temp_file"
echo "$year_2025" >> "$temp_file"
echo "$year_2024" >> "$temp_file"
echo "$year_2023" >> "$temp_file"
echo "$year_2022" >> "$temp_file"
echo "$year_2021" >> "$temp_file"
echo "$year_2020" >> "$temp_file"
echo "$year_2014" >> "$temp_file"
echo "$year_2011" >> "$temp_file"

# 添加文件尾部
tail -n +$(grep -n "</section>" publications.html | head -1 | cut -d: -f1) publications.html >> "$temp_file"

# 替换原文件
mv "$temp_file" publications.html

echo "✅ 论文排序已重新组织："
echo "1. 2026 (最新)"
echo "2. 2025"
echo "3. 2024 (已移到正确位置)"
echo "4. 2023"
echo "5. 2022"
echo "6. 2021"
echo "7. 2020"
echo "8. 2014"
echo "9. 2011 (最早)"

# 验证新的排序
echo ""
echo "📊 验证新的年份排序："
grep -n "data-year.*20[0-9][0-9]" publications.html

echo ""
echo "✅ 论文排序重新组织完成！"