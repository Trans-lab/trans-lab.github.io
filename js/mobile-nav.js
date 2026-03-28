// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const headerInner = document.querySelector('.header-inner');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const languageSwitcher = document.querySelector('.language-switcher');
    
    // Create hamburger menu for mobile
    if (!document.querySelector('.hamburger')) {
        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = `
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        `;
        hamburger.setAttribute('aria-label', 'Toggle navigation menu');
        hamburger.setAttribute('aria-expanded', 'false');
        
        // Insert hamburger menu before nav
        if (headerInner) {
            headerInner.insertBefore(hamburger, navMenu);
        }
        
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
            header.classList.toggle('menu-open');
        });
    }
    
    // Close menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const hamburger = document.querySelector('.hamburger');
            if (hamburger) {
                hamburger.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
                header.classList.remove('menu-open');
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!header.contains(event.target)) {
            const hamburger = document.querySelector('.hamburger');
            if (hamburger) {
                hamburger.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
                header.classList.remove('menu-open');
            }
        }
    });
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            const hamburger = document.querySelector('.hamburger');
            if (hamburger) {
                hamburger.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
                header.classList.remove('menu-open');
            }
        }, 250);
    });
});