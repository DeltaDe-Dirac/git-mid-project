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
  }, 10000);
}
