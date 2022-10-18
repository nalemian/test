function onClickButton(element) {
    var stringContent = document.getElementById("output");
    var buttonContent = element.innerHTML;
    if (stringContent.innerHTML.length <= 180) {
        if (((isNaN(Number(stringContent.innerHTML))) && (stringContent.innerHTML.indexOf(',')==-1)) || (stringContent.innerHTML == "0" && buttonContent !== ",")) {
            stringContent.innerHTML = buttonContent;
        } else {
            stringContent.innerHTML = stringContent.innerHTML + buttonContent;
        }
}
}

function reset() {
    document.getElementById("output").innerHTML="0";
}

let operation=undefined;
let number1=undefined;

function operations(oper) {
    value=document.getElementById("output");
    number1=value.innerHTML;
    operation=oper;
    value.innerHTML=oper;
}

 let map = new Map();
 map.set('+', {
    "apply": function (num1,num2){
     return num1 + num2;
    }
   }) .set('-', {
    "apply": function (num1,num2){
     return num1 - num2;
    }
   }) .set('*', {
    "apply": function (num1,num2){
     return num1 * num2;
    }
   }) .set('/', {
    "apply": function (num1,num2){
     return num1 / num2;
    }
   });

function equal() {
    let total=document.getElementById("output");
    total.innerHTML=map.get(operation).apply(Number(number1), Number(total.innerHTML));
}