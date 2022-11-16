const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn  = document.getElementById("decrease");
const sizeEl  = document.getElementById("size");
const colorEl  = document.getElementById("color");
const drawBtn  = document.getElementById("draw");
const eraserBtn  = document.getElementById("eraser");
const ctx = canvas.getContext("2d");

let size = 30;
let isPressed = false;
let color = 'black';
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawcircle(x2, y2);
        drawline(x, y, x2, y2);
        x = x2;
        y = y2;
    }
    
});

function drawcircle(x,y)
{
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawline(x1, y1, x2, y2)
{
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();

}

increaseBtn.addEventListener('click', () =>{
    size +=5;
    if(size>=50)
    {
        size = 50;
    }
    updateSizeOnScreen();

});

decreaseBtn.addEventListener('click', () =>{
    size -=5;
    if(size<=5)
    {
        size = 5;
    }

    updateSizeOnScreen();

});

drawBtn.addEventListener('click', (e) =>{
    
    color = e.target.value;
})

eraserBtn.addEventListener('click', () =>{
    
    color = '#f5f5f5';

})


colorEl.addEventListener('change', (e) => {

    color = e.target.value;
});
function updateSizeOnScreen()
{
    sizeEl.innerText= size; 
}
