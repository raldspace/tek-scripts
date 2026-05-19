(function() {
  'use strict';

  const CONFIG = {
    companyName: 'Tecscripts Digital Solutions',
    phone: '770-450-0698',
    email: 'info@tecscripts.com',
    address: 'Uptown Dallas, TX 75204',
    url: 'https://tecscripts.com'
  };

  const HEADER_HTML = `
    <div class="header-inner">
      <a href="./" class="logo">
        <span class="logo-icon">TS</span>
        <span class="logo-text">Tecscripts<span class="logo-accent"> Digital</span></span>
      </a>
      
      <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <nav class="main-nav" id="mainNav">
        <ul class="nav-list">
          <li><a href="./" data-nav="index">Home</a></li>
          <li><a href="./about" data-nav="about">About</a></li>
          <li class="has-dropdown">
            <a href="./services" data-nav="services">Services</a>
            <ul class="dropdown">
              <li class="dropdown-header">Digital Marketing</li>
              <li><a href="./seo-services" data-nav="seo-services">SEO Services</a></li>
              <li><a href="./google-business-profile" data-nav="google-business-profile">Google Business Profile</a></li>
              <li><a href="./local-seo" data-nav="local-seo">Local SEO</a></li>
              <li><a href="./social-media-marketing" data-nav="social-media-marketing">Social Media Marketing</a></li>
              <li><a href="./social-media-management" data-nav="social-media-management">Social Media Management</a></li>
              <li><a href="./marketing-consultation" data-nav="marketing-consultation">Marketing Consultation</a></li>
              <li class="dropdown-divider"></li>
              <li class="dropdown-header">Web Development</li>
              <li><a href="./website-development" data-nav="website-development">Website Development</a></li>
              <li><a href="./web-application-development" data-nav="web-application-development">Web Application Development</a></li>
              <li><a href="./laravel-development" data-nav="laravel-development">Laravel Development</a></li>
              <li><a href="./frontend-development" data-nav="frontend-development">Frontend Development</a></li>
              <li><a href="./api-development" data-nav="api-development">API Development</a></li>
              <li><a href="./website-maintenance" data-nav="website-maintenance">Website Maintenance</a></li>
            </ul>
          </li>
          <li><a href="./portfolio" data-nav="portfolio">Portfolio</a></li>
          <li><a href="./industries" data-nav="industries">Industries</a></li>
          <li><a href="./testimonials" data-nav="testimonials">Testimonials</a></li>
          <li><a href="./blog" data-nav="blog">Blog</a></li>
          <li><a href="./faq" data-nav="faq">FAQ</a></li>
          <li><a href="./contact" class="nav-cta" data-nav="contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  `;

  const FOOTER_HTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="./" class="footer-logo">
            <span class="logo-icon">TS</span>
            <span class="logo-text">Tecscripts<span class="logo-accent"> Digital</span></span>
          </a>
          <p class="footer-tagline">Helping businesses grow through digital marketing, SEO & custom web development. Your full-service digital growth partner.</p>
          <div class="social-links">
            <a href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
            <a href="#" aria-label="Twitter"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg></a>
            <a href="#" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
            <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" stroke-width="2"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" stroke-width="2"/></svg></a>
          </div>
        </div>
        
        <div class="footer-links">
          <h4>Digital Marketing</h4>
          <ul>
            <li><a href="./seo-services">SEO Services</a></li>
            <li><a href="./google-business-profile">Google Business Profile</a></li>
            <li><a href="./local-seo">Local SEO</a></li>
            <li><a href="./social-media-marketing">Social Media Marketing</a></li>
            <li><a href="./social-media-management">Social Media Management</a></li>
            <li><a href="./marketing-consultation">Marketing Consultation</a></li>
          </ul>
        </div>
        
        <div class="footer-links">
          <h4>Web Development</h4>
          <ul>
            <li><a href="./website-development">Website Development</a></li>
            <li><a href="./web-application-development">Web Application Development</a></li>
            <li><a href="./laravel-development">Laravel Development</a></li>
            <li><a href="./frontend-development">Frontend Development</a></li>
            <li><a href="./api-development">API Development</a></li>
            <li><a href="./website-maintenance">Website Maintenance</a></li>
          </ul>
        </div>
        
        <div class="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="./about">About Us</a></li>
            <li><a href="./portfolio">Portfolio</a></li>
            <li><a href="./industries">Industries</a></li>
            <li><a href="./testimonials">Testimonials</a></li>
            <li><a href="./blog">Blog</a></li>
            <li><a href="./faq">FAQ</a></li>
            <li><a href="./contact">Contact</a></li>
          </ul>
        </div>
        
        <div class="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>${CONFIG.address}</span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              <a href="tel:${CONFIG.phone}">${CONFIG.phone}</a>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:${CONFIG.email}">${CONFIG.email}</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} ${CONFIG.companyName}. All rights reserved.</p>
        <div class="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </div>
  `;

  function initCleanURLRouter() {
    document.body.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;
      
      let href = link.getAttribute('href');
      if (!href) return;
      
      if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
      }
      
      if (!href.includes('.html') && href !== './' && href !== '' && href !== '.') {
        e.preventDefault();
        navigateToPage(href);
      }
    });
    
    const currentPath = window.location.pathname;
    const fileName = currentPath.split('/').pop();
    
    if (fileName === 'index.html') {
      const newPath = currentPath.replace('index.html', '');
      window.history.replaceState(null, '', newPath);
    }
    
    if (fileName && fileName.includes('.html') && fileName !== 'index.html') {
      const cleanUrl = currentPath.replace('.html', '');
      window.history.replaceState(null, '', cleanUrl);
      loadPageContent(cleanUrl);
    }
  }
  
  function navigateToPage(url) {
    let cleanUrl = url;
    if (cleanUrl.startsWith('./')) {
      cleanUrl = cleanUrl.substring(1);
    }
    if (!cleanUrl.startsWith('/')) {
      cleanUrl = '/' + cleanUrl;
    }
    window.history.pushState(null, '', cleanUrl);
    loadPageContent(cleanUrl);
  }
  
  function loadPageContent(cleanUrl) {
    let htmlPath = cleanUrl;
    
    if (htmlPath === '/' || htmlPath === '' || htmlPath === './') {
      htmlPath = '/index.html';
    } else {
      if (htmlPath.endsWith('/')) {
        htmlPath = htmlPath.slice(0, -1);
      }
      htmlPath = htmlPath + '.html';
    }
    
    if (htmlPath.startsWith('/')) {
      htmlPath = htmlPath.substring(1);
    }
    
    fetch(htmlPath)
      .then(response => {
        if (!response.ok) throw new Error('Page not found');
        return response.text();
      })
      .then(html => {
        updatePageContent(html);
        const titleMatch = html.match(/<title>(.*?)<\/title>/);
        if (titleMatch) {
          document.title = titleMatch[1];
        }
        window.scrollTo(0, 0);
      })
      .catch(error => {
        console.error('Failed to load page:', error);
      });
  }
  
  function updatePageContent(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const newContent = doc.querySelector('main');
    const currentContent = document.querySelector('main');
    
    if (newContent && currentContent) {
      currentContent.innerHTML = newContent.innerHTML;
      reinitializePageScripts();
      initMobileNav();
      highlightActiveNav();
    } else {
      window.location.reload();
    }
  }
  
  function reinitializePageScripts() {
    initScrollReveal();
    initAccordion();
    initCounters();
    initForms();
    initTabs();
    initParallax();
    initSmoothScroll();
    
    if (window.innerWidth <= 1024) {
      const nav = document.getElementById('mainNav');
      if (nav) {
        const dropdowns = nav.querySelectorAll('.has-dropdown > a');
        dropdowns.forEach(dropdownLink => {
          const newDropdownLink = dropdownLink.cloneNode(true);
          dropdownLink.parentNode.replaceChild(newDropdownLink, dropdownLink);
          
          newDropdownLink.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = this.parentElement;
            parent.classList.toggle('dropdown-open');
          });
        });
      }
    }
  }

  function injectHeader() {
    const header = document.getElementById('site-header');
    if (header) {
      header.innerHTML = HEADER_HTML;
      initMobileNav();
      highlightActiveNav();
    }
  }

  function injectFooter() {
    const footer = document.getElementById('site-footer');
    if (footer) {
      footer.innerHTML = FOOTER_HTML;
    }
  }

  function initMobileNav() {
    const btn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('mainNav');
    
    if (!btn || !nav) {
      return;
    }

    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    
    newBtn.classList.remove('active');
    nav.classList.remove('active');
    document.body.classList.remove('nav-open');
    
    let originalBodyOverflow = '';
    let originalBodyPosition = '';
    let originalBodyWidth = '';
    let originalBodyHeight = '';
    
    function openMenu() {
      originalBodyOverflow = document.body.style.overflow;
      originalBodyPosition = document.body.style.position;
      originalBodyWidth = document.body.style.width;
      originalBodyHeight = document.body.style.height;
      
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      
      newBtn.classList.add('active');
      nav.classList.add('active');
      document.body.classList.add('nav-open');
    }
    
    function closeMenu() {
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.position = originalBodyPosition;
      document.body.style.width = originalBodyWidth;
      document.body.style.height = originalBodyHeight;
      
      newBtn.classList.remove('active');
      nav.classList.remove('active');
      document.body.classList.remove('nav-open');
    }
    
    newBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (nav.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
    
    nav.querySelectorAll('.nav-list > li > a').forEach(link => {
      const parentLi = link.parentElement;
      const isDropdown = parentLi && parentLi.classList.contains('has-dropdown');
      const newLink = link.cloneNode(true);
      link.parentNode.replaceChild(newLink, link);
      
      newLink.addEventListener('click', (e) => {
        if (isDropdown && window.innerWidth <= 1024) {
          return;
        }
        closeMenu();
      });
    });
    
    const dropdowns = nav.querySelectorAll('.has-dropdown > a');
    dropdowns.forEach(dropdownLink => {
      const newDropdownLink = dropdownLink.cloneNode(true);
      dropdownLink.parentNode.replaceChild(newDropdownLink, dropdownLink);
      
      newDropdownLink.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          const parent = this.parentElement;
          parent.classList.toggle('dropdown-open');
        }
      });
    });
    
    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target) && !newBtn.contains(e.target)) {
        if (nav.classList.contains('active')) {
          closeMenu();
        }
      }
    });
    
    window.addEventListener('resize', function() {
      if (window.innerWidth > 1024 && nav.classList.contains('active')) {
        closeMenu();
      }
    });
  }

  function highlightActiveNav() {
    let currentPath = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
    
    if (currentPath === '' || currentPath === '/') {
      currentPath = 'index';
    }
    
    document.querySelectorAll('[data-nav]').forEach(link => {
      const linkValue = link.getAttribute('data-nav');
      if (linkValue === currentPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    reveals.forEach(el => observer.observe(el));
  }

  function initAccordion() {
    document.querySelectorAll('.accordion-header').forEach(header => {
      const newHeader = header.cloneNode(true);
      header.parentNode.replaceChild(newHeader, header);
      
      newHeader.addEventListener('click', () => {
        const item = newHeader.parentElement;
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-counter'));
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              el.textContent = target + suffix;
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(current) + suffix;
            }
          }, 16);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(counter => observer.observe(counter));
  }

  function initForms() {
    document.querySelectorAll('form').forEach(form => {
      const newForm = form.cloneNode(true);
      form.parentNode.replaceChild(newForm, form);
      
      newForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;
        newForm.querySelectorAll('[required]').forEach(field => {
          if (!field.value.trim()) {
            valid = false;
            field.style.borderColor = '#ef4444';
          } else {
            field.style.borderColor = '';
          }
        });
        if (valid) {
          showToast('Thank you! We will contact you soon.', 'success');
          newForm.reset();
        } else {
          showToast('Please fill in all required fields.');
        }
      });
    });
  }

  function showToast(message, type = 'default') {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.className = 'toast ' + type;
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  function initHeaderScroll() {
    const header = document.getElementById('site-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function initTabs() {
    document.querySelectorAll('.services-tabs').forEach(tabContainer => {
      const buttons = tabContainer.querySelectorAll('.tab-btn');
      const panels = tabContainer.querySelectorAll('.tab-panel');
      
      buttons.forEach(btn => {
        btn.removeEventListener('click', btn._listener);
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        
        const handleClick = () => {
          const target = newBtn.getAttribute('data-tab');
          
          buttons.forEach(b => {
            const existingBtn = b.parentNode ? b : tabContainer.querySelector(`[data-tab="${b.getAttribute('data-tab')}"]`);
            if (existingBtn) existingBtn.classList.remove('active');
          });
          newBtn.classList.add('active');
          
          panels.forEach(p => p.classList.remove('active'));
          const activePanel = tabContainer.querySelector(`[data-panel="${target}"]`);
          if (activePanel) activePanel.classList.add('active');
        };
        
        newBtn._listener = handleClick;
        newBtn.addEventListener('click', handleClick);
      });
    });
  }

  function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      parallaxElements.forEach(el => {
        const speed = el.getAttribute('data-parallax') || 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    }, { passive: true });
  }

  function init() {
    injectHeader();
    injectFooter();
    initCleanURLRouter();
    initScrollReveal();
    initAccordion();
    initSmoothScroll();
    initCounters();
    initForms();
    initHeaderScroll();
    initBackToTop();
    initTabs();
    initParallax();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();