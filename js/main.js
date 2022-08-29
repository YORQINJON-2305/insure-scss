var elBtn = document.querySelector(".site-header__burger-wrap");
var elHeader = document.querySelector(".site-header");

elBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    elHeader.classList.toggle("open")
})