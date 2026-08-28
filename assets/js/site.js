/* stephanjacobs.de
   Zwei Dinge, mehr braucht die Seite nicht:
   1. Fehlende Bilder werden zu beschrifteten Platzhaltern
   2. Videos laden erst auf Klick (schneller und datensparsam)
*/
(function () {
  "use strict";

  /* 1 — Bildfehler abfangen */
  document.querySelectorAll(".shot img, .portrait img").forEach(function (img) {
    img.addEventListener("error", function () {
      var box = img.closest(".shot") || img.closest(".frame");
      if (box) { box.classList.add("missing"); }
      img.remove();
    });
  });

  /* 2 — Videos on demand */
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
