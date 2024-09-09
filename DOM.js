//Document Object Model

//
let elemClass = document.getElementsByClassName("header");
elemClass[0].classList.add("NewHeader");


//
let p1 = document.getElementById("First");
let p2 = document.getElementById("Second");
let p3 = document.getElementById("Third");

p1.style.background = "cyan"
p2.style.background ="green"
p3.style.background = "yellow"


let TextClass = document.getElementsByClassName("text-success")

TextClass[0].innerHTML = "Hi"
