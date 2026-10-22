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
      // On ajoute la classe dès qu'on dépasse 50px de scroll
      if (window.scrollY > 50) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll(); // Vérifier l'état au chargement (si la page est rechargée à mi-hauteur)
  }

  // 3. Animation d'apparition au scroll (Cartes)
  function initRevealAnimations() {
    if (!('IntersectionObserver' in window)) return;
    document.documentElement.classList.add('js-anim');

    const revealElements = document.querySelectorAll('.feature-card');

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

  // Initialisation au chargement de la page
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initYear();
      initHeaderScroll();
      initRevealAnimations();
    });
  } else {
    initYear();
    initHeaderScroll();
    initRevealAnimations();
  }
})();