document.addEventListener("DOMContentLoaded", () => {
  console.log("🍸 Website Loaded");
});

/* Smooth Scroll */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

/* Scroll Animation */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section, .card").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

/* Button Effect */
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => btn.style.transform = "scale(1)", 150);
  });
});
