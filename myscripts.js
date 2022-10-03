
var red = document.getElementById("red")
var blue = document.getElementById("blue")
var sect = document.querySelector('section');

red.addEventListener("click",showContact)

function  showContact(){
    sect.classList.remove("contacts")
}

blue.addEventListener("mouseenter",moveButton)
blue.addEventListener("mouseout",moveButtonBack)


function moveButton(){
 blue.classList.add('move')   
}

function moveButtonBack(){
    blue.classList.remove('move')   

}




