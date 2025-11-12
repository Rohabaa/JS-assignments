// var i=1;
// while (i<=10){
//     console.log(i);
//     i++
// }
// do ehilr
// var i = 0
// do {
//     console.log(i);
//     i++
// } while (i<4) 
 function formore(){
    var expand = " Lorem ipsum dolor sit amet consectetur adipisicing elit.Molestiae in magni veniam odit doloremque placeat quo assumenda quae vel,     quidem nostrum voluptate ea culpa, nemo ad eveniet. Dolorum, cum dicta"
    var seeless = ""
   document.getElementById("para").innerHTML = expand

 }
 function makeInvisible(){
  document.getElementById("ugly").className = "hidden"
 }
function nayaimg(){
document.getElementById("newimg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9sS9xdhOuVAn22aZBTkH4BoflfaJWZzF4Zg&s"
}
function zoom(){
  document.getElementById("para1").className += "zoom"
}
var tag = document.getElementsByTagName('p')
console.log(tag);
var para = tag[1].innerHTML
console.log(para);
var e = document.getElementById("rules")
console.log(e);
var cell = e.getElementsByTagName("p")

