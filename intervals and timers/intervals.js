var counter=0;

/* setInterval(my_func, 1000); //название функции или она сама и количество миллисекунд, действие будет выполняться каждый раз через это время

var counter=0;
function my_func() {
    counter++;
    console.log("Counter "+ counter);
} */

/* setInterval(function() {
    counter++;
    console.log("Counter "+ counter);
}, 1000); //то же самое, но функция прописана внутри */

var id=setInterval(my_func, 1000);

var counter=0;
function my_func() {
    counter++;
    console.log("Counter "+ counter);

    if(counter==3) {
        clearInterval(id); //останавливает интервал с именем id
    }
}