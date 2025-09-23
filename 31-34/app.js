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
 var date = 