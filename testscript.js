myitem = document.getElementById("firsttest"); //Finds an html element with id "firsttest" and assigns it to variable "myitem"
thebutton = document.getElementById("thebutton");
otheritem = document.getElementById("buttontest");
textentry = document.getElementById("myinput");
mainimg = document.getElementById("battle");
imgbutton = document.getElementById("imgbutton");

myitem.addEventListener("click", onClick); //Waits for the event "click" to happen and runs the function onClick when it occurs
thebutton.addEventListener("click", onButtonClick);
textentry.addEventListener("change", onChange);
imgbutton = addEventListener("click", onImgClick);

//defines the function that will run when myitem is clicked on 
function onClick() {
    myitem.style.color = "green"; //sets the style color of the element to green
    myitem.style.fontSize = "26px"; //sets the font size to 26 pixels
}

function onButtonClick() {
    otheritem.style.color = "green";
    otheritem.style.fontSize = "26px";
}

function onChange() {
    newtext = myinput.value;
    otheritem.innerHTML = newtext;
}

function onImgClick() {
    mainimg.style.width = "600px"
}