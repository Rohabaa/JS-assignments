// question1
// var date = new Date()
// console.log(date);


// qno2
// var date = new Date()
// var arr = ["jan","feb","march","april","may ","june","july","agust","september","oct","nov","dec"+ "dec"]
// var month = (date.getMonth())
// // console.log(month);
// alert( "current month : " + arr[month])

// qno3
// var date = new Date()
// var arr =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
// var day = (date.getDay())
// // console.log(month);
// alert( "Today is   : " + arr[day])

// qno4
// var date = new Date()
// var days = date.getDay()
// // console.log(days);
// if(days===0 || days=== 6){
//     alert("Its funday")
// }else{
//     alert("normal day")
// }
// chat gpt
// var today = new Date();
// var day = today.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6

// if (day === 0 || day === 6) {
//   alert("It's Fun day");
// } else {
//   alert("It's not Fun day");
// }
// qno5
// var date = new Date()
// if(date<16){
//     alert("“First fifteen days of the month”")
// }else{
//     alert("“Last days of the month”.")
// }

// qno6

// let date = Date.now()
// // console.log(date);
// var curentdate = new Date()
// // console.log(curentdate);
// var formin = Math.floor(curentdate.getTime()/(1000*60))
// // console.log(formin);
// document.write("curentdate : "+ curentdate)
// document.write( "<br>" +"elapsed milisec since midnight, Jan. 1, 1970 : " + date)

// document.write( "<br>" + "elapsed min  since midnight, Jan. 1, 1970  : "+ formin)

// qno7
// var date =  new Date()
// // console.log(date);
// var hours = date.getHours()
// // var waqt = date.getTime()
// // // console.log(date.getHours());
// if(hours<12){
//     alert("its am")
// }else{
//     alert("its pm")
// }

// qno8
// var date = new Date("31 dec 2025")
// document.write("later : "+ date)

// qno9
// var ramzan = new Date("June 18, 2015")
// // console.log(ramzan);
// var today = new Date()
// // console.log(today);
// var diff = today.getTime() - ramzan.getTime()
//  var pastdays = Math.floor(diff/(1000*60*60*24))
//  document.write(pastdays + " have been past since 1st ramadan , 2015.")
//  qno10
//  var date = new Date("5 march 2015")
//  var firstdate = new Date("1 jan 2015")
// //  console.log(date);
// //  console.log(firstdate);
// var result = date.getTime() - firstdate.getTime()
// // console.log(result);
// var seconds = result /(1000 )
// console.log(seconds);


//     // Reference date (Unix epoch: Jan 1, 1970, 00:00:00 UTC)
//     var referenceDate = new Date("January 1, 1970 00:00:00 GMT");

//     // Beginning of 2015
//     var start2015 = new Date("January 1, 2015 00:00:00 GMT");

//     // Difference in milliseconds
//     var diffMilliseconds = start2015.getTime() - referenceDate.getTime();

//     // Convert to seconds
//     var diffSeconds = diffMilliseconds / 1000;
// console.log(diffSeconds);

//     // Display in browser
//     // document.write("Seconds elapsed between reference date and beginning of 2015: " + diffSeconds);

 
//  qno11
// var date = new Date ()
// document.write("current date " + date + "<br>"+"<br>")
// var hours = date.getHours()
// document.write("current hours "+ hours + "<br> <br>")
// date.setHours(hours+1)
// document.write("1 hour ahead "+ date )

// qno12
// var date = new Date ()
// alert("current date "+ date)
// var year = date.getFullYear()
// // console.log(year);
// date.setFullYear(year -100)
// console.log(date);

// qno13
// var age =prompt("enter your age")
// var date =new Date().getFullYear()
// // console.log(date);
// var result = date-age
// console.log(result);

// qno14
// var date = new Date()
// customerName = "ABC"
// var currentmonth = date.getMonth()
// var units = 370
// var chargesPerUnit = 15.75
// var netAmountPayable = (units * chargesPerUnit).toFixed(2);
//    var latePaymentSurcharge = 500.00;
//       var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);
// document.write("<b>Customer Name:</b> " + customerName + "<br>");
//     document.write("<b>Current Month:</b> " + currentmonth + "<br>");
//     document.write("<b>Number of Units:</b> " + units + "<br>");
//     document.write("<b>Charges per Unit:</b> " + Math.floor(chargesPerUnit.toFixed(2)) + "<br><br>");

//     document.write("<b>Net Amount Payable (within Due Date):</b> " + Math.floor(netAmountPayable) + "<br>");
//     document.write("<b>Late Payment Surcharge:</b> " + Math.floor(latePaymentSurcharge.toFixed(2)) + "<br>");
//     document.write("<b>Gross Amount Payable (after Due Date):</b> " + Math.floor(grossAmountPayable) + "<br>");