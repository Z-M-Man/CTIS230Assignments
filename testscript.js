myitem = document.getElementById("firsttest"); //Finds an html element with id "firsttest" and assigns it to variable "myitem"
thebutton = document.getElementById("thebutton");
otheritem = document.getElementById("buttontest");
textentry = document.getElementById("myinput");
mainimg = document.getElementById("battle");
imgbutton = document.getElementById("imgbutton");
thumbnail = document.getElementById("altflag");

myitem.addEventListener("click", onClick); //Waits for the event "click" to happen and runs the function onClick when it occurs
myitem.addEventListener("mouseout", onmouseout);
thebutton.addEventListener("click", onButtonClick);
textentry.addEventListener("change", onChange);
imgbutton = addEventListener("click", onImgClick);
thumbnail.addEventListener("click", onOpen);


//defines the function that will run when myitem is clicked on 
function onClick() {
    myitem.style.color = "green"; //sets the style color of the element to green
    myitem.style.fontSize = "26px"; //sets the font size to 26 pixels
    thumbnail.style.width = "500em";
}

function onmouseout() {
    myitem.style.color = "maroon";
    myitem.style.fontSize = "1.05em";
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
    mainimg.style.width = "600px";
}

let isThumbnail = true;
function onOpen() {
    if (isThumbnail == true) {
        thumbnail.style.width = "50em";
        isThumbnail = false;
    } else {
        thumbnail.style.width = "10em";
        isThumbnail = true;
    }
}