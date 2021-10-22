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
