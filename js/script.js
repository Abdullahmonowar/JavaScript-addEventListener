let selectH1 = document.querySelector("h1");
let selectButton = document.querySelector("button");

selectButton.addEventListener("click", function () {
  selectH1.style.color = "white";
  selectH1.style.fontSize = "40px";
  selectH1.style.background = "teal";
  selectH1.style.padding = "20px";
});

selectButton.addEventListener("click", function () {
  selectButton.style.background = "red";
  // Change The Button Color
  selectButton.innerHTML = "Clicked";
  // Change the Button Name
});
