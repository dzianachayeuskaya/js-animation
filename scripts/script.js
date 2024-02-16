document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const closeBtn = document.querySelector(".close");

  const openSiteTl = gsap.timeline({
    defaults: { opacity: 0 },
  });

  openSiteTl
    .from(".hero__left", { duration: 1, y: 100 })
    .from(".hero__descr", { duration: 1 }, ">-.25")
    .from(
      ".photos-wrap > img:first-child",
      { duration: 0.75, scale: 0.95 },
      ">-.75"
    )
    .from(
      ".photos-wrap > img:nth-child(2)",
      { duration: 0.75, scale: 0.95 },
      ">-.25"
    )
    .from(
      ".photos-wrap > img:last-child",
      { duration: 0.75, scale: 0.95 },
      ">-.25"
    )
    .from(".photos__author", { duration: 1 }, ">-.5");

  const openMenuTl = gsap.timeline({
    paused: true,
    defaults: { opacity: 0, y: 20, duration: 1 },
  });

  openMenuTl
    .from(".menu__top", { y: -100 })
    .from(".menu__wrap", { y: 100 }, ">-.5")
    .from(".nav__list", {}, ">-.5")
    .from(".menu__right", {}, ">-.5")
    .from(".social", {}, "<");

  function onClick() {
    const menu = document.querySelector(".menu");
    if (!menu.classList.contains("menu--open")) {
      menu.classList.add("menu--open");
      openMenuTl.play();
    } else {
      openMenuTl.reverse().then(() => menu.classList.remove("menu--open"));
    }
  }

  burger.addEventListener("click", onClick);
  closeBtn.addEventListener("click", onClick);
});
