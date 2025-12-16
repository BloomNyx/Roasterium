import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ===============================
   Atmosphere Tone & Split Motion
=============================== */

export function atom() {
  const panels = document.querySelectorAll(".atmosphere__panel");
  const images = document.querySelectorAll(".atmosphere__panel img");
  const words = document.querySelectorAll(".atmosphere__word");

  // 초기 상태 (intro 톤과 연결)
  gsap.set(images, {
    scale: 1.08,
    filter: "brightness(0.75) contrast(1.05)"
  });

  gsap.set(words, {
    opacity: 0,
    y: 40
  });

  // 메인 타임라인
  gsap.timeline({
    scrollTrigger: {
      trigger: ".atmosphere",
      start: "top 85%",
      end: "top 30%",
      scrub: true
    }
  })
  // 이미지 톤 회복
  .to(images, {
    scale: 1,
    filter: "brightness(1) contrast(1)",
    ease: "none"
  }, 0)

  // 패널 오버레이 약화
  .to(panels, {
    "--overlay-opacity": 0.1,
    ease: "none"
  }, 0)

  // 단어 등장
  .to(words, {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    ease: "power3.out"
  }, 0.2);
}
