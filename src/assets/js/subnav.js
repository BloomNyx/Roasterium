// sideNav.js
import gsap from "gsap";

export function subnav() {
  const sideNav = document.querySelector(".side_nav");
  const sections = document.querySelectorAll("section");
  const currentEl = sideNav.querySelector(".current");
  const totalEl = sideNav.querySelector(".total");
  const progressEl = sideNav.querySelector(".line span");

  if (!sideNav || !sections.length) return;

  /* ===============================
     TOTAL 설정
     =============================== */
  totalEl.textContent = sections.length.toString().padStart(2, "0");

  /* ===============================
     Intersection Observer
     =============================== */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const section = entry.target;
        const index = [...sections].indexOf(section);

        /* current 숫자 */
        currentEl.textContent = (index + 1)
          .toString()
          .padStart(2, "0");

        /* progress */
        const percent = ((index + 1) / sections.length) * 100;
        gsap.to(progressEl, {
          height: percent + "%",
          duration: 0.4,
          ease: "power2.out",
        });

        /* color */
        if (section.dataset.nav === "dark") {
          sideNav.classList.add("is-dark");
        } else {
          sideNav.classList.remove("is-dark");
        }
      });
    },
    {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));
}
