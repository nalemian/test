let bool=false;
let counter=0;
function onClickButton(element) {
    var stringContent = document.getElementById("output");
    var buttonContent = element.innerHTML;
    if(bool) {
        document.getElementById('top').innerHTML=stringContent.innerHTML; 
        bool=false;
    }
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
    bool=false;
    let res=document.getElementById('output');
    document.getElementById('top').innerHTML=res.innerHTML;
    res.innerHTML="0";
}

function del() {
    bool=false;
    let res=document.getElementById('output');
    document.getElementById('top').innerHTML=res.innerHTML;
    if(res.innerHTML.length==1) {
        res.innerHTML='0';
    } else {
        res.innerHTML=res.innerHTML.substr(0, res.innerHTML.length-1);
    }
}

let operation=undefined;
let number1=undefined;

function operations(oper) {
    bool=false;
    value=document.getElementById("output");
    res=document.getElementById('top');
    if(counter>0) {
        operEqual();
        number1=res.innerHTML;
    } else {
    res.innerHTML=value.innerHTML;
    number1=value.innerHTML;
    }
    operation=oper;
    value.innerHTML=oper;
    counter++;
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
    counter=0;
    let total=document.getElementById("output");
    if(!isNaN(number1)) {
        res=map.get(operation).apply(Number(number1), Number(total.innerHTML));
        document.getElementById('output').innerHTML=res;
    bool=true;
} 
    else {total.innerHTML='0'};
}
function operEqual () {
    total=document.getElementById("output");
    document.getElementById('top').innerHTML=map.get(operation).apply(Number(number1), Number(total.innerHTML));
}