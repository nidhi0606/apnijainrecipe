function openRecipe(evt, recipeName) {
  let tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("show");
  }

  let tablinks = document.getElementsByClassName("tablink");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  let selected = document.getElementById(recipeName);
  selected.classList.add("show");
  evt.currentTarget.className += " active";
}

// Default: first tab visible
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".tablink").click();
});
