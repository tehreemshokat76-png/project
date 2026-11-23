let button = document.getElementById("changeBtn");

let paragraph = document.getElementById("message");

button.addEventListener("click", function() {

    paragraph.innerText = "Congratulations! You changed the text!";

});