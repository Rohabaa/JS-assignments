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

//  function average(chem,bio,phys){
//     var avg = (chem+bio+phys)/3
//     return  avg;
// }
 
// function percentage(chem,bio,phys,totalmarks){
//     var obtained = chem+ bio+ phys
//     var total = totalmarks * 3;
//     var percentage =   (obtained / total) * 100;
//     return percentage;
// }
 
// function main(){

// var chem = prompt("eneter marks of chem")
// var bio = prompt("eneter marks of bio")
// var phys = prompt("eneter marks of phys")
//  var avg = average(chem,bio,phys)
//  var perc = percentage(chem,bio,phys,100)
// console.log(avg.toFixed(2));
// console.log(perc.toFixed(2));

// }
// main()

// Function to calculate average
// function average(m1, m2, m3) {
//     return (m1 + m2 + m3) / 3;
//   }
  
//   // Function to calculate percentage
//   function percentage(m1, m2, m3, totalMarksPerSubject) {
//     let obtained = m1 + m2 + m3;
//     let total = totalMarksPerSubject * 3;
//     return (obtained / total) * 100;
//   }
  
//   // Main function
//   function mainFunction() {
//     let m1 = +prompt("Enter marks of subject 1:");
//     let m2 = +prompt("Enter marks of subject 2:");
//     let m3 = +prompt("Enter marks of subject 3:");
  
//     // Assuming each subject is out of 100 marks
//     let avg = average(m1, m2, m3);
//     let perc = percentage(m1, m2, m3, 100);
  
//     document.write(`Average Marks: ${avg.toFixed(2)}<br>`);
//     document.write(`Percentage: ${perc.toFixed(2)}%`);
//   }
  
//   // Call the main function
//   mainFunction();
  