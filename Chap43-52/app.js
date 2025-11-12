
// qno1
// var username = document.getElementById("username")
// var email = document.getElementById("email")
// var pass = document.getElementById("pass")
// function submit(){
//     console.log (username.value + "" + email.value + "" + pass.value)
//     ;
   
// }-
// qno2
// function expandtext(){
//     var short = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptate aliquid. "

//     var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur sit, praesentium corrupti iure tempora officiis quod temporibus dolores, atque voluptatem doloremque. Aliquam et ipsa quod pariatur praesentium, quibusdam labore."
//     if(link.innerHTML==="See More"){
//         link.innerHTML = "See Less"
//         para.innerHTML = text
//     }else{
//         link.innerHTML="See More"
//         para.innerHTML = short
//     }
// }
// qno3
// function editbut(){
// var form = document.getElementsByTagName('form')[0]
// var table = document.getElementsByTagName('table')[0]
//  form.style.display = "block"
//  table.style.display = "none"
//  document.getElementById('name').focus()


// }
let currentRow = null; // jisme edit ho raha hai, usey store karne ke liye

function editbut(button){
  // jis row ka button click hua
  currentRow = button.parentNode.parentNode;
    console.log(currentRow);

  var child = currentRow.getElementsByTagName('td')
  console.log(child);
   var form = document.getElementsByTagName('form')[0]
 form.style.display = "block"
 document.getElementById('name').focus()

document.getElementById("name").value = child[0].innerHTML;
  document.getElementById("age").value = child[1].innerHTML;
  document.getElementById("class").value = child[2].innerHTML;
  document.getElementById("email").value = child[3].innerHTML;
   document.getElementById('name').focus()

}
function saveEdit(){
if(currentRow){
        var child = document.getElementsByTagName('td')
    console.log(child);
    child[0].innerHTML = document.getElementById('name').value
    child[1].innerHTML = document.getElementById('age').value
    child[2].innerHTML = document.getElementById('class').value

    child[3].innerHTML = document.getElementById('email').value
  document.getElementsByTagName('form')[0].style.display="none"  

}
}
function deleteRow(button){
  button.parentNode.parentNode.remove();
}