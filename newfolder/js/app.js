
const container = document.querySelector(".container");
const yellow = document.querySelector('.yellow');
const hero = document.querySelector('.hero');
const ml = document.querySelector('.ml');
const wingButtons = document.querySelector('.wing-buttons');
const wrapper = document.querySelector(".wrapperouter");
const backButton = document.querySelector(".back-btn");
const indexexplore = document.querySelector(".index__explore");
const indexarrow = document.querySelector(".index__arrow");
const indexarrowicon = document.querySelector(".index__arrowicon");
const tl = new TimelineMax();
tl
    // .fromTo(wrapper,.7, { x: '-100%' }, { x: '0%', ease: Power2.easeInOut },)
    .fromTo(
        container,
        .8,
        { height: "0vh" },
        { height: "100vh", ease: Power2.easeInOut },
    )

    .fromTo(
        container,
        .5,
        { boxShadow: " rgba(61,75,82,0.5) 0px 0px 30px 10px" },
        { boxShadow: " rgba(50,54,60,0.5) 0px 0px 30px 10px", ease: Power2.easeOut }
    )
    .fromTo(
        container,
        .5,
        { backgroundImage: 'linear-gradient(60deg, #29323c 0%, #485563 100%)' },
        { backgroundImage: 'linear-gradient(60deg, #29323c 0%, #485563 100%)', ease: Power2.easeInOut },
        "-=1"
    )
    indexarrow.addEventListener('mouseover', () => {
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
indexarrowicon.addEventListener('click', () => {
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
indexexplore.style.borderRadius = (`${indexexplore.offsetHeight / 2}px`)
