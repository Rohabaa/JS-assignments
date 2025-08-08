// var num1 = 3
// num = num1++
// console.log(num)
// var num1 = 3
// num = ++num1
// console.log(num)
// var num1 = 3
// num = num1--
// console.log(num)
// var num1 = 3
// num = --num1
// console.log(num)
// __________________________________CHAPTER 6-9
// _______________________________Qno1
//  var a = 5;
//  document.write("The value of a is: " + a + "<br><br>");
// document.write("The value of ++a is "+ (++a)+ "<br>")
// document.write("Now the vaue of a is " + a + "<br>")
// document.write("The value of a++ is "+ (a++)+ "<br>")
// document.write("Now the vaue of a is " + a + "<br>")
// document.write("The value of --a is "+ (--a)+ "<br>")
// document.write("Now the vaue of a is " + a + "<br>")
// document.write("The value of a-- is "+ (a--)+ "<br>")
// document.write("Now the vaue of a is " + a + "<br>")

// _____________________________________Qno2
// var a = 2
// var b = 1
// var result = --a - --b + ++b + b--;
// console.log(result)
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// result = --a - --b + ++b + b--
//         =  1  -  0  +  1  + 1
//         =        3
// document.write("a = " + a + "<br>")
// document.write("b = " + b + "<br>")
// document.write("result  = " + result + "<br>")
// _____________________________Qno3
// var numberOfCats = prompt("How many cats?")
//  var tooManyCats = numberOfCats + 1;
// var username = prompt("Enter Your Name")
//  alert("! Welcome to our website.");
// _____________________________________Qno4
var num = prompt("Enter a number for multiplication table:", 5);
var num = 5 
document.write(" num x 1 = " + num*1 + "<br/>" )
document.write(" num x 1 = " + num*2 + "<br/>" )
document.write(" num x 1 = " + num*3 + "<br/>" )
document.write(" num x 1 = " + num*4 + "<br/>" )
document.write(" num x 1 = " + num*5 + "<br/>" )
document.write(" num x 1 = " + num*6 + "<br/>" )
document.write(" num x 1 = " + num*7 + "<br/>" )
document.write(" num x 1 = " + num*8 + "<br/>" )
document.write(" num x 1 = " + num*9 + "<br/>" )
document.write(" num x 1 = " + num*10 + "<br/>" )
// ______________________-Qno6
var sub1 = prompt("Enter your sub name : ")
var sub2 = prompt("Enter your sub name : ")
var sub3 = prompt("Enter your sub name : ")
var total = 100
grandtotal =  total*3
var obtsub1 = +prompt("Enter obtained marks for " + sub1)
var obtsub2 = +prompt("Enter obtained marks for " + sub2)
var obtsub3 = +prompt("Enter obtained marks for " + sub3)
totalObtMarks= obtsub1 + obtsub2 + obtsub3
console.log( "obtained marks" +totalObtMarks)
var percentage = totalObtMarks/grandtotal *100 + "%"
console.log("percentage : " + percentage)
document.write("<h1> ")


        






