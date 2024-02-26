myitem = document.getElementById("firsttest"); //Finds an html element with id "firsttest" and assigns it to variable "myitem"

myitem.addEventListener("click", onClick); //Waits for the event "click" to happen and runs the function onClick when it occurs

//defines the function that will run when myitem is clicked on 
function onClick() {
    myitem.style.color = "green"; //sets the style color of the element to green
    myitem.style.fontSize = "26px"
}