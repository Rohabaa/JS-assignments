// Swal.fire("SweetAlert2 is working!");
// qno4
function car(e){
    e.src="https://i.pinimg.com/originals/d4/3c/11/d43c11d76c7db33af616426597e88833.gif"
}
function caroff(e){
    e.src ="./pic/car.png"
}
// qno5
var count = 0;

    function increase() {
      count = count + 1;
      document.getElementById("counter").innerHTML = count;
    }

    function decrease() {
      count = count - 1;
      document.getElementById("counter").innerHTML = count;
    }