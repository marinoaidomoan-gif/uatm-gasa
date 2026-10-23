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
    
    // Si le header a déjà la classe (pages légales), on le laisse
    if (header.classList.contains('is-scrolled')) return;

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

  // 3. Animation d'apparition au scroll
  function initRevealAnimations() {
    if (!('IntersectionObserver' in window)) return;
    document.documentElement.classList.add('js-anim');

    const revealElements = document.querySelectorAll('.feature-card, .ufr-card, .stat-card, .mini-stat, .founder-card, .campus-item, .gallery-item, .admission-info, .admission-form-wrap');

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

  // 4. Compteurs animés
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
        const ease = 1 - Math.pow(1 - progress, 4);
        el.textContent = formatNumber(to * ease, isPlain);
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = formatNumber(to, isPlain);
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
      const isPlain = el.dataset.format === 'plain';
      el.textContent = formatNumber(0, isPlain);
      observer.observe(el);
    });
  }

  // 5. Formulaire de pré-inscription
  function initForm() {
    const form = document.getElementById('preinscription-form');
    if (!form) return;

    const fields = {
      name: form.querySelector('[name="name"]'),
      email: form.querySelector('[name="email"]'),
      phone: form.querySelector('[name="phone"]'),
      program: form.querySelector('[name="program"]'),
      consent: form.querySelector('[name="consent"]')
    };
    
    const submitBtn = form.querySelector('[data-submit]');
    const submitLabel = form.querySelector('[data-submit-label]');
    const submitIcon = form.querySelector('[data-submit-icon]');
    const successBox = form.parentElement.querySelector('[data-form-success]');
    const alertBox = form.querySelector('[data-form-alert]');
    const alertText = form.querySelector('[data-form-alert-text]');
    const successMsg = form.parentElement.querySelector('[data-success-message]');
    const whatsappLink = form.parentElement.querySelector('[data-whatsapp-link]');
    const resetBtn = form.parentElement.querySelector('[data-form-reset]');
    const honeypot = form.querySelector('[name="website"]');

    const errorMessages = {
      required: 'Ce champ est obligatoire.',
      name: 'Veuillez indiquer votre nom complet (2 caractères minimum).',
      email: 'Veuillez saisir une adresse e-mail valide.',
      phone: 'Veuillez saisir un numéro de téléphone valide.',
      program: 'Veuillez choisir une filière.',
      consent: 'Veuillez accepter la politique de confidentialité.'
    };

    const validators = {
      name: (el) => {
        const v = el.value.trim();
        if (!v) return errorMessages.required;
        if (v.length < 2) return errorMessages.name;
        return '';
      },
      email: (el) => {
        const v = el.value.trim();
        if (!v) return errorMessages.required;
        return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? '' : errorMessages.email;
      },
      phone: (el) => {
        const v = el.value.trim();
        if (!v) return errorMessages.required;
        const digits = v.replace(/\D/g, '');
        return digits.length >= 8 && digits.length <= 15 ? '' : errorMessages.phone;
      },
      program: (el) => el.value ? '' : errorMessages.program,
      consent: (el) => el.checked ? '' : errorMessages.consent
    };

    function setFieldState(name, error) {
      const el = fields[name];
      const field = el.closest('.field');
      const errEl = document.getElementById('err-' + name);
      field.classList.toggle('has-error', !!error);
      field.classList.toggle('is-valid', !error && name !== 'consent' && el.value !== '');
      el.setAttribute('aria-invalid', error ? 'true' : 'false');
      if (error) errEl.textContent = error;
      else errEl.textContent = '';
    }

    function validateField(name) {
      const error = validators[name](fields[name]);
      setFieldState(name, error);
      return !error;
    }

    Object.keys(fields).forEach((name) => {
      const el = fields[name];
      const isCheck = name === 'consent' || name === 'program';
      el.addEventListener(isCheck ? 'change' : 'blur', () => {
        if (isCheck || el.value.trim() !== '') validateField(name);
      });
      el.addEventListener('input', () => {
        if (name === 'phone') el.value = el.value.replace(/[^\d+\s().-]/g, '');
        if (el.closest('.field').classList.contains('has-error')) validateField(name);
      });
    });

    function setLoading(on) {
      submitBtn.disabled = on;
      submitLabel.textContent = on ? 'Envoi en cours…' : 'Envoyer ma demande';
      submitIcon.className = on ? 'fa-solid fa-spinner fa-spin' : 'fa-solid fa-paper-plane';
    }

    function showSuccess(data) {
      form.hidden = true;
      successBox.hidden = false;
      successBox.focus();
      
      const programLabel = fields.program.options[fields.program.selectedIndex].text;
      successMsg.innerHTML = `Merci <strong>${data.name}</strong> ! Votre demande de pré-inscription en <strong>${programLabel}</strong> a bien été enregistrée. Notre équipe vous recontactera sous 48 h.`;

      const waText = `Bonjour UATM-GASA, je viens d'effectuer une demande de pré-inscription.\nNom : ${data.name}\nFilière : ${programLabel}\nTéléphone : ${data.phone}\nE-mail : ${data.email}`;
      whatsappLink.href = `https://wa.me/2290165787721?text=${encodeURIComponent(waText)}`;
      
      successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      alertBox.hidden = true;
      if (honeypot && honeypot.value) return;

      const invalid = Object.keys(fields).filter((name) => !validateField(name));
      if (invalid.length > 0) {
        alertText.textContent = 'Merci de corriger les champs signalés.';
        alertBox.hidden = false;
        fields[invalid[0]].focus();
        return;
      }

      const data = {
        name: fields.name.value.trim(),
        email: fields.email.value.trim(),
        phone: fields.phone.value.trim(),
        program: fields.program.value
      };

      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        showSuccess(data);
      } catch (err) {
        alertText.textContent = 'Désolé, une erreur est survenue. Veuillez nous appeler au (+229) 01 65 78 77 21.';
        alertBox.hidden = false;
      } finally {
        setLoading(false);
      }
    });

    resetBtn.addEventListener('click', () => {
      form.reset();
      Object.keys(fields).forEach((name) => {
        const field = fields[name].closest('.field');
        field.classList.remove('has-error', 'is-valid');
        document.getElementById('err-' + name).textContent = '';
      });
      alertBox.hidden = true;
      successBox.hidden = true;
      form.hidden = false;
      fields.name.focus();
    });
  }

  // 6. Sommaire dynamique (pages légales)
  function initLegalToc() {
    const links = document.querySelectorAll('[data-toc-link]');
    if (!links.length || !('IntersectionObserver' in window)) return;
    
    const byId = new Map();
    links.forEach(a => byId.set(a.hash.slice(1), a));
    
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach(a => a.classList.remove('is-active'));
        const link = byId.get(entry.target.id);
        if (link) link.classList.add('is-active');
      });
    }, { rootMargin: '-25% 0px -65% 0px' });
    
    byId.forEach((link, id) => {
      const section = document.getElementById(id);
      if (section) io.observe(section);
    });
  }

  // --- Initialisation au chargement ---
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initYear();
      initHeaderScroll();
      initRevealAnimations();
      initCounters();
      initForm();
      initLegalToc();
    });
  } else {
    initYear();
    initHeaderScroll();
    initRevealAnimations();
    initCounters();
    initForm();
    initLegalToc();
  }
})();