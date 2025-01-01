/*
Create Div element that resembles a square. 
Add a black outline to this element

Add it to the container div

*/

const container = document.getElementById("container");
container.classList.add("container");

const button = document.createElement("button");
button.textContent = "# of Squares";
document.body.prepend(button);

let input = 256;
button.addEventListener('click', () => {
    input = prompt("How many squares do you want per side?");
    input = parseInt(input);
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    let counter = 0;
    let gridNumber = input * input;
    while(counter < gridNumber) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
        counter++;   
    }
    hover();
});

let counter = 0;

while(counter < input) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);
    counter++;   
}

hover();

function hover() {
    const mouseOver = document.querySelectorAll("div.grid");
    console.log(mouseOver);
    
    mouseOver.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', (e) => {
            gridItem.style.backgroundColor = "red";
        });
    });
    
    mouseOver.forEach((gridItem) => {
        gridItem.addEventListener('mouseleave', (e) => {
            gridItem.style.backgroundColor = "white";
        });
    });
}







