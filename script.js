let a = document.getElementById("testing");
a.onmouseout = mouseout;
a.onmouseover = mouseover;
a.onmousedown = mousedown;
a.onmouseup = mouseup;




function mouseout() {
    let writing = document.getElementById("testing");
    writing.innerHTML = 'whaaaaat';
}

function mouseover() {
    let writing = document.getElementById("testing");
    writing.innerHTML = 'what now?';
}

function mousedown() {
    let writing = document.getElementById("testing");
    writing.innerHTML = 'NOOOOOOO';
    writing.style.backgroundColor = "Yellow";
    writing.style.alignSelf = "flex-end";
}

function mouseup() {
    let writing = document.getElementById("testing");
    writing.innerHTML = 'YSSSSSSSSSSS';
    setTimeout(mouseout, 1500);
    writing.style.backgroundColor = "";
    writing.style.alignSelf = "";
    

}