// Highlight the nav link of the section currently in view.
(function () {
  var links = document.querySelectorAll('.site-nav a[href^="#"]');
  if (!('IntersectionObserver' in window) || !links.length) return;
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });

  var visible = {};
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
    var current = null;
    document.querySelectorAll('main section[id]').forEach(function (s) {
      if (!current && visible[s.id]) current = s.id;
    });
    links.forEach(function (a) { a.classList.remove('active'); });
    if (current && byId[current]) byId[current].classList.add('active');
  }, { rootMargin: '-80px 0px -55% 0px' });

  document.querySelectorAll('main section[id]').forEach(function (s) { observer.observe(s); });
})();
