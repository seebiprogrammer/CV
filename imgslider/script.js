const images = document.querySelectorAll(".slide");
const slides = document.querySelectorAll(".slides");

let slideIndex = 0;
const slideLength = images.length;

function slideShow() {
  images.forEach((img) => {
    img.style.display = "none";
  });

  slideIndex++;

  if (slideIndex > slideLength) {
    slideIndex = 1;
  }
  images[slideIndex - 1].style.display = "block";

  setTimeout(slideShow, 1500);
}

slideShow();
