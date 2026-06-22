/* Fondation XXVII — Prestige interactions */

/* Compteur animé */
function animateCounter(el) {
  var target = parseInt(el.dataset.target, 10);
  var duration = 1800;
  var start = null;
  function step(ts) {
    if (!start) start = ts;
    var p = Math.min((ts - start) / duration, 1);
    var ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(ease * target).toLocaleString('fr-FR');
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString('fr-FR');
  }
  requestAnimationFrame(step);
}

/* Reveal au scroll + compteurs */
var observed = new Set();
var io = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting && !observed.has(e.target)) {
      observed.add(e.target);
      e.target.classList.add('xxvii-visible');
      var nums = e.target.querySelectorAll('[data-target]');
      nums.forEach(animateCounter);
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll('.xxvii-reveal').forEach(function(el) { io.observe(el); });

/* Ticker dupliqué pour boucle parfaite */
var ticker = document.querySelector('.xxvii-ticker-inner');
if (ticker) {
  var clone = ticker.cloneNode(true);
  ticker.parentNode.appendChild(clone);
}

/* Manifeste animé — mots qui s'écrivent au scroll */
var manifWords = document.querySelectorAll('.xxvii-manifeste-words .word');
if (manifWords.length > 0) {
  var manifObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        manifWords.forEach(function(w, i) {
          setTimeout(function() { w.classList.add('visible'); }, i * 90);
        });
        manifObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });
  var manifSection = document.querySelector('.xxvii-manifeste-anim');
  if (manifSection) manifObserver.observe(manifSection);
}

/* Navigation : marquer la page active */
(function() {
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(function(a) {
    var href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });
})();

/* Dividers animés au scroll */
document.querySelectorAll('.xxvii-divider-line').forEach(function(el) {
  io.observe(el);
});

/* Appel intime : mettre l'emphase sur "révèle" */
var q = document.querySelector('.xxvii-appel-question');
if (q && !q.querySelector('em')) {
  q.innerHTML = q.innerHTML.replace('révèle', '<em>révèle</em>');
}
