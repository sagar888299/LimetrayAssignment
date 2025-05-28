const nextButton = document.querySelector(".next");
const leftButton = document.querySelector(".prev");
const slider = document.querySelector(".slides");
nextButton.addEventListener("click", function () {
  slider.scrollBy({ left: slider.scrollWidth/3, behavior: "smooth" });
});
leftButton.addEventListener("click", function () {
  slider.scrollBy({ left: slider.scrollWidth/3, behavior: "smooth" });
});

setInterval(() => {
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: slider.scrollWidth/3, behavior: "smooth" });
    }
  }, 3000);

  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.navbar-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });