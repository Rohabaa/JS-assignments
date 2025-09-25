// qno1
// function currentdate(){
// var date = new Date()
// console.log(date);

// }
// currentdate()

// qno2
// function name(){
// var firstname = prompt("enter your fierst name ")
// var lastname = prompt("enter your last name")
// var result = firstname + lastname
// console.log(" welcom  " +result);
// }
// name()

// qno3
// function sum(num1, num2) {
//   var result = num1 + num2;
//   console.log(result);
// }
// var num1 = +prompt("enter 1st number");
// var num2 = +prompt("enter 2nd number");
// sum(num1,num2);

// qno4

// function calculator(num1,num2,operator){
//     if(operator === "+"){
//         console.log(num1 + num2);
        
//     } else if(operator === "-"){
//         console.log(num1 - num2);
        
//     } else if(operator === "/"){
//         console.log(num1 / num2);
        
//     }else if(operator === "*"){
//         console.log(num1 * num2);
        
//     }else{
//         console.log("enter a valid operator");
        
//     }
// }
// var num1 =+prompt("enter your 1st number")
// var num2 =+prompt("enter your 2nd number")
// var operator =prompt("enter your operator method")

// calculator(num1,num2,operator)

// qno5
// function num(anynum){
//     var result = anynum * anynum
//    console.log(result);
// }
// num(9)

// qno7
// function counting(start , end){
// for (var i=start ;i<end ; i++ ){
//     console.log(i);
    
// }
// }
// var startingnum = +prompt("enter any starting number")
// var endingnum = +prompt("enter last number")
// counting(startingnum,endingnum)

// qno8
function hypotenus(base,perpendicular){
var hypotenuss = (base * base) + (perpendicular * perpendicular)
console.log(hypotenuss);

}
var forbase = +prompt("enter base")
var forperp = +prompt("enter perpendicular")
hypotenus(forbase,forperp)

