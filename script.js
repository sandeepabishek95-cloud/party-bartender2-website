// Wait for full DOM load
document.addEventListener("DOMContentLoaded", () => {
  console.log("🍸 Elite Bartender Website Ready");

  initSmoothScroll();
  initScrollAnimations();
  initButtonEffects();
});

/* =========================
   🌊 Smooth Scroll (Improved)
========================= */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");

      // Skip empty links
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
}

/* =========================
   ✨ Scroll Animations (Optimized)
========================= */
function initScrollAnimations() {
  const elements = document.querySelectorAll("section, .card");

  // Add hidden class initially
  elements.forEach(el => el.classList.add("hidden"));

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // Run only once
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  elements.forEach(el => observer.observe(el));
}

/* =========================
   🔘 Button Click Effect (Smooth)
========================= */
function initButtonEffects() {
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(0.92)" },
          { transform: "scale(1)" }
        ],
        {
          duration: 200,
          easing: "ease-out"
        }
      );
    });
  });
}
