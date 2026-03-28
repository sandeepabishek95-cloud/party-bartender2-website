document.addEventListener("DOMContentLoaded", function () {

  /* Smooth Scroll */
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener("click", function(e) {
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* Animation */
  var elements = document.querySelectorAll("section, .card, h1, p, img");

  elements.forEach(function(el) {
    el.classList.add("hidden");
  });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    elements.forEach(function(el) {
      observer.observe(el);
    });

  } else {
    // Fallback for older browsers
    elements.forEach(function(el) {
      el.classList.add("show");
    });
  }

});
