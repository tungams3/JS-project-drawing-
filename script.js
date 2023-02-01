const canvas=document.getElementById("draw");
const ctx=canvas.getContext("2d");
ctx.fillStyle="red";
function draw(x,y)
{
    const circle=new Path2D();
    circle.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fill(circle);
}
let ismouse_down=false;
canvas.addEventListener('mousedown',(e)=>{
    ismouse_down=true;
})
canvas.addEventListener('mouseup',(e)=>{
    ismouse_down=false;
})
canvas.addEventListener('mousemove',(e)=>
{
    if(!ismouse_down)
    {
        return;
    }
    else
    {
    const react=canvas.getBoundingClientRect();
    draw(e.clientX-react.left,e.clientY-react.top);
    }
})
var elements=document.getElementsByClassName("color-picker");
for(var i=0;i<elements.length;i++)
{
    elements[i].addEventListener('click',(e)=>{
        ctx.fillStyle=e.target.style.backgroundColor
    })
}
const clear=document.getElementById("btn-clear");
clear.addEventListener('click',(e)=>{
    ctx.clearRect(0,0,600,600);
})