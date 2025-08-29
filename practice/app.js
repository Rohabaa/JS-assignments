// var arr = ["america","japan","pakistan","london","korea","france"]
// var countryname = prompt("write you country name")
// flag = false
// for(var i=0; i<arr.length;i++){
//     console.log("welcome to "+ arr[i]);

// }
// for(var i=0; i<arr.length;i++){
//    if(arr[i]==="pakistan" ){
//     console.log("country found");

//    }else{
//     console.log("not found");

//    }
// }
// for (var i=0; i<arr.length;i++){
// if (arr[i].toLocaleLowerCase()=== countryname.toLocaleLowerCase()){
//     console.log("found country");
//     flag = true
//     break;
// }

// }
// if(flag===false){
//     console.log("not found");

// }
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
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
// nested loop
// for (var i = 0; i < 10; i++) {
//   // console.log(i);
//   for (var j = 0; j < 20; j++) {
//     console.log(i, j);
//   }
// }
// _______2D
// var arr= [
//     ["rohab","majid"]
//     ["fabiha","majid"]
// ];
// for(var i=0; i<arr.length ;i++){
//     // console.log(arr[i]);
//     for(var j=0; j<arr[i].length ;j++){
//         console.log(arr[i][j]);
//     }
// }
// )_______for 3D
// var arr = [
//     [["rohaba","majid"]]
//     [["fabiha","majid"]]
//     [["maham","majid"]]
// ]
// for(var i=0; i<arr.length ;i++){
//         console.log(arr[i]);
//         for(var j=0; j<arr[i].length ;j++){
//             console.log(arr[i][j]);
//         }
//         for(var k=0; k<arr[i][j].length ;k++){
//             console.log(arr[i][j][k]);
//         }
//     }
// ____________________________STAR PATTERN

// var rows = +prompt("how many rows u want")
// var column = +prompt("how many column u want")
// var character = prompt("what type of character do you want ")
// for(var i=1; i<=rows ; i++){
//     for(var j=1 ; j<=column ; j++){
//         document.write(character)
//     }
//     document.write("<br>")
// }
// _______________Triangle

// var rows = +prompt("how many rows u want")
// for(var i=1; i<=rows ; i++){
//     for(var j=1 ; j<=i ; j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }
// _________________reverse triangle

// var rows = +prompt("how many rows u want")
// for(var i=rows; i>=1 ; i--){
//     for(var j=i ; j>=1 ; j--){
//         document.write("*")
//     }
//     document.write("<br>")
// }
// ________________________ with space

// var rows = +prompt("how many rows u want")
// for(var i=1; i<=rows ; i++){
//     for(var k=0; k<=rows-i ; k++){
//         document.write("&nbsp;&nbsp;")
//     }
//     for(var j=1 ; j<=i ; j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }
// var rows = +prompt("how many rows u want")
// for(var i=1; i<=rows ; i++){
//     for(var k=0; k<=rows-i ; k++){
//         document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
//     }
//     for(var j=1 ; j<=i ; j++){
//         document.write("😘")
//     }
//     for(var l=2 ; l<=i ; l++){
//         document.write("😘")
//     }
//     document.write("<br>")
// }
