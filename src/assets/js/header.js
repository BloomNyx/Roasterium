import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function header() {
  const header = document.querySelector(".header");
  const intro = document.querySelector(".intro");
  const atmosphere = document.querySelector(".atmosphere");

  if (!header || !intro || !atmosphere) return;

  /* 🔹 초기 상태 (intro) */
  gsap.set(header, {
    backdropFilter: "blur(4px)",
    backgroundColor: "rgba(255,255,255,0.04)"
  });

  /* 🔥 intro → atmosphere 넘어가며 자연스럽게 */
  gsap.to(header, {
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255,255,255,0.06)",
    ease: "none",
    scrollTrigger: {
      trigger: atmosphere,
      start: "top bottom",   // atmosphere가 보이기 시작
      end: "top top",        // atmosphere 상단 도착
      scrub: true            // 스크롤 연동
    }
  });
}
