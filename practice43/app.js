function greet(name){
    alert("hello!")
}
function on(e){
e.src="https://www.w3schools.com/js/pic_bulbon.gif"
// console.log("test");
}
function off(e){
    e.src="https://www.w3schools.com/js/pic_bulboff.gif"
}
function zoomin(e){
e.style.transform = "scale(1.5)"
e.style.transition = "1.5s"

}
function zoomout(e){
    e.style.transform="scale(1)"
    e.style.transition = "1.5s"

}
