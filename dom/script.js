const page = document.querySelector(".page");
const dayButton = document.querySelector(".button-day");
const nigthButton = document.querySelector(".button-night");

dayButton.onclick = function () {
  console.log("I`m here!");
  page.classList.remove("night");
  page.classList.add("day");
};

nigthButton.onclick = function () {
  page.classList.remove("day");
  page.classList.add("night");
};
