const menuOpenBtn = document.querySelector(".mobile-menu-open");
const menuCloseBtn = document.querySelector(".mobile-menu-close");
const menu = document.querySelector("header nav");
const overlay = document.querySelector("header nav .overlay");

menuOpenBtn.addEventListener("click", () => {
  menu.classList.add("open");
});
menuCloseBtn.addEventListener("click", () => {
  menu.classList.remove("open");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("open");
});
