let Name = document.getElementsByClassName("js-name");
let mail = document.getElementsByClassName("js-mail");
let message = document.getElementsByClassName("js-message");
let sign = document.getElementsByClassName("sign");
var xhr = new XMLHttpRequest();

Name[0].oninput = function () {
  if (Name[0].value != "") {
    sign[0].innerHTML = "✔";
    sign[0].style.color = "green";
  } else {
    sign[0].innerHTML = "*";
    sign[0].style.color = "red";
  }
};

mail[0].oninput = function () {
  let input = mail[0].value;
  let check = false;
  for (a = 0; a < input.length; a++) {
    if (input[a] == "@" && a != 0 && a != input.length - 1) {
      check = true;
    }
  }
  if (check) {
    sign[1].innerHTML = "✔";
    sign[1].style.color = "green";
  } else {
    sign[1].innerHTML = "*";
    sign[1].style.color = "red";
  }
};

message[0].oninput = function () {
  let input = message[0].value;
  if (input.length >= 20) {
    sign[2].innerHTML = "✔";
    sign[2].style.color = "green";
  } else {
    sign[2].innerHTML = "*";
    sign[2].style.color = "red";
  }
};

function send() {
  if (sign[0].innerHTML == "*") {
    alert("Введите корректное имя");
  } else if (sign[1].innerHTML == "*") {
    alert("Введите корректную почту");
  } else if (sign[2].innerHTML == "*") {
    alert("Сообщение должно быть не менее 20 символов");
  } else {
    let result =
      "https://api.telegram.org/bot2120832333:AAEi4qHcjBImon5yGwAnoflP3WCobwidR2U/sendMessage?chat_id=336430443&text=%D0%9F%D1%80%D0%B8%D1%88%D0%BB%D0%BE+%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B5+%D0%BF%D0%BE+%D1%84%D0%BE%D1%80%D0%BC%D0%B5+%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D0%BE%D0%B9+%D1%81%D0%B2%D1%8F%D0%B7%D0%B8+%D0%BE%D1%82%3A%0D%0A" +
      Name[0].value +
      "%0D%0A%D0%A2%D0%B5%D0%BA%D1%81%D1%82+%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D1%8F%3A%0D%0A" +
      message[0].value +
      "%0D%0A%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9+%D0%B0%D0%B4%D1%80%D0%B5%D1%81+%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9+%D0%BF%D0%BE%D1%87%D1%82%D1%8B%3A%0D%0A" +
      mail[0].value;
    xhr.open("POST", result, false);
    xhr.send(null);
    if (xhr.status != 200) {
      alert(xhr.status + ": " + xhr.statusText);
    }
    else {
      alert("Сообщение отправлено!");
    }
    contacts[0].style.display = "none";
  }
}
