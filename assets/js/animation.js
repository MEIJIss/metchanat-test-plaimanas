// Banner Title
const bannerTitle = document.querySelector(".bannerTitle");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    bannerTitle.classList.add("small");
  } else {
    bannerTitle.classList.remove("small");
  }
});

// Auto Play Video
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("bgVideo");
  video.muted = true;
  video.playsInline = true;
  video.play();
});

// NEW
const title = document.querySelector(".bannerTitle");
const newImg = document.querySelector(".newImgLayout");
const newText = document.querySelector(".newTitleImg");

let startScroll = null;

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function updateNewPosition() {
  const titleRect = title.getBoundingClientRect();
  const imgRect = newImg.getBoundingClientRect();

  const triggerOffset = 5;
  const isTouching = titleRect.bottom >= imgRect.top - triggerOffset;

  if (isTouching && startScroll === null) {
    startScroll = window.scrollY;
  }

  if (!isTouching) {
    startScroll = null;
  }

  let push = 0;

  if (startScroll !== null) {
    push = window.scrollY - startScroll;
  }

  const maxDown = imgRect.height / 2 - newText.offsetHeight / 2;

  const y = clamp(push, 0, maxDown);

  newText.style.transform = `translate(-50%, calc(-50% + ${y}px))`;
}

// window.addEventListener("scroll", updateNewPosition);
let ticking = false;
function onScrollNew() {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateNewPosition();
      ticking = false;
    });
    ticking = true;
  }
}

window.addEventListener("scroll", onScrollNew);
window.addEventListener("resize", updateNewPosition);
window.addEventListener("load", updateNewPosition);

// BEST SELLER
const bestImg = document.querySelector(".bestSellerWrapper");
const bestText = document.querySelector(".bestSellerTitleImg");

let bestStartScroll = null;

function updateBestPosition() {
  const titleRect = title.getBoundingClientRect();
  const imgRect = bestImg.getBoundingClientRect();

  const triggerOffset = 5; // ปรับความใกล้ได้
  const isTouching = titleRect.bottom >= imgRect.top - triggerOffset;

  if (isTouching && bestStartScroll === null) {
    bestStartScroll = window.scrollY;
  }

  if (!isTouching) {
    bestStartScroll = null;
  }

  let push = 0;

  if (bestStartScroll !== null) {
    push = window.scrollY - bestStartScroll;
  }

  const maxDown = imgRect.height / 2 - bestText.offsetHeight / 2;
  const y = clamp(push, 0, maxDown);

  bestText.style.transform = `translate(-50%, calc(-50% + ${y}px))`;
}

window.addEventListener("scroll", updateBestPosition);
window.addEventListener("resize", updateBestPosition);
window.addEventListener("load", updateBestPosition);
