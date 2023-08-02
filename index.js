const open = document.querySelector(".open");
const leftPanel = document.querySelector(".left-side");
const rightPanel = document.querySelector(".right-side");

const openBtn = document.querySelector("#btn");

openBtn.addEventListener("click", () => {
  open.style.transform = `rotate(-180deg)`;
  open.style.transition = "5s ease";
  leftPanel.style.opacity = "1";
  leftPanel.style.transition = "3s ease";
  rightPanel.style.opacity = "1";
  rightPanel.style.transition = "3s ease";
});
