const menuToggleBtn = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector("header nav");

menuToggleBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});
