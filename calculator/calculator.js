var counter=0;
function onClickButton(element) {
    if(counter<=180) {
        var text=document.getElementById("output");
    if(counter==0 && element.innerHTML!==",") {
        text.innerHTML= element.innerHTML
    } else
    text.innerHTML = text.innerHTML+element.innerHTML;
    counter++;
    }
}