const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-nav-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const menuLinks = document.querySelectorAll("[data-menu-link]");
const navIcon = toggle ? toggle.querySelector("i") : null;
const fileInput = document.querySelector("#site-photo");
const fileLabel = document.querySelector("[data-file-label]");
const form = document.querySelector("#quote-form");
const status = document.querySelector("[data-form-status]");
const yearEl = document.querySelector("[data-year]");

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function setMenuOpen(isOpen) {
  if (!header || !toggle || !mobileMenu) {
    return;
  }

  header.classList.toggle("is-open", isOpen);
  mobileMenu.hidden = !isOpen;
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");

  if (navIcon) {
    navIcon.classList.toggle("bi-list", !isOpen);
    navIcon.classList.toggle("bi-x-lg", isOpen);
  }

  document.body.classList.toggle("no-scroll", isOpen && window.innerWidth <= 991);
}

if (toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = !header?.classList.contains("is-open");
    setMenuOpen(isOpen);
  });
}

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setMenuOpen(false);
  });
});

document.addEventListener("click", (event) => {
  if (!header || !header.classList.contains("is-open")) {
    return;
  }

  if (event.target instanceof Node && header.contains(event.target)) {
    return;
  }

  setMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 991) {
    setMenuOpen(false);
  }
});

if (fileInput && fileLabel) {
  const defaultLabel = fileLabel.textContent?.trim() || "Attach a photo of the site / windows";

  fileInput.addEventListener("change", () => {
    const file = fileInput.files && fileInput.files.length > 0 ? fileInput.files[0] : null;
    fileLabel.textContent = file ? file.name : defaultLabel;
  });
}

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

function setStatus(message, type = "default") {
  if (!status) {
    return;
  }

  status.textContent = message;
  status.dataset.state = type;
}

function getFieldValue(formData, name) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = getFieldValue(formData, "name");
    const company = getFieldValue(formData, "company");
    const phone = getFieldValue(formData, "phone");
    const email = getFieldValue(formData, "email");
    const service = getFieldValue(formData, "service");
    const propertyType = getFieldValue(formData, "propertyType");
    const location = getFieldValue(formData, "location");
    const message = getFieldValue(formData, "message");
    const selectedFile = fileInput && fileInput.files && fileInput.files[0] ? fileInput.files[0] : null;

    if (!name || !phone || !email || !service) {
      setStatus("Please fill in your name, phone, email, and required service.", "error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("Please enter a valid email address.", "error");
      return;
    }

    const body = [
      `Full Name: ${name}`,
      `Company: ${company || "-"}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service Required: ${service}`,
      `Property Type: ${propertyType || "-"}`,
      `Location: ${location || "-"}`,
      "",
      "Project Details:",
      message || "-",
      selectedFile ? `\n(Client has a site photo to share: ${selectedFile.name})` : "",
    ].join("\n");

    const subject = `Quote Request - ${service} (${name})`;
    const mailto = `mailto:birdhurstholdings@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus("Opening your email app with the quote request.", "success");
    window.location.href = mailto;
  });
}

if ("IntersectionObserver" in window && !reducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });
} else {
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("reveal-visible");
  });
}
