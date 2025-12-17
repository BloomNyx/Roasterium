// loading.js
import gsap from "gsap";

export function loadingIntro() {
  const loading = document.querySelector(".loading");
  if (!loading) return;

  /* ===============================
     INITIAL STATE
  =============================== */
  gsap.set(".loading__split--left", { xPercent: 0 });
  gsap.set(".loading__split--right", { xPercent: 0 });

  gsap.set(".loading__wipe--black", { bottom: "-100%" });
  gsap.set(".loading__wipe--white", { bottom: "-100%" });

  gsap.set(".loading__text--roasterium", {
    opacity: 0,
    color: "#000",
  });

  gsap.set(".loading__text--maison", {
    opacity: 0,
    scale: 0.35,
  });

  /* ===============================
     TIMELINE (FAST CUT)
  =============================== */
  const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
  });

  tl
    /* 1. 검은 화면 좌우 분할 (빠르게) */
    .to(".loading__split--left", {
      xPercent: -100,
      duration: 0.65,
      ease: "power4.out",
    })
    .to(
      ".loading__split--right",
      {
        xPercent: 100,
        duration: 0.65,
        ease: "power4.out",
      },
      "<"
    )

    /* 2. Roasterium 등장 */
    .to(".loading__text--roasterium", {
      opacity: 1,
      duration: 0.35,
    })

    /* 3. 검은 레이어 + 색 반전 */
    .to(".loading__wipe--black", {
      bottom: "0%",
      duration: 0.55,
    })
    .to(
      ".loading__text--roasterium",
      {
        color: "#fff",
        duration: 0.1,
      },
      "<"
    )

    /* 4. 하얀 레이어 + 즉시 종료 */
    .to(".loading__wipe--white", {
      bottom: "0%",
      duration: 0.45,
    })
    .to(".loading__text--roasterium", {
      opacity: 0,
      duration: 0.08,
    })

    /* 5. 다시 검은 화면 */
    .set(".loading__wipe--white", { bottom: "-100%" })
    .to(".loading__wipe--black", {
      bottom: "0%",
      duration: 0.45,
    })

    /* 6. Maison 작게 → 크게 (임팩트 중심) */
.to(".loading__text--maison", {
  opacity: 1,
  scale: () => window.innerWidth > 1200 ? 3 : 2.2,
  duration: 0.9,
  ease: "power3.out",
})

    /* 7. 로딩 제거 */
    .to(loading, {
      opacity: 0,
      duration: 0.45,
      onComplete: () => {
        loading.style.display = "none";
      },
    });
}
