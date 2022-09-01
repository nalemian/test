var counter=0;
function onClickButton(el) {
    counter++;
    el.ineerHTML= "Вы нажали на кнопку: "+ counter;
    el.style.background="red";
    el.style.color="blue";
}
function onInput(el) {
    if(el.value=="Hello") 
    alert("Тебе тоже");
    console.log(el.value);
}