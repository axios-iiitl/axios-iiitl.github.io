
const container = document.querySelector(".container");
const yellow = document.querySelector('.yellow');
const hero = document.querySelector('.hero');
const ml = document.querySelector('.ml');
const wingButtons = document.querySelector('.wing-buttons');
const wrapper = document.querySelector(".wrapperouter");
const backButton = document.querySelector(".back-btn");
const tl = new TimelineMax();
tl.fromTo(
    container,
    1,
    { height: "0vw" },
    { height: "45vw", ease: Power2.easeInOut }
).fromTo(
    container,
    1,
    { width: "100vw" },
    { width: "80vw", ease: Power2.easeInOut }
)
    .fromTo(wrapper, 1.2, { x: '-100%' }, { x: '0%', ease: Power2.easeInOut }, "-=1.2")
    .fromTo(
        container,
        .5,
        { boxShadow: "0px 0px 0px 0px rgba(11,5,62,1)" },
        { boxShadow: "0px 0px 30px 20px rgba(11,5,62,1)", ease: Power2.easeOut }
    )
    .fromTo(
        container,
        .1,
        { backgroundColor: '#0a1042' },
        { backgroundColor: '#d1d5d9', ease: Power2.easeIn }
    )
const exploreBtn = document.getElementById("explore");
exploreBtn.addEventListener('click', () => {
    tl
        .fromTo(
            yellow,
            1,
            { left: "-100%" },
            { left: "0", ease: Power2.easeInOut }
        )
        .fromTo(
            hero,
            .1,
            { transform: "translateX(0)" },
            { transform: "translateX(-200%)", ease: Power2.easeInOut },
            // "-=1.2"
        )
        .fromTo(
            yellow,
            1,
            { left: "0" },
            { left: "-100%", ease: Power2.easeInOut },
        )
        .fromTo(
            wingButtons,
            .1
            ,
            { opacity: "0" },
            { opacity: "1", ease: Power2.easeInOut },
        )
        .fromTo(
            ml,
            1,
            { left: "100%" },
            { left: "0%", ease: Power2.easeInOut }, "-=1.2"
        )
})

backButton.addEventListener('click', () => {
    tl
        .fromTo(
            wingButtons,
            .1
            ,
            { opacity: "1" },
            { opacity: "0", ease: Power2.easeInOut },
        )
        .fromTo(
            ml,
            1,
            { left: "0%" },
            { left: "100%", ease: Power2.easeInOut }, 
            
        )
        .fromTo(
            yellow,
            1,
            { left: "-100" },
            { left: "0%", ease: Power2.easeInOut },
            "-=1.2"
        )
        .fromTo(
            hero,
            .1,
            { transform: "translateX(-200%)" },
            { transform: "translateX(0%)", ease: Power2.easeInOut },
            "-=1.2"
        )
        .fromTo(
            yellow,
            1,
            { left: "0%" },
            { left: "-100%", ease: Power2.easeInOut }
        )
})