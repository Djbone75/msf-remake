const hiddenElements = document.querySelectorAll(".hidden");
const header = document.querySelector(".header");
const don = document.querySelector(".don");
const logo = document.querySelector(".logo");
const news = document.querySelector(".news");
news.style.transform = "translateX(calc(-11rem))";

const buttonPlus = document.querySelector(".plus");
const buttonLess = document.querySelector(".less");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

hiddenElements.forEach((element) => {
  observer.observe(element);
});

window.onscroll = function (e) {
  if (window.scrollY === 0) {
    header.classList.remove("visible");
    don.classList.remove("visible");
    logo.classList.remove("visible");
  } else {
    header.classList.add("visible");
    don.classList.add("visible");
    logo.classList.add("visible");
  }
};
let counter = 2;
let itemPrevious = document.querySelector(".item--1");
let slide = () => {
  let items = document.querySelectorAll(".item");

  let item = document.querySelector(".item--" + counter);

  items.forEach((item) => {
    item.classList.remove("item-active");
    item.classList.remove("item-previous");
  });
  item.classList.add("item-active");
  itemPrevious.classList.add("item-previous");
  itemPrevious = item;
  counter++;
  counter > 3 ? (counter = 1) : counter;
};
let Interval2s = setInterval(slide, 3000);

let transformX = -11;
buttonPlus.addEventListener("click", () => {
  if (transformX >= -76) {
    transformX -= 22;
  } else {
    transformX = -11;
  }

  news.style.transform = "translateX(" + transformX + "rem)";
});
buttonLess.addEventListener("click", () => {
  if (transformX != -11) {
    transformX += 22;
  } else {
    transformX = -77;
  }

  news.style.transform = "translateX(" + transformX + "rem)";
});
