function onClickButton(element) {
    var stringContent = document.getElementById("output");
    var buttonContent = element.innerHTML;
    if (stringContent.innerHTML.length <= 180) {
        if ((isNaN(Number(stringContent.innerHTML)))==true || (stringContent.innerHTML == "0" && buttonContent !== ",")) {
            stringContent.innerHTML = buttonContent;
        } else {
            stringContent.innerHTML = stringContent.innerHTML + buttonContent;
        }
}
}

function reset() {
    document.getElementById("output").innerHTML="0";
}

let oper=undefined;
let number1=undefined;

function operations(oper) {
    value=document.getElementById("output");
    number1=value.innerHTML;
    value.innerHTML=oper;
}
 let Hashmap=new Map([
    [1,  plus =  {
        "operation": "+",
        "apply": function (num1,num2){
         return num1 + num2;
        }
       }],
    [2, minus =  {
        "operation": "-",
        "apply": function (num1,num2){
         return num1 - num2;
        }
       }],
    [3, multiply =  {
        "operation": "*",
        "apply": function (num1,num2){
         return num1 * num2;
        }
       }],
    [4, divide =  {
        "operation": "/",
        "apply": function (num1,num2){
         return num1 / num2;
        }
       }]
 ]) 
function equal() {
    for(let i=1; i<=Hashmap.size; i++) {
        if(oper == Hashmap.get(i).operation)
        document.getElementById("output").innerHTML=Hashmap.get(i).apply(Number(number1), Number(document.getElementById("output").innerHTML))
    }
}