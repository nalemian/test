var counter = 0;

function onClickButton(el) {
    counter++;
    //console.log(counter); выводит количество кликов
    el.innerHTML = "Вы нажали на кнопку " + counter; //el - кнопка, с помощью innerHTML внутри самой кнопки появляется нужный текст
    el.style.background = "red"; //при нажатии кнопка становится красной
    el.style.color = "blue";
}

function onInput(el) {
    console.log(el.value);// как только я ввожу текст, он выводится в консоли
}