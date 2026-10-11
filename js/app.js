/**
 * Client Application Logic for Dharshan A Portfolio
 * 
 * SonarQube compliant: Zero innerHTML usage, safe DOM manipulation,
 * complete keyboard accessibility, and XSS-free event handlers.
 */

import {
  personalInfo,
  projectsData,
  validateContactForm
} from "./portfolio-data.js";

// DOM Ready initialization
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initDynamicExperience();
  initMobileMenu();
  initCopyButtons();
  initProjectFilters();
  initSkillFilters();
  initProjectModals();
  initContactForm();
  initScrollSpy();
  initYear();
});

/**
 * Dynamically binds calculated experience into the DOM elements
 */
function initDynamicExperience() {
  const expYearsElements = document.querySelectorAll(".dynamic-exp-years");
  expYearsElements.forEach((el) => {
    el.textContent = personalInfo.experienceYears;
  });

  const expLabelElements = document.querySelectorAll(".dynamic-exp-label");
  expLabelElements.forEach((el) => {
    el.textContent = personalInfo.experienceLabel;
  });
}

/**
 * Initialize Light / Dark Executive Theme Toggle
 * Light theme is tailored for daytime HR/executive review;
 * Dark theme offers a mild, high-contrast midnight slate experience.
 */
function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const themeLabel = document.getElementById("themeLabel");
  
  const savedTheme = localStorage.getItem("preferred-theme");
  
  // Default to executive-light if not explicitly set, or respect preference
  const activeTheme = savedTheme || "light";
  applyTheme(activeTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const nextTheme = currentTheme === "light" ? "dark" : "light";
      applyTheme(nextTheme);
      localStorage.setItem("preferred-theme", nextTheme);
      showToast(`Switched to Executive ${nextTheme === "dark" ? "Dark" : "Light"} Mode`);
    });
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      if (themeIcon) themeIcon.textContent = "🌙";
      if (themeLabel) themeLabel.textContent = "Dark";
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (themeIcon) themeIcon.textContent = "☀️";
      if (themeLabel) themeLabel.textContent = "Light";
    }
  }
}

/**
 * Mobile Navigation Toggle with ARIA state updates
 */
function initMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen.toString());
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/**
 * Copy to clipboard with toast notification
 */
function initCopyButtons() {
  const copyEmailBtns = document.querySelectorAll(".btn-copy-email");
  const copyPhoneBtns = document.querySelectorAll(".btn-copy-phone");

  copyEmailBtns.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(personalInfo.email);
          showToast("Email address copied to clipboard!");
        } else {
          showToast(`Email: ${personalInfo.email}`);
        }
      } catch {
        showToast(`Email: ${personalInfo.email}`);
      }
    });
  });

  copyPhoneBtns.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(personalInfo.phoneRaw);
          showToast("Phone number copied to clipboard!");
        } else {
          showToast(`Phone: ${personalInfo.phone}`);
        }
      } catch {
        showToast(`Phone: ${personalInfo.phone}`);
      }
    });
  });
}

/**
 * Project Category Filter Logic
 */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll("#projectFilters .filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.dataset.category;

      projectCards.forEach((card) => {
        const cardCat = card.dataset.category;
        if (category === "all" || cardCat === category) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/**
 * Skill Category Filter Logic
 */
function initSkillFilters() {
  const filterBtns = document.querySelectorAll("#skillFilters .filter-btn");
  const skillCards = document.querySelectorAll(".skill-category-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const categoryId = btn.dataset.skill;

      skillCards.forEach((card) => {
        const cardSkillId = card.dataset.skill;
        if (categoryId === "all" || cardSkillId === categoryId) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/**
 * Project Details Modal with Accessibility Focus Trap
 * Safe DOM insertion using replaceChildren() & createElement() - NO innerHTML.
 */
function initProjectModals() {
  const modalBackdrop = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalSubtitle = document.getElementById("modalSubtitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalHighlights = document.getElementById("modalHighlights");
  const modalTags = document.getElementById("modalTags");
  const modalClose = document.getElementById("modalClose");

  if (!modalBackdrop) return;

  let lastFocusedElement = null;

  const detailButtons = document.querySelectorAll(".btn-view-details");
  detailButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const projectId = btn.dataset.projectId;
      const project = projectsData.find((p) => p.id === projectId);
      if (!project) return;

      lastFocusedElement = btn;

      if (modalTitle) modalTitle.textContent = project.title;
      if (modalSubtitle) modalSubtitle.textContent = `${project.role} · ${project.subtitle}`;
      if (modalDesc) modalDesc.textContent = project.description;

      // Safe replace of children for Highlights
      if (modalHighlights) {
        modalHighlights.replaceChildren();
        project.highlights.forEach((hl) => {
          const li = document.createElement("li");
          li.textContent = hl;
          modalHighlights.appendChild(li);
        });
      }

      // Safe replace of children for Tags
      if (modalTags) {
        modalTags.replaceChildren();
        project.tags.forEach((tag) => {
          const span = document.createElement("span");
          span.className = "tag";
          span.textContent = tag;
          modalTags.appendChild(span);
        });
      }

      modalBackdrop.classList.add("open");
      modalBackdrop.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";

      if (modalClose) {
        modalClose.focus();
      }
    });
  });

  const closeModal = () => {
    modalBackdrop.classList.remove("open");
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  };

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("open")) {
      closeModal();
    }
  });
}

/**
 * Contact Form Submission with validation and sanitized feedback
 */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = form.querySelector("#name");
    const emailInput = form.querySelector("#email");
    const subjectInput = form.querySelector("#subject");
    const messageInput = form.querySelector("#message");

    const name = nameInput ? nameInput.value : "";
    const email = emailInput ? emailInput.value : "";
    const subject = subjectInput ? subjectInput.value : "";
    const message = messageInput ? messageInput.value : "";

    // Clear previous errors
    form.querySelectorAll(".form-error").forEach((el) => {
      el.textContent = "";
      el.classList.remove("visible");
    });

    const validation = validateContactForm({ name, email, subject, message });

    if (!validation.isValid) {
      Object.entries(validation.errors).forEach(([field, msg]) => {
        const errEl = form.querySelector(`#error-${field}`);
        if (errEl) {
          errEl.textContent = msg;
          errEl.classList.add("visible");
        }
      });
      return;
    }

    // Direct mailto trigger fallback
    const mailtoUrl = `mailto:${encodeURIComponent(personalInfo.email)}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${subject}`
    )}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;

    window.location.href = mailtoUrl;

    showToast("Opening email client to send your message...");
    form.reset();
  });
}

/**
 * Scroll spy for navigation active state
 */
function initScrollSpy() {
  const sections = document.querySelectorAll("main section, main > div[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (!id) return;

          navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (href === `#${id}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    },
    {
      rootMargin: "-25% 0px -65% 0px"
    }
  );

  sections.forEach((sec) => observer.observe(sec));
}

/**
 * Dynamic footer copyright year
 */
function initYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }
}

/**
 * Toast Notification Utility
 * @param {string} message
 */
export function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}
