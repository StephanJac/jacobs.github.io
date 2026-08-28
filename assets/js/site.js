/* stephanjacobs.de — Interaktion
   1. Fehlende Bilder werden zu beschrifteten Platzhaltern
   2. Inhalte blenden beim Scrollen ein
   3. Die Akzentfarbe folgt der Welt, in der man gerade ist
   4. Videos laden erst auf Klick
*/
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var root = document.documentElement;

  /* 1 — Bildfehler abfangen */
  document.querySelectorAll(".shot img, .portrait img").forEach(function (img) {
    img.addEventListener("error", function () {
      var box = img.closest(".shot") || img.closest(".frame");
      if (box) { box.classList.add("missing"); }
      img.remove();
    });
  });

  /* 2 — Einblenden */
  var rises = document.querySelectorAll(".rise");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });
    rises.forEach(function (el, i) {
      el.style.transitionDelay = (Math.min(i % 6, 5) * 55) + "ms";
      io.observe(el);
    });
  } else {
    rises.forEach(function (el) { el.classList.add("in"); });
  }

  /* 3 — Akzent folgt der Welt */
  var jumps = document.querySelectorAll("nav.top a.jump");
  function setWorld(name) {
    var v = getComputedStyle(root).getPropertyValue("--accent-" + name).trim();
    if (v) { root.style.setProperty("--accent", v); }
    jumps.forEach(function (a) {
      var href = a.getAttribute("href") || "";
      a.setAttribute("aria-current", String(href.indexOf("#" + name) > -1));
    });
  }
  var startWorld = document.body.getAttribute("data-accent");
  if (startWorld) { setWorld(startWorld); }

  var worlds = document.querySelectorAll("[data-world]");
  if ("IntersectionObserver" in window && worlds.length) {
    var wo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { setWorld(e.target.dataset.world); }
      });
    }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
    worlds.forEach(function (w) { wo.observe(w); });
  }

  /* 4 — Videos on demand */
  function play(box) {
    var id = box.dataset.yt;
    if (!id || box.dataset.loaded) { return; }
    box.dataset.loaded = "1";
    box.innerHTML =
      '<iframe src="https://www.youtube-nocookie.com/embed/' + id +
      '?autoplay=1&rel=0" title="The Royal Flash" allow="accelerometer; autoplay; ' +
      'clipboard-write; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
  }
  document.querySelectorAll(".vid").forEach(function (box) {
    box.addEventListener("click", function () { play(box); });
    box.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); play(box); }
    });
  });
})();
