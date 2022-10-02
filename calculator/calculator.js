function onClickButton(element) {
    var stringContent = document.getElementById("output");
    var buttonContent = element.innerHTML;
    if (stringContent.innerHTML.length <= 180) {
        if (stringContent.innerHTML.length == 1 && buttonContent !== ",") {
            stringContent.innerHTML = buttonContent;
        } else
            stringContent.innerHTML = stringContent.innerHTML + buttonContent;
    }
}