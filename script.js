/*
Create Div element that resembles a square. 
Add a black outline to this element

Add it to the container div

*/

const container = document.getElementById("container");
container.classList.add("container");

let counter = 1;

while(counter < 257) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);
    counter++;   
}

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






