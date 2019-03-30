function up() {
    let up=document.getElementById("nobita");
    up.style.top=parseFloat(up.style.top) - 5 +"px";
}
function down() {
    let down=document.getElementById("nobita");
    down.style.top=parseFloat(down.style.top) + 5 + "px";
}
function  left() {
    let left =document.getElementById("nobita");
    left.style.left=parseFloat(left.style.left)- 5 + "px";
}
function  right() {
    let right =document.getElementById("nobita");
    right.style.left=parseFloat(right.style.left) + 5 + "px";
}


function moveSelection(a) {
    switch (a.keyCode) {
        case 37:
            left();
            break;
        case 39:
            right();
            break;
        case 38:
            up();
            break;
        case 40:
            down();
            break;
        default:
            alert('day khong phai phim di chuyen');
    }
}
function docread() {
    window.addEventListener('keydown',moveSelection);
}
