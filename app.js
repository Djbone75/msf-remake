const hiddenElements = document.querySelectorAll(".hidden");
const header = document.querySelector(".header");
const don = document.querySelector(".don");
const logo = document.querySelector(".logo");
const news = document.querySelector(".news");
const presentation = document.querySelector(".presentation");
const image_presentation = document.querySelector(".image-presentation");
const headerMobile = document.querySelector(".header__mobile");
news.style.transform = "translateX(calc(-11rem))";

console.log(presentation);
const buttonPlus = document.querySelector(".plus");
const buttonLess = document.querySelector(".less");
const buttonMobile = document.querySelector("#buttonMobile");

buttonMobile.addEventListener("click", () => {
  headerMobile.classList.add("active");
});
headerMobile.addEventListener("click", () => {
  headerMobile.classList.remove("active");
});

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
let itemPrevious = document.querySelector(".article--1");

let slide = () => {
  let items = document.querySelectorAll(".article");
  let item = document.querySelector(".article--" + counter);

  items.forEach((item) => {
    item.classList.remove("article-active");
    item.classList.remove("article-previous");
  });
  item.classList.add("article-active");
  itemPrevious.classList.add("article-previous");
  itemPrevious = item;
  counter++;
  counter > 3 ? (counter = 1) : counter;
};
let imageNumber = 1;
presentation.style.backgroundImage =
  "url('/public/title--" + imageNumber + ".jpg')";
let hello = () => {
  imageNumber++;
  if (imageNumber > 3) {
    imageNumber = 1;
  }

  presentation.style.backgroundImage =
    "url('/public/title--" + imageNumber + ".jpg')";
  image_presentation.style.backgroundImage =
    "url('/public/title--" + imageNumber + ".jpg')";
};
let Interval3s = setInterval(slide, 3000);
let newInterval = setInterval(hello, 3000);

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
