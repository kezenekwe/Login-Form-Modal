//select elements
const openbtn = document.querySelector(".open-modal");
const close = document.querySelector(".close");
const cancel = document.querySelector(".cancel");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay")

//open modal
openbtn.addEventListener("click", function() {
    overlay.classList.toggle("show-overlay");
    modal.classList.toggle("show-modal");
});

//close modal
close.addEventListener("click", function() {
    overlay.classList.remove("show-overlay");
    modal.classList.remove("show-modal");
});

//close modal
cancel.addEventListener("click", function() {
    overlay.classList.remove("show-overlay");
    modal.classList.remove("show-modal");
});

//close modal
window.addEventListener("click", function(event) {
    if (event.target == overlay) {
        overlay.classList.remove("show-overlay");
        modal.classList.remove("show-modal");
    }
});