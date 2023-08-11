const grid = document.querySelector(".grid");

const defaultColor = 'black';
const defaultValue = 16;

const eraser = document.querySelector("#eraser");
const slide = document.querySelector('#slide');
const value = document.querySelector("#value");
const color = document.querySelector("#colorInput");
const black = document.querySelector("#black");
const reset = document.querySelector('#reset')

slide.addEventListener('change', setSize);
slide.addEventListener('mousemove', changeSize)

let currentColor = defaultColor;
let currentValue = defaultValue;

let mouseDown = false ;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false ); 

eraser.onclick = () => (currentColor = 'white') 
black.onclick = () => (currentColor = 'black')
reset.onclick = () => {let cell = document.querySelectorAll('.cell'); 
 cell.forEach(item => item.style.backgroundColor = 'white');
}
color.addEventListener('input', function(e){
    currentColor = e.target.value;
})

function changeColor(e){
    if(e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = currentColor;
}

function createGrid(pixel){
    grid.style.gridTemplateColumns = `repeat(${pixel}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${pixel}, 1fr)` ;
    for (let i = 0; i < pixel * pixel; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', changeColor)
        cell.addEventListener('mousedown', changeColor)
        grid.appendChild(cell);
    }
}

createGrid(currentValue);

function changeSize(e){
    value.textContent = `${e.target.value} x ${e.target.value}`
}

function setSize(e){
    currentValue = e.target.value;
    grid.innerHTML = ''
    createGrid(currentValue);
}