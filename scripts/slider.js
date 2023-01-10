let offset = 0;
const cardsTravel = document.querySelector(".cards__travel");
const cardsSlide = Array.from(cardsTravel.children);

document.querySelector(".arrow__next").addEventListener("click", () => {
  offset = offset + 1205;
  if (offset > 0) {
    offset = 1205;
  }
  cardsSlide.forEach((item) => {
    (item.style.right = offset + "px") &&
      (item.style.transition = "ease-in 0.6s");
  });
});
document.querySelector(".arrow__back").addEventListener("click", () => {
  offset = 0;
  cardsSlide.forEach((item) => {
    item.style.right = offset + "px";
  });
});
