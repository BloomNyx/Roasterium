// sideNavHideOnFooter.js
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function footer() {
  const sideNav = document.querySelector(".side_nav");
  const footer = document.querySelector("footer");

  if (!sideNav || !footer) return;

  ScrollTrigger.create({
    trigger: footer,
    start: "top bottom-=80",
    end: "bottom bottom",
    onEnter: () => hide(),
    onEnterBack: () => hide(),
    onLeaveBack: () => show(),
  });

  function hide() {
    gsap.to(sideNav, {
      autoAlpha: 0,
      y: 12,
      duration: 0.4,
      ease: "power2.out",
    });
  }

  function show() {
    gsap.to(sideNav, {
      autoAlpha: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  }
}
