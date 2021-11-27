let menu = document.getElementsByClassName("menu-hideable");
let contacts = document.getElementsByClassName("contacts-wrapper");

function mobilemenuShow() {
  menu[0].style.display = "flex";
}

function mobilemenuHide() {
  menu[0].style.display = "none";
}

function openContacts() {
  contacts[0].style.display = "flex";
}

function closeContacts() {
  contacts[0].style.display = "none";
}
