
var red = document.getElementById("red")
var blue = document.getElementById("blue")
var sect = document.querySelector('section');

red.addEventListener("click",showContact)

function  showContact(e){
    sect.classList.remove("contacts")
}



