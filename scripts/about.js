function factsButtonClick(a) {
  let button = document.getElementsByClassName("about-facts-button");
  let hideable = document.getElementsByClassName("about-facts-text");
  if (hideable[a].style.display == "") {
    hideable[a].style.display = "flex";
    button[a].innerHTML = "-";
  } else {
    hideable[a].style.display = "";
    button[a].innerHTML = "+";
  }
}

let slider = document.getElementsByClassName("about-history-slider");
let left_button = document.getElementsByClassName(
  "about-history-slider-button-left"
);
let right_button = document.getElementsByClassName(
  "about-history-slider-button-right"
);

function hideElements() {
  for (let a = 1; a < slider.length; a++) {
    slider[a].style.display = "none";
  }
  for (let a = 0; a < slider.length; a++) {
    slider[a].style.marginTop =
      document.getElementById("about-history-header").offsetHeight + "px";
  }
  left_button[1].style.height = "540%";
  right_button[1].style.height = "540%";
  left_button[2].style.height = "500%";
  right_button[2].style.height = "500%";
  left_button[4].style.height = "270%";
  right_button[4].style.height = "270%";
}

let current_slider = 0;

function onLeftButtonClick() {
  if (current_slider) {
    current_slider--;
    slider[current_slider].style.display = "block";
    slider[current_slider + 1].style.display = "none";
  }
}

function onRightButtonClick() {
  if (current_slider != slider.length - 1) {
    current_slider++;
    slider[current_slider].style.display = "block";
    slider[current_slider - 1].style.display = "none";
  }
}

window.onresize = function () {
  for (let a = 0; a < slider.length; a++) {
    slider[a].style.marginTop =
      document.getElementById("about-history-header").offsetHeight + "px";
  }
};
