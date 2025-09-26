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

// qno6
// function factorial(n){
//     var result = 1
//     for(var   i=1 ; i<=n; i++){
//      result *=i
//     }
//     return result
// }
// document.write(factorial(5))


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
// function calculator(x){
//    var result =  x**2
// //    return result
// }
// console.log(calculator(5));

// function calculatehyp(base,perp){

//     function calculator(x){
        
//         return  x**2
//      }
//      var hypesquare = calculator(base)+calculator(perp)
//      return hypesquare
// }
// console.log(calculatehyp(5,5));


// qno9
// function area(width,height){
//   var Area = width*height
//   console.log(Area);
  
// }
// area(2,2)
// var w = 4
// var h = 4
// area(w,h)
 
  
// qno11
// function titlecase(){
// var sentence = prompt("write any sentences")
// var arraysen = sentence.split(" ")
// // console.log(arraysen);
// var titlecases  = [""]

// for (var i=0 ; i<arraysen.length;i++){
//     var firstchar = arraysen[i].slice(0,1).toUpperCase()
//         var otherchar = arraysen[i].slice(1).toLowerCase()
//         titlecases.push(firstchar+otherchar)
// }
// console.log(titlecases);
// console.log(titlecases.join(" "));
// }
// titlecase()