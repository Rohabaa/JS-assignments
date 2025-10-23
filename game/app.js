var char1 = document.getElementById("charcter1")
var left = 0
var right =0 
function animatedcharacter(){
console.log(event.keyCode); 
if(event.keyCode===90){
    left = left + 10
    character1.style.left = left + "px"
    character1.src = " pic/rougewalk.gif"
    character1.style.transform = "scaleX(1)"
    character1.style.height = '65px'
    
} 
if(event.keyCode===77){
    left = left -10
    character1.style.left = left + "px"
    character1.style.transform = "scaleX(-1)"
    setTimeout(()=>{
    character1.src = 'pic/rougestay.gif'
        character1.style.transform = "scaleX(1)"


},1000)
} 
if(event.keyCode===16){
    character1.src =" pic/rougefight.gif"
    setTimeout(()=>{
        character1.src = "pic/rougestay.gif"
            character1.style.height = "65px"
 
    },2500)

    character1.style.height = "100px"
}
if(event.keyCode===37){
right = right + 10
character2.style.right = right + "px"
character2.src = 'pic/sakura walkk.gif'
    character2.style.transform = "scaleX(-1)"
}
if(event.keyCode===39){
right = right - 10
character2.style.right = right + "px"
    character2.src = 'pic/sakura walkk.gif'
    character2.style.transform = "scaleX(1)"

setTimeout(()=>{
    character2.src = 'pic/sakurastay2.gif'

},1000)
}
if(event.keyCode===38){
            character2.src =" pic/sakura fight.gif"
        character2.style.transform = "scaleX(-1)"
        character2.style.height = '80px'


setTimeout(()=>{
                character2.src =" pic/sakura walkk.gif"
        character2.style.height = '65px'

},1000)
}
}
window.onkeydown = animatedcharacter;