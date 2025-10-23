// ===================================
// Sora 2 System Card Interactive Features
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Mobile Menu Toggle
    // ===================================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking on a menu item
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // ===================================
    // Smooth Scroll with Offset for Fixed Navbar
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Ignore empty hash or just '#'
            if (href === '#' || href === '') return;
            
            const target = document.querySelector(href);
            if (!target) return;
            
            e.preventDefault();
            
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
    
    // ===================================
    // Scroll-based Animations
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.content-card, .point-card, .feature-item, .stack-layer, .risk-card, .practical-card, .step, .area-card'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // ===================================
    // Active Navigation Link on Scroll
    // ===================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    function highlightNavigation() {
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Initial call
    
    // ===================================
    // Navbar Shadow on Scroll
    // ===================================
    const navbar = document.querySelector('.navbar');
    
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        }
    }
    
    if (navbar) {
        window.addEventListener('scroll', handleNavbarScroll);
        handleNavbarScroll(); // Initial call
    }
    
    // ===================================
    // Back to Top Button (Optional Enhancement)
    // ===================================
    function createBackToTopButton() {
        const button = document.createElement('button');
        button.innerHTML = '<i class="fas fa-arrow-up"></i>';
        button.className = 'back-to-top';
        button.setAttribute('aria-label', '맨 위로 이동');
        document.body.appendChild(button);
        
        // Style the button
        Object.assign(button.style, {
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#10a37f',
            color: 'white',
            border: 'none',
            fontSize: '1.2rem',
            cursor: 'pointer',
            opacity: '0',
            visibility: 'hidden',
            transition: 'all 0.3s ease',
            zIndex: '999',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
        });
        
        // Show/hide button based on scroll
        function toggleBackToTop() {
            if (window.pageYOffset > 500) {
                button.style.opacity = '1';
                button.style.visibility = 'visible';
            } else {
                button.style.opacity = '0';
                button.style.visibility = 'hidden';
            }
        }
        
        window.addEventListener('scroll', toggleBackToTop);
        
        // Scroll to top on click
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Hover effect
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
            button.style.backgroundColor = '#0d8c6c';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
            button.style.backgroundColor = '#10a37f';
        });
    }
    
    createBackToTopButton();
    
    // ===================================
    // Interactive Card Hover Effects
    // ===================================
    const interactiveCards = document.querySelectorAll('.feature-item, .risk-card, .practical-card, .point-card');
    
    interactiveCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // ===================================
    // Copy Link on Section Title Click (Optional)
    // ===================================
    const sectionTitles = document.querySelectorAll('.section-title');
    
    sectionTitles.forEach(title => {
        const section = title.closest('section');
        if (section && section.id) {
            title.style.cursor = 'pointer';
            title.setAttribute('title', '링크 복사');
            
            title.addEventListener('click', function() {
                const url = `${window.location.origin}${window.location.pathname}#${section.id}`;
                
                // Copy to clipboard
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(url).then(() => {
                        showCopyNotification(this);
                    }).catch(err => {
                        console.error('복사 실패:', err);
                    });
                } else {
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = url;
                    document.body.appendChild(textArea);
                    textArea.select();
                    try {
                        document.execCommand('copy');
                        showCopyNotification(this);
                    } catch (err) {
                        console.error('복사 실패:', err);
                    }
                    document.body.removeChild(textArea);
                }
            });
        }
    });
    
    // Show copy notification
    function showCopyNotification(element) {
        const notification = document.createElement('span');
        notification.textContent = '링크 복사됨!';
        notification.style.cssText = `
            position: absolute;
            background-color: #10a37f;
            color: white;
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 0.9rem;
            font-weight: 500;
            z-index: 1000;
            pointer-events: none;
            animation: fadeInOut 2s ease;
        `;
        
        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInOut {
                0%, 100% { opacity: 0; transform: translateY(-10px); }
                10%, 90% { opacity: 1; transform: translateY(0); }
            }
        `;
        if (!document.querySelector('style[data-copy-notification]')) {
            style.setAttribute('data-copy-notification', 'true');
            document.head.appendChild(style);
        }
        
        element.style.position = 'relative';
        element.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 2000);
    }
    
    // ===================================
    // Print Functionality
    // ===================================
    function setupPrintStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @media print {
                .navbar, .mobile-menu-toggle, .back-to-top, .cta-buttons, .footer {
                    display: none !important;
                }
                .section {
                    page-break-inside: avoid;
                }
                body {
                    font-size: 12pt;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setupPrintStyles();
    
    // ===================================
    // Performance: Lazy Load Images (if any are added later)
    // ===================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ===================================
    // Console Easter Egg
    // ===================================
    console.log('%c🎬 Sora 2 System Card Guide', 'color: #10a37f; font-size: 20px; font-weight: bold;');
    console.log('%cOpenAI의 차세대 비디오 생성 AI 실무 가이드', 'color: #667eea; font-size: 14px;');
    console.log('%c이 웹사이트는 AI 실무 전문가를 위해 제작되었습니다. 🚀', 'color: #4a4a4a; font-size: 12px;');
    
    // ===================================
    // Accessibility: Keyboard Navigation Enhancement
    // ===================================
    document.addEventListener('keydown', function(e) {
        // Escape key closes mobile menu
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // ===================================
    // Log initialization
    // ===================================
    console.log('✅ Sora 2 Guide - All interactive features initialized successfully!');
});

// ===================================
// Service Worker Registration (Optional - for PWA)
// ===================================
// Uncomment if you want to add PWA capabilities
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('ServiceWorker registered'))
            .catch(err => console.log('ServiceWorker registration failed'));
    });
}
*/