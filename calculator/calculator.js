function onClickButton(element) {
    var stringContent = document.getElementById("output");
    var buttonContent = element.innerHTML;
    if (stringContent.innerHTML.length <= 180) {
        if(buttonContent=='.' && stringContent.innerHTML.indexOf('.')!==-1) {} else {
            if((isNaN(Number(stringContent.innerHTML))) && buttonContent=='.') {
                stringContent.innerHTML='0.'; }
        else {
             if (((isNaN(Number(stringContent.innerHTML))) && (stringContent.innerHTML.indexOf('.')==-1)) || (stringContent.innerHTML == "0" && buttonContent !== ".")) {
                    stringContent.innerHTML = buttonContent;
                }
            else {
                stringContent.innerHTML = stringContent.innerHTML + buttonContent;
            }
        }
    }
    }
}

function reset() {
    document.getElementById("output").innerHTML="0";
}

function del() {
    let res=document.getElementById('output');
    if(res.innerHTML.length==1) {
        res.innerHTML='0';
    } else {
        res.innerHTML=res.innerHTML.substr(0, res.innerHTML.length-1);
    }
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
    if(!isNaN(number1)) {
    total.innerHTML=map.get(operation).apply(Number(number1), Number(total.innerHTML)); } 
    else {total.innerHTML='0'};
}