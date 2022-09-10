function checkForm(el) {
    var name = el.name.value;
    //или то же самое будет с document.getElementById('name').value
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;
    //console.log(state+" - " + pass + " - "+ repass); пол, пароль и проверка пароля
    var fail = "";
    if (name == "" || pass == "" || state == "")
        fail = "Заполните все поля"; //если поля не заполнили
    else if (name.length <= 1 || name.length > 50)
        fail = "Введите корректное имя"; // длина имени
    else if (pass != repass)
        fail = "Пароли должны совпадать"; //если второй пароль  не совпал с первым
    else if (pass.split("&").length > 1)
        fail = "Некорректный пароль" //split разбивает пароль по символу &, если будет один &, длина будет 2

    if (fail != "")
        document.getElementById("error").innerHTML = fail; //обращаюсь к div и ввожу во внутр. текст текст ошибки
    else {
        alert("Все данные корректно заполнены");
        window.location = "https://ru.wikipedia.org/wiki/Кошка" //если все заполнено правильно, переадресуется на страницу википедии
    }
    return false; //если введу true, то страница просто перезагрузится еще до переадресации
}