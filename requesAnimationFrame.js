
let el = document.getElementById('thing1');
let reqID;
let dir;

function changeDir(d) {
    dir = d;
}
function startAnimation() {
    if( dir == "right")  {
        el.style.left = (el.offsetLeft += 1) + 'px';
    } else if ( dir == "left") {
        el.style.left = (el.offsetLeft -= 1) + 'px';
    }
    reqID = window.requestAnimationFrame(startAnimation)
}
function stopAnimation() {
    window.cancelAnimationFrame(reqID)
}