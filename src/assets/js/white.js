import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function white() {
  const menuSection = document.querySelector(".menu-horizontal");
  const epilogue = document.querySelector(".epilogue");
  const flash = document.querySelector(".white-flash");
  const lines = epilogue.querySelectorAll(".epilogue__line");

  if (!menuSection || !epilogue || !flash) return;

  /* 초기 상태 */
  gsap.set(flash, { opacity: 0 });

  gsap.set(lines, {
    opacity: 0,
    y: 12,
    scale: 0.985,
    filter: "blur(6px)"
  });

  /* ===============================
     White Flash → Breathing Text
     =============================== */
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: menuSection,
      start: "bottom bottom",
      once: true
    }
  });

  /* ⚪ Flash */
  tl.to(flash, {
    opacity: 1,
    duration: 0.1,
    ease: "power2.out"
  })
  .to(flash, {
    opacity: 0,
    duration: 0.35,
    ease: "power2.in"
  })

  /* 🌬 숨 들이쉬듯 텍스트 등장 */
  .to(lines, {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    duration: 1.6,
    stagger: 0.45,
    ease: "power2.out"
  }, "+=0.15")

  /* 🌬 아주 미세한 두 번째 호흡 */
  .to(lines, {
    scale: 1.01,
    duration: 1.8,
    ease: "sine.inOut"
  })
  .to(lines, {
    scale: 1,
    duration: 1.8,
    ease: "sine.inOut"
  });
}
