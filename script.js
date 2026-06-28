/* finance-card — minimal interactions: smooth-scroll + mobile burger */

(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');

  function closeMenu() {
    if (!header) return;
    header.classList.remove('is-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;

    var href = link.getAttribute('href');
    if (!href || href === '#') return;

    var target = href === '#top' ? document.body : document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    closeMenu();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 760) closeMenu();
  });
})();
