// Get the elements with class="column"
const elements = document.querySelector("#box");

const list = document.querySelector("#list");
const grid = document.querySelector("#grid");

list.addEventListener("click", () => {
  elements.classList.add("list_view");
});

grid.addEventListener("click", () => {
  elements.classList.remove("list_view");
});

// Declare a loop variable
var i;


/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
  
}


