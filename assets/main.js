/* ── Loader ─────────────────────────────── */
(function () {
  var start = Date.now(), MIN = 2200;
  function run() {
    var wait = Math.max(0, MIN - (Date.now() - start));
    setTimeout(function () {
      var arcSvg = document.getElementById('arc-svg');
      if (arcSvg) arcSvg.classList.add('stop');
      setTimeout(function () {
        var left = document.getElementById('loader-left');
        var right = document.getElementById('loader-right');
        var center = document.getElementById('loader-center');
        if (left) left.classList.add('open');
        if (right) right.classList.add('open');
        if (center) center.classList.add('explode');
        setTimeout(function () {
          var l = document.getElementById('thinkel-loader');
          if (l) l.remove();
        }, 800);
      }, 300);
    }, wait);
  }
  if (document.readyState === 'complete') run();
  else window.addEventListener('load', run);
})();

/* ── Reveal on scroll ───────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
});

/* ── FAQ accordion ──────────────────────── */
function toggleFaq(el) {
  var item = el.parentElement;
  var answer = item.querySelector('.faq-answer');
  var isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(function (i) {
    i.classList.remove('open');
    i.querySelector('.faq-answer').classList.remove('open');
  });
  if (!isOpen) {
    item.classList.add('open');
    answer.classList.add('open');
  }
}
