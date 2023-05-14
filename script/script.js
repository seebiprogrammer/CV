const navBar = document.querySelector(".nav-bar");
const barsIcon = document.querySelector(".menu-icon .bars");
const timesIcon = document.querySelector(".menu-icon .times");
const menuIcon = document.querySelector(".menu-icon");
const topHead = document.querySelector(".top-head");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-times");
  navBar.classList.toggle("active");
});

window.onscroll = () => {
  navBar.classList.remove("active");
  menuIcon.classList.remove("fa-times");
  menuIcon.classList.add("fa-bars");
};
