const webdbutton = document.querySelector(".webd-btn");
const appdbutton = document.querySelector(".appd-btn");
const cyberbutton = document.querySelector(".cybersec-btn");
const mlbutton = document.querySelector(".ml-btn");
const ccbutton = document.querySelector(".cc-btn");
const designbutton = document.querySelector(".design-btn");
const downcover = document.querySelector(".down-cover");
const rightcover = document.querySelector(".right-cover");
const wingName = document.querySelector("#wing-name");
const wingQuote = document.querySelector("#wing-quote");
const background = document.querySelector(".backdrop");
const webContainer = document.querySelector(".webcontainer");
const btn = document.querySelector(".btn");
var urlofpage = "./wings/cyber.html";
const details = {
  De: {
    text:
      "Design is an art. Design can be aesthetics. Design is so simple, that's why its so complicated.",
    img: "url(./images/design1",
    back: "url(./images/design1",
    url: "./wings/design.html",
  },
  We: {
    text:
      "Web development is not just about creating pretty layouts. It’s about understanding the marketing challenge behind your business.”",
    img: "url(./images/webd3",
    back: "url(./images/webd3",
    url: "./wings/webd.html",
  },
  Ap: {
    text:
      "It’s hard enough to find an error in your code when you’re looking for it; its even harder when you’ve assumed that your code is ERROR-FREE.",
    img: "url(./images/appd2",
    back: "url(./images/appd2",
    url: "./wings/appd.html",
  },
  Ma: {
    text:
      "A baby learns to crawl, walk and then run. We are in the crawling stage when it comes to applying machine learning.",
    img: "url(./images/machinebackground",
    back: "url(./images/mlback",
    url: "./wings/ml.html",
  },
  Co: {
    text:
      "A computer is a stupid machine with the ability to do incredibly smart things, while computer programmers are smart people with the ability to do incredibly stupid things.",
    img: "url(./images/ccbackground",
    back: "url(./images/ccbackground",
    url: "./wings/cc.html",
  },
  Cy: {
    text:
      "Security used to be an inconvenience sometimes, but now it's a necessity all the time.",
    img: "url(./images/hacker",
    back: "url(./images/cyback",
    url: "./wings/cyber.html",
  },
};
designbutton.addEventListener("click", () => {
  bottomcoveranimation(designbutton);
});
ccbutton.addEventListener("click", () => {
  bottomcoveranimation(ccbutton);
});
cyberbutton.addEventListener("click", () => {
  bottomcoveranimation(cyberbutton);
});
mlbutton.addEventListener("click", () => {
  rightcoveranimation(mlbutton);
});
webdbutton.addEventListener("click", () => {
  topcoveranimation(webdbutton);
});
appdbutton.addEventListener("click", () => {
  leftcoveranimation(appdbutton);
});

function bottomcoveranimation(action) {
  const wingg = action.innerText.slice(0, 2);
  tl.fromTo(
    downcover,
    1,
    { top: "100%" },
    { top: "0", ease: Power2.easeInOut }
  );
  tl.fromTo(
    downcover,
    1,
    { top: "0%" },
    { top: "100%", ease: Power2.easeInOut }
  );
  setTimeout(function () {
    wingName.innerText = action.innerText;
    wingQuote.innerText = details[wingg].text;
    if (screen.width < 800) {
      webContainer.style.background = `${details[wingg].img}_mobile.jpg)`;
      background.style.backgroundImage = details[wingg].back + "_mobile.jpg)";
    } else {
      background.style.backgroundImage = details[wingg].back + ".jpg)";
      webContainer.style.background = details[wingg].img + ".jpg)";
    }
    webContainer.style.backgroundSize = "cover";
    background.style.backgroundImage = details[wingg].back + ".jpg)";
    urlofpage = details[wingg].url;
  }, 1000);
}
function rightcoveranimation(action) {
  const wingg = action.innerText.slice(0, 2);
  tl.fromTo(
    rightcover,
    1,
    { left: "100%" },
    { left: "0", ease: Power2.easeInOut }
  ).fromTo(
    rightcover,
    1,
    { left: "0%" },
    { left: "100%", ease: Power2.easeInOut }
  );
  setTimeout(function () {
    wingName.innerText = action.innerText;
    wingQuote.innerText = details[wingg].text;
    if (screen.width < 800) {
      webContainer.style.background = `${details[wingg].img}_mobile.jpg)`;
      background.style.backgroundImage = details[wingg].back + ".jpg)";
    } else {
      background.style.backgroundImage = details[wingg].back + ".jpg)";
      webContainer.style.background = details[wingg].img + ".jpg)";
    }
    webContainer.style.backgroundSize = "cover";
    background.style.backgroundImage = details[wingg].back + ".jpg)";
    urlofpage = details[wingg].url;
  }, 1000);
}
function topcoveranimation(action) {
  const wingg = action.innerText.slice(0, 2);
  tl.fromTo(
    downcover,
    1,
    { top: "-100%" },
    { top: "0%", ease: Power2.easeInOut }
  ).fromTo(
    downcover,
    1,
    { top: "0%" },
    { top: "-100%", ease: Power2.easeInOut }
  );
  setTimeout(function () {
    wingName.innerText = action.innerText;
    wingQuote.innerText = details[wingg].text;
    if (screen.width < 800) {
      webContainer.style.background = `${details[wingg].img}_mobile.jpg)`;
      background.style.backgroundImage = details[wingg].back + "_mobile.jpg)";
    } else {
      background.style.backgroundImage = details[wingg].back + ".jpg)";
      webContainer.style.background = details[wingg].img + ".jpg)";
    }
    webContainer.style.backgroundSize = "cover";
    background.style.backgroundImage = details[wingg].back + ".jpg)";
    urlofpage = details[wingg].url;
  }, 1000);
}

function leftcoveranimation(action) {
  const wingg = action.innerText.slice(0, 2);
  tl.fromTo(
    rightcover,
    1,
    { left: "-100%" },
    { left: "0", ease: Power2.easeInOut }
  ).fromTo(
    rightcover,
    1,
    { left: "0%" },
    { left: "-100%", ease: Power2.easeInOut }
  );
  setTimeout(function () {
    wingName.innerText = action.innerText;
    wingQuote.innerText = details[wingg].text;
    if (screen.width < 800) {
      webContainer.style.background = `${details[wingg].img}_mobile.jpg)`;
      background.style.backgroundImage = details[wingg].back + "_mobile.jpg)";
    } else {
      webContainer.style.background = details[wingg].img + ".jpg)";
      background.style.backgroundImage = details[wingg].back + ".jpg)";
    }
    webContainer.style.backgroundSize = "cover";
    background.style.backgroundImage = details[wingg].back + ".jpg)";
    urlofpage = details[wingg].url;
  }, 1000);
}

btn.addEventListener("click", () => {
  window.open(urlofpage);
});

// const indexFooter = document.querySelector(".index__footer");

// indexFooter.style.position = "absolute";
// indexFooter.style.bottom = (window.screen.availHeight - 150) + 'px';
// alert(indexFooter.style.bottom);
// alert(window.screen.availHeight);
