function onClickButton(element) {
    var stringContent = document.getElementById("output");
    var buttonContent = element.innerHTML;
    if (stringContent.innerHTML.length <= 180) {
        if (stringContent.innerHTML.length == 1 && buttonContent !== ",") {
            stringContent.innerHTML = buttonContent;
        } else
            stringContent.innerHTML = stringContent.innerHTML + buttonContent;
    }
}

var plus =  {
 "operation": "+",
 "apply": function (num1,num2){
  return num1 + num2;
 }
}
var minus =  {
    "operation": "+",
    "apply": function (num1,num2){
     return num1 - num2;
    }
   }
var multiply =  {
 "operation": "+",
 "apply": function (num1,num2){
  return num1 * num2;
 }
}
var divide =  {
    "operation": "+",
    "apply": function (num1,num2){
     return num1 / num2;
    }
   }

let oper=undefined;
let number1=undefined;
let arr=[plus, minus, multiply, divide];
function operations(model) {
    oper=model;
    number1=document.getElementById("output").innerHTML;
}

function equal() {
    number2=document.getElementById("output").innerHTML;
    for(let i=0; i<4; i++) {
        if(oper.innerHTML == arr[i].operation)
            arr[i].apply(number1, number2)
    }
}