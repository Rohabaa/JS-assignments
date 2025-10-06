var display = document.getElementById("input")
var num1 = ""
var num2 = ""
var operator = ""
var isSecondnum = false

// jo input feild mein dikhi gi us ka function
function getNumber(input){
     if(!isSecondnum &&( input !== "+" && input !== "-" && input !== "*" && input !== "/")){
        num1 += input
        
     }
      else if(!isSecondnum && (input === "+" || input === "-" || input === "*" || input === "/")){
        operator = input;
        isSecondnum = true;
     }
     if(isSecondnum){
        num2 += input
     }

     display.value += input;
}

function calculate(){
    num1 = Number(num1)
    num2 = Number(num2)

    var result = ""
    if (operator === "+"){
       result =  num1 + num2
    }
    else if (operator === "-"){
       result =  num1 - num2
    }
     else if (operator === "*"){
       result =  num1 * num2
    }
     else if (operator === "/"){
        // if(num2===0) result= "error";
         result = num1 /num2
    }
    display.value = result;
    num1 = result;
    // reset
    num1 = ""
    num2 = ""
    operator = ""
    isSecondNumber = false;
}/// muheera's code

