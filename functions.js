var data=confirm("Вы уверены?"); //confirm - всплывающее окно с вариантами ответа ок и отмена
if(data) 
    alert("Вы молодец!");
else
    alert(":(");

var data=prompt("Скажите, сколько вам лет, 18") //всплывающее окно с подсказочным текстом, здесь - 20
console.log(data); //вывод возраста

var person=null;
if(confirm("Вы точно уверены?")) {
    person=prompt("Введите ваше имя");
    alert("Привет, "+ person);
} else 
    alert("Вы нажали на 'Отмена'");