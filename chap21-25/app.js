//  practice
// var sentence = prompt("write any sentences")
// var result = ""
// flag = true
// for (var i=0 ; i<sentence.length; i++){
//     if(flag){
//         result += sentence[i].toUpperCase()
// flag = false
//     }else{
//         result += sentence[i].toLowerCase()
//     }
//     if(sentence [i]=== " "){
//         flag = true
//     }
// }
// console.log(result);
// miss se i wala puchna hai

// var sentence = prompt("write any sentences")
// var arraysen = sentence.split(" ")
// console.log(arraysen);
// var titlecases  = [""]
// for (var i=0 ; i<arraysen.length;i++){
//     var firstchar = arraysen[i].slice(0,1).toUpperCase()
//         var otherchar = arraysen[i].slice(1).toLowerCase()
//         titlecases.push(firstchar+otherchar)
// }
// console.log(titlecases);
// console.log(titlecases.join(" "));


//  --____________________concept of chrAt and inendexof
// var str = "My name is Urwa Umra "
// console.log(str.indexOf("Umra"));
// console.log(str.charAt(19));

// palindrome

// var word = prompt("Enter a word:") // ciiviic
// var isPalindrome = false;

// for (var i = 0; i < (word.length - 1) / 2; i++) {
// console.log(word[i]);
// console.log(word.charAt(word.length-1-i));
//     var startingLetters = word[i]
//     var endingLetters = word.charAt(word.length - 1 - i)

//     if (startingLetters === endingLetters) {
//         isPalindrome = true
//     }
// }
// if (isPalindrome) {
//     console.log("It's a Palindrome!");

// } else {
//     console.log("It's not a Palindrome!");

// }

// var str =  prompt("sentences")
// for (var i=0;i<str.length;i++){ 
//   if(str.slice(i , i+2)==="  "){
//     alert(" no double space")
//     break;
//   }

// }

// var str = prompt("Enter a string:")
// for(var i=0; i<str.length; i++){
//     if(str.slice(i , i+2)==="  "){
//         alert("No double spaces allowed!")
//         break;
//     }
// }

// question no 1 
// var firstname = prompt("write your  firstname ")
// var lstname = prompt("write your last namee")
// var arr =[""]
//  arr.push(firstname+lstname)
// // console.log(arr);
// var fullName = arr.join(" "); // joins with a space

// // Greeting the user
// alert("Hello, " + fullName + "! Welcome!");

// 
//    qno2
// var mobilemodel = prompt("your fav moile models")
// document.write(" My fav phone is " + mobilemodel + "<br>")
// document.write("Lenght of string " + mobilemodel.length)

// qno3---------------
// var str = "Pakistani"
// document.write(" String : " + str +"<br> "+" index of 'n' =  "+ str.indexOf("n") )

// qno5____________
// var str = "Pakistani"
// document.write(" String : " + str +"<br> "+" char at index  '3' =  "+ str.charAt("3") )

// __________qno6
// var firstname = prompt(" write your  firstname ")
// var lstname = prompt("write your last namee")
// var fullname = firstname+ lstname
// alert( " hellow "+fullname);


// miss se samjhana
// _________qno7
// Original word
// var city = "Hyderabad";

// // Replacing "Hyder" with "Islam"
// var newCity = city.replace("Hyder", "Islam");

// // Displaying result in browser
// document.write("City: " + city + "<br>");
// document.write("After replacement: " + newCity);

// ______________qno8
// var message = "“Ali and Sami are best friends. They play cricket and football together.”;"
// var newmess = message.replaceAll("and","&")
// document.write(  newmess)
// var message = "Ali and Sami are best friends. They play cricket and football together.";

// // Replace all occurrences of "and" with "&"
// var newMessage = message.split("and").join("&");

// // Display result
// document.write("Original message: " + message + "<br>");
// document.write("After replacement: " + newMessage);

// _______________qno9
// var str = "472"
// var number = Number(str)
// document.write(" String : " + str + "<b>")
// document.write( "<br>"+" Number : " + number)

// qno10
// var anyword = prompt("write any word")
// anyword =  anyword.toUpperCase()
// console.log(anyword);

// qno11
// var sent = prompt("write anything")
// var arrsent = sent.split(" ")
// var result = [""]
// // console.log(sent);
// for (var i = 0; i < arrsent.length; i++) {
//     var firstword = arrsent[i].slice(0, 1).toUpperCase()
//     var other = arrsent[i].slice(1).toLowerCase()
//     result.push(firstword + other)
// }
// console.log(arrsent);
// console.log(result.join(" "));

// qno12
// var numb = 472.5
// var string = numb.toString()
// document.write(" number : " + numb + "<b>")
// document.write( "<br>"+" string : " + string)


    // var num = 35.36;
    // // Convert number to string
    // var str = num.toString();
    // // Remove the dot using replace method
    // var result = str.replace(".", "");
    // // Display in browser
    // document.write("Original Number: " + num + "<br>");
    // document.write("Result: " + result);
  
// qno`13
// var username = prompt(" enter a username")
//         flag = true
//         for (var i = 0;i<username.length;i++ ){
//             var char = username[i]
//             if(char==="@" || char === "!"|| char==="." || char ==","){
//                 flag = false
//             }
//         }
//        if (flag == false) {
//       alert("Please enter a valid username without @ . , !");
//     } else {
//       alert("Your username is: " + username);
//     }


    