var link = document.querySelector(".js-open-contacts");
var popup = document.querySelector(".modal-contacts");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal-contacts-close");
var form = popup.querySelector("form");
var yourName = popup.querySelector("[name=name]");
var yourEmail = popup.querySelector("[name=email]");
var yourMessage = popup.querySelector("[name=text]");
var storageName = localStorage.getItem("name");
var storageEmail = localStorage.getItem("email");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-contacts-show");
  overlay.classList.add("modal-overlay-show");

  if (storageName && storageEmail) {
    yourName.value = storageName;
    yourEmail.value = storageEmail;
    yourMessage.focus();
  } else {
    yourName.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-contacts-show");
  overlay.classList.remove("modal-overlay-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  if (!yourName.value || !yourEmail.value || !yourMessage.value) {
    event.preventDefault();
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("name", yourName.value);
    localStorage.setItem("email", yourEmail.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-contacts-show")) {
      popup.classList.remove("modal-contacts-show");
      overlay.classList.remove("modal-overlay-show");
      popup.classList.remove("modal-error");
    }
  }
});

overlay.addEventListener("click", function(event) {
  popup.classList.remove("modal-contacts-show");
  overlay.classList.remove("modal-overlay-show");
  popup.classList.remove("modal-error");
});
