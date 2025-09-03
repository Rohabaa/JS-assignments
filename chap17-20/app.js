// __________________Qno1
// var multiArray = [[]]
// multiArray.push([1, 2, 3]);  
// multiArray.push([4, 5, 6]);  

// console.log(multiArray); 
// Output: [ [1, 2, 3], [4, 5, 6] ]
// ______________Qno2
// var matrix = [
//     [0,1,2,3,]
//     [1,0,1,2]
//     [2,1,0,1]
// ]
// console.log(matrix[0][2]);
// console.log(matrix[1][3]);
// console.log(matrix[2][1]);
// _____________________Qno3

// for (var i=1; i<=10; i++){
//  document.write([i] + "<br>");
    
// }
// __________________Qno4
// var number = +prompt("enter your  multiplication  number ")
// var numberlenght = +prompt("enter the lenghth of multiplication ")
// for(var i=1; i<numberlenght; i++){
//     document.write(number + "x" + i + "=" + (number * i)  +"<br>")

// }
// _________________qno5
//  var fruits = ["apple", "banana", "mango", "orange","strawberry"]
//  for (var i = 0; i < fruits.length; i++) {
//   document.write(fruits[i] +"<br>");
// }
// Array of fruits
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// // Print items with their index
// for (var i = 0; i < fruits.length; i++) {
//   document.write("Element at index " + i + " is " + fruits[i] +"<br>");
// }

// ______________Qno7
//  var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
// var items = prompt("welcome to ABC bakery What do you want to order sir,mam ")
// flag = false
// for(var i=0; i<arr.length; i++){
//     if(arr[i].toLocaleLowerCase()===items.toLocaleLowerCase()){
//        document.write(" your " + items  +" is available" + " at " + [i] +" index"
//        )
//        flag = true
//     }
// }
// if(flag  ===false){
//     document .write("your "+ items + " not available")
// }
// Qno8
// var arr = [24, 53, 78, 91, 12]
// var max = arr[2]
// for(var i=0; i<arr.length; i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log(max);
// Qno9
// var arr = [24, 53, 78, 91, 12]
// var min = arr[0]
// for(var i=0; i<arr.length; i++){
//     if(arr[i]<min){
//         min = arr[i]
//     }
// }
// console.log(min);