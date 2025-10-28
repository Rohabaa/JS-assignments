function createaccount(){
    var fname = document.getElementById("fname").value
        var lname = document.getElementById("lname").value
        var pass = document.getElementById("pass").value
        var email = document.getElementById("email").value
        var phone = document.getElementById("mob").value
        var city = document.getElementById("city").value
        console.log(fname,lname);
        
if(fname && lname && email && pass && phone && city){
    Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
document.getElementById("signupBox").style.display = "none";
document.getElementById("postcard").style.display="block"

}else{
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Please fill all fields!",
});
}

}
