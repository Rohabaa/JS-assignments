// qno1
// var itemsArray = [ {name:"juice",price:"50", quantity:"3"}, 
//     {name:"cookie",price:"30", quantity:"9"},
//      {name:"shirt",price:"880", quantity:"1"}, 
//      {name:"pen",price:"100", quantity:"2"}];
//      var grandtotal = 0
// var grandTotal = 0;

// for (var i = 0; i < itemsArray.length; i++) {
//   var itemTotal = itemsArray[i].price * itemsArray[i].quantity;

//   console.log(itemsArray[i].name + " total price: " + itemTotal);

//   grandTotal = grandTotal + itemTotal;
// }

// console.log("All items total price: " + grandTotal);
// qno2
// let details = {
//     namee: "ayesha",
//     gender : "female",
//     age: "23",
//     email :"ayesha@12",
//     password: " 2345",
//     city: "Karachi",
//     country: "Pakistan"
// }
// console.log(details.age);
// console.log(firstname in details);

// qno3
// function Person(name, email, age, country) {
//     this.name = name,
//         this.email = email,
//         this.age = age,
//         this.country = country
// }
// let person1 = new Person("ayesha", "ayesha@jj", "23", "pakistan")
// let person2 = new Person("ayna", "ayna@jj", "23", "pakistan")

// let person3 = new Person("waniya", "waniya@jj", "23", "pakistan")
// console.log(person1);
// console.log(person2);
// qno4
// function Details(name,address,gender,country,education,profession){
//     this.name= name,
//      this.address = address,
//      this.gender = gender,
//      this.country=country,
//      this.education= education,
//      this.profession = profession
// }
// let people = []
// function saveRecord(){
//      var name = document.getElementById("name").value;
//   var address = document.getElementById("address").value;
//   var education = document.getElementById("education").value;
//   var profession = document.getElementById("profession").value;
// //   forgender
//  var gender;
//   var genderRadios = document.getElementsByName("gender");
//   for (var i = 0; i < genderRadios.length; i++) {
//     if (genderRadios[i].checked) {
//       gender = genderRadios[i].value;
//     }
//   }

//   var person = new Details(name, gender, address, education, profession);

//   people.push(person);

//   console.log(people)
// }
