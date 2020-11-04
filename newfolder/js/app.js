const container = document.querySelector(".container");
const yellow = document.querySelector(".yellow");
const hero = document.querySelector(".hero");
const ml = document.querySelector(".ml");
const wingButtons = document.querySelector(".wing-buttons");
const wrapper = document.querySelector(".wrapperouter");
const backButton = document.querySelector(".back-btn");
const indexexplore = document.querySelector(".index__explore");
const indexarrowicon = document.querySelector(".index__arrowicon");
const indexwrapper = document.querySelector(".index__wrapper");
const wingbuttons = document.querySelector(".wing-buttons");
const back = document.querySelector(".back");
const tl = new TimelineMax();

indexexplore.style.borderRadius = `${indexexplore.offsetHeight / 2}px`;

indexexplore.addEventListener("click", () => {
  tl.fromTo(yellow, 1, { left: "-100%" }, { left: "0", ease: Power2.easeInOut })
    .fromTo(yellow, 1, { left: "0" }, { left: "-100%", ease: Power2.easeInOut })
    .fromTo(
      back,
      0.1,
      { display: "none" },
      { display: "block", ease: Power2.easeInOut },
      "-=.2"
    )
    .fromTo(
      wingButtons,
      0.1,
      { display: "none" },
      { display: "block", ease: Power2.easeInOut },
      "-=1"
    )
    .fromTo(
      wingButtons,
      0.1,
      { opacity: "0" },
      { opacity: "1", ease: Power2.easeInOut },
      "-=1.1"
    )
    .fromTo(
      ml,
      1,
      { left: "100%" },
      { left: "0%", ease: Power2.easeInOut },
      "-=1.2"
    );
});
indexarrowicon.addEventListener("click", () => {
  tl.fromTo(ml, 1, { left: "100%" }, { left: "0%", ease: Power2.easeInOut })
  .fromTo(
    back,
    0.1,
    { display: "none" },
    { display: "block", ease: Power2.easeInOut },
    "-=.2"
  )
    .fromTo(
      back,
      0.01,
      { display: "none" },
      { display: "block", ease: Power2.easeInOut }
    )
    .fromTo(
      wingButtons,
      0.1,
      { display: "none" },
      { display: "block", ease: Power2.easeInOut }
    )
    .fromTo(
      wingButtons,
      0.1,
      { opacity: "0" },
      { opacity: "1", ease: Power2.easeInOut }
    );
});

backButton.addEventListener("click", () => {
  tl.fromTo(
    wingButtons,
    0.1,
    { opacity: "1" },
    { opacity: "0", ease: Power2.easeInOut }
  ).fromTo(
    back,
    0.1,
    { display: "block" },
    { display: "none", ease: Power2.easeInOut },
    "-=.2"
  )
    .fromTo(
      wingButtons,
      0.1,
      { display: "block" },
      { display: "none", ease: Power2.easeInOut }
    )
    .fromTo(ml, 1, { left: "0%" }, { left: "100%", ease: Power2.easeInOut });
});
