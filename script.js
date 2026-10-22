/* ==========================================================================
   UATM/GASA FORMATION — script.js
   Logique principale du site
   ========================================================================== */

(function () {
  'use strict';

  console.log('[UATM] Site initialisé');

  // Année dynamique dans le footer
  function initYear() {
    const yearEls = document.querySelectorAll('[data-year]');
    const year = new Date().getFullYear();
    yearEls.forEach((el) => { el.textContent = year; });
  }

  // Initialisation au chargement
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initYear);
  } else {
    initYear();
  }
})();