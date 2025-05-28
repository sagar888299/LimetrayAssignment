const nextButton = document.querySelector(".next");
const leftButton = document.querySelector(".prev");
const slider = document.querySelector(".slides");
nextButton.addEventListener("click", function () {
  slider.scrollBy({ left: 1260, behavior: "smooth" });
});
leftButton.addEventListener("click", function () {
  slider.scrollBy({ left: -1260, behavior: "smooth" });
});

setInterval(() => {
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: 1260, behavior: "smooth" });
    }
  }, 3000);