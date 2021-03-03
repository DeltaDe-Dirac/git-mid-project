let counter = 1;

function removePlaceholder() {
  document.getElementById("search").placeholder = "";
}

function addPlaceholder() {
  document.getElementById("search").placeholder = "רשום מילת חיפוש";
}

function changePic() {
  setInterval(function () {
    document.getElementById("ads-img").src = "img/ads-" + ((counter++ % 4) + 1) + ".jpg";
  }, 5000);
}

function cleanTextarea() {
  document.getElementById("textarea").placeholder = "";
}

function sendForm() {
  if (!document.getElementById("fname").checkValidity()) {
    document.getElementsByClassName("fname")[0].style.display = "block";
  } else {
    document.getElementsByClassName("fname")[0].style.display = "none";
  }

  if (!document.getElementById("lname").checkValidity()) {
    document.getElementsByClassName("lname")[0].style.display = "block";
  } else {
    document.getElementsByClassName("lname")[0].style.display = "none";
  }

  if (!document.getElementById("phone").checkValidity()) {
    document.getElementsByClassName("phone")[0].style.display = "block";
  } else {
    document.getElementsByClassName("phone")[0].style.display = "none";
  }

  if (!document.getElementById("email").checkValidity()) {
    document.getElementsByClassName("email")[0].style.display = "block";
  } else {
    document.getElementsByClassName("email")[0].style.display = "none";
  }
}
