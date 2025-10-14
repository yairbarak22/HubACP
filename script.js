// ================================
// WooACP Website - Production-Ready JavaScript
// ================================

(function() {
  'use strict';

  // ================================
  // Utility Functions
  // ================================

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // ================================
  // Smooth Scroll with Header Offset
  // ================================

  function initSmoothScroll() {
    const header = document.getElementById('header');
    const headerHeight = header ? header.offsetHeight : 72;

    // Handle all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Skip empty anchors or just #
        if (href === '#' || href.length <= 1) {
          e.preventDefault();
          return;
        }

        const targetElement = document.querySelector(href);

        if (targetElement) {
          e.preventDefault();

          // Close mobile menu if open
          closeMobileMenu();

          // Calculate scroll position accounting for sticky header
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ================================
  // Mobile Menu Toggle
  // ================================

  function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (!mobileMenuToggle || !mobileMenu) return;

    // Open mobile menu
    mobileMenuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      openMobileMenu();
    });

    // Close mobile menu
    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', function(e) {
        e.stopPropagation();
        closeMobileMenu();
      });
    }

    // Close when clicking outside
    mobileMenu.addEventListener('click', function(e) {
      if (e.target === mobileMenu) {
        closeMobileMenu();
      }
    });

    // Close when clicking on a navigation link
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        closeMobileMenu();
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenu && mobileMenuToggle) {
      mobileMenu.classList.add('active');
      mobileMenuToggle.classList.add('active');
      mobileMenuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenu && mobileMenuToggle) {
      mobileMenu.classList.remove('active');
      mobileMenuToggle.classList.remove('active');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  // ================================
  // FAQ Accordion (Improved)
  // ================================

  function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      const answerInner = item.querySelector('.faq-answer-inner');

      if (!question || !answer || !answerInner) return;

      question.addEventListener('click', function() {
        const isActive = item.classList.contains('active');

        // Close all other items smoothly
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            const otherAnswer = otherItem.querySelector('.faq-answer');
            const otherQuestion = otherItem.querySelector('.faq-question');

            otherItem.classList.remove('active');
            if (otherAnswer) otherAnswer.style.maxHeight = null;
            if (otherQuestion) otherQuestion.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current item
        if (!isActive) {
          item.classList.add('active');
          answer.style.maxHeight = answerInner.scrollHeight + 'px';
          question.setAttribute('aria-expanded', 'true');
        } else {
          item.classList.remove('active');
          answer.style.maxHeight = null;
          question.setAttribute('aria-expanded', 'false');
        }
      });

      // Keyboard accessibility
      question.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          question.click();
        }
      });
    });
  }

  // ================================
  // Header Scroll Effect
  // ================================

  function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;

    const handleScroll = debounce(function() {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.boxShadow = 'none';
      }

      lastScroll = currentScroll;
    }, 10);

    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // ================================
  // Intersection Observer for Scroll Animations
  // ================================

  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Set initial state only if not already set
          if (!entry.target.style.opacity || entry.target.style.opacity === '1') {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';
          }

          // Trigger animation
          setTimeout(() => {
            entry.target.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, 100);

          // Unobserve after animating
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
      '.feature-card, .pricing-card, .faq-item, .step-card'
    );

    // Set initial state for all elements
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      observer.observe(el);
    });
  }

  // ================================
  // Enhanced Card Interactions
  // ================================

  function initCardInteractions() {
    // Feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)';
      });
    });

    // Pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)';
      });
    });

    // Flow steps
    const flowSteps = document.querySelectorAll('.flow-step');
    flowSteps.forEach(step => {
      step.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)';
      });
    });
  }

  // ================================
  // Social Proof Logo Animations
  // ================================

  function initSocialProofAnimations() {
    const companyLogos = document.querySelectorAll('.company-logo');

    companyLogos.forEach((logo, index) => {
      // Stagger animation with delay
      setTimeout(() => {
        logo.style.opacity = '0';
        logo.style.transform = 'scale(0.8)';
        logo.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';

        setTimeout(() => {
          logo.style.opacity = '0.5';
          logo.style.transform = 'scale(1)';
        }, 50);
      }, index * 100);
    });
  }

  // ================================
  // Button Click Analytics (Placeholder)
  // ================================

  function initButtonTracking() {
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline');

    ctaButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        const buttonText = this.textContent.trim();
        const buttonHref = this.getAttribute('href');

        // Log button clicks (integrate with your analytics here)
        console.log('CTA Button Clicked:', {
          text: buttonText,
          href: buttonHref,
          timestamp: new Date().toISOString()
        });

        // Example: Track with Google Analytics
        // if (typeof gtag !== 'undefined') {
        //   gtag('event', 'cta_click', {
        //     'event_category': 'engagement',
        //     'event_label': buttonText
        //   });
        // }
      });
    });
  }

  // ================================
  // Focus Management for Accessibility
  // ================================

  function initFocusManagement() {
    // Add focus-visible class for keyboard navigation
    document.body.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
      }
    });

    document.body.addEventListener('mousedown', function() {
      document.body.classList.remove('keyboard-nav');
    });
  }

  // ================================
  // Window Resize Handler
  // ================================

  function initResizeHandler() {
    const handleResize = debounce(function() {
      // Close mobile menu on resize to desktop
      if (window.innerWidth >= 768) {
        closeMobileMenu();
      }

      // Recalculate FAQ answer heights
      document.querySelectorAll('.faq-item.active').forEach(item => {
        const answer = item.querySelector('.faq-answer');
        const answerInner = item.querySelector('.faq-answer-inner');
        if (answer && answerInner) {
          answer.style.maxHeight = answerInner.scrollHeight + 'px';
        }
      });
    }, 250);

    window.addEventListener('resize', handleResize);
  }

  // ================================
  // Initialize All Features
  // ================================

  function init() {
    // Core functionality
    initSmoothScroll();
    initMobileMenu();
    initFAQAccordion();
    initHeaderScroll();

    // Enhancements
    initScrollAnimations();
    initCardInteractions();
    initSocialProofAnimations();
    initButtonTracking();
    initFocusManagement();
    initResizeHandler();

    // Mark page as loaded
    document.body.classList.add('loaded');

    console.log('%cWooACP Website Loaded Successfully!', 'font-size: 16px; font-weight: bold; color: #8b5cf6;');
  }

  // ================================
  // DOMContentLoaded Event
  // ================================

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // ================================
  // Window Load Event
  // ================================

  window.addEventListener('load', function() {
    document.body.classList.add('page-loaded');
    console.log('All resources loaded');
  });

})();
