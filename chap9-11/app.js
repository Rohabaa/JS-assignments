// _____________________________________________________PRACTICEE:
// console.log("After if");
// var qualification = prompt("Enter your qualification")
// if (qualification==="Graduation"){
//     console.log("Congratulations ,You are Eligible!");
// }
//  else if(qualification==="Inter"){
//     console.log("You should apply for internship!");
// }
//  else if(qualification==="Matric"){
//     console.log("Sorry, You are not Eligible!");
// }else{
    
//     console.log("bye")
// }
// var isRaining = false;

// if(isRaining){
//     console.log("Its raining outside!");  
// }else{
//     console.log("Its not raining outside!");  
// }
// var capital = prompt("Enter the capital of Pakistan")
// var ans = "Islamabad";
// var score = 0
// if(capital === ans){
//     score++
//     alert("Correct")
//     console.log(score); 
// }
// var usercity = prompt("enter ur city name :")
// var education = prompt("enter ur education :")
// if(usercity!=="India"){
//     document.write("u are eligible")
// }
// if(education!== "matric"){
//         document.write("u are eligible")

// }
// ________________________________________________CHAPTER 9 TO 11
// __________________Qno1
// var Cityname =prompt("Enter your name :")
// if(Cityname==="Karachi"){
//     document.write("<h1>“Welcome to city of lights”</h1>")
// }

// _____________________________Qno2
// var gender = prompt("Your gender")
// if(gender==="male"){
//     document.write("Good Morning Sir.")
// }
// if(gender==="female"){
//     document.write("Good Morning Madam.")
// }
// _____________________Qno3
// var signal = prompt("enter the colour of signal light")
// if(signal=="red"){
//     console.log("you must stop");
    
// }
//  else if(signal=="yellow"){
//     console.log("ready to move");
    
// }
// else if(signal=="green"){
//     console.log("must move");
    
// }else{
//     console.log("enter a valid colour");
    
// }
// _______________________--Qno4
// var remainingfuel =+prompt(" remaining fuel in car")
// if(remainingfuel <= 0.25){
//     document.write("“Please refill the fuel in your car”");
    
// }
// ____________________Qno5
// a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }  " ITS RUNNING Bcz its 'true' "

// b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// } "ITS NOT RUNNING Bcz its 'false'"
// c
// /var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// } "ITS NOT RUNNING Bcz its 'false'"

// if (c === 13){
// alert("condition 2 is true");
// }  " ITS NOT RUNNIG Bcz its 'false'"

// if (++c < 14){
// alert("condition 3 is true");
// } "ITS NOT RUNNING Bcz its 'false'"

// if(c === 14){
// alert("condition 4 is true");
// } "ITS NOT RUNNING Bcz its 'false'"
// d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// } " ITS RUNNING Bcz its 'true' "

// e
// if (true){
// alert("True");
// }
// if (false){
// alert( " false")
// } " ITS RUNNING Bcz its 'true' "

// f
// if("car" < "cat"){
// alert("car is smaller than cat");
// } " ITS RUNNING Bcz its 'true' "


// ________________________Qno6
// var obtmarks =+prompt("enter your obtained marks (out of 100)")
// total = 100
// var percent = obtmarks/total*100
// if(percent>=80 && percent<=100){
//     document.write("A-one" + "<br>")
//     document.write("Excellent")
// }
// else if(percent>=70 && percent<=79){
//     document.write("A" + "<br>")
//     document.write("Good")
// }
//  else if(percent>=60 && percent<=69){
//     document.write("B" + "<br>")
//     document.write("you need to improve" )
// }
//  else if( percent<=60){
//     document.write("Fail" + "<br>")
//     document.write("Sorry")
// }
// else{
//    alert("enter a valid number")
//    var obtmarks =+prompt("enter your obtained marks (out of 100)")
// total = 100
// var percent = obtmarks/total*100
// if(percent>=80 && percent<=100){
//     document.write("A-one" + "<br>")
//     document.write("Excellent")
// }
// else if(percent>=70 && percent<=79){
//     document.write("A" + "<br>")
//     document.write("Good")
// }
//  else if(percent>=60 && percent<=69){
//     document.write("B" + "<br>")
//     document.write("you need to improve" )
// }
//  else if( percent<=60){
//     document.write("Fail" + "<br>")
//     document.write("Sorry")
// }
// }
// ______________________________________Qno7
// var secretno = 9
// var guess = +prompt("Guess the secret no from (1 to 10 )")
// if( guess ===9){
//     document.write("<h1> Bingo </h1>")
// }
//  else if( guess + 1  === secretno || guess - 1  === secretno   ){
//     document.write("<h1> “Close enough to the correct answer”.</h1>")
// }
// ________________________________Qno8
// var number = prompt("Enter a number to check if it is divisible by 3:")
// if(number%3=== 0){
//    alert("Yes! The number " + number + " is divisible by 3.");
// }else{
//     alert("No the number " + number + "is not divisible by 3 ")
// }
// ___________________________________Qno9
// var number = prompt("give even or odd number")
// if(number % 2 === 0){
//     alert("its even")
// }else{
//     alert("its odd")
// }
// ______________________---Qno10
// var temp = prompt("Temperature outside")
// if(temp > 40){
//     document.write("<h1>“It is too hot outside.” </h1>" + "<br>")
// }
// else if(temp > 30){
//     document.write("<h1>“The Weather today is Normal.” </h1>" + "<br>")
// } 
// else if(temp > 20){
//     document.write("<h1>“Today’s Weather is cool.” </h1>" + "<br>")
// } 
// else if(temp > 10){
//     document.write("<h1>“OMG! Today’s weather is so Cool.” </h1>")
// } 
// ______________________Qno11
// var number1 = +prompt("enter your 1st number")
// var number2 = +prompt("enter your 2nd number")
// var operation = prompt("enter the operation (+, - , / ,%,*)")

// if(operation=== "+"){
//     result = number1 + number2
//     alert("result" + result)

// }
// else if(operation=== "-"){
//     result = number1 - number2
//     alert("result" + result)

// }
// else if(operation=== "/"){
//     result = number1 / number2
//     alert("result" + result)

// }
// else if(operation=== "*"){
//     result = number1 * number2
//     alert("result" + result)

// }
//  else if(operation=== "%"){
//     result = number1 % number2
//     alert("result" + result)

// }