import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import atmo1 from "../img/atmo1.jpg";
import atmo2 from "../img/atmo2.jpg";

gsap.registerPlugin(ScrollTrigger);
console.log("ATOM LOADED");

export function atom() {

  /* ===============================
     이미지 매핑 (추가만)
  =============================== */
  const IMAGE_MAP = {
    atmo1,
    atmo2
  };

  const panels = document.querySelectorAll(".atmosphere__panel");
  if (!panels.length) return;

  const section = document.querySelector(".atmosphere");

  /* ==================================================
     🔵 LEFT PANEL
  ================================================== */
  const leftPanel = panels[0];
  if (leftPanel) {

    const wrap = leftPanel.querySelector(".slice-wrap");
    const slices = leftPanel.querySelectorAll(".slice");
    const word = leftPanel.querySelector(".atmosphere__word");
    if (!wrap || !slices.length) return;

    const imgKey = wrap.dataset.img;                 // 기존
    const imgSrc = IMAGE_MAP[imgKey] || imgKey;      // 🔥 추가

    const BASE = window.innerWidth * 0.8;
    const GAP = 120;

    /* 이미지 세팅 + 초기 위치 */
    slices.forEach((slice, i) => {
      slice.style.backgroundImage = `url(${imgSrc})`;
      slice.style.backgroundPosition =
        `${(i / (slices.length - 1)) * 100}% 50%`;

      gsap.set(slice, {
        x: -(BASE + i * GAP)
      });
    });

    if (word) {
      gsap.set(word, { opacity: 0, y: 28 });
    }

    /* 슬라이스 이동 */
    slices.forEach((slice) => {
      gsap.to(slice, {
        x: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftPanel,
          start: "top 85%",
          end: "top 25%",
          scrub: 1,
          invalidateOnRefresh: true
        }
      });
    });

    /* 텍스트 */
    if (word) {
      gsap.to(word, {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftPanel,
          start: "top 60%",
          end: "top 35%",
          scrub: true
        }
      });
    }
  }

  /* ==================================================
     🔴 RIGHT PANEL
  ================================================== */
  const rightPanel = panels[1];
  if (rightPanel) {

    const wrap = rightPanel.querySelector(".slice-wrap");
    const slices = rightPanel.querySelectorAll(".slice");
    const word = rightPanel.querySelector(".atmosphere__word");
    if (!wrap || !slices.length) return;

    const imgKey = wrap.dataset.img;                 // 기존
    const imgSrc = IMAGE_MAP[imgKey] || imgKey;      // 🔥 추가

    const BASE = window.innerWidth * 0.8;
    const GAP = 120;

    slices.forEach((slice, i) => {
      slice.style.backgroundImage = `url(${imgSrc})`;
      slice.style.backgroundPosition =
        `${(i / (slices.length - 1)) * 100}% 50%`;

      gsap.set(slice, {
        x: BASE + i * GAP
      });
    });

    if (word) {
      gsap.set(word, { opacity: 0, y: 28 });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: rightPanel,
        start: "top 85%",
        end: "top 25%",
        scrub: 1.4,
        invalidateOnRefresh: true
      }
    });

    slices.forEach((slice, i) => {
      const depth = slices.length - i;

      tl.to(
        slice,
        {
          x: 0,
          duration: 1.4 + depth * 0.2,
          ease: "power3.out"
        },
        0
      );
    });

    if (word) {
      tl.to(
        word,
        {
          opacity: 1,
          y: 0,
          ease: "power2.out"
        },
        0.6
      );
    }
  }

  /* ==================================================
     ✅ SECTION END — 전체 페이드 아웃
  ================================================== */
  gsap.to(panels, {
    opacity: 0,
    ease: "power1.out",
    scrollTrigger: {
      trigger: section,
      start: "bottom bottom",
      end: "bottom top",
      scrub: true
    }
  });
}
