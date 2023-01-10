const body = document.body;
const formContainer = document.querySelector(".form__conteiner");
const accessForm = document
  .querySelector(".autorization__icon")
  .addEventListener("click", (e) => {
    if (e.target) {
      (formContainer.style.display = "block") &&
        bodyElement.classList.add("_lock");
    } else {
    }
  });

const closeForm = document
  .querySelector(".close__form")
  .addEventListener("click", (e) => {
    if (e.target) {
      formContainer.style.display == "block";
      (formContainer.style.display = "none") &&
        bodyElement.classList.remove("_lock");
    }
  });
//show and closed form

c;
