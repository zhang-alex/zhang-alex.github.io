const options = {
  animationSelector: '[class*="swup-transition-"]',
  linkSelector:
    'a[href^="' +
    window.location.origin +
    '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
};

const swup = new Swup(options)

frontWheel = document.getElementById("wheel");

frontWheel.onclick = function () {
  console.log("clicked");
  let body = document.querySelector("body");
  body.style.background = "#111111";
}
function backWheelClickHandler() {
  let body = document.querySelector("body");
  body.style.background = "#FFFFFF";
}
