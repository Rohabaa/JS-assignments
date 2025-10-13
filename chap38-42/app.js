// practice
//  switch:
// var  dayOfWk = prompt("eneter any day")
// switch (dayOfWk) {
//   case "Sat":
//     alert("Whoopee");
//     break;
//   case "Sun":
//     alert("Whoopee");
//     break;
//   case "Fri":
//     alert("TGIF!");
//     break;
//   default:
//     alert("Shoot me now!");
// }
// while:
// var i =0;
// while (i <= 3) {
//      alert(i);
//     i++;
//      }
//  do while:

//  var i=0;
//  do {
//     alert(i)
//     i++
//  }while (i<=3);

// chapter----38-44
// Qno1
// function power(a, b) {
//     return a ** b;
//   }
  
//   let a = +prompt("Enter the base number:");
//   let b = +prompt("Enter the exponent:");
  
//   let result = power(a, b);
  
//   document.write( a + " raised to the power " + b + " is {result}" + result);
  
// second method Math.paw
// let base = 5;
// let exponent = 4;
// let power = Math.pow(base, exponent);
// console.log(power); // Output: 625

//  Qno 2
// function leapyear(){
//     var year = prompt("enter any year")
//     if (year % 4 === 0 && year % 100 !== 0 || year % 4 === 0){
//         alert(year +" its a leap year ")
//     }else{
//         alert(year+" its not a leap year")
//     }
// }
// leapyear()
// qno3
// function first(a,b,c){
//     var  S = ( a + b + c ) / 2
//     return S;
// }

//  function area(a,b,c){
    // let S = first(3,4,5)     is ko agr bahar rakhte to ye kaam nahi karta is liye is function mein rakha to solve bhi hogaya idher or dosre area mein kaam bhi karega as "S" 
//     // bahra ye dosre function mein nahi  karta
//        var area1 = S*(S - a)*(S - b)*(S - c)
//        return area1;
//  }
//  var result = area(3,4,5)
//  console.log(result);
// qno4
// function main(){
//     var bio = +prompt("enter your bio marks")
//         var chem = +prompt("enter your chem marks")
//     var phys = +prompt("enter your phys marks")
//      var totalmarks = +prompt("enter your total marks")
//     function average(){
//      return ( bio + chem + phys) / 3
//     }
//     function percentage(){
//         var obtainedmarks = bio + chem + phys
//         return (obtainedmarks / totalmarks) * 100
//     }
//     console.log(average());
//     console.log(percentage());
//     return [average(), percentage()]
// }
// console.log(main());

// _Qno5
// function indexof(){
//     var para = "my name is rohab majid khan "
//     var index = para.indexOf("majid")
//     console.log(index);
    
// }
// indexof()
//  qno 6
function vowelss(characters){
for ( var i=0; i<characters.length; i++){
    var sentences = characters[i]
    if(sentences==="a"&& sentences==="e" && sentences==="i"){
        var result =  replace("")
    }
}
}
// qno7________
// Qno8
// function km(){
//     var dis = 60
 
//     function m(){
//         var m = (dis * 1000)
//         return m
//     }
//         function cm(){
//         var cm = (dis * 10000)
//         return cm;
//     }

//  function inches(){
//         var inches = (dis * 39370.1)
//         return inches;
//     }
//  function feet(){
//         var feet = (dis * 3280.84)
//         return feet;
//     }
// return [m(), cm(), inches(), feet()]

// }
// console.log(km());

// Qno9