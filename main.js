const container = document.getElementById("number");
const card_one = document.getElementById("firstCard");
const card_two = document.getElementById("secondCard");
const rate_number = document.getElementById("rating");
const error = document.querySelector(".error");
var rate_value;
const form = document.getElementById("form");

function fillCol() {
  for (let i = 1; i < 6; i++) {
    var columns = document.createElement("label");
    columns.className = "number";
    columns.innerHTML = i;
    container.appendChild(columns);
  }

  const numbers = document.querySelectorAll(".number");
  numbers.forEach((number, index) => {
    number.addEventListener("click", function () {
      const selected = document.querySelector(".clicked");
      if (selected) {
        selected.classList.remove("clicked");
      }
      number.classList.add("clicked");
      rate_value = index + 1;
    });
  });
}

fillCol();

function verifySubmit() {
  const selected = document.querySelector(".clicked");
  if (selected) {
    rate_number.innerHTML = rate_value;
    card_one.classList.add("rate");
    card_two.classList.remove("thanks-card");
  } else {
    error.classList.add("show");
    setTimeout(() => {
      error.classList.remove("show");
    }, 1000);
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Verifying...");
  verifySubmit();
});
