var counter=0;
function onClickButton(element) {
    if(counter<=8) {
        var text=document.getElementById("mainButton");
    if(counter==0 && element.innerHTML!==",") {
        text.innerHTML= element.innerHTML
    } else
    text.innerHTML = text.innerHTML+element.innerHTML;
    counter++;
    }
}