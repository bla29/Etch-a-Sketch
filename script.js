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

let input = 257;
button.addEventListener('click', () => {
    input = prompt("How many squares do you want per side?");
    input = parseInt(input);
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    let counter = 1;
    let gridNumber = (input * input) + 1;
    /*
      x = 1
      while x < input
        (input * x) + 1 grid item should be 100% width 
        with zero height and border


      if counter is divisible by input then the next one
      should push the div to the next row
    */
    while(counter < gridNumber) {
        const grid = document.createElement("div");
        if(counter % input === 1 && counter !== 1) {
            const emptyRow = document.createElement("div");
            emptyRow.classList.add("break");
            container.appendChild(emptyRow);
            grid.classList.add("grid");
            container.appendChild(grid);
            console.log(counter);
        }
        else {
            grid.classList.add("grid");
            container.appendChild(grid);   
        }
        counter++;
    }
    hover();
});

let counter = 1;
let originalRowCount = 16;
while(counter < input) {
    const grid = document.createElement("div");
    if(counter % originalRowCount === 1 && counter !== 1) {
        const emptyRow = document.createElement("div");
        emptyRow.classList.add("break");
        container.appendChild(emptyRow);
        grid.classList.add("grid");
        container.appendChild(grid);
        console.log(counter);
    }
    else {
        grid.classList.add("grid");
        container.appendChild(grid);   
    }
    counter++;
}

hover();

function hover() {
    const mouseOver = document.querySelectorAll("div.grid");
    
    mouseOver.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', (e) => {
            const red = Math.floor(Math.random() * 256); 
            const green = Math.floor(Math.random() * 256); 
            const blue = Math.floor(Math.random() * 256);
            const color = `rgb(${red}, ${green}, ${blue})`; 
            gridItem.style.backgroundColor = color;
        });
    });
    
    mouseOver.forEach((gridItem) => {
        gridItem.addEventListener('mouseleave', (e) => {
            gridItem.style.backgroundColor = "white";
        });
    });
}







