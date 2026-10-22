/* ==========================================================================
   UATM-GASA FORMATION — script.js
   ========================================================================== */

(function () {
  'use strict';

  console.log('[UATM] Site initialisé');

  // 1. Année dynamique dans le footer
  function initYear() {
    const yearEls = document.querySelectorAll('[data-year]');
    const year = new Date().getFullYear();
    yearEls.forEach((el) => { el.textContent = year; });
  }

  // 2. Header transparent au départ, bleu au scroll
  function initHeaderScroll() {
    const header = document.querySelector('[data-header]');
    if (!header) return;

    function checkScroll() {
      if (window.scrollY > 50) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
  }

  // 3. Animation d'apparition au scroll (Cartes + Filières + Chiffres)
  function initRevealAnimations() {
    if (!('IntersectionObserver' in window)) return;
    document.documentElement.classList.add('js-anim');

    const revealElements = document.querySelectorAll('.feature-card, .ufr-card, .stat-card, .mini-stat, .founder-card, .campus-item, .gallery-item');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach((el) => observer.observe(el));
  }

  // 4. Compteurs animés (Chiffres clés)
  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length || !('IntersectionObserver' in window)) return;

    const formatNumber = (value, isPlain) => {
      if (isPlain) return String(Math.round(value));
      return new Intl.NumberFormat('fr-FR').format(Math.round(value));
    };

    const animateCounter = (el) => {
      const to = Number(el.dataset.to);
      const isPlain = el.dataset.format === 'plain';
      const duration = 2000;
      const start = performance.now();

      const update = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        // Fonction d'accélération (easeOutQuart) pour un effet fluide
        const ease = 1 - Math.pow(1 - progress, 4);
        const currentValue = to * ease;
        
        el.textContent = formatNumber(currentValue, isPlain);

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = formatNumber(to, isPlain);
        }
      };
      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    counters.forEach((el) => {
      // On initialise à 0 avant l'animation
      const isPlain = el.dataset.format === 'plain';
      el.textContent = formatNumber(0, isPlain);
      observer.observe(el);
    });
  }

  // Initialisation au chargement de la page
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initYear();
      initHeaderScroll();
      initRevealAnimations();
      initCounters();
    });
  } else {
    initYear();
    initHeaderScroll();
    initRevealAnimations();
    initCounters();
  }
})();