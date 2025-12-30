// function clickHandler(color){
//     //   document.body.style.backgroundColor = `${color}`
//     return function(){
//         document.body.style.backgroundColor = `${color}`
//     }
// }
// document.getElementById("dark").onclick = clickHandler("black")
// document.getElementById("light").onclick = clickHandler("pink")

// function myFunc() {
//   let myname = "Umra";
//   function innerFunc() {
//     console.log(myname);
//     let fatherName = "Badar"
//   }
//   innerFunc();
//   console.log(fatherName);

// }
// myFunc();

// console.log(myname);
//________________________Spread Operator --> Unpacking

//Copying an array/ Obj (Shallow Copy)
// var arr = [1, 2, 3];
// var cloneArr = [...arr, 4, 5];
// console.log(cloneArr, ...arr);
// Merging
// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// var mergedArr = [...arr1, false, ...arr2];
// // console.log(mergedArr);
// function sum1(...nums) {
//   console.log(nums);
//   let result = 0
//   for(let num of nums){
//     result += num
//   }
//  return result
// }
// console.log(sum1(2, 3,5,6,5));
// let arr1 = [1,[2,3],4,5,6]
// // console.log(arr1[5]);
// let [a,[b,c], ...rest] =arr1
// console.log(a,b,c,rest);
// let obj = {
//     fname : "Umra",
//     qualification : {
//         academic: "BSSE",
//         courses : "WMA"
//     },
//     city : "Karachi",
//     country : "Pakistan",
    
// }
// // console.log(obj.fname);

// // // Default parameter
// function product(a=0,b =0){
//     console.log(a*b);
    
// }
// product(3,3) //9
// product() //15
// arrow func
// let greet = user => "Welcome"+ " " +user
// let greet1 = () => "Welcome"+ " " +"Hard cocded name"

// console.log(greet("Umra"));
// console.log(greet1());

// let square  = num => num*num
// console.log(square(45));


// let subtract = (num1, num2)=> {
//    let result =num1-num2
//    return result
// }
// console.log(subtract(7,4));

 
// Enhanced Object literals

// let keyName = "Fname";
// let accessToken = "sjadb784r3nr2387"
// let data = {
//     [keyName] : "Sameen",
//     fullName(){
//         console.log("Sameen");     
//     },
//     accessToken 
// }
// console.log(data);
// classes
// class AdmissionForm {
//     //initialized by new keyword
//     //jn bh object bny ga ye call hojye ga
//     constructor(name,grade){
//         this.name = name
//         this.appliedGrade = grade
//     }
//     // constructor(){
//     //     console.log("constructor called ");    
//     // }
//     cancel(){
//         console.log(`This form is cancelled from ${this.name} for ${this.appliedGrade}`);     
//     }
//     submit(){
//         console.log("This form is submitted from "+ this.name +" "+this.appliedGrade);     
//     }
//     // fill(name, grade){
//     //     this.name = name
//     //     this.appliedGrade = grade
//     // }
// }

// let umra = new AdmissionForm("Umra", 8)
// let sara = new AdmissionForm("Sara", 6)
// // console.log(umra);
// // umra.fill("Umra", 9)
// umra.cancel()
// // sara.fill("Sara", 5)
// sara.submit()
// let arr = [1,2,3,4,5]
// let double = arr.map( function(num){
//     return num*2
// }
// )
// console.log(double);
// let plus = arr.map(function(plusnum){
//     return plusnum+6
// }

// )
// console.log(plus);
//  let minus = arr.map(minusnum => minusnum - 2 )
//  console.log(minus);
//  let fruits = ["banana","strawberry","apple"]
//  let upper = fruits.map(frt=> frt.toLowerCase())
//  console.log(upper);
 
// for each
// let arr = [1,2,3,4,5]
// arr.forEach(num => {
//     console.log(num*2);
    
// })
// let arr = [1,2,3,4,5,]
// let arr1 = arr.forEach(num=>{
//     return num*2
// })
// console.log(arr1);
// filter
// let arr =[1,2,3,4,5,89,90,15]
// let big= arr.filter(num=> num>10)
// console.log(big);
// let arr = [
//     {name:"rohaba", marks:40},
//     {name:"sameen",marks:70},
//     {name:"fiza",marks:80}
// ]
// let passed = arr.filter(pass=> pass.marks>50)
// console.log(passed);
// find
// let arr =[1,3,4,5,6,7]
// let res = arr.find(num=>num>5)
// console.log(res);
// let students = [
//   { name: "Ali", marks: 40 },
//   { name: "Sara", marks: 80 },
//   { name: "Zoya", marks: 90 }
// ];

// // Pehla pass student
// let passStudent = students.find(s => s.marks >= 50);
// console.log(passStudent);
// // { name: "Sara", marks: 80 }


 



