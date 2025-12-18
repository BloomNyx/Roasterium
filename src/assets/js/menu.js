import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function menu() {

  /* ===============================
     Lenis Smooth Scroll
     =============================== */
  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    smoothTouch: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // ScrollTrigger와 Lenis 동기화
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  /* ===============================
     Horizontal Menu Scroll
     =============================== */

  const section = document.querySelector(".menu-horizontal");
  const wrapper = section.querySelector(".menu-h__wrapper");
  const track = section.querySelector(".menu-h__track");

  if (!section || !wrapper || !track) return;

  // 가로 이동 거리 계산
  const getScrollWidth = () =>
    track.scrollWidth - window.innerWidth;

  gsap.set(track, { x: 0 });

  const horizontalTween = gsap.to(track, {
    x: () => -getScrollWidth(),
    ease: "none",
    scrollTrigger: {
      trigger: wrapper,
      start: "top top",
      end: () => `+=${getScrollWidth()}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    }
  });

  /* ===============================
     Item Reveal Animation
     =============================== */

  const items = gsap.utils.toArray(".menu-h__item");

  items.forEach((item) => {
    const img = item.querySelector("img");
    const texts = item.querySelectorAll(
      ".menu-h__category, .menu-h__name, .menu-h__desc"
    );

    gsap.set(img, {
      scale: 1.08,
      filter: "blur(6px)",
      opacity: 0
    });

    gsap.set(texts, {
      y: 30,
      opacity: 0
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: item,
        containerAnimation: horizontalTween,
        start: "left 70%",
      }
    })
      .to(img, {
        scale: 1,
        filter: "blur(0px)",
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      })
      .to(texts, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out"
      }, "-=0.6");
  });
}