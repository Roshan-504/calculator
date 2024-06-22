let display = document.getElementById("display");

function appendToDisplay(value){
    display.value+=value;
}

function ClearDisplay(){
    display.value = " "
}

function Delete(){
    display.value = display.value.toString().slice(0,-1)
}

function Calculate(){
    display.value = eval(display.value);
}


function changeMode(){
    mode.classList.toggle('mode')
    modeball.classList.toggle('modeball')
}
let mode = document.getElementById("nightmode");
let modeball = document.getElementById("nightball");
let outerbox = document.getElementById("outerbox");
let buttons = document.getElementsByClassName("buttons");

modeball.onclick = function(){
    mode.classList.toggle('active')
    modeball.classList.toggle('active')
    outerbox.classList.toggle('active')
    display.classList.toggle('active')

    for(var i=0 ;i<buttons.length ;i++){
    buttons[i].classList.toggle('active')
    }
}
