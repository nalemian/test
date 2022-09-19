var counter=0;
function onClickButton(element) {
    var text=document.getElementById("mainButton");
    if(counter==0 && element.innerHTML!==",") {
        text.innerHTML= element.innerHTML
    } else
    text.innerHTML = text.innerHTML+element.innerHTML;
    counter++;
}