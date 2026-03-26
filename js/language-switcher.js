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
            'people.subtitle': '认识我们的研究团队',
            'people.pi': '实验室主任',
            'people.ra': '研究助理',
            'people.phd': '博士研究生',
            'people.alumni': '毕业学生',

            // Publications page
            'publications.title': '学术发表',
            'publications.subtitle': '探索翻译的语言特征与规律',
            'publications.search': '按标题、作者或关键词搜索...',
            'publications.filter.all': '全部类型',
            'publications.filter.journal': '期刊',
            'publications.filter.book': '书籍',
            'publications.filter.chapter': '书章',
            'publications.stats.journal': '期刊论文',
            'publications.stats.chapters': '书章',
            'publications.stats.books': '专著',

            // Grants page
            'grants.title': '研究项目',
            'grants.subtitle': '获得资助的研究项目',
            'grants.ongoing': '在研项目',
            'grants.completed': '已完成项目',
            'grants.amount': '资助金额',
            'grants.period': '项目周期',
            'grants.pi': '项目负责人',
            'grants.coordinator': '项目协调人',

            // Resources page
            'resources.title': '语料资源',
            'resources.subtitle': '翻译研究语料库与工具',
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
        switcher.innerHTML = `
            <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en" title="English">
                EN
            </button>
            <button class="lang-btn ${currentLang === 'zh' ? 'active' : ''}" data-lang="zh" title="中文">
                中
            </button>
        `;

        // Add event listeners
        switcher.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                updateLanguage(btn.dataset.lang);
            });
        });

        return switcher;
    }

    // Initialize
    function init() {
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .language-switcher {
                display: flex;
                gap: 0.25rem;
                background: rgba(255, 255, 255, 0.1);
                padding: 0.25rem;
                border-radius: 0.5rem;
                margin-left: 1rem;
            }
            .lang-btn {
                padding: 0.375rem 0.75rem;
                border: none;
                background: transparent;
                color: white;
                font-weight: 600;
                font-size: 0.875rem;
                cursor: pointer;
                border-radius: 0.375rem;
                transition: all 0.2s;
            }
            .lang-btn:hover {
                background: rgba(255, 255, 255, 0.2);
            }
            .lang-btn.active {
                background: white;
                color: var(--color-primary-700, #1e40af);
            }
            @media (max-width: 768px) {
                .language-switcher {
                    order: -1;
                    margin-left: 0;
                    margin-bottom: 0.5rem;
                }
            }
        `;
        document.head.appendChild(style);

        // Find navigation and add switcher
        const nav = document.querySelector('nav .nav-menu');
        if (nav) {
            const switcher = createLanguageSwitcher();
            nav.parentElement.appendChild(switcher);
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
