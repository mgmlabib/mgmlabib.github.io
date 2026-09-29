/* ==========================================================================
   UI INTERACTIONS & ACCESSIBILITY
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const mobileToggle = document.getElementById("mobile-nav-toggle");
  const navLinks = document.getElementById("nav-links");

  // Mobile menu toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      mobileToggle.setAttribute("aria-expanded", isOpen);
    });

    // Close menu when clicking any nav item
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", false);
      });
    });
  }

  // Copyright year
  const yearEl = document.getElementById("copyright-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});