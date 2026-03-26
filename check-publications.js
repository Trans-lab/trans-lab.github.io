#!/usr/bin/env node
/**
 * 文章匹配检查脚本
 * 用于验证 publications.html 中的文章是否与 PDF 文件匹配
 */

const fs = require('fs');
const path = require('path');

// 配置
const SITE_DIR = __dirname;
const PDF_DIR = path.join(SITE_DIR, 'file');
const PUBLICATIONS_FILE = path.join(SITE_DIR, 'publications.html');

// 颜色输出
const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
};

function log(color, message) {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

// 获取所有 PDF 文件
function getPDFFiles() {
    try {
        return fs.readdirSync(PDF_DIR)
            .filter(file => file.endsWith('.pdf'))
            .sort();
    } catch (error) {
        log('red', `错误: 无法读取 PDF 目录 - ${error.message}`);
        return [];
    }
}

// 解析 publications.html 获取所有 PDF 引用
function parsePublications() {
    try {
        const content = fs.readFileSync(PUBLICATIONS_FILE, 'utf8');
        const pdfRegex = /href="file\/([^"]+\.pdf)"/g;
        const pdfs = new Set();
        let match;
        
        while ((match = pdfRegex.exec(content)) !== null) {
            pdfs.add(match[1]);
        }
        
        return Array.from(pdfs).sort();
    } catch (error) {
        log('red', `错误: 无法读取 publications.html - ${error.message}`);
        return [];
    }
}

// 检查匹配情况
function checkMatching() {
    log('cyan', '\n📚 文章匹配检查报告');
    log('cyan', '=' .repeat(60));
    
    const pdfFiles = getPDFFiles();
    const publishedPdfs = parsePublications();
    
    log('blue', `\n📊 统计信息:`);
    log('reset', `  PDF 文件总数: ${pdfFiles.length}`);
    log('reset', `  已发布引用数: ${publishedPdfs.length}`);
    
    // 找出未引用的 PDF
    const unreferenced = pdfFiles.filter(pdf => !publishedPdfs.includes(pdf));
    
    // 找出缺失的 PDF
    const missing = publishedPdfs.filter(pdf => !pdfFiles.includes(pdf));
    
    // 报告结果
    if (unreferenced.length > 0) {
        log('yellow', `\n⚠️  未引用的 PDF 文件 (${unreferenced.length}):`);
        unreferenced.slice(0, 10).forEach(pdf => {
            log('reset', `  - ${pdf}`);
        });
        if (unreferenced.length > 10) {
            log('yellow', `  ... 还有 ${unreferenced.length - 10} 个文件`);
        }
    }
    
    if (missing.length > 0) {
        log('red', `\n❌ 缺失的 PDF 文件 (${missing.length}):`);
        missing.forEach(pdf => {
            log('reset', `  - ${pdf}`);
        });
    }
    
    if (unreferenced.length === 0 && missing.length === 0) {
        log('green', '\n✅ 所有 PDF 文件匹配正确！');
    }
    
    log('cyan', '\n' + '=' .repeat(60));
    
    return {
        total: pdfFiles.length,
        published: publishedPdfs.length,
        unreferenced: unreferenced.length,
        missing: missing.length
    };
}

// 检查发表年份和作者
function checkPublicationDetails() {
    try {
        const content = fs.readFileSync(PUBLICATIONS_FILE, 'utf8');
        
        // 检查年份分布
        const yearRegex = /<h3[^>]*>(\d{4})<\/h3>/g;
        const years = {};
        let match;
        
        while ((match = yearRegex.exec(content)) !== null) {
            const year = match[1];
            years[year] = (years[year] || 0) + 1;
        }
        
        log('blue', '\n📅 年份分布:');
        Object.keys(years).sort().reverse().forEach(year => {
            log('reset', `  ${year}: ${years[year]} 篇`);
        });
        
    } catch (error) {
        log('red', `错误: 无法检查发表详情 - ${error.message}`);
    }
}

// 主函数
function main() {
    const args = process.argv.slice(2);
    
    if (args.includes('--help')) {
        console.log(`
用法: node check-publications.js [选项]

选项:
  --help        显示帮助信息
  --quiet       静默模式，只显示错误
  --full        完整检查（包括年份分布）

示例:
  node check-publications.js
  node check-publications.js --full
        `);
        return;
    }
    
    const result = checkMatching();
    
    if (args.includes('--full')) {
        checkPublicationDetails();
    }
    
    // 返回退出代码
    process.exit(result.missing > 0 ? 1 : 0);
}

// 运行
main();
