// Language Switcher System for Trans-Lab Website
// Supports English (EN) and Chinese (ZH)

(function() {
    'use strict';

    // Language data
    const translations = {
        zh: {
            // Navigation
            'nav.home': '首页',
            'nav.people': '团队成员',
            'nav.grants': '研究项目',
            'nav.publications': '学术发表',
            'nav.resources': '语料资源',

            // Common
            'common.search': '搜索...',
            'common.all': '全部',
            'common.journal': '期刊论文',
            'common.book': '书籍',
            'common.chapter': '书章',
            'common.pdf': 'PDF',
            'common.doi': 'DOI',
            'common.publisher': '出版社',
            'common.publications': '学术发表',
            'common.viewAll': '查看全部',

            // Home page
            'home.hero.title': '量化翻译研究实验室',
            'home.hero.subtitle': '香港理工大学',
            'home.hero.description': '探索翻译的语言特征，推动跨语言研究前沿',
            'home.cta.explore': '探索我们的研究',
            'home.about.title': '欢迎来到我们的实验室',
            'home.about.desc1': '我们的实验室位于香港理工大学中文及双语学系和翻译中心，在采用量化和实证方法研究翻译方面处于前沿地位。我们运用人工智能等尖端技术来深化对翻译的理解和实践。',
            'home.about.desc2': '我们热衷于探索基于语料库的方法，这使我们能够分析大量数据集并识别翻译中的新兴模式。我们的承诺延伸到翻译教学领域，我们整合最新的技术进步以提高教育成果。',
            'home.research.title': '研究方向',
            'home.research.ai.title': 'AI 与翻译',
            'home.research.ai.desc': '开发和应用人工智能工具以简化和增强翻译流程。从机器翻译到智能翻译辅助工具。',
            'home.research.corpus.title': '语料库研究',
            'home.research.corpus.desc': '利用大量文本语料库研究翻译模式并改进方法论。大数据方法理解翻译现象。',
            'home.research.empirical.title': '实证翻译研究',
            'home.research.empirical.desc': '通过系统的实证方法研究翻译的有效性和策略。循证翻译研究方法。',
            'home.research.pedagogy.title': '技术教学法',
            'home.research.pedagogy.desc': '通过整合创新技术来增强翻译教育。为学生准备翻译的未来。',
            'home.research.cultural.title': '跨文化交际',
            'home.research.cultural.desc': '研究翻译语境中多语言和跨文化互动的细微差别。理解翻译中的文化维度。',
            'home.stats.projects': '研究项目',
            'home.stats.publications': '学术论文',
            'home.stats.team': '团队成员',
            'home.stats.funding': '百万港币资助',
            'home.cta.title': '加入我们的研究团队',
            'home.cta.desc': '有兴趣与我们合作或学习吗？我们一直在寻找充满热情的研究人员和学生加入我们的团队。',
            'home.cta.team': '认识团队',
            'home.cta.contact': '联系我们',

            // People page
            'people.title': '团队成员',
            'people.subtitle': '认识推动量化翻译研究创新的研究人员',
            'people.members': '实验室成员',
            'people.pi': '副教授 & 实验室主任',
            'people.ra': '研究助理',
            'people.phd': '博士研究生',
            'people.alumni': '毕业学生',
            'people.cv': '下载简历',
            'people.tag.corpus': '语料库翻译研究',
            'people.tag.quant': '量化方法',
            'people.tag.ai': 'AI 与翻译',
            'people.tag.pedagogy': '翻译教学法',
            'people.tag.hongloumeng': '红楼梦研究',
            'people.tag.psych': '心理学方法',
            'people.join.title': '加入我们的团队',
            'people.join.desc': '我们一直在寻找对量化翻译研究充满热情的研究人员和学生。联系我们探索机会！',
            'people.join.contact': '联系我们',

            // Publications page
            'publications.title': '学术发表',
            'publications.subtitle': '量化翻译研究的学术贡献',
            'publications.search': '按标题、作者或关键词搜索...',
            'publications.filter.all': '全部类型',
            'publications.filter.journal': '期刊',
            'publications.filter.book': '书籍',
            'publications.filter.chapter': '书章',
            'publications.stats.total': '总发表',
            'publications.stats.journal': '期刊论文',
            'publications.stats.chapters': '书章',
            'publications.stats.books': '专著与编书',

            // Grants page
            'grants.title': '研究项目',
            'grants.subtitle': '支持量化翻译研究的创新项目',
            'grants.stats.funding': '总资助金额（港币）',
            'grants.stats.total': '研究项目',
            'grants.stats.external': '外部资助',
            'grants.stats.internal': '内部资助',
            'grants.chart.title': '资助分布',
            'grants.timeline': '项目时间线',
            'grants.ongoing': '在研项目',
            'grants.completed': '已完成项目',
            'grants.amount': '资助金额',
            'grants.period': '项目周期',
            'grants.pi': '项目负责人',
            'grants.coordinator': '项目协调人',

            // Resources page
            'resources.title': '语料资源',
            'resources.subtitle': '翻译研究语料库与计算语言学工具',
            'resources.corpora': '语料库',
            'resources.tools': '研究工具',
            'resources.datasets': '数据集',

            // Footer
            'footer.copyright': '© 2024 量化翻译研究实验室',
            'footer.dept': '中文及双语学系 | 香港理工大学',
            'footer.address': '地址',
            'footer.contact': '联系方式',
            'footer.follow': '关注我们',
        },
        en: {
            // Default English - already in HTML
        }
    };

    // Current language
    let currentLang = localStorage.getItem('lang') || 'en';

    // Get translation
    function t(key) {
        return translations[currentLang][key] || translations['en'][key] || key;
    }

    // Update all translatable elements
    function updateLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);

        // Update elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = t(key);
            if (translation) {
                el.textContent = translation;
            }
        });

        // Update elements with data-i18n-placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translation = t(key);
            if (translation) {
                el.placeholder = translation;
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Show/hide language-specific content
        document.querySelectorAll('.lang-en').forEach(el => {
            el.style.display = lang === 'en' ? '' : 'none';
        });
        document.querySelectorAll('.lang-zh').forEach(el => {
            el.style.display = lang === 'zh' ? '' : 'none';
        });
    }

    // Create language switcher button
    function createLanguageSwitcher() {
        const switcher = document.createElement('div');
        switcher.className = 'language-switcher';
        
        // 显示目标语言（而不是当前语言）
        const targetLang = currentLang === 'en' ? 'zh' : 'en';
        const buttonText = targetLang === 'zh' ? '中文' : 'EN';
        const buttonTitle = targetLang === 'zh' ? '切换到中文' : 'Switch to English';
        
        switcher.innerHTML = `
            <button class="lang-btn" data-lang="${targetLang}" title="${buttonTitle}">
                ${buttonText}
            </button>
        `;

        // Add event listener
        const btn = switcher.querySelector('.lang-btn');
        btn.addEventListener('click', () => {
            const newLang = btn.dataset.lang;
            updateLanguage(newLang);
            // 更新按钮文本
            const newTargetLang = newLang === 'en' ? 'zh' : 'en';
            const newText = newTargetLang === 'zh' ? '中文' : 'EN';
            const newTitle = newTargetLang === 'zh' ? '切换到中文' : 'Switch to English';
            btn.textContent = newText;
            btn.title = newTitle;
            btn.dataset.lang = newTargetLang;
        });

        return switcher;
    }

    // Initialize
    function init() {
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .language-switcher {
                position: absolute;
                right: 1.5rem;
                top: 50%;
                transform: translateY(-50%);
                display: flex;
                align-items: center;
                gap: 0.25rem;
                background: rgba(255, 255, 255, 0.95);
                padding: 0.375rem 0.75rem;
                border-radius: 0.5rem;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
                border: 2px solid rgba(59, 130, 246, 0.3);
                z-index: 10;
            }
            .lang-btn {
                padding: 0.5rem 1rem;
                border: none;
                background: linear-gradient(135deg, #3b82f6, #2563eb);
                color: white;
                font-weight: 600;
                font-size: 0.9rem;
                cursor: pointer;
                border-radius: 0.375rem;
                transition: all 0.3s ease;
                white-space: nowrap;
            }
            .lang-btn:hover {
                background: linear-gradient(135deg, #2563eb, #1d4ed8);
                transform: translateY(-1px);
                box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
            }
            .lang-btn:active {
                transform: translateY(0);
            }
            @media (max-width: 768px) {
                .language-switcher {
                    position: relative;
                    right: auto;
                    top: auto;
                    transform: none;
                    order: -1;
                    margin-bottom: 0.5rem;
                    margin-left: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Find header and add switcher to the right side
        const header = document.querySelector('.header-inner');
        if (header) {
            const switcher = createLanguageSwitcher();
            header.appendChild(switcher);
        }

        // Apply saved language
        if (currentLang !== 'en') {
            updateLanguage(currentLang);
        }
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose globally
    window.i18n = {
        t: t,
        updateLanguage: updateLanguage,
        currentLang: () => currentLang
    };
})();
