const callAnimation = document.querySelector(
  ".header__items_info.phone-active"
);

const phoneCall = document.querySelector(".header__items_info.phone");

phoneCall.addEventListener("click", (event) => {
  if (event.target) {
    event.stopPropagation();
    callAnimation.classList.add("_active");
  }
});
const bodyElement = document.body;
bodyElement.addEventListener("click", (event) => {
  if (event.target) {
    callAnimation.classList.remove("_active");
  }
});
