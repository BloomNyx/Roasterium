import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function cont() {
  const section = document.querySelector(".epilogue");
  if (!section) return;

  const lines = section.querySelectorAll(".epilogue__line");
  const houseImg = section.querySelector(".epilogue__media img");
  const houseText = section.querySelectorAll(".epilogue__text > *");

  /* ===============================
     Initial State
     =============================== */
  gsap.set(lines, {
    opacity: 0,
    y: 30,
    filter: "blur(10px)"
  });

  gsap.set(houseImg, {
    scale: 1.08,
    opacity: 0
  });

  gsap.set(houseText, {
    y: 40,
    opacity: 0
  });

  gsap.set(section, {
    "--before-opacity": 1,
    "--after-opacity": 0,
    "--bg-color": "#070707",
    "--text-color": "rgba(255,255,255,0.85)"
  });

  /* ===============================
     Timeline
     =============================== */
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "top 20%",
      scrub: true
      // markers: true
    }
  });

  /* Intro 등장 */
  tl.to(lines, {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    stagger: 0.35,
    duration: 1,
    ease: "power3.out"
  });

  /* 어둠 제거 */
  tl.to(section, {
    "--before-opacity": 0,
    duration: 1
  }, "-=0.6");

  /* 그라데이션 추가 */
  tl.to(section, {
    "--after-opacity": 1,
    duration: 1
  }, "-=0.8");

  /* 배경 → 흰색 */
  tl.to(section, {
    "--bg-color": "#ffffff",
    "--text-color": "#111111",
    duration: 1
  });

  /* House 이미지 */
  tl.to(houseImg, {
    scale: 1,
    opacity: 1,
    duration: 1
  }, "-=0.8");

  /* House 텍스트 */
  tl.to(houseText, {
    y: 0,
    opacity: 1,
    stagger: 0.15,
    duration: 0.8
  }, "-=0.6");

  /* 최종 상태 클래스 */
  tl.add(() => {
    section.classList.add("is-light");
  });
}