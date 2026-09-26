// Paste the real Microsoft Store URL here later.
// Example: const STORE_LINK = "https://apps.microsoft.com/detail/...";
const STORE_LINK = "https://apps.microsoft.com/detail/9NV98GBDCFDT?hl=en-us&gl=IN&ocid=pdpshare";

document.querySelectorAll("[data-store-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!STORE_LINK) {
      event.preventDefault();
      alert("The Microsoft Store link will be connected here when it is available.");
      return;
    }
    link.href = STORE_LINK;
    link.target = "_blank";
    link.rel = "noopener";
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav nav");
menuBtn?.addEventListener("click", () => {
  const open = nav.classList.toggle("mobile-open");
  nav.style.display = open ? "flex" : "";
  if (open) {
    nav.style.position = "absolute";
    nav.style.top = "70px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "20px 5%";
    nav.style.background = "#fff";
    nav.style.flexDirection = "column";
    nav.style.borderBottom = "1px solid #dce5ef";
  }
});
