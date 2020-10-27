// // const btn = document.getElementById("explore");
// const btn = document.getElementById("exploreback");
// const partone = document.querySelector(".partone");
// const partmid = document.querySelector(".partmid");
// const parttwo = document.querySelector(".parttwo");
// // const container = document.querySelector(".container");
// let rate = 2000;
// const tl2 = new TimelineMax();
// let lastClick = Date.now() - rate;
// btn.addEventListener("click", () => {
//     if (Date.now() - lastClick >= rate) {
//         tl.
//             fromTo(
//                 partone,
//                 1,
//                 { transfrom: "translateX(0%)" },
//                 { transform: "translateX(-100%)", ease: Power2.easeInOut }
//             )
//             .fromTo(
//                 parttwo,
//                 1,
//                 { transfrom: "translateX(0%)" },
//                 { transform: "translateX(100%)", ease: Power2.easeInOut },
//                 "-=1"
//             )
//         // var morphing = anime({
//         //     targets: ".polymorph",
//         //     points: [
//         //         {
//         //             value: "0 0 383 0 579 749 1920 1080 1001 1080 0 1080 0 0",
//         //         },
//         //         {
//         //             value: "0 0 0 0 579 750 1920 1080 1001 1080 0 1080 0 0",
//         //         },
//         //         {
//         //             value: "0 0 0 0 0 1080 1920 1080 1001 1080 0 1080 0 0",
//         //         },
//         //     ],
//         //     easing: "easeInOutExpo",
//         //     duration: 1000,
//         //     loop: false,
//         // });
//         // lastClick = Date.now();

//         // morphing.finished.then(() => {
//         //     tl.fromTo(
//         //         container,
//                 // .4,
//         //         { width: "80vw", height: "45vw" },
//         //         { width: "100vw", height: "100vh", ease: Power2.easeInOut },
//         //     )
//         // });
//     }
// });

//   // btn2.onclick = function () {
//             //     if (Date.now() - lastClick >= rate) {
//             //         anime({
//             //             targets: ".polymorph",
//             //             points: [
//             //                 {
//             //                     value: "0 0 0 0 579 750 1920 1080 1001 1080 0 1080 0 0",
//             //                 },
//             //                 {
//             //                     value: "0 0 383 0 579 749 1920 1080 1001 1080 0 1080 0 0",
//             //                 },
//             //                 {
//             //                     value: "0 0 960 0 1920 0 1920 1080 1001 1080 0 1080 0 0",
//             //                 },
//             //             ],
//             //             easing: "easeInOutExpo",
//             //             duration: 1500,
//             //             loop: false,
//             //         });
//             //         lastClick = Date.now();
//             //     }
//             // };