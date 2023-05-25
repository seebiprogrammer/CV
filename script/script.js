const topHead = document.querySelector(".top-head");
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
  topHead.classList.toggle("active");
  menuIcon.classList.toggle("fa-times");
});

window.onscroll = () => {
  topHead.classList.remove("active");
  menuIcon.classList.remove("fa-times");
  menuIcon.classList.add("fa-bars");
};
